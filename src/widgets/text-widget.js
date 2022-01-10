import ControlBase from "../inc/base";
export default class TextWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            sheet: 'text_widget',
            icon: 'popup-widgets',
            name: 'Text Widget',
            render: this.render.bind( this.config )
        }
    }

    registerControls() {
        this.addControl('text_content', {
            label: 'Text Color',
            type: 'text',
            default: 'No credit card required. No Surprises ',
            selector: function() {
                const scope = jQuery(this.prefix)
                if( scope.length ) {
                    scope.find('#text_widget span').text(this.default)
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
            selector: function() {
                return `#text_widget span {
                    font-weight: ${this.default};
                }`
            }
        })

        this.addControl('text_color', {
            label: 'Text Color',
            type: 'color',
            default: '#ffffff',
            isLabelInline: true,
            selector: function() {
                return `#text_widget span {
                    color: ${this.default};
                }`
            }
        })

        this.addControl('text_font_size', {
            label: 'Text Font Size',
            type: 'slider',
            default: 18,
            max: 100,
            step:1,
            selector: function() {
                return `#text_widget span {
                    font-size: ${this.default}px;
                }`
            }
        })
        
        this.addControl('text_padding_x', {
            label: 'Padding X',
            type: 'slider',
            default: 20,
            max: 600,
            step:1,
            selector: function() {
                return `#text_widget span {
                    padding-left: ${this.default}px;
                    padding-right: ${this.default}px;
                }`
            }
        })
    }
    
    render() {
        return `
            <div class="popup-widget-element" id="text_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <span>${this.text_content.default}</span>
                </div>
            </div>
        `
    }

}

