(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[35],{180:function(e,n,t){"use strict";t.r(n);var r=t(57),a=t(48),c=t(21),o=t(0),i=t(52),s=t(46),u=t(47),d=t(88),l=t(64),p=t(94),h=t(89),f=t(86),j=t(1);n.default=function(){var e,n=Object(o.useState)(f.n),t=Object(c.a)(n,2),m=t[0],b=t[1],g=Object(o.useState)(f.d),O=Object(c.a)(g,2),y=O[0],v=O[1],x=Object(o.useState)(f.h),k=Object(c.a)(x,2),C=k[0],S=k[1],w=Object(o.useState)(f.p),D=Object(c.a)(w,2),L=D[0],A=D[1],N=Object(o.useState)(!1),E=Object(c.a)(N,2),I=E[0],T=E[1],M=Object(o.useState)(!1),R=Object(c.a)(M,2),F=R[0],U=R[1],G=Object(o.useState)(),P=Object(c.a)(G,2),z=P[0],_=P[1],V=function(e){"checkbox"===e.target.type?b(Object(a.a)(Object(a.a)({},m),{},Object(r.a)({},e.target.name,e.target.checked))):"file"===e.target.type?b(Object(a.a)(Object(a.a)({},m),{},Object(r.a)({},e.target.name,e.target.files[0]))):b(Object(a.a)(Object(a.a)({},m),{},Object(r.a)({},e.target.name,e.target.value)))},X=function(e){A(Object(a.a)(Object(a.a)({},L),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(o.useEffect)((function(){Object(l.e)().then((function(e){v(e)})).catch((function(e){_({type:"danger",text:e.message}),U(!0)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{title:"Upload from URL"}),Object(j.jsxs)("div",{className:"main-container my-3",children:[F&&Object(j.jsx)(u.a,{type:z.type,setShow:U,message:z.text}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-lg-8 col-md-12 col-sm-12 col-12",children:[Object(j.jsx)("h1",{className:"font-size-main-heading",children:"Upload from URL"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"font-demi",children:"To manage your own group permissions go into Admin > Groups > Manage Group Users. To manage permissions for this one upload, go to Admin > Upload Permissions."}),Object(j.jsx)("p",{children:"This option permits uploading a files from the server."}),Object(j.jsxs)("form",{className:"my-3",children:[Object(j.jsx)(u.c,{type:"select",name:"folderId",id:"upload-url-folder-id",onChange:function(e){return V(e)},options:y,property:"name",value:null===y||void 0===y?void 0:y.id,children:"Select the folder for storing the uploaded files:"}),Object(j.jsx)(u.c,{type:"text",name:"url",id:"upload-url-file-path",onChange:function(e){return X(e)},value:L.url,children:"Enter the URL to the file or directory:"}),Object(j.jsx)(u.c,{type:"text",name:"name",id:"upload-url-name",onChange:function(e){return X(e)},value:L.name,children:"(Optional) Enter a viewable name for this file or directory:"}),Object(j.jsx)("div",{className:"mb-3 mt-n2",children:"Note: If no name is provided, then the uploaded file (directory) name will be used."}),Object(j.jsx)("div",{className:"my-3",children:Object(j.jsxs)("label",{htmlFor:"upload",className:"font-demi w-100",children:["(Optional) Enter a description of this file:",Object(j.jsx)("textarea",{name:"uploadDescription",className:"form-control font-regular mt-2",value:m.uploadDescription,id:"upload-url-description",rows:"3",onChange:function(e){return V(e)}})]})}),Object(j.jsx)(d.a,{accessLevel:m.accessLevel,ignoreScm:m.ignoreScm,analysis:C.analysis,decider:C.decider,reuse:C.reuse,handleChange:V,handleScanChange:function(e){var n=e.target.name;Object.keys(C.analysis).find((function(e){return e===n}))?S(Object(a.a)(Object(a.a)({},C),{},{analysis:Object(a.a)(Object(a.a)({},C.analysis),{},Object(r.a)({},e.target.name,e.target.checked))})):Object.keys(C.decider).find((function(e){return e===n}))?S(Object(a.a)(Object(a.a)({},C),{},{decider:Object(a.a)(Object(a.a)({},C.decider),{},Object(r.a)({},e.target.name,e.target.checked))})):S(Object(a.a)(Object(a.a)({},C),{},{reuse:Object(a.a)(Object(a.a)({},C.reuse),{},Object(r.a)({},e.target.name,e.target.checked))}))}}),Object(j.jsx)(u.b,{type:"submit",onClick:function(n){n.preventDefault(),T(!0),Object(p.b)(m,L).then((function(n){_({type:"success",text:"".concat(i.a.queuedUpload," #").concat(n.message)}),e=n.message})).then((function(){return Object(p.d)(e,10)})).then((function(){setTimeout((function(){return Object(h.b)(m.folderId,e,C).then((function(){_({type:"success",text:i.a.scheduledAnalysis}),b(f.n),S(f.h)})).catch((function(e){_({type:"danger",text:e.message})}))}),15e4)})).catch((function(e){_({type:"danger",text:e.message})})).finally((function(){T(!1),U(!0)}))},className:"mt-4",children:I?Object(j.jsx)(u.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Upload"})]})]})})]})]})}},60:function(e,n,t){"use strict";t.d(n,"f",(function(){return a})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"d",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(59),a=function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=t.length,a=0;a<e;a++)n+=t.charAt(Math.floor(Math.random()*r));return n},c=function(e){return Date.prototype.addDays=function(e){var n=new Date(this.valueOf());return n.setDate(n.getDate()+e),n},(new Date).addDays(e).toISOString().split("T")[0]},o=function(e){if(!e)return e;var n=e.split(" ");return 1===n.length?n[0].substring(0,2).toUpperCase():n.map((function(e,n){return n<3?e[0]:null})).join("").toUpperCase()},i=function(e,n){window.scrollTo({top:0}),n({type:"danger",text:e.message})},s=function(e){var n=e.match(/report\/([0-9]+)/);return null!=n?n[1]:null},u=function(e){var n,t=e.split(";"),a="download.txt",c=Object(r.a)(t);try{for(c.s();!(n=c.n()).done;){var o=n.value.trim().match(/filename="(.*)"/);if(null!=o){a=o[1];break}}}catch(i){c.e(i)}finally{c.f()}return a}},72:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var r=t(54),a=t(45),c=t(55),o=t(14),i=function(){return Object(o.c)("groups")},s=function(){return function(){var e=r.a.admin.groups.getAll();return Object(c.a)({url:e,method:"GET",headers:{Authorization:Object(a.a)()},addGroupName:!1})}().then((function(e){return Object(o.h)("groups",e),e}))},u=function(e){return function(e){var n=r.a.admin.groups.create();return Object(c.a)({url:n,method:"POST",headers:{Authorization:Object(a.a)(),name:e},addGroupName:!1})}(e).then((function(e){return e}))}},86:function(e,n,t){"use strict";t.d(n,"r",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"f",(function(){return u})),t.d(n,"j",(function(){return d})),t.d(n,"g",(function(){return l})),t.d(n,"k",(function(){return p})),t.d(n,"i",(function(){return h})),t.d(n,"e",(function(){return f})),t.d(n,"l",(function(){return j})),t.d(n,"m",(function(){return m})),t.d(n,"n",(function(){return b})),t.d(n,"p",(function(){return g})),t.d(n,"o",(function(){return O})),t.d(n,"q",(function(){return y})),t.d(n,"s",(function(){return v})),t.d(n,"c",(function(){return x})),t.d(n,"h",(function(){return k})),t.d(n,"d",(function(){return C}));var r,a,c=t(14),o=[{id:0,name:"open"},{id:1,name:"in progress"},{id:2,name:"closed"},{id:3,name:"rejected"}],i=[{id:0,name:"me"},{id:1,name:"unassigned"}],s=[{id:0,name:"-- select action --",reportFormat:"0",disabled:!0},{id:1,name:"Export DEP5",reportFormat:"dep5"},{id:2,name:"Export ReadMe_OSS",reportFormat:"readmeoss"},{id:3,name:"Export SPDX RDF",reportFormat:"spdx2"},{id:4,name:"Export SPDX tag:value",reportFormat:"spdx2tv"},{id:5,name:"Export Unified Report",reportFormat:"unifiedreport"}],u={type:"success",text:""},d={searchType:"allfiles",uploadId:"",filename:"",tag:"",filesizemin:"",filesizemax:"",license:"",copyright:"",page:1,limit:10},l={type:"danger",text:""},p={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,fileInput:null},h={analysis:Object(c.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(r=Object(c.c)("user"))||void 0===r?void 0:r.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},f=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],j={folder:"",editUpload:"",reportUpload:"",newLicense:"licenseCanditate",licenseInfoInFile:!0,licenseConcluded:!1,licenseDecision:!0,existingDecisions:!0,importDiscussed:!0,copyright:!1},m={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"server",groupName:""},b={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"url"},g={url:"",name:""},O={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"vcs"},y={vcsType:"git",vcsUrl:"",vcsBranch:"",vcsName:"",vcsUsername:"",vcsPassword:""},v=[{id:"git",type:"Git"},{id:"svn",type:"SVN"}],x=[{id:10,entry:"10"},{id:25,entry:"25"},{id:50,entry:"50"},{id:100,entry:"100"}],k={analysis:Object(c.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(a=Object(c.c)("user"))||void 0===a?void 0:a.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},C=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}]},88:function(e,n,t){"use strict";var r=t(0),a=t(47),c=t(1);var o=function(e){var n=e.ignoreScm,t=e.handleChange;return Object(c.jsx)("div",{id:"upload-ignore-files",className:"mt-4",children:Object(c.jsxs)(a.c,{type:"checkbox",checked:n,name:"ignoreScm",id:"upload-ignore-scm",onChange:function(e){return t(e)},children:["Ignore SCM files (Git, SVN, TFS) and files with particular Mimetype\xa0",Object(c.jsx)(a.e,{title:"Configure mimetypes from Admin-Customize-Skip MimeTypes from scanning"})]})})};var i=function(e){var n=e.accessLevel,t=e.handleChange;return Object(c.jsxs)("div",{id:"upload-access-level",className:"mt-4",children:[Object(c.jsxs)(a.c,{type:"radio",value:"private",name:"accessLevel",id:"upload-access-level-private",checked:"private"===n,onChange:function(e){return t(e)},children:["Visible only for active group\xa0",Object(c.jsx)(a.e,{title:"which is the currently selected group"})]}),Object(c.jsxs)(a.c,{type:"radio",value:"protected",name:"accessLevel",id:"upload-access-level-protected",checked:"protected"===n,onChange:function(e){return t(e)},children:["Visible for all groups\xa0",Object(c.jsx)(a.e,{title:"which are accessible by you now"})]}),Object(c.jsxs)(a.c,{type:"radio",value:"public",name:"accessLevel",id:"upload-access-level-public",checked:"public"===n,onChange:function(e){return t(e)},children:["Make Public\xa0",Object(c.jsx)(a.e,{title:"visible for all users"})]})]})},s=t(50);var u=function(e){var n=e.analysis,t=e.handleChange;return Object(c.jsxs)("div",{id:"uplod-optional-analysis",className:"mt-4",children:[Object(c.jsx)("p",{className:"font-demi",children:"Select optional analysis"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.bucket,name:"bucket",id:"upload-analysis-bucket",onChange:function(e){return t(e)},children:"Bucket Analysis"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.copyrightEmailAuthor,name:"copyrightEmailAuthor",id:"upload-analysis-copyright-email-author",onChange:function(e){return t(e)},children:"Copyright/Email/URL/Author Analysis"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.ecc,name:"ecc",id:"upload-analysis-ecc",onChange:function(e){return t(e)},children:"ECC Analysis, scanning for text fragments potentially relevant for export control"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.keyword,name:"keyword",id:"upload-analysis-keyword",onChange:function(e){return t(e)},children:"Keyword Analysis"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.mime,name:"mime",id:"upload-analysis-mime",onChange:function(e){return t(e)},children:"MIME-type Analysis (Determine mimetype of every file. Not needed for licenses or buckets)"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.monk,name:"monk",id:"upload-analysis-monk",onChange:function(e){return t(e)},children:"Monk License Analysis, scanning for licenses performing a text comparison"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.nomos,name:"nomos",id:"upload-analysis-nomos",onChange:function(e){return t(e)},children:"Nomos License Analysis, scanning for licenses using regular expressions"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.ojo,name:"ojo",id:"upload-analysis-ojo",onChange:function(e){return t(e)},children:"Ojo License Analysis, scanning for licenses using SPDX-License-Identifier"}),Object(c.jsx)(s.a,{type:"checkbox",checked:n.package,name:"package",id:"upload-analysis-package",onChange:function(e){return t(e)},children:"Package Analysis (Parse package headers)"})]})};var d=function(e){var n=e.decider,t=e.handleChange;return Object(c.jsxs)("div",{id:"upload-concluded-license-decider",className:"mt-4",children:[Object(c.jsxs)("p",{className:"font-demi",children:["Automatic Concluded License Decider,",Object(c.jsx)(a.e,{title:"only for relevant files"})," based on"]}),Object(c.jsx)(a.c,{type:"checkbox",checked:n.nomosMonk,name:"nomosMonk",id:"upload-decider-nomos-monk",onChange:function(e){return t(e)},children:"... scanners matches if all Nomos findings are within the Monk findings"}),Object(c.jsx)(a.c,{type:"checkbox",checked:n.ojoDecider,name:"ojoDecider",id:"upload-decider-ojo-decider",onChange:function(e){return t(e)},children:".. scanners matches if Ojo findings are no contradiction with other findings"}),Object(c.jsx)(a.c,{type:"checkbox",checked:n.bulkReused,name:"bulkReused",id:"upload-decider-bulk-reused",onChange:function(e){return t(e)},children:"... bulk phrases from reused packages"}),Object(c.jsx)(a.c,{type:"checkbox",checked:n.newScanner,name:"newScanner",id:"upload-decider-new-scanner",onChange:function(e){return t(e)},children:"... new scanner results, i.e., decisions were marked as work in progress if new scanner finds additional licenses"})]})},l=t(57),p=t(48),h=t(21),f=t(64),j=t(90),m=t(72),b=t(52),g=function(e){var n=e.reuse,t=e.handleChange,o=Object(r.useState)({groupList:[{id:3,name:"fossy"}],folderList:[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],uploadList:[{folderId:1,uploadId:null,uploadName:"",uploadDescription:""}],reuseFolder:1}),i=Object(h.a)(o,2),s=i[0],u=i[1];Object(r.useEffect)((function(){u((function(e){return Object(p.a)(Object(p.a)({},e),{},{groupList:Object(m.c)()})}))}),[]),Object(r.useEffect)((function(){Object(f.e)(n.reuseGroup).then((function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},{folderList:e})}))})).catch((function(){}))}),[n.reuseGroup]),Object(r.useEffect)((function(){Object(j.c)(s.reuseFolder,n.reuseGroup).then((function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},{uploadList:e})}))})).catch((function(){}))}),[n.reuseGroup,s.reuseFolder]);return Object(c.jsxs)("div",{id:"upload-reuse",className:"mt-4",children:[Object(c.jsxs)("p",{className:"font-demi",children:["(Optional) Reuse",Object(c.jsx)(a.e,{title:"copy clearing decisions if there is the same file hash between two files"})]}),Object(c.jsx)(a.c,{type:"select",name:"reuseGroup",id:"upload-file-reuse-group",onChange:t,options:s.groupList,value:n.reuseGroup,property:"name",valueProperty:"name",noDataMessage:b.a.noGroup,children:"Select the reuse group:"}),Object(c.jsx)(a.c,{type:"select",name:"reuseFolder",id:"upload-file-reuse-folder",onChange:function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(l.a)({},e.target.name,e.target.value))}))},options:s.folderList,value:s.reuseFolder,property:"name",noDataMessage:b.a.noFolder,children:"Select the reuse folder:"}),Object(c.jsx)(a.c,{type:"select",name:"reuseUpload",id:"upload-file-reuse-upload",onChange:t,options:s.uploadList,value:parseInt(n.reuseUpload,10),property:"uploadname",valueProperty:"id",noDataMessage:b.a.noUploads,children:"Select the reuse upload:"}),Object(c.jsxs)(a.c,{type:"checkbox",checked:n.reuseEnhanced,name:"reuseEnhanced",id:"upload-file-reuse-enhanced",onChange:t,children:["Enhanced reuse (slower)",Object(c.jsx)(a.e,{title:"will copy a clearing decision if the two files differ by one line determined by a diff tool"})]}),Object(c.jsxs)(a.c,{type:"checkbox",checked:n.reuseMain,name:"reuseMain",id:"upload-file-reuse-main",onChange:t,children:["Reuse main license/s",Object(c.jsx)(a.e,{title:"will copy a main license decision if any"})]}),Object(c.jsxs)(a.c,{type:"checkbox",checked:n.reuseReport,name:"reuseReport",id:"upload-file-reuse-report",onChange:t,children:["Reuse report configuration settings",Object(c.jsx)(a.e,{title:"use to copy all the information from conf page(if any)"})]}),Object(c.jsxs)(a.c,{type:"checkbox",checked:n.reuseCopyright,name:"reuseCopyright",id:"upload-file-reuse-copyright",onChange:t,children:["Reuse edited and deactivated copyrights",Object(c.jsx)(a.e,{title:"use to copy edited and deactivated copyrights from the reused package"})]})]})};n.a=function(e){var n=e.accessLevel,t=e.ignoreScm,r=e.analysis,a=e.decider,s=e.reuse,l=e.handleChange,p=e.handleScanChange;return Object(c.jsxs)(c.Fragment,{children:[t&&Object(c.jsx)(o,{ignoreScm:t,handleChange:l}),n&&Object(c.jsx)(i,{accessLevel:n,handleChange:l}),r&&Object(c.jsx)(u,{analysis:r,handleChange:p}),a&&Object(c.jsx)(d,{decider:a,handleChange:p}),s&&Object(c.jsx)(g,{reuse:s,handleChange:p})]})}},89:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return u}));var r=t(54),a=t(45),c=t(55),o=t(60),i=function(e,n,t){return function(e,n,t){var o=r.a.jobs.scheduleAnalysis(),i=null===t||void 0===t?void 0:t.analysis,s=i.bucket,u=i.copyrightEmailAuthor,d=i.ecc,l=i.keyword,p=i.mime,h=i.monk,f=i.nomos,j=i.ojo,m=null===t||void 0===t?void 0:t.decider,b=m.nomosMonk,g=m.bulkReused,O=m.newScanner,y=m.ojoDecider,v=null===t||void 0===t?void 0:t.reuse,x=v.reuseUpload,k=v.reuseGroup,C=v.reuseMain,S=v.reuseEnhanced,w=v.reuseReport,D=v.reuseCopyright;return Object(c.a)({url:o,method:"POST",headers:{Authorization:Object(a.a)(),folderId:e,uploadId:n},body:{analysis:{bucket:s,copyright_email_author:u,ecc:d,keyword:l,mime:p,monk:h,nomos:f,ojo:j,package:t.analysis.package},decider:{nomos_monk:b,bulk_reused:g,new_scanner:O,ojo_decider:y},reuse:{reuse_upload:x,reuse_group:k,reuse_main:C,reuse_enhanced:S,reuse_report:w,reuse_copyright:D}}})}(e,n,t).then((function(e){return e}))},s=function(e,n){return function(e,n){var t=r.a.jobs.scheduleReport();return Object(c.a)({url:t,method:"GET",headers:{Authorization:Object(a.a)(),uploadId:e,reportFormat:n}})}(e,n).then((function(e){return e}))},u=function(e){var n=Object(o.d)(e);return null===n?null:function(e){var n=r.a.jobs.downloadReport(e);return Object(c.a)({url:n,method:"GET",headers:{Authorization:Object(a.a)()},isFile:!0})}(n).then((function(e){return e}))}},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return p})),t.d(n,"d",(function(){return h}));var r=t(48),a=t(9),c=t.n(a),o=t(54),i=t(45),s=t(55),u=function(e,n,t,r,a){var c=o.a.upload.uploadCreate(),u=new FormData;return a&&u.append("fileInput",a,null===a||void 0===a?void 0:a.name),Object(s.a)({url:c,method:"POST",isMultipart:!0,headers:{Authorization:Object(i.a)(),folderId:e,uploadDescription:n,public:t,ignoreScm:r,uploadType:""},body:u})};u.propTypes={folderId:c.a.number,uploadDescription:c.a.string,accessLevel:c.a.string,ignoreScm:c.a.bool,fileInput:c.a.string};var d=function(e){var n=e.folderId,t=e.uploadDescription,r=e.accessLevel,a=e.ignoreScm,c=e.fileInput;return u(n,t,r,a,c).then((function(e){return e}))},l=function(e,n){return function(e,n){var t=o.a.upload.uploadCreate();return Object(s.a)({url:t,method:"POST",headers:Object(r.a)(Object(r.a)({},e),{},{Authorization:Object(i.a)()}),body:n})}(e,n).then((function(e){return e}))},p=function(e,n){return function(e,n){var t=o.a.upload.uploadCreate();return Object(s.a)({url:t,method:"POST",headers:Object(r.a)(Object(r.a)({},e),{},{Authorization:Object(i.a)()}),body:n})}(e,n).then((function(e){return e}))},h=function(e,n){return function(e,n){var t=o.a.upload.getId(e);return Object(s.a)({url:t,method:"GET",retries:n,headers:{Authorization:Object(i.a)()}})}(e,n).then((function(e){return e}))}}}]);
//# sourceMappingURL=35.bcd57e90.chunk.js.map