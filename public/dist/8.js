webpackJsonp([8],{

/***/ 395:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			form: '',
			dialog: '',
			keyword: {
				page: 1,
				key: '',
				value: '',
				date: []
			}
		};
	},

	methods: {
		add: function add(id) {
			var t = this;
			t.dialog.open();
			t.$API.get('/system/config/' + id).then(function (data) {
				t.form = data;
			}).catch(function (msg) {});
		},
		add_submit: function add_submit() {
			var t = this;
			t.$API.post('/system/config', t.form).then(function () {
				t.dialog.close();
				t.init();
			}).catch(function (msg) {});
		},
		del: function del(id) {
			var t = this;
			mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认?', function () {
				t.$API.del('/system/config', { id: id }).then(function () {
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		rank: function rank(id, action) {
			var t = this;
			t.tips('更新排序中...');
			t.$API.post('/system/config_rank', { id: id, action: action }).then(function (data) {
				t.init();
			}).catch(function (msg) {});
		},
		init: function init() {
			var t = this;
			t.$API.get('/system/config', t.keyword).then(function (data) {
				t.list = data.list;
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

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "purse_user" }, [
    _c(
      "div",
      {
        staticClass: "typo",
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
          _c(
            "a",
            {
              staticClass: "mdui-btn mdui-ripple mdui-color-theme",
              on: {
                click: function($event) {
                  _vm.add(0)
                }
              }
            },
            [
              _c(
                "i",
                { staticClass: "mdui-icon mdui-icon-left material-icons" },
                [_vm._v("add")]
              ),
              _vm._v("添加")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mdui-divider" }),
        _vm._v(" "),
        _c("blockquote", { staticClass: "blockquote_normal" }, [
          _c("p", [
            _vm._v("\n\t\t\t\t键："),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.keyword.key,
                  expression: "keyword.key"
                }
              ],
              staticClass: "mdui-textfield-input input_normal",
              attrs: { type: "text" },
              domProps: { value: _vm.keyword.key },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.keyword, "key", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("\n\t\t\t\t值："),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.keyword.value,
                  expression: "keyword.value"
                }
              ],
              staticClass: "mdui-textfield-input input_normal",
              attrs: { type: "text" },
              domProps: { value: _vm.keyword.value },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.keyword, "value", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "p",
            [
              _vm._v("\n\t\t\t\t日期筛选："),
              _c("date-picker", {
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
              _c("td", { domProps: { textContent: _vm._s(val.key) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.value) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.tips) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(val.status ? "启用" : "禁用") }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.created_at) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.rank) } }),
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
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "mdui-btn mdui-ripple mdui-color-deep-orange",
                      on: {
                        click: function($event) {
                          _vm.del(val.id)
                        }
                      }
                    },
                    [_vm._v("删除")]
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
        _vm._v("\n\t\t\t系统配置新增/修改\n\t\t")
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
                  _vm._v("配置键名")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.key,
                      expression: "form.key"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.key },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "key", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("配置值")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.value,
                      expression: "form.value"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.value },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "value", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("提示")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.tips,
                      expression: "form.tips"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.tips },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "tips", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("展示列表排序(小位数靠前)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.rank,
                      expression: "form.rank"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "text" },
                  domProps: { value: _vm.form.rank },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "rank", $event.target.value)
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
        _c("th", [_vm._v("键")]),
        _vm._v(" "),
        _c("th", [_vm._v("值")]),
        _vm._v(" "),
        _c("th", [_vm._v("提示")]),
        _vm._v(" "),
        _c("th", [_vm._v("状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
        _vm._v(" "),
        _c("th", [_vm._v("排序")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-47c5859b", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(395)
/* template */
var __vue_template__ = __webpack_require__(396)
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
Component.options.__file = "resources/assets/js/components/system/config.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47c5859b", Component.options)
  } else {
    hotAPI.reload("data-v-47c5859b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});