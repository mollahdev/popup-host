import ControlBase from "./base";
export default class GlobalControls extends ControlBase {

    constructor() {
        super();
        return this.config;
    }

    setWidgetAttribute() {
        return {
            id: 'global',
            icon: 'title',
            name: 'Popup Settings'
        }
    }

    registerControls() {
        
        this.addControl('global_popup_bg', {
            label: 'Popup Background Color',
            type: 'color',
            default: '#e07a5f',
            isLabelInline: true,
            selector: function( wrapper, value ) {
                return `${wrapper} .apb-wrapper {
                    background-color: ${value};
                    box-shadow:0 0 0 var(--border-width) ${value};
                }`
            }
        })
        
        this.addControl('global_popup_border_color', {
            label: 'Popup Border Color',
            type: 'color',
            default: '#eeeeee',
            isLabelInline: true,
            selector: function( wrapper, value ) {
                return `${wrapper} .apb-wrapper {
                    border-color: ${value};
                    border-style: solid;
                }`
            }
        })

        this.addControl('global_popup_border_width', {
            label: 'Popup Border Width',
            type: 'slider',
            default: 5,
            max: 50,
            step:1,
            selector: function( wrapper, value ) {
                jQuery(`${wrapper} .apb-wrapper`).css({'--border-width': (value * 2) + 'px'});
                return `${wrapper} .apb-wrapper {
                    border-width: ${value}px;
                }`
            }
        })
        

        this.addControl('global_popup_radius', {
            label: 'Popup Radius',
            type: 'slider',
            default: 500,
            max: 500,
            step:10,
            selector: function( wrapper, value ) {
                return `${wrapper} .apb-wrapper {
                    position: relative;
                    border-radius: ${value}px;
                }`
            }
        })

        this.addControl('global_popup_width', {
            label: 'Popup Width',
            type: 'slider',
            default: 600,
            max: 1000,
            step:10,
            selector: function( wrapper, value ) {
                return `${wrapper} .apb-wrapper{
                    width: ${value}px;
                }`
            }
        })
        
        this.addControl('global_popup_height', {
            label: 'Popup Height',
            type: 'slider',
            default: 600,
            max: 1000,
            step:10,
            selector: function(wrapper, value) {
                return `${wrapper} .apb-wrapper{
                    height: ${value}px;
                }`
            }
        })
    

    }
    

}

