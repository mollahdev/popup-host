import Sidebar from "./inc/sidebar";
import GlobalControls from "./inc/global-controls";
import widgets from "./widgets";

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
    generateStyleSheet() {
        // generate global stylesheet
        jQuery('head').append('<style id="global-settings">' + this.globalControls.css + '</style>');
    }
    /**
     * 
     * 
     * Create widget markup 
     * 
     */ 
    onDropWidget( widget ) {
        if( widget.render ) {
            const markup = widget.render();
            jQuery('#popup form > .wrapper').append(markup)
            jQuery('.popup-widget-element').draggable({ containment: 'parent' })
        }
        
    }


    /**
     * 
     * 
     * Drop widget 
     * 
     */ 
    dropWidget( self ) {
        jQuery('.popup-widget').draggable({
            helper: 'clone'
        })
    
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
        jQuery(document).on('click', '.page-settings, .all-widget, .popup-widget-element', function() {

            const type = this.dataset.type;

            switch( type ) {
                case 'global-settings':
                self.createControls.call(self, type);
                break;
                
                case 'all-widgets':
                self.createWidget.call(self, type);
                break;
                
                case 'widget':
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