webpackJsonp([19],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pay/index.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			form: { pay_config: '' },
			dialog: '',
			pay_config_name: 'alipay',
			keyword: {
				page: 1,
				name: '',
				date: []
			}
		};
	},

	methods: {
		add: function add(id) {
			var t = this;
			t.$API.get('/pay/index/' + id).then(function (data) {
				t.form = data;
				t.$nextTick(function () {
					$('.mdui-tab').mutation();
					t.dialog.open();
				});
			}).catch(function (msg) {});
		},
		add_submit: function add_submit() {
			var t = this;
			t.$API.post('/pay/index', t.form).then(function () {
				t.dialog.close();
				t.init();
			}).catch(function (msg) {});
		},
		del: function del(id) {
			var t = this;
			mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认?', function () {
				t.$API.delete('/pay/index', { id: id }).then(function () {
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		tab_change: function tab_change(name) {
			this.pay_config_name = name;
		},
		init: function init() {
			var t = this;
			t.$API.get('/pay/index', t.keyword).then(function (data) {
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6687c324\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pay/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "merchant" }, [
    _c("div", { staticClass: "typo" }, [
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
          _vm._v("\n\t\t\t\t名称："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.name,
                expression: "keyword.name"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("\n\t\t\t\t日期筛选："),
            _c("vue-datepicker-local", {
              attrs: { clearable: "" },
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
    ]),
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
              _c("td", { domProps: { textContent: _vm._s(val.name) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(val.status ? "启用" : "禁用") }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.remarks) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.created_at) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.updated_at) } }),
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
                  val.id > 1
                    ? _c(
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
                    : _vm._e()
                ])
              ])
            ])
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-dialog dialog_add" }, [
      _c("div", { staticClass: "mdui-dialog-title" }, [
        _vm._v("\n\t\t\t支付渠道新增/修改\n\t\t")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mdui-dialog-content" }, [
        _c("form", [
          _c("div", { staticClass: "mdui-container" }, [
            _c("div", { staticClass: "mdui-textfield" }, [
              _c("label", { staticClass: "mdui-textfield-label" }, [
                _vm._v("支付渠道名称")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.name,
                    expression: "form.name"
                  }
                ],
                staticClass: "mdui-textfield-input",
                attrs: { type: "text" },
                domProps: { value: _vm.form.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "name", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mdui-container" },
            [
              _c(
                "div",
                { staticClass: "mdui-tab", attrs: { "mdui-tab": "" } },
                _vm._l(_vm.form.pay_config, function(config, name, key) {
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
                        _vm.tab_change(name)
                      }
                    }
                  })
                })
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mdui-divider" }),
              _vm._v(" "),
              _vm._l(_vm.form.pay_config[_vm.pay_config_name], function(
                val,
                key
              ) {
                return _c("div", { staticClass: "payment_field" }, [
                  _c(
                    "div",
                    {
                      class: {
                        "mdui-textfield": true,
                        "mdui-textfield-has-bottom": true,
                        "mdui-textfield-disabled": !!val.disabled
                      }
                    },
                    [
                      _c("label", {
                        staticClass: "mdui-textfield-label",
                        domProps: { textContent: _vm._s(val.field) }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: val.value,
                            expression: "val.value"
                          }
                        ],
                        staticClass: "mdui-textfield-input",
                        attrs: { disabled: !!val.disabled, type: "text" },
                        domProps: { value: val.value },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(val, "value", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "mdui-textfield-helper",
                        domProps: { textContent: _vm._s(val.description) }
                      })
                    ]
                  )
                ])
              })
            ],
            2
          ),
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mdui-container" }, [
            _c("div", { staticClass: "mdui-textfield" }, [
              _c("label", { staticClass: "mdui-textfield-label" }, [
                _vm._v("备注")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.remarks,
                    expression: "form.remarks"
                  }
                ],
                staticClass: "mdui-textfield-input",
                attrs: { type: "text" },
                domProps: { value: _vm.form.remarks },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "remarks", $event.target.value)
                  }
                }
              })
            ])
          ])
        ])
      ]),
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
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("支付渠道名称")]),
        _vm._v(" "),
        _c("th", [_vm._v("状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("备注")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
        _vm._v(" "),
        _c("th", [_vm._v("修改时间")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-6687c324", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/pay/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pay/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6687c324\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pay/index.vue")
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
Component.options.__file = "resources/assets/js/components/pay/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6687c324", Component.options)
  } else {
    hotAPI.reload("data-v-6687c324", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BheS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BheS9pbmRleC52dWU/Mjc1NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGF5L2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlIQTtBQUNBLEtBREEsa0JBQ0E7QUFDQTtBQUNBLFdBREE7QUFFQSwyQkFGQTtBQUdBLGFBSEE7QUFJQSw0QkFKQTtBQUtBO0FBQ0EsV0FEQTtBQUVBLFlBRkE7QUFHQTtBQUhBO0FBTEE7QUFXQSxFQWJBOztBQWNBO0FBQ0EsS0FEQSxlQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxJQU5BLEVBTUEsS0FOQSxDQU1BLGdCQUVBLENBUkE7QUFTQSxHQVpBO0FBYUEsWUFiQSx3QkFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFIQSxFQUdBLEtBSEEsQ0FHQSxnQkFFQSxDQUxBO0FBTUEsR0FyQkE7QUFzQkEsS0F0QkEsZUFzQkEsRUF0QkEsRUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFFQSxLQUZBLENBRUEsZ0JBRUEsQ0FKQTtBQUtBLElBTkEsRUFNQSxjQU5BLEVBTUEsdURBTkE7QUFPQSxHQS9CQTtBQWdDQSxRQWhDQSxrQkFnQ0EsSUFoQ0EsRUFnQ0E7QUFDQTtBQUNBO0FBQ0EsR0FuQ0E7QUFvQ0EsWUFwQ0Esc0JBb0NBLElBcENBLEVBb0NBO0FBQ0E7QUFDQSxH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QUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cIm1lcmNoYW50XCI+XG5cdFx0PGRpdiBjbGFzcz1cInR5cG9cIj5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwiYWRkKDApXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+5re75YqgPC9hPlxuXHRcdFx0PC9ibG9ja3F1b3RlPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGl2aWRlclwiPjwvZGl2PlxuXHRcdFx0PGJsb2NrcXVvdGUgY2xhc3M9XCJibG9ja3F1b3RlX25vcm1hbFwiPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTlkI3np7DvvJo8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJrZXl3b3JkLm5hbWVcIiAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOaXpeacn+etm+mAie+8mjx2dWUtZGF0ZXBpY2tlci1sb2NhbCB2LW1vZGVsPVwia2V5d29yZC5kYXRlXCIgY2xlYXJhYmxlIC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwic2VhcmNoKDEpXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+5pCc57SiPC9hPlxuXHRcdFx0PC9ibG9ja3F1b3RlPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRhYmxlLWZsdWlkXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlXCI+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0aD4jPC90aD5cblx0XHRcdFx0XHQ8dGg+SUQ8L3RoPlxuXHRcdFx0XHRcdDx0aD7mlK/ku5jmuKDpgZPlkI3np7A8L3RoPlxuXHRcdFx0XHRcdDx0aD7nirbmgIE8L3RoPlxuXHRcdFx0XHRcdDx0aD7lpIfms6g8L3RoPlxuXHRcdFx0XHRcdDx0aD7liJvlu7rml7bpl7Q8L3RoPlxuXHRcdFx0XHRcdDx0aD7kv67mlLnml7bpl7Q8L3RoPlxuXHRcdFx0XHRcdDx0aD7mk43kvZw8L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dHIgdi1mb3I9XCIodmFsLGtleSxpbmRleCkgaW4gbGlzdC5kYXRhXCI+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cIicjJysoa2V5KzEpXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmlkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLm5hbWVcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuc3RhdHVzID8gJ+WQr+eUqCcgOiAn56aB55SoJ1wiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZW1hcmtzXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmNyZWF0ZWRfYXRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwudXBkYXRlZF9hdFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktYnRuLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cImFkZCh2YWwuaWQpXCI+5L+u5pS5PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSB2LWlmPVwidmFsLmlkID4gMVwiIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1kZWVwLW9yYW5nZVwiIEBjbGljaz1cImRlbCh2YWwuaWQpXCI+5Yig6ZmkPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PCEtLeS/ruaUueW8ueeqly0tPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZyBkaWFsb2dfYWRkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctdGl0bGVcIj5cblx0XHRcdFx05pSv5LuY5rig6YGT5paw5aKeL+S/ruaUuVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctY29udGVudFwiPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPuaUr+S7mOa4oOmBk+WQjeensDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0XCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGFiXCIgbWR1aS10YWI+XG5cdFx0XHRcdFx0XHRcdDxhIDpocmVmPVwiJyN0YWJfJytrZXlcIiA6Y2xhc3M9XCJ7J21kdWktYnRuJzp0cnVlLCdtZHVpLXJpcHBsZSc6dHJ1ZSwnbWR1aS10YWItYWN0aXZlJzprZXk9PT0wfVwiIHYtZm9yPVwiKGNvbmZpZyxuYW1lLGtleSkgb2YgZm9ybS5wYXlfY29uZmlnXCIgdi10ZXh0PVwibmFtZVwiIEBjbGljaz1cInRhYl9jaGFuZ2UobmFtZSlcIj48L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpdmlkZXJcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYXltZW50X2ZpZWxkXCIgdi1mb3I9XCIodmFsLGtleSkgb2YgZm9ybS5wYXlfY29uZmlnW3BheV9jb25maWdfbmFtZV1cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJ7J21kdWktdGV4dGZpZWxkJzp0cnVlLCdtZHVpLXRleHRmaWVsZC1oYXMtYm90dG9tJzp0cnVlLCdtZHVpLXRleHRmaWVsZC1kaXNhYmxlZCc6ISF2YWwuZGlzYWJsZWR9XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB2LXRleHQ9XCJ2YWwuZmllbGRcIj48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0XCIgOmRpc2FibGVkPVwiISF2YWwuZGlzYWJsZWRcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJ2YWwudmFsdWVcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaGVscGVyXCIgdi10ZXh0PVwidmFsLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInN0YXR1c1wiIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiIHZhbHVlPVwiMVwiIDpjaGVja2VkPVwiISFmb3JtLnN0YXR1c1wiIC8+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1yYWRpby1pY29uXCI+PC9pPlxuXHRcdFx0XHRcdFx0XHTlkK/nlKhcblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic3RhdHVzXCIgdi1tb2RlbD1cImZvcm0uc3RhdHVzXCIgdmFsdWU9XCIwXCIgOmNoZWNrZWQ9XCIhZm9ybS5zdGF0dXNcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktcmFkaW8taWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdFx056aB55SoXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWxhYmVsXCI+5aSH5rOoPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLnJlbWFya3NcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLWFjdGlvbnNcIj5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZVwiIG1kdWktZGlhbG9nLWNsb3NlPuWPlua2iDwvYT5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwiYWRkX3N1Ym1pdFwiPuaPkOS6pDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbG9yLXdoaXRlIGZvb3RlclwiPlxuXHRcdFx0PHBhZ2luYXRpb25cblx0XHRcdFx0XHQ6cGFnZUluZm89XCJ7XG5cdFx0XHRcdFx0XHR0b3RhbDpsaXN0LnRvdGFsLFxuXHRcdFx0XHRcdFx0Y3VycmVudDpsaXN0LmN1cnJlbnRfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2VudW06bGlzdC5wZXJfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2U6bGlzdC5sYXN0X3BhZ2UsXG5cdFx0XHRcdFx0XHRwYWdlZ3JvdXA6OSxcblx0XHRcdFx0XHRcdHNraW46JyMyMTk2RjMnXG5cdFx0XHRcdFx0fVwiXG5cdFx0XHRcdFx0QGNoYW5nZT1cInNlYXJjaFwiXG5cdFx0XHQ+PC9wYWdpbmF0aW9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bGlzdCA6IFtdLFxuXHRcdFx0XHRmb3JtIDoge3BheV9jb25maWc6Jyd9LFxuXHRcdFx0XHRkaWFsb2cgOiAnJyxcblx0XHRcdFx0cGF5X2NvbmZpZ19uYW1lIDogJ2FsaXBheScsXG5cdFx0XHRcdGtleXdvcmQgOiB7XG5cdFx0XHRcdFx0cGFnZSA6IDEsXG5cdFx0XHRcdFx0bmFtZSA6ICcnLFxuXHRcdFx0XHRcdGRhdGUgOiBbXSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzIDoge1xuXHRcdFx0YWRkKGlkKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvcGF5L2luZGV4LycraWQpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5mb3JtID0gZGF0YTtcblx0XHRcdFx0XHR0LiRuZXh0VGljayhmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0JCgnLm1kdWktdGFiJykubXV0YXRpb24oKTtcblx0XHRcdFx0XHRcdHQuZGlhbG9nLm9wZW4oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24obXNnKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0YWRkX3N1Ym1pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuJEFQSS5wb3N0KCcvcGF5L2luZGV4Jyx0LmZvcm0pLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR0LmRpYWxvZy5jbG9zZSgpO1xuXHRcdFx0XHRcdHQuaW5pdCgpO1xuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRkZWwoaWQpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdG1kdWkuY29uZmlybSgn5Yig6Zmk5ZCO5pWw5o2u5LiN5Y+v5oGi5aSN77yM56Gu6K6k5Yig6Zmk6K+354K55Ye744CQ56Gu5a6a44CR5oyJ6ZKuJywgJ+ehruiupD8nLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHQuJEFQSS5kZWxldGUoJy9wYXkvaW5kZXgnLHtpZDppZH0pLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHQuaW5pdCgpO1xuXHRcdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2UsY29uZmlybVRleHQ6J+ehruWumicsY2FuY2VsVGV4dDon5Y+W5raIJ30pO1xuXHRcdFx0fSxcblx0XHRcdHNlYXJjaChwYWdlKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdH0sXG5cdFx0XHR0YWJfY2hhbmdlKG5hbWUpe1xuXHRcdFx0XHR0aGlzLnBheV9jb25maWdfbmFtZSA9IG5hbWU7XG5cdFx0XHR9LFxuXHRcdFx0aW5pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuJEFQSS5nZXQoJy9wYXkvaW5kZXgnLHQua2V5d29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0Lmxpc3QgPSBkYXRhLmxpc3Q7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0dC5kaWFsb2cgPSBuZXcgbWR1aS5EaWFsb2coJy5kaWFsb2dfYWRkJyx7aGlzdG9yeTpmYWxzZX0pO1xuXHRcdFx0dC5pbml0KCk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BheS9pbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVyY2hhbnRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eXBvXCIgfSwgW1xuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uYWRkKDApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIiB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiYWRkXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIua3u+WKoFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpdmlkZXJcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJsb2NrcXVvdGVcIiwgeyBzdGF0aWNDbGFzczogXCJibG9ja3F1b3RlX25vcm1hbFwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTlkI3np7DvvJpcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLm5hbWUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLm5hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5rZXl3b3JkLm5hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx05pel5pyf562b6YCJ77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJ2dWUtZGF0ZXBpY2tlci1sb2NhbFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGNsZWFyYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5kYXRlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcImRhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLmRhdGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCgxKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCIgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcInNlYXJjaFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCLmkJzntKJcIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUtZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5saXN0LmRhdGEsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhcIiNcIiArIChrZXkgKyAxKSkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmlkKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwubmFtZSkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuc3RhdHVzID8gXCLlkK/nlKhcIiA6IFwi56aB55SoXCIpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5yZW1hcmtzKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuY3JlYXRlZF9hdCkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnVwZGF0ZWRfYXQpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZCh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5L+u5pS5XCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICB2YWwuaWQgPiAxXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWRlZXAtb3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbCh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWIoOmZpFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZyBkaWFsb2dfYWRkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx05pSv5LuY5rig6YGT5paw5aKeL+S/ruaUuVxcblxcdFxcdFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy1jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImZvcm1cIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5pSv5LuY5rig6YGT5ZCN56ewXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJcIiwgYXR0cnM6IHsgXCJtZHVpLXRhYlwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZvcm0ucGF5X2NvbmZpZywgZnVuY3Rpb24oY29uZmlnLCBuYW1lLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1idG5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktcmlwcGxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLXRhYi1hY3RpdmVcIjoga2V5ID09PSAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI3RhYl9cIiArIGtleSB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKG5hbWUpIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYl9jaGFuZ2UobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5mb3JtLnBheV9jb25maWdbX3ZtLnBheV9jb25maWdfbmFtZV0sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGF5bWVudF9maWVsZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS10ZXh0ZmllbGRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS10ZXh0ZmllbGQtaGFzLWJvdHRvbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLXRleHRmaWVsZC1kaXNhYmxlZFwiOiAhIXZhbC5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogISF2YWwuZGlzYWJsZWQsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogdmFsLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQodmFsLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1oZWxwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmRlc2NyaXB0aW9uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcmFkaW9cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIsIG5hbWU6IFwic3RhdHVzXCIsIHZhbHVlOiBcIjFcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiAhIV92bS5mb3JtLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShfdm0uZm9ybS5zdGF0dXMsIFwiMVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXR1c1wiLCBcIjFcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJhZGlvLWljb25cIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx05ZCv55SoXFxuXFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJhZGlvXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiLCBuYW1lOiBcInN0YXR1c1wiLCB2YWx1ZTogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogIV92bS5mb3JtLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShfdm0uZm9ybS5zdGF0dXMsIFwiMFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXR1c1wiLCBcIjBcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJhZGlvLWljb25cIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx056aB55SoXFxuXFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlpIfms6hcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJlbWFya3MsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yZW1hcmtzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucmVtYXJrcyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlbWFya3NcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWFjdGlvbnNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcIm1kdWktZGlhbG9nLWNsb3NlXCI6IFwiXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hZGRfc3VibWl0IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgdG90YWw6IF92bS5saXN0LnRvdGFsLFxuICAgICAgICAgICAgICBjdXJyZW50OiBfdm0ubGlzdC5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2VudW06IF92bS5saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICBwYWdlOiBfdm0ubGlzdC5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2Vncm91cDogOSxcbiAgICAgICAgICAgICAgc2tpbjogXCIjMjE5NkYzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnNlYXJjaCB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiSURcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5pSv5LuY5rig6YGT5ZCN56ewXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIueKtuaAgVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Yib5bu65pe26Ze0XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuS/ruaUueaXtumXtFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02Njg3YzMyNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjY4N2MzMjRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGF5L2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02Njg3YzMyNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXkvaW5kZXgudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY2ODdjMzI0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXkvaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2ODdjMzI0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjY4N2MzMjRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXkvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXkvaW5kZXgudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiXSwic291cmNlUm9vdCI6IiJ9