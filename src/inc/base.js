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
                    props.prefix = `#popup `;
                    if( props.selector.call(props) ) {
                        self.css += props.prefix + props.selector.call(props) + '\n\n';
                    }
                }

                props.isLabelInline = props.isLabelInline || false;
                self.config[id] = props;
            }

        })
    }

    /**
     * 
     * 
     * select control 
     * 
     */ 
    static select( props, key ) {

        return (
            `<select value="${props.default}" data-key=${key} type="select" class="popup-control--trigger">
                ${
                    (()=>{
                        const options = Object.keys(props.options).map( item =>{
                            return `<option value="${item}">${props.options[item]}</option>`
                        })
                        return options.join('');
                    })()
                }
            </select>
            `
        )
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