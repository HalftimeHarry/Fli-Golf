function $(){}const G=t=>t;function mt(t,n){for(const e in n)t[e]=n[e];return t}function tt(t){return t()}function Y(){return Object.create(null)}function w(t){t.forEach(tt)}function C(t){return typeof t=="function"}function Bt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let q;function Ft(t,n){return q||(q=document.createElement("a")),q.href=n,t===q.href}function pt(t){return Object.keys(t).length===0}function nt(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function It(t){let n;return nt(t,e=>n=e)(),n}function Ht(t,n,e){t.$$.on_destroy.push(nt(n,e))}function Wt(t,n,e,i){if(t){const r=et(t,n,e,i);return t[0](r)}}function et(t,n,e,i){return t[1]&&i?mt(e.ctx.slice(),t[1](i(n))):e.ctx}function Gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function Jt(t,n,e,i,r,u){if(r){const s=et(n,e,i,u);t.p(s,r)}}function Kt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function Qt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function Ut(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function Vt(t){const n={};for(const e in t)n[e]=!0;return n}function Xt(t){return t??""}function Yt(t){return t&&C(t.destroy)?t.destroy:$}function Zt(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}const it=typeof window<"u";let J=it?()=>window.performance.now():()=>Date.now(),K=it?t=>requestAnimationFrame(t):$;const N=new Set;function rt(t){N.forEach(n=>{n.c(t)||(N.delete(n),n.f())}),N.size!==0&&K(rt)}function Q(t){let n;return N.size===0&&K(rt),{promise:new Promise(e=>{N.add(n={c:t,f:e})}),abort(){N.delete(n)}}}let F=!1;function yt(){F=!0}function gt(){F=!1}function $t(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<n.length;a++){const _=n[a];_.claim_order!==void 0&&c.push(_)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const a=n[c].claim_order,_=(r>0&&n[e[r]].claim_order<=a?r+1:$t(1,r,h=>n[e[h]].claim_order,a))-1;i[c]=e[_]+1;const l=_+1;e[l]=c,r=Math.max(l,r)}const u=[],s=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);u.reverse(),s.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<s.length;c++){for(;a<u.length&&s[c].claim_order>=u[a].claim_order;)a++;const _=a<u.length?u[a]:null;t.insertBefore(s[c],_)}}function bt(t,n){t.appendChild(n)}function st(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function vt(t){const n=ct("style");return wt(st(t),n),n.sheet}function wt(t,n){return bt(t.head||t,n),n.sheet}function Et(t,n){if(F){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tn(t,n,e){F&&!e?Et(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function nn(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function ct(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function en(){return U(" ")}function rn(){return U("")}function sn(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function on(t){return function(n){return n.preventDefault(),t.call(this,n)}}function cn(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function Nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const St=["width","height"];function un(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set&&St.indexOf(i)===-1?t[i]=n[i]:Nt(t,i,n[i])}function an(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function ln(t){return t===""?null:+t}function At(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,n,e,i,r=!1){Ct(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function at(t,n,e,i){return ut(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function fn(t,n,e){return at(t,n,e,ct)}function _n(t,n,e){return at(t,n,e,kt)}function Ot(t,n){return ut(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>U(n),!0)}function dn(t){return Ot(t," ")}function hn(t,n){n=""+n,t.data!==n&&(t.data=n)}function mn(t,n){t.value=n??""}function pn(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function yn(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function gn(t){const n=t.querySelector(":checked");return n&&n.__value}function $n(t,n,e){t.classList[e?"add":"remove"](n)}function lt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function xn(t,n){return new t(n)}const R=new Map;let T=0;function jt(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}function Dt(t,n){const e={stylesheet:vt(n),rules:{}};return R.set(t,e),e}function z(t,n,e,i,r,u,s,o=0){const c=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=c){const y=n+(e-n)*u(p);a+=p*100+`%{${s(y,1-y)}}
`}const _=a+`100% {${s(e,1-e)}}
}`,l=`__svelte_${jt(_)}_${o}`,h=st(t),{stylesheet:f,rules:d}=R.get(h)||Dt(h,t);d[l]||(d[l]=!0,f.insertRule(`@keyframes ${l} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${l} ${i}ms linear ${r}ms 1 both`,T+=1,l}function B(t,n){const e=(t.style.animation||"").split(", "),i=e.filter(n?u=>u.indexOf(n)<0:u=>u.indexOf("__svelte")===-1),r=e.length-i.length;r&&(t.style.animation=i.join(", "),T-=r,T||Pt())}function Pt(){K(()=>{T||(R.forEach(t=>{const{ownerNode:n}=t.stylesheet;n&&ot(n)}),R.clear())})}let M;function P(t){M=t}function O(){if(!M)throw new Error("Function called outside component initialization");return M}function bn(t){O().$$.on_mount.push(t)}function vn(t){O().$$.after_update.push(t)}function wn(t){O().$$.on_destroy.push(t)}function En(){const t=O();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=lt(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}function kn(t,n){return O().$$.context.set(t,n),n}function Nn(t){return O().$$.context.get(t)}function Sn(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const k=[],Z=[];let S=[];const H=[],ft=Promise.resolve();let W=!1;function _t(){W||(W=!0,ft.then(dt))}function An(){return _t(),ft}function A(t){S.push(t)}function Cn(t){H.push(t)}const I=new Set;let E=0;function dt(){if(E!==0)return;const t=M;do{try{for(;E<k.length;){const n=k[E];E++,P(n),Mt(n.$$)}}catch(n){throw k.length=0,E=0,n}for(P(null),k.length=0,E=0;Z.length;)Z.pop()();for(let n=0;n<S.length;n+=1){const e=S[n];I.has(e)||(I.add(e),e())}S.length=0}while(k.length);for(;H.length;)H.pop()();W=!1,I.clear(),P(t)}function Mt(t){if(t.fragment!==null){t.update(),w(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}function qt(t){const n=[],e=[];S.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),S=n}let D;function V(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function v(t,n,e){t.dispatchEvent(lt(`${n?"intro":"outro"}${e}`))}const L=new Set;let g;function On(){g={r:0,c:[],p:g}}function jn(){g.r||w(g.c),g=g.p}function Lt(t,n){t&&t.i&&(L.delete(t),t.i(n))}function Dn(t,n,e,i){if(t&&t.o){if(L.has(t))return;L.add(t),g.c.push(()=>{L.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const X={duration:0};function Pn(t,n,e){const i={direction:"in"};let r=n(t,e,i),u=!1,s,o,c=0;function a(){s&&B(t,s)}function _(){const{delay:h=0,duration:f=300,easing:d=G,tick:m=$,css:p}=r||X;p&&(s=z(t,0,1,f,h,d,p,c++)),m(0,1);const y=J()+h,j=y+f;o&&o.abort(),u=!0,A(()=>v(t,!0,"start")),o=Q(x=>{if(u){if(x>=j)return m(1,0),v(t,!0,"end"),a(),u=!1;if(x>=y){const b=d((x-y)/f);m(b,1-b)}}return u})}let l=!1;return{start(){l||(l=!0,B(t),C(r)?(r=r(i),V().then(_)):_())},invalidate(){l=!1},end(){u&&(a(),u=!1)}}}function Mn(t,n,e){const i={direction:"out"};let r=n(t,e,i),u=!0,s;const o=g;o.r+=1;function c(){const{delay:a=0,duration:_=300,easing:l=G,tick:h=$,css:f}=r||X;f&&(s=z(t,1,0,_,a,l,f));const d=J()+a,m=d+_;A(()=>v(t,!1,"start")),Q(p=>{if(u){if(p>=m)return h(0,1),v(t,!1,"end"),--o.r||w(o.c),!1;if(p>=d){const y=l((p-d)/_);h(1-y,y)}}return u})}return C(r)?V().then(()=>{r=r(i),c()}):c(),{end(a){a&&r.tick&&r.tick(1,0),u&&(s&&B(t,s),u=!1)}}}function qn(t,n,e,i){const r={direction:"both"};let u=n(t,e,r),s=i?0:1,o=null,c=null,a=null;function _(){a&&B(t,a)}function l(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=G,tick:y=$,css:j}=u||X,x={start:J()+d,b:f};f||(x.group=g,g.r+=1),o||c?c=x:(j&&(_(),a=z(t,s,f,m,d,p,j)),f&&y(0,1),o=l(x,m),A(()=>v(t,f,"start")),Q(b=>{if(c&&b>c.start&&(o=l(c,m),c=null,v(t,o.b,"start"),j&&(_(),a=z(t,s,o.b,o.duration,0,p,u.css))),o){if(b>=o.end)y(s=o.b,1-s),v(t,o.b,"end"),c||(o.b?_():--o.group.r||w(o.group.c)),o=null;else if(b>=o.start){const ht=b-o.start;s=o.a+o.d*p(ht/o.duration),y(s,1-s)}}return!!(o||c)}))}return{run(f){C(u)?V().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),o=c=null}}}function Ln(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],o=n[u];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[u]=o}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Rn(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Tn(t){t&&t.c()}function zn(t,n){t&&t.l(n)}function Rt(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||A(()=>{const s=t.$$.on_mount.map(tt).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...s):w(s),t.$$.on_mount=[]}),u.forEach(A)}function Tt(t,n){const e=t.$$;e.fragment!==null&&(qt(e.after_update),w(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function zt(t,n){t.$$.dirty[0]===-1&&(k.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bn(t,n,e,i,r,u,s,o=[-1]){const c=M;P(t);const a=t.$$={fragment:null,ctx:[],props:u,update:$,not_equal:r,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:Y(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};s&&s(a.root);let _=!1;if(a.ctx=e?e(t,n.props||{},(l,h,...f)=>{const d=f.length?f[0]:h;return a.ctx&&r(a.ctx[l],a.ctx[l]=d)&&(!a.skip_bound&&a.bound[l]&&a.bound[l](d),_&&zt(t,l)),h}):[],a.update(),_=!0,w(a.before_update),a.fragment=i?i(a.ctx):!1,n.target){if(n.hydrate){yt();const l=At(n.target);a.fragment&&a.fragment.l(l),l.forEach(ot)}else a.fragment&&a.fragment.c();n.intro&&Lt(t.$$.fragment),Rt(t,n.target,n.anchor,n.customElement),gt(),dt()}P(c)}class Fn{$destroy(){Tt(this,1),this.$destroy=$}$on(n,e){if(!C(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!pt(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{un as $,Rt as A,Tt as B,Wt as C,Et as D,Jt as E,Kt as F,Gt as G,Vt as H,mt as I,Qt as J,sn as K,Sn as L,$ as M,w as N,Ht as O,Rn as P,Cn as Q,En as R,Fn as S,Ft as T,mn as U,on as V,A as W,Pn as X,Mn as Y,kn as Z,an as _,en as a,Ln as a0,Ut as a1,Nn as a2,kt as a3,_n as a4,qn as a5,ln as a6,yn as a7,nn as a8,gn as a9,Xt as aa,cn as ab,wn as ac,$n as ad,Yt as ae,It as af,G as ag,Zt as ah,tn as b,dn as c,Dn as d,rn as e,jn as f,Lt as g,ot as h,Bn as i,vn as j,ct as k,fn as l,At as m,Nt as n,bn as o,pn as p,U as q,Ot as r,Bt as s,An as t,hn as u,On as v,Z as w,xn as x,Tn as y,zn as z};
