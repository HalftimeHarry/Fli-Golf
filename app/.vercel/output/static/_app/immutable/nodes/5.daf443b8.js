import{S as _e,i as $e,s as me,k as $,a as N,q as R,l as m,m as g,c as S,r as T,h as f,n as h,p as ce,b as I,D as p,K as ae,u as we,M as C,O as De,U as Fe,P as Te,w as oe,R as ue,y as B,z as F,A as M,V as se,W as Ne,T as fe,g as D,d as U,B as j,o as Be,e as Pe,v as ye,f as Ve,X as Ee,Y as ke,Z as Ie}from"../chunks/index.1b8d3cdb.js";import{s as X}from"../chunks/supabaseClient.336a46e5.js";import{f as Ae,a as ge}from"../chunks/index.b182b586.js";import{a as Me}from"../chunks/AuthStore.424e05eb.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.c6d18dfd.js";import{A as Se,a as pe,b as ve,g as Ue}from"../chunks/navigation.689cccdd.js";function je(s){let e;return{c(){e=$("div"),this.h()},l(t){e=m(t,"DIV",{class:!0,style:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","avatar no-image"),ce(e,"height",s[0]+"px, width: "+s[0]+"px")},m(t,r){I(t,e,r)},p(t,r){r&1&&ce(e,"height",t[0]+"px, width: "+t[0]+"px")},d(t){t&&f(e)}}}function qe(s){let e,t,r;return{c(){e=$("img"),this.h()},l(a){e=m(a,"IMG",{src:!0,alt:!0,class:!0,style:!0}),this.h()},h(){Te(e.src,t=s[1])||h(e,"src",t),h(e,"alt",r=s[1]?"Avatar":"No image"),h(e,"class","avatar image"),ce(e,"height",s[0]+"px, width: "+s[0]+"px")},m(a,l){I(a,e,l)},p(a,l){l&2&&!Te(e.src,t=a[1])&&h(e,"src",t),l&2&&r!==(r=a[1]?"Avatar":"No image")&&h(e,"alt",r),l&1&&ce(e,"height",a[0]+"px, width: "+a[0]+"px")},d(a){a&&f(e)}}}function ze(s){let e,t,r,a,l=s[2]?"Uploading ...":"Upload avatar",u,n,o,c,d,E;function _(w,i){return w[1]?qe:je}let b=_(s),k=b(s);return{c(){e=$("div"),k.c(),t=N(),r=$("div"),a=$("label"),u=R(l),n=N(),o=$("span"),c=$("input"),this.h()},l(w){e=m(w,"DIV",{style:!0,"aria-live":!0});var i=g(e);k.l(i),t=S(i),r=m(i,"DIV",{style:!0});var v=g(r);a=m(v,"LABEL",{class:!0,for:!0});var P=g(a);u=T(P,l),P.forEach(f),n=S(v),o=m(v,"SPAN",{style:!0});var A=g(o);c=m(A,"INPUT",{type:!0,id:!0,accept:!0}),A.forEach(f),v.forEach(f),i.forEach(f),this.h()},h(){h(a,"class","button primary block"),h(a,"for","single"),h(c,"type","file"),h(c,"id","single"),h(c,"accept","image/*"),c.disabled=s[2],ce(o,"display","none"),ce(r,"width",s[0]+"px"),ce(e,"width",s[0]+"px"),h(e,"aria-live","polite")},m(w,i){I(w,e,i),k.m(e,null),p(e,t),p(e,r),p(r,a),p(a,u),p(r,n),p(r,o),p(o,c),d||(E=[ae(c,"change",s[6]),ae(c,"change",s[4])],d=!0)},p(w,[i]){b===(b=_(w))&&k?k.p(w,i):(k.d(1),k=b(w),k&&(k.c(),k.m(e,t))),i&4&&l!==(l=w[2]?"Uploading ...":"Upload avatar")&&we(u,l),i&4&&(c.disabled=w[2]),i&1&&ce(r,"width",w[0]+"px"),i&1&&ce(e,"width",w[0]+"px")},i:C,o:C,d(w){w&&f(e),k.d(),d=!1,De(E)}}}function Ye(s,e,t){let{size:r}=e,{url:a}=e,l=null,u=!1,n;const o=Fe(),c=async _=>{try{const{data:b,error:k}=await X.storage.from("avatars").download(_);if(k)throw k;const w=URL.createObjectURL(b);t(1,l=w)}catch(b){b instanceof Error&&console.log("Error downloading image: ",b.message)}},d=async()=>{try{if(t(2,u=!0),!n||n.length===0)throw new Error("You must select an image to upload.");const _=n[0],b=_.name.split(".").pop(),k=`${Math.random()}.${b}`;let{error:w}=await X.storage.from("avatars").upload(k,_);if(w)throw w;t(5,a=k),o("upload")}catch(_){_ instanceof Error&&alert(_.message)}finally{t(2,u=!1)}};function E(){n=this.files,t(3,n)}return s.$$set=_=>{"size"in _&&t(0,r=_.size),"url"in _&&t(5,a=_.url)},s.$$.update=()=>{s.$$.dirty&32&&a&&c(a)},[r,l,u,n,d,a,E]}class He extends _e{constructor(e){super(),$e(this,e,Ye,ze,me,{size:0,url:5})}}function We(s){let e,t,r,a,l,u,n=s[0].user.email+"",o,c,d,E,_,b,k,w,i,v,P,A,V,W,q,H,G=s[1]?"Saving ...":"Update profile",Z,J,z,K,Q,Y,L;function x(O){s[6](O)}let le={size:150};return s[4]!==void 0&&(le.url=s[4]),t=new He({props:le}),oe.push(()=>ue(t,"url",x)),t.$on("upload",s[5]),{c(){e=$("form"),B(t.$$.fragment),a=N(),l=$("div"),u=R("Email: "),o=R(n),c=N(),d=$("div"),E=$("label"),_=R("Name"),b=N(),k=$("input"),w=N(),i=$("div"),v=$("label"),P=R("Website"),A=N(),V=$("input"),W=N(),q=$("div"),H=$("button"),Z=R(G),J=N(),z=$("button"),K=R("Sign Out"),this.h()},l(O){e=m(O,"FORM",{class:!0});var y=g(e);F(t.$$.fragment,y),a=S(y),l=m(y,"DIV",{});var ee=g(l);u=T(ee,"Email: "),o=T(ee,n),ee.forEach(f),c=S(y),d=m(y,"DIV",{});var te=g(d);E=m(te,"LABEL",{for:!0});var re=g(E);_=T(re,"Name"),re.forEach(f),b=S(te),k=m(te,"INPUT",{id:!0,type:!0,class:!0}),te.forEach(f),w=S(y),i=m(y,"DIV",{});var ie=g(i);v=m(ie,"LABEL",{for:!0});var ne=g(v);P=T(ne,"Website"),ne.forEach(f),A=S(ie),V=m(ie,"INPUT",{id:!0,type:!0,class:!0}),ie.forEach(f),W=S(y),q=m(y,"DIV",{});var he=g(q);H=m(he,"BUTTON",{type:!0,class:!0});var de=g(H);Z=T(de,G),de.forEach(f),he.forEach(f),J=S(y),z=m(y,"BUTTON",{type:!0,class:!0});var be=g(z);K=T(be,"Sign Out"),be.forEach(f),y.forEach(f),this.h()},h(){h(E,"for","username"),h(k,"id","username"),h(k,"type","text"),h(k,"class","text-black"),h(v,"for","website"),h(V,"id","website"),h(V,"type","text"),h(V,"class","text-black"),h(H,"type","submit"),h(H,"class","button primary block"),H.disabled=s[1],h(z,"type","button"),h(z,"class","button block"),h(e,"class","form-widget")},m(O,y){I(O,e,y),M(t,e,null),p(e,a),p(e,l),p(l,u),p(l,o),p(e,c),p(e,d),p(d,E),p(E,_),p(d,b),p(d,k),se(k,s[2]),p(e,w),p(e,i),p(i,v),p(v,P),p(i,A),p(i,V),se(V,s[3]),p(e,W),p(e,q),p(q,H),p(H,Z),p(e,J),p(e,z),p(z,K),Q=!0,Y||(L=[ae(k,"input",s[7]),ae(V,"input",s[8]),ae(z,"click",s[9]),ae(e,"submit",Ne(s[5]))],Y=!0)},p(O,[y]){const ee={};!r&&y&16&&(r=!0,ee.url=O[4],fe(()=>r=!1)),t.$set(ee),(!Q||y&1)&&n!==(n=O[0].user.email+"")&&we(o,n),y&4&&k.value!==O[2]&&se(k,O[2]),y&8&&V.value!==O[3]&&se(V,O[3]),(!Q||y&2)&&G!==(G=O[1]?"Saving ...":"Update profile")&&we(Z,G),(!Q||y&2)&&(H.disabled=O[1])},i(O){Q||(D(t.$$.fragment,O),Q=!0)},o(O){U(t.$$.fragment,O),Q=!1},d(O){O&&f(e),j(t),Y=!1,De(L)}}}function Ge(s,e,t){let{session:r}=e,a=!1,l=null,u=null,n=null,o=null;Be(()=>{c()});const c=async()=>{try{t(1,a=!0);const{user:w}=r,{data:i,error:v,status:P}=await X.from("profiles").select("username, website, avatar_url, role").eq("id",w.id).single();if(v&&P!==406)throw v;i&&(t(2,l=i.username),t(3,u=i.website),t(4,n=i.avatar_url),o=i)}catch(w){w instanceof Error&&alert(w.message)}finally{t(1,a=!1)}},d=async()=>{try{t(1,a=!0);const{user:w}=r,i={id:w.id,username:l,website:u,avatar_url:n,updated_at:new Date().toISOString()};let{error:v}=await X.from("profiles").upsert(i);if(v)throw v}catch(w){w instanceof Error&&alert(w.message)}finally{t(1,a=!1),console.log("loading state: ",a)}};function E(w){n=w,t(4,n)}function _(){l=this.value,t(2,l)}function b(){u=this.value,t(3,u)}const k=()=>X.auth.signOut();return s.$$set=w=>{"session"in w&&t(0,r=w.session)},[r,a,l,u,n,d,E,_,b,k]}class Le extends _e{constructor(e){super(),$e(this,e,Ge,We,me,{session:0})}}function Ce(s){let e,t,r,a,l,u,n,o,c,d,E,_,b,k,w,i,v,P,A,V,W,q,H,G=s[0]?"Loading":"Register",Z,J,z,K,Q,Y;return{c(){e=$("div"),t=$("div"),r=$("div"),a=$("h1"),l=$("p"),u=R("Register with your email and password below"),n=N(),o=$("form"),c=$("div"),d=$("label"),E=R("Email"),_=N(),b=$("input"),k=N(),w=$("div"),i=$("label"),v=R("Password"),P=N(),A=$("input"),V=N(),W=$("div"),q=$("button"),H=$("span"),Z=R(G),this.h()},l(L){e=m(L,"DIV",{});var x=g(e);t=m(x,"DIV",{class:!0});var le=g(t);r=m(le,"DIV",{class:!0,"aria-live":!0});var O=g(r);a=m(O,"H1",{class:!0});var y=g(a);l=m(y,"P",{class:!0});var ee=g(l);u=T(ee,"Register with your email and password below"),ee.forEach(f),n=S(y),o=m(y,"FORM",{class:!0});var te=g(o);c=m(te,"DIV",{});var re=g(c);d=m(re,"LABEL",{for:!0});var ie=g(d);E=T(ie,"Email"),ie.forEach(f),_=S(re),b=m(re,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),re.forEach(f),k=S(te),w=m(te,"DIV",{});var ne=g(w);i=m(ne,"LABEL",{for:!0});var he=g(i);v=T(he,"Password"),he.forEach(f),P=S(ne),A=m(ne,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),ne.forEach(f),V=S(te),W=m(te,"DIV",{});var de=g(W);q=m(de,"BUTTON",{type:!0,class:!0,"aria-live":!0});var be=g(q);H=m(be,"SPAN",{});var Re=g(H);Z=T(Re,G),Re.forEach(f),be.forEach(f),de.forEach(f),te.forEach(f),y.forEach(f),O.forEach(f),le.forEach(f),x.forEach(f),this.h()},h(){h(l,"class","description"),h(d,"for","email"),h(b,"id","email"),h(b,"class","inputField text-black"),h(b,"type","email"),h(b,"placeholder","Your email"),h(i,"for","password"),h(A,"id","password"),h(A,"class","inputField text-black"),h(A,"type","password"),h(A,"placeholder","Your password"),h(q,"type","submit"),h(q,"class","mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),h(q,"aria-live","polite"),q.disabled=s[0],h(o,"class","form-widget"),h(a,"class","header"),h(r,"class","col-6 form-widget"),h(r,"aria-live","polite"),h(t,"class","flex justify-center items-center flex-col")},m(L,x){I(L,e,x),p(e,t),p(t,r),p(r,a),p(a,l),p(l,u),p(a,n),p(a,o),p(o,c),p(c,d),p(d,E),p(c,_),p(c,b),se(b,s[1]),p(o,k),p(o,w),p(w,i),p(i,v),p(w,P),p(w,A),se(A,s[2]),p(o,V),p(o,W),p(W,q),p(q,H),p(H,Z),K=!0,Q||(Y=[ae(b,"input",s[6]),ae(A,"input",s[7]),ae(o,"submit",Ne(s[4]))],Q=!0)},p(L,x){x&2&&b.value!==L[1]&&se(b,L[1]),x&4&&A.value!==L[2]&&se(A,L[2]),(!K||x&1)&&G!==(G=L[0]?"Loading":"Register")&&we(Z,G),(!K||x&1)&&(q.disabled=L[0])},i(L){K||(Ee(()=>{K&&(z&&z.end(1),J=ke(e,Ae,{x:-600,duration:800}),J.start())}),K=!0)},o(L){J&&J.invalidate(),z=Ie(e,Ae,{x:600,duration:800}),K=!1},d(L){L&&f(e),L&&z&&z.end(),Q=!1,De(Y)}}}function Oe(s){let e,t,r,a,l,u,n,o,c,d,E,_,b,k,w,i,v,P,A,V,W,q,H=s[0]?"Loading":"Login",G,Z,J,z,K,Q;return{c(){e=$("div"),t=$("div"),r=$("div"),a=$("p"),l=R("Sign in with your email and password below"),u=N(),n=$("form"),o=$("div"),c=$("label"),d=R("Email"),E=N(),_=$("input"),b=N(),k=$("div"),w=$("label"),i=R("Password"),v=N(),P=$("input"),A=N(),V=$("div"),W=$("button"),q=$("span"),G=R(H),this.h()},l(Y){e=m(Y,"DIV",{});var L=g(e);t=m(L,"DIV",{class:!0});var x=g(t);r=m(x,"DIV",{class:!0,"aria-live":!0});var le=g(r);a=m(le,"P",{class:!0});var O=g(a);l=T(O,"Sign in with your email and password below"),O.forEach(f),u=S(le),n=m(le,"FORM",{class:!0});var y=g(n);o=m(y,"DIV",{});var ee=g(o);c=m(ee,"LABEL",{for:!0});var te=g(c);d=T(te,"Email"),te.forEach(f),E=S(ee),_=m(ee,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),ee.forEach(f),b=S(y),k=m(y,"DIV",{});var re=g(k);w=m(re,"LABEL",{for:!0});var ie=g(w);i=T(ie,"Password"),ie.forEach(f),v=S(re),P=m(re,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),re.forEach(f),A=S(y),V=m(y,"DIV",{});var ne=g(V);W=m(ne,"BUTTON",{type:!0,class:!0,"aria-live":!0});var he=g(W);q=m(he,"SPAN",{});var de=g(q);G=T(de,H),de.forEach(f),he.forEach(f),ne.forEach(f),y.forEach(f),le.forEach(f),x.forEach(f),L.forEach(f),this.h()},h(){h(a,"class","description"),h(c,"for","email"),h(_,"id","email"),h(_,"class","inputField text-black"),h(_,"type","email"),h(_,"placeholder","Your email"),h(w,"for","password"),h(P,"id","password"),h(P,"class","inputField text-black"),h(P,"type","password"),h(P,"placeholder","Your password"),h(W,"type","submit"),h(W,"class","mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),h(W,"aria-live","polite"),W.disabled=s[0],h(n,"class","form-widget"),h(r,"class","col-6 form-widget"),h(r,"aria-live","polite"),h(t,"class","flex justify-center items-center flex-col")},m(Y,L){I(Y,e,L),p(e,t),p(t,r),p(r,a),p(a,l),p(r,u),p(r,n),p(n,o),p(o,c),p(c,d),p(o,E),p(o,_),se(_,s[1]),p(n,b),p(n,k),p(k,w),p(w,i),p(k,v),p(k,P),se(P,s[2]),p(n,A),p(n,V),p(V,W),p(W,q),p(q,G),z=!0,K||(Q=[ae(_,"input",s[8]),ae(P,"input",s[9]),ae(n,"submit",Ne(s[5]))],K=!0)},p(Y,L){L&2&&_.value!==Y[1]&&se(_,Y[1]),L&4&&P.value!==Y[2]&&se(P,Y[2]),(!z||L&1)&&H!==(H=Y[0]?"Loading":"Login")&&we(G,H),(!z||L&1)&&(W.disabled=Y[0])},i(Y){z||(Ee(()=>{z&&(J&&J.end(1),Z=ke(e,Ae,{x:-600,duration:800}),Z.start())}),z=!0)},o(Y){Z&&Z.invalidate(),J=Ie(e,Ae,{x:600,duration:800}),z=!1},d(Y){Y&&f(e),Y&&J&&J.end(),K=!1,De(Q)}}}function Ke(s){let e,t,r,a=s[3]==="register"&&Ce(s),l=s[3]==="login"&&Oe(s);return{c(){a&&a.c(),e=N(),l&&l.c(),t=Pe()},l(u){a&&a.l(u),e=S(u),l&&l.l(u),t=Pe()},m(u,n){a&&a.m(u,n),I(u,e,n),l&&l.m(u,n),I(u,t,n),r=!0},p(u,[n]){u[3]==="register"?a?(a.p(u,n),n&8&&D(a,1)):(a=Ce(u),a.c(),D(a,1),a.m(e.parentNode,e)):a&&(ye(),U(a,1,1,()=>{a=null}),Ve()),u[3]==="login"?l?(l.p(u,n),n&8&&D(l,1)):(l=Oe(u),l.c(),D(l,1),l.m(t.parentNode,t)):l&&(ye(),U(l,1,1,()=>{l=null}),Ve())},i(u){r||(D(a),D(l),r=!0)},o(u){U(a),U(l),r=!1},d(u){a&&a.d(u),u&&f(e),l&&l.d(u),u&&f(t)}}}function Xe(s,e,t){let r=!1,a="",l="",u="";Me.subscribe(b=>{t(3,u=b.formType)});const n=async()=>{try{t(0,r=!0);const{user:b,error:k}=await X.auth.signUp({email:a,password:l});if(k)throw k;if(b){const{error:w}=await X.from("profiles").upsert([{id:b.id,role:"Participant"}]);if(w)throw w}alert("Check your email for the confirmation link!")}catch(b){alert(b.message)}finally{t(0,r=!1)}},o=async()=>{try{t(0,r=!0);const{data:b,error:k}=await X.auth.signInWithPassword({email:a,password:l});if(k)throw k}catch(b){b instanceof Error&&alert(b.message)}finally{t(0,r=!1)}};function c(){a=this.value,t(1,a)}function d(){l=this.value,t(2,l)}function E(){a=this.value,t(1,a)}function _(){l=this.value,t(2,l)}return[r,a,l,u,n,o,c,d,E,_]}class Ze extends _e{constructor(e){super(),$e(this,e,Xe,Ke,me,{})}}function Je(s){let e,t;return{c(){e=$("span"),t=R("Profile"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Profile"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function Qe(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-user-circle")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function xe(s){let e,t;return{c(){e=$("span"),t=R("Recent Activity"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Recent Activity"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function et(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-chart-bar")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function tt(s){let e,t;return{c(){e=$("span"),t=R("Create Contacts"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Create Contacts"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function rt(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-cog")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function at(s){let e,t,r,a,l,u,n,o,c;function d(i){s[3](i)}let E={name:"groups",value:0,title:"Profile",$$slots:{lead:[Qe],default:[Je]},$$scope:{ctx:s}};s[0]!==void 0&&(E.group=s[0]),e=new pe({props:E}),oe.push(()=>ue(e,"group",d)),e.$on("click",s[4]);function _(i){s[5](i)}let b={name:"recent",value:1,title:"Recent Activity",$$slots:{lead:[et],default:[xe]},$$scope:{ctx:s}};s[0]!==void 0&&(b.group=s[0]),a=new pe({props:b}),oe.push(()=>ue(a,"group",_)),a.$on("click",s[6]);function k(i){s[7](i)}let w={name:"contacts",value:2,title:"Create Contacts",$$slots:{lead:[rt],default:[tt]},$$scope:{ctx:s}};return s[0]!==void 0&&(w.group=s[0]),n=new pe({props:w}),oe.push(()=>ue(n,"group",k)),n.$on("click",s[8]),{c(){B(e.$$.fragment),r=N(),B(a.$$.fragment),u=N(),B(n.$$.fragment)},l(i){F(e.$$.fragment,i),r=S(i),F(a.$$.fragment,i),u=S(i),F(n.$$.fragment,i)},m(i,v){M(e,i,v),I(i,r,v),M(a,i,v),I(i,u,v),M(n,i,v),c=!0},p(i,v){const P={};v&512&&(P.$$scope={dirty:v,ctx:i}),!t&&v&1&&(t=!0,P.group=i[0],fe(()=>t=!1)),e.$set(P);const A={};v&512&&(A.$$scope={dirty:v,ctx:i}),!l&&v&1&&(l=!0,A.group=i[0],fe(()=>l=!1)),a.$set(A);const V={};v&512&&(V.$$scope={dirty:v,ctx:i}),!o&&v&1&&(o=!0,V.group=i[0],fe(()=>o=!1)),n.$set(V)},i(i){c||(D(e.$$.fragment,i),D(a.$$.fragment,i),D(n.$$.fragment,i),c=!0)},o(i){U(e.$$.fragment,i),U(a.$$.fragment,i),U(n.$$.fragment,i),c=!1},d(i){j(e,i),i&&f(r),j(a,i),i&&f(u),j(n,i)}}}function st(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-home")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function lt(s){let e,t;return e=new ve({props:{href:"/",$$slots:{default:[st]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const l={};a&512&&(l.$$scope={dirty:a,ctx:r}),e.$set(l)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function it(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-sign-out-alt text-white")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function nt(s){let e,t;return e=new ve({props:{href:"/",title:"Sign Out",$$slots:{default:[it]},$$scope:{ctx:s}}}),e.$on("click",s[2]),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const l={};a&512&&(l.$$scope={dirty:a,ctx:r}),e.$set(l)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function ot(s){let e,t,r,a,l,u;return l=new Se({props:{$$slots:{trail:[nt],lead:[lt],default:[at]},$$scope:{ctx:s}}}),{c(){e=$("div"),t=$("h1"),r=R("Admin Dashboard"),a=N(),B(l.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var o=g(e);t=m(o,"H1",{class:!0});var c=g(t);r=T(c,"Admin Dashboard"),c.forEach(f),a=S(o),F(l.$$.fragment,o),o.forEach(f),this.h()},h(){h(t,"class","text-white"),h(e,"class","fixed top-0 left-0 mt-64")},m(n,o){I(n,e,o),p(e,t),p(t,r),p(e,a),M(l,e,null),u=!0},p(n,[o]){const c={};o&513&&(c.$$scope={dirty:o,ctx:n}),l.$set(c)},i(n){u||(D(l.$$.fragment,n),u=!0)},o(n){U(l.$$.fragment,n),u=!1},d(n){n&&f(e),j(l)}}}function ut(s,e,t){let r=0;const a=_=>{Ue(_)},l=()=>X.auth.signOut();function u(_){r=_,t(0,r)}const n=()=>a("/");function o(_){r=_,t(0,r)}const c=()=>a("/recent-activity");function d(_){r=_,t(0,r)}return[r,a,l,u,n,o,c,d,()=>a("/contacts")]}class ft extends _e{constructor(e){super(),$e(this,e,ut,ot,me,{})}}function ct(s){let e,t;return{c(){e=$("span"),t=R("Profile"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Profile"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function pt(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-user-circle")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function ht(s){let e,t;return{c(){e=$("span"),t=R("Recent Activity"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Recent Activity"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function dt(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-chart-bar")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function _t(s){let e,t;return{c(){e=$("span"),t=R("Create Contacts"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Create Contacts"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function $t(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-cog")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function mt(s){let e,t,r,a,l,u,n,o,c;function d(i){s[3](i)}let E={name:"groups",value:0,title:"Profile",$$slots:{lead:[pt],default:[ct]},$$scope:{ctx:s}};s[0]!==void 0&&(E.group=s[0]),e=new pe({props:E}),oe.push(()=>ue(e,"group",d)),e.$on("click",s[4]);function _(i){s[5](i)}let b={name:"recent",value:1,title:"Recent Activity",$$slots:{lead:[dt],default:[ht]},$$scope:{ctx:s}};s[0]!==void 0&&(b.group=s[0]),a=new pe({props:b}),oe.push(()=>ue(a,"group",_)),a.$on("click",s[6]);function k(i){s[7](i)}let w={name:"contacts",value:2,title:"Create Contacts",$$slots:{lead:[$t],default:[_t]},$$scope:{ctx:s}};return s[0]!==void 0&&(w.group=s[0]),n=new pe({props:w}),oe.push(()=>ue(n,"group",k)),n.$on("click",s[8]),{c(){B(e.$$.fragment),r=N(),B(a.$$.fragment),u=N(),B(n.$$.fragment)},l(i){F(e.$$.fragment,i),r=S(i),F(a.$$.fragment,i),u=S(i),F(n.$$.fragment,i)},m(i,v){M(e,i,v),I(i,r,v),M(a,i,v),I(i,u,v),M(n,i,v),c=!0},p(i,v){const P={};v&512&&(P.$$scope={dirty:v,ctx:i}),!t&&v&1&&(t=!0,P.group=i[0],fe(()=>t=!1)),e.$set(P);const A={};v&512&&(A.$$scope={dirty:v,ctx:i}),!l&&v&1&&(l=!0,A.group=i[0],fe(()=>l=!1)),a.$set(A);const V={};v&512&&(V.$$scope={dirty:v,ctx:i}),!o&&v&1&&(o=!0,V.group=i[0],fe(()=>o=!1)),n.$set(V)},i(i){c||(D(e.$$.fragment,i),D(a.$$.fragment,i),D(n.$$.fragment,i),c=!0)},o(i){U(e.$$.fragment,i),U(a.$$.fragment,i),U(n.$$.fragment,i),c=!1},d(i){j(e,i),i&&f(r),j(a,i),i&&f(u),j(n,i)}}}function gt(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-home")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function vt(s){let e,t;return e=new ve({props:{href:"/",$$slots:{default:[gt]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const l={};a&512&&(l.$$scope={dirty:a,ctx:r}),e.$set(l)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function bt(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-sign-out-alt text-white")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function wt(s){let e,t;return e=new ve({props:{href:"/",title:"Account",$$slots:{default:[bt]},$$scope:{ctx:s}}}),e.$on("click",s[2]),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const l={};a&512&&(l.$$scope={dirty:a,ctx:r}),e.$set(l)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function Et(s){let e,t,r,a,l,u;return l=new Se({props:{$$slots:{trail:[wt],lead:[vt],default:[mt]},$$scope:{ctx:s}}}),{c(){e=$("div"),t=$("h1"),r=R("Participant Dashboard"),a=N(),B(l.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var o=g(e);t=m(o,"H1",{class:!0});var c=g(t);r=T(c,"Participant Dashboard"),c.forEach(f),a=S(o),F(l.$$.fragment,o),o.forEach(f),this.h()},h(){h(t,"class","text-white"),h(e,"class","fixed top-0 left-0 mt-64")},m(n,o){I(n,e,o),p(e,t),p(t,r),p(e,a),M(l,e,null),u=!0},p(n,[o]){const c={};o&513&&(c.$$scope={dirty:o,ctx:n}),l.$set(c)},i(n){u||(D(l.$$.fragment,n),u=!0)},o(n){U(l.$$.fragment,n),u=!1},d(n){n&&f(e),j(l)}}}function kt(s,e,t){let r=0;const a=_=>{Ue(_)},l=()=>X.auth.signOut();function u(_){r=_,t(0,r)}const n=()=>a("/");function o(_){r=_,t(0,r)}const c=()=>a("/recent-activity");function d(_){r=_,t(0,r)}return[r,a,l,u,n,o,c,d,()=>a("/contacts")]}class It extends _e{constructor(e){super(),$e(this,e,kt,Et,me,{})}}function Pt(s){let e,t;return{c(){e=$("span"),t=R("Profile"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Profile"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function At(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-user-circle")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function Dt(s){let e,t;return{c(){e=$("span"),t=R("Recent Activity"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Recent Activity"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function yt(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-chart-bar")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function Vt(s){let e,t;return{c(){e=$("span"),t=R("Create Contacts"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=T(a,"Create Contacts"),a.forEach(f),this.h()},h(){h(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:C,d(r){r&&f(e)}}}function Nt(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-cog")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function St(s){let e,t,r,a,l,u,n,o,c;function d(i){s[3](i)}let E={name:"groups",value:0,title:"Profile",$$slots:{lead:[At],default:[Pt]},$$scope:{ctx:s}};s[0]!==void 0&&(E.group=s[0]),e=new pe({props:E}),oe.push(()=>ue(e,"group",d)),e.$on("click",s[4]);function _(i){s[5](i)}let b={name:"recent",value:1,title:"Recent Activity",$$slots:{lead:[yt],default:[Dt]},$$scope:{ctx:s}};s[0]!==void 0&&(b.group=s[0]),a=new pe({props:b}),oe.push(()=>ue(a,"group",_)),a.$on("click",s[6]);function k(i){s[7](i)}let w={name:"contacts",value:2,title:"Create Contacts",$$slots:{lead:[Nt],default:[Vt]},$$scope:{ctx:s}};return s[0]!==void 0&&(w.group=s[0]),n=new pe({props:w}),oe.push(()=>ue(n,"group",k)),n.$on("click",s[8]),{c(){B(e.$$.fragment),r=N(),B(a.$$.fragment),u=N(),B(n.$$.fragment)},l(i){F(e.$$.fragment,i),r=S(i),F(a.$$.fragment,i),u=S(i),F(n.$$.fragment,i)},m(i,v){M(e,i,v),I(i,r,v),M(a,i,v),I(i,u,v),M(n,i,v),c=!0},p(i,v){const P={};v&512&&(P.$$scope={dirty:v,ctx:i}),!t&&v&1&&(t=!0,P.group=i[0],fe(()=>t=!1)),e.$set(P);const A={};v&512&&(A.$$scope={dirty:v,ctx:i}),!l&&v&1&&(l=!0,A.group=i[0],fe(()=>l=!1)),a.$set(A);const V={};v&512&&(V.$$scope={dirty:v,ctx:i}),!o&&v&1&&(o=!0,V.group=i[0],fe(()=>o=!1)),n.$set(V)},i(i){c||(D(e.$$.fragment,i),D(a.$$.fragment,i),D(n.$$.fragment,i),c=!0)},o(i){U(e.$$.fragment,i),U(a.$$.fragment,i),U(n.$$.fragment,i),c=!1},d(i){j(e,i),i&&f(r),j(a,i),i&&f(u),j(n,i)}}}function Ut(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-home")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function Lt(s){let e,t;return e=new ve({props:{href:"/",$$slots:{default:[Ut]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const l={};a&512&&(l.$$scope={dirty:a,ctx:r}),e.$set(l)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function Rt(s){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(f),this.h()},h(){h(e,"class","fas fa-sign-out-alt text-white")},m(t,r){I(t,e,r)},p:C,d(t){t&&f(e)}}}function Tt(s){let e,t;return e=new ve({props:{href:"/",title:"Sign Out",$$slots:{default:[Rt]},$$scope:{ctx:s}}}),e.$on("click",s[2]),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const l={};a&512&&(l.$$scope={dirty:a,ctx:r}),e.$set(l)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function Ct(s){let e,t,r,a,l,u;return l=new Se({props:{$$slots:{trail:[Tt],lead:[Lt],default:[St]},$$scope:{ctx:s}}}),{c(){e=$("div"),t=$("h1"),r=R("Pro Dashboard"),a=N(),B(l.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var o=g(e);t=m(o,"H1",{class:!0});var c=g(t);r=T(c,"Pro Dashboard"),c.forEach(f),a=S(o),F(l.$$.fragment,o),o.forEach(f),this.h()},h(){h(t,"class","text-white"),h(e,"class","fixed top-0 left-0 mt-64")},m(n,o){I(n,e,o),p(e,t),p(t,r),p(e,a),M(l,e,null),u=!0},p(n,[o]){const c={};o&513&&(c.$$scope={dirty:o,ctx:n}),l.$set(c)},i(n){u||(D(l.$$.fragment,n),u=!0)},o(n){U(l.$$.fragment,n),u=!1},d(n){n&&f(e),j(l)}}}function Ot(s,e,t){let r=0;const a=_=>{Ue(_)},l=()=>X.auth.signOut();function u(_){r=_,t(0,r)}const n=()=>a("/");function o(_){r=_,t(0,r)}const c=()=>a("/recent-activity");function d(_){r=_,t(0,r)}return[r,a,l,u,n,o,c,d,()=>a("/contacts")]}class Bt extends _e{constructor(e){super(),$e(this,e,Ot,Ct,me,{})}}function Ft(s){let e,t,r,a,l,u,n,o,c;return r=new It({props:{session:s[0]}}),u=new Le({props:{session:s[0]}}),{c(){e=$("div"),t=$("div"),B(r.$$.fragment),a=N(),l=$("div"),B(u.$$.fragment),this.h()},l(d){e=m(d,"DIV",{class:!0});var E=g(e);t=m(E,"DIV",{class:!0});var _=g(t);F(r.$$.fragment,_),_.forEach(f),a=S(E),l=m(E,"DIV",{class:!0});var b=g(l);F(u.$$.fragment,b),b.forEach(f),E.forEach(f),this.h()},h(){h(t,"class","container mx-auto px-4 flex-shrink-0"),h(l,"class","grid justify-items-center mt-8 flex-grow"),h(e,"class","flex flex-col min-h-screen")},m(d,E){I(d,e,E),p(e,t),M(r,t,null),p(e,a),p(e,l),M(u,l,null),c=!0},p(d,E){const _={};E&1&&(_.session=d[0]),r.$set(_);const b={};E&1&&(b.session=d[0]),u.$set(b)},i(d){c||(D(r.$$.fragment,d),D(u.$$.fragment,d),Ee(()=>{c&&(o&&o.end(1),n=ke(l,ge,{duration:2e3}),n.start())}),c=!0)},o(d){U(r.$$.fragment,d),U(u.$$.fragment,d),n&&n.invalidate(),o=Ie(l,ge,{duration:1e3}),c=!1},d(d){d&&f(e),j(r),j(u),d&&o&&o.end()}}}function Mt(s){let e,t,r,a,l,u,n,o,c;return r=new Bt({props:{session:s[0]}}),u=new Le({props:{session:s[0]}}),{c(){e=$("div"),t=$("div"),B(r.$$.fragment),a=N(),l=$("div"),B(u.$$.fragment),this.h()},l(d){e=m(d,"DIV",{class:!0});var E=g(e);t=m(E,"DIV",{class:!0});var _=g(t);F(r.$$.fragment,_),_.forEach(f),a=S(E),l=m(E,"DIV",{class:!0});var b=g(l);F(u.$$.fragment,b),b.forEach(f),E.forEach(f),this.h()},h(){h(t,"class","container mx-auto px-4 flex-shrink-0"),h(l,"class","grid justify-items-center mt-8 flex-grow"),h(e,"class","flex flex-col min-h-screen")},m(d,E){I(d,e,E),p(e,t),M(r,t,null),p(e,a),p(e,l),M(u,l,null),c=!0},p(d,E){const _={};E&1&&(_.session=d[0]),r.$set(_);const b={};E&1&&(b.session=d[0]),u.$set(b)},i(d){c||(D(r.$$.fragment,d),D(u.$$.fragment,d),Ee(()=>{c&&(o&&o.end(1),n=ke(l,ge,{duration:2e3}),n.start())}),c=!0)},o(d){U(r.$$.fragment,d),U(u.$$.fragment,d),n&&n.invalidate(),o=Ie(l,ge,{duration:1e3}),c=!1},d(d){d&&f(e),j(r),j(u),d&&o&&o.end()}}}function jt(s){let e,t,r,a,l,u,n,o,c;return r=new ft({props:{session:s[0]}}),u=new Le({props:{session:s[0]}}),{c(){e=$("div"),t=$("div"),B(r.$$.fragment),a=N(),l=$("div"),B(u.$$.fragment),this.h()},l(d){e=m(d,"DIV",{class:!0});var E=g(e);t=m(E,"DIV",{class:!0});var _=g(t);F(r.$$.fragment,_),_.forEach(f),a=S(E),l=m(E,"DIV",{class:!0});var b=g(l);F(u.$$.fragment,b),b.forEach(f),E.forEach(f),this.h()},h(){h(t,"class","container mx-auto px-4 flex-shrink-0"),h(l,"class","grid justify-items-center mt-8 flex-grow"),h(e,"class","flex flex-col min-h-screen")},m(d,E){I(d,e,E),p(e,t),M(r,t,null),p(e,a),p(e,l),M(u,l,null),c=!0},p(d,E){const _={};E&1&&(_.session=d[0]),r.$set(_);const b={};E&1&&(b.session=d[0]),u.$set(b)},i(d){c||(D(r.$$.fragment,d),D(u.$$.fragment,d),Ee(()=>{c&&(o&&o.end(1),n=ke(l,ge,{duration:2e3}),n.start())}),c=!0)},o(d){U(r.$$.fragment,d),U(u.$$.fragment,d),n&&n.invalidate(),o=Ie(l,ge,{duration:1e3}),c=!1},d(d){d&&f(e),j(r),j(u),d&&o&&o.end()}}}function qt(s){let e,t;return e=new Ze({}),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p:C,i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){U(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function zt(s){let e,t,r,a;const l=[qt,jt,Mt,Ft],u=[];function n(o,c){return o[0]?o[1]==="Admin"?1:o[1]==="Professional"?2:o[1]==="Participant"?3:-1:0}return~(e=n(s))&&(t=u[e]=l[e](s)),{c(){t&&t.c(),r=Pe()},l(o){t&&t.l(o),r=Pe()},m(o,c){~e&&u[e].m(o,c),I(o,r,c),a=!0},p(o,[c]){let d=e;e=n(o),e===d?~e&&u[e].p(o,c):(t&&(ye(),U(u[d],1,1,()=>{u[d]=null}),Ve()),~e?(t=u[e],t?t.p(o,c):(t=u[e]=l[e](o),t.c()),D(t,1),t.m(r.parentNode,r)):t=null)},i(o){a||(D(t),a=!0)},o(o){U(t),a=!1},d(o){~e&&u[e].d(o),o&&f(r)}}}function Yt(s,e,t){let r,a=null;return Be(async()=>{const{data:l,error:u}=await X.auth.getSession();if(u?console.error("Error fetching session: ",u):t(0,r=l==null?void 0:l.session),r){const{data:n,error:o}=await X.from("profiles").select("role").eq("id",r.user.id).single();o?console.error("Error fetching profile: ",o):t(1,a=n==null?void 0:n.role)}X.auth.onAuthStateChange(async(n,o)=>{if(t(0,r=o),r){const{data:c,error:d}=await X.from("profiles").select("role").eq("id",r.user.id).single();d?console.error("Error fetching profile: ",d):t(1,a=c==null?void 0:c.role)}})}),[r,a]}class Jt extends _e{constructor(e){super(),$e(this,e,Yt,zt,me,{})}}export{Jt as component};