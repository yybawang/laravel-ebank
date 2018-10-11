webpackJsonp([3],{

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("11888ccc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a0facede\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a0facede\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.card[data-v-a0facede] {\n  min-width: 180px;\n}\n.content-space[data-v-a0facede] {\n  height: 8rem;\n  text-align: center;\n}\n.content-space-icon[data-v-a0facede] {\n  font-size: 5rem;\n  color: #ececec;\n}\n", ""]);

// exports


/***/ }),

/***/ 344:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: []
		};
	},

	methods: {
		init: function init() {
			var t = this;
			t.$API.get('/index/welcome').then(function (data) {
				t.list = data;
			});
		}
	},
	mounted: function mounted() {
		this.init();
	}
});

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "welcome" }, [
    _c("div", { staticClass: "card-group" }, [
      _c(
        "div",
        {
          staticClass:
            "mdui-row-xs-2 mdui-row-sm-3 mdui-row-md-4 mdui-row-lg-5 mdui-row-xl-6"
        },
        _vm._l(_vm.list, function(val, key) {
          return _c("div", { staticClass: "mdui-col" }, [
            _c("div", { staticClass: "mdui-card mdui-m-b-2 card" }, [
              _c("div", { staticClass: "mdui-card-media" }, [
                _c("div", { staticClass: "mdui-valign content-space" }, [
                  _c("div", { staticClass: "mdui-center" }, [
                    _c(
                      "i",
                      {
                        staticClass:
                          "mdui-icon material-icons content-space-icon"
                      },
                      [_vm._v(_vm._s(val.icon))]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "mdui-card-media-covered mdui-card-media-covered-transparent"
                  },
                  [
                    _c("div", { staticClass: "mdui-card-primary" }, [
                      _c("div", {
                        staticClass:
                          "mdui-card-primary-title mdui-text-color-red",
                        domProps: { textContent: _vm._s(val.sum) }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "mdui-card-primary-subtitle mdui-text-color-black",
                        domProps: { textContent: _vm._s(val.name) }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass:
                          "mdui-card-primary-subtitle mdui-text-color-grey-500",
                        domProps: { textContent: _vm._s(val.title) }
                      })
                    ])
                  ]
                )
              ])
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a0facede", module.exports)
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(342)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(344)
/* template */
var __vue_template__ = __webpack_require__(345)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a0facede"
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
Component.options.__file = "resources\\assets\\js\\components\\index\\welcome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a0facede", Component.options)
  } else {
    hotAPI.reload("data-v-a0facede", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});