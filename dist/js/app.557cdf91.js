(function(){"use strict";var e={9237:function(e,t,a){var s=a(9242),o=a(3396);const i={class:"bg-dark min-vh-100"};function r(e,t,a,s,r,n){const l=(0,o.up)("header-comp"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(l),(0,o.Wm)(c)])}var n=a(7139),l=a(1199);const c={class:"navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary border-3 rounded"},d={class:"container-fluid"},u=["onClick"],g=(0,o._)("img",{src:l,width:"30",height:"24",class:"d-inline-block align-text-top"},null,-1),h=(0,o.Uk)(" Lost Ark "),p=[g,h],k=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarSupportedContent"},m={class:"navbar-nav me-auto mb-2 mb-lg-0"},y={class:"nav-item"},v=["onClick"],w={class:"nav-item"},T=["onClick"];function f(e,t,a,s,i,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("nav",c,[(0,o._)("div",d,[(0,o.Wm)(l,{custom:"",to:"/"},{default:(0,o.w5)((({navigate:e})=>[(0,o._)("a",{class:"navbar-brand",onClick:e},p,8,u)])),_:1}),k,(0,o._)("div",b,[(0,o._)("ul",m,[(0,o._)("li",y,[(0,o.Wm)(l,{custom:"",to:"/todo-list"},{default:(0,o.w5)((({navigate:e,isActive:t})=>[(0,o._)("a",{class:(0,n.C_)({active:t,"nav-link":!0}),onClick:e,role:"button"}," To-Do List",10,v)])),_:1})]),(0,o._)("li",w,[(0,o.Wm)(l,{custom:"",to:"char-add"},{default:(0,o.w5)((({navigate:e,isActive:t})=>[(0,o._)("a",{class:(0,n.C_)({active:t,"nav-link":!0}),onClick:e,role:"button"},"Adding Character and Task",10,T)])),_:1})])])])])])])}var _={name:"HeaderComp"},D=a(89);const C=(0,D.Z)(_,[["render",f]]);var S=C,x={components:{headerComp:S},beforeCreate(){0===localStorage.length?(console.log("No local storage"),localStorage.setItem("charList",JSON.stringify([])),localStorage.setItem("accWideTasks",JSON.stringify([])),localStorage.setItem("resetDay",Date.now().toString()),localStorage.setItem("resetTime",Date.now().toString())):"NaN"!==localStorage.getItem("resetTime")&&null!==localStorage.getItem("resetTime")||localStorage.setItem("resetTime",Date.now().toString())}};const L=(0,D.Z)(x,[["render",r]]);var W=L,N=a(678);const O={class:"container"},A={class:"row justify-content-center"},I={class:"col-12 col-md-5 card m-2 border-5 border-secondary bg-dark text-light"},E={class:"card-body"},J=(0,o._)("h5",{class:"card-title mb-3"},"Character Adding",-1),R={class:"input-group"},Y=(0,o._)("span",{class:"input-group-text bg-secondary text-light"},"Character Name",-1),M=(0,o._)("hr",null,null,-1),H=(0,o._)("h5",{class:"card-title mb-3"},"Task Adding",-1),U={class:"input-group mb-3"},j=(0,o._)("span",{class:"input-group-text bg-secondary text-light"},"Task",-1),z=(0,o._)("option",{disabled:""},"Select Routine",-1),K=(0,o._)("option",null,"Daily",-1),V=(0,o._)("option",null,"Weekly",-1),F=(0,o._)("option",null,"Account-Wide",-1),P=[z,K,V,F],Z=["disabled"],$=(0,o._)("hr",null,null,-1),q=["disabled"],B=(0,o._)("hr",null,null,-1),G=(0,o._)("h5",{class:"card-title mb-3"},"Reset Time Select",-1),Q={class:"input-group mb-3"},X=(0,o._)("span",{class:"input-group-text bg-secondary text-light"},"Daily Tasks Reset Time",-1),ee={class:"input-group mb-3"},te=(0,o._)("span",{class:"input-group-text bg-secondary text-light"},"Weekly Tasks Reset Day",-1),ae=(0,o.uE)('<option value="0" selected disabled>Select Day</option><option value="1">Monday</option><option value="2">Tuesday</option><option value="3">Wednesday</option><option value="4">Thursday</option><option value="5">Friday</option><option value="6">Saturday</option><option value="7">Sunday</option>',8),se=[ae],oe={class:"col-12 col-md-5 card m-2 border-5 border-secondary bg-dark text-light"},ie={class:"card-body"},re={key:0,class:"card-title text-light"},ne={key:1,class:"card-title text-warning"},le=(0,o._)("hr",null,null,-1),ce={class:"list-group"},de=["onClick"],ue={key:2,class:"card-title text-light"},ge={key:3,class:"card-title text-warning"},he=(0,o._)("hr",null,null,-1),pe={class:"list-group"},ke=["onClick"],be={key:4,class:"card-title text-light"},me={key:5,class:"card-title text-warning"},ye=(0,o._)("hr",null,null,-1),ve={class:"list-group"},we=["onClick"];function Te(e,t,a,i,r,l){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",A,[(0,o._)("div",I,[(0,o._)("div",E,[J,(0,o._)("div",R,[Y,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control bg-dark text-light",placeholder:"enter name","onUpdate:modelValue":t[0]||(t[0]=e=>r.newChar.charName=e)},null,512),[[s.nr,r.newChar.charName]])]),M,H,(0,o._)("div",U,[j,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control bg-dark text-light","onUpdate:modelValue":t[1]||(t[1]=e=>r.taskName=e),placeholder:"enter task"},null,512),[[s.nr,r.taskName]]),(0,o.wy)((0,o._)("select",{class:"form-select bg-secondary text-light","onUpdate:modelValue":t[2]||(t[2]=e=>r.routine=e)},P,512),[[s.bM,r.routine]])]),(0,o._)("button",{class:"btn btn-outline-primary w-100",onClick:t[3]||(t[3]=(...e)=>l.addTask&&l.addTask(...e)),disabled:!(r.taskName.length>0&&"Select Routine"!==r.routine)}," ADD TASK ",8,Z),$,(0,o._)("button",{class:"btn btn-outline-danger w-100",onClick:t[4]||(t[4]=(...e)=>l.charSave&&l.charSave(...e)),disabled:!l.saveEnabler}," SAVE ",8,q),B,G,(0,o._)("div",Q,[X,(0,o.wy)((0,o._)("input",{type:"time",class:"form-control bg-dark text-light",placeholder:"8:00","onUpdate:modelValue":t[5]||(t[5]=e=>r.resetTime=e),onChange:t[6]||(t[6]=(...e)=>l.updateResetTime&&l.updateResetTime(...e))},null,544),[[s.nr,r.resetTime]])]),(0,o._)("div",ee,[te,(0,o.wy)((0,o._)("select",{class:"form-select bg-dark text-light","onUpdate:modelValue":t[7]||(t[7]=e=>r.resetDay=e),onChange:t[8]||(t[8]=(...e)=>l.updateResetDay&&l.updateResetDay(...e))},se,544),[[s.bM,r.resetDay]])])])]),(0,o._)("div",oe,[(0,o._)("div",ie,[r.newChar.dailyTasks.length>0?((0,o.wg)(),(0,o.iD)("h5",re," Daily Task List ")):((0,o.wg)(),(0,o.iD)("h5",ne," You don't have any daily task. ")),le,(0,o._)("ul",ce,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.newChar.dailyTasks,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"list-group-item bg-secondary text-light",key:e},[(0,o.Uk)((0,n.zw)(e.task)+" ",1),(0,o._)("button",{class:"btn-close border border-2 border-danger float-end",onClick:e=>r.newChar.dailyTasks.splice(t,1)},null,8,de)])))),128))]),r.newChar.weeklyTasks.length>0?((0,o.wg)(),(0,o.iD)("h5",ue," Weekly Task List ")):((0,o.wg)(),(0,o.iD)("h5",ge," You don't have any weekly task. ")),he,(0,o._)("ul",pe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.newChar.weeklyTasks,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"list-group-item bg-secondary text-light",key:e},[(0,o.Uk)((0,n.zw)(e.task)+" ",1),(0,o._)("button",{class:"btn-close border border-2 border-danger float-end",onClick:e=>r.newChar.weeklyTasks.splice(t,1)},null,8,ke)])))),128))]),e.getAccWideTasks.length>0?((0,o.wg)(),(0,o.iD)("h5",be," Account-Wide Task List ")):((0,o.wg)(),(0,o.iD)("h5",me," You don't have any acc-wide task. ")),ye,(0,o._)("ul",ve,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getAccWideTasks,((t,a)=>((0,o.wg)(),(0,o.iD)("li",{class:"list-group-item bg-secondary text-light",key:t},[(0,o.Uk)((0,n.zw)(t.task)+" ",1),(0,o._)("button",{class:"btn-close border border-2 border-danger float-end",onClick:t=>e.deleteAccWideTask(a)},null,8,we)])))),128))])])])])])}var fe=a(65),_e={name:"CharAdd",data(){return{newChar:{charName:null,dailyTasks:[],weeklyTasks:[]},taskName:"",routine:"Select Routine",resetTime:"20:00",resetDay:0}},computed:{...(0,fe.Se)(["getAccWideTasks"]),saveEnabler(){return this.newChar.charName&&(this.newChar.dailyTasks.length>0||this.newChar.weeklyTasks.length>0)}},methods:{...(0,fe.OI)(["addCharList","addAccWideTasks","deleteAccWideTask"]),addTask(){"Daily"===this.routine?this.newChar.dailyTasks.push({task:this.taskName,isDone:!1}):"Weekly"===this.routine?this.newChar.weeklyTasks.push({task:this.taskName,isDone:!1}):"Account-Wide"===this.routine&&this.addAccWideTasks({task:this.taskName,isDone:!1})},charSave(){this.addCharList(this.newChar),this.newChar={charName:null,dailyTasks:[],weeklyTasks:[]},this.taskName="",this.routine="Select Routine",ht.replace("/")},updateResetDay(){let e=new Date,t=0;t=this.resetDay>e.getDay()?Math.abs(this.resetDay-e.getDay()):7-Math.abs(this.resetDay-e.getDay());let a=new Date(e.getTime()+864e5*t);localStorage.setItem("resetDay",JSON.stringify(a.getTime()))},updateResetTime(){if(5===this.resetTime.length){let e=new Date,t=this.resetTime.split(":"),a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t[0],t[1]);localStorage.setItem("resetTime",a.getTime().toString())}}},created(){this.resetDay=new Date(JSON.parse(localStorage.getItem("resetDay"))).getDay(),this.resetTime=new Date(JSON.parse(localStorage.getItem("resetTime"))).getHours().toString().padStart(2,"0")+":"+new Date(JSON.parse(localStorage.getItem("resetTime"))).getMinutes().toString().padStart(2,"0")}};const De=(0,D.Z)(_e,[["render",Te]]);var Ce=De;const Se={class:"container"},xe={class:"row justify-content-center"},Le={class:"col-12 col-md-5 card m-2 border-5 p-2 border-secondary bg-dark text-light"},We=(0,o._)("div",{class:"card-header border-secondary mb-1"},"Character List",-1),Ne={key:0,class:"card-body"},Oe=(0,o._)("h5",{class:"text-warning"},"You don't have any character.",-1),Ae=[Oe],Ie={class:"nav nav-tabs border-bottom-0",id:"nav-tab",ref:"myTab"},Ee=["data-bs-target"],Je={class:"tab-content",id:"nav-tabContent"},Re=["id"],Ye={class:"accordion",id:"accordionExample"},Me={class:"accordion-item border-secondary"},He=(0,o._)("h2",{class:"accordion-header",id:"headingOne"},[(0,o._)("button",{class:"accordion-button bg-dark text-light border-secondary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"}," Daily Tasks ")],-1),Ue={id:"collapseOne",class:"accordion-collapse collapse show bg-dark text-light","data-bs-parent":"#accordionExample"},je={class:"accordion-body"},ze={class:"list-group"},Ke=["onClick"],Ve=["checked"],Fe={class:"accordion-item border-secondary"},Pe=(0,o._)("h2",{class:"accordion-header",id:"headingTwo"},[(0,o._)("button",{class:"accordion-button collapsed bg-dark text-light border-secondary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo"}," Weekly Tasks ")],-1),Ze={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},$e={class:"accordion-body bg-dark text-light border-secondary"},qe={class:"list-group"},Be=["onClick"],Ge=["checked"],Qe=["onClick"],Xe={class:"col-12 col-md-5 card m-2 border-5 border-secondary bg-dark text-light p-2"},et=(0,o._)("div",{class:"card-header border-secondary"},"Account-Wide Tasks",-1),tt={key:0,class:"card-body"},at=(0,o._)("h5",{class:"text-warning"},"You don't have any account-wide task.",-1),st=[at],ot={key:1,class:"list-group"},it=["onClick"],rt=["checked"];function nt(e,t,a,s,i,r){return(0,o.wg)(),(0,o.iD)("div",Se,[(0,o._)("div",xe,[(0,o._)("div",Le,[We,i.charList.length<=0?((0,o.wg)(),(0,o.iD)("div",Ne,Ae)):(0,o.kq)("",!0),(0,o._)("nav",null,[(0,o._)("div",Ie,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.charList,((e,t)=>((0,o.wg)(),(0,o.iD)("button",{key:e.charName,class:"nav-link bg-dark text-light",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#tab"+t,type:"button",role:"tab"},(0,n.zw)(e.charName),9,Ee)))),128))],512)]),(0,o._)("div",Je,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.charList,((t,a)=>((0,o.wg)(),(0,o.iD)("div",{key:t.charName,class:"tab-pane fade show",id:"tab"+a},[(0,o._)("div",Ye,[(0,o._)("div",Me,[He,(0,o._)("div",Ue,[(0,o._)("div",je,[(0,o._)("div",ze,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.dailyTasks,((a,s)=>((0,o.wg)(),(0,o.iD)("button",{type:"button",class:"list-group-item list-group-item-action bg-dark text-light border-secondary",key:a,onClick:o=>{a.isDone=!a.isDone,e.updateCharTasks(t,s)}},[(0,o._)("span",{class:(0,n.C_)(["badge bg-primary text-dark",{"bg-warning":!a.isDone}])},(0,n.zw)(s+1),3),(0,o.Uk)(" "+(0,n.zw)(a.task)+" ",1),(0,o._)("input",{class:"form-check-input float-end",type:"checkbox",value:"",disabled:"",checked:a.isDone},null,8,Ve)],8,Ke)))),128))])])])]),(0,o._)("div",Fe,[Pe,(0,o._)("div",Ze,[(0,o._)("div",$e,[(0,o._)("div",qe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.weeklyTasks,((a,s)=>((0,o.wg)(),(0,o.iD)("button",{type:"button",class:"list-group-item list-group-item-action bg-dark text-light border-secondary",key:a,onClick:o=>{a.isDone=!a.isDone,e.updateCharTasks(t,s)}},[(0,o._)("span",{class:(0,n.C_)(["badge bg-primary text-dark",{"bg-warning":!a.isDone}])},(0,n.zw)(s+1),3),(0,o.Uk)(" "+(0,n.zw)(a.task)+" ",1),(0,o._)("input",{class:"form-check-input float-end",type:"checkbox",value:"",disabled:"",checked:a.isDone},null,8,Ge)],8,Be)))),128))])])])])]),(0,o._)("button",{class:"btn btn-outline-danger w-100 mt-5",onClick:a=>e.deleteChar(t)}," DELETE CHARACTER ",8,Qe)],8,Re)))),128))])]),(0,o._)("div",Xe,[et,e.getAccWideTasks.length<=0?((0,o.wg)(),(0,o.iD)("div",tt,st)):((0,o.wg)(),(0,o.iD)("div",ot,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getAccWideTasks,((t,a)=>((0,o.wg)(),(0,o.iD)("button",{type:"button",class:"list-group-item list-group-item-action bg-dark text-light border-secondary",key:t,onClick:s=>{t.isDone=!t.isDone,e.updateAccWideTasks(t,a)}},[(0,o._)("span",{class:(0,n.C_)(["badge bg-primary",{"bg-warning":!t.isDone}])},(0,n.zw)(a+1),3),(0,o.Uk)(" "+(0,n.zw)(t.task)+" ",1),(0,o._)("input",{class:"form-check-input float-end",type:"checkbox",value:"",disabled:"",checked:t.isDone},null,8,rt)],8,it)))),128))]))])])])}var lt={name:"TodoList",data(){return{active:!1,charList:[]}},computed:{...(0,fe.Se)(["getCharList","getAccWideTasks"])},methods:{...(0,fe.OI)(["loadData","deleteChar","updateCharTasks","updateAccWideTasks","updateCharList"])},created(){this.loadData(),this.charList=this.getCharList},mounted(){this.$refs.myTab.children.length>0&&this.$refs.myTab.children[0].click();let e=new Date,t=new Date(JSON.parse(localStorage.getItem("resetTime"))),a=new Date(JSON.parse(localStorage.getItem("resetDay")));e>t&&(console.log("day reset"),this.charList.forEach((e=>{e.dailyTasks.forEach((e=>{e.isDone=!1}))})),this.updateCharList(this.charList),localStorage.setItem("resetTime",JSON.stringify(t.getTime()+864e5)),e>a&&(console.log("week reset"),this.charList.forEach((e=>{e.weeklyTasks.forEach((e=>{e.isDone=!1}))})),this.updateCharList(this.charList),localStorage.setItem("resetDay",JSON.stringify(a.getTime()+6048e5))))}};const ct=(0,D.Z)(lt,[["render",nt]]);var dt=ct;const ut=[{path:"/char-add",component:Ce},{path:"/todo-list",component:dt},{path:"/:pathMatch(.*)*",component:dt}],gt=(0,N.p7)({history:(0,N.r5)(),routes:ut});var ht=gt,pt=(0,fe.MT)({state:{charList:[],accWideTasks:[]},getters:{getCharList(e){return e.charList},getAccWideTasks(e){return e.accWideTasks}},mutations:{updateCharList(e,t){e.charList=t,localStorage.setItem("charList",JSON.stringify(t))},addCharList(e,t){e.charList.push(t),localStorage.setItem("charList",JSON.stringify(e.charList))},addAccWideTasks(e,t){e.accWideTasks.push(t),localStorage.setItem("accWideTasks",JSON.stringify(e.accWideTasks))},loadData(e){e.charList=JSON.parse(localStorage.getItem("charList")),e.accWideTasks=JSON.parse(localStorage.getItem("accWideTasks"))},deleteChar(e,t){if(confirm("CONFIRM DELETE CHARACTER")){let a=e.charList.indexOf(t);a>-1&&(e.charList.splice(a,1),localStorage.setItem("charList",JSON.stringify(e.charList)))}},updateCharTasks(e,t,a){e.charList[a]=t,localStorage.setItem("charList",JSON.stringify(e.charList))},deleteAccWideTask(e,t){t>-1&&(e.accWideTasks.splice(t,1),localStorage.setItem("accWideTasks",JSON.stringify(e.accWideTasks)))},updateAccWideTasks(e,t,a){e.charList[a]=t,localStorage.setItem("accWideTasks",JSON.stringify(e.accWideTasks))}},actions:{},modules:{}});a(8937);(0,s.ri)(W).use(pt).use(ht).mount("#app")},1199:function(e,t,a){e.exports=a.p+"img/1.7eb100d3.png"}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,i){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],i=e[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(n=!1,i<r&&(r=i));if(n){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,o,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/vue-lostark-todo/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,i,r=s[0],n=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(l)var d=l(a)}for(t&&t(s);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},s=self["webpackChunkvue_lostark_todo"]=self["webpackChunkvue_lostark_todo"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9237)}));s=a.O(s)})();
//# sourceMappingURL=app.557cdf91.js.map