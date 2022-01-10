import Sidebar from "./inc/sidebar";
import GlobalControls from "./inc/global-controls";
import widgets from "./widgets";
class Customizer extends Sidebar {

    constructor() {
        super()
        window.addEventListener('DOMContentLoaded', this.init.bind(this) );
    }

    /**
     * 
     * 
     * Create controls for sidebar
     * @class GlobalControls returns the global controls settings
     * 
     */ 
    createControls(type) {
        const settings = type === 'global-settings' ? this.globalControls : widgets[type];
        this.createControlMarkup( settings, type )
    }

    /**
     * 
     * 
     * Create Widgets Markup for sidebar 
     * 
     */ 

    createWidget() {
        this.createWidgetMarkup()
    }

    /**
     * 
     * on Save Changes 
     * 
     */ 
    getStyles() {
        const promise = new Promise ((resolve, reject) => {
            const container = jQuery('.popup-widget-element');
            let css = jQuery('#all-style').text();
                css += jQuery('#stylesheet-global-settings').text();
            container.each( (index, item) => {
                css += jQuery(`#stylesheet-${item.id}`).text();
            })
            resolve(css);
        })
        return promise;
    }

    onSaveChanges() {
        const self = this;
        const btn = jQuery('.save-changes-btn');
        btn.on( 'click', function() {
            btn.addClass('is-loading');
            
            const markup = jQuery('#popup').parent().html();
            self.getStyles().then( response => {
                const data = {
                    css: response,
                    html: markup,
                    type: 'content'
                }

                jQuery.ajax({
                    type: "POST",
                    data: data,
                    url: window.location.href + 'storage/index.php',
                    success: function(data){
                        setTimeout(()=>{
                            btn.removeClass('is-loading');
                        },1000)
                    }
                });
            })
        })
    }
    
    /**
     * 
     * 
     * Generate stylesheet 
     * 
     */ 
    generateStyleSheet( id = 'global-settings', isGlobal = true, css = '' ) {

        if( jQuery(`#stylesheet-${id}`).length > 0 ) {
            return false;
        }

        if( isGlobal ) {
            jQuery('head').append(`<style id="stylesheet-${id}">` + this.globalControls.css + '</style>');
        }
        else {
            jQuery('head').append(`<style id="stylesheet-${id}">` + css + '</style>');
        }
    }

    /**
     * 
     * 
     * Create widget markup 
     * 
     */ 
    onDropWidget( widget ) {

        const controls = widget.controls;
        if( widget.render ) {
            const markup = widget.render();
            let css = ''; 
            jQuery('#popup form > .wrapper').append(markup)
            jQuery('.popup-widget-element').draggable({ containment: 'parent' })

            Object.values( controls ).forEach( control => {
                if( control.selector ) {
                    if( control.selector.call(control) ) {
                        css += control.prefix + control.selector.call(control) + '\n\n';
                    }
                }
            })

            this.generateStyleSheet( `${widget.sheet}`, false, css )
        }
    }


    /**
     * 
     * 
     * Drop widget 
     * 
     */ 
    dropWidget( self ) {
        // make widget panel element dragable
        jQuery('.popup-widget').draggable({
            helper: 'clone'
        })

        // make preview panel widget draggable
        const container = jQuery(document).find("#popup form > .wrapper");
        container.droppable({
            accept: '.popup-widget', 
            drop: function( event, ui ) {
                const type = ui.draggable.data('type');
                self.onDropWidget( widgets[type] )
            }
        });
    }

    /**
     * 
     * Remove Widget 
     * 
     */ 
    removeWidget( ) {
        jQuery(document).on('click', '.remove-btn', function(ev){
            ev.preventDefault();
            ev.stopPropagation();
            jQuery(this).parent().remove();
        })
    }

    /**
     * 
     * 
     * Load Saved markup 
     * 
     */ 
    loadSavedMarkup() {
         const self = this;
         fetch( window.location.href + 'storage/read.php?file=markup.txt')
        .then( response => response.text())
        .then( response => {

            const data = {
                html: response
            }

            fetch( window.location.href + 'storage/read.php?file=style.txt')
            .then( response => response.text())
            .then( response => {
                data.css = response; 
                jQuery('#popup').parent().html(data.html);
                jQuery('head').prepend(`<style id="all-style">` + data.css + '</style>');
                self.dropWidget( self );
                jQuery('.popup-widget-element').draggable({ containment: 'parent' })
            })
        })
    }

    /**
     * 
     * 
     * Initalize customizer script
     * 
     */ 
    init() {

        const self = this;
        self.globalControls = new GlobalControls();
        self.sidebarInit();
        self.loadSavedMarkup();
        self.createWidget();
        self.onSaveChanges();
        self.generateStyleSheet();
        self.dropWidget( self );
        self.removeWidget( self );

        // change sidebar markup based on what settings user want 
        jQuery(document).on('click', '.page-settings, .all-widget, .popup-widget-element', function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            
            const type = this.dataset.type;
            switch( type ) {
                case 'global-settings': // when global settings button clicked
                self.createControls.call(self, type);
                break;
                
                case 'all-widgets': // when all widgets button clicked
                self.createWidget.call(self, type);
                break;
                
                case 'widget': // when individual widget is clicked
                self.createControls.call(self, this.id);
                break;
            }

            // update scrollbar 
            self.sidebarSettings.ps.update()
            self.dropWidget( self );
            self.removeWidget( self );

        })
    }

}

new Customizer();