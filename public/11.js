webpackJsonp([11],{

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2cd4bb78\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/report/reason.vue":
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
    _c("div", { staticClass: "mdui-dialog dialog_detail" }, [
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
                    _c("td", { domProps: { textContent: _vm._s(val.reason) } }),
                    _vm._v(" "),
                    _c("td", { domProps: { textContent: _vm._s(val.amount) } }),
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
                    _c("td", { domProps: { textContent: _vm._s(val.detail) } }),
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
    require("vue-hot-reload-api")      .rerender("data-v-2cd4bb78", module.exports)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2cd4bb78\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/report/reason.vue")
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
Component.options.__file = "resources/assets/js/components/report/reason.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cd4bb78", Component.options)
  } else {
    hotAPI.reload("data-v-2cd4bb78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});