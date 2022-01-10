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
            render: this.render.bind( this.config )
        }
    }

    registerControls() {
        
        this.addControl('input_placeholder', {
            label: 'Placeholder',
            type: 'text',
            default: 'E-mail',
            selector: function() {
                const scope = jQuery(this.prefix)
                if( scope.length ) {
                    scope.find('input').attr('placeholder', this.default)
                }
            }
        })

        this.addControl('input_font_size', {
            label: 'Font Size',
            type: 'slider',
            default: 20,
            max: 100,
            step:1,
            selector: function() {
                return `input {
                    border: 0;
                    font-size: ${this.default}px
                }`
            }
        })
        
        this.addControl('input_width', {
            label: 'Width',
            type: 'slider',
            default: 300,
            max: 600,
            step: 2,
            selector: function() {
                return `input {
                    width: ${this.default}px
                }`
            }
        })
        
        this.addControl('input_padding_x', {
            label: 'Padding X',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function() {
                return `input {
                    padding-left: ${this.default}px;
                    padding-right: ${this.default}px;
                }`
            }
        })
        
        this.addControl('input_padding_y', {
            label: 'Padding Y',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function() {
                return `input {
                    padding-top: ${this.default}px;
                    padding-bottom: ${this.default}px;
                }`
            }
        })
        
        this.addControl('input_radius', {
            label: 'Input Radius',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function() {
                return `input {
                    border-radius: ${this.default}px;
                }`
            }
        })
        
        this.addControl('input_color', {
            label: 'Input Color',
            type: 'color',
            default: '#B02827',
            isLabelInline: true,
            selector: function() {
                return `input {
                    display: inline-block;
                    color: ${this.default};
                }`
            }
        })
        
        this.addControl('input_color_hover', {
            label: 'Input Hover Color',
            type: 'color',
            default: '#414142',
            isLabelInline: true,
            selector: function() {
                return `input:hover {
                    display: inline-block;
                    color: ${this.default};
                }`
            }
        })
        
        this.addControl('input_bg_color', {
            label: 'Background Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function() {
                return `input {
                    cursor:pointer;
                    background: ${this.default};
                }`
            }
        })
        
        this.addControl('input_bg_color_hover', {
            label: 'Input Hover Color',
            type: 'color',
            default: '#eeeeee',
            isLabelInline: true,
            selector: function() {
                return `input:hover {
                    background: ${this.default};
                }`
            }
        })
    
    }
    
    render(uid = '') {
        return `
            <div class="popup-widget-element element-${uid}" data-uid="${uid}" id="field_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <input class="email-field" type="email" placeholder="${this.input_placeholder.default}"/>
                </div>
            </div>
        `
    }

}

