/*! Copyright 2025 Adobe
All Rights Reserved. */
var xe=Object.defineProperty;var je=(e,t,r)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ie=(e,t,r)=>je(e,typeof t!="symbol"?t+"":t,r);import{g as Ae}from"./image-params-keymap.js";import{jsx as S}from"../preact-jsx-runtime.js";import{l as g,_ as ve,k as q,G as Me,B as se}from"./icons/Add.js";import{signal as ae}from"../signals.js";const Se=e=>e.reduce((r,n)=>{if(!n)return r;if(typeof n=="string"&&(r+=` ${n}`),Array.isArray(n)){const[s,p]=n;s&&p&&(r+=` ${s}`)}return r},"").trim();function $e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ee=function(t){return Ce(t)&&!Ne(t)};function Ce(e){return!!e&&typeof e=="object"}function Ne(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Le(e)}var Pe=typeof Symbol=="function"&&Symbol.for,Te=Pe?Symbol.for("react.element"):60103;function Le(e){return e.$$typeof===Te}function De(e){return Array.isArray(e)?[]:{}}function W(e,t){return t.clone!==!1&&t.isMergeableObject(e)?D(De(e),e,t):e}function Fe(e,t,r){return e.concat(t).map(function(n){return W(n,r)})}function Ue(e,t){if(!t.customMerge)return D;var r=t.customMerge(e);return typeof r=="function"?r:D}function ke(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function oe(e){return Object.keys(e).concat(ke(e))}function ye(e,t){try{return t in e}catch{return!1}}function qe(e,t){return ye(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function We(e,t,r){var n={};return r.isMergeableObject(e)&&oe(e).forEach(function(s){n[s]=W(e[s],r)}),oe(t).forEach(function(s){qe(e,s)||(ye(e,s)&&r.isMergeableObject(t[s])?n[s]=Ue(s,r)(e[s],t[s],r):n[s]=W(t[s],r))}),n}function D(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Fe,r.isMergeableObject=r.isMergeableObject||Ee,r.cloneUnlessOtherwiseSpecified=W;var n=Array.isArray(t),s=Array.isArray(e),p=n===s;return p?n?r.arrayMerge(e,t,r):We(e,t,r):W(t,r)}D.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,s){return D(n,s,r)},{})};var ze=D,Ve=ze;const nt=$e(Ve),it=(e,t)=>{let r;return function(...n){clearTimeout(r),r=setTimeout(()=>e.apply(this,n),t)}},le={medium:768,large:1024,xlarge:1366,xxlarge:1920},Ke=(e,t)=>{const[r,n]=e.split("?"),s=new URLSearchParams(n),p=Ae();let _={};return p&&Object.keys(p).length>0&&t?_=Object.entries(t).reduce((u,[y,h])=>{const w=p[y];return w&&(u[w]=h),u},{}):_={auto:"webp",quality:80,crop:!1,fit:"cover",...t},Object.entries(_).forEach(([u,y])=>{y!=null&&s.set(u,String(y))}),`${r}?${s.toString()}`},st=(e,t)=>{if(!e||!(t!=null&&t.width))return;const r=n=>Ke(e,{...n});return Object.entries(le).map(([,n])=>{const s=t.width*n/le.xxlarge;return`${r({...t,width:s})} ${n}w`}).join(`,
`)};var Ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,he=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,K=/[\s\n\\/='"\0<>]/,be=/^xlink:?./,Be=/["&<]/;function k(e){if(Be.test(e+="")===!1)return e;for(var t=0,r=0,n="",s="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 60:s="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=s,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var ce=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},ue=function(e,t,r){return String(e).length>40||String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},fe={},Ge=/([A-Z])/g;function me(e){var t="";for(var r in e){var n=e[r];n!=null&&n!==""&&(t&&(t+=" "),t+=r[0]=="-"?r:fe[r]||(fe[r]=r.replace(Ge,"-$1").toLowerCase()),t=typeof n=="number"&&Ze.test(r)===!1?t+": "+n+"px;":t+": "+n+";")}return t||void 0}function ee(e,t){return Array.isArray(t)?t.reduce(ee,e):t!=null&&t!==!1&&e.push(t),e}function de(){this.__d=!0}function we(e,t){return{__v:e,context:t,props:e.props,setState:de,forceUpdate:de,__d:!0,__h:[]}}function Z(e,t){var r=e.contextType,n=r&&t[r.__c];return r!=null?n?n.props.value:r.__:t}var I=[];function F(e,t,r,n,s,p){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return typeof e=="function"?"":k(e);var _=r.pretty,u=_&&typeof _=="string"?_:"	";if(Array.isArray(e)){for(var y="",h=0;h<e.length;h++)_&&h>0&&(y+=`
`),y+=F(e[h],t,r,n,s,p);return y}if(e.constructor!==void 0)return"";var w,f=e.type,l=e.props,x=!1;if(typeof f=="function"){if(x=!0,!r.shallow||!n&&r.renderRootComponent!==!1){if(f===q){var m=[];return ee(m,e.props.children),F(m,t,r,r.shallowHighOrder!==!1,s,p)}var v,i=e.__c=we(e,t);g.__b&&g.__b(e);var P=g.__r;if(f.prototype&&typeof f.prototype.render=="function"){var $=Z(f,t);(i=e.__c=new f(l,$)).__v=e,i._dirty=i.__d=!0,i.props=l,i.state==null&&(i.state={}),i._nextState==null&&i.__s==null&&(i._nextState=i.__s=i.state),i.context=$,f.getDerivedStateFromProps?i.state=Object.assign({},i.state,f.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i._nextState!==i.state?i._nextState:i.__s!==i.state?i.__s:i.state),P&&P(e),v=i.render(i.props,i.state,i.context)}else for(var C=Z(f,t),T=0;i.__d&&T++<25;)i.__d=!1,P&&P(e),v=f.call(e.__c,l,C);return i.getChildContext&&(t=Object.assign({},t,i.getChildContext())),g.diffed&&g.diffed(e),F(v,t,r,r.shallowHighOrder!==!1,s,p)}f=(w=f).displayName||w!==Function&&w.name||function(J){var Q=(Function.prototype.toString.call(J).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!Q){for(var V=-1,R=I.length;R--;)if(I[R]===J){V=R;break}V<0&&(V=I.push(J)-1),Q="UnnamedComponent"+V}return Q}(w)}var j,O,d="<"+f;if(l){var b=Object.keys(l);r&&r.sortAttributes===!0&&b.sort();for(var E=0;E<b.length;E++){var a=b[E],c=l[a];if(a!=="children"){if(!K.test(a)&&(r&&r.allAttributes||a!=="key"&&a!=="ref"&&a!=="__self"&&a!=="__source")){if(a==="defaultValue")a="value";else if(a==="defaultChecked")a="checked";else if(a==="defaultSelected")a="selected";else if(a==="className"){if(l.class!==void 0)continue;a="class"}else s&&be.test(a)&&(a=a.toLowerCase().replace(/^xlink:?/,"xlink:"));if(a==="htmlFor"){if(l.for)continue;a="for"}a==="style"&&c&&typeof c=="object"&&(c=me(c)),a[0]==="a"&&a[1]==="r"&&typeof c=="boolean"&&(c=String(c));var o=r.attributeHook&&r.attributeHook(a,c,t,r,x);if(o||o==="")d+=o;else if(a==="dangerouslySetInnerHTML")O=c&&c.__html;else if(f==="textarea"&&a==="value")j=c;else if((c||c===0||c==="")&&typeof c!="function"){if(!(c!==!0&&c!==""||(c=a,r&&r.xml))){d=d+" "+a;continue}if(a==="value"){if(f==="select"){p=c;continue}f==="option"&&p==c&&l.selected===void 0&&(d+=" selected")}d=d+" "+a+'="'+k(c)+'"'}}}else j=c}}if(_){var A=d.replace(/\n\s*/," ");A===d||~A.indexOf(`
`)?_&&~d.indexOf(`
`)&&(d+=`
`):d=A}if(d+=">",K.test(f))throw new Error(f+" is not a valid HTML tag name in "+d);var L,Oe=he.test(f)||r.voidElements&&r.voidElements.test(f),M=[];if(O)_&&ue(O)&&(O=`
`+u+ce(O,u)),d+=O;else if(j!=null&&ee(L=[],j).length){for(var B=_&&~d.indexOf(`
`),re=!1,G=0;G<L.length;G++){var X=L[G];if(X!=null&&X!==!1){var N=F(X,t,r,!0,f==="svg"||f!=="foreignObject"&&s,p);if(_&&!B&&ue(N)&&(B=!0),N)if(_){var ne=N.length>0&&N[0]!="<";re&&ne?M[M.length-1]+=N:M.push(N),re=ne}else M.push(N)}}if(_&&B)for(var Y=M.length;Y--;)M[Y]=`
`+u+ce(M[Y],u)}if(M.length||O)d+=M.join("");else if(r&&r.xml)return d.substring(0,d.length-1)+" />";return!Oe||L||O?(_&&~d.indexOf(`
`)&&(d+=`
`),d=d+"</"+f+">"):d=d.replace(/>$/," />"),d}var Xe={shallow:!0};z.render=z;var Ye=function(e,t){return z(e,t,Xe)},pe=[];function z(e,t,r){t=t||{};var n=g.__s;g.__s=!0;var s,p=ve(q,null);return p.__k=[e],s=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?F(e,t,r):U(e,t,!1,void 0,p),g.__c&&g.__c(e,pe),g.__s=n,pe.length=0,s}function H(e){return e==null||typeof e=="boolean"?null:typeof e=="string"||typeof e=="number"||typeof e=="bigint"?ve(null,null,e):e}function Je(e,t){return e==="className"?"class":e==="htmlFor"?"for":e==="defaultValue"?"value":e==="defaultChecked"?"checked":e==="defaultSelected"?"selected":t&&be.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function Qe(e,t){return e==="style"&&t!=null&&typeof t=="object"?me(t):e[0]==="a"&&e[1]==="r"&&typeof t=="boolean"?String(t):t}var _e=Array.isArray,ge=Object.assign;function U(e,t,r,n,s){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":k(e);if(_e(e)){var p="";s.__k=e;for(var _=0;_<e.length;_++)p+=U(e[_],t,r,n,s),e[_]=H(e[_]);return p}if(e.constructor!==void 0)return"";e.__=s,g.__b&&g.__b(e);var u=e.type,y=e.props;if(typeof u=="function"){var h;if(u===q)h=y.children;else{h=u.prototype&&typeof u.prototype.render=="function"?function(b,E){var a=b.type,c=Z(a,E),o=new a(b.props,c);b.__c=o,o.__v=b,o.__d=!0,o.props=b.props,o.state==null&&(o.state={}),o.__s==null&&(o.__s=o.state),o.context=c,a.getDerivedStateFromProps?o.state=ge({},o.state,a.getDerivedStateFromProps(o.props,o.state)):o.componentWillMount&&(o.componentWillMount(),o.state=o.__s!==o.state?o.__s:o.state);var A=g.__r;return A&&A(b),o.render(o.props,o.state,o.context)}(e,t):function(b,E){var a,c=we(b,E),o=Z(b.type,E);b.__c=c;for(var A=g.__r,L=0;c.__d&&L++<25;)c.__d=!1,A&&A(b),a=b.type.call(c,b.props,o);return a}(e,t);var w=e.__c;w.getChildContext&&(t=ge({},t,w.getChildContext()))}var f=U(h=h!=null&&h.type===q&&h.key==null?h.props.children:h,t,r,n,e);return g.diffed&&g.diffed(e),e.__=void 0,g.unmount&&g.unmount(e),f}var l,x,m="<";if(m+=u,y)for(var v in l=y.children,y){var i=y[v];if(!(v==="key"||v==="ref"||v==="__self"||v==="__source"||v==="children"||v==="className"&&"class"in y||v==="htmlFor"&&"for"in y||K.test(v))){if(i=Qe(v=Je(v,r),i),v==="dangerouslySetInnerHTML")x=i&&i.__html;else if(u==="textarea"&&v==="value")l=i;else if((i||i===0||i==="")&&typeof i!="function"){if(i===!0||i===""){i=v,m=m+" "+v;continue}if(v==="value"){if(u==="select"){n=i;continue}u!=="option"||n!=i||"selected"in y||(m+=" selected")}m=m+" "+v+'="'+k(i)+'"'}}}var P=m;if(m+=">",K.test(u))throw new Error(u+" is not a valid HTML tag name in "+m);var $="",C=!1;if(x)$+=x,C=!0;else if(typeof l=="string")$+=k(l),C=!0;else if(_e(l)){e.__k=l;for(var T=0;T<l.length;T++){var j=l[T];if(l[T]=H(j),j!=null&&j!==!1){var O=U(j,t,u==="svg"||u!=="foreignObject"&&r,n,e);O&&($+=O,C=!0)}}}else if(l!=null&&l!==!1&&l!==!0){e.__k=[H(l)];var d=U(l,t,u==="svg"||u!=="foreignObject"&&r,n,e);d&&($+=d,C=!0)}if(g.diffed&&g.diffed(e),e.__=void 0,g.unmount&&g.unmount(e),C)m+=$;else if(he.test(u))return P+" />";return m+"</"+u+">"}z.shallowRender=Ye;const Re=Me(null);class at{constructor(t){ie(this,"_provider");this._provider=t}render(t,r){return async n=>{var f;if(!t)throw new Error("Component is not defined");if(!n)throw new Error("Root element is not defined");const s=await((f=t.getInitialData)==null?void 0:f.call(t,r))??{},p=ae({...r}),_=ae(new Set),u=this._provider,y=({next:l})=>S(Re.Provider,{value:_,children:S(te,{node:u,...u.props,children:S(t,{...l.value,initialData:s})})});n.innerHTML="";const h=document.createElement("div");n.classList.add("dropin-design"),se(S(y,{next:p}),h);const w={remove:()=>{se(null,h)},setProps:l=>{const x=l(p.peek());p.value=x}};return new Promise(l=>{_.subscribe(x=>{if(x.size===0)return n.classList.add("dropin-design"),n.appendChild(h.firstChild??h),l(w)})})}}unmount(t){var r;if(!t)throw new Error("Root element is not defined");(r=t.firstChild)==null||r.remove()}async toString(t,r,n){var p;if(!t)throw new Error("Component is not defined");const s=await((p=t.getInitialData)==null?void 0:p.call(t,r))??{};return z(S(te,{node:this._provider,...this._provider.props,children:S(t,{...r,initialData:s})}),{},{...n})}}function te({node:e,...t}){return e?Array.isArray(e)?S(q,{children:e.map((r,n)=>S(te,{node:r,className:t.className,...t},n))}):(t.className=Se([e.props.className,t.className]),S(e.type,{ref:e.ref,...e.props,...t},e.key)):null}const ot=e=>typeof e=="number",lt=()=>{const e=navigator.userAgent.toLowerCase(),t=/ipad|iphone|ipod/.test(e),r=e.includes("mac")&&"ontouchend"in document;return t||r};export{at as R,Re as S,te as V,it as a,lt as b,Se as c,nt as d,st as g,ot as i};