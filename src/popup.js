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
            fetch('http://localhost/popup-host/' + 'storage/index.php?public')
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
            window.document.body.classList.add('popup-init');
            document.head.insertAdjacentHTML("beforeend", ` <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">`)
            document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">`)
            document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`)
            document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap">`)
            document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="http://localhost/popup-host/public/popup.css">`)
            document.head.insertAdjacentHTML("beforeend", `<style id="popup-css">${this.css}</style>`)
            document.body.insertAdjacentHTML("beforeend", this.html)
            
            setTimeout(()=>{
                window.document.body.classList.add('show-popup');
                const closeBtn = document.querySelector('.popup-close-button')
                if( closeBtn ) {
                    closeBtn.addEventListener('click', () => {
                        window.document.body.classList.remove('show-popup');
                    })
                }
                const submitBtn = document.querySelector('.submit-btn');
                const emailField = document.querySelector('.email-field');
                if( submitBtn &&  emailField ) {
                    submitBtn.addEventListener('click', () => {
                        const value = emailField.value
                        alert(value)
                    })
                }
            }, 1000 )
    
        }
    }
    popup.init()
}

if( document.readyState !== 'loading' ) {
    domReady()
} else {
    document.addEventListener('DOMContentLoaded', domReady );
}