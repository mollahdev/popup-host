import Sidebar from "./inc/sidebar";
import GlobalControls from "./inc/global-controls";
import widgets from "./widgets";
import state from "./inc/state";
import cssom from "./inc/cssom";


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
     * 
     */ 
    createControls(type, uid) {
        if( type === 'popup-settings' ) {
            this.createControlMarkup( this.globalControls, 'global' )
        } else {
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
                    url: 'http://localhost/popup-host/' + 'storage/index.php',
                    success: function(){
                        setTimeout(()=>{
                            btn.removeClass('is-loading');
                        },1000)
                    }
                });
            })
        })
    }
    

    /**
     * 
     * 
     * Create widget markup 
     * this method is responsible for creating unique id for widget wrapper
     * 
     */ 
    uid() {
        let store = state.get();
        const promise = new Promise((resolve, reject) => {
            function generateUID() {
                let uid = Math.floor((Math.random() * 10000) + 1);
                if( Reflect.has( store, uid ) ) {
                    generateUID();
                } else {
                    resolve(uid)
                }
            }
            generateUID()
        })
        return promise;
    }

    onDropWidget( widget, position ) {
        this.uid().then( wrapperId => {
            
            /**
             * 
             * 
             * @var name widget name
             * @var id widget id
             * @render function for creating markup 
             * 
             */ 
            const { name, id, render } = widget.widgetAttribute;
            state.add(wrapperId, {})
            const data = state.get()[wrapperId];

            // generate markup 
            if( typeof render === 'function' ) {
                const markup = render( wrapperId );

                jQuery('.alpha-popup-builder .apb-wrapper').append(markup)
                jQuery('.apb-' + wrapperId).css(position)
                jQuery('.popup-widget-element').draggable({ containment: 'parent' })
                jQuery('.panel--info').text(name);
                
                // generate style from default values
                Object.entries( widget ).map(([prop, attr]) => {
                    if( prop !== 'widgetAttribute' && attr.selector ) {
                        // use default value
                        data[prop] = attr.default;
                        // generate css
                        const initialStyle = attr.selector( '.apb-' + wrapperId, data[prop] );
                        if( initialStyle ) {
                            const { selector, style } = cssom.seperateStyle( initialStyle );
                            cssom.insert(selector, style)
                        }
                    }
                })
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
                const type = ui.draggable.data('type');
                self.onDropWidget( widgets[type], ui.position );
            }
        });
    }

    /**
     * 
     * Remove Widget 
     * 
     */ 
    removeWidget( ) {
        jQuery(document).on('click', '.remove-btn', function(ev){
            ev.preventDefault();
            ev.stopPropagation();
            const element = jQuery(this).parent();
            const uid = element.data('uid')
            const widgetId = element.attr('id');
            const widget = widgets[widgetId]
            const selector = new Set();
            state.remove( uid )
            Object.entries( widget ).map(([prop, attr]) => {
                if( prop !== 'widgetAttribute' && attr.selector ) {
                    const initialStyle = attr.selector( '.apb-' + uid, '' );
                    if( initialStyle ) {
                        selector.add( cssom.seperateStyle( initialStyle ).selector );
                    }
                }
            })
            cssom.delete( Array.from(selector) );
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
        fetch( 'http://localhost/popup-host/' + 'storage/index.php?all')
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
                    const widgetConfig  = widgets[item.id]
                    const data          = state.get()[wrapperId];

                     // generate style from default values
                    Object.entries( widgetConfig ).map(([prop, attr]) => {
                        if( prop !== 'widgetAttribute' && attr.selector ) {
                            
                            if( !Reflect.has( data, prop ) ) {
                                data[prop] =  attr.default;
                            }

                            const initialStyle = attr.selector( '.apb-' + wrapperId, data[prop] );
                            if( initialStyle ) {
                                const { selector, style } = cssom.seperateStyle( initialStyle );
                                cssom.insert(selector, style)
                            }
                        }
                    })
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
                self.createControls.call(self, this.id, this.dataset.uid);
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