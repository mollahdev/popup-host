import ControlBase from "../inc/base";
export default class StarWidget extends ControlBase {

    constructor() {
        super();
        return this.config;
    }

    setWidgetAttribute() {
        return {
            id: 'star_widget',
            icon: 'star',
            name: 'Star'
        }
    }

    registerControls() {
        
        this.addControl('star_color', {
            label: 'Star Color',
            type: 'color',
            default: '#c75943',
            isLabelInline: true,
            selector: function( wrapper, value ) {
                return `${wrapper} span {
                    color: ${value};
                }`
            }
        })

        this.addControl('star_size', {
            label: 'Star Size',
            type: 'slider',
            default: 44,
            max: 200,
            step:1,
            selector: function( wrapper, value ) {
                return `${wrapper} span {
                    font-size: ${value}px;
                    display: unset;
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
            <div class="popup-widget-element apb-${wrapper_id}" data-uid="${wrapper_id}" data-name="star_widget" data-type="widget">
                <i class="remove-btn">x</i>
                <div>
                    <span class="material-icons-outlined">star</span>
                </div>
            </div>
        `
    }
    

}

