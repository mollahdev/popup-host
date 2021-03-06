import Sidebar from "./inc/sidebar";
import GlobalControls from "./inc/global-controls";
import widgets from "./widgets";
import state from "./inc/state";
import cssom from "./inc/cssom";
import Utility from "./inc/utility";


class Customizer extends Sidebar {

    constructor() {
        super()
        window.addEventListener('DOMContentLoaded', this.loadSavedMarkup.bind(this) );
    }

    /**
     * 
     * 
     * Create controls for sidebar
     * @var GlobalControls returns the global controls settings
     * @param type refers to the settings type = popup settings or widget settings
     * @param uid refers to the widget wrapper id
     * 
     */ 
    createControls(type, uid) {
        if( type === 'popup-settings' ) {
            this.createControlMarkup( this.globalControls, 'global' )
        } else {
            const widgetName = widgets[type].widgetAttribute.name;
            jQuery('.panel--info').text( widgetName );
            this.createControlMarkup( widgets[type], uid )
        }
    }

    /**
     * 
     * 
     * Create Widgets Markup for sidebar 
     * 
     */ 
    createWidget() {
        this.createWidgetMarkup()
    }

    /**
     * 
     * 
     * On saving content 
     * 
     */ 
    onSaveChanges() {

        const btn = jQuery('.save-changes-btn');
        btn.on( 'click', function() {
            btn.addClass('is-loading');
            const markup  = jQuery('.alpha-popup-builder').parent().html();
            cssom.getCSS().then( css => {
                jQuery.ajax({
                    type: "POST",
                    data: {
                        action: 'save',
                        css: JSON.stringify( css ),
                        html: JSON.stringify( markup ),
                        storage: JSON.stringify( state.get() )
                    },
                    url: 'https://bookerkit.com/popup-host/' + 'storage/index.php',
                    success: function(){
                        setTimeout(()=>{
                            btn.removeClass('is-loading');
                        },1000)
                    }
                });
            })
        })
    }

    onDropWidget( widget, position ) {
        Utility.uid().then( wrapperId => {
            
            const { name, render } = widget.widgetAttribute;
            state.add(wrapperId, {})

            // generate markup 
            if( typeof render === 'function' ) {
                const markup = render( wrapperId );
                jQuery('.alpha-popup-builder .apb-wrapper').append(markup)
                jQuery('.apb-' + wrapperId).css(position)
                jQuery('.popup-widget-element').draggable({ containment: 'parent' })
                jQuery('.panel--info').text(name);                
                Utility.applyControl( widget, wrapperId  ) // generate style from default values

            }
        }) // end of promise
    }


    /**
     * 
     * 
     * Drop widget 
     * 
     */ 
    dropWidget( self ) {
        //make widget panel element dragable
        jQuery('.popup-widget').draggable({
            helper: 'clone'
        })

        // make preview panel widget draggable
        const container = jQuery(document).find(".alpha-popup-builder");
        container.droppable({
            accept: '.popup-widget', 
            drop: function( event, ui ) {
                const parent    = jQuery(this).position();
                const type      = ui.draggable.data('type');
                const position  = {
                    left: ui.position.left - parent.left,
                    top: ui.position.top - parent.top,
                }

                self.onDropWidget( widgets[type], position );
            }
        });
    }

    /**
     * 
     * Remove Widget 
     * 
     */ 
    removeWidget( ) {
        const self = this;
        jQuery(document).on('click', '.remove-btn', function(ev){
            ev.preventDefault();
            ev.stopPropagation();
            const element   = jQuery(this).parent();
            const uid       = element.data('uid')
            const key       = element.data('name');
            const widget    = widgets[key];

            Utility.removeControl(widget, uid)
            jQuery('.panel--info').text('Widgets List');
            self.createWidget.call(self, 'widget-settings');
            self.sidebarSettings.ps.update()
            self.dropWidget( self );
            self.removeWidget( self );
            element.remove();
        })
    }

    /**
     * 
     * 
     * Load Saved markup 
     * 
     */ 
    loadSavedMarkup() {

        const self = this;
        fetch( 'https://bookerkit.com/popup-host/' + 'storage/index.php?all')
        .then( response => response.json())
        .then( response => {
            
            const { html, storage } = response.body;

            if( storage ) {
                state.set( JSON.parse( storage ) )
            }

            if( html ) {
                // load the markup into the dom
                jQuery('.alpha-popup-builder').parent().html(JSON.parse(html));
                // restore saved css 
                jQuery('.popup-widget-element').each( (i, item) =>{
                    const wrapperId     = item.dataset.uid;
                    const widgetConfig  = widgets[item.dataset.name]
                    Utility.applyControl( widgetConfig, wrapperId )
                })
                // enable drag and drop 
                self.dropWidget( self );
                jQuery('.popup-widget-element').draggable({ containment: 'parent' })
            }

            /**
             * 
             * After loading the entire saved markup and style load the drag and drop functionility
             * 
             */ 
            self.init.call( self );
            
        })
    }

    /**
     * 
     * 
     * Initalize customizer script
     * 
     */ 
    init() {

        const self = this;
        self.globalControls = new GlobalControls();
        self.sidebarInit();
        self.createControls('popup-settings');
        self.createWidget();
        self.onSaveChanges();
        self.dropWidget( self );
        self.removeWidget( self );

        // change sidebar markup based on what settings user want 
        jQuery(document).on('click', '.aside-btn, .popup-widget-element', function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            
            const type = this.dataset.type;
            // toggle the active class
            if( ['popup-settings', 'widget-settings'].includes(type) ) {
                jQuery('.aside-btn').removeClass('active');
                this.classList.add('active');
            }

            switch( type ) {
                case 'popup-settings': // when popup settings button clicked
                self.createControls.call(self, type);
                jQuery('.panel--info').text('Popup Settings');
                break;
                
                case 'widget-settings': // when all widgets button clicked
                jQuery('.panel--info').text('Widgets List');
                self.createWidget.call(self, type);
                break;
                
                case 'widget': // when individual widget is clicked
                jQuery('.aside-btn').removeClass('active');
                self.createControls.call(self, this.dataset.name, this.dataset.uid);
                break;
            }

            // update scrollbar 
            self.sidebarSettings.ps.update()
            self.dropWidget( self );
            self.removeWidget( self );

        })
    }

}

new Customizer();