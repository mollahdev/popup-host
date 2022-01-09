import ControlBase from "./base";
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

        jQuery('.sidebar-container').on('input', '.popup-control--trigger', function() {
            
            const value = this.value;
            const key = this.dataset.key
            let css = ''; 

            // generate style for popup
            controls[key].default = value;
            Object.values( controls ).forEach( control => {
                if( control.selector ) {
                    css += control.prefix + control.selector.call(control) + '\n\n';
                }
            })

            // change old stylesheet with new styles
            if( controls[key].selector ) {
               jQuery(`#${sheetName}`).text(css)
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
        const componentMarkup = `
            <div class="popup-element">
                <div class="popup-widget" draggable="true">
                    <i class="popup-widgets"></i>
                    <label>Text</label>
                </div>
            </div>
            <div class="popup-element">
                <div class="popup-widget" draggable="true">
                    <i class="popup-widgets"></i>
                    <label>Text</label>
                </div>
            </div>
            <div class="popup-element">
                <div class="popup-widget" draggable="true">
                    <i class="popup-widgets"></i>
                    <label>Text</label>
                </div>
            </div>
        `

        // render the markup into the sidebar
        jQuery('.sidebar-container').html( `
            <div class="widget-container">
                ${componentMarkup}
            </div>
        ` );

    }


}