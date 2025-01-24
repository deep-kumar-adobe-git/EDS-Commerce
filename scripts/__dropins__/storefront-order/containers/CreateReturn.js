/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as r,jsxs as N}from"@dropins/tools/preact-jsx-runtime.js";import{classes as B,Slot as H}from"@dropins/tools/lib.js";import{Icon as $,Header as W,InLineAlert as j,Button as M,Checkbox as G,CartItem as V,Image as Z}from"@dropins/tools/components.js";import{useState as w,useRef as D,useEffect as P,useCallback as F}from"@dropins/tools/preact-hooks.js";import{u as U,a as z}from"../chunks/ShippingStatusCard.js";import*as _ from"@dropins/tools/preact-compat.js";import{u as J}from"../chunks/useGetStoreConfig.js";import{createRef as K,Fragment as X}from"@dropins/tools/preact.js";import{s as Y,p as I,r as ee,m as te}from"../chunks/returnOrdersHelper.js";import{events as ne}from"@dropins/tools/event-bus.js";import{g as A}from"../chunks/getQueryParam.js";import{g as re,r as se,a as ae}from"../chunks/requestGuestReturn.js";import{s as ie}from"../chunks/setTaxStatus.js";import{S as ce,C as ue}from"../chunks/CartSummaryItem.js";import{a as oe}from"../chunks/OrderLoaders.js";import{useText as le}from"@dropins/tools/i18n.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/getFormValues.js";import"../chunks/network-error.js";import"../chunks/transform-attributes-form.js";import"../fragments.js";import"../chunks/initialize.js";const de=a=>_.createElement("svg",{id:"Icon_Warning_Base",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},_.createElement("g",{clipPath:"url(#clip0_841_1324)"},_.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.9949 2.30237L0.802734 21.6977H23.1977L11.9949 2.30237Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),_.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M12.4336 10.5504L12.3373 14.4766H11.6632L11.5669 10.5504V9.51273H12.4336V10.5504ZM11.5883 18.2636V17.2687H12.4229V18.2636H11.5883Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),_.createElement("defs",null,_.createElement("clipPath",{id:"clip0_841_1324"},_.createElement("rect",{width:24,height:21,fill:"white",transform:"translate(0 1.5)"})))),pe=a=>_.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},_.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),_.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),me=({onSuccess:a,onError:s,handleSetInLineAlert:i,orderData:l})=>{const[k,L]=w(!1),[o,R]=w({id:"",email:"",...l}),[v,x]=w("products"),[h,d]=w(!0),[g,f]=w([]),[C,t]=w([]),[m,e]=w([]),c=D([]);c.current.length!==g.length&&(c.current=g.map((n,p)=>c.current[p]||K())),P(()=>{const n=ne.on("order/data",p=>{var u;R(p);const O=Y(p);e(O),L(((u=A("orderRef"))==null?void 0:u.length)>20),d(!1)},{eager:!0});return()=>{n==null||n.off()}},[]),P(()=>{re("RMA_ITEM").then(n=>{n!=null&&n.length&&(t(n),d(!1))})},[]);const y=F(n=>{f(p=>p.findIndex(u=>(u==null?void 0:u.productSku)===(n==null?void 0:n.productSku))>-1?p.filter(u=>(u==null?void 0:u.productSku)!==(n==null?void 0:n.productSku)):[...p,n])},[]),S=F(n=>{x(n),i(),n==="products"&&f([])},[i]),E=F((n,p)=>{const O=g.map(u=>u.productSku===p?{...u,currentReturnOrderQuantity:n}:u);f(O)},[g]),Q=F(async(n,p)=>{if(!p)return;d(!0);const O={orderUid:o.id,contactEmail:o.email},u=I(c);k?ae({token:A("orderRef"),contactEmail:O.contactEmail,items:u,commentText:"."}).then(b=>{a==null||a(b),S("success"),i()}).catch(b=>{s==null||s(b.message),i({type:"error",heading:b.message})}):se({...O,items:u}).then(b=>{a==null||a(b),S("success"),i()}).catch(b=>{s==null||s(b.message),i({type:"error",heading:b.message})}),d(!1)},[S,s,a,i,o,k]);return{order:o,steps:v,loading:h,formsRef:c,attributesList:C,selectedProductList:g,itemsEligibleForReturn:m,handleSelectedProductList:y,handleSetQuantity:E,handleChangeStep:S,onSubmit:Q}},he={success:pe,warning:de,error:ce},ge=()=>{const[a,s]=w({type:"success",heading:""}),i=F(l=>{if(!(l!=null&&l.type)){s({type:"success",heading:""});return}const k=r($,{source:he[l.type]});s({...l,icon:k})},[]);return{inLineAlertProps:a,handleSetInLineAlert:i}},je=({className:a,orderData:s,slots:i,onSuccess:l,onError:k,routeReturnSuccess:L,showConfigurableOptions:o})=>{const R=le({headerText:"Order.CreateReturn.headerText",successTitle:"Order.CreateReturn.success.title",successMessage:"Order.CreateReturn.success.message",sender:"Order.CreateReturn.giftCard.sender",recipient:"Order.CreateReturn.giftCard.recipient",message:"Order.CreateReturn.giftCard.message",outOfStock:"Order.CreateReturn.stockStatus.outOfStock",nextStep:"Order.CreateReturn.buttons.nextStep",backStep:"Order.CreateReturn.buttons.backStep",submit:"Order.CreateReturn.buttons.submit",backStore:"Order.CreateReturn.buttons.backStore",downloadableCount:"Order.CreateReturn.downloadableCount",returnedItems:"Order.CreateReturn.returnedItems",configurationsListQuantity:"Order.CreateReturn.configurationsList.quantity"}),{inLineAlertProps:v,handleSetInLineAlert:x}=ge(),h=J(),{order:d,itemsEligibleForReturn:g,formsRef:f,attributesList:C,steps:t,loading:m,selectedProductList:e,handleSelectedProductList:c,handleSetQuantity:y,handleChangeStep:S,onSubmit:E}=me({orderData:s,onSuccess:l,onError:k,handleSetInLineAlert:x});if(m)return r("div",{children:r(oe,{})});if(!m&&!C.length)return r("div",{});const Q=(h==null?void 0:h.baseMediaUrl)??"",n={products:r(be,{itemsEligibleForReturn:g,placeholderImage:Q,taxConfig:ie((h==null?void 0:h.shoppingCartDisplayPrice)??0),slots:i,translations:R,loading:m,selectedProductList:e,handleSelectedProductList:c,showConfigurableOptions:o,handleSetQuantity:y,handleChangeStep:S}),attributes:r(ke,{placeholderImage:Q,slots:i,formsRef:f,loading:m,fieldsConfig:C,selectedProductList:e,handleChangeStep:S,translations:R,onSubmit:E}),success:r(fe,{translations:R,routeReturnSuccess:L,orderData:d}),error:null};return N("div",{className:B(["order-create-return",a]),children:[r(W,{title:R.headerText}),v.heading?r(j,{className:"order-create-return_notification",variant:"secondary","data-testid":"orderCreateReturnNotification",...v}):null,n[t]]})},fe=({routeReturnSuccess:a,translations:s,orderData:i})=>N("div",{className:"order-return-order-message",children:[r("p",{className:"order-return-order-message__title",children:s.successTitle}),r("p",{className:"order-return-order-message__subtitle",children:s.successMessage}),r(M,{href:(a==null?void 0:a(i))??"#",children:s.backStore})]}),be=({placeholderImage:a,itemsEligibleForReturn:s,slots:i,loading:l,taxConfig:k,translations:L,selectedProductList:o,handleSelectedProductList:R,showConfigurableOptions:v,handleSetQuantity:x,handleChangeStep:h})=>N("ul",{className:"order-return-order-product-list",children:[s==null?void 0:s.map((d,g)=>{const{quantityReturnRequested:f,quantityShipped:C,eligibleForReturn:t}=d,m=o.some(y=>(y==null?void 0:y.productSku)===d.productSku&&d.eligibleForReturn),e=C===f&&t||!t,c=C-f===0?f:C-f;return N("li",{className:B(["order-return-order-product-list__item",["order-return-order-product-list__item--blur",e]]),children:[r(G,{"data-testid":`key_${g}`,name:`key_${g}`,checked:m,disabled:e,onChange:()=>{R({...d,currentReturnOrderQuantity:1})}}),r(ue,{placeholderImage:a,loading:l,product:{...d,totalQuantity:c||1},itemType:"",taxConfig:k,translations:L,showConfigurableOptions:v,disabledIncrementer:!m,onQuantity:c>1?y=>{x(y,d.productSku)}:void 0}),r(H,{"data-testid":"returnOrderItem",name:"ReturnOrderItem",slot:i==null?void 0:i.ReturnOrderItem})]},d.id)}),r("li",{className:"order-return-order-product-list__item",children:r(M,{type:"button",onClick:()=>h("attributes"),disabled:!o.length,children:L.nextStep})})]}),ke=({placeholderImage:a,slots:s,formsRef:i,selectedProductList:l,loading:k,fieldsConfig:L,translations:o,handleChangeStep:R,onSubmit:v})=>{const{formData:x,errors:h,formRef:d,handleChange:g,handleBlur:f,handleSubmit:C}=U({fieldsConfig:ee(L,l==null?void 0:l.length),onSubmit:v});return N("form",{className:"order-return-reason-form",ref:d,onSubmit:C,name:"returnReasonForm",children:[l.map((t,m)=>{var p,O,u,b,T,q;const e=t==null?void 0:t.giftCard,c=t==null?void 0:t.product,y=te(L,m),S=`${t==null?void 0:t.id}_${m}`,E=(t==null?void 0:t.currentReturnOrderQuantity)??1,Q={...t!=null&&t.currentReturnOrderQuantity?{[o.configurationsListQuantity]:E}:{},...t.configurableOptions||{},...t.bundleOptions||{},...e!=null&&e.senderName?{[o.sender]:e==null?void 0:e.senderName}:{},...e!=null&&e.senderEmail?{[o.sender]:e==null?void 0:e.senderEmail}:{},...e!=null&&e.recipientName?{[o.recipient]:e==null?void 0:e.recipientName}:{},...e!=null&&e.recipientEmail?{[o.recipient]:e==null?void 0:e.recipientEmail}:{},...e!=null&&e.message?{[o.message]:e==null?void 0:e.message}:{},...t!=null&&t.downloadableLinks?{[`${(p=t==null?void 0:t.downloadableLinks)==null?void 0:p.count} ${o.downloadableCount}`]:(O=t==null?void 0:t.downloadableLinks)==null?void 0:O.result}:{}},n=(b=(u=c==null?void 0:c.thumbnail)==null?void 0:u.url)!=null&&b.length?c.thumbnail.url:a;return N(X,{children:[r(V,{loading:k,title:r("div",{"data-testid":"product-name",children:(T=t==null?void 0:t.product)==null?void 0:T.name}),sku:r("div",{children:c==null?void 0:c.sku}),image:r(Z,{src:n,alt:((q=c==null?void 0:c.thumbnail)==null?void 0:q.label)??"",loading:"lazy",width:"90",height:"120"}),configurations:Q}),r("form",{name:S,ref:i==null?void 0:i.current[m],"data-quantity":E,children:r(z,{className:"className",loading:k,fields:y,onChange:g,onBlur:f,errors:h,values:x})})]},t.id)}),r(H,{"data-testid":"returnFormActions",name:"ReturnFormActions",slot:s==null?void 0:s.ReturnFormActions,context:{handleChangeStep:R},children:N("div",{className:"order-return-reason-form__actions",children:[r(M,{variant:"secondary",type:"button",onClick:()=>{R("products")},children:o.backStep}),r(M,{children:o.submit})]})})]})};export{je as CreateReturn,je as default};
