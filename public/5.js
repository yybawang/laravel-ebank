webpackJsonp([5],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/withdraw/bank.vue":
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
				t.$API.post('/withdraw/success', { id: [id], type: '' }).then(function () {
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		fail: function fail(id) {
			var t = this;
			mdui.prompt('标记为失败后，对应申请金额会原路返还给用户，知悉后请填写【失败原因】', '填写失败原因', function (value) {
				if (value) {
					t.$API.post('/withdraw/fail', { id: id, remarks: value, type: '' }).then(function () {
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
				t.$API.post('/withdraw/success', { id: t.success_all_id, type: '' }).then(function () {
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
			t.$API.get('/withdraw/bank', t.keyword).then(function (data) {
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b08cbdcc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/withdraw/bank.vue":
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
              _c("th", [_vm._v("银行户名")]),
              _vm._v(" "),
              _c("th", [_vm._v("银行名")]),
              _vm._v(" "),
              _c("th", [_vm._v("银行卡号")]),
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
                _c("td", { domProps: { textContent: _vm._s(val.bank_name) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.bank_no) } }),
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
    require("vue-hot-reload-api")      .rerender("data-v-b08cbdcc", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/withdraw/bank.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/withdraw/bank.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b08cbdcc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/withdraw/bank.vue")
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
Component.options.__file = "resources/assets/js/components/withdraw/bank.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b08cbdcc", Component.options)
  } else {
    hotAPI.reload("data-v-b08cbdcc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2JhbmsudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZT85NTg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRkE7QUFDQSxLQURBLGtCQUNBO0FBQ0E7QUFDQSxXQURBO0FBRUEsZUFGQTtBQUdBLGlCQUhBO0FBSUEsV0FKQTtBQUtBLGFBTEE7QUFNQSwwQkFOQTtBQU9BLHFCQVBBO0FBUUE7QUFDQSxXQURBO0FBRUEsYUFGQTtBQUdBLGVBSEE7QUFJQSxnQkFKQTtBQUtBLFlBTEE7QUFNQTtBQU5BLElBUkE7QUFnQkEsWUFDQSxLQURBLEVBRUEsZ0RBRkEsRUFHQSx1REFIQTtBQWhCQTtBQXNCQSxFQXhCQTs7QUF5QkE7QUFDQSxTQURBLG1CQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLEtBRkEsQ0FFQSxnQkFFQSxDQUpBO0FBS0EsSUFOQSxFQU1BLGNBTkEsRUFNQSx1REFOQTtBQU9BLEdBVkE7QUFXQSxNQVhBLGdCQVdBLEVBWEEsRUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUZBLEVBRUEsS0FGQSxDQUVBLGdCQUVBLENBSkE7QUFLQTtBQUNBLElBUkEsRUFRQSxjQVJBLEVBUUEsdURBUkE7QUFTQSxHQXRCQTtBQXVCQSxXQXZCQSx1QkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBRkEsTUFFQTtBQUNBO0FBQ0E7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YXNzPVwicHVyc2VfdXNlcl90eXBlXCI+XG5cdFx0PGRpdiBjbGFzcz1cInR5cG9cIj5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx055So5oi3SUTvvJo8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJrZXl3b3JkLnVzZXJfaWRcIiAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOmTtuihjOaIt+WQje+8mjxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImtleXdvcmQucmVhbG5hbWVcIiAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOaXpeacn+etm+mAie+8mjx2dWUtZGF0ZXBpY2tlci1sb2NhbCB2LW1vZGVsPVwia2V5d29yZC5kYXRlXCIgY2xlYXJhYmxlIC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwic2VhcmNoKDEpXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+5pCc57SiPC9hPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItcGlua1wiIEBjbGljaz1cImV4cG9ydHNcIj48aSBjbGFzcz1cIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiPmZpbGVfdXBsb2FkPC9pPuWvvOWHujwvYT5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwic3VjY2Vzc19hbGxcIj48aSBjbGFzcz1cIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPuaJuemHj+WQjOaEjzwvYT5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJcIiBtZHVpLXRhYj5cblx0XHRcdDxhIDpocmVmPVwiJyN0YWJfJytrZXlcIiA6Y2xhc3M9XCJ7J21kdWktYnRuJzp0cnVlLCdtZHVpLXJpcHBsZSc6dHJ1ZSwnbWR1aS10YWItYWN0aXZlJzprZXk9PT0wfVwiIHYtZm9yPVwiKG5hbWUsaWQsa2V5KSBvZiBtZXJjaGFudFwiIHYtdGV4dD1cIm5hbWVcIiBAY2xpY2s9XCJ0YWJfY2hhbmdlKGlkKVwiPjwvYT5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJsZS1mbHVpZCB0YWJsZS1kYXRhLWZsdWlkXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlIHRhYmxlLWRhdGFcIj5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRoPjxsYWJlbCBjbGFzcz1cIm1kdWktY2hlY2tib3hcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aSBjbGFzcz1cIm1kdWktY2hlY2tib3gtaWNvblwiIEBjbGljaz1cImNoZWNrX2FsbFwiPjwvaT48L2xhYmVsPjwvdGg+XG5cdFx0XHRcdFx0PHRoPiM8L3RoPlxuXHRcdFx0XHRcdDx0aD5JRDwvdGg+XG5cdFx0XHRcdFx0PHRoPueUqOaIt0lEPC90aD5cblx0XHRcdFx0XHQ8dGg+5o+Q546w6ZKx5YyFPC90aD5cblx0XHRcdFx0XHQ8dGg+55Sz6K+36YeR6aKdKOWIhik8L3RoPlxuXHRcdFx0XHRcdDx0aD7miYvnu63otLko5YiGKTwvdGg+XG5cdFx0XHRcdFx0PHRoPuaJk+asvumHkeminSjliIYpPC90aD5cblx0XHRcdFx0XHQ8dGg+6ZO26KGM5oi35ZCNPC90aD5cblx0XHRcdFx0XHQ8dGg+6ZO26KGM5ZCNPC90aD5cblx0XHRcdFx0XHQ8dGg+6ZO26KGM5Y2h5Y+3PC90aD5cblx0XHRcdFx0XHQ8dGg+5Ya757uTSUQ8L3RoPlxuXHRcdFx0XHRcdDx0aD7miJDlip/ovazotKZJRDwvdGg+XG5cdFx0XHRcdFx0PHRoPueUs+ivt+eKtuaAgTwvdGg+XG5cdFx0XHRcdFx0PHRoPuWkh+azqDwvdGg+XG5cdFx0XHRcdFx0PHRoPuWIm+W7uuaXtumXtDwvdGg+XG5cdFx0XHRcdFx0PHRoPuS/ruaUueaXtumXtDwvdGg+XG5cdFx0XHRcdFx0PHRoPuaTjeS9nDwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XG5cdFx0XHRcdDx0ciB2LWZvcj1cIih2YWwsa2V5LGluZGV4KSBpbiBsaXN0LmRhdGFcIj5cblx0XHRcdFx0XHQ8dGQ+PGxhYmVsIGNsYXNzPVwibWR1aS1jaGVja2JveFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJ2YWwuaWRcIiB2LW1vZGVsPVwic3VjY2Vzc19hbGxfaWRcIiAvPjxpIGNsYXNzPVwibWR1aS1jaGVja2JveC1pY29uXCI+PC9pPjwvbGFiZWw+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwiJyMnKyhrZXkrMSlcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuaWRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwudXNlcl9pZFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInB1cnNlX3R5cGVbdmFsLnB1cnNlXVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5hbW91bnRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuZmVlXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFtb3VudF9hY3R1YWxcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVhbG5hbWVcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuYmFua19uYW1lXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmJhbmtfbm9cIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuZnJlZXplX2lkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnRyYW5zZmVyX2lkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi1odG1sPVwic3RhdHVzW3ZhbC5zdGF0dXNdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnJlbWFya3NcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuY3JlYXRlZF9hdFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC51cGRhdGVkX2F0XCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1idG4tZ3JvdXBcIiB2LWlmPVwidmFsLnN0YXR1cyA9PSAwXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInN1Y2Nlc3ModmFsLmlkKVwiPuaJk+asvuaIkOWKnzwvYT5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWRlZXAtb3JhbmdlXCIgQGNsaWNrPVwiZmFpbCh2YWwuaWQpXCI+5omT5qy+5aSx6LSlPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdG1lcmNoYW50IDogJycsXG5cdFx0XHRcdHB1cnNlX3R5cGUgOiAnJyxcblx0XHRcdFx0Zm9ybSA6ICcnLFxuXHRcdFx0XHRkaWFsb2cgOiAnJyxcblx0XHRcdFx0Y2hlY2tfYWxsX3N0YXR1cyA6IGZhbHNlLFxuXHRcdFx0XHRzdWNjZXNzX2FsbF9pZCA6IFtdLFxuXHRcdFx0XHRrZXl3b3JkIDoge1xuXHRcdFx0XHRcdHBhZ2UgOiAxLFxuXHRcdFx0XHRcdGV4cG9ydCA6IDAsXG5cdFx0XHRcdFx0dXNlcl9pZCA6ICcnLFxuXHRcdFx0XHRcdHJlYWxuYW1lIDogJycsXG5cdFx0XHRcdFx0ZGF0ZSA6IFtdLFxuXHRcdFx0XHRcdG1lcmNoYW50X2lkIDogMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RhdHVzIDogW1xuXHRcdFx0XHRcdCfnlLPor7fkuK0nLFxuXHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cIm1kdWktdGV4dC1jb2xvci10ZWFsXCI+5o+Q546w5oiQ5YqfPC9zcGFuPicsXG5cdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwibWR1aS10ZXh0LWNvbG9yLWRlZXAtb3JhbmdlXCI+5o+Q546w5aSx6LSlPC9zcGFuPicsXG5cdFx0XHRcdF1cblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzIDoge1xuXHRcdFx0c3VjY2VzcyhpZCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0bWR1aS5jb25maXJtKCfnoa7orqTlkI7lsIbku47nlKjmiLflr7nlupTpkrHljIXmiaPpmaTnm7jlupTph5Hpop3vvIznoa7orqTor7fngrnlh7vjgJDnoa7lrprjgJHmjInpkq4nLCAn5bey5omT5qy+77yfJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR0LiRBUEkucG9zdCgnL3dpdGhkcmF3L3N1Y2Nlc3MnLHtpZDpbaWRdLHR5cGU6Jyd9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR0LmluaXQoKTtcblx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlLGNvbmZpcm1UZXh0Oifnoa7lrponLGNhbmNlbFRleHQ6J+WPlua2iCd9KTtcblx0XHRcdH0sXG5cdFx0XHRmYWlsKGlkKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLnByb21wdCgn5qCH6K6w5Li65aSx6LSl5ZCO77yM5a+55bqU55Sz6K+36YeR6aKd5Lya5Y6f6Lev6L+U6L+Y57uZ55So5oi377yM55+l5oKJ5ZCO6K+35aGr5YaZ44CQ5aSx6LSl5Y6f5Zug44CRJywgJ+Whq+WGmeWksei0peWOn+WboCcsIGZ1bmN0aW9uKHZhbHVlKXtcblx0XHRcdFx0XHRpZih2YWx1ZSl7XG5cdFx0XHRcdFx0XHR0LiRBUEkucG9zdCgnL3dpdGhkcmF3L2ZhaWwnLHtpZDppZCxyZW1hcmtzOnZhbHVlLHR5cGU6Jyd9KS50aGVuKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdHQuaW5pdCgpO1xuXHRcdFx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24obXNnKXtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlLGNvbmZpcm1UZXh0Oifnoa7lrponLGNhbmNlbFRleHQ6J+WPlua2iCd9KTtcblx0XHRcdH0sXG5cdFx0XHRjaGVja19hbGwoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0LmNoZWNrX2FsbF9zdGF0dXMgPSAhdC5jaGVja19hbGxfc3RhdHVzO1xuXHRcdFx0XHRpZighdC5jaGVja19hbGxfc3RhdHVzKXtcblx0XHRcdFx0XHR0LnN1Y2Nlc3NfYWxsX2lkID0gW107XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGxldCBzdWNjZXNzX2FsbF9pZCA9IFtdO1xuXHRcdFx0XHRcdCQuZWFjaCh0Lmxpc3QuZGF0YSxmdW5jdGlvbigkaywkdil7XG5cdFx0XHRcdFx0XHRzdWNjZXNzX2FsbF9pZC5wdXNoKCR2LmlkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0LnN1Y2Nlc3NfYWxsX2lkID0gJC51bmlxdWUoc3VjY2Vzc19hbGxfaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2Vzc19hbGwoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLmNvbmZpcm0oJ+ehruiupOWQjuWwhuS7jueUqOaIt+WvueW6lOmSseWMheaJo+mZpOebuOW6lOmHkemine+8jOehruiupOivt+eCueWHu+OAkOehruWumuOAkeaMiemSricsICflsIbov5vooYzmibnph4/miZPmrL7miJDlip/mk43kvZwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGxldCB3YWl0aW5nID0gbWR1aS5hbGVydCgn6K+36ICQ5b+D562J5b6F5om56YeP5L2c5Lia5a6M5oiQ77yM5YiH5Yu/5YWz6Zet572R6aG1562J5pON5L2cJywn5om56YeP5aSE55CG5LitLi4uJyxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2UsY29uZmlybVRleHQ6JycsbW9kYWw6dHJ1ZSxjbG9zZU9uRXNjOmZhbHNlfSk7XG5cdFx0XHRcdFx0dC4kQVBJLnBvc3QoJy93aXRoZHJhdy9zdWNjZXNzJyx7aWQ6dC5zdWNjZXNzX2FsbF9pZCx0eXBlOicnfSkudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dC5pbml0KCk7XG5cdFx0XHRcdFx0XHR3YWl0aW5nLmNsb3NlKCk7XG5cdFx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHdhaXRpbmcuY2xvc2UoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2UsY29uZmlybVRleHQ6J+ehruWumicsY2FuY2VsVGV4dDon5Y+W5raIJ30pO1xuXHRcdFx0fSxcblx0XHRcdHNlYXJjaChwYWdlKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLnBhZ2UgPSBwYWdlO1xuXHRcdFx0XHR0aGlzLmtleXdvcmQuZXhwb3J0ID0gMDtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXhwb3J0cygpe1xuXHRcdFx0XHR0aGlzLmtleXdvcmQuZXhwb3J0ID0gMTtcblx0XHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0XHR9LFxuXHRcdFx0dGFiX2NoYW5nZShpZCl7XG5cdFx0XHRcdHRoaXMua2V5d29yZC5wYWdlID0gMTtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLm1lcmNoYW50X2lkID0gaWQ7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0aW5pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuJEFQSS5nZXQoJy93aXRoZHJhdy9iYW5rJyx0LmtleXdvcmQpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5saXN0ID0gZGF0YS5saXN0O1xuXHRcdFx0XHRcdHQubWVyY2hhbnQgPSBkYXRhLm1lcmNoYW50O1xuXHRcdFx0XHRcdHQucHVyc2VfdHlwZSA9IGRhdGEucHVyc2VfdHlwZTtcblx0XHRcdFx0XHRpZih0LmtleXdvcmQuZXhwb3J0KXtcblx0XHRcdFx0XHRcdG1kdWkuYWxlcnQoJ+WPr+WcqOW3puS+p+OAkOWvvOWHuuS7u+WKoeOAkeiPnOWNleafpeeci+S7u+WKoeeKtuaAgeW5tuS4i+i9veaWh+S7ticsJ+W3suaUvuWFpeWvvOWHuuS7u+WKoScsZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHQuJG5leHRUaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHQkKCcubWR1aS10YWInKS5tdXRhdGlvbigpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdHQuaW5pdCgpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2JhbmsudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1cnNlX3VzZXJfdHlwZVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInR5cG9cIiB9LCBbXG4gICAgICBfYyhcImJsb2NrcXVvdGVcIiwgeyBzdGF0aWNDbGFzczogXCJibG9ja3F1b3RlX25vcm1hbFwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTnlKjmiLdJRO+8mlwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmtleXdvcmQudXNlcl9pZCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQudXNlcl9pZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmtleXdvcmQudXNlcl9pZCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcInVzZXJfaWRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOmTtuihjOaIt+WQje+8mlwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmtleXdvcmQucmVhbG5hbWUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLnJlYWxuYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ua2V5d29yZC5yZWFsbmFtZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcInJlYWxuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx05pel5pyf562b6YCJ77yaXCIpLFxuICAgICAgICAgICAgX2MoXCJ2dWUtZGF0ZXBpY2tlci1sb2NhbFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGNsZWFyYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5kYXRlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5rZXl3b3JkLCBcImRhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLmRhdGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCgxKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCIgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcInNlYXJjaFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCLmkJzntKJcIilcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItcGlua1wiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5leHBvcnRzIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIiB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiZmlsZV91cGxvYWRcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwi5a+85Ye6XCIpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJsb2NrcXVvdGVcIiwgeyBzdGF0aWNDbGFzczogXCJibG9ja3F1b3RlX25vcm1hbFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWNjZXNzX2FsbCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCIgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcImNoZWNrXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIuaJuemHj+WQjOaEj1wiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJcIiwgYXR0cnM6IHsgXCJtZHVpLXRhYlwiOiBcIlwiIH0gfSxcbiAgICAgIF92bS5fbChfdm0ubWVyY2hhbnQsIGZ1bmN0aW9uKG5hbWUsIGlkLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiYVwiLCB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwibWR1aS1idG5cIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWR1aS1yaXBwbGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWR1aS10YWItYWN0aXZlXCI6IGtleSA9PT0gMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjdGFiX1wiICsga2V5IH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhuYW1lKSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS50YWJfY2hhbmdlKGlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZS1mbHVpZCB0YWJsZS1kYXRhLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwidGFibGVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlIHRhYmxlLWRhdGFcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2hlY2tib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGVja19hbGwgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiI1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJJRFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLnlKjmiLdJRFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLmj5DnjrDpkrHljIVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi55Sz6K+36YeR6aKdKOWIhilcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5omL57ut6LS5KOWIhilcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5omT5qy+6YeR6aKdKOWIhilcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6ZO26KGM5oi35ZCNXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIumTtuihjOWQjVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLpk7booYzljaHlj7dcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Ya757uTSURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5oiQ5Yqf6L2s6LSmSURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi55Sz6K+354q25oCBXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWkh+azqFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLliJvlu7rml7bpl7RcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5L+u5pS55pe26Ze0XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaTjeS9nFwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QuZGF0YSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3VjY2Vzc19hbGxfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3VjY2Vzc19hbGxfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5zdWNjZXNzX2FsbF9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnN1Y2Nlc3NfYWxsX2lkLCB2YWwuaWQpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uc3VjY2Vzc19hbGxfaWRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnN1Y2Nlc3NfYWxsX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IHZhbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uc3VjY2Vzc19hbGxfaWQgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5zdWNjZXNzX2FsbF9pZCA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3VjY2Vzc19hbGxfaWQgPSAkJGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2hlY2tib3gtaWNvblwiIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwiI1wiICsgKGtleSArIDEpKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaWQpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwudXNlcl9pZCkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucHVyc2VfdHlwZVt2YWwucHVyc2VdKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50KSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmZlZSkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYW1vdW50X2FjdHVhbCkgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlYWxuYW1lKSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmJhbmtfbmFtZSkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5iYW5rX25vKSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmZyZWV6ZV9pZCkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwudHJhbnNmZXJfaWQpIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN0YXR1c1t2YWwuc3RhdHVzXSkgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnJlbWFya3MpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuY3JlYXRlZF9hdCkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC51cGRhdGVkX2F0KSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICB2YWwuc3RhdHVzID09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3VjY2Vzcyh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5omT5qy+5oiQ5YqfXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci1kZWVwLW9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mYWlsKHZhbC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmiZPmrL7lpLHotKVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbG9yLXdoaXRlIGZvb3RlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICAgIHRvdGFsOiBfdm0ubGlzdC50b3RhbCxcbiAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmxpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlbnVtOiBfdm0ubGlzdC5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZTogX3ZtLmxpc3QubGFzdF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlZ3JvdXA6IDksXG4gICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5zZWFyY2ggfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWIwOGNiZGNjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1iMDhjYmRjY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi1iMDhjYmRjY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9iYW5rLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjA4Y2JkY2NcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9iYW5rLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvd2l0aGRyYXcvYmFuay52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjA4Y2JkY2NcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iMDhjYmRjY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2JhbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9