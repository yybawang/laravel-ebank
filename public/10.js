webpackJsonp([10],{362:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[],menu:"",form:"",dialog:"",keyword:{page:1,name:""}}},methods:{add:function(t){var e=this;e.dialog.open(),e.$API.get("/rule/group/"+t).then(function(t){e.form=t}).catch(function(t){})},add_submit:function(){var t=this;t.$API.post("/rule/group",t.form).then(function(){t.dialog.close(),t.init()}).catch(function(t){})},del:function(t){var e=this;mdui.confirm("删除后数据不可恢复，确认删除请点击【确定】按钮","确认？",function(){e.$API.delete("/rule/group",{id:t}).then(function(){e.init()}).catch(function(t){})},function(){},{history:!1,confirmText:"确定",cancelText:"取消"})},search:function(t){this.keyword.page=t,this.init()},init:function(){var t=this;t.$API.get("/rule/group",t.keyword).then(function(e){t.list=e.list,t.menu=e.menu}).catch(function(t){})}},mounted:function(){this.dialog=new mdui.Dialog(".dialog_add",{history:!1}),this.init()}}},363:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rule_group"},[i("div",{staticClass:"mdui-typo"},[i("blockquote",{staticClass:"blockquote_normal"},[i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){t.add(0)}}},[i("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("add")]),t._v("添加")])]),t._v(" "),i("div",{staticClass:"mdui-divider"}),t._v(" "),i("blockquote",{staticClass:"blockquote_normal"},[i("p",[t._v("\n\t\t\t\t名称："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.name,expression:"keyword.name"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.name},on:{input:function(e){e.target.composing||t.$set(t.keyword,"name",e.target.value)}}})]),t._v(" "),i("p",[i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){t.search(1)}}},[i("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("search")]),t._v("搜索")])])])]),t._v(" "),i("div",{staticClass:"mdui-table-fluid"},[i("table",{staticClass:"mdui-table mdui-table-hoverable"},[t._m(0),t._v(" "),i("tbody",t._l(t.list.data,function(e,a,s){return i("tr",[i("td",{domProps:{textContent:t._s("#"+(a+1))}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.id)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.status?"启用":"禁用")}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.remarks)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.created_at)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.updated_at)}}),t._v(" "),i("td",[1!=e.id?i("div",{staticClass:"mdui-btn-group"},[i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(i){t.add(e.id)}}},[t._v("修改")]),t._v(" "),i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-deep-orange",on:{click:function(i){t.del(e.id)}}},[t._v("删除")])]):t._e()])])}),0)])]),t._v(" "),i("div",{staticClass:"mdui-dialog dialog_add"},[i("div",{staticClass:"mdui-dialog-title"},[t._v("\n\t\t\t权限组新增/修改\n\t\t")]),t._v(" "),i("div",{staticClass:"mdui-dialog-content"},[i("form",[i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("权限组名称")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"mdui-textfield-input",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"mdui-container mdui-m-t-2 mdui-text-color-grey-500"},[t._v("* 不选或全选都视为拥有所有权限")]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-typo"},t._l(t.menu,function(e,a){return i("blockquote",{staticClass:"blockquote_normal"},[i("h4",{domProps:{textContent:t._s(a)}}),t._v(" "),t._l(e,function(e,a){return i("label",{staticClass:"mdui-checkbox",staticStyle:{"margin-right":"2rem"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.rule,expression:"form.rule"}],attrs:{type:"checkbox"},domProps:{value:e.name_full,checked:Array.isArray(t.form.rule)?t._i(t.form.rule,e.name_full)>-1:t.form.rule},on:{change:function(i){var a=t.form.rule,s=i.target,o=!!s.checked;if(Array.isArray(a)){var n=e.name_full,r=t._i(a,n);s.checked?r<0&&t.$set(t.form,"rule",a.concat([n])):r>-1&&t.$set(t.form,"rule",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.form,"rule",o)}}}),t._v(" "),i("i",{staticClass:"mdui-checkbox-icon"}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t")])})],2)}),0)]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("label",{staticClass:"mdui-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],attrs:{type:"radio",name:"status",value:"1"},domProps:{checked:!!t.form.status,checked:t._q(t.form.status,"1")},on:{change:function(e){t.$set(t.form,"status","1")}}}),t._v(" "),i("i",{staticClass:"mdui-radio-icon"}),t._v("\n\t\t\t\t\t\t启用\n\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("label",{staticClass:"mdui-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],attrs:{type:"radio",name:"status",value:"0"},domProps:{checked:!t.form.status,checked:t._q(t.form.status,"0")},on:{change:function(e){t.$set(t.form,"status","0")}}}),t._v(" "),i("i",{staticClass:"mdui-radio-icon"}),t._v("\n\t\t\t\t\t\t禁用\n\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("备注")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.remarks,expression:"form.remarks"}],staticClass:"mdui-textfield-input",attrs:{type:"text"},domProps:{value:t.form.remarks},on:{input:function(e){e.target.composing||t.$set(t.form,"remarks",e.target.value)}}})])])])]),t._v(" "),i("div",{staticClass:"mdui-dialog-actions"},[i("a",{staticClass:"mdui-btn mdui-ripple",attrs:{"mdui-dialog-close":""}},[t._v("取消")]),t._v(" "),i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:t.add_submit}},[t._v("提交")])])]),t._v(" "),i("div",{staticClass:"mdui-color-white footer"},[i("pagination",{attrs:{pageInfo:{total:t.list.total,current:t.list.current_page,pagenum:t.list.per_page,page:t.list.last_page,pagegroup:9,skin:"#2196F3"}},on:{change:t.search}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("#")]),t._v(" "),i("th",[t._v("ID")]),t._v(" "),i("th",[t._v("权限组名称")]),t._v(" "),i("th",[t._v("状态")]),t._v(" "),i("th",[t._v("备注")]),t._v(" "),i("th",[t._v("创建时间")]),t._v(" "),i("th",[t._v("修改时间")]),t._v(" "),i("th",[t._v("操作")])])])}]}},389:function(t,e,i){var a=i(1)(i(362),i(363),!1,null,null,null);t.exports=a.exports}});