import ControlBase from "../inc/base";
export default class FieldWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
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
                    scope.find('#field_widget input').attr('placeholder', this.default)
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
                return `#field_widget input {
                    border: 0;
                    font-size: ${this.default}px
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
                return `#field_widget input {
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
                return `#field_widget input {
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
                return `#field_widget input {
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
                return `#field_widget input {
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
                return `#field_widget input:hover {
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
                return `#field_widget input {
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
                return `#field_widget input:hover {
                    background: ${this.default};
                }`
            }
        })
    
    }
    
    render() {
        return `
            <div class="popup-widget-element" id="field_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <input class="email-field" type="email" placeholder="${this.input_placeholder.default}"/>
                </div>
            </div>
        `
    }

}

