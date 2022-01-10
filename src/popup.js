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
        }, config.setTimeOut)

    }
}


const popupInstance = new Popup();
window.popup =  popupInstance.settings;