(this.webpackJsonptaskmanager=this.webpackJsonptaskmanager||[]).push([[0],[function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function l(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(t)for(var i="string"===typeof t?t.split(" "):t,r=0;r<i.length;r++)e.classList.add(i[r])}function s(e,t){if(!e)return null;if(t&&Object.keys(t).length>0)for(var i=Object.keys(t),r=0;r<i.length;r++){var n=i[r];e.style[n]=t[n]}}function c(e){if(!e.type)return null;var t=function(e,t){if(!e)return null;var i=document.createElement(e);if(t&&Object.keys(t).length>0)for(var r=Object.keys(t),n=0;n<r.length;n++){var a=r[n];"style"===a?s(i,t[a]):"className"===a?d(i,t[a]):a.indexOf("data-")>-1?i.setAttribute(a,t[a]):i[a]=t[a]}return i}(e.type,e.elmAttrs);if(e.elmAttrs&&e.elmAttrs.id){var i=document.getElementById(e.elmAttrs.id);i&&(i.innerHTML="",t=i)}if(e.childElms)for(var r=0;r<e.childElms.length;r++){var n=e.childElms[r];if(n.onlyAppend)t.append(n.content);else{var a=c(n);t.append(a)}}return t}function p(e,t){var i="material-symbols-outlined color-black";return t&&(i+=" "+t),{type:"span",elmAttrs:{className:i,innerHTML:e}}}i.r(t),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?document.body.classList.add("dark"):document.body.classList.remove("dark")}));i(0);var u=function(e){for(var t=e.items,i=e.editModalOpen,r=e.activeDataItem,n=e.editEnabled,a=[],o=function(e){var o,l=t[e],d=["project-item","font-medium","font-body"];G[r]===l.id?(d.push("selected"),d.push("bg-primary"),d.push("color-white")):d.push("color-secondary");var s=[{type:"div",elmAttrs:{className:"project-item-content"},childElms:[p(l.icon,"font-body"),{type:"div",elmAttrs:{innerHTML:null!==(o=l.name)&&void 0!==o?o:l.title}}]}];n&&s.push({type:"button",elmAttrs:{className:"edit",onclick:function(e){e.stopPropagation(),G.editModalId=l.id,G.modalOpen=i,z()}},childElms:[p("edit","font-body")]}),a.push({type:"button",elmAttrs:{className:d,onclick:function(){G[r]!==l.id?G[r]=l.id:G[r]=null,z()}},childElms:s})},l=0;l<t.length;l++)o(l);return a},m=["category","place_item","construction","sports_soccer","science","biotech"],f=["sentiment_very_satisfied","sentiment_neutral","sentiment_satisfied"],v=[{id:1,title:"Unstarted",previous:null,forward:2},{id:2,title:"In Progress",previous:1,forward:3},{id:3,title:"Review",previous:2,forward:4},{id:4,title:"Complete",previous:3,forward:null}],y=[{id:1,title:"Low",className:"bg-yellow",icon:"low_priority"},{id:2,title:"Medium",className:"bg-orange",icon:"priority"},{id:3,title:"High",className:"bg-red",icon:"priority_high"}],h=[{label:"Title",type:"text",id:"title"},{label:"Description",type:"text",id:"desc"},{label:"Assignee",type:"select",id:"assignee"},{label:"Status",type:"select",id:"status"},{label:"Priority",type:"select",id:"priority"},{label:"Project",type:"select",id:"project"}],g=[{key:"previous",icon:"arrow_back"},{key:"forward",icon:"arrow_forward"},{key:"edit",icon:"edit"},{key:"delete",icon:"delete"}],b=["A simple task manager.","Why build one, when lot exist? Just for the fun of it.","Built purely on vanilla Javascript.","All of the tasks and whole app data is stored on localStorage."],k={modalOpen:"",projects:[{id:1,title:"Unmapped",icon:"category",createdOn:j(),updatedOn:j()}],people:[{id:1,name:"Current User",icon:"sentiment_very_satisfied"}],activeProjectId:1,editModalId:null,activePersonId:1,activePriorityId:null,tasks:[]};function j(){return new Date}function A(e){return Math.floor(Math.random()*e)}function w(e){setTimeout((function(){var t=document.getElementById(e);t&&t.focus()}),10)}i(1);function I(e){var t=e.title,i=e.modalType,r=e.addEnabled,n=[{type:"div",elmAttrs:{innerHTML:t}}];return(void 0===r||r)&&n.push({type:"button",elmAttrs:{className:"btn",onclick:function(){G.modalOpen=i,G.editModalId=null,z()}},childElms:[p("add_circle","font-body")]}),{type:"div",elmAttrs:{className:"left-project-head font-medium"},childElms:n}}var O=function(){return c({type:"div",elmAttrs:{className:"left-nav bg-white border-tertiary",id:"left-nav"},childElms:[{type:"div",elmAttrs:{className:"logo-wrapper color-primary font-bolder font-title",innerHTML:"kaarya"}},{type:"div",elmAttrs:{className:"left-project-wrapper border-tertiary"},childElms:[I({title:"Priority",modalType:"add-project",addEnabled:!1})].concat(l(u({items:y,activeDataItem:"activePriorityId",editModalOpen:"",editEnabled:!1})))},{type:"div",elmAttrs:{className:"left-project-wrapper border-tertiary"},childElms:[I({title:"Projects",modalType:"add-project"})].concat(l(u({items:G.projects,activeDataItem:"activeProjectId",editModalOpen:"edit-project",editEnabled:!0})))},{type:"div",elmAttrs:{className:"left-project-wrapper border-tertiary"},childElms:[I({title:"People",modalType:"add-person"})].concat(l(u({items:G.people,activeDataItem:"activePersonId",editModalOpen:"edit-person",editEnabled:!0})))}]})};i(2);function N(e){var t=e.taskType,i=e.taskCount;return{type:"div",elmAttrs:{className:"task-type-head bg-whitesmoke"},childElms:[{type:"div",childElms:[{type:"div",elmAttrs:{className:"color-black font-bolder",innerHTML:t.title}},{type:"div",elmAttrs:{innerHTML:i,className:"bg-primary color-white font-body-reduced"}}]},{type:"button",elmAttrs:{className:"",onclick:function(){G.modalOpen="add-task",G.editModalId=t.id,z()}},childElms:[p("add","font-body color-black")]}]}}var E=function(){for(var e=[],t=function(){var e=l(G.tasks);G.activeProjectId&&(e=e.filter((function(e){return G.activeProjectId&&e.project.toString()===G.activeProjectId.toString()})));G.activePersonId&&(e=e.filter((function(e){return G.activePersonId&&e.assignee.toString()===G.activePersonId.toString()})));G.activePriorityId&&(e=e.filter((function(e){return G.activePriorityId&&e.priority.toString()===G.activePriorityId.toString()})));return e}(),i=function(i){var r=v[i],n=t.filter((function(e){return+e.status===r.id})),a=n.map((function(e){return function(e){for(var t,i=e.task,r=e.taskType,n=y.filter((function(e){return e.id===+i.priority})),a=n[0].title||"Priority",o=G.people.filter((function(e){return e.id===+i.assignee})),l=null===(t=o[0])||void 0===t?void 0:t.name,d=(null===l||void 0===l?void 0:l.split(" ").map((function(e){return e.charAt(0)})).join(""))||"NA",s=function(e){if(e){var t=new Date(e);return[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join("-")}return""}(i.createdOn),c=[],u=function(e){var t=g[e],n=!0;r.forward||"forward"!==t.key||(n=!1),r.previous||"previous"!==t.key||(n=!1),n&&c.push({type:"button",elmAttrs:{onclick:function(){return function(e){var t=e.item,i=e.task,r=e.taskType,n=t.key;if("previous"===n||"forward"===n)G.tasks.map((function(e){return e.id===i.id&&("previous"===n&&r.previous&&(e.status=r.previous),"forward"===n&&r.forward&&(e.status=r.forward)),e}));else if("delete"===n){var a=G.tasks.findIndex((function(e){return e.id===i.id}));G.tasks.splice(a,1)}else"edit"===n&&(G.modalOpen="edit-task",G.editModalId=i.id);return z(),null}({item:t,task:i,taskType:r})}},childElms:[p(t.icon,"font-body")]})},m=0;m<g.length;m++)u(m);return{type:"div",elmAttrs:{className:"task-item bg-whitesmoke"},childElms:[{type:"div",elmAttrs:{className:"priority-action-wrapper"},childElms:[{type:"div",elmAttrs:{innerHTML:a,className:"task-priority bg-black color-white font-body-reduced ".concat(n[0].className)}},{type:"div",childElms:c}]},{type:"div",elmAttrs:{innerHTML:i.title,className:"task-item-title font-body-enhanced font-bold"}},{type:"div",elmAttrs:{innerHTML:i.desc,className:"task-desc"}},{type:"div",elmAttrs:{className:"task-dets"},childElms:[{type:"div",elmAttrs:{innerHTML:d,className:"bg-primary color-white font-body-reduced"}},{type:"div",elmAttrs:{innerHTML:s,className:"font-body-reduced font-bolder"}}]}]}}({task:e,taskType:r})}));e.push({type:"div",elmAttrs:{className:"task-type-wrapper bg-white"},childElms:[N({taskType:r,taskCount:n.length})].concat(l(a))})},r=0;r<v.length;r++)i(r);return{type:"div",elmAttrs:{className:"task-items-wrapper bg-whitesmoke"},childElms:e}};i(3);var M=function(){var e=[];if(G.activeProjectId){var t,i=G.projects.filter((function(e){return e.id===G.activeProjectId}));e.push({type:"font-title-reduced",text:null===(t=i[0])||void 0===t?void 0:t.title}),e.push({type:"font-title-reduced",text:"project"})}0===e.length&&e.push({type:"font-body",text:"All"}),e.push({type:"font-title-reduced",text:"tasks"});for(var r=[],n=0;n<e.length;n++){var a=e[n],o="font-title-reduced"===a.type?"font-title-reduced font-medium":a.type;r.push({type:"div",elmAttrs:{innerHTML:a.text,className:o}})}for(var l=[{key:"info",icon:"info",modalOpen:"app-info"},{key:"statistics",icon:"equalizer",modalOpen:"app-statistics"},{key:"settings",icon:"settings",modalOpen:"app-settings"}],d=[{type:"input",elmAttrs:{placeholder:"Search"}}],s=function(e){var t=l[e];d.push({type:"button",elmAttrs:{onclick:function(){G.modalOpen=t.modalOpen,z()}},childElms:[p(t.icon)]})},u=0;u<l.length;u++)s(u);return c({type:"div",elmAttrs:{className:"right-nav bg-white",id:"right-nav"},childElms:[{type:"div",elmAttrs:{className:"right-top-nav border-tertiary"},childElms:[{type:"div",childElms:[{type:"div",elmAttrs:{className:"right-title-wrapper"},childElms:r}]},{type:"div",elmAttrs:{className:"right-button-items-wrapper"},childElms:d}]},E()]})};i(4);var P=function(e){var t=e.label,i=e.id,r=e.value,n=e.autofocus,a=void 0!==n&&n,o=e.type,l=void 0===o?"input":o,d=e.options,s=void 0===d?[]:d,c=e.enterKeyHandler,p={type:"input",elmAttrs:{className:"border-secondary",id:i,autocomplete:"off",autofocus:a,value:r,onkeyup:function(e){13===e.which&&c&&c()}}};if("select"===l){for(var u=[],m=0;m<s.length;m++){var f=s[m];console.log(f.id,r),u.push({type:"option",elmAttrs:{value:f.id,innerHTML:f.title,selected:f.id.toString()===r}})}p={type:"select",elmAttrs:{className:"",id:i,value:r,selected:r},childElms:u}}return{type:"div",elmAttrs:{className:"form-item"},childElms:[{type:"label",elmAttrs:{innerHTML:t,className:"color-secondary font-body-reduced"}},p]}};i(5);var T=function(e){var t=e.onclick,i=e.className,r=void 0===i?"bg-primary color-white font-medium font-body":i,n=e.text;return{type:"div",elmAttrs:{className:"form-button-wrapper"},childElms:[{type:"button",elmAttrs:{innerHTML:void 0===n?"Submit":n,className:r,onclick:function(){t()}}}]}};i(6);function S(){var e=document.getElementById("project-name");if(e&&e.value&&e.value.length<=15){var t=e.value,i=j();if(G.editModalId&&"edit-project"===G.modalOpen)G.projects.map((function(e){return e.id===G.editModalId&&(e.title=t,e.updatedOn=i),e})),G.editModalId=null;else{var r=A(m.length),n=m[r],a=G.projects.length+1;G.projects.push({id:a,title:t,icon:n,updatedOn:i,createdOn:i}),G.activeProjectId=a}F()}}function L(){var e=G.projects.findIndex((function(e){return e.id===G.editModalId}));e&&G.projects.splice(e,1),G.tasks.map((function(e){return e.project===G.editModalId&&(e.project=1),e})),G.activeProjectId===G.editModalId&&(G.activeProjectId=null),F()}var H=function(){var e="";if(G.editModalId&&"edit-project"===G.modalOpen){var t=G.projects.filter((function(e){return e.id===G.editModalId}));t&&1===t.length&&(e=t[0].title)}w("project-name");var i=[P({label:"Project Name",id:"project-name",value:e,enterKeyHandler:S,autofocus:!0,type:"input"}),T({onclick:S})];return"edit-project"===G.modalOpen&&1!==G.editModalId&&i.push(T({onclick:L,className:"color-red",text:"Delete"})),{type:"div",elmAttrs:{className:"add-projects-wrapper shadow"},childElms:[{type:"div",elmAttrs:{className:"title font-medium font-title-enhanced",innerHTML:G.editModalId?"Edit Project":"Add Project"}},{type:"div",elmAttrs:{className:"form-wrapper"},childElms:i}]}};i(7);function x(){var e=document.getElementById("person-name");if(e&&e.value&&e.value.length<=15){var t=e.value;if(G.editModalId&&"edit-person"===G.modalOpen)G.people.map((function(e){return e.id===G.editModalId&&(e.name=t),e})),G.editModalId=null;else{var i=A(f.length),r=f[i],n=G.people.length+1;G.people.push({id:n,name:t,icon:r}),G.activePersonId=n}F()}}function D(){var e=G.people.findIndex((function(e){return e.id===G.editModalId}));G.people.splice(e,1),G.tasks.map((function(e){return G.editModalId&&e.assignee.toString()===G.editModalId.toString()&&(e.assignee=1),e})),G.activePersonId===G.editModalId&&(G.activePersonId=null),F()}var _=function(){var e="";if(G.editModalId&&"edit-person"===G.modalOpen){var t=G.people.filter((function(e){return e.id===G.editModalId}));t&&1===t.length&&(e=t[0].name)}w("person-name");var i=[P({label:"Person Name",id:"person-name",value:e,enterKeyHandler:x,autofocus:!0,type:"input"}),T({onclick:x})];return"edit-person"===G.modalOpen&&1!==G.editModalId&&i.push(T({onclick:D,text:"Delete",className:"color-red"})),{type:"div",elmAttrs:{className:"add-person-wrapper shadow bg-white"},childElms:[{type:"div",elmAttrs:{className:"title font-medium font-title-enhanced",innerHTML:G.editModalId?"Edit Person":"Add Person"}},{type:"div",elmAttrs:{className:"form-wrapper"},childElms:i}]}};i(8);function B(){for(var e=!0,t=j(),i={},r=0;r<h.length;r++){var n=h[r],o=document.getElementById(n.id);(null===o||void 0===o?void 0:o.value)?(console.log(null===o||void 0===o?void 0:o.value,n.id),i[n.id]=o.value):e=!1}e&&(G.editModalId&&"edit-task"===G.modalOpen?G.tasks.map((function(e){return e.id===Number(G.editModalId)&&(e.title=i.title,Object.keys(i).map((function(t){return e[t]=i[t],null})),e.updatedOn=t),e})):G.tasks.push(a(a({},i),{},{createdOn:t,updatedOn:t,id:A(5e5)})),G.activeProjectId=Number(i.project),F())}var C=function(){var e={},t=G.editModalId&&"edit-task"===G.modalOpen;if(t){var i=G.tasks.filter((function(e){return Number(G.editModalId)===e.id}));i&&i[0]&&(e=a({},i[0]))}for(var r=[],n=0;n<h.length;n++){var o=h[n],l=e[o.id]||"",d=[];"select"===o.type&&(l=1,"assignee"===o.id&&(d=G.people.map((function(e){return{id:e.id,title:e.name}})),l=1,G.activePersonId&&(l=G.activePersonId)),"status"===o.id&&(d=v,G.editModalId&&(l=G.editModalId)),"priority"===o.id&&(d=y),"project"===o.id&&(d=G.projects.map((function(e){return{id:e.id,title:e.title}})),G.activeProjectId&&(l=G.activeProjectId))),(l=e[o.id]||l)&&(l=l.toString()),console.log(l,o.id),r.push(P({label:o.label,id:o.id,value:l,enterKeyHandler:B,autofocus:0===n,type:o.type,options:d}))}return w("title"),{type:"div",elmAttrs:{className:"task-form shadow"},childElms:[{type:"div",elmAttrs:{className:"task-title font-medium font-title-enhanced",innerHTML:t?"Edit Task":"Add Task"}},{type:"div",elmAttrs:{className:"task-form-wrapper"},childElms:r},T({onclick:B})]}};i(9);var J=function(){for(var e=[],t=0;t<b.length;t++){var i=b[t];e.push({type:"li",elmAttrs:{innerHTML:i,className:"font-medium font-body-enhanced"}})}return{type:"div",elmAttrs:{className:"shadow app-info-wrapper"},childElms:[{type:"ul",childElms:e}]}};i(10);function U(){for(var e=Object.keys(G),t=0;t<e.length;t++){var i=e[t];G[i]=k[i]}F()}var K=function(){return{type:"div",elmAttrs:{className:"shadow app-settings-wrapper"},childElms:[T({onclick:U,text:"Reset App Data"})]}};i(11);var R=function(){var e=[],t=[];return G.people.map((function(i){var r={type:"div",elmAttrs:{className:"summary-person border-secondary"},childElms:[{type:"div",elmAttrs:{innerHTML:i.name,className:"font-bolder font-body"}}]};t.push(i.name);for(var n=G.tasks.filter((function(e){return e.assignee.toString()===i.id.toString()})),a={},o=0;o<n.length;o++){var l=n[o];a[l.project]?a[l.project].push(l):a[l.project]=[l]}var d=Object.keys(a);if(d.length)for(var s=function(e){var i,n=d[e],o=null===(i=G.projects.filter((function(e){return e.id.toString()===n.toString()}))[0])||void 0===i?void 0:i.title,l=j(),s=[[e+1,"."].join(""),o,"Project"].join(" ");r.childElms.push({type:"div",elmAttrs:{innerHTML:s,className:"summary-person-title font-medium"}}),t.push("       "+s);for(var c=[],p=function(e){var i,r,o=a[n][e],d=(null===(i=y.filter((function(e){return e.id.toString()===o.priority.toString()}))[0])||void 0===i?void 0:i.title)||"",s=(null===(r=v.filter((function(e){return e.id.toString()===o.status.toString()}))[0])||void 0===r?void 0:r.title)||"",p=l.getTime()-new Date(o.createdOn).getTime();p=Math.round(p/864e5);var u=[o.title,[d,"priority"].join(" "),[p,"days since assigned"].join(" "),["with",s,"as","status"].join(" ")].join(", ");c.push({type:"li",elmAttrs:{innerHTML:u+"."}}),t.push("           "+u+".")},u=0;u<a[n].length;u++)p(u);var m={type:"ul",elmAttrs:{className:"summary-person-tasks-wrapper"},childElms:c};r.childElms.push(m)},c=0;c<d.length;c++)s(c);else r.childElms.push({type:"div",elmAttrs:{innerHTML:"No Tasks Assigned.",className:"summary-no-tasks"}}),t.push("       No Tasks Assigned.");return e.push(r),i})),{type:"div",elmAttrs:{className:"app-statistics-wrapper shadow"},childElms:[{type:"div",childElms:[{type:"div",elmAttrs:{innerHTML:"Summary Generator",className:"font-bolder font-title-reduced title"}}]}].concat(e,[T({onclick:function(){navigator.clipboard.writeText(t.join("\n\n"))},text:"Copy Report to Clipboard"})])}};i(12);var q=function(){var e=[{type:"button",elmAttrs:{className:"close",onclick:function(){F()}},childElms:[p("close","font-large")]}];if(G.modalOpen){if("edit-project"===G.modalOpen||"add-project"===G.modalOpen){var t=H();e.push(t)}if("edit-person"===G.modalOpen||"add-person"===G.modalOpen){var i=_();e.push(i)}if("add-task"===G.modalOpen||"edit-task"===G.modalOpen){var r=C();e.push(r)}if("app-info"===G.modalOpen){var n=J();e.push(n)}if("app-settings"===G.modalOpen){var a=K();e.push(a)}if("app-statistics"===G.modalOpen){var o=R();e.push(o)}}return c({type:"div",elmAttrs:{className:"modal-wrapper",id:"modal-wrapper"},childElms:e})};i(13);function z(){var e=document.getElementById("root"),t=O(),i=M();if(e)if(e.classList.add("font-body"),e.classList.add("color-black"),t&&e.append(t),i&&e.append(i),G.modalOpen){var r=q();r&&e.append(r)}else{var n=document.getElementById("modal-wrapper");n&&n.remove()}}function F(){G.modalOpen="",G.editModalId=null,z()}var G={modalOpen:"",projects:[{id:1,title:"Un Assigned",icon:"category",createdOn:j(),updatedOn:j()}],people:[{id:1,name:"Current User",icon:"sentiment_very_satisfied"}],activeProjectId:1,editModalId:null,activePersonId:1,activePriorityId:null,tasks:[]},W=window.localStorage.getItem("data");if(W){var Y=JSON.parse(W);Y&&(G=a({},Y))}window.addEventListener("unload",(function(){window.localStorage.setItem("data",JSON.stringify(G))})),document.addEventListener("keyup",(function(e){27===e.which&&G.modalOpen&&F()})),z()}],[[14,1]]]);
//# sourceMappingURL=main.cc08f609.chunk.js.map