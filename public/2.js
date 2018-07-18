webpackJsonp([2],{

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("689527d8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb1453bc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb1453bc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.frame {\n\tbackground-color:#FFF;\n\tpadding:20px;\n\tmax-width:30rem;\n\tmargin:10% auto;\n\tborder-radius: 5px;\n}\n.frame .submit {\n\tmargin-left:3.5rem;\n\tcursor:pointer;\n}\n.frame .login_footer {\n\tpadding:10px 0;\n\tborder-top:1px solid #CCC;\n}\n", "", {"version":3,"sources":["E:/www/laravel-ebank/resources/assets/js/components/resources/assets/js/components/login.vue"],"names":[],"mappings":";AA0DA;CACA,sBAAA;CACA,aAAA;CACA,gBAAA;CACA,gBAAA;CACA,mBAAA;CACA;AACA;CACA,mBAAA;CACA,eAAA;CACA;AACA;CACA,eAAA;CACA,0BAAA;CACA","file":"login.vue","sourcesContent":["<template>\n\t<div class=\"login\">\n\t\t<div class=\"frame\">\n\t\t\t<div class=\"title\"><h3>EBank 电子银行系统</h3></div>\n\t\t\t<div class=\"content\">\n\t\t\t\t<form method=\"post\" class=\"form\" @keydown.enter=\"submit\">\n\t\t\t\t\t<div class=\"mdui-textfield mdui-textfield-floating-label\">\n\t\t\t\t\t\t<i class=\"mdui-icon material-icons\">account_circle</i>\n\t\t\t\t\t\t<label class=\"mdui-textfield-label\">登录名</label>\n\t\t\t\t\t\t<input class=\"mdui-textfield-input\" type=\"text\" id=\"name\" v-model=\"form.name\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdui-textfield mdui-textfield-floating-label\">\n\t\t\t\t\t\t<i class=\"mdui-icon material-icons\">lock</i>\n\t\t\t\t\t\t<label class=\"mdui-textfield-label\">密　码</label>\n\t\t\t\t\t\t<input class=\"mdui-textfield-input\" type=\"password\" v-model=\"form.password\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdui-textfield\">\n\t\t\t\t\t\t<a class=\"mdui-btn mdui-ripple mdui-color-theme submit\" @click=\"submit\">登录</a>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"login_footer\">&copy; 2017 EBank {{domain}} All rights reserved</div>\n\t\t</div>\n\t</div>\n</template>\n<script>\n\texport default {\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\tform: {\n\t\t\t\t\tname : '',\n\t\t\t\t\tpassword : '',\n\t\t\t\t\tcaptcha : '',\n\t\t\t\t},\n\t\t\t\ttips : '',\n\t\t\t\tdomain : location.href.substring(7).split('/')[0],\n\t\t\t};\n\t\t},\n\t\tmethods : {\n\t\t\ttips_message(message){\n\t\t\t\tthis.tips = message;\n\t\t\t},\n\t\t\tsubmit(){\n\t\t\t\tlet t = this;\n\t\t\t\tpost('/login',this.form,function(data,message){\n\t\t\t\t\ttips(message);\n\t\t\t\t\tt.$router.push({path:'/welcome'});\n\t\t\t\t});\n\t\t\t}\n\t\t},\n\t\tmounted(){\n\t\t\tthis.$emit('initClear');\n\t\t\tdocument.getElementById('name').focus()\n\t\t}\n\t}\n</script>\n\n<style>\n\t.frame {\n\t\tbackground-color:#FFF;\n\t\tpadding:20px;\n\t\tmax-width:30rem;\n\t\tmargin:10% auto;\n\t\tborder-radius: 5px;\n\t}\n\t.frame .submit {\n\t\tmargin-left:3.5rem;\n\t\tcursor:pointer;\n\t}\n\t.frame .login_footer {\n\t\tpadding:10px 0;\n\t\tborder-top:1px solid #CCC;\n\t}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 316:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			form: {
				name: '',
				password: '',
				captcha: ''
			},
			tips: '',
			domain: location.href.substring(7).split('/')[0]
		};
	},

	methods: {
		tips_message: function tips_message(message) {
			this.tips = message;
		},
		submit: function submit() {
			var t = this;
			post('/login', this.form, function (data, message) {
				tips(message);
				t.$router.push({ path: '/welcome' });
			});
		}
	},
	mounted: function mounted() {
		this.$emit('initClear');
		document.getElementById('name').focus();
	}
});

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login" }, [
    _c("div", { staticClass: "frame" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c(
          "form",
          {
            staticClass: "form",
            attrs: { method: "post" },
            on: {
              keydown: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.submit($event)
              }
            }
          },
          [
            _c(
              "div",
              { staticClass: "mdui-textfield mdui-textfield-floating-label" },
              [
                _c("i", { staticClass: "mdui-icon material-icons" }, [
                  _vm._v("account_circle")
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("登录名")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.name,
                      expression: "form.name"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "text", id: "name" },
                  domProps: { value: _vm.form.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "name", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mdui-textfield mdui-textfield-floating-label" },
              [
                _c("i", { staticClass: "mdui-icon material-icons" }, [
                  _vm._v("lock")
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("密　码")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password,
                      expression: "form.password"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "password" },
                  domProps: { value: _vm.form.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "password", $event.target.value)
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-textfield" }, [
              _c(
                "a",
                {
                  staticClass: "mdui-btn mdui-ripple mdui-color-theme submit",
                  on: { click: _vm.submit }
                },
                [_vm._v("登录")]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "login_footer" }, [
        _vm._v("© 2017 EBank " + _vm._s(_vm.domain) + " All rights reserved")
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("EBank 电子银行系统")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-eb1453bc", module.exports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(314)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(316)
/* template */
var __vue_template__ = __webpack_require__(317)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb1453bc", Component.options)
  } else {
    hotAPI.reload("data-v-eb1453bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlPzZjYjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZT8wYTVmIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi52dWU/YWExZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQSxxQ0FBbU87QUFDbk87QUFDQTtBQUNBO0FBQ0Esa0VBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0pBQWdKLGtGQUFrRjtBQUNsTyx5SkFBeUosa0ZBQWtGO0FBQzNPO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLG1DQUFvQywwQkFBMEIsaUJBQWlCLG9CQUFvQixvQkFBb0IsdUJBQXVCLEdBQUcsa0JBQWtCLHVCQUF1QixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLDhCQUE4QixHQUFHLFVBQVUsK0lBQStJLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVywybUNBQTJtQyxjQUFjLFFBQVEsMkZBQTJGLGFBQWEsZ0JBQWdCLGlCQUFpQixvRkFBb0YsMkZBQTJGLE9BQU8sa0JBQWtCLDhCQUE4Qiw4QkFBOEIsU0FBUyxrQkFBa0IsdUJBQXVCLHlEQUF5RCwwQkFBMEIsNEJBQTRCLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxTQUFTLE9BQU8saUJBQWlCLGdDQUFnQyxzREFBc0QsS0FBSyxrQ0FBa0MsNEJBQTRCLG1CQUFtQixzQkFBc0Isc0JBQXNCLHlCQUF5QixLQUFLLG9CQUFvQix5QkFBeUIscUJBQXFCLEtBQUssMEJBQTBCLHFCQUFxQixnQ0FBZ0MsS0FBSywrQkFBK0I7O0FBRTlzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUJBO0FBQ0EsS0FEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxZQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUhBLElBREE7QUFNQSxXQU5BO0FBT0E7QUFQQTtBQVNBLEVBWEE7O0FBWUE7QUFDQSxjQURBLHdCQUNBLE9BREEsRUFDQTtBQUNBO0FBQ0EsR0FIQTtBQUlBLFFBSkEsb0JBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBSEE7QUFJQTtBQVZBLEVBWkE7QUF3QkEsUUF4QkEscUJBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBLEc7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOERBQThEO0FBQzdFO0FBQ0EseUJBQXlCLDBDQUEwQztBQUNuRTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0NBQXNDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJCQUEyQjtBQUNyRCw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOERBQThEO0FBQzdFO0FBQ0EseUJBQXlCLDBDQUEwQztBQUNuRTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0NBQXNDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1CQUFtQjtBQUM3Qyw2QkFBNkIsMkJBQTJCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeElBO0FBQ0E7QUFDQTtBQUNBLHlCQUFtTTtBQUNuTTtBQUNBO0FBQ0E7QUFDQSw0Q0FBc1I7QUFDdFI7QUFDQSw4Q0FBZ0w7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZWIxNDUzYmNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2ODk1MjdkOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZWIxNDUzYmNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWViMTQ1M2JjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1lYjE0NTNiY1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZnJhbWUge1xcblxcdGJhY2tncm91bmQtY29sb3I6I0ZGRjtcXG5cXHRwYWRkaW5nOjIwcHg7XFxuXFx0bWF4LXdpZHRoOjMwcmVtO1xcblxcdG1hcmdpbjoxMCUgYXV0bztcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5mcmFtZSAuc3VibWl0IHtcXG5cXHRtYXJnaW4tbGVmdDozLjVyZW07XFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxufVxcbi5mcmFtZSAubG9naW5fZm9vdGVyIHtcXG5cXHRwYWRkaW5nOjEwcHggMDtcXG5cXHRib3JkZXItdG9wOjFweCBzb2xpZCAjQ0NDO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRTovd3d3L2xhcmF2ZWwtZWJhbmsvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTBEQTtDQUNBLHNCQUFBO0NBQ0EsYUFBQTtDQUNBLGdCQUFBO0NBQ0EsZ0JBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBQ0E7Q0FDQSxtQkFBQTtDQUNBLGVBQUE7Q0FDQTtBQUNBO0NBQ0EsZUFBQTtDQUNBLDBCQUFBO0NBQ0FcIixcImZpbGVcIjpcImxvZ2luLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFx0PGRpdiBjbGFzcz1cXFwibG9naW5cXFwiPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImZyYW1lXFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCI+PGgzPkVCYW5rIOeUteWtkOmTtuihjOezu+e7nzwvaDM+PC9kaXY+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuXFx0XFx0XFx0XFx0PGZvcm0gbWV0aG9kPVxcXCJwb3N0XFxcIiBjbGFzcz1cXFwiZm9ybVxcXCIgQGtleWRvd24uZW50ZXI9XFxcInN1Ym1pdFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwibWR1aS10ZXh0ZmllbGQgbWR1aS10ZXh0ZmllbGQtZmxvYXRpbmctbGFiZWxcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxpIGNsYXNzPVxcXCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcXFwiPmFjY291bnRfY2lyY2xlPC9pPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbCBjbGFzcz1cXFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcXFwiPueZu+W9leWQjTwvbGFiZWw+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJtZHVpLXRleHRmaWVsZC1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcIm5hbWVcXFwiIHYtbW9kZWw9XFxcImZvcm0ubmFtZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJtZHVpLXRleHRmaWVsZCBtZHVpLXRleHRmaWVsZC1mbG9hdGluZy1sYWJlbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGkgY2xhc3M9XFxcIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1xcXCI+bG9jazwvaT5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcIm1kdWktdGV4dGZpZWxkLWxhYmVsXFxcIj7lr4bjgIDnoIE8L2xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiB2LW1vZGVsPVxcXCJmb3JtLnBhc3N3b3JkXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1kdWktdGV4dGZpZWxkXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZSBzdWJtaXRcXFwiIEBjbGljaz1cXFwic3VibWl0XFxcIj7nmbvlvZU8L2E+XFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0PC9mb3JtPlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImxvZ2luX2Zvb3RlclxcXCI+JmNvcHk7IDIwMTcgRUJhbmsge3tkb21haW59fSBBbGwgcmlnaHRzIHJlc2VydmVkPC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0PC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcblxcdGV4cG9ydCBkZWZhdWx0IHtcXG5cXHRcXHRkYXRhKCl7XFxuXFx0XFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRcXHRmb3JtOiB7XFxuXFx0XFx0XFx0XFx0XFx0bmFtZSA6ICcnLFxcblxcdFxcdFxcdFxcdFxcdHBhc3N3b3JkIDogJycsXFxuXFx0XFx0XFx0XFx0XFx0Y2FwdGNoYSA6ICcnLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0dGlwcyA6ICcnLFxcblxcdFxcdFxcdFxcdGRvbWFpbiA6IGxvY2F0aW9uLmhyZWYuc3Vic3RyaW5nKDcpLnNwbGl0KCcvJylbMF0sXFxuXFx0XFx0XFx0fTtcXG5cXHRcXHR9LFxcblxcdFxcdG1ldGhvZHMgOiB7XFxuXFx0XFx0XFx0dGlwc19tZXNzYWdlKG1lc3NhZ2Upe1xcblxcdFxcdFxcdFxcdHRoaXMudGlwcyA9IG1lc3NhZ2U7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRzdWJtaXQoKXtcXG5cXHRcXHRcXHRcXHRsZXQgdCA9IHRoaXM7XFxuXFx0XFx0XFx0XFx0cG9zdCgnL2xvZ2luJyx0aGlzLmZvcm0sZnVuY3Rpb24oZGF0YSxtZXNzYWdlKXtcXG5cXHRcXHRcXHRcXHRcXHR0aXBzKG1lc3NhZ2UpO1xcblxcdFxcdFxcdFxcdFxcdHQuJHJvdXRlci5wdXNoKHtwYXRoOicvd2VsY29tZSd9KTtcXG5cXHRcXHRcXHRcXHR9KTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRtb3VudGVkKCl7XFxuXFx0XFx0XFx0dGhpcy4kZW1pdCgnaW5pdENsZWFyJyk7XFxuXFx0XFx0XFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS5mb2N1cygpXFxuXFx0XFx0fVxcblxcdH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFx0LmZyYW1lIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7XFxuXFx0XFx0cGFkZGluZzoyMHB4O1xcblxcdFxcdG1heC13aWR0aDozMHJlbTtcXG5cXHRcXHRtYXJnaW46MTAlIGF1dG87XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdH1cXG5cXHQuZnJhbWUgLnN1Ym1pdCB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6My41cmVtO1xcblxcdFxcdGN1cnNvcjpwb2ludGVyO1xcblxcdH1cXG5cXHQuZnJhbWUgLmxvZ2luX2Zvb3RlciB7XFxuXFx0XFx0cGFkZGluZzoxMHB4IDA7XFxuXFx0XFx0Ym9yZGVyLXRvcDoxcHggc29saWQgI0NDQztcXG5cXHR9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZWIxNDUzYmNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDMxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJsb2dpblwiPlxuXHRcdDxkaXYgY2xhc3M9XCJmcmFtZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlXCI+PGgzPkVCYW5rIOeUteWtkOmTtuihjOezu+e7nzwvaDM+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHQ8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3M9XCJmb3JtXCIgQGtleWRvd24uZW50ZXI9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQgbWR1aS10ZXh0ZmllbGQtZmxvYXRpbmctbGFiZWxcIj5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+YWNjb3VudF9jaXJjbGU8L2k+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPueZu+W9leWQjTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkIG1kdWktdGV4dGZpZWxkLWZsb2F0aW5nLWxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPmxvY2s8L2k+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPuWvhuOAgOeggTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10ZXh0ZmllbGRcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZSBzdWJtaXRcIiBAY2xpY2s9XCJzdWJtaXRcIj7nmbvlvZU8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImxvZ2luX2Zvb3RlclwiPiZjb3B5OyAyMDE3IEVCYW5rIHt7ZG9tYWlufX0gQWxsIHJpZ2h0cyByZXNlcnZlZDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Zm9ybToge1xuXHRcdFx0XHRcdG5hbWUgOiAnJyxcblx0XHRcdFx0XHRwYXNzd29yZCA6ICcnLFxuXHRcdFx0XHRcdGNhcHRjaGEgOiAnJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0dGlwcyA6ICcnLFxuXHRcdFx0XHRkb21haW4gOiBsb2NhdGlvbi5ocmVmLnN1YnN0cmluZyg3KS5zcGxpdCgnLycpWzBdLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG1ldGhvZHMgOiB7XG5cdFx0XHR0aXBzX21lc3NhZ2UobWVzc2FnZSl7XG5cdFx0XHRcdHRoaXMudGlwcyA9IG1lc3NhZ2U7XG5cdFx0XHR9LFxuXHRcdFx0c3VibWl0KCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0cG9zdCgnL2xvZ2luJyx0aGlzLmZvcm0sZnVuY3Rpb24oZGF0YSxtZXNzYWdlKXtcblx0XHRcdFx0XHR0aXBzKG1lc3NhZ2UpO1xuXHRcdFx0XHRcdHQuJHJvdXRlci5wdXNoKHtwYXRoOicvd2VsY29tZSd9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCl7XG5cdFx0XHR0aGlzLiRlbWl0KCdpbml0Q2xlYXInKTtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuZm9jdXMoKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LmZyYW1lIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7XG5cdFx0cGFkZGluZzoyMHB4O1xuXHRcdG1heC13aWR0aDozMHJlbTtcblx0XHRtYXJnaW46MTAlIGF1dG87XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHR9XG5cdC5mcmFtZSAuc3VibWl0IHtcblx0XHRtYXJnaW4tbGVmdDozLjVyZW07XG5cdFx0Y3Vyc29yOnBvaW50ZXI7XG5cdH1cblx0LmZyYW1lIC5sb2dpbl9mb290ZXIge1xuXHRcdHBhZGRpbmc6MTBweCAwO1xuXHRcdGJvcmRlci10b3A6MXB4IHNvbGlkICNDQ0M7XG5cdH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpblwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZyYW1lXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgIShcImJ1dHRvblwiIGluICRldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZCBtZHVpLXRleHRmaWVsZC1mbG9hdGluZy1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJhY2NvdW50X2NpcmNsZVwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi55m75b2V5ZCNXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGlkOiBcIm5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkIG1kdWktdGV4dGZpZWxkLWZsb2F0aW5nLWxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcImxvY2tcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWvhuOAgOeggVwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lIHN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIueZu+W9lVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9vdGVyXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCLCqSAyMDE3IEVCYW5rIFwiICsgX3ZtLl9zKF92bS5kb21haW4pICsgXCIgQWxsIHJpZ2h0cyByZXNlcnZlZFwiKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkVCYW5rIOeUteWtkOmTtuihjOezu+e7n1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZWIxNDUzYmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWViMTQ1M2JjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZWIxNDUzYmNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZWIxNDUzYmNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxsb2dpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZWIxNDUzYmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lYjE0NTNiY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==