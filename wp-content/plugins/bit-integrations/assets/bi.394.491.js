var y=Object.defineProperty;var u=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(e,t,s)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))L.call(t,s)&&f(e,s,t[s]);if(u)for(var s of u(t))S.call(t,s)&&f(e,s,t[s]);return e};import{u as A,r,j as a}from"./main-165.js";import{d as C,_ as I,I as N,s as k}from"./bi.312.95.js";import{S as w}from"./bi.354.971.js";import _ from"./bi.710.345.js";import{A as E,h as T}from"./bi.952.946.js";import"./bi.430.769.js";import"./bi.40.785.js";function $({formFields:e,setFlow:t,flow:s,allIntegURL:g}){const h=A(),[d,n]=r.useState(!1),[o,l]=r.useState(1),[b,i]=r.useState({show:!1}),[c,m]=r.useState({name:"Academy Lms",type:"Academy Lms",field_map:[{formField:"",tutorField:""}],actions:{},actionData:{}}),v=()=>{n(!0),k({flow:s,setFlow:t,allIntegURL:g,conf:c,navigate:h,setIsLoading:n,setSnackbar:i})},j=p=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),l(p)};return a.jsxs("div",{children:[a.jsx(C,{snack:b,setSnackbar:i}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(w,{step:3,active:o})}),a.jsx(_,{academyLmsConf:c,setAcademyLmsConf:m,step:o,setStep:l,isLoading:d,setIsLoading:n,setSnackbar:i}),a.jsxs("div",{className:"btcd-stp-page",style:x({},o===2&&{width:900,height:"auto",minHeight:o===2&&"260px",overflow:"visible"}),children:[a.jsx(E,{formFields:e,handleInput:p=>T(p,c,m,n,i),academyLmsConf:c,setAcademyLmsConf:m,isLoading:d,setIsLoading:n,setSnackbar:i}),a.jsxs("button",{onClick:()=>j(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[I("Next","bit-integrations")," "," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(N,{step:o,saveConfig:()=>v(),isLoading:d,dataConf:c,setDataConf:m,formFields:e})]})}export{$ as default};
