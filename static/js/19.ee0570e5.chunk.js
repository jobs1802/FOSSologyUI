(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[19],{190:function(e,t,n){"use strict";n.r(t);var r=n(57),o=n(48),c=n(21),a=n(0),i=n(52),s=n(46),l=n(47),u=n(64),d=n(60),f=n(1);t.default=function(){var e=Object(a.useState)({parentFolder:1,folderName:"",folderDescription:""}),t=Object(c.a)(e,2),n=t[0],h=t[1],p=Object(a.useState)([{id:1,name:"Software Repository",description:"Top Folder",parent:null}]),m=Object(c.a)(p,2),j=m[0],b=m[1],g=Object(a.useState)(!1),O=Object(c.a)(g,2),v=O[0],y=O[1],x=Object(a.useState)(!1),w=Object(c.a)(x,2),N=w[0],S=w[1],C=Object(a.useState)({type:"success",text:""}),F=Object(c.a)(C,2),k=F[0],D=F[1],A=n.parentFolder,z=n.folderName,M=n.folderDescription,T=function(e){h(Object(o.a)(Object(o.a)({},n),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){Object(u.e)().then((function(e){b(e)})).catch((function(e){Object(d.e)(e,D),S(!0)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.a,{title:"Create a new FOSSology folder"}),Object(f.jsxs)("div",{className:"main-container my-3",children:[N&&Object(f.jsx)(l.a,{type:k.type,setShow:S,message:k.text}),Object(f.jsx)("h1",{className:"font-size-main-heading",children:"Create a new Fossology Folder"}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-12 col-lg-8",children:Object(f.jsxs)("form",{children:[Object(f.jsx)(l.c,{type:"select",name:"parentFolder",id:"organize-folder-create-parent-folder",onChange:T,options:j,value:A,property:"name",children:"Select the parent folder:"}),Object(f.jsx)(l.c,{type:"text",name:"folderName",id:"organize-folder-create-folder-name",onChange:T,placeholder:"Folder name",value:z,children:"Enter the new folder name:"}),Object(f.jsx)(l.c,{type:"text",name:"folderDescription",id:"organize-folder-create-folder-description",onChange:T,placeholder:"Folder description",value:M,children:"Enter a meaningful description:"}),Object(f.jsx)(l.b,{type:"submit",onClick:function(e){e.preventDefault(),y(!0),Object(u.b)(n).then((function(){D({type:"success",text:i.a.createdFolder})})).catch((function(e){Object(d.e)(e,D)})).finally((function(){y(!1),S(!0)}))},className:"mt-4",children:v?Object(f.jsx)(l.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Create"})]})})})]})]})}},45:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));var r=n(58),o=n(2),c=n(14),a=function(){if("undefined"!==typeof window&&Object(c.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},i=function(e){Object(c.e)("token"),Object(c.f)("user"),Object(c.f)("groups"),Object(c.f)("currentGroup");var t=o.a.home;e&&(t="".concat(o.a.home,"?").concat(Object(r.stringify)(e))),window.location.href=t},s=function(){return Object(c.b)("token")},l=function(){return Object(c.c)("user").name},u=function(){var e;return"admin"===(null===(e=Object(c.c)("user"))||void 0===e?void 0:e.accessLevel)}},46:function(e,t,n){"use strict";n(0);var r=n(62),o=n(1);t.a=function(e){var t=e.title;return Object(o.jsx)(r.a,{children:Object(o.jsxs)("title",{children:[t," | FOSSology"]})})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u.a})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return o.a}));var r,o=n(56),c=(n(0),n(1)),a=function(e){var t=e.message,n=e.type,r=e.setShow;return Object(c.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(c.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(c.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(c.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(c.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return r(!1)},children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},i=n(22),s=n(12).d.button(r||(r=Object(i.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),l=function(e){var t=e.type,n=e.onClick,r=e.className,o=e.children;return Object(c.jsx)(s,{type:t,onClick:n,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(r),children:o})},u=(n(49),n(50)),d=function(e){var t=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},49:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.src,n=e.alt,o=e.style,c=e.className,a=e.width,i=e.height,s=e.align;return Object(r.jsx)("img",{src:t,alt:n,style:o,className:c,width:a,height:i,align:s})}},50:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.type,n=e.name,o=e.value,c=e.id,a=e.className,i=e.onChange,s=e.children,l=e.checked,u=void 0!==l&&l,d=e.placeholder,f=void 0===d?null:d,h=e.disabled,p=void 0!==h&&h,m=e.options,j=void 0===m?null:m,b=e.multiple,g=void 0!==b&&b,O=e.property,v=e.valueProperty,y=e.noDataMessage,x=void 0===y?"No Data Found":y;return"radio"===t||"checkbox"===t?Object(r.jsxs)("div",{className:"my-0",children:[Object(r.jsx)("input",{type:t,name:n,value:o,className:a&&"mr-2 ".concat(a),onChange:i,checked:u,disabled:p,id:c}),Object(r.jsx)("label",{htmlFor:c,className:"font-medium ml-2",children:s})]}):"select"===t?Object(r.jsxs)("div",{className:"my-0 py-0",children:[s&&Object(r.jsx)("label",{htmlFor:c,className:"font-demi",children:s}),"\u2003",Object(r.jsx)("select",{name:n,className:a?"mr-2 form-control ".concat(a):"mr-2 form-control",value:o,onChange:i,multiple:g&&g,size:g?"15":"",id:c,children:j.length>0?j.map((function(e,t){return Object(r.jsx)("option",{value:v?e[v]:e.id,disabled:e.disabled,children:O?e[O]:e},e.id||t)})):Object(r.jsx)("option",{className:"font-demi",disabled:!0,children:x})})]}):Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsx)("label",{htmlFor:c,className:"font-demi",children:s}),Object(r.jsx)("input",{type:t,name:n,value:o,className:"file"===t?"ml-3 ".concat(a):"form-control ".concat(a),onChange:i,checked:u,placeholder:f,id:c})]})}},52:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},54:function(e,t,n){"use strict";var r="".concat("http","://").concat("localhost/repo/api/v2"),o={jobs:{details:function(e){return"".concat(r,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(r,"/jobs")},scheduleReport:function(){return"".concat(r,"/report")},downloadReport:function(e){return"".concat(r,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(r,"/tokens")}},search:{search:function(){return"".concat(r,"/search")}},users:{self:function(){return"".concat(r,"/users/self")},getAll:function(){return"".concat(r,"/users")},getSingle:function(e){return"".concat(r,"/users/").concat(e)},delete:function(e){return"".concat(r,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(r,"/folders")},getSingle:function(e){return"".concat(r,"/folders/").concat(e)},create:function(){return"".concat(r,"/folders")},read:function(e){return"".concat(r,"/folders/").concat(e)},edit:function(e){return"".concat(r,"/folders/").concat(e)},delete:function(e){return"".concat(r,"/folders/").concat(e)},move:function(e){return"".concat(r,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(r,"/uploads")},getId:function(e){return"".concat(r,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(r,"/uploads")}},organize:{uploads:{get:function(){return"".concat(r,"/uploads")},delete:function(e){return"".concat(r,"/uploads/").concat(e)},move:function(e){return"".concat(r,"/uploads/").concat(e)},copy:function(e){return"".concat(r,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(r,"/groups")},getAll:function(){return"".concat(r,"/groups")}}},license:{get:function(){return"".concat(r,"/license")},createCandidateLicense:function(){return"".concat(r,"/license")}},info:{info:function(){return"".concat(r,"/info")},health:function(){return"".concat(r,"/health")}}};t.a=o},55:function(e,t,n){"use strict";var r=n(59),o=n(48),c=n(58),a=n(45),i=n(52),s=n(14);t.a=function e(t){var n,l,u=t.url,d=t.method,f=t.body,h=t.groupName,p=t.headers,m=void 0===p?{}:p,j=t.queryParams,b=t.isMultipart,g=void 0!==b&&b,O=t.noHeaders,v=void 0!==O&&O,y=t.addGroupName,x=void 0===y||y,w=t.retries,N=void 0===w?0:w,S=t.isFile,C=void 0!==S&&S;(n=g?new Headers(Object(o.a)({},m)):new Headers(Object(o.a)({"content-type":"application/json",accept:"application/json"},m)),C&&(n=new Headers(Object(o.a)({},m))),x)&&n.append("groupName",h||Object(s.c)("currentGroup")||(null===(l=Object(s.c)("user"))||void 0===l?void 0:l.default_group));v&&(n={});var F={method:d,headers:n,body:f},k=u;return F.body=f?g?f:JSON.stringify(f):null,j&&(k="".concat(u,"?").concat(Object(c.stringify)(j))),fetch(k,F).then((function(t){if(t.ok){var n,o=Object(r.a)(t.headers.entries());try{for(o.s();!(n=o.n()).done;){var c=n.value;"x-total-pages"===c[0]&&Object(s.h)("pages",c[1])}}catch(l){o.e(l)}finally{o.f()}return C?t:t.json()}return N>0?setTimeout((function(){e({url:u,method:d,headers:m,retries:N-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(a.e)({message:e.message}):Object(a.e)({message:i.a.forbiddenResource}):Promise.reject(n)}))}))}},60:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n(59),o=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*r));return t},c=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},a=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},i=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},s=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},l=function(e){var t,n=e.split(";"),o="download.txt",c=Object(r.a)(n);try{for(c.s();!(t=c.n()).done;){var a=t.value.trim().match(/filename="(.*)"/);if(null!=a){o=a[1];break}}}catch(i){c.e(i)}finally{c.f()}return o}},64:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return h}));var r=n(54),o=n(45),c=n(55),a=function(e,t,n){var a=r.a.folders.move(t);return Object(c.a)({url:a,method:"PUT",headers:{Authorization:Object(o.a)(),parent:e,action:n}})},i=function(e){return function(e){var t=r.a.folders.getAll();return Object(c.a)({url:t,method:"GET",headers:{Authorization:Object(o.a)()},groupName:e})}(e).then((function(e){return e}))},s=function(e){return function(e){var t=r.a.folders.getSingle(e);return Object(c.a)({url:t,method:"GET",headers:{Authorization:Object(o.a)()}})}(e).then((function(e){return e}))},l=function(e){return function(e){var t=r.a.folders.delete(e);return Object(c.a)({url:t,method:"DELETE",headers:{Authorization:Object(o.a)()}})}(e.id).then((function(e){return e}))},u=function(e){return function(e,t,n){var a=r.a.folders.create();return Object(c.a)({url:a,method:"POST",headers:{Authorization:Object(o.a)(),parentFolder:e,folderName:t,folderDescription:n}})}(e.parentFolder,e.folderName,e.folderDescription).then((function(e){return e}))},d=function(e){return function(e,t,n){var a=r.a.folders.edit(n);return Object(c.a)({url:a,method:"PATCH",headers:{Authorization:Object(o.a)(),name:e,description:t}})}(e.name,e.description,e.id).then((function(e){return e}))},f=function(e){var t=e.parent,n=e.id;return a(t,n,"move").then((function(e){return e}))},h=function(e){var t=e.parent,n=e.id;return a(t,n,"copy").then((function(e){return e}))}}}]);
//# sourceMappingURL=19.ee0570e5.chunk.js.map