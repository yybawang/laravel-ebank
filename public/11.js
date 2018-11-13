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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			user_type: '',
			purse_type: '',
			merchant: '',
			dialog: '',
			dialog_list: [],
			dialog_keyword: {
				page: 1,
				reason: ''
			},
			keyword: {
				page: 1,
				merchant_id: 1
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
			t.$API.get('/report/reason_detail', t.dialog_keyword).then(function (data) {
				t.dialog_list = data;
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
			t.$API.get('/report/reason', t.keyword).then(function (data) {
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
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.list.data, function(val, key, index) {
            return _c("tr", [
              _c("td", { domProps: { textContent: _vm._s("#" + (key + 1)) } }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9yZWFzb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZT8xMjQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEhBO0FBQ0EsS0FEQSxrQkFDQTtBQUNBO0FBQ0EsV0FEQTtBQUVBLGdCQUZBO0FBR0EsaUJBSEE7QUFJQSxlQUpBO0FBS0EsYUFMQTtBQU1BLGtCQU5BO0FBT0E7QUFDQSxXQURBO0FBRUE7QUFGQSxJQVBBO0FBV0E7QUFDQSxXQURBO0FBRUE7QUFGQTtBQVhBO0FBZ0JBLEVBbEJBOztBQW1CQTtBQUNBLFFBREEsa0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FMQTtBQU1BLGVBTkEseUJBTUEsSUFOQSxFQU1BO0FBQ0E7QUFDQTtBQUNBLEdBVEE7QUFVQSxhQVZBLHlCQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxJQUxBLEVBS0EsS0FMQSxDQUtBLGdCQUVBLENBUEE7QUFRQSxHQXBCQTtBQXFCQSxRQXJCQSxrQkFxQkEsSUFyQkEsRUFxQkE7QUFDQTtBQUNBO0FBQ0EsR0F4QkE7QUF5QkEsWUF6QkEsc0JBeUJBLEVBekJBLEVBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E3QkE7QUE4QkEsTUE5QkEsa0JBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q1gsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQsd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsSUFBSSxLQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDOVNBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMscVlBQStVO0FBQzVXO0FBQ0EsdUJBQXVCLG1CQUFPLENBQUMsNFBBQTRPO0FBQzNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJlcG9ydF9yZWFzb25cIj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10eXBvXCI+XG5cdFx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVfbm9ybWFsXCI+XG5cdFx0XHRcdDxwPuazqO+8mnJlYXNvbiDooYzkuLrmtYHmsLTnu5/orqHvvIzmoLnmja7lrp7pmYXmiJDlip/nmoTmtYHmsLTorqHnrpfmiYDlvpc8L3A+XG5cdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdGFiXCIgbWR1aS10YWI+XG5cdFx0XHQ8YSA6aHJlZj1cIicjdGFiXycra2V5XCIgOmNsYXNzPVwieydtZHVpLWJ0bic6dHJ1ZSwnbWR1aS1yaXBwbGUnOnRydWUsJ21kdWktdGFiLWFjdGl2ZSc6a2V5PT09MH1cIiB2LWZvcj1cIihuYW1lLGlkLGtleSkgb2YgbWVyY2hhbnRcIiB2LXRleHQ9XCJuYW1lXCIgQGNsaWNrPVwidGFiX2NoYW5nZShpZClcIj48L2E+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdGFibGUtZmx1aWRcIj5cblx0XHRcdDx0YWJsZSBjbGFzcz1cIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIj5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRoPiM8L3RoPlxuXHRcdFx0XHRcdDx0aD5yZWFzb248L3RoPlxuXHRcdFx0XHRcdDx0aD7ooYzkuLrlkI3np7A8L3RoPlxuXHRcdFx0XHRcdDx0aD7lh7rotKbouqvku73nsbvlnos8L3RoPlxuXHRcdFx0XHRcdDx0aD7lh7rotKbpkrHljIXnsbvlnos8L3RoPlxuXHRcdFx0XHRcdDx0aD7ov5votKbouqvku73nsbvlnos8L3RoPlxuXHRcdFx0XHRcdDx0aD7ov5votKbpkrHljIXnsbvlnos8L3RoPlxuXHRcdFx0XHRcdDx0aD7kuqTmmJPph5Hpop0o5YiGKTwvdGg+XG5cdFx0XHRcdFx0PHRoPuWkh+azqDwvdGg+XG5cdFx0XHRcdFx0PHRoPuaTjeS9nDwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XG5cdFx0XHRcdDx0ciB2LWZvcj1cIih2YWwsa2V5LGluZGV4KSBpbiBsaXN0LmRhdGFcIj5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwiJyMnKyhrZXkrMSlcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVhc29uXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnJlYXNvbl9uYW1lXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidXNlcl90eXBlW3ZhbC5vdXRfdXNlcl90eXBlX2lkXVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInB1cnNlX3R5cGVbdmFsLm91dF9wdXJzZV90eXBlX2lkXVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInVzZXJfdHlwZVt2YWwuaW50b191c2VyX3R5cGVfaWRdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwicHVyc2VfdHlwZVt2YWwuaW50b19wdXJzZV90eXBlX2lkXVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5hbW91bnRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVhc29uX3JlbWFya3NcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWJ0bi1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIiBAY2xpY2s9XCJkZXRhaWwodmFsLnJlYXNvbilcIj7or6bmg4U8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2cgZGlhbG9nX2RldGFpbFwiIHN0eWxlPVwibWF4LXdpZHRoOm5vbmU7XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctdGl0bGVcIj5cblx0XHRcdFx0cmVhc29uIOihjOS4uua1geawtOivpuaDhVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctY29udGVudFwiIHN0eWxlPVwiaGVpZ2h0OjQwMHB4O1wiPlxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlIHRhYmxlLWRhdGFcIj5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRoPiM8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPui9rOi0pklEPC90aD5cblx0XHRcdFx0XHRcdDx0aD7ovazotKZyZWFzb27ku6PnoIE8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPui9rOi0pumHkeminSjliIYpPC90aD5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHRoPuWHuui0pueUqOaIt0lEPC90aD5cblx0XHRcdFx0XHRcdDx0aD7lh7rotKbpkrHljIVJRDwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+5Ye66LSm5ZCO5L2Z6aKdKOWIhik8L3RoPlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8dGg+6L+b6LSm55So5oi3SUQ8L3RoPlxuXHRcdFx0XHRcdFx0PHRoPui/m+i0pumSseWMhUlEPC90aD5cblx0XHRcdFx0XHRcdDx0aD7ov5votKblkI7kvZnpop0o5YiGKTwvdGg+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx0aD7liJvlu7rml7bpl7Q8L3RoPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PHRyIHYtZm9yPVwiKHZhbCxrZXksaW5kZXgpIG9mIGRpYWxvZ19saXN0LmRhdGFcIj5cblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCInIycrKGtleSsxKVwiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmlkXCI+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVhc29uXCI+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuYW1vdW50XCI+PC90ZD5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5vdXRfdXNlcl9pZFwiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLm91dF9wdXJzZV9pZFwiPjwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLm91dF9iYWxhbmNlXCI+PC90ZD5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5pbnRvX3VzZXJfaWRcIj48L3RkPlxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5pbnRvX3B1cnNlX2lkXCI+PC90ZD5cblx0XHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuaW50b19iYWxhbmNlXCI+PC90ZD5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5jcmVhdGVkX2F0XCI+PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1hY3Rpb25zXCI+XG5cdFx0XHRcdDxwYWdpbmF0aW9uXG5cdFx0XHRcdFx0XHQ6cGFnZUluZm89XCJ7XG5cdFx0XHRcdFx0XHR0b3RhbDpkaWFsb2dfbGlzdC50b3RhbCxcblx0XHRcdFx0XHRcdGN1cnJlbnQ6ZGlhbG9nX2xpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpkaWFsb2dfbGlzdC5wZXJfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2U6ZGlhbG9nX2xpc3QubGFzdF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZWdyb3VwOjUsXG5cdFx0XHRcdFx0XHRza2luOicjMjE5NkYzJ1xuXHRcdFx0XHRcdH1cIlxuXHRcdFx0XHRcdFx0QGNoYW5nZT1cImRldGFpbF9zZWFyY2hcIlxuXHRcdFx0XHQ+PC9wYWdpbmF0aW9uPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlXCIgbWR1aS1kaWFsb2ctY2xvc2U+5YWz6ZetPC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdHVzZXJfdHlwZSA6ICcnLFxuXHRcdFx0XHRwdXJzZV90eXBlIDogJycsXG5cdFx0XHRcdG1lcmNoYW50IDogJycsXG5cdFx0XHRcdGRpYWxvZyA6ICcnLFxuXHRcdFx0XHRkaWFsb2dfbGlzdCA6IFtdLFxuXHRcdFx0XHRkaWFsb2dfa2V5d29yZCA6IHtcblx0XHRcdFx0XHRwYWdlIDogMSxcblx0XHRcdFx0XHRyZWFzb24gOiAnJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0a2V5d29yZCA6IHtcblx0XHRcdFx0XHRwYWdlIDogMSxcblx0XHRcdFx0XHRtZXJjaGFudF9pZCA6IDEsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHMgOiB7XG5cdFx0XHRkZXRhaWwocmVhc29uKXtcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC5wYWdlID0gMTtcblx0XHRcdFx0dGhpcy5kaWFsb2dfa2V5d29yZC5yZWFzb24gPSByZWFzb247XG5cdFx0XHRcdHRoaXMuZGV0YWlsX2luaXQoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXRhaWxfc2VhcmNoKHBhZ2Upe1xuXHRcdFx0XHR0aGlzLmRpYWxvZ19rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmRldGFpbF9pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV0YWlsX2luaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvcmVwb3J0L3JlYXNvbl9kZXRhaWwnLHQuZGlhbG9nX2tleXdvcmQpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5kaWFsb2dfbGlzdCA9IGRhdGE7XG5cdFx0XHRcdFx0dC4kbmV4dFRpY2soZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHQuZGlhbG9nLm9wZW4oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24obXNnKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0c2VhcmNoKHBhZ2Upe1xuXHRcdFx0XHR0aGlzLmtleXdvcmQucGFnZSA9IHBhZ2U7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdHRhYl9jaGFuZ2UoaWQpe1xuXHRcdFx0XHR0aGlzLmtleXdvcmQucGFnZSA9IDE7XG5cdFx0XHRcdHRoaXMua2V5d29yZC5tZXJjaGFudF9pZCA9IGlkO1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdH0sXG5cdFx0XHRpbml0KCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0dC4kQVBJLmdldCgnL3JlcG9ydC9yZWFzb24nLHQua2V5d29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0Lmxpc3QgPSBkYXRhLmxpc3Q7XG5cdFx0XHRcdFx0dC5tZXJjaGFudCA9IGRhdGEubWVyY2hhbnQ7XG5cdFx0XHRcdFx0dC51c2VyX3R5cGUgPSBkYXRhLnVzZXJfdHlwZTtcblx0XHRcdFx0XHR0LnB1cnNlX3R5cGUgPSBkYXRhLnB1cnNlX3R5cGU7XG5cdFx0XHRcdFx0dC4kbmV4dFRpY2soZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQoJy5tZHVpLXRhYicpLm11dGF0aW9uKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0dC5kaWFsb2cgPSBuZXcgbWR1aS5EaWFsb2coJy5kaWFsb2dfZGV0YWlsJyx7aGlzdG9yeTpmYWxzZX0pO1xuXHRcdFx0dC5pbml0KCk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3JlYXNvbi52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVwb3J0X3JlYXNvblwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFiXCIsIGF0dHJzOiB7IFwibWR1aS10YWJcIjogXCJcIiB9IH0sXG4gICAgICBfdm0uX2woX3ZtLm1lcmNoYW50LCBmdW5jdGlvbihuYW1lLCBpZCwga2V5KSB7XG4gICAgICAgIHJldHVybiBfYyhcImFcIiwge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcIm1kdWktYnRuXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1kdWktcmlwcGxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1kdWktdGFiLWFjdGl2ZVwiOiBrZXkgPT09IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI3RhYl9cIiArIGtleSB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MobmFtZSkgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0udGFiX2NoYW5nZShpZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUtZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5saXN0LmRhdGEsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhcIiNcIiArIChrZXkgKyAxKSkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlYXNvbikgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlYXNvbl9uYW1lKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0udXNlcl90eXBlW3ZhbC5vdXRfdXNlcl90eXBlX2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucHVyc2VfdHlwZVt2YWwub3V0X3B1cnNlX3R5cGVfaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS51c2VyX3R5cGVbdmFsLmludG9fdXNlcl90eXBlX2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucHVyc2VfdHlwZVt2YWwuaW50b19wdXJzZV90eXBlX2lkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZWFzb25fcmVtYXJrcykgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWJ0bi1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGV0YWlsKHZhbC5yZWFzb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6K+m5oOFXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nIGRpYWxvZ19kZXRhaWxcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXgtd2lkdGhcIjogXCJub25lXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRyZWFzb24g6KGM5Li65rWB5rC06K+m5oOFXFxuXFx0XFx0XCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWNvbnRlbnRcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI0MDBweFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZSB0YWJsZS1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kaWFsb2dfbGlzdC5kYXRhLCBmdW5jdGlvbih2YWwsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhcIiNcIiArIChrZXkgKyAxKSkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmlkKSB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZWFzb24pIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLm91dF91c2VyX2lkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLm91dF9wdXJzZV9pZCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5vdXRfYmFsYW5jZSkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5pbnRvX3VzZXJfaWQpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaW50b19wdXJzZV9pZCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5pbnRvX2JhbGFuY2UpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuY3JlYXRlZF9hdCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWFjdGlvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiBfdm0uZGlhbG9nX2xpc3QudG90YWwsXG4gICAgICAgICAgICAgICAgICBjdXJyZW50OiBfdm0uZGlhbG9nX2xpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZW51bTogX3ZtLmRpYWxvZ19saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgcGFnZTogX3ZtLmRpYWxvZ19saXN0Lmxhc3RfcGFnZSxcbiAgICAgICAgICAgICAgICAgIHBhZ2Vncm91cDogNSxcbiAgICAgICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5kZXRhaWxfc2VhcmNoIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWRpYWxvZy1jbG9zZVwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWFs+mXrVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgdG90YWw6IF92bS5saXN0LnRvdGFsLFxuICAgICAgICAgICAgICBjdXJyZW50OiBfdm0ubGlzdC5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2VudW06IF92bS5saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICBwYWdlOiBfdm0ubGlzdC5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2Vncm91cDogOSxcbiAgICAgICAgICAgICAgc2tpbjogXCIjMjE5NkYzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnNlYXJjaCB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10eXBvXCIgfSwgW1xuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5rOo77yacmVhc29uIOihjOS4uua1geawtOe7n+iuoe+8jOagueaNruWunumZheaIkOWKn+eahOa1geawtOiuoeeul+aJgOW+l1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwicmVhc29uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuihjOS4uuWQjeensFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlh7rotKbouqvku73nsbvlnotcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ye66LSm6ZKx5YyF57G75Z6LXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0pui6q+S7veexu+Wei1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLov5votKbpkrHljIXnsbvlnotcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Lqk5piT6YeR6aKdKOWIhilcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5aSH5rOoXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaTjeS9nFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSmSURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6L2s6LSmcmVhc29u5Luj56CBXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui9rOi0pumHkeminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWHuui0pueUqOaIt0lEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWHuui0pumSseWMhUlEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWHuui0puWQjuS9meminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0pueUqOaIt0lEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0pumSseWMhUlEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/m+i0puWQjuS9meminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWIm+W7uuaXtumXtFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJjZDRiYjc4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yY2Q0YmI3OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0yY2Q0YmI3OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcmVhc29uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmNkNGJiNzhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZWFzb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yY2Q0YmI3OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjZDRiYjc4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVwb3J0L3JlYXNvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JlcG9ydC9yZWFzb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiXSwic291cmNlUm9vdCI6IiJ9