import uid from "./uid";
/**
 * 
 * 
 * @class ControlBase
 * @description ths class is responsible to simplify control creation
 * 
 */ 
export default class ControlBase {
    config = {}
    css = ''
    uid = uid()

    /**
     * 
     * 
     * Merge controls
     * 
    */
    constructor( isGlobal = false ) {
        const self = this;
        this.registerControls.apply({

            addControl: function( id, props ) {
                
                if( props.selector ) {

                    if( isGlobal ) {
                        props.prefix = `#popup.element-1 `;
                    } else {
                        props.prefix = `#popup .element-${self.uid} `;
                    }

                    self.css += props.prefix + props.selector.call(props) + '\n\n';
                }

                props.isLabelInline = props.isLabelInline || false;
                self.config[id] = props;
            }

        })
    }

    /**
     * 
     * 
     * text control 
     * 
     */ 
    static text( props, key ) {
        return (
            `<input 
                value="${props.default}" 
                data-key=${key} 
                type="text" 
                class="popup-control--trigger"
            />`
        )
    }

    /**
     * 
     * 
     * text control 
     * 
     */ 
    static color( props, key ) {
        return (
            `<input 
                value="${props.default}" 
                data-key=${key} 
                type="color" 
                class="popup-control--trigger"
            />`
        )
    }
    
    /**
     * 
     * 
     * slider control 
     * 
     */ 
    static slider( props, key ) {
        return (
            `<div class="slider-control">
                <input
                    class="popup-control--trigger"
                    data-key=${key}
                    type="range"
                    min="0"  
                    max=${props.max}  
                    step=${props.step} 
                    value=${props.default}               
                >
                <span class="value">${props.default}px</span>
            </div>
            `
        )
    }
}