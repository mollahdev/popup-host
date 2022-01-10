import ControlBase from "../inc/base";
import uid from "../inc/uid";

export default class FieldWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            uid: uid(),
            sheet: 'field_widget',
            icon: 'popup-widgets',
            name: 'Field Widget',
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

