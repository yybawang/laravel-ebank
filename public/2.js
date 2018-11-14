webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/NumberGrow.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/index/welcome.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NumberGrow__ = __webpack_require__("./resources/assets/js/components/NumberGrow.vue");
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

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef1ec1e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/index/welcome.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.card[data-v-3ef1ec1e] {\n  min-width: 180px;\n}\n.content-space[data-v-3ef1ec1e] {\n  padding: 0 0.5rem;\n  height: 7.3rem;\n  text-align: right;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.content-space-icon[data-v-3ef1ec1e] {\n  font-size: 3rem;\n}\n.fade-enter-active[data-v-3ef1ec1e] {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n}\n.fade-enter[data-v-3ef1ec1e], .fade-leave-to[data-v-3ef1ec1e] {\n  opacity: 0;\n}\n.order-notify-clear[data-v-3ef1ec1e] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", "", {"version":3,"sources":["/var/www/ebank/resources/assets/js/components/index/welcome.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;CAAE;AAErB;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,sBAA0B;MAA1B,mBAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,gBAAgB;CAAE;AAEpB;EACE,+BAAuB;EAAvB,uBAAuB;CAAE;AAE3B;EACE,WAAW;CAAE;AAEf;EACE,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE","file":"welcome.vue","sourcesContent":[".card {\n  min-width: 180px; }\n\n.content-space {\n  padding: 0 0.5rem;\n  height: 7.3rem;\n  text-align: right;\n  justify-content: flex-end; }\n\n.content-space-icon {\n  font-size: 3rem; }\n\n.fade-enter-active {\n  transition: opacity 1s; }\n\n.fade-enter, .fade-leave-to {\n  opacity: 0; }\n\n.order-notify-clear {\n  justify-content: center; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bd1031a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/NumberGrow.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.number-grow-warp{\n\t-webkit-transform: translateZ(0);\n\t        transform: translateZ(0);\n}\n", "", {"version":3,"sources":["/var/www/ebank/resources/assets/js/components/resources/assets/js/components/NumberGrow.vue"],"names":[],"mappings":";AAgDA;CACA,iCAAA;SAAA,yBAAA;CACA","file":"NumberGrow.vue","sourcesContent":["<template>\n\t<div class=\"number-grow-warp\">\n\t\t<span ref=\"numberGrow\" :data-time=\"time\" class=\"number-grow\" :data-value=\"value\" v-text=\"number\"></span>\n\t</div>\n</template>\n\n<script>\n\texport default {\n\t\tprops: {\n\t\t\ttime: {\n\t\t\t\ttype: Number,\n\t\t\t\tdefault: 1\n\t\t\t},\n\t\t\tvalue: ''\n\t\t},\n\t\tdata (){\n\t\t\treturn {\n\t\t\t\tnumber : '--',\n\t\t\t}\n\t\t},\n\t\twatch : {\n\t\t\tvalue : function(n,o){\n\t\t\t\tthis.numberGrow();\n\t\t\t}\n\t\t},\n\t\tmethods: {\n\t\t\tnumberGrow () {\n\t\t\t\tif(this.value === ''){\n\t\t\t\t\treturn ;\n\t\t\t\t}\n\t\t\t\tlet _this = this,point = _this.value.toString().split('.')[1] || 0,point_length = point.length;\n\t\t\t\tlet step = ((_this.value * 10) / (_this.time * 1000));\n\t\t\t\tlet start = 0;\n\t\t\t\tlet t = setInterval(function () {\n\t\t\t\t\tstart += step;\n\t\t\t\t\tif (start >= _this.value) {\n\t\t\t\t\t\t_this.number = _this.value;\n\t\t\t\t\t\tclearInterval(t);\n\t\t\t\t\t\treturn\n\t\t\t\t\t}\n\t\t\t\t\t_this.number = start.toFixed(point_length).toString().replace(/(\\d)(?=(?:\\d{3}[+]?)+$)/g, '$1,')\n\t\t\t\t}, 10)\n\t\t\t}\n\t\t},\n\t}\n</script>\n\n<style>\n\t.number-grow-warp{\n\t\ttransform: translateZ(0);\n\t}\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ef1ec1e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/index/welcome.vue":
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
                            staticClass: "mdui-btn mdui-ripple mdui-color-pink",
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8bd1031a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/NumberGrow.vue":
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef1ec1e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/index/welcome.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef1ec1e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/index/welcome.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1985f7ab", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef1ec1e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef1ec1e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bd1031a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/NumberGrow.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bd1031a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/NumberGrow.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("73cc4d26", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bd1031a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NumberGrow.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bd1031a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NumberGrow.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/NumberGrow.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bd1031a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/NumberGrow.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/NumberGrow.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8bd1031a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/NumberGrow.vue")
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

/***/ "./resources/assets/js/components/index/welcome.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef1ec1e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/index/welcome.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/index/welcome.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ef1ec1e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/index/welcome.vue")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXgvd2VsY29tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlPzI5MGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlPzQxYmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlP2JlNmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlPzYzZTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlP2ZkMjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlPzM4NWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9pbmRleC93ZWxjb21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUZBLEdBREE7QUFLQTtBQUxBLEVBREE7QUFRQSxLQVJBLGtCQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0EsRUFaQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLEVBYkE7QUFrQkE7QUFDQSxZQURBLHdCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFD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QU8sQ0FBQyxrWUFBZ1Y7QUFDN1c7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyx5UEFBME87QUFDelE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsMFhBQThSO0FBQ3hTO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMscVlBQWdWO0FBQzdXO0FBQ0EsdUJBQXVCLG1CQUFPLENBQUMsMlBBQTRPO0FBQzNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwibnVtYmVyLWdyb3ctd2FycFwiPlxuXHRcdDxzcGFuIHJlZj1cIm51bWJlckdyb3dcIiA6ZGF0YS10aW1lPVwidGltZVwiIGNsYXNzPVwibnVtYmVyLWdyb3dcIiA6ZGF0YS12YWx1ZT1cInZhbHVlXCIgdi10ZXh0PVwibnVtYmVyXCI+PC9zcGFuPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0dGltZToge1xuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6IDFcblx0XHRcdH0sXG5cdFx0XHR2YWx1ZTogJydcblx0XHR9LFxuXHRcdGRhdGEgKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRudW1iZXIgOiAnLS0nLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0d2F0Y2ggOiB7XG5cdFx0XHR2YWx1ZSA6IGZ1bmN0aW9uKG4sbyl7XG5cdFx0XHRcdHRoaXMubnVtYmVyR3JvdygpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0bnVtYmVyR3JvdyAoKSB7XG5cdFx0XHRcdGlmKHRoaXMudmFsdWUgPT09ICcnKXtcblx0XHRcdFx0XHRyZXR1cm4gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXMscG9pbnQgPSBfdGhpcy52YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0gfHwgMCxwb2ludF9sZW5ndGggPSBwb2ludC5sZW5ndGg7XG5cdFx0XHRcdGxldCBzdGVwID0gKChfdGhpcy52YWx1ZSAqIDEwKSAvIChfdGhpcy50aW1lICogMTAwMCkpO1xuXHRcdFx0XHRsZXQgc3RhcnQgPSAwO1xuXHRcdFx0XHRsZXQgdCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzdGFydCArPSBzdGVwO1xuXHRcdFx0XHRcdGlmIChzdGFydCA+PSBfdGhpcy52YWx1ZSkge1xuXHRcdFx0XHRcdFx0X3RoaXMubnVtYmVyID0gX3RoaXMudmFsdWU7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF90aGlzLm51bWJlciA9IHN0YXJ0LnRvRml4ZWQocG9pbnRfbGVuZ3RoKS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KD86XFxkezN9WytdPykrJCkvZywgJyQxLCcpXG5cdFx0XHRcdH0sIDEwKVxuXHRcdFx0fVxuXHRcdH0sXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5udW1iZXItZ3Jvdy13YXJwe1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblx0fVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlIiwiPHRlbXBsYXRlPlxuXHQ8dHJhbnNpdGlvbiBhcHBlYXIgbmFtZT1cImZhZGVcIj5cblx0PGRpdiBjbGFzcz1cIndlbGNvbWVcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10b29sYmFyIG1kdWktY29sb3ItdGVhbFwiPlxuXHRcdFx0PGkgY2xhc3M9XCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9pPlxuXHRcdFx0PHNwYW4+5LuK5pel5a6e5pe25pWw5o2u57uf6K6hPC9zcGFuPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdG9vbGJhci1zcGFjZXJcIj48L2Rpdj5cblx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1idG4taWNvblwiIEBjbGljaz1cInRvZGF5XCI+XG5cdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+cmVmcmVzaDwvaT5cblx0XHRcdDwvYT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1ncm91cCBtZHVpLXAtdC0yXCIgdi1pZj1cInN1bV90b2RheVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktcm93LXhzLTIgbWR1aS1yb3ctc20tMyBtZHVpLXJvdy1tZC00IG1kdWktcm93LWxnLTUgbWR1aS1yb3cteGwtNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb2xcIiB2LWZvcj1cIih2YWwsa2V5KSBvZiBzdW1fdG9kYXlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkIG1kdWktbS1iLTIgY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZC1tZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS12YWxpZ24gY29udGVudC1zcGFjZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zIGNvbnRlbnQtc3BhY2UtaWNvblwiIDpzdHlsZT1cIntjb2xvcjp2YWwuYmFja2dyb3VuZENvbG9yfVwiPnt7dmFsLmljb259fTwvaT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtbWVkaWEtY292ZXJlZCBtZHVpLWNhcmQtbWVkaWEtY292ZXJlZC10cmFuc3BhcmVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtcHJpbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZC1wcmltYXJ5LXRpdGxlIG1kdWktdGV4dC1jb2xvci1yZWQtMzAwXCI+PG51bWJlci1ncm93IDp2YWx1ZT1cInZhbC5zdW1cIj48L251bWJlci1ncm93PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZC1wcmltYXJ5LXN1YnRpdGxlIG1kdWktdGV4dC1jb2xvci1ibGFja1wiIHYtdGV4dD1cInZhbC5uYW1lXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10eXBvLWNhcHRpb24gbWR1aS10eXBvLWNhcHRpb24tb3BhY2l0eSBtZHVpLXRleHQtY29sb3ItZ3JleS03MDBcIiB2LXRleHQ9XCJ2YWwudGl0bGVcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10b29sYmFyIG1kdWktY29sb3ItaW5kaWdvXCI+XG5cdFx0XHQ8aSBjbGFzcz1cIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnNhdmU8L2k+XG5cdFx0XHQ8c3Bhbj7mmKjml6XmlbDmja7nu5/orqE8L3NwYW4+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10b29sYmFyLXNwYWNlclwiPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjYXJkLWdyb3VwIG1kdWktcC10LTJcIiB2LWlmPVwic3VtX3llc3RlcmRheVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktcm93LXhzLTIgbWR1aS1yb3ctc20tMyBtZHVpLXJvdy1tZC00IG1kdWktcm93LWxnLTUgbWR1aS1yb3cteGwtNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb2xcIiB2LWZvcj1cIih2YWwsa2V5KSBvZiBzdW1feWVzdGVyZGF5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZCBtZHVpLW0tYi0yIGNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdmFsaWduIGNvbnRlbnQtc3BhY2VcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktaWNvbiBtYXRlcmlhbC1pY29ucyBjb250ZW50LXNwYWNlLWljb25cIiA6c3R5bGU9XCJ7Y29sb3I6dmFsLmJhY2tncm91bmRDb2xvcn1cIj57e3ZhbC5pY29ufX08L2k+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLW1lZGlhLWNvdmVyZWQgbWR1aS1jYXJkLW1lZGlhLWNvdmVyZWQtdHJhbnNwYXJlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLXByaW1hcnlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtcHJpbWFyeS10aXRsZSBtZHVpLXRleHQtY29sb3ItcmVkLTMwMFwiPjxudW1iZXItZ3JvdyA6dmFsdWU9XCJ2YWwuc3VtXCI+PC9udW1iZXItZ3Jvdz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtcHJpbWFyeS1zdWJ0aXRsZSBtZHVpLXRleHQtY29sb3ItYmxhY2tcIiB2LXRleHQ9XCJ2YWwubmFtZVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdHlwby1jYXB0aW9uIG1kdWktdHlwby1jYXB0aW9uLW9wYWNpdHkgbWR1aS10ZXh0LWNvbG9yLWdyZXktNzAwXCIgdi10ZXh0PVwidmFsLnRpdGxlXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cIm9yZGVyLW5vdGlmeVwiPlxuXHRcdFx0PGRpdiA6Y2xhc3M9XCJ7J21kdWktdG9vbGJhcic6dHJ1ZSwgJ21kdWktY29sb3ItcGluayc6b3JkZXJfbm90aWZ5Lmxlbmd0aCA+IDAsJ21kdWktY29sb3ItZ3JlZW4nOm9yZGVyX25vdGlmeS5sZW5ndGggPD0gMH1cIj5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLWJ0bi1pY29uXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPjwvYT5cblx0XHRcdFx0PHNwYW4gdGl0bGU9XCLmraTmlbDmja7kuLrmnIDmlrAyMOadoe+8jOivpuaDheivt+WcqOiuouWNleeuoeeQhuS4reetm+mAieafpeeci++8jOivt+WPiuaXtuWkhOeQhlwiPuaUr+S7mOaIkOWKn+S9huacquaIkOWKn+mAmuefpeWVhuaIt+iuouWNlTwvc3Bhbj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdG9vbGJhci1zcGFjZXJcIj48L2Rpdj5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWJ0bi1pY29uXCIgQGNsaWNrPVwib3JkZXJfdW5ub3RpZnlcIj5cblx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnJlZnJlc2g8L2k+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHRhYmxlIGNsYXNzPVwibWR1aS10YWJsZVwiPlxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGg+6K6i5Y2VSUQ8L3RoPlxuXHRcdFx0XHRcdDx0aD7orqLljZXlj7c8L3RoPlxuXHRcdFx0XHRcdDx0aD7ph5Hpop0o5YiGKTwvdGg+XG5cdFx0XHRcdFx0PHRoPuaUr+S7mOaXtumXtDwvdGg+XG5cdFx0XHRcdFx0PHRoPuaTjeS9nDwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJvcmRlcl9ub3RpZnkubGVuZ3RoID4gMFwiPlxuXHRcdFx0XHQ8dHIgdi1mb3I9XCIodmFsLGtleSkgb2Ygb3JkZXJfbm90aWZ5XCI+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5pZFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5vcmRlcl9ub1wiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5hbW91bnRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucGF5X3RpbWVcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZD48YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItcGlua1wiIEBjbGljaz1cIm5vdGlmeSh2YWwuaWQpXCI+5omL5Yqo6YCa55+lPC9hPjwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWVsc2U+XG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGQgY29sc3Bhbj1cIjVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXAteS0yIG1kdWktdmFsaWduIG9yZGVyLW5vdGlmeS1jbGVhclwiPjxzcGFuIGNsYXNzPVwibWR1aS1tLXItMVwiPuacjeWKoeato+W4uOW3peS9nOS4rTwvc3Bhbj48aSBjbGFzcz1cIm1kdWktaWNvbiBtYXRlcmlhbC1pY29ucyBtZHVpLXRleHQtY29sb3Itb3JhbmdlXCI+c2VudGltZW50X3NhdGlzZmllZDwvaT48L2Rpdj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cdDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRpbXBvcnQgTnVtYmVyR3JvdyBmcm9tICcuLi9OdW1iZXJHcm93Jztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN1bV90b2RheSA6IHtcblx0XHRcdFx0XHR0b2RheV91bmlmaWVkX2NvdW50IDoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwi5pSv5LuY6K6i5Y2V5pWw6YePXCIsXG5cdFx0XHRcdFx0XHRcInN1bVwiOiAnJyxcblx0XHRcdFx0XHRcdFwiaWNvblwiOiBcInRyZW5kaW5nX3VwXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5bey5pSv5LuY5bm25LiU5pyJ5pWI55qE6K6i5Y2VXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGMEFENEVcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dG9kYXlfdW5pZmllZF9hbW91bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmlK/ku5jorqLljZXph5Hpop1cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwiYWNjb3VudF9iYWxhbmNlXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5bey5pSv5LuY5bm25LiU5pyJ5pWI55qE6K6i5Y2VXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGMEFENEVcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dG9kYXlfdW5pZmllZF91bl9wYXlfY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLlvoXmlK/ku5jmlbDph49cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwidHJlbmRpbmdfdXBcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLmnKrmlK/ku5jnmoTmlrDorqLljZVcIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0YwQUQ0RVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0b2RheV91bmlmaWVkX3VuX3BheV9hbW91bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLlvoXmlK/ku5jph5Hpop1cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwiYWNjb3VudF9iYWxhbmNlXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5pyq5pSv5LuY55qE5paw6K6i5Y2VXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGMEFENEVcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dG9kYXlfd2l0aGRyYXdfY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmj5DnjrDmlbDph49cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwidHJlbmRpbmdfdXBcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLnlLPor7fmj5DnjrDmiJDlip9cIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwQTk4RVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0b2RheV93aXRoZHJhd19hbW91bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmj5DnjrDph5Hpop1cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwiYWNjb3VudF9iYWxhbmNlX3dhbGxldFwiLFxuXHRcdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIueUs+ivt+aPkOeOsOaIkOWKn1wiLFxuXHRcdFx0XHRcdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDBBOThFXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRvZGF5X3dpdGhkcmF3X3VuX2NvdW50IDoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwi5o+Q546w5b6F5aSE55CG5pWw6YePXCIsXG5cdFx0XHRcdFx0XHRcInN1bVwiOiAnJyxcblx0XHRcdFx0XHRcdFwiaWNvblwiOiBcInRyZW5kaW5nX3VwXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi55Sz6K+35o+Q546w5LitXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiM1Q0I4NUNcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dG9kYXlfd2l0aGRyYXdfdW5fYW1vdW50IDoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwi5o+Q546w5b6F5aSE55CG6YeR6aKdXCIsXG5cdFx0XHRcdFx0XHRcInN1bVwiOiAnJyxcblx0XHRcdFx0XHRcdFwiaWNvblwiOiBcImFjY291bnRfYmFsYW5jZV93YWxsZXRcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLnlLPor7fmj5DnjrDkuK1cIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzVDQjg1Q1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0b2RheV9uZXdfdXNlcl9jb3VudCA6IHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIueUqOaIt+aWsOWinlwiLFxuXHRcdFx0XHRcdFx0XCJzdW1cIjogJycsXG5cdFx0XHRcdFx0XHRcImljb25cIjogXCJwZXJzb25cIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLmlrDpkrHljIXmlbDmja5cIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzMzN0FCN1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0b2RheV90cmFuc2ZlciA6IHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIua1geawtOiusOW9lVwiLFxuXHRcdFx0XHRcdFx0XCJzdW1cIjogJycsXG5cdFx0XHRcdFx0XHRcImljb25cIjogXCJzd2FwX2hvcml6XCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5pyJ5pWI6L2s6LSm6K6w5b2VXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiMzMkMyNERcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dG9kYXlfYmVoYXZpb3JfY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmjqXlj6PosIPnlKhcIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwiY2hlY2tfY2lyY2xlXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5ZWG5oi3QVBJ6K+35rGC5qyh5pWwXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiM0Q0FGNTBcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dG9kYXlfYmVoYXZpb3JfZXJyb3JfY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmjqXlj6PplJnor69cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwiYnVnX3JlcG9ydFwiLFxuXHRcdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuWVhuaIt0FQSeacquaIkOWKn+i/lOWbnlwiLFxuXHRcdFx0XHRcdFx0XCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRDk1MzRGXCJcblx0XHRcdFx0XHR9LFxuXHRcdH0sXG5cdFx0XHRcdHN1bV95ZXN0ZXJkYXkgOiB7XG5cdFx0XHRcdFx0eWVzdGVyZGF5X3VuaWZpZWRfY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmlK/ku5jorqLljZXmlbDph49cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwidHJlbmRpbmdfdXBcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLlt7LmlK/ku5jlubbkuJTmnInmlYjnmoTorqLljZVcIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0YwQUQ0RVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR5ZXN0ZXJkYXlfdW5pZmllZF9hbW91bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmlK/ku5jorqLljZXph5Hpop1cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwiYWNjb3VudF9iYWxhbmNlXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5bey5pSv5LuY5bm25LiU5pyJ5pWI55qE6K6i5Y2VXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGMEFENEVcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0eWVzdGVyZGF5X3VuaWZpZWRfdW5fcGF5X2NvdW50IDoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwi5b6F5pSv5LuY5pWw6YePXCIsXG5cdFx0XHRcdFx0XHRcInN1bVwiOiAnJyxcblx0XHRcdFx0XHRcdFwiaWNvblwiOiBcInRyZW5kaW5nX3VwXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5pyq5pSv5LuY55qE5paw6K6i5Y2VXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiNGMEFENEVcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0eWVzdGVyZGF5X3VuaWZpZWRfdW5fcGF5X2Ftb3VudCA6IHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIuW+heaUr+S7mOmHkeminVwiLFxuXHRcdFx0XHRcdFx0XCJzdW1cIjogJycsXG5cdFx0XHRcdFx0XHRcImljb25cIjogXCJhY2NvdW50X2JhbGFuY2VcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLmnKrmlK/ku5jnmoTmlrDorqLljZVcIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0YwQUQ0RVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR5ZXN0ZXJkYXlfd2l0aGRyYXdfY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmj5DnjrDmlbDph49cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwidHJlbmRpbmdfdXBcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLnlLPor7fmj5DnjrDmiJDlip9cIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwQTk4RVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR5ZXN0ZXJkYXlfd2l0aGRyYXdfYW1vdW50IDoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwi5o+Q546w6YeR6aKdXCIsXG5cdFx0XHRcdFx0XHRcInN1bVwiOiAnJyxcblx0XHRcdFx0XHRcdFwiaWNvblwiOiBcImFjY291bnRfYmFsYW5jZV93YWxsZXRcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLnlLPor7fmj5DnjrDmiJDlip9cIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwQTk4RVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR5ZXN0ZXJkYXlfd2l0aGRyYXdfdW5fY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmj5DnjrDlvoXlpITnkIbmlbDph49cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwidHJlbmRpbmdfdXBcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLnlLPor7fmj5DnjrDkuK1cIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzVDQjg1Q1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR5ZXN0ZXJkYXlfd2l0aGRyYXdfdW5fYW1vdW50IDoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwi5o+Q546w5b6F5aSE55CG6YeR6aKdXCIsXG5cdFx0XHRcdFx0XHRcInN1bVwiOiAnJyxcblx0XHRcdFx0XHRcdFwiaWNvblwiOiBcImFjY291bnRfYmFsYW5jZV93YWxsZXRcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLnlLPor7fmj5DnjrDkuK1cIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzVDQjg1Q1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR5ZXN0ZXJkYXlfbmV3X3VzZXJfY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLnlKjmiLfmlrDlop5cIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwicGVyc29uXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5paw6ZKx5YyF5pWw5o2uXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiMzMzdBQjdcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0eWVzdGVyZGF5X3RyYW5zZmVyIDoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwi5rWB5rC06K6w5b2VXCIsXG5cdFx0XHRcdFx0XHRcInN1bVwiOiAnJyxcblx0XHRcdFx0XHRcdFwiaWNvblwiOiBcInN3YXBfaG9yaXpcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLmnInmlYjovazotKborrDlvZVcIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzMyQzI0RFwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR5ZXN0ZXJkYXlfYmVoYXZpb3JfY291bnQgOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCLmjqXlj6PosIPnlKhcIixcblx0XHRcdFx0XHRcdFwic3VtXCI6ICcnLFxuXHRcdFx0XHRcdFx0XCJpY29uXCI6IFwiY2hlY2tfY2lyY2xlXCIsXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5ZWG5oi3QVBJ6K+35rGC5qyh5pWwXCIsXG5cdFx0XHRcdFx0XHRcImJhY2tncm91bmRDb2xvclwiOiBcIiM0Q0FGNTBcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0eWVzdGVyZGF5X2JlaGF2aW9yX2Vycm9yX2NvdW50IDoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwi5o6l5Y+j6ZSZ6K+vXCIsXG5cdFx0XHRcdFx0XHRcInN1bVwiOiAnJyxcblx0XHRcdFx0XHRcdFwiaWNvblwiOiBcImJ1Z19yZXBvcnRcIixcblx0XHRcdFx0XHRcdFwidGl0bGVcIjogXCLllYbmiLdBUEnmnKrmiJDlip/ov5Tlm55cIixcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0Q5NTM0RlwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b3JkZXJfbm90aWZ5IDogW10sXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzIDoge1xuXHRcdFx0b3JkZXJfdW5ub3RpZnkoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvaW5kZXgvb3JkZXJfdW5ub3RpZnknKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHQub3JkZXJfbm90aWZ5ID0gZGF0YTtcblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24obXNnKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0dG9kYXkoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvaW5kZXgvc3VtX3RvZGF5JykudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHRmb3IobGV0IGkgaW4gdC5zdW1fdG9kYXkpe1xuXHRcdFx0XHRcdFx0dC5zdW1fdG9kYXlbaV0uc3VtID0gZGF0YVtpXS5zdW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHR5ZXN0ZXJkYXkoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvaW5kZXgvc3VtX3llc3RlcmRheScpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0Zm9yKGxldCBpIGluIHQuc3VtX3llc3RlcmRheSl7XG5cdFx0XHRcdFx0XHR0LnN1bV95ZXN0ZXJkYXlbaV0uc3VtID0gZGF0YVtpXS5zdW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRub3RpZnkoaWQpIHtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLmNvbmZpcm0oJ+ivt+axgumHjeaWsOi/m+WFpemAmuefpemYn+WIl++8jOWmguaenOWkmuasoeWksei0peivt+ajgOafpemYn+WIlyhxdWV1ZSnmnI3liqHphY3nva7vvIzngrnlh7vjgJDnoa7lrprjgJHnu6fnu60nLCAn5omL5Yqo5Y+R6LW35byC5q2l6YCa55+lJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHQuJEFQSS5wb3N0KCcvb3JkZXIvbm90aWZ5Jywge2lkOiBpZH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRcdG1kdWkuYWxlcnQoXCLlt7Lph43mlrDliIblj5HpgJrnn6Xku7vliqFcIiwgZnVuY3Rpb24gKCkge30sIHtoaXN0b3J5OiBmYWxzZX0pO1xuXHRcdFx0XHRcdFx0dC5vcmRlcl91bm5vdGlmeSgpO1xuXHRcdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgZnVuY3Rpb24gKCkge30sIHtoaXN0b3J5OiBmYWxzZSwgY29uZmlybVRleHQ6ICfnoa7lrponLCBjYW5jZWxUZXh0OiAn5Y+W5raIJ30pO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHRcdHRoaXMudG9kYXkoKTtcblx0XHRcdHRoaXMueWVzdGVyZGF5KCk7XG5cdFx0XHR0aGlzLm9yZGVyX3Vubm90aWZ5KCk7XG5cdFx0fSxcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHROdW1iZXJHcm93XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblx0LmNhcmQge1xuXHRcdG1pbi13aWR0aDoxODBweDtcblx0fVxuXHQuY29udGVudC1zcGFjZSB7XG5cdFx0cGFkZGluZzowIDAuNXJlbTtcblx0XHRoZWlnaHQ6Ny4zcmVtO1xuXHRcdHRleHQtYWxpZ246cmlnaHQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0fVxuXHQuY29udGVudC1zcGFjZS1pY29uIHtcblx0XHRmb250LXNpemU6M3JlbTtcblx0fVxuXHRcblx0LmZhZGUtZW50ZXItYWN0aXZle1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG5cdH1cblx0LmZhZGUtZW50ZXIsIC5mYWRlLWxlYXZlLXRvIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdC5vcmRlci1ub3RpZnktY2xlYXIge1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXgvd2VsY29tZS52dWUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRbZGF0YS12LTNlZjFlYzFlXSB7XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbn1cXG4uY29udGVudC1zcGFjZVtkYXRhLXYtM2VmMWVjMWVdIHtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgaGVpZ2h0OiA3LjNyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5jb250ZW50LXNwYWNlLWljb25bZGF0YS12LTNlZjFlYzFlXSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbi5mYWRlLWVudGVyLWFjdGl2ZVtkYXRhLXYtM2VmMWVjMWVdIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcbi5mYWRlLWVudGVyW2RhdGEtdi0zZWYxZWMxZV0sIC5mYWRlLWxlYXZlLXRvW2RhdGEtdi0zZWYxZWMxZV0ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLm9yZGVyLW5vdGlmeS1jbGVhcltkYXRhLXYtM2VmMWVjMWVdIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL3Zhci93d3cvZWJhbmsvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGlCQUFpQjtDQUFFO0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQTBCO01BQTFCLG1CQUEwQjtVQUExQiwwQkFBMEI7Q0FBRTtBQUU5QjtFQUNFLGdCQUFnQjtDQUFFO0FBRXBCO0VBQ0UsK0JBQXVCO0VBQXZCLHVCQUF1QjtDQUFFO0FBRTNCO0VBQ0UsV0FBVztDQUFFO0FBRWY7RUFDRSx5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtDQUFFXCIsXCJmaWxlXCI6XCJ3ZWxjb21lLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2FyZCB7XFxuICBtaW4td2lkdGg6IDE4MHB4OyB9XFxuXFxuLmNvbnRlbnQtc3BhY2Uge1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDcuM3JlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblxcbi5jb250ZW50LXNwYWNlLWljb24ge1xcbiAgZm9udC1zaXplOiAzcmVtOyB9XFxuXFxuLmZhZGUtZW50ZXItYWN0aXZlIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7IH1cXG5cXG4uZmFkZS1lbnRlciwgLmZhZGUtbGVhdmUtdG8ge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi5vcmRlci1ub3RpZnktY2xlYXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtM2VmMWVjMWVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXgvd2VsY29tZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTNlZjFlYzFlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubnVtYmVyLWdyb3ctd2FycHtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG5cXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi92YXIvd3d3L2ViYW5rL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTnVtYmVyR3Jvdy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdEQTtDQUNBLGlDQUFBO1NBQUEseUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTnVtYmVyR3Jvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcdDxkaXYgY2xhc3M9XFxcIm51bWJlci1ncm93LXdhcnBcXFwiPlxcblxcdFxcdDxzcGFuIHJlZj1cXFwibnVtYmVyR3Jvd1xcXCIgOmRhdGEtdGltZT1cXFwidGltZVxcXCIgY2xhc3M9XFxcIm51bWJlci1ncm93XFxcIiA6ZGF0YS12YWx1ZT1cXFwidmFsdWVcXFwiIHYtdGV4dD1cXFwibnVtYmVyXFxcIj48L3NwYW4+XFxuXFx0PC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcdGV4cG9ydCBkZWZhdWx0IHtcXG5cXHRcXHRwcm9wczoge1xcblxcdFxcdFxcdHRpbWU6IHtcXG5cXHRcXHRcXHRcXHR0eXBlOiBOdW1iZXIsXFxuXFx0XFx0XFx0XFx0ZGVmYXVsdDogMVxcblxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0dmFsdWU6ICcnXFxuXFx0XFx0fSxcXG5cXHRcXHRkYXRhICgpe1xcblxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0bnVtYmVyIDogJy0tJyxcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHR3YXRjaCA6IHtcXG5cXHRcXHRcXHR2YWx1ZSA6IGZ1bmN0aW9uKG4sbyl7XFxuXFx0XFx0XFx0XFx0dGhpcy5udW1iZXJHcm93KCk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0bWV0aG9kczoge1xcblxcdFxcdFxcdG51bWJlckdyb3cgKCkge1xcblxcdFxcdFxcdFxcdGlmKHRoaXMudmFsdWUgPT09ICcnKXtcXG5cXHRcXHRcXHRcXHRcXHRyZXR1cm4gO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHRsZXQgX3RoaXMgPSB0aGlzLHBvaW50ID0gX3RoaXMudmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdIHx8IDAscG9pbnRfbGVuZ3RoID0gcG9pbnQubGVuZ3RoO1xcblxcdFxcdFxcdFxcdGxldCBzdGVwID0gKChfdGhpcy52YWx1ZSAqIDEwKSAvIChfdGhpcy50aW1lICogMTAwMCkpO1xcblxcdFxcdFxcdFxcdGxldCBzdGFydCA9IDA7XFxuXFx0XFx0XFx0XFx0bGV0IHQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XFxuXFx0XFx0XFx0XFx0XFx0c3RhcnQgKz0gc3RlcDtcXG5cXHRcXHRcXHRcXHRcXHRpZiAoc3RhcnQgPj0gX3RoaXMudmFsdWUpIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRfdGhpcy5udW1iZXIgPSBfdGhpcy52YWx1ZTtcXG5cXHRcXHRcXHRcXHRcXHRcXHRjbGVhckludGVydmFsKHQpO1xcblxcdFxcdFxcdFxcdFxcdFxcdHJldHVyblxcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHRcXHRfdGhpcy5udW1iZXIgPSBzdGFydC50b0ZpeGVkKHBvaW50X2xlbmd0aCkudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxcXGQpKD89KD86XFxcXGR7M31bK10/KSskKS9nLCAnJDEsJylcXG5cXHRcXHRcXHRcXHR9LCAxMClcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHR9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcdC5udW1iZXItZ3Jvdy13YXJwe1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG5cXHR9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOGJkMTAzMWFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OdW1iZXJHcm93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOGJkMTAzMWFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OdW1iZXJHcm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IGFwcGVhcjogXCJcIiwgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3ZWxjb21lXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRvb2xiYXIgbWR1aS1jb2xvci10ZWFsXCIgfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwidmlzaWJpbGl0eVwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLku4rml6Xlrp7ml7bmlbDmja7nu5/orqFcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRvb2xiYXItc3BhY2VyXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktYnRuLWljb25cIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9kYXkgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJyZWZyZXNoXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnN1bV90b2RheVxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ncm91cCBtZHVpLXAtdC0yXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwibWR1aS1yb3cteHMtMiBtZHVpLXJvdy1zbS0zIG1kdWktcm93LW1kLTQgbWR1aS1yb3ctbGctNSBtZHVpLXJvdy14bC02XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdW1fdG9kYXksIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZCBtZHVpLW0tYi0yIGNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkLW1lZGlhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS12YWxpZ24gY29udGVudC1zcGFjZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnMgY29udGVudC1zcGFjZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IHZhbC5iYWNrZ3JvdW5kQ29sb3IgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2YWwuaWNvbikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktY2FyZC1tZWRpYS1jb3ZlcmVkIG1kdWktY2FyZC1tZWRpYS1jb3ZlcmVkLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktY2FyZC1wcmltYXJ5LXRpdGxlIG1kdWktdGV4dC1jb2xvci1yZWQtMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibnVtYmVyLWdyb3dcIiwgeyBhdHRyczogeyB2YWx1ZTogdmFsLnN1bSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWNhcmQtcHJpbWFyeS1zdWJ0aXRsZSBtZHVpLXRleHQtY29sb3ItYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLm5hbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktdHlwby1jYXB0aW9uIG1kdWktdHlwby1jYXB0aW9uLW9wYWNpdHkgbWR1aS10ZXh0LWNvbG9yLWdyZXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC50aXRsZSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRvb2xiYXIgbWR1aS1jb2xvci1pbmRpZ29cIiB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiIH0sIFtfdm0uX3YoXCJzYXZlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5pio5pel5pWw5o2u57uf6K6hXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10b29sYmFyLXNwYWNlclwiIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc3VtX3llc3RlcmRheVxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ncm91cCBtZHVpLXAtdC0yXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwibWR1aS1yb3cteHMtMiBtZHVpLXJvdy1zbS0zIG1kdWktcm93LW1kLTQgbWR1aS1yb3ctbGctNSBtZHVpLXJvdy14bC02XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdW1feWVzdGVyZGF5LCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNhcmQgbWR1aS1tLWItMiBjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1tZWRpYVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdmFsaWduIGNvbnRlbnQtc3BhY2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zIGNvbnRlbnQtc3BhY2UtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiB2YWwuYmFja2dyb3VuZENvbG9yIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModmFsLmljb24pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWNhcmQtbWVkaWEtY292ZXJlZCBtZHVpLWNhcmQtbWVkaWEtY292ZXJlZC10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1wcmltYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWNhcmQtcHJpbWFyeS10aXRsZSBtZHVpLXRleHQtY29sb3ItcmVkLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm51bWJlci1ncm93XCIsIHsgYXR0cnM6IHsgdmFsdWU6IHZhbC5zdW0gfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1jYXJkLXByaW1hcnktc3VidGl0bGUgbWR1aS10ZXh0LWNvbG9yLWJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5uYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLXR5cG8tY2FwdGlvbiBtZHVpLXR5cG8tY2FwdGlvbi1vcGFjaXR5IG1kdWktdGV4dC1jb2xvci1ncmV5LTcwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwudGl0bGUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3JkZXItbm90aWZ5XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgIFwibWR1aS10b29sYmFyXCI6IHRydWUsXG4gICAgICAgICAgICAgIFwibWR1aS1jb2xvci1waW5rXCI6IF92bS5vcmRlcl9ub3RpZnkubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgXCJtZHVpLWNvbG9yLWdyZWVuXCI6IF92bS5vcmRlcl9ub3RpZnkubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktYnRuLWljb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgIFwi5q2k5pWw5o2u5Li65pyA5pawMjDmnaHvvIzor6bmg4Xor7flnKjorqLljZXnrqHnkIbkuK3nrZvpgInmn6XnnIvvvIzor7flj4rml7blpITnkIZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuaUr+S7mOaIkOWKn+S9huacquaIkOWKn+mAmuefpeWVhuaIt+iuouWNlVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRvb2xiYXItc3BhY2VyXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1idG4taWNvblwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3JkZXJfdW5ub3RpZnkgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwicmVmcmVzaFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuiuouWNlUlEXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuiuouWNleWPt1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLph5Hpop0o5YiGKVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLmlK/ku5jml7bpl7RcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5pON5L2cXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLm9yZGVyX25vdGlmeS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfdm0uX2woX3ZtLm9yZGVyX25vdGlmeSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5pZCkgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwub3JkZXJfbm8pIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnBheV90aW1lKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItcGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3RpZnkodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaJi+WKqOmAmuefpVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiNVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1wLXktMiBtZHVpLXZhbGlnbiBvcmRlci1ub3RpZnktY2xlYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tLXItMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuacjeWKoeato+W4uOW3peS9nOS4rVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zIG1kdWktdGV4dC1jb2xvci1vcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJzZW50aW1lbnRfc2F0aXNmaWVkXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtM2VmMWVjMWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNlZjFlYzFlXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXgvd2VsY29tZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtM2VmMWVjMWVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9pbmRleC93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtYmVyLWdyb3ctd2FycFwiIH0sIFtcbiAgICBfYyhcInNwYW5cIiwge1xuICAgICAgcmVmOiBcIm51bWJlckdyb3dcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm51bWJlci1ncm93XCIsXG4gICAgICBhdHRyczogeyBcImRhdGEtdGltZVwiOiBfdm0udGltZSwgXCJkYXRhLXZhbHVlXCI6IF92bS52YWx1ZSB9LFxuICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ubnVtYmVyKSB9XG4gICAgfSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtOGJkMTAzMWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LThiZDEwMzFhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LThiZDEwMzFhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zZWYxZWMxZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxOTg1ZjdhYlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2VmMWVjMWVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi93ZWxjb21lLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zZWYxZWMxZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTNlZjFlYzFlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTNlZjFlYzFlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi04YmQxMDMxYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9OdW1iZXJHcm93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzNjYzRkMjZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LThiZDEwMzFhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL051bWJlckdyb3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LThiZDEwMzFhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL051bWJlckdyb3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LThiZDEwMzFhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTnVtYmVyR3Jvdy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOGJkMTAzMWFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OdW1iZXJHcm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LThiZDEwMzFhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL051bWJlckdyb3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL051bWJlckdyb3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04YmQxMDMxYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL051bWJlckdyb3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTnVtYmVyR3Jvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOGJkMTAzMWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04YmQxMDMxYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL051bWJlckdyb3cudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OdW1iZXJHcm93LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTNlZjFlYzFlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vd2VsY29tZS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vd2VsY29tZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNlZjFlYzFlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi93ZWxjb21lLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtM2VmMWVjMWVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNlZjFlYzFlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2VmMWVjMWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9pbmRleC93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXgvd2VsY29tZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==