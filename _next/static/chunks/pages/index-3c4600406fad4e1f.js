(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8729)}])},8729:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var s=t(5893),r=t(8583),l=t(7294),a=t(8239),i=t(23),o=t.n(i),u=()=>{let[e,n]=(0,l.useState)(new Date);(0,l.useEffect)(()=>{let e=setInterval(()=>{n(new Date)},6e4);return()=>clearInterval(e)},[]);let t="".concat(e.toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"})," - ").concat(e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}));return(0,s.jsxs)("div",{className:o().headerContainer,children:[(0,s.jsx)("div",{className:o().headerLine}),(0,s.jsxs)("h1",{className:o().headerTitle,children:["GPT",(0,s.jsx)("span",{className:o().yellowText,children:"N"}),"EWS"]}),(0,s.jsx)("div",{className:o().dateTime,children:t}),(0,s.jsx)("div",{className:o().headerLine})]})},c=t(6462),d=t.n(c),_=e=>{let{title:n,subtitle:t,body:r,video:a}=e,i=(0,l.useRef)(null),o=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=()=>{let e=i.current,n=o.current;if(!e||!n)return;let t=.8*n.offsetWidth,s=parseFloat(window.getComputedStyle(e).fontSize);if(e.offsetWidth>t){let n=t/e.offsetWidth;e.style.fontSize="".concat(s*n,"px")}else if(e.offsetWidth<t){let n=t/e.offsetWidth;e.style.fontSize="".concat(s*n,"px")}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[n]),(0,s.jsx)("div",{className:d().centerContainer,children:(0,s.jsxs)("div",{className:d().newsContainer,ref:o,children:[(0,s.jsx)("h1",{className:d().newsTitle,ref:i,children:n}),(0,s.jsx)("h2",{className:d().newsSubtitle,children:t}),(0,s.jsx)("p",{className:d().newsBody,children:r}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})})},h=t(1442),w=t.n(h),f=e=>{let{value:n,onChange:t,onSubmit:r}=e;return(0,s.jsxs)("div",{className:w().newsInputContainer,children:[(0,s.jsx)("input",{type:"text",value:n,onChange:t,placeholder:"正確な知りたいニュースの話題名を入れてください",className:w().inputStyle}),(0,s.jsx)("button",{onClick:r,className:w().buttonStyle,children:"送信"})]})},p=t(3376),x=t(5371),m=t(2729),N=t.n(m),S=()=>{let[e]=(0,r.KO)(x.L),[n,t]=(0,l.useState)(""),[i,o]=(0,l.useState)(null),[c,d]=(0,l.useState)(null),[h,w]=(0,l.useState)(null),[m,S]=(0,l.useState)(null);if(!e)return(0,s.jsx)(a.g,{visible:!0});let y=async()=>{console.log("押した"),d(null),w(null),o(null);try{let e=await p.x.gpt.$post({body:{name:n}});d(e.title),w(e.subtitle),o(e.body),S(e.video),console.log(e)}catch(e){e.response?(console.error("Error data:",e.response.data),console.error("Error status:",e.response.status)):null!==e.request&&void 0!==e.request?console.error("No response from server:",e.request):console.error("Error:",e.message)}};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:N().container,children:[(0,s.jsx)(u,{}),(0,s.jsx)(f,{value:n,onChange:e=>{t(e.target.value)},onSubmit:y}),null!==i&&null!==c&&null!==h&&null!==m&&(0,s.jsx)(_,{title:c,subtitle:h,body:i,video:m})]})})}},23:function(e){e.exports={headerContainer:"Header_headerContainer__GBWLB",dateTime:"Header_dateTime__ulunl",headerLine:"Header_headerLine__tYu1Q",headerTitle:"Header_headerTitle__XkMB_",yellowText:"Header_yellowText__EaQ6H"}},6462:function(e){e.exports={newsContainer:"news_newsContainer__2Oae3",centerContainer:"news_centerContainer__tK75t",newsTitle:"news_newsTitle__B4y6a",newsSubtitle:"news_newsSubtitle__0e_uB",newsBody:"news_newsBody__hBcMK"}},1442:function(e){e.exports={newsInputContainer:"NewsInput_newsInputContainer__OOhXd",inputStyle:"NewsInput_inputStyle__e9rOB",buttonStyle:"NewsInput_buttonStyle__9uBq3"}},2729:function(e){e.exports={container:"index_container___q52_",responseContainer:"index_responseContainer__sNuwe"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);