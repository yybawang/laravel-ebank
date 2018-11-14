webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/login.vue":
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
			domain: location.href.substring(7).split('/')[0]
		};
	},

	methods: {
		submit: function submit() {
			var t = this;
			t.$API.post('/login', this.form).then(function (data, message) {
				t.tips(message);
				t.$emit('init');
				t.$router.push({ name: 'welcome' });
			}).catch(function (msg) {});
		}
	},
	mounted: function mounted() {
		this.$emit('initClear');
		document.getElementById('name').focus();
	}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69787b62\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/login.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.frame {\n\tbackground-color:#FFF;\n\tpadding:20px;\n\tmax-width:30rem;\n\tmargin:10% auto;\n\tborder-radius: 5px;\n}\n.frame .submit {\n\tmargin-left:3.5rem;\n\tcursor:pointer;\n}\n.frame .login_footer {\n\tpadding:10px 0;\n\tborder-top:1px solid #CCC;\n}\n", "", {"version":3,"sources":["/var/www/ebank/resources/assets/js/components/resources/assets/js/components/login.vue"],"names":[],"mappings":";AAyDA;CACA,sBAAA;CACA,aAAA;CACA,gBAAA;CACA,gBAAA;CACA,mBAAA;CACA;AACA;CACA,mBAAA;CACA,eAAA;CACA;AACA;CACA,eAAA;CACA,0BAAA;CACA","file":"login.vue","sourcesContent":["<template>\n\t<div class=\"login\">\n\t\t<div class=\"frame\">\n\t\t\t<div class=\"title\"><h3>EBank 电子银行系统</h3></div>\n\t\t\t<div class=\"content\">\n\t\t\t\t<form method=\"post\" class=\"form\" @keydown.enter=\"submit\">\n\t\t\t\t\t<div class=\"mdui-textfield mdui-textfield-floating-label\">\n\t\t\t\t\t\t<i class=\"mdui-icon material-icons\">account_circle</i>\n\t\t\t\t\t\t<label class=\"mdui-textfield-label\">登录名</label>\n\t\t\t\t\t\t<input class=\"mdui-textfield-input\" type=\"text\" id=\"name\" v-model=\"form.name\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdui-textfield mdui-textfield-floating-label\">\n\t\t\t\t\t\t<i class=\"mdui-icon material-icons\">lock</i>\n\t\t\t\t\t\t<label class=\"mdui-textfield-label\">密　码</label>\n\t\t\t\t\t\t<input class=\"mdui-textfield-input\" type=\"password\" v-model=\"form.password\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdui-textfield\">\n\t\t\t\t\t\t<a class=\"mdui-btn mdui-ripple mdui-color-theme submit\" @click=\"submit\">登录</a>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"login_footer\">&copy; 2017 EBank {{domain}} All rights reserved</div>\n\t\t</div>\n\t</div>\n</template>\n<script>\n\texport default {\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\tform: {\n\t\t\t\t\tname : '',\n\t\t\t\t\tpassword : '',\n\t\t\t\t\tcaptcha : '',\n\t\t\t\t},\n\t\t\t\tdomain : location.href.substring(7).split('/')[0],\n\t\t\t};\n\t\t},\n\t\tmethods : {\n\t\t\tsubmit(){\n\t\t\t\tlet t = this;\n\t\t\t\tt.$API.post('/login',this.form).then(function(data,message){\n\t\t\t\t\tt.tips(message);\n\t\t\t\t\tt.$emit('init');\n\t\t\t\t\tt.$router.push({name:'welcome'});\n\t\t\t\t}).catch(function(msg){\n\t\t\t\t\t\n\t\t\t\t});\n\t\t\t}\n\t\t},\n\t\tmounted(){\n\t\t\tthis.$emit('initClear');\n\t\t\tdocument.getElementById('name').focus()\n\t\t}\n\t}\n</script>\n\n<style>\n\t.frame {\n\t\tbackground-color:#FFF;\n\t\tpadding:20px;\n\t\tmax-width:30rem;\n\t\tmargin:10% auto;\n\t\tborder-radius: 5px;\n\t}\n\t.frame .submit {\n\t\tmargin-left:3.5rem;\n\t\tcursor:pointer;\n\t}\n\t.frame .login_footer {\n\t\tpadding:10px 0;\n\t\tborder-top:1px solid #CCC;\n\t}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69787b62\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/login.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-69787b62", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69787b62\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/login.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69787b62\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/login.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4a96bf80", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69787b62\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69787b62\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69787b62\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/login.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-69787b62\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/login.vue")
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
Component.options.__file = "resources/assets/js/components/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69787b62", Component.options)
  } else {
    hotAPI.reload("data-v-69787b62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlPzY5NDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZT9jMzVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi52dWU/MWU3ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBLEtBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFEQTtBQUVBLGdCQUZBO0FBR0E7QUFIQSxJQURBO0FBTUE7QUFOQTtBQVFBLEVBVkE7O0FBV0E7QUFDQSxRQURBLG9CQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBSkEsRUFJQSxLQUpBLENBSUEsZ0JBRUEsQ0FOQTtBQU9BO0FBVkEsRUFYQTtBQXVCQSxRQXZCQSxxQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUExQkEsRzs7Ozs7OztBQzFCQSwyQkFBMkIsbUJBQU8sQ0FBQywyQ0FBcUQ7QUFDeEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGFBQWEsMEJBQTBCLGlCQUFpQixvQkFBb0Isb0JBQW9CLHVCQUF1QixHQUFHLGtCQUFrQix1QkFBdUIsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQiw4QkFBOEIsR0FBRyxVQUFVLHlJQUF5SSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsMm1DQUEybUMsY0FBYyxRQUFRLDJGQUEyRixhQUFhLGdCQUFnQixpQkFBaUIsb0ZBQW9GLHVF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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImxvZ2luXCI+XG5cdFx0PGRpdiBjbGFzcz1cImZyYW1lXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVcIj48aDM+RUJhbmsg55S15a2Q6ZO26KGM57O757ufPC9oMz48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdDxmb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzcz1cImZvcm1cIiBAa2V5ZG93bi5lbnRlcj1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZCBtZHVpLXRleHRmaWVsZC1mbG9hdGluZy1sYWJlbFwiPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5hY2NvdW50X2NpcmNsZTwvaT5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWxhYmVsXCI+55m75b2V5ZCNPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQgbWR1aS10ZXh0ZmllbGQtZmxvYXRpbmctbGFiZWxcIj5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+bG9jazwvaT5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWxhYmVsXCI+5a+G44CA56CBPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0XCIgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lIHN1Ym1pdFwiIEBjbGljaz1cInN1Ym1pdFwiPueZu+W9lTwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibG9naW5fZm9vdGVyXCI+JmNvcHk7IDIwMTcgRUJhbmsge3tkb21haW59fSBBbGwgcmlnaHRzIHJlc2VydmVkPC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmb3JtOiB7XG5cdFx0XHRcdFx0bmFtZSA6ICcnLFxuXHRcdFx0XHRcdHBhc3N3b3JkIDogJycsXG5cdFx0XHRcdFx0Y2FwdGNoYSA6ICcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkb21haW4gOiBsb2NhdGlvbi5ocmVmLnN1YnN0cmluZyg3KS5zcGxpdCgnLycpWzBdLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG1ldGhvZHMgOiB7XG5cdFx0XHRzdWJtaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkucG9zdCgnL2xvZ2luJyx0aGlzLmZvcm0pLnRoZW4oZnVuY3Rpb24oZGF0YSxtZXNzYWdlKXtcblx0XHRcdFx0XHR0LnRpcHMobWVzc2FnZSk7XG5cdFx0XHRcdFx0dC4kZW1pdCgnaW5pdCcpO1xuXHRcdFx0XHRcdHQuJHJvdXRlci5wdXNoKHtuYW1lOid3ZWxjb21lJ30pO1xuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHRcdHRoaXMuJGVtaXQoJ2luaXRDbGVhcicpO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS5mb2N1cygpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQuZnJhbWUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6I0ZGRjtcblx0XHRwYWRkaW5nOjIwcHg7XG5cdFx0bWF4LXdpZHRoOjMwcmVtO1xuXHRcdG1hcmdpbjoxMCUgYXV0bztcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdH1cblx0LmZyYW1lIC5zdWJtaXQge1xuXHRcdG1hcmdpbi1sZWZ0OjMuNXJlbTtcblx0XHRjdXJzb3I6cG9pbnRlcjtcblx0fVxuXHQuZnJhbWUgLmxvZ2luX2Zvb3RlciB7XG5cdFx0cGFkZGluZzoxMHB4IDA7XG5cdFx0Ym9yZGVyLXRvcDoxcHggc29saWQgI0NDQztcblx0fVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mcmFtZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjojRkZGO1xcblxcdHBhZGRpbmc6MjBweDtcXG5cXHRtYXgtd2lkdGg6MzByZW07XFxuXFx0bWFyZ2luOjEwJSBhdXRvO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmZyYW1lIC5zdWJtaXQge1xcblxcdG1hcmdpbi1sZWZ0OjMuNXJlbTtcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXG59XFxuLmZyYW1lIC5sb2dpbl9mb290ZXIge1xcblxcdHBhZGRpbmc6MTBweCAwO1xcblxcdGJvcmRlci10b3A6MXB4IHNvbGlkICNDQ0M7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvdmFyL3d3dy9lYmFuay9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBeURBO0NBQ0Esc0JBQUE7Q0FDQSxhQUFBO0NBQ0EsZ0JBQUE7Q0FDQSxnQkFBQTtDQUNBLG1CQUFBO0NBQ0E7QUFDQTtDQUNBLG1CQUFBO0NBQ0EsZUFBQTtDQUNBO0FBQ0E7Q0FDQSxlQUFBO0NBQ0EsMEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJsb2dpblxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiZnJhbWVcXFwiPlxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj48aDM+RUJhbmsg55S15a2Q6ZO26KGM57O757ufPC9oMz48L2Rpdj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG5cXHRcXHRcXHRcXHQ8Zm9ybSBtZXRob2Q9XFxcInBvc3RcXFwiIGNsYXNzPVxcXCJmb3JtXFxcIiBAa2V5ZG93bi5lbnRlcj1cXFwic3VibWl0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJtZHVpLXRleHRmaWVsZCBtZHVpLXRleHRmaWVsZC1mbG9hdGluZy1sYWJlbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGkgY2xhc3M9XFxcIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1xcXCI+YWNjb3VudF9jaXJjbGU8L2k+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGNsYXNzPVxcXCJtZHVpLXRleHRmaWVsZC1sYWJlbFxcXCI+55m75b2V5ZCNPC9sYWJlbD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIm1kdWktdGV4dGZpZWxkLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibmFtZVxcXCIgdi1tb2RlbD1cXFwiZm9ybS5uYW1lXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1kdWktdGV4dGZpZWxkIG1kdWktdGV4dGZpZWxkLWZsb2F0aW5nLWxhYmVsXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8aSBjbGFzcz1cXFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXFxcIj5sb2NrPC9pPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbCBjbGFzcz1cXFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcXFwiPuWvhuOAgOeggTwvbGFiZWw+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJtZHVpLXRleHRmaWVsZC1pbnB1dFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHYtbW9kZWw9XFxcImZvcm0ucGFzc3dvcmRcXFwiIC8+XFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwibWR1aS10ZXh0ZmllbGRcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lIHN1Ym1pdFxcXCIgQGNsaWNrPVxcXCJzdWJtaXRcXFwiPueZu+W9lTwvYT5cXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8L2Zvcm0+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwibG9naW5fZm9vdGVyXFxcIj4mY29weTsgMjAxNyBFQmFuayB7e2RvbWFpbn19IEFsbCByaWdodHMgcmVzZXJ2ZWQ8L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcblxcdFxcdGRhdGEoKXtcXG5cXHRcXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdFxcdGZvcm06IHtcXG5cXHRcXHRcXHRcXHRcXHRuYW1lIDogJycsXFxuXFx0XFx0XFx0XFx0XFx0cGFzc3dvcmQgOiAnJyxcXG5cXHRcXHRcXHRcXHRcXHRjYXB0Y2hhIDogJycsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRkb21haW4gOiBsb2NhdGlvbi5ocmVmLnN1YnN0cmluZyg3KS5zcGxpdCgnLycpWzBdLFxcblxcdFxcdFxcdH07XFxuXFx0XFx0fSxcXG5cXHRcXHRtZXRob2RzIDoge1xcblxcdFxcdFxcdHN1Ym1pdCgpe1xcblxcdFxcdFxcdFxcdGxldCB0ID0gdGhpcztcXG5cXHRcXHRcXHRcXHR0LiRBUEkucG9zdCgnL2xvZ2luJyx0aGlzLmZvcm0pLnRoZW4oZnVuY3Rpb24oZGF0YSxtZXNzYWdlKXtcXG5cXHRcXHRcXHRcXHRcXHR0LnRpcHMobWVzc2FnZSk7XFxuXFx0XFx0XFx0XFx0XFx0dC4kZW1pdCgnaW5pdCcpO1xcblxcdFxcdFxcdFxcdFxcdHQuJHJvdXRlci5wdXNoKHtuYW1lOid3ZWxjb21lJ30pO1xcblxcdFxcdFxcdFxcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XFxuXFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0fSk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0bW91bnRlZCgpe1xcblxcdFxcdFxcdHRoaXMuJGVtaXQoJ2luaXRDbGVhcicpO1xcblxcdFxcdFxcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuZm9jdXMoKVxcblxcdFxcdH1cXG5cXHR9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcdC5mcmFtZSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjojRkZGO1xcblxcdFxcdHBhZGRpbmc6MjBweDtcXG5cXHRcXHRtYXgtd2lkdGg6MzByZW07XFxuXFx0XFx0bWFyZ2luOjEwJSBhdXRvO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHR9XFxuXFx0LmZyYW1lIC5zdWJtaXQge1xcblxcdFxcdG1hcmdpbi1sZWZ0OjMuNXJlbTtcXG5cXHRcXHRjdXJzb3I6cG9pbnRlcjtcXG5cXHR9XFxuXFx0LmZyYW1lIC5sb2dpbl9mb290ZXIge1xcblxcdFxcdHBhZGRpbmc6MTBweCAwO1xcblxcdFxcdGJvcmRlci10b3A6MXB4IHNvbGlkICNDQ0M7XFxuXFx0fVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTY5Nzg3YjYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02OTc4N2I2MlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5cIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmcmFtZVwiIH0sIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICEoXCJidXR0b25cIiBpbiAkZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQgbWR1aS10ZXh0ZmllbGQtZmxvYXRpbmctbGFiZWxcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiYWNjb3VudF9jaXJjbGVcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIueZu+W9leWQjVwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBpZDogXCJuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZCBtZHVpLXRleHRmaWVsZC1mbG9hdGluZy1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJsb2NrXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlr4bjgIDnoIFcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZSBzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnmbvlvZVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvb3RlclwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiwqkgMjAxNyBFQmFuayBcIiArIF92bS5fcyhfdm0uZG9tYWluKSArIFwiIEFsbCByaWdodHMgcmVzZXJ2ZWRcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJFQmFuayDnlLXlrZDpk7booYzns7vnu59cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY5Nzg3YjYyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02OTc4N2I2MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNjk3ODdiNjJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02OTc4N2I2MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjRhOTZiZjgwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02OTc4N2I2MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjk3ODdiNjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTY5Nzg3YjYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTY5Nzg3YjYyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjk3ODdiNjJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjk3ODdiNjJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjk3ODdiNjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02OTc4N2I2MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=