export default class PopupBase {
    
    settings = {
        init: this.frontendInit.bind(this)
    };

    frontendInit( config ) {
        this.settings.config = config;
        this.init();
    }

    constructor() {
        /**
         * 
         * Trigger the frontend event when the dom is fully loaded 
         * 
         */ 
        window.onload = () => {
            window.dispatchEvent( new CustomEvent('popup/init') );
        }
    }
}