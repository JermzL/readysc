var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(i,e,t)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,b=(i,e)=>{for(var t in e||(e={}))k.call(e,t)&&h(i,t,e[t]);if(g)for(var t of g(e))C.call(e,t)&&h(i,t,e[t]);return i};import{u as F,l as I,r as o,j as a}from"./main-165.js";import{d as _,_ as p,I as w,s as y}from"./bi.312.95.js";import{S as A}from"./bi.354.971.js";import L from"./bi.964.294.js";import{h as E,c as T,a as z}from"./bi.614.846.js";import{P as M}from"./bi.889.847.js";import"./bi.40.785.js";import"./bi.953.732.js";import"./bi.422.733.js";function W({formFields:i,setFlow:e,flow:t,allIntegURL:x}){const D=F(),{formID:u}=I(),[c,n]=o.useState(!1),[d,f]=o.useState(1),[P,r]=o.useState({show:!1}),[v,j]=o.useState(0),[s,l]=o.useState({name:"PipeDrive",type:"PipeDrive",api_key:"",default:{modules:{Leads:{required:!0,requiredFields:["title"],relatedlists:[{name:"Notes"},{name:"Activities"}]},Deals:{required:!0,requiredFields:["title"],relatedlists:[{name:"Notes"},{name:"Activities"}]},Activities:{required:!0},Persons:{required:!0,requiredFields:["name"]},Products:{requiredFields:["name"]},Notes:{required:!0,requiredFields:["content"]}}},moduleData:{module:""},field_map:[{formField:"",pipeDriveFormField:""}],relatedlists:[],actions:{}}),q=()=>{y({flow:t,setFlow:e,allIntegURL:x,conf:s,navigate:D,setIsLoading:n,setSnackbar:r})},N=m=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!T(s)){r({show:!0,msg:p("Please map mandatory fields","bit-integrations")});return}if(!z(s)){["Leads","Deals","Activities","Notes"].includes(s.moduleData.module)&&r({show:!0,msg:p("Please select a organization or a person","bit-integrations")});return}s.moduleData.module&&s.field_map.length>0&&f(m)};return a.jsxs("div",{children:[a.jsx(_,{snack:P,setSnackbar:r}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(A,{step:3,active:d})}),a.jsx(L,{formID:u,pipeDriveConf:s,setPipeDriveConf:l,step:d,setstep:f,isLoading:c,setIsLoading:n,setSnackbar:r}),a.jsxs("div",{className:"btcd-stp-page",style:b({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(M,{tab:v,settab:j,formID:u,formFields:i,handleInput:m=>E(m,v,s,l,u,n,r),pipeDriveConf:s,setPipeDriveConf:l,isLoading:c,setIsLoading:n,setSnackbar:r}),a.jsxs("button",{onClick:()=>N(3),disabled:s.moduleData.module===""||s.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations")," "," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(w,{step:d,saveConfig:()=>q(),isLoading:c,dataConf:s,setDataConf:l,formFields:i})]})}export{W as default};
