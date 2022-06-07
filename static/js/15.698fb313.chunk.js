/*! For license information please see 15.698fb313.chunk.js.LICENSE.txt */
(this.webpackJsonpfossologyui=this.webpackJsonpfossologyui||[]).push([[15],{227:function(e,t,n){"use strict";n.r(t);var r=n(54),o=n(50),c=n(22),a=n(0),i=n(61),u=n(53),s=n(55),l=n(82),d=n(65),f=n(1);t.default=function(){var e=Object(a.useState)({name:"",description:"",id:1}),t=Object(c.a)(e,2),n=t[0],p=t[1],h=Object(a.useState)([{id:1,name:"Software Repository",description:"Top Folder",parent:null}]),b=Object(c.a)(h,2),m=b[0],y=b[1],j=Object(a.useState)(!1),v=Object(c.a)(j,2),g=v[0],O=v[1],x=Object(a.useState)(!1),w=Object(c.a)(x,2),S=w[0],N=w[1],k=Object(a.useState)({type:"success",text:""}),F=Object(c.a)(k,2),C=F[0],A=F[1],E=n.name,I=n.description,P=n.id,U=function(e){p(Object(o.a)(Object(o.a)({},n),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){Object(l.e)().then((function(e){y(e)})).catch((function(e){Object(d.e)(e,A),N(!0)}))}),[]),Object(a.useEffect)((function(){Object(l.f)(P).then((function(e){p(e)})).catch((function(e){Object(d.e)(e,A),N(!0)}))}),[P]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{title:"Edit Folder Properties"}),Object(f.jsxs)("div",{className:"main-container my-3",children:[S&&Object(f.jsx)(s.a,{type:C.type,setShow:N,message:C.text}),Object(f.jsx)("h1",{className:"font-size-main-heading",children:"Edit Folder Properties"}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(f.jsx)("p",{children:"The folder properties that can be changed are the folder name and description. First select the folder to edit. Then enter the new values. If no value is entered, then the corresponding field will not be changed."}),Object(f.jsxs)("form",{children:[Object(f.jsx)(s.c,{type:"select",name:"id",id:"organize-folder-edit-id",onChange:U,options:m,value:P,property:"name",children:"Select the folder to edit:"}),Object(f.jsx)(s.c,{type:"text",name:"name",id:"organize-folder-edit-name",onChange:U,placeholder:"Folder name",value:E,children:"Change the folder name:"}),Object(f.jsx)(s.c,{type:"text",name:"description",id:"organize-folder-edit-description",onChange:U,placeholder:"Folder description",value:I,children:"Change the folder description:"}),Object(f.jsx)(s.b,{type:"submit",onClick:function(e){e.preventDefault(),O(!0),Object(l.d)(n).then((function(){A({type:"success",text:i.a.updatedFolderProps})})).catch((function(e){Object(d.e)(e,A)})).finally((function(){O(!1),N(!0)}))},className:"mt-4",children:g?Object(f.jsx)(s.d,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Edit"})]})]})})]})]})}},48:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},49:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(59),o=n(2),c=n(14),a=function(){if("undefined"!==typeof window&&Object(c.b)("token"))return!(!localStorage.getItem("user")||!localStorage.getItem("groups"));return!1},i=function(e){Object(c.e)("token"),Object(c.f)("user"),Object(c.f)("groups"),Object(c.f)("currentGroup");var t=o.a.home;e&&(t="".concat(o.a.home,"?").concat(Object(r.stringify)(e))),window.location.href=t},u=function(){return Object(c.b)("token")},s=function(){return Object(c.c)("user").name},l=function(){var e;return"admin"===(null===(e=Object(c.c)("user"))||void 0===e?void 0:e.accessLevel)}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(54);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(4);var r=n(0),o=n.n(r),c=o.a.createContext({});c.Consumer,c.Provider;function a(e,t){var n=Object(r.useContext)(c);return e||n[t]||t}},52:function(e,t,n){var r=n(60);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},53:function(e,t,n){"use strict";n(0);var r=n(80),o=n(1);t.a=function(e){var t=e.title;return Object(o.jsx)(r.a,{children:Object(o.jsxs)("title",{children:[t," | FOSSology"]})})}},54:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l.a})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return o.a}));var r,o=n(58),c=(n(0),n(1)),a=function(e){var t=e.message,n=e.type,r=e.setShow;return Object(c.jsx)("div",{className:"main-container d-flex justify-content-end mt-3",children:Object(c.jsx)("div",{className:"alert bg-".concat(n," alert-dismissible fade show font-medium text-white alert-fix-position"),role:"alert",children:Object(c.jsxs)("div",{className:"d-flex",children:["danger"===n&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",fill:"white"}),Object(c.jsx)("path",{d:"M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z",fill:"#DC4146"})]}),"success"===n&&Object(c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-3",children:[Object(c.jsx)("path",{d:"M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z",fill:"white"}),Object(c.jsx)("path",{d:"M38 15L22 33L12 25",stroke:"#28A745",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),t,Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return r(!1)},children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})},i=n(24),u=n(11).d.button(r||(r=Object(i.a)(["\n    border: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem 3rem;\n    transition: all 0.5s ease-in;\n"]))),s=function(e){var t=e.type,n=e.onClick,r=e.className,o=e.children;return Object(c.jsx)(u,{type:t,onClick:n,className:"bg-primary-color text-secondary-color font-demi text-center hover-primary-color ".concat(r),children:o})},l=(n(56),n(57)),d=function(e){var t=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{type:"button",className:"d-inline-block btn px-0 mt-n2","data-toggle":"tooltip","data-placement":"top",title:t,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle-fill text-primary-color",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})})})}},56:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.src,n=e.alt,o=e.style,c=e.className,a=e.width,i=e.height,u=e.align;return Object(r.jsx)("img",{src:t,alt:n,style:o,className:c,width:a,height:i,align:u})}},57:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.type,n=e.name,o=e.value,c=e.id,a=e.className,i=e.onChange,u=e.children,s=e.checked,l=void 0!==s&&s,d=e.placeholder,f=void 0===d?null:d,p=e.disabled,h=void 0!==p&&p,b=e.options,m=void 0===b?null:b,y=e.multiple,j=void 0!==y&&y,v=e.property,g=e.valueProperty,O=e.noDataMessage,x=void 0===O?"No Data Found":O,w=e.defaultValue,S=void 0===w?null:w;return"radio"===t||"checkbox"===t?Object(r.jsxs)("div",{className:"my-0",children:[Object(r.jsx)("input",{type:t,name:n,value:o,className:a&&"mr-2 ".concat(a),onChange:i,checked:l,disabled:h,id:c}),Object(r.jsx)("label",{htmlFor:c,className:"font-medium ml-2",children:u})]}):"select"===t?Object(r.jsxs)("div",{className:"my-0 py-0",children:[u&&Object(r.jsx)("label",{htmlFor:c,className:"font-demi",children:u}),"\u2003",Object(r.jsx)("select",{name:n,className:a?"mr-2 form-control ".concat(a):"mr-2 form-control",value:o,onChange:i,multiple:j&&j,size:j?"15":"",id:c,defaultValue:S,children:m.length>0?m.map((function(e,t){return Object(r.jsx)("option",{value:g?e[g]:e.id,disabled:e.disabled,children:v?e[v]:e},e.id||t)})):Object(r.jsx)("option",{className:"font-demi",disabled:!0,children:x})})]}):Object(r.jsxs)("div",{className:"my-2",children:[Object(r.jsx)("label",{htmlFor:c,className:"font-demi",children:u}),Object(r.jsx)("input",{type:t,name:n,value:o,className:"file"===t?"ml-3 ".concat(a):"form-control ".concat(a),onChange:i,checked:l,placeholder:f,id:c})]})}},58:function(e,t,n){"use strict";var r=n(4),o=n(8),c=n(48),a=n.n(c),i=n(0),u=n.n(i),s=n(51),l=["bsPrefix","variant","animation","size","children","as","className"],d=u.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.variant,i=e.animation,d=e.size,f=e.children,p=e.as,h=void 0===p?"div":p,b=e.className,m=Object(o.a)(e,l),y=(n=Object(s.a)(n,"spinner"))+"-"+i;return u.a.createElement(h,Object(r.a)({ref:t},m,{className:a()(b,y,d&&y+"-"+d,c&&"text-"+c)}),f)}));d.displayName="Spinner",t.a=d},59:function(e,t,n){"use strict";var r=n(66),o=n(67),c=n(71),a=n(72),i=n(76),u=n(77),s=n(78),l=n(79),d=Symbol("encodeFragmentIdentifier");function f(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function h(e,t){return t.decode?u(e):e}function b(e){return Array.isArray(e)?e.sort():"object"===typeof e?b(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function m(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function y(e){var t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function j(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function v(e,t){f((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"colon-list-separator":return function(e,n,r){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var o="string"===typeof n&&n.includes(e.arrayFormatSeparator),c="string"===typeof n&&!o&&h(n,e).includes(e.arrayFormatSeparator);n=c?h(n,e):n;var a=o||c?n.split(e.arrayFormatSeparator).map((function(t){return h(t,e)})):null===n?n:h(n,e);r[t]=a};case"bracket-separator":return function(t,n,r){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var c=null===n?[]:n.split(e.arrayFormatSeparator).map((function(t){return h(t,e)}));void 0!==r[t]?r[t]=[].concat(r[t],c):r[t]=c}else r[t]=n?h(n,e):n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!==typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;var a,i=c(e.split("&"));try{for(i.s();!(a=i.n()).done;){var u=a.value;if(""!==u){var l=s(t.decode?u.replace(/\+/g," "):u,"="),d=o(l,2),p=d[0],m=d[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?m:h(m,t),n(h(p,t),m,r)}}}catch(N){i.e(N)}finally{i.f()}for(var y=0,v=Object.keys(r);y<v.length;y++){var g=v[y],O=r[g];if("object"===typeof O&&null!==O)for(var x=0,w=Object.keys(O);x<w.length;x++){var S=w[x];O[S]=j(O[S],t)}else r[g]=j(O,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=b(n):e[t]=n,e}),Object.create(null))}t.extract=y,t.parse=v,t.stringify=function(e,t){if(!e)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(a(n),null===r?[[p(t,e),"[",o,"]"].join("")]:[[p(t,e),"[",p(o,e),"]=",p(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(a(n),null===r?[[p(t,e),"[]"].join("")]:[[p(t,e),"[]=",p(r,e)].join("")])}};case"colon-list-separator":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(a(n),null===r?[[p(t,e),":list="].join("")]:[[p(t,e),":list=",p(r,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(n){return function(r,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:(o=null===o?"":o,0===r.length?[[p(n,e),t,p(o,e)].join("")]:[[r,p(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(a(n),null===r?[p(t,e)]:[[p(t,e),"=",p(r,e)].join("")])}}}}(t),o={},c=0,i=Object.keys(e);c<i.length;c++){var u=i[c];n(u)||(o[u]=e[u])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(n){var o=e[n];return void 0===o?"":null===o?p(n,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?p(n,t)+"[]":o.reduce(r(n),[]).join("&"):p(n,t)+"="+p(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var n=s(e,"#"),r=o(n,2),c=r[0],a=r[1];return Object.assign({url:c.split("?")[0]||"",query:v(y(e),t)},t&&t.parseFragmentIdentifier&&a?{fragmentIdentifier:h(a,t)}:{})},t.stringifyUrl=function(e,n){n=Object.assign(r({encode:!0,strict:!0},d,!0),n);var o=m(e.url).split("?")[0]||"",c=t.extract(e.url),a=t.parse(c,{sort:!1}),i=Object.assign(a,e.query),u=t.stringify(i,n);u&&(u="?".concat(u));var s=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(n[d]?p(e.fragmentIdentifier,n):e.fragmentIdentifier)),"".concat(o).concat(u).concat(s)},t.pick=function(e,n,o){o=Object.assign(r({parseFragmentIdentifier:!0},d,!1),o);var c=t.parseUrl(e,o),a=c.url,i=c.query,u=c.fragmentIdentifier;return t.stringifyUrl({url:a,query:l(i,n),fragmentIdentifier:u},o)},t.exclude=function(e,n,r){var o=Array.isArray(n)?function(e){return!n.includes(e)}:function(e,t){return!n(e,t)};return t.pick(e,o,r)}},60:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},61:function(e,t,n){"use strict";t.a={forbiddenResource:"Requested resource is forbidden",noGroup:"No Group Found",noFolder:"No Folder Found",noUploads:"No Uploads Found",noPageShort:"Error: Page Not Found!",noPageLong:"We could not find the page you were searching for",groupCreate:"Successfully created the group",deletedUser:"Successfully deleted the user",confirmDeletion:"Deletion not confirmed",loading:"Loading...",jobsAdded:"Your jobs have been added to job queue",createdFolder:"Successfully created the folder",deletedFolder:"Successfully deleted the folder",updatedFolderProps:"Successfully updated the folder properties",movedFolder:"Successfully moved the folder",copiedFolder:"Successfully copied the folder",unlinkedFolder:"Successfully unlinked the folder",createdLicense:"Successfully created the license",scheduleUploadDeletion:"Successfully scheduled selected uploads for deletion",selectUploadsToDelete:"Select the uploads to delete",scheduleUploadMovement:"Successfully scheduled the selected uploads movement",selectUploadsToMove:"Select the uploads to move",scheduledUploadCopy:"Successfully scheduled the selected uploads for copy",selectUploadsToCopy:"Select the uploads to copy",uploadSuccess:"Successfully uploaded the files",scheduledAnalysis:"Analysis for the file is scheduled",queuedUpload:"The upload has been queued its upload id is"}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(23);function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,c=function(){};return{s:c,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}},63:function(e,t,n){"use strict";var r="".concat("http","://").concat("localhost/repo/api/v2"),o={jobs:{details:function(e){return"".concat(r,"/jobs/").concat(e)},scheduleAnalysis:function(){return"".concat(r,"/jobs")},scheduleReport:function(){return"".concat(r,"/report")},downloadReport:function(e){return"".concat(r,"/report/").concat(e)}},auth:{tokens:function(){return"".concat(r,"/tokens")}},search:{search:function(){return"".concat(r,"/search")}},users:{self:function(){return"".concat(r,"/users/self")},getAll:function(){return"".concat(r,"/users")},getSingle:function(e){return"".concat(r,"/users/").concat(e)},delete:function(e){return"".concat(r,"/users/").concat(e)}},folders:{getAll:function(){return"".concat(r,"/folders")},getSingle:function(e){return"".concat(r,"/folders/").concat(e)},create:function(){return"".concat(r,"/folders")},read:function(e){return"".concat(r,"/folders/").concat(e)},edit:function(e){return"".concat(r,"/folders/").concat(e)},delete:function(e){return"".concat(r,"/folders/").concat(e)},move:function(e){return"".concat(r,"/folders/").concat(e)}},upload:{uploadCreate:function(){return"".concat(r,"/uploads")},getId:function(e){return"".concat(r,"/uploads/").concat(e)}},browse:{get:function(){return"".concat(r,"/uploads")}},organize:{uploads:{get:function(){return"".concat(r,"/uploads")},delete:function(e){return"".concat(r,"/uploads/").concat(e)},move:function(e){return"".concat(r,"/uploads/").concat(e)},copy:function(e){return"".concat(r,"/uploads/").concat(e)}}},admin:{groups:{create:function(){return"".concat(r,"/groups")},getAll:function(){return"".concat(r,"/groups")}}},license:{get:function(){return"".concat(r,"/license")},createCandidateLicense:function(){return"".concat(r,"/license")}},info:{info:function(){return"".concat(r,"/info")},health:function(){return"".concat(r,"/health")}}};t.a=o},64:function(e,t,n){"use strict";var r=n(62),o=n(50),c=n(59),a=n(49),i=n(61),u=n(14);t.a=function e(t){var n,s,l=t.url,d=t.method,f=t.body,p=t.groupName,h=t.headers,b=void 0===h?{}:h,m=t.queryParams,y=t.isMultipart,j=void 0!==y&&y,v=t.noHeaders,g=void 0!==v&&v,O=t.addGroupName,x=void 0===O||O,w=t.retries,S=void 0===w?0:w,N=t.isFile,k=void 0!==N&&N;(n=j?new Headers(Object(o.a)({},b)):new Headers(Object(o.a)({"content-type":"application/json",accept:"application/json"},b)),k&&(n=new Headers(Object(o.a)({},b))),x)&&n.append("groupName",p||Object(u.c)("currentGroup")||(null===(s=Object(u.c)("user"))||void 0===s?void 0:s.default_group));g&&(n={});var F={method:d,headers:n,body:f},C=l;return F.body=f?j?f:JSON.stringify(f):null,m&&(C="".concat(l,"?").concat(Object(c.stringify)(m))),fetch(C,F).then((function(t){if(t.ok){var n,o=Object(r.a)(t.headers.entries());try{for(o.s();!(n=o.n()).done;){var c=n.value;"x-total-pages"===c[0]&&Object(u.h)("pages",c[1])}}catch(s){o.e(s)}finally{o.f()}return k?t:t.json()}return S>0?setTimeout((function(){e({url:l,method:d,headers:b,retries:S-1})}),1e4):t.json().then((function(e){var n={status:t.status,ok:!1,message:e.message,body:e};return 403===e.code?e.message?Object(a.e)({message:e.message}):Object(a.e)({message:i.a.forbiddenResource}):Promise.reject(n)}))}))}},65:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(62),o=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*r));return t},c=function(e){return Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},(new Date).addDays(e).toISOString().split("T")[0]},a=function(e){if(!e)return e;var t=e.split(" ");return 1===t.length?t[0].substring(0,2).toUpperCase():t.map((function(e,t){return t<3?e[0]:null})).join("").toUpperCase()},i=function(e,t){window.scrollTo({top:0}),t({type:"danger",text:e.message})},u=function(e){var t=e.match(/report\/([0-9]+)/);return null!=t?t[1]:null},s=function(e){var t,n=e.split(";"),o="download.txt",c=Object(r.a)(n);try{for(c.s();!(t=c.n()).done;){var a=t.value.trim().match(/filename="(.*)"/);if(null!=a){o=a[1];break}}}catch(i){c.e(i)}finally{c.f()}return o}},66:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},67:function(e,t,n){var r=n(68),o=n(69),c=n(52),a=n(70);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||a()}},68:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},69:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}},70:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},71:function(e,t,n){var r=n(52);e.exports=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,c=function(){};return{s:c,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}},72:function(e,t,n){var r=n(73),o=n(74),c=n(52),a=n(75);e.exports=function(e){return r(e)||o(e)||c(e)||a()}},73:function(e,t,n){var r=n(60);e.exports=function(e){if(Array.isArray(e))return r(e)}},74:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},75:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},76:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},77:function(e,t,n){"use strict";var r="%[a-f0-9]{2}",o=new RegExp(r,"gi"),c=new RegExp("("+r+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function i(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(o),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(o);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=c.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=i(r[0]);o!==r[0]&&(n[r[0]]=o)}r=c.exec(e)}n["%C2"]="\ufffd";for(var a=Object.keys(n),u=0;u<a.length;u++){var s=a[u];e=e.replace(new RegExp(s,"g"),n[s])}return e}(e)}}},78:function(e,t,n){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},79:function(e,t,n){"use strict";e.exports=function(e,t){for(var n={},r=Object.keys(e),o=Array.isArray(t),c=0;c<r.length;c++){var a=r[c],i=e[a];(o?-1!==t.indexOf(a):t(a,i,e))&&(n[a]=i)}return n}},82:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n(63),o=n(49),c=n(64),a=function(e,t,n){var a=r.a.folders.move(t);return Object(c.a)({url:a,method:"PUT",headers:{Authorization:Object(o.a)(),parent:e,action:n}})},i=function(e){return function(e){var t=r.a.folders.getAll();return Object(c.a)({url:t,method:"GET",headers:{Authorization:Object(o.a)()},groupName:e})}(e).then((function(e){return e}))},u=function(e){return function(e){var t=r.a.folders.getSingle(e);return Object(c.a)({url:t,method:"GET",headers:{Authorization:Object(o.a)()}})}(e).then((function(e){return e}))},s=function(e){return function(e){var t=r.a.folders.delete(e);return Object(c.a)({url:t,method:"DELETE",headers:{Authorization:Object(o.a)()}})}(e.id).then((function(e){return e}))},l=function(e){return function(e,t,n){var a=r.a.folders.create();return Object(c.a)({url:a,method:"POST",headers:{Authorization:Object(o.a)(),parentFolder:e,folderName:t,folderDescription:n}})}(e.parentFolder,e.folderName,e.folderDescription).then((function(e){return e}))},d=function(e){return function(e,t,n){var a=r.a.folders.edit(n);return Object(c.a)({url:a,method:"PATCH",headers:{Authorization:Object(o.a)(),name:e,description:t}})}(e.name,e.description,e.id).then((function(e){return e}))},f=function(e){var t=e.parent,n=e.id;return a(t,n,"move").then((function(e){return e}))},p=function(e){var t=e.parent,n=e.id;return a(t,n,"copy").then((function(e){return e}))}}}]);
//# sourceMappingURL=15.698fb313.chunk.js.map