import ControlBase from "../inc/base";
export default class StarWidget3 extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            sheet: 'star_widget3',
            icon: 'popup-widgets',
            name: 'Star 3',
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
                return `#star_widget3 span {
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
                return `#star_widget3 span {
                    display: inline-block;
                    font-size: ${this.default}px;
                }`
            }
        })
    }

    render() {
        return `
            <div class="popup-widget-element" id="star_widget3" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <span class="popup-star"></span>
                </div>
            </div>
        `
    }
    

}

