(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9185)}])},9185:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(5893),s=n(8239),l=n(7294),a=n(1442),i=n.n(a),o=e=>{let{value:t,onChange:n,onSubmit:s,onReset:l}=e;return(0,r.jsxs)("div",{className:i().newsInputContainer,children:[(0,r.jsx)("button",{className:i().buttonStyle,onClick:l,children:"TOPへ"}),(0,r.jsxs)("div",{className:i().rightContainer,children:[(0,r.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"正確な知りたいニュースの話題名を入れてください",className:i().inputStyle}),(0,r.jsx)("button",{onClick:s,className:i().buttonStyle,children:"作成"})]})]})},u=n(23),c=n.n(u),d=e=>{let{value:t,onChange:n,onSubmit:s,onReset:a}=e,[i,u]=(0,l.useState)(new Date);(0,l.useEffect)(()=>{let e=setInterval(()=>{u(new Date)},6e4);return()=>clearInterval(e)},[]);let d="".concat(i.toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"})," - ").concat(i.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}));return(0,r.jsxs)("div",{className:c().headerContainer,children:[(0,r.jsx)("div",{className:c().headerLine}),(0,r.jsxs)("h1",{className:c().headerTitle,children:["GPT",(0,r.jsx)("span",{className:c().yellowText,children:"N"}),"EWS"]}),(0,r.jsx)("div",{className:c().dateTime,children:d}),(0,r.jsx)("div",{className:c().headerLine}),(0,r.jsx)(o,{value:t,onChange:n,onSubmit:s,onReset:a})]})},_=n(3376),h=n(8618),m=n.n(h),x=e=>{var t;let{onArticleClick:n,selectedName:s,setSelectedName:a}=e,[i,o]=(0,l.useState)([]),[u,c]=(0,l.useState)(null),[d,h]=(0,l.useState)(!0),x=async()=>{let e=await _.x.news.$get();return e},p=e=>{a(e)},b=e=>{n(e)};(0,l.useEffect)(()=>{let e=async()=>{let e=await x();o(e)},t=setInterval(e,500);return()=>clearInterval(t)},[]);let f=(e=>{let t=new Map;return e.forEach(e=>{let n=t.get(e.name);"number"==typeof n?t.set(e.name,n+1):t.set(e.name,1)}),t})(i),v=e=>{u===e?h(!d):c(e)},w=e=>e.replace(/[\u30a1-\u30f6]/g,e=>{let t=e.charCodeAt(0)-96;return String.fromCharCode(t)}),C=(e,t)=>{let n=w(e),r=w(t);return n.localeCompare(r)},j=(t=Array.from(f.entries()),"alphabetical"===u?t.sort((e,t)=>d?C(e[0],t[0]):C(t[0],e[0])):"count"===u?t.sort((e,t)=>d?e[1]-t[1]:t[1]-e[1]):t),[g,N]=(0,l.useState)("");return(0,r.jsxs)("div",{className:m().container,children:[(0,r.jsxs)("div",{className:m().buttonAndSearchContainer,children:[(0,r.jsxs)("div",{className:m().buttonContainer,children:[(0,r.jsx)("button",{className:m().button,onClick:()=>v("alphabetical"),children:"あいうえお順"}),(0,r.jsx)("button",{className:m().button,onClick:()=>v("count"),children:"記事数順"})]}),(0,r.jsxs)("div",{className:m().searchContainer,children:[(0,r.jsx)("input",{type:"text",value:g,onChange:e=>{N(e.target.value)},placeholder:"名前を検索",className:m().searchInput}),(0,r.jsx)("button",{onClick:()=>{let e=j.find(e=>{let[t]=e;return t.includes(g)});e&&p(e[0])},className:m().searchButton,children:"検索"})]})]}),null===s&&j.map(e=>{let[t,n]=e;return(0,r.jsxs)("div",{onClick:()=>p(t),className:m().nameItem,children:[t," (",n,")"]},t)}),null!==s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{onClick:()=>p(s),className:m().nameItem,children:[s," (",f.get(s),")"]}),(0,r.jsx)("ul",{className:m().nameList,children:i.filter(e=>e.name===s).map((e,t)=>(0,r.jsxs)("li",{onClick:()=>b(e),children:[(0,r.jsx)("div",{className:m().title,children:e.title}),(0,r.jsx)("div",{className:m().subtitle,children:e.subtitle})]},t))})]})]})};let p=()=>{let e=(0,l.useRef)(null),t=(0,l.useRef)(null),[n,s]=(0,l.useState)(""),[a,i]=(0,l.useState)("title"),[o,u]=(0,l.useState)(0);return{titleRef:e,containerRef:t,currentText:n,setCurrentText:s,displayProgress:a,setDisplayProgress:i,currentIndex:o,setCurrentIndex:u,DisplayText:e=>{let{currentProgress:t,targetProgress:n,current:s,defaultText:l}=e;if(t===n)return(0,r.jsx)(r.Fragment,{children:s});switch(n){case"title":return(0,r.jsx)(r.Fragment,{children:l});case"subtitle":return"title"!==t?(0,r.jsx)(r.Fragment,{children:l}):null;case"body":return"title"!==t&&"subtitle"!==t?(0,r.jsx)(r.Fragment,{children:l}):null;default:return null}},VideoContent:e=>{let{video:t,displayProgress:n}=e;return"complete"===n?(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t}}):null}}};var b=n(6462),f=n.n(b),v=e=>{let{title:t,subtitle:n,body:s,video:a}=e,{titleRef:i,containerRef:o,currentText:u,setCurrentText:c,displayProgress:d,setDisplayProgress:_,currentIndex:h,setCurrentIndex:m,DisplayText:x,VideoContent:b}=p();return(0,l.useEffect)(()=>{let e=()=>{switch(d){case"title":return t;case"subtitle":return n;case"body":return s;case"video":return _("complete"),"";default:return""}},r=e=>{switch(e){case"title":return"subtitle";case"subtitle":return"body";case"body":return"video";default:return"complete"}},l=setInterval(()=>{let t=e();if("video"===d){clearInterval(l);return}h<t.length?(c(e=>e+t[h]),m(e=>e+1)):(clearInterval(l),_(r(d)),c(""),m(0))},50);return()=>clearInterval(l)},[t,n,s,d,h,m,c,_]),(0,l.useEffect)(()=>{let e=(e,t,n,r)=>Math.min(e*(t/n),r),t=()=>{let t=i.current,n=o.current;if(!t||!n)return;let r=.8*n.offsetWidth,s=parseFloat(window.getComputedStyle(t).fontSize);if(t.offsetWidth!==r){let l=e(s,r,t.offsetWidth,36);t.style.fontSize="".concat(l,"px"),n.style.setProperty("--dynamic-title-font-size","".concat(l,"px"))}};return"title"===d&&t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[t,u,d,o,i]),(0,r.jsxs)("div",{className:f().newsContainer,ref:o,children:[(0,r.jsx)("h1",{className:f().newsTitle,ref:i,children:(0,r.jsx)(x,{currentProgress:d,targetProgress:"title",current:u,defaultText:t})}),(0,r.jsx)("h2",{className:f().newsSubtitle,children:(0,r.jsx)(x,{currentProgress:d,targetProgress:"subtitle",current:u,defaultText:n})}),(0,r.jsx)("p",{className:f().newsBody,children:(0,r.jsx)(x,{currentProgress:d,targetProgress:"body",current:u,defaultText:s})}),(0,r.jsx)("div",{className:f().videoContainer,children:(0,r.jsx)(b,{video:a,displayProgress:d})})]})};let w=()=>{let[e,t]=(0,l.useState)(null);return{selectedName:e,setSelectedName:t,resetSelectedName:()=>{t(null)}}};var C=n(8583),j=n(5371);let g=()=>{let[e]=(0,C.KO)(j.L),[t,n]=(0,l.useState)(""),[r,s]=(0,l.useState)(null),[a,i]=(0,l.useState)(null),[o,u]=(0,l.useState)(null),[c,d]=(0,l.useState)(null),h=async()=>{console.log("押した");try{let e=await _.x.gpt.$post({body:{name:t}});i(e.title),u(e.subtitle),s(e.body),d(e.video),console.log(e)}catch(e){e.response?(console.error("Error data:",e.response.data),console.error("Error status:",e.response.status)):null!==e.request&&void 0!==e.request?console.error("No response from server:",e.request):console.error("Error:",e.message)}};return{user:e,inputValue:t,setInputValue:n,responsebody:r,setResponsebody:s,responsetitle:a,setResponsetitle:i,responsesubtitle:o,setResponsesubtitle:u,responsevideo:c,setResponsevideo:d,handleInputChange:e=>{n(e.target.value)},handleArticleClick:e=>{i(e.title),u(e.subtitle),s(e.body),d(e.video)},postBackend:h,shouldRenderNewsComponent:(e,t,n,r)=>null!==e&&null!==t&&null!==n&&null!==r}};var N=n(2729),y=n.n(N),S=()=>{let{user:e,inputValue:t,responsebody:n,setResponsebody:l,responsetitle:a,setResponsetitle:i,responsesubtitle:o,setResponsesubtitle:u,responsevideo:c,handleInputChange:_,handleArticleClick:h,postBackend:m,shouldRenderNewsComponent:p}=g(),{selectedName:b,setSelectedName:f,resetSelectedName:C}=w();if(!e)return(0,r.jsx)(s.g,{visible:!0});let j=async()=>{i(null),u(null),l(null),C()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:y().container,children:[(0,r.jsx)(d,{value:t,onChange:_,onSubmit:m,onReset:j}),p(a,o,n,c)?(0,r.jsx)(v,{title:a,subtitle:o,body:n,video:c}):(0,r.jsx)(x,{onArticleClick:h,selectedName:b,setSelectedName:f})]})})}},23:function(e){e.exports={headerContainer:"Header_headerContainer__GBWLB",dateTime:"Header_dateTime__ulunl",headerLine:"Header_headerLine__tYu1Q",headerTitle:"Header_headerTitle__XkMB_",yellowText:"Header_yellowText__EaQ6H"}},8618:function(e){e.exports={container:"namelist_container__3boGF",buttonAndSearchContainer:"namelist_buttonAndSearchContainer__dLwch",buttonContainer:"namelist_buttonContainer__hKgar",button:"namelist_button__ATMWo",searchContainer:"namelist_searchContainer__Wb58n",searchInput:"namelist_searchInput__8EDQD",searchButton:"namelist_searchButton__CFaAr",nameItem:"namelist_nameItem__GLKOm",selected:"namelist_selected__7RYsE",nameList:"namelist_nameList__jgLcv",title:"namelist_title__y_4MH",subtitle:"namelist_subtitle__NY3Gw"}},6462:function(e){e.exports={newsContainer:"news_newsContainer__2Oae3",newsTitle:"news_newsTitle__B4y6a",newsSubtitle:"news_newsSubtitle__0e_uB",newsBody:"news_newsBody__hBcMK",videoContainer:"news_videoContainer__c7y5i"}},1442:function(e){e.exports={newsInputContainer:"NewsInput_newsInputContainer__OOhXd",inputStyle:"NewsInput_inputStyle__e9rOB",buttonStyle:"NewsInput_buttonStyle__9uBq3",rightContainer:"NewsInput_rightContainer__JtMGj"}},2729:function(e){e.exports={container:"index_container___q52_",responseContainer:"index_responseContainer__sNuwe"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);