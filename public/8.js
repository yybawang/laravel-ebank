webpackJsonp([8],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/system/config.vue":
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			form: '',
			dialog: '',
			keyword: {
				page: 1,
				key: '',
				value: '',
				date: []
			}
		};
	},

	methods: {
		add: function add(id) {
			var t = this;
			t.dialog.open();
			t.$API.get('/system/config/' + id).then(function (data) {
				t.form = data;
			}).catch(function (msg) {});
		},
		add_submit: function add_submit() {
			var t = this;
			t.$API.post('/system/config', t.form).then(function () {
				t.dialog.close();
				t.init();
			}).catch(function (msg) {});
		},
		del: function del(id) {
			var t = this;
			mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认?', function () {
				t.$API.delete('/system/config', { id: id }).then(function () {
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		rank: function rank(id, action) {
			var t = this;
			tips('更新排序中...');
			t.$API.post('/system/config_rank', { id: id, action: action }).then(function (data) {
				t.init();
			}).catch(function (msg) {});
		},
		init: function init() {
			var t = this;
			t.$API.get('/system/config', t.keyword).then(function (data) {
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47c5859b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/system/config.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "purse_user" }, [
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
          _vm._v("\n\t\t\t\t键："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.key,
                expression: "keyword.key"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.key },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "key", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n\t\t\t\t值："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.value,
                expression: "keyword.value"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.value },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "value", $event.target.value)
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
              _c("td", { domProps: { textContent: _vm._s(val.key) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.value) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.tips) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(val.status ? "启用" : "禁用") }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.created_at) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.rank) } }),
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
                  _c(
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
        _vm._v("\n\t\t\t系统配置新增/修改\n\t\t")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mdui-dialog-content" }, [
        _c("form", [
          _c("div", { staticClass: "mdui-container" }, [
            _c("div", { staticClass: "mdui-textfield" }, [
              _c("label", { staticClass: "mdui-textfield-label" }, [
                _vm._v("配置键名")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.key,
                    expression: "form.key"
                  }
                ],
                staticClass: "mdui-textfield-input",
                attrs: { type: "text" },
                domProps: { value: _vm.form.key },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "key", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mdui-container" }, [
            _c("div", { staticClass: "mdui-textfield" }, [
              _c("label", { staticClass: "mdui-textfield-label" }, [
                _vm._v("配置值")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.value,
                    expression: "form.value"
                  }
                ],
                staticClass: "mdui-textfield-input",
                attrs: { type: "text" },
                domProps: { value: _vm.form.value },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "value", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mdui-container" }, [
            _c("div", { staticClass: "mdui-textfield" }, [
              _c("label", { staticClass: "mdui-textfield-label" }, [
                _vm._v("提示")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.tips,
                    expression: "form.tips"
                  }
                ],
                staticClass: "mdui-textfield-input",
                attrs: { type: "text" },
                domProps: { value: _vm.form.tips },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "tips", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mdui-container" }, [
            _c("div", { staticClass: "mdui-textfield" }, [
              _c("label", { staticClass: "mdui-textfield-label" }, [
                _vm._v("展示列表排序(小位数靠前)")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.rank,
                    expression: "form.rank"
                  }
                ],
                staticClass: "mdui-textfield-input",
                attrs: { type: "text" },
                domProps: { value: _vm.form.rank },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "rank", $event.target.value)
                  }
                }
              })
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
        _c("th", [_vm._v("键")]),
        _vm._v(" "),
        _c("th", [_vm._v("值")]),
        _vm._v(" "),
        _c("th", [_vm._v("提示")]),
        _vm._v(" "),
        _c("th", [_vm._v("状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
        _vm._v(" "),
        _c("th", [_vm._v("排序")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-47c5859b", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/system/config.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/system/config.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47c5859b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/system/config.vue")
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
Component.options.__file = "resources/assets/js/components/system/config.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47c5859b", Component.options)
  } else {
    hotAPI.reload("data-v-47c5859b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N5c3RlbS9jb25maWcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zeXN0ZW0vY29uZmlnLnZ1ZT8wMjNhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zeXN0ZW0vY29uZmlnLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtJQTtBQUNBLEtBREEsa0JBQ0E7QUFDQTtBQUNBLFdBREE7QUFFQSxXQUZBO0FBR0EsYUFIQTtBQUlBO0FBQ0EsV0FEQTtBQUVBLFdBRkE7QUFHQSxhQUhBO0FBSUE7QUFKQTtBQUpBO0FBV0EsRUFiQTs7QUFjQTtBQUNBLEtBREEsZUFDQSxFQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBRkEsRUFFQSxLQUZBLENBRUEsZ0JBRUEsQ0FKQTtBQUtBLEdBVEE7QUFVQSxZQVZBLHdCQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUhBLEVBR0EsS0FIQSxDQUdBLGdCQUVBLENBTEE7QUFNQSxHQWxCQTtBQW1CQSxLQW5CQSxlQW1CQSxFQW5CQSxFQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLEtBRkEsQ0FFQSxnQkFFQSxDQUpBO0FBS0EsSUFOQSxFQU1BLGNBTkEsRUFNQSx1REFOQTtBQU9BLEdBNUJBO0FBNkJBLFFBN0JBLGtCQTZCQSxJQTdCQSxFQTZCQTtBQUNBO0FBQ0E7QUFDQSxHQWhDQTtBQWlDQSxNQWpDQSxnQkFpQ0EsRUFqQ0EsRUFpQ0EsTUFqQ0EsRUFpQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicHVyc2VfdXNlclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ0eXBvXCI+XG5cdFx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVfbm9ybWFsXCI+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cImFkZCgwKVwiPjxpIGNsYXNzPVwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCI+YWRkPC9pPua3u+WKoDwvYT5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpdmlkZXJcIj48L2Rpdj5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx06ZSu77yaPGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwia2V5d29yZC5rZXlcIiAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOWAvO+8mjxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImtleXdvcmQudmFsdWVcIiAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOaXpeacn+etm+mAie+8mjx2dWUtZGF0ZXBpY2tlci1sb2NhbCB2LW1vZGVsPVwia2V5d29yZC5kYXRlXCIgY2xlYXJhYmxlIC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwic2VhcmNoKDEpXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+5pCc57SiPC9hPlxuXHRcdFx0PC9ibG9ja3F1b3RlPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRhYmxlLWZsdWlkXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlXCI+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0aD4jPC90aD5cblx0XHRcdFx0XHQ8dGg+6ZSuPC90aD5cblx0XHRcdFx0XHQ8dGg+5YC8PC90aD5cblx0XHRcdFx0XHQ8dGg+5o+Q56S6PC90aD5cblx0XHRcdFx0XHQ8dGg+54q25oCBPC90aD5cblx0XHRcdFx0XHQ8dGg+5Yib5bu65pe26Ze0PC90aD5cblx0XHRcdFx0XHQ8dGg+5o6S5bqPPC90aD5cblx0XHRcdFx0XHQ8dGg+5pON5L2cPC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcblx0XHRcdFx0PHRyIHYtZm9yPVwiKHZhbCxrZXksaW5kZXgpIG9mIGxpc3QuZGF0YVwiPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCInIycrKGtleSsxKVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5rZXlcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwudmFsdWVcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwudGlwc1wiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5zdGF0dXMgPyAn5ZCv55SoJyA6ICfnpoHnlKgnXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmNyZWF0ZWRfYXRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmFua1wiPjwvdGQ+XG5cdFx0XHRcdFx0PCEtLTx0ZD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWJ0bi1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGVhbC00MDAgbWR1aS10ZXh0LWNvbG9yLXdoaXRlXCIgQGNsaWNrPVwicmFuayh2YWwuaWQsLTEpXCI+5LiK56e7PC9hPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItY3lhbi01MDAgbWR1aS10ZXh0LWNvbG9yLXdoaXRlXCIgQGNsaWNrPVwicmFuayh2YWwuaWQsMSlcIj7kuIvnp7s8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RkPi0tPlxuXHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWJ0bi1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIiBAY2xpY2s9XCJhZGQodmFsLmlkKVwiPuS/ruaUuTwvYT5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWRlZXAtb3JhbmdlXCIgQGNsaWNrPVwiZGVsKHZhbC5pZClcIj7liKDpmaQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8IS0t5L+u5pS55by556qXLS0+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nIGRpYWxvZ19hZGRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy10aXRsZVwiPlxuXHRcdFx0XHTns7vnu5/phY3nva7mlrDlop4v5L+u5pS5XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1jb250ZW50XCI+XG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWxhYmVsXCI+6YWN572u6ZSu5ZCNPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJmb3JtLmtleVwiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPumFjee9ruWAvDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0XCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS52YWx1ZVwiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPuaPkOekujwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0XCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS50aXBzXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWxhYmVsXCI+5bGV56S65YiX6KGo5o6S5bqPKOWwj+S9jeaVsOmdoOWJjSk8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZvcm0ucmFua1wiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1kdWktcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzdGF0dXNcIiB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIiB2YWx1ZT1cIjFcIiA6Y2hlY2tlZD1cIiEhZm9ybS5zdGF0dXNcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktcmFkaW8taWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdFx05ZCv55SoXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWR1aS1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInN0YXR1c1wiIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiIHZhbHVlPVwiMFwiIDpjaGVja2VkPVwiIWZvcm0uc3RhdHVzXCIgLz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLXJhZGlvLWljb25cIj48L2k+XG5cdFx0XHRcdFx0XHRcdOemgeeUqFxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctYWN0aW9uc1wiPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlXCIgbWR1aS1kaWFsb2ctY2xvc2U+5Y+W5raIPC9hPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIiBAY2xpY2s9XCJhZGRfc3VibWl0XCI+5o+Q5LqkPC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdGZvcm0gOiAnJyxcblx0XHRcdFx0ZGlhbG9nIDogJycsXG5cdFx0XHRcdGtleXdvcmQgOiB7XG5cdFx0XHRcdFx0cGFnZSA6IDEsXG5cdFx0XHRcdFx0a2V5IDogJycsXG5cdFx0XHRcdFx0dmFsdWUgOiAnJyxcblx0XHRcdFx0XHRkYXRlIDogW10sXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0bWV0aG9kcyA6IHtcblx0XHRcdGFkZChpZCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0dC5kaWFsb2cub3BlbigpO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvc3lzdGVtL2NvbmZpZy8nK2lkKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHQuZm9ybSA9IGRhdGE7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGFkZF9zdWJtaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkucG9zdCgnL3N5c3RlbS9jb25maWcnLHQuZm9ybSkudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHQuZGlhbG9nLmNsb3NlKCk7XG5cdFx0XHRcdFx0dC5pbml0KCk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGRlbChpZCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0bWR1aS5jb25maXJtKCfliKDpmaTlkI7mlbDmja7kuI3lj6/mgaLlpI3vvIznoa7orqTliKDpmaTor7fngrnlh7vjgJDnoa7lrprjgJHmjInpkq4nLCAn56Gu6K6kPycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dC4kQVBJLmRlbGV0ZSgnL3N5c3RlbS9jb25maWcnLHtpZDppZH0pLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHQuaW5pdCgpO1xuXHRcdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2UsY29uZmlybVRleHQ6J+ehruWumicsY2FuY2VsVGV4dDon5Y+W5raIJ30pO1xuXHRcdFx0fSxcblx0XHRcdHNlYXJjaChwYWdlKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdH0sXG5cdFx0XHRyYW5rKGlkLGFjdGlvbil7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0dGlwcygn5pu05paw5o6S5bqP5LitLi4uJyk7XG5cdFx0XHRcdHQuJEFQSS5wb3N0KCcvc3lzdGVtL2NvbmZpZ19yYW5rJyx7aWQ6aWQsYWN0aW9uOmFjdGlvbn0pLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5pbml0KCk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGluaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LiRBUEkuZ2V0KCcvc3lzdGVtL2NvbmZpZycsdC5rZXl3b3JkKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHQubGlzdCA9IGRhdGEubGlzdDtcblx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24obXNnKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCl7XG5cdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHR0LmRpYWxvZyA9IG5ldyBtZHVpLkRpYWxvZygnLmRpYWxvZ19hZGQnLHtoaXN0b3J5OmZhbHNlfSk7XG5cdFx0XHR0LmluaXQoKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zeXN0ZW0vY29uZmlnLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdXJzZV91c2VyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidHlwb1wiIH0sIFtcbiAgICAgIF9jKFwiYmxvY2txdW90ZVwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrcXVvdGVfbm9ybWFsXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmFkZCgwKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCIgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcImFkZFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCLmt7vliqBcIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaXZpZGVyXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx06ZSu77yaXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5rZXksXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLmtleVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmtleXdvcmQua2V5IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwia2V5XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTlgLzvvJpcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnZhbHVlLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC52YWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmtleXdvcmQudmFsdWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJ2YWx1ZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOaXpeacn+etm+mAie+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwidnVlLWRhdGVwaWNrZXItbG9jYWxcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBjbGVhcmFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmtleXdvcmQuZGF0ZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJkYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC5kYXRlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zZWFyY2goMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJzZWFyY2hcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwi5pCc57SiXCIpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdC5kYXRhLCBmdW5jdGlvbih2YWwsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoXCIjXCIgKyAoa2V5ICsgMSkpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5rZXkpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC52YWx1ZSkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnRpcHMpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnN0YXR1cyA/IFwi5ZCv55SoXCIgOiBcIuemgeeUqFwiKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuY3JlYXRlZF9hdCkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJhbmspIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZCh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5L+u5pS5XCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1kZWVwLW9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWwodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWIoOmZpFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZyBkaWFsb2dfYWRkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx057O757uf6YWN572u5paw5aKeL+S/ruaUuVxcblxcdFxcdFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy1jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImZvcm1cIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi6YWN572u6ZSu5ZCNXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5rZXksXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5rZXkgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJrZXlcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLphY3nva7lgLxcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS52YWx1ZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5o+Q56S6XCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50aXBzLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGlwc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnRpcHMgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0aXBzXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5bGV56S65YiX6KGo5o6S5bqPKOWwj+S9jeaVsOmdoOWJjSlcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJhbmssXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yYW5rXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucmFuayB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJhbmtcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJhZGlvXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiLCBuYW1lOiBcInN0YXR1c1wiLCB2YWx1ZTogXCIxXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogISFfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoX3ZtLmZvcm0uc3RhdHVzLCBcIjFcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgXCIxXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1yYWRpby1pY29uXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdOWQr+eUqFxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1yYWRpb1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicmFkaW9cIiwgbmFtZTogXCJzdGF0dXNcIiwgdmFsdWU6IFwiMFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6ICFfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoX3ZtLmZvcm0uc3RhdHVzLCBcIjBcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgXCIwXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1yYWRpby1pY29uXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdOemgeeUqFxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy1hY3Rpb25zXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWRpYWxvZy1jbG9zZVwiOiBcIlwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWRkX3N1Ym1pdCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi5o+Q5LqkXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbG9yLXdoaXRlIGZvb3RlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICAgIHRvdGFsOiBfdm0ubGlzdC50b3RhbCxcbiAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmxpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlbnVtOiBfdm0ubGlzdC5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZTogX3ZtLmxpc3QubGFzdF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlZ3JvdXA6IDksXG4gICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5zZWFyY2ggfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCIjXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIumUrlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlgLxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5o+Q56S6XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIueKtuaAgVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLliJvlu7rml7bpl7RcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5o6S5bqPXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaTjeS9nFwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ3YzU4NTliXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00N2M1ODU5YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zeXN0ZW0vY29uZmlnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00N2M1ODU5YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zeXN0ZW0vY29uZmlnLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb25maWcudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00N2M1ODU5YlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbmZpZy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N5c3RlbS9jb25maWcudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ3YzU4NTliXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDdjNTg1OWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zeXN0ZW0vY29uZmlnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc3lzdGVtL2NvbmZpZy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==