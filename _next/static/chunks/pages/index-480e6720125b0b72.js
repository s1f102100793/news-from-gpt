(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8729)}])},8729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var s=n(5893),r=n(8583),l=n(7294),i=n(8239),a=n(23),o=n.n(a),u=()=>{let[e,t]=(0,l.useState)(new Date);(0,l.useEffect)(()=>{let e=setInterval(()=>{t(new Date)},6e4);return()=>clearInterval(e)},[]);let n="".concat(e.toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"})," - ").concat(e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}));return(0,s.jsxs)("div",{className:o().headerContainer,children:[(0,s.jsx)("div",{className:o().headerLine}),(0,s.jsxs)("h1",{className:o().headerTitle,children:["GPT",(0,s.jsx)("span",{className:o().yellowText,children:"N"}),"EWS"]}),(0,s.jsx)("div",{className:o().dateTime,children:n}),(0,s.jsx)("div",{className:o().headerLine})]})},d=n(6462),c=n.n(d),_=e=>{let{title:t,subtitle:n,body:r,video:i}=e,a=(0,l.useRef)(null),o=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=()=>{let e=a.current,t=o.current;if(!e||!t)return;let n=.8*t.offsetWidth,s=parseFloat(window.getComputedStyle(e).fontSize),r=s;if(e.offsetWidth>n){let t=n/e.offsetWidth;r=s*t}else if(e.offsetWidth<n){let t=n/e.offsetWidth;r=s*t}r>36&&(r=36),e.style.fontSize="".concat(r,"px"),null!==t&&r&&t.style.setProperty("--dynamic-title-font-size","".concat(r,"px"))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[t]),(0,s.jsx)("div",{className:c().centerContainer,children:(0,s.jsxs)("div",{className:c().newsContainer,ref:o,children:[(0,s.jsx)("h1",{className:c().newsTitle,ref:a,children:t}),(0,s.jsx)("h2",{className:c().newsSubtitle,children:n}),(0,s.jsx)("p",{className:c().newsBody,children:r}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i},style:{maxWidth:"100%",height:"auto"}})]})})},h=n(1442),w=n.n(h),f=e=>{let{value:t,onChange:n,onSubmit:r}=e;return(0,s.jsxs)("div",{className:w().newsInputContainer,children:[(0,s.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"正確な知りたいニュースの話題名を入れてください",className:w().inputStyle}),(0,s.jsx)("button",{onClick:r,className:w().buttonStyle,children:"送信"})]})},p=n(3376),x=n(5371),m=n(2729),y=n.n(m),N=()=>{let[e]=(0,r.KO)(x.L),[t,n]=(0,l.useState)(""),[a,o]=(0,l.useState)(null),[d,c]=(0,l.useState)(null),[h,w]=(0,l.useState)(null),[m,N]=(0,l.useState)(null);if(!e)return(0,s.jsx)(i.g,{visible:!0});let S=async()=>{console.log("押した"),c(null),w(null),o(null);try{let e=await p.x.gpt.$post({body:{name:t}});c(e.title),w(e.subtitle),o(e.body),N(e.video),console.log(e)}catch(e){e.response?(console.error("Error data:",e.response.data),console.error("Error status:",e.response.status)):null!==e.request&&void 0!==e.request?console.error("No response from server:",e.request):console.error("Error:",e.message)}};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:y().container,children:[(0,s.jsx)(u,{}),(0,s.jsx)(f,{value:t,onChange:e=>{n(e.target.value)},onSubmit:S}),null!==a&&null!==d&&null!==h&&null!==m&&(0,s.jsx)(_,{title:d,subtitle:h,body:a,video:m})]})})}},23:function(e){e.exports={headerContainer:"Header_headerContainer__GBWLB",dateTime:"Header_dateTime__ulunl",headerLine:"Header_headerLine__tYu1Q",headerTitle:"Header_headerTitle__XkMB_",yellowText:"Header_yellowText__EaQ6H"}},6462:function(e){e.exports={newsContainer:"news_newsContainer__2Oae3",centerContainer:"news_centerContainer__tK75t",newsTitle:"news_newsTitle__B4y6a",newsSubtitle:"news_newsSubtitle__0e_uB",newsBody:"news_newsBody__hBcMK"}},1442:function(e){e.exports={newsInputContainer:"NewsInput_newsInputContainer__OOhXd",inputStyle:"NewsInput_inputStyle__e9rOB",buttonStyle:"NewsInput_buttonStyle__9uBq3"}},2729:function(e){e.exports={container:"index_container___q52_",responseContainer:"index_responseContainer__sNuwe"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);