/**
 * 
 * 
 * file: popup.js
 * @description this file is responsible for managing popup on client site
 * 
 */ 

import PopupBase from "./inc/popup-base";
class Popup extends PopupBase{
    
    init() {
        const config = this.settings.config;
        const data = this.settings.data;
        
        setTimeout(()=>{

            window.document.body.classList.add('show-popup');
            document.head.insertAdjacentHTML("beforeend", `<style>${data.css}</style>`)
            document.body.insertAdjacentHTML("beforeend", data.html)

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

        }, config.setTimeOut)

    }
}


const popupInstance = new Popup();
window.popup =  popupInstance.settings;