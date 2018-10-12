webpackJsonp([3],{

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("11888ccc", content, false, {});
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
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding E:\\www\\ebank\\node_modules\\node-sass\\vendor\\win32-x64-64\\binding.node\nNode Sass could not find a binding for your current environment: Windows 64-bit with Node.js 10.x\n\nFound bindings for the following environments:\n  - Windows 64-bit with Node.js 8.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (E:\\www\\ebank\\node_modules\\node-sass\\lib\\binding.js:15:13)\n    at Object.<anonymous> (E:\\www\\ebank\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at Object.<anonymous> (E:\\www\\ebank\\node_modules\\sass-loader\\lib\\loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at loadLoader (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at E:\\www\\ebank\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at E:\\www\\ebank\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (E:\\www\\ebank\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (E:\\www\\ebank\\node_modules\\webpack\\lib\\NormalModule.js:182:3)\n    at NormalModule.build (E:\\www\\ebank\\node_modules\\webpack\\lib\\NormalModule.js:275:15)");

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NumberGrow__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NumberGrow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__NumberGrow__);
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
	},

	components: {
		NumberGrow: __WEBPACK_IMPORTED_MODULE_0__NumberGrow___default.a
	}
});

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "welcome" },
    [
      _c("transition", { attrs: { appear: "", name: "fade" } }, [
        _vm.list.length > 0
          ? _c("div", { staticClass: "card-group" }, [
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
                        _c(
                          "div",
                          { staticClass: "mdui-valign content-space" },
                          [
                            _c(
                              "i",
                              {
                                staticClass:
                                  "mdui-icon material-icons content-space-icon",
                                style: { color: val.backgroundColor }
                              },
                              [_vm._v(_vm._s(val.icon))]
                            )
                          ]
                        ),
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
                                  staticClass:
                                    "mdui-card-primary-title mdui-text-color-red-300"
                                },
                                [
                                  _c("number-grow", {
                                    attrs: { value: val.sum }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", {
                                staticClass:
                                  "mdui-card-primary-subtitle mdui-text-color-black",
                                domProps: { textContent: _vm._s(val.name) }
                              }),
                              _vm._v(" "),
                              _c("div", {
                                staticClass:
                                  "mdui-typo-caption mdui-typo-caption-opacity mdui-text-color-grey-700",
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
          : _vm._e()
      ])
    ],
    1
  )
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

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(396)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(398)
/* template */
var __vue_template__ = __webpack_require__(399)
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
Component.options.__file = "resources\\assets\\js\\components\\NumberGrow.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9f6489a", Component.options)
  } else {
    hotAPI.reload("data-v-e9f6489a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("cf648796", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e9f6489a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NumberGrow.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e9f6489a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NumberGrow.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.number-grow-warp{\n\t-webkit-transform: translateZ(0);\n\t        transform: translateZ(0);\n}\n", ""]);

// exports


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		time: {
			type: Number,
			default: 1
		},
		value: {
			type: Number,
			default: 0
		}
	},
	data: function data() {
		return {
			number: 0
		};
	},

	methods: {
		numberGrow: function numberGrow(ele) {
			var _this = this,
			    point = _this.value.toString().split('.')[1] || 0,
			    point_length = point.length;
			var step = _this.value * 10 / (_this.time * 1000);
			var start = 0;
			var t = setInterval(function () {
				start += step;
				if (start >= _this.value) {
					_this.number = _this.value;
					clearInterval(t);
					return;
				}
				_this.number = start.toFixed(point_length).toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,');
			}, 10);
		}
	},
	mounted: function mounted() {
		this.numberGrow(this.$refs.numberGrow);
	}
});

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "number-grow-warp" }, [
    _c("span", {
      ref: "numberGrow",
      staticClass: "number-grow",
      attrs: { "data-time": _vm.time, "data-value": _vm.value },
      domProps: { textContent: _vm._s(_vm.number) }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e9f6489a", module.exports)
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