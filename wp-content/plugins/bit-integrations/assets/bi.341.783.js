var y=Object.defineProperty;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,l=(e,t)=>{for(var a in t||(t={}))S.call(t,a)&&f(e,a,t[a]);if(b)for(var a of b(t))$.call(t,a)&&f(e,a,t[a]);return e};import{_ as o,c as d,b as C}from"./bi.312.95.js";const w=(e,t,a)=>{const r=l({},t),{name:s}=e.target;e.target.value!==""?r[s]=e.target.value:delete r[s],a(l({},r))},v=e=>!((e?e.filter(a=>!a.formField||!a.googleCalendarFormField):[]).length>0),F=(e,t,a)=>{const r={flowID:e!=null?e:null,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},s=C(r,"googleCalendar_get_all_lists").then(n=>{if(n&&n.success){const i=l({},t);return n.data.googleCalendarLists&&(i.calendarLists=n.data.googleCalendarLists,i.tokenDetails=n.data.tokenDetails),a(i),o("Google Calendar List refreshed successfully","bit-integrations")}else return o("Google Calendar List refresh failed. please try again","bit-integrations")});d.promise(s,{success:n=>n,error:o("Error Occurred","bit-integrations"),loading:o("Loading Google Calendar List...","bit-integrations")})},L=(e,t,a,r,s)=>{if(!e.clientId||!e.clientSecret){s({clientId:e.clientId?"":o("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":o("Client Secret can't be empty","bit-integrations")});return}r(!0);const i=`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/calendar&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}&client_id=${e.clientId}`,g=window.open(i,"googleCalendar","width=400,height=609,toolbar=off"),_=setInterval(()=>{if(g.closed){clearInterval(_);let c={},h=!1;const p=localStorage.getItem("__googleCalendar");if(p&&(h=!0,c=JSON.parse(p),localStorage.removeItem("__googleCalendar")),!c.code||c.error||!c||!h){const u=c.error?`Cause: ${c.error}`:"";d.error(`${o("Authorization Failed","bit-integrations")} ${u}. ${o("please try again","bit-integrations")}`),r(!1)}else{const u=l({},e);u.accountServer=c["accounts-server"],k(c,u,t,a,r)}}},500)},k=(e,t,a,r,s)=>{const n=l({},e);n.clientId=t.clientId,n.clientSecret=t.clientSecret,n.redirectURI=`${btcbi.api.base}/redirect`,C(n,"googleCalendar_authorization").then(i=>{if(i&&i.success){const g=l({},t);g.tokenDetails=i.data,a(g),r(!0),d.success(o("Authorized Successfully","bit-integrations"))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?d.error(`${o("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${o("please try again","bit-integrations")}`):d.error(o("Authorization failed. please try again","bit-integrations"));s(!1)})};export{L as a,v as c,F as g,w as h};
