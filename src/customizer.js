import Sidebar from "./inc/sidebar";
import GlobalControls from "./inc/global-controls";

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
        this.createControlMarkup( this.globalControls, type )
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
     * Initalize customizer script
     * 
     */ 
    init() {
        const self = this;
        self.globalControls = new GlobalControls();
        self.sidebarInit();
        self.createWidget();
        self.generateStyleSheet();

        // change sidebar markup based on what settings user want 
        jQuery(document).on('click', '.page-settings, .all-widget', function() {

            const type = this.dataset.type;
            switch( type ) {
                case 'global-settings':
                self.createControls.call(self, type);
                break;
                
                case 'all-widgets':
                self.createWidget.call(self, type);
                break;
            }

            // update scrollbar 
            self.sidebarSettings.ps.update()

        })
    }

}

new Customizer();