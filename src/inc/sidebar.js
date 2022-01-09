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

    createControlMarkup( config ) {
        const { controls, css } = config;

        // generate control markup
        const componentMarkup = Object.keys(controls).map( key => {
            const attr = controls[key];
            return `
                <div class="control-item">
                    <label data-is-block="${attr.isLabelBlock}"> ${ attr.label } </label>
                    <div class="control-item--field field-type-${attr.type}">
                        <input type="text"/>
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