import{u as I,l as j,r as n,j as i}from"./main-165.js";import{_ as e,Z as B,d as T,I as A,s as L,c as M}from"./bi.312.95.js";import{B as O}from"./bi.430.769.js";import{S as _}from"./bi.354.971.js";import{h as w,c as U}from"./bi.982.837.js";import{S as W}from"./bi.754.838.js";import Z from"./bi.655.289.js";import"./bi.953.732.js";import"./bi.422.733.js";import"./bi.40.785.js";function ee({formFields:y,setFlow:p,flow:m,allIntegURL:f}){const k=I(),{formID:u}=j(),[s,o]=n.useState(!1),[r,d]=n.useState(1),[q,l]=n.useState({show:!1}),S=[{key:"LastName",label:e("Last Name","bit-integrations"),required:!0},{key:"FirstName",label:e("First Name","bit-integrations"),required:!1},{key:"Email",label:e("Email","bit-integrations"),required:!1},{key:"Salutation",label:e("Salutation","bit-integrations"),required:!1},{key:"OtherStreet",label:e("Other Street","bit-integrations"),required:!1},{key:"OtherCity",label:e("Other City","bit-integrations"),required:!1},{key:"Title",label:e("Title","bit-integrations"),required:!1},{key:"Department",label:e("Department","bit-integrations"),required:!1},{key:"MailingStreet",label:e("Mailing Street","bit-integrations"),required:!1},{key:"MailingCity",label:e("Mailing City","bit-integrations"),required:!1},{key:"MailingCountry",label:e("Mailing Country","bit-integrations"),required:!1}],C=[{key:"LastName",label:e("Last Name","bit-integrations"),required:!0},{key:"Email",label:e("Email","bit-integrations"),required:!0},{key:"Company",label:e("Company","bit-integrations"),required:!0},{key:"FirstName",label:e("First Name","bit-integrations"),required:!1},{key:"City",label:e("City","bit-integrations"),required:!1},{key:"State",label:e("State","bit-integrations"),required:!1},{key:"Salutation",label:e("Salutation","bit-integrations"),required:!1},{key:"Title",label:e("Title","bit-integrations"),required:!1},{key:"URL",label:e("URL","bit-integrations"),required:!1},{key:"Phone",label:e("Phone","bit-integrations"),required:!1},{key:"Mobile",label:e("Mobile","bit-integrations"),required:!1},{key:"Fax",label:e("Fax","bit-integrations"),required:!1},{key:"Street",label:e("Street","bit-integrations"),required:!1},{key:"PostalCode",label:e("Zip/Postal Code","bit-integrations"),required:!1},{key:"Country",label:e("Country","bit-integrations"),required:!1},{key:"Description",label:e("Description","bit-integrations"),required:!1},{key:"LeadSource",label:e("Lead source","bit-integrations"),required:!1},{key:"Industry",label:e("Industry","bit-integrations"),required:!1},{key:"Rating",label:e("Rating","bit-integrations"),required:!1},{key:"Revenue",label:e("Revenue","bit-integrations"),required:!1},{key:"Employees",label:e("Employees","bit-integrations"),required:!1}],h=[{key:"Name",label:e("Account Name","bit-integrations"),required:!0},{key:"Phone",label:e("Phone","bit-integrations"),required:!1},{key:"BillingStreet",label:e("Billing Street","bit-integrations"),required:!1},{key:"BillingCity",label:e("Billing City","bit-integrations"),required:!1},{key:"BillingState",label:e("Billing State","bit-integrations"),required:!1},{key:"BillingPostalCode",label:e("Billing Postal Code","bit-integrations"),required:!1},{key:"BillingCountry",label:e("Billing Country","bit-integrations"),required:!1},{key:"ShippingStreet",label:e("Shipping Street","bit-integrations"),required:!1},{key:"ShippingCity",label:e("Shipping City","bit-integrations"),required:!1},{key:"ShippingState",label:e("Shipping State","bit-integrations"),required:!1},{key:"ShippingPostalCode",label:e("Shipping Postal Code","bit-integrations"),required:!1},{key:"ShippingCountry",label:e("Shipping Country","bit-integrations"),required:!1},{key:"Website",label:e("Website","bit-integrations"),required:!1},{key:"Industry",label:e("Industry","bit-integrations"),required:!1},{key:"NumberOfEmployees",label:e("Number Of Employees","bit-integrations"),required:!1},{key:"Description",label:e("Description","bit-integrations"),required:!1},{key:"Rating",label:e("Rating","bit-integrations"),required:!1},{key:"Site",label:e("Site","bit-integrations"),required:!1},{key:"CleanStatus",label:e("Clean Status","bit-integrations"),required:!1},{key:"NaicsDesc",label:e("Naics Desc","bit-integrations"),required:!1},{key:"SicDesc",label:e("Sic Desc","bit-integrations"),required:!1},{key:"Fax",label:e("Fax","bit-integrations"),required:!1},{key:"TickerSymbol",label:e("Ticker Symbol","bit-integrations"),required:!1},{key:"AnnualRevenue",label:e("Annual Revenue","bit-integrations"),required:!1}],v=[{key:"Name",label:e("Name","bit-integrations"),required:!0},{key:"Type",label:e("Type","bit-integrations"),required:!1},{key:"Description",label:e("Description","bit-integrations"),required:!1},{key:"Status",label:e("Status","bit-integrations"),required:!1},{key:"StartDate",label:e("StartDate","bit-integrations"),required:!1},{key:"EndDate",label:e("EndDate","bit-integrations"),required:!1},{key:"ExpectedRevenue",label:e("ExpectedRevenue","bit-integrations"),required:!1},{key:"BudgetedCost",label:e("BudgetedCost","bit-integrations"),required:!1},{key:"ActualCost",label:e("ActualCost","bit-integrations"),required:!1}],D=[{label:e("Planned","bit-integrations"),value:"Planned"},{label:e("Received","bit-integrations"),value:"Received"},{label:e("Responded","bit-integrations"),value:"Responded"},{label:e("Sent","bit-integrations"),value:"Sent"}],N=[{key:"Name",label:e("Name","bit-integrations"),required:!0},{key:"CloseDate",label:e("Close Date","bit-integrations"),required:!0},{key:"Description",label:e("Description","bit-integrations"),required:!1},{key:"Amount",label:e("Amount","bit-integrations"),required:!1}],x=[{key:"StartDateTime",label:e("Start Date","bit-integrations"),required:!0},{key:"EndDateTime",label:e("End Date","bit-integrations"),required:!0},{key:"Location",label:e("Location","bit-integrations"),required:!1},{key:"Description",label:e("Description","bit-integrations"),required:!1}],E=[{key:"SuppliedName",label:e("Name","bit-integrations"),required:!0},{key:"SuppliedEmail",label:e("Email","bit-integrations"),required:!1},{key:"SuppliedPhone",label:e("Phone","bit-integrations"),required:!1},{key:"SuppliedCompany",label:e("Company","bit-integrations"),required:!1},{key:"Subject",label:e("Subject","bit-integrations"),required:!1},{key:"Description",label:e("Description","bit-integrations"),required:!1}],g=[{label:e("Create Contact","bit-integrations"),value:"contact-create"},{label:e("Create lead","bit-integrations"),value:"lead-create"},{label:e("Create Account","bit-integrations"),value:"account-create"},{label:e("Create Campaign","bit-integrations"),value:"campaign-create"},{label:e("Add campaign member","bit-integrations"),value:"add-campaign-member"},{label:e("Create Task","bit-integrations"),value:"task-create"},{label:e("Oportunity Create","bit-integrations"),value:"opportunity-create"},{label:e("Event Create","bit-integrations"),value:"event-create"},{label:e("Create Case","bit-integrations"),value:"case-create"}],[t,b]=n.useState({name:"Salesforce",type:"Salesforce",clientId:"",clientSecret:"",field_map:[{formField:"",selesforceField:""}],selesforceActionModules:g,action_modules:g,contactFields:S,leadFields:C,accountFields:h,campaignFields:v,campaignMemberStatus:D,opportunityFields:N,eventFields:x,caseFields:E,actions:{}});n.useEffect(()=>{window.opener&&B("salesforce")},[]);const F=["contact-create","lead-create","account-create","campaign-create","opportunity-create","event-create","case-create"].includes(t==null?void 0:t.actionName),R=a=>{if(F&&!U(t)){M.error("Please map mandatory fields !");return}d(a)},P=()=>{var a,c;if((t==null?void 0:t.actionName)==="opportunity-create")return!((a=t.actions)!=null&&a.opportunityStageId);if((t==null?void 0:t.actionName)==="event-create")return!((c=t.actions)!=null&&c.eventSubjectId);if((t==null?void 0:t.actionName)==="add-campaign-member")return!t.campaignId};return i.jsxs("div",{children:[i.jsx(T,{snack:q,setSnackbar:l}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(_,{step:3,active:r})}),i.jsx(Z,{formID:u,salesforceConf:t,setSalesforceConf:b,step:r,setStep:d,isLoading:s,setIsLoading:o,setSnackbar:l}),i.jsxs("div",{className:"btcd-stp-page",style:{width:r===2&&900,height:r===2&&"auto"},children:[i.jsx(W,{formID:u,formFields:y,handleInput:a=>w(a,t,b),salesforceConf:t,setSalesforceConf:b,isLoading:s,setIsLoading:o,setSnackbar:l}),i.jsxs("button",{onClick:()=>R(3),disabled:P()||s,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),i.jsx(O,{className:"ml-1 rev-icn"})]})]}),i.jsx(A,{step:r,saveConfig:()=>L({flow:m,setFlow:p,allIntegURL:f,navigate:k,conf:t,setIsLoading:o,setSnackbar:l})})]})}export{ee as default};
