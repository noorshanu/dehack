"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[260],{5060:function(e,t){t.Z={src:"/_next/static/media/Grid2.1a4feaaf.svg",height:867,width:1916,blurWidth:0,blurHeight:0}},7106:function(e,t,l){var a=l(5893);l(7294);let s=e=>{let{link:t,text:l,borderWidth:s="2px",hasShadow:n=!1,className:i}=e;return(0,a.jsxs)("div",{className:"relative w-fit mx-auto group "+i,children:[(0,a.jsx)("a",{href:t,style:{borderWidth:s},className:"gradient-border inline-block relative z-10 bg-black p-3 text-[10px] px-10 md:px-14 text-white spacing cursor-pointer sm:text-lg",children:l}),n&&(0,a.jsxs)("div",{className:"flex items-center absolute gradient -top-4 w-full !animate-none -z-2",children:[(0,a.jsx)("div",{className:"green !w-[50%] !h-[80px] group-hover:!h-[100px] group-hover:!w-[120px] transitions !blur-xl"}),(0,a.jsx)("div",{className:"blue !w-[50%] !h-[80px] group-hover:!h-[100px] group-hover:!w-[120px] transitions !blur-xl"})]})]})};t.Z=s},3911:function(e,t,l){var a=l(5893),s=l(7294);t.Z=function(){let[e,t]=(0,s.useState)(""),[l,n]=(0,s.useState)(""),[i,r]=(0,s.useState)({yourName:"",companyName:"",email:"",message:""}),c=e=>{let{name:t,value:l}=e.target;r({...i,[t]:l}),"email"===t&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)?n(""):n("Please enter a valid email address."))},d=async e=>{e.preventDefault();let{yourName:t,companyName:a,email:s,message:n}=i;if(t&&a&&s&&n&&!l){let e=fetch("https://dehack-conatct-default-rtdb.firebaseio.com/userDataRecords.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({yourName:t,companyName:a,email:s,message:n})});e?(r({yourName:"",companyName:"",email:"",message:""}),alert("Thanks for filling the form. We will get back to you in appropriate time.")):alert("Please fill the right information")}else alert("Please fill the right information")};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{className:"flex flex-col gap-4 w-full max-w-[600px] mt-10 p-5 sm:p-0",method:"POST",children:[(0,a.jsx)("label",{className:"text-[#fff] text-start",children:"Your Name*"}),(0,a.jsx)("input",{className:"p-3 rounded-md outline-none border-none pl-4 text-black mb-8",type:"text",name:"yourName",value:i.yourName,onChange:c,required:!0}),(0,a.jsx)("label",{className:"text-[#fff] text-start",children:"Company Name*"}),(0,a.jsx)("input",{className:"p-3 rounded-md outline-none border-none pl-4 text-black mb-8",type:"text",name:"companyName",value:i.companyName,onChange:c,required:!0}),(0,a.jsx)("label",{className:"text-[#fff] text-start",children:"Email*"}),(0,a.jsx)("input",{className:"p-3 rounded-md outline-none border-none pl-4 text-black mb-8",id:"email",type:"email",name:"email",value:i.email,onChange:c}),l&&(0,a.jsx)("div",{className:"error text-white",children:l}),(0,a.jsx)("label",{className:"text-[#fff] text-start",children:"Message*"}),(0,a.jsx)("textarea",{className:"resize-y p-3 rounded-md outline-none border-none pl-4 text-black h-[200px]",type:"text",name:"message",value:i.message,onChange:c}),(0,a.jsx)("button",{type:"submit",onClick:d,className:"px-10 md:w-[150px] h-[45px] border-[3px] mx-auto md: border-white rounded-md mt-auto text-white",children:"Submit"})]})})}},1287:function(e,t,l){var a=l(5893);l(7294);let s=e=>{let{children:t,className:l}=e;return(0,a.jsx)("div",{className:"w-full h-full max-w-[1600px] md:px-4 lg:px-10 xl:px-40 mx-auto ".concat(l),children:t})};t.Z=s},340:function(e,t,l){l.d(t,{Z:function(){return f}});var a=l(5893),s=l(5675),n=l.n(s),i=l(1664),r=l.n(i),c=l(1287),d={src:"/_next/static/media/Twitter.38f5c59a.svg",height:17,width:23,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/Github.a71ff3e6.svg",height:29,width:38,blurWidth:0,blurHeight:0},x={src:"/_next/static/media/Telegram.0b40c270.svg",height:21,width:21,blurWidth:0,blurHeight:0},m={src:"/_next/static/media/LinkedIn.8536a771.svg",height:21,width:20,blurWidth:0,blurHeight:0};l(7294);let h=e=>{let{children:t,title:l}=e;return(0,a.jsxs)("div",{className:"w-full md:w-fit footer-list flex items-center md:items-start flex-col  md:rounded-none py-3.5 md:p-0 max-h-[150px] md:max-h-full cursor-pointer md:cursor-auto overflow-y-hidden gap-2 sm:gap-4",children:[(0,a.jsx)("div",{className:"flex justify-center items-center relative w-full",children:(0,a.jsx)("h5",{className:"font-light md:font-bold md:text-xl text-white spacing ",children:l})}),(0,a.jsx)("div",{className:"w-full md:w-fit items-start sm:items-center flex flex-col gap-3",children:(0,a.jsx)("ul",{className:"flex md:flex gap-6  font-light md:font-normal tracking-widest",children:t})})]})},u=e=>{let{width:t}=e;return(0,a.jsx)("footer",{className:"mt-10 text-[#929292]",children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("div",{className:"w-full line"}),(0,a.jsxs)("div",{className:"py-16 lg:py-16 px-10 lg:px-16 flex flex-wrap flex-col items-start md:items-center md:flex-row gap-10 lg:justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(r(),{href:"/",children:(0,a.jsx)("h2",{className:"md:-mt-4  text-[60px] font-bold tracking-[0.08em] text-white md:text-white",children:"DeHack"})}),(0,a.jsx)("p",{className:"md:text-lg font-[300] -mt-4 text-white spacing",children:"Using AI to secure Web3."})]}),(0,a.jsx)(h,{children:(0,a.jsxs)("ul",{className:"flex flex-col",children:[(0,a.jsx)("li",{children:(0,a.jsx)(r(),{href:"/",children:"Home"})}),(0,a.jsxs)("li",{children:[(0,a.jsx)(r(),{href:"/about",children:"About Us"})," "]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(r(),{href:"/contact",children:"Contact Us"})," "]})]})}),(0,a.jsxs)(h,{children:[(0,a.jsx)("li",{className:"flex items-center gap-3",children:(0,a.jsx)(n(),{src:d,alt:"Twitter",width:25})}),(0,a.jsx)("li",{className:"flex items-center gap-3",children:(0,a.jsx)(n(),{src:m,alt:"LinkedIn",width:25})}),(0,a.jsx)("li",{className:"flex items-center gap-3",children:(0,a.jsx)(n(),{src:o,alt:"Github",width:25})}),(0,a.jsx)("li",{className:"flex items-center gap-3",children:(0,a.jsx)(n(),{src:x,alt:"Telegram",width:25})})]})]}),(0,a.jsx)("div",{className:"w-full footer-line"}),(0,a.jsx)("div",{className:"text-center p-4",children:(0,a.jsxs)("p",{className:"spacing text-sm md:text-lg tracking-widest footer-text font-thin md:font-normal text-white md:text-inherit",style:{fontFamily:"__IBM_Plex_Mono_830e4a"},children:["All Rights Reserved ",t>=768?"|":(0,a.jsx)("br",{})," DeHack 2023"]})})]})})};var f=u},9838:function(e,t,l){l.d(t,{Z:function(){return w}});var a=l(5893),s=l(7106),n=l(5675),i=l.n(n),r=l(1287),c={src:"/_next/static/media/Menu.c641ffb0.svg",height:15,width:23,blurWidth:0,blurHeight:0},d=l(1664),o=l.n(d),x=l(7294);let m=e=>{let t=x.useRef(null);return x.useEffect(()=>{let l=l=>{var a;(null===(a=t.current)||void 0===a?void 0:a.contains(l.target))||e()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}}),t},h=e=>{let[t,l]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{let a=window.matchMedia(e);a.matches!==t&&l(a.matches);let s=()=>l(a.matches);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[t,e]),t};var u=l(1163),f=l(6261);let p=[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/contact",label:"Contact Us"}],g=e=>{let{image:t}=e,l=(0,u.useRouter)(),n=l.pathname,[d,g]=(0,x.useState)(!1),w=m(()=>g(!1)),j=h("(min-width: 1024px)"),b=e=>{f.OK.scrollTo(e,{duration:800,delay:0,smooth:"easeInOutQuart"})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("header",{className:"py-6 px-8 lg:px-4 fixed w-full top-0 z-50 bg-header",children:(0,a.jsx)(r.Z,{className:"xl:!px-20",children:(0,a.jsxs)("div",{className:"flex justify-between items-center gap-4 relative",children:[(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)("h2",{className:"text-white font-[900] text-3xl",children:"DeHack"})}),(0,a.jsxs)("div",{ref:w,className:"flex flex-col lg:flex-row lg:justify-end flex-1 fixed top-0 right-0 w-[280px] lg:w-auto h-screen lg:h-auto lg:static bg-black lg:bg-transparent py-10 px-12 lg:py-0 lg:px-0 lg:p-0 border-l-2 lg:border-none transition-all duration-300 z-[200] ".concat(d?"translate-x-0":"translate-x-[280px] lg:translate-x-0"),children:[!j&&(0,a.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,a.jsx)("h2",{className:"text-white font-[900] text-2xl",children:"DeHack"}),(0,a.jsx)("button",{className:"block w-[20px]",onClick:()=>g(!1),children:(0,a.jsx)(i(),{src:t,className:"invert w-full",alt:""})})]}),(0,a.jsx)("nav",{className:"flex space-y-4 lg:space-y-[unset] flex-col lg:flex-row lg:gap-12 lg:items-center lg:justify-center lg:flex-1 text-[#8D8D8D] text-lg font-[300]  mb-8 lg:mb-0",children:p.map(e=>(0,a.jsx)(o(),{href:e.path,children:(0,a.jsx)("p",{className:n===e.path?"active underline underline-offset-4":"text-[#a6a6a6] hover:text-white ",children:e.label})},e.path))}),(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{className:"block mx-[unset] text-sm sm:text-lg",text:"Join Waitlist",link:"#join"}),(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)("p",{onClick:()=>b("join"),children:"Scroll to element"})})]})]}),!j&&(0,a.jsx)("div",{className:"black-screen z-[100] ".concat(d?"show":"")}),!j&&(0,a.jsx)("button",{className:"lg:hidden",onClick:()=>g(!0),children:(0,a.jsx)(i(),{src:c,alt:"Nav bar"})})]})})})})};var w=g},1468:function(e,t,l){var a=l(7294);let s=()=>{let[e,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=()=>{t(window.innerWidth)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),{width:e}};t.Z=s},8712:function(e,t,l){l.d(t,{Z:function(){return a}});function a(){var e,t;let l=window.navigator.userAgent,a=(null===(e=window.navigator)||void 0===e?void 0:null===(t=e.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform,s=null;return -1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(a)?s="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(a)?s="Windows":-1!==["Win32","Win64","Windows","WinCE"].indexOf(a)?s="Windows":/Android/.test(l)?s="Android":/Linux/.test(a)&&(s="Linux"),s}}}]);