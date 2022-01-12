/**
 * 
 * 
 * @author Ashraf
 * @version 1.0.0
 * @last_update 15 January 2021
 * @email mollah.dev@gmail.com
 * @class StylesheetManager
 * @description this class is responsible for managing stylesheet. 
 * It helps to keep unique selector and style by merging them together 
 */ 

class StylesheetManager {
    rule = {};
    constructor( id ) {
        this.styleSheetId = id;
        this.fetchStylesheet();
    }

    /**
     * 
     * 
     * collect all the css and return as string
     * 
     */ 
    getCSS() {
        const promise = new Promise((resolve, reject) => {
            let css = '';
            for( let selector in this.rule ) {
                const style = this.rule[selector].style;
                css += `${selector} {${style}}`;
            }

            document.getElementById(this.styleSheetId).innerText = css;
            this.rule = {};
            this.fetchStylesheet();
            resolve(css)
        })
        return promise;
    }

    /**
     * 
     * @param selectors this arguments contains multiple selector
     * 
     */ 
    delete( selectors ) {
        for( let selector of selectors ) {
            selector = selector.trim();
            delete this.rule[selector]
        }
    }
    
    /**
     * 
     * 
     * inert rules into the cssom
     * if the selector already created, put the new new style into the existing rule otherwise create a new rule
     * @param selector dom selector
     * @param newStyle css properties and values
     * 
     */

    insert( selector, newStyle ) {
        selector = selector.trim();
        // check is the selector exists
        if( this.rule[selector] ) {
            let { index, style } = this.rule[selector];
            style += newStyle;
            this.rule[selector].style = style;
            this.sheet.insertRule(`${selector} {${style}}`, index)
            this.sheet.deleteRule( index + 1 );
        }else {
            this.rule[selector] = {
                index: this.length, 
                style: newStyle
            }
            this.sheet.insertRule(`${selector} {${newStyle}}`, this.length);
            this.length = this.sheet.rules.length
        }
    } 
    /*
     * 
     * 
     * Get css declaration
     */ 
    cssDeclaration( str, selector ) {
        const declaration = str.split(selector).pop().replace(/[&\/\\#,$~.?<>{}]/g, '')
        return declaration.trim()
    }
    /**
     * 
     * 
     * this method will run when stylesheet load first time
     * 
     */ 
    mergeRule( sheet, selector, i ) {
        const prevStyle = this.rule[selector].style;
        const nextRule  = sheet.rules.item(i);
        let nextStyle   = this.cssDeclaration( nextRule.cssText, selector );
        this.rule[selector].style = nextStyle + prevStyle
    }

    /**
     * 
     * 
     * Get stylesheet from DOM
     * 
     */ 
    fetchStylesheet() {

        const sheet = document.getElementById(this.styleSheetId).sheet;
        const rules = sheet.rules;
        const keys  = Object.keys(rules).reverse();

        for( let i of keys ) {
            const rule = rules[i];
            if( typeof rule === 'object' ) {
                const selector = rule.selectorText
                if( Reflect.has(this.rule, selector) ) {
                    this.rule[selector].index = i;
                    this.mergeRule( sheet, selector, i );
                    sheet.deleteRule(i)
                } 
                else {
                    this.rule[selector] = {
                        index : i,
                        style : this.cssDeclaration(rule.cssText, selector)
                    };
                }  
            }
        }

        // insert the merged css into the stylesheet
        // Note : this code will execute when stylesheet load first time

        let i = 0;
        for( let selector in this.rule ) {
            this.rule[selector].index = i;
            const style = this.rule[selector].style;
            sheet.deleteRule(i);
            sheet.insertRule(`${selector} {${style}}`, i);
            i++;
        }
        
        // assigned the filtered and merged css rules into the class
        this.sheet = sheet;
        this.length= sheet.rules.length;
    }

    
}

const cssom = new StylesheetManager('builder-css');

/* use case */ 
cssom.delete(['*', 'body h1', 'h2', 'body', 'h1', '#one span:hover'])
cssom.insert('h2', 'background: red; color: white')
cssom.getCSS().then( css => {
    console.log(css)
})