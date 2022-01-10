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
            render: this.render.bind( this.config )
        }
    }

    registerControls() {
        
        this.addControl('star_color', {
            label: 'Star Color',
            type: 'color',
            default: '#c75943',
            isLabelInline: true,
            selector: function() {
                return `span {
                    color: ${this.default};
                }`
            }
        })

        this.addControl('star_size', {
            label: 'Star Size',
            type: 'slider',
            default: 44,
            max: 200,
            step:1,
            selector: function() {
                return `span {
                    display: inline-block;
                    font-size: ${this.default}px;
                }`
            }
        })
    }

    render(uid = '') {
        return `
            <div class="popup-widget-element element-${uid}" data-uid="${uid}" id="star_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <span class="popup-star"></span>
                </div>
            </div>
        `
    }
    

}

