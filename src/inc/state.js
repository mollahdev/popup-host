/**
 * 
 * @file state
 * this state object is responsible for managing unique uid and widget settings through out the application 
 * 
 */ 


let STORAGE = {
    global: {}
};

const state = {
    get( target = false ) {
        if( target ) {
            return STORAGE[target]
        } else {
            return STORAGE
        }
    },
    set( value ) {
        STORAGE = value;
    },
    add( property, value ) {
        STORAGE[property] = value;
    }, 
    remove( property ) {
        delete STORAGE[property]
    } 
}

export default state
