var _t=Object.defineProperty;var vt=(e,t,n)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var P=(e,t,n)=>vt(e,typeof t!="symbol"?t+"":t,n);import{v as G,s as bt,am as At,r as St,a0 as kt,P as ve,Q as Et}from"./m8XikJfs.js";import{H as le,S as ke,R as Ee}from"./CYgJF_JY.js";new URL("sveltekit-internal://");function Rt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function It(e){return e.split("%25").map(decodeURI).join("%25")}function Ut(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function me({href:e}){return e.split("#")[0]}function Lt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function Tt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Pt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const xt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&H.delete(Re(e)),xt(e,t));const H=new Map;function Ct(e,t){const n=Re(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&H.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Pt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Nt(e,t,n){if(H.size>0){const r=Re(e,n),a=H.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);H.delete(r)}}return window.fetch(t,n)}function Re(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Tt(...a)}"]`}return r}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Dt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return we(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return we(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const d=Ot.exec(c),[,u,w,f,m]=d;return t.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return we(c)}).join("")}).join("")}/?$`),params:t}}function jt(e){return!/^\([^)]+\)$/.test(e)}function Dt(e){return e.slice(1).split("/").filter(jt)}function Bt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],u=a[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function we(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ft({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:w}=$t(o),f={id:o,exec:m=>{const h=u.exec(m);if(h)return Bt(h,w,r)},errors:[1,...d||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Ye(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function De(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const D=[];function Vt(e,t){return{subscribe:fe(e,t).subscribe}}function fe(e,t=G){let n;const r=new Set;function a(o){if(bt(e,o)&&(e=o,n)){const c=!D.length;for(const l of r)l[1](),D.push(l,e);if(c){for(let l=0;l<D.length;l+=2)D[l][0](D[l+1]);D.length=0}}}function s(o){a(o(e))}function i(o,c=G){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||G),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function Pn(e,t,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=t.length<2;return Vt(n,(i,o)=>{let c=!1;const l=[];let d=0,u=G;const w=()=>{if(d)return;u();const m=t(r?l[0]:l,i,o);s?i(m):u=kt(m)?m:G},f=a.map((m,h)=>At(m,p=>{l[h]=p,d&=~(1<<h),c&&w()},()=>{d|=1<<h}));return c=!0,w(),function(){St(f),u(),c=!1}})}var Ke;const T=((Ke=globalThis.__sveltekit_1y9zjb1)==null?void 0:Ke.base)??"";var We;const qt=((We=globalThis.__sveltekit_1y9zjb1)==null?void 0:We.assets)??T,Mt="1742157840214",Je="sveltekit:snapshot",Xe="sveltekit:scroll",Qe="sveltekit:states",Gt="sveltekit:pageurl",F="sveltekit:history",W="sveltekit:navigation",O={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Q=location.origin;function Ze(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ie(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Be={...O,"":O.hover};function et(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function tt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function be(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ue(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===Q&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function te(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),t===null&&(t=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=et(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Be[r??"off"],preload_data:Be[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Fe(e){const t=fe(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const nt={v:()=>{}};function Ht(){const{set:e,subscribe:t}=fe(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${qt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Mt;return i&&(e(!0),nt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ue(e,t,n){return e.origin!==Q||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function xn(e){}function Ve(e){const t=Kt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const zt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Kt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=zt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Wt=-1,Yt=-2,Jt=-3,Xt=-4,Qt=-5,Zt=-6;function en(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Wt)return;if(s===Jt)return NaN;if(s===Xt)return 1/0;if(s===Qt)return-1/0;if(s===Zt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let f=1;f<o.length;f+=1)d.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],h=Ve(m),p=new f(h);r[s]=p;break}case"ArrayBuffer":{const f=o[1],m=Ve(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==Yt&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const at=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...at];const tn=new Set([...at]);[...tn];function nn(e){return e.filter(t=>t!=null)}const an="x-sveltekit-invalidated",rn="x-sveltekit-trailing-slash";function ne(e){return e instanceof le||e instanceof ke?e.status:500}function on(e){return e instanceof ke?e.text:"Internal Error"}let I,Y,ye;const sn=ve.toString().includes("$$")||/function \w+\(\) \{\}/.test(ve.toString());sn?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Y={current:null},ye={current:!1}):(I=new class{constructor(){P(this,"data",$state.raw({}));P(this,"form",$state.raw(null));P(this,"error",$state.raw(null));P(this,"params",$state.raw({}));P(this,"route",$state.raw({id:null}));P(this,"state",$state.raw({}));P(this,"status",$state.raw(-1));P(this,"url",$state.raw(new URL("https://example.com")))}},Y=new class{constructor(){P(this,"current",$state.raw(null))}},ye=new class{constructor(){P(this,"current",$state.raw(!1))}},nt.v=()=>ye.current=!0);function cn(e){Object.assign(I,e)}const ln="/__data.json",fn=".html__data.json";function un(e){return e.endsWith(".html")?e.replace(/\.html$/,fn):e.replace(/\/$/,"")+ln}const dn=new Set(["icon","shortcut icon","apple-touch-icon"]),j=Ye(Xe)??{},J=Ye(Je)??{},C={url:Fe({}),page:Fe({}),navigating:fe(null),updated:Ht()};function Ue(e){j[e]=Ie()}function hn(e,t){let n=e+1;for(;j[n];)delete j[n],n+=1;for(n=t+1;J[n];)delete J[n],n+=1}function q(e){return location.href=e.href,new Promise(()=>{})}async function rt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function qe(){}let Le,Ae,ae,x,Se,A;const re=[],oe=[];let U=null;const Z=new Map,ot=new Set,st=new Set,z=new Set;let v={branch:[],error:null,url:null},Te=!1,se=!1,Me=!0,X=!1,M=!1,it=!1,Pe=!1,ct,k,L,$;const K=new Set;async function $n(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Le=Ft(e),x=document.documentElement,Se=t,Ae=e.nodes[0],ae=e.nodes[1],Ae(),ae(),k=(i=history.state)==null?void 0:i[F],L=(o=history.state)==null?void 0:o[W],k||(k=L=Date.now(),history.replaceState({...history.state,[F]:k,[W]:L},""));const r=j[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await En(Se,n):await An(A.hash?In(new URL(location.href)):location.href,{replaceState:!0}),kn()}function pn(){re.length=0,Pe=!1}function lt(e){oe.some(t=>t==null?void 0:t.snapshot)&&(J[e]=oe.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function ft(e){var t;(t=J[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=oe[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function Ge(){Ue(k),De(Xe,j),lt(L),De(Je,J)}async function xe(e,t,n,r){return ee({type:"goto",url:Ze(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Pe=!0),t.invalidate&&t.invalidate.forEach(Sn)}})}async function gn(e){if(e.id!==(U==null?void 0:U.id)){const t={};K.add(t),U={id:e.id,token:t,promise:ht({...e,preload:t}).then(n=>(K.delete(t),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function _e(e){var n;const t=(n=await he(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(r=>r==null?void 0:r[1]()))}function ut(e,t,n){var s;v=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,e.props.page),ct=new A.root({target:t,props:{...e.props,stores:C,components:oe},hydrate:n,sync:!1}),ft(L);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(a)),se=!0}function ie({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(T&&(e.pathname===T||e.pathname===T+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);e.pathname=Rt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:nn(n).map(f=>f.node.component),page:Oe(I)}};i!==void 0&&(c.props.form=i);let l={},d=!I,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],h=v.branch[f];(m==null?void 0:m.data)!==(h==null?void 0:h.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||e.href!==v.url.href||v.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:I.data}),c}async function Ce({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var d,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let f=function(...h){for(const p of h){const{href:_}=new URL(p,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(h,p)=>(o&&(c.route=!0),h[p])}),params:new Proxy(r,{get:(h,p)=>(o&&c.params.add(p),h[p])}),data:(s==null?void 0:s.data)??null,url:Lt(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},A.hash),async fetch(h,p){h instanceof Request&&(p={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...p});const{resolved:_,promise:E}=dt(h,p,n);return o&&f(_.href),E},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),t()},untrack(h){o=!1;try{return h()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function dt(e,t,n){let r=e instanceof Request?e.url:e;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=se?Nt(r,a.href,t):Ct(r,t);return{resolved:a,promise:s}}function He(e,t,n,r,a,s){if(Pe)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(re.some(o=>o(new URL(i))))return!0;return!1}function Ne(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function mn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function ze({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Oe(I),constructors:[]}}}async function ht({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((U==null?void 0:U.id)===e)return K.delete(U.token),U.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let d=null;const u=v.url?e!==ce(v.url):!1,w=v.route?a.id!==v.route.id:!1,f=mn(v.url,n);let m=!1;const h=l.map((g,y)=>{var N;const b=v.branch[y],S=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||He(m,w,u,f,(N=b.server)==null?void 0:N.uses,r));return S&&(m=!0),S});if(h.some(Boolean)){try{d=await mt(n,h)}catch(g){const y=await V(g,{url:n,params:r,route:{id:e}});return K.has(s)?ze({error:y,url:n,params:r,route:a}):de({status:ne(g),error:y,url:n,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let _=!1;const E=l.map(async(g,y)=>{var pe;if(!g)return;const b=v.branch[y],S=p==null?void 0:p[y];if((!S||S.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!He(_,w,u,f,(pe=b.universal)==null?void 0:pe.uses,r))return b;if(_=!0,(S==null?void 0:S.type)==="error")throw S;return Ce({loader:g[1],url:n,params:r,route:a,parent:async()=>{var je;const $e={};for(let ge=0;ge<y;ge+=1)Object.assign($e,(je=await E[ge])==null?void 0:je.data);return $e},server_data_node:Ne(S===void 0&&g[0]?{type:"skip"}:S??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of E)g.catch(()=>{});const R=[];for(let g=0;g<l.length;g+=1)if(l[g])try{R.push(await E[g])}catch(y){if(y instanceof Ee)return{type:"redirect",location:y.location};if(K.has(s))return ze({error:await V(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=ne(y),S;if(p!=null&&p.includes(y))b=y.status??b,S=y.error;else if(y instanceof le)S=y.body;else{if(await C.updated.check())return await rt(),await q(n);S=await V(y,{params:r,url:n,route:{id:a.id}})}const N=await wn(g,R,i);return N?ie({url:n,params:r,branch:R.slice(0,N.idx).concat(N.node),status:b,error:S,route:a}):await gt(n,{id:a.id},S,b)}else R.push(void 0);return ie({url:n,params:r,branch:R,status:200,error:null,route:a,form:t?void 0:null})}async function wn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function de({status:e,error:t,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await mt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==Q||n.pathname!==location.pathname||Te)&&await q(n)}try{const o=await Ce({loader:Ae,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ne(s)}),c={node:await ae(),loader:ae,universal:null,server:null,data:null};return ie({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Ee)return xe(new URL(o.location,location.href),{},0);throw o}}async function yn(e){const t=e.href;if(Z.has(t))return Z.get(t);let n;try{const r=(async()=>{let a=await A.hooks.reroute({url:new URL(e),fetch:async(s,i)=>dt(s,i,e).promise})??e;if(typeof a=="string"){const s=new URL(e);A.hash?s.hash=a:s.pathname=a,a=s}return a})();Z.set(t,r),n=await r}catch{Z.delete(t);return}return n}async function he(e,t){if(e&&!ue(e,T,A.hash)){const n=await yn(e);if(!n)return;const r=_n(n);for(const a of Le){const s=a.exec(r);if(s)return{id:ce(e),invalidating:t,route:a,params:Ut(s),url:e}}}}function _n(e){return It(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function ce(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function pt({url:e,type:t,intent:n,delta:r}){let a=!1;const s=yt(v,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return X||ot.forEach(o=>o(i)),a?null:s}async function ee({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=qe,block:d=qe}){const u=$;$=c;const w=await he(t,!1),f=pt({url:t,type:e,delta:n==null?void 0:n.delta,intent:w});if(!f){d(),$===c&&($=u);return}const m=k,h=L;l(),X=!0,se&&C.navigating.set(Y.current=f.navigation);let p=w&&await ht(w);if(!p){if(ue(t,T,A.hash))return await q(t);p=await gt(t,{id:null},await V(new ke(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(w==null?void 0:w.url)||t,$!==c)return f.reject(new Error("navigation aborted")),!1;if(p.type==="redirect")if(o>=20)p=await de({status:500,error:await V(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await xe(new URL(p.location,t).href,{},o+1,c),!1;else p.props.page.status>=400&&await C.updated.check()&&(await rt(),await q(t));if(pn(),Ue(m),lt(h),p.props.page.url.pathname!==t.pathname&&(t.pathname=p.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,y={[F]:k+=g,[W]:L+=g,[Qe]:i};(s?history.replaceState:history.pushState).call(history,y,"",t),s||hn(k,L)}if(U=null,p.props.page.state=i,se){v=p.state,p.props.page&&(p.props.page.url=t);const g=(await Promise.all(Array.from(st,y=>y(f.navigation)))).filter(y=>typeof y=="function");if(g.length>0){let y=function(){g.forEach(b=>{z.delete(b)})};g.push(y),g.forEach(b=>{z.add(b)})}ct.$set(p.props),cn(p.props.page),it=!0}else ut(p,Se,!1);const{activeElement:_}=document;await Et();const E=n?n.scroll:a?Ie():null;if(Me){const g=t.hash&&document.getElementById(decodeURIComponent(A.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):g?g.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==_&&document.activeElement!==document.body;!r&&!R&&Rn(),Me=!0,p.props.page&&Object.assign(I,p.props.page),X=!1,e==="popstate"&&ft(L),f.fulfil(void 0),z.forEach(g=>g(f.navigation)),C.navigating.set(Y.current=null)}async function gt(e,t,n,r){return e.origin===Q&&e.pathname===location.pathname&&!Te?await de({status:r,error:n,url:e,route:t}):await q(e)}function vn(){let e,t,n;x.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,O.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],O.tap)}x.addEventListener("mousedown",r),x.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(_e(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=tt(o,x),d=l===t&&c>=n;if(!l||d)return;const{url:u,external:w,download:f}=be(l,T,A.hash);if(w||f)return;const m=te(l),h=u&&ce(v.url)===ce(u);if(!(m.reload||h))if(c<=m.preload_data){t=l,n=O.tap;const p=await he(u,!1);if(!p)return;gn(p)}else c<=m.preload_code&&(t=l,n=c,_e(u))}function i(){a.disconnect();for(const o of x.querySelectorAll("a")){const{url:c,external:l,download:d}=be(o,T,A.hash);if(l||d)continue;const u=te(o);u.reload||(u.preload_code===O.viewport&&a.observe(o),u.preload_code===O.eager&&_e(c))}}z.add(i),i()}function V(e,t){if(e instanceof le)return e.body;const n=ne(e),r=on(e);return A.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function bn(e,t){ve(()=>(e.add(t),()=>{e.delete(t)}))}function jn(e){bn(st,e)}function An(e,t={}){return e=new URL(Ze(e)),e.origin!==Q?Promise.reject(new Error("goto: invalid URL")):xe(e,t,0)}function Sn(e){if(typeof e=="function")re.push(e);else{const{href:t}=new URL(e,location.href);re.push(n=>n.href===t)}}function kn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(Ge(),!X){const a=yt(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ot.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ge()}),(t=navigator.connection)!=null&&t.saveData||vn(),x.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=tt(n.composedPath()[0],x);if(!r)return;const{url:a,external:s,target:i,download:o}=be(r,T,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=te(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[d,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=d===me(location);if(s||c.reload&&(!w||!u)){pt({url:a,type:"link"})?X=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(M=!0,Ue(k),e(a),!c.replace_state)return;M=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await ee({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),x.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ue(o,T,!1))return;const c=n.target,l=te(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&d.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),ee({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[F]){const a=n.state[F];if($={},a===k)return;const s=j[a],i=n.state[Qe]??{},o=new URL(n.state[Gt]??location.href),c=n.state[W],l=v.url?me(location)===me(v.url):!1;if(c===L&&(it||l)){i!==I.state&&(I.state=i),e(o),j[k]=Ie(),s&&scrollTo(s.x,s.y),k=a;return}const u=a-k;await ee({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{k=a,L=c},block:()=>{history.go(-u)},nav_token:$})}else if(!M){const a=new URL(location.href);e(a),A.hash&&location.reload()}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[F]:++k,[W]:L},"",location.href))});for(const n of document.querySelectorAll("link"))dn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&C.navigating.set(Y.current=null)});function e(n){v.url=I.url=n,C.page.set(Oe(I)),C.page.notify()}}async function En(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Te=!0;const l=new URL(location.href);let d;({params:a={},route:s={id:null}}=await he(l,!1)||{}),d=Le.find(({id:f})=>f===s.id);let u,w=!0;try{const f=r.map(async(h,p)=>{const _=o[p];return _!=null&&_.uses&&(_.uses=wt(_.uses)),Ce({loader:A.nodes[h],url:l,params:a,route:s,parent:async()=>{const E={};for(let R=0;R<p;R+=1)Object.assign(E,(await f[R]).data);return E},server_data_node:Ne(_)})}),m=await Promise.all(f);if(d){const h=d.layouts;for(let p=0;p<h.length;p++)h[p]||m.splice(p,0,void 0)}u=ie({url:l,params:a,branch:m,status:t,error:n,form:c,route:d??null})}catch(f){if(f instanceof Ee){await q(new URL(f.location,location.href));return}u=await de({status:ne(f),error:await V(f,{url:l,params:a,route:s}),url:l,route:s}),e.textContent="",w=!1}u.props.page&&(u.props.page.state={}),ut(u,e,w)}async function mt(e,t){var s;const n=new URL(e);n.pathname=un(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(rn,"1"),n.searchParams.append(an,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new le(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function d(f){return en(f,{...A.decoders,Promise:m=>new Promise((h,p)=>{o.set(m,{fulfil:h,reject:p})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const h=u.indexOf(`
`);if(h===-1)break;const p=JSON.parse(u.slice(0,h));if(u=u.slice(h+1),p.type==="redirect")return i(p);if(p.type==="data")(w=p.nodes)==null||w.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=wt(_.uses),_.data=d(_.data))}),i(p);else if(p.type==="chunk"){const{id:_,data:E,error:R}=p,g=o.get(_);o.delete(_),R?g.reject(d(R)):g.fulfil(d(E))}}}})}function wt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Rn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function yt(e,t,n,r){var c,l;let a,s;const i=new Promise((d,u)=>{a=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function Oe(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function In(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{$n as a,Pn as d,An as g,xn as l,jn as o,C as s,fe as w};
