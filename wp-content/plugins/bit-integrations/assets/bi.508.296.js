var K=Object.defineProperty,P=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var x=(t,i,e)=>i in t?K(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,g=(t,i)=>{for(var e in i||(i={}))z.call(i,e)&&x(t,e,i[e]);if(_)for(var e of _(i))L.call(i,e)&&x(t,e,i[e]);return t},y=(t,i)=>P(t,T(i));var k=(t,i,e)=>new Promise((h,s)=>{var l=n=>{try{u(e.next(n))}catch(o){s(o)}},b=n=>{try{u(e.throw(n))}catch(o){s(o)}},u=n=>n.done?h(n.value):Promise.resolve(n.value).then(l,b);u((e=e.apply(t,i)).next())});import{r as m,j as r}from"./main-165.js";import{S as E,I as A,G as N,E as S,A as $}from"./bi.69.970.js";import{N as v}from"./bi.312.95.js";import{h as I,b as w,g as F}from"./bi.806.850.js";import{T as j,t as G}from"./bi.40.785.js";function J({moosendConf:t,setMoosendConf:i,step:e,setStep:h,loading:s,setLoading:l,isInfo:b}){const[u,n]=m.useState(!1),[o,p]=m.useState({name:"",authKey:""}),{moosend:a}=G,d=()=>k(this,null,function*(){setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h(2),l(y(g({},s),{page:!0})),(yield F(t,i))&&l(y(g({},s),{page:!1}))}),f=`
  <h4>${__("Step of get API Key:","bit-integrations")}</h4>
  <ul>
    <li>${__("First login on account.","bit-integrations")}</li>
    <li>${__("Goto Settings and click on <b>API Key</b>","bit-integrations")}</li>
    <li>${__("Copy the <b>API Key</b> and paste into <b>API Key</b> field of your authorization form.","bit-integrations")}</li>
    <li>${__("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
</ul>
`;return r.jsxs(E,{step:e,stepNo:1,style:{width:900,height:"auto"},children:[(a==null?void 0:a.youTubeLink)&&r.jsx(j,{title:"Moosend",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&r.jsx(j,{title:"Moosend",docLink:a==null?void 0:a.docLink}),r.jsxs("div",{className:"mt-2",children:[r.jsx(A,{label:__("Integration Name","bit-integrations"),name:"name",placeholder:__("Integration Name...","bit-integrations"),value:t.name,onchange:c=>I(c,t,i,o,p)}),r.jsx(A,{label:__("API key","bit-integrations"),name:"authKey",placeholder:__("API key...","bit-integrations"),value:t.authKey,onchange:c=>I(c,t,i,o,p)}),r.jsx(N,{url:"https://moosend.com/",info:__("To get API key, please visit","bit-integrations")}),r.jsx(S,{error:o.authKey}),!b&&r.jsx($,{onclick:()=>w(t,p,n,s,l),nextPage:d,auth:u,loading:s.auth})]}),r.jsx(v,{note:f})]})}export{J as default};
