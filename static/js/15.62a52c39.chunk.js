(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[15],{114:function(e,t,n){"use strict";var r=n(9),c=n.n(r),o=n(54),a=n(45),i=n(55),s=function(e){var t=e.folderId,n=e.page,r=e.limit,c=e.recursive,s=o.a.browse.get();return Object(i.a)({url:s,method:"GET",headers:{Authorization:Object(a.a)(),page:n,limit:r},queryParams:{folderId:t,recursive:c}})};s.propTypes={page:c.a.number,limit:c.a.number,folderId:c.a.number,recursive:c.a.bool};var u=s,d=n(14);t.a=function(e){return u(e).then((function(e){return{res:e,pages:Object(d.c)("pages")}}))}},149:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var r=n(57),c=n(48),o=n(21),a=n(0),i=n(141),s=n.n(i),u=n(52),d=n(46),l=n(47),f=n(91),p=n(9),h=n.n(p),j=n(155),b=(n(149),n(1)),m=["style","node"],O={id:h.a.number,name:h.a.string,description:h.a.string};O.children=h.a.arrayOf(h.a.shape(O));var v=function(e){var t=e.data,n=e.handleClick,r=j.b.Expandable,i=Object(a.useState)(t),s=Object(o.a)(i,2),u=s[0],d=s[1];return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"tree-list",children:Object(b.jsx)(j.a,{nodes:u,onChange:function(e){d(e)},children:function(e){var t=e.style,o=e.node,a=Object(f.a)(e,m);return Object(b.jsx)("div",{style:t,children:Object(b.jsx)(r,Object(c.a)(Object(c.a)({node:o},a),{},{children:Object(b.jsx)("button",{className:"folder-tree-list text-primary-color",type:"button",onClick:function(e){return n(e,o.id)},children:o.name})}))})}})})})},g=n(114),y=n(64),x=n(89),w=n(60),S=n(86);t.default=function(){var e=Object(a.useState)({folderId:1,page:1,limit:10,recursive:!1}),t=Object(o.a)(e,2),n=t[0],i=t[1],f=Object(a.useState)(),p=Object(o.a)(f,2),h=p[0],j=p[1],m=Object(a.useState)(),O=Object(o.a)(m,2),N=O[0],k=O[1],C=Object(a.useState)(),F=Object(o.a)(C,2),D=F[0],U=F[1],T=Object(a.useState)(S.f),A=Object(o.a)(T,2),E=A[0],R=A[1],M=Object(a.useState)(!1),z=Object(o.a)(M,2),I=z[0],L=z[1];Object(a.useEffect)((function(){R({type:"success",text:u.a.loading}),L(!0),Object(g.a)(n).then((function(e){j(e.res);for(var t=[],n=0;n<e.pages;n++)t.push({id:n+1,value:n+1});k(t),L(!1)})).catch((function(e){Object(w.e)(e,R),L(!0)}))}),[n]),Object(a.useEffect)((function(){Object(y.e)().then((function(e){var t=e.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{state:{expanded:!0,favorite:!1,deletable:!1}})}));U(s()(t,{parentProperty:"parent",customID:"id"}))})).catch((function(e){Object(w.e)(e,R),L(!0)}))}),[]);var P=function(e){var t;"limit"===e.target.name?i(Object(c.a)(Object(c.a)({},n),{},(t={},Object(r.a)(t,e.target.name,e.target.value),Object(r.a)(t,"page",1),t))):i(Object(c.a)(Object(c.a)({},n),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{title:"Browse"}),Object(b.jsxs)("div",{className:"main-container my-3",children:[I&&Object(b.jsx)(l.a,{type:E.type,setShow:L,message:E.text}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-3 col-lg-2",children:[Object(b.jsx)("h2",{className:"font-size-sub-heading",children:"Folder Navigation"}),D&&Object(b.jsx)(v,{data:D,handleClick:function(e,t){e.preventDefault(),i(Object(c.a)(Object(c.a)({},n),{},{folderId:t}))}})]}),Object(b.jsx)("div",{className:"col-md-9 col-lg-10",children:Object(b.jsxs)("table",{className:"table table-striped text-primary-color font-size-medium table-responsive-sm table-bordered",children:[Object(b.jsxs)("thead",{children:[Object(b.jsx)("tr",{children:Object(b.jsx)("th",{colSpan:"6",className:"font-size-sub-heading text-center",children:"Uploads in Software Repository"})}),Object(b.jsx)("tr",{className:"font-demi",children:Object(b.jsxs)("td",{colSpan:"6",className:"p-2 m-2",children:[Object(b.jsx)("span",{className:"mt-1",children:"Show entries: "}),Object(b.jsx)(l.c,{name:"limit",type:"select",onChange:function(e){return P(e)},options:S.c,property:"entry"})]})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsx)("input",{type:"search",className:"form-control",placeholder:"Search"})}),Object(b.jsx)("th",{children:Object(b.jsx)(l.c,{name:"status",type:"select",onChange:function(e){return P(e)},options:S.r,property:"name"})}),Object(b.jsx)("th",{}),Object(b.jsx)("th",{}),Object(b.jsx)("th",{children:Object(b.jsx)(l.c,{name:"status",type:"select",onChange:function(e){return P(e)},options:S.b,property:"name"})})]}),Object(b.jsxs)("tr",{className:"font-bold text-center",children:[Object(b.jsx)("th",{children:"Upload Name and Description"}),Object(b.jsx)("th",{children:"Status"}),Object(b.jsx)("th",{children:"Comment"}),Object(b.jsx)("th",{children:"Main Licenses"}),Object(b.jsx)("th",{children:"Assigned to"}),Object(b.jsx)("th",{children:"Upload Date"})]})]}),Object(b.jsxs)("tbody",{children:[null===h||void 0===h?void 0:h.map((function(e){return Object(b.jsxs)("tr",{className:"text-center",children:[Object(b.jsxs)("td",{children:[Object(b.jsx)("div",{className:"font-demi",children:null===e||void 0===e?void 0:e.uploadname}),Object(b.jsx)("div",{className:"font-size-small",children:null===e||void 0===e?void 0:e.description}),Object(b.jsx)(l.c,{name:"action",type:"select",onChange:function(t){return function(e,t){Object(x.c)(t,e.target.value).then((function(e){return null===e||void 0===e?void 0:e.message})).then((function(e){setTimeout((function(){Object(x.a)(e).then((function(e){return e})).then((function(t){var n=Object(w.b)(t.headers.get("content-disposition"));t.blob().then((function(t){var r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.download=n,document.body.appendChild(r),r.click(),setTimeout((function(){window.URL.revokeObjectURL(e),document.body.removeChild(r)}),150)})).catch((function(e){Object(w.e)(e,R),L(!0)}))})).catch((function(e){Object(w.e)(e,R),L(!0)}))}),1200)})).catch((function(e){Object(w.e)(e,R),L(!0)}))}(t,null===e||void 0===e?void 0:e.id)},options:S.a,property:"name",defaultValue:"0",valueProperty:"reportFormat"})]}),Object(b.jsx)("td",{children:Object(b.jsx)(l.c,{name:"status",type:"select",onChange:function(e){return P(e)},options:S.r,property:"name"})}),Object(b.jsx)("td",{children:"-"}),Object(b.jsx)("td",{children:"-"}),Object(b.jsx)("td",{children:Object(b.jsx)(l.c,{name:"status",type:"select",onChange:function(e){return P(e)},options:S.b,property:"name"})}),Object(b.jsx)("td",{children:null===e||void 0===e?void 0:e.uploaddate.split(".")[0]})]},null===e||void 0===e?void 0:e.id)})),Object(b.jsx)("tr",{children:Object(b.jsxs)("td",{colSpan:"6",children:["Page:",N&&Object(b.jsx)(l.c,{name:"page",type:"select",onChange:function(e){return P(e)},options:N,property:"value",className:"mt-n4"})]})})]})]})})]})]})]})}},45:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var r=n(58),c=n(2),o=n(14),a=function(){if("undefined"!==typeof window&&Object(o.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},i=function(e){Object(o.e)("token"),Object(o.f)("user"),Object(o.f)("groups"),Object(o.f)("currentGroup");var t=c.a.home;e&&(t="".concat(c.a.home,"?").concat(Object(r.stringify)(e))),window.location.href=t},s=function(){return Object(o.b)("token")},u=function(){return Object(o.c)("user").name},d=function(){var e;return"admin"===(null===(e=Object(o.c)("user"))||void 0===e?void 0:e.accessLevel)}},46:function(e,t,n){"use strict";n(0);var r=n(62),c=n(1);t.a=function(e){var t=e.title;return Object(c.jsx)(r.a,{children:Object(c.jsxs)("title",{children:[t," | FOSSology"]})})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d.a})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return c.a}));var r,c=n(56),o=(n(0),n(1)),a=function(e){var t=e.message,n=e.type,r=e.setShow;return Object(o.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(o.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(o.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(o.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(o.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(o.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(o.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(o.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(o.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(o.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return r(!1)},children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},i=n(22),s=n(12).d.button(r||(r=Object(i.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),u=function(e){var t=e.type,n=e.onClick,r=e.className,c=e.children;return Object(o.jsx)(s,{type:t,onClick:n,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(r),children:c})},d=(n(49),n(50)),l=function(e){var t=e.title;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},49:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.src,n=e.alt,c=e.style,o=e.className,a=e.width,i=e.height,s=e.align;return Object(r.jsx)("img",{src:t,alt:n,style:c,className:o,width:a,height:i,align:s})}},50:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.type,n=e.name,c=e.value,o=e.id,a=e.className,i=e.onChange,s=e.children,u=e.checked,d=void 0!==u&&u,l=e.placeholder,f=void 0===l?null:l,p=e.disabled,h=void 0!==p&&p,j=e.options,b=void 0===j?null:j,m=e.multiple,O=void 0!==m&&m,v=e.property,g=e.valueProperty,y=e.noDataMessage,x=void 0===y?"No Data Found":y;return"radio"===t||"checkbox"===t?Object(r.jsxs)("div",{className:"my-0",children:[Object(r.jsx)("input",{type:t,name:n,value:c,className:a&&"mr-2 ".concat(a),onChange:i,checked:d,disabled:h,id:o}),Object(r.jsx)("label",{htmlFor:o,className:"font-medium ml-2",children:s})]}):"select"===t?Object(r.jsxs)("div",{className:"my-0 py-0",children:[s&&Object(r.jsx)("label",{htmlFor:o,className:"font-demi",children:s}),"\u2003",Object(r.jsx)("select",{name:n,className:a?"mr-2 form-control ".concat(a):"mr-2 form-control",value:c,onChange:i,multiple:O&&O,size:O?"15":"",id:o,children:b.length>0?b.map((function(e,t){return Object(r.jsx)("option",{value:g?e[g]:e.id,disabled:e.disabled,children:v?e[v]:e},e.id||t)})):Object(r.jsx)("option",{className:"font-demi",disabled:!0,children:x})})]}):Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsx)("label",{htmlFor:o,className:"font-demi",children:s}),Object(r.jsx)("input",{type:t,name:n,value:c,className:"file"===t?"ml-3 ".concat(a):"form-control ".concat(a),onChange:i,checked:d,placeholder:f,id:o})]})}},52:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},54:function(e,t,n){"use strict";var r="".concat("http","://").concat("localhost/repo/api/v2"),c={jobs:{details:function(e){return"".concat(r,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(r,"/jobs")},scheduleReport:function(){return"".concat(r,"/report")},downloadReport:function(e){return"".concat(r,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(r,"/tokens")}},search:{search:function(){return"".concat(r,"/search")}},users:{self:function(){return"".concat(r,"/users/self")},getAll:function(){return"".concat(r,"/users")},getSingle:function(e){return"".concat(r,"/users/").concat(e)},delete:function(e){return"".concat(r,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(r,"/folders")},getSingle:function(e){return"".concat(r,"/folders/").concat(e)},create:function(){return"".concat(r,"/folders")},read:function(e){return"".concat(r,"/folders/").concat(e)},edit:function(e){return"".concat(r,"/folders/").concat(e)},delete:function(e){return"".concat(r,"/folders/").concat(e)},move:function(e){return"".concat(r,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(r,"/uploads")},getId:function(e){return"".concat(r,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(r,"/uploads")}},organize:{uploads:{get:function(){return"".concat(r,"/uploads")},delete:function(e){return"".concat(r,"/uploads/").concat(e)},move:function(e){return"".concat(r,"/uploads/").concat(e)},copy:function(e){return"".concat(r,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(r,"/groups")},getAll:function(){return"".concat(r,"/groups")}}},license:{get:function(){return"".concat(r,"/license")},createCandidateLicense:function(){return"".concat(r,"/license")}},info:{info:function(){return"".concat(r,"/info")},health:function(){return"".concat(r,"/health")}}};t.a=c},55:function(e,t,n){"use strict";var r=n(59),c=n(48),o=n(58),a=n(45),i=n(52),s=n(14);t.a=function e(t){var n,u,d=t.url,l=t.method,f=t.body,p=t.groupName,h=t.headers,j=void 0===h?{}:h,b=t.queryParams,m=t.isMultipart,O=void 0!==m&&m,v=t.noHeaders,g=void 0!==v&&v,y=t.addGroupName,x=void 0===y||y,w=t.retries,S=void 0===w?0:w,N=t.isFile,k=void 0!==N&&N;(n=O?new Headers(Object(c.a)({},j)):new Headers(Object(c.a)({"content-type":"application/json",accept:"application/json"},j)),k&&(n=new Headers(Object(c.a)({},j))),x)&&n.append("groupName",p||Object(s.c)("currentGroup")||(null===(u=Object(s.c)("user"))||void 0===u?void 0:u.default_group));g&&(n={});var C={method:l,headers:n,body:f},F=d;return C.body=f?O?f:JSON.stringify(f):null,b&&(F="".concat(d,"?").concat(Object(o.stringify)(b))),fetch(F,C).then((function(t){if(t.ok){var n,c=Object(r.a)(t.headers.entries());try{for(c.s();!(n=c.n()).done;){var o=n.value;"x-total-pages"===o[0]&&Object(s.h)("pages",o[1])}}catch(u){c.e(u)}finally{c.f()}return k?t:t.json()}return S>0?setTimeout((function(){e({url:d,method:l,headers:j,retries:S-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(a.e)({message:e.message}):Object(a.e)({message:i.a.forbiddenResource}):Promise.reject(n)}))}))}},60:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(59),c=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*r));return t},o=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},a=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},i=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},s=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},u=function(e){var t,n=e.split(";"),c="download.txt",o=Object(r.a)(n);try{for(o.s();!(t=o.n()).done;){var a=t.value.trim().match(/filename="(.*)"/);if(null!=a){c=a[1];break}}}catch(i){o.e(i)}finally{o.f()}return c}},64:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n(54),c=n(45),o=n(55),a=function(e,t,n){var a=r.a.folders.move(t);return Object(o.a)({url:a,method:"PUT",headers:{Authorization:Object(c.a)(),parent:e,action:n}})},i=function(e){return function(e){var t=r.a.folders.getAll();return Object(o.a)({url:t,method:"GET",headers:{Authorization:Object(c.a)()},groupName:e})}(e).then((function(e){return e}))},s=function(e){return function(e){var t=r.a.folders.getSingle(e);return Object(o.a)({url:t,method:"GET",headers:{Authorization:Object(c.a)()}})}(e).then((function(e){return e}))},u=function(e){return function(e){var t=r.a.folders.delete(e);return Object(o.a)({url:t,method:"DELETE",headers:{Authorization:Object(c.a)()}})}(e.id).then((function(e){return e}))},d=function(e){return function(e,t,n){var a=r.a.folders.create();return Object(o.a)({url:a,method:"POST",headers:{Authorization:Object(c.a)(),parentFolder:e,folderName:t,folderDescription:n}})}(e.parentFolder,e.folderName,e.folderDescription).then((function(e){return e}))},l=function(e){return function(e,t,n){var a=r.a.folders.edit(n);return Object(o.a)({url:a,method:"PATCH",headers:{Authorization:Object(c.a)(),name:e,description:t}})}(e.name,e.description,e.id).then((function(e){return e}))},f=function(e){var t=e.parent,n=e.id;return a(t,n,"move").then((function(e){return e}))},p=function(e){var t=e.parent,n=e.id;return a(t,n,"copy").then((function(e){return e}))}},86:function(e,t,n){"use strict";n.d(t,"r",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"g",(function(){return l})),n.d(t,"k",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"l",(function(){return j})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return m})),n.d(t,"p",(function(){return O})),n.d(t,"o",(function(){return v})),n.d(t,"q",(function(){return g})),n.d(t,"s",(function(){return y})),n.d(t,"c",(function(){return x})),n.d(t,"h",(function(){return w})),n.d(t,"d",(function(){return S}));var r,c,o=n(14),a=[{id:0,name:"open"},{id:1,name:"in progress"},{id:2,name:"closed"},{id:3,name:"rejected"}],i=[{id:0,name:"me"},{id:1,name:"unassigned"}],s=[{id:0,name:"-- select action --",reportFormat:"0",disabled:!0},{id:1,name:"Export DEP5",reportFormat:"dep5"},{id:2,name:"Export ReadMe_OSS",reportFormat:"readmeoss"},{id:3,name:"Export SPDX RDF",reportFormat:"spdx2"},{id:4,name:"Export SPDX tag:value",reportFormat:"spdx2tv"},{id:5,name:"Export Unified Report",reportFormat:"unifiedreport"}],u={type:"success",text:""},d={searchType:"allfiles",uploadId:"",filename:"",tag:"",filesizemin:"",filesizemax:"",license:"",copyright:"",page:1,limit:10},l={type:"danger",text:""},f={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,fileInput:null},p={analysis:Object(o.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(r=Object(o.c)("user"))||void 0===r?void 0:r.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},h=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],j={folder:"",editUpload:"",reportUpload:"",newLicense:"licenseCanditate",licenseInfoInFile:!0,licenseConcluded:!1,licenseDecision:!0,existingDecisions:!0,importDiscussed:!0,copyright:!1},b={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"server",groupName:""},m={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"url"},O={url:"",name:""},v={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"vcs"},g={vcsType:"git",vcsUrl:"",vcsBranch:"",vcsName:"",vcsUsername:"",vcsPassword:""},y=[{id:"git",type:"Git"},{id:"svn",type:"SVN"}],x=[{id:10,entry:"10"},{id:25,entry:"25"},{id:50,entry:"50"},{id:100,entry:"100"}],w={analysis:Object(o.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(c=Object(o.c)("user"))||void 0===c?void 0:c.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},S=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}]},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n(54),c=n(45),o=n(55),a=n(60),i=function(e,t,n){return function(e,t,n){var a=r.a.jobs.scheduleAnalysis(),i=null===n||void 0===n?void 0:n.analysis,s=i.bucket,u=i.copyrightEmailAuthor,d=i.ecc,l=i.keyword,f=i.mime,p=i.monk,h=i.nomos,j=i.ojo,b=null===n||void 0===n?void 0:n.decider,m=b.nomosMonk,O=b.bulkReused,v=b.newScanner,g=b.ojoDecider,y=null===n||void 0===n?void 0:n.reuse,x=y.reuseUpload,w=y.reuseGroup,S=y.reuseMain,N=y.reuseEnhanced,k=y.reuseReport,C=y.reuseCopyright;return Object(o.a)({url:a,method:"POST",headers:{Authorization:Object(c.a)(),folderId:e,uploadId:t},body:{analysis:{bucket:s,copyright_email_author:u,ecc:d,keyword:l,mime:f,monk:p,nomos:h,ojo:j,package:n.analysis.package},decider:{nomos_monk:m,bulk_reused:O,new_scanner:v,ojo_decider:g},reuse:{reuse_upload:x,reuse_group:w,reuse_main:S,reuse_enhanced:N,reuse_report:k,reuse_copyright:C}}})}(e,t,n).then((function(e){return e}))},s=function(e,t){return function(e,t){var n=r.a.jobs.scheduleReport();return Object(o.a)({url:n,method:"GET",headers:{Authorization:Object(c.a)(),uploadId:e,reportFormat:t}})}(e,t).then((function(e){return e}))},u=function(e){var t=Object(a.d)(e);return null===t?null:function(e){var t=r.a.jobs.downloadReport(e);return Object(o.a)({url:t,method:"GET",headers:{Authorization:Object(c.a)()},isFile:!0})}(t).then((function(e){return e}))}}}]);
//# sourceMappingURL=15.62a52c39.chunk.js.map