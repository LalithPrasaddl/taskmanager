(this.webpackJsonptaskmanager=this.webpackJsonptaskmanager||[]).push([[0],[function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function l(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(t)for(var r="string"===typeof t?t.split(" "):t,i=0;i<r.length;i++)e.classList.add(r[i])}function s(e,t){if(!e)return null;if(t&&Object.keys(t).length>0)for(var r=Object.keys(t),i=0;i<r.length;i++){var n=r[i];e.style[n]=t[n]}}function c(e){if(!e.type)return null;var t=function(e,t){if(!e)return null;var r=document.createElement(e);if(t&&Object.keys(t).length>0)for(var i=Object.keys(t),n=0;n<i.length;n++){var a=i[n];"style"===a?s(r,t[a]):"className"===a?d(r,t[a]):a.indexOf("data-")>-1?r.setAttribute(a,t[a]):r[a]=t[a]}return r}(e.type,e.elmAttrs);if(e.elmAttrs&&e.elmAttrs.id){var r=document.getElementById(e.elmAttrs.id);r&&(r.innerHTML="",t=r)}if(e.childElms)for(var i=0;i<e.childElms.length;i++){var n=e.childElms[i];if(n.onlyAppend)t.append(n.content);else{var a=c(n);t.append(a)}}return t}function p(e,t){var r="material-symbols-outlined color-black";return t&&(r+=" "+t),{type:"span",elmAttrs:{className:r,innerHTML:e}}}r.r(t),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?document.body.classList.add("dark"):document.body.classList.remove("dark")}));r(0);var u=function(e){for(var t=e.items,r=e.editModalOpen,i=e.activeDataItem,n=e.editEnabled,a=[],o=function(e){var o,l=t[e],d=["project-item","font-medium","font-body"];Y[i]===l.id?(d.push("selected"),d.push("bg-primary"),d.push("color-white")):d.push("color-secondary");var s=[{type:"div",elmAttrs:{className:"project-item-content"},childElms:[p(l.icon,"font-body"),{type:"div",elmAttrs:{innerHTML:null!==(o=l.name)&&void 0!==o?o:l.title}}]}];n&&s.push({type:"button",elmAttrs:{className:"edit",onclick:function(e){e.stopPropagation(),Y.editModalId=l.id,Y.modalOpen=r,F()}},childElms:[p("edit","font-body")]}),a.push({type:"button",elmAttrs:{className:d,onclick:function(){Y[i]!==l.id?Y[i]=l.id:Y[i]=null,F()}},childElms:s})},l=0;l<t.length;l++)o(l);return a},m=["category","place_item","construction","sports_soccer","science","biotech"],f=["sentiment_very_satisfied","sentiment_neutral","sentiment_satisfied"],v=[{id:1,title:"Unstarted",previous:null,forward:2},{id:2,title:"In Progress",previous:1,forward:3},{id:3,title:"Review",previous:2,forward:4},{id:4,title:"Complete",previous:3,forward:null}],y=[{id:1,title:"Low",className:"bg-yellow",icon:"low_priority"},{id:2,title:"Medium",className:"bg-orange",icon:"priority"},{id:3,title:"High",className:"bg-red",icon:"priority_high"}],h=[{label:"Title",type:"text",id:"title"},{label:"Description",type:"text",id:"desc"},{label:"Asignee",type:"select",id:"assignee"},{label:"Status",type:"select",id:"status"},{label:"Priority",type:"select",id:"priority"},{label:"Project",type:"select",id:"project"}],b=[{key:"previous",icon:"arrow_back"},{key:"forward",icon:"arrow_forward"},{key:"edit",icon:"edit"},{key:"delete",icon:"delete"}],g=["A simple task manager.","Why build one, when lot exist? Just for the fun of it.","Built purely on vanilla Javascript.","All of the tasks and whole app data is stored on localStorage."],k={modalOpen:"",projects:[{id:1,title:"Unmapped",icon:"category",createdOn:I(),updatedOn:I()}],people:[{id:1,name:"Current User",icon:"sentiment_very_satisfied"}],activeProjectId:1,editModalId:null,activePersonId:1,activePriorityId:null,tasks:[]};function I(){return new Date}function w(e){return Math.floor(Math.random()*e)}function A(e){setTimeout((function(){var t=document.getElementById(e);t&&t.focus()}),10)}r(1);function j(e){var t=e.title,r=e.modalType,i=e.addEnabled,n=[{type:"div",elmAttrs:{innerHTML:t}}];return(void 0===i||i)&&n.push({type:"button",elmAttrs:{className:"btn",onclick:function(){Y.modalOpen=r,Y.editModalId=null,F()}},childElms:[p("add_circle","font-body")]}),{type:"div",elmAttrs:{className:"left-project-head font-medium"},childElms:n}}var O=function(){return c({type:"div",elmAttrs:{className:"left-nav bg-white border-tertiary",id:"left-nav"},childElms:[{type:"div",elmAttrs:{className:"logo-wrapper color-primary font-bolder font-title",innerHTML:"kaarya"}},{type:"div",elmAttrs:{className:"left-project-wrapper border-tertiary"},childElms:[j({title:"Priority",modalType:"add-project",addEnabled:!1})].concat(l(u({items:y,activeDataItem:"activePriorityId",editModalOpen:"",editEnabled:!1})))},{type:"div",elmAttrs:{className:"left-project-wrapper border-tertiary"},childElms:[j({title:"Projects",modalType:"add-project"})].concat(l(u({items:Y.projects,activeDataItem:"activeProjectId",editModalOpen:"edit-project",editEnabled:!0})))},{type:"div",elmAttrs:{className:"left-project-wrapper border-tertiary"},childElms:[j({title:"People",modalType:"add-person"})].concat(l(u({items:Y.people,activeDataItem:"activePersonId",editModalOpen:"edit-person",editEnabled:!0})))}]})};r(2);function E(e){var t=e.taskType,r=e.taskCount;return{type:"div",elmAttrs:{className:"task-type-head bg-whitesmoke"},childElms:[{type:"div",childElms:[{type:"div",elmAttrs:{className:"color-black font-bolder",innerHTML:t.title}},{type:"div",elmAttrs:{innerHTML:r,className:"bg-primary color-white font-body-reduced"}}]},{type:"button",elmAttrs:{className:"",onclick:function(){Y.modalOpen="add-task",Y.editModalId=t.id,F()}},childElms:[p("add","font-body color-black")]}]}}var N=function(){for(var e=[],t=function(){var e=l(Y.tasks);Y.activeProjectId&&(e=e.filter((function(e){return Y.activeProjectId&&e.project.toString()===Y.activeProjectId.toString()})));Y.activePersonId&&(e=e.filter((function(e){return Y.activePersonId&&e.assignee.toString()===Y.activePersonId.toString()})));Y.activePriorityId&&(e=e.filter((function(e){return Y.activePriorityId&&e.priority.toString()===Y.activePriorityId.toString()})));return e}(),r=function(r){var i=v[r],n=t.filter((function(e){return+e.status===i.id})),a=n.map((function(e){return function(e){for(var t,r=e.task,i=e.taskType,n=y.filter((function(e){return e.id===+r.priority})),a=n[0].title||"Priority",o=Y.people.filter((function(e){return e.id===+r.assignee})),l=null===(t=o[0])||void 0===t?void 0:t.name,d=(null===l||void 0===l?void 0:l.split(" ").map((function(e){return e.charAt(0)})).join(""))||"NA",s=function(e){if(e){var t=new Date(e);return[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join("-")}return""}(r.createdOn),c=[],u=function(e){var t=b[e],n=!0;i.forward||"forward"!==t.key||(n=!1),i.previous||"previous"!==t.key||(n=!1),n&&c.push({type:"button",elmAttrs:{onclick:function(){return function(e){var t=e.item,r=e.task,i=e.taskType,n=t.key;if("previous"===n||"forward"===n)Y.tasks.map((function(e){return e.id===r.id&&("previous"===n&&i.previous&&(e.status=i.previous),"forward"===n&&i.forward&&(e.status=i.forward)),e}));else if("delete"===n){var a=Y.tasks.findIndex((function(e){return e.id===r.id}));Y.tasks.splice(a,1)}else"edit"===n&&(Y.modalOpen="edit-task",Y.editModalId=r.id);return F(),null}({item:t,task:r,taskType:i})}},childElms:[p(t.icon,"font-body")]})},m=0;m<b.length;m++)u(m);return{type:"div",elmAttrs:{className:"task-item bg-whitesmoke"},childElms:[{type:"div",elmAttrs:{className:"priority-action-wrapper"},childElms:[{type:"div",elmAttrs:{innerHTML:a,className:"task-priority bg-black color-white font-body-reduced ".concat(n[0].className)}},{type:"div",childElms:c}]},{type:"div",elmAttrs:{innerHTML:r.title,className:"task-item-title font-body-enhanced font-bold"}},{type:"div",elmAttrs:{innerHTML:r.desc,className:"task-desc"}},{type:"div",elmAttrs:{className:"task-dets"},childElms:[{type:"div",elmAttrs:{innerHTML:d,className:"bg-primary color-white font-body-reduced"}},{type:"div",elmAttrs:{innerHTML:s,className:"font-body-reduced font-bolder"}}]}]}}({task:e,taskType:i})}));e.push({type:"div",elmAttrs:{className:"task-type-wrapper bg-white"},childElms:[E({taskType:i,taskCount:n.length})].concat(l(a))})},i=0;i<v.length;i++)r(i);return{type:"div",elmAttrs:{className:"task-items-wrapper bg-whitesmoke"},childElms:e}};r(3);var M=function(){var e=[];if(Y.activeProjectId){var t,r=Y.projects.filter((function(e){return e.id===Y.activeProjectId}));e.push({type:"font-title-reduced",text:null===(t=r[0])||void 0===t?void 0:t.title}),e.push({type:"font-title-reduced",text:"project"})}0===e.length&&e.push({type:"font-body",text:"All"}),e.push({type:"font-title-reduced",text:"tasks"});for(var i=[],n=0;n<e.length;n++){var a=e[n],o="font-title-reduced"===a.type?"font-title-reduced font-medium":a.type;i.push({type:"div",elmAttrs:{innerHTML:a.text,className:o}})}return c({type:"div",elmAttrs:{className:"right-nav bg-white",id:"right-nav"},childElms:[{type:"div",elmAttrs:{className:"right-top-nav border-tertiary"},childElms:[{type:"div",childElms:[{type:"div",elmAttrs:{className:"right-title-wrapper"},childElms:i}]},{type:"div",elmAttrs:{className:"right-button-items-wrapper"},childElms:[{type:"input",elmAttrs:{placeholder:"Search"}},{type:"button",elmAttrs:{onclick:function(){Y.modalOpen="app-info",F()}},childElms:[p("info")]},{type:"button",elmAttrs:{onclick:function(){Y.modalOpen="app-settings",F()}},childElms:[p("settings")]}]}]},N()]})};r(4);var P=function(e){var t=e.label,r=e.id,i=e.value,n=e.autofocus,a=void 0!==n&&n,o=e.type,l=void 0===o?"input":o,d=e.options,s=void 0===d?[]:d,c=e.enterKeyHandler,p={type:"input",elmAttrs:{className:"border-secondary",id:r,autocomplete:"off",autofocus:a,value:i,onkeyup:function(e){13===e.which&&c&&c()}}};if("select"===l){for(var u=[],m=0;m<s.length;m++){var f=s[m];console.log(f.id,i),u.push({type:"option",elmAttrs:{value:f.id,innerHTML:f.title,selected:f.id.toString()===i}})}p={type:"select",elmAttrs:{className:"",id:r,value:i,selected:i},childElms:u}}return{type:"div",elmAttrs:{className:"form-item"},childElms:[{type:"label",elmAttrs:{innerHTML:t,className:"color-secondary font-body-reduced"}},p]}};r(5);var T=function(e){var t=e.onclick,r=e.className,i=void 0===r?"bg-primary color-white font-medium font-body":r,n=e.text;return{type:"div",elmAttrs:{className:"form-button-wrapper"},childElms:[{type:"button",elmAttrs:{innerHTML:void 0===n?"Submit":n,className:i,onclick:function(){t()}}}]}};r(6);function L(){var e=document.getElementById("project-name");if(e&&e.value&&e.value.length<=15){var t=e.value,r=I();if(Y.editModalId&&"edit-project"===Y.modalOpen)Y.projects.map((function(e){return e.id===Y.editModalId&&(e.title=t,e.updatedOn=r),e})),Y.editModalId=null;else{var i=w(m.length),n=m[i],a=Y.projects.length+1;Y.projects.push({id:a,title:t,icon:n,updatedOn:r,createdOn:r}),Y.activeProjectId=a}W()}}function S(){var e=Y.projects.findIndex((function(e){return e.id===Y.editModalId}));e&&Y.projects.splice(e,1),Y.tasks.map((function(e){return e.project===Y.editModalId&&(e.project=1),e})),Y.activeProjectId===Y.editModalId&&(Y.activeProjectId=null),W()}var H=function(){var e="";if(Y.editModalId&&"edit-project"===Y.modalOpen){var t=Y.projects.filter((function(e){return e.id===Y.editModalId}));t&&1===t.length&&(e=t[0].title)}A("project-name");var r=[P({label:"Project Name",id:"project-name",value:e,enterKeyHandler:L,autofocus:!0,type:"input"}),T({onclick:L})];return"edit-project"===Y.modalOpen&&1!==Y.editModalId&&r.push(T({onclick:S,className:"color-red",text:"Delete"})),{type:"div",elmAttrs:{className:"add-projects-wrapper shadow"},childElms:[{type:"div",elmAttrs:{className:"title font-medium font-title-enhanced",innerHTML:Y.editModalId?"Edit Project":"Add Project"}},{type:"div",elmAttrs:{className:"form-wrapper"},childElms:r}]}};r(7);function x(){var e=document.getElementById("person-name");if(e&&e.value&&e.value.length<=15){var t=e.value;if(Y.editModalId&&"edit-person"===Y.modalOpen)Y.people.map((function(e){return e.id===Y.editModalId&&(e.name=t),e})),Y.editModalId=null;else{var r=w(f.length),i=f[r],n=Y.people.length+1;Y.people.push({id:n,name:t,icon:i}),Y.activePersonId=n}W()}}function D(){var e=Y.people.findIndex((function(e){return e.id===Y.editModalId}));Y.people.splice(e,1),Y.tasks.map((function(e){return Y.editModalId&&e.assignee.toString()===Y.editModalId.toString()&&(e.assignee=1),e})),Y.activePersonId===Y.editModalId&&(Y.activePersonId=null),W()}var _=function(){var e="";if(Y.editModalId&&"edit-person"===Y.modalOpen){var t=Y.people.filter((function(e){return e.id===Y.editModalId}));t&&1===t.length&&(e=t[0].name)}A("person-name");var r=[P({label:"Person Name",id:"person-name",value:e,enterKeyHandler:x,autofocus:!0,type:"input"}),T({onclick:x})];return"edit-person"===Y.modalOpen&&1!==Y.editModalId&&r.push(T({onclick:D,text:"Delete",className:"color-red"})),{type:"div",elmAttrs:{className:"add-person-wrapper shadow bg-white"},childElms:[{type:"div",elmAttrs:{className:"title font-medium font-title-enhanced",innerHTML:Y.editModalId?"Edit Person":"Add Person"}},{type:"div",elmAttrs:{className:"form-wrapper"},childElms:r}]}};r(8);function B(){for(var e=!0,t=I(),r={},i=0;i<h.length;i++){var n=h[i],o=document.getElementById(n.id);(null===o||void 0===o?void 0:o.value)?(console.log(null===o||void 0===o?void 0:o.value,n.id),r[n.id]=o.value):e=!1}e&&(Y.editModalId&&"edit-task"===Y.modalOpen?Y.tasks.map((function(e){return e.id===Number(Y.editModalId)&&(e.title=r.title,Object.keys(r).map((function(t){return e[t]=r[t],null})),e.updatedOn=t),e})):Y.tasks.push(a(a({},r),{},{createdOn:t,updatedOn:t,id:w(5e5)})),Y.activeProjectId=Number(r.project),W())}var C=function(){var e={},t=Y.editModalId&&"edit-task"===Y.modalOpen;if(t){var r=Y.tasks.filter((function(e){return Number(Y.editModalId)===e.id}));r&&r[0]&&(e=a({},r[0]))}for(var i=[],n=0;n<h.length;n++){var o=h[n],l=e[o.id]||"",d=[];"select"===o.type&&(l=1,"assignee"===o.id&&(d=Y.people.map((function(e){return{id:e.id,title:e.name}})),l=1,Y.activePersonId&&(l=Y.activePersonId)),"status"===o.id&&(d=v,Y.editModalId&&(l=Y.editModalId)),"priority"===o.id&&(d=y),"project"===o.id&&(d=Y.projects.map((function(e){return{id:e.id,title:e.title}})),Y.activeProjectId&&(l=Y.activeProjectId))),(l=e[o.id]||l)&&(l=l.toString()),console.log(l,o.id),i.push(P({label:o.label,id:o.id,value:l,enterKeyHandler:B,autofocus:0===n,type:o.type,options:d}))}return A("title"),{type:"div",elmAttrs:{className:"task-form shadow"},childElms:[{type:"div",elmAttrs:{className:"task-title font-medium font-title-enhanced",innerHTML:t?"Edit Task":"Add Task"}},{type:"div",elmAttrs:{className:"task-form-wrapper"},childElms:i},T({onclick:B})]}};r(9),r(10);var J=function(){for(var e=[],t=0;t<g.length;t++){var r=g[t];e.push({type:"li",elmAttrs:{innerHTML:r,className:"font-medium font-body-enhanced"}})}return{type:"div",elmAttrs:{className:"shadow app-info-wrapper"},childElms:[{type:"ul",childElms:e}]}};r(11);function U(){for(var e=Object.keys(Y),t=0;t<e.length;t++){var r=e[t];Y[r]=k[r]}W()}var K=function(){return{type:"div",elmAttrs:{className:"shadow app-settings-wrapper"},childElms:[T({onclick:U,text:"Reset App Data"})]}};var R=function(){var e=[{type:"button",elmAttrs:{className:"close",onclick:function(){W()}},childElms:[p("close","font-large")]}];if(Y.modalOpen){if("edit-project"===Y.modalOpen||"add-project"===Y.modalOpen){var t=H();e.push(t)}if("edit-person"===Y.modalOpen||"add-person"===Y.modalOpen){var r=_();e.push(r)}if("add-task"===Y.modalOpen||"edit-task"===Y.modalOpen){var i=C();e.push(i)}if("app-info"===Y.modalOpen){var n=J();e.push(n)}if("app-settings"===Y.modalOpen){var a=K();e.push(a)}}return c({type:"div",elmAttrs:{className:"modal-wrapper",id:"modal-wrapper"},childElms:e})};r(12);function F(){var e=document.getElementById("root"),t=O(),r=M();if(e)if(e.classList.add("font-body"),e.classList.add("color-black"),t&&e.append(t),r&&e.append(r),Y.modalOpen){var i=R();i&&e.append(i)}else{var n=document.getElementById("modal-wrapper");n&&n.remove()}}function W(){Y.modalOpen="",Y.editModalId=null,F()}var Y={modalOpen:"",projects:[{id:1,title:"Un Assigned",icon:"category",createdOn:I(),updatedOn:I()}],people:[{id:1,name:"Current User",icon:"sentiment_very_satisfied"}],activeProjectId:1,editModalId:null,activePersonId:1,activePriorityId:null,tasks:[]},$=window.sessionStorage.getItem("data");if($){var q=JSON.parse($);q&&(Y=a({},q))}window.addEventListener("unload",(function(){window.sessionStorage.setItem("data",JSON.stringify(Y))})),document.addEventListener("keyup",(function(e){27===e.which&&Y.modalOpen&&W()})),F()}],[[13,1]]]);
//# sourceMappingURL=main.a8a9d35e.chunk.js.map