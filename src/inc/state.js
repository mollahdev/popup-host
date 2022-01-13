let STORAGE = {
    global: {}
};

const state = {
    get() {
        return STORAGE
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
