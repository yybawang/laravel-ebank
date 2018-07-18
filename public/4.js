webpackJsonp([4],{

/***/ 346:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			purse_type: '',
			form: '',
			dialog: '',
			success_all_id: [],
			keyword: {
				page: 1,
				export: 0,
				user_id: '',
				realname: '',
				date: []
			},
			status: ['申请中', '<span style="color:#16A05D">提现成功</span>', '<span style="color:#DE5145">提现失败</span>']
		};
	},

	methods: {
		success: function success(id) {
			var t = this;
			mdui.confirm('确认后将从用户对应钱包扣除相应金额，确认请点击【确定】按钮', '已打款？', function () {
				post('/withdraw/success', { id: [id], type: '' }, function () {
					t.init();
				});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		fail: function fail(id) {
			var t = this;
			mdui.prompt('标记为失败后，对应申请金额会原路返还给用户，知悉后请填写【失败原因】', '填写失败原因', function (value) {
				if (value) {
					post('/withdraw/fail', { id: id, remarks: value, type: '' }, function () {
						t.init();
					});
				}
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		check_all: function check_all() {
			var t = this;
			if (t.success_all_id.length >= t.list.data.length) {
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
				var waiting = mdui.alert('请耐心等待批量作业完成，切勿关闭网页等操作。', '批量处理中...', function () {}, { history: false, confirmText: '', modal: true, closeOnEsc: false });
				post('/withdraw/success', { id: t.success_all_id, type: '' }, function () {
					t.init();
					waiting.close();
				}, function () {
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
		init: function init() {
			var t = this;
			get('/withdraw/bank', t.keyword, function (data) {
				t.list = data.data;
				t.purse_type = data.purse_type;
				if (t.keyword.export) {
					mdui.alert('可在左侧【导出任务】菜单查看任务状态并下载文件', '已放入导出任务', function () {}, { history: false });
				}
			});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.init();
		var tableFluidLeft = $('.table-data-fluid')[0];
		var table_width = $('.table-data').width(),
		    $scrollBar = $('.scrollbar');
		$('.scrollbar-bar').width(table_width);
		$scrollBar[0].addEventListener('scroll', function () {
			tableFluidLeft.scrollLeft = $scrollBar[0].scrollLeft;
		});
	}
});

/***/ }),

/***/ 347:
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
          }),
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
              _c("th", [_vm._v("到账类型")]),
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
                _c("td", { domProps: { textContent: _vm._s(key + 1) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.id) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.user_id) } }),
                _vm._v(" "),
                _c("td", { domProps: { textContent: _vm._s(val.pay_type) } }),
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
    require("vue-hot-reload-api")      .rerender("data-v-63d081f2", module.exports)
  }
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(346)
/* template */
var __vue_template__ = __webpack_require__(347)
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
Component.options.__file = "resources\\assets\\js\\components\\withdraw\\bank.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63d081f2", Component.options)
  } else {
    hotAPI.reload("data-v-63d081f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2JhbmsudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZT9iYWYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdGQTtBQUNBLEtBREEsa0JBQ0E7QUFDQTtBQUNBLFdBREE7QUFFQSxpQkFGQTtBQUdBLFdBSEE7QUFJQSxhQUpBO0FBS0EscUJBTEE7QUFNQTtBQUNBLFdBREE7QUFFQSxhQUZBO0FBR0EsZUFIQTtBQUlBLGdCQUpBO0FBS0E7QUFMQSxJQU5BO0FBYUEsWUFDQSxLQURBLEVBRUEseUNBRkEsRUFHQSx5Q0FIQTtBQWJBO0FBbUJBLEVBckJBOztBQXNCQTtBQUNBLFNBREEsbUJBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsSUFKQSxFQUlBLGNBSkEsRUFJQSx1REFKQTtBQUtBLEdBUkE7QUFTQSxNQVRBLGdCQVNBLEVBVEEsRUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUZBO0FBR0E7QUFDQSxJQU5BLEVBTUEsY0FOQSxFQU1BLHVEQU5BO0FBT0EsR0FsQkE7QUFtQkEsV0FuQkEsdUJBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxHQTlCQTtBQStCQSxhQS9CQSx5QkErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBLEVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGVBQWU7QUFDZixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsVkE7QUFDQTtBQUNBO0FBQ0EsNENBQXNSO0FBQ3RSO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicHVyc2VfdXNlcl90eXBlXCI+XG5cdFx0PGRpdiBjbGFzcz1cInR5cG9cIj5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx055So5oi3SUTvvJo8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJrZXl3b3JkLnVzZXJfaWRcIiAvPlxuXHRcdFx0XHRcdOmTtuihjOaIt+WQje+8mjxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImtleXdvcmQucmVhbG5hbWVcIiAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOaXpeacn+etm+mAie+8mjx2dWUtZGF0ZXBpY2tlci1sb2NhbCB2LW1vZGVsPVwia2V5d29yZC5kYXRlXCIgY2xlYXJhYmxlIC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwic2VhcmNoKDEpXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+5pCc57SiPC9hPlxuXHRcdFx0XHQ8YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItcGlua1wiIEBjbGljaz1cImV4cG9ydHNcIj48aSBjbGFzcz1cIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiPmZpbGVfdXBsb2FkPC9pPuWvvOWHujwvYT5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHRcdDxibG9ja3F1b3RlIGNsYXNzPVwiYmxvY2txdW90ZV9ub3JtYWxcIj5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwic3VjY2Vzc19hbGxcIj48aSBjbGFzcz1cIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPuaJuemHj+WQjOaEjzwvYT5cblx0XHRcdDwvYmxvY2txdW90ZT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10YWJsZS1mbHVpZCB0YWJsZS1kYXRhLWZsdWlkXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3M9XCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlIHRhYmxlLWRhdGFcIj5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRoPjxsYWJlbCBjbGFzcz1cIm1kdWktY2hlY2tib3hcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48aSBjbGFzcz1cIm1kdWktY2hlY2tib3gtaWNvblwiIEBjbGljaz1cImNoZWNrX2FsbFwiPjwvaT48L2xhYmVsPjwvdGg+XG5cdFx0XHRcdFx0PHRoPiM8L3RoPlxuXHRcdFx0XHRcdDx0aD5JRDwvdGg+XG5cdFx0XHRcdFx0PHRoPueUqOaIt0lEPC90aD5cblx0XHRcdFx0XHQ8dGg+5Yiw6LSm57G75Z6LPC90aD5cblx0XHRcdFx0XHQ8dGg+55Sz6K+36YeR6aKdKOWIhik8L3RoPlxuXHRcdFx0XHRcdDx0aD7miYvnu63otLko5YiGKTwvdGg+XG5cdFx0XHRcdFx0PHRoPuaJk+asvumHkeminSjliIYpPC90aD5cblx0XHRcdFx0XHQ8dGg+6ZO26KGM5oi35ZCNPC90aD5cblx0XHRcdFx0XHQ8dGg+6ZO26KGM5ZCNPC90aD5cblx0XHRcdFx0XHQ8dGg+6ZO26KGM5Y2h5Y+3PC90aD5cblx0XHRcdFx0XHQ8dGg+5Ya757uTSUQ8L3RoPlxuXHRcdFx0XHRcdDx0aD7miJDlip/ovazotKZJRDwvdGg+XG5cdFx0XHRcdFx0PHRoPueUs+ivt+eKtuaAgTwvdGg+XG5cdFx0XHRcdFx0PHRoPuWkh+azqDwvdGg+XG5cdFx0XHRcdFx0PHRoPuWIm+W7uuaXtumXtDwvdGg+XG5cdFx0XHRcdFx0PHRoPuS/ruaUueaXtumXtDwvdGg+XG5cdFx0XHRcdFx0PHRoPuaTjeS9nDwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XG5cdFx0XHRcdDx0ciB2LWZvcj1cIih2YWwsa2V5LGluZGV4KSBpbiBsaXN0LmRhdGFcIj5cblx0XHRcdFx0XHQ8dGQ+PGxhYmVsIGNsYXNzPVwibWR1aS1jaGVja2JveFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJ2YWwuaWRcIiB2LW1vZGVsPVwic3VjY2Vzc19hbGxfaWRcIiAvPjxpIGNsYXNzPVwibWR1aS1jaGVja2JveC1pY29uXCI+PC9pPjwvbGFiZWw+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwia2V5KzFcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuaWRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwudXNlcl9pZFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5wYXlfdHlwZVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5hbW91bnRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuZmVlXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFtb3VudF9hY3R1YWxcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwucmVhbG5hbWVcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuYmFua19uYW1lXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmJhbmtfbm9cIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuZnJlZXplX2lkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnRyYW5zZmVyX2lkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi1odG1sPVwic3RhdHVzW3ZhbC5zdGF0dXNdXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnJlbWFya3NcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwuY3JlYXRlZF9hdFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC51cGRhdGVkX2F0XCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1idG4tZ3JvdXBcIiB2LWlmPVwidmFsLnN0YXR1cyA9PSAwXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInN1Y2Nlc3ModmFsLmlkKVwiPuaJk+asvuaIkOWKnzwvYT5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWRlZXAtb3JhbmdlXCIgQGNsaWNrPVwiZmFpbCh2YWwuaWQpXCI+5omT5qy+5aSx6LSlPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdHB1cnNlX3R5cGUgOiAnJyxcblx0XHRcdFx0Zm9ybSA6ICcnLFxuXHRcdFx0XHRkaWFsb2cgOiAnJyxcblx0XHRcdFx0c3VjY2Vzc19hbGxfaWQgOiBbXSxcblx0XHRcdFx0a2V5d29yZCA6IHtcblx0XHRcdFx0XHRwYWdlIDogMSxcblx0XHRcdFx0XHRleHBvcnQgOiAwLFxuXHRcdFx0XHRcdHVzZXJfaWQgOiAnJyxcblx0XHRcdFx0XHRyZWFsbmFtZSA6ICcnLFxuXHRcdFx0XHRcdGRhdGUgOiBbXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RhdHVzIDogW1xuXHRcdFx0XHRcdCfnlLPor7fkuK0nLFxuXHRcdFx0XHRcdCc8c3BhbiBzdHlsZT1cImNvbG9yOiMxNkEwNURcIj7mj5DnjrDmiJDlip88L3NwYW4+Jyxcblx0XHRcdFx0XHQnPHNwYW4gc3R5bGU9XCJjb2xvcjojREU1MTQ1XCI+5o+Q546w5aSx6LSlPC9zcGFuPicsXG5cdFx0XHRcdF1cblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzIDoge1xuXHRcdFx0c3VjY2VzcyhpZCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0bWR1aS5jb25maXJtKCfnoa7orqTlkI7lsIbku47nlKjmiLflr7nlupTpkrHljIXmiaPpmaTnm7jlupTph5Hpop3vvIznoa7orqTor7fngrnlh7vjgJDnoa7lrprjgJHmjInpkq4nLCAn5bey5omT5qy+77yfJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRwb3N0KCcvd2l0aGRyYXcvc3VjY2Vzcycse2lkOltpZF0sdHlwZTonJ30sZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHQuaW5pdCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LGZ1bmN0aW9uKCl7fSx7aGlzdG9yeTpmYWxzZSxjb25maXJtVGV4dDon56Gu5a6aJyxjYW5jZWxUZXh0Oiflj5bmtognfSk7XG5cdFx0XHR9LFxuXHRcdFx0ZmFpbChpZCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0bWR1aS5wcm9tcHQoJ+agh+iusOS4uuWksei0peWQju+8jOWvueW6lOeUs+ivt+mHkemineS8muWOn+i3r+i/lOi/mOe7meeUqOaIt++8jOefpeaCieWQjuivt+Whq+WGmeOAkOWksei0peWOn+WboOOAkScsICfloavlhpnlpLHotKXljp/lm6AnLCBmdW5jdGlvbih2YWx1ZSl7XG5cdFx0XHRcdFx0aWYodmFsdWUpe1xuXHRcdFx0XHRcdFx0cG9zdCgnL3dpdGhkcmF3L2ZhaWwnLHtpZDppZCxyZW1hcmtzOnZhbHVlLHR5cGU6Jyd9LGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRcdHQuaW5pdCgpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LGZ1bmN0aW9uKCl7fSx7aGlzdG9yeTpmYWxzZSxjb25maXJtVGV4dDon56Gu5a6aJyxjYW5jZWxUZXh0Oiflj5bmtognfSk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tfYWxsKCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0aWYodC5zdWNjZXNzX2FsbF9pZC5sZW5ndGggPj0gdC5saXN0LmRhdGEubGVuZ3RoKXtcblx0XHRcdFx0XHR0LnN1Y2Nlc3NfYWxsX2lkID0gW107XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGxldCBzdWNjZXNzX2FsbF9pZCA9IFtdO1xuXHRcdFx0XHRcdCQuZWFjaCh0Lmxpc3QuZGF0YSxmdW5jdGlvbigkaywkdil7XG5cdFx0XHRcdFx0XHRzdWNjZXNzX2FsbF9pZC5wdXNoKCR2LmlkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0LnN1Y2Nlc3NfYWxsX2lkID0gJC51bmlxdWUoc3VjY2Vzc19hbGxfaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2Vzc19hbGwoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLmNvbmZpcm0oJ+ehruiupOWQjuWwhuS7jueUqOaIt+WvueW6lOmSseWMheaJo+mZpOebuOW6lOmHkemine+8jOehruiupOivt+eCueWHu+OAkOehruWumuOAkeaMiemSricsICflsIbov5vooYzmibnph4/miZPmrL7miJDlip/mk43kvZwnLCBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGxldCB3YWl0aW5nID0gbWR1aS5hbGVydCgn6K+36ICQ5b+D562J5b6F5om56YeP5L2c5Lia5a6M5oiQ77yM5YiH5Yu/5YWz6Zet572R6aG1562J5pON5L2c44CCJywn5om56YeP5aSE55CG5LitLi4uJyxmdW5jdGlvbigpe30se2hpc3Rvcnk6ZmFsc2UsY29uZmlybVRleHQ6JycsbW9kYWw6dHJ1ZSxjbG9zZU9uRXNjOmZhbHNlfSk7XG5cdFx0XHRcdFx0cG9zdCgnL3dpdGhkcmF3L3N1Y2Nlc3MnLHtpZDp0LnN1Y2Nlc3NfYWxsX2lkLHR5cGU6Jyd9LGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR0LmluaXQoKTtcblx0XHRcdFx0XHRcdHdhaXRpbmcuY2xvc2UoKTtcblx0XHRcdFx0XHR9LGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR3YWl0aW5nLmNsb3NlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlLGNvbmZpcm1UZXh0Oifnoa7lrponLGNhbmNlbFRleHQ6J+WPlua2iCd9KTtcblx0XHRcdH0sXG5cdFx0XHRzZWFyY2gocGFnZSl7XG5cdFx0XHRcdHRoaXMua2V5d29yZC5wYWdlID0gcGFnZTtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLmV4cG9ydCA9IDA7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdGV4cG9ydHMoKXtcblx0XHRcdFx0dGhpcy5rZXl3b3JkLmV4cG9ydCA9IDE7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdGluaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRnZXQoJy93aXRoZHJhdy9iYW5rJyx0LmtleXdvcmQsZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC5saXN0ID0gZGF0YS5kYXRhO1xuXHRcdFx0XHRcdHQucHVyc2VfdHlwZSA9IGRhdGEucHVyc2VfdHlwZTtcblx0XHRcdFx0XHRpZih0LmtleXdvcmQuZXhwb3J0KXtcblx0XHRcdFx0XHRcdG1kdWkuYWxlcnQoJ+WPr+WcqOW3puS+p+OAkOWvvOWHuuS7u+WKoeOAkeiPnOWNleafpeeci+S7u+WKoeeKtuaAgeW5tuS4i+i9veaWh+S7ticsJ+W3suaUvuWFpeWvvOWHuuS7u+WKoScsZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdHQuaW5pdCgpO1xuXHRcdFx0bGV0IHRhYmxlRmx1aWRMZWZ0ID0gJCgnLnRhYmxlLWRhdGEtZmx1aWQnKVswXTtcblx0XHRcdGxldCB0YWJsZV93aWR0aCA9ICQoJy50YWJsZS1kYXRhJykud2lkdGgoKSwkc2Nyb2xsQmFyID0gJCgnLnNjcm9sbGJhcicpO1xuXHRcdFx0JCgnLnNjcm9sbGJhci1iYXInKS53aWR0aCh0YWJsZV93aWR0aCk7XG5cdFx0XHQkc2Nyb2xsQmFyWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRhYmxlRmx1aWRMZWZ0LnNjcm9sbExlZnQgPSAkc2Nyb2xsQmFyWzBdLnNjcm9sbExlZnQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwdXJzZV91c2VyX3R5cGVcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eXBvXCIgfSwgW1xuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx055So5oi3SUTvvJpcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkLnVzZXJfaWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5rZXl3b3JkLnVzZXJfaWQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJ1c2VyX2lkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHTpk7booYzmiLflkI3vvJpcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5rZXl3b3JkLnJlYWxuYW1lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC5yZWFsbmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dCBpbnB1dF9ub3JtYWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmtleXdvcmQucmVhbG5hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJyZWFsbmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOaXpeacn+etm+mAie+8mlwiKSxcbiAgICAgICAgICAgIF9jKFwidnVlLWRhdGVwaWNrZXItbG9jYWxcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBjbGVhcmFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmtleXdvcmQuZGF0ZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ua2V5d29yZCwgXCJkYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZC5kYXRlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zZWFyY2goMSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJzZWFyY2hcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwi5pCc57SiXCIpXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXBpbmtcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZXhwb3J0cyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1kdWktaWNvbi1sZWZ0IG1hdGVyaWFsLWljb25zXCIgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcImZpbGVfdXBsb2FkXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIuWvvOWHulwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJibG9ja3F1b3RlXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2txdW90ZV9ub3JtYWxcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VjY2Vzc19hbGwgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJjaGVja1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCLmibnph4/lkIzmhI9cIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGFibGUtZmx1aWQgdGFibGUtZGF0YS1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZSBtZHVpLXRhYmxlLWhvdmVyYWJsZSB0YWJsZS1kYXRhXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hlY2tfYWxsIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiSURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi55So5oi3SURcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Yiw6LSm57G75Z6LXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIueUs+ivt+mHkeminSjliIYpXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaJi+e7rei0uSjliIYpXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaJk+asvumHkeminSjliIYpXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIumTtuihjOaIt+WQjVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLpk7booYzlkI1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6ZO26KGM5Y2h5Y+3XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWGu+e7k0lEXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuaIkOWKn+i9rOi0pklEXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIueUs+ivt+eKtuaAgVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Yib5bu65pe26Ze0XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuS/ruaUueaXtumXtFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5saXN0LmRhdGEsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jaGVja2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN1Y2Nlc3NfYWxsX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN1Y2Nlc3NfYWxsX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uc3VjY2Vzc19hbGxfaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5zdWNjZXNzX2FsbF9pZCwgdmFsLmlkKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnN1Y2Nlc3NfYWxsX2lkXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5zdWNjZXNzX2FsbF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSB2YWwuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnN1Y2Nlc3NfYWxsX2lkID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uc3VjY2Vzc19hbGxfaWQgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN1Y2Nlc3NfYWxsX2lkID0gJCRjXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNoZWNrYm94LWljb25cIiB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGtleSArIDEpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaWQpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwudXNlcl9pZCkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5wYXlfdHlwZSkgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5hbW91bnQpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuZmVlKSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5hbW91bnRfYWN0dWFsKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVhbG5hbWUpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuYmFua19uYW1lKSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmJhbmtfbm8pIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuZnJlZXplX2lkKSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC50cmFuc2Zlcl9pZCkgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc3RhdHVzW3ZhbC5zdGF0dXNdKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVtYXJrcykgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5jcmVhdGVkX2F0KSB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLnVwZGF0ZWRfYXQpIH0gfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIHZhbC5zdGF0dXMgPT0gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdWNjZXNzKHZhbC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmiZPmrL7miJDlip9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLWRlZXAtb3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZhaWwodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaJk+asvuWksei0pVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcGFnZUluZm86IHtcbiAgICAgICAgICAgICAgdG90YWw6IF92bS5saXN0LnRvdGFsLFxuICAgICAgICAgICAgICBjdXJyZW50OiBfdm0ubGlzdC5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2VudW06IF92bS5saXN0LnBlcl9wYWdlLFxuICAgICAgICAgICAgICBwYWdlOiBfdm0ubGlzdC5sYXN0X3BhZ2UsXG4gICAgICAgICAgICAgIHBhZ2Vncm91cDogOSxcbiAgICAgICAgICAgICAgc2tpbjogXCIjMjE5NkYzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnNlYXJjaCB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjNkMDgxZjJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTYzZDA4MWYyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3dpdGhkcmF3L2JhbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAzNDdcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYmFuay52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTYzZDA4MWYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYmFuay52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXHdpdGhkcmF3XFxcXGJhbmsudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTYzZDA4MWYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjNkMDgxZjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy93aXRoZHJhdy9iYW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==