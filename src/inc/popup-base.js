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
        const self = this;
        fetch('http://103.110.113.196/popup-host/' + 'storage/read.php?file=markup.txt')
        .then( response => response.text())
        .then( response => {

            const data = {
                html: response
            }

            fetch('http://103.110.113.196/popup-host/' + 'storage/read.php?file=style.txt')
            .then( response => response.text())
            .then( response => {
                data.css = response;
                self.settings.data = data;
                window.dispatchEvent( new CustomEvent('popup/init') );
            })
        })
 
    }
}