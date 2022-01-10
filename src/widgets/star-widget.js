import ControlBase from "../inc/base";
import uid from "../inc/uid";
export default class StarWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            uid: uid(),
            sheet: 'star_widget',
            icon: 'popup-widgets',
            name: 'Star Widget',
        }
    }

    registerControls() {
        
        this.addControl('star_color', {
            label: 'Star Color',
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

