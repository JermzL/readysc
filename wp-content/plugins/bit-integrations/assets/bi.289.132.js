import{l as g,r as n,e as a,i as j,j as s}from"./main-165.js";import{$ as k,h as p,g as b,d as u,B as w,E as I,s as h}from"./bi.312.95.js";import E from"./bi.175.261.js";import{W}from"./bi.870.768.js";import"./bi.430.769.js";function T({allIntegURL:i}){const{formID:r}=g(),[c,o]=n.useState({show:!1}),[d,m]=n.useState(!1),[e,f]=a(k),l=j(p),[t,x]=a(b);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:c,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(I,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:r,formFields:l,webHooks:t,setWebHooks:x,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>h({flow:e,setFlow:f,allIntegURL:i,conf:t,edit:1,setIsLoading:m,setSnackbar:o}),isLoading:d}),s.jsx("br",{})]})}export{T as default};
