import{u as C,l as I,r as n,j as e}from"./main-165.js";import{_ as i,d as k,I as v,F as S}from"./bi.312.95.js";import{B as y}from"./bi.430.769.js";import{S as N}from"./bi.354.971.js";import _ from"./bi.423.333.js";import{c as M}from"./bi.948.922.js";import{C as w}from"./bi.450.923.js";import"./bi.40.785.js";function D({formFields:m,setFlow:p,flow:g,allIntegURL:u}){const f=C(),{formID:c}=I(),[o,r]=n.useState(!1),[s,d]=n.useState(1),[b,a]=n.useState({show:!1}),x=[{key:"Name",label:i("Name","bit-integrations"),required:!1},{key:"EmailAddress",label:i("Email Address","bit-integrations"),required:!0}],[t,l]=n.useState({name:"CampaignMonitor",type:"CampaignMonitor",client_id:"",api_key:"",field_map:[{formField:"",campaignMonitorField:""}],subscriberFields:x,actions:{}}),h=j=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),j===3){if(!M(t)){a({show:!0,msg:i("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.listId)){a({show:!0,msg:i("Please select list to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&d(3)}};return e.jsxs("div",{children:[e.jsx(k,{snack:b,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(N,{step:3,active:s})}),e.jsx(_,{formID:c,campaignMonitorConf:t,setCampaignMonitorConf:l,step:s,setstep:d,isLoading:o,setIsLoading:r,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:c,formFields:m,campaignMonitorConf:t,setCampaignMonitorConf:l,isLoading:o,setIsLoading:r,setSnackbar:a}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[i("Next","bit-integrations"),"  ",e.jsx(y,{className:"ml-1 rev-icn"})]})]}),e.jsx(v,{step:s,saveConfig:()=>S(g,p,u,t,f,"","",r),isLoading:o,dataConf:t,setDataConf:l,formFields:m})]})}export{D as default};
