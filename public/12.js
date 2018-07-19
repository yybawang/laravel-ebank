webpackJsonp([12],{

/***/ 330:
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

/***/ 331:
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
        _c("th", [_vm._v("出账身份类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("出账钱包类型")]),
        _vm._v(" "),
        _c("th", [_vm._v("进账身份类型")]),
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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(330)
/* template */
var __vue_template__ = __webpack_require__(331)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9yZWFzb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZT85ODViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnSUE7QUFDQSxLQURBLGtCQUNBO0FBQ0E7QUFDQSxXQURBO0FBRUEsZ0JBRkE7QUFHQSxpQkFIQTtBQUlBLGFBSkE7QUFLQSxrQkFMQTtBQU1BO0FBQ0EsV0FEQTtBQUVBO0FBRkEsSUFOQTtBQVVBO0FBQ0E7QUFEQTtBQVZBO0FBY0EsRUFoQkE7O0FBaUJBO0FBQ0EsUUFEQSxrQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUxBO0FBTUEsZUFOQSx5QkFNQSxJQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0EsR0FUQTtBQVVBLGFBVkEseUJBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLENBRkE7QUFHQSxJQUxBO0FBTUEsR0FsQkE7QUFtQkEsUUFuQkEsa0JBbUJBLElBbkJBLEVBbUJBO0FBQ0E7QUFDQTtBQUNBLEdBdEJBO0FBdUJBLE1BdkJBLGtCQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUpBO0FBS0E7QUE5QkEsRUFqQkE7QUFpREEsUUFqREEscUJBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREEsRzs7Ozs7OztBQ2hJQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pTQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBc1I7QUFDdFI7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJyZXBvcnRfcmVhc29uXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10eXBvXCI+XHJcblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cclxuXHRcdFx0XHQ8cD7ms6jvvJpyZWFzb24g6KGM5Li65rWB5rC057uf6K6h77yM5qC55o2u5a6e6ZmF5oiQ5Yqf55qE5rWB5rC06K6h566X5omA5b6XPC9wPlxyXG5cdFx0XHQ8L2Jsb2NrcXVvdGU+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRhYmxlLWZsdWlkXCI+XHJcblx0XHRcdDx0YWJsZSBjbGFzcz1cIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIj5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRoPiM8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPnJlYXNvbjwvdGg+XHJcblx0XHRcdFx0XHQ8dGg+6KGM5Li65ZCN56ewPC90aD5cclxuXHRcdFx0XHRcdDx0aD7lh7rotKbouqvku73nsbvlnos8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPuWHuui0pumSseWMheexu+WeizwvdGg+XHJcblx0XHRcdFx0XHQ8dGg+6L+b6LSm6Lqr5Lu957G75Z6LPC90aD5cclxuXHRcdFx0XHRcdDx0aD7ov5votKbpkrHljIXnsbvlnos8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPuS6pOaYk+mHkeminSjliIYpPC90aD5cclxuXHRcdFx0XHRcdDx0aD7lpIfms6g8L3RoPlxyXG5cdFx0XHRcdFx0PHRoPuaTjeS9nDwvdGg+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8dHIgdi1mb3I9XCIodmFsLGtleSxpbmRleCkgaW4gbGlzdC5kYXRhXCI+XHJcblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwia2V5KzFcIj48L3RkPlxyXG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZWFzb25cIj48L3RkPlxyXG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZWFzb25fbmFtZVwiPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidXNlcl90eXBlW3ZhbC5vdXRfdXNlcl90eXBlX2lkXVwiPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwicHVyc2VfdHlwZVt2YWwub3V0X3B1cnNlX3R5cGVfaWRdXCI+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ1c2VyX3R5cGVbdmFsLmludG9fdXNlcl90eXBlX2lkXVwiPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwicHVyc2VfdHlwZVt2YWwuaW50b19wdXJzZV90eXBlX2lkXVwiPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFtb3VudFwiPjwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnJlYXNvbl9yZW1hcmtzXCI+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktYnRuLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwiZGV0YWlsKHZhbC5yZWFzb24pXCI+6K+m5oOFPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0PC9kaXY+XHJcblx0XHRcclxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZyBkaWFsb2dfZGV0YWlsXCIgc3R5bGU9XCJtYXgtd2lkdGg6bm9uZTtcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLXRpdGxlXCI+XHJcblx0XHRcdFx0cmVhc29uIOihjOS4uua1geawtOivpuaDhVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLWNvbnRlbnRcIiBzdHlsZT1cImhlaWdodDo0MDBweDtcIj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlIHRhYmxlLWRhdGFcIj5cclxuXHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+6L2s6LSmSUQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+6L2s6LSmcmVhc29u5Luj56CBPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPui9rOi0pumHkeminSjliIYpPC90aD5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDx0aD7lh7rotKbnlKjmiLdJRDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD7lh7rotKbpkrHljIVJRDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD7lh7rotKblkI7kvZnpop0o5YiGKTwvdGg+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8dGg+6L+b6LSm55So5oi3SUQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+6L+b6LSm6ZKx5YyFSUQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+6L+b6LSm5ZCO5L2Z6aKdKOWIhik8L3RoPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHRoPuS4iue6p0lEPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPuivpuaDhTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD7lpIfms6g8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+5Yib5bu65pe26Ze0PC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dHIgdi1mb3I9XCIodmFsLGtleSxpbmRleCkgb2YgZGlhbG9nX2xpc3QuZGF0YVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwia2V5KzFcIj48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmlkXCI+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZWFzb25cIj48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFtb3VudFwiPjwvdGQ+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLm91dF91c2VyX2lkXCI+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5vdXRfcHVyc2VfaWRcIj48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLm91dF9iYWxhbmNlXCI+PC90ZD5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuaW50b191c2VyX2lkXCI+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5pbnRvX3B1cnNlX2lkXCI+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5pbnRvX2JhbGFuY2VcIj48L3RkPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5wYXJlbnRfaWRcIj48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmRldGFpbFwiPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVtYXJrc1wiPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuY3JlYXRlZF9hdFwiPjwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLWFjdGlvbnNcIj5cclxuXHRcdFx0XHQ8cGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0XHQ6cGFnZUluZm89XCJ7XHJcblx0XHRcdFx0XHRcdHRvdGFsOmRpYWxvZ19saXN0LnRvdGFsLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50OmRpYWxvZ19saXN0LmN1cnJlbnRfcGFnZSxcclxuXHRcdFx0XHRcdFx0cGFnZW51bTpkaWFsb2dfbGlzdC5wZXJfcGFnZSxcclxuXHRcdFx0XHRcdFx0cGFnZTpkaWFsb2dfbGlzdC5sYXN0X3BhZ2UsXHJcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo1LFxyXG5cdFx0XHRcdFx0XHRza2luOicjMjE5NkYzJ1xyXG5cdFx0XHRcdFx0fVwiXHJcblx0XHRcdFx0XHRcdEBjaGFuZ2U9XCJkZXRhaWxfc2VhcmNoXCJcclxuXHRcdFx0XHQ+PC9wYWdpbmF0aW9uPlxyXG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGVcIiBtZHVpLWRpYWxvZy1jbG9zZT7lhbPpl608L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHRcclxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbG9yLXdoaXRlIGZvb3RlclwiPlxyXG5cdFx0XHQ8cGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0OnBhZ2VJbmZvPVwie1xyXG5cdFx0XHRcdFx0XHR0b3RhbDpsaXN0LnRvdGFsLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxyXG5cdFx0XHRcdFx0XHRwYWdlbnVtOmxpc3QucGVyX3BhZ2UsXHJcblx0XHRcdFx0XHRcdHBhZ2U6bGlzdC5sYXN0X3BhZ2UsXHJcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxyXG5cdFx0XHRcdFx0XHRza2luOicjMjE5NkYzJ1xyXG5cdFx0XHRcdFx0fVwiXHJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcclxuXHRcdFx0PjwvcGFnaW5hdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsaXN0IDogW10sXHJcblx0XHRcdFx0dXNlcl90eXBlIDogJycsXHJcblx0XHRcdFx0cHVyc2VfdHlwZSA6ICcnLFxyXG5cdFx0XHRcdGRpYWxvZyA6ICcnLFxyXG5cdFx0XHRcdGRpYWxvZ19saXN0IDogW10sXHJcblx0XHRcdFx0ZGlhbG9nX2tleXdvcmQgOiB7XHJcblx0XHRcdFx0XHRwYWdlIDogMSxcclxuXHRcdFx0XHRcdHJlYXNvbiA6ICcnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0a2V5d29yZCA6IHtcclxuXHRcdFx0XHRcdHBhZ2UgOiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kcyA6IHtcclxuXHRcdFx0ZGV0YWlsKHJlYXNvbil7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC5wYWdlID0gMTtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZ19rZXl3b3JkLnJlYXNvbiA9IHJlYXNvbjtcclxuXHRcdFx0XHR0aGlzLmRldGFpbF9pbml0KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldGFpbF9zZWFyY2gocGFnZSl7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC5wYWdlID0gcGFnZTtcclxuXHRcdFx0XHR0aGlzLmRldGFpbF9pbml0KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldGFpbF9pbml0KCl7XHJcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xyXG5cdFx0XHRcdGdldCgnL3JlcG9ydC9yZWFzb25fZGV0YWlsJyx0LmRpYWxvZ19rZXl3b3JkLGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdFx0dC5kaWFsb2dfbGlzdCA9IGRhdGE7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdHQuZGlhbG9nLm9wZW4oKTtcclxuXHRcdFx0XHRcdH0sMCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlYXJjaChwYWdlKXtcclxuXHRcdFx0XHR0aGlzLmtleXdvcmQucGFnZSA9IHBhZ2U7XHJcblx0XHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGluaXQoKXtcclxuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XHJcblx0XHRcdFx0Z2V0KCcvcmVwb3J0L3JlYXNvbicsdC5rZXl3b3JkLGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdFx0dC5saXN0ID0gZGF0YS5saXN0O1xyXG5cdFx0XHRcdFx0dC51c2VyX3R5cGUgPSBkYXRhLnVzZXJfdHlwZTtcclxuXHRcdFx0XHRcdHQucHVyc2VfdHlwZSA9IGRhdGEucHVyc2VfdHlwZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKXtcclxuXHRcdFx0bGV0IHQgPSB0aGlzO1xyXG5cdFx0XHR0LmRpYWxvZyA9IG5ldyBtZHVpLkRpYWxvZygnLmRpYWxvZ19kZXRhaWwnLHtoaXN0b3J5OmZhbHNlfSk7XHJcblx0XHRcdHQuaW5pdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3JlYXNvbi52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVwb3J0X3JlYXNvblwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUtZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5saXN0LmRhdGEsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhrZXkgKyAxKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVhc29uKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVhc29uX25hbWUpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS51c2VyX3R5cGVbdmFsLm91dF91c2VyX3R5cGVfaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5wdXJzZV90eXBlW3ZhbC5vdXRfcHVyc2VfdHlwZV9pZF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLnVzZXJfdHlwZVt2YWwuaW50b191c2VyX3R5cGVfaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5wdXJzZV90eXBlW3ZhbC5pbnRvX3B1cnNlX3R5cGVfaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5hbW91bnQpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlYXNvbl9yZW1hcmtzKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXRhaWwodmFsLnJlYXNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLor6bmg4VcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2cgZGlhbG9nX2RldGFpbFwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIm5vbmVcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLXRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdHJlYXNvbiDooYzkuLrmtYHmsLTor6bmg4VcXG5cXHRcXHRcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2ctY29udGVudFwiLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjQwMHB4XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlIHRhYmxlLWRhdGFcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRpYWxvZ19saXN0LmRhdGEsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3Moa2V5ICsgMSkgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5pZCkgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVhc29uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmFtb3VudCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5vdXRfdXNlcl9pZCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5vdXRfcHVyc2VfaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwub3V0X2JhbGFuY2UpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaW50b191c2VyX2lkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmludG9fcHVyc2VfaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaW50b19iYWxhbmNlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnBhcmVudF9pZCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5kZXRhaWwpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVtYXJrcykgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5jcmVhdGVkX2F0KSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2ctYWN0aW9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgdG90YWw6IF92bS5kaWFsb2dfbGlzdC50b3RhbCxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IF92bS5kaWFsb2dfbGlzdC5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgICAgICBwYWdlbnVtOiBfdm0uZGlhbG9nX2xpc3QucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICBwYWdlOiBfdm0uZGlhbG9nX2xpc3QubGFzdF9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZWdyb3VwOiA1LFxuICAgICAgICAgICAgICAgICAgc2tpbjogXCIjMjE5NkYzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmRldGFpbF9zZWFyY2ggfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1kdWktZGlhbG9nLWNsb3NlXCI6IFwiXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi5YWz6ZetXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb2xvci13aGl0ZSBmb290ZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBwYWdlSW5mbzoge1xuICAgICAgICAgICAgICB0b3RhbDogX3ZtLmxpc3QudG90YWwsXG4gICAgICAgICAgICAgIGN1cnJlbnQ6IF92bS5saXN0LmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZW51bTogX3ZtLmxpc3QucGVyX3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2U6IF92bS5saXN0Lmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZWdyb3VwOiA5LFxuICAgICAgICAgICAgICBza2luOiBcIiMyMTk2RjNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uc2VhcmNoIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXR5cG9cIiB9LCBbXG4gICAgICBfYyhcImJsb2NrcXVvdGVcIiwgeyBzdGF0aWNDbGFzczogXCJibG9ja3F1b3RlX25vcm1hbFwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLms6jvvJpyZWFzb24g6KGM5Li65rWB5rC057uf6K6h77yM5qC55o2u5a6e6ZmF5oiQ5Yqf55qE5rWB5rC06K6h566X5omA5b6XXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiI1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJyZWFzb25cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6KGM5Li65ZCN56ewXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWHuui0pui6q+S7veexu+Wei1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlh7rotKbpkrHljIXnsbvlnotcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L+b6LSm6Lqr5Lu957G75Z6LXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0pumSseWMheexu+Wei1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLkuqTmmJPph5Hpop0o5YiGKVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5pON5L2cXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiI1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLovazotKZJRFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLovazotKZyZWFzb27ku6PnoIFcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSm6YeR6aKdKOWIhilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ye66LSm55So5oi3SURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ye66LSm6ZKx5YyFSURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ye66LSm5ZCO5L2Z6aKdKOWIhilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L+b6LSm55So5oi3SURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L+b6LSm6ZKx5YyFSURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L+b6LSm5ZCO5L2Z6aKdKOWIhilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5LiK57qnSURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6K+m5oOFXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWkh+azqFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLliJvlu7rml7bpl7RcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02ZjVlYzIyNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmY1ZWMyMjVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3JlYXNvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDMzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcmVhc29uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmY1ZWMyMjVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZWFzb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxyZXBvcnRcXFxccmVhc29uLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZjVlYzIyNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZmNWVjMjI1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3JlYXNvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiXSwic291cmNlUm9vdCI6IiJ9