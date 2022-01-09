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
        
        console.log(this.settings.config)

    }
}


const popupInstance = new Popup();
window.popup =  popupInstance.settings;