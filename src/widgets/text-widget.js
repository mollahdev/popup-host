import ControlBase from "../inc/base";
export default class TextWidget extends ControlBase {

    constructor() {
        super();
        return this.config;
    }

    setWidgetAttribute() {
        return {
            id: 'text_widget',
            icon: 'title',
            name: 'Text Widget'
        }
    }

    registerControls() {
        this.addControl('text_content', {
            label: 'Text Color',
            type: 'text',
            default: 'No credit card required. No Surprises ',
            selector: function( wrapper, value ) {
                const scope = jQuery(wrapper)
                if( scope.length ) {
                    scope.find('span').text(value)
                }
            }
        })

        this.addControl('text_font_weight', {
            label: 'Font Weight',
            type: 'select',
            default: 400,
            options: {
                400: 'Regular',
                700: 'Medium',
                900: 'Bold'
            },
            selector: function( wrapper, value ) {
                return `${wrapper} span {
                    font-weight: ${value};
                }`
            }
        })

        this.addControl('text_color', {
            label: 'Text Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function(wrapper, value) {
                return `${wrapper} span {
                    color: ${value};
                }`
            }
        })

        this.addControl('text_font_size', {
            label: 'Text Font Size',
            type: 'slider',
            default: 18,
            max: 100,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} span {
                    font-size: ${value}px;
                }`
            }
        })
        
        
        this.addControl('text_width', {
            label: 'Width',
            type: 'slider',
            default: 250,
            max: 800,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} span {
                    width: ${value}px;
                    display: inline-block;
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
            <div class="popup-widget-element apb-${wrapper_id}" data-uid="${wrapper_id}" id="text_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <span>${this.text_content.default}</span>
                </div>
            </div>
        `
    }

}

