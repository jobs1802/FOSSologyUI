(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[52],{223:function(e,t,n){"use strict";n.r(t);var a=n(59),r=n(51),o=n(21),c=n(0),u=n(50),i=n(52),l=n(68),d=n(98),s=n(97),p=n(64),f=n(1);t.default=function(){var e=Object(c.useState)({folderId:1,uploadId:null,uploadName:"",uploadDescription:""}),t=Object(o.a)(e,2),n=t[0],j=t[1],b=Object(c.useState)([{id:1,name:"Software Repository",description:"Top Folder",parent:null}]),h=Object(o.a)(b,2),O=h[0],m=h[1],v=Object(c.useState)([]),g=Object(o.a)(v,2),y=g[0],x=g[1],S=Object(c.useState)(!1),D=Object(o.a)(S,2),I=D[0],w=D[1],N=Object(c.useState)({type:"success",text:""}),z=Object(o.a)(N,2),T=z[0],C=z[1],A=function(e){j(Object(r.a)(Object(r.a)({},n),{},Object(a.a)({},e.target.name,e.target.value)))};return Object(c.useEffect)((function(){Object(l.e)().then((function(e){m(e)})).catch((function(e){Object(p.e)(e,C),w(!0)})),Object(d.c)(n.folderId).then((function(e){x(e)})).catch((function(e){Object(p.e)(e,C),w(!0)})),n.uploadId&&Object(s.d)(n.uploadId).then((function(e){return j(Object(r.a)(Object(r.a)({},n),{},{uploadName:e.uploadname,uploadDescription:e.description}))})).catch((function(e){Object(p.e)(e,C),w(!0)}))}),[n.folderId,n.uploadId]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{title:"Edit Uploads"}),Object(f.jsxs)("div",{className:"main-container my-3",children:[I&&Object(f.jsx)(i.a,{type:T.type,setShow:w,message:T.text}),Object(f.jsx)("h1",{className:"font-size-main-heading mb-4",children:"Edit Uploaded File Properties"}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-lg-8 col-md-12 col-sm-12 col-12",children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{type:"select",name:"folderId",id:"organize-upload-folder-list",onChange:function(e){return A(e)},options:O,property:"name",value:null===O||void 0===O?void 0:O.id,children:"Select the folder that contains the upload:"})}),Object(f.jsx)("li",{className:"mt-4",children:Object(f.jsx)(i.c,{type:"select",name:"uploadId",id:"organize-upload-list",onChange:function(e){return A(e)},options:y,property:"uploadname",children:"Select the upload you wish to edit:"})}),Object(f.jsx)("li",{className:"mt-4",children:Object(f.jsx)(i.c,{type:"text",name:"uploadName",id:"organize-upload-name",onChange:function(e){return A(e)},value:n.uploadName,children:"Upload name:"})}),Object(f.jsx)("li",{className:"mt-4",children:Object(f.jsx)(i.c,{type:"text",name:"uploadDescription",id:"organize-upload-description",onChange:function(e){return A(e)},value:n.uploadDescription,children:"Upload Description:"})})]}),Object(f.jsx)(i.b,{type:"submit",onClick:function(e){e.preventDefault()},className:"mt-4",children:"Edit"})]})})]})]})}},64:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(63),r=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*a));return t},o=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},c=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},u=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},i=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},l=function(e){var t,n=e.split(";"),r="download.txt",o=Object(a.a)(n);try{for(o.s();!(t=o.n()).done;){var c=t.value.trim().match(/filename="(.*)"/);if(null!=c){r=c[1];break}}}catch(u){o.e(u)}finally{o.f()}return r}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return b}));var a=n(51),r=n(9),o=n.n(r),c=n(60),u=n(49),i=n(61),l=function(e,t,n,a,r){var o=c.a.upload.uploadCreate(),l=new FormData;return r&&l.append("fileInput",r,null===r||void 0===r?void 0:r.name),Object(i.a)({url:o,method:"POST",isMultipart:!0,headers:{Authorization:Object(u.a)(),folderId:e,uploadDescription:t,public:n,ignoreScm:a,uploadType:""},body:l})};l.propTypes={folderId:o.a.number,uploadDescription:o.a.string,accessLevel:o.a.string,ignoreScm:o.a.bool,fileInput:o.a.string};var d=function(e){var t=e.folderId,n=e.uploadDescription,a=e.accessLevel,r=e.ignoreScm,o=e.fileInput;return l(t,n,a,r,o).then((function(e){return e}))},s=function(e,t){return function(e,t){var n=c.a.upload.uploadCreate();return Object(i.a)({url:n,method:"POST",headers:Object(a.a)(Object(a.a)({},e),{},{Authorization:Object(u.a)()}),body:t})}(e,t).then((function(e){return e}))},p=function(e,t){return function(e,t){var n=c.a.upload.uploadCreate();return Object(i.a)({url:n,method:"POST",headers:Object(a.a)(Object(a.a)({},e),{},{Authorization:Object(u.a)()}),body:t})}(e,t).then((function(e){return e}))},f=function(e,t){return function(e,t){var n=c.a.upload.getId(e);return Object(i.a)({url:n,method:"GET",retries:t,headers:{Authorization:Object(u.a)()}})}(e,t).then((function(e){return e}))},j=function(e){return function(e){var t=c.a.upload.getSummary(e);return Object(i.a)({url:t,method:"GET",headers:{Authorization:Object(u.a)()}})}(e).then((function(e){return e}))},b=function(e,t){return function(e,t){var n=c.a.upload.getLicense(e);return Object(i.a)({url:n,method:"GET",headers:{Authorization:Object(u.a)()},queryParams:{agent:t}})}(e,t).then((function(e){return e}))}}}]);
//# sourceMappingURL=52.8cb34c7a.chunk.js.map