var b=Object.defineProperty;var c=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(e,s,t)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,d=(e,s)=>{for(var t in s||(s={}))u.call(s,t)&&i(e,t,s[t]);if(c)for(var t of c(s))x.call(s,t)&&i(e,t,s[t]);return e};import{j as n}from"./main-165.js";import{_ as r,L as p,X as h}from"./bi.312.95.js";function y({onclick:e,nextPage:s,auth:t,loading:l}){return n.jsxs("div",{className:"w-6 d-flx flx-between ",children:[n.jsxs("button",{onClick:e,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:t||l,children:[t?r("Authorized ✔"):r("Authorize"),l&&n.jsx(p,{size:"20",clr:"#022217",className:"ml-2"})]}),n.jsx("br",{}),n.jsxs("button",{onClick:s,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:!t,children:[r("Next"),n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})}function k({error:e}){return e?n.jsx("div",{className:"mt-1 mb-2 error-msg",children:e}):""}function v({url:e,info:s}){return n.jsxs("small",{className:"d-blk mt-1",children:[r(`${s||""}`),n.jsx("a",{className:"btcd-link",href:e,target:"_blank",rel:"noreferrer",children:r("here.")})]})}function g({label:e,name:s,placeholder:t,onchange:l,value:m,disabled:o,copytext:a}){return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"my-1",children:n.jsx("b",{children:r(`${e||""}`)})}),a?n.jsx(h,{value:`${a}`,toastShow:!0,className:"field-key-cpy w-6 ml-0"}):n.jsx("input",{className:"btcd-paper-inp w-6 my-1 mx-0",onChange:l,name:s,value:m,type:"text",placeholder:r(`${t||""}`),disabled:o})]})}function w(e){const{style:s,step:t,stepNo:l}=e;return n.jsx("div",{className:"btcd-stp-page mt-2",style:d({},t===l&&s),children:e.children})}export{y as A,k as E,v as G,g as I,w as S};
