webpackJsonp([6],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/withdraw/alipay.vue":
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
			purse_type: '',
			form: '',
			dialog: '',
			check_all_status: false,
			success_all_id: [],
			keyword: {
				page: 1,
				export: 0,
				user_id: '',
				realname: '',
				date: [],
				merchant_id: 1
			},
			status: ['申请中', '<span class="mdui-text-color-teal">提现成功</span>', '<span class="mdui-text-color-deep-orange">提现失败</span>']
		};
	},

	methods: {
		success: function success(id) {
			var t = this;
			mdui.confirm('确认后将从用户对应钱包扣除相应金额，确认请点击【确定】按钮', '已打款？', function () {
				t.$API.post('/withdraw/success', { id: [id], type: 'alipay' }).then(function () {
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		fail: function fail(id) {
			var t = this;
			mdui.prompt('标记为失败后，对应申请金额会原路返还给用户，知悉后请填写【失败原因】', '填写失败原因', function (value) {
				if (value) {
					t.$API.post('/withdraw/fail', { id: id, remarks: value, type: 'alipay' }).then(function () {
						t.init();
					}).catch(function (msg) {});
				}
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		check_all: function check_all() {
			var t = this;
			t.check_all_status = !t.check_all_status;
			if (!t.check_all_status) {
				t.success_all_id = [];
			} else {
				var success_all_id = [];
				$.each(t.list.data, function ($k, $v) {
					success_all_id.push($v.id);
				});
				t.success_all_id = $.unique(success_all_id);
			}
		},
		success_all: function success_all() {
			var t = this;
			mdui.confirm('确认后将从用户对应钱包扣除相应金额，确认请点击【确定】按钮', '将进行批量打款成功操作', function () {
				var waiting = mdui.alert('请耐心等待批量作业完成，切勿关闭网页等操作', '批量处理中...', function () {}, { history: false, confirmText: '', modal: true, closeOnEsc: false });
				t.$API.post('/withdraw/success', { id: t.success_all_id, type: 'alipay' }).then(function () {
					t.init();
					waiting.close();
				}).catch(function () {
					waiting.close();
				});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		search: function search(page) {
			this.keyword.page = page;
			this.keyword.export = 0;
			this.init();
		},
		exports: function exports() {
			this.keyword.export = 1;
			this.init();
		},
		tab_change: function tab_change(id) {
			this.keyword.page = 1;
			this.keyword.merchant_id = id;
			this.init();
			return false;
		},
		init: function init() {
			var t = this;
			t.$API.get('/withdraw/alipay', t.keyword).then(function (data) {
				t.list = data.list;
				t.merchant = data.merchant;
				t.purse_type = data.purse_type;
				if (t.keyword.export) {
					mdui.alert('可在左侧【导出任务】菜单查看任务状态并下载文件', '已放入导出任务', function () {}, { history: false });
				}
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-62a7d4a8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/withdraw/alipay.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "purse_user_type" }, [
    _c("div", { staticClass: "typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c("p", [
          _vm._v("\n\t\t\t\t用户ID："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.user_id,
                expression: "keyword.user_id"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.user_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "user_id", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n\t\t\t\t银行户名："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.realname,
                expression: "keyword.realname"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.realname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "realname", $event.target.value)
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
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-color-pink",
            on: { click: _vm.exports }
          },
          [
            _c(
              "i",
              { staticClass: "mdui-icon mdui-icon-left material-icons" },
              [_vm._v("file_upload")]
            ),
            _vm._v("导出")
          ]
        )
      ]),
      _vm._v(" "),
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c(
          "a",
          {
            staticClass: "mdui-btn mdui-ripple mdui-color-theme",
            on: { click: _vm.success_all }
          },
          [
            _c(
              "i",
              { staticClass: "mdui-icon mdui-icon-left material-icons" },
              [_vm._v("check")]
            ),
            _vm._v("批量同意")
          ]
        )
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
    _c("div", { staticClass: "mdui-table-fluid table-data-fluid" }, [
      _c(
        "table",
        { staticClass: "mdui-table mdui-table-hoverable table-data" },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [
                _c("label", { staticClass: "mdui-checkbox" }, [
                  _c("input", { attrs: { type: "checkbox" } }),
                  _c("i", {
                    staticClass: "mdui-checkbox-icon",
                    on: { click: _vm.check_all }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("#")]),
              _vm._v(" "),
              _c("th", [_vm._v("ID")]),
              _vm._v(" "),
              _c("th", [_vm._v("用户ID")]),
              _vm._v(" "),
              _c("th", [_vm._v("提现钱包")]),
              _vm._v(" "),
              _c("th", [_vm._v("申请金额(分)")]),
              _vm._v(" "),
              _c("th", [_vm._v("手续费(分)")]),
              _vm._v(" "),
              _c("th", [_vm._v("打款金额(分)")]),
              _vm._v(" "),
              _c("th", [_vm._v("真实姓名")]),
              _vm._v(" "),
              _c("th", [_vm._v("支付宝账号")]),
              _vm._v(" "),
              _c("th", [_vm._v("冻结ID")]),
              _vm._v(" "),
              _c("th", [_vm._v("成功转账ID")]),
              _vm._v(" "),
              _c("th", [_vm._v("申请状态")]),
              _vm._v(" "),
              _c("th", [_vm._v("备注")]),
              _vm._v(" "),
              _c("th", [_vm._v("创建时间")]),
              _vm._v(" "),
              _c("th", [_vm._v("修改时间")]),
              _vm._v(" "),
              _c("th", [_vm._v("操作")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.list.data, function(val, key, index) {
              return _c("tr", [
                _c("td", [
                  _c("label", { staticClass: "mdui-checkbox" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.success_all_id,
                          expression: "success_all_id"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        value: val.id,
                        checked: Array.isArray(_vm.success_all_id)
                          ? _vm._i(_vm.success_all_id, val.id) > -1
                          : _vm.success_all_id
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.success_all_id,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = val.id,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.success_all_id = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.success_all_id = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.success_all_id = $$c
                          }
                        }
                      }
                    }),
                    _c("i", { staticClass: "mdui-checkbox-icon" })
                  ])
                ]),
                _vm._v(" "),
                _c("td", {
                  domProps: { textContent: _vm._s("#" + (key + 1)) }
                }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.id) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.user_id) } }),
                _vm._v(" "),
                _c("td", {
                  domProps: { textContent: _vm._s(_vm.purse_type[val.purse]) }
                }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.amount) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.fee) } }),
                _vm._v(" "),
                _c("td", {
                  domProps: { textContent: _vm._s(val.amount_actual) }
                }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.realname) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.account) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.freeze_id) } }),
                _vm._v(" "),
                _c("td", {
                  domProps: { textContent: _vm._s(val.transfer_id) }
                }),
                _vm._v(" "),
                _c("td", {
                  domProps: { innerHTML: _vm._s(_vm.status[val.status]) }
                }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.remarks) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.created_at) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.updated_at) } }),
                _vm._v(" "),
                _c("td", [
                  val.status == 0
                    ? _c("div", { staticClass: "mdui-btn-group" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "mdui-btn mdui-ripple mdui-color-theme",
                            on: {
                              click: function($event) {
                                _vm.success(val.id)
                              }
                            }
                          },
                          [_vm._v("打款成功")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "mdui-btn mdui-ripple mdui-color-deep-orange",
                            on: {
                              click: function($event) {
                                _vm.fail(val.id)
                              }
                            }
                          },
                          [_vm._v("打款失败")]
                        )
                      ])
                    : _vm._e()
                ])
              ])
            })
          )
        ]
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
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62a7d4a8", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/withdraw/alipay.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/withdraw/alipay.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-62a7d4a8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/withdraw/alipay.vue")
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
Component.options.__file = "resources/assets/js/components/withdraw/alipay.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62a7d4a8", Component.options)
  } else {
    hotAPI.reload("data-v-62a7d4a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2FsaXBheS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2FsaXBheS52dWU/ZmYwZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvd2l0aGRyYXcvYWxpcGF5LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBO0FBQ0EsS0FEQSxrQkFDQTtBQUNBO0FBQ0EsV0FEQTtBQUVBLGVBRkE7QUFHQSxpQkFIQTtBQUlBLFdBSkE7QUFLQSxhQUxBO0FBTUEsMEJBTkE7QUFPQSxxQkFQQTtBQVFBO0FBQ0EsV0FEQTtBQUVBLGFBRkE7QUFHQSxlQUhBO0FBSUEsZ0JBSkE7QUFLQSxZQUxBO0FBTUE7QUFOQSxJQVJBO0FBZ0JBLFlBQ0EsS0FEQSxFQUVBLGdEQUZBLEVBR0EsdURBSEE7QUFoQkE7QUFzQkEsRUF4QkE7O0FBeUJBO0FBQ0EsU0FEQSxtQkFDQSxFQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFFQSxLQUZBLENBRUEsZ0JBRUEsQ0FKQTtBQUtBLElBTkEsRUFNQSxjQU5BLEVBTUEsdURBTkE7QUFPQSxHQVZBO0FBV0EsTUFYQSxnQkFXQSxFQVhBLEVBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFGQSxFQUVBLEtBRkEsQ0FFQSxnQkFFQSxDQUpBO0FBS0E7QUFFQSxJQVRBLEVBU0EsY0FUQSxFQVNBLHVEQVRBO0FBVUEsR0F2QkE7QUF3QkEsV0F4QkEsdUJBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUZBLE1BRUE7QUFDQTtB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Q0FBc0MsRUFBRTtBQUM5RTtBQUNBLDBCQUEwQixZQUFZLHNDQUFzQyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQ0FBZ0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5Q0FBeUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzFXQTtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHVEQUFrRTtBQUNuRztBQUNBLHFCQUFxQixtQkFBTyxDQUFDLHVZQUErVTtBQUM1VztBQUNBLHVCQUF1QixtQkFBTyxDQUFDLDhQQUE0TztBQUMzUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB1cnNlX3VzZXJfdHlwZVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ0eXBvXCI+XG5cdFx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVfbm9ybWFsXCI+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOeUqOaIt0lE77yaPGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwia2V5d29yZC51c2VyX2lkXCIgLz5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTpk7booYzmiLflkI3vvJo8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJrZXl3b3JkLnJlYWxuYW1lXCIgLz5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTml6XmnJ/nrZvpgInvvJo8dnVlLWRhdGVwaWNrZXItbG9jYWwgdi1tb2RlbD1cImtleXdvcmQuZGF0ZVwiIGNsZWFyYWJsZSAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInNlYXJjaCgxKVwiPjxpIGNsYXNzPVwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPuaQnOe0ojwvYT5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXBpbmtcIiBAY2xpY2s9XCJleHBvcnRzXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5maWxlX3VwbG9hZDwvaT7lr7zlh7o8L2E+XG5cdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0XHQ8YmxvY2txdW90ZSBjbGFzcz1cImJsb2NrcXVvdGVfbm9ybWFsXCI+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInN1Y2Nlc3NfYWxsXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvaT7mibnph4/lkIzmhI88L2E+XG5cdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdGFiXCIgbWR1aS10YWI+XG5cdFx0XHQ8YSA6aHJlZj1cIicjdGFiXycra2V5XCIgOmNsYXNzPVwieydtZHVpLWJ0bic6dHJ1ZSwnbWR1aS1yaXBwbGUnOnRydWUsJ21kdWktdGFiLWFjdGl2ZSc6a2V5PT09MH1cIiB2LWZvcj1cIihuYW1lLGlkLGtleSkgb2YgbWVyY2hhbnRcIiB2LXRleHQ9XCJuYW1lXCIgQGNsaWNrPVwidGFiX2NoYW5nZShpZClcIj48L2E+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdGFibGUtZmx1aWQgdGFibGUtZGF0YS1mbHVpZFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzPVwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZSB0YWJsZS1kYXRhXCI+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0aD48bGFiZWwgY2xhc3M9XCJtZHVpLWNoZWNrYm94XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PGkgY2xhc3M9XCJtZHVpLWNoZWNrYm94LWljb25cIiBAY2xpY2s9XCJjaGVja19hbGxcIj48L2k+PC9sYWJlbD48L3RoPlxuXHRcdFx0XHRcdDx0aD4jPC90aD5cblx0XHRcdFx0XHQ8dGg+SUQ8L3RoPlxuXHRcdFx0XHRcdDx0aD7nlKjmiLdJRDwvdGg+XG5cdFx0XHRcdFx0PHRoPuaPkOeOsOmSseWMhTwvdGg+XG5cdFx0XHRcdFx0PHRoPueUs+ivt+mHkeminSjliIYpPC90aD5cblx0XHRcdFx0XHQ8dGg+5omL57ut6LS5KOWIhik8L3RoPlxuXHRcdFx0XHRcdDx0aD7miZPmrL7ph5Hpop0o5YiGKTwvdGg+XG5cdFx0XHRcdFx0PHRoPuecn+WunuWnk+WQjTwvdGg+XG5cdFx0XHRcdFx0PHRoPuaUr+S7mOWunei0puWPtzwvdGg+XG5cdFx0XHRcdFx0PHRoPuWGu+e7k0lEPC90aD5cblx0XHRcdFx0XHQ8dGg+5oiQ5Yqf6L2s6LSmSUQ8L3RoPlxuXHRcdFx0XHRcdDx0aD7nlLPor7fnirbmgIE8L3RoPlxuXHRcdFx0XHRcdDx0aD7lpIfms6g8L3RoPlxuXHRcdFx0XHRcdDx0aD7liJvlu7rml7bpl7Q8L3RoPlxuXHRcdFx0XHRcdDx0aD7kv67mlLnml7bpl7Q8L3RoPlxuXHRcdFx0XHRcdDx0aD7mk43kvZw8L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dHIgdi1mb3I9XCIodmFsLGtleSxpbmRleCkgaW4gbGlzdC5kYXRhXCI+XG5cdFx0XHRcdFx0PHRkPjxsYWJlbCBjbGFzcz1cIm1kdWktY2hlY2tib3hcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwidmFsLmlkXCIgdi1tb2RlbD1cInN1Y2Nlc3NfYWxsX2lkXCIgLz48aSBjbGFzcz1cIm1kdWktY2hlY2tib3gtaWNvblwiPjwvaT48L2xhYmVsPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cIicjJysoa2V5KzEpXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmlkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnVzZXJfaWRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJwdXJzZV90eXBlW3ZhbC5wdXJzZV1cIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuYW1vdW50XCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmZlZVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5hbW91bnRfYWN0dWFsXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnJlYWxuYW1lXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFjY291bnRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuZnJlZXplX2lkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnRyYW5zZmVyX2lkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi1odG1sPVwic3RhdHVzW3ZhbC5zdGF0dXNdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnJlbWFya3NcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuY3JlYXRlZF9hdFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC51cGRhdGVkX2F0XCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1idG4tZ3JvdXBcIiB2LWlmPVwidmFsLnN0YXR1cyA9PSAwXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInN1Y2Nlc3ModmFsLmlkKVwiPuaJk+asvuaIkOWKnzwvYT5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWRlZXAtb3JhbmdlXCIgQGNsaWNrPVwiZmFpbCh2YWwuaWQpXCI+5omT5qy+5aSx6LSlPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdG1lcmNoYW50IDogJycsXG5cdFx0XHRcdHB1cnNlX3R5cGUgOiAnJyxcblx0XHRcdFx0Zm9ybSA6ICcnLFxuXHRcdFx0XHRkaWFsb2cgOiAnJyxcblx0XHRcdFx0Y2hlY2tfYWxsX3N0YXR1cyA6IGZhbHNlLFxuXHRcdFx0XHRzdWNjZXNzX2FsbF9pZCA6IFtdLFxuXHRcdFx0XHRrZXl3b3JkIDoge1xuXHRcdFx0XHRcdHBhZ2UgOiAxLFxuXHRcdFx0XHRcdGV4cG9ydCA6IDAsXG5cdFx0XHRcdFx0dXNlcl9pZCA6ICcnLFxuXHRcdFx0XHRcdHJlYWxuYW1lIDogJycsXG5cdFx0XHRcdFx0ZGF0ZSA6IFtdLFxuXHRcdFx0XHRcdG1lcmNoYW50X2lkIDogMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RhdHVzIDogW1xuXHRcdFx0XHRcdCfnlLPor7fkuK0nLFxuXHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cIm1kdWktdGV4dC1jb2xvci10ZWFsXCI+5o+Q546w5oiQ5YqfPC9zcGFuPicsXG5cdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwibWR1aS10ZXh0LWNvbG9yLWRlZXAtb3JhbmdlXCI+5o+Q546w5aSx6LSlPC9zcGFuPicsXG5cdFx0XHRcdF1cblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzIDoge1xuXHRcdFx0c3VjY2VzcyhpZCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0bWR1aS5jb25maXJtKCfnoa7orqTlkI7lsIbku47nlKjmiLflr7nlupTpkrHljIXmiaPpmaTnm7jlupTph5Hpop3vvIznoa7orqTor7fngrnlh7vjgJDnoa7lrprjgJHmjInpkq4nLCAn5bey5omT5qy+77yfJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR0LiRBUEkucG9zdCgnL3dpdGhkcmF3L3N1Y2Nlc3MnLHtpZDpbaWRdLHR5cGU6J2FsaXBheSd9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR0LmluaXQoKTtcblx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlLGNvbmZpcm1UZXh0Oifnoa7lrponLGNhbmNlbFRleHQ6J+WPlua2iCd9KTtcblx0XHRcdH0sXG5cdFx0XHRmYWlsKGlkKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLnByb21wdCgn5qCH6K6w5Li65aSx6LSl5ZCO77yM5a+55bqU55Sz6K+36YeR6aKd5Lya5Y6f6Lev6L+U6L+Y57uZ55So5oi377yM55+l5oKJ5ZCO6K+35aGr5YaZ44CQ5aSx6LSl5Y6f5Zug44CRJywgJ+Whq+WGmeWksei0peWOn+WboCcsIGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRcdFx0XHRpZih2YWx1ZSl7XG5cdFx0XHRcdFx0XHR0LiRBUEkucG9zdCgnL3dpdGhkcmF3L2ZhaWwnLHtpZDppZCxyZW1hcmtzOnZhbHVlLHR5cGU6J2FsaXBheSd9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdHQuaW5pdCgpO1xuXHRcdFx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24obXNnKXtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0sZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlLGNvbmZpcm1UZXh0Oifnoa7lrponLGNhbmNlbFRleHQ6J+WPlua2iCd9KTtcblx0XHRcdH0sXG5cdFx0XHRjaGVja19hbGwoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LmNoZWNrX2FsbF9zdGF0dXMgPSAhdC5jaGVja19hbGxfc3RhdHVzO1xuXHRcdFx0XHRpZighdC5jaGVja19hbGxfc3RhdHVzKXtcblx0XHRcdFx0XHR0LnN1Y2Nlc3NfYWxsX2lkID0gW107XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGxldCBzdWNjZXNzX2FsbF9pZCA9IFtdO1xuXHRcdFx0XHRcdCQuZWFjaCh0Lmxpc3QuZGF0YSxmdW5jdGlvbigkaywkdil7XG5cdFx0XHRcdFx0XHRzdWNjZXNzX2FsbF9pZC5wdXNoKCR2LmlkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0LnN1Y2Nlc3NfYWxsX2lkID0gJC51bmlxdWUoc3VjY2Vzc19hbGxfaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2Vzc19hbGwoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLmNvbmZpcm0oJ+ehruiupOWQjuWwhuS7jueUqOaIt+WvueW6lOmSseWMheaJo+mZpOebuOW6lOmHkemine+8jOehruiupOivt+eCueWHu+OAkOehruWumuOAkeaMiemSricsICflsIbov5vooYzmibnph4/miZPmrL7miJDlip/mk43kvZwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGxldCB3YWl0aW5nID0gbWR1aS5hbGVydCgn6K+36ICQ5b+D562J5b6F5om56YeP5L2c5Lia5a6M5oiQ77yM5YiH5Yu/5YWz6Zet572R6aG1562J5pON5L2cJywn5om56YeP5aSE55CG5LitLi4uJyxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2UsY29uZmlybVRleHQ6JycsbW9kYWw6dHJ1ZSxjbG9zZU9uRXNjOmZhbHNlfSk7XG5cdFx0XHRcdFx0dC4kQVBJLnBvc3QoJy93aXRoZHJhdy9zdWNjZXNzJyx7aWQ6dC5zdWNjZXNzX2FsbF9pZCx0eXBlOidhbGlwYXknfSkudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dC5pbml0KCk7XG5cdFx0XHRcdFx0XHR3YWl0aW5nLmNsb3NlKCk7XG5cdFx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHdhaXRpbmcuY2xvc2UoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2UsY29uZmlybVRleHQ6J+ehruWumicsY2FuY2VsVGV4dDon5Y+W5raIJ30pO1xuXHRcdFx0fSxcblx0XHRcdHNlYXJjaChwYWdlKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmtleXdvcmQuZXhwb3J0ID0gMDtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXhwb3J0cygpe1xuXHRcdFx0XHR0aGlzLmtleXdvcmQuZXhwb3J0ID0gMTtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0dGFiX2NoYW5nZShpZCl7XG5cdFx0XHRcdHRoaXMua2V5d29yZC5wYWdlID0gMTtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLm1lcmNoYW50X2lkID0gaWQ7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0aW5pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuJEFQSS5nZXQoJy93aXRoZHJhdy9hbGlwYXknLHQua2V5d29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0Lmxpc3QgPSBkYXRhLmxpc3Q7XG5cdFx0XHRcdFx0dC5tZXJjaGFudCA9IGRhdGEubWVyY2hhbnQ7XG5cdFx0XHRcdFx0dC5wdXJzZV90eXBlID0gZGF0YS5wdXJzZV90eXBlO1xuXHRcdFx0XHRcdGlmKHQua2V5d29yZC5leHBvcnQpe1xuXHRcdFx0XHRcdFx0bWR1aS5hbGVydCgn5Y+v5Zyo5bem5L6n44CQ5a+85Ye65Lu75Yqh44CR6I+c5Y2V5p+l55yL5Lu75Yqh54q25oCB5bm25LiL6L295paH5Lu2Jywn5bey5pS+5YWl5a+85Ye65Lu75YqhJyxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2V9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dC4kbmV4dFRpY2soZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCQoJy5tZHVpLXRhYicpLm11dGF0aW9uKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0dC5pbml0KCk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvd2l0aGRyYXcvYWxpcGF5LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdXJzZV91c2VyX3R5cGVcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eXBvXCIgfSwgW1xuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx055So5oi3SUTvvJpcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLnVzZXJfaWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5rZXl3b3JkLnVzZXJfaWQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJ1c2VyX2lkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTpk7booYzmiLflkI3vvJpcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnJlYWxuYW1lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC5yZWFsbmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmtleXdvcmQucmVhbG5hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJyZWFsbmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOaXpeacn+etm+mAie+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwidnVlLWRhdGVwaWNrZXItbG9jYWxcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBjbGVhcmFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmtleXdvcmQuZGF0ZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJkYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC5kYXRlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zZWFyY2goMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJzZWFyY2hcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwi5pCc57SiXCIpXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXBpbmtcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZXhwb3J0cyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCIgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcImZpbGVfdXBsb2FkXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIuWvvOWHulwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VjY2Vzc19hbGwgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJjaGVja1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCLmibnph4/lkIzmhI9cIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFiXCIsIGF0dHJzOiB7IFwibWR1aS10YWJcIjogXCJcIiB9IH0sXG4gICAgICBfdm0uX2woX3ZtLm1lcmNoYW50LCBmdW5jdGlvbihuYW1lLCBpZCwga2V5KSB7XG4gICAgICAgIHJldHVybiBfYyhcImFcIiwge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcIm1kdWktYnRuXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1kdWktcmlwcGxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1kdWktdGFiLWFjdGl2ZVwiOiBrZXkgPT09IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI3RhYl9cIiArIGtleSB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MobmFtZSkgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0udGFiX2NoYW5nZShpZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUtZmx1aWQgdGFibGUtZGF0YS1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZSB0YWJsZS1kYXRhXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hlY2tfYWxsIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiSURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi55So5oi3SURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5o+Q546w6ZKx5YyFXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIueUs+ivt+mHkeminSjliIYpXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaJi+e7rei0uSjliIYpXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaJk+asvumHkeminSjliIYpXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuecn+WunuWnk+WQjVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLmlK/ku5jlrp3otKblj7dcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ya757uTSURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5oiQ5Yqf6L2s6LSmSURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi55Sz6K+354q25oCBXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWkh+azqFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLliJvlu7rml7bpl7RcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5L+u5pS55pe26Ze0XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaTjeS9nFwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QuZGF0YSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3VjY2Vzc19hbGxfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3VjY2Vzc19hbGxfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5zdWNjZXNzX2FsbF9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnN1Y2Nlc3NfYWxsX2lkLCB2YWwuaWQpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uc3VjY2Vzc19hbGxfaWRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnN1Y2Nlc3NfYWxsX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IHZhbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uc3VjY2Vzc19hbGxfaWQgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5zdWNjZXNzX2FsbF9pZCA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3VjY2Vzc19hbGxfaWQgPSAkJGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2hlY2tib3gtaWNvblwiIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwiI1wiICsgKGtleSArIDEpKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaWQpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwudXNlcl9pZCkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucHVyc2VfdHlwZVt2YWwucHVyc2VdKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmZlZSkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50X2FjdHVhbCkgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlYWxuYW1lKSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmFjY291bnQpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuZnJlZXplX2lkKSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC50cmFuc2Zlcl9pZCkgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc3RhdHVzW3ZhbC5zdGF0dXNdKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVtYXJrcykgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5jcmVhdGVkX2F0KSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnVwZGF0ZWRfYXQpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIHZhbC5zdGF0dXMgPT0gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdWNjZXNzKHZhbC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmiZPmrL7miJDlip9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWRlZXAtb3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZhaWwodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaJk+asvuWksei0pVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgdG90YWw6IF92bS5saXN0LnRvdGFsLFxuICAgICAgICAgICAgICBjdXJyZW50OiBfdm0ubGlzdC5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2VudW06IF92bS5saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICBwYWdlOiBfdm0ubGlzdC5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2Vncm91cDogOSxcbiAgICAgICAgICAgICAgc2tpbjogXCIjMjE5NkYzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnNlYXJjaCB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjJhN2Q0YThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTYyYTdkNGE4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2FsaXBheS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNjJhN2Q0YThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvd2l0aGRyYXcvYWxpcGF5LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbGlwYXkudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02MmE3ZDRhOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FsaXBheS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2FsaXBheS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjJhN2Q0YThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02MmE3ZDRhOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2FsaXBheS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2FsaXBheS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sInNvdXJjZVJvb3QiOiIifQ==