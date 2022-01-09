import Sidebar from "./inc/sidebar";

class Customizer extends Object.assign( Sidebar ) {

    /**
     * 
     * 
     * Initalize customizer script
     * 
     */ 
    constructor() {
        super()
        window.addEventListener('DOMContentLoaded', this.init.bind(this) );
        
    }

    init() {
        this.sidebarInit();
    }

   
}

new Customizer();