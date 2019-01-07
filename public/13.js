webpackJsonp([13],{

/***/ 362:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			form: '',
			max: 1000, // 自动生成reason需要
			dialog: '',
			keyword: {
				page: 1,
				id: '',
				name: '',
				merchant_id: 1,
				reason: ''
			}
		};
	},

	watch: {
		'form.out_user_type_id': function formOut_user_type_id(n, old) {
			this.add_purse_change();
		},
		'form.out_purse_type_id': function formOut_purse_type_id(n, old) {
			this.add_purse_change();
		},
		'form.into_user_type_id': function formInto_user_type_id(n, old) {
			this.add_purse_change();
		},
		'form.into_purse_type_id': function formInto_purse_type_id(n, old) {
			this.add_purse_change();
		}
	},
	methods: {
		add: function add(id) {
			var t = this;
			t.dialog.open();
			t.$API.get('/reason/index/' + id).then(function (data) {
				t.form = data.detail;
				t.max = data.max;
			}).catch(function (msg) {});
		},
		add_submit: function add_submit() {
			var t = this;
			t.$API.post('/reason/index', t.form).then(function () {
				t.dialog.close();
				t.init();
			}).catch(function (msg) {});
		},
		del: function del(id) {
			var t = this;
			mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认？', function () {
				t.$API.del('/reason/index', { id: id }).then(function () {
					t.init();
				}).catch(function (msg) {});
			}, function () {}, { history: false, confirmText: '确定', cancelText: '取消' });
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
		add_purse_change: function add_purse_change() {
			var form = this.form;
			if (!form.id && form.out_user_type_id && form.out_purse_type_id && form.into_user_type_id && form.into_purse_type_id) {
				form.reason = this.max + '' + form.out_user_type_id.padStart(2, '0') + '' + form.out_purse_type_id.padStart(2, '0') + form.merchant_id + form.into_user_type_id.padStart(2, '0') + '' + form.into_purse_type_id.padStart(2, '0');
			}
		},
		init: function init() {
			var t = this;
			t.$API.get('/reason/index', t.keyword).then(function (data) {
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
		t.dialog = new mdui.Dialog('.dialog_add', { history: false });
		t.init();
	}
});

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "transfer_reason" }, [
    _c(
      "div",
      {
        staticClass: "mdui-typo",
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
            _vm._v("\n\t\t\t\treason："),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.keyword.reason,
                  expression: "keyword.reason"
                }
              ],
              staticClass: "mdui-textfield-input input_normal",
              attrs: { type: "text" },
              domProps: { value: _vm.keyword.reason },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.keyword, "reason", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("\n\t\t\t\t行为ID："),
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
            _vm._v("\n\t\t\t\t转账行为名称："),
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
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-table-fluid" }, [
      _c("table", { staticClass: "mdui-table mdui-table-hoverable" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.list.data, function(val, key) {
              return [
                _c("tr", [
                  _c("td", [
                    _c("span", {
                      domProps: { textContent: _vm._s("#" + (key + 1)) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { domProps: { textContent: _vm._s(val.id) } })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { domProps: { textContent: _vm._s(val.name) } })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {
                      domProps: { textContent: _vm._s(val.reason) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {
                      staticClass: "mdui-text-color-deep-orange",
                      domProps: {
                        textContent: _vm._s(
                          _vm.user_type[val.out_user_type_id] +
                            "->" +
                            _vm.purse_type[val.out_purse_type_id]
                        )
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {
                      staticClass: "mdui-text-color-teal",
                      domProps: {
                        textContent: _vm._s(
                          _vm.user_type[val.into_user_type_id] +
                            "->" +
                            _vm.purse_type[val.into_purse_type_id]
                        )
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {
                      domProps: {
                        textContent: _vm._s(val.status ? "启用" : "禁用")
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {
                      domProps: { textContent: _vm._s(val.remarks) }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {
                      domProps: { textContent: _vm._s(val.created_at) }
                    })
                  ]),
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
              ]
            })
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-dialog dialog_add" }, [
      _c("div", { staticClass: "mdui-dialog-title" }, [
        _vm._v("\n\t\t\t转账 reason 新增/修改\n\t\t")
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "mdui-dialog-content",
          on: {
            keydown: function($event) {
              if (
                !("button" in $event) &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.add_submit($event)
            }
          }
        },
        [
          _c("form", [
            _c("div", { staticClass: "mdui-container" }, [
              _vm._v("\n\t\t\t\t\t所属商户：\n\t\t\t\t\t"),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.merchant_id,
                      expression: "form.merchant_id"
                    }
                  ],
                  staticClass: "mdui-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "merchant_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.merchant, function(name, id) {
                  return _c("option", { domProps: { value: id } }, [
                    _vm._v(_vm._s(name))
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("转账行为名称")
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
                  attrs: {
                    type: "text",
                    placeholder: "中文备注，用户查看流水时展示文案"
                  },
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
            _c("div", { staticClass: "mdui-container mdui-p-y-2" }, [
              _vm._v("\n\t\t\t\t\t出账身份类型：\n\t\t\t\t\t"),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.out_user_type_id,
                      expression: "form.out_user_type_id"
                    }
                  ],
                  staticClass: "mdui-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "out_user_type_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.user_type, function(name, id) {
                  return _c("option", { domProps: { value: id } }, [
                    _vm._v(_vm._s(name))
                  ])
                }),
                0
              ),
              _vm._v(
                "\n\t\t\t\t\t　　　　\n\t\t\t\t\t出账钱包类型：\n\t\t\t\t\t"
              ),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.out_purse_type_id,
                      expression: "form.out_purse_type_id"
                    }
                  ],
                  staticClass: "mdui-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "out_purse_type_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.purse_type, function(name, id) {
                  return _c("option", { domProps: { value: id } }, [
                    _vm._v(_vm._s(name))
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container mdui-p-y-2" }, [
              _vm._v("\n\t\t\t\t\t进账身份类型：\n\t\t\t\t\t"),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.into_user_type_id,
                      expression: "form.into_user_type_id"
                    }
                  ],
                  staticClass: "mdui-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "into_user_type_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.user_type, function(name, id) {
                  return _c("option", { domProps: { value: id } }, [
                    _vm._v(_vm._s(name))
                  ])
                }),
                0
              ),
              _vm._v(
                "\n\t\t\t\t\t　　　　\n\t\t\t\t\t进账钱包类型：\n\t\t\t\t\t"
              ),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.into_purse_type_id,
                      expression: "form.into_purse_type_id"
                    }
                  ],
                  staticClass: "mdui-select",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "into_purse_type_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.purse_type, function(name, id) {
                  return _c("option", { domProps: { value: id } }, [
                    _vm._v(_vm._s(name))
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-container" }, [
              _c("div", { staticClass: "mdui-textfield" }, [
                _c("label", { staticClass: "mdui-textfield-label" }, [
                  _vm._v("reason 代码")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.reason,
                      expression: "form.reason"
                    }
                  ],
                  staticClass: "mdui-textfield-input",
                  attrs: { type: "text", placeholder: "新增时自动生成" },
                  domProps: { value: _vm.form.reason },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "reason", $event.target.value)
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
                  attrs: { type: "text", placeholder: "后台详细备注" },
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
        ]
      ),
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
        _c("th", [_vm._v("转账行为名称")]),
        _vm._v(" "),
        _c("th", [_vm._v("reason 代码")]),
        _vm._v(" "),
        _c("th", [_vm._v("出账关联")]),
        _vm._v(" "),
        _c("th", [_vm._v("进账关联")]),
        _vm._v(" "),
        _c("th", [_vm._v("状态")]),
        _vm._v(" "),
        _c("th", [_vm._v("备注")]),
        _vm._v(" "),
        _c("th", [_vm._v("创建时间")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-5b82e144", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(362)
/* template */
var __vue_template__ = __webpack_require__(363)
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
Component.options.__file = "resources/assets/js/components/reason/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b82e144", Component.options)
  } else {
    hotAPI.reload("data-v-5b82e144", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});