import{l as p,r as i,e as a,i as g,j as s}from"./main-165.js";import{$ as j,h as S,g as k,d as b,B as u,E as w,s as h}from"./bi.312.95.js";import E from"./bi.175.261.js";import{W}from"./bi.870.768.js";import"./bi.430.769.js";function H({allIntegURL:n}){const{formID:r}=p(),[c,o]=i.useState({show:!1}),[d,m]=i.useState(!1),[e,f]=a(j),l=g(S),[t,x]=a(k);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:c,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(u,{setSnackbar:o}):s.jsx(w,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:r,formFields:l,webHooks:t,setWebHooks:x,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>h({flow:e,setFlow:f,allIntegURL:n,conf:t,edit:1,setIsLoading:m,setSnackbar:o}),isLoading:d}),s.jsx("br",{})]})}export{H as default};
