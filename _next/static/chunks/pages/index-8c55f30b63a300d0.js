(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9185)}])},9185:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var s=n(5893),r=n(8239),a=n(7294),l=n(1442),i=n.n(l),o=e=>{let{value:t,onChange:n,onSubmit:r,onReset:a,isLoading:l}=e;return(0,s.jsxs)("div",{className:i().newsInputContainer,children:[(0,s.jsx)("button",{className:i().buttonStyle,onClick:a,children:"TOPへ"}),(0,s.jsxs)("div",{className:i().rightContainer,children:[l&&(0,s.jsx)("div",{className:i().spinner}),(0,s.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"正確なニュースの話題名を入力",className:i().inputStyle}),(0,s.jsx)("button",{onClick:r,className:i().buttonStyle,children:"作成"})]})]})},u=n(23),c=n.n(u),d=e=>{let{value:t,onChange:n,onSubmit:r,onReset:l,isLoading:i}=e,[u,d]=(0,a.useState)(new Date);(0,a.useEffect)(()=>{let e=setInterval(()=>{d(new Date)},6e4);return()=>clearInterval(e)},[]);let _="".concat(u.toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"})," - ").concat(u.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}));return(0,s.jsxs)("div",{className:c().headerContainer,children:[(0,s.jsx)("div",{className:c().headerLine}),(0,s.jsxs)("h1",{className:c().headerTitle,children:["GPT",(0,s.jsx)("span",{className:c().yellowText,children:"N"}),"EWS"]}),(0,s.jsx)("div",{className:c().dateTime,children:_}),(0,s.jsx)("div",{className:c().headerLine}),(0,s.jsx)(o,{value:t,onChange:n,onSubmit:r,onReset:l,isLoading:i})]})},_=n(3376);let m=()=>{var e;let[t,n]=(0,a.useState)(null),[s,r]=(0,a.useState)([]),[l,i]=(0,a.useState)(null),[o,u]=(0,a.useState)(!0),c=async()=>{let e=await _.x.news.$get();return e},d=(e=>{let t=new Map;return e.forEach(e=>{let n=t.get(e.name);"number"==typeof n?t.set(e.name,n+1):t.set(e.name,1)}),t})(s),m=e=>e.replace(/[\u30a1-\u30f6]/g,e=>{let t=e.charCodeAt(0)-96;return String.fromCharCode(t)}),h=(e,t)=>{let n=m(e),s=m(t);return n.localeCompare(s)},x=(e=Array.from(d.entries()),"alphabetical"===l?e.sort((e,t)=>o?h(e[0],t[0]):h(t[0],e[0])):"count"===l?e.sort((e,t)=>o?e[1]-t[1]:t[1]-e[1]):e),[p,w]=(0,a.useState)(""),[b,g]=(0,a.useState)(1),[C,v]=(0,a.useState)("oldest"),f=(0,a.useCallback)(e=>"newest"===C?[...e].sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()):[...e].sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()),[C]);return{selectedName:t,setSelectedName:n,resetSelectedName:()=>{n(null)},newsData:s,setNewsData:r,fetchNews:c,nameCounts:d,toggleSort:e=>{l===e?u(!o):i(e)},sortedNames:x,searchTerm:p,handleSearchChange:e=>{w(e.target.value)},sortOrder:C,sortByDate:f,toggleSortByDate:()=>{v(e=>"newest"===e?"oldest":"newest"),g(1)},setButtonMain:g,buttomMain:b}};var h=n(8618),x=n.n(h),p=e=>{let{onArticleClick:t,selectedName:n,setSelectedName:r}=e,{newsData:l,setNewsData:i,fetchNews:o,nameCounts:u,toggleSort:c,sortedNames:d,searchTerm:_,handleSearchChange:h,sortOrder:p,sortByDate:w,toggleSortByDate:b,setButtonMain:g,buttomMain:C}=m(),v=async e=>{r(e)},f=async e=>{t(e)},j=e=>[...e].sort((e,t)=>t.clickCount-e.clickCount);return(0,a.useEffect)(()=>{let e=async()=>{let e=await o();i(1===C?w(e):j(e))},t=setInterval(e,100);return()=>clearInterval(t)},[o,i,w,C]),(0,s.jsxs)("div",{className:x().container,children:[(0,s.jsxs)("div",{className:x().buttonAndSearchContainer,children:[(0,s.jsx)("div",{className:x().buttonContainer,children:null===n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:x().button,onClick:()=>c("alphabetical"),children:"あいうえお順"}),(0,s.jsx)("button",{className:x().button,onClick:()=>c("count"),children:"記事数順"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:x().button,onClick:b,children:"newest"===p?"古い順":"最新順"}),(0,s.jsx)("button",{className:x().button,onClick:()=>{let e=j(l);i(e),g(0)},children:"クリック数順"})]})}),(0,s.jsxs)("div",{className:x().searchContainer,children:[(0,s.jsx)("input",{type:"text",value:_,onChange:h,placeholder:"名前を検索",className:x().searchInput}),(0,s.jsx)("button",{onClick:()=>{let e=d.find(e=>{let[t]=e;return t.includes(_)});e&&v(e[0])},className:x().searchButton,children:"検索"})]})]}),null===n&&d.map(e=>{let[t,n]=e;return(0,s.jsxs)("div",{onClick:()=>v(t),className:x().nameItem,children:[t," (",n,")"]},t)}),null!==n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{onClick:()=>v(n),className:x().nameItem,children:[n," (",u.get(n),")"]}),(0,s.jsx)("ul",{className:x().nameList,children:l.filter(e=>e.name===n).map((e,t)=>(0,s.jsxs)("li",{onClick:()=>f(e),children:[(0,s.jsx)("div",{className:x().title,children:e.title}),(0,s.jsx)("div",{className:x().subtitle,children:e.subtitle})]},t))})]})]})};let w=()=>{let e=(0,a.useRef)(null),t=(0,a.useRef)(null),[n,r]=(0,a.useState)(""),[l,i]=(0,a.useState)("title"),[o,u]=(0,a.useState)(0);return{titleRef:e,containerRef:t,currentText:n,setCurrentText:r,displayProgress:l,setDisplayProgress:i,currentIndex:o,setCurrentIndex:u,DisplayText:e=>{let{currentProgress:t,targetProgress:n,current:r,defaultText:a}=e;if(t===n)return(0,s.jsx)(s.Fragment,{children:r});switch(n){case"title":return(0,s.jsx)(s.Fragment,{children:a});case"subtitle":return"title"!==t?(0,s.jsx)(s.Fragment,{children:a}):null;case"body":return"title"!==t&&"subtitle"!==t?(0,s.jsx)(s.Fragment,{children:a}):null;default:return null}},VideoContent:e=>{let{video:t,displayProgress:n}=e;return"complete"===n?(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:t}}):null}}};var b=n(6462),g=n.n(b),C=e=>{let{title:t,subtitle:n,body:r,video:l}=e,{titleRef:i,containerRef:o,currentText:u,setCurrentText:c,displayProgress:d,setDisplayProgress:_,currentIndex:m,setCurrentIndex:h,DisplayText:x,VideoContent:p}=w();return(0,a.useEffect)(()=>{let e=()=>{switch(d){case"title":return t;case"subtitle":return n;case"body":return r;case"video":return _("complete"),"";default:return""}},s=e=>{switch(e){case"title":return"subtitle";case"subtitle":return"body";case"body":return"video";default:return"complete"}},a=setInterval(()=>{let t=e();if("video"===d){clearInterval(a);return}m<t.length?(c(e=>e+t[m]),h(e=>e+1)):(clearInterval(a),_(s(d)),c(""),h(0))},50);return()=>clearInterval(a)},[t,n,r,d,m,h,c,_]),(0,a.useEffect)(()=>{let e=(e,t,n,s)=>Math.min(e*(t/n),s),t=()=>{let t=i.current,n=o.current;if(!t||!n)return;let s=.8*n.offsetWidth,r=parseFloat(window.getComputedStyle(t).fontSize);if(t.offsetWidth!==s){let a=e(r,s,t.offsetWidth,36);t.style.fontSize="".concat(a,"px"),n.style.setProperty("--dynamic-title-font-size","".concat(a,"px"))}};return"title"===d&&t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[t,u,d,o,i]),(0,s.jsxs)("div",{className:g().newsContainer,ref:o,children:[(0,s.jsx)("h1",{className:g().newsTitle,ref:i,children:(0,s.jsx)(x,{currentProgress:d,targetProgress:"title",current:u,defaultText:t})}),(0,s.jsx)("h2",{className:g().newsSubtitle,children:(0,s.jsx)(x,{currentProgress:d,targetProgress:"subtitle",current:u,defaultText:n})}),(0,s.jsx)("p",{className:g().newsBody,children:(0,s.jsx)(x,{currentProgress:d,targetProgress:"body",current:u,defaultText:r})}),(0,s.jsx)("div",{className:g().videoContainer,children:(0,s.jsx)(p,{video:l,displayProgress:d})})]})},v=n(8583),f=n(5371);let j=()=>{let[e]=(0,v.KO)(f.L),[t,n]=(0,a.useState)(""),[s,r]=(0,a.useState)(null),[l,i]=(0,a.useState)(null),[o,u]=(0,a.useState)(null),[c,d]=(0,a.useState)(null),[m,h]=(0,a.useState)(!1),x=async e=>{i(e.title),u(e.subtitle),r(e.body),d(e.video);let t=e.clickCount+1;await _.x.news.$post({body:{id:e.id,name:e.name,title:e.title,subtitle:e.subtitle,body:e.body,video:e.video,clickCount:t}})},p=async()=>{console.log("押した");try{let e=await _.x.gpt.$post({body:{name:t}});i(e.title),u(e.subtitle),r(e.body),d(e.video),console.log(e)}catch(e){e.response?(console.error("Error data:",e.response.data),console.error("Error status:",e.response.status)):null!==e.request&&void 0!==e.request?console.error("No response from server:",e.request):console.error("Error:",e.message)}},w=async()=>{h(!0),await p(),h(!1)};return{user:e,inputValue:t,setInputValue:n,responsebody:s,setResponsebody:r,responsetitle:l,setResponsetitle:i,responsesubtitle:o,setResponsesubtitle:u,responsevideo:c,setResponsevideo:d,handleInputChange:e=>{n(e.target.value)},handleArticleClick:x,handleOnSubmit:w,shouldRenderNewsComponent:(e,t,n,s)=>null!==e&&null!==t&&null!==n&&null!==s,isLoading:m}};var y=n(2729),N=n.n(y),S=()=>{let{user:e,inputValue:t,responsebody:n,setResponsebody:a,responsetitle:l,setResponsetitle:i,responsesubtitle:o,setResponsesubtitle:u,responsevideo:c,handleInputChange:_,handleArticleClick:h,handleOnSubmit:x,shouldRenderNewsComponent:w,isLoading:b}=j(),{selectedName:g,setSelectedName:v,resetSelectedName:f}=m();if(!e)return(0,s.jsx)(r.g,{visible:!0});let y=async()=>{i(null),u(null),a(null),f()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:N().container,children:[(0,s.jsx)(d,{value:t,onChange:_,onSubmit:x,onReset:y,isLoading:b}),w(l,o,n,c)?(0,s.jsx)(C,{title:l,subtitle:o,body:n,video:c}):(0,s.jsx)(p,{onArticleClick:h,selectedName:g,setSelectedName:v})]})})}},23:function(e){e.exports={headerContainer:"Header_headerContainer__GBWLB",dateTime:"Header_dateTime__ulunl",headerLine:"Header_headerLine__tYu1Q",headerTitle:"Header_headerTitle__XkMB_",yellowText:"Header_yellowText__EaQ6H"}},8618:function(e){e.exports={container:"namelist_container__3boGF",buttonAndSearchContainer:"namelist_buttonAndSearchContainer__dLwch",buttonContainer:"namelist_buttonContainer__hKgar",button:"namelist_button__ATMWo",searchContainer:"namelist_searchContainer__Wb58n",searchInput:"namelist_searchInput__8EDQD",searchButton:"namelist_searchButton__CFaAr",nameItem:"namelist_nameItem__GLKOm",selected:"namelist_selected__7RYsE",nameList:"namelist_nameList__jgLcv",title:"namelist_title__y_4MH",subtitle:"namelist_subtitle__NY3Gw"}},6462:function(e){e.exports={newsContainer:"news_newsContainer__2Oae3",newsTitle:"news_newsTitle__B4y6a",newsSubtitle:"news_newsSubtitle__0e_uB",newsBody:"news_newsBody__hBcMK",videoContainer:"news_videoContainer__c7y5i"}},1442:function(e){e.exports={newsInputContainer:"NewsInput_newsInputContainer__OOhXd",inputStyle:"NewsInput_inputStyle__e9rOB",buttonStyle:"NewsInput_buttonStyle__9uBq3",rightContainer:"NewsInput_rightContainer__JtMGj",spinner:"NewsInput_spinner__Z2g18",spin:"NewsInput_spin__AqQtS"}},2729:function(e){e.exports={container:"index_container___q52_",responseContainer:"index_responseContainer__sNuwe"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);