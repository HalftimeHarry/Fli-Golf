function E(){}const X=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function st(){return Object.create(null)}function N(t){t.forEach(ct)}function D(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Jt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function wt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t){let e;return ot(t,n=>e=n)(),e}function Qt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Ut(t,e,n,i){if(t){const s=at(t,e,n,i);return t[0](s)}}function at(t,e,n,i){return t[1]&&i?bt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)a[c]=e.dirty[c]|s[c];return a}return e.dirty|s}return e.dirty}function Xt(t,e,n,i,s,a){if(s){const r=at(e,n,i,a);t.p(r,s)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function te(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ee(t){const e={};for(const n in t)e[n]=!0;return e}function ne(t){return t??""}function ie(t){return t&&D(t.destroy)?t.destroy:E}function se(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const lt=typeof window<"u";let Y=lt?()=>window.performance.now():()=>Date.now(),Z=lt?t=>requestAnimationFrame(t):E;const j=new Set;function ut(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&Z(ut)}function tt(t){let e;return j.size===0&&Z(ut),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}let J=!1;function vt(){J=!0}function kt(){J=!1}function Et(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:Et(1,s,h=>e[n[h]].claim_order,l))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,s=Math.max(_,s)}const a=[],r=[];let c=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(a.push(e[o-1]);c>=o;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);a.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<a.length&&r[o].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;t.insertBefore(r[o],f)}}function St(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=dt("style");return Ct(ft(t),e),e.sheet}function Ct(t,e){return St(t.head||t,e),e.sheet}function jt(t,e){if(J){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function re(t,e,n){J&&!n?jt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function _t(t){t.parentNode&&t.parentNode.removeChild(t)}function ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function dt(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function et(t){return document.createTextNode(t)}function oe(){return et(" ")}function ae(){return et("")}function le(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ue(t){return function(e){return e.preventDefault(),t.call(this,e)}}function fe(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Dt=["width","height"];function _e(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Dt.indexOf(i)===-1?t[i]=e[i]:Ot(t,i,e[i])}function de(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function he(t){return t===""?null:+t}function Pt(t){return Array.from(t.childNodes)}function qt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,s=!1){qt(t);const a=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const o=n(c);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const o=n(c);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function mt(t,e,n,i){return ht(t,s=>s.nodeName===e,s=>{const a=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||a.push(c.name)}a.forEach(r=>s.removeAttribute(r))},()=>i(e))}function me(t,e,n){return mt(t,e,n,dt)}function pe(t,e,n){return mt(t,e,n,Mt)}function Lt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>et(e),!0)}function ye(t){return Lt(t," ")}function ge(t,e){e=""+e,t.data!==e&&(t.data=e)}function $e(t,e){t.value=e??""}function xe(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function be(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function we(t){const e=t.querySelector(":checked");return e&&e.__value}function ve(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ke(t,e){return new t(e)}const I=new Map;let H=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:At(e),rules:{}};return I.set(t,n),n}function W(t,e,n,i,s,a,r,c=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*a(m);l+=m*100+`%{${r(g,1-g)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Rt(f)}_${c}`,h=ft(t),{stylesheet:u,rules:d}=I.get(h)||Tt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,H+=1,_}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||zt())}function zt(){Z(()=>{H||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&_t(e)}),I.clear())})}let R;function L(t){R=t}function P(){if(!R)throw new Error("Function called outside component initialization");return R}function Ee(t){P().$$.on_mount.push(t)}function Ne(t){P().$$.after_update.push(t)}function Se(t){P().$$.on_destroy.push(t)}function Ae(){const t=P();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const a=pt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,a)}),!a.defaultPrevented}return!0}}function Ce(t,e){return P().$$.context.set(t,e),e}function je(t){return P().$$.context.get(t)}function Me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],rt=[];let M=[];const U=[],yt=Promise.resolve();let V=!1;function gt(){V||(V=!0,yt.then($t))}function Oe(){return gt(),yt}function O(t){M.push(t)}function De(t){U.push(t)}const Q=new Set;let A=0;function $t(){if(A!==0)return;const t=R;do{try{for(;A<C.length;){const e=C[A];A++,L(e),Bt(e.$$)}}catch(e){throw C.length=0,A=0,e}for(L(null),C.length=0,A=0;rt.length;)rt.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];Q.has(n)||(Q.add(n),n())}M.length=0}while(C.length);for(;U.length;)U.pop()();V=!1,Q.clear(),L(t)}function Bt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Ft(t){const e=[],n=[];M.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),M=e}let q;function nt(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function S(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const F=new Set;let v;function Pe(){v={r:0,c:[],p:v}}function qe(){v.r||N(v.c),v=v.p}function xt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Le(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),v.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const it={duration:0};function Re(t,e,n){const i={direction:"in"};let s=e(t,n,i),a=!1,r,c,o=0;function l(){r&&G(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=X,tick:p=E,css:m}=s||it;m&&(r=W(t,0,1,u,h,d,m,o++)),p(0,1);const g=Y()+h,k=g+u;c&&c.abort(),a=!0,O(()=>S(t,!0,"start")),c=tt($=>{if(a){if($>=k)return p(1,0),S(t,!0,"end"),l(),a=!1;if($>=g){const x=d(($-g)/u);p(x,1-x)}}return a})}let _=!1;return{start(){_||(_=!0,G(t),D(s)?(s=s(i),nt().then(f)):f())},invalidate(){_=!1},end(){a&&(l(),a=!1)}}}function Te(t,e,n){const i={direction:"out"};let s=e(t,n,i),a=!0,r;const c=v;c.r+=1;function o(){const{delay:l=0,duration:f=300,easing:_=X,tick:h=E,css:u}=s||it;u&&(r=W(t,1,0,f,l,_,u));const d=Y()+l,p=d+f;O(()=>S(t,!1,"start")),tt(m=>{if(a){if(m>=p)return h(0,1),S(t,!1,"end"),--c.r||N(c.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return a})}return D(s)?nt().then(()=>{s=s(i),o()}):o(),{end(l){l&&s.tick&&s.tick(1,0),a&&(r&&G(t,r),a=!1)}}}function ze(t,e,n,i){const s={direction:"both"};let a=e(t,n,s),r=i?0:1,c=null,o=null,l=null;function f(){l&&G(t,l)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=X,tick:g=E,css:k}=a||it,$={start:Y()+d,b:u};u||($.group=v,v.r+=1),c||o?o=$:(k&&(f(),l=W(t,r,u,p,d,m,k)),u&&g(0,1),c=_($,p),O(()=>S(t,u,"start")),tt(x=>{if(o&&x>o.start&&(c=_(o,p),o=null,S(t,c.b,"start"),k&&(f(),l=W(t,r,c.b,c.duration,0,m,a.css))),c){if(x>=c.end)g(r=c.b,1-r),S(t,c.b,"end"),o||(c.b?f():--c.group.r||N(c.group.c)),c=null;else if(x>=c.start){const T=x-c.start;r=c.a+c.d*m(T/c.duration),g(r,1-r)}}return!!(c||o)}))}return{run(u){D(a)?nt().then(()=>{a=a(s),h(u)}):h(u)},end(){f(),c=o=null}}}function Be(t,e){t.d(1),e.delete(t.key)}function Fe(t,e,n,i,s,a,r,c,o,l,f,_){let h=t.length,u=a.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,k=new Map,$=[];for(d=u;d--;){const y=_(s,a,d),b=n(y);let w=r.get(b);w?i&&$.push(()=>w.p(y,e)):(w=l(b,y),w.c()),g.set(b,m[d]=w),b in p&&k.set(b,Math.abs(d-p[b]))}const x=new Set,T=new Set;function K(y){xt(y,1),y.m(c,f),r.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],b=t[h-1],w=y.key,z=b.key;y===b?(f=y.first,h--,u--):g.has(z)?!r.has(w)||x.has(w)?K(y):T.has(z)?h--:k.get(w)>k.get(z)?(T.add(w),K(y)):(x.add(z),h--):(o(b,r),h--)}for(;h--;){const y=t[h];g.has(y.key)||o(y,r)}for(;u;)K(m[u-1]);return N($),m}function Ie(t,e){const n={},i={},s={$$scope:1};let a=t.length;for(;a--;){const r=t[a],c=e[a];if(c){for(const o in r)o in c||(i[o]=1);for(const o in c)s[o]||(n[o]=c[o],s[o]=1);t[a]=c}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function He(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function We(t){t&&t.c()}function Ge(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:s,after_update:a}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(ct).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),a.forEach(O)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(Ft(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(C.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Je(t,e,n,i,s,a,r,c=[-1]){const o=R;L(t);const l=t.$$={fragment:null,ctx:[],props:a,update:E,not_equal:s,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:st(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return l.ctx&&s(l.ctx[_],l.ctx[_]=d)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](d),f&&Wt(t,_)),h}):[],l.update(),f=!0,N(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){vt();const _=Pt(e.target);l.fragment&&l.fragment.l(_),_.forEach(_t)}else l.fragment&&l.fragment.c();e.intro&&xt(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),kt(),$t()}L(o)}class Ke{$destroy(){Ht(this,1),this.$destroy=E}$on(e,n){if(!D(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!wt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as $,It as A,Ht as B,Ut as C,jt as D,Xt as E,Yt as F,Vt as G,ee as H,bt as I,Zt as J,le as K,Me as L,E as M,ce as N,N as O,Jt as P,Qt as Q,He as R,Ke as S,De as T,Ae as U,$e as V,ue as W,O as X,Re as Y,Te as Z,Ce as _,oe as a,_e as a0,Ie as a1,te as a2,je as a3,Mt as a4,pe as a5,be as a6,Fe as a7,ze as a8,Be as a9,we as aa,he as ab,ne as ac,fe as ad,Se as ae,ve as af,ie as ag,Kt as ah,X as ai,se as aj,re as b,ye as c,Le as d,ae as e,qe as f,xt as g,_t as h,Je as i,Ne as j,dt as k,me as l,Pt as m,Ot as n,Ee as o,xe as p,et as q,Lt as r,Gt as s,Oe as t,ge as u,Pe as v,rt as w,ke as x,We as y,Ge as z};