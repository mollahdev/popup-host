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
     * 
     * Initalize customizer script
     * 
     */ 
    init() {

        const self = this;
        self.globalControls = new GlobalControls();
        self.sidebarInit();
        self.createWidget();
        self.generateStyleSheet();
        self.dropWidget( self );

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

        })
    }

}

new Customizer();