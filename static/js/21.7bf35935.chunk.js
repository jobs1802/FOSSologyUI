/*! For license information please see 21.7bf35935.chunk.js.LICENSE.txt */
(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[21],{230:function(e,n,t){"use strict";t.r(n);var r=t(59),o=t(51),c=t(21),i=t(0),a=t(50),s=t(52),l=t(73),d=t(1);n.default=function(){var e=Object(i.useState)(!1),n=Object(c.a)(e,2),t=n[0],m=n[1],u=Object(i.useState)(l.f),p=Object(c.a)(u,2),h=p[0],f=p[1],b=function(e){var n=e.target.name;Object.keys(h).find((function(e){return e===n}))&&f(Object(o.a)(Object(o.a)({},h),{},Object(r.a)({},e.target.name,e.target.checked)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.a,{title:"FOSSology Maintenance"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h1",{className:"font-size-main-heading mt-4",children:"FOSSology Maintenance"})}),Object(d.jsxs)("div",{className:"col-12",children:[Object(d.jsxs)("form",{className:"my-3",children:[Object(d.jsx)(s.c,{type:"checkbox",checked:h.allNonSlow,name:"allNonSlow",className:"my-3",id:"all-non-slow",onChange:function(e){return b(e)},children:"Run all non slow maintenance operations."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.allOperations,name:"allOperations",className:"my-3",id:"all-operations",onChange:function(e){return b(e)},children:"Run all maintenance operations."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.validateFolderContents,name:"validateFolderContents",className:"my-3",id:"validate-folder-contents",onChange:function(e){return b(e)},children:"Validate folder contents."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvGoldFiles,name:"rmvGoldFiles",className:"my-3",id:"remove-gold-files",onChange:function(e){return b(e)},children:"Remove orphaned gold files."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvOrphanedRows,name:"rmvOrphanedRows",className:"my-3",id:"remove-orphaned-rows",onChange:function(e){return b(e)},children:"Remove orphaned rows from database."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvLogFiles,name:"rmvLogFiles",className:"my-3",id:"remove-log-files",onChange:function(e){return b(e)},children:"Remove orphaned log files from file system."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.normalizePriority,name:"normalizePriority",className:"my-3",id:"normalize-priority",onChange:function(e){return b(e)},children:"Normalize priority"}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvUploads,name:"rmvUploads",className:"my-3",id:"remove-uploads",onChange:function(e){return b(e)},children:"Remove uploads with no pfiles."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvTokens,name:"rmvTokens",className:"my-3",id:"remove-tokens",onChange:function(e){return b(e)},children:"Remove expired personal access tokens."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvTempTables,name:"rmvTempTables",className:"my-3",id:"remove-temp-tables",onChange:function(e){return b(e)},children:"Remove orphaned temp tables."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.analyseDb,name:"analyseDb",className:"my-3",id:"analyse-db",onChange:function(e){return b(e)},children:"Vacuum Analyze the database."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvRepoFiles,name:"rmvRepoFiles",className:"my-3",id:"remove-repo-files",onChange:function(e){return b(e)},children:"Remove orphaned files from the repository (slow)."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.dbReindexing,name:"dbReindexing",className:"my-3",id:"database-reindexing",onChange:function(e){return b(e)},children:"Reindexing of database (This activity may take 5-10 mins. Execute only when system is not in use)."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.verbose,name:"verbose",className:"my-3",id:"verbose",onChange:function(e){return b(e)},children:"Verbose (turns on debugging output)."}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvRepoOldFiles1,name:"rmvRepoOldFiles1",className:"mt-3",id:"rmv-repo-old-files-1",onChange:function(e){return b(e)},children:"Remove older gold files from repository."}),Object(d.jsx)(s.c,{type:"date",className:"col-3",name:"rmvRepoOldFiles1Date",id:"remove-repo-old-files-1-date"}),Object(d.jsx)(s.c,{type:"checkbox",checked:h.rmvRepoOldFiles2,name:"rmvRepoOldFiles2",className:"mt-3",id:"rmv-repo-old-files-2",onChange:function(e){return b(e)},children:"Remove older gold files from repository."}),Object(d.jsx)(s.c,{type:"date",className:"col-3",name:"rmvRepoOldFiles1Date",id:"remove-repo-old-files-1-date"}),Object(d.jsx)(s.b,{type:"submit",onClick:function(e){e.preventDefault(),m(!0),setTimeout((function(){m(!1)}),3e3)},className:"mt-4",children:t?Object(d.jsx)(s.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Queue the maintanance agent"})]}),Object(d.jsxs)("div",{className:"my-3",children:[Object(d.jsx)("span",{className:"mr-2",children:"More information about these operations can be found"}),Object(d.jsx)("a",{href:"https://github.com/fossology/fossology/wiki/Maintenance-Agent",children:"here"})]})]})]})})]})}},50:function(e,n,t){"use strict";t(0);var r=t(66),o=t(1);n.a=function(e){var n=e.title;return Object(o.jsx)(r.a,{children:Object(o.jsxs)("title",{children:[n," | FOSSology"]})})}},51:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(59);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}},52:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return d.a})),t.d(n,"e",(function(){return m})),t.d(n,"d",(function(){return o.a}));var r,o=t(58),c=(t(0),t(1)),i=function(e){var n=e.message,t=e.type,r=e.setShow;return Object(c.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(c.jsx)("div",{className:"alert bg-".concat(t," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(c.jsxs)("div",{className:"d-flex",children:["danger"===t&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(c.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===t&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(c.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),n,Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return r(!1)},children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},a=t(22),s=t(11).d.button(r||(r=Object(a.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),l=function(e){var n=e.type,t=e.onClick,r=e.className,o=e.children;return Object(c.jsx)(s,{type:n,onClick:t,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(r),children:o})},d=(t(53),t(54)),m=function(e){var n=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:n,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},53:function(e,n,t){"use strict";t(0);var r=t(1);n.a=function(e){var n=e.src,t=e.alt,o=e.style,c=e.className,i=e.width,a=e.height,s=e.align;return Object(r.jsx)("img",{src:n,alt:t,style:o,className:c,width:i,height:a,align:s})}},54:function(e,n,t){"use strict";t(0);var r=t(1);n.a=function(e){var n=e.type,t=e.name,o=e.value,c=e.id,i=e.className,a=e.onChange,s=e.children,l=e.checked,d=void 0!==l&&l,m=e.placeholder,u=void 0===m?null:m,p=e.disabled,h=void 0!==p&&p,f=e.options,b=void 0===f?null:f,j=e.multiple,v=void 0!==j&&j,y=e.property,x=e.valueProperty,O=e.noDataMessage,g=void 0===O?"No Data Found":O;return"radio"===n||"checkbox"===n?Object(r.jsxs)("div",{className:"my-0",children:[Object(r.jsx)("input",{type:n,name:t,value:o,className:i&&"mr-2 ".concat(i),onChange:a,checked:d,disabled:h,id:c}),Object(r.jsx)("label",{htmlFor:c,className:"font-medium ml-2",children:s})]}):"select"===n?Object(r.jsxs)("div",{className:"my-0 py-0",children:[s&&Object(r.jsx)("label",{htmlFor:c,className:"font-demi",children:s}),"\u2003",Object(r.jsx)("select",{name:t,className:i?"mr-2 form-control ".concat(i):"mr-2 form-control",value:o,onChange:a,multiple:v&&v,size:v?"15":"",id:c,children:b.length>0?b.map((function(e,n){return Object(r.jsx)("option",{value:x?e[x]:e.id,disabled:e.disabled,children:y?e[y]:e},e.id||n)})):Object(r.jsx)("option",{className:"font-demi",disabled:!0,children:g})})]}):Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsx)("label",{htmlFor:c,className:"font-demi",children:s}),Object(r.jsx)("input",{type:n,name:t,value:o,className:"file"===n?"ml-3 ".concat(i):"form-control ".concat(i),onChange:a,checked:d,placeholder:u,id:c})]})}},55:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var a in r)t.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},57:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t(4);var r=t(0),o=t.n(r),c=o.a.createContext({});c.Consumer,c.Provider;function i(e,n){var t=Object(r.useContext)(c);return e||t[n]||n}},58:function(e,n,t){"use strict";var r=t(4),o=t(8),c=t(55),i=t.n(c),a=t(0),s=t.n(a),l=t(57),d=["bsPrefix","variant","animation","size","children","as","className"],m=s.a.forwardRef((function(e,n){var t=e.bsPrefix,c=e.variant,a=e.animation,m=e.size,u=e.children,p=e.as,h=void 0===p?"div":p,f=e.className,b=Object(o.a)(e,d),j=(t=Object(l.a)(t,"spinner"))+"-"+a;return s.a.createElement(h,Object(r.a)({ref:n},b,{className:i()(f,j,m&&j+"-"+m,c&&"text-"+c)}),u)}));m.displayName="Spinner",n.a=m},59:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},73:function(e,n,t){"use strict";t.d(n,"s",(function(){return i})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return s})),t.d(n,"g",(function(){return l})),t.d(n,"k",(function(){return d})),t.d(n,"h",(function(){return m})),t.d(n,"l",(function(){return u})),t.d(n,"j",(function(){return p})),t.d(n,"e",(function(){return h})),t.d(n,"m",(function(){return f})),t.d(n,"n",(function(){return b})),t.d(n,"o",(function(){return j})),t.d(n,"q",(function(){return v})),t.d(n,"p",(function(){return y})),t.d(n,"r",(function(){return x})),t.d(n,"t",(function(){return O})),t.d(n,"c",(function(){return g})),t.d(n,"i",(function(){return k})),t.d(n,"d",(function(){return N})),t.d(n,"f",(function(){return w}));var r,o,c=t(13),i=[{id:0,name:"open"},{id:1,name:"in progress"},{id:2,name:"closed"},{id:3,name:"rejected"}],a=[{id:0,name:"me"},{id:1,name:"unassigned"}],s=[{id:0,name:"-- select action --",reportFormat:"0",disabled:!0},{id:1,name:"Export DEP5",reportFormat:"dep5"},{id:2,name:"Export ReadMe_OSS",reportFormat:"readmeoss"},{id:3,name:"Export SPDX RDF",reportFormat:"spdx2"},{id:4,name:"Export SPDX tag:value",reportFormat:"spdx2tv"},{id:5,name:"Export Unified Report",reportFormat:"unifiedreport"}],l={type:"success",text:""},d={searchType:"allfiles",uploadId:"",filename:"",tag:"",filesizemin:"",filesizemax:"",license:"",copyright:"",page:1,limit:10},m={type:"danger",text:""},u={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,fileInput:null},p={analysis:Object(c.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(r=Object(c.c)("user"))||void 0===r?void 0:r.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},h=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],f={folder:"",editUpload:"",reportUpload:"",newLicense:"licenseCanditate",licenseInfoInFile:!0,licenseConcluded:!1,licenseDecision:!0,existingDecisions:!0,importDiscussed:!0,copyright:!1},b={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"server",groupName:""},j={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"url"},v={url:"",name:""},y={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"vcs"},x={vcsType:"git",vcsUrl:"",vcsBranch:"",vcsName:"",vcsUsername:"",vcsPassword:""},O=[{id:"git",type:"Git"},{id:"svn",type:"SVN"}],g=[{id:10,entry:"10"},{id:25,entry:"25"},{id:50,entry:"50"},{id:100,entry:"100"}],k={analysis:Object(c.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(o=Object(c.c)("user"))||void 0===o?void 0:o.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},N=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],w={allNonSlow:!1,allOperations:!1,validateFolderContents:!1,rmvGoldFiles:!1,rmvOrphanedRows:!1,rmvLogFiles:!1,normalizePriority:!1,rmvUploads:!1,rmvTokens:!1,rmvTempTables:!1,analyseDb:!1,rmvRepoFiles:!1,dbReindexing:!1,verbose:!1,rmvRepoOldFiles1:!1,rmvRepoOldFiles2:!1}}}]);
//# sourceMappingURL=21.7bf35935.chunk.js.map