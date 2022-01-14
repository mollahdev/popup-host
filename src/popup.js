/**
 * 
 * 
 * file: popup.js
 * @description this file is responsible for managing popup on client site
 * 
 */ 
 function domReady() {
   
    const popup = {
        
        init() {
            const self = this;
            window.document.body.classList.add('popup-init');
            document.head.insertAdjacentHTML("beforeend", `
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap">
                <link rel="stylesheet" href="https://bookerkit.com/popup-host/public/popup.css">
            `);

            fetch('https://bookerkit.com/popup-host/' + 'storage/index.php?public')
            .then( response => response.json())
            .then( response => {
                const { html, css } = response.body
                if( html && css ) {
                    self.html = JSON.parse(html);
                    self.css = JSON.parse(css);
                    self.insert();
                }
            })
        },
        
        insert() {
            
            document.head.insertAdjacentHTML("beforeend", `<style id="popup-css">${this.css}</style>`)
            document.body.insertAdjacentHTML("beforeend", this.html)
            
            setTimeout(()=>{
                window.document.body.classList.add('show-popup');
                const closeBtn      = document.querySelectorAll('.popup-close-button')
                const submitBtn     = document.querySelectorAll('.submit-btn');
                const emailField    = document.querySelector('.email-field');

                if( closeBtn ) this.closeButtonHandler( closeBtn  );
                if( submitBtn &&  emailField ) this.submitButtonHandler(submitBtn, emailField)
            }, 1000 )
    
        },

        submitButtonHandler( btns, emailField ) {
            btns.forEach( btn => {
                btn.addEventListener('click', () => {
                    const value = emailField.value
                    alert(value)
                })
            })            
        },

        closeButtonHandler( btns ) {
            btns.forEach( btn => {
                btn.addEventListener('click', () => window.document.body.classList.remove('show-popup'))
            })
        }
    }

    popup.init()
}

if( document.readyState !== 'loading' ) {
    domReady()
} else {
    document.addEventListener('DOMContentLoaded', domReady );
}