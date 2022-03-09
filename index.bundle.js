(()=>{"use strict";var n={426:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap);"]),i.push([n.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: " Poppins ", sans-serif;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: #f8f9fa;\r\n  font-size: 16px;\r\n}\r\n\r\n.main-container {\r\n  height: 100%;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\ni { cursor: pointer; }\r\n\r\n.flex-center {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n#tasks {\r\n  width: 100%;\r\n  height: 100%;\r\n  flex-direction: column;\r\n}\r\n\r\n.task-list {\r\n  flex-direction: column;\r\n  border: 2px solid #fff;\r\n  width: 70%;\r\n  box-shadow: 3px 3px 7px #73767a;\r\n  margin-top: 40px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.task-list .container {\r\n  flex-direction: row;\r\n  padding: 10px;\r\n  width: 100%;\r\n  border-bottom: 1px solid #c1c4c9;\r\n  justify-content: space-between;\r\n}\r\n\r\n.checkbox {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.task-list-container {\r\n  width: 100%;\r\n}\r\n\r\n.task-list #add-task {\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-list #add-task button {\r\n  padding: 8px 5px;\r\n  background-color: transparent;\r\n}\r\n\r\n.task-list-container .task i {\r\n  font-size: 20px;\r\n  color: #0f0f0f;\r\n}\r\n\r\n.task-list .container:first-child i {\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-list #add-task button i {\r\n  font-size: 20px;\r\n  color: #2e2b2b;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.task-list #add-task button i:hover { color: #878a8f; }\r\n\r\n.task-list #add-task input {\r\n  flex: 1;\r\n  font-family: " Roboto ", sans-serif;\r\n  font-style: italic;\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.task-list-container .task {\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  padding: 1rem 0.9rem;\r\n  cursor: move;\r\n}\r\n\r\n.task-list-container .task .left { width: 90%; }\r\n\r\n.task-list-container .task .left form {\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.task-list-container .task .left .edit-task {\r\n  padding-left: 0.7rem;\r\n  font-size: 1rem;\r\n  color: #201f1f;\r\n  flex: 1;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.title {\r\n  color: #5c5050;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  color: #584f4f;\r\n  background-color: #f8f9fa;\r\n  border-bottom-left-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #999494;\r\n  color: #f8f9fa;\r\n}\r\n\r\n.disabled {\r\n  font-size: 0.6rem;\r\n  font-style: italic;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.dragging { border: 2px solid #383c41; }\r\n\r\n.focus { background-color: #faf3db; }\r\n\r\n.task-list-container .task .right .far { display: none; }\r\n\r\n.task-list-container .task.focus .right .far { display: block; }\r\n\r\n.task-list-container .task.focus .right .fas { display: none; }\r\n\r\n@media screen and (max-width: 500px) {\r\n  .task-list { width: 95%; }\r\n\r\n  .task-list .container { padding-right: 0; }\r\n\r\n  .task-list-container .task { padding: 0.8rem 0.5rem; }\r\n\r\n  .task-list-container .task .left .edit-task { padding-left: 3px; }\r\n\r\n  .fa-sync-alt { padding-right: 10px; }\r\n}\r\n',""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);e&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=e.base?c[0]+e.base:c[0],d=a[l]||0,f="".concat(l," ").concat(d);a[l]=d+1;var u=t(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(p);else{var m=o(p,e);e.byIndex=s,r.splice(s,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);r[s].references--}for(var c=e(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,t),a.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r);var e={};(()=>{t.d(e,{MJ:()=>E,eT:()=>b});var n=t(379),r=t.n(n),o=t(795),a=t.n(o),i=t(569),s=t.n(i),c=t(565),l=t.n(c),d=t(216),f=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=(()=>{class n{constructor(n){this.description=n,this.index=new Date,this.completed=!1}}const r=document.querySelector("#add-task"),t=JSON.parse(localStorage.getItem("Task-list"))||[];return r.addEventListener("click",(()=>{const r=document.querySelector("#add-task-input").value;if(""===r)return;const e=new n(r);t.push(e),localStorage.setItem("Task-list",JSON.stringify(t))})),t})(),k=()=>g.map((n=>n)),v=document.querySelector(".task-list-container");k().forEach((n=>{v.innerHTML+=`<li class="container task flex-center" draggable="true">\n    <span class="left flex-center">\n     <input id=${n.index} type="checkbox" ${n.completed?"checked":""} class="checkbox"/>\n     <form class="edit-form" action="/">\n       <input \n         data-index-number=${n.index}\n         value='${(n=>n.description)(n)}'\n         class="${n.completed?"edit-task disabled":"edit-task"}" ${n.completed?"disabled":""}\n       >\n     </form>\n    </span>\n    <span class="right">\n      <i class="fas fa-ellipsis-v"></i>\n      <i class="far fa-trash-alt"></i>\n    </span>\n   </li>`}));const y=document.querySelectorAll(".task"),b=document.querySelectorAll(".edit-task"),x=document.querySelectorAll(".edit-form"),w=document.querySelector(".reload"),S=document.querySelector("body"),E=document.querySelectorAll(".checkbox");x.forEach((n=>{n.addEventListener("submit",(n=>{n.preventDefault(),b.forEach((n=>{k().forEach((r=>{n.dataset.indexNumber===r.index&&(r.description=n.value,localStorage.setItem("Task-list",JSON.stringify(k())))}))}))}))})),window.addEventListener("load",(()=>{E.forEach((n=>{n.addEventListener("click",(()=>{b.forEach((r=>{n.id===r.dataset.indexNumber&&k().forEach((r=>{r.index===n.id&&(r.completed?(r.completed=!1,localStorage.setItem("Task-list",JSON.stringify(k())),window.location.reload()):(r.completed=!0,localStorage.setItem("Task-list",JSON.stringify(k())),window.location.reload()))}))}))}))})),(()=>{const n=document.querySelector(".task-list-container");document.querySelectorAll(".task").forEach((n=>{n.addEventListener("dragstart",(()=>{n.classList.add("dragging")})),n.addEventListener("dragend",(()=>{n.classList.remove("dragging")}))})),n.addEventListener("dragover",(t=>{t.preventDefault();const e=r(n,t.clientY),o=document.querySelector(".dragging");null===e&&n.appendChild(o),n.insertBefore(o,e)}));const r=(n,r)=>[...n.querySelectorAll(".task:not(.dragging)")].reduce(((n,t)=>{const e=t.getBoundingClientRect(),o=r-e.top-e.height/2;return o<0&&o>n.offset?{offset:o,element:t}:n}),{offset:Number.NEGATIVE_INFINITY}).element})()})),w.addEventListener("click",(()=>{window.location.reload()})),S.addEventListener("focusout",(()=>{window.location.reload()})),y.forEach((n=>{n.addEventListener("click",(()=>{y.forEach((n=>n.classList.remove("focus"))),n.classList.add("focus")}))})),document.querySelector(".clear-task").addEventListener("click",(()=>{if(k().length>0){const n=k().filter((n=>!0!==n.completed));localStorage.setItem("Task-list",JSON.stringify(n)),window.location.reload()}})),y.forEach((n=>{n.addEventListener("click",(()=>{var r,t;n.classList.contains("focus")&&(r=n.querySelector(".far"),t=n.querySelector(".checkbox").id,r.addEventListener("click",(()=>{const n=k().filter((n=>n.index!==t));localStorage.setItem("Task-list",JSON.stringify(n)),window.location.reload()})))}))}))})()})();