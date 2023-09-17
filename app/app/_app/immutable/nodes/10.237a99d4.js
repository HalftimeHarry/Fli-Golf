import{S as _e,i as $e,s as me,k as $,a as S,q as T,l as m,m as g,c as U,r as O,h as u,n as c,p as ce,b as I,D as p,K as ae,u as we,M as R,O as De,R as Fe,P as Ce,w as oe,V as ue,y as B,z as F,A as M,X as le,Y as Ne,W as fe,g as D,d as N,B as j,o as Be,e as Pe,v as ye,f as Ve,Z as Ee,_ as ke,$ as Ie}from"../chunks/index.c063a4d7.js";import{s as te}from"../chunks/supabaseClient.979aa1ef.js";import{f as Ae,a as ge}from"../chunks/index.03d892fd.js";import{a as Me}from"../chunks/AuthStore.fb1da673.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.6f1b071b.js";import{A as Se,a as pe,b as ve,g as Ue}from"../chunks/navigation.cc3e87f2.js";function je(l){let e;return{c(){e=$("div"),this.h()},l(t){e=m(t,"DIV",{class:!0,style:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","avatar no-image"),ce(e,"height",l[0]+"px, width: "+l[0]+"px")},m(t,r){I(t,e,r)},p(t,r){r&1&&ce(e,"height",t[0]+"px, width: "+t[0]+"px")},d(t){t&&u(e)}}}function ze(l){let e,t,r;return{c(){e=$("img"),this.h()},l(a){e=m(a,"IMG",{src:!0,alt:!0,class:!0,style:!0}),this.h()},h(){Ce(e.src,t=l[1])||c(e,"src",t),c(e,"alt",r=l[1]?"Avatar":"No image"),c(e,"class","avatar image"),ce(e,"height",l[0]+"px, width: "+l[0]+"px")},m(a,s){I(a,e,s)},p(a,s){s&2&&!Ce(e.src,t=a[1])&&c(e,"src",t),s&2&&r!==(r=a[1]?"Avatar":"No image")&&c(e,"alt",r),s&1&&ce(e,"height",a[0]+"px, width: "+a[0]+"px")},d(a){a&&u(e)}}}function Ye(l){let e,t,r,a,s=l[2]?"Uploading ...":"Upload avatar",o,n,f,d,h,w;function _(b,i){return b[1]?ze:je}let E=_(l),k=E(l);return{c(){e=$("div"),k.c(),t=S(),r=$("div"),a=$("label"),o=T(s),n=S(),f=$("span"),d=$("input"),this.h()},l(b){e=m(b,"DIV",{style:!0,"aria-live":!0});var i=g(e);k.l(i),t=U(i),r=m(i,"DIV",{style:!0});var v=g(r);a=m(v,"LABEL",{class:!0,for:!0});var P=g(a);o=O(P,s),P.forEach(u),n=U(v),f=m(v,"SPAN",{style:!0});var A=g(f);d=m(A,"INPUT",{type:!0,id:!0,accept:!0}),A.forEach(u),v.forEach(u),i.forEach(u),this.h()},h(){c(a,"class","button primary block"),c(a,"for","single"),c(d,"type","file"),c(d,"id","single"),c(d,"accept","image/*"),d.disabled=l[2],ce(f,"display","none"),ce(r,"width",l[0]+"px"),ce(e,"width",l[0]+"px"),c(e,"aria-live","polite")},m(b,i){I(b,e,i),k.m(e,null),p(e,t),p(e,r),p(r,a),p(a,o),p(r,n),p(r,f),p(f,d),h||(w=[ae(d,"change",l[6]),ae(d,"change",l[4])],h=!0)},p(b,[i]){E===(E=_(b))&&k?k.p(b,i):(k.d(1),k=E(b),k&&(k.c(),k.m(e,t))),i&4&&s!==(s=b[2]?"Uploading ...":"Upload avatar")&&we(o,s),i&4&&(d.disabled=b[2]),i&1&&ce(r,"width",b[0]+"px"),i&1&&ce(e,"width",b[0]+"px")},i:R,o:R,d(b){b&&u(e),k.d(),h=!1,De(w)}}}function qe(l,e,t){let{size:r}=e,{url:a}=e,s=null,o=!1,n;const f=Fe(),d=async _=>{try{const{data:E,error:k}=await te.storage.from("avatars").download(_);if(k)throw k;const b=URL.createObjectURL(E);t(1,s=b)}catch(E){E instanceof Error&&console.log("Error downloading image: ",E.message)}},h=async()=>{try{if(t(2,o=!0),!n||n.length===0)throw new Error("You must select an image to upload.");const _=n[0],E=_.name.split(".").pop(),k=`${Math.random()}.${E}`;let{error:b}=await te.storage.from("avatars").upload(k,_);if(b)throw b;t(5,a=k),f("upload")}catch(_){_ instanceof Error&&alert(_.message)}finally{t(2,o=!1)}};function w(){n=this.files,t(3,n)}return l.$$set=_=>{"size"in _&&t(0,r=_.size),"url"in _&&t(5,a=_.url)},l.$$.update=()=>{l.$$.dirty&32&&a&&d(a)},[r,s,o,n,h,a,w]}class We extends _e{constructor(e){super(),$e(this,e,qe,Ye,me,{size:0,url:5})}}function He(l){let e,t,r,a,s,o,n=l[0].user.email+"",f,d,h,w,_,E,k,b,i,v,P,A,V,H,z,W,G=l[1]?"Saving ...":"Update profile",X,Z,Y,K,J,q,L;function Q(C){l[6](C)}let se={size:150};return l[4]!==void 0&&(se.url=l[4]),t=new We({props:se}),oe.push(()=>ue(t,"url",Q)),t.$on("upload",l[5]),{c(){e=$("form"),B(t.$$.fragment),a=S(),s=$("div"),o=T("Email: "),f=T(n),d=S(),h=$("div"),w=$("label"),_=T("Name"),E=S(),k=$("input"),b=S(),i=$("div"),v=$("label"),P=T("Website"),A=S(),V=$("input"),H=S(),z=$("div"),W=$("button"),X=T(G),Z=S(),Y=$("button"),K=T("Sign Out"),this.h()},l(C){e=m(C,"FORM",{class:!0});var y=g(e);F(t.$$.fragment,y),a=U(y),s=m(y,"DIV",{});var x=g(s);o=O(x,"Email: "),f=O(x,n),x.forEach(u),d=U(y),h=m(y,"DIV",{});var ee=g(h);w=m(ee,"LABEL",{for:!0});var re=g(w);_=O(re,"Name"),re.forEach(u),E=U(ee),k=m(ee,"INPUT",{id:!0,type:!0,class:!0}),ee.forEach(u),b=U(y),i=m(y,"DIV",{});var ie=g(i);v=m(ie,"LABEL",{for:!0});var ne=g(v);P=O(ne,"Website"),ne.forEach(u),A=U(ie),V=m(ie,"INPUT",{id:!0,type:!0,class:!0}),ie.forEach(u),H=U(y),z=m(y,"DIV",{});var de=g(z);W=m(de,"BUTTON",{type:!0,class:!0});var he=g(W);X=O(he,G),he.forEach(u),de.forEach(u),Z=U(y),Y=m(y,"BUTTON",{type:!0,class:!0});var be=g(Y);K=O(be,"Sign Out"),be.forEach(u),y.forEach(u),this.h()},h(){c(w,"for","username"),c(k,"id","username"),c(k,"type","text"),c(k,"class","text-black"),c(v,"for","website"),c(V,"id","website"),c(V,"type","text"),c(V,"class","text-black"),c(W,"type","submit"),c(W,"class","button primary block"),W.disabled=l[1],c(Y,"type","button"),c(Y,"class","button block"),c(e,"class","form-widget")},m(C,y){I(C,e,y),M(t,e,null),p(e,a),p(e,s),p(s,o),p(s,f),p(e,d),p(e,h),p(h,w),p(w,_),p(h,E),p(h,k),le(k,l[2]),p(e,b),p(e,i),p(i,v),p(v,P),p(i,A),p(i,V),le(V,l[3]),p(e,H),p(e,z),p(z,W),p(W,X),p(e,Z),p(e,Y),p(Y,K),J=!0,q||(L=[ae(k,"input",l[7]),ae(V,"input",l[8]),ae(Y,"click",l[9]),ae(e,"submit",Ne(l[5]))],q=!0)},p(C,[y]){const x={};!r&&y&16&&(r=!0,x.url=C[4],fe(()=>r=!1)),t.$set(x),(!J||y&1)&&n!==(n=C[0].user.email+"")&&we(f,n),y&4&&k.value!==C[2]&&le(k,C[2]),y&8&&V.value!==C[3]&&le(V,C[3]),(!J||y&2)&&G!==(G=C[1]?"Saving ...":"Update profile")&&we(X,G),(!J||y&2)&&(W.disabled=C[1])},i(C){J||(D(t.$$.fragment,C),J=!0)},o(C){N(t.$$.fragment,C),J=!1},d(C){C&&u(e),j(t),q=!1,De(L)}}}function Ge(l,e,t){let{session:r}=e,a=!1,s=null,o=null,n=null,f=null;Be(()=>{d()});const d=async()=>{try{t(1,a=!0);const{user:b}=r,{data:i,error:v,status:P}=await te.from("profiles").select("username, website, avatar_url, role").eq("id",b.id).single();if(v&&P!==406)throw v;i&&(t(2,s=i.username),t(3,o=i.website),t(4,n=i.avatar_url),f=i)}catch(b){b instanceof Error&&alert(b.message)}finally{t(1,a=!1)}},h=async()=>{try{t(1,a=!0);const{user:b}=r,i={id:b.id,username:s,website:o,avatar_url:n,updated_at:new Date().toISOString()};let{error:v}=await te.from("profiles").upsert(i);if(v)throw v}catch(b){b instanceof Error&&alert(b.message)}finally{t(1,a=!1),console.log("loading state: ",a)}};function w(b){n=b,t(4,n)}function _(){s=this.value,t(2,s)}function E(){o=this.value,t(3,o)}const k=()=>te.auth.signOut();return l.$$set=b=>{"session"in b&&t(0,r=b.session)},[r,a,s,o,n,h,w,_,E,k]}class Le extends _e{constructor(e){super(),$e(this,e,Ge,He,me,{session:0})}}function Te(l){let e,t,r,a,s,o,n,f,d,h,w,_,E,k,b,i,v,P,A,V,H,z,W,G=l[0]?"Loading":"Register",X,Z,Y,K,J,q;return{c(){e=$("div"),t=$("div"),r=$("div"),a=$("h1"),s=$("p"),o=T("Register with your email and password below"),n=S(),f=$("form"),d=$("div"),h=$("label"),w=T("Email"),_=S(),E=$("input"),k=S(),b=$("div"),i=$("label"),v=T("Password"),P=S(),A=$("input"),V=S(),H=$("div"),z=$("button"),W=$("span"),X=T(G),this.h()},l(L){e=m(L,"DIV",{});var Q=g(e);t=m(Q,"DIV",{class:!0});var se=g(t);r=m(se,"DIV",{class:!0,"aria-live":!0});var C=g(r);a=m(C,"H1",{class:!0});var y=g(a);s=m(y,"P",{class:!0});var x=g(s);o=O(x,"Register with your email and password below"),x.forEach(u),n=U(y),f=m(y,"FORM",{class:!0});var ee=g(f);d=m(ee,"DIV",{});var re=g(d);h=m(re,"LABEL",{for:!0});var ie=g(h);w=O(ie,"Email"),ie.forEach(u),_=U(re),E=m(re,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),re.forEach(u),k=U(ee),b=m(ee,"DIV",{});var ne=g(b);i=m(ne,"LABEL",{for:!0});var de=g(i);v=O(de,"Password"),de.forEach(u),P=U(ne),A=m(ne,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),ne.forEach(u),V=U(ee),H=m(ee,"DIV",{});var he=g(H);z=m(he,"BUTTON",{type:!0,class:!0,"aria-live":!0});var be=g(z);W=m(be,"SPAN",{});var Re=g(W);X=O(Re,G),Re.forEach(u),be.forEach(u),he.forEach(u),ee.forEach(u),y.forEach(u),C.forEach(u),se.forEach(u),Q.forEach(u),this.h()},h(){c(s,"class","description"),c(h,"for","email"),c(E,"id","email"),c(E,"class","inputField text-black"),c(E,"type","email"),c(E,"placeholder","Your email"),c(i,"for","password"),c(A,"id","password"),c(A,"class","inputField text-black"),c(A,"type","password"),c(A,"placeholder","Your password"),c(z,"type","submit"),c(z,"class","mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),c(z,"aria-live","polite"),z.disabled=l[0],c(f,"class","form-widget"),c(a,"class","header"),c(r,"class","col-6 form-widget"),c(r,"aria-live","polite"),c(t,"class","flex justify-center items-center flex-col")},m(L,Q){I(L,e,Q),p(e,t),p(t,r),p(r,a),p(a,s),p(s,o),p(a,n),p(a,f),p(f,d),p(d,h),p(h,w),p(d,_),p(d,E),le(E,l[1]),p(f,k),p(f,b),p(b,i),p(i,v),p(b,P),p(b,A),le(A,l[2]),p(f,V),p(f,H),p(H,z),p(z,W),p(W,X),K=!0,J||(q=[ae(E,"input",l[6]),ae(A,"input",l[7]),ae(f,"submit",Ne(l[4]))],J=!0)},p(L,Q){Q&2&&E.value!==L[1]&&le(E,L[1]),Q&4&&A.value!==L[2]&&le(A,L[2]),(!K||Q&1)&&G!==(G=L[0]?"Loading":"Register")&&we(X,G),(!K||Q&1)&&(z.disabled=L[0])},i(L){K||(Ee(()=>{K&&(Y&&Y.end(1),Z=ke(e,Ae,{x:-600,duration:800}),Z.start())}),K=!0)},o(L){Z&&Z.invalidate(),Y=Ie(e,Ae,{x:600,duration:800}),K=!1},d(L){L&&u(e),L&&Y&&Y.end(),J=!1,De(q)}}}function Oe(l){let e,t,r,a,s,o,n,f,d,h,w,_,E,k,b,i,v,P,A,V,H,z,W=l[0]?"Loading":"Login",G,X,Z,Y,K,J;return{c(){e=$("div"),t=$("div"),r=$("div"),a=$("p"),s=T("Sign in with your email and password below"),o=S(),n=$("form"),f=$("div"),d=$("label"),h=T("Email"),w=S(),_=$("input"),E=S(),k=$("div"),b=$("label"),i=T("Password"),v=S(),P=$("input"),A=S(),V=$("div"),H=$("button"),z=$("span"),G=T(W),this.h()},l(q){e=m(q,"DIV",{});var L=g(e);t=m(L,"DIV",{class:!0});var Q=g(t);r=m(Q,"DIV",{class:!0,"aria-live":!0});var se=g(r);a=m(se,"P",{class:!0});var C=g(a);s=O(C,"Sign in with your email and password below"),C.forEach(u),o=U(se),n=m(se,"FORM",{class:!0});var y=g(n);f=m(y,"DIV",{});var x=g(f);d=m(x,"LABEL",{for:!0});var ee=g(d);h=O(ee,"Email"),ee.forEach(u),w=U(x),_=m(x,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),x.forEach(u),E=U(y),k=m(y,"DIV",{});var re=g(k);b=m(re,"LABEL",{for:!0});var ie=g(b);i=O(ie,"Password"),ie.forEach(u),v=U(re),P=m(re,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0}),re.forEach(u),A=U(y),V=m(y,"DIV",{});var ne=g(V);H=m(ne,"BUTTON",{type:!0,class:!0,"aria-live":!0});var de=g(H);z=m(de,"SPAN",{});var he=g(z);G=O(he,W),he.forEach(u),de.forEach(u),ne.forEach(u),y.forEach(u),se.forEach(u),Q.forEach(u),L.forEach(u),this.h()},h(){c(a,"class","description"),c(d,"for","email"),c(_,"id","email"),c(_,"class","inputField text-black"),c(_,"type","email"),c(_,"placeholder","Your email"),c(b,"for","password"),c(P,"id","password"),c(P,"class","inputField text-black"),c(P,"type","password"),c(P,"placeholder","Your password"),c(H,"type","submit"),c(H,"class","mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),c(H,"aria-live","polite"),H.disabled=l[0],c(n,"class","form-widget"),c(r,"class","col-6 form-widget"),c(r,"aria-live","polite"),c(t,"class","flex justify-center items-center flex-col")},m(q,L){I(q,e,L),p(e,t),p(t,r),p(r,a),p(a,s),p(r,o),p(r,n),p(n,f),p(f,d),p(d,h),p(f,w),p(f,_),le(_,l[1]),p(n,E),p(n,k),p(k,b),p(b,i),p(k,v),p(k,P),le(P,l[2]),p(n,A),p(n,V),p(V,H),p(H,z),p(z,G),Y=!0,K||(J=[ae(_,"input",l[8]),ae(P,"input",l[9]),ae(n,"submit",Ne(l[5]))],K=!0)},p(q,L){L&2&&_.value!==q[1]&&le(_,q[1]),L&4&&P.value!==q[2]&&le(P,q[2]),(!Y||L&1)&&W!==(W=q[0]?"Loading":"Login")&&we(G,W),(!Y||L&1)&&(H.disabled=q[0])},i(q){Y||(Ee(()=>{Y&&(Z&&Z.end(1),X=ke(e,Ae,{x:-600,duration:800}),X.start())}),Y=!0)},o(q){X&&X.invalidate(),Z=Ie(e,Ae,{x:600,duration:800}),Y=!1},d(q){q&&u(e),q&&Z&&Z.end(),K=!1,De(J)}}}function Ke(l){let e,t,r,a=l[3]==="register"&&Te(l),s=l[3]==="login"&&Oe(l);return{c(){a&&a.c(),e=S(),s&&s.c(),t=Pe()},l(o){a&&a.l(o),e=U(o),s&&s.l(o),t=Pe()},m(o,n){a&&a.m(o,n),I(o,e,n),s&&s.m(o,n),I(o,t,n),r=!0},p(o,[n]){o[3]==="register"?a?(a.p(o,n),n&8&&D(a,1)):(a=Te(o),a.c(),D(a,1),a.m(e.parentNode,e)):a&&(ye(),N(a,1,1,()=>{a=null}),Ve()),o[3]==="login"?s?(s.p(o,n),n&8&&D(s,1)):(s=Oe(o),s.c(),D(s,1),s.m(t.parentNode,t)):s&&(ye(),N(s,1,1,()=>{s=null}),Ve())},i(o){r||(D(a),D(s),r=!0)},o(o){N(a),N(s),r=!1},d(o){a&&a.d(o),o&&u(e),s&&s.d(o),o&&u(t)}}}function Xe(l,e,t){let r=!1,a="",s="",o="";Me.subscribe(E=>{t(3,o=E.formType)});const n=async()=>{try{t(0,r=!0);const{user:E,error:k}=await te.auth.signUp({email:a,password:s});if(k)throw k;if(E){const{error:b}=await te.from("profiles").upsert([{id:E.id,role:"Participant"}]);if(b)throw b}alert("Check your email for the confirmation link!")}catch(E){alert(E.message)}finally{t(0,r=!1)}},f=async()=>{try{t(0,r=!0);const{data:E,error:k}=await te.auth.signInWithPassword({email:a,password:s});if(k)throw k}catch(E){E instanceof Error&&alert(E.message)}finally{t(0,r=!1)}};function d(){a=this.value,t(1,a)}function h(){s=this.value,t(2,s)}function w(){a=this.value,t(1,a)}function _(){s=this.value,t(2,s)}return[r,a,s,o,n,f,d,h,w,_]}class Ze extends _e{constructor(e){super(),$e(this,e,Xe,Ke,me,{})}}function Je(l){let e,t;return{c(){e=$("span"),t=T("Profile"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Profile"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function Qe(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-user-circle")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function xe(l){let e,t;return{c(){e=$("span"),t=T("Recent Activity"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Recent Activity"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function et(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-chart-bar")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function tt(l){let e,t;return{c(){e=$("span"),t=T("Create Contacts"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Create Contacts"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function rt(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-cog")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function at(l){let e,t,r,a,s,o,n,f,d;function h(i){l[3](i)}let w={name:"groups",value:0,title:"Profile",$$slots:{lead:[Qe],default:[Je]},$$scope:{ctx:l}};l[0]!==void 0&&(w.group=l[0]),e=new pe({props:w}),oe.push(()=>ue(e,"group",h)),e.$on("click",l[4]);function _(i){l[5](i)}let E={name:"recent",value:1,title:"Recent Activity",$$slots:{lead:[et],default:[xe]},$$scope:{ctx:l}};l[0]!==void 0&&(E.group=l[0]),a=new pe({props:E}),oe.push(()=>ue(a,"group",_)),a.$on("click",l[6]);function k(i){l[7](i)}let b={name:"contacts",value:2,title:"Create Contacts",$$slots:{lead:[rt],default:[tt]},$$scope:{ctx:l}};return l[0]!==void 0&&(b.group=l[0]),n=new pe({props:b}),oe.push(()=>ue(n,"group",k)),n.$on("click",l[8]),{c(){B(e.$$.fragment),r=S(),B(a.$$.fragment),o=S(),B(n.$$.fragment)},l(i){F(e.$$.fragment,i),r=U(i),F(a.$$.fragment,i),o=U(i),F(n.$$.fragment,i)},m(i,v){M(e,i,v),I(i,r,v),M(a,i,v),I(i,o,v),M(n,i,v),d=!0},p(i,v){const P={};v&512&&(P.$$scope={dirty:v,ctx:i}),!t&&v&1&&(t=!0,P.group=i[0],fe(()=>t=!1)),e.$set(P);const A={};v&512&&(A.$$scope={dirty:v,ctx:i}),!s&&v&1&&(s=!0,A.group=i[0],fe(()=>s=!1)),a.$set(A);const V={};v&512&&(V.$$scope={dirty:v,ctx:i}),!f&&v&1&&(f=!0,V.group=i[0],fe(()=>f=!1)),n.$set(V)},i(i){d||(D(e.$$.fragment,i),D(a.$$.fragment,i),D(n.$$.fragment,i),d=!0)},o(i){N(e.$$.fragment,i),N(a.$$.fragment,i),N(n.$$.fragment,i),d=!1},d(i){j(e,i),i&&u(r),j(a,i),i&&u(o),j(n,i)}}}function lt(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-home")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function st(l){let e,t;return e=new ve({props:{href:"/",$$slots:{default:[lt]},$$scope:{ctx:l}}}),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const s={};a&512&&(s.$$scope={dirty:a,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function it(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-sign-out-alt text-white")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function nt(l){let e,t;return e=new ve({props:{href:"/",title:"Sign Out",$$slots:{default:[it]},$$scope:{ctx:l}}}),e.$on("click",l[2]),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const s={};a&512&&(s.$$scope={dirty:a,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function ot(l){let e,t,r;return t=new Se({props:{$$slots:{trail:[nt],lead:[st],default:[at]},$$scope:{ctx:l}}}),{c(){e=$("div"),B(t.$$.fragment),this.h()},l(a){e=m(a,"DIV",{class:!0});var s=g(e);F(t.$$.fragment,s),s.forEach(u),this.h()},h(){c(e,"class","fixed top-0 left-0 mt-64")},m(a,s){I(a,e,s),M(t,e,null),r=!0},p(a,[s]){const o={};s&513&&(o.$$scope={dirty:s,ctx:a}),t.$set(o)},i(a){r||(D(t.$$.fragment,a),r=!0)},o(a){N(t.$$.fragment,a),r=!1},d(a){a&&u(e),j(t)}}}function ut(l,e,t){let r=0;const a=_=>{Ue(_)},s=()=>te.auth.signOut();function o(_){r=_,t(0,r)}const n=()=>a("/");function f(_){r=_,t(0,r)}const d=()=>a("/recent-activity");function h(_){r=_,t(0,r)}return[r,a,s,o,n,f,d,h,()=>a("/contacts")]}class ft extends _e{constructor(e){super(),$e(this,e,ut,ot,me,{})}}function ct(l){let e,t;return{c(){e=$("span"),t=T("Profile"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Profile"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function pt(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-user-circle")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function dt(l){let e,t;return{c(){e=$("span"),t=T("Recent Activity"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Recent Activity"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function ht(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-chart-bar")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function _t(l){let e,t;return{c(){e=$("span"),t=T("Create Contacts"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Create Contacts"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function $t(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-cog")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function mt(l){let e,t,r,a,s,o,n,f,d;function h(i){l[3](i)}let w={name:"groups",value:0,title:"Profile",$$slots:{lead:[pt],default:[ct]},$$scope:{ctx:l}};l[0]!==void 0&&(w.group=l[0]),e=new pe({props:w}),oe.push(()=>ue(e,"group",h)),e.$on("click",l[4]);function _(i){l[5](i)}let E={name:"recent",value:1,title:"Recent Activity",$$slots:{lead:[ht],default:[dt]},$$scope:{ctx:l}};l[0]!==void 0&&(E.group=l[0]),a=new pe({props:E}),oe.push(()=>ue(a,"group",_)),a.$on("click",l[6]);function k(i){l[7](i)}let b={name:"contacts",value:2,title:"Create Contacts",$$slots:{lead:[$t],default:[_t]},$$scope:{ctx:l}};return l[0]!==void 0&&(b.group=l[0]),n=new pe({props:b}),oe.push(()=>ue(n,"group",k)),n.$on("click",l[8]),{c(){B(e.$$.fragment),r=S(),B(a.$$.fragment),o=S(),B(n.$$.fragment)},l(i){F(e.$$.fragment,i),r=U(i),F(a.$$.fragment,i),o=U(i),F(n.$$.fragment,i)},m(i,v){M(e,i,v),I(i,r,v),M(a,i,v),I(i,o,v),M(n,i,v),d=!0},p(i,v){const P={};v&512&&(P.$$scope={dirty:v,ctx:i}),!t&&v&1&&(t=!0,P.group=i[0],fe(()=>t=!1)),e.$set(P);const A={};v&512&&(A.$$scope={dirty:v,ctx:i}),!s&&v&1&&(s=!0,A.group=i[0],fe(()=>s=!1)),a.$set(A);const V={};v&512&&(V.$$scope={dirty:v,ctx:i}),!f&&v&1&&(f=!0,V.group=i[0],fe(()=>f=!1)),n.$set(V)},i(i){d||(D(e.$$.fragment,i),D(a.$$.fragment,i),D(n.$$.fragment,i),d=!0)},o(i){N(e.$$.fragment,i),N(a.$$.fragment,i),N(n.$$.fragment,i),d=!1},d(i){j(e,i),i&&u(r),j(a,i),i&&u(o),j(n,i)}}}function gt(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-home")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function vt(l){let e,t;return e=new ve({props:{href:"/",$$slots:{default:[gt]},$$scope:{ctx:l}}}),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const s={};a&512&&(s.$$scope={dirty:a,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function bt(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-sign-out-alt text-white")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function wt(l){let e,t;return e=new ve({props:{href:"/",title:"Account",$$slots:{default:[bt]},$$scope:{ctx:l}}}),e.$on("click",l[2]),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const s={};a&512&&(s.$$scope={dirty:a,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function Et(l){let e,t,r,a,s,o;return s=new Se({props:{$$slots:{trail:[wt],lead:[vt],default:[mt]},$$scope:{ctx:l}}}),{c(){e=$("div"),t=$("h1"),r=T("Participant Dashboard"),a=S(),B(s.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var f=g(e);t=m(f,"H1",{class:!0});var d=g(t);r=O(d,"Participant Dashboard"),d.forEach(u),a=U(f),F(s.$$.fragment,f),f.forEach(u),this.h()},h(){c(t,"class","text-white"),c(e,"class","fixed top-0 left-0 mt-64")},m(n,f){I(n,e,f),p(e,t),p(t,r),p(e,a),M(s,e,null),o=!0},p(n,[f]){const d={};f&513&&(d.$$scope={dirty:f,ctx:n}),s.$set(d)},i(n){o||(D(s.$$.fragment,n),o=!0)},o(n){N(s.$$.fragment,n),o=!1},d(n){n&&u(e),j(s)}}}function kt(l,e,t){let r=0;const a=_=>{Ue(_)},s=()=>te.auth.signOut();function o(_){r=_,t(0,r)}const n=()=>a("/");function f(_){r=_,t(0,r)}const d=()=>a("/recent-activity");function h(_){r=_,t(0,r)}return[r,a,s,o,n,f,d,h,()=>a("/contacts")]}class It extends _e{constructor(e){super(),$e(this,e,kt,Et,me,{})}}function Pt(l){let e,t;return{c(){e=$("span"),t=T("Profile"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Profile"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function At(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-user-circle")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function Dt(l){let e,t;return{c(){e=$("span"),t=T("Recent Activity"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Recent Activity"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function yt(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-chart-bar")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function Vt(l){let e,t;return{c(){e=$("span"),t=T("Create Contacts"),this.h()},l(r){e=m(r,"SPAN",{class:!0});var a=g(e);t=O(a,"Create Contacts"),a.forEach(u),this.h()},h(){c(e,"class","text-white")},m(r,a){I(r,e,a),p(e,t)},p:R,d(r){r&&u(e)}}}function Nt(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-cog")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function St(l){let e,t,r,a,s,o,n,f,d;function h(i){l[3](i)}let w={name:"groups",value:0,title:"Profile",$$slots:{lead:[At],default:[Pt]},$$scope:{ctx:l}};l[0]!==void 0&&(w.group=l[0]),e=new pe({props:w}),oe.push(()=>ue(e,"group",h)),e.$on("click",l[4]);function _(i){l[5](i)}let E={name:"recent",value:1,title:"Recent Activity",$$slots:{lead:[yt],default:[Dt]},$$scope:{ctx:l}};l[0]!==void 0&&(E.group=l[0]),a=new pe({props:E}),oe.push(()=>ue(a,"group",_)),a.$on("click",l[6]);function k(i){l[7](i)}let b={name:"contacts",value:2,title:"Create Contacts",$$slots:{lead:[Nt],default:[Vt]},$$scope:{ctx:l}};return l[0]!==void 0&&(b.group=l[0]),n=new pe({props:b}),oe.push(()=>ue(n,"group",k)),n.$on("click",l[8]),{c(){B(e.$$.fragment),r=S(),B(a.$$.fragment),o=S(),B(n.$$.fragment)},l(i){F(e.$$.fragment,i),r=U(i),F(a.$$.fragment,i),o=U(i),F(n.$$.fragment,i)},m(i,v){M(e,i,v),I(i,r,v),M(a,i,v),I(i,o,v),M(n,i,v),d=!0},p(i,v){const P={};v&512&&(P.$$scope={dirty:v,ctx:i}),!t&&v&1&&(t=!0,P.group=i[0],fe(()=>t=!1)),e.$set(P);const A={};v&512&&(A.$$scope={dirty:v,ctx:i}),!s&&v&1&&(s=!0,A.group=i[0],fe(()=>s=!1)),a.$set(A);const V={};v&512&&(V.$$scope={dirty:v,ctx:i}),!f&&v&1&&(f=!0,V.group=i[0],fe(()=>f=!1)),n.$set(V)},i(i){d||(D(e.$$.fragment,i),D(a.$$.fragment,i),D(n.$$.fragment,i),d=!0)},o(i){N(e.$$.fragment,i),N(a.$$.fragment,i),N(n.$$.fragment,i),d=!1},d(i){j(e,i),i&&u(r),j(a,i),i&&u(o),j(n,i)}}}function Ut(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-home")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function Lt(l){let e,t;return e=new ve({props:{href:"/",$$slots:{default:[Ut]},$$scope:{ctx:l}}}),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const s={};a&512&&(s.$$scope={dirty:a,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function Rt(l){let e;return{c(){e=$("i"),this.h()},l(t){e=m(t,"I",{class:!0}),g(e).forEach(u),this.h()},h(){c(e,"class","fas fa-sign-out-alt text-white")},m(t,r){I(t,e,r)},p:R,d(t){t&&u(e)}}}function Ct(l){let e,t;return e=new ve({props:{href:"/",title:"Sign Out",$$slots:{default:[Rt]},$$scope:{ctx:l}}}),e.$on("click",l[2]),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p(r,a){const s={};a&512&&(s.$$scope={dirty:a,ctx:r}),e.$set(s)},i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function Tt(l){let e,t,r,a,s,o;return s=new Se({props:{$$slots:{trail:[Ct],lead:[Lt],default:[St]},$$scope:{ctx:l}}}),{c(){e=$("div"),t=$("h1"),r=T("Pro Dashboard"),a=S(),B(s.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var f=g(e);t=m(f,"H1",{class:!0});var d=g(t);r=O(d,"Pro Dashboard"),d.forEach(u),a=U(f),F(s.$$.fragment,f),f.forEach(u),this.h()},h(){c(t,"class","text-white"),c(e,"class","fixed top-0 left-0 mt-64")},m(n,f){I(n,e,f),p(e,t),p(t,r),p(e,a),M(s,e,null),o=!0},p(n,[f]){const d={};f&513&&(d.$$scope={dirty:f,ctx:n}),s.$set(d)},i(n){o||(D(s.$$.fragment,n),o=!0)},o(n){N(s.$$.fragment,n),o=!1},d(n){n&&u(e),j(s)}}}function Ot(l,e,t){let r=0;const a=_=>{Ue(_)},s=()=>te.auth.signOut();function o(_){r=_,t(0,r)}const n=()=>a("/");function f(_){r=_,t(0,r)}const d=()=>a("/recent-activity");function h(_){r=_,t(0,r)}return[r,a,s,o,n,f,d,h,()=>a("/contacts")]}class Bt extends _e{constructor(e){super(),$e(this,e,Ot,Tt,me,{})}}function Ft(l){let e,t,r,a,s,o,n,f,d;return r=new It({}),o=new Le({props:{session:l[0]}}),{c(){e=$("div"),t=$("div"),B(r.$$.fragment),a=S(),s=$("div"),B(o.$$.fragment),this.h()},l(h){e=m(h,"DIV",{class:!0});var w=g(e);t=m(w,"DIV",{class:!0});var _=g(t);F(r.$$.fragment,_),_.forEach(u),a=U(w),s=m(w,"DIV",{class:!0});var E=g(s);F(o.$$.fragment,E),E.forEach(u),w.forEach(u),this.h()},h(){c(t,"class","container mx-auto px-4 flex-shrink-0"),c(s,"class","grid justify-items-center mt-8 flex-grow"),c(e,"class","flex flex-col min-h-screen")},m(h,w){I(h,e,w),p(e,t),M(r,t,null),p(e,a),p(e,s),M(o,s,null),d=!0},p(h,w){const _={};w&1&&(_.session=h[0]),o.$set(_)},i(h){d||(D(r.$$.fragment,h),D(o.$$.fragment,h),Ee(()=>{d&&(f&&f.end(1),n=ke(s,ge,{duration:2e3}),n.start())}),d=!0)},o(h){N(r.$$.fragment,h),N(o.$$.fragment,h),n&&n.invalidate(),f=Ie(s,ge,{duration:1e3}),d=!1},d(h){h&&u(e),j(r),j(o),h&&f&&f.end()}}}function Mt(l){let e,t,r,a,s,o,n,f,d;return r=new Bt({}),o=new Le({props:{session:l[0]}}),{c(){e=$("div"),t=$("div"),B(r.$$.fragment),a=S(),s=$("div"),B(o.$$.fragment),this.h()},l(h){e=m(h,"DIV",{class:!0});var w=g(e);t=m(w,"DIV",{class:!0});var _=g(t);F(r.$$.fragment,_),_.forEach(u),a=U(w),s=m(w,"DIV",{class:!0});var E=g(s);F(o.$$.fragment,E),E.forEach(u),w.forEach(u),this.h()},h(){c(t,"class","container mx-auto px-4 flex-shrink-0"),c(s,"class","grid justify-items-center mt-8 flex-grow"),c(e,"class","flex flex-col min-h-screen")},m(h,w){I(h,e,w),p(e,t),M(r,t,null),p(e,a),p(e,s),M(o,s,null),d=!0},p(h,w){const _={};w&1&&(_.session=h[0]),o.$set(_)},i(h){d||(D(r.$$.fragment,h),D(o.$$.fragment,h),Ee(()=>{d&&(f&&f.end(1),n=ke(s,ge,{duration:2e3}),n.start())}),d=!0)},o(h){N(r.$$.fragment,h),N(o.$$.fragment,h),n&&n.invalidate(),f=Ie(s,ge,{duration:1e3}),d=!1},d(h){h&&u(e),j(r),j(o),h&&f&&f.end()}}}function jt(l){let e,t,r,a,s,o,n,f,d;return r=new ft({}),o=new Le({props:{session:l[0]}}),{c(){e=$("div"),t=$("div"),B(r.$$.fragment),a=S(),s=$("div"),B(o.$$.fragment),this.h()},l(h){e=m(h,"DIV",{class:!0});var w=g(e);t=m(w,"DIV",{class:!0});var _=g(t);F(r.$$.fragment,_),_.forEach(u),a=U(w),s=m(w,"DIV",{class:!0});var E=g(s);F(o.$$.fragment,E),E.forEach(u),w.forEach(u),this.h()},h(){c(t,"class","container mx-auto px-4 flex-shrink-0"),c(s,"class","grid justify-items-center mt-8 flex-grow"),c(e,"class","flex flex-col min-h-screen")},m(h,w){I(h,e,w),p(e,t),M(r,t,null),p(e,a),p(e,s),M(o,s,null),d=!0},p(h,w){const _={};w&1&&(_.session=h[0]),o.$set(_)},i(h){d||(D(r.$$.fragment,h),D(o.$$.fragment,h),Ee(()=>{d&&(f&&f.end(1),n=ke(s,ge,{duration:2e3}),n.start())}),d=!0)},o(h){N(r.$$.fragment,h),N(o.$$.fragment,h),n&&n.invalidate(),f=Ie(s,ge,{duration:1e3}),d=!1},d(h){h&&u(e),j(r),j(o),h&&f&&f.end()}}}function zt(l){let e,t;return e=new Ze({}),{c(){B(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){M(e,r,a),t=!0},p:R,i(r){t||(D(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){j(e,r)}}}function Yt(l){let e,t,r,a;const s=[zt,jt,Mt,Ft],o=[];function n(f,d){return f[0]?f[1]==="Admin"?1:f[1]==="Professional"?2:f[1]==="Participant"?3:-1:0}return~(e=n(l))&&(t=o[e]=s[e](l)),{c(){t&&t.c(),r=Pe()},l(f){t&&t.l(f),r=Pe()},m(f,d){~e&&o[e].m(f,d),I(f,r,d),a=!0},p(f,[d]){let h=e;e=n(f),e===h?~e&&o[e].p(f,d):(t&&(ye(),N(o[h],1,1,()=>{o[h]=null}),Ve()),~e?(t=o[e],t?t.p(f,d):(t=o[e]=s[e](f),t.c()),D(t,1),t.m(r.parentNode,r)):t=null)},i(f){a||(D(t),a=!0)},o(f){N(t),a=!1},d(f){~e&&o[e].d(f),f&&u(r)}}}function qt(l,e,t){let r,a=null;async function s(o){if(o){const{data:n,error:f}=await te.from("profiles").select("role").eq("id",o.user.id).single();f?console.error("Error fetching profile: ",f):t(1,a=n==null?void 0:n.role)}}return Be(async()=>{const{data:o,error:n}=await te.auth.getSession();n?console.error("Error fetching session: ",n):t(0,r=o==null?void 0:o.session),s(r),te.auth.onAuthStateChange(async(f,d)=>{t(0,r=d),s(r)})}),[r,a]}class Jt extends _e{constructor(e){super(),$e(this,e,qt,Yt,me,{})}}export{Jt as component};