(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3278)}])},3278:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var s=t(5893),r=t(8239),l=t(7294),a=t(1442),i=t.n(a),o=e=>{let{value:n,onChange:t,onSubmit:r,onReset:l}=e;return(0,s.jsxs)("div",{className:i().newsInputContainer,children:[(0,s.jsx)("button",{className:i().buttonStyle,onClick:l,children:"TOPへ"}),(0,s.jsxs)("div",{className:i().rightContainer,children:[(0,s.jsx)("input",{type:"text",value:n,onChange:t,placeholder:"正確な知りたいニュースの話題名を入れてください",className:i().inputStyle}),(0,s.jsx)("button",{onClick:r,className:i().buttonStyle,children:"作成"})]})]})},u=t(23),c=t.n(u),d=e=>{let{value:n,onChange:t,onSubmit:r,onReset:a}=e,[i,u]=(0,l.useState)(new Date);(0,l.useEffect)(()=>{let e=setInterval(()=>{u(new Date)},6e4);return()=>clearInterval(e)},[]);let d="".concat(i.toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"})," - ").concat(i.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}));return(0,s.jsxs)("div",{className:c().headerContainer,children:[(0,s.jsx)("div",{className:c().headerLine}),(0,s.jsxs)("h1",{className:c().headerTitle,children:["GPT",(0,s.jsx)("span",{className:c().yellowText,children:"N"}),"EWS"]}),(0,s.jsx)("div",{className:c().dateTime,children:d}),(0,s.jsx)("div",{className:c().headerLine}),(0,s.jsx)(o,{value:n,onChange:t,onSubmit:r,onReset:a})]})},_=t(3376),m=t(8618),h=t.n(m),w=()=>{let[e,n]=(0,l.useState)([]),[t,r]=(0,l.useState)(null),a=async()=>{let e=await _.x.news.$get();return e};(0,l.useEffect)(()=>{let e=async()=>{let e=await a();n(e)},t=setInterval(e,100);return()=>clearInterval(t)},[]);let i=(e=>{let n=new Map;return e.forEach(e=>{let t=n.get(e.name);"number"==typeof t?n.set(e.name,t+1):n.set(e.name,1)}),n})(e);return(0,s.jsxs)("div",{className:h().container,children:[Array.from(i.entries()).map(e=>{let[n,t]=e;return(0,s.jsxs)("div",{onClick:()=>r(n),className:h().nameItem,children:[n," (",t,")"]},n)}),null!==t&&(0,s.jsx)("ul",{className:h().nameList,children:e.filter(e=>e.name===t).map((e,n)=>(0,s.jsxs)("li",{children:[e.title," - ",e.subtitle]},n))})]})},x=t(6462),f=t.n(x),p=e=>{let{title:n,subtitle:t,body:r,video:a}=e,i=(0,l.useRef)(null),o=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=(e,n,t,s)=>Math.min(e*(n/t),s),n=()=>{let n=i.current,t=o.current;if(!n||!t)return;let s=.8*t.offsetWidth,r=parseFloat(window.getComputedStyle(n).fontSize);if(n.offsetWidth!==s){let l=e(r,s,n.offsetWidth,36);n.style.fontSize="".concat(l,"px"),t.style.setProperty("--dynamic-title-font-size","".concat(l,"px"))}};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[n]),(0,s.jsxs)("div",{className:f().newsContainer,ref:o,children:[(0,s.jsx)("h1",{className:f().newsTitle,ref:i,children:n}),(0,s.jsx)("h2",{className:f().newsSubtitle,children:t}),(0,s.jsx)("p",{className:f().newsBody,children:r}),(0,s.jsx)("div",{className:f().videoContainer,dangerouslySetInnerHTML:{__html:a}})]})},y=t(8583),v=t(5371);let N=()=>{let[e]=(0,y.KO)(v.L),[n,t]=(0,l.useState)(""),[s,r]=(0,l.useState)(null),[a,i]=(0,l.useState)(null),[o,u]=(0,l.useState)(null),[c,d]=(0,l.useState)(null);return{user:e,inputValue:n,setInputValue:t,responsebody:s,setResponsebody:r,responsetitle:a,setResponsetitle:i,responsesubtitle:o,setResponsesubtitle:u,responsevideo:c,setResponsevideo:d}};var j=t(2729),S=t.n(j),C=()=>{let{user:e,inputValue:n,setInputValue:t,responsebody:l,setResponsebody:a,responsetitle:i,setResponsetitle:o,responsesubtitle:u,setResponsesubtitle:c,responsevideo:m,setResponsevideo:h}=N();if(!e)return(0,s.jsx)(r.g,{visible:!0});let x=async()=>{o(null),c(null),a(null)},f=async()=>{console.log("押した"),o(null),c(null),a(null);try{let e=await _.x.gpt.$post({body:{name:n}});o(e.title),c(e.subtitle),a(e.body),h(e.video),console.log(e)}catch(e){e.response?(console.error("Error data:",e.response.data),console.error("Error status:",e.response.status)):null!==e.request&&void 0!==e.request?console.error("No response from server:",e.request):console.error("Error:",e.message)}};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:S().container,children:[(0,s.jsx)(d,{value:n,onChange:e=>{t(e.target.value)},onSubmit:f,onReset:x}),null!==i&&null!==u&&null!==l&&null!==m?(0,s.jsx)(p,{title:i,subtitle:u,body:l,video:m}):(0,s.jsx)(w,{})]})})}},23:function(e){e.exports={headerContainer:"Header_headerContainer__GBWLB",dateTime:"Header_dateTime__ulunl",headerLine:"Header_headerLine__tYu1Q",headerTitle:"Header_headerTitle__XkMB_",yellowText:"Header_yellowText__EaQ6H"}},8618:function(e){e.exports={container:"namelist_container__3boGF",nameItem:"namelist_nameItem__GLKOm",nameList:"namelist_nameList__jgLcv"}},6462:function(e){e.exports={newsContainer:"news_newsContainer__2Oae3",newsTitle:"news_newsTitle__B4y6a",newsSubtitle:"news_newsSubtitle__0e_uB",newsBody:"news_newsBody__hBcMK",videoContainer:"news_videoContainer__c7y5i"}},1442:function(e){e.exports={newsInputContainer:"NewsInput_newsInputContainer__OOhXd",inputStyle:"NewsInput_inputStyle__e9rOB",buttonStyle:"NewsInput_buttonStyle__9uBq3",rightContainer:"NewsInput_rightContainer__JtMGj"}},2729:function(e){e.exports={container:"index_container___q52_",responseContainer:"index_responseContainer__sNuwe"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);