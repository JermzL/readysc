import{u as b,l as h,e as l,i as j,r as c,j as e}from"./main-165.js";import{g as I,$ as C,h as _,d as w,_ as m,i as v,I as N,s as S}from"./bi.312.95.js";import{Z as y}from"./bi.681.809.js";import{h as f,c as F}from"./bi.852.810.js";import"./bi.953.732.js";import"./bi.422.733.js";function A({allIntegURL:p}){const x=b(),{formID:g}=h(),[t,s]=l(I),[i,k]=l(C),r=j(_),[n,d]=c.useState(!1),[u,a]=c.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:u,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,t,s),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(v,{entity:i.triggered_entity,setSnackbar:a}),e.jsx(y,{formID:g,formFields:r,handleInput:o=>f(o,t,s),zoomWebinarConf:t,setZoomWebinarConf:s,isLoading:n,setIsLoading:d,setSnackbar:a}),e.jsx(N,{edit:!0,saveConfig:()=>S({flow:i,allIntegURL:p,conf:t,navigate:x,edit:1,setIsLoading:d,setSnackbar:a}),disabled:t.field_map.length<2||n||!t.id||!F(t)||t.selectedActions==null,isLoading:n,dataConf:t,setDataConf:s,formFields:r}),e.jsx("br",{})]})}export{A as default};
