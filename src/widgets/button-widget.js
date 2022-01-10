import ControlBase from "../inc/base";
import uid from "../inc/uid";

export default class ButtonWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            uid: uid(),
            sheet: 'button_widget',
            icon: 'popup-widgets',
            name: 'Button Widget',
            render: this.render.bind( this.config )
        }
    }

    registerControls() {
        
        this.addControl('button_content', {
            label: 'Button Label',
            type: 'text',
            default: 'SIGNUP NOW',
            selector: function() {
                const scope = jQuery(this.prefix)
                if( scope.length ) {
                    scope.find('.button').text(this.default)
                }
            }
        })

        this.addControl('button_padding_font_size', {
            label: 'Font Size',
            type: 'slider',
            default: 20,
            max: 100,
            step:1,
            selector: function() {
                return `.button{
                    font-size: ${this.default}px
                }`
            }
        })
        
        this.addControl('button_padding_x', {
            label: 'Padding X',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function() {
                return `.button{
                    padding-left: ${this.default}px;
                    padding-right: ${this.default}px;
                }`
            }
        })
        
        this.addControl('button_padding_y', {
            label: 'Padding Y',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function() {
                return `.button{
                    padding-top: ${this.default}px;
                    padding-bottom: ${this.default}px;
                }`
            }
        })
        
        this.addControl('button_radius', {
            label: 'Border Radius',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function() {
                return `.button{
                    border-radius: ${this.default}px;
                }`
            }
        })
        
        this.addControl('button_color', {
            label: 'Button Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function() {
                return `.button {
                    display: inline-block;
                    color: ${this.default};
                }`
            }
        })
        
        this.addControl('button_color_hover', {
            label: 'Button Hover Color',
            type: 'color',
            default: '#414142',
            isLabelInline: true,
            selector: function() {
                return `.button:hover {
                    display: inline-block;
                    color: ${this.default};
                }`
            }
        })
        
        this.addControl('button_bg_color', {
            label: 'Background Color',
            type: 'color',
            default: '#414142',
            isLabelInline: true,
            selector: function() {
                return `.button {
                    background: ${this.default};
                }`
            }
        })
        
        this.addControl('button_bg_color_hover', {
            label: 'Background Hover Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function() {
                return `.button:hover {
                    background: ${this.default};
                }`
            }
        })
    }

    render(uid = '') {
        return `
            <div class="popup-widget-element element-${uid}" data-uid="${uid}" id="button_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <span class="button submit-btn">${this.button_content.default}</span>
                </div>
            </div>
        `
    }
    

}

