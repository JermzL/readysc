var b=Object.defineProperty;var x=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var p=(i,e,a)=>e in i?b(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,m=(i,e)=>{for(var a in e||(e={}))j.call(e,a)&&p(i,a,e[a]);if(x)for(var a of x(e))u.call(e,a)&&p(i,a,e[a]);return i};import{r as g,j as t,l as v,L as w}from"./main-165.js";import{m as N,_ as l,e as y,n as A}from"./bi.312.95.js";/* empty css          */function M({formFields:i,slackConf:e,setSlackConf:a}){var d;const[o,c]=g.useState({show:!1}),h=n=>{const s=m({},e);n.target.value!==""?s.actions.attachments=n.target.value:delete s.actions.attachments,a(m({},s))};return t.jsxs("div",{className:"pos-rel",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(N,{onChange:()=>c({show:"attachments"}),checked:"attachments"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:l("Attachments","bit-integrations"),subTitle:l("Add attachments from Bit Integrations to send Slack.","bit-integrations")})}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:o.show==="attachments",close:()=>c({show:!1}),action:()=>c({show:!1}),title:l("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select file upload fields","bit-integrations")}),t.jsxs("select",{onChange:n=>h(n),name:"attachments",value:(d=e.actions)==null?void 0:d.attachments,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select file upload field","bit-integrations")}),i.filter(n=>n.type==="file").map(n=>t.jsx("option",{value:n.name,children:n.label},n.name+1))]})]})]})}function I({formFields:i,slackConf:e,setSlackConf:a,isLoading:o}){var d,n;v();const c=s=>{const r=m({},e);r[s.target.name]=s.target.value,a(r)},h=s=>{const r=m({},e);r.body=s,a(r)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Channels List:","bit-integrations")}),t.jsxs("select",{onChange:c,name:"channel_id",value:e.channel_id,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:l("Select Channel List","bit-integrations")}),((d=e==null?void 0:e.tokenDetails)==null?void 0:d.channels)&&((n=e==null?void 0:e.tokenDetails)==null?void 0:n.channels.map(({id:s,name:r})=>t.jsx("option",{value:s,children:r},s)))]})]}),o&&t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.channel_id)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b mr-16",children:l("Messages:","bit-integrations")}),t.jsx("textarea",{className:"w-7",onChange:c,name:"body",rows:"5",value:e.body}),t.jsx(A,{options:i.filter(s=>s.type!=="file").map(s=>({label:s.label,value:`\${${s.name}}`})),className:"btcd-paper-drpdwn wdt-600 ml-2",onChange:s=>h(s)})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(M,{slackConf:e,setSlackConf:a,formFields:i})]})]})}export{I as S};
