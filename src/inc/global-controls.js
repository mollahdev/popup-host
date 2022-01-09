import ControlBase from "./base";

export default class GlobalControls extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css
        }
    }


    registerControls() {
        
        this.addControl('global_popup_bg', {
            label: 'Popup Background Color',
            type: 'color',
            default: '#e07a5f',
        })
        
        this.addControl('global_popup_radius', {
            label: 'Popup Radius',
            type: 'slider',
            default: 50,
            unit: '%'
        })

    }
    

}

