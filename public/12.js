webpackJsonp([12],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/report/reason.vue":
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
			user_type: '',
			purse_type: '',
			dialog: '',
			dialog_list: [],
			dialog_keyword: {
				page: 1,
				reason: ''
			},
			keyword: {
				page: 1
			}
		};
	},

	methods: {
		detail: function detail(reason) {
			this.dialog_keyword.page = 1;
			this.dialog_keyword.reason = reason;
			this.detail_init();
		},
		detail_search: function detail_search(page) {
			this.dialog_keyword.page = page;
			this.detail_init();
		},
		detail_init: function detail_init() {
			var t = this;
			get('/report/reason_detail', t.dialog_keyword, function (data) {
				t.dialog_list = data;
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
			get('/report/reason', t.keyword, function (data) {
				t.list = data.list;
				t.user_type = data.user_type;
				t.purse_type = data.purse_type;
			});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.dialog = new mdui.Dialog('.dialog_detail', { history: false });
		t.init();
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6f5ec225\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/report/reason.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "report_reason" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-table-fluid" }, [
      _c("table", { staticClass: "mdui-table mdui-table-hoverable" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.list.data, function(val, key, index) {
            return _c("tr", [
              _c("td", { domProps: { textContent: _vm._s(key + 1) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.reason) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.reason_name) } }),
              _vm._v(" "),
              _c("td", {
                domProps: {
                  textContent: _vm._s(_vm.user_type[val.out_user_type_id])
                }
              }),
              _vm._v(" "),
              _c("td", {
                domProps: {
                  textContent: _vm._s(_vm.purse_type[val.out_purse_type_id])
                }
              }),
              _vm._v(" "),
              _c("td", {
                domProps: {
                  textContent: _vm._s(_vm.user_type[val.into_user_type_id])
                }
              }),
              _vm._v(" "),
              _c("td", {
                domProps: {
                  textContent: _vm._s(_vm.purse_type[val.into_purse_type_id])
                }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.amount) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(val.reason_remarks) }
              }),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "mdui-btn-group" }, [
                  _c(
                    "a",
                    {
                      staticClass: "mdui-btn mdui-ripple mdui-color-theme",
                      on: {
                        click: function($event) {
                          _vm.detail(val.reason)
                        }
                      }
                    },
                    [_vm._v("详情")]
                  )
                ])
              ])
            ])
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "mdui-dialog dialog_detail",
        staticStyle: { "max-width": "none" }
      },
      [
        _c("div", { staticClass: "mdui-dialog-title" }, [
          _vm._v("\n\t\t\treason 行为流水详情\n\t\t")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "mdui-dialog-content",
            staticStyle: { height: "400px" }
          },
          [
            _c(
              "table",
              { staticClass: "mdui-table mdui-table-hoverable table-data" },
              [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.dialog_list.data, function(val, key, index) {
                    return _c("tr", [
                      _c("td", { domProps: { textContent: _vm._s(key + 1) } }),
                      _vm._v(" "),
                      _c("td", { domProps: { textContent: _vm._s(val.id) } }),
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
                        domProps: { textContent: _vm._s(val.out_user_id) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.out_purse_id) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.out_balance) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.into_user_id) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.into_purse_id) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.into_balance) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.parent_id) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.detail) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.remarks) }
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(val.created_at) }
                      })
                    ])
                  })
                )
              ]
            )
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
    ),
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
    return _c("div", { staticClass: "mdui-typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c("p", [_vm._v("注：reason 行为流水统计，根据实际成功的流水计算所得")])
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
        _c("th", [_vm._v("reason")]),
        _vm._v(" "),
        _c("th", [_vm._v("行为名称")]),
        _vm._v(" "),
        _c("th", [_vm._v("出账用户类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("出账钱包类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("进账用户类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("进账钱包类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("交易金额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("备注")]),
        _vm._v(" "),
        _c("th", [_vm._v("操作")])
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
        _c("th", [_vm._v("转账reason代码")]),
        _vm._v(" "),
        _c("th", [_vm._v("转账金额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("出账用户ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("出账钱包ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("出账后余额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("进账用户ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("进账钱包ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("进账后余额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("上级ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("详情")]),
        _vm._v(" "),
        _c("th", [_vm._v("备注")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-6f5ec225", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/report/reason.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/report/reason.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6f5ec225\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/report/reason.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\report\\reason.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f5ec225", Component.options)
  } else {
    hotAPI.reload("data-v-6f5ec225", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9yZWFzb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZT85ODViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnSUE7QUFDQSxLQURBLGtCQUNBO0FBQ0E7QUFDQSxXQURBO0FBRUEsZ0JBRkE7QUFHQSxpQkFIQTtBQUlBLGFBSkE7QUFLQSxrQkFMQTtBQU1BO0FBQ0EsV0FEQTtBQUVBO0FBRkEsSUFOQTtBQVVBO0FBQ0E7QUFEQTtBQVZBO0FBY0EsRUFoQkE7O0FBaUJBO0FBQ0EsUUFEQSxrQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUxBO0FBTUEsZUFOQSx5QkFNQSxJQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0EsR0FUQTtBQVVBLGFBVkEseUJBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLENBRkE7QUFHQSxJQUxBO0FBTUEsR0FsQkE7QUFtQkEsUUFuQkEsa0JBbUJBLElBbkJBLEVBbUJBO0FBQ0E7QUFDQTtBQUNBLEdBdEJBO0FBdUJBLE1BdkJBLGtCQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUpBO0FBS0E7QUE5QkEsRUFqQkE7QUFpREEsUUFqREEscUJBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREEsRzs7Ozs7OztBQ2hJQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pTQTtBQUNBO0FBQ0E7QUFDQSw4YUFBc1I7QUFDdFI7QUFDQSx1U0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicmVwb3J0X3JlYXNvblwiPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXR5cG9cIj5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PHA+5rOo77yacmVhc29uIOihjOS4uua1geawtOe7n+iuoe+8jOagueaNruWunumZheaIkOWKn+eahOa1geawtOiuoeeul+aJgOW+lzwvcD5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJsZS1mbHVpZFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzPVwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiPlxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGg+IzwvdGg+XG5cdFx0XHRcdFx0PHRoPnJlYXNvbjwvdGg+XG5cdFx0XHRcdFx0PHRoPuihjOS4uuWQjeensDwvdGg+XG5cdFx0XHRcdFx0PHRoPuWHuui0pueUqOaIt+exu+WeizwvdGg+XG5cdFx0XHRcdFx0PHRoPuWHuui0pumSseWMheexu+WeizwvdGg+XG5cdFx0XHRcdFx0PHRoPui/m+i0pueUqOaIt+exu+WeizwvdGg+XG5cdFx0XHRcdFx0PHRoPui/m+i0pumSseWMheexu+WeizwvdGg+XG5cdFx0XHRcdFx0PHRoPuS6pOaYk+mHkeminSjliIYpPC90aD5cblx0XHRcdFx0XHQ8dGg+5aSH5rOoPC90aD5cblx0XHRcdFx0XHQ8dGg+5pON5L2cPC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcblx0XHRcdFx0PHRyIHYtZm9yPVwiKHZhbCxrZXksaW5kZXgpIGluIGxpc3QuZGF0YVwiPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJrZXkrMVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZWFzb25cIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVhc29uX25hbWVcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ1c2VyX3R5cGVbdmFsLm91dF91c2VyX3R5cGVfaWRdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwicHVyc2VfdHlwZVt2YWwub3V0X3B1cnNlX3R5cGVfaWRdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidXNlcl90eXBlW3ZhbC5pbnRvX3VzZXJfdHlwZV9pZF1cIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJwdXJzZV90eXBlW3ZhbC5pbnRvX3B1cnNlX3R5cGVfaWRdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFtb3VudFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZWFzb25fcmVtYXJrc1wiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktYnRuLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cImRldGFpbCh2YWwucmVhc29uKVwiPuivpuaDhTwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdDwvZGl2PlxuXHRcdFxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZyBkaWFsb2dfZGV0YWlsXCIgc3R5bGU9XCJtYXgtd2lkdGg6bm9uZTtcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy10aXRsZVwiPlxuXHRcdFx0XHRyZWFzb24g6KGM5Li65rWB5rC06K+m5oOFXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1jb250ZW50XCIgc3R5bGU9XCJoZWlnaHQ6NDAwcHg7XCI+XG5cdFx0XHRcdDx0YWJsZSBjbGFzcz1cIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGUgdGFibGUtZGF0YVwiPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+6L2s6LSmSUQ8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPui9rOi0pnJlYXNvbuS7o+eggTwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+6L2s6LSm6YeR6aKdKOWIhik8L3RoPlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8dGg+5Ye66LSm55So5oi3SUQ8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPuWHuui0pumSseWMhUlEPC90aD5cblx0XHRcdFx0XHRcdDx0aD7lh7rotKblkI7kvZnpop0o5YiGKTwvdGg+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx0aD7ov5votKbnlKjmiLdJRDwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+6L+b6LSm6ZKx5YyFSUQ8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPui/m+i0puWQjuS9meminSjliIYpPC90aD5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHRoPuS4iue6p0lEPC90aD5cblx0XHRcdFx0XHRcdDx0aD7or6bmg4U8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPuWkh+azqDwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+5Yib5bu65pe26Ze0PC90aD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDx0ciB2LWZvcj1cIih2YWwsa2V5LGluZGV4KSBvZiBkaWFsb2dfbGlzdC5kYXRhXCI+XG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwia2V5KzFcIj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5pZFwiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnJlYXNvblwiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFtb3VudFwiPjwvdGQ+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwub3V0X3VzZXJfaWRcIj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5vdXRfcHVyc2VfaWRcIj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5vdXRfYmFsYW5jZVwiPjwvdGQ+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuaW50b191c2VyX2lkXCI+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuaW50b19wdXJzZV9pZFwiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmludG9fYmFsYW5jZVwiPjwvdGQ+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucGFyZW50X2lkXCI+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuZGV0YWlsXCI+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVtYXJrc1wiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmNyZWF0ZWRfYXRcIj48L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLWFjdGlvbnNcIj5cblx0XHRcdFx0PHBhZ2luYXRpb25cblx0XHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmRpYWxvZ19saXN0LnRvdGFsLFxuXHRcdFx0XHRcdFx0Y3VycmVudDpkaWFsb2dfbGlzdC5jdXJyZW50X3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlbnVtOmRpYWxvZ19saXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpkaWFsb2dfbGlzdC5sYXN0X3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlZ3JvdXA6NSxcblx0XHRcdFx0XHRcdHNraW46JyMyMTk2RjMnXG5cdFx0XHRcdFx0fVwiXG5cdFx0XHRcdFx0XHRAY2hhbmdlPVwiZGV0YWlsX3NlYXJjaFwiXG5cdFx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGVcIiBtZHVpLWRpYWxvZy1jbG9zZT7lhbPpl608L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb2xvci13aGl0ZSBmb290ZXJcIj5cblx0XHRcdDxwYWdpbmF0aW9uXG5cdFx0XHRcdFx0OnBhZ2VJbmZvPVwie1xuXHRcdFx0XHRcdFx0dG90YWw6bGlzdC50b3RhbCxcblx0XHRcdFx0XHRcdGN1cnJlbnQ6bGlzdC5jdXJyZW50X3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlbnVtOmxpc3QucGVyX3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlOmxpc3QubGFzdF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZWdyb3VwOjksXG5cdFx0XHRcdFx0XHRza2luOicjMjE5NkYzJ1xuXHRcdFx0XHRcdH1cIlxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJzZWFyY2hcIlxuXHRcdFx0PjwvcGFnaW5hdGlvbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGxpc3QgOiBbXSxcblx0XHRcdFx0dXNlcl90eXBlIDogJycsXG5cdFx0XHRcdHB1cnNlX3R5cGUgOiAnJyxcblx0XHRcdFx0ZGlhbG9nIDogJycsXG5cdFx0XHRcdGRpYWxvZ19saXN0IDogW10sXG5cdFx0XHRcdGRpYWxvZ19rZXl3b3JkIDoge1xuXHRcdFx0XHRcdHBhZ2UgOiAxLFxuXHRcdFx0XHRcdHJlYXNvbiA6ICcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRrZXl3b3JkIDoge1xuXHRcdFx0XHRcdHBhZ2UgOiAxXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHMgOiB7XG5cdFx0XHRkZXRhaWwocmVhc29uKXtcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC5wYWdlID0gMTtcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC5yZWFzb24gPSByZWFzb247XG5cdFx0XHRcdHRoaXMuZGV0YWlsX2luaXQoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXRhaWxfc2VhcmNoKHBhZ2Upe1xuXHRcdFx0XHR0aGlzLmRpYWxvZ19rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmRldGFpbF9pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV0YWlsX2luaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRnZXQoJy9yZXBvcnQvcmVhc29uX2RldGFpbCcsdC5kaWFsb2dfa2V5d29yZCxmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0LmRpYWxvZ19saXN0ID0gZGF0YTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR0LmRpYWxvZy5vcGVuKCk7XG5cdFx0XHRcdFx0fSwwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0c2VhcmNoKHBhZ2Upe1xuXHRcdFx0XHR0aGlzLmtleXdvcmQucGFnZSA9IHBhZ2U7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdGluaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRnZXQoJy9yZXBvcnQvcmVhc29uJyx0LmtleXdvcmQsZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5saXN0ID0gZGF0YS5saXN0O1xuXHRcdFx0XHRcdHQudXNlcl90eXBlID0gZGF0YS51c2VyX3R5cGU7XG5cdFx0XHRcdFx0dC5wdXJzZV90eXBlID0gZGF0YS5wdXJzZV90eXBlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdHQuZGlhbG9nID0gbmV3IG1kdWkuRGlhbG9nKCcuZGlhbG9nX2RldGFpbCcse2hpc3Rvcnk6ZmFsc2V9KTtcblx0XHRcdHQuaW5pdCgpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9yZWFzb24udnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcG9ydF9yZWFzb25cIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIiB9LCBbXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdC5kYXRhLCBmdW5jdGlvbih2YWwsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3Moa2V5ICsgMSkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlYXNvbikgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlYXNvbl9uYW1lKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0udXNlcl90eXBlW3ZhbC5vdXRfdXNlcl90eXBlX2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucHVyc2VfdHlwZVt2YWwub3V0X3B1cnNlX3R5cGVfaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS51c2VyX3R5cGVbdmFsLmludG9fdXNlcl90eXBlX2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucHVyc2VfdHlwZVt2YWwuaW50b19wdXJzZV90eXBlX2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZWFzb25fcmVtYXJrcykgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWJ0bi1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGV0YWlsKHZhbC5yZWFzb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6K+m5oOFXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nIGRpYWxvZ19kZXRhaWxcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCJub25lXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRyZWFzb24g6KGM5Li65rWB5rC06K+m5oOFXFxuXFx0XFx0XCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI0MDBweFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZSB0YWJsZS1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kaWFsb2dfbGlzdC5kYXRhLCBmdW5jdGlvbih2YWwsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGtleSArIDEpIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaWQpIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlYXNvbikgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5hbW91bnQpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwub3V0X3VzZXJfaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwub3V0X3B1cnNlX2lkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLm91dF9iYWxhbmNlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmludG9fdXNlcl9pZCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5pbnRvX3B1cnNlX2lkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmludG9fYmFsYW5jZSkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5wYXJlbnRfaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuZGV0YWlsKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlbWFya3MpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuY3JlYXRlZF9hdCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWFjdGlvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0uZGlhbG9nX2xpc3QudG90YWwsXG4gICAgICAgICAgICAgICAgICBjdXJyZW50OiBfdm0uZGlhbG9nX2xpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZW51bTogX3ZtLmRpYWxvZ19saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZTogX3ZtLmRpYWxvZ19saXN0Lmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgIHBhZ2Vncm91cDogNSxcbiAgICAgICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5kZXRhaWxfc2VhcmNoIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWRpYWxvZy1jbG9zZVwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWFs+mXrVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgdG90YWw6IF92bS5saXN0LnRvdGFsLFxuICAgICAgICAgICAgICBjdXJyZW50OiBfdm0ubGlzdC5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2VudW06IF92bS5saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICBwYWdlOiBfdm0ubGlzdC5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2Vncm91cDogOSxcbiAgICAgICAgICAgICAgc2tpbjogXCIjMjE5NkYzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnNlYXJjaCB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10eXBvXCIgfSwgW1xuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5rOo77yacmVhc29uIOihjOS4uua1geawtOe7n+iuoe+8jOagueaNruWunumZheaIkOWKn+eahOa1geawtOiuoeeul+aJgOW+l1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwicmVhc29uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuihjOS4uuWQjeensFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlh7rotKbnlKjmiLfnsbvlnotcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ye66LSm6ZKx5YyF57G75Z6LXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0pueUqOaIt+exu+Wei1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLov5votKbpkrHljIXnsbvlnotcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Lqk5piT6YeR6aKdKOWIhilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5aSH5rOoXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaTjeS9nFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSmSURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSmcmVhc29u5Luj56CBXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui9rOi0pumHkeminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWHuui0pueUqOaIt0lEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWHuui0pumSseWMhUlEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWHuui0puWQjuS9meminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0pueUqOaIt0lEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0pumSseWMhUlEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0puWQjuS9meminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuS4iue6p0lEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuivpuaDhVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Yib5bu65pe26Ze0XCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmY1ZWMyMjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZmNWVjMjI1XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9yZWFzb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTZmNWVjMjI1XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9yZWFzb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9yZWFzb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ZjVlYzIyNVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3JlYXNvbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXHJlcG9ydFxcXFxyZWFzb24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZmNWVjMjI1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmY1ZWMyMjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3JlYXNvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiJdLCJzb3VyY2VSb290IjoiIn0=