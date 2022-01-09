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
    createControls() {
        const config = new GlobalControls();
        this.createControlMarkup( config )
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
     * Initalize customizer script
     * 
     */ 
    init() {
        const self = this;
        self.sidebarInit();
        self.createWidget();
        
        // change sidebar markup based on what settings user want 
        jQuery(document).on('click', '.page-settings, .all-widget', function() {

           

            const type = this.dataset.type;
            switch( type ) {
                case 'global-settings':
                self.createControls.apply(self);
                break;
                
                case 'all-widgets':
                self.createWidget.apply(self);
                break;
            }

            // update scrollbar 
            self.sidebarSettings.ps.update()

        })
    }

}

new Customizer();