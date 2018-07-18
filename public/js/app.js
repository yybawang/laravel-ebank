webpackJsonp([25],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
module.exports = __webpack_require__(65);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_datepicker_local__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_router_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_function_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_function_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_function_js__);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(22);

window.Vue = __webpack_require__(6);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('pagination', __webpack_require__(54));
Vue.component('vue-datepicker-local', __WEBPACK_IMPORTED_MODULE_0_vue_datepicker_local__["default"]);



window.router = __WEBPACK_IMPORTED_MODULE_2__config_router_js__["a" /* default */];


var app = new Vue({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__config_router_js__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a);
  }
});

// 单独实例化一个菜单VUE，用于路由链接
// const menu = new Vue({
// 	el: '#main-drawer',
// });

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {


// window._ = require('lodash');
window.mdui = __webpack_require__(7);
window.$ = mdui.JQ;
// require('mdui/dist/css/mdui.min.css');

window.md5 = __webpack_require__(8);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// try {
//     window.$ = window.jQuery = require('jquery');
//
//     require('bootstrap-sass');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(11);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

// let token = document.head.querySelector('meta[name="csrf-token"]');
//
// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(57)
/* template */
var __vue_template__ = __webpack_require__(58)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f488d9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f488d9e", Component.options)
  } else {
    hotAPI.reload("data-v-1f488d9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("b7403ade", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f488d9e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f488d9e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.pages-wrap[data-v-1f488d9e] {\n\ttext-align: center;\n}\n.pagination[data-v-1f488d9e] {\n\tdisplay: inline-block;\n\tpadding-left: 0;\n\tmargin: 20px 0;\n\tborder-radius: 4px;\n}\n.pagination>li[data-v-1f488d9e] {\n\tdisplay: inline;\n}\n.pagination>.active>a[data-v-1f488d9e], .pagination>.active>a[data-v-1f488d9e]:hover, .pagination>.active>span[data-v-1f488d9e],  .pagination>.active>span[data-v-1f488d9e]:hover {\n\tz-index: 3;\n\tcolor: #fff;\n\tcursor: default;\n\tbackground-color: #337ab7;\n\tborder-color: #337ab7;\n}\n.pagination>.disabled>a[data-v-1f488d9e], .pagination>.disabled>a[data-v-1f488d9e]:hover, .pagination>.disabled>span[data-v-1f488d9e], .pagination>.disabled>span[data-v-1f488d9e]:hover {\n\tcolor: #777;\n\tcursor: not-allowed;\n\tbackground-color: #fff;\n\tborder-color: #ddd;\n}\n.pagination>li>a[data-v-1f488d9e]:hover,.pagination>li>span[data-v-1f488d9e]:hover {\n\tz-index: 2;\n\tcolor: rgba(0,0,0,0.6);\n\tbackground-color: #eee;\n\tborder-color: #ddd;\n}\n.pagination>li>a[data-v-1f488d9e], .pagination>li>span[data-v-1f488d9e] {\n\tposition: relative;\n\tfloat: left;\n\tpadding: 6px 12px;\n\tmargin-left: -1px;\n\tline-height: 1.42857143;\n\tcolor: #000;\n\ttext-decoration: none;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n}\n", "", {"version":3,"sources":["E:/www/laravel-ebank/resources/assets/js/components/resources/assets/js/components/pagination.vue"],"names":[],"mappings":";AA6DA;CACA,mBAAA;CACA;AACA;CACA,sBAAA;CACA,gBAAA;CACA,eAAA;CACA,mBAAA;CACA;AACA;CACA,gBAAA;CACA;AACA;CACA,WAAA;CACA,YAAA;CACA,gBAAA;CACA,0BAAA;CACA,sBAAA;CACA;AACA;CACA,YAAA;CACA,oBAAA;CACA,uBAAA;CACA,mBAAA;CACA;AACA;CACA,WAAA;CACA,uBAAA;CACA,uBAAA;CACA,mBAAA;CACA;AACA;CACA,mBAAA;CACA,YAAA;CACA,kBAAA;CACA,kBAAA;CACA,wBAAA;CACA,YAAA;CACA,sBAAA;CACA,uBAAA;CACA,uBAAA;CACA","file":"pagination.vue","sourcesContent":["<template type=\"text/template\" id=\"template_pagination\">\n\t<section class=\"pages-wrap\" v-show=\"pageInfo.total>pageInfo.pagenum\">\n\t\t<ul class=\"pagination clearfix\">\n\t\t\t<li :class=\"{'disabled': pageInfo.current == 1}\"><a href=\"javascript:;\" @click=\"clickCurrent(1)\"> 首页 </a></li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == 1}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.current - 1)\"> 上一页 </a></li>\n\t\t\t<li v-for=\"p in setList\" :class=\"{'active': pageInfo.current == p.val}\" >\n\t\t\t\t<a href=\"javascript:;\" v-if=\"pageInfo.current == p.val\" :style=\"{backgroundColor:pageInfo.skin , borderColor:pageInfo.skin}\" @click=\"clickCurrent(p.val)\"> {{ p.text }} </a>\n\t\t\t\t<a href=\"javascript:;\" v-else  @click=\"clickCurrent(p.val)\"> {{ p.text }} </a>\n\t\t\t</li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == pageInfo.page}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.current + 1)\"> 下一页</a></li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == pageInfo.page}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.page)\"> 尾页 </a></li>\n\t\t</ul>\n\t</section>\n</template>\n<script>\n\t// import Vue from 'vue'\n\texport default {\n\t\tprops:['pageInfo'],\n\t\tcomputed: {\n\t\t\tpage:function() {\n\t\t\t\treturn Math.ceil(this.pageInfo.total / this.pageInfo.pagenum);\n\t\t\t},\n\t\t\tsetList:function(){\n\t\t\t\tvar len = this.page , temp = [], list = [], count = Math.floor(this.pageInfo.pagegroup / 2) ,center = this.pageInfo.current;\n\t\t\t\tif( len <= this.pageInfo.pagegroup ){\n\t\t\t\t\twhile(len--){ temp.push({text:this.page-len,val:this.page-len});};\n\t\t\t\t\treturn temp;\n\t\t\t\t}\n\t\t\t\twhile(len--){ temp.push(this.page - len);};\n\t\t\t\tvar idx = temp.indexOf(center);\n\t\t\t\t(idx < count) && ( center = center + count - idx);\n\t\t\t\t(this.pageInfo.current > this.page - count) && ( center = this.page - count);\n\t\t\t\ttemp = temp.splice(center - count -1, this.pageInfo.pagegroup);\n\t\t\t\tdo {\n\t\t\t\t\tvar t = temp.shift();\n\t\t\t\t\tlist.push({\n\t\t\t\t\t\ttext: t,\n\t\t\t\t\t\tval: t\n\t\t\t\t\t});\n\t\t\t\t}while(temp.length);\n\t\t\t\tif( this.page > this.pageInfo.pagegroup ){\n\t\t\t\t\t(this.pageInfo.current > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });\n\t\t\t\t\t(this.pageInfo.current < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });\n\t\t\t\t}\n\t\t\t\treturn list;\n\t\t\t}\n\t\t},\n\t\tcreated:function (argument) {\n\t\t\t// console.log(this.pageInfo)\n\t\t},\n\t\tmethods: {\n\t\t\tclickCurrent: function(idx) {\n\t\t\t\tif( this.pageInfo.current != idx && idx > 0 && idx < this.page + 1) {\n\t\t\t\t\tthis.pageInfo.current = idx;\n\t\t\t\t\tthis.$emit('change',this.pageInfo.current);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n</script>\n<style scoped>\n\t.pages-wrap {\n\t\ttext-align: center;\n\t}\n\t.pagination {\n\t\tdisplay: inline-block;\n\t\tpadding-left: 0;\n\t\tmargin: 20px 0;\n\t\tborder-radius: 4px;\n\t}\n\t.pagination>li {\n\t\tdisplay: inline;\n\t}\n\t.pagination>.active>a, .pagination>.active>a:hover, .pagination>.active>span,  .pagination>.active>span:hover {\n\t\tz-index: 3;\n\t\tcolor: #fff;\n\t\tcursor: default;\n\t\tbackground-color: #337ab7;\n\t\tborder-color: #337ab7;\n\t}\n\t.pagination>.disabled>a, .pagination>.disabled>a:hover, .pagination>.disabled>span, .pagination>.disabled>span:hover {\n\t\tcolor: #777;\n\t\tcursor: not-allowed;\n\t\tbackground-color: #fff;\n\t\tborder-color: #ddd;\n\t}\n\t.pagination>li>a:hover,.pagination>li>span:hover {\n\t\tz-index: 2;\n\t\tcolor: rgba(0,0,0,0.6);\n\t\tbackground-color: #eee;\n\t\tborder-color: #ddd;\n\t}\n\t.pagination>li>a, .pagination>li>span {\n\t\tposition: relative;\n\t\tfloat: left;\n\t\tpadding: 6px 12px;\n\t\tmargin-left: -1px;\n\t\tline-height: 1.42857143;\n\t\tcolor: #000;\n\t\ttext-decoration: none;\n\t\tbackground-color: #fff;\n\t\tborder: 1px solid #ddd;\n\t}\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Vue from 'vue'
/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['pageInfo'],
	computed: {
		page: function page() {
			return Math.ceil(this.pageInfo.total / this.pageInfo.pagenum);
		},
		setList: function setList() {
			var len = this.page,
			    temp = [],
			    list = [],
			    count = Math.floor(this.pageInfo.pagegroup / 2),
			    center = this.pageInfo.current;
			if (len <= this.pageInfo.pagegroup) {
				while (len--) {
					temp.push({ text: this.page - len, val: this.page - len });
				};
				return temp;
			}
			while (len--) {
				temp.push(this.page - len);
			};
			var idx = temp.indexOf(center);
			idx < count && (center = center + count - idx);
			this.pageInfo.current > this.page - count && (center = this.page - count);
			temp = temp.splice(center - count - 1, this.pageInfo.pagegroup);
			do {
				var t = temp.shift();
				list.push({
					text: t,
					val: t
				});
			} while (temp.length);
			if (this.page > this.pageInfo.pagegroup) {
				this.pageInfo.current > count + 1 && list.unshift({ text: '...', val: list[0].val - 1 });
				this.pageInfo.current < this.page - count && list.push({ text: '...', val: list[list.length - 1].val + 1 });
			}
			return list;
		}
	},
	created: function created(argument) {
		// console.log(this.pageInfo)
	},
	methods: {
		clickCurrent: function clickCurrent(idx) {
			if (this.pageInfo.current != idx && idx > 0 && idx < this.page + 1) {
				this.pageInfo.current = idx;
				this.$emit('change', this.pageInfo.current);
			}
		}
	}
});

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.pageInfo.total > _vm.pageInfo.pagenum,
          expression: "pageInfo.total>pageInfo.pagenum"
        }
      ],
      staticClass: "pages-wrap"
    },
    [
      _c(
        "ul",
        { staticClass: "pagination clearfix" },
        [
          _c("li", { class: { disabled: _vm.pageInfo.current == 1 } }, [
            _c(
              "a",
              {
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    _vm.clickCurrent(1)
                  }
                }
              },
              [_vm._v(" 首页 ")]
            )
          ]),
          _vm._v(" "),
          _c("li", { class: { disabled: _vm.pageInfo.current == 1 } }, [
            _c(
              "a",
              {
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    _vm.clickCurrent(_vm.pageInfo.current - 1)
                  }
                }
              },
              [_vm._v(" 上一页 ")]
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.setList, function(p) {
            return _c(
              "li",
              { class: { active: _vm.pageInfo.current == p.val } },
              [
                _vm.pageInfo.current == p.val
                  ? _c(
                      "a",
                      {
                        style: {
                          backgroundColor: _vm.pageInfo.skin,
                          borderColor: _vm.pageInfo.skin
                        },
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function($event) {
                            _vm.clickCurrent(p.val)
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(p.text) + " ")]
                    )
                  : _c(
                      "a",
                      {
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function($event) {
                            _vm.clickCurrent(p.val)
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(p.text) + " ")]
                    )
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "li",
            { class: { disabled: _vm.pageInfo.current == _vm.pageInfo.page } },
            [
              _c(
                "a",
                {
                  attrs: { href: "javascript:;" },
                  on: {
                    click: function($event) {
                      _vm.clickCurrent(_vm.pageInfo.current + 1)
                    }
                  }
                },
                [_vm._v(" 下一页")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { class: { disabled: _vm.pageInfo.current == _vm.pageInfo.page } },
            [
              _c(
                "a",
                {
                  attrs: { href: "javascript:;" },
                  on: {
                    click: function($event) {
                      _vm.clickCurrent(_vm.pageInfo.page)
                    }
                  }
                },
                [_vm._v(" 尾页 ")]
              )
            ]
          )
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f488d9e", module.exports)
  }
}

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(60)
/* template */
var __vue_template__ = __webpack_require__(61)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dd1125c", Component.options)
  } else {
    hotAPI.reload("data-v-6dd1125c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			user: '',
			menu: '',
			initing: false,
			password_reset_dialog: '',
			password_reset: {
				password_old: '',
				password_new: '',
				password_new_confirmation: ''
			}
		};
	},

	methods: {
		menu_active: function menu_active(t) {
			$('.mdui-list-item-actived').removeClass('mdui-list-item-actived mdui-color-theme');
			$(t.currentTarget).addClass('mdui-list-item-actived mdui-color-theme');
		},
		password_reset_submit: function password_reset_submit() {
			var t = this;
			post('/rule/password_reset', this.password_reset, function (data) {
				t.password_reset_dialog.close();
				mdui.alert('已成功修改，下次登录请使用新密码', '修改登录密码完成', function () {}, { history: false });
				for (var i in t.password_reset) {
					t.password_reset[i] = '';
				}
			});
		},
		init: function init() {
			var t = this;
			// if(!t.initing){
			t.initing = true;
			get('/init', {}, function (data) {
				t.user = data.user;
				t.menu = data.menu;
				t.initing = false;
			});
			// }
		},
		initClear: function initClear() {
			var t = this;
			t.menu = '';
			t.user = '';
		},
		logout: function logout() {
			var t = this;
			tips('即将跳转到登录页');
			get('/logout', {}, function (data) {
				t.$router.push({ path: '/login' });
			});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.password_reset_dialog = new mdui.Dialog('.password_reset_dialog', { history: false });
		t.init();
	}
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "mdui-appbar mdui-appbar-fixed" }, [
      _c(
        "div",
        { staticClass: "mdui-toolbar mdui-color-theme" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "mdui-typo-headline mdui-hidden-md-up",
              attrs: { to: { path: "/" } }
            },
            [_vm._v("EBank")]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "mdui-typo-title mdui-hidden-sm-down",
              attrs: { to: { path: "/" } }
            },
            [_vm._v("EBank 电子银行")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mdui-toolbar-spacer" }),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "mdui-btn mdui-ripple",
              attrs: { "mdui-menu": "{target: '.menu_user'}" }
            },
            [
              _c("i", { staticClass: "mdui-icon material-icons" }, [
                _vm._v("person")
              ]),
              _vm._v(_vm._s(_vm.user.name || "未登录") + "\n\t\t\t")
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "mdui-menu mdui-menu-cascade menu_user" }, [
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "mdui-menu-item-icon mdui-icon material-icons"
                    },
                    [_vm._v("person")]
                  ),
                  _vm._v(_vm._s(_vm.user.realname || "无姓名") + "\n\t\t\t\t\t")
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "mdui-menu-item-icon mdui-icon material-icons"
                    },
                    [_vm._v("phone_iphone")]
                  ),
                  _vm._v(_vm._s(_vm.user.mobile || "无手机号") + "\n\t\t\t\t\t")
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "mdui-menu-item-icon mdui-icon material-icons"
                    },
                    [_vm._v("email")]
                  ),
                  _vm._v(_vm._s(_vm.user.email || "无邮箱") + "\n\t\t\t\t\t")
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-divider" }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c("i", { staticClass: "mdui-menu-item-icon" }),
                  _vm._v(
                    _vm._s(_vm.user.last_login || "无历史登录") + "\n\t\t\t\t\t"
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-divider" }),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                {
                  staticClass: "mdui-ripple",
                  attrs: { href: "javascript:;" },
                  on: {
                    click: function($event) {
                      _vm.password_reset_dialog.open()
                    }
                  }
                },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "mdui-menu-item-icon mdui-icon material-icons"
                    },
                    [_vm._v("vpn_key")]
                  ),
                  _vm._v("修改密码\n\t\t\t\t\t")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.user
            ? _c("a", { staticClass: "mdui-btn", on: { click: _vm.logout } }, [
                _vm._v("\n\t\t\t\t注销\n\t\t\t")
              ])
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "mdui-drawer mdui-color-white",
        attrs: { id: "main-drawer" }
      },
      [
        _c("div", { staticClass: "mdui-card" }, [
          _c("div", { staticClass: "mdui-card-media" }, [
            _c("img", {
              staticStyle: { height: "190px" },
              attrs: { src: __webpack_require__(62) }
            }),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "mdui-card-media-covered mdui-card-media-covered-transparent"
              },
              [
                _c("div", { staticClass: "mdui-card-primary" }, [
                  _c(
                    "div",
                    {
                      staticClass: "mdui-card-primary-title mdui-text-uppercase"
                    },
                    [_vm._v(_vm._s(_vm.user.name))]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mdui-card-primary-subtitle" }, [
                    _vm._v(_vm._s(_vm.user.realname))
                  ])
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "mdui-list",
            attrs: { "mdui-collapse": "{accordion: true}" }
          },
          _vm._l(_vm.menu, function(val, key, index) {
            return _c(
              "div",
              {
                class: {
                  "mdui-collapse-item": true,
                  "mdui-collapse-item-open": index == 0 ? true : false
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "mdui-collapse-item-header mdui-list-item mdui-ripple"
                  },
                  [
                    _c(
                      "i",
                      {
                        staticClass:
                          "mdui-list-item-icon mdui-icon material-icons mdui-text-color-grey"
                      },
                      [_vm._v("menu")]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "mdui-list-item-content",
                      domProps: { textContent: _vm._s(key) }
                    }),
                    _vm._v(" "),
                    _c(
                      "i",
                      {
                        staticClass:
                          "mdui-collapse-item-arrow mdui-icon material-icons"
                      },
                      [_vm._v("keyboard_arrow_down")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mdui-collapse-item-body mdui-list" },
                  _vm._l(val, function(val2, key2, index2) {
                    return _c(
                      "div",
                      { on: { click: _vm.menu_active } },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "mdui-list-item mdui-ripple",
                            attrs: { to: { path: val2 } }
                          },
                          [_vm._v(_vm._s(key2))]
                        )
                      ],
                      1
                    )
                  })
                )
              ]
            )
          })
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-p-a-3" }, [
      _c(
        "div",
        { attrs: { id: "app" } },
        [
          _c("router-view", {
            on: { init: _vm.init, initClear: _vm.initClear }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-dialog password_reset_dialog" }, [
      _c("div", { staticClass: "mdui-dialog-title" }, [
        _vm._v("\n\t\t\t修改登录密码\n\t\t")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mdui-dialog-content" }, [
        _c("div", { staticClass: "mdui-container" }, [
          _c("div", { staticClass: "mdui-textfield" }, [
            _c("label", { staticClass: "mdui-textfield-label" }, [
              _vm._v("现登录密码")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password_reset.password_old,
                  expression: "password_reset.password_old"
                }
              ],
              staticClass: "mdui-textfield-input",
              attrs: { type: "password" },
              domProps: { value: _vm.password_reset.password_old },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.password_reset,
                    "password_old",
                    $event.target.value
                  )
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mdui-container" }, [
          _c("div", { staticClass: "mdui-textfield" }, [
            _c("label", { staticClass: "mdui-textfield-label" }, [
              _vm._v("新登录密码")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password_reset.password_new,
                  expression: "password_reset.password_new"
                }
              ],
              staticClass: "mdui-textfield-input",
              attrs: { type: "password" },
              domProps: { value: _vm.password_reset.password_new },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.password_reset,
                    "password_new",
                    $event.target.value
                  )
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mdui-container" }, [
          _c("div", { staticClass: "mdui-textfield" }, [
            _c("label", { staticClass: "mdui-textfield-label" }, [
              _vm._v("重复新登录密码")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password_reset.password_new_confirmation,
                  expression: "password_reset.password_new_confirmation"
                }
              ],
              staticClass: "mdui-textfield-input",
              attrs: { type: "password" },
              domProps: { value: _vm.password_reset.password_new_confirmation },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.password_reset,
                    "password_new_confirmation",
                    $event.target.value
                  )
                }
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mdui-dialog-actions" }, [
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple",
            attrs: { "mdui-dialog-close": "" }
          },
          [_vm._v("取消")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-color-theme",
            on: { click: _vm.password_reset_submit }
          },
          [_vm._v("提交")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white",
        attrs: { "mdui-drawer": "{target: '#main-drawer', swipe: true}" }
      },
      [_c("i", { staticClass: "mdui-icon material-icons" }, [_vm._v("menu")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "mdui-menu-item" }, [
      _c("a", { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } }, [
        _c(
          "i",
          { staticClass: "mdui-menu-item-icon mdui-icon material-icons" },
          [_vm._v("last_page")]
        ),
        _vm._v("本次登录\n\t\t\t\t\t")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mdui-card-menu" }, [
      _c(
        "a",
        {
          attrs: {
            target: "_blank",
            href: "//github.com/yybawang/laravel-ebank"
          }
        },
        [
          _c("button", { staticClass: "mdui-btn mdui-text-color-grey" }, [
            _vm._v("github")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mdui-progress" }, [
      _c("div", {
        staticClass: "mdui-progress-indeterminate mdui-hidden ajax_loading"
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6dd1125c", module.exports)
  }
}

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = "/images/snow_square_tiny.png?6cd59b4fc94edf8015d53a8ac22e4838";

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(19);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	saveScrollPosition: true,
	routes: [{
		path: '/',
		redirect: '/welcome'
	}, {
		name: 'login',
		path: '/login',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(67)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		name: 'welcome',
		path: '/welcome',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(68)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		name: 'user_transfer',
		path: '/user_transfer',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(69)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/sysinfo',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(70)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/merchant',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(21).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(71)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	},
	// {
	// 	path: '/merchant/api',
	// 	component: resolve => void(require(['../components/merchant/index.vue'], resolve))
	// },
	{
		path: '/transfer',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(72)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/transfer/reason',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(73)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/report/reason',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(74)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/report/purse',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(75)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/central',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(19).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(76)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/system',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(77)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/user',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(78)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/freeze',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(79)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/user_type',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(80)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/purse_type',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(81)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/bank',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(82)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/alipay',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(83)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/wechat',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(84)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/order',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(20).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(85)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/export',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(23).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(86)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/rule/user',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(87)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/rule/group',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(88)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/system/config',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(89)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/system/behavior',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(90)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}]
}));

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 屏幕下方文字提示
 * @param msg
 */
var tips = function tips(msg) {
	mdui.snackbar({
		message: msg,
		position: 'right-top',
		timeout: 3000,
		buttonText: 'Close'
	});
};
window.tips = tips;

/**
 * 加载窗
 * @param close
 */
var loading = function loading(close) {
	if (close) {
		$('.ajax_loading').addClass('mdui-hidden');
	} else {
		$('.ajax_loading').removeClass('mdui-hidden');
	}
};
window.loading = loading;

/**
 * 控制台日志
 * @param variable
 */
var logs = function logs(variable) {
	console.info(typeof variable === 'undefined' ? 'undefined' : _typeof(variable));
	console.log(variable);
};
window.logs = logs;

var DatePickerFormat = function DatePickerFormat(time) {
	try {
		var year = time.getFullYear();
		var month = time.getMonth();
		var day = time.getDate();
		var hours24 = time.getHours();
		var hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		var milliseconds = time.getMilliseconds();
		var dd = function dd(t) {
			return ('0' + t).slice(-2);
		};
		return year + '-' + dd(month + 1) + '-' + dd(day);
	} catch (e) {
		return time;
	}
};
window.DatePickerFormat = DatePickerFormat;

var ajax = function ajax(url, post_data, success, error, method) {
	if (!error) {
		error = function error() {};
	}
	if (!success) {
		success = function success(msg) {};
	}
	var errors = function errors(msg) {
		tips(msg);
	};
	// ajax 请求封装
	loading();
	axios({
		url: APP_URL + '/admin' + url,
		method: method,
		data: post_data
	}).then(function (response) {
		loading(true);
		var data = response.data;
		if ('1' === data.status) {
			success(data.data, data.message);
		} else if ('0' === data.status) {
			tips(data.message);
		} else if ('2' === data.status) {
			// tips(data.message);
			router.push({ path: '/login' });
		} else {
			tips('失败，未正常接收 json 值');
		}
	}).catch(function (error_response) {
		logs(error_response);
		// 返回非 json，404/500 等
		var status = error_response.response.status,
		    message = '';
		loading(true);
		// 422 是参数验证失败返回状态
		if (status === 422) {
			message = Object.values(error_response.response.data.errors)[0][0];
		} else {
			message = error_response.response.data.message;
		}
		errors('服务器错误，状态码：' + error_response.response.status + '<br/>参考信息：' + message + '<br/>exception:' + error_response.response.data.exception);
		error(message, error_response.response.data.data);
	});
};

/**
 * ajax 请求
 * @param url
 * @param post_data
 * @param success
 * @param error
 */
var post = function post(url, post_data, success, error) {
	ajax(url, post_data, success, error, 'post');
};
window.post = post;

/**
 * ajax get请求
 * @param url
 * @param get_param
 * @param success
 * @param error
 */
var get = function get(url, get_param, success, error) {
	// let url_param = [];
	// mdui.JQ.each(get_param,function(k,v){
	// 	url_param.push(k+'='+v);
	// });
	if (get_param.date && get_param.date.length > 0) {
		for (var i in get_param.date) {
			get_param.date[i] = DatePickerFormat(get_param.date[i]);
		}
	}
	var url_param = $.param(get_param);
	ajax(url + '?' + url_param, get_param, success, error, 'get');
};
window.get = get;

/**
 * ajax delete 请求
 * @param url
 * @param get_param
 * @param success
 * @param error
 */
var del = function del(url, get_param, success, error) {
	ajax(url, get_param, success, error, 'delete');
};
window.del = del;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[20]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlPzRhMzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlP2U3MjAiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWU/ZTRhYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC52dWU/ZGMwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9zbm93X3NxdWFyZV90aW55LnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbmZpZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJWdWUiLCJjb21wb25lbnQiLCJyb3V0ZXIiLCJhcHAiLCJlbCIsInJlbmRlciIsImgiLCJtZHVpIiwiJCIsIkpRIiwibWQ1IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ1c2UiLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJyb3V0ZXMiLCJwYXRoIiwicmVkaXJlY3QiLCJuYW1lIiwicmVzb2x2ZSIsInRpcHMiLCJtc2ciLCJzbmFja2JhciIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsInRpbWVvdXQiLCJidXR0b25UZXh0IiwibG9hZGluZyIsImNsb3NlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImxvZ3MiLCJ2YXJpYWJsZSIsImNvbnNvbGUiLCJpbmZvIiwibG9nIiwiRGF0ZVBpY2tlckZvcm1hdCIsInRpbWUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXJzMjQiLCJnZXRIb3VycyIsImhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsImRkIiwidCIsInNsaWNlIiwiZSIsImFqYXgiLCJ1cmwiLCJwb3N0X2RhdGEiLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXRob2QiLCJlcnJvcnMiLCJBUFBfVVJMIiwiZGF0YSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInB1c2giLCJjYXRjaCIsImVycm9yX3Jlc3BvbnNlIiwiT2JqZWN0IiwidmFsdWVzIiwiZXhjZXB0aW9uIiwicG9zdCIsImdldCIsImdldF9wYXJhbSIsImRhdGUiLCJsZW5ndGgiLCJpIiwidXJsX3BhcmFtIiwicGFyYW0iLCJkZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7OztBQU1BLG1CQUFBQSxDQUFRLEVBQVI7O0FBRUFDLE9BQU9DLEdBQVAsR0FBYSxtQkFBQUYsQ0FBUSxDQUFSLENBQWI7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7QUFDQUUsSUFBSUMsU0FBSixDQUFjLFlBQWQsRUFBNEIsbUJBQUFILENBQVEsRUFBUixDQUE1QjtBQUNBRSxJQUFJQyxTQUFKLENBQWMs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UixDQUFoQjtBQUNBcEIsTUFBS0MsTUFBSSxHQUFKLEdBQVF1QixTQUFiLEVBQXVCSixTQUF2QixFQUFpQ2pCLE9BQWpDLEVBQXlDQyxLQUF6QyxFQUErQyxLQUEvQztBQUNBLENBWkQ7QUFhQWhFLE9BQU8rRSxHQUFQLEdBQWFBLEdBQWI7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFJTyxNQUFNLFNBQU5BLEdBQU0sQ0FBU3pCLEdBQVQsRUFBYW1CLFNBQWIsRUFBdUJqQixPQUF2QixFQUErQkMsS0FBL0IsRUFBcUM7QUFDOUNKLE1BQUtDLEdBQUwsRUFBU21CLFNBQVQsRUFBbUJqQixPQUFuQixFQUEyQkMsS0FBM0IsRUFBaUMsUUFBakM7QUFDQSxDQUZEO0FBR0FoRSxPQUFPc0YsR0FBUCxHQUFhQSxHQUFiLEM7Ozs7Ozs7QUNyS0EseUMiLCJmaWxlIjoiXFxqc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cbmltcG9ydCBWdWVEYXRlcGlja2VyTG9jYWwgZnJvbSAndnVlLWRhdGVwaWNrZXItbG9jYWwnXG5cbi8vIFZ1ZS5jb21wb25lbnQoJ2V4YW1wbGUtY29tcG9uZW50JywgcmVxdWlyZSgnLi9jb21wb25lbnRzL0V4YW1wbGVDb21wb25lbnQudnVlJykpO1xuVnVlLmNvbXBvbmVudCgncGFnaW5hdGlvbicsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3Z1ZS1kYXRlcGlja2VyLWxvY2FsJyxWdWVEYXRlcGlja2VyTG9jYWwpO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vY29uZmlnL3JvdXRlci5qcydcbndpbmRvdy5yb3V0ZXIgPSByb3V0ZXI7XG5pbXBvcnQgJy4vY29uZmlnL2Z1bmN0aW9uLmpzJ1xuXG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG5cdHJvdXRlcixcblx0cmVuZGVyOiBoID0+IGgoQXBwKVxufSk7XG5cbi8vIOWNleeLrOWunuS+i+WMluS4gOS4quiPnOWNlVZVRe+8jOeUqOS6jui3r+eUsemTvuaOpVxuLy8gY29uc3QgbWVudSA9IG5ldyBWdWUoe1xuLy8gXHRlbDogJyNtYWluLWRyYXdlcicsXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiXG4vLyB3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xud2luZG93Lm1kdWkgPXJlcXVpcmUoJ21kdWknKTtcbndpbmRvdy4kID0gbWR1aS5KUTtcbi8vIHJlcXVpcmUoJ21kdWkvZGlzdC9jc3MvbWR1aS5taW4uY3NzJyk7XG5cbndpbmRvdy5tZDUgPSByZXF1aXJlKCdtZDUnKTtcblxuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxuLy8gdHJ5IHtcbi8vICAgICB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vXG4vLyAgICAgcmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcbi8vIH0gY2F0Y2ggKGUpIHt9XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuLyoqXG4gKiBOZXh0IHdlIHdpbGwgcmVnaXN0ZXIgdGhlIENTUkYgVG9rZW4gYXMgYSBjb21tb24gaGVhZGVyIHdpdGggQXhpb3Mgc28gdGhhdFxuICogYWxsIG91dGdvaW5nIEhUVFAgcmVxdWVzdHMgYXV0b21hdGljYWxseSBoYXZlIGl0IGF0dGFjaGVkLiBUaGlzIGlzIGp1c3RcbiAqIGEgc2ltcGxlIGNvbnZlbmllbmNlIHNvIHdlIGRvbid0IGhhdmUgdG8gYXR0YWNoIGV2ZXJ5IHRva2VuIG1hbnVhbGx5LlxuICovXG5cbi8vIGxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuLy9cbi8vIGlmICh0b2tlbikge1xuLy8gICAgIHdpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGLVRPS0VOJ10gPSB0b2tlbi5jb250ZW50O1xuLy8gfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmVycm9yKCdDU1JGIHRva2VuIG5vdCBmb3VuZDogaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzL2NzcmYjY3NyZi14LWNzcmYtdG9rZW4nKTtcbi8vIH1cblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWY0ODhkOWVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdpbmF0aW9uLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdpbmF0aW9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWY0ODhkOWVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0xZjQ4OGQ5ZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxccGFnaW5hdGlvbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWY0ODhkOWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZjQ4OGQ5ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFmNDg4ZDllXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnaW5hdGlvbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImI3NDAzYWRlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZjQ4OGQ5ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2luYXRpb24udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFmNDg4ZDllXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnaW5hdGlvbi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWY0ODhkOWVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlcy13cmFwW2RhdGEtdi0xZjQ4OGQ5ZV0ge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBhZ2luYXRpb25bZGF0YS12LTFmNDg4ZDllXSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHBhZGRpbmctbGVmdDogMDtcXG5cXHRtYXJnaW46IDIwcHggMDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5wYWdpbmF0aW9uPmxpW2RhdGEtdi0xZjQ4OGQ5ZV0ge1xcblxcdGRpc3BsYXk6IGlubGluZTtcXG59XFxuLnBhZ2luYXRpb24+LmFjdGl2ZT5hW2RhdGEtdi0xZjQ4OGQ5ZV0sIC5wYWdpbmF0aW9uPi5hY3RpdmU+YVtkYXRhLXYtMWY0ODhkOWVdOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW5bZGF0YS12LTFmNDg4ZDllXSwgIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbltkYXRhLXYtMWY0ODhkOWVdOmhvdmVyIHtcXG5cXHR6LWluZGV4OiAzO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xcblxcdGJvcmRlci1jb2xvcjogIzMzN2FiNztcXG59XFxuLnBhZ2luYXRpb24+LmRpc2FibGVkPmFbZGF0YS12LTFmNDg4ZDllXSwgLnBhZ2luYXRpb24+LmRpc2FibGVkPmFbZGF0YS12LTFmNDg4ZDllXTpob3ZlciwgLnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW5bZGF0YS12LTFmNDg4ZDllXSwgLnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW5bZGF0YS12LTFmNDg4ZDllXTpob3ZlciB7XFxuXFx0Y29sb3I6ICM3Nzc7XFxuXFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGJvcmRlci1jb2xvcjogI2RkZDtcXG59XFxuLnBhZ2luYXRpb24+bGk+YVtkYXRhLXYtMWY0ODhkOWVdOmhvdmVyLC5wYWdpbmF0aW9uPmxpPnNwYW5bZGF0YS12LTFmNDg4ZDllXTpob3ZlciB7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjZGRkO1xcbn1cXG4ucGFnaW5hdGlvbj5saT5hW2RhdGEtdi0xZjQ4OGQ5ZV0sIC5wYWdpbmF0aW9uPmxpPnNwYW5bZGF0YS12LTFmNDg4ZDllXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdHBhZGRpbmc6IDZweCAxMnB4O1xcblxcdG1hcmdpbi1sZWZ0OiAtMXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xcblxcdGNvbG9yOiAjMDAwO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi93d3cvbGFyYXZlbC1lYmFuay9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2REE7Q0FDQSxtQkFBQTtDQUNBO0FBQ0E7Q0FDQSxzQkFBQTtDQUNBLGdCQUFBO0NBQ0EsZUFBQTtDQUNBLG1CQUFBO0NBQ0E7QUFDQTtDQUNBLGdCQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQSxZQUFBO0NBQ0EsZ0JBQUE7Q0FDQSwwQkFBQTtDQUNBLHNCQUFBO0NBQ0E7QUFDQTtDQUNBLFlBQUE7Q0FDQSxvQkFBQTtDQUNBLHVCQUFBO0NBQ0EsbUJBQUE7Q0FDQTtBQUNBO0NBQ0EsV0FBQTtDQUNBLHVCQUFBO0NBQ0EsdUJBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBQ0E7Q0FDQSxtQkFBQTtDQUNBLFlBQUE7Q0FDQSxrQkFBQTtDQUNBLGtCQUFBO0NBQ0Esd0JBQUE7Q0FDQSxZQUFBO0NBQ0Esc0JBQUE7Q0FDQSx1QkFBQTtDQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcInBhZ2luYXRpb24udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSB0eXBlPVxcXCJ0ZXh0L3RlbXBsYXRlXFxcIiBpZD1cXFwidGVtcGxhdGVfcGFnaW5hdGlvblxcXCI+XFxuXFx0PHNlY3Rpb24gY2xhc3M9XFxcInBhZ2VzLXdyYXBcXFwiIHYtc2hvdz1cXFwicGFnZUluZm8udG90YWw+cGFnZUluZm8ucGFnZW51bVxcXCI+XFxuXFx0XFx0PHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uIGNsZWFyZml4XFxcIj5cXG5cXHRcXHRcXHQ8bGkgOmNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSAxfVxcXCI+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBAY2xpY2s9XFxcImNsaWNrQ3VycmVudCgxKVxcXCI+IOmmlumhtSA8L2E+PC9saT5cXG5cXHRcXHRcXHQ8bGkgOmNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSAxfVxcXCI+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBAY2xpY2s9XFxcImNsaWNrQ3VycmVudChwYWdlSW5mby5jdXJyZW50IC0gMSlcXFwiPiDkuIrkuIDpobUgPC9hPjwvbGk+XFxuXFx0XFx0XFx0PGxpIHYtZm9yPVxcXCJwIGluIHNldExpc3RcXFwiIDpjbGFzcz1cXFwieydhY3RpdmUnOiBwYWdlSW5mby5jdXJyZW50ID09IHAudmFsfVxcXCIgPlxcblxcdFxcdFxcdFxcdDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgdi1pZj1cXFwicGFnZUluZm8uY3VycmVudCA9PSBwLnZhbFxcXCIgOnN0eWxlPVxcXCJ7YmFja2dyb3VuZENvbG9yOnBhZ2VJbmZvLnNraW4gLCBib3JkZXJDb2xvcjpwYWdlSW5mby5za2lufVxcXCIgQGNsaWNrPVxcXCJjbGlja0N1cnJlbnQocC52YWwpXFxcIj4ge3sgcC50ZXh0IH19IDwvYT5cXG5cXHRcXHRcXHRcXHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIHYtZWxzZSAgQGNsaWNrPVxcXCJjbGlja0N1cnJlbnQocC52YWwpXFxcIj4ge3sgcC50ZXh0IH19IDwvYT5cXG5cXHRcXHRcXHQ8L2xpPlxcblxcdFxcdFxcdDxsaSA6Y2xhc3M9XFxcInsnZGlzYWJsZWQnOiBwYWdlSW5mby5jdXJyZW50ID09IHBhZ2VJbmZvLnBhZ2V9XFxcIj48YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIEBjbGljaz1cXFwiY2xpY2tDdXJyZW50KHBhZ2VJbmZvLmN1cnJlbnQgKyAxKVxcXCI+IOS4i+S4gOmhtTwvYT48L2xpPlxcblxcdFxcdFxcdDxsaSA6Y2xhc3M9XFxcInsnZGlzYWJsZWQnOiBwYWdlSW5mby5jdXJyZW50ID09IHBhZ2VJbmZvLnBhZ2V9XFxcIj48YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIEBjbGljaz1cXFwiY2xpY2tDdXJyZW50KHBhZ2VJbmZvLnBhZ2UpXFxcIj4g5bC+6aG1IDwvYT48L2xpPlxcblxcdFxcdDwvdWw+XFxuXFx0PC9zZWN0aW9uPlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG5cXHQvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0cHJvcHM6WydwYWdlSW5mbyddLFxcblxcdFxcdGNvbXB1dGVkOiB7XFxuXFx0XFx0XFx0cGFnZTpmdW5jdGlvbigpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gTWF0aC5jZWlsKHRoaXMucGFnZUluZm8udG90YWwgLyB0aGlzLnBhZ2VJbmZvLnBhZ2VudW0pO1xcblxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0c2V0TGlzdDpmdW5jdGlvbigpe1xcblxcdFxcdFxcdFxcdHZhciBsZW4gPSB0aGlzLnBhZ2UgLCB0ZW1wID0gW10sIGxpc3QgPSBbXSwgY291bnQgPSBNYXRoLmZsb29yKHRoaXMucGFnZUluZm8ucGFnZWdyb3VwIC8gMikgLGNlbnRlciA9IHRoaXMucGFnZUluZm8uY3VycmVudDtcXG5cXHRcXHRcXHRcXHRpZiggbGVuIDw9IHRoaXMucGFnZUluZm8ucGFnZWdyb3VwICl7XFxuXFx0XFx0XFx0XFx0XFx0d2hpbGUobGVuLS0peyB0ZW1wLnB1c2goe3RleHQ6dGhpcy5wYWdlLWxlbix2YWw6dGhpcy5wYWdlLWxlbn0pO307XFxuXFx0XFx0XFx0XFx0XFx0cmV0dXJuIHRlbXA7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdHdoaWxlKGxlbi0tKXsgdGVtcC5wdXNoKHRoaXMucGFnZSAtIGxlbik7fTtcXG5cXHRcXHRcXHRcXHR2YXIgaWR4ID0gdGVtcC5pbmRleE9mKGNlbnRlcik7XFxuXFx0XFx0XFx0XFx0KGlkeCA8IGNvdW50KSAmJiAoIGNlbnRlciA9IGNlbnRlciArIGNvdW50IC0gaWR4KTtcXG5cXHRcXHRcXHRcXHQodGhpcy5wYWdlSW5mby5jdXJyZW50ID4gdGhpcy5wYWdlIC0gY291bnQpICYmICggY2VudGVyID0gdGhpcy5wYWdlIC0gY291bnQpO1xcblxcdFxcdFxcdFxcdHRlbXAgPSB0ZW1wLnNwbGljZShjZW50ZXIgLSBjb3VudCAtMSwgdGhpcy5wYWdlSW5mby5wYWdlZ3JvdXApO1xcblxcdFxcdFxcdFxcdGRvIHtcXG5cXHRcXHRcXHRcXHRcXHR2YXIgdCA9IHRlbXAuc2hpZnQoKTtcXG5cXHRcXHRcXHRcXHRcXHRsaXN0LnB1c2goe1xcblxcdFxcdFxcdFxcdFxcdFxcdHRleHQ6IHQsXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsOiB0XFxuXFx0XFx0XFx0XFx0XFx0fSk7XFxuXFx0XFx0XFx0XFx0fXdoaWxlKHRlbXAubGVuZ3RoKTtcXG5cXHRcXHRcXHRcXHRpZiggdGhpcy5wYWdlID4gdGhpcy5wYWdlSW5mby5wYWdlZ3JvdXAgKXtcXG5cXHRcXHRcXHRcXHRcXHQodGhpcy5wYWdlSW5mby5jdXJyZW50ID4gY291bnQgKyAxKSAmJiBsaXN0LnVuc2hpZnQoeyB0ZXh0OicuLi4nLHZhbDogbGlzdFswXS52YWwgLSAxIH0pO1xcblxcdFxcdFxcdFxcdFxcdCh0aGlzLnBhZ2VJbmZvLmN1cnJlbnQgPCB0aGlzLnBhZ2UgLSBjb3VudCkgJiYgbGlzdC5wdXNoKHsgdGV4dDonLi4uJyx2YWw6IGxpc3RbbGlzdC5sZW5ndGggLSAxXS52YWwgKyAxIH0pO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHRyZXR1cm4gbGlzdDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRjcmVhdGVkOmZ1bmN0aW9uIChhcmd1bWVudCkge1xcblxcdFxcdFxcdC8vIGNvbnNvbGUubG9nKHRoaXMucGFnZUluZm8pXFxuXFx0XFx0fSxcXG5cXHRcXHRtZXRob2RzOiB7XFxuXFx0XFx0XFx0Y2xpY2tDdXJyZW50OiBmdW5jdGlvbihpZHgpIHtcXG5cXHRcXHRcXHRcXHRpZiggdGhpcy5wYWdlSW5mby5jdXJyZW50ICE9IGlkeCAmJiBpZHggPiAwICYmIGlkeCA8IHRoaXMucGFnZSArIDEpIHtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLnBhZ2VJbmZvLmN1cnJlbnQgPSBpZHg7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy4kZW1pdCgnY2hhbmdlJyx0aGlzLnBhZ2VJbmZvLmN1cnJlbnQpO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcblxcdC5wYWdlcy13cmFwIHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5wYWdpbmF0aW9uIHtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAwO1xcblxcdFxcdG1hcmdpbjogMjBweCAwO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR9XFxuXFx0LnBhZ2luYXRpb24+bGkge1xcblxcdFxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHR9XFxuXFx0LnBhZ2luYXRpb24+LmFjdGl2ZT5hLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpob3ZlciB7XFxuXFx0XFx0ei1pbmRleDogMztcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcXG5cXHRcXHRib3JkZXItY29sb3I6ICMzMzdhYjc7XFxuXFx0fVxcblxcdC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hLCAucGFnaW5hdGlvbj4uZGlzYWJsZWQ+YTpob3ZlciwgLnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW4sIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogIzc3NztcXG5cXHRcXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjZGRkO1xcblxcdH1cXG5cXHQucGFnaW5hdGlvbj5saT5hOmhvdmVyLC5wYWdpbmF0aW9uPmxpPnNwYW46aG92ZXIge1xcblxcdFxcdHotaW5kZXg6IDI7XFxuXFx0XFx0Y29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcblxcdFxcdGJvcmRlci1jb2xvcjogI2RkZDtcXG5cXHR9XFxuXFx0LnBhZ2luYXRpb24+bGk+YSwgLnBhZ2luYXRpb24+bGk+c3BhbiB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdFxcdHBhZGRpbmc6IDZweCAxMnB4O1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMXB4O1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xcblxcdFxcdGNvbG9yOiAjMDAwO1xcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuXFx0fVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFmNDg4ZDllXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSIsIjx0ZW1wbGF0ZSB0eXBlPVwidGV4dC90ZW1wbGF0ZVwiIGlkPVwidGVtcGxhdGVfcGFnaW5hdGlvblwiPlxuXHQ8c2VjdGlvbiBjbGFzcz1cInBhZ2VzLXdyYXBcIiB2LXNob3c9XCJwYWdlSW5mby50b3RhbD5wYWdlSW5mby5wYWdlbnVtXCI+XG5cdFx0PHVsIGNsYXNzPVwicGFnaW5hdGlvbiBjbGVhcmZpeFwiPlxuXHRcdFx0PGxpIDpjbGFzcz1cInsnZGlzYWJsZWQnOiBwYWdlSW5mby5jdXJyZW50ID09IDF9XCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIEBjbGljaz1cImNsaWNrQ3VycmVudCgxKVwiPiDpppbpobUgPC9hPjwvbGk+XG5cdFx0XHQ8bGkgOmNsYXNzPVwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gMX1cIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrPVwiY2xpY2tDdXJyZW50KHBhZ2VJbmZvLmN1cnJlbnQgLSAxKVwiPiDkuIrkuIDpobUgPC9hPjwvbGk+XG5cdFx0XHQ8bGkgdi1mb3I9XCJwIGluIHNldExpc3RcIiA6Y2xhc3M9XCJ7J2FjdGl2ZSc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gcC52YWx9XCIgPlxuXHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgdi1pZj1cInBhZ2VJbmZvLmN1cnJlbnQgPT0gcC52YWxcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOnBhZ2VJbmZvLnNraW4gLCBib3JkZXJDb2xvcjpwYWdlSW5mby5za2lufVwiIEBjbGljaz1cImNsaWNrQ3VycmVudChwLnZhbClcIj4ge3sgcC50ZXh0IH19IDwvYT5cblx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIHYtZWxzZSAgQGNsaWNrPVwiY2xpY2tDdXJyZW50KHAudmFsKVwiPiB7eyBwLnRleHQgfX0gPC9hPlxuXHRcdFx0PC9saT5cblx0XHRcdDxsaSA6Y2xhc3M9XCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSBwYWdlSW5mby5wYWdlfVwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBAY2xpY2s9XCJjbGlja0N1cnJlbnQocGFnZUluZm8uY3VycmVudCArIDEpXCI+IOS4i+S4gOmhtTwvYT48L2xpPlxuXHRcdFx0PGxpIDpjbGFzcz1cInsnZGlzYWJsZWQnOiBwYWdlSW5mby5jdXJyZW50ID09IHBhZ2VJbmZvLnBhZ2V9XCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIEBjbGljaz1cImNsaWNrQ3VycmVudChwYWdlSW5mby5wYWdlKVwiPiDlsL7pobUgPC9hPjwvbGk+XG5cdFx0PC91bD5cblx0PC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdC8vIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6WydwYWdlSW5mbyddLFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRwYWdlOmZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gTWF0aC5jZWlsKHRoaXMucGFnZUluZm8udG90YWwgLyB0aGlzLnBhZ2VJbmZvLnBhZ2VudW0pO1xuXHRcdFx0fSxcblx0XHRcdHNldExpc3Q6ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIGxlbiA9IHRoaXMucGFnZSAsIHRlbXAgPSBbXSwgbGlzdCA9IFtdLCBjb3VudCA9IE1hdGguZmxvb3IodGhpcy5wYWdlSW5mby5wYWdlZ3JvdXAgLyAyKSAsY2VudGVyID0gdGhpcy5wYWdlSW5mby5jdXJyZW50O1xuXHRcdFx0XHRpZiggbGVuIDw9IHRoaXMucGFnZUluZm8ucGFnZWdyb3VwICl7XG5cdFx0XHRcdFx0d2hpbGUobGVuLS0peyB0ZW1wLnB1c2goe3RleHQ6dGhpcy5wYWdlLWxlbix2YWw6dGhpcy5wYWdlLWxlbn0pO307XG5cdFx0XHRcdFx0cmV0dXJuIHRlbXA7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2hpbGUobGVuLS0peyB0ZW1wLnB1c2godGhpcy5wYWdlIC0gbGVuKTt9O1xuXHRcdFx0XHR2YXIgaWR4ID0gdGVtcC5pbmRleE9mKGNlbnRlcik7XG5cdFx0XHRcdChpZHggPCBjb3VudCkgJiYgKCBjZW50ZXIgPSBjZW50ZXIgKyBjb3VudCAtIGlkeCk7XG5cdFx0XHRcdCh0aGlzLnBhZ2VJbmZvLmN1cnJlbnQgPiB0aGlzLnBhZ2UgLSBjb3VudCkgJiYgKCBjZW50ZXIgPSB0aGlzLnBhZ2UgLSBjb3VudCk7XG5cdFx0XHRcdHRlbXAgPSB0ZW1wLnNwbGljZShjZW50ZXIgLSBjb3VudCAtMSwgdGhpcy5wYWdlSW5mby5wYWdlZ3JvdXApO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0dmFyIHQgPSB0ZW1wLnNoaWZ0KCk7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKHtcblx0XHRcdFx0XHRcdHRleHQ6IHQsXG5cdFx0XHRcdFx0XHR2YWw6IHRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fXdoaWxlKHRlbXAubGVuZ3RoKTtcblx0XHRcdFx0aWYoIHRoaXMucGFnZSA+IHRoaXMucGFnZUluZm8ucGFnZWdyb3VwICl7XG5cdFx0XHRcdFx0KHRoaXMucGFnZUluZm8uY3VycmVudCA+IGNvdW50ICsgMSkgJiYgbGlzdC51bnNoaWZ0KHsgdGV4dDonLi4uJyx2YWw6IGxpc3RbMF0udmFsIC0gMSB9KTtcblx0XHRcdFx0XHQodGhpcy5wYWdlSW5mby5jdXJyZW50IDwgdGhpcy5wYWdlIC0gY291bnQpICYmIGxpc3QucHVzaCh7IHRleHQ6Jy4uLicsdmFsOiBsaXN0W2xpc3QubGVuZ3RoIC0gMV0udmFsICsgMSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQ6ZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnBhZ2VJbmZvKVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Y2xpY2tDdXJyZW50OiBmdW5jdGlvbihpZHgpIHtcblx0XHRcdFx0aWYoIHRoaXMucGFnZUluZm8uY3VycmVudCAhPSBpZHggJiYgaWR4ID4gMCAmJiBpZHggPCB0aGlzLnBhZ2UgKyAxKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mby5jdXJyZW50ID0gaWR4O1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsdGhpcy5wYWdlSW5mby5jdXJyZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuXHQucGFnZXMtd3JhcCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5wYWdpbmF0aW9uIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdG1hcmdpbjogMjBweCAwO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0fVxuXHQucGFnaW5hdGlvbj5saSB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHR9XG5cdC5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sICAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xuXHRcdHotaW5kZXg6IDM7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjMzM3YWI3O1xuXHR9XG5cdC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hLCAucGFnaW5hdGlvbj4uZGlzYWJsZWQ+YTpob3ZlciwgLnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW4sIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuOmhvdmVyIHtcblx0XHRjb2xvcjogIzc3Nztcblx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjZGRkO1xuXHR9XG5cdC5wYWdpbmF0aW9uPmxpPmE6aG92ZXIsLnBhZ2luYXRpb24+bGk+c3Bhbjpob3ZlciB7XG5cdFx0ei1pbmRleDogMjtcblx0XHRjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjZGRkO1xuXHR9XG5cdC5wYWdpbmF0aW9uPmxpPmEsIC5wYWdpbmF0aW9uPmxpPnNwYW4ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRmbG9hdDogbGVmdDtcblx0XHRwYWRkaW5nOiA2cHggMTJweDtcblx0XHRtYXJnaW4tbGVmdDogLTFweDtcblx0XHRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mztcblx0XHRjb2xvcjogIzAwMDtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXHR9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VjdGlvblwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5wYWdlSW5mby50b3RhbCA+IF92bS5wYWdlSW5mby5wYWdlbnVtLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicGFnZUluZm8udG90YWw+cGFnZUluZm8ucGFnZW51bVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJwYWdlcy13cmFwXCJcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbiBjbGVhcmZpeFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxpXCIsIHsgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5wYWdlSW5mby5jdXJyZW50ID09IDEgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNsaWNrQ3VycmVudCgxKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIiDpppbpobUgXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7IGNsYXNzOiB7IGRpc2FibGVkOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSAxIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jbGlja0N1cnJlbnQoX3ZtLnBhZ2VJbmZvLmN1cnJlbnQgLSAxKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIiDkuIrkuIDpobUgXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5zZXRMaXN0LCBmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgeyBjbGFzczogeyBhY3RpdmU6IF92bS5wYWdlSW5mby5jdXJyZW50ID09IHAudmFsIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5wYWdlSW5mby5jdXJyZW50ID09IHAudmFsXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLnBhZ2VJbmZvLnNraW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBfdm0ucGFnZUluZm8uc2tpblxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KHAudmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHAudGV4dCkgKyBcIiBcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbGlja0N1cnJlbnQocC52YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MocC50ZXh0KSArIFwiIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIHsgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5wYWdlSW5mby5jdXJyZW50ID09IF92bS5wYWdlSW5mby5wYWdlIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jbGlja0N1cnJlbnQoX3ZtLnBhZ2VJbmZvLmN1cnJlbnQgKyAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIOS4i+S4gOmhtVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIHsgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS5wYWdlSW5mby5jdXJyZW50ID09IF92bS5wYWdlSW5mby5wYWdlIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jbGlja0N1cnJlbnQoX3ZtLnBhZ2VJbmZvLnBhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIg5bC+6aG1IFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xZjQ4OGQ5ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWY0ODhkOWVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZkZDExMjVjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXEFwcC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmRkMTEyNWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZGQxMTI1Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxoZWFkZXIgY2xhc3M9XCJtZHVpLWFwcGJhciBtZHVpLWFwcGJhci1maXhlZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdG9vbGJhciBtZHVpLWNvbG9yLXRoZW1lXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWR1aS1idG4gbWR1aS1idG4taWNvbiBtZHVpLXJpcHBsZSBtZHVpLXJpcHBsZS13aGl0ZVwiIG1kdWktZHJhd2VyPVwie3RhcmdldDogJyNtYWluLWRyYXdlcicsIHN3aXBlOiB0cnVlfVwiPjxpIGNsYXNzPVwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L3NwYW4+XG5cdFx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7cGF0aDonLyd9XCIgY2xhc3M9XCJtZHVpLXR5cG8taGVhZGxpbmUgbWR1aS1oaWRkZW4tbWQtdXBcIj5FQmFuazwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7cGF0aDonLyd9XCIgY2xhc3M9XCJtZHVpLXR5cG8tdGl0bGUgbWR1aS1oaWRkZW4tc20tZG93blwiPkVCYW5rIOeUteWtkOmTtuihjDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRvb2xiYXItc3BhY2VyXCI+PC9kaXY+XG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibWR1aS1zcGlubmVyIG1kdWktc3Bpbm5lci1jb2xvcmZ1bCBtZHVpLWhpZGRlbiBhamF4X2xvYWRpbmdcIj48L2Rpdj4tLT5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZVwiIG1kdWktbWVudT1cInt0YXJnZXQ6ICcubWVudV91c2VyJ31cIj5cblx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnBlcnNvbjwvaT57e3VzZXIubmFtZSB8fCAn5pyq55m75b2VJ319XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHVsIGNsYXNzPVwibWR1aS1tZW51IG1kdWktbWVudS1jYXNjYWRlIG1lbnVfdXNlclwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1kdWktbWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJtZHVpLXJpcHBsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktbWVudS1pdGVtLWljb24gbWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+cGVyc29uPC9pPnt7dXNlci5yZWFsbmFtZSB8fCAn5peg5aeT5ZCNJ319XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibWR1aS1yaXBwbGVcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnBob25lX2lwaG9uZTwvaT57e3VzZXIubW9iaWxlIHx8ICfml6DmiYvmnLrlj7cnfX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1kdWktbWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJtZHVpLXJpcHBsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktbWVudS1pdGVtLWljb24gbWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+ZW1haWw8L2k+e3t1c2VyLmVtYWlsIHx8ICfml6Dpgq7nrrEnfX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpdmlkZXJcIj48L2Rpdj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibWR1aS1yaXBwbGVcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPmxhc3RfcGFnZTwvaT7mnKzmrKHnmbvlvZVcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1kdWktbWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJtZHVpLXJpcHBsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktbWVudS1pdGVtLWljb25cIj48L2k+e3t1c2VyLmxhc3RfbG9naW4gfHwgJ+aXoOWOhuWPsueZu+W9lSd9fVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGl2aWRlclwiPjwvZGl2PlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1kdWktbWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJtZHVpLXJpcHBsZVwiIEBjbGljaz1cInBhc3N3b3JkX3Jlc2V0X2RpYWxvZy5vcGVuKClcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnZwbl9rZXk8L2k+5L+u5pS55a+G56CBXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0blwiIHYtaWY9XCJ1c2VyXCIgQGNsaWNrPVwibG9nb3V0XCI+XG5cdFx0XHRcdFx05rOo6ZSAXG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRyYXdlciBtZHVpLWNvbG9yLXdoaXRlXCIgaWQ9XCJtYWluLWRyYXdlclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLW1lZGlhXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmdcIiBzdHlsZT1cImhlaWdodDoxOTBweDtcIiAvPlxuXHRcdFx0XHRcdDwhLS0g5Y2h54mH5Lit5Y+v5Lul5YyF5ZCr5LiA5Liq5oiW5aSa5Liq6I+c5Y2V5oyJ6ZKuIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtbWVudVwiPlxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi8vZ2l0aHViLmNvbS95eWJhd2FuZy9sYXJhdmVsLWViYW5rXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXRleHQtY29sb3ItZ3JleVwiPmdpdGh1YjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtbWVkaWEtY292ZXJlZCBtZHVpLWNhcmQtbWVkaWEtY292ZXJlZC10cmFuc3BhcmVudFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZC1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdDwhLS08aW1nIGNsYXNzPVwibWR1aS1pbWctY2lyY2xlXCIgc3JjPVwiLi4vaW1hZ2VzL2F2YXRhci5wbmdcIiBzdHlsZT1cIndpZHRoOjQ1cHg7XCIgLz4tLT5cblx0XHRcdFx0XHRcdFx0PCEtLTxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1idG4taWNvbiBtZHVpLXJpcHBsZVwiPjxpIGNsYXNzPVwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+cGVyc29uPC9pPjwvYT4tLT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZC1wcmltYXJ5LXRpdGxlIG1kdWktdGV4dC11cHBlcmNhc2VcIj57e3VzZXIubmFtZX19PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtcHJpbWFyeS1zdWJ0aXRsZVwiPnt7dXNlci5yZWFsbmFtZX19PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWxpc3RcIiBtZHVpLWNvbGxhcHNlPVwie2FjY29yZGlvbjogdHJ1ZX1cIj5cblx0XHRcdFx0PGRpdiB2LWZvcj1cIih2YWwsa2V5LGluZGV4KSBpbiBtZW51XCIgOmNsYXNzPVwieydtZHVpLWNvbGxhcHNlLWl0ZW0nOnRydWUsJ21kdWktY29sbGFwc2UtaXRlbS1vcGVuJzppbmRleCA9PSAwID8gdHJ1ZSA6ZmFsc2V9XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sbGFwc2UtaXRlbS1oZWFkZXIgbWR1aS1saXN0LWl0ZW0gbWR1aS1yaXBwbGVcIj5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1saXN0LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnMgbWR1aS10ZXh0LWNvbG9yLWdyZXlcIj5tZW51PC9pPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktbGlzdC1pdGVtLWNvbnRlbnRcIiB2LXRleHQ9XCJrZXlcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1jb2xsYXBzZS1pdGVtLWFycm93IG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPmtleWJvYXJkX2Fycm93X2Rvd248L2k+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sbGFwc2UtaXRlbS1ib2R5IG1kdWktbGlzdFwiPlxuXHRcdFx0XHRcdFx0PGRpdiB2LWZvcj1cIih2YWwyLGtleTIsaW5kZXgyKSBpbiB2YWxcIiBAY2xpY2s9XCJtZW51X2FjdGl2ZVwiPlxuXHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIDp0bz1cIntwYXRoOnZhbDJ9XCIgY2xhc3M9XCJtZHVpLWxpc3QtaXRlbSBtZHVpLXJpcHBsZVwiPnt7a2V5Mn19PC9yb3V0ZXItbGluaz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdFxuXHRcdDwhLS3ov5vluqbmnaHvvIznlKjkuo7liqDovb3mj5DnpLotLT5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1wcm9ncmVzc1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZSBtZHVpLWhpZGRlbiBhamF4X2xvYWRpbmdcIj48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8IS0tPGRpdiBjbGFzcz1cIm1kdWktY29udGFpbmVyXCI+LS0+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktcC1hLTNcIj5cblx0XHRcdDxkaXYgaWQ9XCJhcHBcIj5cblx0XHRcdFx0PHJvdXRlci12aWV3IEBpbml0PVwiaW5pdFwiIEBpbml0Q2xlYXI9XCJpbml0Q2xlYXJcIj48L3JvdXRlci12aWV3PiA8IS0tIOi3r+eUseW8leWFpeeahOe7hOS7tuWwhuWcqOi/memHjOiiq+a4suafkyAtLT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdFxuXHRcdDwhLS3kv67mlLnlr4bnoIHlvLnnqpctLT5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2cgcGFzc3dvcmRfcmVzZXRfZGlhbG9nXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctdGl0bGVcIj5cblx0XHRcdFx05L+u5pS555m75b2V5a+G56CBXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1jb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIj7njrDnmbvlvZXlr4bnoIE8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIiB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfb2xkXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIj7mlrDnmbvlvZXlr4bnoIE8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIiB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3XCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIj7ph43lpI3mlrDnmbvlvZXlr4bnoIE8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIiB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3X2NvbmZpcm1hdGlvblwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctYWN0aW9uc1wiPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlXCIgbWR1aS1kaWFsb2ctY2xvc2U+5Y+W5raIPC9hPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIiBAY2xpY2s9XCJwYXNzd29yZF9yZXNldF9zdWJtaXRcIj7mj5DkuqQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHVzZXIgOiAnJyxcblx0XHRcdFx0bWVudSA6ICcnLFxuXHRcdFx0XHRpbml0aW5nIDogZmFsc2UsXG5cdFx0XHRcdHBhc3N3b3JkX3Jlc2V0X2RpYWxvZyA6ICcnLFxuXHRcdFx0XHRwYXNzd29yZF9yZXNldCA6IHtcblx0XHRcdFx0XHRwYXNzd29yZF9vbGQgOiAnJyxcblx0XHRcdFx0XHRwYXNzd29yZF9uZXcgOiAnJyxcblx0XHRcdFx0XHRwYXNzd29yZF9uZXdfY29uZmlybWF0aW9uIDogJycsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHMgOiB7XG5cdFx0XHRtZW51X2FjdGl2ZSh0KXtcblx0XHRcdFx0JCgnLm1kdWktbGlzdC1pdGVtLWFjdGl2ZWQnKS5yZW1vdmVDbGFzcygnbWR1aS1saXN0LWl0ZW0tYWN0aXZlZCBtZHVpLWNvbG9yLXRoZW1lJyk7XG5cdFx0XHRcdCQodC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnbWR1aS1saXN0LWl0ZW0tYWN0aXZlZCBtZHVpLWNvbG9yLXRoZW1lJyk7XG5cdFx0XHR9LFxuXHRcdFx0cGFzc3dvcmRfcmVzZXRfc3VibWl0KCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0cG9zdCgnL3J1bGUvcGFzc3dvcmRfcmVzZXQnLHRoaXMucGFzc3dvcmRfcmVzZXQsZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5wYXNzd29yZF9yZXNldF9kaWFsb2cuY2xvc2UoKTtcblx0XHRcdFx0XHRtZHVpLmFsZXJ0KCflt7LmiJDlip/kv67mlLnvvIzkuIvmrKHnmbvlvZXor7fkvb/nlKjmlrDlr4bnoIEnLCfkv67mlLnnmbvlvZXlr4bnoIHlrozmiJAnLGZ1bmN0aW9uKCl7fSx7aGlzdG9yeTpmYWxzZX0pXG5cdFx0XHRcdFx0Zm9yKGxldCBpIGluIHQucGFzc3dvcmRfcmVzZXQpe1xuXHRcdFx0XHRcdFx0dC5wYXNzd29yZF9yZXNldFtpXSA9ICcnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRpbml0KCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0Ly8gaWYoIXQuaW5pdGluZyl7XG5cdFx0XHRcdFx0dC5pbml0aW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRnZXQoJy9pbml0Jyx7fSxmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHRcdHQudXNlciA9IGRhdGEudXNlcjtcblx0XHRcdFx0XHRcdHQubWVudSA9IGRhdGEubWVudTtcblx0XHRcdFx0XHRcdHQuaW5pdGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9LFxuXHRcdFx0aW5pdENsZWFyKCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0dC5tZW51ID0gJyc7XG5cdFx0XHRcdHQudXNlciA9ICcnO1xuXHRcdFx0fSxcblx0XHRcdGxvZ291dCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHRpcHMoJ+WNs+Wwhui3s+i9rOWIsOeZu+W9lemhtScpO1xuXHRcdFx0XHRnZXQoJy9sb2dvdXQnLHt9LGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHQuJHJvdXRlci5wdXNoKHtwYXRoOicvbG9naW4nfSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0dC5wYXNzd29yZF9yZXNldF9kaWFsb2cgPSBuZXcgbWR1aS5EaWFsb2coJy5wYXNzd29yZF9yZXNldF9kaWFsb2cnLHtoaXN0b3J5OmZhbHNlfSk7XG5cdFx0XHR0LmluaXQoKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvQXBwLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaGVhZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1hcHBiYXIgbWR1aS1hcHBiYXItZml4ZWRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRvb2xiYXIgbWR1aS1jb2xvci10aGVtZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10eXBvLWhlYWRsaW5lIG1kdWktaGlkZGVuLW1kLXVwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IHBhdGg6IFwiL1wiIH0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJFQmFua1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdHlwby10aXRsZSBtZHVpLWhpZGRlbi1zbS1kb3duXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IHBhdGg6IFwiL1wiIH0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJFQmFuayDnlLXlrZDpk7booYxcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10b29sYmFyLXNwYWNlclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLW1lbnVcIjogXCJ7dGFyZ2V0OiAnLm1lbnVfdXNlcid9XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcInBlcnNvblwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lIHx8IFwi5pyq55m75b2VXCIpICsgXCJcXG5cXHRcXHRcXHRcIilcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktbWVudSBtZHVpLW1lbnUtY2FzY2FkZSBtZW51X3VzZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1yaXBwbGVcIiwgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktbWVudS1pdGVtLWljb24gbWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInBlcnNvblwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnJlYWxuYW1lIHx8IFwi5peg5aeT5ZCNXCIpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJpcHBsZVwiLCBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwicGhvbmVfaXBob25lXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIubW9iaWxlIHx8IFwi5peg5omL5py65Y+3XCIpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJpcHBsZVwiLCBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZW1haWxcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5lbWFpbCB8fCBcIuaXoOmCrueusVwiKSArIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGl2aWRlclwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1yaXBwbGVcIiwgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW0taWNvblwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIubGFzdF9sb2dpbiB8fCBcIuaXoOWOhuWPsueZu+W9lVwiKSArIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaXZpZGVyXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktbWVudS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXJpcHBsZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZF9yZXNldF9kaWFsb2cub3BlbigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJ2cG5fa2V5XCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS/ruaUueWvhueggVxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS51c2VyXG4gICAgICAgICAgICA/IF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOazqOmUgFxcblxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktZHJhd2VyIG1kdWktY29sb3Itd2hpdGVcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWFpbi1kcmF3ZXJcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1tZWRpYVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjE5MHB4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi4vaW1hZ2VzL3Nub3dfc3F1YXJlX3RpbnkucG5nXCIpIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJtZHVpLWNhcmQtbWVkaWEtY292ZXJlZCBtZHVpLWNhcmQtbWVkaWEtY292ZXJlZC10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1wcmltYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNhcmQtcHJpbWFyeS10aXRsZSBtZHVpLXRleHQtdXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1wcmltYXJ5LXN1YnRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnJlYWxuYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktbGlzdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWNvbGxhcHNlXCI6IFwie2FjY29yZGlvbjogdHJ1ZX1cIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm1lbnUsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcIm1kdWktY29sbGFwc2UtaXRlbS1vcGVuXCI6IGluZGV4ID09IDAgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtLWhlYWRlciBtZHVpLWxpc3QtaXRlbSBtZHVpLXJpcHBsZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWxpc3QtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29ucyBtZHVpLXRleHQtY29sb3ItZ3JleVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwibWVudVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktbGlzdC1pdGVtLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGtleSkgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtLWFycm93IG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwia2V5Ym9hcmRfYXJyb3dfZG93blwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sbGFwc2UtaXRlbS1ib2R5IG1kdWktbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2wodmFsLCBmdW5jdGlvbih2YWwyLCBrZXkyLCBpbmRleDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBvbjogeyBjbGljazogX3ZtLm1lbnVfYWN0aXZlIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1saXN0LWl0ZW0gbWR1aS1yaXBwbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBwYXRoOiB2YWwyIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhrZXkyKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMyksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcC1hLTNcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInJvdXRlci12aWV3XCIsIHtcbiAgICAgICAgICAgIG9uOiB7IGluaXQ6IF92bS5pbml0LCBpbml0Q2xlYXI6IF92bS5pbml0Q2xlYXIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2cgcGFzc3dvcmRfcmVzZXRfZGlhbG9nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx05L+u5pS555m75b2V5a+G56CBXFxuXFx0XFx0XCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi546w55m75b2V5a+G56CBXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZF9yZXNldC5wYXNzd29yZF9vbGQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX29sZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZF9yZXNldC5wYXNzd29yZF9vbGQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkX3Jlc2V0LFxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkX29sZFwiLFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuaWsOeZu+W9leWvhueggVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9uZXdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3IH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZF9yZXNldCxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZF9uZXdcIixcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLph43lpI3mlrDnmbvlvZXlr4bnoIFcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX25ld19jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX25ld19jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3X2NvbmZpcm1hdGlvbiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRfcmVzZXQsXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRfbmV3X2NvbmZpcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWFjdGlvbnNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcIm1kdWktZGlhbG9nLWNsb3NlXCI6IFwiXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wYXNzd29yZF9yZXNldF9zdWJtaXQgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaPkOS6pFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcInNwYW5cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1idG4taWNvbiBtZHVpLXJpcHBsZSBtZHVpLXJpcHBsZS13aGl0ZVwiLFxuICAgICAgICBhdHRyczogeyBcIm1kdWktZHJhd2VyXCI6IFwie3RhcmdldDogJyNtYWluLWRyYXdlcicsIHN3aXBlOiB0cnVlfVwiIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCIgfSwgW192bS5fdihcIm1lbnVcIildKV1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbVwiIH0sIFtcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcmlwcGxlXCIsIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIiB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJsYXN0X3BhZ2VcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIuacrOasoeeZu+W9lVxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1tZW51XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgIGhyZWY6IFwiLy9naXRodWIuY29tL3l5YmF3YW5nL2xhcmF2ZWwtZWJhbmtcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS10ZXh0LWNvbG9yLWdyZXlcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJnaXRodWJcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXByb2dyZXNzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXByb2dyZXNzLWluZGV0ZXJtaW5hdGUgbWR1aS1oaWRkZW4gYWpheF9sb2FkaW5nXCJcbiAgICAgIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmRkMTEyNWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZkZDExMjVjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmc/NmNkNTliNGZjOTRlZGY4MDE1ZDUzYThhYzIyZTQ4MzhcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvaW1hZ2VzL3Nub3dfc3F1YXJlX3RpbnkucG5nXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcblZ1ZS51c2UoVnVlUm91dGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZVJvdXRlcih7XG5cdHNhdmVTY3JvbGxQb3NpdGlvbjogdHJ1ZSxcblx0cm91dGVzOiBbXG5cdFx0e1xuXHRcdFx0cGF0aDogJy8nLFxuXHRcdFx0cmVkaXJlY3QgOiAnL3dlbGNvbWUnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2xvZ2luJyxcblx0XHRcdHBhdGg6ICcvbG9naW4nLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvbG9naW4udnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3dlbGNvbWUnLFxuXHRcdFx0cGF0aDogJy93ZWxjb21lJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3VzZXJfdHJhbnNmZXInLFxuXHRcdFx0cGF0aDogJy91c2VyX3RyYW5zZmVyJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2luZGV4L3VzZXJfdHJhbnNmZXIudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9zeXNpbmZvJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2luZGV4L3N5c2luZm8udnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9tZXJjaGFudCcsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9tZXJjaGFudC9pbmRleC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHQvLyB7XG5cdFx0Ly8gXHRwYXRoOiAnL21lcmNoYW50L2FwaScsXG5cdFx0Ly8gXHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9tZXJjaGFudC9pbmRleC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0Ly8gfSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3RyYW5zZmVyJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3RyYW5zZmVyL2luZGV4LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvdHJhbnNmZXIvcmVhc29uJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3RyYW5zZmVyL3JlYXNvbi52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3JlcG9ydC9yZWFzb24nLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvcmVwb3J0L3JlYXNvbi52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3JlcG9ydC9wdXJzZScsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9yZXBvcnQvcHVyc2UudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9wdXJzZS9jZW50cmFsJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL2NlbnRyYWwudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9wdXJzZS9zeXN0ZW0nLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvcHVyc2Uvc3lzdGVtLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvcHVyc2UvdXNlcicsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9wdXJzZS91c2VyLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvcHVyc2UvZnJlZXplJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL2ZyZWV6ZS52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3B1cnNlL3VzZXJfdHlwZScsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9wdXJzZS91c2VyX3R5cGUudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9wdXJzZS9wdXJzZV90eXBlJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL3B1cnNlX3R5cGUudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy93aXRoZHJhdy9iYW5rJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3dpdGhkcmF3L2JhbmsudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy93aXRoZHJhdy9hbGlwYXknLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvd2l0aGRyYXcvYWxpcGF5LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvd2l0aGRyYXcvd2VjaGF0Jyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3dpdGhkcmF3L3dlY2hhdC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL29yZGVyJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvZXhwb3J0Jyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2V4cG9ydC9pbmRleC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3J1bGUvdXNlcicsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9ydWxlL3VzZXIudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9ydWxlL2dyb3VwJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3J1bGUvZ3JvdXAudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9zeXN0ZW0vY29uZmlnJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3N5c3RlbS9jb25maWcudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9zeXN0ZW0vYmVoYXZpb3InLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvc3lzdGVtL2JlaGF2aW9yLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9XG5cdF1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvcm91dGVyLmpzIiwiXHJcbi8qKlxyXG4gKiDlsY/luZXkuIvmlrnmloflrZfmj5DnpLpcclxuICogQHBhcmFtIG1zZ1xyXG4gKi9cclxubGV0IHRpcHMgPSBmdW5jdGlvbihtc2cpe1xyXG5cdG1kdWkuc25hY2tiYXIoe1xyXG5cdFx0bWVzc2FnZSA6IG1zZyxcclxuXHRcdHBvc2l0aW9uOidyaWdodC10b3AnLFxyXG5cdFx0dGltZW91dCA6IDMwMDAsXHJcblx0XHRidXR0b25UZXh0IDogJ0Nsb3NlJyxcclxuXHR9KTtcclxufTtcclxud2luZG93LnRpcHMgPSB0aXBzO1xyXG5cclxuLyoqXHJcbiAqIOWKoOi9veeql1xyXG4gKiBAcGFyYW0gY2xvc2VcclxuICovXHJcbmxldCBsb2FkaW5nID0gZnVuY3Rpb24oY2xvc2Upe1xyXG5cdGlmKGNsb3NlKXtcclxuXHRcdCQoJy5hamF4X2xvYWRpbmcnKS5hZGRDbGFzcygnbWR1aS1oaWRkZW4nKTtcclxuXHR9ZWxzZXtcclxuXHRcdCQoJy5hamF4X2xvYWRpbmcnKS5yZW1vdmVDbGFzcygnbWR1aS1oaWRkZW4nKTtcclxuXHR9XHJcbn07XHJcbndpbmRvdy5sb2FkaW5nID0gbG9hZGluZztcclxuXHJcbi8qKlxyXG4gKiDmjqfliLblj7Dml6Xlv5dcclxuICogQHBhcmFtIHZhcmlhYmxlXHJcbiAqL1xyXG5sZXQgbG9ncyA9IGZ1bmN0aW9uKHZhcmlhYmxlKXtcclxuXHRjb25zb2xlLmluZm8odHlwZW9mIHZhcmlhYmxlKTtcclxuXHRjb25zb2xlLmxvZyh2YXJpYWJsZSk7XHJcbn07XHJcbndpbmRvdy5sb2dzID0gbG9ncztcclxuXHJcbmxldCBEYXRlUGlja2VyRm9ybWF0ID0gZnVuY3Rpb24odGltZSl7XHJcblx0dHJ5e1xyXG5cdFx0Y29uc3QgeWVhciA9IHRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGNvbnN0IG1vbnRoID0gdGltZS5nZXRNb250aCgpO1xyXG5cdFx0Y29uc3QgZGF5ID0gdGltZS5nZXREYXRlKCk7XHJcblx0XHRjb25zdCBob3VyczI0ID0gdGltZS5nZXRIb3VycygpO1xyXG5cdFx0Y29uc3QgaG91cnMgPSBob3VyczI0ICUgMTIgPT09IDAgPyAxMiA6IGhvdXJzMjQgJSAxMjtcclxuXHRcdGNvbnN0IG1pbnV0ZXMgPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdGNvbnN0IHNlY29uZHMgPSB0aW1lLmdldFNlY29uZHMoKTtcclxuXHRcdGNvbnN0IG1pbGxpc2Vjb25kcyA9IHRpbWUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRjb25zdCBkZCA9IHQgPT4gKCcwJyArIHQpLnNsaWNlKC0yKTtcclxuXHRcdHJldHVybiB5ZWFyKyctJytkZChtb250aCArIDEpKyctJytkZChkYXkpO1xyXG5cdH1jYXRjaChlKSB7XHJcblx0XHRyZXR1cm4gdGltZTtcclxuXHR9XHJcbn07XHJcbndpbmRvdy5EYXRlUGlja2VyRm9ybWF0ID0gRGF0ZVBpY2tlckZvcm1hdDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXQgYWpheCA9IGZ1bmN0aW9uKHVybCxwb3N0X2RhdGEsc3VjY2VzcyxlcnJvcixtZXRob2Qpe1xyXG5cdGlmKCFlcnJvcil7XHJcblx0XHRlcnJvciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cdGlmKCFzdWNjZXNzKXtcclxuXHRcdHN1Y2Nlc3MgPSBmdW5jdGlvbihtc2cpe1xyXG5cdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHRsZXQgZXJyb3JzID0gZnVuY3Rpb24obXNnKXtcclxuXHRcdHRpcHMobXNnKTtcclxuXHR9O1xyXG5cdC8vIGFqYXgg6K+35rGC5bCB6KOFXHJcblx0bG9hZGluZygpO1xyXG5cdGF4aW9zKHtcclxuXHRcdHVybCA6IEFQUF9VUkwrJy9hZG1pbicrdXJsLFxyXG5cdFx0bWV0aG9kIDogbWV0aG9kLFxyXG5cdFx0ZGF0YSA6IHBvc3RfZGF0YSxcclxuXHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdGxvYWRpbmcodHJ1ZSk7XHJcblx0XHRsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblx0XHRpZignMScgPT09IGRhdGEuc3RhdHVzKXtcclxuXHRcdFx0c3VjY2VzcyhkYXRhLmRhdGEsZGF0YS5tZXNzYWdlKTtcclxuXHRcdH1lbHNlIGlmKCcwJyA9PT0gZGF0YS5zdGF0dXMpe1xyXG5cdFx0XHR0aXBzKGRhdGEubWVzc2FnZSk7XHJcblx0XHR9ZWxzZSBpZignMicgPT09IGRhdGEuc3RhdHVzKXtcclxuXHRcdFx0Ly8gdGlwcyhkYXRhLm1lc3NhZ2UpO1xyXG5cdFx0XHRyb3V0ZXIucHVzaCh7cGF0aDonL2xvZ2luJ30pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRpcHMoJ+Wksei0pe+8jOacquato+W4uOaOpeaUtiBqc29uIOWAvCcpO1xyXG5cdFx0fVxyXG5cdH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yX3Jlc3BvbnNlKXtcclxuXHRcdGxvZ3MoZXJyb3JfcmVzcG9uc2UpO1xyXG5cdFx0Ly8g6L+U5Zue6Z2eIGpzb27vvIw0MDQvNTAwIOetiVxyXG5cdFx0bGV0IHN0YXR1cyA9IGVycm9yX3Jlc3BvbnNlLnJlc3BvbnNlLnN0YXR1cyxtZXNzYWdlID0gJyc7XHJcblx0XHRsb2FkaW5nKHRydWUpO1xyXG5cdFx0Ly8gNDIyIOaYr+WPguaVsOmqjOivgeWksei0pei/lOWbnueKtuaAgVxyXG5cdFx0aWYoc3RhdHVzID09PSA0MjIpe1xyXG5cdFx0XHRtZXNzYWdlID0gT2JqZWN0LnZhbHVlcyhlcnJvcl9yZXNwb25zZS5yZXNwb25zZS5kYXRhLmVycm9ycylbMF1bMF07XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bWVzc2FnZSA9IGVycm9yX3Jlc3BvbnNlLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcclxuXHRcdH1cclxuXHRcdGVycm9ycygn5pyN5Yqh5Zmo6ZSZ6K+v77yM54q25oCB56CB77yaJytlcnJvcl9yZXNwb25zZS5yZXNwb25zZS5zdGF0dXMrJzxici8+5Y+C6ICD5L+h5oGv77yaJyttZXNzYWdlKyc8YnIvPmV4Y2VwdGlvbjonK2Vycm9yX3Jlc3BvbnNlLnJlc3BvbnNlLmRhdGEuZXhjZXB0aW9uKTtcclxuXHRcdGVycm9yKG1lc3NhZ2UsZXJyb3JfcmVzcG9uc2UucmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuXHR9KVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGFqYXgg6K+35rGCXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHBhcmFtIHBvc3RfZGF0YVxyXG4gKiBAcGFyYW0gc3VjY2Vzc1xyXG4gKiBAcGFyYW0gZXJyb3JcclxuICovXHJcbmxldCBwb3N0ID0gZnVuY3Rpb24odXJsLHBvc3RfZGF0YSxzdWNjZXNzLGVycm9yKXtcclxuXHRhamF4KHVybCxwb3N0X2RhdGEsc3VjY2VzcyxlcnJvciwncG9zdCcpO1xyXG59O1xyXG53aW5kb3cucG9zdCA9IHBvc3Q7XHJcblxyXG4vKipcclxuICogYWpheCBnZXTor7fmsYJcclxuICogQHBhcmFtIHVybFxyXG4gKiBAcGFyYW0gZ2V0X3BhcmFtXHJcbiAqIEBwYXJhbSBzdWNjZXNzXHJcbiAqIEBwYXJhbSBlcnJvclxyXG4gKi9cclxubGV0IGdldCA9IGZ1bmN0aW9uKHVybCxnZXRfcGFyYW0sc3VjY2VzcyxlcnJvcil7XHJcblx0Ly8gbGV0IHVybF9wYXJhbSA9IFtdO1xyXG5cdC8vIG1kdWkuSlEuZWFjaChnZXRfcGFyYW0sZnVuY3Rpb24oayx2KXtcclxuXHQvLyBcdHVybF9wYXJhbS5wdXNoKGsrJz0nK3YpO1xyXG5cdC8vIH0pO1xyXG5cdGlmKGdldF9wYXJhbS5kYXRlICYmIGdldF9wYXJhbS5kYXRlLmxlbmd0aCA+IDApe1xyXG5cdFx0Zm9yKGxldCBpIGluIGdldF9wYXJhbS5kYXRlKXtcclxuXHRcdFx0Z2V0X3BhcmFtLmRhdGVbaV0gPSBEYXRlUGlja2VyRm9ybWF0KGdldF9wYXJhbS5kYXRlW2ldKTtcclxuXHRcdH1cclxuXHR9XHJcblx0bGV0IHVybF9wYXJhbSA9ICQucGFyYW0oZ2V0X3BhcmFtKTtcclxuXHRhamF4KHVybCsnPycrdXJsX3BhcmFtLGdldF9wYXJhbSxzdWNjZXNzLGVycm9yLCdnZXQnKTtcclxufTtcclxud2luZG93LmdldCA9IGdldDtcclxuXHJcbi8qKlxyXG4gKiBhamF4IGRlbGV0ZSDor7fmsYJcclxuICogQHBhcmFtIHVybFxyXG4gKiBAcGFyYW0gZ2V0X3BhcmFtXHJcbiAqIEBwYXJhbSBzdWNjZXNzXHJcbiAqIEBwYXJhbSBlcnJvclxyXG4gKi9cclxubGV0IGRlbCA9IGZ1bmN0aW9uKHVybCxnZXRfcGFyYW0sc3VjY2VzcyxlcnJvcil7XHJcblx0YWpheCh1cmwsZ2V0X3BhcmFtLHN1Y2Nlc3MsZXJyb3IsJ2RlbGV0ZScpO1xyXG59O1xyXG53aW5kb3cuZGVsID0gZGVsO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvZnVuY3Rpb24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDI1Il0sInNvdXJjZVJvb3QiOiIifQ==