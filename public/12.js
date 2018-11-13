webpackJsonp([12],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/report/purse.vue":
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
			t.$API.get('/report/purse_detail', t.dialog_keyword).then(function (data) {
				t.dialog_list = data.list;
				t.dialog_reason = data.reason;
				t.$nextTick(function () {
					t.dialog.open();
				});
			}).catch(function (msg) {});
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
			t.$API.get('/report/purse', t.keyword).then(function (data) {
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
		t.dialog = new mdui.Dialog('.detail_dialog', { history: false });
		t.init();
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6dcdfdca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/report/purse.vue":
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

/***/ "./resources/assets/js/components/report/purse.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/report/purse.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6dcdfdca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/report/purse.vue")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWU/Zjc5OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3B1cnNlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFGQTtBQUNBLEtBREEsa0JBQ0E7QUFDQTtBQUNBLFdBREE7QUFFQSxlQUZBO0FBR0EsZ0JBSEE7QUFJQSxpQkFKQTtBQUtBLGFBTEE7QUFNQSxrQkFOQTtBQU9BLG9CQVBBO0FBUUE7QUFDQSxXQURBO0FBRUEsbUJBRkE7QUFHQSxvQkFIQTtBQUlBLFlBSkE7QUFLQTtBQUxBLElBUkE7QUFlQTtBQUNBLFdBREE7QUFFQTtBQUZBO0FBZkE7QUFvQkEsRUF0QkE7O0FBdUJBO0FBQ0EsUUFEQSxrQkFDQSxZQURBLEVBQ0EsYUFEQSxFQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVBBO0FBUUEsZUFSQSx5QkFRQSxJQVJBLEVBUUE7QUFDQTtBQUNBO0FBQ0EsR0FYQTtBQVlBLGFBWkEseUJBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsSUFOQSxFQU1BLEtBTkEsQ0FNQSxnQkFFQSxDQVJBO0FBU0EsR0F2QkE7QUF3QkEsUUF4QkEsa0JBd0JBLElBeEJBLEVBd0JBO0FBQ0E7QUFDQTtBQUNBLEdBM0JBO0FBNEJBLFlBNUJBLHNCQTRCQSxFQTVCQSxFQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBaENBO0FBaUNBLE1BakNBLGtCQWlD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QUFJLEtBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNwUEE7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxvWUFBOFU7QUFDM1c7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQywyUEFBMk87QUFDMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicmVwb3J0X3B1cnNlXCI+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdHlwb1wiPlxuXHRcdFx0PGJsb2NrcXVvdGUgY2xhc3M9XCJibG9ja3F1b3RlX25vcm1hbFwiPlxuXHRcdFx0XHQ8cD7ms6jvvJrpkrHljIXov5vlh7rnu5/orqHvvIzmoLnmja7ovazotKbmtYHmsLTku6Xlj4rnrKzkuInmlrnmlK/ku5jorqLljZXorqHnrpfmiYDlvpc8L3A+XG5cdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdGFiXCIgbWR1aS10YWI+XG5cdFx0XHQ8YSA6aHJlZj1cIicjdGFiXycra2V5XCIgOmNsYXNzPVwieydtZHVpLWJ0bic6dHJ1ZSwnbWR1aS1yaXBwbGUnOnRydWUsJ21kdWktdGFiLWFjdGl2ZSc6a2V5PT09MH1cIiB2LWZvcj1cIihuYW1lLGlkLGtleSkgb2YgbWVyY2hhbnRcIiB2LXRleHQ9XCJuYW1lXCIgQGNsaWNrPVwidGFiX2NoYW5nZShpZClcIj48L2E+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdGFibGUtZmx1aWRcIj5cblx0XHRcdDx0YWJsZSBjbGFzcz1cIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIj5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRoPjwvdGg+XG5cdFx0XHRcdFx0PHRoIGNsYXNzPVwibWR1aS10ZXh0LWNlbnRlclwiIHYtZm9yPVwiKG5hbWUsaWQpIG9mIHVzZXJfdHlwZVwiPnt7bmFtZX19PC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcblx0XHRcdFx0PHRyIHYtZm9yPVwiKHB1cnNlX3R5cGVfbmFtZSxwdXJzZV90eXBlX2lkKSBvZiBwdXJzZV90eXBlXCI+XG5cdFx0XHRcdFx0PHRkPnt7cHVyc2VfdHlwZV9uYW1lfX0o5YiGKTwvdGQ+XG5cdFx0XHRcdFx0PHRkIGNsYXNzPVwibWR1aS10ZXh0LWNlbnRlclwiIHYtZm9yPVwiKHVzZXJfdHlwZV9uYW1lLHVzZXJfdHlwZV9pZCkgb2YgdXNlcl90eXBlXCI+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktdGV4dC1jb2xvci1vcmFuZ2VcIiBAY2xpY2s9XCJkZXRhaWwodXNlcl90eXBlX2lkLHB1cnNlX3R5cGVfaWQsJ291dCcpXCI+5Ye6Ont7bGlzdFt1c2VyX3R5cGVfaWRdW3B1cnNlX3R5cGVfaWRdLm91dH19PC9hPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLXRleHQtY29sb3ItZ3JlZW5cIiBAY2xpY2s9XCJkZXRhaWwodXNlcl90eXBlX2lkLHB1cnNlX3R5cGVfaWQsJ2ludG8nKVwiPui/mzp7e2xpc3RbdXNlcl90eXBlX2lkXVtwdXJzZV90eXBlX2lkXS5pbnRvfX08L2E+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nIGRldGFpbF9kaWFsb2dcIiBzdHlsZT1cIm1heC13aWR0aDpub25lO1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLXRpdGxlXCI+XG5cdFx0XHRcdOmSseWMhea1geawtOivpuaDhVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctY29udGVudFwiIHN0eWxlPVwiaGVpZ2h0OjQwMHB4O1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJsZS1mbHVpZFwiPlxuXHRcdFx0XHRcdDx0YWJsZSBjbGFzcz1cIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIj5cblx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPiM8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+6L2s6LSmSUQ8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+5Ye6L+i/m+i0pueUqOaItzwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD7ovazotKZyZWFzb27ku6PnoIE8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+6L2s6LSm6YeR6aKdKOWIhik8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+6KGM5Li65ZCN56ewPC90aD5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdDx0aD7liJvlu7rml7bpl7Q8L3RoPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx0ciB2LWZvcj1cIih2YWwsa2V5LGluZGV4KSBvZiBkaWFsb2dfbGlzdC5kYXRhXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCInIycrKGtleSsxKVwiPjwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuaWRcIj48L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3t2YWwub3V0X3VzZXJfaWR9fS97e3ZhbC5pbnRvX3VzZXJfaWR9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVhc29uXCI+PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5hbW91bnRcIj48L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwiZGlhbG9nX3JlYXNvblt2YWwucmVhc29uXVwiPjwvdGQ+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmNyZWF0ZWRfYXRcIj48L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1hY3Rpb25zXCI+XG5cdFx0XHRcdDxwYWdpbmF0aW9uXG5cdFx0XHRcdFx0XHQ6cGFnZUluZm89XCJ7XG5cdFx0XHRcdFx0XHR0b3RhbDpkaWFsb2dfbGlzdC50b3RhbCxcblx0XHRcdFx0XHRcdGN1cnJlbnQ6ZGlhbG9nX2xpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpkaWFsb2dfbGlzdC5wZXJfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2U6ZGlhbG9nX2xpc3QubGFzdF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZWdyb3VwOjUsXG5cdFx0XHRcdFx0XHRza2luOicjMjE5NkYzJ1xuXHRcdFx0XHRcdH1cIlxuXHRcdFx0XHRcdFx0QGNoYW5nZT1cImRldGFpbF9zZWFyY2hcIlxuXHRcdFx0XHQ+PC9wYWdpbmF0aW9uPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlXCIgbWR1aS1kaWFsb2ctY2xvc2U+5YWz6ZetPC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdG1lcmNoYW50IDogJycsXG5cdFx0XHRcdHVzZXJfdHlwZSA6ICcnLFxuXHRcdFx0XHRwdXJzZV90eXBlIDogJycsXG5cdFx0XHRcdGRpYWxvZyA6ICcnLFxuXHRcdFx0XHRkaWFsb2dfbGlzdCA6IFtdLFxuXHRcdFx0XHRkaWFsb2dfcmVhc29uIDogW10sXG5cdFx0XHRcdGRpYWxvZ19rZXl3b3JkIDoge1xuXHRcdFx0XHRcdHBhZ2UgOiAxLFxuXHRcdFx0XHRcdHVzZXJfdHlwZV9pZCA6IDAsXG5cdFx0XHRcdFx0cHVyc2VfdHlwZV9pZCA6IDAsXG5cdFx0XHRcdFx0dHlwZSA6ICcnLFxuXHRcdFx0XHRcdHJlYXNvbiA6ICcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRrZXl3b3JkIDoge1xuXHRcdFx0XHRcdHBhZ2UgOiAxLFxuXHRcdFx0XHRcdG1lcmNoYW50X2lkIDogMSxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kcyA6IHtcblx0XHRcdGRldGFpbCh1c2VyX3R5cGVfaWQscHVyc2VfdHlwZV9pZCx0eXBlKXtcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC5wYWdlID0gMTtcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC51c2VyX3R5cGVfaWQgPSB1c2VyX3R5cGVfaWQ7XG5cdFx0XHRcdHRoaXMuZGlhbG9nX2tleXdvcmQucHVyc2VfdHlwZV9pZCA9IHB1cnNlX3R5cGVfaWQ7XG5cdFx0XHRcdHRoaXMuZGlhbG9nX2tleXdvcmQudHlwZSA9IHR5cGU7XG5cdFx0XHRcdHRoaXMuZGV0YWlsX2luaXQoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXRhaWxfc2VhcmNoKHBhZ2Upe1xuXHRcdFx0XHR0aGlzLmRpYWxvZ19rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmRldGFpbF9pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV0YWlsX2luaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvcmVwb3J0L3B1cnNlX2RldGFpbCcsdC5kaWFsb2dfa2V5d29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0LmRpYWxvZ19saXN0ID0gZGF0YS5saXN0O1xuXHRcdFx0XHRcdHQuZGlhbG9nX3JlYXNvbiA9IGRhdGEucmVhc29uO1xuXHRcdFx0XHRcdHQuJG5leHRUaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR0LmRpYWxvZy5vcGVuKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdHNlYXJjaChwYWdlKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdH0sXG5cdFx0XHR0YWJfY2hhbmdlKGlkKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSAxO1xuXHRcdFx0XHR0aGlzLmtleXdvcmQubWVyY2hhbnRfaWQgPSBpZDtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0aW5pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuJEFQSS5nZXQoJy9yZXBvcnQvcHVyc2UnLHQua2V5d29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0Lmxpc3QgPSBkYXRhLmxpc3Q7XG5cdFx0XHRcdFx0dC5tZXJjaGFudCA9IGRhdGEubWVyY2hhbnQ7XG5cdFx0XHRcdFx0dC51c2VyX3R5cGUgPSBkYXRhLnVzZXJfdHlwZTtcblx0XHRcdFx0XHR0LnB1cnNlX3R5cGUgPSBkYXRhLnB1cnNlX3R5cGU7XG5cdFx0XHRcdFx0dC4kbmV4dFRpY2soZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQoJy5tZHVpLXRhYicpLm11dGF0aW9uKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0dC5kaWFsb2cgPSBuZXcgbWR1aS5EaWFsb2coJy5kZXRhaWxfZGlhbG9nJyx7aGlzdG9yeTpmYWxzZX0pO1xuXHRcdFx0dC5pbml0KCk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3B1cnNlLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZXBvcnRfcHVyc2VcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYlwiLCBhdHRyczogeyBcIm1kdWktdGFiXCI6IFwiXCIgfSB9LFxuICAgICAgX3ZtLl9sKF92bS5tZXJjaGFudCwgZnVuY3Rpb24obmFtZSwgaWQsIGtleSkge1xuICAgICAgICByZXR1cm4gX2MoXCJhXCIsIHtcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJtZHVpLWJ0blwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZHVpLXJpcHBsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZHVpLXRhYi1hY3RpdmVcIjoga2V5ID09PSAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiN0YWJfXCIgKyBrZXkgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKG5hbWUpIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLnRhYl9jaGFuZ2UoaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIiB9LCBbXG4gICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVzZXJfdHlwZSwgZnVuY3Rpb24obmFtZSwgaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG5hbWUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICBfdm0uX2woX3ZtLnB1cnNlX3R5cGUsIGZ1bmN0aW9uKHB1cnNlX3R5cGVfbmFtZSwgcHVyc2VfdHlwZV9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHB1cnNlX3R5cGVfbmFtZSkgKyBcIijliIYpXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVzZXJfdHlwZSwgZnVuY3Rpb24odXNlcl90eXBlX25hbWUsIHVzZXJfdHlwZV9pZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLXRleHQtY29sb3Itb3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRldGFpbCh1c2VyX3R5cGVfaWQsIHB1cnNlX3R5cGVfaWQsIFwib3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCLlh7o6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGlzdFt1c2VyX3R5cGVfaWRdW3B1cnNlX3R5cGVfaWRdLm91dClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktdGV4dC1jb2xvci1ncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXRhaWwodXNlcl90eXBlX2lkLCBwdXJzZV90eXBlX2lkLCBcImludG9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIui/mzpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5saXN0W3VzZXJfdHlwZV9pZF1bcHVyc2VfdHlwZV9pZF0uaW50bylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nIGRldGFpbF9kaWFsb2dcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCJub25lXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHTpkrHljIXmtYHmsLTor6bmg4VcXG5cXHRcXHRcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2ctY29udGVudFwiLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjQwMHB4XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlLWZsdWlkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGlhbG9nX2xpc3QuZGF0YSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCIjXCIgKyAoa2V5ICsgMSkpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5pZCkgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModmFsLm91dF91c2VyX2lkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh2YWwuaW50b191c2VyX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZWFzb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmRpYWxvZ19yZWFzb25bdmFsLnJlYXNvbl0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmNyZWF0ZWRfYXQpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWFjdGlvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0uZGlhbG9nX2xpc3QudG90YWwsXG4gICAgICAgICAgICAgICAgICBjdXJyZW50OiBfdm0uZGlhbG9nX2xpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZW51bTogX3ZtLmRpYWxvZ19saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZTogX3ZtLmRpYWxvZ19saXN0Lmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgIHBhZ2Vncm91cDogNSxcbiAgICAgICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5kZXRhaWxfc2VhcmNoIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWRpYWxvZy1jbG9zZVwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWFs+mXrVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10eXBvXCIgfSwgW1xuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwi5rOo77ya6ZKx5YyF6L+b5Ye657uf6K6h77yM5qC55o2u6L2s6LSm5rWB5rC05Lul5Y+K56ys5LiJ5pa55pSv5LuY6K6i5Y2V6K6h566X5omA5b6XXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSmSURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ye6L+i/m+i0pueUqOaIt1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLovazotKZyZWFzb27ku6PnoIFcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSm6YeR6aKdKOWIhilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6KGM5Li65ZCN56ewXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWIm+W7uuaXtumXtFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZkY2RmZGNhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ZGNkZmRjYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcHVyc2UudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTZkY2RmZGNhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3B1cnNlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmRjZGZkY2FcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wdXJzZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmRjZGZkY2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZGNkZmRjYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiJdLCJzb3VyY2VSb290IjoiIn0=