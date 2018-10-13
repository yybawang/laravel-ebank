webpackJsonp([2],{

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
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.card[data-v-a0facede] {\n  min-width: 180px;\n}\n.content-space[data-v-a0facede] {\n  padding: 0 0.5rem;\n  height: 7.3rem;\n  text-align: right;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.content-space-icon[data-v-a0facede] {\n  font-size: 3rem;\n}\n.fade-enter-active[data-v-a0facede] {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n}\n.fade-enter[data-v-a0facede], .fade-leave-to[data-v-a0facede] {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NumberGrow__ = __webpack_require__(345);
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
			list: [{
				"name": "今日下单数量",
				"sum": '',
				"icon": "trending_up",
				"title": "已支付并且有效的订单",
				"backgroundColor": "#F0AD4E"
			}, {
				"name": "今日下单金额",
				"sum": '',
				"icon": "account_balance",
				"title": "已支付并且有效的订单",
				"backgroundColor": "#F0AD4E"
			}, {
				"name": "昨日下单数量",
				"sum": '',
				"icon": "trending_up",
				"title": "已支付并且有效的订单",
				"backgroundColor": "#F0AD4E"
			}, {
				"name": "昨日下单金额",
				"sum": '',
				"icon": "account_balance",
				"title": "已支付并且有效的订单",
				"backgroundColor": "#F0AD4E"
			}, {
				"name": "今日提现数量",
				"sum": '',
				"icon": "trending_up",
				"title": "申请提现成功",
				"backgroundColor": "#00A98E"
			}, {
				"name": "今日提现金额",
				"sum": '',
				"icon": "account_balance_wallet",
				"title": "申请提现成功",
				"backgroundColor": "#00A98E"
			}, {
				"name": "昨日提现数量",
				"sum": '',
				"icon": "trending_up",
				"title": "申请提现成功",
				"backgroundColor": "#00A98E"
			}, {
				"name": "昨日提现金额",
				"sum": '',
				"icon": "account_balance_wallet",
				"title": "申请提现成功",
				"backgroundColor": "#00A98E"
			}, {
				"name": "今日提现待处理",
				"sum": '',
				"icon": "account_balance_wallet",
				"title": "申请提现中",
				"backgroundColor": "#5CB85C"
			}, {
				"name": "昨日提现待处理",
				"sum": '',
				"icon": "account_balance_wallet",
				"title": "申请提现中",
				"backgroundColor": "#5CB85C"
			}, {
				"name": "今日用户新增",
				"sum": '',
				"icon": "person",
				"title": "新钱包数据",
				"backgroundColor": "#337AB7"
			}, {
				"name": "昨日用户新增",
				"sum": '',
				"icon": "person",
				"title": "新钱包数据",
				"backgroundColor": "#337AB7"
			}, {
				"name": "接口商户数量",
				"sum": '',
				"icon": "people",
				"title": "API接口商户",
				"backgroundColor": "#337AB7"
			}, {
				"name": "今日流水记录",
				"sum": '',
				"icon": "swap_horiz",
				"title": "有效转账记录",
				"backgroundColor": "#32C24D"
			}, {
				"name": "昨日流水记录",
				"sum": '',
				"icon": "swap_horiz",
				"title": "有效转账记录",
				"backgroundColor": "#32C24D"
			}, {
				"name": "今日接口错误",
				"sum": '',
				"icon": "bug_report",
				"title": "商户API未成功返回",
				"backgroundColor": "#D9534F"
			}],
			order_notify: []
		};
	},

	methods: {
		order_unnotify: function order_unnotify() {
			var t = this;
			t.$API.get('/index/order_unnotify').then(function (data) {
				t.order_notify = data;
			});
		},
		init: function init() {
			var t = this;
			t.$API.get('/index/welcome').then(function (data) {
				for (var i in data) {
					t.list[i].sum = data[i].sum;
				}
			});
			t.order_unnotify();
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

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(346)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(348)
/* template */
var __vue_template__ = __webpack_require__(349)
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

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
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

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.number-grow-warp{\n\t-webkit-transform: translateZ(0);\n\t        transform: translateZ(0);\n}\n", ""]);

// exports


/***/ }),

/***/ 348:
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
		value: ''
	},
	data: function data() {
		return {
			number: '--'
		};
	},

	watch: {
		value: function value(n, o) {
			this.numberGrow();
		}
	},
	methods: {
		numberGrow: function numberGrow() {
			if (this.value === '') {
				return;
			}
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
	}
});

/***/ }),

/***/ 349:
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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { appear: "", name: "fade" } }, [
    _c("div", { staticClass: "welcome" }, [
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
                      _c("div", { staticClass: "mdui-valign content-space" }, [
                        _c(
                          "i",
                          {
                            staticClass:
                              "mdui-icon material-icons content-space-icon",
                            style: { color: val.backgroundColor }
                          },
                          [_vm._v(_vm._s(val.icon))]
                        )
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
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mdui-card-primary-title mdui-text-color-red-300"
                              },
                              [
                                _c("number-grow", { attrs: { value: val.sum } })
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
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "order-notify" }, [
        _c(
          "div",
          {
            class: {
              "mdui-toolbar": true,
              "mdui-color-pink": _vm.order_notify.length > 0,
              "mdui-color-green": _vm.order_notify.length <= 0
            }
          },
          [
            _c("a", { staticClass: "mdui-btn mdui-btn-icon" }, [
              _c("i", { staticClass: "mdui-icon material-icons" }, [
                _vm._v("error_outline")
              ])
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                attrs: {
                  title:
                    "此数据为最新20条，详情请在订单管理中筛选查看，请及时处理"
                }
              },
              [_vm._v("支付成功但未成功通知商户订单")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-toolbar-spacer" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "mdui-btn mdui-btn-icon",
                on: { click: _vm.order_unnotify }
              },
              [
                _c("i", { staticClass: "mdui-icon material-icons" }, [
                  _vm._v("refresh")
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("table", { staticClass: "mdui-table" }, [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("订单ID")]),
              _vm._v(" "),
              _c("th", [_vm._v("订单号")]),
              _vm._v(" "),
              _c("th", [_vm._v("金额(分)")]),
              _vm._v(" "),
              _c("th", [_vm._v("支付时间")]),
              _vm._v(" "),
              _c("th", [_vm._v("状态")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm.order_notify.length > 0
                ? _vm._l(_vm.order_notify, function(val, key) {
                    return _c("tr", [
                      _c("td", { domProps: { textContent: _vm._s(val.id) } }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.order_no) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.amount) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.pay_time) }
                      }),
                      _vm._v(" "),
                      _c("td", [_vm._v("待通知")])
                    ])
                  })
                : _vm._e(),
              _vm._v(" "),
              [
                _c("tr", [
                  _c(
                    "td",
                    {
                      staticClass: "mdui-p-y-2 mdui-text-center",
                      attrs: { colspan: "5" }
                    },
                    [
                      _c("div", [
                        _c("span", { staticClass: "mdui-m-r-1" }, [
                          _vm._v("通知正常工作")
                        ]),
                        _c(
                          "i",
                          {
                            staticClass:
                              "mdui-icon material-icons mdui-text-color-pink order-notify-clear"
                          },
                          [_vm._v("sentiment_satisfied")]
                        )
                      ])
                    ]
                  )
                ])
              ]
            ],
            2
          )
        ])
      ])
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
var __vue_template__ = __webpack_require__(350)
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