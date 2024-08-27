(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6453:function(e,s,t){Promise.resolve().then(t.bind(t,3936))},3936:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var a=t(7437),n=t(2265),l=t(9226),i=t(943),r=t(4573);let o="https://peer.decentraland.org",c="https://profile-images-bucket-43d0c58.decentraland.org/v1/entities";function d(){var e;let[s,t]=(0,n.useState)([]),[d,m]=(0,n.useState)([]),[x,h]=(0,n.useState)(!1),[u,f]=(0,n.useState)(null);function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];fetch("".concat(o,"/content/deployments?")+new URLSearchParams([["entityType","profile"],["from","1706497200000"],["to","".concat(Date.now()-12e4)],["limit","50"],...e.map(e=>["entityId",e])])).then(e=>e.json()).then(e=>e.deployments.map(e=>({id:e.entityId,address:e.pointers[0],body:e.metadata.avatars[0].avatar.snapshots.body,face:e.metadata.avatars[0].avatar.snapshots.face256,raw:e}))).then(e=>m(function(e,s){let t={};return e.filter(function(e){let a=s(e);return!t.hasOwnProperty(a)&&(t[a]=!0)})}(e,e=>e.id))).catch(console.error)}return(0,n.useEffect)(()=>{v()},[]),(0,a.jsxs)("div",{className:"bg-white",children:[(0,a.jsx)("h1",{className:"text-center text-4xl font-bold text-gray-600 my-4",children:"Compare images"}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("div",{className:"m-2 text-gray-500",children:["Displaying ",d.length," profiles of ",d.length]}),(0,a.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,a.jsx)("button",{className:"h-8 rounded bg-indigo-600 px-2 py-1 font-mono text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:()=>v(),children:"Recent deployments"}),(0,a.jsx)("button",{className:"h-8 rounded bg-indigo-600 px-2 py-1 font-mono text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:()=>{t(d.map(e=>e.id)),h(!x)},children:"Specific profiles"})]})]}),(0,a.jsx)(l.u.Root,{show:x,as:n.Fragment,children:(0,a.jsxs)(i.V,{as:"div",className:"relative z-10",onClose:h,children:[(0,a.jsx)(l.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,a.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,a.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,a.jsx)(l.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)(i.V.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mx-auto flex items-center justify-center",children:"One entity id per line"}),(0,a.jsx)("div",{className:"grid grid-cols-1",children:(0,a.jsx)("textarea",{rows:10,name:"comment",id:"comment",className:"block w-full font-mono rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:d.map(e=>e.id).join("\n"),onChange:e=>t(e.target.value.split("\n"))})})]}),(0,a.jsx)("div",{className:"mt-5 sm:mt-6",children:(0,a.jsx)("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:()=>{v(s),h(!1)},children:"Load set"})})]})})})})]})}),(0,a.jsx)(l.u.Root,{show:null!==u,as:n.Fragment,children:(0,a.jsxs)(i.V,{as:"div",className:"relative z-10",onClose:()=>f(null),children:[(0,a.jsx)("div",{className:"fixed inset-0"}),(0,a.jsx)("div",{className:"fixed inset-0 overflow-hidden",children:(0,a.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,a.jsx)("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:(0,a.jsx)(l.u.Child,{as:n.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,a.jsx)(i.V.Panel,{className:"pointer-events-auto w-screen max-w-md",children:(0,a.jsxs)("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[(0,a.jsx)("div",{className:"px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"flex items-start justify-between",children:[(0,a.jsx)(i.V.Title,{className:"text-base font-semibold leading-6 text-gray-900",children:"Wearables"}),(0,a.jsx)("div",{className:"ml-3 flex h-7 items-center",children:(0,a.jsxs)("button",{type:"button",className:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>f(null),children:[(0,a.jsx)("span",{className:"absolute -inset-2.5"}),(0,a.jsx)("span",{className:"sr-only",children:"Close panel"}),(0,a.jsx)(r.Z,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,a.jsxs)("div",{className:"relative mt-6 flex-1 px-4 sm:px-6",children:[(0,a.jsx)("div",{className:"text-center mb-3",children:(0,a.jsx)("div",{className:"overflow-hidden h-full w-full",children:(0,a.jsx)("img",{className:"object-cover border w-24 h-48",src:"".concat(o,"/content/contents/").concat(null==u?void 0:u.body),alt:""})})}),(0,a.jsx)("ol",{className:"grid grid-cols-1 gap-1",children:null==u?void 0:u.raw.metadata.avatars[0].avatar.wearables.map(e=>(0,a.jsx)("li",{className:"p-1 bg-white text-sm border",children:e},e))}),(0,a.jsx)("h1",{className:"text-base font-semibold leading-6 text-gray-900 mt-10 mb-2",children:"forceRender"}),(null==u?void 0:null===(e=u.raw.metadata.avatars[0].avatar.forceRender)||void 0===e?void 0:e.length)>0?(0,a.jsx)("ol",{className:"grid grid-cols-1 gap-1",children:null==u?void 0:u.raw.metadata.avatars[0].avatar.forceRender.map(e=>(0,a.jsx)("li",{className:"p-1 bg-white text-sm border",children:e},e))}):(null==u?void 0:u.raw.metadata.avatars[0].avatar.forceRender)?(0,a.jsx)("p",{className:"text-xs",children:(0,a.jsx)("span",{children:"(array is empty)"})}):(0,a.jsx)("p",{className:"text-xs",children:(0,a.jsx)("span",{children:"(attribute is missing)"})})]})]})})})})})})]})}),(0,a.jsx)("div",{className:"text-sm m-4",children:d.map(e=>(0,a.jsxs)("div",{className:"mt-6 grid gap-x-2 grid-cols-4 text-gray-500 border-2 p-2",children:[(0,a.jsxs)("div",{className:"col-span-4 text-xs text-center",children:[(0,a.jsxs)("span",{className:"text-indigo-600 hover:text-indigo-800 hover:cursor-pointer",onClick:()=>f(e),children:[" ",e.id]})," ","-"," ",(0,a.jsx)("a",{href:"https://decentraland.org/profile/accounts/".concat(e.address),target:"_blank",className:"text-indigo-600",children:e.address})]}),(0,a.jsx)("div",{className:"col-span-1 text-xs text-center",children:"Body (Catalyst)"}),(0,a.jsx)("div",{className:"col-span-1 text-xs text-center",children:"Body (CDN)"}),(0,a.jsx)("div",{className:"col-span-1 text-xs text-center",children:"Face (Catalyst)"}),(0,a.jsx)("div",{className:"col-span-1 text-xs text-center",children:"Face (CDN)"}),(0,a.jsx)("div",{className:"col-span-1 text-center",children:(0,a.jsx)("div",{className:"overflow-hidden h-full w-full",children:(0,a.jsx)("img",{className:"object-cover border",src:"".concat(o,"/content/contents/").concat(e.body),alt:""})})}),(0,a.jsx)("div",{className:"col-span-1 text-center",children:(0,a.jsx)("div",{className:"overflow-hidden h-full w-full",children:(0,a.jsx)("img",{className:"object-cover border",src:"".concat(c,"/").concat(e.id,"/body.png"),alt:""})})}),(0,a.jsx)("div",{className:"col-span-1 text-center",children:(0,a.jsx)("div",{className:"overflow-hidden h-full w-full",children:(0,a.jsx)("img",{className:"object-cover border",src:"".concat(o,"/content/contents/").concat(e.face),alt:""})})}),(0,a.jsx)("div",{className:"col-span-1 text-center",children:(0,a.jsx)("div",{className:"overflow-hidden h-full w-full",children:(0,a.jsx)("img",{className:"object-cover border",src:"".concat(c,"/").concat(e.id,"/face.png"),alt:""})})})]},e.id))})]})}function m(){return(0,a.jsx)("main",{className:" min-h-screen p-24",children:(0,a.jsx)(d,{})})}}},function(e){e.O(0,[815,971,23,744],function(){return e(e.s=6453)}),_N_E=e.O()}]);