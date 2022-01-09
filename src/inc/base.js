export default class ControlBase {
    config = {}
    css = ''
    
    constructor() {
        const self = this;
        this.registerControls.apply({

            addControl: function( id, props ) {
                
                if( props.selector ) {
                    props.prefix = '#popup ';
                    self.css += props.prefix + props.selector() + '\n\n';
                }

                props.isLabelBlock = props.isLabelBlock || false;
                self.config[id] = props;
            }

        })
    }
}