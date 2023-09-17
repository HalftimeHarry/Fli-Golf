import{S as N,i as P,s as T,y as j,z as A,A as E,g as k,d as y,B as C,o as V,e as d,b as f,v as G,ac as L,f as R,h as _,af as S,k as m,l as p,m as $,n as c,M as U,q as B,a as v,r as F,c as b,D as h,u as H,P as g}from"../chunks/index.c063a4d7.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.6f1b071b.js";import{A as J,a as K}from"../chunks/AccordionItem.9805efa4.js";import{s as O}from"../chunks/supabaseClient.979aa1ef.js";function w(n,e,s){const t=n.slice();return t[1]=e[s],t}function Q(n){let e;return{c(){e=m("div"),this.h()},l(s){e=p(s,"DIV",{slot:!0});var t=$(e);t.forEach(_),this.h()},h(){c(e,"slot","lead")},m(s,t){f(s,e,t)},p:U,d(s){s&&_(e)}}}function W(n){let e,s,t=n[1].full_name+"",a,l;return{c(){e=m("div"),s=m("p"),a=B(t),l=v(),this.h()},l(r){e=p(r,"DIV",{slot:!0});var o=$(e);s=p(o,"P",{class:!0});var i=$(s);a=F(i,t),i.forEach(_),l=b(o),o.forEach(_),this.h()},h(){c(s,"class","font-bold"),c(e,"slot","summary")},m(r,o){f(r,e,o),h(e,s),h(s,a),h(e,l)},p(r,o){o&1&&t!==(t=r[1].full_name+"")&&H(a,t)},d(r){r&&_(e)}}}function D(n){let e,s,t;return{c(){e=m("img"),this.h()},l(a){e=p(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(e.src,s=`${z}/${n[1].pro_image_url}`)||c(e,"src",s),c(e,"alt",t=`${n[1].full_name}`),c(e,"class","w-24 h-auto")},m(a,l){f(a,e,l)},p(a,l){l&1&&!g(e.src,s=`${z}/${a[1].pro_image_url}`)&&c(e,"src",s),l&1&&t!==(t=`${a[1].full_name}`)&&c(e,"alt",t)},d(a){a&&_(e)}}}function I(n){let e,s,t;return{c(){e=m("img"),this.h()},l(a){e=p(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(e.src,s=`${M}/${n[1].team_id.team_image_url}`)||c(e,"src",s),c(e,"alt",t=`${n[1].full_name} Team`),c(e,"class","w-24 h-auto")},m(a,l){f(a,e,l)},p(a,l){l&1&&!g(e.src,s=`${M}/${a[1].team_id.team_image_url}`)&&c(e,"src",s),l&1&&t!==(t=`${a[1].full_name} Team`)&&c(e,"alt",t)},d(a){a&&_(e)}}}function X(n){let e,s,t,a=n[1].pro_image_url&&D(n),l=n[1].team_id&&n[1].team_id.team_image_url&&I(n);return{c(){e=m("div"),a&&a.c(),s=v(),l&&l.c(),t=v(),this.h()},l(r){e=p(r,"DIV",{slot:!0,class:!0});var o=$(e);a&&a.l(o),s=b(o),l&&l.l(o),t=b(o),o.forEach(_),this.h()},h(){c(e,"slot","content"),c(e,"class","flex items-center space-x-4")},m(r,o){f(r,e,o),a&&a.m(e,null),h(e,s),l&&l.m(e,null),h(e,t)},p(r,o){r[1].pro_image_url?a?a.p(r,o):(a=D(r),a.c(),a.m(e,s)):a&&(a.d(1),a=null),r[1].team_id&&r[1].team_id.team_image_url?l?l.p(r,o):(l=I(r),l.c(),l.m(e,t)):l&&(l.d(1),l=null)},d(r){r&&_(e),a&&a.d(),l&&l.d()}}}function q(n,e){let s,t,a;return t=new K({props:{open:!0,$$slots:{content:[X],summary:[W],lead:[Q]},$$scope:{ctx:e}}}),{key:n,first:null,c(){s=d(),j(t.$$.fragment),this.h()},l(l){s=d(),A(t.$$.fragment,l),this.h()},h(){this.first=s},m(l,r){f(l,s,r),E(t,l,r),a=!0},p(l,r){e=l;const o={};r&17&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(l){a||(k(t.$$.fragment,l),a=!0)},o(l){y(t.$$.fragment,l),a=!1},d(l){l&&_(s),C(t,l)}}}function Y(n){let e=[],s=new Map,t,a,l=n[0];const r=o=>o[1].id;for(let o=0;o<l.length;o+=1){let i=w(n,l,o),u=r(i);s.set(u,e[o]=q(u,i))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=d()},l(o){for(let i=0;i<e.length;i+=1)e[i].l(o);t=d()},m(o,i){for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(o,i);f(o,t,i),a=!0},p(o,i){i&1&&(l=o[0],G(),e=L(e,i,r,1,o,l,s,t.parentNode,S,q,t,w),R())},i(o){if(!a){for(let i=0;i<l.length;i+=1)k(e[i]);a=!0}},o(o){for(let i=0;i<e.length;i+=1)y(e[i]);a=!1},d(o){for(let i=0;i<e.length;i+=1)e[i].d(o);o&&_(t)}}}function Z(n){let e,s;return e=new J({props:{autocollapse:!0,class:"card p-4 text-token",$$slots:{default:[Y]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){E(e,t,a),s=!0},p(t,[a]){const l={};a&17&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}const z="https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/professionals",M="https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/team_avatars";function x(n,e,s){let t=[];return V(async()=>{const{data:a,error:l}=await O.from("professional").select("id, full_name, pro_image_url, team_id(team_image_url)");l?console.error(l):(s(0,t=a),console.log(t))}),console.log(t),[t]}class se extends N{constructor(e){super(),P(this,e,x,Z,T,{})}}export{se as component};