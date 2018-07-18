webpackJsonp([20],{

/***/ 352:
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
			sum_amount: '',
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
				post('/order/complete', { id: id }, function (data, msg) {
					mdui.alert(msg, function () {}, { history: false });
					t.init();
				});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		notify: function notify(id) {
			var t = this;
			mdui.confirm('异步通知会影响商户对支付的响应，可能造成多次结算等问题，知悉后点击【确定】继续', '手动发起异步通知', function () {
				post('/order/notify', { id: id }, function (data, msg) {
					mdui.alert(msg, function () {}, { history: false });
					t.init();
				});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		refund: function refund(id, amount) {
			var t = this;
			mdui.prompt('退款金额会返还到下单用户的现金钱包余额中，请在下方输入【退款金额】。注意：输入单位为分', '订单总金额(分)：' + amount, function (value) {
				if (value) {
					post('/order/refund', { id: id, amount: value }, function (data, msg) {
						mdui.alert(msg, function () {}, { history: false });
						t.init();
					});
				}
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		init: function init() {
			var t = this;
			get('/order', t.keyword, function (data) {
				t.list = data.list;
				t.merchant = data.merchant;
				t.purse_type = data.purse_type;
				t.user_type = data.user_type;
				t.order_type = data.order_type;
				t.payment = data.payment;
				t.payments = data.payments;
				t.sum_amount = data.sum_amount;
				if (t.keyword.export) {
					mdui.alert('可在左侧【导出任务】菜单查看任务状态并下载文件', '已放入导出任务', function () {}, { history: false });
				}
			});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.init();
	}
});

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "order_index" }, [
    _c("div", { staticClass: "typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
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
          }),
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
            _vm._v("\n\t\t\t\tAPI商户：\n\t\t\t\t"),
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
          _vm._l(_vm.sum_amount, function(amount, type) {
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
    require("vue-hot-reload-api")      .rerender("data-v-88154986", module.exports)
  }
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(352)
/* template */
var __vue_template__ = __webpack_require__(353)
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
Component.options.__file = "resources\\assets\\js\\components\\order\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88154986", Component.options)
  } else {
    hotAPI.reload("data-v-88154986", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvb3JkZXIvaW5kZXgudnVlP2U5ZTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEhBO0FBQ0EsS0FEQSxrQkFDQTtBQUNBO0FBQ0EsV0FEQTtBQUVBLGVBRkE7QUFHQSxpQkFIQTtBQUlBLGlCQUpBO0FBS0EsZ0JBTEE7QUFNQSxjQU5BO0FBT0EsZUFQQTtBQVFBLGlCQVJBO0FBU0E7QUFDQSxXQURBO0FBRUEsYUFGQTtBQUdBLGVBSEE7QUFJQSxnQkFKQTtBQUtBLG1CQUxBO0FBTUEsa0JBTkE7QUFPQSxxQkFQQTtBQVFBLG9CQVJBO0FBU0Esa0JBVEE7QUFVQSxxQkFWQTtBQVdBLHFCQVhBO0FBWUEsZUFaQTtBQWFBO0FBYkEsSUFUQTtBQXdCQSxnQkFDQSxLQURBLEVBRUEsTUFGQSxDQXhCQTtBQTRCQSxtQkFDQSxLQURBLEVBRUEsTUFGQSxDQTVCQTtBQWdDQSxtQkFDQSxLQURBLEVBRUEsTUFGQTtBQWhDQTtBQXFDQSxFQXZDQTs7QUF3Q0E7QUFDQSxRQURBLGtCQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBTEE7QUFNQSxTQU5BLHFCQU1BO0FBQ0E7QUFDQTtBQUNBLEdBVEE7QUFVQSxVQVZBLG9CQVVBLEVBVkEsRUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsSUFMQSxFQUtBLGNBTEEsRUFLQSx1REFMQTtBQU1BLEdBbEJBO0FBbUJBLFFBbkJBLGtCQW1CQSxFQW5CQSxFQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsSUFMQSxFQUtBLGNBTEEsRUFLQSx1REFMQTtBQU1BLEdBM0JBO0FBNEJBLFFBNUJBLGtCQTRCQSxFQTVCQSxFQTRCQSxNQTVCQSxFQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BSEE7QUFJQTtBQUNBLElBUEEsRUFPQSxjQVBBLEVBT0EsdURBUEE7QUFRQSxHQXRDQTtBQXVDQSxNQXZDQSxrQkF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBWkE7QUFhQTtBQXREQSxFQXhDQTtBQWdHQSxRQWhHQSxxQkFnR0E7QUFDQTtBQUNBO0FBQ0E7QUFuR0EsRzs7Ozs7OztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQsZUFBZSxzQkFBc0I7QUFDckMsd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQyx1QkFBdUIsNkJBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGVBQWUseURBQXlEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUF5RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNEJBQTRCO0FBQzNEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtDQUFrQztBQUNqRDtBQUNBO0FBQ0EsU0FBUyxpREFBaUQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUNBQXFDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RCxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZELGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdUNBQXVDO0FBQzdFO0FBQ0E7QUFDQSxzQ0FBc0Msc0NBQXNDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1Q0FBdUM7QUFDN0U7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBMEM7QUFDckU7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlDQUF5QztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1Q0FBdUM7QUFDN0U7QUFDQTtBQUNBLHNDQUFzQyxzQ0FBc0M7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUNBQXlDO0FBQ3RFO0FBQ0E7QUFDQSxzQ0FBc0Msc0NBQXNDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUNBQXlDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2x4QkE7QUFDQTtBQUNBO0FBQ0EsNENBQXNSO0FBQ3RSO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cIm9yZGVyX2luZGV4XCI+XG5cdFx0PGRpdiBjbGFzcz1cInR5cG9cIj5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx05LiL5Y2V55So5oi3SUTvvJo8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJrZXl3b3JkLnVzZXJfaWRcIiAvPlxuXHRcdFx0XHRcdOiuouWNleWPt++8mjxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImtleXdvcmQub3JkZXJfbm9cIiAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOaXpeacn+etm+mAie+8mjx2dWUtZGF0ZXBpY2tlci1sb2NhbCB2LW1vZGVsPVwia2V5d29yZC5kYXRlXCIgY2xlYXJhYmxlIC8+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdEFQSeWVhuaIt++8mlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktY2hlY2tib3hcIiB2LWZvcj1cIihuYW1lLGlkKSBvZiBtZXJjaGFudFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjJyZW07XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwiaWRcIiB2LW1vZGVsPVwia2V5d29yZC5tZXJjaGFudF9pZFwiIC8+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktY2hlY2tib3gtaWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdHt7bmFtZX19XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTorqLljZXnsbvlnovvvJpcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLWNoZWNrYm94XCIgdi1mb3I9XCIobmFtZSxpZCkgb2Ygb3JkZXJfdHlwZVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjJyZW07XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwibmFtZVwiIHYtbW9kZWw9XCJrZXl3b3JkLm9yZGVyX3R5cGVcIiAvPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWNoZWNrYm94LWljb25cIj48L2k+XG5cdFx0XHRcdFx0XHR7e25hbWV9fVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx06K6i5Y2V54q25oCB77yaXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS1jaGVja2JveFwiIHYtZm9yPVwiKG5hbWUsaWQpIG9mIHBheV9zdGF0dXNcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoycmVtO1wiPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIDp2YWx1ZT1cImlkXCIgdi1tb2RlbD1cImtleXdvcmQucGF5X3N0YXR1c1wiIC8+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktY2hlY2tib3gtaWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdHt7bmFtZX19XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLWNoZWNrYm94XCIgdi1mb3I9XCIobmFtZSxpZCkgb2Ygbm90aWZ5X3N0YXR1c1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjJyZW07XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwiaWRcIiB2LW1vZGVsPVwia2V5d29yZC5ub3RpZnlfc3RhdHVzXCIgLz5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1jaGVja2JveC1pY29uXCI+PC9pPlxuXHRcdFx0XHRcdFx0e3tuYW1lfX1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktY2hlY2tib3hcIiB2LWZvcj1cIihuYW1lLGlkKSBvZiByZWZ1bmRfc3RhdHVzXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6MnJlbTtcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJpZFwiIHYtbW9kZWw9XCJrZXl3b3JkLnJlZnVuZF9zdGF0dXNcIiAvPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWNoZWNrYm94LWljb25cIj48L2k+XG5cdFx0XHRcdFx0XHR7e25hbWV9fVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx05pSv5LuY57G75Z6L77yaXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS1jaGVja2JveFwiIHYtZm9yPVwiKG5hbWUsaWQpIG9mIHBheW1lbnRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoycmVtO1wiPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIDp2YWx1ZT1cIm5hbWVcIiB2LW1vZGVsPVwia2V5d29yZC5wYXltZW50XCIgLz5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1jaGVja2JveC1pY29uXCI+PC9pPlxuXHRcdFx0XHRcdFx0e3twYXltZW50c1tuYW1lXSB8fCBuYW1lfX1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInNlYXJjaCgxKVwiPjxpIGNsYXNzPVwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPuaQnOe0ojwvYT5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXBpbmtcIiBAY2xpY2s9XCJleHBvcnRzXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5maWxlX3VwbG9hZDwvaT7lr7zlh7o8L2E+XG5cdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVfbm9ybWFsXCI+XG5cdFx0XHRcdOaUr+S7mOmHkeminee7n+iuoSjliIYpXG5cdFx0XHRcdDxwPjxzcGFuIHYtZm9yPVwiKGFtb3VudCx0eXBlKSBvZiBzdW1fYW1vdW50XCIgY2xhc3M9XCJtZHVpLW0tci0zXCI+e3twYXltZW50c1t0eXBlXSB8fCB0eXBlfX3vvJp7e2Ftb3VudH19PC9zcGFuPjwvcD5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJsZS1mbHVpZFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzPVwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiPlxuXHRcdFx0XHQ8dGVtcGxhdGUgdi1mb3I9XCIodmFsLGtleSxpbmRleCkgb2YgbGlzdC5kYXRhXCI+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdDx0ciBjbGFzcz1cIm1kdWktY29sb3ItZ3JleS0yMDBcIj5cblx0XHRcdFx0XHRcdDx0ZD7orqLljZXph5Hpop0o5YiGKe+8mjxzcGFuIHN0eWxlPVwiY29sb3I6I0ZFMDAxNjtcIiB2LXRleHQ9XCJ2YWwuYW1vdW50XCI+PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+6K6i5Y2V5Y+377yaPHNwYW4gc3R5bGU9XCJjb2xvcjojRkY2QTAwO1wiIHYtdGV4dD1cInZhbC5vcmRlcl9ub1wiPjwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkPuWVhuWTgeWQje+8mjxzcGFuIHN0eWxlPVwiY29sb3I6IzE2OTMyMDtcIiB2LXRleHQ9XCJ2YWwucHJvZHVjdF9uYW1lXCI+PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGQ+5LiL5Y2V55So5oi3SUTvvJo8c3BhbiB2LXRleHQ9XCJ2YWwudXNlcl9pZFwiPjwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkPuWQjOatpei/lOWbnuWcsOWdgO+8mjxzcGFuIHYtdGV4dD1cInZhbC5yZXR1cm5fdXJsXCI+PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+5byC5q2l6YCa55+l5Zyw5Z2A77yaPHNwYW4gdi10ZXh0PVwidmFsLm5vdGlmeV91cmxcIj48L3NwYW4+PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0ZD7orqLljZXnirbmgIHvvJo8c3Ryb25nPjxzcGFuIHYtaWY9XCJ2YWwuc3RhdHVzXCIgY2xhc3M9bWR1aS10ZXh0LWNvbG9yLWdyZWVuPuiuouWNleacieaViDwvc3Bhbj48c3BhbiB2LWVsc2UgY2xhc3M9bWR1aS10ZXh0LWNvbG9yLWdyZXk+6K6i5Y2V5peg5pWIPC9zcGFuPjwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD7kuIvljZXml7bpl7TvvJo8c3BhbiB2LXRleHQ9XCJ2YWwuY3JlYXRlZF9hdFwiPjwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkPuS4i+WNleWVhuaIt++8mjxzcGFuIHYtdGV4dD1cIm1lcmNoYW50W3ZhbC5tZXJjaGFudF9pZF1cIj48L3NwYW4+PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0ZD7mlK/ku5jnirbmgIHvvJo8c3Ryb25nPjxzcGFuIHYtaWY9XCJ2YWwucGF5X3N0YXR1c1wiIGNsYXNzPW1kdWktdGV4dC1jb2xvci1ncmVlbj7mlK/ku5jmiJDlip88L3NwYW4+PHNwYW4gdi1lbHNlIGNsYXNzPW1kdWktdGV4dC1jb2xvci1ncmV5PuacquaUr+S7mDwvc3Bhbj48L3N0cm9uZz5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+5pSv5LuY5pe26Ze077yaPHNwYW4gdi10ZXh0PVwidmFsLnBheV90aW1lXCI+PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtZm9yPVwiKHZhbDIsa2V5Mikgb2YgdmFsLnBheW1lbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1kdWktdGV4dC1jb2xvci10ZWFsLTQwMFwiPnt7cGF5bWVudHNbdmFsMi50eXBlXSB8fCB2YWwyLnR5cGV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1kdWktdGV4dC1jb2xvci1yZWQtNTAwXCI+44CMe3t2YWwyLmFtb3VudH1944CNPC9zcGFuPjxzcGFuIHYtaWY9XCJrZXkyKzEgPCB2YWwucGF5bWVudC5sZW5ndGhcIj7jgIE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGQ+6YCa55+l54q25oCB77yaPHN0cm9uZz48c3BhbiB2LWlmPVwidmFsLm5vdGlmeV9zdGF0dXNcIiBjbGFzcz1tZHVpLXRleHQtY29sb3ItZ3JlZW4+6YCa55+l5oiQ5YqfPC9zcGFuPjxzcGFuIHYtZWxzZSBjbGFzcz1tZHVpLXRleHQtY29sb3ItZ3JleT7mnKrpgJrnn6U8L3NwYW4+PC9zdHJvbmc+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD7pgJrnn6Xml7bpl7TvvJo8c3BhbiB2LXRleHQ9XCJ2YWwubm90aWZ5X3RpbWVcIj48L3NwYW4+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD7lpIfms6jvvJo8c3BhbiB2LXRleHQ9XCJ2YWwucmVtYXJrc1wiPjwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRkPumAgOasvueKtuaAge+8mjxzdHJvbmc+PHNwYW4gdi1pZj1cInZhbC5yZWZ1bmRfc3RhdHVzXCIgY2xhc3M9bWR1aS10ZXh0LWNvbG9yLXJlZC01MDA+5bey6YCA5qy+PC9zcGFuPjxzcGFuIHYtZWxzZSBjbGFzcz1tZHVpLXRleHQtY29sb3ItZ3JleT7mnKrpgIDmrL48L3NwYW4+PC9zdHJvbmc+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD7pgIDmrL7ml7bpl7TvvJo8c3BhbiB2LXRleHQ9XCJ2YWwucmVmdW5kX3RpbWVcIj48L3NwYW4+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWJsdWUtZ3JleVwiIHYtaWY9XCJ2YWwuc3RhdHVzID09IDEgJiYgdmFsLnBheV9zdGF0dXMgPT0gMFwiIEBjbGljaz1cImNvbXBsZXRlKHZhbC5pZClcIj7mjonljZXooaXlm548L2E+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIHYtaWY9XCJ2YWwuc3RhdHVzID09IDEgJiYgdmFsLnBheV9zdGF0dXMgPT0gMSAmJiB2YWwucmVmdW5kX3N0YXR1cyA9PSAwXCIgQGNsaWNrPVwibm90aWZ5KHZhbC5pZClcIj7miYvliqjpgJrnn6U8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1yZWRcIiB2LWlmPVwidmFsLnN0YXR1cyA9PSAxICYmIHZhbC5wYXlfc3RhdHVzID09IDEgJiYgdmFsLnJlZnVuZF9zdGF0dXMgPT0gMFwiIEBjbGljaz1cInJlZnVuZCh2YWwuaWQsdmFsLmFtb3VudClcIj7orqLljZXpgIDmrL48L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdG1lcmNoYW50IDogJycsXG5cdFx0XHRcdG9yZGVyX3R5cGUgOiAnJyxcblx0XHRcdFx0cHVyc2VfdHlwZSA6ICcnLFxuXHRcdFx0XHR1c2VyX3R5cGUgOiAnJyxcblx0XHRcdFx0cGF5bWVudCA6ICcnLFxuXHRcdFx0XHRwYXltZW50cyA6ICcnLFxuXHRcdFx0XHRzdW1fYW1vdW50IDogJycsXG5cdFx0XHRcdGtleXdvcmQgOiB7XG5cdFx0XHRcdFx0cGFnZSA6IDEsXG5cdFx0XHRcdFx0ZXhwb3J0IDogMCxcblx0XHRcdFx0XHR1c2VyX2lkIDogJycsXG5cdFx0XHRcdFx0b3JkZXJfbm8gOiAnJyxcblx0XHRcdFx0XHRtZXJjaGFudF9pZCA6IFtdLFxuXHRcdFx0XHRcdG9yZGVyX3R5cGUgOiBbXSxcblx0XHRcdFx0XHRwdXJzZV90eXBlX2lkIDogW10sXG5cdFx0XHRcdFx0dXNlcl90eXBlX2lkIDogW10sXG5cdFx0XHRcdFx0cGF5X3N0YXR1cyA6IFtdLFxuXHRcdFx0XHRcdG5vdGlmeV9zdGF0dXMgOiBbXSxcblx0XHRcdFx0XHRyZWZ1bmRfc3RhdHVzIDogW10sXG5cdFx0XHRcdFx0cGF5bWVudCA6IFtdLFxuXHRcdFx0XHRcdGRhdGUgOiBbXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwYXlfc3RhdHVzIDogW1xuXHRcdFx0XHRcdCfmnKrmlK/ku5gnLFxuXHRcdFx0XHRcdCfmlK/ku5jmiJDlip8nXG5cdFx0XHRcdF0sXG5cdFx0XHRcdG5vdGlmeV9zdGF0dXMgOiBbXG5cdFx0XHRcdFx0J+acqumAmuefpScsXG5cdFx0XHRcdFx0J+mAmuefpeaIkOWKnydcblx0XHRcdFx0XSxcblx0XHRcdFx0cmVmdW5kX3N0YXR1cyA6IFtcblx0XHRcdFx0XHQn5pyq6YCA5qy+Jyxcblx0XHRcdFx0XHQn6YCA5qy+5oiQ5YqfJ1xuXHRcdFx0XHRdLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG1ldGhvZHMgOiB7XG5cdFx0XHRzZWFyY2gocGFnZSl7XG5cdFx0XHRcdHRoaXMua2V5d29yZC5wYWdlID0gcGFnZTtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLmV4cG9ydCA9IDA7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdGV4cG9ydHMoKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLmV4cG9ydCA9IDE7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdGNvbXBsZXRlKGlkKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLmNvbmZpcm0oJ+aJi+WKqOagh+iusOS4uuaUr+S7mOaIkOWKn+W5tuWIhuWPkemAmuefpe+8jOaYr+WQpuaUtuWIsOasvumhuemcgOi0ouWKoeaguOWunu+8jOeCueWHu+OAkOehruWumuOAkee7p+e7rScsICfkuInmlrnmlK/ku5jmvI/ljZUv5o6J5Y2V6KGl5ZueJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHBvc3QoJy9vcmRlci9jb21wbGV0ZScsIHtpZDogaWR9LCBmdW5jdGlvbiAoZGF0YSxtc2cpIHtcblx0XHRcdFx0XHRcdG1kdWkuYWxlcnQobXNnLCBmdW5jdGlvbiAoKSB7fSwge2hpc3Rvcnk6IGZhbHNlfSk7XG5cdFx0XHRcdFx0XHR0LmluaXQoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LCBmdW5jdGlvbiAoKSB7fSwge2hpc3Rvcnk6IGZhbHNlLCBjb25maXJtVGV4dDogJ+ehruWumicsIGNhbmNlbFRleHQ6ICflj5bmtognfSk7XG5cdFx0XHR9LFxuXHRcdFx0bm90aWZ5KGlkKSB7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0bWR1aS5jb25maXJtKCflvILmraXpgJrnn6XkvJrlvbHlk43llYbmiLflr7nmlK/ku5jnmoTlk43lupTvvIzlj6/og73pgKDmiJDlpJrmrKHnu5PnrpfnrYnpl67popjvvIznn6XmgonlkI7ngrnlh7vjgJDnoa7lrprjgJHnu6fnu60nLCAn5omL5Yqo5Y+R6LW35byC5q2l6YCa55+lJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHBvc3QoJy9vcmRlci9ub3RpZnknLCB7aWQ6IGlkfSwgZnVuY3Rpb24gKGRhdGEsbXNnKSB7XG5cdFx0XHRcdFx0XHRtZHVpLmFsZXJ0KG1zZywgZnVuY3Rpb24gKCkge30sIHtoaXN0b3J5OiBmYWxzZX0pO1xuXHRcdFx0XHRcdFx0dC5pbml0KCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSwgZnVuY3Rpb24gKCkge30sIHtoaXN0b3J5OiBmYWxzZSwgY29uZmlybVRleHQ6ICfnoa7lrponLCBjYW5jZWxUZXh0OiAn5Y+W5raIJ30pO1xuXHRcdFx0fSxcblx0XHRcdHJlZnVuZChpZCxhbW91bnQpIHtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLnByb21wdCgn6YCA5qy+6YeR6aKd5Lya6L+U6L+Y5Yiw5LiL5Y2V55So5oi355qE546w6YeR6ZKx5YyF5L2Z6aKd5Lit77yM6K+35Zyo5LiL5pa56L6T5YWl44CQ6YCA5qy+6YeR6aKd44CR44CC5rOo5oSP77ya6L6T5YWl5Y2V5L2N5Li65YiGJywgJ+iuouWNleaAu+mHkeminSjliIYp77yaJythbW91bnQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdGlmKHZhbHVlKXtcblx0XHRcdFx0XHRcdHBvc3QoJy9vcmRlci9yZWZ1bmQnLCB7aWQ6IGlkLGFtb3VudDp2YWx1ZX0sIGZ1bmN0aW9uIChkYXRhLG1zZykge1xuXHRcdFx0XHRcdFx0XHRtZHVpLmFsZXJ0KG1zZywgZnVuY3Rpb24gKCkge30sIHtoaXN0b3J5OiBmYWxzZX0pO1xuXHRcdFx0XHRcdFx0XHR0LmluaXQoKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBmdW5jdGlvbiAoKSB7fSwge2hpc3Rvcnk6IGZhbHNlLCBjb25maXJtVGV4dDogJ+ehruWumicsIGNhbmNlbFRleHQ6ICflj5bmtognfSk7XG5cdFx0XHR9LFxuXHRcdFx0aW5pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdGdldCgnL29yZGVyJyx0LmtleXdvcmQsZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5saXN0ID0gZGF0YS5saXN0O1xuXHRcdFx0XHRcdHQubWVyY2hhbnQgPSBkYXRhLm1lcmNoYW50O1xuXHRcdFx0XHRcdHQucHVyc2VfdHlwZSA9IGRhdGEucHVyc2VfdHlwZTtcblx0XHRcdFx0XHR0LnVzZXJfdHlwZSA9IGRhdGEudXNlcl90eXBlO1xuXHRcdFx0XHRcdHQub3JkZXJfdHlwZSA9IGRhdGEub3JkZXJfdHlwZTtcblx0XHRcdFx0XHR0LnBheW1lbnQgPSBkYXRhLnBheW1lbnQ7XG5cdFx0XHRcdFx0dC5wYXltZW50cyA9IGRhdGEucGF5bWVudHM7XG5cdFx0XHRcdFx0dC5zdW1fYW1vdW50ID0gZGF0YS5zdW1fYW1vdW50O1xuXHRcdFx0XHRcdGlmKHQua2V5d29yZC5leHBvcnQpe1xuXHRcdFx0XHRcdFx0bWR1aS5hbGVydCgn5Y+v5Zyo5bem5L6n44CQ5a+85Ye65Lu75Yqh44CR6I+c5Y2V5p+l55yL5Lu75Yqh54q25oCB5bm25LiL6L295paH5Lu2Jywn5bey5pS+5YWl5a+85Ye65Lu75YqhJyxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2V9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0dC5pbml0KCk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvb3JkZXIvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9yZGVyX2luZGV4XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidHlwb1wiIH0sIFtcbiAgICAgIF9jKFwiYmxvY2txdW90ZVwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrcXVvdGVfbm9ybWFsXCIgfSwgW1xuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOS4i+WNleeUqOaIt0lE77yaXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC51c2VyX2lkLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC51c2VyX2lkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ua2V5d29yZC51c2VyX2lkIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwidXNlcl9pZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx06K6i5Y2V5Y+377yaXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5vcmRlcl9ubyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQub3JkZXJfbm9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5rZXl3b3JkLm9yZGVyX25vIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwib3JkZXJfbm9cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTml6XmnJ/nrZvpgInvvJpcIiksXG4gICAgICAgICAgICBfYyhcInZ1ZS1kYXRlcGlja2VyLWxvY2FsXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY2xlYXJhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLmRhdGUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwiZGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQuZGF0ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdEFQSeWVhuaIt++8mlxcblxcdFxcdFxcdFxcdFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ubWVyY2hhbnQsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5tZXJjaGFudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC5tZXJjaGFudF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ua2V5d29yZC5tZXJjaGFudF9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5rZXl3b3JkLm1lcmNoYW50X2lkLCBpZCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ua2V5d29yZC5tZXJjaGFudF9pZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmtleXdvcmQubWVyY2hhbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXJjaGFudF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmtleXdvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVyY2hhbnRfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwibWVyY2hhbnRfaWRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhuYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTorqLljZXnsbvlnovvvJpcXG5cXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLm9yZGVyX3R5cGUsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5vcmRlcl90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLm9yZGVyX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ua2V5d29yZC5vcmRlcl90eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmtleXdvcmQub3JkZXJfdHlwZSwgbmFtZSkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ua2V5d29yZC5vcmRlcl90eXBlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ua2V5d29yZC5vcmRlcl90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlcl90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlcl90eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcIm9yZGVyX3R5cGVcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhuYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTorqLljZXnirbmgIHvvJpcXG5cXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnBheV9zdGF0dXMsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5wYXlfc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLnBheV9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmtleXdvcmQucGF5X3N0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5rZXl3b3JkLnBheV9zdGF0dXMsIGlkKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5rZXl3b3JkLnBheV9zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5rZXl3b3JkLnBheV9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXlfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXlfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcInBheV9zdGF0dXNcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhuYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLm5vdGlmeV9zdGF0dXMsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5ub3RpZnlfc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLm5vdGlmeV9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmtleXdvcmQubm90aWZ5X3N0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5rZXl3b3JkLm5vdGlmeV9zdGF0dXMsIGlkKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5rZXl3b3JkLm5vdGlmeV9zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5rZXl3b3JkLm5vdGlmeV9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZnlfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZnlfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcIm5vdGlmeV9zdGF0dXNcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhuYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnJlZnVuZF9zdGF0dXMsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5yZWZ1bmRfc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLnJlZnVuZF9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmtleXdvcmQucmVmdW5kX3N0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5rZXl3b3JkLnJlZnVuZF9zdGF0dXMsIGlkKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5rZXl3b3JkLnJlZnVuZF9zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5rZXl3b3JkLnJlZnVuZF9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWZ1bmRfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWZ1bmRfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcInJlZnVuZF9zdGF0dXNcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhuYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTmlK/ku5jnsbvlnovvvJpcXG5cXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnBheW1lbnQsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5wYXltZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLnBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ua2V5d29yZC5wYXltZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmtleXdvcmQucGF5bWVudCwgbmFtZSkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ua2V5d29yZC5wYXltZW50XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ua2V5d29yZC5wYXltZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXltZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcInBheW1lbnRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGF5bWVudHNbbmFtZV0gfHwgbmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoKDEpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIiB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwic2VhcmNoXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIuaQnOe0olwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1waW5rXCIsXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmV4cG9ydHMgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJmaWxlX3VwbG9hZFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCLlr7zlh7pcIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYmxvY2txdW90ZVwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrcXVvdGVfbm9ybWFsXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHTmlK/ku5jph5Hpop3nu5/orqEo5YiGKVxcblxcdFxcdFxcdFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5zdW1fYW1vdW50LCBmdW5jdGlvbihhbW91bnQsIHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW0tci0zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYXltZW50c1t0eXBlXSB8fCB0eXBlKSArIFwi77yaXCIgKyBfdm0uX3MoYW1vdW50KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZS1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QuZGF0YSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb2xvci1ncmV5LTIwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLorqLljZXph5Hpop0o5YiGKe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjRkUwMDE2XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5hbW91bnQpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLorqLljZXlj7fvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiI0ZGNkEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwub3JkZXJfbm8pIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLllYblk4HlkI3vvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiIzE2OTMyMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucHJvZHVjdF9uYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiL5Y2V55So5oi3SUTvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwudXNlcl9pZCkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWQjOatpei/lOWbnuWcsOWdgO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZXR1cm5fdXJsKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5byC5q2l6YCa55+l5Zyw5Z2A77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLm5vdGlmeV91cmwpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLorqLljZXnirbmgIHvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1ncmVlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLorqLljZXmnInmlYhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0LWNvbG9yLWdyZXlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K6i5Y2V5peg5pWIXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiL5Y2V5pe26Ze077yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmNyZWF0ZWRfYXQpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuIvljZXllYbmiLfvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm1lcmNoYW50W3ZhbC5tZXJjaGFudF9pZF0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaUr+S7mOeKtuaAge+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIHZhbC5wYXlfc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1ncmVlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmlK/ku5jmiJDlip9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0LWNvbG9yLWdyZXlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pyq5pSv5LuYXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pSv5LuY5pe26Ze077yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnBheV90aW1lKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2wodmFsLnBheW1lbnQsIGZ1bmN0aW9uKHZhbDIsIGtleTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY29sb3ItdGVhbC00MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucGF5bWVudHNbdmFsMi50eXBlXSB8fCB2YWwyLnR5cGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0LWNvbG9yLXJlZC01MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuOAjFwiICsgX3ZtLl9zKHZhbDIuYW1vdW50KSArIFwi44CNXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTIgKyAxIDwgdmFsLnBheW1lbnQubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLjgIFcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIumAmuefpeeKtuaAge+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIHZhbC5ub3RpZnlfc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1ncmVlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpgJrnn6XmiJDlip9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0LWNvbG9yLWdyZXlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pyq6YCa55+lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6YCa55+l5pe26Ze077yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLm5vdGlmeV90aW1lKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5aSH5rOo77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlbWFya3MpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpgIDmrL7nirbmgIHvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwucmVmdW5kX3N0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1yZWQtNTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5bey6YCA5qy+XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1ncmV5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuacqumAgOasvlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIumAgOasvuaXtumXtO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZWZ1bmRfdGltZSkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIHZhbC5zdGF0dXMgPT0gMSAmJiB2YWwucGF5X3N0YXR1cyA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1ibHVlLWdyZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tcGxldGUodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaOieWNleihpeWbnlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICB2YWwuc3RhdHVzID09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgdmFsLnBheV9zdGF0dXMgPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICB2YWwucmVmdW5kX3N0YXR1cyA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3RpZnkodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaJi+WKqOmAmuefpVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICB2YWwuc3RhdHVzID09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgdmFsLnBheV9zdGF0dXMgPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICB2YWwucmVmdW5kX3N0YXR1cyA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZWZ1bmQodmFsLmlkLCB2YWwuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuiuouWNlemAgOasvlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbG9yLXdoaXRlIGZvb3RlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICAgIHRvdGFsOiBfdm0ubGlzdC50b3RhbCxcbiAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmxpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlbnVtOiBfdm0ubGlzdC5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZTogX3ZtLmxpc3QubGFzdF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlZ3JvdXA6IDksXG4gICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5zZWFyY2ggfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTg4MTU0OTg2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04ODE1NDk4NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9vcmRlci9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDM1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04ODE1NDk4NlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcb3JkZXJcXFxcaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTg4MTU0OTg2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtODgxNTQ5ODZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9vcmRlci9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMjAiXSwic291cmNlUm9vdCI6IiJ9