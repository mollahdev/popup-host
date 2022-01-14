import ControlBase from "../inc/base";
export default class FieldWidget extends ControlBase {

    constructor() {
        super();
        return this.config
    }

    setWidgetAttribute() {
        return {
            id: 'field_widget',
            icon: 'email',
            name: 'Email Input'
        }
    }

    registerControls() {
        
        this.addControl('input_placeholder', {
            label: 'Placeholder',
            type: 'text',
            default: 'E-mail',
            selector: function( wrapper, value ) {
                const scope = jQuery(wrapper)
                if( scope.length ) {
                    scope.find('input').attr(value)
                }
            }
        })

        this.addControl('input_font_size', {
            label: 'Font Size',
            type: 'slider',
            default: 20,
            max: 100,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} input {
                    border: 0;
                    font-size: ${value}px;
                }`
            }
        })
        
        this.addControl('input_width', {
            label: 'Width',
            type: 'slider',
            default: 350,
            max: 500,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} input {
                    width: ${value}px;
                }`
            }
        })
        
        this.addControl('input_padding_x', {
            label: 'Padding X',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} input {
                    padding-left: ${value}px;
                    padding-right: ${value}px;
                }`
            }
        })
        
        this.addControl('input_padding_y', {
            label: 'Padding Y',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} input {
                    padding-top: ${value}px;
                    padding-bottom: ${value}px;
                }`
            }
        })
        
        this.addControl('input_radius', {
            label: 'Input Radius',
            type: 'slider',
            default: 20,
            max: 200,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} input {
                    border-radius: ${value}px;
                }`
            }
        })
        
        this.addControl('input_color', {
            label: 'Input Color',
            type: 'color',
            default: '#B02827',
            isLabelInline: true,
            selector: function( wrapper, value ) {
                return `${wrapper} input {
                    display: inline-block;
                    color: ${value};
                }`
            }
        })
        
        this.addControl('input_color_hover', {
            label: 'Input Hover Color',
            type: 'color',
            default: '#414142',
            isLabelInline: true,
            selector: function( wrapper, value ) {
                return `${wrapper} input:hover {
                    display: inline-block;
                    color: ${value};
                }`
            }
        })
        
        this.addControl('input_bg_color', {
            label: 'Background Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function( wrapper, value ) {
                return `${wrapper} input {
                    cursor:pointer;
                    background: ${value};
                }`
            }
        })
        
        this.addControl('input_bg_color_hover', {
            label: 'Input Background Hover',
            type: 'color',
            default: '#eeeeee',
            isLabelInline: true,
            selector: function(wrapper, value) {
                return `${wrapper} input:hover {
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
            <div class="popup-widget-element apb-${wrapper_id}" data-uid="${wrapper_id}" data-name="field_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <input class="email-field" type="email" placeholder="${this.input_placeholder.default}"/>
                </div>
            </div>
        `
    }

}

