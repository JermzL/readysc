var f=Object.defineProperty;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var _=(i,r,s)=>r in i?f(i,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[r]=s,p=(i,r)=>{for(var s in r||(r={}))k.call(r,s)&&_(i,s,r[s]);if(y)for(var s of y(r))w.call(r,s)&&_(i,s,r[s]);return i};import{i as z,j as e,L as M}from"./main-165.js";import{j as R,_ as a,k as T,l as V,T as g}from"./bi.312.95.js";import{r as E,a as L}from"./bi.341.740.js";import{T as S}from"./bi.953.732.js";const $=(i,r,s)=>{const t=p({},r);t.field_map.splice(i,0,{}),s(t)};function Z({i,formFields:r,field:s,campaignsConf:t,setCampaignsConf:d}){var u,n,x,v,N;const m=z(R),{isPro:b}=m,o=s.zohoFormField===""||((u=t.default.fields[t.list].required)==null?void 0:u.indexOf(s.zohoFormField))===-1,j=l=>{const c=p({},t);c.field_map.length>1&&c.field_map.splice(l,1),d(c)},h=(l,c)=>{const F=p({},t);F.field_map[c][l.target.name]=l.target.value,l.target.value==="custom"&&(F.field_map[c].customValue=""),d(F)};return e.jsxs("div",{className:`flx flx-around mt-2 ${o&&"mr-1"}`,children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:l=>h(l,i),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:r.map(l=>l.type!=="file"&&e.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l.name}`))}),e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),b?"":`(${a("Pro","bit-integrations")})`),children:b&&((n=T)==null?void 0:n.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),s.formField==="custom"&&e.jsx(S,{onChange:l=>V(l,i,t,d),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",name:"zohoFormField",value:s.zohoFormField||"",disabled:!o,onChange:l=>h(l,i),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),o?((N=(v=(x=t==null?void 0:t.default)==null?void 0:x.fields)==null?void 0:v[t.list])==null?void 0:N.fields)&&t.default.fields[t.list].fields.map(l=>l!=="Contact Email"&&e.jsx("option",{value:l,children:l},`${l}-1`)):e.jsx("option",{value:"Contact Email",children:a("Contact Email","bit-integrations")},"contact_email")]}),e.jsx("button",{onClick:()=>$(i,t,d),className:`icn-btn sh-sm ml-2 ${!o&&"mr-8"}`,type:"button",children:"+"}),o&&e.jsx("button",{onClick:()=>j(i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(g,{})})]})}function B({formID:i,formFields:r,handleInput:s,campaignsConf:t,setCampaignsConf:d,isLoading:m,setIsLoading:b,setSnackbar:o}){var j,h,u;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("List:","bit-integrations")}),e.jsxs("select",{onChange:n=>s(n),name:"list",value:t.list,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:a("Select List","bit-integrations")}),((j=t==null?void 0:t.default)==null?void 0:j.lists)&&Object.values(t.default.lists).map(n=>e.jsx("option",{value:n.listkey,children:n.listname},n.listkey))]}),e.jsx("button",{onClick:()=>E(i,t,d,b,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Campaigns Lists","bit-integrations")}'`},type:"button",disabled:m,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),m&&e.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.list&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:a("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>L(i,t,d,b,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Campaigns Contact Fields","bit-integrations")}'`},type:"button",disabled:m,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),((u=(h=t.default)==null?void 0:h.fields)==null?void 0:u[t.list])&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),t.field_map.map((n,x)=>e.jsx(Z,{i:x,field:n,campaignsConf:t,formFields:r,setCampaignsConf:d},`campaigns-m-${x+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>$(t.field_map.length,t,d),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})]})}export{B as Z};
