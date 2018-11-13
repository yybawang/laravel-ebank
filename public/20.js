webpackJsonp([20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/order/index.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			merchant: '',
			order_type: '',
			purse_type: '',
			user_type: '',
			payment: '',
			payments: '',
			amount_sum: '',
			keyword: {
				page: 1,
				export: 0,
				user_id: '',
				order_no: '',
				merchant_id: [],
				order_type: [],
				purse_type_id: [],
				user_type_id: [],
				pay_status: [],
				notify_status: [],
				refund_status: [],
				payment: [],
				date: []
			},
			pay_status: ['未支付', '支付成功'],
			notify_status: ['未通知', '通知成功'],
			refund_status: ['未退款', '退款成功']
		};
	},

	methods: {
		search: function search(page) {
			this.keyword.page = page;
			this.keyword.export = 0;
			this.init();
		},
		exports: function exports() {
			this.keyword.export = 1;
			this.init();
		},
		complete: function complete(id) {
			var t = this;
			mdui.confirm('手动标记为支付成功并分发通知，是否收到款项需财务核实，点击【确定】继续', '三方支付漏单/掉单补回', function () {
				t.$API.post('/order/complete', { id: id }).then(function (data) {
					mdui.alert("操作完成，订单标记为已支付", function () {}, { history: false });
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		notify: function notify(id) {
			var t = this;
			mdui.confirm('异步通知会影响商户对支付的响应，可能造成多次结算等问题，知悉后点击【确定】继续', '手动发起异步通知', function () {
				t.$API.post('/order/notify', { id: id }).then(function (data) {
					mdui.alert("已重新分发通知任务", function () {}, { history: false });
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		refund: function refund(id, amount) {
			var t = this;
			mdui.prompt('退款金额会返还到下单用户的现金钱包余额中，请在下方输入【退款金额】。注意：输入单位为分', '订单总金额(分)：' + amount, function (value) {
				if (value) {
					t.$API.post('/order/refund', { id: id, amount: value }).then(function (data) {
						mdui.alert("退款成功，已完成系统到用户的转账操作，如产生奖励部分需手动冲正", function () {}, { history: false });
						t.init();
					}).catch(function (msg) {});
				}
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		init: function init() {
			var t = this;
			t.$API.get('/order/index', t.keyword).then(function (data) {
				t.list = data.list;
				t.merchant = data.merchant;
				t.purse_type = data.purse_type;
				t.user_type = data.user_type;
				t.order_type = data.order_type;
				t.payment = data.payment;
				t.payments = data.payments;
				t.amount_sum = data.amount_sum;
				if (t.keyword.export) {
					mdui.alert('可在左侧【导出任务】菜单查看任务状态并下载文件', '已放入导出任务', function () {}, { history: false });
				}
			}).catch(function (msg) {});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.init();
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7e4e2e0a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/order/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "order_index" }, [
    _c("div", { staticClass: "typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c("p", [
          _vm._v("\n\t\t\t\t订单号："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.order_no,
                expression: "keyword.order_no"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.order_no },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "order_no", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n\t\t\t\t下单用户ID："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.user_id,
                expression: "keyword.user_id"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.user_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "user_id", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t日期筛选："),
            _c("vue-datepicker-local", {
              attrs: { clearable: "" },
              model: {
                value: _vm.keyword.date,
                callback: function($$v) {
                  _vm.$set(_vm.keyword, "date", $$v)
                },
                expression: "keyword.date"
              }
            })
          ],
          1
        ),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t商　　户：\n\t\t\t\t"),
            _vm._l(_vm.merchant, function(name, id) {
              return _c(
                "label",
                {
                  staticClass: "mdui-checkbox",
                  staticStyle: { "margin-right": "2rem" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword.merchant_id,
                        expression: "keyword.merchant_id"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: id,
                      checked: Array.isArray(_vm.keyword.merchant_id)
                        ? _vm._i(_vm.keyword.merchant_id, id) > -1
                        : _vm.keyword.merchant_id
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.merchant_id,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "merchant_id",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "merchant_id",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "merchant_id", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "mdui-checkbox-icon" }),
                  _vm._v("\n\t\t\t\t\t" + _vm._s(name) + "\n\t\t\t\t")
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t订单类型：\n\t\t\t\t"),
            _vm._l(_vm.order_type, function(name, id) {
              return _c(
                "label",
                {
                  staticClass: "mdui-checkbox",
                  staticStyle: { "margin-right": "2rem" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword.order_type,
                        expression: "keyword.order_type"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: name,
                      checked: Array.isArray(_vm.keyword.order_type)
                        ? _vm._i(_vm.keyword.order_type, name) > -1
                        : _vm.keyword.order_type
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.order_type,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = name,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "order_type",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "order_type",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "order_type", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "mdui-checkbox-icon" }),
                  _vm._v("\n\t\t\t\t\t" + _vm._s(name) + "\n\t\t\t\t")
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t订单状态：\n\t\t\t\t"),
            _vm._l(_vm.pay_status, function(name, id) {
              return _c(
                "label",
                {
                  staticClass: "mdui-checkbox",
                  staticStyle: { "margin-right": "2rem" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword.pay_status,
                        expression: "keyword.pay_status"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: id,
                      checked: Array.isArray(_vm.keyword.pay_status)
                        ? _vm._i(_vm.keyword.pay_status, id) > -1
                        : _vm.keyword.pay_status
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.pay_status,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "pay_status",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "pay_status",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "pay_status", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "mdui-checkbox-icon" }),
                  _vm._v("\n\t\t\t\t\t" + _vm._s(name) + "\n\t\t\t\t")
                ]
              )
            }),
            _vm._v(" "),
            _vm._l(_vm.notify_status, function(name, id) {
              return _c(
                "label",
                {
                  staticClass: "mdui-checkbox",
                  staticStyle: { "margin-right": "2rem" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword.notify_status,
                        expression: "keyword.notify_status"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: id,
                      checked: Array.isArray(_vm.keyword.notify_status)
                        ? _vm._i(_vm.keyword.notify_status, id) > -1
                        : _vm.keyword.notify_status
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.notify_status,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "notify_status",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "notify_status",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "notify_status", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "mdui-checkbox-icon" }),
                  _vm._v("\n\t\t\t\t\t" + _vm._s(name) + "\n\t\t\t\t")
                ]
              )
            }),
            _vm._v(" "),
            _vm._l(_vm.refund_status, function(name, id) {
              return _c(
                "label",
                {
                  staticClass: "mdui-checkbox",
                  staticStyle: { "margin-right": "2rem" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword.refund_status,
                        expression: "keyword.refund_status"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: id,
                      checked: Array.isArray(_vm.keyword.refund_status)
                        ? _vm._i(_vm.keyword.refund_status, id) > -1
                        : _vm.keyword.refund_status
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.refund_status,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "refund_status",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "refund_status",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "refund_status", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "mdui-checkbox-icon" }),
                  _vm._v("\n\t\t\t\t\t" + _vm._s(name) + "\n\t\t\t\t")
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t支付类型：\n\t\t\t\t"),
            _vm._l(_vm.payment, function(name, id) {
              return _c(
                "label",
                {
                  staticClass: "mdui-checkbox",
                  staticStyle: { "margin-right": "2rem" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword.payment,
                        expression: "keyword.payment"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: name,
                      checked: Array.isArray(_vm.keyword.payment)
                        ? _vm._i(_vm.keyword.payment, name) > -1
                        : _vm.keyword.payment
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.payment,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = name,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "payment",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "payment",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "payment", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "mdui-checkbox-icon" }),
                  _vm._v(
                    "\n\t\t\t\t\t" +
                      _vm._s(_vm.payments[name] || name) +
                      "\n\t\t\t\t"
                  )
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-color-theme",
            on: {
              click: function($event) {
                _vm.search(1)
              }
            }
          },
          [
            _c(
              "i",
              { staticClass: "mdui-icon mdui-icon-left material-icons" },
              [_vm._v("search")]
            ),
            _vm._v("搜索")
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-color-pink",
            on: { click: _vm.exports }
          },
          [
            _c(
              "i",
              { staticClass: "mdui-icon mdui-icon-left material-icons" },
              [_vm._v("file_upload")]
            ),
            _vm._v("导出")
          ]
        )
      ]),
      _vm._v(" "),
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _vm._v("\n\t\t\t支付金额统计(分)\n\t\t\t"),
        _c(
          "p",
          { staticStyle: { "line-height": "25px" } },
          _vm._l(_vm.amount_sum, function(amount, type) {
            return _c("span", { staticClass: "mdui-m-r-3" }, [
              _vm._v(_vm._s(_vm.payments[type] || type) + "：" + _vm._s(amount))
            ])
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-table-fluid" }, [
      _c(
        "table",
        { staticClass: "mdui-table mdui-table-hoverable" },
        [
          _vm._l(_vm.list.data, function(val, key, index) {
            return [
              _c("tbody", [
                _c("tr", { staticClass: "mdui-color-grey-200" }, [
                  _c("td", [
                    _vm._v("订单金额(分)："),
                    _c("span", {
                      staticStyle: { color: "#FE0016" },
                      domProps: { textContent: _vm._s(val.amount) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("订单号："),
                    _c("span", {
                      staticStyle: { color: "#FF6A00" },
                      domProps: { textContent: _vm._s(val.order_no) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("商品名："),
                    _c("span", {
                      staticStyle: { color: "#169320" },
                      domProps: { textContent: _vm._s(val.product_name) }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _vm._v("下单用户ID："),
                    _c("span", {
                      domProps: { textContent: _vm._s(val.user_id) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("同步返回地址："),
                    _c("span", {
                      domProps: { textContent: _vm._s(val.return_url) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("异步通知地址："),
                    _c("span", {
                      domProps: { textContent: _vm._s(val.notify_url) }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _vm._v("订单状态："),
                    _c("strong", [
                      val.status
                        ? _c("span", { staticClass: "mdui-text-color-green" }, [
                            _vm._v("订单有效")
                          ])
                        : _c("span", { staticClass: "mdui-text-color-grey" }, [
                            _vm._v("订单无效")
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("下单时间："),
                    _c("span", {
                      domProps: { textContent: _vm._s(val.created_at) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("下单商户："),
                    _c("span", {
                      domProps: {
                        textContent: _vm._s(_vm.merchant[val.merchant_id])
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _vm._v("支付状态："),
                    _c("strong", [
                      val.pay_status
                        ? _c("span", { staticClass: "mdui-text-color-green" }, [
                            _vm._v("支付成功")
                          ])
                        : _c("span", { staticClass: "mdui-text-color-grey" }, [
                            _vm._v("未支付")
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("支付时间："),
                    _c("span", {
                      domProps: { textContent: _vm._s(val.pay_time) }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(val.payment, function(val2, key2) {
                      return _c("span", [
                        _c(
                          "span",
                          { staticClass: "mdui-text-color-teal-400" },
                          [_vm._v(_vm._s(_vm.payments[val2.type] || val2.type))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "mdui-text-color-red-500" }, [
                          _vm._v("「" + _vm._s(val2.amount) + "」")
                        ]),
                        key2 + 1 < val.payment.length
                          ? _c("span", [_vm._v("、")])
                          : _vm._e()
                      ])
                    })
                  )
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _vm._v("通知状态："),
                    _c("strong", [
                      val.notify_status
                        ? _c("span", { staticClass: "mdui-text-color-green" }, [
                            _vm._v("通知成功")
                          ])
                        : _c("span", { staticClass: "mdui-text-color-grey" }, [
                            _vm._v("未通知")
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("通知时间："),
                    _c("span", {
                      domProps: { textContent: _vm._s(val.notify_time) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("备注："),
                    _c("span", {
                      domProps: { textContent: _vm._s(val.remarks) }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _vm._v("退款状态："),
                    _c("strong", [
                      val.refund_status
                        ? _c(
                            "span",
                            { staticClass: "mdui-text-color-red-500" },
                            [_vm._v("已退款")]
                          )
                        : _c("span", { staticClass: "mdui-text-color-grey" }, [
                            _vm._v("未退款")
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("退款时间："),
                    _c("span", {
                      domProps: { textContent: _vm._s(val.refund_time) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    val.status == 1 && val.pay_status == 0
                      ? _c(
                          "a",
                          {
                            staticClass:
                              "mdui-btn mdui-ripple mdui-color-blue-grey",
                            on: {
                              click: function($event) {
                                _vm.complete(val.id)
                              }
                            }
                          },
                          [_vm._v("掉单补回")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    val.status == 1 &&
                    val.pay_status == 1 &&
                    val.refund_status == 0
                      ? _c(
                          "a",
                          {
                            staticClass:
                              "mdui-btn mdui-ripple mdui-color-theme",
                            on: {
                              click: function($event) {
                                _vm.notify(val.id)
                              }
                            }
                          },
                          [_vm._v("手动通知")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    val.status == 1 &&
                    val.pay_status == 1 &&
                    val.refund_status == 0
                      ? _c(
                          "a",
                          {
                            staticClass: "mdui-btn mdui-ripple mdui-color-red",
                            on: {
                              click: function($event) {
                                _vm.refund(val.id, val.amount)
                              }
                            }
                          },
                          [_vm._v("订单退款")]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ]
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mdui-color-white footer" },
      [
        _c("pagination", {
          attrs: {
            pageInfo: {
              total: _vm.list.total,
              current: _vm.list.current_page,
              pagenum: _vm.list.per_page,
              page: _vm.list.last_page,
              pagegroup: 9,
              skin: "#2196F3"
            }
          },
          on: { change: _vm.search }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7e4e2e0a", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/order/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/order/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7e4e2e0a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/order/index.vue")
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
Component.options.__file = "resources/assets/js/components/order/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e4e2e0a", Component.options)
  } else {
    hotAPI.reload("data-v-7e4e2e0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvb3JkZXIvaW5kZXgudnVlPzg2YzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnSUE7QUFDQSxLQURBLGtCQUNBO0FBQ0E7QUFDQSxXQURBO0FBRUEsZUFGQTtBQUdBLGlCQUhBO0FBSUEsaUJBSkE7QUFLQSxnQkFMQTtBQU1BLGNBTkE7QUFPQSxlQVBBO0FBUUEsaUJBUkE7QUFTQTtBQUNBLFdBREE7QUFFQSxhQUZBO0FBR0EsZUFIQTtBQUlBLGdCQUpBO0FBS0EsbUJBTEE7QUFNQSxrQkFOQTtBQU9BLHFCQVBBO0FBUUEsb0JBUkE7QUFTQSxrQkFUQTtBQVVBLHFCQVZBO0FBV0EscUJBWEE7QUFZQSxlQVpBO0FBYUE7QUFiQSxJQVRBO0FBd0JBLGdCQUNBLEtBREEsRUFFQSxNQUZBLENBeEJBO0FBNEJBLG1CQUNBLEtBREEsRUFFQSxNQUZBLENBNUJBO0FBZ0NBLG1CQUNBLEtBREEsRUFFQSxNQUZBO0FBaENBO0FBcUNBLEVBdkNBOztBQXdDQTtBQUNBLFFBREEsa0JBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FMQTtBQU1BLFNBTkEscUJBTUE7QUFDQTtBQUNBO0FBQ0EsR0FUQTtBQVVBLFVBVkEsb0JBVUEsRUFWQSxFQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEEsRUFH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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5Q0FBeUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3R4QkE7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxtWUFBOFU7QUFDM1c7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQywwUEFBMk87QUFDMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwib3JkZXJfaW5kZXhcIj5cblx0XHQ8ZGl2IGNsYXNzPVwidHlwb1wiPlxuXHRcdFx0PGJsb2NrcXVvdGUgY2xhc3M9XCJibG9ja3F1b3RlX25vcm1hbFwiPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTorqLljZXlj7fvvJo8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJrZXl3b3JkLm9yZGVyX25vXCIgLz5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTkuIvljZXnlKjmiLdJRO+8mjxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImtleXdvcmQudXNlcl9pZFwiIC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx05pel5pyf562b6YCJ77yaPHZ1ZS1kYXRlcGlja2VyLWxvY2FsIHYtbW9kZWw9XCJrZXl3b3JkLmRhdGVcIiBjbGVhcmFibGUgLz5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx05ZWG44CA44CA5oi377yaXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS1jaGVja2JveFwiIHYtZm9yPVwiKG5hbWUsaWQpIG9mIG1lcmNoYW50XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MnJlbTtcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJpZFwiIHYtbW9kZWw9XCJrZXl3b3JkLm1lcmNoYW50X2lkXCIgLz5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1jaGVja2JveC1pY29uXCI+PC9pPlxuXHRcdFx0XHRcdFx0e3tuYW1lfX1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOiuouWNleexu+Wei++8mlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktY2hlY2tib3hcIiB2LWZvcj1cIihuYW1lLGlkKSBvZiBvcmRlcl90eXBlXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MnJlbTtcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJuYW1lXCIgdi1tb2RlbD1cImtleXdvcmQub3JkZXJfdHlwZVwiIC8+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktY2hlY2tib3gtaWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdHt7bmFtZX19XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTorqLljZXnirbmgIHvvJpcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLWNoZWNrYm94XCIgdi1mb3I9XCIobmFtZSxpZCkgb2YgcGF5X3N0YXR1c1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjJyZW07XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwiaWRcIiB2LW1vZGVsPVwia2V5d29yZC5wYXlfc3RhdHVzXCIgLz5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1jaGVja2JveC1pY29uXCI+PC9pPlxuXHRcdFx0XHRcdFx0e3tuYW1lfX1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktY2hlY2tib3hcIiB2LWZvcj1cIihuYW1lLGlkKSBvZiBub3RpZnlfc3RhdHVzXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MnJlbTtcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJpZFwiIHYtbW9kZWw9XCJrZXl3b3JkLm5vdGlmeV9zdGF0dXNcIiAvPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWNoZWNrYm94LWljb25cIj48L2k+XG5cdFx0XHRcdFx0XHR7e25hbWV9fVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS1jaGVja2JveFwiIHYtZm9yPVwiKG5hbWUsaWQpIG9mIHJlZnVuZF9zdGF0dXNcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoycmVtO1wiPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIDp2YWx1ZT1cImlkXCIgdi1tb2RlbD1cImtleXdvcmQucmVmdW5kX3N0YXR1c1wiIC8+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktY2hlY2tib3gtaWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdHt7bmFtZX19XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTmlK/ku5jnsbvlnovvvJpcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLWNoZWNrYm94XCIgdi1mb3I9XCIobmFtZSxpZCkgb2YgcGF5bWVudFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjJyZW07XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwibmFtZVwiIHYtbW9kZWw9XCJrZXl3b3JkLnBheW1lbnRcIiAvPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWNoZWNrYm94LWljb25cIj48L2k+XG5cdFx0XHRcdFx0XHR7e3BheW1lbnRzW25hbWVdIHx8IG5hbWV9fVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwic2VhcmNoKDEpXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+5pCc57SiPC9hPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItcGlua1wiIEBjbGljaz1cImV4cG9ydHNcIj48aSBjbGFzcz1cIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiPmZpbGVfdXBsb2FkPC9pPuWvvOWHujwvYT5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx05pSv5LuY6YeR6aKd57uf6K6hKOWIhilcblx0XHRcdFx0PHAgc3R5bGU9XCJsaW5lLWhlaWdodDoyNXB4O1wiPjxzcGFuIGNsYXNzPVwibWR1aS1tLXItM1wiIHYtZm9yPVwiKGFtb3VudCx0eXBlKSBvZiBhbW91bnRfc3VtXCI+e3twYXltZW50c1t0eXBlXSB8fCB0eXBlfX3vvJp7e2Ftb3VudH19PC9zcGFuPjwvcD5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJsZS1mbHVpZFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzPVwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiPlxuXHRcdFx0XHQ8dGVtcGxhdGUgdi1mb3I9XCIodmFsLGtleSxpbmRleCkgb2YgbGlzdC5kYXRhXCI+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdDx0ciBjbGFzcz1cIm1kdWktY29sb3ItZ3JleS0yMDBcIj5cblx0XHRcdFx0XHRcdDx0ZD7orqLljZXph5Hpop0o5YiGKe+8mjxzcGFuIHN0eWxlPVwiY29sb3I6I0ZFMDAxNjtcIiB2LXRleHQ9XCJ2YWwuYW1vdW50XCI+PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+6K6i5Y2V5Y+377yaPHNwYW4gc3R5bGU9XCJjb2xvcjojRkY2QTAwO1wiIHYtdGV4dD1cInZhbC5vcmRlcl9ub1wiPjwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkPuWVhuWTgeWQje+8mjxzcGFuIHN0eWxlPVwiY29sb3I6IzE2OTMyMDtcIiB2LXRleHQ9XCJ2YWwucHJvZHVjdF9uYW1lXCI+PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGQ+5LiL5Y2V55So5oi3SUTvvJo8c3BhbiB2LXRleHQ9XCJ2YWwudXNlcl9pZFwiPjwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkPuWQjOatpei/lOWbnuWcsOWdgO+8mjxzcGFuIHYtdGV4dD1cInZhbC5yZXR1cm5fdXJsXCI+PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+5byC5q2l6YCa55+l5Zyw5Z2A77yaPHNwYW4gdi10ZXh0PVwidmFsLm5vdGlmeV91cmxcIj48L3NwYW4+PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0ZD7orqLljZXnirbmgIHvvJo8c3Ryb25nPjxzcGFuIHYtaWY9XCJ2YWwuc3RhdHVzXCIgY2xhc3M9bWR1aS10ZXh0LWNvbG9yLWdyZWVuPuiuouWNleacieaViDwvc3Bhbj48c3BhbiB2LWVsc2UgY2xhc3M9bWR1aS10ZXh0LWNvbG9yLWdyZXk+6K6i5Y2V5peg5pWIPC9zcGFuPjwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD7kuIvljZXml7bpl7TvvJo8c3BhbiB2LXRleHQ9XCJ2YWwuY3JlYXRlZF9hdFwiPjwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkPuS4i+WNleWVhuaIt++8mjxzcGFuIHYtdGV4dD1cIm1lcmNoYW50W3ZhbC5tZXJjaGFudF9pZF1cIj48L3NwYW4+PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0ZD7mlK/ku5jnirbmgIHvvJo8c3Ryb25nPjxzcGFuIHYtaWY9XCJ2YWwucGF5X3N0YXR1c1wiIGNsYXNzPW1kdWktdGV4dC1jb2xvci1ncmVlbj7mlK/ku5jmiJDlip88L3NwYW4+PHNwYW4gdi1lbHNlIGNsYXNzPW1kdWktdGV4dC1jb2xvci1ncmV5PuacquaUr+S7mDwvc3Bhbj48L3N0cm9uZz5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+5pSv5LuY5pe26Ze077yaPHNwYW4gdi10ZXh0PVwidmFsLnBheV90aW1lXCI+PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtZm9yPVwiKHZhbDIsa2V5Mikgb2YgdmFsLnBheW1lbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1kdWktdGV4dC1jb2xvci10ZWFsLTQwMFwiPnt7cGF5bWVudHNbdmFsMi50eXBlXSB8fCB2YWwyLnR5cGV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1kdWktdGV4dC1jb2xvci1yZWQtNTAwXCI+44CMe3t2YWwyLmFtb3VudH1944CNPC9zcGFuPjxzcGFuIHYtaWY9XCJrZXkyKzEgPCB2YWwucGF5bWVudC5sZW5ndGhcIj7jgIE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGQ+6YCa55+l54q25oCB77yaPHN0cm9uZz48c3BhbiB2LWlmPVwidmFsLm5vdGlmeV9zdGF0dXNcIiBjbGFzcz1tZHVpLXRleHQtY29sb3ItZ3JlZW4+6YCa55+l5oiQ5YqfPC9zcGFuPjxzcGFuIHYtZWxzZSBjbGFzcz1tZHVpLXRleHQtY29sb3ItZ3JleT7mnKrpgJrnn6U8L3NwYW4+PC9zdHJvbmc+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD7pgJrnn6Xml7bpl7TvvJo8c3BhbiB2LXRleHQ9XCJ2YWwubm90aWZ5X3RpbWVcIj48L3NwYW4+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD7lpIfms6jvvJo8c3BhbiB2LXRleHQ9XCJ2YWwucmVtYXJrc1wiPjwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRkPumAgOasvueKtuaAge+8mjxzdHJvbmc+PHNwYW4gdi1pZj1cInZhbC5yZWZ1bmRfc3RhdHVzXCIgY2xhc3M9bWR1aS10ZXh0LWNvbG9yLXJlZC01MDA+5bey6YCA5qy+PC9zcGFuPjxzcGFuIHYtZWxzZSBjbGFzcz1tZHVpLXRleHQtY29sb3ItZ3JleT7mnKrpgIDmrL48L3NwYW4+PC9zdHJvbmc+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD7pgIDmrL7ml7bpl7TvvJo8c3BhbiB2LXRleHQ9XCJ2YWwucmVmdW5kX3RpbWVcIj48L3NwYW4+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWJsdWUtZ3JleVwiIHYtaWY9XCJ2YWwuc3RhdHVzID09IDEgJiYgdmFsLnBheV9zdGF0dXMgPT0gMFwiIEBjbGljaz1cImNvbXBsZXRlKHZhbC5pZClcIj7mjonljZXooaXlm548L2E+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIHYtaWY9XCJ2YWwuc3RhdHVzID09IDEgJiYgdmFsLnBheV9zdGF0dXMgPT0gMSAmJiB2YWwucmVmdW5kX3N0YXR1cyA9PSAwXCIgQGNsaWNrPVwibm90aWZ5KHZhbC5pZClcIj7miYvliqjpgJrnn6U8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1yZWRcIiB2LWlmPVwidmFsLnN0YXR1cyA9PSAxICYmIHZhbC5wYXlfc3RhdHVzID09IDEgJiYgdmFsLnJlZnVuZF9zdGF0dXMgPT0gMFwiIEBjbGljaz1cInJlZnVuZCh2YWwuaWQsdmFsLmFtb3VudClcIj7orqLljZXpgIDmrL48L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdG1lcmNoYW50IDogJycsXG5cdFx0XHRcdG9yZGVyX3R5cGUgOiAnJyxcblx0XHRcdFx0cHVyc2VfdHlwZSA6ICcnLFxuXHRcdFx0XHR1c2VyX3R5cGUgOiAnJyxcblx0XHRcdFx0cGF5bWVudCA6ICcnLFxuXHRcdFx0XHRwYXltZW50cyA6ICcnLFxuXHRcdFx0XHRhbW91bnRfc3VtIDogJycsXG5cdFx0XHRcdGtleXdvcmQgOiB7XG5cdFx0XHRcdFx0cGFnZSA6IDEsXG5cdFx0XHRcdFx0ZXhwb3J0IDogMCxcblx0XHRcdFx0XHR1c2VyX2lkIDogJycsXG5cdFx0XHRcdFx0b3JkZXJfbm8gOiAnJyxcblx0XHRcdFx0XHRtZXJjaGFudF9pZCA6IFtdLFxuXHRcdFx0XHRcdG9yZGVyX3R5cGUgOiBbXSxcblx0XHRcdFx0XHRwdXJzZV90eXBlX2lkIDogW10sXG5cdFx0XHRcdFx0dXNlcl90eXBlX2lkIDogW10sXG5cdFx0XHRcdFx0cGF5X3N0YXR1cyA6IFtdLFxuXHRcdFx0XHRcdG5vdGlmeV9zdGF0dXMgOiBbXSxcblx0XHRcdFx0XHRyZWZ1bmRfc3RhdHVzIDogW10sXG5cdFx0XHRcdFx0cGF5bWVudCA6IFtdLFxuXHRcdFx0XHRcdGRhdGUgOiBbXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwYXlfc3RhdHVzIDogW1xuXHRcdFx0XHRcdCfmnKrmlK/ku5gnLFxuXHRcdFx0XHRcdCfmlK/ku5jmiJDlip8nXG5cdFx0XHRcdF0sXG5cdFx0XHRcdG5vdGlmeV9zdGF0dXMgOiBbXG5cdFx0XHRcdFx0J+acqumAmuefpScsXG5cdFx0XHRcdFx0J+mAmuefpeaIkOWKnydcblx0XHRcdFx0XSxcblx0XHRcdFx0cmVmdW5kX3N0YXR1cyA6IFtcblx0XHRcdFx0XHQn5pyq6YCA5qy+Jyxcblx0XHRcdFx0XHQn6YCA5qy+5oiQ5YqfJ1xuXHRcdFx0XHRdLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG1ldGhvZHMgOiB7XG5cdFx0XHRzZWFyY2gocGFnZSl7XG5cdFx0XHRcdHRoaXMua2V5d29yZC5wYWdlID0gcGFnZTtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLmV4cG9ydCA9IDA7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdGV4cG9ydHMoKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLmV4cG9ydCA9IDE7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdGNvbXBsZXRlKGlkKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLmNvbmZpcm0oJ+aJi+WKqOagh+iusOS4uuaUr+S7mOaIkOWKn+W5tuWIhuWPkemAmuefpe+8jOaYr+WQpuaUtuWIsOasvumhuemcgOi0ouWKoeaguOWunu+8jOeCueWHu+OAkOehruWumuOAkee7p+e7rScsICfkuInmlrnmlK/ku5jmvI/ljZUv5o6J5Y2V6KGl5ZueJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHQuJEFQSS5wb3N0KCcvb3JkZXIvY29tcGxldGUnLCB7aWQ6IGlkfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0bWR1aS5hbGVydChcIuaTjeS9nOWujOaIkO+8jOiuouWNleagh+iusOS4uuW3suaUr+S7mFwiLCBmdW5jdGlvbiAoKSB7fSwge2hpc3Rvcnk6IGZhbHNlfSk7XG5cdFx0XHRcdFx0XHR0LmluaXQoKTtcblx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sIGZ1bmN0aW9uICgpIHt9LCB7aGlzdG9yeTogZmFsc2UsIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgY2FuY2VsVGV4dDogJ+WPlua2iCd9KTtcblx0XHRcdH0sXG5cdFx0XHRub3RpZnkoaWQpIHtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLmNvbmZpcm0oJ+W8guatpemAmuefpeS8muW9seWTjeWVhuaIt+WvueaUr+S7mOeahOWTjeW6lO+8jOWPr+iDvemAoOaIkOWkmuasoee7k+eul+etiemXrumimO+8jOefpeaCieWQjueCueWHu+OAkOehruWumuOAkee7p+e7rScsICfmiYvliqjlj5HotbflvILmraXpgJrnn6UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dC4kQVBJLnBvc3QoJy9vcmRlci9ub3RpZnknLCB7aWQ6IGlkfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0bWR1aS5hbGVydChcIuW3sumHjeaWsOWIhuWPkemAmuefpeS7u+WKoVwiLCBmdW5jdGlvbiAoKSB7fSwge2hpc3Rvcnk6IGZhbHNlfSk7XG5cdFx0XHRcdFx0XHR0LmluaXQoKTtcblx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sIGZ1bmN0aW9uICgpIHt9LCB7aGlzdG9yeTogZmFsc2UsIGNvbmZpcm1UZXh0OiAn56Gu5a6aJywgY2FuY2VsVGV4dDogJ+WPlua2iCd9KTtcblx0XHRcdH0sXG5cdFx0XHRyZWZ1bmQoaWQsYW1vdW50KSB7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0bWR1aS5wcm9tcHQoJ+mAgOasvumHkemineS8mui/lOi/mOWIsOS4i+WNleeUqOaIt+eahOeOsOmHkemSseWMheS9memineS4re+8jOivt+WcqOS4i+aWuei+k+WFpeOAkOmAgOasvumHkemineOAkeOAguazqOaEj++8mui+k+WFpeWNleS9jeS4uuWIhicsICforqLljZXmgLvph5Hpop0o5YiGKe+8micrYW1vdW50LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRpZih2YWx1ZSl7XG5cdFx0XHRcdFx0XHR0LiRBUEkucG9zdCgnL29yZGVyL3JlZnVuZCcsIHtpZDogaWQsYW1vdW50OnZhbHVlfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRtZHVpLmFsZXJ0KFwi6YCA5qy+5oiQ5Yqf77yM5bey5a6M5oiQ57O757uf5Yiw55So5oi355qE6L2s6LSm5pON5L2c77yM5aaC5Lqn55Sf5aWW5Yqx6YOo5YiG6ZyA5omL5Yqo5Yay5q2jXCIsIGZ1bmN0aW9uICgpIHt9LCB7aGlzdG9yeTogZmFsc2V9KTtcblx0XHRcdFx0XHRcdFx0dC5pbml0KCk7XG5cdFx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgZnVuY3Rpb24gKCkge30sIHtoaXN0b3J5OiBmYWxzZSwgY29uZmlybVRleHQ6ICfnoa7lrponLCBjYW5jZWxUZXh0OiAn5Y+W5raIJ30pO1xuXHRcdFx0fSxcblx0XHRcdGluaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvb3JkZXIvaW5kZXgnLHQua2V5d29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0Lmxpc3QgPSBkYXRhLmxpc3Q7XG5cdFx0XHRcdFx0dC5tZXJjaGFudCA9IGRhdGEubWVyY2hhbnQ7XG5cdFx0XHRcdFx0dC5wdXJzZV90eXBlID0gZGF0YS5wdXJzZV90eXBlO1xuXHRcdFx0XHRcdHQudXNlcl90eXBlID0gZGF0YS51c2VyX3R5cGU7XG5cdFx0XHRcdFx0dC5vcmRlcl90eXBlID0gZGF0YS5vcmRlcl90eXBlO1xuXHRcdFx0XHRcdHQucGF5bWVudCA9IGRhdGEucGF5bWVudDtcblx0XHRcdFx0XHR0LnBheW1lbnRzID0gZGF0YS5wYXltZW50cztcblx0XHRcdFx0XHR0LmFtb3VudF9zdW0gPSBkYXRhLmFtb3VudF9zdW07XG5cdFx0XHRcdFx0aWYodC5rZXl3b3JkLmV4cG9ydCl7XG5cdFx0XHRcdFx0XHRtZHVpLmFsZXJ0KCflj6/lnKjlt6bkvqfjgJDlr7zlh7rku7vliqHjgJHoj5zljZXmn6XnnIvku7vliqHnirbmgIHlubbkuIvovb3mlofku7YnLCflt7LmlL7lhaXlr7zlh7rku7vliqEnLGZ1bmN0aW9uKCl7fSx7aGlzdG9yeTpmYWxzZX0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24obXNnKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCl7XG5cdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHR0LmluaXQoKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9vcmRlci9pbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3JkZXJfaW5kZXhcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eXBvXCIgfSwgW1xuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx06K6i5Y2V5Y+377yaXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5vcmRlcl9ubyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQub3JkZXJfbm9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5rZXl3b3JkLm9yZGVyX25vIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwib3JkZXJfbm9cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOS4i+WNleeUqOaIt0lE77yaXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC51c2VyX2lkLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC51c2VyX2lkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ua2V5d29yZC51c2VyX2lkIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwidXNlcl9pZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOaXpeacn+etm+mAie+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwidnVlLWRhdGVwaWNrZXItbG9jYWxcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBjbGVhcmFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmtleXdvcmQuZGF0ZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJkYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC5kYXRlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx05ZWG44CA44CA5oi377yaXFxuXFx0XFx0XFx0XFx0XCIpLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5tZXJjaGFudCwgZnVuY3Rpb24obmFtZSwgaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjJyZW1cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLm1lcmNoYW50X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLm1lcmNoYW50X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5rZXl3b3JkLm1lcmNoYW50X2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmtleXdvcmQubWVyY2hhbnRfaWQsIGlkKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5rZXl3b3JkLm1lcmNoYW50X2lkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ua2V5d29yZC5tZXJjaGFudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lcmNoYW50X2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXJjaGFudF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJtZXJjaGFudF9pZFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94LWljb25cIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKG5hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOiuouWNleexu+Wei++8mlxcblxcdFxcdFxcdFxcdFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ub3JkZXJfdHlwZSwgZnVuY3Rpb24obmFtZSwgaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjJyZW1cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLm9yZGVyX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQub3JkZXJfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5rZXl3b3JkLm9yZGVyX3R5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ua2V5d29yZC5vcmRlcl90eXBlLCBuYW1lKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5rZXl3b3JkLm9yZGVyX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5rZXl3b3JkLm9yZGVyX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyX3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyX3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwib3JkZXJfdHlwZVwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94LWljb25cIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKG5hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOiuouWNleeKtuaAge+8mlxcblxcdFxcdFxcdFxcdFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ucGF5X3N0YXR1cywgZnVuY3Rpb24obmFtZSwgaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjJyZW1cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnBheV9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQucGF5X3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ua2V5d29yZC5wYXlfc3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmtleXdvcmQucGF5X3N0YXR1cywgaWQpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmtleXdvcmQucGF5X3N0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmtleXdvcmQucGF5X3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheV9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheV9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwicGF5X3N0YXR1c1wiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94LWljb25cIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKG5hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ubm90aWZ5X3N0YXR1cywgZnVuY3Rpb24obmFtZSwgaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjJyZW1cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLm5vdGlmeV9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQubm90aWZ5X3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ua2V5d29yZC5ub3RpZnlfc3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmtleXdvcmQubm90aWZ5X3N0YXR1cywgaWQpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmtleXdvcmQubm90aWZ5X3N0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmtleXdvcmQubm90aWZ5X3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmeV9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmeV9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwibm90aWZ5X3N0YXR1c1wiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94LWljb25cIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKG5hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ucmVmdW5kX3N0YXR1cywgZnVuY3Rpb24obmFtZSwgaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjJyZW1cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnJlZnVuZF9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQucmVmdW5kX3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ua2V5d29yZC5yZWZ1bmRfc3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmtleXdvcmQucmVmdW5kX3N0YXR1cywgaWQpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmtleXdvcmQucmVmdW5kX3N0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmtleXdvcmQucmVmdW5kX3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZnVuZF9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZnVuZF9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwicmVmdW5kX3N0YXR1c1wiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94LWljb25cIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKG5hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOaUr+S7mOexu+Wei++8mlxcblxcdFxcdFxcdFxcdFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ucGF5bWVudCwgZnVuY3Rpb24obmFtZSwgaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjJyZW1cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnBheW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQucGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5rZXl3b3JkLnBheW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ua2V5d29yZC5wYXltZW50LCBuYW1lKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5rZXl3b3JkLnBheW1lbnRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5rZXl3b3JkLnBheW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwicGF5bWVudFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94LWljb25cIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wYXltZW50c1tuYW1lXSB8fCBuYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zZWFyY2goMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJzZWFyY2hcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwi5pCc57SiXCIpXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXBpbmtcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZXhwb3J0cyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCIgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcImZpbGVfdXBsb2FkXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIuWvvOWHulwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdOaUr+S7mOmHkeminee7n+iuoSjliIYpXFxuXFx0XFx0XFx0XCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwibGluZS1oZWlnaHRcIjogXCIyNXB4XCIgfSB9LFxuICAgICAgICAgIF92bS5fbChfdm0uYW1vdW50X3N1bSwgZnVuY3Rpb24oYW1vdW50LCB0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tLXItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGF5bWVudHNbdHlwZV0gfHwgdHlwZSkgKyBcIu+8mlwiICsgX3ZtLl9zKGFtb3VudCkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUtZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5saXN0LmRhdGEsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sb3ItZ3JleS0yMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K6i5Y2V6YeR6aKdKOWIhinvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiI0ZFMDAxNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K6i5Y2V5Y+377yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiNGRjZBMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLm9yZGVyX25vKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5ZWG5ZOB5ZCN77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiMxNjkzMjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnByb2R1Y3RfbmFtZSkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS4i+WNleeUqOaIt0lE77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnVzZXJfaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlkIzmraXov5Tlm57lnLDlnYDvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmV0dXJuX3VybCkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuW8guatpemAmuefpeWcsOWdgO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5ub3RpZnlfdXJsKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K6i5Y2V54q25oCB77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgdmFsLnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY29sb3ItZ3JlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K6i5Y2V5pyJ5pWIXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1ncmV5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuiuouWNleaXoOaViFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS4i+WNleaXtumXtO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5jcmVhdGVkX2F0KSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiL5Y2V5ZWG5oi377yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tZXJjaGFudFt2YWwubWVyY2hhbnRfaWRdKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmlK/ku5jnirbmgIHvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwucGF5X3N0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY29sb3ItZ3JlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pSv5LuY5oiQ5YqfXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1ncmV5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuacquaUr+S7mFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaUr+S7mOaXtumXtO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5wYXlfdGltZSkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHZhbC5wYXltZW50LCBmdW5jdGlvbih2YWwyLCBrZXkyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0LWNvbG9yLXRlYWwtNDAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnBheW1lbnRzW3ZhbDIudHlwZV0gfHwgdmFsMi50eXBlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1yZWQtNTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLjgIxcIiArIF92bS5fcyh2YWwyLmFtb3VudCkgKyBcIuOAjVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkyICsgMSA8IHZhbC5wYXltZW50Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi44CBXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpgJrnn6XnirbmgIHvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwubm90aWZ5X3N0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY29sb3ItZ3JlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6YCa55+l5oiQ5YqfXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1ncmV5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuacqumAmuefpVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIumAmuefpeaXtumXtO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5ub3RpZnlfdGltZSkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWkh+azqO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZW1hcmtzKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6YCA5qy+54q25oCB77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgdmFsLnJlZnVuZF9zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY29sb3ItcmVkLTUwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuW3sumAgOasvlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY29sb3ItZ3JleVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmnKrpgIDmrL5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpgIDmrL7ml7bpl7TvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVmdW5kX3RpbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICB2YWwuc3RhdHVzID09IDEgJiYgdmFsLnBheV9zdGF0dXMgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItYmx1ZS1ncmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbXBsZXRlKHZhbC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmjonljZXooaXlm55cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsLnN0YXR1cyA9PSAxICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbC5wYXlfc3RhdHVzID09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgdmFsLnJlZnVuZF9zdGF0dXMgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm90aWZ5KHZhbC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmiYvliqjpgJrnn6VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsLnN0YXR1cyA9PSAxICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbC5wYXlfc3RhdHVzID09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgdmFsLnJlZnVuZF9zdGF0dXMgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1yZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVmdW5kKHZhbC5pZCwgdmFsLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLorqLljZXpgIDmrL5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb2xvci13aGl0ZSBmb290ZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICB0b3RhbDogX3ZtLmxpc3QudG90YWwsXG4gICAgICAgICAgICAgIGN1cnJlbnQ6IF92bS5saXN0LmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZW51bTogX3ZtLmxpc3QucGVyX3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2U6IF92bS5saXN0Lmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZWdyb3VwOiA5LFxuICAgICAgICAgICAgICBza2luOiBcIiMyMTk2RjNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uc2VhcmNoIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ZTRlMmUwYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2U0ZTJlMGFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvb3JkZXIvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTdlNGUyZTBhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZTRlMmUwYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvb3JkZXIvaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdlNGUyZTBhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2U0ZTJlMGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9vcmRlci9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIl0sInNvdXJjZVJvb3QiOiIifQ==