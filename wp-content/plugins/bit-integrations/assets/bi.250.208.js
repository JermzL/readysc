import{u as C,l as h,e as d,i as j,r as m,j as t}from"./main-165.js";import{g as b,$ as I,h as _,d as w,_ as c,i as v,I as N,s as S}from"./bi.312.95.js";import{h as y}from"./bi.948.922.js";import{C as M}from"./bi.450.923.js";function L({allIntegURL:l}){const f=C(),{formID:g}=h(),[a,s]=d(b),[n,p]=d(I),o=j(_),[i,r]=m.useState(!1),[x,e]=m.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:x,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>y(u,a,s),name:"name",value:a.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:n.triggered_entity,setSnackbar:e}),t.jsx(M,{formID:g,formFields:o,campaignMonitorConf:a,setCampaignMonitorConf:s,isLoading:i,setIsLoading:r,setSnackbar:e}),t.jsx(N,{edit:!0,saveConfig:()=>S({flow:n,setFlow:p,allIntegURL:l,navigate:f,conf:a,edit:1,setIsLoading:r,setSnackbar:e}),disabled:a.field_map.length<1,isLoading:i,dataConf:a,setDataConf:s,formFields:o}),t.jsx("br",{})]})}export{L as default};
