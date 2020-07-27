!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=e=>"function"==typeof e&&i.has(e),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,p=new RegExp(`${c}|${d}`),h="$lit$";class u{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=n.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)m(t[e].name,h)&&i++;for(;i-- >0;){const t=l[a],s=b.exec(t)[2],i=s.toLowerCase()+h,n=e.getAttribute(i);e.removeAttribute(i);const o=n.split(p);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const i=e.parentNode,n=t.split(p),o=n.length-1;for(let t=0;t<o;t++){let s,o=n[t];if(""===o)s=f();else{const e=b.exec(o);null!==e&&m(e[2],h)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),s=document.createTextNode(o)}i.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===n[o]?(i.insertBefore(f(),e),s.push(e)):e.data=n[o],a+=o}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(f(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const e of s)e.parentNode.removeChild(e)}}const m=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},g=e=>-1!==e.index,f=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,r=0,a=0,l=i.nextNode();for(;r<s.length;)if(n=s[r],g(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const e=this.strings[i],n=e.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===e.indexOf("--\x3e",n+1);const o=b.exec(e);t+=null===o?e+(s?c:d):e.substr(0,o.index)+o[1]+o[2]+h+o[3]+c}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(v(e)||!x(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,n(e)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=f()),e.__insert(this.endNode=f())}insertAfterPart(e){e.__insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const s=new _(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const n of e)void 0===(s=t[i])&&(s=new P(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(n),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class N extends w{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends S{}let E=!1;try{const e={get capture(){return E=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class j{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(E?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,s,i){const n=t[0];return"."===n?new N(e,t.slice(1),s).parts:"@"===n?[new j(e,t.slice(1),i.eventContext)]:"?"===n?[new C(e,t.slice(1),s)]:new w(e,t,s).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function z(e){let t=$.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},$.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(c);return void 0===(s=t.keyString.get(i))&&(s=new u(e,e.getTemplateElement()),t.keyString.set(i,s)),t.stringsArray.set(e.strings,s),s}const $=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const V=(e,...t)=>new y(e,t,"html",T),U=133;function O(e,t){const{element:{content:s},parts:i}=e,n=document.createTreeWalker(s,U,null,!1);let o=F(i),r=i[o],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,r=i[o=F(i,o)]}c.forEach(e=>e.parentNode.removeChild(e))}const R=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,U,null,!1);for(;s.nextNode();)t++;return t},F=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(g(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const q=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const H=e=>t=>{const s=q(t.type,e);let i=$.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$.set(s,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(c);if(void 0===(n=i.keyString.get(o))){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),n=new u(t,s),i.keyString.set(o,n)}return i.stringsArray.set(t.strings,n),n},I=["html","svg"],B=new Set,W=(e,t,s)=>{B.add(s);const i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const o=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{I.forEach(t=>{const s=$.get(q(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),O(e,s)})})})(s);const r=t.element.content;!function(e,t,s=null){const{element:{content:i},parts:n}=e;if(null==s)return void i.appendChild(t);const o=document.createTreeWalker(i,U,null,!1);let r=F(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===s&&(a=R(t),s.parentNode.insertBefore(t,s));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=F(n,r);return}r=F(n,r)}}(t,o,r.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s);const a=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else{r.insertBefore(o,r.firstChild);const e=new Set;e.add(o),O(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},D=(e,t)=>t!==e&&(t==t||e==e),Q={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:D},X=Promise.resolve(!0),G=1,K=4,Y=8,Z=16,ee=32;class te extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=X,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const i=this[e];this[s]=t,this._requestUpdate(e,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=D){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||J,n="function"==typeof i?i:i.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||J.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ee,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=Q){const i=this.constructor,n=i._attributeNameForProperty(e,s);if(void 0!==n){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|Y,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=this._updateState&~Y}}_attributeToProperty(e,t){if(this._updateState&Y)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s._classProperties.get(i)||Q;this._updateState=this._updateState|Z,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,n=i._classProperties.get(e)||Q;i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{e=s,t=i});try{await s}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ee}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}te.finalized=!0;const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol();class ne{constructor(e,t){if(t!==ie)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const oe=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof ne)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new ne(s,ie)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const re=e=>e.flat?e.flat(1/0):function e(t,s=[]){for(let i=0,n=t.length;i<n;i++){const n=t[i];Array.isArray(n)?e(n,s):s.push(n)}return s}(e);class ae extends te{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){re(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ae.finalized=!0,ae.render=(e,t,s)=>{const i=s.scopeName,n=M.has(t),o=L&&11===t.nodeType&&!!t.host&&e instanceof y,a=o&&!B.has(i),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let i=M.get(t);void 0===i&&(r(t,t.firstChild),M.set(t,i=new P(Object.assign({templateFactory:z},s))),i.appendInto(t)),i.setValue(e),i.commit()})(e,l,Object.assign({templateFactory:H(i)},s)),a){const e=M.get(l);M.delete(l),e.value instanceof _&&W(l,e.value.template,i),r(t,t.firstChild),t.appendChild(l),M.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};customElements.define("view-cabezera",class extends ae{static get styles(){return oe`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          h1 {
            font-family: Roboto;
            font-size: 26px;
            font-weight: 500;
            background-color: #7710d9;
            color: whitesmoke;
            text-align:center;
          }
          .red {
            color: red;
          }
          .blue {
            color: blue;
          }
          @media (max-width: 310px) {
            .title {
              padding-bottom: 5px;
              font-size: 20px;
            }
            h1 {
              font-size: 18px;
              padding: 5px;
            }
		      }
          @media (max-width: 210px) {
            .title {
              padding-bottom: 2px;
              font-size: 14px;
            }
            h1 {
              font-size: 12px;             
            }
		      } 
        `}render(){return V`
    <p class="title">
    <img src="img/logo-masaje.png" width="50px" height="50px">
    <br>
      masajesJalena.com
    </p>
    <!--<h1>Mejora tu calidad de vida</h1>-->
    <h1>elimina tus puntos de dolor</h1>
    `}});customElements.define("view-footer",class extends ae{static get styles(){return oe`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          p {
            font-family: Roboto;
            font-size: 3em;
            font-weight: 500;
            background-color: #1E500C;
            color: whitesmoke;
            text-align:center;
            padding-bottom: 30px;
          }
          .footer2 {
            font-family: Roboto;
            font-size: 3em;
            font-weight: 500;
            background-color: whitesmoke;
            color: #1E500C;
            text-align:center;
            padding-bottom: 30px;
          }
          .jc_cal {
            /*
                border-style: dotted ;
                border-color: #4027cf;*/
                border: 3px dotted #4027cf;
                
                color: #ffffff;
                background-color: #1a8f14;
                
                padding: 20px;
                
                z-index:100;
                
                line-height: 1.6;
                font-size: 1.5em;
                border-radius: 50%;/* border-radius: 50px;*/

                cursor: pointer;
            }
          @media (max-width: 615px) {
            .email {
              font-size: 1em;
            }
            p {
              font-size: 2em;
            }
          }
          @media (max-width: 400px) {
            .email {
              font-size: 0.5em;
              margin-bottom:200px;
            }
            p {
              font-size: 2em;
              margin-bottom:90px;
            }
          }
        `}render(){return V`
    <p>
    <span class="email">~</span>
    <br>  
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" @click= ${this.go} name="whatsapp" >
    <img src="img/whatsapp.jpg" width="50px" height="50px">
    </a>650.718.774<br></p>
  
    <p class="footer2 ">
     <a href="https://calendly.com/masajesjalena" @click= ${this.go} name="calendario" >
     
     <button class="jc_cal">Pide Cita</button>  <br>
      </a>
    </p>
     
  
    
<p><MARQUEE> activa la energía que hay dentro de ti </MARQUEE></p>
    <!--
    <img src="https://picsum.photos/200/300" alt="imager">
    -->
    `}});customElements.define("view-presentacion",class extends ae{static get styles(){return oe`
      .center{
        text-align: center;
        border:solid blueviolet 5px; 
      }
      .ancho {
        width: "700px";
         height:"1500px"
      }
      .red {
        color: red;
      }
    `}render(){return V` <!-- 
    <div class="center">
      <iframe  width="90%" height="700px" src="https://www.youtube.com/watch?v=PU6eEAn-1js"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
    </div> -->
    `}});customElements.define("view-masajes",class extends ae{static get styles(){return oe`
      .center{
        text-align: center;
        border:solid blueviolet 5px; 
      }
      .ancho {
        width: "700px";
         height:"1500px"
      }
      .red {
        color: red;
      }
    `}render(){return V`
    <div class="center">
      <iframe  width="90%" height="700px" src="https://www.youtube.com/embed/PU6eEAn-1js"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
    </div>
    
    <p style="text-align: center ; font-size: 2em; color: blue">Cabina en Santa Cruz y  <br> Servicio a domicilio en todo Tenerife con camilla portátil<br>
 Masaje descontracturante, espalda, cuello, cabeza, abdomen, piernas, planta de los pies y masaje despues de hacer deporte <br>Elimina tus puntos de dolor,
 mejorando tu calidad de vida.<br><br>
 Tarifa:<br><br>
 (50 min X 30€) <br> (90 min y pico X 50€) sin reloj<br> <br> sin reloj, me alargo un poco mas dependiendo de la persona con el objetivo de eliminar los puntos de dolor.<br>
  <br>
si queres descargar tu musculatura <br>estás en buenas manos<br>
 </p>        
 <br><br>
    `}});customElements.define("view-contacto",class extends ae{static get styles(){return oe`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          p {
            font-family: Roboto;
            font-size: 1.5em;
            font-weight: 500;
            text-align:center;
            padding-bottom: 30px;
          }
          .center{
            text-align: center;
            __width: 90%;
            border:solid blueviolet 5px; 
          }
        `}render(){return V`
    <div class="center">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qN3BNjMOFXAwG9O0lnDiNXsuGJFuvukC" width="90%" height="500px"></iframe>
    </div>
    
    `}});customElements.define("dile-pages",class extends ae{static get properties(){return{attrForSelected:{type:String},selected:{type:String}}}render(){return V`
    <slot></slot>
    `}constructor(){super(),this.transitionTime=1e3,this.selected=0,this._pageInitialization()}static get styles(){return oe`
      :host {
        display: block;
      }
    `}_pageInitialization(){this.pages=[];let e=this.children;for(let t of e)t.style.display="none",t.style.transition=`opacity ${this.transitionTime}ms`,t.style.opacity="0",this.pages.push(t)}initializeExternalPages(e){this.innerHTML=e,this._pageInitialization()}firstUpdated(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display="block")}updated(e){if(this._updatedAndNotUndefined(e,"selected")||this._updatedAndNotUndefined(e,"attrForSelected")){let t=this._getLastValueProperty(e,"selected"),s=this._getLastValueProperty(e,"attrForSelected");this.hidePage(t,s)}this._showCurrentPage()}_selectPage(e,t){let s;if(t){for(let i of this.pages)if(i.getAttribute(t)==e){s=i;break}}else s=this.pages[e];return s}_showCurrentPage(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display="block",setTimeout(()=>{e.style.opacity="1"},50))}hidePage(e,t){let s=this._selectPage(e,t);s&&(s.style.display="none",s.style.opacity="0")}_updatedAndNotUndefined(e,t){return e.has(t)&&null!=e.get(t)}_getLastValueProperty(e,t){return e.has(t)?e.get(t):this[t]}});customElements.define("dile-tab",class extends ae{static get styles(){return oe`
      :host {
        display: inline-block;
        margin: 0 3px;
      }
      article {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        transition: all 0.3s ease;
        color: var(--dile-tab-text-color, #666);
        background-color: var(--dile-tab-background-color, transparent);
        cursor: pointer;
      }
      div.label {
        padding: var(--dile-label-padding, 8px 12px 6px 12px);
        text-transform: uppercase;
        white-space: nowrap;
      }
      .selected {
        background-color: var(--dile-tab-selected-background-color, #039be5);
        color: var(--dile-tab-selected-text-color, #fff);
      }
      span {
        display: block;
        height: var(--dile-tab-selected-line-height, 5px);
        width: 0;
        background-color: var(--dile-tab-selected-line-color, #0070c0);
        transition: width 0.3s ease;
      }
      .markselected {
        width: 100%;
      }
      .line {
        display: flex;
        justify-content: center;
      }
    `}static get properties(){return{selected:{type:Boolean},index:{type:Number}}}constructor(){super(),this.selected=!1}render(){return V`
      <article @click='${this.select}' class="${this.selected?"selected":""}">
        <div class="label"><slot></slot></div>
        <div class="line">
          <span class="${this.selected?"markselected":""}"></span>
        </div>
      </article>
    `}select(){this.dispatchEvent(new CustomEvent("dile-tab-selected",{bubbles:!0,composed:!0,detail:this}))}});window.customElements.define("dile-tabs",class extends ae{static get styles(){return oe`
      :host {
        display: flex;
      }
    `}static get properties(){return{selected:{type:String},attrForSelected:{type:String}}}constructor(){super(),this.selected=0,this.tabs=[],this.addEventListener("dile-tab-selected",this.tabSelectedChanged.bind(this))}render(){return V`
      <slot></slot>
    `}firstUpdated(){let e=this.children,t=0;for(let s of e)"dile-tab"==s.tagName.toLowerCase()&&(s.index=t,t++,this.tabs.push(s));this.setSelectedTab()}setSelectedTab(){if(this.attrForSelected)for(let e of this.tabs)e.getAttribute(this.attrForSelected)==this.selected?e.selected=!0:e.selected=!1;else{let e=parseInt(this.selected);if(!isNaN(e)&&this.tabs[e])for(let t in this.tabs)this.tabs[t].selected=t==e}}tabSelectedChanged(e){this.attrForSelected?this.selected=e.detail.getAttribute(this.attrForSelected):this.selected=e.detail.index,this.dispatchSelectedChanged()}dispatchSelectedChanged(){this.dispatchEvent(new CustomEvent("dile-tabs-selected-changed",{bubbles:!0,composed:!0,detail:this.selected}))}updated(e){this.setSelectedTab()}});customElements.define("pwa-live",class extends ae{static get styles(){return oe`
			:host {
				display: block;
				
				--primary-color: red;
				--_________primary-color: #673ab7;
				--primary-light-color: #9a67ea;
				--secondary-color: Blue; 
				--____secondary-color: #fbc02d; 
				--secondary-light-color: blue ;
				--_________secondary-light-color: #fbd09d;
				--text-color: #303030;
				--reverse-text-color: #fff;
				--reverse-accent-color: blue;
				--__________reverse-accent-color: #fdd835;
				
				padding: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
				--dile-tab-selected-line-color: var(--secondary-color);
				--dile-tab-text-color: var(--reverse-color, blueviolet);
				--dile-tab-selected-text-color: var(--reverse-accent-color, #fff);
				background-color: #f9f9f9;
			}
			h1 {
				font-weight: 300;
				flex-grow: 1;
			}
			.menumobile {
        margin-top: 10px;
        padding: 10px 0 20px 5px;
      }
      .menumobile a {
        display: block;
        margin: 10px 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--secondary-light-color);
      }
		.page {
			display: none;
		}
		.page[active] {
			display: block;
		}
		dile-tabs {
			border-bottom: 1px solid #ddd;
			margin-bottom: 15px;
			margin-right: 15px;
		}
		dile-pages {
			padding: 0 10px 10px;
		}
		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: var(--primary-color, #ddd);
			color: var(--reverse-text-color, #303030);
			padding: 10px;
			--eit-icon-size: 32px;
			--eit-icon-color: var(--secondary-color);
		}

		dile-spinner-modal {
			--dile-spinner-color: var(--secondary-color);
		}

		.homelink {
			color: inherit;
			text-decoration: none;
		}
		footer {
			text-align: center;
			padding 10px;
			font-size: 0.8em;
		}
		.center{
			_border: solid #7710d9 5px;
			text-align:center;
		}
		.botonMenu{
			padding:15px;
			border-radius:50%;
			font-style:tahoma;
			font-size: 3em;
			display: inline-block;
			width: 32%;
		}
		.activo{
			background-color:white;
			color:#7710d9;
			border: solid #7710d9 5px; 
			
		}
		.pasivo{
			__background-color:#1E500C;
			background-color:#10d913;
			color:white;
			cursor: pointer;		
		}
		.title {
              color:red;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }		
		@media (max-width: 1200px) {
			.botonMenu{
			padding:13px;
			font-size: 2.5em;
			}
		}
		@media (max-width: 900px) {
			.botonMenu{
			padding:10px;
			font-size: 1.5em;
			}
		}
		@media (max-width: 600px) {
			.botonMenu{
			padding:7px;
			font-size: 1em;
			}
		}
		@media (max-width: 600px) {
			.botonMenu{
			padding:10px;
			font-size: 1.5em;
			display: block;
			position: relative;
			text-align:center;
			width: 97%;
			}
			.title {
              color:red;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }		
		}
		`}static get properties(){return{page:{type:String}}}constructor(){super(),this.page="masajes"}render(){return V`	  

	  <c-idioma></c-idioma>
	  <view-cabezera></view-cabezera>
	  <!--
	  <a href="#" @click= ${this.go} name="presentacion" >Presentación</a>
      <a href="#" @click=${this.go} name="masajes">Masajes</a>
	  <a href="#" @click=${this.go} name="contacto">contacto</a>
  -->
    <div class="center">
	  ${"presentacion"==this.page?V`<button class="activo botonMenu" @click= ${this.go} name="presentacion"> Home</button>`:V`<button class="pasivo botonMenu" @click= ${this.go} name="presentacion"> Home</button>`}
	  ${"masajes"==this.page?V`<button class="activo botonMenu" @click= ${this.go} name="masajes">Servicios</button>`:V`<button class="pasivo botonMenu" @click= ${this.go} name="masajes">Servicios</button>`}
	  ${"contacto"==this.page?V`<button class="activo botonMenu" @click= ${this.go} name="contacto">Contacto</button>`:V`<button class="pasivo botonMenu" @click= ${this.go} name="contacto">Contacto</button>`}
	</div>
	  <!--
	  <button class="activo" @click= ${this.go} name="presentacion"> Presentación</button>
	  <button @click= ${this.go} name="masajes">Masajes</button>
	  <button @click= ${this.go} name="contacto">Contacto</button>
	
	  <hr>

	  <dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">      
		<dile-tab name="presentacion">Presentación</dile-tab>
		<dile-tab name="masajes">Masajes</dile-tab>
		<dile-tab name="contact">Contacto</dile-tab>
	</dile-tabs>
	  <hr>
				
    <dile-pages selected="${this.page}" attrForSelected="name">
		<view-home name="presentacion" ?active=${"presentacion"==this.page}></view-home>
		<view-about name="masajes" ?active=${"masajes"==this.page}></view-about>
		<view-contact name="contacto" ?active=${"contacto"==this.page}></view-contact>
	</dile-pages>
		
	  <view-presentacion name="presentacion" ?active=${"presentacion"==this.page}></view-presentacion>
	  <view-masajes name="masajes" ?active=${"masajes"==this.page}></view-masajes>
	  <view-contacto name="contacto" ?active=${"contacto"==this.page}></view-contacto>
	  -->
	  <br>
	  ${"presentacion"==this.page?V`<view-presentacion name="presentacion" ?active=${"presentacion"==this.page}></view-presentacion>`:""}
	  ${"masajes"==this.page?V`<view-masajes name="masajes" ?active=${"masajes"==this.page}></view-masajes>`:""}
	  ${"contacto"==this.page?V`<view-contacto name="contacto" ?active=${"contacto"==this.page}></view-contacto>`:""}


	  <view-footer></view-footer>
	  <view-whatsapp></view-whatsapp>
    `}go(e){e.preventDefault(),this.page=e.target.getAttribute("name"),console.log(this.page),this.requestUpdate()}selectedChanged(){console.log("estoy dentro de selectedChanged"),this.requestUpdate()}});customElements.define("view-whatsapp",class extends ae{static get styles(){return oe`
                    
            .jc_cta {
                border-style: dotted;
                border-color: #4027cf;
                color: #ffffff;
                background-color: #1a8f14;
                display: block ;
                padding: 15px;
                position: fixed ;	
                right: 5px;
                width:50px;
                z-index:100;
                bottom:0em;
                line-height: 1.6;
                font-size: 14px;
                border-radius: 50px;
            }
        `}render(){return V`
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" target="_blank">
<div class="jc_cta" >
<img src="img/whatsapp-fixed.png" alt="icono whatsapp" width="50px" height="50px">

</div></a>
  
    `}});customElements.define("c-idioma",class extends ae{static get styles(){return oe`
        `}constructor(){super(),this.lengu="",this.idioma=navigator.language||navigator.userLanguage,this.lenguaje()}render(){return V`
    `}lenguaje(){this.lengu=this.idioma.slice(0,2).toUpperCase(),console.log(`el lenguaje es = ${this.idioma.slice(0,2).toUpperCase()}`),console.log(`lengu es = ${this.idioma.slice(0,2).toUpperCase()}`),"ES"==this.lengu?console.log("ESPAÑOL"):console.log("inglés por defecto sea el idioma que sea")}});customElements.define("view-test",class extends ae{static get styles(){return oe`
        `}constructor(){super()}render(){return V` test
    `}})}]);