webpackJsonp([15],{

/***/ 373:
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
//
//
//
//
//
//
//
//
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
			dialog: '',
			form: {
				id: 0,
				balance: 0,
				freeze: 0,
				freeze_add: 0,
				freeze_remarks: '后台管理员冻结',
				status: 0,
				remarks: ''
			},
			keyword: {
				page: 1,
				user_id: '',
				user_type_id: [],
				purse_type_id: [],
				merchant_id: 1
			}
		};
	},

	methods: {
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		tab_change: function tab_change(id) {
			this.keyword.page = 1;
			this.keyword.merchant_id = id;
			this.init();
		},
		add: function add(id) {
			var t = this;
			t.dialog.open();
			t.$API.get('/purse/user/' + id).then(function (data) {
				t.form.id = data.id;
				t.form.balance = data.balance;
				t.form.freeze = data.freeze;
				t.form.status = data.status;
				t.form.remarks = data.remarks;
				t.form.freeze_add = 0;
				t.$nextTick(function () {
					$('.mdui-dialog').mutation();
				});
			}).catch(function () {});
		},
		add_submit: function add_submit() {
			var t = this;
			t.$API.post('/purse/user', t.form).then(function () {
				t.dialog.close();
				t.init();
			}).catch(function (msg) {});
		},
		init: function init() {
			var t = this;
			t.$API.get('/purse/user', t.keyword).then(function (data) {
				t.list = data.list;
				t.merchant = data.merchant;
				t.user_type = data.user_type;
				t.purse_type = data.purse_type;
				t.$nextTick(function () {
					$('.mdui-tab').mutation();
				});
			}).catch(function (msg) {});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.dialog = new mdui.Dialog('.dialog_add', { history: false });
		t.init();
	}
});

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "purse_user" }, [
    _c(
      "div",
      {
        staticClass: "mdui-typo",
        on: {
          keydown: function($event) {
            if (
              !("button" in $event) &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            _vm.search(1)
          }
        }
      },
      [
        _c("blockquote", { staticClass: "blockquote_normal" }, [
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
          )
        ])
      ]
    ),
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
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-table-fluid" }, [
      _c("table", { staticClass: "mdui-table mdui-table-hoverable" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.list.data, function(val, key, index) {
            return _c("tr", [
              _c("td", { domProps: { textContent: _vm._s("#" + (key + 1)) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.id) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(_vm.merchant[val.merchant_id]) }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.user_id) } }),
              _vm._v(" "),
              _c("td", {
                domProps: {
                  textContent: _vm._s(_vm.user_type[val.user_type_id])
                }
              }),
              _vm._v(" "),
              _c("td", {
                domProps: {
                  textContent: _vm._s(_vm.purse_type[val.purse_type_id])
                }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.balance) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.freeze) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(val.balance - val.freeze) }
              }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(val.status ? "启用" : "禁用") }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.remarks) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.created_at) } }),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "mdui-btn-group" }, [
                  _c(
                    "a",
                    {
                      staticClass: "mdui-btn mdui-ripple mdui-color-theme",
                      on: {
                        click: function($event) {
                          _vm.add(val.id)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  )
                ])
              ])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-dialog dialog_add" }, [
      _c("div", { staticClass: "mdui-dialog-title" }, [
        _vm._v("\n\t\t\t用户钱包新增/修改\n\t\t")
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "mdui-dialog-content",
          on: {
            keydown: function($event) {
              if (
                !("button" in $event) &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.add_submit($event)
            }
          }
        },
        [
          _c("form", [
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("当前冻结金额")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.freeze,
                      expression: "form.freeze"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { disabled: "", type: "tel" },
                  domProps: { value: _vm.form.freeze },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "freeze", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("冻结金额(不可大于余额 " + _vm._s(_vm.form.balance))
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.freeze_add,
                      expression: "form.freeze_add"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "tel" },
                  domProps: { value: _vm.form.freeze_add },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "freeze_add", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("冻结说明")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.freeze_remarks,
                      expression: "form.freeze_remarks"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.freeze_remarks },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "freeze_remarks", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("label", { staticClass: "mdui-radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.status,
                      expression: "form.status"
                    }
                  ],
                  attrs: { type: "radio", name: "status", value: "1" },
                  domProps: {
                    checked: !!_vm.form.status,
                    checked: _vm._q(_vm.form.status, "1")
                  },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.form, "status", "1")
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", { staticClass: "mdui-radio-icon" }),
                _vm._v("\n\t\t\t\t\t\t启用\n\t\t\t\t\t")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("label", { staticClass: "mdui-radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.status,
                      expression: "form.status"
                    }
                  ],
                  attrs: { type: "radio", name: "status", value: "0" },
                  domProps: {
                    checked: !_vm.form.status,
                    checked: _vm._q(_vm.form.status, "0")
                  },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.form, "status", "0")
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", { staticClass: "mdui-radio-icon" }),
                _vm._v("\n\t\t\t\t\t\t禁用\n\t\t\t\t\t")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("备注")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.remarks,
                      expression: "form.remarks"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.remarks },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "remarks", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mdui-dialog-actions" }, [
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple",
            attrs: { "mdui-dialog-close": "" }
          },
          [_vm._v("取消")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-color-theme",
            on: { click: _vm.add_submit }
          },
          [_vm._v("提交")]
        )
      ])
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
        _c("th", [_vm._v("钱包ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("商户")]),
        _vm._v(" "),
        _c("th", [_vm._v("用户ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("身份类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("钱包类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("总余额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("冻结余额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("可用余额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("备注")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-795e9cdc", module.exports)
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(373)
/* template */
var __vue_template__ = __webpack_require__(374)
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
Component.options.__file = "resources/assets/js/components/purse/user.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-795e9cdc", Component.options)
  } else {
    hotAPI.reload("data-v-795e9cdc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});