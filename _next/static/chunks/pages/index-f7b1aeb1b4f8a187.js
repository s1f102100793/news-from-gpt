(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5236)}])},5236:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var s=n(5893),l=n(8239),r=n(7294),a=n(1442),i=n.n(a),o=e=>{let{value:t,onChange:n,onSubmit:l,onReset:r}=e;return(0,s.jsxs)("div",{className:i().newsInputContainer,children:[(0,s.jsx)("button",{className:i().buttonStyle,onClick:r,children:"TOPへ"}),(0,s.jsxs)("div",{className:i().rightContainer,children:[(0,s.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"正確な知りたいニュースの話題名を入れてください",className:i().inputStyle}),(0,s.jsx)("button",{onClick:l,className:i().buttonStyle,children:"作成"})]})]})},u=n(23),c=n.n(u),d=e=>{let{value:t,onChange:n,onSubmit:l,onReset:a}=e,[i,u]=(0,r.useState)(new Date);(0,r.useEffect)(()=>{let e=setInterval(()=>{u(new Date)},6e4);return()=>clearInterval(e)},[]);let d="".concat(i.toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"})," - ").concat(i.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}));return(0,s.jsxs)("div",{className:c().headerContainer,children:[(0,s.jsx)("div",{className:c().headerLine}),(0,s.jsxs)("h1",{className:c().headerTitle,children:["GPT",(0,s.jsx)("span",{className:c().yellowText,children:"N"}),"EWS"]}),(0,s.jsx)("div",{className:c().dateTime,children:d}),(0,s.jsx)("div",{className:c().headerLine}),(0,s.jsx)(o,{value:t,onChange:n,onSubmit:l,onReset:a})]})},_=n(3376),m=n(8618),h=n.n(m),w=e=>{let{onArticleClick:t,selectedName:n,setSelectedName:l}=e,[a,i]=(0,r.useState)([]),o=async()=>{let e=await _.x.news.$get();return e},u=e=>{l(e)},c=e=>{t(e)};(0,r.useEffect)(()=>{let e=async()=>{let e=await o();i(e)},t=setInterval(e,100);return()=>clearInterval(t)},[]);let d=(e=>{let t=new Map;return e.forEach(e=>{let n=t.get(e.name);"number"==typeof n?t.set(e.name,n+1):t.set(e.name,1)}),t})(a);return(0,s.jsxs)("div",{className:h().container,children:[null===n&&Array.from(d.entries()).map(e=>{let[t,n]=e;return(0,s.jsxs)("div",{onClick:()=>u(t),className:h().nameItem,children:[t," (",n,")"]},t)}),null!==n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{onClick:()=>u(n),className:h().nameItem,children:[n," (",d.get(n),")"]}),(0,s.jsx)("ul",{className:h().nameList,children:a.filter(e=>e.name===n).map((e,t)=>(0,s.jsxs)("li",{onClick:()=>c(e),children:[(0,s.jsx)("div",{className:h().title,children:e.title}),(0,s.jsx)("div",{className:h().subtitle,children:e.subtitle})]},t))})]})]})},v=n(6462),x=n.n(v),f=e=>{let{title:t,subtitle:n,body:l,video:a}=e,i=(0,r.useRef)(null),o=(0,r.useRef)(null),[u,c]=(0,r.useState)(""),[d,_]=(0,r.useState)("title"),[m,h]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=()=>{switch(d){case"title":return t;case"subtitle":return n;case"body":return l;case"video":return _("complete"),"";default:return""}},s=setInterval(()=>{let t=e();if("video"===d){clearInterval(s);return}if(m<t.length)c(e=>e+t[m]),h(e=>e+1);else{switch(clearInterval(s),d){case"title":_("subtitle");break;case"subtitle":_("body");break;case"body":_("video")}c(""),h(0)}},50);return()=>clearInterval(s)},[t,n,l,d,m]),(0,r.useEffect)(()=>{let e=(e,t,n,s)=>Math.min(e*(t/n),s),t=()=>{let t=i.current,n=o.current;if(!t||!n)return;let s=.8*n.offsetWidth,l=parseFloat(window.getComputedStyle(t).fontSize);if(t.offsetWidth!==s){let r=e(l,s,t.offsetWidth,36);t.style.fontSize="".concat(r,"px"),n.style.setProperty("--dynamic-title-font-size","".concat(r,"px"))}};return"title"===d&&t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[t,u,d]),(0,s.jsxs)("div",{className:x().newsContainer,ref:o,children:[(0,s.jsx)("h1",{className:x().newsTitle,ref:i,children:"title"===d?u:t}),(0,s.jsx)("h2",{className:x().newsSubtitle,children:"subtitle"===d?u:"title"!==d?n:""}),(0,s.jsx)("p",{className:x().newsBody,children:"body"===d?u:"video"===d||"complete"===d?l:""}),(0,s.jsx)("div",{className:x().videoContainer,children:"complete"===d&&(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})})]})};let p=()=>{let[e,t]=(0,r.useState)(null);return{selectedName:e,setSelectedName:t,resetSelectedName:()=>{t(null)}}};var y=n(8583),N=n(5371);let b=()=>{let[e]=(0,y.KO)(N.L),[t,n]=(0,r.useState)(""),[s,l]=(0,r.useState)(null),[a,i]=(0,r.useState)(null),[o,u]=(0,r.useState)(null),[c,d]=(0,r.useState)(null);return{user:e,inputValue:t,setInputValue:n,responsebody:s,setResponsebody:l,responsetitle:a,setResponsetitle:i,responsesubtitle:o,setResponsesubtitle:u,responsevideo:c,setResponsevideo:d}};var j=n(2729),S=n.n(j),C=()=>{let{user:e,inputValue:t,setInputValue:n,responsebody:r,setResponsebody:a,responsetitle:i,setResponsetitle:o,responsesubtitle:u,setResponsesubtitle:c,responsevideo:m,setResponsevideo:h}=b(),{selectedName:v,setSelectedName:x,resetSelectedName:y}=p();if(!e)return(0,s.jsx)(l.g,{visible:!0});let N=async()=>{o(null),c(null),a(null),y()},j=async()=>{console.log("押した"),o(null),c(null),a(null);try{let e=await _.x.gpt.$post({body:{name:t}});o(e.title),c(e.subtitle),a(e.body),h(e.video),console.log(e)}catch(e){e.response?(console.error("Error data:",e.response.data),console.error("Error status:",e.response.status)):null!==e.request&&void 0!==e.request?console.error("No response from server:",e.request):console.error("Error:",e.message)}};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:S().container,children:[(0,s.jsx)(d,{value:t,onChange:e=>{n(e.target.value)},onSubmit:j,onReset:N}),null!==i&&null!==u&&null!==r&&null!==m?(0,s.jsx)(f,{title:i,subtitle:u,body:r,video:m}):(0,s.jsx)(w,{onArticleClick:e=>{o(e.title),c(e.subtitle),a(e.body),h(e.video)},selectedName:v,setSelectedName:x})]})})}},23:function(e){e.exports={headerContainer:"Header_headerContainer__GBWLB",dateTime:"Header_dateTime__ulunl",headerLine:"Header_headerLine__tYu1Q",headerTitle:"Header_headerTitle__XkMB_",yellowText:"Header_yellowText__EaQ6H"}},8618:function(e){e.exports={container:"namelist_container__3boGF",nameItem:"namelist_nameItem__GLKOm",selected:"namelist_selected__7RYsE",nameList:"namelist_nameList__jgLcv",title:"namelist_title__y_4MH",subtitle:"namelist_subtitle__NY3Gw"}},6462:function(e){e.exports={newsContainer:"news_newsContainer__2Oae3",newsTitle:"news_newsTitle__B4y6a",newsSubtitle:"news_newsSubtitle__0e_uB",newsBody:"news_newsBody__hBcMK",videoContainer:"news_videoContainer__c7y5i"}},1442:function(e){e.exports={newsInputContainer:"NewsInput_newsInputContainer__OOhXd",inputStyle:"NewsInput_inputStyle__e9rOB",buttonStyle:"NewsInput_buttonStyle__9uBq3",rightContainer:"NewsInput_rightContainer__JtMGj"}},2729:function(e){e.exports={container:"index_container___q52_",responseContainer:"index_responseContainer__sNuwe"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);