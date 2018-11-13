webpackJsonp([22],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/merchant/behavior.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			merchant: '',
			dialog: '',
			dialog_data: '',
			response_status: ['异常返回', '成功返回'],
			keyword: {
				page: 1,
				status: [],
				url: '',
				appid: ''
			}
		};
	},

	methods: {
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		detail: function detail(val) {
			var t = this;
			t.dialog_data = {
				'商户': t.merchant[val.appid] + '(' + val.appid + ')',
				'接口': val.url,
				'返回值': val.response,
				'$_GET': val.$_GET,
				'$_POST': val.$_POST,
				'$_REQUEST': val.$_REQUEST,
				'$_SESSION': val.$_SESSION,
				'$_COOKIE': val.$_COOKIE,
				'$_SERVER': val.$_SERVER,
				'备注': val.remarks,
				'请求时间': val.created_at,
				'请求耗时(s)': val.execute_time + ''
			};
			t.$nextTick(function () {
				t.dialog.open();
			});
		},
		tab_change: function tab_change(id) {
			this.keyword.page = 1;
			this.keyword.appid = id;
			this.init();
			return false;
		},
		init: function init() {
			var t = this;
			t.$API.get('/merchant/behavior', t.keyword).then(function (data) {
				t.list = data.list;
				t.merchant = data.merchant;
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1ab5359c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/merchant/behavior.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "purse_user" }, [
    _c("div", { staticClass: "mdui-typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _vm._v(
          "\n\t\t\t注：此接口数据只统计商户API模块(EBankSdk.php)接口，其他暂不列入范围内\n\t\t"
        )
      ]),
      _vm._v(" "),
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c("p", [
          _vm._v("\n\t\t\t\t匹配url："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.url,
                expression: "keyword.url"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.url },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "url", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t返回类型：\n\t\t\t\t"),
            _vm._l(_vm.response_status, function(name, status) {
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
                        value: _vm.keyword.status,
                        expression: "keyword.status"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: status,
                      checked: Array.isArray(_vm.keyword.status)
                        ? _vm._i(_vm.keyword.status, status) > -1
                        : _vm.keyword.status
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.keyword.status,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = status,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(_vm.keyword, "status", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.keyword,
                                "status",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.keyword, "status", $$c)
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
              _c("td", {
                domProps: { textContent: _vm._s(_vm.merchant[val.appid]) }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.url) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(val.execute_time + "") }
              }),
              _vm._v(" "),
              _c("td", [
                val.status
                  ? _c("span", [_vm._v("成功返回")])
                  : _c("span", { staticClass: "mdui-text-color-deep-orange" }, [
                      _vm._v("异常返回")
                    ])
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "a",
                  {
                    staticClass: "mdui-btn mdui-ripple mdui-color-theme",
                    on: {
                      click: function($event) {
                        _vm.detail(val)
                      }
                    }
                  },
                  [_vm._v("view")]
                )
              ]),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.created_at) } })
            ])
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-dialog dialog_add" }, [
      _c("div", { staticClass: "mdui-dialog-title" }, [
        _vm._v("\n\t\t\t变量详情\n\t\t")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mdui-dialog-content" }, [
        _c(
          "div",
          { staticClass: "mdui-typo" },
          [
            _vm._l(_vm.dialog_data, function(val, key, index) {
              return [
                _c("code", [_vm._v(_vm._s(key))]),
                _vm._v(" "),
                _c("pre", [_vm._v(_vm._s(val))])
              ]
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _vm._m(1)
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
        _c("th", [_vm._v("商户")]),
        _vm._v(" "),
        _c("th", [_vm._v("Url")]),
        _vm._v(" "),
        _c("th", [_vm._v("执行时间(S)")]),
        _vm._v(" "),
        _c("th", [_vm._v("返回结果状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("参数明细")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mdui-dialog-actions" }, [
      _c(
        "a",
        {
          staticClass: "mdui-btn mdui-ripple",
          attrs: { "mdui-dialog-close": "" }
        },
        [_vm._v("关闭")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ab5359c", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/merchant/behavior.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/merchant/behavior.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1ab5359c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/merchant/behavior.vue")
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
Component.options.__file = "resources/assets/js/components/merchant/behavior.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ab5359c", Component.options)
  } else {
    hotAPI.reload("data-v-1ab5359c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21lcmNoYW50L2JlaGF2aW9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbWVyY2hhbnQvYmVoYXZpb3IudnVlPzk0ZjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21lcmNoYW50L2JlaGF2aW9yLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBO0FBQ0EsS0FEQSxrQkFDQTtBQUNBO0FBQ0EsV0FEQTtBQUVBLGVBRkE7QUFHQSxhQUhBO0FBSUEsa0JBSkE7QUFLQSxvQ0FMQTtBQU1BO0FBQ0EsV0FEQTtBQUVBLGNBRkE7QUFHQSxXQUhBO0FBSUE7QUFKQTtBQU5BO0FBYUEsRUFmQTs7QUFnQkE7QUFDQSxRQURBLGtCQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUpBO0FBS0EsUUFMQSxrQkFLQSxHQUxBLEVBS0E7QUFDQTtBQUNBO0FBQ0EsdURBREE7QUFFQSxpQkFGQTtBQUdBLHVCQUhBO0FBSUEsc0JBSkE7QUFLQSx3QkFMQTtBQU1BLDhCQU5BO0FBT0EsOEJBUEE7QUFRQSw0QkFSQTtBQVNBLDRCQVRBO0FBVUEscUJBVkE7QUFXQSwwQkFYQTtBQVlBO0FBWkE7QUFjQTtBQUNBO0FBQ0EsSUFGQTtBQUdBLEdBeEJBO0FBeUJBLFlBekJBLHNCQXlCQSxFQXpCQSxFQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E5QkE7QUErQkEsTUEvQkEsa0JBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLElBTkEsRUFNQSxLQU5BLENBTUEsZ0JBRUEsQ0FS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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsSUFBSSxLQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDalNBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMseVlBQWlWO0FBQzlXO0FBQ0EsdUJBQXVCLG1CQUFPLENBQUMsZ1FBQThPO0FBQzdRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB1cnNlX3VzZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10eXBvXCI+XG5cdFx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVfbm9ybWFsXCI+XG5cdFx0XHRcdOazqO+8muatpOaOpeWPo+aVsOaNruWPque7n+iuoeWVhuaIt0FQSeaooeWdlyhFQmFua1Nkay5waHAp5o6l5Y+j77yM5YW25LuW5pqC5LiN5YiX5YWl6IyD5Zu05YaFXG5cdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVfbm9ybWFsXCI+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOWMuemFjXVybO+8mjxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImtleXdvcmQudXJsXCIgLz5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTov5Tlm57nsbvlnovvvJpcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLWNoZWNrYm94XCIgdi1mb3I9XCIobmFtZSxzdGF0dXMpIG9mIHJlc3BvbnNlX3N0YXR1c1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjJyZW07XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwic3RhdHVzXCIgdi1tb2RlbD1cImtleXdvcmQuc3RhdHVzXCIgLz5cblx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1jaGVja2JveC1pY29uXCI+PC9pPlxuXHRcdFx0XHRcdFx0e3tuYW1lfX1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInNlYXJjaCgxKVwiPjxpIGNsYXNzPVwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPuaQnOe0ojwvYT5cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9ibG9ja3F1b3RlPlxuXHRcdDwvZGl2PlxuXHRcdFxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRhYlwiIG1kdWktdGFiPlxuXHRcdFx0PGEgOmhyZWY9XCInI3RhYl8nK2tleVwiIDpjbGFzcz1cInsnbWR1aS1idG4nOnRydWUsJ21kdWktcmlwcGxlJzp0cnVlLCdtZHVpLXRhYi1hY3RpdmUnOmtleT09PTB9XCIgdi1mb3I9XCIobmFtZSxpZCxrZXkpIG9mIG1lcmNoYW50XCIgdi10ZXh0PVwibmFtZVwiIEBjbGljaz1cInRhYl9jaGFuZ2UoaWQpXCI+PC9hPlxuXHRcdDwvZGl2PlxuXHRcdFxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRhYmxlLWZsdWlkXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlXCI+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0aD4jPC90aD5cblx0XHRcdFx0XHQ8dGg+5ZWG5oi3PC90aD5cblx0XHRcdFx0XHQ8dGg+VXJsPC90aD5cblx0XHRcdFx0XHQ8dGg+5omn6KGM5pe26Ze0KFMpPC90aD5cblx0XHRcdFx0XHQ8dGg+6L+U5Zue57uT5p6c54q25oCBPC90aD5cblx0XHRcdFx0XHQ8dGg+5Y+C5pWw5piO57uGPC90aD5cblx0XHRcdFx0XHQ8dGg+5Yib5bu65pe26Ze0PC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcblx0XHRcdFx0PHRyIHYtZm9yPVwiKHZhbCxrZXksaW5kZXgpIG9mIGxpc3QuZGF0YVwiPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCInIycrKGtleSsxKVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cIm1lcmNoYW50W3ZhbC5hcHBpZF1cIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwudXJsXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmV4ZWN1dGVfdGltZSArICcnXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwidmFsLnN0YXR1c1wiPuaIkOWKn+i/lOWbnjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIHYtZWxzZSBjbGFzcz1cIm1kdWktdGV4dC1jb2xvci1kZWVwLW9yYW5nZVwiPuW8guW4uOi/lOWbnjwvc3Bhbj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDx0ZD48YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIiBAY2xpY2s9XCJkZXRhaWwodmFsKVwiPnZpZXc8L2E+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmNyZWF0ZWRfYXRcIj48L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2cgZGlhbG9nX2FkZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLXRpdGxlXCI+XG5cdFx0XHRcdOWPmOmHj+ivpuaDhVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctY29udGVudFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10eXBvXCI+XG5cdFx0XHRcdFx0PHRlbXBsYXRlIHYtZm9yPVwiKHZhbCxrZXksaW5kZXgpIG9mIGRpYWxvZ19kYXRhXCI+XG5cdFx0XHRcdFx0XHQ8Y29kZT57e2tleX19PC9jb2RlPlxuXHRcdFx0XHRcdFx0PHByZT57e3ZhbH19PC9wcmU+XG5cdFx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1hY3Rpb25zXCI+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGVcIiBtZHVpLWRpYWxvZy1jbG9zZT7lhbPpl608L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb2xvci13aGl0ZSBmb290ZXJcIj5cblx0XHRcdDxwYWdpbmF0aW9uXG5cdFx0XHRcdFx0OnBhZ2VJbmZvPVwie1xuXHRcdFx0XHRcdFx0dG90YWw6bGlzdC50b3RhbCxcblx0XHRcdFx0XHRcdGN1cnJlbnQ6bGlzdC5jdXJyZW50X3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlbnVtOmxpc3QucGVyX3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlOmxpc3QubGFzdF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZWdyb3VwOjksXG5cdFx0XHRcdFx0XHRza2luOicjMjE5NkYzJ1xuXHRcdFx0XHRcdH1cIlxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJzZWFyY2hcIlxuXHRcdFx0PjwvcGFnaW5hdGlvbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGxpc3QgOiBbXSxcblx0XHRcdFx0bWVyY2hhbnQgOiAnJyxcblx0XHRcdFx0ZGlhbG9nIDogJycsXG5cdFx0XHRcdGRpYWxvZ19kYXRhIDogJycsXG5cdFx0XHRcdHJlc3BvbnNlX3N0YXR1cyA6IFsn5byC5bi46L+U5ZueJywn5oiQ5Yqf6L+U5ZueJ10sXG5cdFx0XHRcdGtleXdvcmQgOiB7XG5cdFx0XHRcdFx0cGFnZSA6IDEsXG5cdFx0XHRcdFx0c3RhdHVzIDogW10sXG5cdFx0XHRcdFx0dXJsIDogJycsXG5cdFx0XHRcdFx0YXBwaWQgOiAnJyxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzIDoge1xuXHRcdFx0c2VhcmNoKHBhZ2Upe1xuXHRcdFx0XHR0aGlzLmtleXdvcmQucGFnZSA9IHBhZ2U7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdGRldGFpbCh2YWwpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuZGlhbG9nX2RhdGEgPSB7XG5cdFx0XHRcdFx0J+WVhuaItycgOiB0Lm1lcmNoYW50W3ZhbC5hcHBpZF0gKyAnKCcgKyB2YWwuYXBwaWQgKyAnKScsXG5cdFx0XHRcdFx0J+aOpeWPoycgOiB2YWwudXJsLFxuXHRcdFx0XHRcdCfov5Tlm57lgLwnIDogdmFsLnJlc3BvbnNlLFxuXHRcdFx0XHRcdCckX0dFVCcgOiB2YWwuJF9HRVQsXG5cdFx0XHRcdFx0JyRfUE9TVCcgOiB2YWwuJF9QT1NULFxuXHRcdFx0XHRcdCckX1JFUVVFU1QnIDogdmFsLiRfUkVRVUVTVCxcblx0XHRcdFx0XHQnJF9TRVNTSU9OJyA6IHZhbC4kX1NFU1NJT04sXG5cdFx0XHRcdFx0JyRfQ09PS0lFJyA6IHZhbC4kX0NPT0tJRSxcblx0XHRcdFx0XHQnJF9TRVJWRVInIDogdmFsLiRfU0VSVkVSLFxuXHRcdFx0XHRcdCflpIfms6gnIDogdmFsLnJlbWFya3MsXG5cdFx0XHRcdFx0J+ivt+axguaXtumXtCcgOiB2YWwuY3JlYXRlZF9hdCxcblx0XHRcdFx0XHQn6K+35rGC6ICX5pe2KHMpJyA6IHZhbC5leGVjdXRlX3RpbWUgKyAnJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0dC4kbmV4dFRpY2soZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR0LmRpYWxvZy5vcGVuKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdHRhYl9jaGFuZ2UoaWQpe1xuXHRcdFx0XHR0aGlzLmtleXdvcmQucGFnZSA9IDE7XG5cdFx0XHRcdHRoaXMua2V5d29yZC5hcHBpZCA9IGlkO1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdGluaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvbWVyY2hhbnQvYmVoYXZpb3InLHQua2V5d29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0Lmxpc3QgPSBkYXRhLmxpc3Q7XG5cdFx0XHRcdFx0dC5tZXJjaGFudCA9IGRhdGEubWVyY2hhbnQ7XG5cdFx0XHRcdFx0dC4kbmV4dFRpY2soZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQoJy5tZHVpLXRhYicpLm11dGF0aW9uKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0dC5kaWFsb2cgPSBuZXcgbWR1aS5EaWFsb2coJy5kaWFsb2dfYWRkJyx7aGlzdG9yeTpmYWxzZX0pO1xuXHRcdFx0dC5pbml0KCk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbWVyY2hhbnQvYmVoYXZpb3IudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1cnNlX3VzZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXR5cG9cIiB9LCBbXG4gICAgICBfYyhcImJsb2NrcXVvdGVcIiwgeyBzdGF0aWNDbGFzczogXCJibG9ja3F1b3RlX25vcm1hbFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxuXFx0XFx0XFx05rOo77ya5q2k5o6l5Y+j5pWw5o2u5Y+q57uf6K6h5ZWG5oi3QVBJ5qih5Z2XKEVCYW5rU2RrLnBocCnmjqXlj6PvvIzlhbbku5bmmoLkuI3liJflhaXojIPlm7TlhoVcXG5cXHRcXHRcIlxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJsb2NrcXVvdGVcIiwgeyBzdGF0aWNDbGFzczogXCJibG9ja3F1b3RlX25vcm1hbFwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTljLnphY11cmzvvJpcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnVybCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQudXJsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ua2V5d29yZC51cmwgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJ1cmxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTov5Tlm57nsbvlnovvvJpcXG5cXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnJlc3BvbnNlX3N0YXR1cywgZnVuY3Rpb24obmFtZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIycmVtXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQuc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ua2V5d29yZC5zdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ua2V5d29yZC5zdGF0dXMsIHN0YXR1cykgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ua2V5d29yZC5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5rZXl3b3JkLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcInN0YXR1c1wiLCAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJzdGF0dXNcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhuYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcInNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5pCc57SiXCIpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJcIiwgYXR0cnM6IHsgXCJtZHVpLXRhYlwiOiBcIlwiIH0gfSxcbiAgICAgIF92bS5fbChfdm0ubWVyY2hhbnQsIGZ1bmN0aW9uKG5hbWUsIGlkLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiYVwiLCB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwibWR1aS1idG5cIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWR1aS1yaXBwbGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWR1aS10YWItYWN0aXZlXCI6IGtleSA9PT0gMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjdGFiX1wiICsga2V5IH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhuYW1lKSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS50YWJfY2hhbmdlKGlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZS1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlXCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QuZGF0YSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwiI1wiICsgKGtleSArIDEpKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tZXJjaGFudFt2YWwuYXBwaWRdKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwudXJsKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5leGVjdXRlX3RpbWUgKyBcIlwiKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICB2YWwuc3RhdHVzXG4gICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oiQ5Yqf6L+U5ZueXCIpXSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0LWNvbG9yLWRlZXAtb3JhbmdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuW8guW4uOi/lOWbnlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXRhaWwodmFsKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJ2aWV3XCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5jcmVhdGVkX2F0KSB9IH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nIGRpYWxvZ19hZGRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLXRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHTlj5jph4/or6bmg4VcXG5cXHRcXHRcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2ctY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdHlwb1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS5kaWFsb2dfZGF0YSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoX3ZtLl9zKGtleSkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInByZVwiLCBbX3ZtLl92KF92bS5fcyh2YWwpKV0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbG9yLXdoaXRlIGZvb3RlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICAgIHRvdGFsOiBfdm0ubGlzdC50b3RhbCxcbiAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmxpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlbnVtOiBfdm0ubGlzdC5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZTogX3ZtLmxpc3QubGFzdF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlZ3JvdXA6IDksXG4gICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5zZWFyY2ggfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCIjXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWVhuaIt1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJVcmxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5omn6KGM5pe26Ze0KFMpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui/lOWbnue7k+aenOeKtuaAgVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlj4LmlbDmmI7nu4ZcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Yib5bu65pe26Ze0XCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy1hY3Rpb25zXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGVcIixcbiAgICAgICAgICBhdHRyczogeyBcIm1kdWktZGlhbG9nLWNsb3NlXCI6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwi5YWz6ZetXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTFhYjUzNTljXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xYWI1MzU5Y1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tZXJjaGFudC9iZWhhdmlvci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMWFiNTM1OWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbWVyY2hhbnQvYmVoYXZpb3IudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9iZWhhdmlvci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFhYjUzNTljXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYmVoYXZpb3IudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9tZXJjaGFudC9iZWhhdmlvci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWFiNTM1OWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xYWI1MzU5Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL21lcmNoYW50L2JlaGF2aW9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbWVyY2hhbnQvYmVoYXZpb3IudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiXSwic291cmNlUm9vdCI6IiJ9