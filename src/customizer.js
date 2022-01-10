import Sidebar from "./inc/sidebar";
import GlobalControls from "./inc/global-controls";
import widgets from "./widgets";
import uid from "./inc/uid";

class Customizer extends Sidebar {
    popupWrapper = '';
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
            const container = jQuery('.popup-widget-element, #popup');
            let css = '';
            container.each( (index, item) => {
                const _uid = item.dataset.uid
                const styleSheet = _uid == '1' ? `#global-settings-1` : `#${item.id}-${_uid}`;
                const newCSS = jQuery(styleSheet).text();
                css += newCSS;
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
                        btn.removeClass('is-loading');
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
    generateStyleSheet( id = 'global-settings-1', isGlobal = true, css = '' ) {
        // generate global stylesheet
        if( isGlobal ) {
            jQuery('head').append(`<style id="${id}">` + this.globalControls.css + '</style>');
        }
        else {
            jQuery('head').append(`<style id="${id}">` + css + '</style>');
        }
    }
    /**
     * 
     * 
     * Create widget markup 
     * 
     */ 
    onDropWidget( widget ) {
        const _uid = uid();
        const controls = widget.controls;
        widget.uid = _uid;

        if( widget.render ) {
            const markup = widget.render(_uid);
            let css = ''; 
            jQuery('#popup form > .wrapper').append(markup)
            jQuery('.popup-widget-element').draggable({ containment: 'parent' })

            Object.values( controls ).forEach( control => {
                if( control.selector ) {
                    control.prefix = `#popup .element-${_uid} `
                    if( control.selector.call(control) ) {
                        css += control.prefix + control.selector.call(control) + '\n\n';
                    }
                }
            })
            this.generateStyleSheet( `${widget.sheet}-${widget.uid}`, false, css )
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
        jQuery( "#popup form > .wrapper" ).droppable({
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
    removeWidget( self ) {
        jQuery(document).on('click', '.remove-btn', function(ev){
            ev.preventDefault();
            ev.stopPropagation();

            const widget = jQuery(this).parent();
            const id = widget.attr('id');
            const uid = widget.data('uid')
            const stylesheet = id + '-' + uid;
            jQuery(`#${stylesheet}`).remove();
            widget.remove();
        
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