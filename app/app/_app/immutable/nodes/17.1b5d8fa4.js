import{S as N,i as P,s as T,y as j,z as A,A as E,g as k,d as y,B as C,o as V,e as d,b as u,v as G,ac as L,f as R,h as m,af as S,k as f,l as h,m as $,n as c,M as U,q as B,a as v,r as F,c as b,D as p,u as H,P as g}from"../chunks/index.c063a4d7.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.6f1b071b.js";import{A as J,a as K}from"../chunks/AccordionItem.9805efa4.js";import{s as O}from"../chunks/supabaseClient.979aa1ef.js";function w(n,e,l){const t=n.slice();return t[1]=e[l],t}function Q(n){let e;return{c(){e=f("div"),this.h()},l(l){e=h(l,"DIV",{slot:!0});var t=$(e);t.forEach(m),this.h()},h(){c(e,"slot","lead")},m(l,t){u(l,e,t)},p:U,d(l){l&&m(e)}}}function W(n){let e,l,t=n[1].team_name+"",a,s;return{c(){e=f("div"),l=f("p"),a=B(t),s=v(),this.h()},l(r){e=h(r,"DIV",{slot:!0});var o=$(e);l=h(o,"P",{class:!0});var i=$(l);a=F(i,t),i.forEach(m),s=b(o),o.forEach(m),this.h()},h(){c(l,"class","font-bold"),c(e,"slot","summary")},m(r,o){u(r,e,o),p(e,l),p(l,a),p(e,s)},p(r,o){o&1&&t!==(t=r[1].team_name+"")&&H(a,t)},d(r){r&&m(e)}}}function D(n){let e,l,t;return{c(){e=f("img"),this.h()},l(a){e=h(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(e.src,l=`${M}/${n[1].team_image_url}`)||c(e,"src",l),c(e,"alt",t=`${n[1].team_name}`),c(e,"class","w-24 h-auto")},m(a,s){u(a,e,s)},p(a,s){s&1&&!g(e.src,l=`${M}/${a[1].team_image_url}`)&&c(e,"src",l),s&1&&t!==(t=`${a[1].team_name}`)&&c(e,"alt",t)},d(a){a&&m(e)}}}function I(n){let e,l,t;return{c(){e=f("img"),this.h()},l(a){e=h(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){g(e.src,l=`${z}/${n[1].team_id.team_image_url}`)||c(e,"src",l),c(e,"alt",t=`${n[1].team_name} Team`),c(e,"class","w-24 h-auto")},m(a,s){u(a,e,s)},p(a,s){s&1&&!g(e.src,l=`${z}/${a[1].team_id.team_image_url}`)&&c(e,"src",l),s&1&&t!==(t=`${a[1].team_name} Team`)&&c(e,"alt",t)},d(a){a&&m(e)}}}function X(n){let e,l,t,a=n[1].team_image_url&&D(n),s=n[1].team_id&&n[1].team_id.team_image_url&&I(n);return{c(){e=f("div"),a&&a.c(),l=v(),s&&s.c(),t=v(),this.h()},l(r){e=h(r,"DIV",{slot:!0,class:!0});var o=$(e);a&&a.l(o),l=b(o),s&&s.l(o),t=b(o),o.forEach(m),this.h()},h(){c(e,"slot","content"),c(e,"class","flex items-center space-x-4")},m(r,o){u(r,e,o),a&&a.m(e,null),p(e,l),s&&s.m(e,null),p(e,t)},p(r,o){r[1].team_image_url?a?a.p(r,o):(a=D(r),a.c(),a.m(e,l)):a&&(a.d(1),a=null),r[1].team_id&&r[1].team_id.team_image_url?s?s.p(r,o):(s=I(r),s.c(),s.m(e,t)):s&&(s.d(1),s=null)},d(r){r&&m(e),a&&a.d(),s&&s.d()}}}function q(n,e){let l,t,a;return t=new K({props:{open:!0,$$slots:{content:[X],summary:[W],lead:[Q]},$$scope:{ctx:e}}}),{key:n,first:null,c(){l=d(),j(t.$$.fragment),this.h()},l(s){l=d(),A(t.$$.fragment,s),this.h()},h(){this.first=l},m(s,r){u(s,l,r),E(t,s,r),a=!0},p(s,r){e=s;const o={};r&17&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){y(t.$$.fragment,s),a=!1},d(s){s&&m(l),C(t,s)}}}function Y(n){let e=[],l=new Map,t,a,s=n[0];const r=o=>o[1].id;for(let o=0;o<s.length;o+=1){let i=w(n,s,o),_=r(i);l.set(_,e[o]=q(_,i))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=d()},l(o){for(let i=0;i<e.length;i+=1)e[i].l(o);t=d()},m(o,i){for(let _=0;_<e.length;_+=1)e[_]&&e[_].m(o,i);u(o,t,i),a=!0},p(o,i){i&1&&(s=o[0],G(),e=L(e,i,r,1,o,s,l,t.parentNode,S,q,t,w),R())},i(o){if(!a){for(let i=0;i<s.length;i+=1)k(e[i]);a=!0}},o(o){for(let i=0;i<e.length;i+=1)y(e[i]);a=!1},d(o){for(let i=0;i<e.length;i+=1)e[i].d(o);o&&m(t)}}}function Z(n){let e,l;return e=new J({props:{autocollapse:!0,class:"card p-4 text-token",$$slots:{default:[Y]},$$scope:{ctx:n}}}),{c(){j(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){E(e,t,a),l=!0},p(t,[a]){const s={};a&17&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}const z="https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/teams",M="https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/team_avatars";function x(n,e,l){let t=[];return V(async()=>{const{data:a,error:s}=await O.from("teams").select("id, team_name, team_image_url");s?console.error(s):(l(0,t=a),console.log(t))}),console.log(t),[t]}class le extends N{constructor(e){super(),P(this,e,x,Z,T,{})}}export{le as component};