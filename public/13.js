webpackJsonp([13],{334:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[],user_type:"",purse_type:"",merchant:"",form:"",max:1e3,dialog:"",keyword:{page:1,id:"",name:"",merchant_id:1,reason:""}}},watch:{"form.out_user_type_id":function(t,e){this.add_purse_change()},"form.out_purse_type_id":function(t,e){this.add_purse_change()},"form.into_user_type_id":function(t,e){this.add_purse_change()},"form.into_purse_type_id":function(t,e){this.add_purse_change()}},methods:{add:function(t){var e=this;e.dialog.open(),e.$API.get("/reason/index/"+t).then(function(t){e.form=t.detail,e.max=t.max}).catch(function(t){})},add_submit:function(){var t=this;t.$API.post("/reason/index",t.form).then(function(){t.dialog.close(),t.init()}).catch(function(t){})},del:function(t){var e=this;mdui.confirm("删除后数据不可恢复，确认删除请点击【确定】按钮","确认？",function(){e.$API.delete("/reason/index",{id:t}).then(function(){e.init()}).catch(function(t){})},function(){},{history:!1,confirmText:"确定",cancelText:"取消"})},search:function(t){this.keyword.page=t,this.init()},tab_change:function(t){this.keyword.page=1,this.keyword.merchant_id=t,this.init()},add_purse_change:function(){var t=this.form;!t.id&&t.out_user_type_id&&t.out_purse_type_id&&t.into_user_type_id&&t.into_purse_type_id&&(t.reason=this.max+""+t.out_user_type_id.padStart(2,"0")+t.out_purse_type_id.padStart(2,"0")+t.merchant_id+t.into_user_type_id.padStart(2,"0")+t.into_purse_type_id.padStart(2,"0"))},init:function(){var t=this;t.$API.get("/reason/index",t.keyword).then(function(e){t.list=e.list,t.merchant=e.merchant,t.user_type=e.user_type,t.purse_type=e.purse_type,t.$nextTick(function(){$(".mdui-tab").mutation()})}).catch(function(t){})}},mounted:function(){this.dialog=new mdui.Dialog(".dialog_add",{history:!1}),this.init()}}},335:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"transfer_reason"},[i("div",{staticClass:"mdui-typo"},[i("blockquote",{staticClass:"blockquote_normal"},[i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){t.add(0)}}},[i("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("add")]),t._v("添加")])]),t._v(" "),i("div",{staticClass:"mdui-divider"}),t._v(" "),i("blockquote",{staticClass:"blockquote_normal"},[i("p",[t._v("\n\t\t\t\treason："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.reason,expression:"keyword.reason"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.reason},on:{input:function(e){e.target.composing||t.$set(t.keyword,"reason",e.target.value)}}})]),t._v(" "),i("p",[t._v("\n\t\t\t\t行为ID："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.id,expression:"keyword.id"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.id},on:{input:function(e){e.target.composing||t.$set(t.keyword,"id",e.target.value)}}})]),t._v(" "),i("p",[t._v("\n\t\t\t\t转账行为名称："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.name,expression:"keyword.name"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.name},on:{input:function(e){e.target.composing||t.$set(t.keyword,"name",e.target.value)}}})]),t._v(" "),i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){t.search(1)}}},[i("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("search")]),t._v("搜索")])])]),t._v(" "),i("div",{staticClass:"mdui-tab",attrs:{"mdui-tab":""}},t._l(t.merchant,function(e,a,s){return i("a",{class:{"mdui-btn":!0,"mdui-ripple":!0,"mdui-tab-active":0===s},attrs:{href:"#tab_"+s},domProps:{textContent:t._s(e)},on:{click:function(e){t.tab_change(a)}}})}),0),t._v(" "),i("div",{staticClass:"mdui-table-fluid"},[i("table",{staticClass:"mdui-table mdui-table-hoverable"},[t._m(0),t._v(" "),i("tbody",[t._l(t.list.data,function(e,a){return[i("tr",[i("td",[i("span",{domProps:{textContent:t._s("#"+(a+1))}})]),t._v(" "),i("td",[i("span",{domProps:{textContent:t._s(e.id)}})]),t._v(" "),i("td",[i("span",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),i("td",[i("span",{domProps:{textContent:t._s(e.reason)}})]),t._v(" "),i("td",[i("span",{staticClass:"mdui-text-color-deep-orange",domProps:{textContent:t._s(t.user_type[e.out_user_type_id]+"->"+t.purse_type[e.out_purse_type_id])}})]),t._v(" "),i("td",[i("span",{staticClass:"mdui-text-color-teal",domProps:{textContent:t._s(t.user_type[e.into_user_type_id]+"->"+t.purse_type[e.into_purse_type_id])}})]),t._v(" "),i("td",[i("span",{domProps:{textContent:t._s(e.status?"启用":"禁用")}})]),t._v(" "),i("td",[i("span",{domProps:{textContent:t._s(e.remarks)}})]),t._v(" "),i("td",[i("span",{domProps:{textContent:t._s(e.created_at)}})]),t._v(" "),i("td",[i("div",{staticClass:"mdui-btn-group"},[i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(i){t.add(e.id)}}},[t._v("修改")]),t._v(" "),i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-deep-orange",on:{click:function(i){t.del(e.id)}}},[t._v("删除")])])])])]})],2)])]),t._v(" "),i("div",{staticClass:"mdui-dialog dialog_add"},[i("div",{staticClass:"mdui-dialog-title"},[t._v("\n\t\t\t转账 reason 新增/修改\n\t\t")]),t._v(" "),i("div",{staticClass:"mdui-dialog-content"},[i("form",[i("div",{staticClass:"mdui-container"},[t._v("\n\t\t\t\t\t所属商户：\n\t\t\t\t\t"),i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.merchant_id,expression:"form.merchant_id"}],staticClass:"mdui-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"merchant_id",e.target.multiple?i:i[0])}}},t._l(t.merchant,function(e,a){return i("option",{domProps:{value:a}},[t._v(t._s(e))])}),0)]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("转账行为名称")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"mdui-textfield-input",attrs:{type:"text",placeholder:"中文备注，用户查看流水时展示文案"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"mdui-container mdui-p-y-2"},[t._v("\n\t\t\t\t\t出账身份类型：\n\t\t\t\t\t"),i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.out_user_type_id,expression:"form.out_user_type_id"}],staticClass:"mdui-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"out_user_type_id",e.target.multiple?i:i[0])}}},t._l(t.user_type,function(e,a){return i("option",{domProps:{value:a}},[t._v(t._s(e))])}),0),t._v("\n\t\t\t\t\t　　　　\n\t\t\t\t\t出账钱包类型：\n\t\t\t\t\t"),i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.out_purse_type_id,expression:"form.out_purse_type_id"}],staticClass:"mdui-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"out_purse_type_id",e.target.multiple?i:i[0])}}},t._l(t.purse_type,function(e,a){return i("option",{domProps:{value:a}},[t._v(t._s(e))])}),0)]),t._v(" "),i("div",{staticClass:"mdui-container mdui-p-y-2"},[t._v("\n\t\t\t\t\t进账身份类型：\n\t\t\t\t\t"),i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.into_user_type_id,expression:"form.into_user_type_id"}],staticClass:"mdui-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"into_user_type_id",e.target.multiple?i:i[0])}}},t._l(t.user_type,function(e,a){return i("option",{domProps:{value:a}},[t._v(t._s(e))])}),0),t._v("\n\t\t\t\t\t　　　　\n\t\t\t\t\t进账钱包类型：\n\t\t\t\t\t"),i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.into_purse_type_id,expression:"form.into_purse_type_id"}],staticClass:"mdui-select",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"into_purse_type_id",e.target.multiple?i:i[0])}}},t._l(t.purse_type,function(e,a){return i("option",{domProps:{value:a}},[t._v(t._s(e))])}),0)]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("reason 代码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.reason,expression:"form.reason"}],staticClass:"mdui-textfield-input",attrs:{type:"text",placeholder:"新增时自动生成"},domProps:{value:t.form.reason},on:{input:function(e){e.target.composing||t.$set(t.form,"reason",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("label",{staticClass:"mdui-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],attrs:{type:"radio",name:"status",value:"1"},domProps:{checked:!!t.form.status,checked:t._q(t.form.status,"1")},on:{change:function(e){t.$set(t.form,"status","1")}}}),t._v(" "),i("i",{staticClass:"mdui-radio-icon"}),t._v("\n\t\t\t\t\t\t启用\n\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("label",{staticClass:"mdui-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],attrs:{type:"radio",name:"status",value:"0"},domProps:{checked:!t.form.status,checked:t._q(t.form.status,"0")},on:{change:function(e){t.$set(t.form,"status","0")}}}),t._v(" "),i("i",{staticClass:"mdui-radio-icon"}),t._v("\n\t\t\t\t\t\t禁用\n\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("备注")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.remarks,expression:"form.remarks"}],staticClass:"mdui-textfield-input",attrs:{type:"text",placeholder:"后台详细备注"},domProps:{value:t.form.remarks},on:{input:function(e){e.target.composing||t.$set(t.form,"remarks",e.target.value)}}})])])])]),t._v(" "),i("div",{staticClass:"mdui-dialog-actions"},[i("a",{staticClass:"mdui-btn mdui-ripple",attrs:{"mdui-dialog-close":""}},[t._v("取消")]),t._v(" "),i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:t.add_submit}},[t._v("提交")])])]),t._v(" "),i("div",{staticClass:"mdui-color-white footer"},[i("pagination",{attrs:{pageInfo:{total:t.list.total,current:t.list.current_page,pagenum:t.list.per_page,page:t.list.last_page,pagegroup:9,skin:"#2196F3"}},on:{change:t.search}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("#")]),t._v(" "),i("th",[t._v("ID")]),t._v(" "),i("th",[t._v("转账行为名称")]),t._v(" "),i("th",[t._v("reason 代码")]),t._v(" "),i("th",[t._v("出账关联")]),t._v(" "),i("th",[t._v("进账关联")]),t._v(" "),i("th",[t._v("状态")]),t._v(" "),i("th",[t._v("备注")]),t._v(" "),i("th",[t._v("创建时间")]),t._v(" "),i("th",[t._v("操作")])])])}]}},375:function(t,e,i){var a=i(1)(i(334),i(335),!1,null,null,null);t.exports=a.exports}});