var m=Object.defineProperty,k=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var _=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&_(e,t,r[t]);if(F)for(var t of F(r))v.call(r,t)&&_(e,t,r[t]);return e},a=(e,r)=>k(e,p(r));import{_ as n,b,c as f}from"./bi.312.95.js";const w=(e,r,t,u,l,i,c,d)=>{const o=s({},r),{name:h}=e.target;e.target.value!==""?o[h]=e.target.value:delete o[h],t(s({},o))},y=e=>{const r=e==null?void 0:e.mailerLiteFields.filter(t=>t.required===!0);return r.length>0?r.map(t=>({formField:"",mailerLiteFormField:t.key})):[{formField:"",mailerLiteFormField:""}]},A=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.mailerLiteFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),G=(e,r,t,u,l,i,c)=>{if(!e.auth_token){t({auth_token:e.auth_token?"":n("API Key can't be empty","bit-integrations")});return}t({}),i(c==="authorization"?a(s({},l),{auth:!0}):a(s({},l),{field:!0}));const d={auth_token:e.auth_token,version:e.version};b(d,"mailerlite_refresh_fields").then(o=>{if(o&&o.success){const h=s({},e);o.data&&(h.mailerLiteFields=o.data),r(h),u(!0),c==="authorization"?(i(a(s({},l),{auth:!1})),f.success(n("Authorized Successfully","bit-integrations"))):(i(a(s({},l),{field:!1})),f.success(n("Fields refresh successfully","bit-integrations")));return}c==="authorization"?(i(a(s({},l),{auth:!1})),f.error(n("Authorized failed","bit-integrations"))):(i(a(s({},l),{field:!1})),f.error(n("Fields refresh failed","bit-integrations")))})},P=(e,r,t,u)=>{u(a(s({},u),{group:!0}));const l={auth_token:e.auth_token,version:e.version};b(l,"mailerlite_fetch_all_groups").then(i=>{if(i&&i.success){const c=s({},e);i.data&&(c.groups=i.data),r(c),u(a(s({},u),{group:!1})),f.success(n("Group fetch successfully","bit-integrations"));return}u(a(s({},u),{group:!1})),f.error(n("Group fetch failed","bit-integrations"))})};export{P as a,A as c,y as g,w as h,G as m};
