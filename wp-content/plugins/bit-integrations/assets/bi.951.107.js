import{u as I,l as b,e as f,r as o,i as _,j as e}from"./main-165.js";import{g as w,$ as v,h as S,d as M,_ as g,i as N,I as y,s as F}from"./bi.312.95.js";import{h,c as k}from"./bi.425.757.js";import{M as E}from"./bi.274.758.js";import"./bi.197.759.js";import"./bi.953.732.js";import"./bi.422.733.js";function z({allIntegURL:x}){const u=I(),{id:L,formID:r}=b(),[t,a]=f(w),[d,C]=f(v),[l,m]=o.useState({}),[c,i]=o.useState(!1),[j,s]=o.useState({show:!1}),p=_(S);return e.jsxs("div",{style:{width:900},children:[e.jsx(M,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:g("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>h(n,t,a),name:"name",value:t.name,type:"text",placeholder:g("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(N,{entity:d.triggered_entity,setSnackbar:s}),e.jsx(E,{formID:r,formFields:p,handleInput:n=>h(n,t,a,r,l,m,s,i),mailChimpConf:t,setMailChimpConf:a,isLoading:c,setIsLoading:i,setSnackbar:s,loading:l,setLoading:m}),e.jsx(y,{edit:!0,saveConfig:()=>F({flow:d,setFlow:C,allIntegURL:x,conf:t,navigate:u,edit:1,setIsLoading:i,setSnackbar:s}),disabled:t.module===""||t.listId===""||t.field_map.length<1||!k(t),isLoading:c,dataConf:t,setDataConf:a,formFields:p}),e.jsx("br",{})]})}export{z as default};
