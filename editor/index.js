(()=>{"use strict";class t{config={};css="";constructor(t=!1){const e=this;this.registerControls.apply({addControl:function(t,n){n.selector&&(n.prefix="#popup ",n.selector.call(n)&&(e.css+=n.prefix+n.selector.call(n)+"\n\n")),n.isLabelInline=n.isLabelInline||!1,e.config[t]=n}})}static select(t,e){return`<select value="${t.default}" data-key=${e} type="select" class="popup-control--trigger">\n                ${Object.keys(t.options).map((e=>`<option value="${e}">${t.options[e]}</option>`)).join("")}\n            </select>\n            `}static text(t,e){return`<input \n                value="${t.default}" \n                data-key=${e} \n                type="text" \n                class="popup-control--trigger"\n            />`}static color(t,e){return`<input \n                value="${t.default}" \n                data-key=${e} \n                type="color" \n                class="popup-control--trigger"\n            />`}static slider(t,e){return`<div class="slider-control">\n                <input\n                    class="popup-control--trigger"\n                    data-key=${e}\n                    type="range"\n                    min="0"  \n                    max=${t.max}  \n                    step=${t.step} \n                    value=${t.default}               \n                >\n                <span class="value">${t.default}px</span>\n            </div>\n            `}}const e={heading_widget:new class extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"heading_widget",icon:"popup-widgets",name:"Heading",render:this.render.bind(this.config)}}registerControls(){this.addControl("text_content",{label:"Text Color",type:"text",default:"All the text and elements in this popup should be editable and dragable",selector:function(){const t=jQuery(this.prefix);t.length&&t.find("#heading_widget h2").text(this.default)}}),this.addControl("text_font_alignment",{label:"Font Weight",type:"select",default:"left",options:{left:"Left",center:"Center",right:"Right"},selector:function(){return`#heading_widget h2 {\n                    text-align: ${this.default};\n                }`}}),this.addControl("text_font_weight",{label:"Font Weight",type:"select",default:400,options:{400:"Regular",700:"Medium",900:"Bold"},selector:function(){return`#heading_widget h2 {\n                    font-weight: ${this.default};\n                }`}}),this.addControl("text_color",{label:"Text Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(){return`#heading_widget h2 {\n                    color: ${this.default};\n                }`}}),this.addControl("text_font_size",{label:"Text Font Size",type:"slider",default:24,max:100,step:1,selector:function(){return`#heading_widget h2 {\n                    font-size: ${this.default}px;\n                }`}}),this.addControl("text_padding_x",{label:"Padding X",type:"slider",default:20,max:600,step:1,selector:function(){return`#heading_widget h2 {\n                    padding-left: ${this.default}px;\n                    padding-right: ${this.default}px;\n                }`}}),this.addControl("text_line_height",{label:"Line Height",type:"slider",default:24,max:600,step:1,selector:function(){return`#heading_widget h2 {\n                    line-height: ${this.default}px;\n                }`}})}render(){return`\n            <div class="popup-widget-element" id="heading_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <h2>${this.text_content.default}</h2>\n                </div>\n            </div>\n        `}},text_widget:new class extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"text_widget",icon:"popup-widgets",name:"Text Widget",render:this.render.bind(this.config)}}registerControls(){this.addControl("text_content",{label:"Text Color",type:"text",default:"No credit card required. No Surprises ",selector:function(){const t=jQuery(this.prefix);t.length&&t.find("#text_widget span").text(this.default)}}),this.addControl("text_font_weight",{label:"Font Weight",type:"select",default:400,options:{400:"Regular",700:"Medium",900:"Bold"},selector:function(){return`#text_widget span {\n                    font-weight: ${this.default};\n                }`}}),this.addControl("text_color",{label:"Text Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(){return`#text_widget span {\n                    color: ${this.default};\n                }`}}),this.addControl("text_font_size",{label:"Text Font Size",type:"slider",default:18,max:100,step:1,selector:function(){return`#text_widget span {\n                    font-size: ${this.default}px;\n                }`}}),this.addControl("text_padding_x",{label:"Padding X",type:"slider",default:20,max:600,step:1,selector:function(){return`#text_widget span {\n                    padding-left: ${this.default}px;\n                    padding-right: ${this.default}px;\n                }`}})}render(){return`\n            <div class="popup-widget-element" id="text_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span>${this.text_content.default}</span>\n                </div>\n            </div>\n        `}},star_widget:new class extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"star_widget",icon:"popup-widgets",name:"Star 1",render:this.render.bind(this.config)}}registerControls(){this.addControl("star_color",{label:"Star Color",type:"color",default:"#c75943",isLabelInline:!0,selector:function(){return`#star_widget span {\n                    color: ${this.default};\n                }`}}),this.addControl("star_size",{label:"Star Size",type:"slider",default:44,max:200,step:1,selector:function(){return`#star_widget span {\n                    display: inline-block;\n                    font-size: ${this.default}px;\n                }`}})}render(){return'\n            <div class="popup-widget-element" id="star_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span class="popup-star"></span>\n                </div>\n            </div>\n        '}},star_widget2:new class extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"star_widget2",icon:"popup-widgets",name:"Star 2",render:this.render.bind(this.config)}}registerControls(){this.addControl("star_color",{label:"Star Color",type:"color",default:"#c75943",isLabelInline:!0,selector:function(){return`#star_widget2 span {\n                    color: ${this.default};\n                }`}}),this.addControl("star_size",{label:"Star Size",type:"slider",default:44,max:200,step:1,selector:function(){return`#star_widget2 span {\n                    display: inline-block;\n                    font-size: ${this.default}px;\n                }`}})}render(){return'\n            <div class="popup-widget-element" id="star_widget2" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span class="popup-star"></span>\n                </div>\n            </div>\n        '}},star_widget3:new class extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"star_widget3",icon:"popup-widgets",name:"Star 3",render:this.render.bind(this.config)}}registerControls(){this.addControl("star_color",{label:"Star Color",type:"color",default:"#c75943",isLabelInline:!0,selector:function(){return`#star_widget3 span {\n                    color: ${this.default};\n                }`}}),this.addControl("star_size",{label:"Star Size",type:"slider",default:44,max:200,step:1,selector:function(){return`#star_widget3 span {\n                    display: inline-block;\n                    font-size: ${this.default}px;\n                }`}})}render(){return'\n            <div class="popup-widget-element" id="star_widget3" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span class="popup-star"></span>\n                </div>\n            </div>\n        '}},field_widget:new class extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"field_widget",icon:"popup-widgets",name:"Field Widget",render:this.render.bind(this.config)}}registerControls(){this.addControl("input_placeholder",{label:"Placeholder",type:"text",default:"E-mail",selector:function(){const t=jQuery(this.prefix);t.length&&t.find("#field_widget input").attr("placeholder",this.default)}}),this.addControl("input_font_size",{label:"Font Size",type:"slider",default:20,max:100,step:1,selector:function(){return`#field_widget input {\n                    border: 0;\n                    font-size: ${this.default}px\n                }`}}),this.addControl("input_padding_x",{label:"Padding X",type:"slider",default:20,max:200,step:1,selector:function(){return`#field_widget input {\n                    padding-left: ${this.default}px;\n                    padding-right: ${this.default}px;\n                }`}}),this.addControl("input_padding_y",{label:"Padding Y",type:"slider",default:20,max:200,step:1,selector:function(){return`#field_widget input {\n                    padding-top: ${this.default}px;\n                    padding-bottom: ${this.default}px;\n                }`}}),this.addControl("input_radius",{label:"Input Radius",type:"slider",default:20,max:200,step:1,selector:function(){return`#field_widget input {\n                    border-radius: ${this.default}px;\n                }`}}),this.addControl("input_color",{label:"Input Color",type:"color",default:"#B02827",isLabelInline:!0,selector:function(){return`#field_widget input {\n                    display: inline-block;\n                    color: ${this.default};\n                }`}}),this.addControl("input_color_hover",{label:"Input Hover Color",type:"color",default:"#414142",isLabelInline:!0,selector:function(){return`#field_widget input:hover {\n                    display: inline-block;\n                    color: ${this.default};\n                }`}}),this.addControl("input_bg_color",{label:"Background Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(){return`#field_widget input {\n                    cursor:pointer;\n                    background: ${this.default};\n                }`}}),this.addControl("input_bg_color_hover",{label:"Input Hover Color",type:"color",default:"#eeeeee",isLabelInline:!0,selector:function(){return`#field_widget input:hover {\n                    background: ${this.default};\n                }`}})}render(){return`\n            <div class="popup-widget-element" id="field_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <input class="email-field" type="email" placeholder="${this.input_placeholder.default}"/>\n                </div>\n            </div>\n        `}},button_widget:new class extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"button_widget",icon:"popup-widgets",name:"Button Widget",render:this.render.bind(this.config)}}registerControls(){this.addControl("button_content",{label:"Button Label",type:"text",default:"SIGNUP NOW",selector:function(){const t=jQuery(this.prefix);t.length&&t.find("#button_widget .button").text(this.default)}}),this.addControl("button_padding_font_size",{label:"Font Size",type:"slider",default:20,max:100,step:1,selector:function(){return`#button_widget .button{\n                    font-size: ${this.default}px\n                }`}}),this.addControl("button_padding_x",{label:"Padding X",type:"slider",default:20,max:200,step:1,selector:function(){return`#button_widget .button{\n                    padding-left: ${this.default}px;\n                    padding-right: ${this.default}px;\n                }`}}),this.addControl("button_padding_y",{label:"Padding Y",type:"slider",default:20,max:200,step:1,selector:function(){return`#button_widget .button{\n                    padding-top: ${this.default}px;\n                    padding-bottom: ${this.default}px;\n                }`}}),this.addControl("button_radius",{label:"Border Radius",type:"slider",default:20,max:200,step:1,selector:function(){return`#button_widget .button{\n                    border-radius: ${this.default}px;\n                }`}}),this.addControl("button_color",{label:"Button Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(){return`#button_widget .button {\n                    display: inline-block;\n                    color: ${this.default};\n                }`}}),this.addControl("button_color_hover",{label:"Button Hover Color",type:"color",default:"#414142",isLabelInline:!0,selector:function(){return`#button_widget .button:hover {\n                    display: inline-block;\n                    color: ${this.default};\n                }`}}),this.addControl("button_bg_color",{label:"Background Color",type:"color",default:"#414142",isLabelInline:!0,selector:function(){return`#button_widget .button {\n                    background: ${this.default};\n                }`}}),this.addControl("button_bg_color_hover",{label:"Background Hover Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(){return`#button_widget .button:hover {\n                    background: ${this.default};\n                }`}})}render(){return`\n            <div class="popup-widget-element" id="button_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span class="button submit-btn">${this.button_content.default}</span>\n                </div>\n            </div>\n        `}},close_button_widget:new class extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"close_button_widget",icon:"popup-widgets",name:"Close Button",render:this.render.bind(this.config)}}registerControls(){this.addControl("button_content",{label:"Button Label",type:"text",default:"Remove",selector:function(){const t=jQuery(this.prefix);t.length&&t.find("#close_button_widget .button").text(this.default)}}),this.addControl("button_padding_font_size",{label:"Font Size",type:"slider",default:20,max:100,step:1,selector:function(){return`#close_button_widget .button {\n                    font-size: ${this.default}px\n                }`}}),this.addControl("button_padding_x",{label:"Padding X",type:"slider",default:20,max:200,step:1,selector:function(){return`#close_button_widget .button {\n                    padding-left: ${this.default}px;\n                    padding-right: ${this.default}px;\n                }`}}),this.addControl("button_padding_y",{label:"Padding Y",type:"slider",default:20,max:200,step:1,selector:function(){return`#close_button_widget .button{\n                    padding-top: ${this.default}px;\n                    padding-bottom: ${this.default}px;\n                }`}}),this.addControl("button_radius",{label:"Border Radius",type:"slider",default:20,max:200,step:1,selector:function(){return`#close_button_widget .button{\n                    border-radius: ${this.default}px;\n                }`}}),this.addControl("button_color",{label:"Button Color",type:"color",default:"#B02827",isLabelInline:!0,selector:function(){return`#close_button_widget .button {\n                    display: inline-block;\n                    color: ${this.default};\n                }`}}),this.addControl("button_color_hover",{label:"Button Hover Color",type:"color",default:"#414142",isLabelInline:!0,selector:function(){return`#close_button_widget .button:hover {\n                    display: inline-block;\n                    color: ${this.default};\n                }`}}),this.addControl("button_bg_color",{label:"Background Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(){return`#close_button_widget .button {\n                    cursor:pointer;\n                    background: ${this.default};\n                }`}}),this.addControl("button_bg_color_hover",{label:"Background Hover Color",type:"color",default:"#B02827",isLabelInline:!0,selector:function(){return`#close_button_widget .button:hover {\n                    background: ${this.default};\n                }`}})}render(t=""){return`\n            <div class="popup-widget-element" id="close_button_widget" data-type="widget">\n                <i class="remove-btn">x</i>\n                <div>\n                    <span class="button popup-close-button">${this.button_content.default}</span>\n                </div>\n            </div>\n        `}}};class n extends t{constructor(){return super(),{controls:this.config,css:this.css,sheet:"popup-stylesheet"}}registerControls(){this.addControl("global_popup_bg",{label:"Popup Background Color",type:"color",default:"#e07a5f",isLabelInline:!0,selector:function(){return`.wrapper {\n                    background-color: ${this.default};\n                    box-shadow: 0px 0px 0 var(--border-width) ${this.default};\n                }`}}),this.addControl("global_popup_border_color",{label:"Popup Border Color",type:"color",default:"#ffffff",isLabelInline:!0,selector:function(){return`.wrapper{\n                    border-color: ${this.default};\n                    border-style: solid;\n                }`}}),this.addControl("global_popup_border_width",{label:"Popup Border Width",type:"slider",default:5,max:50,step:1,selector:function(){return` .wrapper{\n                    border-width: ${this.default}px;\n                    --border-width: ${2*this.default}px;\n                }`}}),this.addControl("global_popup_radius",{label:"Popup Radius",type:"slider",default:500,max:500,step:10,selector:function(){return`.wrapper {\n                    border-radius: ${this.default}px\n                }`}}),this.addControl("global_popup_width",{label:"Popup Width",type:"slider",default:600,max:1e3,step:10,selector:function(){return`.wrapper{\n                    width: ${this.default}px\n                }`}}),this.addControl("global_popup_height",{label:"Popup Height",type:"slider",default:600,max:1e3,step:10,selector:function(){return` .wrapper{\n                    height: ${this.default}px\n                }`}})}}new class extends class{sidebarSettings={wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20};sidebarInit(){const t=new PerfectScrollbar(".customizer__sidebar--content",this.sidebarSettings);this.sidebarSettings.ps=t}createControlMarkup(e,n){const{controls:o}=e,i=Object.keys(o).map((e=>{const n=o[e],i=t[n.type];return i?`\n                <div class="control-item" data-inline="${n.isLabelInline}">\n                    <label> ${n.label} </label>\n                    <div class="control-item--field field-type-${n.type}">\n                        ${i(n,e)}\n                    </div>\n                </div>\n            `:""}));jQuery(".sidebar-container").html(`\n            <div class="control-container">\n                ${i.join("")}\n            </div>\n        `),jQuery(".popup-control--trigger").on("input",(function(t){t.preventDefault(),t.stopPropagation();const e=this.value,i=this.dataset.key;let l="";o[i].default=e,Object.values(o).forEach((t=>{t.selector&&t.selector.call(t)&&(l+=t.prefix+t.selector.call(t)+"\n\n")})),o[i].selector&&(0===jQuery(`#stylesheet-${n}`).length&&jQuery("head").append(`<style id="stylesheet-${n}">`+l+"</style>"),jQuery(`#stylesheet-${n}`).text(l)),"range"===this.type&&(this.nextElementSibling.innerText=e+"px")}))}createWidgetMarkup(){const t=Object.keys(e).map((t=>{const n=e[t];return`\n            <div class="popup-element">\n                <div class="popup-widget" draggable="true" data-type="${t}">\n                    <i class="${n.icon}"></i>\n                    <label>${n.name}</label>\n                </div>\n            </div>`}));jQuery(".sidebar-container").html(`\n            <div class="widget-container">\n                ${t.join("")}\n            </div>\n        `)}}{constructor(){super(),window.addEventListener("DOMContentLoaded",this.init.bind(this))}createControls(t){const n="global-settings"===t?this.globalControls:e[t];this.createControlMarkup(n,t)}createWidget(){this.createWidgetMarkup()}getStyles(){return new Promise(((t,e)=>{const n=jQuery(".popup-widget-element");let o=jQuery("#all-style").text();o+=jQuery("#stylesheet-global-settings").text(),n.each(((t,e)=>{o+=jQuery(`#stylesheet-${e.id}`).text()})),t(o)}))}onSaveChanges(){const t=this,e=jQuery(".save-changes-btn");e.on("click",(function(){e.addClass("is-loading");const n=jQuery("#popup").parent().html();t.getStyles().then((t=>{const o={css:t,html:n};jQuery.ajax({type:"POST",data:o,url:"https://bookerkit.com/popup-host/storage/write.php",success:function(){setTimeout((()=>{e.removeClass("is-loading")}),1e3)}})}))}))}generateStyleSheet(t="global-settings",e=!0,n=""){if(jQuery(`#stylesheet-${t}`).length>0)return!1;e?jQuery("head").append(`<style id="stylesheet-${t}">`+this.globalControls.css+"</style>"):jQuery("head").append(`<style id="stylesheet-${t}">`+n+"</style>")}onDropWidget(t){const e=t.controls;if(t.render){const n=t.render();let o="";jQuery("#popup form > .wrapper").append(n),jQuery(".popup-widget-element").draggable({containment:"parent"}),Object.values(e).forEach((t=>{t.selector&&t.selector.call(t)&&(o+=t.prefix+t.selector.call(t)+"\n\n")})),this.generateStyleSheet(`${t.sheet}`,!1,o)}}dropWidget(t){jQuery(".popup-widget").draggable({helper:"clone"}),jQuery(document).find("#popup form > .wrapper").droppable({accept:".popup-widget",drop:function(n,o){const i=o.draggable.data("type");t.onDropWidget(e[i])}})}removeWidget(){jQuery(document).on("click",".remove-btn",(function(t){t.preventDefault(),t.stopPropagation(),jQuery(this).parent().remove()}))}loadSavedMarkup(){const t=this;fetch("https://bookerkit.com/popup-host/storage/read.php?file=markup.txt").then((t=>t.text())).then((e=>{const n={html:e};fetch("https://bookerkit.com/popup-host/storage/read.php?file=style.txt").then((t=>t.text())).then((e=>{n.css=e,n.html.length>0&&n.css.length>0&&(jQuery("#popup").parent().html(n.html),jQuery("head").prepend('<style id="all-style">'+n.css+"</style>"),t.dropWidget(t),jQuery(".popup-widget-element").draggable({containment:"parent"}))}))}))}init(){const t=this;t.globalControls=new n,t.sidebarInit(),t.loadSavedMarkup(),t.createWidget(),t.onSaveChanges(),t.generateStyleSheet(),t.dropWidget(t),t.removeWidget(t),jQuery(document).on("click",".page-settings, .all-widget, .popup-widget-element",(function(e){e.preventDefault(),e.stopPropagation();const n=this.dataset.type;switch(n){case"global-settings":t.createControls.call(t,n);break;case"all-widgets":t.createWidget.call(t,n);break;case"widget":t.createControls.call(t,this.id)}t.sidebarSettings.ps.update(),t.dropWidget(t),t.removeWidget(t)}))}}})();
//# sourceMappingURL=index.js.map