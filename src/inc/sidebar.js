import ControlBase from "./base";
import state from "./state";
import widgets from "../widgets";
import cssom from './cssom';

export default class Sidebar {
    
    sidebarSettings = {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    }
    
    /**
     * 
     * 
     * attach perfect scrollbar plugin into sidebar 
     */ 
    sidebarInit() {
        const ps  = new PerfectScrollbar('.aside__container', this.sidebarSettings );
        this.sidebarSettings.ps = ps;
    }

    /**
     * 
     * Create markup for controls 
     * @param config refers to the controls of the widget
     * @param uid refers to unique key. This unique get is generated when any widget is droped
     * 
     */ 
    createControlMarkup( config, uid ) {

        const storage = state.get();
        const data = storage[uid];
        const wrapper = '.apb-' + uid;

        // generate control markup
        const componentMarkup = Object.keys(config).map( key => {
            const attr = config[key];
            const component = ControlBase[attr.type]
            let value = '';
            
            if( !component ) {
                return '';
            }


            // use already saved values
            if( !Reflect.has( data, key ) ) {
                data[key] = attr.default;
                value = data[key];
            } else {
                value = data[key];
            }

            // generate css
            const initialStyle = attr.selector( wrapper, value );
            if( initialStyle ) {
                const { selector, style } = cssom.seperateStyle( initialStyle );
                cssom.insert(selector, style)
            }

            return `
                <div class="control-item" data-inline="${attr.isLabelInline}">
                    <label> ${ attr.label } </label>
                    <div class="control-item--field field-type-${attr.type}">
                        ${component({...attr, default: value}, key)}
                    </div>
                </div>
            `
        })

        // render the markup into the sidebar
        jQuery('.aside__container').html( `
            <div class="control-container">
                ${componentMarkup.join('')}
            </div>
        ` );

        /**
         * 
         * 
         * on input change
         * This event is responsible to chapter the changes of any control input changes 
         * 
         */ 
        jQuery('.popup-control--trigger').on('input', function(ev) {
            
            ev.preventDefault();
            ev.stopPropagation();

            const value = this.value;
            const key   = this.dataset.key

            data[key] = value;
            const createStyle = config[key].selector( wrapper, data[key] );

            if( createStyle ) {
                const { selector, style } = cssom.seperateStyle( createStyle );
                cssom.insert(selector, style)

            }
            
            //update range slider value
            if( this.type === 'range' ) {
                this.nextElementSibling.innerText = value + 'px'
            }

        })
        
    }

    /**
     * 
     * Create widget markup 
     * 
     */ 
    createWidgetMarkup( ) {

        const componentMarkup = Object.keys( widgets ).map( key => {
            const { widgetAttribute } = widgets[key];
            return `
            <div class="popup-element" id="${widgetAttribute.id}">
                <div class="popup-widget" draggable="true" data-type="${key}">
                    <span class="material-icons-outlined">${widgetAttribute.icon}</span>
                    <label>${widgetAttribute.name}</label>
                </div>
            </div>`
        })

        // render the markup into the sidebar
        jQuery('.aside__container').html( `
            <div class="widget-container">
                ${componentMarkup.join('')}
            </div>
        ` );
    }


}