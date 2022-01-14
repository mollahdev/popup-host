import state from './state';
import cssom from './cssom';

export default class Utility {
    /**
     * 
     * 
     * this uid method is responsible for creating unique number for the widget wrapper 
     * 
     */ 
    static uid() {
        let store = state.get();
        const promise = new Promise((resolve, reject) => {
            function generateUID() {
                let uid = Math.floor((Math.random() * 10000) + 1);
                // check weather the number already used
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

    /**
     * 
     * 
     * this method is responsible for finding controls of a widget
     * @param widget refers to the widget 
     * @param uid refers to the unique id / widget wrapper
     */ 
    static applyControl( widget, uid ) {
        const data = state.get(uid)
         Object.entries( widget ).map(([prop, attr]) => {
            if( prop !== 'widgetAttribute' && attr.selector ) {

                if( !Reflect.has( data, prop ) ) {
                    data[prop] =  attr.default;
                }

                const initialStyle = attr.selector( '.apb-' + uid, data[prop] );
                if( initialStyle ) {
                    const { selector, style } = cssom.seperateStyle( initialStyle );
                    cssom.insert(selector, style)
                }
            }
        })
    }

    /**
     * 
     * 
     * 
     * on remove widget 
     * @param widget refers to the widget 
     * @param uid refers to the unique id / widget wrapper
     */ 

    static removeControl( widget, uid ) {
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
    }

}