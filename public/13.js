webpackJsonp([13],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
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
				page: 1
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
				setTimeout(function () {
					t.dialog.open();
				}, 0);
			});
		},
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		init: function init() {
			var t = this;
			get('/report/purse', t.keyword, function (data) {
				t.list = data.list;
				t.user_type = data.user_type;
				t.purse_type = data.purse_type;
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-050cf0ce\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/report/purse.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "report_purse" }, [
    _vm._m(0),
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
                      _c("td", { domProps: { textContent: _vm._s(key + 1) } }),
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
    require("vue-hot-reload-api")      .rerender("data-v-050cf0ce", module.exports)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-050cf0ce\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/report/purse.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\report\\purse.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-050cf0ce", Component.options)
  } else {
    hotAPI.reload("data-v-050cf0ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWU/NGRiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3B1cnNlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRkE7QUFDQSxLQURBLGtCQUNBO0FBQ0E7QUFDQSxXQURBO0FBRUEsZ0JBRkE7QUFHQSxpQkFIQTtBQUlBLGFBSkE7QUFLQSxrQkFMQTtBQU1BLG9CQU5BO0FBT0E7QUFDQSxXQURBO0FBRUEsbUJBRkE7QUFHQSxvQkFIQTtBQUlBLFlBSkE7QUFLQTtBQUxBLElBUEE7QUFjQTtBQUNBO0FBREE7QUFkQTtBQWtCQSxFQXBCQTs7QUFxQkE7QUFDQSxRQURBLGtCQUNBLFlBREEsRUFDQSxhQURBLEVBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUEE7QUFRQSxlQVJBLHlCQVFBLElBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQSxHQVhBO0FBWUEsYUFaQSx5QkFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFFQSxDQUZBO0FBSUEsSUFQQTtBQVFBLEdBdEJBO0FBdUJBLFFBdkJBLGtCQXVCQSxJQXZCQSxFQXVCQTtBQUNBO0FBQ0E7QUFDQSxHQTFCQTtBQTJCQSxNQTNCQSxrQkEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFKQTtBQUtBO0FBbENBLEVBckJBO0FBeURBLFFBekRBLHFCQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0RB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c3M9XCJyZXBvcnRfcHVyc2VcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10eXBvXCI+XG5cdFx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVfbm9ybWFsXCI+XG5cdFx0XHRcdDxwPuazqO+8mumSseWMhei/m+WHuue7n+iuoe+8jOagueaNrui9rOi0pua1geawtOS7peWPiuesrOS4ieaWueaUr+S7mOiuouWNleiuoeeul+aJgOW+lzwvcD5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJsZS1mbHVpZFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzPVwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiPlxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGg+PC90aD5cblx0XHRcdFx0XHQ8dGggY2xhc3M9XCJtZHVpLXRleHQtY2VudGVyXCIgdi1mb3I9XCIobmFtZSxpZCkgb2YgdXNlcl90eXBlXCI+e3tuYW1lfX08L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dHIgdi1mb3I9XCIocHVyc2VfdHlwZV9uYW1lLHB1cnNlX3R5cGVfaWQpIG9mIHB1cnNlX3R5cGVcIj5cblx0XHRcdFx0XHQ8dGQ+e3twdXJzZV90eXBlX25hbWV9fSjliIYpPC90ZD5cblx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJtZHVpLXRleHQtY2VudGVyXCIgdi1mb3I9XCIodXNlcl90eXBlX25hbWUsdXNlcl90eXBlX2lkKSBvZiB1c2VyX3R5cGVcIj5cblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS10ZXh0LWNvbG9yLW9yYW5nZVwiIEBjbGljaz1cImRldGFpbCh1c2VyX3R5cGVfaWQscHVyc2VfdHlwZV9pZCwnb3V0JylcIj7lh7o6e3tsaXN0W3VzZXJfdHlwZV9pZF1bcHVyc2VfdHlwZV9pZF0ub3V0fX08L2E+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktdGV4dC1jb2xvci1ncmVlblwiIEBjbGljaz1cImRldGFpbCh1c2VyX3R5cGVfaWQscHVyc2VfdHlwZV9pZCwnaW50bycpXCI+6L+bOnt7bGlzdFt1c2VyX3R5cGVfaWRdW3B1cnNlX3R5cGVfaWRdLmludG99fTwvYT5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2cgZGV0YWlsX2RpYWxvZ1wiIHN0eWxlPVwibWF4LXdpZHRoOm5vbmU7XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctdGl0bGVcIj5cblx0XHRcdFx06ZKx5YyF5rWB5rC06K+m5oOFXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1jb250ZW50XCIgc3R5bGU9XCJoZWlnaHQ6NDAwcHg7XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRhYmxlLWZsdWlkXCI+XG5cdFx0XHRcdFx0PHRhYmxlIGNsYXNzPVwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiPlxuXHRcdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD7ovazotKZJRDwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD7lh7ov6L+b6LSm55So5oi3PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPui9rOi0pnJlYXNvbuS7o+eggTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD7ovazotKbph5Hpop0o5YiGKTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD7ooYzkuLrlkI3np7A8L3RoPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PHRoPuWIm+W7uuaXtumXtDwvdGg+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHRyIHYtZm9yPVwiKHZhbCxrZXksaW5kZXgpIG9mIGRpYWxvZ19saXN0LmRhdGFcIj5cblx0XHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cImtleSsxXCI+PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5pZFwiPjwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57e3ZhbC5vdXRfdXNlcl9pZH19L3t7dmFsLmludG9fdXNlcl9pZH19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZWFzb25cIj48L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFtb3VudFwiPjwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJkaWFsb2dfcmVhc29uW3ZhbC5yZWFzb25dXCI+PC90ZD5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuY3JlYXRlZF9hdFwiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLWFjdGlvbnNcIj5cblx0XHRcdFx0PHBhZ2luYXRpb25cblx0XHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmRpYWxvZ19saXN0LnRvdGFsLFxuXHRcdFx0XHRcdFx0Y3VycmVudDpkaWFsb2dfbGlzdC5jdXJyZW50X3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlbnVtOmRpYWxvZ19saXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpkaWFsb2dfbGlzdC5sYXN0X3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlZ3JvdXA6NSxcblx0XHRcdFx0XHRcdHNraW46JyMyMTk2RjMnXG5cdFx0XHRcdFx0fVwiXG5cdFx0XHRcdFx0XHRAY2hhbmdlPVwiZGV0YWlsX3NlYXJjaFwiXG5cdFx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGVcIiBtZHVpLWRpYWxvZy1jbG9zZT7lhbPpl608L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGxpc3QgOiBbXSxcblx0XHRcdFx0dXNlcl90eXBlIDogJycsXG5cdFx0XHRcdHB1cnNlX3R5cGUgOiAnJyxcblx0XHRcdFx0ZGlhbG9nIDogJycsXG5cdFx0XHRcdGRpYWxvZ19saXN0IDogW10sXG5cdFx0XHRcdGRpYWxvZ19yZWFzb24gOiBbXSxcblx0XHRcdFx0ZGlhbG9nX2tleXdvcmQgOiB7XG5cdFx0XHRcdFx0cGFnZSA6IDEsXG5cdFx0XHRcdFx0dXNlcl90eXBlX2lkIDogMCxcblx0XHRcdFx0XHRwdXJzZV90eXBlX2lkIDogMCxcblx0XHRcdFx0XHR0eXBlIDogJycsXG5cdFx0XHRcdFx0cmVhc29uIDogJycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGtleXdvcmQgOiB7XG5cdFx0XHRcdFx0cGFnZSA6IDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kcyA6IHtcblx0XHRcdGRldGFpbCh1c2VyX3R5cGVfaWQscHVyc2VfdHlwZV9pZCx0eXBlKXtcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC5wYWdlID0gMTtcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC51c2VyX3R5cGVfaWQgPSB1c2VyX3R5cGVfaWQ7XG5cdFx0XHRcdHRoaXMuZGlhbG9nX2tleXdvcmQucHVyc2VfdHlwZV9pZCA9IHB1cnNlX3R5cGVfaWQ7XG5cdFx0XHRcdHRoaXMuZGlhbG9nX2tleXdvcmQudHlwZSA9IHR5cGU7XG5cdFx0XHRcdHRoaXMuZGV0YWlsX2luaXQoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXRhaWxfc2VhcmNoKHBhZ2Upe1xuXHRcdFx0XHR0aGlzLmRpYWxvZ19rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmRldGFpbF9pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV0YWlsX2luaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRnZXQoJy9yZXBvcnQvcHVyc2VfZGV0YWlsJyx0LmRpYWxvZ19rZXl3b3JkLGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHQuZGlhbG9nX2xpc3QgPSBkYXRhLmxpc3Q7XG5cdFx0XHRcdFx0dC5kaWFsb2dfcmVhc29uID0gZGF0YS5yZWFzb247XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dC5kaWFsb2cub3BlbigpO1xuXHRcdFx0XHRcdH0sMCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdHNlYXJjaChwYWdlKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdH0sXG5cdFx0XHRpbml0KCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0Z2V0KCcvcmVwb3J0L3B1cnNlJyx0LmtleXdvcmQsZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5saXN0ID0gZGF0YS5saXN0O1xuXHRcdFx0XHRcdHQudXNlcl90eXBlID0gZGF0YS51c2VyX3R5cGU7XG5cdFx0XHRcdFx0dC5wdXJzZV90eXBlID0gZGF0YS5wdXJzZV90eXBlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdHQuZGlhbG9nID0gbmV3IG1kdWkuRGlhbG9nKCcuZGV0YWlsX2RpYWxvZycse2hpc3Rvcnk6ZmFsc2V9KTtcblx0XHRcdHQuaW5pdCgpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVwb3J0X3B1cnNlXCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZS1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlXCIgfSwgW1xuICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS51c2VyX3R5cGUsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhuYW1lKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5wdXJzZV90eXBlLCBmdW5jdGlvbihwdXJzZV90eXBlX25hbWUsIHB1cnNlX3R5cGVfaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwdXJzZV90eXBlX25hbWUpICsgXCIo5YiGKVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS51c2VyX3R5cGUsIGZ1bmN0aW9uKHVzZXJfdHlwZV9uYW1lLCB1c2VyX3R5cGVfaWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS10ZXh0LWNvbG9yLW9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXRhaWwodXNlcl90eXBlX2lkLCBwdXJzZV90eXBlX2lkLCBcIm91dFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwi5Ye6OlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxpc3RbdXNlcl90eXBlX2lkXVtwdXJzZV90eXBlX2lkXS5vdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLXRleHQtY29sb3ItZ3JlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGV0YWlsKHVzZXJfdHlwZV9pZCwgcHVyc2VfdHlwZV9pZCwgXCJpbnRvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCLov5s6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGlzdFt1c2VyX3R5cGVfaWRdW3B1cnNlX3R5cGVfaWRdLmludG8pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZyBkZXRhaWxfZGlhbG9nXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwibm9uZVwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2ctdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx06ZKx5YyF5rWB5rC06K+m5oOFXFxuXFx0XFx0XCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI0MDBweFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZS1mbHVpZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRpYWxvZ19saXN0LmRhdGEsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3Moa2V5ICsgMSkgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5pZCkgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModmFsLm91dF91c2VyX2lkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh2YWwuaW50b191c2VyX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZWFzb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmRpYWxvZ19yZWFzb25bdmFsLnJlYXNvbl0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmNyZWF0ZWRfYXQpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWFjdGlvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0uZGlhbG9nX2xpc3QudG90YWwsXG4gICAgICAgICAgICAgICAgICBjdXJyZW50OiBfdm0uZGlhbG9nX2xpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZW51bTogX3ZtLmRpYWxvZ19saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZTogX3ZtLmRpYWxvZ19saXN0Lmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgIHBhZ2Vncm91cDogNSxcbiAgICAgICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5kZXRhaWxfc2VhcmNoIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWRpYWxvZy1jbG9zZVwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWFs+mXrVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10eXBvXCIgfSwgW1xuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwi5rOo77ya6ZKx5YyF6L+b5Ye657uf6K6h77yM5qC55o2u6L2s6LSm5rWB5rC05Lul5Y+K56ys5LiJ5pa55pSv5LuY6K6i5Y2V6K6h566X5omA5b6XXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSmSURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ye6L+i/m+i0pueUqOaIt1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLovazotKZyZWFzb27ku6PnoIFcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSm6YeR6aKdKOWIhilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6KGM5Li65ZCN56ewXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWIm+W7uuaXtumXtFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTA1MGNmMGNlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wNTBjZjBjZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcHVyc2UudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTA1MGNmMGNlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3B1cnNlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDUwY2YwY2VcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wdXJzZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXHJlcG9ydFxcXFxwdXJzZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDUwY2YwY2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNTBjZjBjZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyJdLCJzb3VyY2VSb290IjoiIn0=