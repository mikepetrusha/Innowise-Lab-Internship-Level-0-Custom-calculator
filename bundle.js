(()=>{"use strict";var e={374:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(933),a=t.n(r),u=t(476),o=t.n(u)()(a());o.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n    font-size: 30px;\n    color: #e6e6e6;\n    border-radius: 0;\n    border: none;\n    outline: none;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    overflow: hidden;\n    flex-direction: column;\n    background: linear-gradient(#1e3b70, #29539b);\n}\n\n/* HEADER */\n\ndiv.header {\n    margin-bottom: 20px;\n    height: 60px;\n    width: 600px;\n    border-radius: 15px;\n    display: flex;\n}\n\ndiv.themeWrap {\n    display: flex;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 15px;\n    overflow: hidden;\n    background: rgba(255, 255, 255, 0.1);\n}\n\ndiv.themeIconWrap {\n    display: flex;\n    padding: 10px;\n    background: rgba(255, 255, 255, 0.1);\n}\n\ndiv.themeIconWrap:hover {\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.7);\n}\n\ndiv.selectedTheme {\n    background-color: rgba(255, 255, 255, 0.5);\n}\n\ndiv.prevValue {\n    background: rgba(255, 255, 255, 0.1);\n    margin-right: 15px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 15px;\n    padding: 10px 15px;\n}\n\ndiv.prevValue:hover {\n    cursor: pointer;\n    background-color: rgba(8, 148, 241, 0.7);\n}\n\nh2.prevValueTxt {\n    line-height: 40px;\n}\n\ndiv.memory {\n    width: 300px;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 15px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    line-height: 60px;\n    padding: 0 10px;\n    display: flex;\n    overflow: hidden;\n    margin-left: 15px;\n}\n\nh2#memValue {\n    margin-left: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* BODY */\n\ndiv.wrap {\n    width: 600px;\n    height: 400px;\n    border-radius: 15px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    overflow: hidden;\n}\n\ninput.scoreboard {\n    height: 70px;\n    width: 570px;\n    background: rgba(255, 255, 255, 0.1);\n    font-size: 50px;\n    padding: 15px;\n    text-align: right;\n}\n\ndiv.tableWrap {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.line {\n    display: flex;\n}\n\nbutton.cell {\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    line-height: 75px;\n    background: rgba(255, 255, 255, 0.1);\n}\n\nbutton.cell:hover {\n    cursor: pointer;\n    background-color: rgba(8, 148, 241, 0.7);\n}\n\nbutton.sign {\n    background: rgba(255, 255, 255, 0.5);\n    font-size: 40px;\n}\n\nbutton.number {\n    font-size: 40px;\n    background: rgba(255, 255, 255, 0.1);\n}\n\nbutton.pow {\n    line-height: 65px;\n}\n\nsup {\n    font-size: 20px;\n}\n\n/* ERROR */\n\ninput.errorMessage {\n    background: rgba(255, 255, 255, 0.0000001);\n    width: 600px;\n    color: red;\n    line-height: 60px;\n    margin-top: 20px;\n    text-align: center;\n    min-height: 60px;\n}\n\n/*Animation styles */\n\n.bubbles {\n    position: absolute;\n    bottom: -120px;\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 70px;\n    width: 100%;\n    justify-content: space-around;\n}\n.bubbles span {\n    height: 60px;\n    width: 60px;\n    background: rgba(255, 255, 255, 0.1);\n    animation: move 10s linear infinite;\n    position: relative;\n    overflow: hidden;\n}\n@keyframes move {\n    100% {\n        transform: translateY(-100vh);\n    }\n}\n.bubbles span.one {\n    animation-delay: 2.2s;\n    transform: scale(2.15);\n}\n.bubbles span.two {\n    animation-delay: 3.5s;\n    transform: scale(1.55);\n}\n.bubbles span.three {\n    animation-delay: 0.2s;\n    transform: scale(0.35);\n}\n.bubbles span.four {\n    animation-delay: 6s;\n    transform: scale(2.15);\n}\n.bubbles span.five {\n    animation-delay: 7s;\n    transform: scale(0.5);\n}\n.bubbles span.six {\n    animation-delay: 4s;\n    transform: scale(2.5);\n}\n.bubbles span.seven {\n    animation-delay: 3s;\n    transform: scale(1.5);\n}\n.bubbles span:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 60px;\n    width: 40%;\n    transform: skew(45deg) translateX(150px);\n    background: rgba(255, 255, 255, 0.15);\n    animation: mirror 3s linear infinite;\n}\n@keyframes mirror {\n    100% {\n        transform: translateX(-450px);\n    }\n}\n.bubbles span.one:before {\n    animation-delay: 1.5s;\n}\n.bubbles span.two:before {\n    animation-delay: 3.5s;\n}\n.bubbles span.three:before {\n    animation-delay: 2.5s;\n}\n.bubbles span.four:before {\n    animation-delay: 7.5s;\n}\n.bubbles span.five:before {\n    animation-delay: 4.5s;\n}\n.bubbles span.six:before {\n    animation-delay: 0.5s;\n}\n.bubbles span.seven:before {\n    animation-delay: 6s;\n}\n",""]);const i=o},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,u){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(void 0!==u&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=u),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),n.push(c))}},n}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var u={},o=[],i=0;i<e.length;i++){var l=e[i],s=r.base?l[0]+r.base:l[0],c=u[s]||0,d="".concat(s," ").concat(c);u[s]=c+1;var v=t(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==v)n[v].references++,n[v].updater(m);else{var f=a(m,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var u=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<u.length;o++){var i=t(u[o]);n[i].references--}for(var l=r(e,a),s=0;s<u.length;s++){var c=t(u[s]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}u=l}}},311:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},192:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},760:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var u=t.sourceMap;u&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var u=n[r]={id:r,exports:{}};return e[r](u,u.exports,t),u.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(892),n=t.n(e),r=t(760),a=t.n(r),u=t(311),o=t.n(u),i=t(192),l=t.n(i),s=t(60),c=t.n(s),d=t(865),v=t.n(d),m=t(374),f={};function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}f.styleTagTransform=v(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=c(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var b=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.value=0,this.history=[],this.memory=0}var n,t;return n=e,(t=[{key:"resetMemory",value:function(){this.memory=0,I.innerHTML=this.memory}},{key:"changeMemory",value:function(e){this.memory+=e,I.innerHTML=this.memory}},{key:"resetValue",value:function(e){this.value=e}},{key:"executeCommand",value:function(e){this.history.push(this.value),this.value=e.execute(this.value)}},{key:"undo",value:function(){this.resetValue(this.history.pop())}}])&&p(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}()),h=document.getElementById("scoreboard"),g=document.querySelectorAll("button.number"),y=document.getElementsByName("sign"),x=document.getElementById("deleteButton"),w=document.getElementsByName("oneValueCommands"),k=document.getElementsByName("twoValueCommands"),E=document.getElementsByName("memory"),T=document.getElementById("prevValue"),I=document.getElementById("memValue"),N=document.getElementById("darkTheme"),M=document.getElementById("lightTheme"),C=document.querySelectorAll("*"),L=document.querySelectorAll("body")[0],S=document.getElementById("errorMessage"),A=["+","-","×","÷"],P=new Proxy({x:0,y:0,signIndex:0,command:"",theme:"dark"},{set:function(e,n,t){return"command"===n&&k.forEach((function(e){return e.style.backgroundColor=e.value===t?"blue":"rgba(255, 255, 255, 0.1)"})),e[n]=t,!0}});function B(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function O(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,n,t){return n&&O(e.prototype,n),t&&O(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var j=function(){function e(n){B(this,e),this.valueToAdd=n}return V(e,[{key:"execute",value:function(e){return e+this.valueToAdd}}]),e}(),D=function(){function e(n){B(this,e),this.valueToSubtract=n}return V(e,[{key:"execute",value:function(e){return e-this.valueToSubtract}}]),e}(),R=function(){function e(n){B(this,e),this.valueToDivide=n}return V(e,[{key:"execute",value:function(e){return e/this.valueToDivide}}]),e}(),H=function(){function e(n){B(this,e),this.valueToMultiply=n}return V(e,[{key:"execute",value:function(e){return e*this.valueToMultiply}}]),e}(),z=function(){function e(n){B(this,e),this.valueToPow=n}return V(e,[{key:"execute",value:function(e){return Math.pow(e,this.valueToPow)}}]),e}(),Z=function(){function e(){B(this,e)}return V(e,[{key:"execute",value:function(e){return q(e,1)}}]),e}(),q=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return n>18?Number.MAX_SAFE_INTEGER:n<0?-e(-n,t):1===n||0===n?t:e(n-1,t*n)},F=function(){function e(){B(this,e)}return V(e,[{key:"execute",value:function(e){return-e}}]),e}(),W=function(){function e(){B(this,e)}return V(e,[{key:"execute",value:function(e){return e/100}}]),e}(),X=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;switch(e){case"+":return new j(n);case"-":return new D(n);case"×":return new H(n);case"÷":return new R(n);case"+/-":return new F;case"%":return new W;case"!":return new Z;case"x^2":return new z(2);case"x^3":return new z(3);case"10^x":case"x^y":return new z(n);case"1/x":return new z(-1);case"x^1/2":return new z(.5);case"x^1/3":return new z(1/3);case"x^1/y":return new z(1/n);case"MC":b.resetMemory();break;case"M+":b.changeMemory(Number(h.value));break;case"M-":b.changeMemory(-Number(h.value));break;case"MR":h.value=String(b.memory)}},_=function(e){var n="."===h.value||"-"===h.value||"+"===h.value,t=!h.value||h.value.length&&n||P.signIndex,r=0===Number(h.value)&&"1/x"===e.value,a=Number(h.value)<0&&("x^1/2"===e.value||"x^1/3"===e.value),u=h.value.includes(".")&&"!"===e.value;P.command?S.value="Perform previous command":t?S.value="The value should be one number":r?S.value="Division by 0":a?S.value="Can't find a root of negative number":u?S.value="Can't find factorial of a real number":"10^x"===e.value?(b.resetValue(10),b.executeCommand(X(e.value,Number(h.value))),h.value=String(b.value)):(b.resetValue(Number(h.value)),b.executeCommand(X(e.value)),h.value=String(b.value))};x.addEventListener("click",(function(){h.value=""})),g.forEach((function(e){return e.addEventListener("click",(function(){return h.value+=e.value}))})),y.forEach((function(e){return e.addEventListener("click",(function(){return function(e){var n=!h.value||"-"===h.value,t=A.includes(h.value[h.value.length-1]);n?"-"!==e.value||h.value?"+"===e.value&&(h.value=""):h.value+=e.value:t?function(e){var n="-"===e.value&&P.signIndex===h.value.length-1,t=P.signIndex&&P.signIndex!==h.value.length-1;n?h.value+=e.value:t&&"="!==e.value?h.value=h.value.substring(0,h.value.length-2)+e.value:"="!==e.value&&(h.value=h.value.substring(0,h.value.length-1)+e.value)}(e):P.command?function(e){var n=!h.value||!Number.isFinite(Number(h.value)),t=0===Number(h.value)&&"x^1/y"===P.command,r=b.value<0&&Number(h.value)<1&&Number(h.value)>-1;n?S.value="N value should be one number":t?S.value="Division by 0":r?S.value="Can't find a root of negative number":(b.executeCommand(X(P.command,Number(h.value))),h.value=String(b.value),P.command="",P.signIndex="="===e.value?0:h.value.length,h.value+="="===e.value?"":e.value)}(e):function(e){if(P.signIndex){var n=Number(h.value.substring(P.signIndex+1,h.value.length));0===n&&"÷"===h.value[P.signIndex]?S.value="Division by 0":(b.executeCommand(X(h.value[P.signIndex],n)),h.value=String(b.value),P.signIndex="="===e.value?0:h.value.length,h.value+="="===e.value?"":e.value)}else b.resetValue(Number(h.value)),P.signIndex="="===e.value?0:h.value.length,h.value+="="===e.value?"":e.value}(e)}(e)}))})),w.forEach((function(e){return e.addEventListener("click",(function(){return _(e)}))})),k.forEach((function(e){return e.addEventListener("click",(function(){return function(e){var n="."===h.value||"-"===h.value||"+"===h.value,t=!h.value||h.value.length&&n||P.signIndex,r="x^1/y"===e.value&&Number(h.value)<0;P.command?S.value="Perform previous command":t?S.value="X value should be one number":r?S.value="Can't find a root of negative number":(b.resetValue(Number(h.value)),h.value="",P.command=e.value)}(e)}))})),E.forEach((function(e){return e.addEventListener("click",(function(){return _(e)}))})),N.addEventListener("click",(function(){"dark"!==P.theme&&(P.theme="dark",N.classList.add("selectedTheme"),M.classList.remove("selectedTheme"),C.forEach((function(e){return e.style.color="#e6e6e6"})),L.style.background="linear-gradient(#1E3B70 , #29539B)")})),M.addEventListener("click",(function(){"light"!==P.theme&&(P.theme="light",M.classList.add("selectedTheme"),N.classList.remove("selectedTheme"),C.forEach((function(e){return e.style.color="black"})),L.style.background="linear-gradient(#2196f3 , #e91e63)")})),T.addEventListener("click",(function(){P.command?(h.value=String(b.value),P.command=""):b.history.length?(S.value&&(S.value=""),b.undo(),h.value=String(b.value)):S.value="History is empty"})),h.addEventListener("input",S.value?S.value="":"");var U=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"),Y=Object.getOwnPropertyDescriptor(Element.prototype,"setAttribute");Object.defineProperties(h,{value:{get:U.get,set:function(e){S.value&&(S.value=""),U.set.call(this,e)}},setAttribute:{value:function(e,n){"value"===e&&S.value&&(S.value=""),Y.value.call(this,e,n)}}})})()})();