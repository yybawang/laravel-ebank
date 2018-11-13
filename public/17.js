webpackJsonp([17],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/purse/purse.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			purse_type: '',
			user_type: '',
			merchant: '',
			keyword: {
				page: 1,
				user_id: '',
				purse_type_id: [],
				user_type_id: [],
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
		init: function init() {
			var t = this;
			t.$API.get('/purse/purse', t.keyword).then(function (data) {
				t.list = data.list;
				t.merchant = data.merchant;
				t.purse_type = data.purse_type;
				t.user_type = data.user_type;
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-457de268\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/purse/purse.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "purse" }, [
    _c("div", { staticClass: "mdui-typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
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
        _c("p", [
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
              _c("td", { domProps: { textContent: _vm._s(val.created_at) } })
            ])
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-457de268", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/purse/purse.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/purse/purse.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-457de268\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/purse/purse.vue")
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
Component.options.__file = "resources/assets/js/components/purse/purse.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-457de268", Component.options)
  } else {
    hotAPI.reload("data-v-457de268", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL3B1cnNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHVyc2UvcHVyc2UudnVlPzFmNDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL3B1cnNlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkE7QUFDQSxLQURBLGtCQUNBO0FBQ0E7QUFDQSxXQURBO0FBRUEsaUJBRkE7QUFHQSxnQkFIQTtBQUlBLGVBSkE7QUFLQTtBQUNBLFdBREE7QUFFQSxlQUZBO0FBR0EscUJBSEE7QUFJQSxvQkFKQTtBQUtBO0FBTEE7QUFMQTtBQWFBLEVBZkE7O0FBZ0JBO0FBQ0EsUUFEQSxrQkFDQSxJQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FKQTtBQUtBLFlBTEEsc0JBS0EsRUFMQSxFQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FUQTtBQVVBLE1BVkEsa0JBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLElBUkEsRUFRQSxLQVJBLENBUUEsZ0JBRUEsQ0FWQTtBQVdBO0FBdkJBLEVBaEJBO0FBeUNBLFFBekNBLHFCQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQSxHOzs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxlQUFlLDJCQUEyQjtBQUMxQyx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxpQkFBaUI7QUFDakI7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3hTQTtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHVEQUFrRTtBQUNuRztBQUNBLHFCQUFxQixtQkFBTyxDQUFDLG1ZQUE4VTtBQUMzVztBQUNBLHVCQUF1QixtQkFBTyxDQUFDLDBQQUEyTztBQUMxUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJwdXJzZVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXR5cG9cIj5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx06Lqr5Lu957G75Z6L77yaXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS1jaGVja2JveFwiIHYtZm9yPVwiKG5hbWUsaWQpIG9mIHVzZXJfdHlwZVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjJyZW07XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwiaWRcIiB2LW1vZGVsPVwia2V5d29yZC51c2VyX3R5cGVfaWRcIiAvPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWNoZWNrYm94LWljb25cIj48L2k+XG5cdFx0XHRcdFx0XHR7e25hbWV9fVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx06ZKx5YyF57G75Z6L77yaXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS1jaGVja2JveFwiIHYtZm9yPVwiKG5hbWUsaWQpIG9mIHB1cnNlX3R5cGVcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDoycmVtO1wiPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIDp2YWx1ZT1cImlkXCIgdi1tb2RlbD1cImtleXdvcmQucHVyc2VfdHlwZV9pZFwiIC8+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktY2hlY2tib3gtaWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdHt7bmFtZX19XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIiBAY2xpY2s9XCJzZWFyY2goMSlcIj48aSBjbGFzcz1cIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvaT7mkJzntKI8L2E+XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJcIiBtZHVpLXRhYj5cblx0XHRcdDxhIDpocmVmPVwiJyN0YWJfJytrZXlcIiA6Y2xhc3M9XCJ7J21kdWktYnRuJzp0cnVlLCdtZHVpLXJpcHBsZSc6dHJ1ZSwnbWR1aS10YWItYWN0aXZlJzprZXk9PT0wfVwiIHYtZm9yPVwiKG5hbWUsaWQsa2V5KSBvZiBtZXJjaGFudFwiIHYtdGV4dD1cIm5hbWVcIiBAY2xpY2s9XCJ0YWJfY2hhbmdlKGlkKVwiPjwvYT5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJsZS1mbHVpZFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzPVwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiPlxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGg+IzwvdGg+XG5cdFx0XHRcdFx0PHRoPumSseWMhUlEPC90aD5cblx0XHRcdFx0XHQ8dGg+5ZWG5oi3PC90aD5cblx0XHRcdFx0XHQ8dGg+6Lqr5Lu957G75Z6LPC90aD5cblx0XHRcdFx0XHQ8dGg+6ZKx5YyF57G75Z6LPC90aD5cblx0XHRcdFx0XHQ8dGg+5oC75L2Z6aKdKOWIhik8L3RoPlxuXHRcdFx0XHRcdDx0aD7lhrvnu5PkvZnpop0o5YiGKTwvdGg+XG5cdFx0XHRcdFx0PHRoPuWPr+eUqOS9meminSjliIYpPC90aD5cblx0XHRcdFx0XHQ8dGg+54q25oCBPC90aD5cblx0XHRcdFx0XHQ8dGg+5aSH5rOoPC90aD5cblx0XHRcdFx0XHQ8dGg+5Yib5bu65pe26Ze0PC90aD5cblx0XHRcdFx0XHQ8IS0tPHRoPuaTjeS9nDwvdGg+LS0+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XG5cdFx0XHRcdDx0ciB2LWZvcj1cIih2YWwsa2V5LGluZGV4KSBvZiBsaXN0LmRhdGFcIj5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwiJyMnKyhrZXkrMSlcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuaWRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJtZXJjaGFudFt2YWwubWVyY2hhbnRfaWRdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidXNlcl90eXBlW3ZhbC51c2VyX3R5cGVfaWRdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwicHVyc2VfdHlwZVt2YWwucHVyc2VfdHlwZV9pZF1cIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuYmFsYW5jZVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5mcmVlemVcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuYmFsYW5jZSAtIHZhbC5mcmVlemVcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuc3RhdHVzID8gJ+WQr+eUqCcgOiAn56aB55SoJ1wiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZW1hcmtzXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmNyZWF0ZWRfYXRcIj48L3RkPlxuXHRcdFx0XHRcdDwhLS08dGQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1idG4tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwiYWRkKHZhbC5pZClcIj7kv67mlLk8L2E+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1kZWVwLW9yYW5nZVwiIEBjbGljaz1cImRlbCh2YWwuaWQpXCI+5Yig6ZmkPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD4tLT5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdHB1cnNlX3R5cGUgOiAnJyxcblx0XHRcdFx0dXNlcl90eXBlIDogJycsXG5cdFx0XHRcdG1lcmNoYW50IDogJycsXG5cdFx0XHRcdGtleXdvcmQgOiB7XG5cdFx0XHRcdFx0cGFnZSA6IDEsXG5cdFx0XHRcdFx0dXNlcl9pZCA6ICcnLFxuXHRcdFx0XHRcdHB1cnNlX3R5cGVfaWQgOiBbXSxcblx0XHRcdFx0XHR1c2VyX3R5cGVfaWQgOiBbXSxcblx0XHRcdFx0XHRtZXJjaGFudF9pZCA6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0bWV0aG9kcyA6IHtcblx0XHRcdHNlYXJjaChwYWdlKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdH0sXG5cdFx0XHR0YWJfY2hhbmdlKGlkKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSAxO1xuXHRcdFx0XHR0aGlzLmtleXdvcmQubWVyY2hhbnRfaWQgPSBpZDtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0aW5pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuJEFQSS5nZXQoJy9wdXJzZS9wdXJzZScsdC5rZXl3b3JkKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHQubGlzdCA9IGRhdGEubGlzdDtcblx0XHRcdFx0XHR0Lm1lcmNoYW50ID0gZGF0YS5tZXJjaGFudDtcblx0XHRcdFx0XHR0LnB1cnNlX3R5cGUgPSBkYXRhLnB1cnNlX3R5cGU7XG5cdFx0XHRcdFx0dC51c2VyX3R5cGUgPSBkYXRhLnVzZXJfdHlwZTtcblx0XHRcdFx0XHR0LiRuZXh0VGljayhmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0JCgnLm1kdWktdGFiJykubXV0YXRpb24oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24obXNnKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCl7XG5cdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHR0LmluaXQoKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wdXJzZS9wdXJzZS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVyc2VcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXR5cG9cIiB9LCBbXG4gICAgICBfYyhcImJsb2NrcXVvdGVcIiwgeyBzdGF0aWNDbGFzczogXCJibG9ja3F1b3RlX25vcm1hbFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx06Lqr5Lu957G75Z6L77yaXFxuXFx0XFx0XFx0XFx0XCIpLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS51c2VyX3R5cGUsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC51c2VyX3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQudXNlcl90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5rZXl3b3JkLnVzZXJfdHlwZV9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5rZXl3b3JkLnVzZXJfdHlwZV9pZCwgaWQpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmtleXdvcmQudXNlcl90eXBlX2lkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ua2V5d29yZC51c2VyX3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyX3R5cGVfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJfdHlwZV9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJ1c2VyX3R5cGVfaWRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhuYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTpkrHljIXnsbvlnovvvJpcXG5cXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnB1cnNlX3R5cGUsIGZ1bmN0aW9uKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5wdXJzZV90eXBlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLnB1cnNlX3R5cGVfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmtleXdvcmQucHVyc2VfdHlwZV9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5rZXl3b3JkLnB1cnNlX3R5cGVfaWQsIGlkKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5rZXl3b3JkLnB1cnNlX3R5cGVfaWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5rZXl3b3JkLnB1cnNlX3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdXJzZV90eXBlX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ua2V5d29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdXJzZV90eXBlX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcInB1cnNlX3R5cGVfaWRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhuYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcInNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5pCc57SiXCIpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJcIiwgYXR0cnM6IHsgXCJtZHVpLXRhYlwiOiBcIlwiIH0gfSxcbiAgICAgIF92bS5fbChfdm0ubWVyY2hhbnQsIGZ1bmN0aW9uKG5hbWUsIGlkLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiYVwiLCB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwibWR1aS1idG5cIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWR1aS1yaXBwbGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWR1aS10YWItYWN0aXZlXCI6IGtleSA9PT0gMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjdGFiX1wiICsga2V5IH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhuYW1lKSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS50YWJfY2hhbmdlKGlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZS1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlXCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QuZGF0YSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwiI1wiICsgKGtleSArIDEpKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaWQpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm1lcmNoYW50W3ZhbC5tZXJjaGFudF9pZF0pIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS51c2VyX3R5cGVbdmFsLnVzZXJfdHlwZV9pZF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLnB1cnNlX3R5cGVbdmFsLnB1cnNlX3R5cGVfaWRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5iYWxhbmNlKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuZnJlZXplKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5iYWxhbmNlIC0gdmFsLmZyZWV6ZSkgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuc3RhdHVzID8gXCLlkK/nlKhcIiA6IFwi56aB55SoXCIpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZW1hcmtzKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuY3JlYXRlZF9hdCkgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbG9yLXdoaXRlIGZvb3RlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICAgIHRvdGFsOiBfdm0ubGlzdC50b3RhbCxcbiAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmxpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlbnVtOiBfdm0ubGlzdC5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZTogX3ZtLmxpc3QubGFzdF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlZ3JvdXA6IDksXG4gICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5zZWFyY2ggfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCIjXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIumSseWMhUlEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWVhuaIt1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLouqvku73nsbvlnotcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6ZKx5YyF57G75Z6LXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaAu+S9meminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWGu+e7k+S9meminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWPr+eUqOS9meminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIueKtuaAgVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Yib5bu65pe26Ze0XCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDU3ZGUyNjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ1N2RlMjY4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL3B1cnNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00NTdkZTI2OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wdXJzZS9wdXJzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3B1cnNlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDU3ZGUyNjhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wdXJzZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL3B1cnNlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NTdkZTI2OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1N2RlMjY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHVyc2UvcHVyc2UudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wdXJzZS9wdXJzZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyJdLCJzb3VyY2VSb290IjoiIn0=