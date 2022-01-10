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
            label: 'Star 3 Color',
            type: 'color',
            default: '#c75943',
            isLabelInline: true,
            selector: function() {
                return `#star_widget3 path {
                    fill: ${this.default};
                }`
            }
        })

        this.addControl('star_size', {
            label: 'Star 3 Size',
            type: 'slider',
            default: 44,
            max: 200,
            step:1,
            selector: function() {
                return `#star_widget3 svg {
                    display: inline-block;
                    width: ${this.default}px;
                    height: ${this.default}px;
                }`
            }
        })
    }

    render() {
        return `
            <div class="popup-widget-element" id="star_widget3" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="#12fbec" d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                    </svg>
                </div>
            </div>
        `
    }
    

}

