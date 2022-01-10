import ControlBase from "../inc/base";
export default class TextWidget extends ControlBase {

    constructor() {
        super();
        return {
            controls: this.config,
            css: this.css,
            uid: this.uid,
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
            default: 'All the text and elements in this popup should be editable and dragable',
            selector: function() {
                const scope = jQuery(this.prefix)
                if( scope.length ) {
                    scope.find('span').text(this.default)
                }
            }
        })

        this.addControl('text_alignment', {
            label: 'Text Alignment',
            type: 'select',
            default: 'center',
            options: {
                left: 'Left',
                center: 'Center',
                right: 'Right'
            },
            selector: function() {
                return `span {
                    display: inline-block;
                    text-align: ${this.default};
                }`
            }
        })

        this.addControl('text_font_weight', {
            label: 'Text Alignment',
            type: 'select',
            default: 400,
            options: {
                400: 'Regular',
                700: 'Medium',
                900: 'Bold'
            },
            selector: function() {
                return `span {
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
                return `span {
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
                return `span {
                    font-size: ${this.default}px;
                }`
            }
        })

        this.addControl('text_line_height', {
            label: 'Text Line Height',
            type: 'slider',
            default: 24,
            max: 100,
            step:1,
            selector: function() {
                return `span {
                    line-height: ${this.default}px;
                }`
            }
        })
    }
    

    render(uid = '') {
        return `
            <div class="popup-widget-element element-${uid}" data-uid="${uid}" id="text_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <span>${this.text_content.default}</span>
                </div>
            </div>
        `
    }

}

