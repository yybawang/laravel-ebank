webpackJsonp([2],{

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("43593b09", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef1ec1e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef1ec1e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.card[data-v-3ef1ec1e] {\n  min-width: 160px;\n}\n.content-space[data-v-3ef1ec1e] {\n  padding: 0 0.5rem;\n  height: 7.3rem;\n  text-align: right;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.content-space-icon[data-v-3ef1ec1e] {\n  font-size: 3rem;\n}\n.fade-enter-active[data-v-3ef1ec1e] {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n}\n.fade-enter[data-v-3ef1ec1e], .fade-leave-to[data-v-3ef1ec1e] {\n  opacity: 0;\n}\n.order-notify-clear[data-v-3ef1ec1e] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NumberGrow__ = __webpack_require__(342);
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
			sum_today: {
				today_unified_count: {
					"name": "支付订单数量",
					"sum": '',
					"icon": "trending_up",
					"title": "已支付并且有效的订单",
					"backgroundColor": "#F0AD4E"
				},
				today_unified_amount: {
					"name": "支付订单金额",
					"sum": '',
					"icon": "account_balance",
					"title": "已支付并且有效的订单",
					"backgroundColor": "#F0AD4E"
				},
				today_unified_un_pay_count: {
					"name": "待支付数量",
					"sum": '',
					"icon": "trending_up",
					"title": "未支付的新订单",
					"backgroundColor": "#F0AD4E"
				},
				today_unified_un_pay_amount: {
					"name": "待支付金额",
					"sum": '',
					"icon": "account_balance",
					"title": "未支付的新订单",
					"backgroundColor": "#F0AD4E"
				},
				today_withdraw_count: {
					"name": "提现数量",
					"sum": '',
					"icon": "trending_up",
					"title": "申请提现成功",
					"backgroundColor": "#00A98E"
				},
				today_withdraw_amount: {
					"name": "提现金额",
					"sum": '',
					"icon": "account_balance_wallet",
					"title": "申请提现成功",
					"backgroundColor": "#00A98E"
				},
				today_withdraw_un_count: {
					"name": "提现待处理数量",
					"sum": '',
					"icon": "trending_up",
					"title": "申请提现中",
					"backgroundColor": "#5CB85C"
				},
				today_withdraw_un_amount: {
					"name": "提现待处理金额",
					"sum": '',
					"icon": "account_balance_wallet",
					"title": "申请提现中",
					"backgroundColor": "#5CB85C"
				},
				today_new_user_count: {
					"name": "用户新增",
					"sum": '',
					"icon": "person",
					"title": "新钱包数据",
					"backgroundColor": "#337AB7"
				},
				today_transfer: {
					"name": "流水记录",
					"sum": '',
					"icon": "swap_horiz",
					"title": "有效转账记录",
					"backgroundColor": "#32C24D"
				},
				today_behavior_count: {
					"name": "接口调用",
					"sum": '',
					"icon": "check_circle",
					"title": "商户API请求次数",
					"backgroundColor": "#4CAF50"
				},
				today_behavior_error_count: {
					"name": "接口错误",
					"sum": '',
					"icon": "bug_report",
					"title": "商户API未成功返回",
					"backgroundColor": "#D9534F"
				}
			},
			sum_yesterday: {
				yesterday_unified_count: {
					"name": "支付订单数量",
					"sum": '',
					"icon": "trending_up",
					"title": "已支付并且有效的订单",
					"backgroundColor": "#F0AD4E"
				},
				yesterday_unified_amount: {
					"name": "支付订单金额",
					"sum": '',
					"icon": "account_balance",
					"title": "已支付并且有效的订单",
					"backgroundColor": "#F0AD4E"
				},
				yesterday_unified_un_pay_count: {
					"name": "待支付数量",
					"sum": '',
					"icon": "trending_up",
					"title": "未支付的新订单",
					"backgroundColor": "#F0AD4E"
				},
				yesterday_unified_un_pay_amount: {
					"name": "待支付金额",
					"sum": '',
					"icon": "account_balance",
					"title": "未支付的新订单",
					"backgroundColor": "#F0AD4E"
				},
				yesterday_withdraw_count: {
					"name": "提现数量",
					"sum": '',
					"icon": "trending_up",
					"title": "申请提现成功",
					"backgroundColor": "#00A98E"
				},
				yesterday_withdraw_amount: {
					"name": "提现金额",
					"sum": '',
					"icon": "account_balance_wallet",
					"title": "申请提现成功",
					"backgroundColor": "#00A98E"
				},
				yesterday_withdraw_un_count: {
					"name": "提现待处理数量",
					"sum": '',
					"icon": "trending_up",
					"title": "申请提现中",
					"backgroundColor": "#5CB85C"
				},
				yesterday_withdraw_un_amount: {
					"name": "提现待处理金额",
					"sum": '',
					"icon": "account_balance_wallet",
					"title": "申请提现中",
					"backgroundColor": "#5CB85C"
				},
				yesterday_new_user_count: {
					"name": "用户新增",
					"sum": '',
					"icon": "person",
					"title": "新钱包数据",
					"backgroundColor": "#337AB7"
				},
				yesterday_transfer: {
					"name": "流水记录",
					"sum": '',
					"icon": "swap_horiz",
					"title": "有效转账记录",
					"backgroundColor": "#32C24D"
				},
				yesterday_behavior_count: {
					"name": "接口调用",
					"sum": '',
					"icon": "check_circle",
					"title": "商户API请求次数",
					"backgroundColor": "#4CAF50"
				},
				yesterday_behavior_error_count: {
					"name": "接口错误",
					"sum": '',
					"icon": "bug_report",
					"title": "商户API未成功返回",
					"backgroundColor": "#D9534F"
				}
			},
			order_notify: []
		};
	},

	methods: {
		order_unnotify: function order_unnotify() {
			var t = this;
			t.$API.get('/index/order_unnotify').then(function (data) {
				t.order_notify = data;
			}).catch(function (msg) {});
		},
		today: function today() {
			var t = this;
			t.$API.get('/index/sum_today').then(function (data) {
				for (var i in t.sum_today) {
					t.sum_today[i].sum = data[i].sum;
				}
			}).catch(function (msg) {});
		},
		yesterday: function yesterday() {
			var t = this;
			t.$API.get('/index/sum_yesterday').then(function (data) {
				for (var i in t.sum_yesterday) {
					t.sum_yesterday[i].sum = data[i].sum;
				}
			}).catch(function (msg) {});
		},
		notify: function notify(id) {
			var t = this;
			mdui.confirm('请求重新进入通知队列，如果多次失败请检查队列(queue)服务配置，点击【确定】继续', '手动发起异步通知', function () {
				t.$API.post('/order/notify', { id: id }).then(function (data) {
					mdui.alert("已重新分发通知任务", function () {}, { history: false });
					t.order_unnotify();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		}
	},
	mounted: function mounted() {
		this.today();
		this.yesterday();
		this.order_unnotify();
	},

	components: {
		NumberGrow: __WEBPACK_IMPORTED_MODULE_0__NumberGrow___default.a
	}
});

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(343)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(345)
/* template */
var __vue_template__ = __webpack_require__(346)
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
Component.options.__file = "resources/assets/js/components/NumberGrow.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8bd1031a", Component.options)
  } else {
    hotAPI.reload("data-v-8bd1031a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3832398f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bd1031a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NumberGrow.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bd1031a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NumberGrow.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.number-grow-warp{\n\t-webkit-transform: translateZ(0);\n\t        transform: translateZ(0);\n}\n", ""]);

// exports


/***/ }),

/***/ 345:
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

/***/ 346:
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
    require("vue-hot-reload-api")      .rerender("data-v-8bd1031a", module.exports)
  }
}

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { appear: "", name: "fade" } }, [
    _c("div", { staticClass: "welcome" }, [
      _c("div", { staticClass: "mdui-toolbar mdui-color-teal" }, [
        _c("i", { staticClass: "mdui-icon material-icons" }, [
          _vm._v("visibility")
        ]),
        _vm._v(" "),
        _c("span", [_vm._v("今日实时数据统计")]),
        _vm._v(" "),
        _c("div", { staticClass: "mdui-toolbar-spacer" }),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-btn-icon",
            on: { click: _vm.today }
          },
          [
            _c("i", { staticClass: "mdui-icon material-icons" }, [
              _vm._v("refresh")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm.sum_today
        ? _c("div", { staticClass: "card-group mdui-p-t-2" }, [
            _c(
              "div",
              {
                staticClass:
                  "mdui-row-xs-2 mdui-row-sm-3 mdui-row-md-4 mdui-row-lg-5 mdui-row-xl-6"
              },
              _vm._l(_vm.sum_today, function(val, key) {
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
      _c("div", { staticClass: "mdui-toolbar mdui-color-indigo" }, [
        _c("i", { staticClass: "mdui-icon material-icons" }, [_vm._v("save")]),
        _vm._v(" "),
        _c("span", [_vm._v("昨日数据统计")]),
        _vm._v(" "),
        _c("div", { staticClass: "mdui-toolbar-spacer" })
      ]),
      _vm._v(" "),
      _vm.sum_yesterday
        ? _c("div", { staticClass: "card-group mdui-p-t-2" }, [
            _c(
              "div",
              {
                staticClass:
                  "mdui-row-xs-2 mdui-row-sm-3 mdui-row-md-4 mdui-row-lg-5 mdui-row-xl-6"
              },
              _vm._l(_vm.sum_yesterday, function(val, key) {
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
                staticClass: "mdui-btn mdui-ripple mdui-btn-icon",
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
        _c("div", { staticClass: "mdui-table-fluid" }, [
          _c("table", { staticClass: "mdui-table mdui-table-hoverable" }, [
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
                _c("th", [_vm._v("操作")])
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
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass:
                                "mdui-btn mdui-ripple mdui-color-pink",
                              on: {
                                click: function($event) {
                                  _vm.notify(val.id)
                                }
                              }
                            },
                            [_vm._v("手动通知")]
                          )
                        ])
                      ])
                    })
                  : [
                      _c("tr", [
                        _c("td", { attrs: { colspan: "5" } }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "mdui-p-y-2 mdui-valign order-notify-clear"
                            },
                            [
                              _c("span", { staticClass: "mdui-m-r-1" }, [
                                _vm._v("服务正常工作中")
                              ]),
                              _c(
                                "i",
                                {
                                  staticClass:
                                    "mdui-icon material-icons mdui-text-color-orange"
                                },
                                [_vm._v("sentiment_satisfied")]
                              )
                            ]
                          )
                        ])
                      ])
                    ]
              ],
              2
            )
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-3ef1ec1e", module.exports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(339)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(341)
/* template */
var __vue_template__ = __webpack_require__(347)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ef1ec1e"
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
Component.options.__file = "resources/assets/js/components/index/welcome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ef1ec1e", Component.options)
  } else {
    hotAPI.reload("data-v-3ef1ec1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});