var S=Object.defineProperty;var N=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(l,t,n)=>t in l?S(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,m=(l,t)=>{for(var n in t||(t={}))Z.call(t,n)&&y(l,n,t[n]);if(N)for(var n of N(t))I.call(t,n)&&y(l,n,t[n]);return l};import{r as k,i as _,j as e}from"./main-165.js";import{j as C,_ as i,X as T,Y as D,L as P}from"./bi.312.95.js";import{r as $}from"./bi.341.740.js";import{B}from"./bi.430.769.js";import{T as w,t as U}from"./bi.40.785.js";function q({formID:l,campaignsConf:t,setCampaignsConf:n,step:b,setstep:A,isLoading:u,setIsLoading:x,setSnackbar:a,redirectLocation:E,isInfo:r}){const[d,L]=k.useState(!1),[c,j]=k.useState({dataCenter:"",clientId:"",clientSecret:""}),p=_(C),z="ZohoCampaigns.contact.READ,ZohoCampaigns.contact.CREATE,ZohoCampaigns.contact.UPDATE",{zohoCampaigns:s}=U,R=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),A(2),$(l,t,n,x,a)},o=h=>{const v=m({},t),g=m({},c);g[h.target.name]="",v[h.target.name]=h.target.value,j(g),n(v)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&e.jsx(w,{title:"Zoho Campaigns",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&e.jsx(w,{title:"Zoho Campaigns",docLink:s==null?void 0:s.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:o,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:r,children:[e.jsx("option",{value:"",children:i("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:c.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(T,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:a,readOnly:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(T,{value:E||`${p.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:a,readOnly:r}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:i("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:c.clientSecret}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>D("zohoCampaigns","zcampaigns",z,t,n,j,L,x,a,p),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||u,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),u&&e.jsx(P,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:R,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx(B,{className:"ml-1 rev-icn"})]})]})]})}export{q as default};
