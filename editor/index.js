(()=>{"use strict";class t{config={};constructor(){const t=this;this.setWidgetAttribute&&(t.config.widgetAttribute=this.setWidgetAttribute()),this.render&&(t.config.widgetAttribute.render=this.render.bind(t.config)),this.registerControls.apply({addControl:function(e,n){n.isLabelInline=n.isLabelInline||!1,t.config[e]=n}})}static select(t,e){return`<select value="${t.default}" data-key=${e} type="select" class="popup-control--trigger">\n                ${Object.keys(t.options).map((e=>`<option ${e==t.default?"selected":""} value="${e}">${t.options[e]}</option>`)).join("")}\n            </select>\n            `}static text(t,e){return`<input \n                value="${t.default}" \n                data-key=${e} \n                type="text" \n                class="popup-control--trigger"\n            />`}static number(t,e){return`<input \n                value="${t.default}" \n                data-key=${e} \n                type="number" \n                class="popup-control--trigger"\n            />`}static color(t,e){return`<input \n                value="${t.default}" \n                data-key=${e} \n                type="color" \n                class="popup-control--trigger"\n            />`}static slider(t,e){return`<div class="slider-control">\n                <input\n                    class="popup-control--trigger"\n                    data-key=${e}\n                    type="range"\n                    min="0"  \n                    max=${t.max}  \n                    step=${t.step} \n                    value=${t.default}               \n                >\n                <span class="value">${t.default}px</span>\n            </div>\n            `}}let e={global:{}};const n={get:(t=!1)=>t?e[t]:e,set(t){e=t},add(t,n){e[t]=n},remove(t){delete e[t]}},o={text_widget:new class extends t{constructor(){return super(),this.config}setWidgetAttribute(){return{id:"text_widget",icon:"title",name:"Text Widget"}}registerControls(){this.addControl("text_content",{label:"Text Color",type:"text",default:"No credit card required. No Surprises ",selector:function(t,e){const n=jQuery(t);n.length&&n.find("span").text(e)}}),this.addControl("text_font_weight",{label:"Font Weight",type:"select",default:400,options:{400:"Regular",700:"Medium",900:"Bold"},selector:function(t,e){return`${t} span {\n                    font-weight: ${e};\n                }`}}),this.addControl("text_alignment",{label:"Alignment",type:"select",default:"center",options:{left:"Left",center:"Center",right:"Right"},selector:function(t,e){return`${t} span {\n                    text-align: ${e};\n                }`}}),this.addControl("text_color",{label:"Text Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(t,e){return`${t} span {\n                    color: ${e};\n                }`}}),this.addControl("text_font_size",{label:"Text Font Size",type:"slider",default:18,max:100,step:1,selector:function(t,e){return`${t} span {\n                    font-size: ${e}px;\n                }`}}),this.addControl("text_width",{label:"Width",type:"slider",default:250,max:800,step:1,selector:function(t,e){return`${t} span {\n                    width: ${e}px;\n                    display: inline-block;\n                }`}}),this.addControl("text_line_height",{label:"Line Height",type:"slider",default:24,max:200,step:1,selector:function(t,e){return`${t} span {\n                    line-height: ${e}px;\n                }`}}),this.addControl("zindex",{label:"Z-Index",type:"number",default:1,isLabelInline:!0,selector:function(t,e){return`${t} {\n                    z-index: ${e};\n                }`}})}render(t){return`\n            <div class="popup-widget-element apb-${t}" data-uid="${t}" id="text_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span>${this.text_content.default}</span>\n                </div>\n            </div>\n        `}},star_widget:new class extends t{constructor(){return super(),this.config}setWidgetAttribute(){return{id:"star_widget",icon:"star",name:"Star"}}registerControls(){this.addControl("star_color",{label:"Star Color",type:"color",default:"#c75943",isLabelInline:!0,selector:function(t,e){return`${t} span {\n                    color: ${e};\n                }`}}),this.addControl("star_size",{label:"Star Size",type:"slider",default:44,max:200,step:1,selector:function(t,e){return`${t} span {\n                    font-size: ${e}px;\n                    display: unset;\n                }`}}),this.addControl("zindex",{label:"Z-Index",type:"number",default:1,isLabelInline:!0,selector:function(t,e){return`${t} {\n                    z-index: ${e};\n                }`}})}render(t){return`\n            <div class="popup-widget-element apb-${t}" data-uid="${t}" id="star_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span class="material-icons-outlined">star</span>\n                </div>\n            </div>\n        `}},field_widget:new class extends t{constructor(){return super(),this.config}setWidgetAttribute(){return{id:"field_widget",icon:"email",name:"Email Input"}}registerControls(){this.addControl("input_placeholder",{label:"Placeholder",type:"text",default:"E-mail",selector:function(t,e){const n=jQuery(t);n.length&&n.find("input").attr(e)}}),this.addControl("input_font_size",{label:"Font Size",type:"slider",default:20,max:100,step:1,selector:function(t,e){return`${t} input {\n                    border: 0;\n                    font-size: ${e}px;\n                }`}}),this.addControl("input_width",{label:"Width",type:"slider",default:350,max:500,step:1,selector:function(t,e){return`${t} input {\n                    width: ${e}px;\n                }`}}),this.addControl("input_padding_x",{label:"Padding X",type:"slider",default:20,max:200,step:1,selector:function(t,e){return`${t} input {\n                    padding-left: ${e}px;\n                    padding-right: ${e}px;\n                }`}}),this.addControl("input_padding_y",{label:"Padding Y",type:"slider",default:20,max:200,step:1,selector:function(t,e){return`${t} input {\n                    padding-top: ${e}px;\n                    padding-bottom: ${e}px;\n                }`}}),this.addControl("input_radius",{label:"Input Radius",type:"slider",default:20,max:200,step:1,selector:function(t,e){return`${t} input {\n                    border-radius: ${e}px;\n                }`}}),this.addControl("input_color",{label:"Input Color",type:"color",default:"#B02827",isLabelInline:!0,selector:function(t,e){return`${t} input {\n                    display: inline-block;\n                    color: ${e};\n                }`}}),this.addControl("input_color_hover",{label:"Input Hover Color",type:"color",default:"#414142",isLabelInline:!0,selector:function(t,e){return`${t} input:hover {\n                    display: inline-block;\n                    color: ${e};\n                }`}}),this.addControl("input_bg_color",{label:"Background Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(t,e){return`${t} input {\n                    cursor:pointer;\n                    background: ${e};\n                }`}}),this.addControl("input_bg_color_hover",{label:"Input Background Hover",type:"color",default:"#eeeeee",isLabelInline:!0,selector:function(t,e){return`${t} input:hover {\n                    background: ${e};\n                }`}}),this.addControl("zindex",{label:"Z-Index",type:"number",default:1,isLabelInline:!0,selector:function(t,e){return`${t} {\n                    z-index: ${e};\n                }`}})}render(t){return`\n            <div class="popup-widget-element apb-${t}" data-uid="${t}" id="field_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <input class="email-field" type="email" placeholder="${this.input_placeholder.default}"/>\n                </div>\n            </div>\n        `}},button_widget:new class extends t{constructor(){return super(),this.config}setWidgetAttribute(){return{id:"button_widget",icon:"smart_button",name:"Submit Button"}}registerControls(){this.addControl("button_content",{label:"Button Label",type:"text",default:"SIGNUP NOW",selector:function(t,e){const n=jQuery(t);n.length&&n.find(".button").text(e)}}),this.addControl("button_weight",{label:"Font Weight",type:"select",default:700,options:{400:"Regular",700:"Medium",900:"Bold"},selector:function(t,e){return`${t} .button {\n                    font-weight: ${e};\n                }`}}),this.addControl("button_padding_font_size",{label:"Font Size",type:"slider",default:24,max:100,step:1,selector:function(t,e){return`${t} .button{\n                    font-size: ${e}px;\n                }`}}),this.addControl("button_padding_x",{label:"Padding X",type:"slider",default:97,max:200,step:1,selector:function(t,e){return`${t} .button{\n                    padding-left: ${e}px;\n                    padding-right: ${e}px;\n                }`}}),this.addControl("button_padding_y",{label:"Padding Y",type:"slider",default:15,max:200,step:1,selector:function(t,e){return`${t} .button{\n                    padding-top: ${e}px;\n                    padding-bottom: ${e}px;\n                }`}}),this.addControl("button_radius",{label:"Border Radius",type:"slider",default:20,max:200,step:1,selector:function(t,e){return`${t} .button{\n                    border-radius: ${e}px;\n                }`}}),this.addControl("button_color",{label:"Button Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(t,e){return`${t} .button {\n                    display: inline-block;\n                    color: ${e};\n                }`}}),this.addControl("button_color_hover",{label:"Button Hover Color",type:"color",default:"#414142",isLabelInline:!0,selector:function(t,e){return`${t} .button:hover {\n                    display: inline-block;\n                    color: ${e};\n                }`}}),this.addControl("button_bg_color",{label:"Background Color",type:"color",default:"#414142",isLabelInline:!0,selector:function(t,e){return`${t} .button {\n                    background: ${e};\n                    user-select: none;\n                    cursor: pointer;\n                }`}}),this.addControl("button_bg_color_hover",{label:"Background Hover Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(t,e){return`${t} .button:hover {\n                    background: ${e};\n                }`}}),this.addControl("zindex",{label:"Z-Index",type:"number",default:1,isLabelInline:!0,selector:function(t,e){return`${t} {\n                    z-index: ${e};\n                }`}})}render(t){return`\n            <div class="popup-widget-element apb-${t}" data-uid="${t}" id="button_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span class="button submit-btn">${this.button_content.default}</span>\n                </div>\n            </div>\n        `}},close_button_widget:new class extends t{constructor(){return super(),this.config}setWidgetAttribute(){return{id:"close_button_widget",icon:"disabled_by_default",name:"Close Button"}}registerControls(){this.addControl("button_content",{label:"Button Label",type:"text",default:"Remove",selector:function(t,e){const n=jQuery(t);n.length&&n.find(".button").text(e)}}),this.addControl("button_padding_font_size",{label:"Font Size",type:"slider",default:20,max:100,step:1,selector:function(t,e){return`${t} .button {\n                    font-size: ${e}px;\n                }`}}),this.addControl("button_padding_x",{label:"Padding X",type:"slider",default:20,max:200,step:1,selector:function(t,e){return`${t} .button {\n                    padding-left: ${e}px;\n                    padding-right: ${e}px;\n                }`}}),this.addControl("button_padding_y",{label:"Padding Y",type:"slider",default:10,max:200,step:1,selector:function(t,e){return`${t} .button{\n                    padding-top: ${e}px;\n                    padding-bottom: ${e}px;\n                }`}}),this.addControl("button_radius",{label:"Border Radius",type:"slider",default:35,max:200,step:1,selector:function(t,e){return`${t} .button{\n                    border-radius: ${e}px;\n                }`}}),this.addControl("button_color",{label:"Button Color",type:"color",default:"#B02827",isLabelInline:!0,selector:function(t,e){return`${t} .button {\n                    display: inline-block;\n                    color: ${e};\n                }`}}),this.addControl("button_color_hover",{label:"Button Hover Color",type:"color",default:"#414142",isLabelInline:!0,selector:function(t,e){return`${t} .button:hover {\n                    display: inline-block;\n                    color: ${e};\n                }`}}),this.addControl("button_bg_color",{label:"Background Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(t,e){return`${t} .button {\n                    cursor:pointer;\n                    background: ${e};\n                }`}}),this.addControl("button_bg_color_hover",{label:"Background Hover Color",type:"color",default:"#B02827",isLabelInline:!0,selector:function(t,e){return`${t} .button:hover {\n                    background: ${e};\n                }`}}),this.addControl("zindex",{label:"Z-Index",type:"number",default:1,isLabelInline:!0,selector:function(t,e){return`${t} {\n                    z-index: ${e};\n                }`}})}render(t){return`\n            <div class="popup-widget-element apb-${t}" data-uid="${t}" id="close_button_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span class="button popup-close-button">${this.button_content.default}</span>\n                </div>\n            </div>\n        `}}},r=new class{rule={};constructor(t){this.styleSheetId=t,this.fetchStylesheet()}seperateStyle(t){return{selector:t.split("{")[0].trim().replace(/\s{2,}/g," "),style:t.split("{")[1].trim().replace(/[&\/\\,$~.?<>{}]/g,"").replace(/\s{2,}/g," ")}}getCSS(){return new Promise(((t,e)=>{let n="";for(let t in this.rule)n+=`${t} {${this.rule[t].style}}`;document.getElementById(this.styleSheetId).innerText=n,this.rule={},this.fetchStylesheet(),t(n)}))}delete(t){for(let e of t)e=e.trim(),delete this.rule[e]}insert(t,e){if(t=t.trim(),this.rule[t]){const n=this.rule[t].index,o=this.sheet.rules.item(n).style;e.split(";").map((e=>{let n=e.split(":")[0],r=e.split(":")[1];if(n&&r){const e=r.includes("important")?"important":"";"important"===e&&(r=r.split("!")[0]),o.setProperty(n.trim(),r.trim(),e),this.rule[t].style=o.cssText}}))}else this.rule[t]={index:this.length,style:e},this.sheet.insertRule(`${t} {${e}}`,this.length),this.length=this.sheet.rules.length}cssDeclaration(t,e){return t.split(e).pop().replace(/[&\/\\,$~.?<>{}]/g,"").trim()}mergeRule(t,e,n){const o=this.rule[e].style,r=t.rules.item(n);let i=this.cssDeclaration(r.cssText,e);this.rule[e].style=i+o}fetchStylesheet(){const t=document.getElementById(this.styleSheetId).sheet,e=t.rules,n=Object.keys(e).reverse();for(let o of n){const n=e[o];if("object"==typeof n){const e=n.selectorText;Reflect.has(this.rule,e)?(this.rule[e].index=o,this.mergeRule(t,e,o),t.deleteRule(o)):this.rule[e]={index:o,style:this.cssDeclaration(n.cssText,e)}}}let o=0;for(let e in this.rule){this.rule[e].index=o;const n=this.rule[e].style;t.deleteRule(o),t.insertRule(`${e} {${n}}`,o),o++}this.sheet=t,this.length=t.rules.length}}("builder-css");class i extends t{constructor(){return super(),this.config}setWidgetAttribute(){return{id:"global",icon:"title",name:"Popup Settings"}}registerControls(){this.addControl("global_popup_bg",{label:"Popup Background Color",type:"color",default:"#e07a5f",isLabelInline:!0,selector:function(t,e){return`${t} .apb-wrapper {\n                    background-color: ${e};\n                    box-shadow:0 0 0 var(--border-width) ${e};\n                }`}}),this.addControl("global_popup_border_color",{label:"Popup Border Color",type:"color",default:"#eeeeee",isLabelInline:!0,selector:function(t,e){return`${t} .apb-wrapper {\n                    border-color: ${e};\n                    border-style: solid;\n                }`}}),this.addControl("global_popup_border_width",{label:"Popup Border Width",type:"slider",default:5,max:50,step:1,selector:function(t,e){return jQuery(`${t} .apb-wrapper`).css({"--border-width":2*e+"px"}),`${t} .apb-wrapper {\n                    border-width: ${e}px;\n                }`}}),this.addControl("global_popup_radius",{label:"Popup Radius",type:"slider",default:500,max:500,step:10,selector:function(t,e){return`${t} .apb-wrapper {\n                    position: relative;\n                    border-radius: ${e}px;\n                }`}}),this.addControl("global_popup_width",{label:"Popup Width",type:"slider",default:600,max:1e3,step:10,selector:function(t,e){return`${t} .apb-wrapper{\n                    width: ${e}px;\n                }`}}),this.addControl("global_popup_height",{label:"Popup Height",type:"slider",default:600,max:1e3,step:10,selector:function(t,e){return`${t} .apb-wrapper{\n                    height: ${e}px;\n                }`}})}}class l{static uid(){let t=n.get();return new Promise(((e,n)=>{!function n(){let o=Math.floor(1e4*Math.random()+1);Reflect.has(t,o)?n():e(o)}()}))}static applyControl(t,e){const o=n.get(e);Object.entries(t).map((([t,n])=>{if("widgetAttribute"!==t&&n.selector){Reflect.has(o,t)||(o[t]=n.default);const i=n.selector(".apb-"+e,o[t]);if(i){const{selector:t,style:e}=r.seperateStyle(i);r.insert(t,e)}}}))}static removeControl(t,e){const o=new Set;n.remove(e),Object.entries(t).map((([t,n])=>{if("widgetAttribute"!==t&&n.selector){const t=n.selector(".apb-"+e,"");t&&o.add(r.seperateStyle(t).selector)}})),r.delete(Array.from(o))}}new class extends class{sidebarSettings={wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20};sidebarInit(){const t=new PerfectScrollbar(".aside__container",this.sidebarSettings);this.sidebarSettings.ps=t}createControlMarkup(e,o){const i=n.get()[o],l=".apb-"+o,s=Object.keys(e).map((n=>{const o=e[n],s=t[o.type];let a="";if(!s)return"";Reflect.has(i,n)||(i[n]=o.default),a=i[n];const d=o.selector(l,a);if(d){const{selector:t,style:e}=r.seperateStyle(d);r.insert(t,e)}return`\n                <div class="control-item" data-inline="${o.isLabelInline}">\n                    <label> ${o.label} </label>\n                    <div class="control-item--field field-type-${o.type}">\n                        ${s({...o,default:a},n)}\n                    </div>\n                </div>\n            `}));jQuery(".aside__container").html(`\n            <div class="control-container">\n                ${s.join("")}\n            </div>\n        `),jQuery(".popup-control--trigger").on("input",(function(t){t.preventDefault(),t.stopPropagation();const n=this.value,o=this.dataset.key;i[o]=n;const s=e[o].selector(l,i[o]);if(s){const{selector:t,style:e}=r.seperateStyle(s);r.insert(t,e)}"range"===this.type&&(this.nextElementSibling.innerText=n+"px")}))}createWidgetMarkup(){const t=Object.keys(o).map((t=>{const{widgetAttribute:e}=o[t];return`\n            <div class="popup-element" id="${e.id}">\n                <div class="popup-widget" draggable="true" data-type="${t}">\n                    <span class="material-icons-outlined">${e.icon}</span>\n                    <label>${e.name}</label>\n                </div>\n            </div>`}));jQuery(".aside__container").html(`\n            <div class="widget-container">\n                ${t.join("")}\n            </div>\n        `)}}{constructor(){super(),window.addEventListener("DOMContentLoaded",this.loadSavedMarkup.bind(this))}createControls(t,e){if("popup-settings"===t)this.createControlMarkup(this.globalControls,"global");else{const n=o[t].widgetAttribute.name;jQuery(".panel--info").text(n),this.createControlMarkup(o[t],e)}}createWidget(){this.createWidgetMarkup()}onSaveChanges(){const t=jQuery(".save-changes-btn");t.on("click",(function(){t.addClass("is-loading");const e=jQuery(".alpha-popup-builder").parent().html();r.getCSS().then((o=>{jQuery.ajax({type:"POST",data:{action:"save",css:JSON.stringify(o),html:JSON.stringify(e),storage:JSON.stringify(n.get())},url:"http://localhost/popup-host/storage/index.php",success:function(){setTimeout((()=>{t.removeClass("is-loading")}),1e3)}})}))}))}onDropWidget(t,e){l.uid().then((o=>{const{name:r,id:i,render:s}=t.widgetAttribute;if(n.add(o,{}),"function"==typeof s){const n=s(o);jQuery(".alpha-popup-builder .apb-wrapper").append(n),jQuery(".apb-"+o).css(e),jQuery(".popup-widget-element").draggable({containment:"parent"}),jQuery(".panel--info").text(r),l.applyControl(t,o)}}))}dropWidget(t){jQuery(".popup-widget").draggable({helper:"clone"}),jQuery(document).find(".alpha-popup-builder").droppable({accept:".popup-widget",drop:function(e,n){const r=jQuery(this).position(),i=n.draggable.data("type"),l={left:n.position.left-r.left,top:n.position.top-r.top};t.onDropWidget(o[i],l)}})}removeWidget(){jQuery(document).on("click",".remove-btn",(function(t){t.preventDefault(),t.stopPropagation();const e=jQuery(this).parent(),n=e.data("uid"),r=e.attr("id"),i=o[r];l.removeControl(i,n),e.remove()}))}loadSavedMarkup(){const t=this;fetch("http://localhost/popup-host/storage/index.php?all").then((t=>t.json())).then((e=>{const{html:r,storage:i}=e.body;i&&n.set(JSON.parse(i)),r&&(jQuery(".alpha-popup-builder").parent().html(JSON.parse(r)),jQuery(".popup-widget-element").each(((t,e)=>{const n=e.dataset.uid,r=o[e.id];l.applyControl(r,n)})),t.dropWidget(t),jQuery(".popup-widget-element").draggable({containment:"parent"})),t.init.call(t)}))}init(){const t=this;t.globalControls=new i,t.sidebarInit(),t.createControls("popup-settings"),t.createWidget(),t.onSaveChanges(),t.dropWidget(t),t.removeWidget(t),jQuery(document).on("click",".aside-btn, .popup-widget-element",(function(e){e.preventDefault(),e.stopPropagation();const n=this.dataset.type;switch(["popup-settings","widget-settings"].includes(n)&&(jQuery(".aside-btn").removeClass("active"),this.classList.add("active")),n){case"popup-settings":t.createControls.call(t,n),jQuery(".panel--info").text("Popup Settings");break;case"widget-settings":jQuery(".panel--info").text("Widgets List"),t.createWidget.call(t,n);break;case"widget":jQuery(".aside-btn").removeClass("active"),t.createControls.call(t,this.id,this.dataset.uid)}t.sidebarSettings.ps.update(),t.dropWidget(t),t.removeWidget(t)}))}}})();
//# sourceMappingURL=index.js.map