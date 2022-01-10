import ControlBase from "../inc/base";

export default class ButtonWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            uid: this.uid(),
            sheet: 'button_widget',
            icon: 'popup-widgets',
            name: 'Button Widget',
        }
    }

    registerControls() {
        
        this.addControl('field_color', {
            label: 'Text Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function() {
                return ` .wrapper .text-widget p {
                    color: ${this.default};
                }`
            }
        })
    
    }
    

}

