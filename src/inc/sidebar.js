import ControlBase from "./base";
import widgets from "../widgets";

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
        const ps  = new PerfectScrollbar('.customizer__sidebar--content', this.sidebarSettings );
        this.sidebarSettings.ps = ps;
    }

    /**
     * 
     * Create markup for controls 
     * 
     */ 
    createControlMarkup( config, sheetName ) {
        const { controls } = config;


        // generate control markup
        const componentMarkup = Object.keys(controls).map( key => {
            const attr = controls[key];
            const component = ControlBase[attr.type]
            
            if( !component ) {
                return '';
            }

            return `
                <div class="control-item" data-inline="${attr.isLabelInline}">
                    <label> ${ attr.label } </label>
                    <div class="control-item--field field-type-${attr.type}">
                        ${component(attr, key)}
                    </div>
                </div>
            `
        })

        // render the markup into the sidebar
        jQuery('.sidebar-container').html( `
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
            const key = this.dataset.key
            let css = ''; 

            // generate style for popup
            controls[key].default = value;
            Object.values( controls ).forEach( control => {
                if( control.selector ) {
                    if( control.selector.call(control) ) {
                        css += control.prefix + control.selector.call(control) + '\n\n';
                    }
                }
            })

            // change old stylesheet with new styles
            if( controls[key].selector ) {
               jQuery(`#${sheetName}-${config.uid}`).text(css)
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
            const attr = widgets[key];
            return `
            <div class="popup-element">
                <div class="popup-widget" draggable="true" data-type="${key}">
                    <i class="${attr.icon}"></i>
                    <label>${attr.name}</label>
                </div>
            </div>`
        })

        // render the markup into the sidebar
        jQuery('.sidebar-container').html( `
            <div class="widget-container">
                ${componentMarkup.join('')}
            </div>
        ` );
    }


}