import{r as l,j as m}from"./main-165.js";import{$ as D}from"./bi.422.733.js";function R({label:v,onChange:h,value:s,disabled:I,type:u,textarea:b,className:O,formFields:c}){const p=c?c.filter(e=>e.label!==void 0).map(e=>({name:e.label,value:e.name})):[],f=l.useRef(null),t=l.useRef(null);l.useEffect(()=>{const e=f.current;e.value=s,e.setAttribute("value",s),t.current&&t.current.destroy(),t.current=new D(e,y),t.current.DOM.originalInput.value=s,t.current.on("input",x),t.current.on("add",d),t.current.on("remove",T),t.current.on("change",d)},[]);const a=e=>{const i=e.match(/(\${{.*?"value":".*?)"}}/g);let r=e;i&&i.forEach(n=>{const g=n.slice(2,-1),o=JSON.parse(g);r=r.replace(n,`\${${o.value}}`)}),h(r)},x=e=>{const{prefix:i,textContent:r}=e.detail,n=r.slice(-1),o=n==="#"?n:i;o&&(o==="#"&&(t.current.whitelist=p),t.current.dropdown.show()),setTimeout(()=>{a(e.detail.tagify.DOM.originalInput.value)},100)},d=e=>{setTimeout(()=>{a(e.detail.tagify.DOM.originalInput.value)},100)},T=e=>{setTimeout(()=>{a(e.detail.tagify.DOM.originalInput.value)},100)},y={mixTagsInterpolator:["${","}"],mode:"mix",mixMode:{insertAfterTag:" "},pattern:/#/,placeholder:v,tagTextProp:"value",duplicates:!0,whitelist:p,enforceWhitelist:!0,trim:!0,editTags:!1,dropdown:{enabled:0,position:"text",mapValueTo:"value",highlightFirst:!0,searchKeys:["label","value"],closeOnSelect:!0,placeAbove:!1},callbacks:{add:()=>{a(t.current.DOM.originalInput.value)},remove:()=>{a(t.current.DOM.originalInput.value)}}};return m.jsx("div",{children:m.jsx("input",{name:"tagify-inp",type:u===void 0?"text":u,ref:f})})}export{R as T};
