import ControlBase from "./base";

export default class GlobalControls extends ControlBase {

    constructor() {
        super(true);
        return {
            controls: this.config,
            css: this.css,
            uid: 1,
            sheet: 'popup-stylesheet'
        }
    }


    registerControls() {
        
        this.addControl('global_popup_bg', {
            label: 'Popup Background Color',
            type: 'color',
            default: '#e07a5f',
            isLabelInline: true,
            selector: function() {
                return `.wrapper{
                    background-color: ${this.default};
                    box-shadow: 0px 0px 0 var(--border-width) ${this.default};
                }`
            }
        })
        
        this.addControl('global_popup_border_color', {
            label: 'Popup Border Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function() {
                return `.wrapper{
                    border-color: ${this.default};
                    border-style: solid;
                }`
            }
        })
        
        this.addControl('global_popup_border_width', {
            label: 'Popup Border Width',
            type: 'slider',
            default: 5,
            max: 50,
            step:1,
            selector: function() {
                return ` .wrapper{
                    border-width: ${this.default}px;
                    --border-width: ${this.default}px;
                }`
            }
        })

        this.addControl('global_popup_radius', {
            label: 'Popup Radius',
            type: 'slider',
            default: 500,
            max: 500,
            step:10,
            selector: function() {
                return ` .wrapper{
                    border-radius: ${this.default}px
                }`
            }
        })

        this.addControl('global_popup_width', {
            label: 'Popup Width',
            type: 'slider',
            default: 600,
            max: 1000,
            step:10,
            selector: function() {
                return ` .wrapper{
                    width: ${this.default}px
                }`
            }
        })
        
        this.addControl('global_popup_height', {
            label: 'Popup Height',
            type: 'slider',
            default: 600,
            max: 1000,
            step:10,
            selector: function() {
                return ` .wrapper{
                    height: ${this.default}px
                }`
            }
        })
    

    }
    

}

