import ControlBase from "../inc/base";
export default class HeadingWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            sheet: 'heading_widget',
            icon: 'popup-widgets',
            name: 'Heading',
            render: this.render.bind( this.config )
        }
    }

    registerControls() {
        this.addControl('text_content', {
            label: 'Text Color',
            type: 'text',
            default: 'All the text and elements in this popup should be editable and dragable',
            selector: function() {
                const scope = jQuery(this.prefix)
                if( scope.length ) {
                    scope.find('#heading_widget h2').text(this.default)
                }
            }
        })

        this.addControl('text_font_alignment', {
            label: 'Font Weight',
            type: 'select',
            default: 'left',
            options: {
                left: 'Left',
                center: 'Center',
                right: 'Right'
            },
            selector: function() {
                return `#heading_widget h2 {
                    text-align: ${this.default};
                }`
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
                return `#heading_widget h2 {
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
                return `#heading_widget h2 {
                    color: ${this.default};
                }`
            }
        })

        this.addControl('text_font_size', {
            label: 'Text Font Size',
            type: 'slider',
            default: 24,
            max: 100,
            step:1,
            selector: function() {
                return `#heading_widget h2 {
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
                return `#heading_widget h2 {
                    padding-left: ${this.default}px;
                    padding-right: ${this.default}px;
                }`
            }
        })
        
        this.addControl('text_line_height', {
            label: 'Line Height',
            type: 'slider',
            default: 24,
            max: 600,
            step:1,
            selector: function() {
                return `#heading_widget h2 {
                    line-height: ${this.default}px;
                }`
            }
        })
    }
    
    render() {
        return `
            <div class="popup-widget-element" id="heading_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <h2>${this.text_content.default}</h2>
                </div>
            </div>
        `
    }

}

