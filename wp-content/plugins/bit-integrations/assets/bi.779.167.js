import{u as w,l as C,e as p,r as d,i as D,j as t}from"./main-165.js";import{g as N,$ as y,h as P,d as S,_ as n,i as k,I as E,s as F,A as L}from"./bi.312.95.js";import{h as R,c as $,a as A}from"./bi.614.846.js";import{P as M}from"./bi.889.847.js";import"./bi.953.732.js";import"./bi.422.733.js";function J({allIntegURL:g}){const u=w(),{id:f}=C(),[e,i]=p(N),[o,h]=p(y),[l,r]=d.useState(!1),[x,a]=d.useState({show:!1}),[c,v]=d.useState(0),m=D(P),b=()=>{if(!$(e)){a({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(!A(e)){["Leads","Deals","Activities","Notes"].includes(e.moduleData.module)&&a({show:!0,msg:n("Please select a organization or a person","bit-integrations")});return}F({flow:o,setFlow:h,allIntegURL:g,conf:e,navigate:u,id:f,edit:1,setIsLoading:r,setSnackbar:a})},j=s=>{i(I=>L(I,_=>{_[s.target.name]=s.target.value}))};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:x,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 ",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:s=>j,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(k,{entity:o.triggered_entity,setSnackbar:a}),t.jsx(M,{tab:c,settab:v,formID:o.triggered_entity_id,formFields:m,handleInput:s=>R(s,c,e,i,r,a),pipeDriveConf:e,setPipeDriveConf:i,isLoading:l,setIsLoading:r,setSnackbar:a}),t.jsx(E,{edit:!0,saveConfig:b,disabled:e.moduleData.module===""||e.field_map.length<1,isLoading:l,dataConf:e,setDataConf:i,formFields:m}),t.jsx("br",{})]})}export{J as default};
