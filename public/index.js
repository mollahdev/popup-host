(()=>{"use strict";const t=new class extends class{settings={init:this.frontendInit.bind(this)};frontendInit(t){this.settings.config=t,this.init()}constructor(){const t=this;fetch("http://103.110.113.196/popup-host/storage/read.php?file=markup.txt").then((t=>t.text())).then((e=>{const s={html:e};fetch("http://103.110.113.196/popup-host/storage/read.php?file=style.txt").then((t=>t.text())).then((e=>{s.css=e,t.settings.data=s,window.dispatchEvent(new CustomEvent("popup/init"))}))}))}}{init(){const t=this.settings.config,e=this.settings.data;setTimeout((()=>{window.document.body.classList.add("show-popup"),document.head.insertAdjacentHTML("beforeend",`<style>${e.css}</style>`),document.body.insertAdjacentHTML("beforeend",e.html);const t=document.querySelector(".popup-close-button");t&&t.addEventListener("click",(()=>{window.document.body.classList.remove("show-popup")}));const s=document.querySelector(".submit-btn"),n=document.querySelector(".email-field");s&&n&&s.addEventListener("click",(()=>{const t=n.value;alert(t)}))}),t.setTimeOut)}};window.popup=t.settings})();
//# sourceMappingURL=index.js.map