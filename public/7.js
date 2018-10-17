webpackJsonp([7],{

/***/ 363:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			purse_type: '',
			user_type: '',
			merchant: '',
			reason: '',
			amount_into: 0,
			amount_out: 0,
			keyword: {
				page: 1,
				export: 0,
				id: '',
				user_id: '',
				reason: '',
				amount_flag: [],
				purse_type_id: [],
				user_type_id: [],
				merchant_id: 1,
				date: []
			}
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
		untransfer: function untransfer(id, amount) {
			var t = this;
			mdui.prompt('冲正此记录后可能造成业务匹配问题，对应的转账金额也会原路返还，知悉后请在下方输入【冲正原因】', '冲正金额(分)：' + amount, function (value) {
				if (value) {
					t.$API.post('/transfer/untransfer', { id: id, remarks: value }).then(function (data) {
						mdui.alert('已成功冲正并返还金额', function () {}, { history: false });
						t.init();
					}).catch(function (msg) {});
				}
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		tab_change: function tab_change(id) {
			this.keyword.page = 1;
			this.keyword.merchant_id = id;
			this.init();
		},
		init: function init() {
			var t = this;
			t.$API.get('/transfer/index', t.keyword).then(function (data) {
				t.list = data.list;
				t.purse_type = data.purse_type;
				t.user_type = data.user_type;
				t.merchant = data.merchant;
				t.reason = data.reason;
				t.amount_into = data.amount_into;
				t.amount_out = data.amount_out;
				if (t.keyword.export) {
					mdui.alert('可在左侧【导出任务】菜单查看任务状态并下载文件', '已放入导出任务', function () {}, { history: false });
				}
				t.$nextTick(function () {
					$('.mdui-tab').mutation();
				});
			}).catch(function (msg) {});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.init();
	}
});

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "transfer_index" }, [
    _c("div", { staticClass: "typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c("p", [
          _vm._v("\n\t\t\t\t转账ID："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.id,
                expression: "keyword.id"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "id", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n\t\t\t\t用户ID："),
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
        _c("p", [
          _vm._v("\n\t\t\t\treason："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.reason,
                expression: "keyword.reason"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.reason },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "reason", $event.target.value)
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
            _vm._v("\n\t\t\t\t钱包类型：\n\t\t\t\t"),
            _vm._l(_vm.purse_type, function(name, id) {
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
                        value: _vm.keyword.purse_type_id,
                        expression: "keyword.purse_type_id"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: id,
                      checked: Array.isArray(_vm.keyword.purse_type_id)
                        ? _vm._i(_vm.keyword.purse_type_id, id) > -1
                        : _vm.keyword.purse_type_id
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.purse_type_id,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "purse_type_id",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "purse_type_id",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "purse_type_id", $$c)
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
            _vm._v("\n\t\t\t\t身份类型：\n\t\t\t\t"),
            _vm._l(_vm.user_type, function(name, id) {
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
                        value: _vm.keyword.user_type_id,
                        expression: "keyword.user_type_id"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: id,
                      checked: Array.isArray(_vm.keyword.user_type_id)
                        ? _vm._i(_vm.keyword.user_type_id, id) > -1
                        : _vm.keyword.user_type_id
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.user_type_id,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.keyword,
                                "user_type_id",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "user_type_id",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "user_type_id", $$c)
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
        _vm._v("\n\t\t\t有效转账记录统计，不包括冲正(分)\n\t\t\t"),
        _c("p", { staticStyle: { "line-height": "25px" } }, [
          _c("span", { staticClass: "mdui-m-r-3" }, [
            _vm._v("收入：" + _vm._s(_vm.amount_into))
          ]),
          _c("span", { staticClass: "mdui-m-r-3" }, [
            _vm._v("支出：" + _vm._s(_vm.amount_out))
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mdui-tab", attrs: { "mdui-tab": "" } },
      _vm._l(_vm.merchant, function(name, id, key) {
        return _c("a", {
          class: {
            "mdui-btn": true,
            "mdui-ripple": true,
            "mdui-tab-active": key === 0
          },
          attrs: { href: "#tab_" + key },
          domProps: { textContent: _vm._s(name) },
          on: {
            click: function($event) {
              _vm.tab_change(id)
            }
          }
        })
      })
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-table-fluid table-data-fluid" }, [
      _c(
        "table",
        { staticClass: "mdui-table mdui-table-hoverable table-data" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.list.data, function(val, key, index) {
                return [
                  _c(
                    "tr",
                    {
                      staticClass: "mdui-color-grey-200",
                      on: {
                        dblclick: function($event) {
                          val.more = !val.more
                        }
                      }
                    },
                    [
                      _c("td", {
                        domProps: { textContent: _vm._s("#" + (key + 1)) }
                      }),
                      _vm._v(" "),
                      _c("td", { domProps: { textContent: _vm._s(val.id) } }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.reason) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: {
                          textContent: _vm._s(_vm.reason[val.reason])
                        }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.amount) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.created_at) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.updated_at) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.remarks) }
                      }),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "mdui-btn-group" }, [
                          val.status == 1
                            ? _c(
                                "a",
                                {
                                  staticClass:
                                    "mdui-btn mdui-ripple mdui-color-theme",
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      _vm.untransfer(val.id, val.amount)
                                    }
                                  }
                                },
                                [_vm._v("单笔冲正")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          val.status == 2
                            ? _c(
                                "a",
                                {
                                  staticClass: "mdui-btn",
                                  attrs: {
                                    disabled: "",
                                    "mdui-tooltip":
                                      "{content:'此流水已不再具有参考价值，标记为废弃，仅做记录查询用途',delay:500}"
                                  }
                                },
                                [_vm._v("已冲正")]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: val.more,
                          expression: "val.more"
                        }
                      ]
                    },
                    [
                      _c("td", { staticClass: "mdui-text-color-deep-orange" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "mdui-text-color-deep-orange" }, [
                        _vm._v("出账信息：")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "mdui-text-color-deep-orange" }, [
                        _vm._v("用户ID："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.out_user_id) }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-deep-orange",
                        domProps: {
                          textContent: _vm._s(
                            _vm.user_type[val.out_user_type_id]
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-deep-orange",
                        domProps: {
                          textContent: _vm._s(
                            _vm.purse_type[val.out_purse_type_id]
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("td", { staticClass: "mdui-text-color-deep-orange" }, [
                        _vm._v("钱包ID："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.out_purse_id) }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "mdui-text-color-deep-orange",
                          attrs: { colspan: "3" }
                        },
                        [
                          _vm._v("出账后余额(原)："),
                          _c("span", {
                            domProps: { textContent: _vm._s(val.out_balance) }
                          }),
                          _vm._v("("),
                          _c("span", {
                            domProps: { textContent: _vm._s("+" + val.amount) }
                          }),
                          _vm._v(")")
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: val.more,
                          expression: "val.more"
                        }
                      ]
                    },
                    [
                      _c("td", { staticClass: "mdui-text-color-teal" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "mdui-text-color-teal" }, [
                        _vm._v("进账信息：")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "mdui-text-color-teal" }, [
                        _vm._v("用户ID："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.into_user_id) }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-teal",
                        domProps: {
                          textContent: _vm._s(
                            _vm.user_type[val.into_user_type_id]
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "mdui-text-color-teal",
                        domProps: {
                          textContent: _vm._s(
                            _vm.purse_type[val.into_purse_type_id]
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("td", { staticClass: "mdui-text-color-teal" }, [
                        _vm._v("钱包ID："),
                        _c("span", {
                          domProps: { textContent: _vm._s(val.into_purse_id) }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "mdui-text-color-teal",
                          attrs: { colspan: "3" }
                        },
                        [
                          _vm._v("进账后余额(原)："),
                          _c("span", {
                            domProps: { textContent: _vm._s(val.into_balance) }
                          }),
                          _vm._v("("),
                          _c("span", {
                            domProps: { textContent: _vm._s("-" + val.amount) }
                          }),
                          _vm._v(")")
                        ]
                      )
                    ]
                  )
                ]
              })
            ],
            2
          )
        ]
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账reason")]),
        _vm._v(" "),
        _c("th", [_vm._v("reason说明")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账金额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
        _vm._v(" "),
        _c("th", [_vm._v("修改时间")]),
        _vm._v(" "),
        _c("th", [_vm._v("备注")]),
        _vm._v(" "),
        _c("th", [_vm._v("操作")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ba2ec38", module.exports)
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(363)
/* template */
var __vue_template__ = __webpack_require__(364)
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
Component.options.__file = "resources\\assets\\js\\components\\transfer\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ba2ec38", Component.options)
  } else {
    hotAPI.reload("data-v-5ba2ec38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});