import{S as y,i as x,s as E,k as m,q as D,a as T,y as S,l as _,m as u,r as k,h as c,c as I,z as C,n as d,b as h,D as f,A as L,g,d as $,B as w,o as V,M as q,Z as z,_ as A,$ as B}from"../chunks/index.c063a4d7.js";import{s as M}from"../chunks/supabaseClient.979aa1ef.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.6f1b071b.js";import{T as R,t as v}from"../chunks/Table.73422bcf.js";import{a as b}from"../chunks/index.03d892fd.js";function U(i){let t,n,o,e,a,r;return a=new R({props:{source:i[0]}}),{c(){t=m("div"),n=m("h1"),o=D("Sponsors"),e=T(),S(a.$$.fragment),this.h()},l(s){t=_(s,"DIV",{class:!0});var l=u(t);n=_(l,"H1",{class:!0});var p=u(n);o=k(p,"Sponsors"),p.forEach(c),e=I(l),C(a.$$.fragment,l),l.forEach(c),this.h()},h(){d(n,"class","text-4xl font-bold mb-4 text-white"),d(t,"class","container mx-auto px-4")},m(s,l){h(s,t,l),f(t,n),f(n,o),f(t,e),L(a,t,null),r=!0},p(s,[l]){const p={};l&1&&(p.source=s[0]),a.$set(p)},i(s){r||(g(a.$$.fragment,s),r=!0)},o(s){$(a.$$.fragment,s),r=!1},d(s){s&&c(t),w(a)}}}const j="https://nzctebxobnjbvyygzpfq.supabase.co/storage/v1/object/public/",P="sponsor_logos/";function F(i,t,n){let o={head:[],body:[],meta:[],foot:[]};return V(async()=>{let{data:e,error:a}=await M.from("sponsors").select("id, company_name, company_url, contact_person, contact_email, created_at, is_sponsoring, sponsor_logo_url, level");a?console.error("Error fetching sponsors:",a):(e=e.map(r=>({...r,sponsor_logo_url:`<img src="${j}${P}${r.sponsor_logo_url}" alt="Sponsor Logo" width="50">`})),n(0,o={head:["Company Name","Company URL","Contact Person","Contact Email","Created At","Is Sponsoring","Sponsor Logo","Level"],body:v(e,["company_name","company_url","contact_person","contact_email","created_at","is_sponsoring","sponsor_logo_url","level"]),meta:v(e,["id","company_name","company_url","contact_person","contact_email","created_at","is_sponsoring","sponsor_logo_url","level"]),foot:["Total","","","","","","",`${e.length}`]}))}),[o]}class H extends y{constructor(t){super(),x(this,t,F,U,E,{})}}function K(i){let t,n,o,e,a;return n=new H({}),{c(){t=m("div"),S(n.$$.fragment)},l(r){t=_(r,"DIV",{});var s=u(t);C(n.$$.fragment,s),s.forEach(c)},m(r,s){h(r,t,s),L(n,t,null),a=!0},i(r){a||(g(n.$$.fragment,r),z(()=>{a&&(e&&e.end(1),o=A(t,b,{duration:500}),o.start())}),a=!0)},o(r){$(n.$$.fragment,r),o&&o.invalidate(),e=B(t,b,{duration:500}),a=!1},d(r){r&&c(t),w(n),r&&e&&e.end()}}}function N(i){let t,n,o=K();return{c(){t=m("div"),o&&o.c(),this.h()},l(e){t=_(e,"DIV",{class:!0});var a=u(t);o&&o.l(a),a.forEach(c),this.h()},h(){d(t,"class","container mx-auto px-4 mt-16 ml-24")},m(e,a){h(e,t,a),o&&o.m(t,null),n=!0},p:q,i(e){n||(g(o),n=!0)},o(e){$(o),n=!1},d(e){e&&c(t),o&&o.d()}}}class W extends y{constructor(t){super(),x(this,t,null,N,E,{})}}export{W as component};
