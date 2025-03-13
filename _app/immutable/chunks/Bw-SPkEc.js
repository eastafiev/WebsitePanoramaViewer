import{M as y,X as C}from"./m8XikJfs.js";import"./CVWWWevV.js";/* empty css        */function _(i,t){const e={},n={},r={$$scope:1};let o=i.length;for(;o--;){const a=i[o],u=t[o];if(u){for(const s in a)s in u||(n[s]=1);for(const s in u)r[s]||(e[s]=u[s],r[s]=1);i[o]=u}else for(const s in a)r[s]=1}for(const a in n)a in e||(e[a]=void 0);return e}function W(i){return typeof i=="object"&&i!==null?i:{}}/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var I=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],v=I.join(","),w=typeof Element>"u",h=w?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,p=!w&&Element.prototype.getRootNode?function(i){return i.getRootNode()}:function(i){return i.ownerDocument},x=function(t,e,n){var r=Array.prototype.slice.apply(t.querySelectorAll(v));return e&&h.call(t,v)&&r.unshift(t),r=r.filter(n),r},D=function i(t,e,n){for(var r=[],o=Array.from(t);o.length;){var a=o.shift();if(a.tagName==="SLOT"){var u=a.assignedElements(),s=u.length?u:a.children,c=i(s,!0,n);n.flatten?r.push.apply(r,c):r.push({scope:a,candidates:c})}else{var l=h.call(a,v);l&&n.filter(a)&&(e||!t.includes(a))&&r.push(a);var f=a.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(a),b=!n.shadowRootFilter||n.shadowRootFilter(a);if(f&&b){var d=i(f===!0?a.children:f.children,!0,n);n.flatten?r.push.apply(r,d):r.push({scope:a,candidates:d})}else o.unshift.apply(o,a.children)}}return r},E=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},T=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},R=function(t){return t.tagName==="INPUT"},A=function(t){return R(t)&&t.type==="hidden"},N=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(n){return n.tagName==="SUMMARY"});return e},k=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]},O=function(t){if(!t.name)return!0;var e=t.form||p(t),n=function(u){return e.querySelectorAll('input[type="radio"][name="'+u+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=n(window.CSS.escape(t.name));else try{r=n(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var o=k(r,t.form);return!o||o===t},M=function(t){return R(t)&&t.type==="radio"},$=function(t){return M(t)&&!O(t)},m=function(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;return n===0&&r===0},F=function(t,e){var n=e.displayCheck,r=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var o=h.call(t,"details>summary:first-of-type"),a=o?t.parentElement:t;if(h.call(a,"details:not([open]) *"))return!0;var u=p(t).host,s=(u==null?void 0:u.ownerDocument.contains(u))||t.ownerDocument.contains(t);if(!n||n==="full"){if(typeof r=="function"){for(var c=t;t;){var l=t.parentElement,f=p(t);if(l&&!l.shadowRoot&&r(l)===!0)return m(t);t.assignedSlot?t=t.assignedSlot:!l&&f!==t.ownerDocument?t=f.host:t=l}t=c}if(s)return!t.getClientRects().length}else if(n==="non-zero-area")return m(t);return!1},L=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var n=0;n<e.children.length;n++){var r=e.children.item(n);if(r.tagName==="LEGEND")return h.call(e,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}e=e.parentElement}return!1},P=function(t,e){return!(e.disabled||A(e)||F(e,t)||N(e)||L(e))},S=function(t,e){return!($(e)||E(e)<0||!P(t,e))},U=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},H=function i(t){var e=[],n=[];return t.forEach(function(r,o){var a=!!r.scope,u=a?r.scope:r,s=E(u,a),c=a?i(r.candidates):u;s===0?a?e.push.apply(e,c):e.push(u):n.push({documentOrder:o,tabIndex:s,item:r,isScope:a,content:c})}),n.sort(T).reduce(function(r,o){return o.isScope?r.push.apply(r,o.content):r.push(o.content),r},[]).concat(e)},B=function(t,e){e=e||{};var n;return e.getShadowRoot?n=D([t],e.includeContainer,{filter:S.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:U}):n=x(t,e.includeContainer,S.bind(null,e)),H(n)};function X(i,t={type:"click",stopPropagation:!1}){const{type:e,stopPropagation:n}=t,r=o=>{n&&o.stopPropagation(),i&&!i.contains(o.target)&&!o.defaultPrevented&&i.dispatchEvent(new CustomEvent(`outer${e}`,{detail:o}))};return document.addEventListener(e,r,!0),{destroy(){document.removeEventListener(e,r,!0)}}}function Z(i){return i+String.fromCharCode(Math.floor(Math.random()*26)+97)+Math.random().toString(16).slice(2)+Date.now().toString(16).split(".")[0]}function z(i,t={preventTab:!1,stopPropagation:!1}){const e=n=>{const{key:r}=n,{activeElement:o}=document;let a=B(i);const u=a.indexOf(document.activeElement);a.length<0||((r==="ArrowUp"||r==="ArrowDown"||r==="Home"||r==="End"||r==="Tab"&&t.preventTab)&&(n.preventDefault(),t.stopPropagation&&n.stopPropagation()),r==="ArrowUp"?a[0]===o?a[a.length-1].focus():a.includes(o)&&a[u-1].focus():r==="ArrowDown"?a[a.length-1]===o?a[0].focus():a.includes(o)&&a[u+1].focus():r==="Home"?a[0].focus():r==="End"&&a[a.length-1].focus())};return i.addEventListener("keydown",e),{destroy:()=>i.removeEventListener("keydown",e)}}function G(i){const t=window.getComputedStyle(document.documentElement).getPropertyValue(i);return parseFloat(t)*(/\ds$/.test(t)?1e3:1)||0}function K(i,t=[]){let e,n=[];return i.$on=(r,o)=>{let a=()=>{};if(t.includes(r)){const u=i.$$.callbacks[r]||(i.$$.callbacks[r]=[]);return u.push(o),()=>{const s=u.indexOf(o);s!==-1&&u.splice(s,1)}}return e?a=e(r,o):n.push([r,o]),()=>a()},r=>{const o=[],a={},u=s=>C(i,s);e=(s,c)=>{const b=y(r,s,c,!1),d=()=>{b();const g=o.indexOf(d);g>-1&&o.splice(g,1)};return o.push(d),s in a||(a[s]=y(r,s,u)),d};for(const s of n)e(s[0],s[1]);return{destroy:()=>{for(const s of o)s();for(let s of Object.entries(a))s[1]()}}}}export{G as a,W as b,K as c,z as d,X as e,_ as g,B as t,Z as u};
