webpackJsonp([24],{

/***/ 389:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			keyword: {
				page: 1,
				name: '',
				date: []
			},
			exports_status: ['执行中', '<span class="mdui-text-color-theme">执行完成</span>', '<span class="mdui-text-color-red">执行失败</span>'],
			interval: ''
		};
	},

	methods: {
		download: function download(id, url) {
			var t = this;
			t.$API.post('/export/increment', { id: id }).then(function () {
				// 下载量计数+1
			}).catch(function (msg) {});
			location.href = url;
			return true;
		},
		del: function del(id) {
			var t = this;
			t.$API.del('/export/index', { id: id }).then(function (data) {
				mdui.alert('服务器文件已删除，外链失效', '执行完成', function () {}, { history: false, confirmText: '完成' });
				t.init();
			}).catch(function (msg) {});
		},
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		init: function init() {
			var t = this;
			t.$API.get('/export/index', t.keyword).then(function (data) {
				t.list = data;
			}).catch(function (msg) {});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.init();
		t.interval = setInterval(function () {
			t.init();
		}, 8000);
	},
	beforeDestroy: function beforeDestroy() {
		var t = this;
		clearInterval(t.interval);
	}
});

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "export" }, [
    _c(
      "div",
      {
        staticClass: "typo",
        on: {
          keydown: function($event) {
            if (
              !("button" in $event) &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            _vm.search(1)
          }
        }
      },
      [
        _c("blockquote", { staticClass: "blockquote_normal" }, [
          _vm._v(
            "\n\t\t\t* 记得及时删除不必要的导出文件，避免服务器磁盘占用。删除后外链下载失效。\n\t\t"
          )
        ]),
        _vm._v(" "),
        _c("blockquote", { staticClass: "blockquote_normal" }, [
          _c("p", [
            _vm._v("\n\t\t\t\t操作名："),
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
              _c("date-picker", {
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
      ]
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
              _c("td", { domProps: { textContent: _vm._s(val.name) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.file_path) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.downloads) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { innerHTML: _vm._s(_vm.exports_status[val.status]) }
              }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.created_at) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.complete_at) } }),
              _vm._v(" "),
              _c("td", [
                _c("div", { staticClass: "mdui-btn-group" }, [
                  val.status == 1
                    ? _c(
                        "a",
                        {
                          staticClass: "mdui-btn mdui-ripple mdui-color-theme",
                          on: {
                            click: function($event) {
                              _vm.download(val.id, val.file_path)
                            }
                          }
                        },
                        [_vm._v("下载")]
                      )
                    : _vm._e(),
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
          }),
          0
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
        _c("th", [_vm._v("任务名")]),
        _vm._v(" "),
        _c("th", [_vm._v("文件路径")]),
        _vm._v(" "),
        _c("th", [_vm._v("下载次数")]),
        _vm._v(" "),
        _c("th", [_vm._v("状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
        _vm._v(" "),
        _c("th", [_vm._v("完成时间")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-1f8304ce", module.exports)
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(389)
/* template */
var __vue_template__ = __webpack_require__(390)
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
Component.options.__file = "resources/assets/js/components/export/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f8304ce", Component.options)
  } else {
    hotAPI.reload("data-v-1f8304ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});