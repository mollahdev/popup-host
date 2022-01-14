import ControlBase from "../inc/base";

export default class ButtonWidget extends ControlBase {

    constructor() {
        super();
        return this.config;
    }

    setWidgetAttribute() {
        return {
            id: 'button_widget',
            icon: 'smart_button',
            name: 'Submit Button'
        }
    }

    registerControls() {
        
        this.addControl('button_content', {
            label: 'Button Label',
            type: 'text',
            default: 'SIGNUP NOW',
            selector: function( wrapper, value ) {
                const scope = jQuery(wrapper)
                if( scope.length ) {
                    scope.find('.button').text(value)
                }
            }
        })

        this.addControl('button_weight', {
            label: 'Font Weight',
            type: 'select',
            default: 700,
            options: {
                400: 'Regular',
                700: 'Medium',
                900: 'Bold'
            },
            selector: function( wrapper, value ) {
                return `${wrapper} .button {
                    font-weight: ${value};
                }`
            }
        })

        this.addControl('button_padding_font_size', {
            label: 'Font Size',
            type: 'slider',
            default: 24,
            max: 100,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} .button{
                    font-size: ${value}px;
                }`
            }
        })
        
        this.addControl('button_padding_x', {
            label: 'Padding X',
            type: 'slider',
            default: 97,
            max: 200,
            step:1,
            selector: function(wrapper, value) {
                return `${wrapper} .button{
                    padding-left: ${value}px;
                    padding-right: ${value}px;
                }`
            }
        })
        
        this.addControl('button_padding_y', {
            label: 'Padding Y',
            type: 'slider',
            default: 15,
            max: 200,
            step:1,
            selector: function(wrapper, value) {
                return `${wrapper} .button{
                    padding-top: ${value}px;
                    padding-bottom: ${value}px;
                }`
            }
        })
        
        this.addControl('button_radius', {
            label: 'Border Radius',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function(wrapper, value) {
                return `${wrapper} .button{
                    border-radius: ${value}px;
                }`
            }
        })
        
        this.addControl('button_color', {
            label: 'Button Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function(wrapper, value) {
                return `${wrapper} .button {
                    display: inline-block;
                    color: ${value};
                }`
            }
        })
        
        this.addControl('button_color_hover', {
            label: 'Button Hover Color',
            type: 'color',
            default: '#414142',
            isLabelInline: true,
            selector: function( wrapper, value ) {
                return `${wrapper} .button:hover {
                    display: inline-block;
                    color: ${value};
                }`
            }
        })
        
        this.addControl('button_bg_color', {
            label: 'Background Color',
            type: 'color',
            default: '#414142',
            isLabelInline: true,
            selector: function(wrapper, value) {
                return `${wrapper} .button {
                    background: ${value};
                    user-select: none;
                    cursor: pointer;
                }`
            }
        })
        
        this.addControl('button_bg_color_hover', {
            label: 'Background Hover Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function(wrapper, value) {
                return `${wrapper} .button:hover {
                    background: ${value};
                }`
            }
        })

        this.addControl('zindex', {
            label: 'Z-Index',
            type: 'number',
            default: 1,
            isLabelInline: true,
            selector: function( wrapper, value ) {
                return `${wrapper} {
                    z-index: ${value};
                }`
            }
        })
    }

    render( wrapper_id ) {
        return `
            <div class="popup-widget-element apb-${wrapper_id}" data-uid="${wrapper_id}" data-name="button_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <span class="button submit-btn">${this.button_content.default}</span>
                </div>
            </div>
        `
    }
    
}

