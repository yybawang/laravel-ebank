webpackJsonp([12],{

/***/ 334:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			merchant: '',
			user_type: '',
			purse_type: '',
			dialog: '',
			dialog_list: [],
			dialog_reason: [],
			dialog_keyword: {
				page: 1,
				user_type_id: 0,
				purse_type_id: 0,
				type: '',
				reason: ''
			},
			keyword: {
				page: 1,
				merchant_id: 1
			}
		};
	},

	methods: {
		detail: function detail(user_type_id, purse_type_id, type) {
			this.dialog_keyword.page = 1;
			this.dialog_keyword.user_type_id = user_type_id;
			this.dialog_keyword.purse_type_id = purse_type_id;
			this.dialog_keyword.type = type;
			this.detail_init();
		},
		detail_search: function detail_search(page) {
			this.dialog_keyword.page = page;
			this.detail_init();
		},
		detail_init: function detail_init() {
			var t = this;
			get('/report/purse_detail', t.dialog_keyword, function (data) {
				t.dialog_list = data.list;
				t.dialog_reason = data.reason;
				t.$nextTick(function () {
					t.dialog.open();
				});
			});
		},
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		tab_change: function tab_change(id) {
			this.keyword.page = 1;
			this.keyword.merchant_id = id;
			this.init();
		},
		init: function init() {
			var t = this;
			get('/report/purse', t.keyword, function (data) {
				t.list = data.list;
				t.merchant = data.merchant;
				t.user_type = data.user_type;
				t.purse_type = data.purse_type;
				t.$nextTick(function () {
					$('.mdui-tab').mutation();
				});
			});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.dialog = new mdui.Dialog('.detail_dialog', { history: false });
		t.init();
	}
});

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "report_purse" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mdui-tab", attrs: { "mdui-tab": "" } },
      _vm._l(_vm.merchant, function(name, id, key) {
        return _c("a", {
          class: {
            "mdui-btn": true,
            "mdui-ripple": true,
            "mdui-tab-active": key == 0
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
    _c("div", { staticClass: "mdui-table-fluid" }, [
      _c("table", { staticClass: "mdui-table mdui-table-hoverable" }, [
        _c("thead", [
          _c(
            "tr",
            [
              _c("th"),
              _vm._v(" "),
              _vm._l(_vm.user_type, function(name, id) {
                return _c("th", { staticClass: "mdui-text-center" }, [
                  _vm._v(_vm._s(name))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.purse_type, function(purse_type_name, purse_type_id) {
            return _c(
              "tr",
              [
                _c("td", [_vm._v(_vm._s(purse_type_name) + "(分)")]),
                _vm._v(" "),
                _vm._l(_vm.user_type, function(user_type_name, user_type_id) {
                  return _c("td", { staticClass: "mdui-text-center" }, [
                    _c(
                      "a",
                      {
                        staticClass:
                          "mdui-btn mdui-ripple mdui-text-color-orange",
                        on: {
                          click: function($event) {
                            _vm.detail(user_type_id, purse_type_id, "out")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "出:" +
                            _vm._s(_vm.list[user_type_id][purse_type_id].out)
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "mdui-btn mdui-ripple mdui-text-color-green",
                        on: {
                          click: function($event) {
                            _vm.detail(user_type_id, purse_type_id, "into")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "进:" +
                            _vm._s(_vm.list[user_type_id][purse_type_id].into)
                        )
                      ]
                    )
                  ])
                })
              ],
              2
            )
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "mdui-dialog detail_dialog",
        staticStyle: { "max-width": "none" }
      },
      [
        _c("div", { staticClass: "mdui-dialog-title" }, [
          _vm._v("\n\t\t\t钱包流水详情\n\t\t")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "mdui-dialog-content",
            staticStyle: { height: "400px" }
          },
          [
            _c("div", { staticClass: "mdui-table-fluid" }, [
              _c("table", { staticClass: "mdui-table mdui-table-hoverable" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.dialog_list.data, function(val, key, index) {
                    return _c("tr", [
                      _c("td", {
                        domProps: { textContent: _vm._s("#" + (key + 1)) }
                      }),
                      _vm._v(" "),
                      _c("td", { domProps: { textContent: _vm._s(val.id) } }),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(val.out_user_id) +
                            "/" +
                            _vm._s(val.into_user_id)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.reason) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.amount) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: {
                          textContent: _vm._s(_vm.dialog_reason[val.reason])
                        }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.created_at) }
                      })
                    ])
                  })
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mdui-dialog-actions" },
          [
            _c("pagination", {
              attrs: {
                pageInfo: {
                  total: _vm.dialog_list.total,
                  current: _vm.dialog_list.current_page,
                  pagenum: _vm.dialog_list.per_page,
                  page: _vm.dialog_list.last_page,
                  pagegroup: 5,
                  skin: "#2196F3"
                }
              },
              on: { change: _vm.detail_search }
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "mdui-btn mdui-ripple",
                attrs: { "mdui-dialog-close": "" }
              },
              [_vm._v("关闭")]
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mdui-typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c("p", [
          _vm._v("注：钱包进出统计，根据转账流水以及第三方支付订单计算所得")
        ])
      ])
    ])
  },
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
        _c("th", [_vm._v("出/进账用户")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账reason代码")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账金额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("行为名称")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6dcdfdca", module.exports)
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(334)
/* template */
var __vue_template__ = __webpack_require__(335)
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
Component.options.__file = "resources/assets/js/components/report/purse.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dcdfdca", Component.options)
  } else {
    hotAPI.reload("data-v-6dcdfdca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});