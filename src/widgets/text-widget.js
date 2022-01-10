import ControlBase from "../inc/base";

export default class TextWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            uid: this.uid(),
            sheet: 'text_widget',
            icon: 'popup-widgets',
            name: 'Text Widget',
            render: this.render.bind( this.config )
        }
    }

    registerControls() {
        this.addControl('text_color', {
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
    

    render() {
        return `
            <div class="popup-widget-element" id="text_widget" data-type="widget">
                <div>
                    <span>${this.text_color.default}</span>
                </div>
            </div>
        `
    }

}

