(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[34],{177:function(e,n,t){"use strict";t.r(n);var r=t(57),c=t(48),a=t(21),o=t(0),i=t(52),s=t(46),u=t(47),d=t(88),l=t(94),p=t(89),h=t(64),f=t(60),j=t(86),m=t(1);n.default=function(){var e,n=Object(o.useState)(j.k),t=Object(a.a)(n,2),b=t[0],g=t[1],O=Object(o.useState)(j.e),y=Object(a.a)(O,2),v=y[0],x=y[1],k=Object(o.useState)(j.i),C=Object(a.a)(k,2),S=C[0],w=C[1],D=Object(o.useState)(!1),A=Object(a.a)(D,2),L=A[0],N=A[1],I=Object(o.useState)(!1),T=Object(a.a)(I,2),E=T[0],F=T[1],M=Object(o.useState)(),R=Object(a.a)(M,2),G=R[0],U=R[1],z=function(e){"checkbox"===e.target.type?g(Object(c.a)(Object(c.a)({},b),{},Object(r.a)({},e.target.name,e.target.checked))):"file"===e.target.type?g(Object(c.a)(Object(c.a)({},b),{},Object(r.a)({},e.target.name,e.target.files[0]))):g(Object(c.a)(Object(c.a)({},b),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(o.useEffect)((function(){Object(h.e)().then((function(e){x(e)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{title:"Upload a New File"}),Object(m.jsxs)("div",{className:"main-container my-3",children:[E&&Object(m.jsx)(u.a,{type:G.type,setShow:F,message:G.text}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-lg-8 col-md-12 col-sm-12 col-12",children:[Object(m.jsx)("h1",{className:"font-size-main-heading",children:"Upload a New file"}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{className:"font-demi",children:"To manage your own group permissions go into Admin > Groups > Manage Group Users. To manage permissions for this one upload, go to Admin > Upload Permissions."}),Object(m.jsx)("p",{children:"This option permits uploading a single file (which may be iso, tar, rpm, jar, zip, bz2, msi, cab, etc.) from your computer to FOSSology. Your FOSSology server has imposed a maximum upload file size of 700Mbytes."}),Object(m.jsxs)("form",{className:"my-3",children:[Object(m.jsx)(u.c,{type:"select",name:"folderId",id:"upload-folder-id",onChange:function(e){return z(e)},options:v,property:"name",value:null===v||void 0===v?void 0:v.id,children:"Select the folder for storing the uploaded files:"}),Object(m.jsx)(u.c,{type:"file",name:"fileInput",id:"upload-file-input",onChange:function(e){return z(e)},children:"Select file to upload:"}),Object(m.jsx)("div",{className:"my-2",children:Object(m.jsxs)("label",{htmlFor:"upload",className:"font-demi w-100",children:["(Optional) Enter a description of this file:",Object(m.jsx)("textarea",{name:"uploadDescription",className:"form-control font-regular mt-2",value:b.uploadDescription,id:"upload-file-description",rows:"3",onChange:function(e){return z(e)}})]})}),Object(m.jsx)(d.a,{accessLevel:b.accessLevel,ignoreScm:b.ignoreScm,analysis:S.analysis,decider:S.decider,reuse:S.reuse,handleChange:z,handleScanChange:function(e){var n=e.target.name;Object.keys(S.analysis).find((function(e){return e===n}))?w(Object(c.a)(Object(c.a)({},S),{},{analysis:Object(c.a)(Object(c.a)({},S.analysis),{},Object(r.a)({},e.target.name,e.target.checked))})):Object.keys(S.decider).find((function(e){return e===n}))?w(Object(c.a)(Object(c.a)({},S),{},{decider:Object(c.a)(Object(c.a)({},S.decider),{},Object(r.a)({},e.target.name,e.target.checked))})):w(Object(c.a)(Object(c.a)({},S),{},{reuse:Object(c.a)(Object(c.a)({},S.reuse),{},Object(r.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:parseInt(e.target.value,10)||e.target.value))}))}}),Object(m.jsx)(u.b,{type:"submit",onClick:function(n){n.preventDefault(),N(!0),Object(l.a)(b).then((function(n){window.scrollTo({top:0}),U({type:"success",text:i.a.uploadSuccess}),e=n.message})).then((function(){setTimeout((function(){return Object(p.b)(b.folderId,e,S).then((function(){window.scrollTo({top:0}),U({type:"success",text:i.a.scheduledAnalysis}),g(j.k),w(j.i)})).catch((function(e){Object(f.e)(e,U)}))}),1200)})).catch((function(e){Object(f.e)(e,U)})).finally((function(){N(!1),F(!0)}))},className:"mt-4",children:L?Object(m.jsx)(u.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Upload"})]})]})})]})]})}},60:function(e,n,t){"use strict";t.d(n,"f",(function(){return c})),t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"d",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(59),c=function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=t.length,c=0;c<e;c++)n+=t.charAt(Math.floor(Math.random()*r));return n},a=function(e){return Date.prototype.addDays=function(e){var n=new Date(this.valueOf());return n.setDate(n.getDate()+e),n},(new Date).addDays(e).toISOString().split("T")[0]},o=function(e){if(!e)return e;var n=e.split(" ");return 1===n.length?n[0].substring(0,2).toUpperCase():n.map((function(e,n){return n<3?e[0]:null})).join("").toUpperCase()},i=function(e,n){window.scrollTo({top:0}),n({type:"danger",text:e.message})},s=function(e){var n=e.match(/report\/([0-9]+)/);return null!=n?n[1]:null},u=function(e){var n,t=e.split(";"),c="download.txt",a=Object(r.a)(t);try{for(a.s();!(n=a.n()).done;){var o=n.value.trim().match(/filename="(.*)"/);if(null!=o){c=o[1];break}}}catch(i){a.e(i)}finally{a.f()}return c}},72:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var r=t(54),c=t(45),a=t(55),o=t(14),i=function(){return Object(o.c)("groups")},s=function(){return function(){var e=r.a.admin.groups.getAll();return Object(a.a)({url:e,method:"GET",headers:{Authorization:Object(c.a)()},addGroupName:!1})}().then((function(e){return Object(o.h)("groups",e),e}))},u=function(e){return function(e){var n=r.a.admin.groups.create();return Object(a.a)({url:n,method:"POST",headers:{Authorization:Object(c.a)(),name:e},addGroupName:!1})}(e).then((function(e){return e}))}},86:function(e,n,t){"use strict";t.d(n,"r",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"f",(function(){return u})),t.d(n,"j",(function(){return d})),t.d(n,"g",(function(){return l})),t.d(n,"k",(function(){return p})),t.d(n,"i",(function(){return h})),t.d(n,"e",(function(){return f})),t.d(n,"l",(function(){return j})),t.d(n,"m",(function(){return m})),t.d(n,"n",(function(){return b})),t.d(n,"p",(function(){return g})),t.d(n,"o",(function(){return O})),t.d(n,"q",(function(){return y})),t.d(n,"s",(function(){return v})),t.d(n,"c",(function(){return x})),t.d(n,"h",(function(){return k})),t.d(n,"d",(function(){return C}));var r,c,a=t(14),o=[{id:0,name:"open"},{id:1,name:"in progress"},{id:2,name:"closed"},{id:3,name:"rejected"}],i=[{id:0,name:"me"},{id:1,name:"unassigned"}],s=[{id:0,name:"-- select action --",reportFormat:"0",disabled:!0},{id:1,name:"Export DEP5",reportFormat:"dep5"},{id:2,name:"Export ReadMe_OSS",reportFormat:"readmeoss"},{id:3,name:"Export SPDX RDF",reportFormat:"spdx2"},{id:4,name:"Export SPDX tag:value",reportFormat:"spdx2tv"},{id:5,name:"Export Unified Report",reportFormat:"unifiedreport"}],u={type:"success",text:""},d={searchType:"allfiles",uploadId:"",filename:"",tag:"",filesizemin:"",filesizemax:"",license:"",copyright:"",page:1,limit:10},l={type:"danger",text:""},p={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,fileInput:null},h={analysis:Object(a.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(r=Object(a.c)("user"))||void 0===r?void 0:r.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},f=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],j={folder:"",editUpload:"",reportUpload:"",newLicense:"licenseCanditate",licenseInfoInFile:!0,licenseConcluded:!1,licenseDecision:!0,existingDecisions:!0,importDiscussed:!0,copyright:!1},m={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"server",groupName:""},b={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"url"},g={url:"",name:""},O={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"vcs"},y={vcsType:"git",vcsUrl:"",vcsBranch:"",vcsName:"",vcsUsername:"",vcsPassword:""},v=[{id:"git",type:"Git"},{id:"svn",type:"SVN"}],x=[{id:10,entry:"10"},{id:25,entry:"25"},{id:50,entry:"50"},{id:100,entry:"100"}],k={analysis:Object(a.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(c=Object(a.c)("user"))||void 0===c?void 0:c.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},C=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}]},88:function(e,n,t){"use strict";var r=t(0),c=t(47),a=t(1);var o=function(e){var n=e.ignoreScm,t=e.handleChange;return Object(a.jsx)("div",{id:"upload-ignore-files",className:"mt-4",children:Object(a.jsxs)(c.c,{type:"checkbox",checked:n,name:"ignoreScm",id:"upload-ignore-scm",onChange:function(e){return t(e)},children:["Ignore SCM files (Git, SVN, TFS) and files with particular Mimetype\xa0",Object(a.jsx)(c.e,{title:"Configure mimetypes from Admin-Customize-Skip MimeTypes from scanning"})]})})};var i=function(e){var n=e.accessLevel,t=e.handleChange;return Object(a.jsxs)("div",{id:"upload-access-level",className:"mt-4",children:[Object(a.jsxs)(c.c,{type:"radio",value:"private",name:"accessLevel",id:"upload-access-level-private",checked:"private"===n,onChange:function(e){return t(e)},children:["Visible only for active group\xa0",Object(a.jsx)(c.e,{title:"which is the currently selected group"})]}),Object(a.jsxs)(c.c,{type:"radio",value:"protected",name:"accessLevel",id:"upload-access-level-protected",checked:"protected"===n,onChange:function(e){return t(e)},children:["Visible for all groups\xa0",Object(a.jsx)(c.e,{title:"which are accessible by you now"})]}),Object(a.jsxs)(c.c,{type:"radio",value:"public",name:"accessLevel",id:"upload-access-level-public",checked:"public"===n,onChange:function(e){return t(e)},children:["Make Public\xa0",Object(a.jsx)(c.e,{title:"visible for all users"})]})]})},s=t(50);var u=function(e){var n=e.analysis,t=e.handleChange;return Object(a.jsxs)("div",{id:"uplod-optional-analysis",className:"mt-4",children:[Object(a.jsx)("p",{className:"font-demi",children:"Select optional analysis"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.bucket,name:"bucket",id:"upload-analysis-bucket",onChange:function(e){return t(e)},children:"Bucket Analysis"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.copyrightEmailAuthor,name:"copyrightEmailAuthor",id:"upload-analysis-copyright-email-author",onChange:function(e){return t(e)},children:"Copyright/Email/URL/Author Analysis"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.ecc,name:"ecc",id:"upload-analysis-ecc",onChange:function(e){return t(e)},children:"ECC Analysis, scanning for text fragments potentially relevant for export control"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.keyword,name:"keyword",id:"upload-analysis-keyword",onChange:function(e){return t(e)},children:"Keyword Analysis"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.mime,name:"mime",id:"upload-analysis-mime",onChange:function(e){return t(e)},children:"MIME-type Analysis (Determine mimetype of every file. Not needed for licenses or buckets)"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.monk,name:"monk",id:"upload-analysis-monk",onChange:function(e){return t(e)},children:"Monk License Analysis, scanning for licenses performing a text comparison"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.nomos,name:"nomos",id:"upload-analysis-nomos",onChange:function(e){return t(e)},children:"Nomos License Analysis, scanning for licenses using regular expressions"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.ojo,name:"ojo",id:"upload-analysis-ojo",onChange:function(e){return t(e)},children:"Ojo License Analysis, scanning for licenses using SPDX-License-Identifier"}),Object(a.jsx)(s.a,{type:"checkbox",checked:n.package,name:"package",id:"upload-analysis-package",onChange:function(e){return t(e)},children:"Package Analysis (Parse package headers)"})]})};var d=function(e){var n=e.decider,t=e.handleChange;return Object(a.jsxs)("div",{id:"upload-concluded-license-decider",className:"mt-4",children:[Object(a.jsxs)("p",{className:"font-demi",children:["Automatic Concluded License Decider,",Object(a.jsx)(c.e,{title:"only for relevant files"})," based on"]}),Object(a.jsx)(c.c,{type:"checkbox",checked:n.nomosMonk,name:"nomosMonk",id:"upload-decider-nomos-monk",onChange:function(e){return t(e)},children:"... scanners matches if all Nomos findings are within the Monk findings"}),Object(a.jsx)(c.c,{type:"checkbox",checked:n.ojoDecider,name:"ojoDecider",id:"upload-decider-ojo-decider",onChange:function(e){return t(e)},children:".. scanners matches if Ojo findings are no contradiction with other findings"}),Object(a.jsx)(c.c,{type:"checkbox",checked:n.bulkReused,name:"bulkReused",id:"upload-decider-bulk-reused",onChange:function(e){return t(e)},children:"... bulk phrases from reused packages"}),Object(a.jsx)(c.c,{type:"checkbox",checked:n.newScanner,name:"newScanner",id:"upload-decider-new-scanner",onChange:function(e){return t(e)},children:"... new scanner results, i.e., decisions were marked as work in progress if new scanner finds additional licenses"})]})},l=t(57),p=t(48),h=t(21),f=t(64),j=t(90),m=t(72),b=t(52),g=function(e){var n=e.reuse,t=e.handleChange,o=Object(r.useState)({groupList:[{id:3,name:"fossy"}],folderList:[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],uploadList:[{folderId:1,uploadId:null,uploadName:"",uploadDescription:""}],reuseFolder:1}),i=Object(h.a)(o,2),s=i[0],u=i[1];Object(r.useEffect)((function(){u((function(e){return Object(p.a)(Object(p.a)({},e),{},{groupList:Object(m.c)()})}))}),[]),Object(r.useEffect)((function(){Object(f.e)(n.reuseGroup).then((function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},{folderList:e})}))})).catch((function(){}))}),[n.reuseGroup]),Object(r.useEffect)((function(){Object(j.c)(s.reuseFolder,n.reuseGroup).then((function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},{uploadList:e})}))})).catch((function(){}))}),[n.reuseGroup,s.reuseFolder]);return Object(a.jsxs)("div",{id:"upload-reuse",className:"mt-4",children:[Object(a.jsxs)("p",{className:"font-demi",children:["(Optional) Reuse",Object(a.jsx)(c.e,{title:"copy clearing decisions if there is the same file hash between two files"})]}),Object(a.jsx)(c.c,{type:"select",name:"reuseGroup",id:"upload-file-reuse-group",onChange:t,options:s.groupList,value:n.reuseGroup,property:"name",valueProperty:"name",noDataMessage:b.a.noGroup,children:"Select the reuse group:"}),Object(a.jsx)(c.c,{type:"select",name:"reuseFolder",id:"upload-file-reuse-folder",onChange:function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(l.a)({},e.target.name,e.target.value))}))},options:s.folderList,value:s.reuseFolder,property:"name",noDataMessage:b.a.noFolder,children:"Select the reuse folder:"}),Object(a.jsx)(c.c,{type:"select",name:"reuseUpload",id:"upload-file-reuse-upload",onChange:t,options:s.uploadList,value:parseInt(n.reuseUpload,10),property:"uploadname",valueProperty:"id",noDataMessage:b.a.noUploads,children:"Select the reuse upload:"}),Object(a.jsxs)(c.c,{type:"checkbox",checked:n.reuseEnhanced,name:"reuseEnhanced",id:"upload-file-reuse-enhanced",onChange:t,children:["Enhanced reuse (slower)",Object(a.jsx)(c.e,{title:"will copy a clearing decision if the two files differ by one line determined by a diff tool"})]}),Object(a.jsxs)(c.c,{type:"checkbox",checked:n.reuseMain,name:"reuseMain",id:"upload-file-reuse-main",onChange:t,children:["Reuse main license/s",Object(a.jsx)(c.e,{title:"will copy a main license decision if any"})]}),Object(a.jsxs)(c.c,{type:"checkbox",checked:n.reuseReport,name:"reuseReport",id:"upload-file-reuse-report",onChange:t,children:["Reuse report configuration settings",Object(a.jsx)(c.e,{title:"use to copy all the information from conf page(if any)"})]}),Object(a.jsxs)(c.c,{type:"checkbox",checked:n.reuseCopyright,name:"reuseCopyright",id:"upload-file-reuse-copyright",onChange:t,children:["Reuse edited and deactivated copyrights",Object(a.jsx)(c.e,{title:"use to copy edited and deactivated copyrights from the reused package"})]})]})};n.a=function(e){var n=e.accessLevel,t=e.ignoreScm,r=e.analysis,c=e.decider,s=e.reuse,l=e.handleChange,p=e.handleScanChange;return Object(a.jsxs)(a.Fragment,{children:[t&&Object(a.jsx)(o,{ignoreScm:t,handleChange:l}),n&&Object(a.jsx)(i,{accessLevel:n,handleChange:l}),r&&Object(a.jsx)(u,{analysis:r,handleChange:p}),c&&Object(a.jsx)(d,{decider:c,handleChange:p}),s&&Object(a.jsx)(g,{reuse:s,handleChange:p})]})}},89:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return u}));var r=t(54),c=t(45),a=t(55),o=t(60),i=function(e,n,t){return function(e,n,t){var o=r.a.jobs.scheduleAnalysis(),i=null===t||void 0===t?void 0:t.analysis,s=i.bucket,u=i.copyrightEmailAuthor,d=i.ecc,l=i.keyword,p=i.mime,h=i.monk,f=i.nomos,j=i.ojo,m=null===t||void 0===t?void 0:t.decider,b=m.nomosMonk,g=m.bulkReused,O=m.newScanner,y=m.ojoDecider,v=null===t||void 0===t?void 0:t.reuse,x=v.reuseUpload,k=v.reuseGroup,C=v.reuseMain,S=v.reuseEnhanced,w=v.reuseReport,D=v.reuseCopyright;return Object(a.a)({url:o,method:"POST",headers:{Authorization:Object(c.a)(),folderId:e,uploadId:n},body:{analysis:{bucket:s,copyright_email_author:u,ecc:d,keyword:l,mime:p,monk:h,nomos:f,ojo:j,package:t.analysis.package},decider:{nomos_monk:b,bulk_reused:g,new_scanner:O,ojo_decider:y},reuse:{reuse_upload:x,reuse_group:k,reuse_main:C,reuse_enhanced:S,reuse_report:w,reuse_copyright:D}}})}(e,n,t).then((function(e){return e}))},s=function(e,n){return function(e,n){var t=r.a.jobs.scheduleReport();return Object(a.a)({url:t,method:"GET",headers:{Authorization:Object(c.a)(),uploadId:e,reportFormat:n}})}(e,n).then((function(e){return e}))},u=function(e){var n=Object(o.d)(e);return null===n?null:function(e){var n=r.a.jobs.downloadReport(e);return Object(a.a)({url:n,method:"GET",headers:{Authorization:Object(c.a)()},isFile:!0})}(n).then((function(e){return e}))}},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return p})),t.d(n,"d",(function(){return h}));var r=t(48),c=t(9),a=t.n(c),o=t(54),i=t(45),s=t(55),u=function(e,n,t,r,c){var a=o.a.upload.uploadCreate(),u=new FormData;return c&&u.append("fileInput",c,null===c||void 0===c?void 0:c.name),Object(s.a)({url:a,method:"POST",isMultipart:!0,headers:{Authorization:Object(i.a)(),folderId:e,uploadDescription:n,public:t,ignoreScm:r,uploadType:""},body:u})};u.propTypes={folderId:a.a.number,uploadDescription:a.a.string,accessLevel:a.a.string,ignoreScm:a.a.bool,fileInput:a.a.string};var d=function(e){var n=e.folderId,t=e.uploadDescription,r=e.accessLevel,c=e.ignoreScm,a=e.fileInput;return u(n,t,r,c,a).then((function(e){return e}))},l=function(e,n){return function(e,n){var t=o.a.upload.uploadCreate();return Object(s.a)({url:t,method:"POST",headers:Object(r.a)(Object(r.a)({},e),{},{Authorization:Object(i.a)()}),body:n})}(e,n).then((function(e){return e}))},p=function(e,n){return function(e,n){var t=o.a.upload.uploadCreate();return Object(s.a)({url:t,method:"POST",headers:Object(r.a)(Object(r.a)({},e),{},{Authorization:Object(i.a)()}),body:n})}(e,n).then((function(e){return e}))},h=function(e,n){return function(e,n){var t=o.a.upload.getId(e);return Object(s.a)({url:t,method:"GET",retries:n,headers:{Authorization:Object(i.a)()}})}(e,n).then((function(e){return e}))}}}]);
//# sourceMappingURL=34.2578aa5d.chunk.js.map