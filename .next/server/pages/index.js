"use strict";(()=>{var e={};e.id=332,e.ids=[220,332],e.modules={671:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},497:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>P,getServerSideProps:()=>S,getStaticPaths:()=>g,getStaticProps:()=>f,reportWebVitals:()=>_,routeModule:()=>y,unstable_getServerProps:()=>M,unstable_getServerSideProps:()=>x,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>h,unstable_getStaticProps:()=>b});var a=r(865),s=r(455),i=r(671),o=r(781),u=r.n(o),l=r(645),d=r.n(l),p=r(239),c=e([p]);p=(c.then?(await c)():c)[0];let P=(0,i.M)(p,"default"),f=(0,i.M)(p,"getStaticProps"),g=(0,i.M)(p,"getStaticPaths"),S=(0,i.M)(p,"getServerSideProps"),m=(0,i.M)(p,"config"),_=(0,i.M)(p,"reportWebVitals"),b=(0,i.M)(p,"unstable_getStaticProps"),h=(0,i.M)(p,"unstable_getStaticPaths"),v=(0,i.M)(p,"unstable_getStaticParams"),M=(0,i.M)(p,"unstable_getServerProps"),x=(0,i.M)(p,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:s.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d(),Document:u()},userland:p});n()}catch(e){n(e)}})},380:(e,t,r)=>{r.d(t,{p:()=>l});let n=require("fs");var a=r.n(n),s=r(873),i=r.n(s);let o=require("gray-matter");var u=r.n(o);function l(){let e=i().join(process.cwd(),"posts","hello-world.md"),t=a().readFileSync(e,"utf8"),{data:r,content:n}=u()(t);return{data:r,content:n}}},645:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(929),a=r(732),s=n._(r(15)),i=r(811);async function o(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,r)}}class u extends s.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,a.jsx)(e,{...t})}}u.origGetInitialProps=o,u.getInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},239:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>d,getStaticProps:()=>l});var a=r(732),s=r(380),i=r(114),o=r(328),u=e([i,o]);async function l(){let{data:e,content:t}=(0,s.p)(),r=(await (0,i.remark)().use(o.default).process(t)).toString();return{props:{postData:{...e,contentHtml:r}}}}function d({postData:e}){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:e.title}),(0,a.jsx)("p",{children:e.date}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.contentHtml}})]})}[i,o]=u.then?(await u)():u,n()}catch(e){n(e)}})},455:(e,t)=>{var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},15:e=>{e.exports=require("react")},732:e=>{e.exports=require("react/jsx-runtime")},873:e=>{e.exports=require("path")},114:e=>{e.exports=import("remark")},328:e=>{e.exports=import("remark-html")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[781],()=>r(497));module.exports=n})();