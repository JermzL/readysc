import{u as j,l as h,e as l,i as b,r as d,j as e}from"./main-165.js";import{g as I,$ as S,h as C,d as w,_ as m,i as _,I as v,s as N}from"./bi.312.95.js";import{h as p,S as y}from"./bi.519.734.js";import"./bi.953.732.js";import"./bi.422.733.js";function R({allIntegURL:f}){const x=j(),{formID:g}=h(),[t,s]=l(I),[o,E]=l(S),r=b(C),[n,c]=d.useState(!1),[u,a]=d.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:u,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>p(i,t,s),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(_,{entity:o.triggered_entity,setSnackbar:a}),e.jsx(y,{formID:g,formFields:r,handleInput:i=>p(i,t,s),sliceWpConf:t,setSliceWpConf:s,isLoading:n,setIsLoading:c,setSnackbar:a}),e.jsx(v,{edit:!0,saveConfig:()=>N({flow:o,allIntegURL:f,conf:t,navigate:x,edit:1,setIsLoading:c,setSnackbar:a}),disabled:!t.mainAction||n,isLoading:n,dataConf:t,setDataConf:s,formFields:r}),e.jsx("br",{})]})}export{R as default};
