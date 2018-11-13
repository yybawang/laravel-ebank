webpackJsonp([18],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/purse/freeze.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			list: [],
			purse_type: '',
			keyword: {
				page: 1,
				id: '',
				purse_id: ''
			},
			status: ['无效状态0', '冻结中', '已解冻']
		};
	},

	methods: {
		search: function search(page) {
			this.keyword.page = page;
			this.init();
		},
		unfreeze: function unfreeze(id) {
			var t = this;
			mdui.confirm('解冻此记录后可能造成业务匹配问题，点击【确定】继续', '确认?', function () {
				t.$API.post('/purse/unfreeze', { id: id }).then(function (data) {
					mdui.alert('已成功解冻并返还金额', function () {}, { history: false });
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
		},
		init: function init() {
			var t = this;
			t.$API.get('/purse/freeze', t.keyword).then(function (data) {
				t.list = data.list;
				t.purse_type = data.purse_type;
			}).catch(function (msg) {});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.init();
	}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e484a9e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/purse/freeze.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "purse_freeze" }, [
    _c("div", { staticClass: "mdui-typo" }, [
      _c("blockquote", { staticClass: "blockquote_normal" }, [
        _c("p", [
          _vm._v("\n\t\t\t\t冻结ID："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.id,
                expression: "keyword.id"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "id", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n\t\t\t\t钱包ID："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword.purse_id,
                expression: "keyword.purse_id"
              }
            ],
            staticClass: "mdui-textfield-input input_normal",
            attrs: { type: "text" },
            domProps: { value: _vm.keyword.purse_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.keyword, "purse_id", $event.target.value)
              }
            }
          })
        ]),
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
              _c("td", { domProps: { textContent: _vm._s(val.purse_id) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(val.amount) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(_vm.status[val.status]) }
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
                  val.status == 1
                    ? _c(
                        "a",
                        {
                          staticClass: "mdui-btn mdui-ripple mdui-color-theme",
                          on: {
                            click: function($event) {
                              _vm.unfreeze(val.id)
                            }
                          }
                        },
                        [_vm._v("解冻")]
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
        _c("th", [_vm._v("钱包ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("冻结余额(分)")]),
        _vm._v(" "),
        _c("th", [_vm._v("状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("备注")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
        _vm._v(" "),
        _c("th", [_vm._v("上次修改时间")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-1e484a9e", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/purse/freeze.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/purse/freeze.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e484a9e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/purse/freeze.vue")
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
Component.options.__file = "resources/assets/js/components/purse/freeze.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e484a9e", Component.options)
  } else {
    hotAPI.reload("data-v-1e484a9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL2ZyZWV6ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL2ZyZWV6ZS52dWU/YTg4ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHVyc2UvZnJlZXplLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQTtBQUNBLEtBREEsa0JBQ0E7QUFDQTtBQUNBLFdBREE7QUFFQSxpQkFGQTtBQUdBO0FBQ0EsV0FEQTtBQUVBLFVBRkE7QUFHQTtBQUhBLElBSEE7QUFRQSxZQUNBLE9BREEsRUFFQSxLQUZBLEVBR0EsS0FIQTtBQVJBO0FBY0EsRUFoQkE7O0FBaUJBO0FBQ0EsUUFEQSxrQkFDQSxJQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FKQTtBQUtBLFVBTEEsb0JBS0EsRUFMQSxFQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEEsRUFHQSxLQUhBLENBR0EsZ0JBRUEsQ0FMQTtBQU1BLElBUEEsRUFPQSxjQVBBLEVBT0EsdURBUEE7QUFTQSxHQWhCQTtBQWlCQSxNQWpCQSxrQkFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBSEEsRUFHQSxLQUhBLENBR0EsZ0JBRUEsQ0FMQTtBQU1BO0FBekJBLEVBakJBO0FBNENBLFFBNUNBLHFCQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQSxHOzs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRCxlQUFlLDJCQUEyQjtBQUMxQyx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkMsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseURBQXlEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0NBQWtDO0FBQ2pELG1CQUFtQixpREFBaUQ7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVksdUNBQXVDLEVBQUU7QUFDN0U7QUFDQSx3QkFBd0IsWUFBWSw4QkFBOEIsRUFBRTtBQUNwRTtBQUNBLHdCQUF3QixZQUFZLG9DQUFvQyxFQUFFO0FBQzFFO0FBQ0Esd0JBQXdCLFlBQVksa0NBQWtDLEVBQUU7QUFDeEU7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixlQUFlO0FBQ2Y7QUFDQSx3QkFBd0IsWUFBWSxtQ0FBbUMsRUFBRTtBQUN6RTtBQUNBLHdCQUF3QixZQUFZLHNDQUFzQyxFQUFFO0FBQzVFO0FBQ0Esd0JBQXdCLFlBQVksc0NBQXNDLEVBQUU7QUFDNUU7QUFDQTtBQUNBLDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUNBQXlDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixJQUFJLEtBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM1TEE7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxvWUFBK1U7QUFDNVc7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQywyUEFBNE87QUFDM1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicHVyc2VfZnJlZXplXCI+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdHlwb1wiPlxuXHRcdFx0PGJsb2NrcXVvdGUgY2xhc3M9XCJibG9ja3F1b3RlX25vcm1hbFwiPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHTlhrvnu5NJRO+8mjxpbnB1dCBjbGFzcz1cIm1kdWktdGV4dGZpZWxkLWlucHV0IGlucHV0X25vcm1hbFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImtleXdvcmQuaWRcIiAvPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdOmSseWMhUlE77yaPGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwia2V5d29yZC5wdXJzZV9pZFwiIC8+XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLWNvbG9yLXRoZW1lXCIgQGNsaWNrPVwic2VhcmNoKDEpXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWR1aS1pY29uLWxlZnQgbWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+5pCc57SiPC9hPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Jsb2NrcXVvdGU+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktdGFibGUtZmx1aWRcIj5cblx0XHRcdDx0YWJsZSBjbGFzcz1cIm1kdWktdGFibGUgbWR1aS10YWJsZS1ob3ZlcmFibGVcIj5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRoPiM8L3RoPlxuXHRcdFx0XHRcdDx0aD5JRDwvdGg+XG5cdFx0XHRcdFx0PHRoPumSseWMhUlEPC90aD5cblx0XHRcdFx0XHQ8dGg+5Ya757uT5L2Z6aKdKOWIhik8L3RoPlxuXHRcdFx0XHRcdDx0aD7nirbmgIE8L3RoPlxuXHRcdFx0XHRcdDx0aD7lpIfms6g8L3RoPlxuXHRcdFx0XHRcdDx0aD7liJvlu7rml7bpl7Q8L3RoPlxuXHRcdFx0XHRcdDx0aD7kuIrmrKHkv67mlLnml7bpl7Q8L3RoPlxuXHRcdFx0XHRcdDx0aD7mk43kvZw8L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dHIgdi1mb3I9XCIodmFsLGtleSxpbmRleCkgb2YgbGlzdC5kYXRhXCI+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cIicjJysoa2V5KzEpXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmlkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLnB1cnNlX2lkXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmFtb3VudFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInN0YXR1c1t2YWwuc3RhdHVzXVwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkIHYtdGV4dD1cInZhbC5yZW1hcmtzXCI+PC90ZD5cblx0XHRcdFx0XHQ8dGQgdi10ZXh0PVwidmFsLmNyZWF0ZWRfYXRcIj48L3RkPlxuXHRcdFx0XHRcdDx0ZCB2LXRleHQ9XCJ2YWwudXBkYXRlZF9hdFwiPjwvdGQ+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktYnRuLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIHYtaWY9XCJ2YWwuc3RhdHVzID09IDFcIiBAY2xpY2s9XCJ1bmZyZWV6ZSh2YWwuaWQpXCI+6Kej5Ya7PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGRpdiBjbGFzcz1cIm1kdWktY29sb3Itd2hpdGUgZm9vdGVyXCI+XG5cdFx0XHQ8cGFnaW5hdGlvblxuXHRcdFx0XHRcdDpwYWdlSW5mbz1cIntcblx0XHRcdFx0XHRcdHRvdGFsOmxpc3QudG90YWwsXG5cdFx0XHRcdFx0XHRjdXJyZW50Omxpc3QuY3VycmVudF9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZW51bTpsaXN0LnBlcl9wYWdlLFxuXHRcdFx0XHRcdFx0cGFnZTpsaXN0Lmxhc3RfcGFnZSxcblx0XHRcdFx0XHRcdHBhZ2Vncm91cDo5LFxuXHRcdFx0XHRcdFx0c2tpbjonIzIxOTZGMydcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRAY2hhbmdlPVwic2VhcmNoXCJcblx0XHRcdD48L3BhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsaXN0IDogW10sXG5cdFx0XHRcdHB1cnNlX3R5cGUgOiAnJyxcblx0XHRcdFx0a2V5d29yZCA6IHtcblx0XHRcdFx0XHRwYWdlIDogMSxcblx0XHRcdFx0XHRpZCA6ICcnLFxuXHRcdFx0XHRcdHB1cnNlX2lkIDogJycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0YXR1cyA6IFtcblx0XHRcdFx0XHQn5peg5pWI54q25oCBMCcsXG5cdFx0XHRcdFx0J+WGu+e7k+S4rScsXG5cdFx0XHRcdFx0J+W3suino+WGuycsXG5cdFx0XHRcdF1cblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzIDoge1xuXHRcdFx0c2VhcmNoKHBhZ2Upe1xuXHRcdFx0XHR0aGlzLmtleXdvcmQucGFnZSA9IHBhZ2U7XG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdFx0fSxcblx0XHRcdHVuZnJlZXplKGlkKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRtZHVpLmNvbmZpcm0oJ+ino+WGu+atpOiusOW9leWQjuWPr+iDvemAoOaIkOS4muWKoeWMuemFjemXrumimO+8jOeCueWHu+OAkOehruWumuOAkee7p+e7rScsJ+ehruiupD8nLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dC4kQVBJLnBvc3QoJy9wdXJzZS91bmZyZWV6ZScse2lkOmlkfSkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHRcdG1kdWkuYWxlcnQoJ+W3suaIkOWKn+ino+WGu+W5tui/lOi/mOmHkeminScsZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlfSk7XG5cdFx0XHRcdFx0XHR0LmluaXQoKTtcblx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlLGNvbmZpcm1UZXh0Oifnoa7lrponLGNhbmNlbFRleHQ6J+WPlua2iCd9KTtcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0aW5pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuJEFQSS5nZXQoJy9wdXJzZS9mcmVlemUnLHQua2V5d29yZCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0Lmxpc3QgPSBkYXRhLmxpc3Q7XG5cdFx0XHRcdFx0dC5wdXJzZV90eXBlID0gZGF0YS5wdXJzZV90eXBlO1xuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbihtc2cpe1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdHQuaW5pdCgpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wdXJzZS9mcmVlemUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB1cnNlX2ZyZWV6ZVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdHlwb1wiIH0sIFtcbiAgICAgIF9jKFwiYmxvY2txdW90ZVwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrcXVvdGVfbm9ybWFsXCIgfSwgW1xuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOWGu+e7k0lE77yaXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5pZCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQuaWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5rZXl3b3JkLmlkIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwiaWRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdOmSseWMhUlE77yaXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ua2V5d29yZC5wdXJzZV9pZCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImtleXdvcmQucHVyc2VfaWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXQgaW5wdXRfbm9ybWFsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5rZXl3b3JkLnB1cnNlX2lkIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmtleXdvcmQsIFwicHVyc2VfaWRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtZHVpLWljb24tbGVmdCBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcInNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5pCc57SiXCIpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10YWJsZS1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRhYmxlIG1kdWktdGFibGUtaG92ZXJhYmxlXCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QuZGF0YSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKFwiI1wiICsgKGtleSArIDEpKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwuaWQpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC5wdXJzZV9pZCkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmFtb3VudCkgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uc3RhdHVzW3ZhbC5zdGF0dXNdKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyh2YWwucmVtYXJrcykgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3ModmFsLmNyZWF0ZWRfYXQpIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHZhbC51cGRhdGVkX2F0KSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgdmFsLnN0YXR1cyA9PSAxXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51bmZyZWV6ZSh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuino+WGu1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbG9yLXdoaXRlIGZvb3RlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHBhZ2VJbmZvOiB7XG4gICAgICAgICAgICAgIHRvdGFsOiBfdm0ubGlzdC50b3RhbCxcbiAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmxpc3QuY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlbnVtOiBfdm0ubGlzdC5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgcGFnZTogX3ZtLmxpc3QubGFzdF9wYWdlLFxuICAgICAgICAgICAgICBwYWdlZ3JvdXA6IDksXG4gICAgICAgICAgICAgIHNraW46IFwiIzIxOTZGM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5zZWFyY2ggfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCIjXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIklEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIumSseWMhUlEXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuWGu+e7k+S9meminSjliIYpXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIueKtuaAgVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Yib5bu65pe26Ze0XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuS4iuasoeS/ruaUueaXtumXtFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xZTQ4NGE5ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWU0ODRhOWVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHVyc2UvZnJlZXplLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xZTQ4NGE5ZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wdXJzZS9mcmVlemUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mcmVlemUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZTQ4NGE5ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZyZWV6ZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL2ZyZWV6ZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWU0ODRhOWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZTQ4NGE5ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL2ZyZWV6ZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cnNlL2ZyZWV6ZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCJdLCJzb3VyY2VSb290IjoiIn0=