(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[39],{204:function(e,n,t){"use strict";t.r(n);var r=t(59),a=t(51),o=t(21),c=t(0),i=t(56),s=t(50),u=t(52),d=t(96),l=t(97),p=t(94),h=t(68),f=t(64),m=t(73),j=t(1);n.default=function(){var e,n=Object(c.useState)(m.l),t=Object(o.a)(n,2),b=t[0],g=t[1],O=Object(c.useState)(m.e),y=Object(o.a)(O,2),v=y[0],x=y[1],k=Object(c.useState)(m.j),C=Object(o.a)(k,2),S=C[0],w=C[1],D=Object(c.useState)(!1),T=Object(o.a)(D,2),A=T[0],F=T[1],L=Object(c.useState)(!1),N=Object(o.a)(L,2),E=N[0],I=N[1],R=Object(c.useState)(),M=Object(o.a)(R,2),G=M[0],z=M[1],U=function(e){"checkbox"===e.target.type?g(Object(a.a)(Object(a.a)({},b),{},Object(r.a)({},e.target.name,e.target.checked))):"file"===e.target.type?g(Object(a.a)(Object(a.a)({},b),{},Object(r.a)({},e.target.name,e.target.files[0]))):g(Object(a.a)(Object(a.a)({},b),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(c.useEffect)((function(){Object(h.e)().then((function(e){x(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{title:"Upload a New File"}),Object(j.jsxs)("div",{className:"main-container my-3",children:[E&&Object(j.jsx)(u.a,{type:G.type,setShow:I,message:G.text}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-lg-8 col-md-12 col-sm-12 col-12",children:[Object(j.jsx)("h1",{className:"font-size-main-heading",children:"Upload a New file"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"font-demi",children:"To manage your own group permissions go into Admin > Groups > Manage Group Users. To manage permissions for this one upload, go to Admin > Upload Permissions."}),Object(j.jsx)("p",{children:"This option permits uploading a single file (which may be iso, tar, rpm, jar, zip, bz2, msi, cab, etc.) from your computer to FOSSology. Your FOSSology server has imposed a maximum upload file size of 700Mbytes."}),Object(j.jsxs)("form",{className:"my-3",children:[Object(j.jsx)(u.c,{type:"select",name:"folderId",id:"upload-folder-id",onChange:function(e){return U(e)},options:v,property:"name",value:null===v||void 0===v?void 0:v.id,children:"Select the folder for storing the uploaded files:"}),Object(j.jsx)(u.c,{type:"file",name:"fileInput",id:"upload-file-input",onChange:function(e){return U(e)},children:"Select file to upload:"}),Object(j.jsx)("div",{className:"my-2",children:Object(j.jsxs)("label",{htmlFor:"upload",className:"font-demi w-100",children:["(Optional) Enter a description of this file:",Object(j.jsx)("textarea",{name:"uploadDescription",className:"form-control font-regular mt-2",value:b.uploadDescription,id:"upload-file-description",rows:"3",onChange:function(e){return U(e)}})]})}),Object(j.jsx)(d.a,{accessLevel:b.accessLevel,ignoreScm:b.ignoreScm,analysis:S.analysis,decider:S.decider,reuse:S.reuse,handleChange:U,handleScanChange:function(e){var n=e.target.name;Object.keys(S.analysis).find((function(e){return e===n}))?w(Object(a.a)(Object(a.a)({},S),{},{analysis:Object(a.a)(Object(a.a)({},S.analysis),{},Object(r.a)({},e.target.name,e.target.checked))})):Object.keys(S.decider).find((function(e){return e===n}))?w(Object(a.a)(Object(a.a)({},S),{},{decider:Object(a.a)(Object(a.a)({},S.decider),{},Object(r.a)({},e.target.name,e.target.checked))})):w(Object(a.a)(Object(a.a)({},S),{},{reuse:Object(a.a)(Object(a.a)({},S.reuse),{},Object(r.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:parseInt(e.target.value,10)||e.target.value))}))}}),Object(j.jsx)(u.b,{type:"submit",onClick:function(n){n.preventDefault(),F(!0),Object(l.a)(b).then((function(n){window.scrollTo({top:0}),z({type:"success",text:i.a.uploadSuccess}),e=n.message})).then((function(){setTimeout((function(){return Object(p.c)(b.folderId,e,S).then((function(){window.scrollTo({top:0}),z({type:"success",text:i.a.scheduledAnalysis}),g(m.l),w(m.j)})).catch((function(e){Object(f.e)(e,z)}))}),1200)})).catch((function(e){Object(f.e)(e,z)})).finally((function(){F(!1),I(!0)}))},className:"mt-4",children:A?Object(j.jsx)(u.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Upload"})]})]})})]})]})}},64:function(e,n,t){"use strict";t.d(n,"f",(function(){return a})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"e",(function(){return i})),t.d(n,"d",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(63),a=function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=t.length,a=0;a<e;a++)n+=t.charAt(Math.floor(Math.random()*r));return n},o=function(e){return Date.prototype.addDays=function(e){var n=new Date(this.valueOf());return n.setDate(n.getDate()+e),n},(new Date).addDays(e).toISOString().split("T")[0]},c=function(e){if(!e)return e;var n=e.split(" ");return 1===n.length?n[0].substring(0,2).toUpperCase():n.map((function(e,n){return n<3?e[0]:null})).join("").toUpperCase()},i=function(e,n){window.scrollTo({top:0}),n({type:"danger",text:e.message})},s=function(e){var n=e.match(/report\/([0-9]+)/);return null!=n?n[1]:null},u=function(e){var n,t=e.split(";"),a="download.txt",o=Object(r.a)(t);try{for(o.s();!(n=o.n()).done;){var c=n.value.trim().match(/filename="(.*)"/);if(null!=c){a=c[1];break}}}catch(i){o.e(i)}finally{o.f()}return a}},73:function(e,n,t){"use strict";t.d(n,"s",(function(){return c})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"g",(function(){return u})),t.d(n,"k",(function(){return d})),t.d(n,"h",(function(){return l})),t.d(n,"l",(function(){return p})),t.d(n,"j",(function(){return h})),t.d(n,"e",(function(){return f})),t.d(n,"m",(function(){return m})),t.d(n,"n",(function(){return j})),t.d(n,"o",(function(){return b})),t.d(n,"q",(function(){return g})),t.d(n,"p",(function(){return O})),t.d(n,"r",(function(){return y})),t.d(n,"t",(function(){return v})),t.d(n,"c",(function(){return x})),t.d(n,"i",(function(){return k})),t.d(n,"d",(function(){return C})),t.d(n,"f",(function(){return S}));var r,a,o=t(13),c=[{id:0,name:"open"},{id:1,name:"in progress"},{id:2,name:"closed"},{id:3,name:"rejected"}],i=[{id:0,name:"me"},{id:1,name:"unassigned"}],s=[{id:0,name:"-- select action --",reportFormat:"0",disabled:!0},{id:1,name:"Export DEP5",reportFormat:"dep5"},{id:2,name:"Export ReadMe_OSS",reportFormat:"readmeoss"},{id:3,name:"Export SPDX RDF",reportFormat:"spdx2"},{id:4,name:"Export SPDX tag:value",reportFormat:"spdx2tv"},{id:5,name:"Export Unified Report",reportFormat:"unifiedreport"}],u={type:"success",text:""},d={searchType:"allfiles",uploadId:"",filename:"",tag:"",filesizemin:"",filesizemax:"",license:"",copyright:"",page:1,limit:10},l={type:"danger",text:""},p={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,fileInput:null},h={analysis:Object(o.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(r=Object(o.c)("user"))||void 0===r?void 0:r.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},f=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],m={folder:"",editUpload:"",reportUpload:"",newLicense:"licenseCanditate",licenseInfoInFile:!0,licenseConcluded:!1,licenseDecision:!0,existingDecisions:!0,importDiscussed:!0,copyright:!1},j={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"server",groupName:""},b={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"url"},g={url:"",name:""},O={folderId:1,uploadDescription:"",accessLevel:"protected",ignoreScm:!1,uploadType:"vcs"},y={vcsType:"git",vcsUrl:"",vcsBranch:"",vcsName:"",vcsUsername:"",vcsPassword:""},v=[{id:"git",type:"Git"},{id:"svn",type:"SVN"}],x=[{id:10,entry:"10"},{id:25,entry:"25"},{id:50,entry:"50"},{id:100,entry:"100"}],k={analysis:Object(o.a)(),decider:{nomosMonk:!1,bulkReused:!1,newScanner:!1,ojoDecider:!1},reuse:{reuseUpload:0,reuseGroup:null===(a=Object(o.c)("user"))||void 0===a?void 0:a.default_group,reuseMain:!1,reuseEnhanced:!1,reuseReport:!1,reuseCopyright:!1}},C=[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],S={allNonSlow:!1,allOperations:!1,validateFolderContents:!1,rmvGoldFiles:!1,rmvOrphanedRows:!1,rmvLogFiles:!1,normalizePriority:!1,rmvUploads:!1,rmvTokens:!1,rmvTempTables:!1,analyseDb:!1,rmvRepoFiles:!1,dbReindexing:!1,verbose:!1,rmvRepoOldFiles1:!1,rmvRepoOldFiles2:!1}},91:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var r=t(60),a=t(49),o=t(61),c=t(13),i=function(){return Object(c.c)("groups")},s=function(){return function(){var e=r.a.admin.groups.getAll();return Object(o.a)({url:e,method:"GET",headers:{Authorization:Object(a.a)()},addGroupName:!1})}().then((function(e){return Object(c.h)("groups",e),e}))},u=function(e){return function(e){var n=r.a.admin.groups.create();return Object(o.a)({url:n,method:"POST",headers:{Authorization:Object(a.a)(),name:e},addGroupName:!1})}(e).then((function(e){return e}))}},94:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return d})),t.d(n,"a",(function(){return l}));var r=t(60),a=t(49),o=t(61),c=t(64),i=t(13),s=function(e){return function(e){var n=e.page,t=e.limit,c=r.a.jobs.scheduleAnalysis();return Object(o.a)({url:c,method:"GET",headers:{Authorization:Object(a.a)(),page:n,limit:t}})}(e).then((function(e){return{res:e,pages:Object(i.c)("pages")}}))},u=function(e,n,t){return function(e,n,t){var c=r.a.jobs.scheduleAnalysis(),i=null===t||void 0===t?void 0:t.analysis,s=i.bucket,u=i.copyrightEmailAuthor,d=i.ecc,l=i.keyword,p=i.mime,h=i.monk,f=i.nomos,m=i.ojo,j=null===t||void 0===t?void 0:t.decider,b=j.nomosMonk,g=j.bulkReused,O=j.newScanner,y=j.ojoDecider,v=null===t||void 0===t?void 0:t.reuse,x=v.reuseUpload,k=v.reuseGroup,C=v.reuseMain,S=v.reuseEnhanced,w=v.reuseReport,D=v.reuseCopyright;return Object(o.a)({url:c,method:"POST",headers:{Authorization:Object(a.a)(),folderId:e,uploadId:n},body:{analysis:{bucket:s,copyright_email_author:u,ecc:d,keyword:l,mime:p,monk:h,nomos:f,ojo:m,package:t.analysis.package},decider:{nomos_monk:b,bulk_reused:g,new_scanner:O,ojo_decider:y},reuse:{reuse_upload:x,reuse_group:k,reuse_main:C,reuse_enhanced:S,reuse_report:w,reuse_copyright:D}}})}(e,n,t).then((function(e){return e}))},d=function(e,n){return function(e,n){var t=r.a.jobs.scheduleReport();return Object(o.a)({url:t,method:"GET",headers:{Authorization:Object(a.a)(),uploadId:e,reportFormat:n}})}(e,n).then((function(e){return e}))},l=function(e){var n=Object(c.d)(e);return null===n?null:function(e){var n=r.a.jobs.downloadReport(e);return Object(o.a)({url:n,method:"GET",headers:{Authorization:Object(a.a)()},isFile:!0})}(n).then((function(e){return e}))}},96:function(e,n,t){"use strict";var r=t(0),a=t(52),o=t(1);var c=function(e){var n=e.ignoreScm,t=e.handleChange;return Object(o.jsx)("div",{id:"upload-ignore-files",className:"mt-4",children:Object(o.jsxs)(a.c,{type:"checkbox",checked:n,name:"ignoreScm",id:"upload-ignore-scm",onChange:function(e){return t(e)},children:["Ignore SCM files (Git, SVN, TFS) and files with particular Mimetype\xa0",Object(o.jsx)(a.e,{title:"Configure mimetypes from Admin-Customize-Skip MimeTypes from scanning"})]})})};var i=function(e){var n=e.accessLevel,t=e.handleChange;return Object(o.jsxs)("div",{id:"upload-access-level",className:"mt-4",children:[Object(o.jsxs)(a.c,{type:"radio",value:"private",name:"accessLevel",id:"upload-access-level-private",checked:"private"===n,onChange:function(e){return t(e)},children:["Visible only for active group\xa0",Object(o.jsx)(a.e,{title:"which is the currently selected group"})]}),Object(o.jsxs)(a.c,{type:"radio",value:"protected",name:"accessLevel",id:"upload-access-level-protected",checked:"protected"===n,onChange:function(e){return t(e)},children:["Visible for all groups\xa0",Object(o.jsx)(a.e,{title:"which are accessible by you now"})]}),Object(o.jsxs)(a.c,{type:"radio",value:"public",name:"accessLevel",id:"upload-access-level-public",checked:"public"===n,onChange:function(e){return t(e)},children:["Make Public\xa0",Object(o.jsx)(a.e,{title:"visible for all users"})]})]})},s=t(54);var u=function(e){var n=e.analysis,t=e.handleChange;return Object(o.jsxs)("div",{id:"uplod-optional-analysis",className:"mt-4",children:[Object(o.jsx)("p",{className:"font-demi",children:"Select optional analysis"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.bucket,name:"bucket",id:"upload-analysis-bucket",onChange:function(e){return t(e)},children:"Bucket Analysis"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.copyrightEmailAuthor,name:"copyrightEmailAuthor",id:"upload-analysis-copyright-email-author",onChange:function(e){return t(e)},children:"Copyright/Email/URL/Author Analysis"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.ecc,name:"ecc",id:"upload-analysis-ecc",onChange:function(e){return t(e)},children:"ECC Analysis, scanning for text fragments potentially relevant for export control"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.keyword,name:"keyword",id:"upload-analysis-keyword",onChange:function(e){return t(e)},children:"Keyword Analysis"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.mime,name:"mime",id:"upload-analysis-mime",onChange:function(e){return t(e)},children:"MIME-type Analysis (Determine mimetype of every file. Not needed for licenses or buckets)"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.monk,name:"monk",id:"upload-analysis-monk",onChange:function(e){return t(e)},children:"Monk License Analysis, scanning for licenses performing a text comparison"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.nomos,name:"nomos",id:"upload-analysis-nomos",onChange:function(e){return t(e)},children:"Nomos License Analysis, scanning for licenses using regular expressions"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.ojo,name:"ojo",id:"upload-analysis-ojo",onChange:function(e){return t(e)},children:"Ojo License Analysis, scanning for licenses using SPDX-License-Identifier"}),Object(o.jsx)(s.a,{type:"checkbox",checked:n.package,name:"package",id:"upload-analysis-package",onChange:function(e){return t(e)},children:"Package Analysis (Parse package headers)"})]})};var d=function(e){var n=e.decider,t=e.handleChange;return Object(o.jsxs)("div",{id:"upload-concluded-license-decider",className:"mt-4",children:[Object(o.jsxs)("p",{className:"font-demi",children:["Automatic Concluded License Decider,",Object(o.jsx)(a.e,{title:"only for relevant files"})," based on"]}),Object(o.jsx)(a.c,{type:"checkbox",checked:n.nomosMonk,name:"nomosMonk",id:"upload-decider-nomos-monk",onChange:function(e){return t(e)},children:"... scanners matches if all Nomos findings are within the Monk findings"}),Object(o.jsx)(a.c,{type:"checkbox",checked:n.ojoDecider,name:"ojoDecider",id:"upload-decider-ojo-decider",onChange:function(e){return t(e)},children:".. scanners matches if Ojo findings are no contradiction with other findings"}),Object(o.jsx)(a.c,{type:"checkbox",checked:n.bulkReused,name:"bulkReused",id:"upload-decider-bulk-reused",onChange:function(e){return t(e)},children:"... bulk phrases from reused packages"}),Object(o.jsx)(a.c,{type:"checkbox",checked:n.newScanner,name:"newScanner",id:"upload-decider-new-scanner",onChange:function(e){return t(e)},children:"... new scanner results, i.e., decisions were marked as work in progress if new scanner finds additional licenses"})]})},l=t(59),p=t(51),h=t(21),f=t(68),m=t(98),j=t(91),b=t(56),g=function(e){var n=e.reuse,t=e.handleChange,c=Object(r.useState)({groupList:[{id:3,name:"fossy"}],folderList:[{id:1,name:"Software Repository",description:"Top Folder",parent:null}],uploadList:[{folderId:1,uploadId:null,uploadName:"",uploadDescription:""}],reuseFolder:1}),i=Object(h.a)(c,2),s=i[0],u=i[1];Object(r.useEffect)((function(){u((function(e){return Object(p.a)(Object(p.a)({},e),{},{groupList:Object(j.c)()})}))}),[]),Object(r.useEffect)((function(){Object(f.e)(n.reuseGroup).then((function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},{folderList:e})}))})).catch((function(){}))}),[n.reuseGroup]),Object(r.useEffect)((function(){Object(m.c)(s.reuseFolder,n.reuseGroup).then((function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},{uploadList:e})}))})).catch((function(){}))}),[n.reuseGroup,s.reuseFolder]);return Object(o.jsxs)("div",{id:"upload-reuse",className:"mt-4",children:[Object(o.jsxs)("p",{className:"font-demi",children:["(Optional) Reuse",Object(o.jsx)(a.e,{title:"copy clearing decisions if there is the same file hash between two files"})]}),Object(o.jsx)(a.c,{type:"select",name:"reuseGroup",id:"upload-file-reuse-group",onChange:t,options:s.groupList,value:n.reuseGroup,property:"name",valueProperty:"name",noDataMessage:b.a.noGroup,children:"Select the reuse group:"}),Object(o.jsx)(a.c,{type:"select",name:"reuseFolder",id:"upload-file-reuse-folder",onChange:function(e){u((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(l.a)({},e.target.name,e.target.value))}))},options:s.folderList,value:s.reuseFolder,property:"name",noDataMessage:b.a.noFolder,children:"Select the reuse folder:"}),Object(o.jsx)(a.c,{type:"select",name:"reuseUpload",id:"upload-file-reuse-upload",onChange:t,options:s.uploadList,value:parseInt(n.reuseUpload,10),property:"uploadname",valueProperty:"id",noDataMessage:b.a.noUploads,children:"Select the reuse upload:"}),Object(o.jsxs)(a.c,{type:"checkbox",checked:n.reuseEnhanced,name:"reuseEnhanced",id:"upload-file-reuse-enhanced",onChange:t,children:["Enhanced reuse (slower)",Object(o.jsx)(a.e,{title:"will copy a clearing decision if the two files differ by one line determined by a diff tool"})]}),Object(o.jsxs)(a.c,{type:"checkbox",checked:n.reuseMain,name:"reuseMain",id:"upload-file-reuse-main",onChange:t,children:["Reuse main license/s",Object(o.jsx)(a.e,{title:"will copy a main license decision if any"})]}),Object(o.jsxs)(a.c,{type:"checkbox",checked:n.reuseReport,name:"reuseReport",id:"upload-file-reuse-report",onChange:t,children:["Reuse report configuration settings",Object(o.jsx)(a.e,{title:"use to copy all the information from conf page(if any)"})]}),Object(o.jsxs)(a.c,{type:"checkbox",checked:n.reuseCopyright,name:"reuseCopyright",id:"upload-file-reuse-copyright",onChange:t,children:["Reuse edited and deactivated copyrights",Object(o.jsx)(a.e,{title:"use to copy edited and deactivated copyrights from the reused package"})]})]})};n.a=function(e){var n=e.accessLevel,t=e.ignoreScm,r=e.analysis,a=e.decider,s=e.reuse,l=e.handleChange,p=e.handleScanChange;return Object(o.jsxs)(o.Fragment,{children:[t&&Object(o.jsx)(c,{ignoreScm:t,handleChange:l}),n&&Object(o.jsx)(i,{accessLevel:n,handleChange:l}),r&&Object(o.jsx)(u,{analysis:r,handleChange:p}),a&&Object(o.jsx)(d,{decider:a,handleChange:p}),s&&Object(o.jsx)(g,{reuse:s,handleChange:p})]})}},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return p})),t.d(n,"d",(function(){return h})),t.d(n,"f",(function(){return f})),t.d(n,"e",(function(){return m}));var r=t(51),a=t(9),o=t.n(a),c=t(60),i=t(49),s=t(61),u=function(e,n,t,r,a){var o=c.a.upload.uploadCreate(),u=new FormData;return a&&u.append("fileInput",a,null===a||void 0===a?void 0:a.name),Object(s.a)({url:o,method:"POST",isMultipart:!0,headers:{Authorization:Object(i.a)(),folderId:e,uploadDescription:n,public:t,ignoreScm:r,uploadType:""},body:u})};u.propTypes={folderId:o.a.number,uploadDescription:o.a.string,accessLevel:o.a.string,ignoreScm:o.a.bool,fileInput:o.a.string};var d=function(e){var n=e.folderId,t=e.uploadDescription,r=e.accessLevel,a=e.ignoreScm,o=e.fileInput;return u(n,t,r,a,o).then((function(e){return e}))},l=function(e,n){return function(e,n){var t=c.a.upload.uploadCreate();return Object(s.a)({url:t,method:"POST",headers:Object(r.a)(Object(r.a)({},e),{},{Authorization:Object(i.a)()}),body:n})}(e,n).then((function(e){return e}))},p=function(e,n){return function(e,n){var t=c.a.upload.uploadCreate();return Object(s.a)({url:t,method:"POST",headers:Object(r.a)(Object(r.a)({},e),{},{Authorization:Object(i.a)()}),body:n})}(e,n).then((function(e){return e}))},h=function(e,n){return function(e,n){var t=c.a.upload.getId(e);return Object(s.a)({url:t,method:"GET",retries:n,headers:{Authorization:Object(i.a)()}})}(e,n).then((function(e){return e}))},f=function(e){return function(e){var n=c.a.upload.getSummary(e);return Object(s.a)({url:n,method:"GET",headers:{Authorization:Object(i.a)()}})}(e).then((function(e){return e}))},m=function(e,n){return function(e,n){var t=c.a.upload.getLicense(e);return Object(s.a)({url:t,method:"GET",headers:{Authorization:Object(i.a)()},queryParams:{agent:n}})}(e,n).then((function(e){return e}))}}}]);
//# sourceMappingURL=39.c0eb051e.chunk.js.map