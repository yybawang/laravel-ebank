webpackJsonp([26],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/App.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			user: '',
			menu: '',
			menu_index: 0,
			password_reset_dialog: '',
			password_reset: {
				password_old: '',
				password_new: '',
				password_new_confirmation: ''
			}
		};
	},

	methods: {
		menu_active: function menu_active() {
			var url = location.href.split('#')[1],
			    index = 0;
			for (var i in this.menu) {
				for (var j in this.menu[i]) {
					if (url === this.menu[i][j].url) {
						this.menu_index = index;
						return;
					}
				}
				index++;
			}
		},
		password_reset_submit: function password_reset_submit() {
			var t = this;
			t.$API.post('/rule/password_reset', this.password_reset).then(function (data) {
				t.password_reset_dialog.close();
				mdui.alert('已成功修改，下次登录请使用新密码', '修改登录密码完成', function () {}, { history: false });
				for (var i in t.password_reset) {
					t.password_reset[i] = '';
				}
			}).catch(function () {});
		},
		init: function init() {
			var t = this;
			t.$API.get('/init').then(function (data) {
				t.user = data.user;
				t.menu = data.menu;
				t.menu_active();
			}).catch(function () {});
		},
		initClear: function initClear() {
			var t = this;
			t.menu = '';
			t.user = '';
		},
		logout: function logout() {
			var t = this;
			t.tips('即将跳转到登录页');
			t.$API.post('/logout').then(function (data) {
				t.$router.push({ path: '/login' });
			}).catch(function () {});
		}
	},
	mounted: function mounted() {
		var t = this;
		t.password_reset_dialog = new mdui.Dialog('.password_reset_dialog', { history: false });
		t.init();
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pagination.vue":
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

// import Vue from 'vue'
/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['pageInfo'],
	computed: {
		page: function page() {
			return Math.ceil(this.pageInfo.total / this.pageInfo.pagenum);
		},
		setList: function setList() {
			var len = this.page,
			    temp = [],
			    list = [],
			    count = Math.floor(this.pageInfo.pagegroup / 2),
			    center = this.pageInfo.current;
			if (len <= this.pageInfo.pagegroup) {
				while (len--) {
					temp.push({ text: this.page - len, val: this.page - len });
				};
				return temp;
			}
			while (len--) {
				temp.push(this.page - len);
			};
			var idx = temp.indexOf(center);
			idx < count && (center = center + count - idx);
			this.pageInfo.current > this.page - count && (center = this.page - count);
			temp = temp.splice(center - count - 1, this.pageInfo.pagegroup);
			do {
				var t = temp.shift();
				list.push({
					text: t,
					val: t
				});
			} while (temp.length);
			if (this.page > this.pageInfo.pagegroup) {
				this.pageInfo.current > count + 1 && list.unshift({ text: '...', val: list[0].val - 1 });
				this.pageInfo.current < this.page - count && list.push({ text: '...', val: list[list.length - 1].val + 1 });
			}
			return list;
		}
	},
	created: function created(argument) {
		// console.log(this.pageInfo)
	},
	methods: {
		clickCurrent: function clickCurrent(idx) {
			if (this.pageInfo.current != idx && idx > 0 && idx < this.page + 1) {
				this.pageInfo.current = idx;
				this.$emit('change', this.pageInfo.current);
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f6e5bf1\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.pages-wrap[data-v-1f6e5bf1] {\n\ttext-align: center;\n}\n.pagination[data-v-1f6e5bf1] {\n\tdisplay: inline-block;\n\tpadding-left: 0;\n\tmargin: 20px 0;\n\tborder-radius: 4px;\n}\n.pagination>li[data-v-1f6e5bf1] {\n\tdisplay: inline;\n}\n.pagination>.active>a[data-v-1f6e5bf1], .pagination>.active>a[data-v-1f6e5bf1]:hover, .pagination>.active>span[data-v-1f6e5bf1],  .pagination>.active>span[data-v-1f6e5bf1]:hover {\n\tz-index: 3;\n\tcolor: #fff;\n\tcursor: default;\n\tbackground-color: #337ab7;\n\tborder-color: #337ab7;\n}\n.pagination>.disabled>a[data-v-1f6e5bf1], .pagination>.disabled>a[data-v-1f6e5bf1]:hover, .pagination>.disabled>span[data-v-1f6e5bf1], .pagination>.disabled>span[data-v-1f6e5bf1]:hover {\n\tcolor: #777;\n\tcursor: not-allowed;\n\tbackground-color: #fff;\n\tborder-color: #ddd;\n}\n.pagination>li>a[data-v-1f6e5bf1]:hover,.pagination>li>span[data-v-1f6e5bf1]:hover {\n\tz-index: 2;\n\tcolor: rgba(0,0,0,0.6);\n\tbackground-color: #eee;\n\tborder-color: #ddd;\n}\n.pagination>li>a[data-v-1f6e5bf1], .pagination>li>span[data-v-1f6e5bf1] {\n\tposition: relative;\n\tfloat: left;\n\tpadding: 6px 12px;\n\tmargin-left: -1px;\n\tline-height: 1.42857143;\n\tcolor: #000;\n\ttext-decoration: none;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n}\n", "", {"version":3,"sources":["/var/www/ebank/resources/assets/js/components/resources/assets/js/components/pagination.vue"],"names":[],"mappings":";AA6DA;CACA,mBAAA;CACA;AACA;CACA,sBAAA;CACA,gBAAA;CACA,eAAA;CACA,mBAAA;CACA;AACA;CACA,gBAAA;CACA;AACA;CACA,WAAA;CACA,YAAA;CACA,gBAAA;CACA,0BAAA;CACA,sBAAA;CACA;AACA;CACA,YAAA;CACA,oBAAA;CACA,uBAAA;CACA,mBAAA;CACA;AACA;CACA,WAAA;CACA,uBAAA;CACA,uBAAA;CACA,mBAAA;CACA;AACA;CACA,mBAAA;CACA,YAAA;CACA,kBAAA;CACA,kBAAA;CACA,wBAAA;CACA,YAAA;CACA,sBAAA;CACA,uBAAA;CACA,uBAAA;CACA","file":"pagination.vue","sourcesContent":["<template type=\"text/template\" id=\"template_pagination\">\n\t<section class=\"pages-wrap\" v-show=\"pageInfo.total>pageInfo.pagenum\">\n\t\t<ul class=\"pagination clearfix\">\n\t\t\t<li :class=\"{'disabled': pageInfo.current == 1}\"><a href=\"javascript:;\" @click=\"clickCurrent(1)\"> 首页 </a></li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == 1}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.current - 1)\"> 上一页 </a></li>\n\t\t\t<li v-for=\"p in setList\" :class=\"{'active': pageInfo.current == p.val}\" >\n\t\t\t\t<a href=\"javascript:;\" v-if=\"pageInfo.current == p.val\" :style=\"{backgroundColor:pageInfo.skin , borderColor:pageInfo.skin}\" @click=\"clickCurrent(p.val)\"> {{ p.text }} </a>\n\t\t\t\t<a href=\"javascript:;\" v-else  @click=\"clickCurrent(p.val)\"> {{ p.text }} </a>\n\t\t\t</li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == pageInfo.page}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.current + 1)\"> 下一页</a></li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == pageInfo.page}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.page)\"> 尾页 </a></li>\n\t\t</ul>\n\t</section>\n</template>\n<script>\n\t// import Vue from 'vue'\n\texport default {\n\t\tprops:['pageInfo'],\n\t\tcomputed: {\n\t\t\tpage:function() {\n\t\t\t\treturn Math.ceil(this.pageInfo.total / this.pageInfo.pagenum);\n\t\t\t},\n\t\t\tsetList:function(){\n\t\t\t\tvar len = this.page , temp = [], list = [], count = Math.floor(this.pageInfo.pagegroup / 2) ,center = this.pageInfo.current;\n\t\t\t\tif( len <= this.pageInfo.pagegroup ){\n\t\t\t\t\twhile(len--){ temp.push({text:this.page-len,val:this.page-len});};\n\t\t\t\t\treturn temp;\n\t\t\t\t}\n\t\t\t\twhile(len--){ temp.push(this.page - len);};\n\t\t\t\tvar idx = temp.indexOf(center);\n\t\t\t\t(idx < count) && ( center = center + count - idx);\n\t\t\t\t(this.pageInfo.current > this.page - count) && ( center = this.page - count);\n\t\t\t\ttemp = temp.splice(center - count -1, this.pageInfo.pagegroup);\n\t\t\t\tdo {\n\t\t\t\t\tvar t = temp.shift();\n\t\t\t\t\tlist.push({\n\t\t\t\t\t\ttext: t,\n\t\t\t\t\t\tval: t\n\t\t\t\t\t});\n\t\t\t\t}while(temp.length);\n\t\t\t\tif( this.page > this.pageInfo.pagegroup ){\n\t\t\t\t\t(this.pageInfo.current > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });\n\t\t\t\t\t(this.pageInfo.current < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });\n\t\t\t\t}\n\t\t\t\treturn list;\n\t\t\t}\n\t\t},\n\t\tcreated:function (argument) {\n\t\t\t// console.log(this.pageInfo)\n\t\t},\n\t\tmethods: {\n\t\t\tclickCurrent: function(idx) {\n\t\t\t\tif( this.pageInfo.current != idx && idx > 0 && idx < this.page + 1) {\n\t\t\t\t\tthis.pageInfo.current = idx;\n\t\t\t\t\tthis.$emit('change',this.pageInfo.current);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n</script>\n<style scoped>\n\t.pages-wrap {\n\t\ttext-align: center;\n\t}\n\t.pagination {\n\t\tdisplay: inline-block;\n\t\tpadding-left: 0;\n\t\tmargin: 20px 0;\n\t\tborder-radius: 4px;\n\t}\n\t.pagination>li {\n\t\tdisplay: inline;\n\t}\n\t.pagination>.active>a, .pagination>.active>a:hover, .pagination>.active>span,  .pagination>.active>span:hover {\n\t\tz-index: 3;\n\t\tcolor: #fff;\n\t\tcursor: default;\n\t\tbackground-color: #337ab7;\n\t\tborder-color: #337ab7;\n\t}\n\t.pagination>.disabled>a, .pagination>.disabled>a:hover, .pagination>.disabled>span, .pagination>.disabled>span:hover {\n\t\tcolor: #777;\n\t\tcursor: not-allowed;\n\t\tbackground-color: #fff;\n\t\tborder-color: #ddd;\n\t}\n\t.pagination>li>a:hover,.pagination>li>span:hover {\n\t\tz-index: 2;\n\t\tcolor: rgba(0,0,0,0.6);\n\t\tbackground-color: #eee;\n\t\tborder-color: #ddd;\n\t}\n\t.pagination>li>a, .pagination>li>span {\n\t\tposition: relative;\n\t\tfloat: left;\n\t\tpadding: 6px 12px;\n\t\tmargin-left: -1px;\n\t\tline-height: 1.42857143;\n\t\tcolor: #000;\n\t\ttext-decoration: none;\n\t\tbackground-color: #fff;\n\t\tborder: 1px solid #ddd;\n\t}\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1f6e5bf1\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.pageInfo.total > _vm.pageInfo.pagenum,
          expression: "pageInfo.total>pageInfo.pagenum"
        }
      ],
      staticClass: "pages-wrap"
    },
    [
      _c(
        "ul",
        { staticClass: "pagination clearfix" },
        [
          _c("li", { class: { disabled: _vm.pageInfo.current == 1 } }, [
            _c(
              "a",
              {
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    _vm.clickCurrent(1)
                  }
                }
              },
              [_vm._v(" 首页 ")]
            )
          ]),
          _vm._v(" "),
          _c("li", { class: { disabled: _vm.pageInfo.current == 1 } }, [
            _c(
              "a",
              {
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    _vm.clickCurrent(_vm.pageInfo.current - 1)
                  }
                }
              },
              [_vm._v(" 上一页 ")]
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.setList, function(p) {
            return _c(
              "li",
              { class: { active: _vm.pageInfo.current == p.val } },
              [
                _vm.pageInfo.current == p.val
                  ? _c(
                      "a",
                      {
                        style: {
                          backgroundColor: _vm.pageInfo.skin,
                          borderColor: _vm.pageInfo.skin
                        },
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function($event) {
                            _vm.clickCurrent(p.val)
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(p.text) + " ")]
                    )
                  : _c(
                      "a",
                      {
                        attrs: { href: "javascript:;" },
                        on: {
                          click: function($event) {
                            _vm.clickCurrent(p.val)
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(p.text) + " ")]
                    )
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "li",
            { class: { disabled: _vm.pageInfo.current == _vm.pageInfo.page } },
            [
              _c(
                "a",
                {
                  attrs: { href: "javascript:;" },
                  on: {
                    click: function($event) {
                      _vm.clickCurrent(_vm.pageInfo.current + 1)
                    }
                  }
                },
                [_vm._v(" 下一页")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { class: { disabled: _vm.pageInfo.current == _vm.pageInfo.page } },
            [
              _c(
                "a",
                {
                  attrs: { href: "javascript:;" },
                  on: {
                    click: function($event) {
                      _vm.clickCurrent(_vm.pageInfo.page)
                    }
                  }
                },
                [_vm._v(" 尾页 ")]
              )
            ]
          )
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f6e5bf1", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-66ab2f82\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "mdui-appbar mdui-appbar-fixed" }, [
      _c(
        "div",
        { staticClass: "mdui-toolbar mdui-color-theme" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "mdui-typo-headline mdui-hidden-md-up",
              attrs: { to: { path: "/" } }
            },
            [_vm._v("EBank")]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "mdui-typo-title mdui-hidden-sm-down",
              attrs: { to: { path: "/" } }
            },
            [_vm._v("EBank 电子银行")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mdui-toolbar-spacer" }),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "mdui-btn mdui-ripple",
              attrs: { "mdui-menu": "{target: '.menu_user'}" }
            },
            [
              _c("i", { staticClass: "mdui-icon material-icons" }, [
                _vm._v("person")
              ]),
              _vm._v(_vm._s(_vm.user.name || "未登录") + "\n\t\t\t")
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "mdui-menu mdui-menu-cascade menu_user" }, [
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "mdui-menu-item-icon mdui-icon material-icons"
                    },
                    [_vm._v("person")]
                  ),
                  _vm._v(" "),
                  _vm.user.realname
                    ? _c("span", {
                        domProps: { textContent: _vm._s(_vm.user.realname) }
                      })
                    : _c("span", { staticClass: "mdui-text-color-grey-500" }, [
                        _vm._v("无姓名")
                      ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "mdui-menu-item-icon mdui-icon material-icons"
                    },
                    [_vm._v("phone_iphone")]
                  ),
                  _vm._v(" "),
                  _vm.user.mobile
                    ? _c("span", {
                        domProps: { textContent: _vm._s(_vm.user.mobile) }
                      })
                    : _c("span", { staticClass: "mdui-text-color-grey-500" }, [
                        _vm._v("无手机号")
                      ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "mdui-menu-item-icon mdui-icon material-icons"
                    },
                    [_vm._v("email")]
                  ),
                  _vm._v(" "),
                  _vm.user.email
                    ? _c("span", {
                        domProps: { textContent: _vm._s(_vm.user.email) }
                      })
                    : _c("span", { staticClass: "mdui-text-color-grey-500" }, [
                        _vm._v("无邮箱")
                      ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-divider" }),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c("i", { staticClass: "mdui-menu-item-icon" }),
                  _vm._v(" "),
                  _vm.user.last_login
                    ? _c("span", {
                        domProps: { textContent: _vm._s(_vm.user.last_login) }
                      })
                    : _c("span", { staticClass: "mdui-text-color-grey-500" }, [
                        _vm._v("无历史登录")
                      ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-divider" }),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                {
                  staticClass: "mdui-ripple",
                  attrs: { href: "javascript:;" },
                  on: {
                    click: function($event) {
                      _vm.password_reset_dialog.open()
                    }
                  }
                },
                [
                  _c(
                    "i",
                    {
                      staticClass:
                        "mdui-menu-item-icon mdui-icon material-icons"
                    },
                    [_vm._v("vpn_key")]
                  ),
                  _vm._v("修改密码\n\t\t\t\t\t")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.user
            ? _c("a", { staticClass: "mdui-btn", on: { click: _vm.logout } }, [
                _vm._v("\n\t\t\t\t注销\n\t\t\t")
              ])
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "mdui-drawer mdui-color-white",
        attrs: { id: "main-drawer" }
      },
      [
        _c("div", { staticClass: "mdui-card" }, [
          _c("div", { staticClass: "mdui-card-media" }, [
            _c("img", {
              staticStyle: { height: "200px" },
              attrs: { src: __webpack_require__("./resources/assets/images/snow_square_tiny.png") }
            }),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "mdui-card-media-covered mdui-card-media-covered-transparent"
              },
              [
                _c("div", { staticClass: "mdui-card-primary" }, [
                  _c(
                    "div",
                    {
                      staticClass: "mdui-card-primary-title mdui-text-uppercase"
                    },
                    [_vm._v(_vm._s(_vm.user.name))]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mdui-card-primary-subtitle" }, [
                    _vm._v(_vm._s(_vm.user.realname))
                  ])
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "mdui-list",
            attrs: { "mdui-collapse": "{accordion: true}" }
          },
          _vm._l(_vm.menu, function(val, key, index) {
            return _c(
              "div",
              {
                class: {
                  "mdui-collapse-item": true,
                  "mdui-collapse-item-open":
                    index == _vm.menu_index ? true : false
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "mdui-collapse-item-header mdui-list-item mdui-ripple"
                  },
                  [
                    _c(
                      "i",
                      {
                        staticClass:
                          "mdui-list-item-icon mdui-icon material-icons mdui-text-color-grey"
                      },
                      [_vm._v("menu")]
                    ),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "mdui-list-item-content",
                      domProps: { textContent: _vm._s(key) }
                    }),
                    _vm._v(" "),
                    _c(
                      "i",
                      {
                        staticClass:
                          "mdui-collapse-item-arrow mdui-icon material-icons"
                      },
                      [_vm._v("keyboard_arrow_down")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass:
                      "mdui-collapse-item-body mdui-list mdui-list-dense"
                  },
                  _vm._l(val, function(val2, key2, index2) {
                    return _c(
                      "router-link",
                      {
                        key: val2.name,
                        staticClass: "mdui-list-item mdui-ripple",
                        attrs: {
                          tag: "li",
                          to: { path: val2.url },
                          "active-class": "mdui-color-theme"
                        }
                      },
                      [_vm._v(_vm._s(val2.name))]
                    )
                  })
                )
              ]
            )
          })
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-p-a-3" }, [
      _c(
        "div",
        { attrs: { id: "app" } },
        [
          _c("router-view", {
            on: { init: _vm.init, initClear: _vm.initClear }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mdui-dialog password_reset_dialog" }, [
      _c("div", { staticClass: "mdui-dialog-title" }, [
        _vm._v("\n\t\t\t修改登录密码\n\t\t")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mdui-dialog-content" }, [
        _c("div", { staticClass: "mdui-container" }, [
          _c("div", { staticClass: "mdui-textfield" }, [
            _c("label", { staticClass: "mdui-textfield-label" }, [
              _vm._v("现登录密码")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password_reset.password_old,
                  expression: "password_reset.password_old"
                }
              ],
              staticClass: "mdui-textfield-input",
              attrs: { type: "password" },
              domProps: { value: _vm.password_reset.password_old },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.password_reset,
                    "password_old",
                    $event.target.value
                  )
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mdui-container" }, [
          _c("div", { staticClass: "mdui-textfield" }, [
            _c("label", { staticClass: "mdui-textfield-label" }, [
              _vm._v("新登录密码")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password_reset.password_new,
                  expression: "password_reset.password_new"
                }
              ],
              staticClass: "mdui-textfield-input",
              attrs: { type: "password" },
              domProps: { value: _vm.password_reset.password_new },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.password_reset,
                    "password_new",
                    $event.target.value
                  )
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mdui-container" }, [
          _c("div", { staticClass: "mdui-textfield" }, [
            _c("label", { staticClass: "mdui-textfield-label" }, [
              _vm._v("重复新登录密码")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password_reset.password_new_confirmation,
                  expression: "password_reset.password_new_confirmation"
                }
              ],
              staticClass: "mdui-textfield-input",
              attrs: { type: "password" },
              domProps: { value: _vm.password_reset.password_new_confirmation },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.password_reset,
                    "password_new_confirmation",
                    $event.target.value
                  )
                }
              }
            })
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
            on: { click: _vm.password_reset_submit }
          },
          [_vm._v("提交")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white",
        attrs: { "mdui-drawer": "{target: '#main-drawer', swipe: true}" }
      },
      [_c("i", { staticClass: "mdui-icon material-icons" }, [_vm._v("menu")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "mdui-btn mdui-btn-icon",
        attrs: { href: "javascript:location.reload();" }
      },
      [
        _c("i", { staticClass: "mdui-icon material-icons" }, [
          _vm._v("refresh")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "mdui-menu-item" }, [
      _c("a", { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } }, [
        _c(
          "i",
          { staticClass: "mdui-menu-item-icon mdui-icon material-icons" },
          [_vm._v("last_page")]
        ),
        _vm._v("本次登录\n\t\t\t\t\t")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mdui-card-menu" }, [
      _c(
        "a",
        { attrs: { target: "_blank", href: "//github.com/yybawang/ebank" } },
        [
          _c("button", { staticClass: "mdui-btn mdui-text-color-grey" }, [
            _vm._v("github")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mdui-progress" }, [
      _c("div", {
        staticClass: "mdui-progress-indeterminate mdui-hidden ajax_loading"
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66ab2f82", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f6e5bf1\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f6e5bf1\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pagination.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("14f8b906", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f6e5bf1\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f6e5bf1\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/images/snow_square_tiny.png":
/***/ (function(module, exports) {

module.exports = "/images/snow_square_tiny.png?6cd59b4fc94edf8015d53a8ac22e4838";

/***/ }),

/***/ "./resources/assets/js/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/App.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-66ab2f82\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/App.vue")
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
Component.options.__file = "resources/assets/js/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66ab2f82", Component.options)
  } else {
    hotAPI.reload("data-v-66ab2f82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_datepicker_local__ = __webpack_require__("./node_modules/vue-datepicker-local/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue__ = __webpack_require__("./resources/assets/js/App.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_router__ = __webpack_require__("./resources/assets/js/config/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_function__ = __webpack_require__("./resources/assets/js/config/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_api__ = __webpack_require__("./resources/assets/js/config/api.js");

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__("./resources/assets/js/bootstrap.js");



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// Vue.component('example-component', require('./components/ExampleComponent.vue'));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('pagination', __webpack_require__("./resources/assets/js/components/pagination.vue"));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('vue-datepicker-local', __WEBPACK_IMPORTED_MODULE_1_vue_datepicker_local__["default"]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4__config_function__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__config_api__["a" /* default */]);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__config_router__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_2__App_vue___default.a);
  }
});

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {


// window._ = require('lodash');
window.mdui = __webpack_require__("./resources/assets/js/config/mdui.min.js");
window.$ = mdui.JQ;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// try {
//     window.$ = window.jQuery = require('jquery');
//
//     require('bootstrap-sass');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

// let token = document.head.querySelector('meta[name="csrf-token"]');
//
// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),

/***/ "./resources/assets/js/components/pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f6e5bf1\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pagination.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pagination.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1f6e5bf1\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pagination.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f6e5bf1"
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
Component.options.__file = "resources/assets/js/components/pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f6e5bf1", Component.options)
  } else {
    hotAPI.reload("data-v-1f6e5bf1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/config/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__("./resources/assets/js/config/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/**
 * @package api
 * @author yybawang
 * @date 2018-11-13
 * @desc axios 自定封装
 */





var token = document.head.querySelector('meta[name="csrf-token"]');
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var url_prefix = APP_URL + "/admin";

/**
 * 请求拦截
 */
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.request.use(function (config) {
	// 一般在这个位置判断token是否存在
	__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.loading();
	return config;
}, function (error) {
	return Promise.reject(error);
});

/**
 * 响应拦截
 */
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.response.use(function (response) {
	__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.loading(true);
	if (response.status === 200) {
		var data = response.data;
		if ('1' === data.status) {
			return Promise.resolve(data.data);
		} else if ('0' === data.status) {
			__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.tips(data.message);
			return Promise.reject(data.message);
		} else if ('2' === data.status) {
			__WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */].push({ path: '/login' });
			return Promise.reject('Need Login');
		} else {
			__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.tips('失败，未正常接收 json');
			return Promise.reject('失败，未正常接收 json');
		}
	} else {
		// api 不会返回非 200 状态，所以肯定中间环节哪里有问题
		__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.tips('oHo~ 网络开小差了');
		return Promise.reject('oHo~ 网络开小差了');
	}
}, function (errors) {
	__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.loading(true);
	var message = "网络请求失败";
	if (errors.response) {
		message = errors.response.data.message;
	} else if (errors.request) {
		message = "程序发起请求失败";
	}
	__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.tips(message);
	return Promise.reject(message);
});

/**
 * 发起 GET 请求
 * 获取资源，一个或多个
 * @param url
 * @param params
 * @returns {AxiosPromise<any>}
 */
var get = function get(url, params) {
	url = url_prefix + url;
	return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url, {
		params: params
	});
};

/**
 * 发起 POST 请求
 * 添加资源（与更新一起使用  updateOrCreate）
 * @param url
 * @param params
 * @returns {AxiosPromise<any>}
 */
var post = function post(url, params) {
	url = url_prefix + url;
	return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url, params);
};

/**
 * request a DEL
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
var del = function del(url, params) {
	url = url_prefix + url;
	return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(url, params);
};

/**
 * 发起 PUT 请求
 * 更新资源
 * @param url
 * @param params
 * @returns {AxiosPromise<any>}
 */
var put = function put(url, params) {
	url = url_prefix + url;
	return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put(url, params);
};

var $API = {
	get: get,
	post: post,
	del: del,
	put: put
};

/* harmony default export */ __webpack_exports__["a"] = ({
	install: function install(Vue, options) {
		Vue.prototype.$API = $API;
	}
});

/***/ }),

/***/ "./resources/assets/js/config/function.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 公共方法类
 * @package function
 * @author yybawang
 * @date 2018-11-13
 */

/**
 * 弹窗文字提示
 * @param msg
 * @param type info,success,error,warning,warn,loading
 */
var tips = function tips(msg) {
	mdui.snackbar({
		message: msg,
		position: 'right-top',
		timeout: 3000,
		buttonText: 'Close'
	});
};

/**
 * 控制台日志
 * @param variable
 */
var logger = function logger(variable) {
	console.info(typeof variable === 'undefined' ? 'undefined' : _typeof(variable));
	console.log(variable);
};

/**
 * wait progress
 * @param close
 */
var loading = function loading(close) {
	if (close) {
		$('.ajax_loading').addClass('mdui-hidden');
	} else {
		$('.ajax_loading').removeClass('mdui-hidden');
	}
};

/* harmony default export */ __webpack_exports__["a"] = ({
	install: function install(Vue, options) {
		Vue.prototype.tips = tips;
		Vue.prototype.logger = logger;
		Vue.prototype.loading = loading;
	}
});

/***/ }),

/***/ "./resources/assets/js/config/mdui.min.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * mdui v0.4.1 (https://mdui.org)
 * Copyright 2016-2018 zdhxiong
 * Licensed under MIT
 */
!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.mdui = e();
}(this, function () {
  "use strict";
  var t = {};!function () {
    var t = 0;window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame, window.cancelAnimationFrame = window.webkitCancelAnimationFrame), window.requestAnimationFrame || (window.requestAnimationFrame = function (e, n) {
      var i = new Date().getTime(),
          o = Math.max(0, 16.7 - (i - t)),
          a = window.setTimeout(function () {
        e(i + o);
      }, o);return t = i + o, a;
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }();var e = function (t, e, n) {
    function i(t) {
      return "number" == typeof t.length;
    }function o(t, e) {
      var n, o;if (i(t)) {
        for (n = 0; n < t.length; n++) {
          if (!1 === e.call(t[n], n, t[n])) return t;
        }
      } else for (o in t) {
        if (t.hasOwnProperty(o) && !1 === e.call(t[o], o, t[o])) return t;
      }return t;
    }function a(t, e) {
      var i,
          a = [];return o(t, function (t, o) {
        null !== (i = e(o, t)) && i !== n && a.push(i);
      }), p.apply([], a);
    }function s(t, e) {
      return o(e, function (e, n) {
        t.push(n);
      }), t;
    }function r(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        -1 === e.indexOf(t[n]) && e.push(t[n]);
      }return e;
    }function c(t) {
      return null === t;
    }function d(t) {
      return "function" == typeof t;
    }function u(t) {
      return "string" == typeof t;
    }function l(t) {
      return function (t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
      }(t) && !c(t);
    }var f = [],
        h = f.slice,
        p = f.concat,
        m = Array.isArray,
        v = e.documentElement,
        g = {},
        b = function b(t) {
      for (var e = 0; e < t.length; e++) {
        this[e] = t[e];
      }return this.length = t.length, this;
    },
        x = function x(n) {
      var i = [],
          o = 0;if (!n) return new b(i);if (n instanceof b) return n;if (u(n)) {
        var a, s;if ("<" === (n = n.trim())[0] && ">" === n[n.length - 1]) {
          var r = "div";for (0 === n.indexOf("<li") && (r = "ul"), 0 === n.indexOf("<tr") && (r = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (r = "tr"), 0 === n.indexOf("<tbody") && (r = "table"), 0 === n.indexOf("<option") && (r = "select"), (s = e.createElement(r)).innerHTML = n, o = 0; o < s.childNodes.length; o++) {
            i.push(s.childNodes[o]);
          }
        } else for (a = "#" !== n[0] || n.match(/[ .<>:~]/) ? e.querySelectorAll(n) : [e.getElementById(n.slice(1))], o = 0; o < a.length; o++) {
          a[o] && i.push(a[o]);
        }
      } else {
        if (d(n)) return x(e).ready(n);if (n.nodeType || n === t || n === e) i.push(n);else if (n.length > 0 && n[0].nodeType) for (o = 0; o < n.length; o++) {
          i.push(n[o]);
        }
      }return new b(i);
    };x.fn = b.prototype, x.extend = x.fn.extend = function (t) {
      if (t === n) return this;var e,
          i,
          o,
          a = arguments.length;if (1 === a) {
        for (e in t) {
          t.hasOwnProperty(e) && (this[e] = t[e]);
        }return this;
      }for (i = 1; i < a; i++) {
        o = arguments[i];for (e in o) {
          o.hasOwnProperty(e) && (t[e] = o[e]);
        }
      }return t;
    }, x.extend({ each: o, merge: s, unique: r, map: a, contains: function contains(t, e) {
        return t && !e ? v.contains(t) : t !== e && t.contains(e);
      }, param: function param(t) {
        function e(t, i) {
          var a;l(i) ? o(i, function (n, o) {
            a = m(i) && !l(o) ? "" : n, e(t + "[" + a + "]", o);
          }) : (a = c(i) || "" === i ? "" : "=" + encodeURIComponent(i), n.push(encodeURIComponent(t) + a));
        }if (!l(t)) return "";var n = [];return o(t, function (t, n) {
          e(t, n);
        }), n.join("&");
      } }), x.fn.extend({ each: function each(t) {
        return o(this, t);
      }, map: function map(t) {
        return new b(a(this, function (e, n) {
          return t.call(e, n, e);
        }));
      }, get: function get(t) {
        return t === n ? h.call(this) : this[t >= 0 ? t : t + this.length];
      }, slice: function slice(t) {
        return new b(h.apply(this, arguments));
      }, filter: function filter(t) {
        if (d(t)) return this.map(function (e, i) {
          return t.call(i, e, i) ? i : n;
        });var e = x(t);return this.map(function (t, i) {
          return e.index(i) > -1 ? i : n;
        });
      }, not: function not(t) {
        var e = this.filter(t);return this.map(function (t, i) {
          return e.index(i) > -1 ? n : i;
        });
      }, offset: function offset() {
        if (this[0]) {
          var e = this[0].getBoundingClientRect();return { left: e.left + t.pageXOffset, top: e.top + t.pageYOffset, width: e.width, height: e.height };
        }return null;
      }, offsetParent: function offsetParent() {
        return this.map(function () {
          for (var t = this.offsetParent; t && "static" === x(t).css("position");) {
            t = t.offsetParent;
          }return t || v;
        });
      }, position: function position() {
        if (!this[0]) return null;var t,
            e,
            n = { top: 0, left: 0 };return "fixed" === this.css("position") ? e = this[0].getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }(t[0], "html") || (n = t.offset()), n = { top: n.top + t.css("borderTopWidth"), left: n.left + t.css("borderLeftWidth") }), { top: e.top - n.top - this.css("marginTop"), left: e.left - n.left - this.css("marginLeft"), width: e.width, height: e.height };
      }, show: function show() {
        return this.each(function () {
          "none" === this.style.display && (this.style.display = ""), "none" === t.getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = function (t) {
            var n, i;return g[t] || (n = e.createElement(t), e.body.appendChild(n), i = getComputedStyle(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" === i && (i = "block"), g[t] = i), g[t];
          }(this.nodeName));
        });
      }, hide: function hide() {
        return this.each(function () {
          this.style.display = "none";
        });
      }, toggle: function toggle() {
        return this.each(function () {
          this.style.display = "none" === this.style.display ? "" : "none";
        });
      }, hasClass: function hasClass(t) {
        return !(!this[0] || !t) && this[0].classList.contains(t);
      }, removeAttr: function removeAttr(t) {
        return this.each(function () {
          this.removeAttribute(t);
        });
      }, removeProp: function removeProp(t) {
        return this.each(function () {
          try {
            delete this[t];
          } catch (t) {}
        });
      }, eq: function eq(t) {
        var e = -1 === t ? this.slice(t) : this.slice(t, +t + 1);return new b(e);
      }, first: function first() {
        return this.eq(0);
      }, last: function last() {
        return this.eq(-1);
      }, index: function index(t) {
        return t ? u(t) ? x(t).eq(0).parent().children().get().indexOf(this[0]) : this.get().indexOf(t) : this.eq(0).parent().children().get().indexOf(this[0]);
      }, is: function is(o) {
        var a = this[0];if (!a || o === n || null === o) return !1;var s, r;if (u(o)) {
          if (a === e || a === t) return !1;return (a.matches || a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector).call(a, o);
        }if (o === e || o === t) return a === o;if (o.nodeType || i(o)) {
          for (s = o.nodeType ? [o] : o, r = 0; r < s.length; r++) {
            if (s[r] === a) return !0;
          }return !1;
        }return !1;
      }, find: function find(t) {
        var e = [];return this.each(function (n, i) {
          s(e, i.querySelectorAll(t));
        }), new b(e);
      }, children: function children(t) {
        var e = [];return this.each(function (n, i) {
          o(i.childNodes, function (n, i) {
            if (1 !== i.nodeType) return !0;(!t || t && x(i).is(t)) && e.push(i);
          });
        }), new b(r(e));
      }, has: function has(t) {
        var e = u(t) ? this.find(t) : x(t),
            n = e.length;return this.filter(function () {
          for (var t = 0; t < n; t++) {
            if (x.contains(this, e[t])) return !0;
          }
        });
      }, siblings: function siblings(t) {
        return this.prevAll(t).add(this.nextAll(t));
      }, closest: function closest(t) {
        var e = this;return e.is(t) || (e = e.parents(t).eq(0)), e;
      }, remove: function remove() {
        return this.each(function (t, e) {
          e.parentNode && e.parentNode.removeChild(e);
        });
      }, add: function add(t) {
        return new b(r(s(this.get(), x(t))));
      }, empty: function empty() {
        return this.each(function () {
          this.innerHTML = "";
        });
      }, clone: function clone() {
        return this.map(function () {
          return this.cloneNode(!0);
        });
      }, replaceWith: function replaceWith(t) {
        return this.before(t).remove();
      }, serializeArray: function serializeArray() {
        var t,
            e,
            n = [],
            i = this[0];return i && i.elements ? (x(h.call(i.elements)).each(function () {
          t = x(this), e = t.attr("type"), "fieldset" === this.nodeName.toLowerCase() || this.disabled || -1 !== ["submit", "reset", "button"].indexOf(e) || -1 !== ["radio", "checkbox"].indexOf(e) && !this.checked || n.push({ name: t.attr("name"), value: t.val() });
        }), n) : n;
      }, serialize: function serialize() {
        var t = [];return o(this.serializeArray(), function (e, n) {
          t.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value));
        }), t.join("&");
      } }), o(["val", "html", "text"], function (t, e) {
      var i = { 0: "value", 1: "innerHTML", 2: "textContent" },
          o = { 0: n, 1: n, 2: null };x.fn[e] = function (e) {
        return e === n ? this[0] ? this[0][i[t]] : o[t] : this.each(function (n, o) {
          o[i[t]] = e;
        });
      };
    }), o(["attr", "prop", "css"], function (e, i) {
      var a = function a(t, n, i) {
        0 === e ? t.setAttribute(n, i) : 1 === e ? t[n] = i : t.style[n] = i;
      };x.fn[i] = function (i, s) {
        var r = arguments.length;return 1 === r && u(i) ? function (i, o) {
          if (!i) return n;return 0 === e ? i.getAttribute(o) : 1 === e ? i[o] : t.getComputedStyle(i, null).getPropertyValue(o);
        }(this[0], i) : this.each(function (t, e) {
          2 === r ? a(e, i, s) : o(i, function (t, n) {
            a(e, t, n);
          });
        });
      };
    }), o(["add", "remove", "toggle"], function (t, e) {
      x.fn[e + "Class"] = function (t) {
        if (!t) return this;var n = t.split(" ");return this.each(function (t, i) {
          o(n, function (t, n) {
            i.classList[e](n);
          });
        });
      };
    }), o({ Width: "width", Height: "height" }, function (e, i) {
      x.fn[i] = function (o) {
        if (o === n) {
          var a = this[0];if (function (t) {
            return t && t === t.window;
          }(a)) return a["inner" + e];if (function (t) {
            return t && t.nodeType === t.DOCUMENT_NODE;
          }(a)) return a.documentElement["scroll" + e];var s = x(a),
              r = 0,
              c = "width" === i;return "ActiveXObject" in t && "border-box" === s.css("box-sizing") && (r = parseFloat(s.css("padding-" + (c ? "left" : "top"))) + parseFloat(s.css("padding-" + (c ? "right" : "bottom"))) + parseFloat(s.css("border-" + (c ? "left" : "top") + "-width")) + parseFloat(s.css("border-" + (c ? "right" : "bottom") + "-width"))), parseFloat(x(a).css(i)) + r;
        }return isNaN(Number(o)) || "" === o || (o += "px"), this.css(i, o);
      };
    }), o({ Width: "width", Height: "height" }, function (t, e) {
      x.fn["inner" + t] = function () {
        var t = this[e](),
            n = x(this[0]);return "border-box" !== n.css("box-sizing") && (t += parseFloat(n.css("padding-" + ("width" === e ? "left" : "top"))), t += parseFloat(n.css("padding-" + ("width" === e ? "right" : "bottom")))), t;
      };
    });var y = function y(t, e, n, i) {
      var o,
          a = [];return t.each(function (t, s) {
        for (o = s[i]; o;) {
          if (2 === n) {
            if (!e || e && x(o).is(e)) break;a.push(o);
          } else {
            if (0 === n) {
              (!e || e && x(o).is(e)) && a.push(o);break;
            }(!e || e && x(o).is(e)) && a.push(o);
          }o = o[i];
        }
      }), new b(r(a));
    };return o(["", "All", "Until"], function (t, e) {
      x.fn["prev" + e] = function (e) {
        var n = 0 === t ? this : x(this.get().reverse());return y(n, e, t, "previousElementSibling");
      };
    }), o(["", "All", "Until"], function (t, e) {
      x.fn["next" + e] = function (e) {
        return y(this, e, t, "nextElementSibling");
      };
    }), o(["", "s", "sUntil"], function (t, e) {
      x.fn["parent" + e] = function (e) {
        var n = 0 === t ? this : x(this.get().reverse());return y(n, e, t, "parentNode");
      };
    }), o(["append", "prepend"], function (t, n) {
      x.fn[n] = function (n) {
        var i,
            a = this.length > 1;if (u(n)) {
          var s = e.createElement("div");s.innerHTML = n, i = h.call(s.childNodes);
        } else i = x(n).get();return 1 === t && i.reverse(), this.each(function (e, n) {
          o(i, function (i, o) {
            a && e > 0 && (o = o.cloneNode(!0)), 0 === t ? n.appendChild(o) : n.insertBefore(o, n.childNodes[0]);
          });
        });
      };
    }), o(["insertBefore", "insertAfter"], function (t, e) {
      x.fn[e] = function (e) {
        var n = x(e);return this.each(function (e, i) {
          n.each(function (e, o) {
            o.parentNode.insertBefore(1 === n.length ? i : i.cloneNode(!0), 0 === t ? o : o.nextSibling);
          });
        });
      };
    }), o({ appendTo: "append", prependTo: "prepend", before: "insertBefore", after: "insertAfter", replaceAll: "replaceWith" }, function (t, e) {
      x.fn[t] = function (t) {
        return x(t)[e](this), this;
      };
    }), function () {
      var t = "mduiElementDataStorage";x.extend({ data: function data(e, i, a) {
          var s = {};if (a !== n) s[i] = a;else {
            if (!l(i)) {
              if (i === n) {
                var r = {};return o(e.attributes, function (t, e) {
                  var n = e.name;if (0 === n.indexOf("data-")) {
                    var i = n.slice(5).replace(/-./g, function (t) {
                      return t.charAt(1).toUpperCase();
                    });r[i] = e.value;
                  }
                }), e[t] && o(e[t], function (t, e) {
                  r[t] = e;
                }), r;
              }if (e[t] && i in e[t]) return e[t][i];var c = e.getAttribute("data-" + i);return c || n;
            }s = i;
          }e[t] || (e[t] = {}), o(s, function (n, i) {
            e[t][n] = i;
          });
        }, removeData: function removeData(e, n) {
          e[t] && e[t][n] && (e[t][n] = null, delete e.mduiElementDataStorage[n]);
        } }), x.fn.extend({ data: function data(t, e) {
          return e === n ? l(t) ? this.each(function (e, n) {
            x.data(n, t);
          }) : this[0] ? x.data(this[0], t) : n : this.each(function (n, i) {
            x.data(i, t, e);
          });
        }, removeData: function removeData(t) {
          return this.each(function (e, n) {
            x.removeData(n, t);
          });
        } });
    }(), function () {
      function i(t, e, n, i) {
        (e || "").split(" ").forEach(function (e) {
          (function (t, e, n, i) {
            return (s[a(t)] || []).filter(function (t) {
              return t && (!e || t.e === e) && (!n || t.fn.toString() === n.toString()) && (!i || t.sel === i);
            });
          })(t, e, n, i).forEach(function (e) {
            delete s[a(t)][e.i], t.removeEventListener(e.e, e.proxy, !1);
          });
        });
      }function a(t) {
        return t._elementId || (t._elementId = r++);
      }var s = {},
          r = 1,
          c = function c() {
        return !1;
      };x.fn.extend({ ready: function ready(t) {
          return (/complete|loaded|interactive/.test(e.readyState) && e.body ? t(x) : e.addEventListener("DOMContentLoaded", function () {
              t(x);
            }, !1), this
          );
        }, on: function on(t, e, i, _r, f) {
          var h = this;if (t && !u(t)) return o(t, function (t, n) {
            h.on(t, e, i, n);
          }), h;if (u(e) || d(_r) || !1 === _r || (_r = i, i = e, e = n), (d(i) || !1 === i) && (_r = i, i = n), !1 === _r && (_r = c), 1 === f) {
            var p = _r;_r = function r() {
              return h.off(t, e, _r), p.apply(this, arguments);
            };
          }return this.each(function () {
            !function (t, e, i, o, r) {
              var c = a(t);s[c] || (s[c] = []);var d = !1;l(o) && o.useCapture && (d = !0), e.split(" ").forEach(function (e) {
                var a = { e: e, fn: i, sel: r, i: s[c].length },
                    u = function u(t, e) {
                  !1 === i.apply(e, t._detail === n ? [t] : [t].concat(t._detail)) && (t.preventDefault(), t.stopPropagation());
                },
                    l = a.proxy = function (e) {
                  e._data = o, r ? x(t).find(r).get().reverse().forEach(function (t) {
                    (t === e.target || x.contains(t, e.target)) && u(e, t);
                  }) : u(e, t);
                };s[c].push(a), t.addEventListener(a.e, l, d);
              });
            }(this, t, _r, i, e);
          });
        }, one: function one(t, e, n, i) {
          var a = this;return u(t) ? t.split(" ").forEach(function (t) {
            a.on(t, e, n, i, 1);
          }) : o(t, function (t, i) {
            t.split(" ").forEach(function (t) {
              a.on(t, e, n, i, 1);
            });
          }), this;
        }, off: function off(t, e, a) {
          var s = this;return t && !u(t) ? (o(t, function (t, n) {
            s.off(t, e, n);
          }), s) : (u(e) || d(a) || !1 === a || (a = e, e = n), !1 === a && (a = c), s.each(function () {
            i(this, t, a, e);
          }));
        }, trigger: function trigger(n, i) {
          if (u(n)) {
            var o;if (["click", "mousedown", "mouseup", "mousemove"].indexOf(n) > -1) try {
              o = new MouseEvent(n, { bubbles: !0, cancelable: !0 });
            } catch (i) {
              (o = e.createEvent("MouseEvent")).initMouseEvent(n, !0, !0, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
            } else try {
              o = new CustomEvent(n, { detail: i, bubbles: !0, cancelable: !0 });
            } catch (t) {
              (o = e.createEvent("CustomEvent")).initCustomEvent(n, !0, !0, i);
            }return o._detail = i, this.each(function () {
              this.dispatchEvent(o);
            });
          }
        } });
    }(), function () {
      var i = {},
          a = 0,
          s = { ajaxStart: "start.mdui.ajax", ajaxSuccess: "success.mdui.ajax", ajaxError: "error.mdui.ajax", ajaxComplete: "complete.mdui.ajax" },
          r = function r(t) {
        return ["GET", "HEAD"].indexOf(t) >= 0;
      },
          c = function c(t, e) {
        return (t + "&" + e).replace(/[&?]{1,2}/, "?");
      };x.extend({ ajaxSetup: function ajaxSetup(t) {
          x.extend(i, t || {});
        }, ajax: function ajax(l) {
          function f(t, n) {
            l.global && x(e).trigger(t, n);
          }function h(t) {
            var e,
                n,
                i = arguments;t && (t in g && (e = g[t](i[1], i[2], i[3], i[4])), l[t] && (n = l[t](i[1], i[2], i[3], i[4])), "beforeSend" !== t || !1 !== e && !1 !== n || (v = !0));
          }var p = { method: "GET", data: !1, processData: !0, async: !0, cache: !0, username: "", password: "", headers: {}, xhrFields: {}, statusCode: {}, dataType: "text", jsonp: "callback", jsonpCallback: function jsonpCallback() {
              return "mduijsonp_" + Date.now() + "_" + (a += 1);
            }, contentType: "application/x-www-form-urlencoded", timeout: 0, global: !0 },
              m = ["beforeSend", "success", "error", "statusCode", "complete"],
              v = !1,
              g = i,
              b = {};o(g, function (t, e) {
            m.indexOf(t) < 0 && (p[t] = e);
          });var y = (l = x.extend({}, p, l)).method = l.method.toUpperCase();l.url || (l.url = t.location.toString());var $;if ($ = (r(y) || l.processData) && l.data && [ArrayBuffer, Blob, Document, FormData].indexOf(l.data.constructor) < 0 ? u(l.data) ? l.data : x.param(l.data) : l.data, r(y) && $ && (l.url = c(l.url, $), $ = null), "jsonp" === l.dataType) {
            var w = d(l.jsonpCallback) ? l.jsonpCallback() : l.jsonpCallback,
                C = c(l.url, l.jsonp + "=" + w);if (b.options = l, f(s.ajaxStart, b), h("beforeSend", null), v) return;var k,
                O = e.createElement("script");return O.type = "text/javascript", O.onerror = function () {
              k && clearTimeout(k), f(s.ajaxError, b), h("error", null, "scripterror"), f(s.ajaxComplete, b), h("complete", null, "scripterror");
            }, O.src = C, t[w] = function (e) {
              k && clearTimeout(k), b.data = e, f(s.ajaxSuccess, b), h("success", e, "success", null), x(O).remove(), O = null, delete t[w];
            }, x("head").append(O), void (l.timeout > 0 && (k = setTimeout(function () {
              x(O).remove(), O = null, f(s.ajaxError, b), h("error", null, "timeout");
            }, l.timeout)));
          }r(y) && !l.cache && (l.url = c(l.url, "_=" + Date.now()));var T = new XMLHttpRequest();T.open(y, l.url, l.async, l.username, l.password), ($ && !r(y) && !1 !== l.contentType || l.contentType) && T.setRequestHeader("Content-Type", l.contentType), "json" === l.dataType && T.setRequestHeader("Accept", "application/json, text/javascript"), l.headers && o(l.headers, function (t, e) {
            T.setRequestHeader(t, e);
          }), l.crossDomain === n && (l.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(l.url) && RegExp.$2 !== t.location.host), l.crossDomain || T.setRequestHeader("X-Requested-With", "XMLHttpRequest"), l.xhrFields && o(l.xhrFields, function (t, e) {
            T[t] = e;
          }), b.xhr = T, b.options = l;var E;return T.onload = function () {
            E && clearTimeout(E);var t,
                e = T.status >= 200 && T.status < 300 || 0 === T.status;if (e) {
              t = 204 === T.status || "HEAD" === y ? "nocontent" : 304 === T.status ? "notmodified" : "success";var n;if ("json" === l.dataType) {
                try {
                  b.data = n = JSON.parse(T.responseText);
                } catch (e) {
                  t = "parsererror", f(s.ajaxError, b), h("error", T, t);
                }"parsererror" !== t && (f(s.ajaxSuccess, b), h("success", n, t, T));
              } else b.data = n = "text" === T.responseType || "" === T.responseType ? T.responseText : T.response, f(s.ajaxSuccess, b), h("success", n, t, T);
            } else t = "error", f(s.ajaxError, b), h("error", T, t);o([g.statusCode, l.statusCode], function (i, o) {
              o && o[T.status] && (e ? o[T.status](n, t, T) : o[T.status](T, t));
            }), f(s.ajaxComplete, b), h("complete", T, t);
          }, T.onerror = function () {
            E && clearTimeout(E), f(s.ajaxError, b), h("error", T, T.statusText), f(s.ajaxComplete, b), h("complete", T, "error");
          }, T.onabort = function () {
            var t = "abort";E && (t = "timeout", clearTimeout(E)), f(s.ajaxError, b), h("error", T, t), f(s.ajaxComplete, b), h("complete", T, t);
          }, f(s.ajaxStart, b), h("beforeSend", T), v ? T : (l.timeout > 0 && (E = setTimeout(function () {
            T.abort();
          }, l.timeout)), T.send($), T);
        } }), o(s, function (t, e) {
        x.fn[t] = function (t) {
          return this.on(e, function (e, n) {
            t(e, n.xhr, n.options, n.data);
          });
        };
      });
    }(), x;
  }(window, document),
      n = e(document),
      i = e(window),
      o = {};!function () {
    var t = [];o.queue = function (e, n) {
      if (void 0 === t[e] && (t[e] = []), void 0 === n) return t[e];t[e].push(n);
    }, o.dequeue = function (e) {
      void 0 !== t[e] && t[e].length && t[e].shift()();
    };
  }();var a = { touches: 0, isAllow: function isAllow(t) {
      var e = !0;return a.touches && ["mousedown", "mouseup", "mousemove", "click", "mouseover", "mouseout", "mouseenter", "mouseleave"].indexOf(t.type) > -1 && (e = !1), e;
    }, register: function register(t) {
      "touchstart" === t.type ? a.touches += 1 : ["touchmove", "touchend", "touchcancel"].indexOf(t.type) > -1 && setTimeout(function () {
        a.touches && (a.touches -= 1);
      }, 500);
    }, start: "touchstart mousedown", move: "touchmove mousemove", end: "touchend mouseup", cancel: "touchcancel mouseleave", unlock: "touchend touchmove touchcancel" };e(function () {
    setTimeout(function () {
      e("body").addClass("mdui-loaded");
    }, 0);
  });var s = function s(t) {
    var e = {};if (null === t || !t) return e;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) return t;var n = t.indexOf("{");try {
      e = new Function("", "var json = " + t.substr(n) + "; return JSON.parse(JSON.stringify(json));")();
    } catch (t) {}return e;
  },
      r = function r(t, n, i, o, a) {
    a || (a = {}), a.inst = i;var s = t + ".mdui." + n;"undefined" != typeof jQuery && jQuery(o).trigger(s, a), e(o).trigger(s, a);
  };e.fn.extend({ reflow: function reflow() {
      return this.each(function () {
        return this.clientLeft;
      });
    }, transition: function transition(t) {
      return "string" != typeof t && (t += "ms"), this.each(function () {
        this.style.webkitTransitionDuration = t, this.style.transitionDuration = t;
      });
    }, transitionEnd: function transitionEnd(t) {
      function e(a) {
        if (a.target === this) for (t.call(this, a), n = 0; n < i.length; n++) {
          o.off(i[n], e);
        }
      }var n,
          i = ["webkitTransitionEnd", "transitionend"],
          o = this;if (t) for (n = 0; n < i.length; n++) {
        o.on(i[n], e);
      }return this;
    }, transformOrigin: function transformOrigin(t) {
      return this.each(function () {
        this.style.webkitTransformOrigin = t, this.style.transformOrigin = t;
      });
    }, transform: function transform(t) {
      return this.each(function () {
        this.style.webkitTransform = t, this.style.transform = t;
      });
    } }), e.extend({ showOverlay: function showOverlay(t) {
      var n = e(".mdui-overlay");n.length ? (n.data("isDeleted", 0), void 0 !== t && n.css("z-index", t)) : (void 0 === t && (t = 2e3), n = e('<div class="mdui-overlay">').appendTo(document.body).reflow().css("z-index", t));var i = n.data("overlay-level") || 0;return n.data("overlay-level", ++i).addClass("mdui-overlay-show");
    }, hideOverlay: function hideOverlay(t) {
      var n = e(".mdui-overlay");if (n.length) {
        var i = t ? 1 : n.data("overlay-level");i > 1 ? n.data("overlay-level", --i) : n.data("overlay-level", 0).removeClass("mdui-overlay-show").data("isDeleted", 1).transitionEnd(function () {
          n.data("isDeleted") && n.remove();
        });
      }
    }, lockScreen: function lockScreen() {
      var t = e("body"),
          n = t.width();t.addClass("mdui-locked").width(n);var i = t.data("lockscreen-level") || 0;t.data("lockscreen-level", ++i);
    }, unlockScreen: function unlockScreen(t) {
      var n = e("body"),
          i = t ? 1 : n.data("lockscreen-level");i > 1 ? n.data("lockscreen-level", --i) : n.data("lockscreen-level", 0).removeClass("mdui-locked").width("");
    }, throttle: function throttle(t, e) {
      var n = null;return (!e || e < 16) && (e = 16), function () {
        var i = this,
            o = arguments;null === n && (n = setTimeout(function () {
          t.apply(i, o), n = null;
        }, e));
      };
    } }), function () {
    var t = {};e.extend({ guid: function guid(e) {
        function n() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }if (void 0 !== e && void 0 !== t[e]) return t[e];var i = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n();return void 0 !== e && (t[e] = i), i;
      } });
  }(), function () {
    function n(t, n, i, o, a) {
      var s = e(i),
          r = s.data("mdui.mutation");r || (r = [], s.data("mdui.mutation", r)), -1 === r.indexOf(t) && (r.push(t), n.call(i, o, a));
    }var i = {};e.fn.extend({ mutation: function mutation() {
        return this.each(function (t, o) {
          var a = e(this);e.each(i, function (e, i) {
            a.is(e) && n(e, i, a[0], t, o), a.find(e).each(function (t, o) {
              n(e, i, this, t, o);
            });
          });
        });
      } }), t.mutation = function (t, o) {
      "string" == typeof t && "function" == typeof o ? (i[t] = o, e(t).each(function (e, i) {
        n(t, o, this, e, i);
      })) : e(document).mutation();
    };
  }(), t.Headroom = function () {
    function t(t, i) {
      if (this.$headroom = e(t).eq(0), this.$headroom.length) {
        var o = this.$headroom.data("mdui.headroom");if (o) return o;this.options = e.extend({}, n, i || {});var a = this.options.tolerance;a !== Object(a) && (this.options.tolerance = { down: a, up: a }), this._init();
      }
    }var n = { tolerance: 5, offset: 0, initialClass: "mdui-headroom", pinnedClass: "mdui-headroom-pinned-top", unpinnedClass: "mdui-headroom-unpinned-top" };t.prototype._init = function () {
      this.state = "pinned", this.$headroom.addClass(this.options.initialClass).removeClass(this.options.pinnedClass + " " + this.options.unpinnedClass), this.inited = !1, this.lastScrollY = 0, this._attachEvent();
    }, t.prototype._attachEvent = function () {
      var t = this;t.inited || (t.lastScrollY = window.pageYOffset, t.inited = !0, i.on("scroll", function () {
        t._scroll();
      }));
    }, t.prototype._scroll = function () {
      var t = this;t.rafId = window.requestAnimationFrame(function () {
        var e = window.pageYOffset,
            n = e > t.lastScrollY ? "down" : "up",
            i = Math.abs(e - t.lastScrollY) >= t.options.tolerance[n];e > t.lastScrollY && e >= t.options.offset && i ? t.unpin() : (e < t.lastScrollY && i || e <= t.options.offset) && t.pin(), t.lastScrollY = e;
      });
    };var o = function o(t) {
      "pinning" === t.state && (t.state = "pinned", r("pinned", "headroom", t, t.$headroom)), "unpinning" === t.state && (t.state = "unpinned", r("unpinned", "headroom", t, t.$headroom));
    };return t.prototype.pin = function () {
      var t = this;"pinning" !== t.state && "pinned" !== t.state && t.$headroom.hasClass(t.options.initialClass) && (r("pin", "headroom", t, t.$headroom), t.state = "pinning", t.$headroom.removeClass(t.options.unpinnedClass).addClass(t.options.pinnedClass).transitionEnd(function () {
        o(t);
      }));
    }, t.prototype.unpin = function () {
      var t = this;"unpinning" !== t.state && "unpinned" !== t.state && t.$headroom.hasClass(t.options.initialClass) && (r("unpin", "headroom", t, t.$headroom), t.state = "unpinning", t.$headroom.removeClass(t.options.pinnedClass).addClass(t.options.unpinnedClass).transitionEnd(function () {
        o(t);
      }));
    }, t.prototype.enable = function () {
      this.inited || this._init();
    }, t.prototype.disable = function () {
      var t = this;t.inited && (t.inited = !1, t.$headroom.removeClass([t.options.initialClass, t.options.pinnedClass, t.options.unpinnedClass].join(" ")), i.off("scroll", function () {
        t._scroll();
      }), window.cancelAnimationFrame(t.rafId));
    }, t.prototype.getState = function () {
      return this.state;
    }, t;
  }(), e(function () {
    t.mutation("[mdui-headroom]", function () {
      var n = e(this),
          i = s(n.attr("mdui-headroom")),
          o = n.data("mdui.headroom");o || (o = new t.Headroom(n, i), n.data("mdui.headroom", o));
    });
  });var c = function () {
    function t(t, i, o) {
      var a = this;a.ns = o;var s = "mdui-" + a.ns + "-item";if (a.class_item = s, a.class_item_open = s + "-open", a.class_header = s + "-header", a.class_body = s + "-body", a.$collapse = e(t).eq(0), a.$collapse.length) {
        var r = a.$collapse.data("mdui." + a.ns);if (r) return r;a.options = e.extend({}, n, i || {}), a.$collapse.on("click", "." + a.class_header, function () {
          var t = e(this).parent("." + a.class_item);a.$collapse.children(t).length && a.toggle(t);
        }), a.$collapse.on("click", "[mdui-" + a.ns + "-item-close]", function () {
          var t = e(this).parents("." + a.class_item).eq(0);a._isOpen(t) && a.close(t);
        });
      }
    }var n = { accordion: !1 };t.prototype._isOpen = function (t) {
      return t.hasClass(this.class_item_open);
    }, t.prototype._getItem = function (t) {
      return parseInt(t) === t ? this.$collapse.children("." + this.class_item).eq(t) : e(t).eq(0);
    };var i = function i(t, e, n) {
      t._isOpen(n) ? (e.transition(0).height("auto").reflow().transition(""), r("opened", t.ns, t, n[0])) : (e.height(""), r("closed", t.ns, t, n[0]));
    };return t.prototype.open = function (t) {
      var n = this,
          o = n._getItem(t);if (!n._isOpen(o)) {
        n.options.accordion && n.$collapse.children("." + n.class_item_open).each(function () {
          var t = e(this);t !== o && n.close(t);
        });var a = o.children("." + n.class_body);a.height(a[0].scrollHeight).transitionEnd(function () {
          i(n, a, o);
        }), r("open", n.ns, n, o[0]), o.addClass(n.class_item_open);
      }
    }, t.prototype.close = function (t) {
      var e = this,
          n = e._getItem(t);if (e._isOpen(n)) {
        var o = n.children("." + e.class_body);r("close", e.ns, e, n[0]), n.removeClass(e.class_item_open), o.transition(0).height(o[0].scrollHeight).reflow().transition("").height("").transitionEnd(function () {
          i(e, o, n);
        });
      }
    }, t.prototype.toggle = function (t) {
      var e = this._getItem(t);this._isOpen(e) ? this.close(e) : this.open(e);
    }, t.prototype.openAll = function () {
      var t = this;t.$collapse.children("." + t.class_item).each(function () {
        var n = e(this);t._isOpen(n) || t.open(n);
      });
    }, t.prototype.closeAll = function () {
      var t = this;t.$collapse.children("." + t.class_item).each(function () {
        var n = e(this);t._isOpen(n) && t.close(n);
      });
    }, t;
  }();return t.Collapse = function () {
    return function (t, e) {
      return new c(t, e, "collapse");
    };
  }(), e(function () {
    t.mutation("[mdui-collapse]", function () {
      var n = e(this),
          i = n.data("mdui.collapse");if (!i) {
        var o = s(n.attr("mdui-collapse"));i = new t.Collapse(n, o), n.data("mdui.collapse", i);
      }
    });
  }), function () {
    function n(t) {
      this.$table = e(t).eq(0), this.$table.length && this.init();
    }var i = function i(t) {
      return "<" + t + ' class="mdui-table-cell-checkbox"><label class="mdui-checkbox"><input type="checkbox"/><i class="mdui-checkbox-icon"></i></label></' + t + ">";
    };n.prototype.init = function () {
      this.$thRow = this.$table.find("thead tr"), this.$tdRows = this.$table.find("tbody tr"), this.$tdCheckboxs = e(), this.selectable = this.$table.hasClass("mdui-table-selectable"), this.selectedRow = 0, this._updateThCheckbox(), this._updateTdCheckbox(), this._updateNumericCol();
    }, n.prototype._updateTdCheckbox = function () {
      var t = this;t.$tdRows.each(function () {
        var n = e(this);if (n.find(".mdui-table-cell-checkbox").remove(), t.selectable) {
          var o = e(i("td")).prependTo(n).find('input[type="checkbox"]');n.hasClass("mdui-table-row-selected") && (o[0].checked = !0, t.selectedRow++), t.$thCheckbox[0].checked = t.selectedRow === t.$tdRows.length, o.on("change", function () {
            o[0].checked ? (n.addClass("mdui-table-row-selected"), t.selectedRow++) : (n.removeClass("mdui-table-row-selected"), t.selectedRow--), t.$thCheckbox[0].checked = t.selectedRow === t.$tdRows.length;
          }), t.$tdCheckboxs = t.$tdCheckboxs.add(o);
        }
      });
    }, n.prototype._updateThCheckbox = function () {
      var t = this;t.$thRow.find(".mdui-table-cell-checkbox").remove(), t.selectable && (t.$thCheckbox = e(i("th")).prependTo(t.$thRow).find('input[type="checkbox"]').on("change", function () {
        var n = t.$thCheckbox[0].checked;t.selectedRow = n ? t.$tdRows.length : 0, t.$tdCheckboxs.each(function (t, e) {
          e.checked = n;
        }), t.$tdRows.each(function (t, i) {
          e(i)[n ? "addClass" : "removeClass"]("mdui-table-row-selected");
        });
      }));
    }, n.prototype._updateNumericCol = function () {
      var t,
          n,
          i = this;i.$thRow.find("th").each(function (o, a) {
        t = e(a), i.$tdRows.each(function () {
          n = e(this);var i = t.hasClass("mdui-table-col-numeric") ? "addClass" : "removeClass";n.find("td").eq(o)[i]("mdui-table-col-numeric");
        });
      });
    }, t.mutation(".mdui-table", function () {
      var t = e(this);t.data("mdui.table") || t.data("mdui.table", new n(t));
    }), t.updateTables = function () {
      e(arguments.length ? arguments[0] : ".mdui-table").each(function () {
        var t = e(this),
            i = t.data("mdui.table");i ? i.init() : t.data("mdui.table", new n(t));
      });
    };
  }(), function () {
    var t = { delay: 200, show: function show(t, n) {
        if (2 !== t.button) {
          var i,
              o = (i = "touches" in t && t.touches.length ? t.touches[0] : t).pageX,
              a = i.pageY,
              s = n.offset(),
              r = o - s.left,
              c = a - s.top,
              d = n.innerHeight(),
              u = n.innerWidth(),
              l = Math.max(Math.pow(Math.pow(d, 2) + Math.pow(u, 2), .5), 48),
              f = "translate3d(" + (u / 2 - r) + "px, " + (d / 2 - c) + "px, 0) scale(1)";e('<div class="mdui-ripple-wave" style="width: ' + l + "px; height: " + l + "px; margin-top:-" + l / 2 + "px; margin-left:-" + l / 2 + "px; left:" + r + "px; top:" + c + 'px;"></div>').data("translate", f).prependTo(n).reflow().transform(f);
        }
      }, hide: function hide(n, i) {
        var o = e(i || this);o.children(".mdui-ripple-wave").each(function () {
          !function (t) {
            if (t.length && !t.data("isRemoved")) {
              t.data("isRemoved", !0);var e = setTimeout(function () {
                t.remove();
              }, 400),
                  n = t.data("translate");t.addClass("mdui-ripple-wave-fill").transform(n.replace("scale(1)", "scale(1.01)")).transitionEnd(function () {
                clearTimeout(e), t.addClass("mdui-ripple-wave-out").transform(n.replace("scale(1)", "scale(1.01)")), e = setTimeout(function () {
                  t.remove();
                }, 700), setTimeout(function () {
                  t.transitionEnd(function () {
                    clearTimeout(e), t.remove();
                  });
                }, 0);
              });
            }
          }(e(this));
        }), o.off("touchmove touchend touchcancel mousemove mouseup mouseleave", t.hide);
      } };n.on(a.start, function (n) {
      if (a.isAllow(n) && (a.register(n), n.target !== document)) {
        var i,
            o = e(n.target);if ((i = o.hasClass("mdui-ripple") ? o : o.parents(".mdui-ripple").eq(0)).length) {
          if (i[0].disabled || null !== i.attr("disabled")) return;if ("touchstart" === n.type) {
            var s = !1,
                r = setTimeout(function () {
              r = null, t.show(n, i);
            }, t.delay),
                c = function c(e) {
              r && (clearTimeout(r), r = null, t.show(n, i)), s || (s = !0, t.hide(e, i));
            };i.on("touchmove", function (t) {
              r && (clearTimeout(r), r = null), c(t);
            }).on("touchend touchcancel", c);
          } else t.show(n, i), i.on("touchmove touchend touchcancel mousemove mouseup mouseleave", t.hide);
        }
      }
    }).on(a.unlock, a.register);
  }(), function () {
    var i = function i(t, e) {
      return !("object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) || null === t || void 0 === t[e] || !t[e]) && t[e];
    };n.on("input focus blur", ".mdui-textfield-input", { useCapture: !0 }, function (t) {
      var n = t.target,
          o = e(n),
          a = t.type,
          s = o.val(),
          r = i(t.detail, "reInit"),
          c = i(t.detail, "domLoadedEvent"),
          d = o.attr("type") || "";if (!(["checkbox", "button", "submit", "range", "radio", "image"].indexOf(d) >= 0)) {
        var u = o.parent(".mdui-textfield");if ("focus" === a && u.addClass("mdui-textfield-focus"), "blur" === a && u.removeClass("mdui-textfield-focus"), "blur" !== a && "input" !== a || u[s && "" !== s ? "addClass" : "removeClass"]("mdui-textfield-not-empty"), u[n.disabled ? "addClass" : "removeClass"]("mdui-textfield-disabled"), "input" !== a && "blur" !== a || c || !n.validity || u[n.validity.valid ? "removeClass" : "addClass"]("mdui-textfield-invalid-html5"), "textarea" === t.target.nodeName.toLowerCase()) {
          var l = o.val(),
              f = !1;"" === l.replace(/[\r\n]/g, "") && (o.val(" " + l), f = !0), o.height("");var h = o.height(),
              p = n.scrollHeight;p > h && o.height(p), f && o.val(l);
        }r && u.find(".mdui-textfield-counter").remove();var m = o.attr("maxlength");if (m) {
          (r || c) && e('<div class="mdui-textfield-counter"><span class="mdui-textfield-counter-inputed"></span> / ' + m + "</div>").appendTo(u);var v = s.length + s.split("\n").length - 1;u.find(".mdui-textfield-counter-inputed").text(v.toString());
        }(u.find(".mdui-textfield-helper").length || u.find(".mdui-textfield-error").length || m) && u.addClass("mdui-textfield-has-bottom");
      }
    }), n.on("click", ".mdui-textfield-expandable .mdui-textfield-icon", function () {
      e(this).parents(".mdui-textfield").addClass("mdui-textfield-expanded").find(".mdui-textfield-input")[0].focus();
    }), n.on("click", ".mdui-textfield-expanded .mdui-textfield-close", function () {
      e(this).parents(".mdui-textfield").removeClass("mdui-textfield-expanded").find(".mdui-textfield-input").val("");
    }), t.updateTextFields = function () {
      e(arguments.length ? arguments[0] : ".mdui-textfield").each(function () {
        e(this).find(".mdui-textfield-input").trigger("input", { reInit: !0 });
      });
    }, t.mutation(".mdui-textfield", function () {
      e(this).find(".mdui-textfield-input").trigger("input", { domLoadedEvent: !0 });
    });
  }(), function () {
    var i = function i(t) {
      var e = t.data(),
          n = e.$track,
          i = e.$fill,
          o = e.$thumb,
          a = e.$input,
          s = e.min,
          r = e.max,
          c = e.disabled,
          d = e.discrete,
          u = e.$thumbText,
          l = a.val(),
          f = (l - s) / (r - s) * 100;i.width(f + "%"), n.width(100 - f + "%"), c && (i.css("padding-right", "6px"), n.css("padding-left", "6px")), o.css("left", f + "%"), d && u.text(l), t[0 === parseFloat(f) ? "addClass" : "removeClass"]("mdui-slider-zero");
    },
        o = function o(t) {
      var n = e('<div class="mdui-slider-track"></div>'),
          o = e('<div class="mdui-slider-fill"></div>'),
          a = e('<div class="mdui-slider-thumb"></div>'),
          s = t.find('input[type="range"]'),
          r = s[0].disabled;t[r ? "addClass" : "removeClass"]("mdui-slider-disabled"), t.find(".mdui-slider-track").remove(), t.find(".mdui-slider-fill").remove(), t.find(".mdui-slider-thumb").remove(), t.append(n).append(o).append(a);var c,
          d = t.hasClass("mdui-slider-discrete");d && (c = e("<span></span>"), a.empty().append(c)), t.data({ $track: n, $fill: o, $thumb: a, $input: s, min: s.attr("min"), max: s.attr("max"), disabled: r, discrete: d, $thumbText: c }), i(t);
    },
        s = '.mdui-slider input[type="range"]';n.on("input change", s, function () {
      var t = e(this).parent();i(t);
    }).on(a.start, s, function (t) {
      if (a.isAllow(t) && (a.register(t), !this.disabled)) {
        e(this).parent().addClass("mdui-slider-focus");
      }
    }).on(a.end, s, function (t) {
      if (a.isAllow(t) && !this.disabled) {
        e(this).parent().removeClass("mdui-slider-focus");
      }
    }).on(a.unlock, s, a.register), t.mutation(".mdui-slider", function () {
      o(e(this));
    }), t.updateSliders = function () {
      e(arguments.length ? arguments[0] : ".mdui-slider").each(function () {
        o(e(this));
      });
    };
  }(), t.Fab = function () {
    function t(t, o) {
      var s = this;if (s.$fab = e(t).eq(0), s.$fab.length) {
        var r = s.$fab.data("mdui.fab");if (r) return r;s.options = e.extend({}, i, o || {}), s.state = "closed", s.$btn = s.$fab.find(".mdui-fab"), s.$dial = s.$fab.find(".mdui-fab-dial"), s.$dialBtns = s.$dial.find(".mdui-fab"), "hover" === s.options.trigger && (s.$btn.on("touchstart mouseenter", function () {
          s.open();
        }), s.$fab.on("mouseleave", function () {
          s.close();
        })), "click" === s.options.trigger && s.$btn.on(a.start, function () {
          s.open();
        }), n.on(a.start, function (t) {
          e(t.target).parents(".mdui-fab-wrapper").length || s.close();
        });
      }
    }var i = { trigger: "hover" };return t.prototype.open = function () {
      var t = this;"opening" !== t.state && "opened" !== t.state && (t.$dialBtns.each(function (e, n) {
        n.style["transition-delay"] = n.style["-webkit-transition-delay"] = 15 * (t.$dialBtns.length - e) + "ms";
      }), t.$dial.css("height", "auto").addClass("mdui-fab-dial-show"), t.$btn.find(".mdui-fab-opened").length && t.$btn.addClass("mdui-fab-opened"), t.state = "opening", r("open", "fab", t, t.$fab), t.$dialBtns.eq(0).transitionEnd(function () {
        t.$btn.hasClass("mdui-fab-opened") && (t.state = "opened", r("opened", "fab", t, t.$fab));
      }));
    }, t.prototype.close = function () {
      var t = this;"closing" !== t.state && "closed" !== t.state && (t.$dialBtns.each(function (t, e) {
        e.style["transition-delay"] = e.style["-webkit-transition-delay"] = 15 * t + "ms";
      }), t.$dial.removeClass("mdui-fab-dial-show"), t.$btn.removeClass("mdui-fab-opened"), t.state = "closing", r("close", "fab", t, t.$fab), t.$dialBtns.eq(-1).transitionEnd(function () {
        t.$btn.hasClass("mdui-fab-opened") || (t.state = "closed", r("closed", "fab", t, t.$fab), t.$dial.css("height", 0));
      }));
    }, t.prototype.toggle = function () {
      "opening" === this.state || "opened" === this.state ? this.close() : "closing" !== this.state && "closed" !== this.state || this.open();
    }, t.prototype.getState = function () {
      return this.state;
    }, t.prototype.show = function () {
      this.$fab.removeClass("mdui-fab-hide");
    }, t.prototype.hide = function () {
      this.$fab.addClass("mdui-fab-hide");
    }, t;
  }(), e(function () {
    n.on("touchstart mousedown mouseover", "[mdui-fab]", function (n) {
      var i = e(this),
          o = i.data("mdui.fab");if (!o) {
        var a = s(i.attr("mdui-fab"));o = new t.Fab(i, a), i.data("mdui.fab", o);
      }
    });
  }), t.Select = function () {
    function t(t, i) {
      var a = this,
          s = a.$selectNative = e(t).eq(0);if (s.length) {
        var r = s.data("mdui.select");if (r) return r;s.hide(), a.options = e.extend({}, o, i || {}), a.uniqueID = e.guid(), a.state = "closed", a.handleUpdate(), n.on("click touchstart", function (t) {
          var n = e(t.target);"opening" !== a.state && "opened" !== a.state || n.is(a.$select) || e.contains(a.$select[0], n[0]) || a.close();
        });
      }
    }var o = { position: "auto", gutter: 16 };t.prototype.handleUpdate = function () {
      var t = this;"opening" !== t.state && "opened" !== t.state || t.close();var n = t.$selectNative;t.value = n.val(), t.text = "", t.$items = e(), n.find("option").each(function (n, i) {
        var o = { value: i.value, text: i.textContent, disabled: i.disabled, selected: t.value === i.value, index: n };t.value === o.value && (t.text = o.text, t.selectedIndex = n), t.$items = t.$items.add(e('<div class="mdui-select-menu-item mdui-ripple"' + (o.disabled ? " disabled" : "") + (o.selected ? " selected" : "") + ">" + o.text + "</div>").data(o));
      }), t.$selected = e('<span class="mdui-select-selected">' + t.text + "</span>"), t.$select = e('<div class="mdui-select mdui-select-position-' + t.options.position + '" style="' + t.$selectNative.attr("style") + '" id="' + t.uniqueID + '"></div>').show().append(t.$selected), t.$menu = e('<div class="mdui-select-menu"></div>').appendTo(t.$select).append(t.$items), e("#" + t.uniqueID).remove(), n.after(t.$select), t.size = t.$selectNative.attr("size"), t.size || (t.size = t.$items.length, t.size > 8 && (t.size = 8)), t.size < 2 && (t.size = 2), t.$items.on("click", function () {
        if ("closing" !== t.state) {
          var i = e(this);if (!i.data("disabled")) {
            var o = i.data();t.$selected.text(o.text), n.val(o.value), t.$items.removeAttr("selected"), i.attr("selected", ""), t.selectedIndex = o.index, t.value = o.value, t.text = o.text, n.trigger("change"), t.close();
          }
        }
      }), t.$select.on("click", function (n) {
        var i = e(n.target);i.is(".mdui-select-menu") || i.is(".mdui-select-menu-item") || t.toggle();
      });
    };var a = function a(t) {
      t.$select.removeClass("mdui-select-closing"), "opening" === t.state && (t.state = "opened", r("opened", "select", t, t.$selectNative), t.$menu.css("overflow-y", "auto")), "closing" === t.state && (t.state = "closed", r("closed", "select", t, t.$selectNative), t.$select.width(""), t.$menu.css({ "margin-top": "", height: "", width: "" }));
    };return t.prototype.open = function () {
      var t = this;"opening" !== t.state && "opened" !== t.state && (t.state = "opening", r("open", "select", t, t.$selectNative), function (t) {
        var e,
            n,
            o = i.height(),
            a = t.options.gutter,
            s = t.options.position,
            r = parseInt(t.$select.height()),
            c = t.$items.eq(0),
            d = parseInt(c.height()),
            u = parseInt(c.css("margin-top")),
            l = parseFloat(t.$select.width() + .01),
            f = d * t.size + 2 * u,
            h = t.$select[0].getBoundingClientRect().top;if ("auto" === s) {
          var p = o - 2 * a;f > p && (f = p), n = -(u + t.selectedIndex * d + (d - r) / 2);var m = -(u + (t.size - 1) * d + (d - r) / 2);n < m && (n = m);var v = h + n;v < a ? n = -(h - a) : v + f + a > o && (n = -(h + f + a - o)), e = t.selectedIndex * d + d / 2 + u + "px";
        } else "bottom" === s ? (n = r, e = "0px") : "top" === s && (n = -f - 1, e = "100%");t.$select.width(l), t.$menu.width(l).height(f).css({ "margin-top": n + "px", "transform-origin": "center " + e + " 0" });
      }(t), t.$select.addClass("mdui-select-open"), t.$menu.transitionEnd(function () {
        a(t);
      }));
    }, t.prototype.close = function () {
      var t = this;"closing" !== t.state && "closed" !== t.state && (t.state = "closing", r("close", "select", t, t.$selectNative), t.$menu.css("overflow-y", ""), t.$select.removeClass("mdui-select-open").addClass("mdui-select-closing"), t.$menu.transitionEnd(function () {
        a(t);
      }));
    }, t.prototype.toggle = function () {
      "opening" === this.state || "opened" === this.state ? this.close() : "closing" !== this.state && "closed" !== this.state || this.open();
    }, t;
  }(), e(function () {
    t.mutation("[mdui-select]", function () {
      var n = e(this),
          i = n.data("mdui.select");i || (i = new t.Select(n, s(n.attr("mdui-select"))), n.data("mdui.select", i));
    });
  }), e(function () {
    t.mutation(".mdui-appbar-scroll-hide", function () {
      var n = e(this);n.data("mdui.headroom", new t.Headroom(n));
    }), t.mutation(".mdui-appbar-scroll-toolbar-hide", function () {
      var n = e(this),
          i = new t.Headroom(n, { pinnedClass: "mdui-headroom-pinned-toolbar", unpinnedClass: "mdui-headroom-unpinned-toolbar" });n.data("mdui.headroom", i);
    });
  }), t.Tab = function () {
    function t(t, o) {
      var a = this;if (a.$tab = e(t).eq(0), a.$tab.length) {
        var s = a.$tab.data("mdui.tab");if (s) return s;a.options = e.extend({}, n, o || {}), a.$tabs = a.$tab.children("a"), a.$indicator = e('<div class="mdui-tab-indicator"></div>').appendTo(a.$tab), a.activeIndex = !1;var r = location.hash;r && a.$tabs.each(function (t, n) {
          if (e(n).attr("href") === r) return a.activeIndex = t, !1;
        }), !1 === a.activeIndex && a.$tabs.each(function (t, n) {
          if (e(n).hasClass("mdui-tab-active")) return a.activeIndex = t, !1;
        }), a.$tabs.length && !1 === a.activeIndex && (a.activeIndex = 0), a._setActive(), i.on("resize", e.throttle(function () {
          a._setIndicatorPosition();
        }, 100)), a.$tabs.each(function (t, e) {
          a._bindTabEvent(e);
        });
      }
    }var n = { trigger: "click", loop: !1 },
        o = function o(t) {
      return t[0].disabled || null !== t.attr("disabled");
    };return t.prototype._bindTabEvent = function (t) {
      var n = this,
          i = e(t),
          a = function a(e) {
        o(i) ? e.preventDefault() : (n.activeIndex = n.$tabs.index(t), n._setActive());
      };i.on("click", a), "hover" === n.options.trigger && i.on("mouseenter", a), i.on("click", function (t) {
        0 === i.attr("href").indexOf("#") && t.preventDefault();
      });
    }, t.prototype._setActive = function () {
      var t = this;t.$tabs.each(function (n, i) {
        var a = e(i),
            s = a.attr("href");n !== t.activeIndex || o(a) ? (a.removeClass("mdui-tab-active"), e(s).hide()) : (a.hasClass("mdui-tab-active") || (r("change", "tab", t, t.$tab, { index: t.activeIndex, id: s.substr(1) }), r("show", "tab", t, a), a.addClass("mdui-tab-active")), e(s).show(), t._setIndicatorPosition());
      });
    }, t.prototype._setIndicatorPosition = function () {
      var t, e;!1 !== this.activeIndex ? (t = this.$tabs.eq(this.activeIndex), o(t) || (e = t.offset(), this.$indicator.css({ left: e.left + this.$tab[0].scrollLeft - this.$tab[0].getBoundingClientRect().left + "px", width: t.width() + "px" }))) : this.$indicator.css({ left: 0, width: 0 });
    }, t.prototype.next = function () {
      !1 !== this.activeIndex && (this.$tabs.length > this.activeIndex + 1 ? this.activeIndex++ : this.options.loop && (this.activeIndex = 0), this._setActive());
    }, t.prototype.prev = function () {
      !1 !== this.activeIndex && (this.activeIndex > 0 ? this.activeIndex-- : this.options.loop && (this.activeIndex = this.$tabs.length - 1), this._setActive());
    }, t.prototype.show = function (t) {
      var e = this;!1 !== e.activeIndex && (parseInt(t) === t ? e.activeIndex = t : e.$tabs.each(function (n, i) {
        if (i.id === t) return e.activeIndex = n, !1;
      }), e._setActive());
    }, t.prototype.handleUpdate = function () {
      var t = this,
          e = t.$tabs,
          n = t.$tab.children("a"),
          i = e.get(),
          o = n.get();if (!n.length) return t.activeIndex = !1, t.$tabs = n, void t._setIndicatorPosition();n.each(function (e, n) {
        i.indexOf(n) < 0 && (t._bindTabEvent(n), !1 === t.activeIndex ? t.activeIndex = 0 : e <= t.activeIndex && t.activeIndex++);
      }), e.each(function (e, n) {
        o.indexOf(n) < 0 && (e < t.activeIndex ? t.activeIndex-- : e === t.activeIndex && (t.activeIndex = 0));
      }), t.$tabs = n, t._setActive();
    }, t;
  }(), e(function () {
    t.mutation("[mdui-tab]", function () {
      var n = e(this),
          i = n.data("mdui.tab");i || (i = new t.Tab(n, s(n.attr("mdui-tab"))), n.data("mdui.tab", i));
    });
  }), t.Drawer = function () {
    function t(t, s) {
      var r = this;if (r.$drawer = e(t).eq(0), r.$drawer.length) {
        var c = r.$drawer.data("mdui.drawer");if (c) return c;r.options = e.extend({}, n, s || {}), r.overlay = !1, r.position = r.$drawer.hasClass("mdui-drawer-right") ? "right" : "left", r.$drawer.hasClass("mdui-drawer-close") ? r.state = "closed" : r.$drawer.hasClass("mdui-drawer-open") ? r.state = "opened" : o() ? r.state = "opened" : r.state = "closed", i.on("resize", e.throttle(function () {
          o() ? (r.overlay && !r.options.overlay && (e.hideOverlay(), r.overlay = !1, e.unlockScreen()), r.$drawer.hasClass("mdui-drawer-close") || (r.state = "opened")) : r.overlay || "opened" !== r.state || (r.$drawer.hasClass("mdui-drawer-open") ? (e.showOverlay(), r.overlay = !0, e.lockScreen(), e(".mdui-overlay").one("click", function () {
            r.close();
          })) : r.state = "closed");
        }, 100)), r.$drawer.find("[mdui-drawer-close]").each(function () {
          e(this).on("click", function () {
            r.close();
          });
        }), a(r);
      }
    }var n = { overlay: !1, swipe: !1 },
        o = function o() {
      return i.width() >= 1024;
    },
        a = function a(t) {
      function n(e, n) {
        var i = "translate(" + -1 * ("right" === t.position ? -1 : 1) * e + "px, 0) !important;";t.$drawer.css("cssText", "transform:" + i + (n ? "transition: initial !important;" : ""));
      }function i() {
        t.$drawer.css({ transform: "", transition: "" });
      }function o() {
        return t.$drawer.width() + 10;
      }function a(t) {
        return Math.min(Math.max("closing" === h ? f - t : o() + f - t, 0), o());
      }function s(e) {
        u = e.touches[0].pageX, "right" === t.position && (u = m.width() - u), l = e.touches[0].pageY, "opened" !== t.state && (u > v || d !== s) || (p = !0, m.on({ touchmove: r, touchend: c, touchcancel: r }));
      }function r(i) {
        var o = i.touches[0].pageX;"right" === t.position && (o = m.width() - o);var s = i.touches[0].pageY;if (h) n(a(o), !0);else if (p) {
          var r = Math.abs(o - u),
              d = Math.abs(s - l);r > 8 && d <= 8 ? (f = o, h = "opened" === t.state ? "closing" : "opening", e.lockScreen(), n(a(o), !0)) : r <= 8 && d > 8 && c();
        }
      }function c(n) {
        if (h) {
          var s = n.changedTouches[0].pageX;"right" === t.position && (s = m.width() - s);var d = a(s) / o();p = !1;var u = h;h = null, "opening" === u ? d < .92 ? (i(), t.open()) : i() : d > .08 ? (i(), t.close()) : i(), e.unlockScreen();
        } else p = !1;m.off({ touchmove: r, touchend: c, touchcancel: r });
      }var d,
          u,
          l,
          f,
          h = !1,
          p = !1,
          m = e("body"),
          v = 24;t.options.swipe && (d || (m.on("touchstart", s), d = s));
    },
        s = function s(t) {
      t.$drawer.hasClass("mdui-drawer-open") ? (t.state = "opened", r("opened", "drawer", t, t.$drawer)) : (t.state = "closed", r("closed", "drawer", t, t.$drawer));
    };return t.prototype.open = function () {
      var t = this;"opening" !== t.state && "opened" !== t.state && (t.state = "opening", r("open", "drawer", t, t.$drawer), t.options.overlay || e("body").addClass("mdui-drawer-body-" + t.position), t.$drawer.removeClass("mdui-drawer-close").addClass("mdui-drawer-open").transitionEnd(function () {
        s(t);
      }), o() && !t.options.overlay || (t.overlay = !0, e.showOverlay().one("click", function () {
        t.close();
      }), e.lockScreen()));
    }, t.prototype.close = function () {
      var t = this;"closing" !== t.state && "closed" !== t.state && (t.state = "closing", r("close", "drawer", t, t.$drawer), t.options.overlay || e("body").removeClass("mdui-drawer-body-" + t.position), t.$drawer.addClass("mdui-drawer-close").removeClass("mdui-drawer-open").transitionEnd(function () {
        s(t);
      }), t.overlay && (e.hideOverlay(), t.overlay = !1, e.unlockScreen()));
    }, t.prototype.toggle = function () {
      "opening" === this.state || "opened" === this.state ? this.close() : "closing" !== this.state && "closed" !== this.state || this.open();
    }, t.prototype.getState = function () {
      return this.state;
    }, t;
  }(), e(function () {
    t.mutation("[mdui-drawer]", function () {
      var n = e(this),
          i = s(n.attr("mdui-drawer")),
          o = i.target;delete i.target;var a = e(o).eq(0),
          r = a.data("mdui.drawer");r || (r = new t.Drawer(a, i), a.data("mdui.drawer", r)), n.on("click", function () {
        r.toggle();
      });
    });
  }), t.Dialog = function () {
    function t(t, n) {
      var i = this;if (i.$dialog = e(t).eq(0), i.$dialog.length) {
        var o = i.$dialog.data("mdui.dialog");if (o) return o;e.contains(document.body, i.$dialog[0]) || (i.append = !0, e("body").append(i.$dialog)), i.options = e.extend({}, d, n || {}), i.state = "closed", i.$dialog.find("[mdui-dialog-cancel]").each(function () {
          e(this).on("click", function () {
            r("cancel", "dialog", i, i.$dialog), i.options.closeOnCancel && i.close();
          });
        }), i.$dialog.find("[mdui-dialog-confirm]").each(function () {
          e(this).on("click", function () {
            r("confirm", "dialog", i, i.$dialog), i.options.closeOnConfirm && i.close();
          });
        }), i.$dialog.find("[mdui-dialog-close]").each(function () {
          e(this).on("click", function () {
            i.close();
          });
        });
      }
    }var a,
        s,
        c,
        d = { history: !0, overlay: !0, modal: !1, closeOnEsc: !0, closeOnCancel: !0, closeOnConfirm: !0, destroyOnClosed: !1 },
        u = "__md_dialog",
        l = function l() {
      if (c) {
        var t = c.$dialog,
            e = t.children(".mdui-dialog-title"),
            n = t.children(".mdui-dialog-content"),
            o = t.children(".mdui-dialog-actions");t.height(""), n.height("");var a = t.height();t.css({ top: (i.height() - a) / 2 + "px", height: a + "px" }), n.height(a - (e.height() || 0) - (o.height() || 0));
      }
    },
        f = function f() {
      location.hash.substring(1).indexOf("&mdui-dialog") < 0 && c.close(!0);
    },
        h = function h(t) {
      e(t.target).hasClass("mdui-overlay") && c && c.close();
    },
        p = function p(t) {
      t.$dialog.hasClass("mdui-dialog-open") ? (t.state = "opened", r("opened", "dialog", t, t.$dialog)) : (t.state = "closed", r("closed", "dialog", t, t.$dialog), t.$dialog.hide(), 0 === o.queue(u).length && !c && s && (e.unlockScreen(), s = !1), i.off("resize", e.throttle(function () {
        l();
      }, 100)), t.options.destroyOnClosed && t.destroy());
    };return t.prototype._doOpen = function () {
      var t = this;if (c = t, s || (e.lockScreen(), s = !0), t.$dialog.show(), l(), i.on("resize", e.throttle(function () {
        l();
      }, 100)), t.state = "opening", r("open", "dialog", t, t.$dialog), t.$dialog.addClass("mdui-dialog-open").transitionEnd(function () {
        p(t);
      }), a || (a = e.showOverlay(5100)), a[t.options.modal ? "off" : "on"]("click", h).css("opacity", t.options.overlay ? "" : 0), t.options.history) {
        var n = location.hash.substring(1);n.indexOf("&mdui-dialog") > -1 && (n = n.replace(/&mdui-dialog/g, "")), location.hash = n + "&mdui-dialog", i.on("hashchange", f);
      }
    }, t.prototype.open = function () {
      var t = this;"opening" !== t.state && "opened" !== t.state && (c && ("opening" === c.state || "opened" === c.state) || o.queue(u).length ? o.queue(u, function () {
        t._doOpen();
      }) : t._doOpen());
    }, t.prototype.close = function () {
      var t = this;setTimeout(function () {
        "closing" !== t.state && "closed" !== t.state && (c = null, t.state = "closing", r("close", "dialog", t, t.$dialog), 0 === o.queue(u).length && a && (e.hideOverlay(), a = null), t.$dialog.removeClass("mdui-dialog-open").transitionEnd(function () {
          p(t);
        }), t.options.history && 0 === o.queue(u).length && (arguments[0] || window.history.back(), i.off("hashchange", f)), setTimeout(function () {
          o.dequeue(u);
        }, 100));
      }, 0);
    }, t.prototype.toggle = function () {
      "opening" === this.state || "opened" === this.state ? this.close() : "closing" !== this.state && "closed" !== this.state || this.open();
    }, t.prototype.getState = function () {
      return this.state;
    }, t.prototype.destroy = function () {
      this.append && this.$dialog.remove(), this.$dialog.removeData("mdui.dialog"), 0 !== o.queue(u).length || c || (a && (e.hideOverlay(), a = null), s && (e.unlockScreen(), s = !1));
    }, t.prototype.handleUpdate = function () {
      l();
    }, n.on("keydown", function (t) {
      c && c.options.closeOnEsc && "opened" === c.state && 27 === t.keyCode && c.close();
    }), t;
  }(), e(function () {
    n.on("click", "[mdui-dialog]", function () {
      var n = e(this),
          i = s(n.attr("mdui-dialog")),
          o = i.target;delete i.target;var a = e(o).eq(0),
          r = a.data("mdui.dialog");r || (r = new t.Dialog(a, i), a.data("mdui.dialog", r)), r.open();
    });
  }), t.dialog = function (n) {
    var i = { text: "", bold: !1, close: !0, onClick: function onClick(t) {} };n = e.extend({}, { title: "", content: "", buttons: [], stackedButtons: !1, cssClass: "", history: !0, overlay: !0, modal: !1, closeOnEsc: !0, destroyOnClosed: !0, onOpen: function onOpen() {}, onOpened: function onOpened() {}, onClose: function onClose() {}, onClosed: function onClosed() {} }, n || {}), e.each(n.buttons, function (t, o) {
      n.buttons[t] = e.extend({}, i, o);
    });var o = "";n.buttons.length && (o = '<div class="mdui-dialog-actions ' + (n.stackedButtons ? "mdui-dialog-actions-stacked" : "") + '">', e.each(n.buttons, function (t, e) {
      o += '<a href="javascript:void(0)" class="mdui-btn mdui-ripple mdui-text-color-primary ' + (e.bold ? "mdui-btn-bold" : "") + '">' + e.text + "</a>";
    }), o += "</div>");var a = '<div class="mdui-dialog ' + n.cssClass + '">' + (n.title ? '<div class="mdui-dialog-title">' + n.title + "</div>" : "") + (n.content ? '<div class="mdui-dialog-content">' + n.content + "</div>" : "") + o + "</div>",
        s = new t.Dialog(a, { history: n.history, overlay: n.overlay, modal: n.modal, closeOnEsc: n.closeOnEsc, destroyOnClosed: n.destroyOnClosed });return n.buttons.length && s.$dialog.find(".mdui-dialog-actions .mdui-btn").each(function (t, i) {
      e(i).on("click", function () {
        "function" == typeof n.buttons[t].onClick && n.buttons[t].onClick(s), n.buttons[t].close && s.close();
      });
    }), "function" == typeof n.onOpen && s.$dialog.on("open.mdui.dialog", function () {
      n.onOpen(s);
    }).on("opened.mdui.dialog", function () {
      n.onOpened(s);
    }).on("close.mdui.dialog", function () {
      n.onClose(s);
    }).on("closed.mdui.dialog", function () {
      n.onClosed(s);
    }), s.open(), s;
  }, t.alert = function (n, i, o, a) {
    "function" == typeof i && (i = "", o = arguments[1], a = arguments[2]), void 0 === o && (o = function o() {}), void 0 === a && (a = {});return a = e.extend({}, { confirmText: "ok", history: !0, modal: !1, closeOnEsc: !0 }, a), t.dialog({ title: i, content: n, buttons: [{ text: a.confirmText, bold: !1, close: !0, onClick: o }], cssClass: "mdui-dialog-alert", history: a.history, modal: a.modal, closeOnEsc: a.closeOnEsc });
  }, t.confirm = function (n, i, o, a, s) {
    "function" == typeof i && (i = "", o = arguments[1], a = arguments[2], s = arguments[3]), void 0 === o && (o = function o() {}), void 0 === a && (a = function a() {}), void 0 === s && (s = {});return s = e.extend({}, { confirmText: "ok", cancelText: "cancel", history: !0, modal: !1, closeOnEsc: !0 }, s), t.dialog({ title: i, content: n, buttons: [{ text: s.cancelText, bold: !1, close: !0, onClick: a }, { text: s.confirmText, bold: !1, close: !0, onClick: o }], cssClass: "mdui-dialog-confirm", history: s.history, modal: s.modal, closeOnEsc: s.closeOnEsc });
  }, t.prompt = function (n, i, o, a, s) {
    "function" == typeof i && (i = "", o = arguments[1], a = arguments[2], s = arguments[3]), void 0 === o && (o = function o() {}), void 0 === a && (a = function a() {}), void 0 === s && (s = {});s = e.extend({}, { confirmText: "ok", cancelText: "cancel", history: !0, modal: !1, closeOnEsc: !0, type: "text", maxlength: "", defaultValue: "", confirmOnEnter: !1 }, s);var r = '<div class="mdui-textfield">' + (n ? '<label class="mdui-textfield-label">' + n + "</label>" : "") + ("text" === s.type ? '<input class="mdui-textfield-input" type="text" value="' + s.defaultValue + '" ' + (s.maxlength ? 'maxlength="' + s.maxlength + '"' : "") + "/>" : "") + ("textarea" === s.type ? '<textarea class="mdui-textfield-input" ' + (s.maxlength ? 'maxlength="' + s.maxlength + '"' : "") + ">" + s.defaultValue + "</textarea>" : "") + "</div>";return t.dialog({ title: i, content: r, buttons: [{ text: s.cancelText, bold: !1, close: !0, onClick: function onClick(t) {
          var e = t.$dialog.find(".mdui-textfield-input").val();a(e, t);
        } }, { text: s.confirmText, bold: !1, close: !0, onClick: function onClick(t) {
          var e = t.$dialog.find(".mdui-textfield-input").val();o(e, t);
        } }], cssClass: "mdui-dialog-prompt", history: s.history, modal: s.modal, closeOnEsc: s.closeOnEsc, onOpen: function onOpen(e) {
        var n = e.$dialog.find(".mdui-textfield-input");t.updateTextFields(n), n[0].focus(), "text" === s.type && !0 === s.confirmOnEnter && n.on("keydown", function (t) {
          if (13 === t.keyCode) {
            var n = e.$dialog.find(".mdui-textfield-input").val();o(n, e), e.close();
          }
        }), "textarea" === s.type && n.on("input", function () {
          e.handleUpdate();
        }), s.maxlength && e.handleUpdate();
      } });
  }, t.Tooltip = function () {
    function t(t, i) {
      var o = this;if (o.$target = e(t).eq(0), o.$target.length) {
        var s = o.$target.data("mdui.tooltip");if (s) return s;o.options = e.extend({}, n, i || {}), o.state = "closed", o.$tooltip = e('<div class="mdui-tooltip" id="' + e.guid() + '">' + o.options.content + "</div>").appendTo(document.body), o.$target.on("touchstart mouseenter", function (t) {
          this.disabled || a.isAllow(t) && (a.register(t), o.open());
        }).on("touchend mouseleave", function (t) {
          this.disabled || a.isAllow(t) && o.close();
        }).on(a.unlock, function (t) {
          this.disabled || a.register(t);
        });
      }
    }var n = { position: "auto", delay: 0, content: "" },
        o = function o() {
      return i.width() > 1024;
    },
        c = function c(t) {
      t.$tooltip.hasClass("mdui-tooltip-open") ? (t.state = "opened", r("opened", "tooltip", t, t.$target)) : (t.state = "closed", r("closed", "tooltip", t, t.$target));
    };return t.prototype._doOpen = function () {
      var t = this;t.state = "opening", r("open", "tooltip", t, t.$target), t.$tooltip.addClass("mdui-tooltip-open").transitionEnd(function () {
        c(t);
      });
    }, t.prototype.open = function (t) {
      var n = this;if ("opening" !== n.state && "opened" !== n.state) {
        var a = e.extend({}, n.options);e.extend(n.options, s(n.$target.attr("mdui-tooltip"))), t && e.extend(n.options, t), a.content !== n.options.content && n.$tooltip.html(n.options.content), function (t) {
          var e,
              n,
              a,
              s = t.$target[0].getBoundingClientRect(),
              r = o() ? 14 : 24,
              c = t.$tooltip[0].offsetWidth,
              d = t.$tooltip[0].offsetHeight;switch (a = t.options.position, -1 === ["bottom", "top", "left", "right"].indexOf(a) && (a = s.top + s.height + r + d + 2 < i.height() ? "bottom" : r + d + 2 < s.top ? "top" : r + c + 2 < s.left ? "left" : s.width + r + c + 2 < i.width() - s.left ? "right" : "bottom"), a) {case "bottom":
              e = c / 2 * -1, n = s.height / 2 + r, t.$tooltip.transformOrigin("top center");break;case "top":
              e = c / 2 * -1, n = -1 * (d + s.height / 2 + r), t.$tooltip.transformOrigin("bottom center");break;case "left":
              e = -1 * (c + s.width / 2 + r), n = d / 2 * -1, t.$tooltip.transformOrigin("center right");break;case "right":
              e = s.width / 2 + r, n = d / 2 * -1, t.$tooltip.transformOrigin("center left");}var u = t.$target.offset();t.$tooltip.css({ top: u.top + s.height / 2 + "px", left: u.left + s.width / 2 + "px", "margin-left": e + "px", "margin-top": n + "px" });
        }(n), n.options.delay ? n.timeoutId = setTimeout(function () {
          n._doOpen();
        }, n.options.delay) : (n.timeoutId = !1, n._doOpen());
      }
    }, t.prototype.close = function () {
      var t = this;t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = !1), "closing" !== t.state && "closed" !== t.state && (t.state = "closing", r("close", "tooltip", t, t.$target), t.$tooltip.removeClass("mdui-tooltip-open").transitionEnd(function () {
        c(t);
      }));
    }, t.prototype.toggle = function () {
      "opening" === this.state || "opened" === this.state ? this.close() : "closing" !== this.state && "closed" !== this.state || this.open();
    }, t.prototype.getState = function () {
      return this.state;
    }, t;
  }(), e(function () {
    n.on("touchstart mouseover", "[mdui-tooltip]", function () {
      var n = e(this),
          i = n.data("mdui.tooltip");if (!i) {
        var o = s(n.attr("mdui-tooltip"));i = new t.Tooltip(n, o), n.data("mdui.tooltip", i);
      }
    });
  }), function () {
    function i(t, n) {
      if (this.message = t, this.options = e.extend({}, r, n || {}), this.message) {
        this.state = "closed", this.timeoutId = !1;var i = "",
            o = "";0 === this.options.buttonColor.indexOf("#") || 0 === this.options.buttonColor.indexOf("rgb") ? i = 'style="color:' + this.options.buttonColor + '"' : "" !== this.options.buttonColor && (o = "mdui-text-color-" + this.options.buttonColor), this.$snackbar = e('<div class="mdui-snackbar"><div class="mdui-snackbar-text">' + this.message + "</div>" + (this.options.buttonText ? '<a href="javascript:void(0)" class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white ' + o + '" ' + i + ">" + this.options.buttonText + "</a>" : "") + "</div>").appendTo(document.body), this._setPosition("close"), this.$snackbar.reflow().addClass("mdui-snackbar-" + this.options.position);
      }
    }var s,
        r = { timeout: 4e3, buttonText: "", buttonColor: "", position: "bottom", closeOnButtonClick: !0, closeOnOutsideClick: !0, onClick: function onClick() {}, onButtonClick: function onButtonClick() {}, onOpen: function onOpen() {}, onOpened: function onOpened() {}, onClose: function onClose() {}, onClosed: function onClosed() {} },
        c = function c(t) {
      var n = e(t.target);n.hasClass("mdui-snackbar") || n.parents(".mdui-snackbar").length || s.close();
    };i.prototype._setPosition = function (t) {
      var e,
          n,
          i = this.$snackbar[0].clientHeight,
          o = this.options.position;e = "bottom" === o || "top" === o ? "-50%" : "0", "open" === t ? n = "0" : ("bottom" === o && (n = i), "top" === o && (n = -i), "left-top" !== o && "right-top" !== o || (n = -i - 24), "left-bottom" !== o && "right-bottom" !== o || (n = i + 24)), this.$snackbar.transform("translate(" + e + "," + n + "px)");
    }, i.prototype.open = function () {
      var t = this;t.message && "opening" !== t.state && "opened" !== t.state && (s ? o.queue("__md_snackbar", function () {
        t.open();
      }) : (s = t, t.state = "opening", t.options.onOpen(), t._setPosition("open"), t.$snackbar.transitionEnd(function () {
        "opening" === t.state && (t.state = "opened", t.options.onOpened(), t.options.buttonText && t.$snackbar.find(".mdui-snackbar-action").on("click", function () {
          t.options.onButtonClick(), t.options.closeOnButtonClick && t.close();
        }), t.$snackbar.on("click", function (n) {
          e(n.target).hasClass("mdui-snackbar-action") || t.options.onClick();
        }), t.options.closeOnOutsideClick && n.on(a.start, c), t.options.timeout && (t.timeoutId = setTimeout(function () {
          t.close();
        }, t.options.timeout)));
      })));
    }, i.prototype.close = function () {
      var t = this;t.message && "closing" !== t.state && "closed" !== t.state && (t.timeoutId && clearTimeout(t.timeoutId), t.options.closeOnOutsideClick && n.off(a.start, c), t.state = "closing", t.options.onClose(), t._setPosition("close"), t.$snackbar.transitionEnd(function () {
        "closing" === t.state && (s = null, t.state = "closed", t.options.onClosed(), t.$snackbar.remove(), o.dequeue("__md_snackbar"));
      }));
    }, t.snackbar = function (t, e) {
      "string" != typeof t && (t = (e = t).message);var n = new i(t, e);return n.open(), n;
    };
  }(), n.on("click", ".mdui-bottom-nav>a", function () {
    var t,
        n = e(this),
        i = n.parent();i.children("a").each(function (o, a) {
      (t = n.is(a)) && r("change", "bottomNav", null, i, { index: o }), e(a)[t ? "addClass" : "removeClass"]("mdui-bottom-nav-active");
    });
  }), t.mutation(".mdui-bottom-nav-scroll-hide", function () {
    var n = e(this),
        i = new t.Headroom(n, { pinnedClass: "mdui-headroom-pinned-down", unpinnedClass: "mdui-headroom-unpinned-down" });n.data("mdui.headroom", i);
  }), function () {
    var n = function n() {
      var t = !!arguments.length && arguments[0];return '<div class="mdui-spinner-layer ' + (t ? "mdui-spinner-layer-" + t : "") + '"><div class="mdui-spinner-circle-clipper mdui-spinner-left"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-gap-patch"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-circle-clipper mdui-spinner-right"><div class="mdui-spinner-circle"></div></div></div>';
    },
        i = function i(t) {
      var i,
          o = e(t);i = o.hasClass("mdui-spinner-colorful") ? n("1") + n("2") + n("3") + n("4") : n(), o.html(i);
    };t.mutation(".mdui-spinner", function () {
      i(this);
    }), t.updateSpinners = function () {
      e(arguments.length ? arguments[0] : ".mdui-spinner").each(function () {
        i(this);
      });
    };
  }(), t.Panel = function () {
    return function (t, e) {
      return new c(t, e, "panel");
    };
  }(), e(function () {
    t.mutation("[mdui-panel]", function () {
      var n = e(this),
          i = n.data("mdui.panel");if (!i) {
        var o = s(n.attr("mdui-panel"));i = new t.Panel(n, o), n.data("mdui.panel", i);
      }
    });
  }), t.Menu = function () {
    function t(t, s, r) {
      var c = this;if (c.$anchor = e(t).eq(0), c.$anchor.length) {
        var u = c.$anchor.data("mdui.menu");if (u) return u;c.$menu = e(s).eq(0), c.$anchor.siblings(c.$menu).length && (c.options = e.extend({}, o, r || {}), c.state = "closed", c.isCascade = c.$menu.hasClass("mdui-menu-cascade"), "auto" === c.options.covered ? c.isCovered = !c.isCascade : c.isCovered = c.options.covered, c.$anchor.on("click", function () {
          c.toggle();
        }), n.on("click touchstart", function (t) {
          var n = e(t.target);"opening" !== c.state && "opened" !== c.state || n.is(c.$menu) || e.contains(c.$menu[0], n[0]) || n.is(c.$anchor) || e.contains(c.$anchor[0], n[0]) || c.close();
        }), n.on("click", ".mdui-menu-item", function (t) {
          var n = e(this);n.find(".mdui-menu").length || null !== n.attr("disabled") || c.close();
        }), d(c), i.on("resize", e.throttle(function () {
          a(c);
        }, 100)));
      }
    }var o = { position: "auto", align: "auto", gutter: 16, fixed: !1, covered: "auto", subMenuTrigger: "hover", subMenuDelay: 200 },
        a = function a(t) {
      var e,
          n,
          o,
          a,
          s,
          r,
          c = i.height(),
          d = i.width(),
          u = t.options.gutter,
          l = t.isCovered,
          f = t.options.fixed,
          h = t.$menu.width(),
          p = t.$menu.height(),
          m = t.$anchor,
          v = m[0].getBoundingClientRect(),
          g = v.top,
          b = v.left,
          x = v.height,
          y = v.width,
          $ = c - g - x,
          w = d - b - y,
          C = m[0].offsetTop,
          k = m[0].offsetLeft;if (o = "auto" === t.options.position ? $ + (l ? x : 0) > p + u ? "bottom" : g + (l ? x : 0) > p + u ? "top" : "center" : t.options.position, a = "auto" === t.options.align ? w + y > h + u ? "left" : b + y > h + u ? "right" : "center" : t.options.align, "bottom" === o) r = "0", n = (l ? 0 : x) + (f ? g : C);else if ("top" === o) r = "100%", n = (l ? x : 0) + (f ? g - p : C - p);else {
        r = "50%";var O = p;t.isCascade || p + 2 * u > c && (O = c - 2 * u, t.$menu.height(O)), n = (c - O) / 2 + (f ? 0 : C - g);
      }if (t.$menu.css("top", n + "px"), "left" === a) s = "0", e = f ? b : k;else if ("right" === a) s = "100%", e = f ? b + y - h : k + y - h;else {
        s = "50%";var T = h;h + 2 * u > d && (T = d - 2 * u, t.$menu.width(T)), e = (d - T) / 2 + (f ? 0 : k - b);
      }t.$menu.css("left", e + "px"), t.$menu.transformOrigin(s + " " + r);
    },
        s = function s(t) {
      !function (t) {
        var e,
            n,
            o,
            a,
            s,
            r,
            c = t.parent(".mdui-menu-item"),
            d = i.height(),
            u = i.width(),
            l = t.width(),
            f = t.height(),
            h = c[0].getBoundingClientRect(),
            p = h.width,
            m = h.height,
            v = h.left,
            g = h.top;o = d - g > f ? "bottom" : g + m > f ? "top" : "bottom", a = u - v - p > l ? "left" : v > l ? "right" : "left", "bottom" === o ? (r = "0", e = "0") : "top" === o && (r = "100%", e = -f + m), t.css("top", e + "px"), "left" === a ? (s = "0", n = p) : "right" === a && (s = "100%", n = -l), t.css("left", n + "px"), t.transformOrigin(s + " " + r);
      }(t), t.addClass("mdui-menu-open").parent(".mdui-menu-item").addClass("mdui-menu-item-active");
    },
        c = function c(t) {
      t.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd(function () {
        t.removeClass("mdui-menu-closing");
      }).parent(".mdui-menu-item").removeClass("mdui-menu-item-active"), t.find(".mdui-menu").each(function () {
        var t = e(this);t.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd(function () {
          t.removeClass("mdui-menu-closing");
        }).parent(".mdui-menu-item").removeClass("mdui-menu-item-active");
      });
    },
        d = function d(t) {
      if (t.$menu.on("click", ".mdui-menu-item", function (t) {
        var n = e(this),
            i = e(t.target);if (null === n.attr("disabled") && !i.is(".mdui-menu") && !i.is(".mdui-divider") && i.parents(".mdui-menu-item").eq(0).is(n)) {
          var o = n.children(".mdui-menu");n.parent(".mdui-menu").children(".mdui-menu-item").each(function () {
            var t = e(this).children(".mdui-menu");!t.length || o.length && t.is(o) || c(t);
          }), o.length && function (t) {
            t.hasClass("mdui-menu-open") ? c(t) : s(t);
          }(o);
        }
      }), "hover" === t.options.subMenuTrigger) {
        var n, i, o;t.$menu.on("mouseover mouseout", ".mdui-menu-item", function (a) {
          var r = e(this),
              d = a.type,
              u = e(a.relatedTarget);if (null === r.attr("disabled")) {
            if ("mouseover" === d) {
              if (!r.is(u) && e.contains(r[0], u[0])) return;
            } else if ("mouseout" === d && (r.is(u) || e.contains(r[0], u[0]))) return;var l = r.children(".mdui-menu");if ("mouseover" === d) {
              if (l.length) {
                var f = l.data("timeoutClose.mdui.menu");if (f && clearTimeout(f), l.hasClass("mdui-menu-open")) return;clearTimeout(i), n = i = setTimeout(function () {
                  s(l);
                }, t.options.subMenuDelay), l.data("timeoutOpen.mdui.menu", n);
              }
            } else if ("mouseout" === d && l.length) {
              var h = l.data("timeoutOpen.mdui.menu");h && clearTimeout(h), n = o = setTimeout(function () {
                c(l);
              }, t.options.subMenuDelay), l.data("timeoutClose.mdui.menu", n);
            }
          }
        });
      }
    };t.prototype.toggle = function () {
      "opening" === this.state || "opened" === this.state ? this.close() : "closing" !== this.state && "closed" !== this.state || this.open();
    };var u = function u(t) {
      t.$menu.removeClass("mdui-menu-closing"), "opening" === t.state && (t.state = "opened", r("opened", "menu", t, t.$menu)), "closing" === t.state && (t.state = "closed", r("closed", "menu", t, t.$menu), t.$menu.css({ top: "", left: "", width: "", position: "fixed" }));
    };return t.prototype.open = function () {
      var t = this;"opening" !== t.state && "opened" !== t.state && (t.state = "opening", r("open", "menu", t, t.$menu), a(t), t.$menu.css("position", t.options.fixed ? "fixed" : "absolute").addClass("mdui-menu-open").transitionEnd(function () {
        u(t);
      }));
    }, t.prototype.close = function () {
      var t = this;"closing" !== t.state && "closed" !== t.state && (t.state = "closing", r("close", "menu", t, t.$menu), t.$menu.find(".mdui-menu").each(function () {
        c(e(this));
      }), t.$menu.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd(function () {
        u(t);
      }));
    }, t;
  }(), e(function () {
    n.on("click", "[mdui-menu]", function () {
      var n = e(this),
          i = n.data("mdui.menu");if (!i) {
        var o = s(n.attr("mdui-menu")),
            a = o.target;delete o.target, i = new t.Menu(n, a, o), n.data("mdui.menu", i), i.toggle();
      }
    });
  }), t.JQ = e, t;
});
//# sourceMappingURL=mdui.min.js.map

/***/ }),

/***/ "./resources/assets/js/config/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	saveScrollPosition: true,
	routes: [{
		path: '/',
		redirect: { name: 'welcome' }
	}, {
		name: 'login',
		path: '/login',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/login.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		name: 'welcome',
		path: '/index/welcome',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/index/welcome.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/index/order_into',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/index/order_into.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/index/user_transfer',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/index/user_transfer.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/index/sysinfo',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(23).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/index/sysinfo.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/pay/index',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(19).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pay/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/merchant/index',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(21).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/merchant/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/merchant/behavior',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/merchant/behavior.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/transfer/index',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/transfer/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/reason/index',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/reason/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/report/reason',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/report/reason.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/report/purse',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/report/purse.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/purse',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/purse/purse.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/user',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/purse/user.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/freeze',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/purse/freeze.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/user_type',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/purse/user_type.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/purse_type',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/purse/purse_type.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/bank',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/withdraw/bank.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/alipay',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/withdraw/alipay.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/wechat',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/withdraw/wechat.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/order/index',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(20).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/order/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/export/index',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(24).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/export/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/rule/user',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/rule/user.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/rule/group',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/rule/group.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/system/config',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/system/config.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}]
});

router.beforeEach(function (to, from, next) {

	next();
});

router.afterEach(function () {});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlPzAyNmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlP2VhZTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlP2YxZjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlPzgwNWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbmZpZy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvbWR1aS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzcz82ZDEwIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJWdWUiLCJjb21wb25lbnQiLCJWdWVEYXRlcGlja2VyTG9jYWwiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwidXNlIiwiZnVuYyIsIkFwaSIsImFwcCIsImVsIiwicm91dGVyIiwicmVuZGVyIiwiaCIsIkFwcCIsIndpbmRvdyIsIm1kdWkiLCIkIiwiSlEiLCJ0b2tlbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNvbnRlbnQiLCJ1cmxfcHJlZml4IiwiQVBQX1VSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJwcm90b3R5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwicmVzb2x2ZSIsInRpcHMiLCJtZXNzYWdlIiwicHVzaCIsInBhdGgiLCJlcnJvcnMiLCJnZXQiLCJ1cmwiLCJwYXJhbXMiLCJwb3N0IiwiZGVsIiwiZGVsZXRlIiwicHV0IiwiJEFQSSIsImluc3RhbGwiLCJvcHRpb25zIiwibXNnIiwic25hY2tiYXIiLCJwb3NpdGlvbiIsInRpbWVvdXQiLCJidXR0b25UZXh0IiwibG9nZ2VyIiwidmFyaWFibGUiLCJjb25zb2xlIiwiaW5mbyIsImxvZyIsImNsb3NlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInQiLCJlIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJuIiwiaSIsIkRhdGUiLCJnZXRUaW1lIiwibyIsIk1hdGgiLCJtYXgiLCJhIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImxlbmd0aCIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJhcHBseSIsInMiLCJyIiwiaW5kZXhPZiIsImMiLCJkIiwidSIsImwiLCJmIiwic2xpY2UiLCJjb25jYXQiLCJtIiwiQXJyYXkiLCJpc0FycmF5IiwidiIsImRvY3VtZW50RWxlbWVudCIsImciLCJiIiwieCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGROb2RlcyIsIm1hdGNoIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEVsZW1lbnRCeUlkIiwicmVhZHkiLCJub2RlVHlwZSIsImZuIiwiZXh0ZW5kIiwiYXJndW1lbnRzIiwiZWFjaCIsIm1lcmdlIiwidW5pcXVlIiwibWFwIiwiY29udGFpbnMiLCJwYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJmaWx0ZXIiLCJpbmRleCIsIm5vdCIsIm9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJwYWdlWE9mZnNldCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRQYXJlbnQiLCJjc3MiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwic2hvdyIsInN0eWxlIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiYm9keSIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaGlkZSIsInRvZ2dsZSIsImhhc0NsYXNzIiwiY2xhc3NMaXN0IiwicmVtb3ZlQXR0ciIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZVByb3AiLCJlcSIsImZpcnN0IiwibGFzdCIsInBhcmVudCIsImNoaWxkcmVuIiwiaXMiLCJtYXRjaGVzIiwibWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZmluZCIsImhhcyIsInNpYmxpbmdzIiwicHJldkFsbCIsImFkZCIsIm5leHRBbGwiLCJjbG9zZXN0IiwicGFyZW50cyIsInJlbW92ZSIsImVtcHR5IiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJyZXBsYWNlV2l0aCIsImJlZm9yZSIsInNlcmlhbGl6ZUFycmF5IiwiZWxlbWVudHMiLCJhdHRyIiwiZGlzYWJsZWQiLCJjaGVja2VkIiwibmFtZSIsInZhbHVlIiwidmFsIiwic2VyaWFsaXplIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJXaWR0aCIsIkhlaWdodCIsIkRPQ1VNRU5UX05PREUiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJOdW1iZXIiLCJ5IiwicmV2ZXJzZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJhZnRlciIsInJlcGxhY2VBbGwiLCJhdHRyaWJ1dGVzIiwicmVwbGFjZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicmVtb3ZlRGF0YSIsIm1kdWlFbGVtZW50RGF0YVN0b3JhZ2UiLCJmb3JFYWNoIiwidG9TdHJpbmciLCJzZWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJveHkiLCJfZWxlbWVudElkIiwidGVzdCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib24iLCJvZmYiLCJ1c2VDYXB0dXJlIiwiX2RldGFpbCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiX2RhdGEiLCJ0YXJnZXQiLCJvbmUiLCJ0cmlnZ2VyIiwiTW91c2VFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImFqYXhTdGFydCIsImFqYXhTdWNjZXNzIiwiYWpheEVycm9yIiwiYWpheENvbXBsZXRlIiwiYWpheFNldHVwIiwiYWpheCIsImdsb2JhbCIsIm1ldGhvZCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjYWNoZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ4aHJGaWVsZHMiLCJzdGF0dXNDb2RlIiwiZGF0YVR5cGUiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJub3ciLCJjb250ZW50VHlwZSIsImxvY2F0aW9uIiwiQXJyYXlCdWZmZXIiLCJCbG9iIiwiRG9jdW1lbnQiLCJGb3JtRGF0YSIsImNvbnN0cnVjdG9yIiwidyIsIkMiLCJrIiwiTyIsInR5cGUiLCJvbmVycm9yIiwic3JjIiwiYXBwZW5kIiwiVCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJjcm9zc0RvbWFpbiIsIlJlZ0V4cCIsIiQyIiwiaG9zdCIsInhociIsIkUiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZVR5cGUiLCJzdGF0dXNUZXh0Iiwib25hYm9ydCIsImFib3J0Iiwic2VuZCIsInF1ZXVlIiwiZGVxdWV1ZSIsInNoaWZ0IiwidG91Y2hlcyIsImlzQWxsb3ciLCJyZWdpc3RlciIsInN0YXJ0IiwibW92ZSIsImVuZCIsImNhbmNlbCIsInVubG9jayIsIkZ1bmN0aW9uIiwic3Vic3RyIiwiaW5zdCIsImpRdWVyeSIsInJlZmxvdyIsImNsaWVudExlZnQiLCJ0cmFuc2l0aW9uIiwid2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkVuZCIsInRyYW5zZm9ybU9yaWdpbiIsIndlYmtpdFRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsIndlYmtpdFRyYW5zZm9ybSIsInNob3dPdmVybGF5IiwiaGlkZU92ZXJsYXkiLCJsb2NrU2NyZWVuIiwidW5sb2NrU2NyZWVuIiwidGhyb3R0bGUiLCJndWlkIiwiZmxvb3IiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJtdXRhdGlvbiIsIkhlYWRyb29tIiwiJGhlYWRyb29tIiwidG9sZXJhbmNlIiwiT2JqZWN0IiwiZG93biIsInVwIiwiX2luaXQiLCJpbml0aWFsQ2xhc3MiLCJwaW5uZWRDbGFzcyIsInVucGlubmVkQ2xhc3MiLCJzdGF0ZSIsImluaXRlZCIsImxhc3RTY3JvbGxZIiwiX2F0dGFjaEV2ZW50IiwiX3Njcm9sbCIsInJhZklkIiwiYWJzIiwidW5waW4iLCJwaW4iLCJlbmFibGUiLCJkaXNhYmxlIiwiZ2V0U3RhdGUiLCJucyIsImNsYXNzX2l0ZW0iLCJjbGFzc19pdGVtX29wZW4iLCJjbGFzc19oZWFkZXIiLCJjbGFzc19ib2R5IiwiJGNvbGxhcHNlIiwiX2lzT3BlbiIsImFjY29yZGlvbiIsIl9nZXRJdGVtIiwicGFyc2VJbnQiLCJzY3JvbGxIZWlnaHQiLCJvcGVuQWxsIiwiY2xvc2VBbGwiLCJDb2xsYXBzZSIsIiR0YWJsZSIsImluaXQiLCIkdGhSb3ciLCIkdGRSb3dzIiwiJHRkQ2hlY2tib3hzIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkUm93IiwiX3VwZGF0ZVRoQ2hlY2tib3giLCJfdXBkYXRlVGRDaGVja2JveCIsIl91cGRhdGVOdW1lcmljQ29sIiwiJHRoQ2hlY2tib3giLCJ1cGRhdGVUYWJsZXMiLCJkZWxheSIsImJ1dHRvbiIsInBhZ2VYIiwicGFnZVkiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJwb3ciLCJ2YWxpZGl0eSIsInZhbGlkIiwidGV4dCIsImZvY3VzIiwidXBkYXRlVGV4dEZpZWxkcyIsInJlSW5pdCIsImRvbUxvYWRlZEV2ZW50IiwiJHRyYWNrIiwiJGZpbGwiLCIkdGh1bWIiLCIkaW5wdXQiLCJtaW4iLCJkaXNjcmV0ZSIsIiR0aHVtYlRleHQiLCJ1cGRhdGVTbGlkZXJzIiwiRmFiIiwiJGZhYiIsIiRidG4iLCIkZGlhbCIsIiRkaWFsQnRucyIsIlNlbGVjdCIsIiRzZWxlY3ROYXRpdmUiLCJ1bmlxdWVJRCIsImhhbmRsZVVwZGF0ZSIsIiRzZWxlY3QiLCJndXR0ZXIiLCIkaXRlbXMiLCJ0ZXh0Q29udGVudCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsIiRzZWxlY3RlZCIsIiRtZW51Iiwic2l6ZSIsIlRhYiIsIiR0YWIiLCIkdGFicyIsIiRpbmRpY2F0b3IiLCJhY3RpdmVJbmRleCIsImhhc2giLCJfc2V0QWN0aXZlIiwiX3NldEluZGljYXRvclBvc2l0aW9uIiwiX2JpbmRUYWJFdmVudCIsImxvb3AiLCJpZCIsInNjcm9sbExlZnQiLCJuZXh0IiwicHJldiIsIkRyYXdlciIsIiRkcmF3ZXIiLCJvdmVybGF5Iiwic3dpcGUiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInRvdWNoY2FuY2VsIiwiY2hhbmdlZFRvdWNoZXMiLCJEaWFsb2ciLCIkZGlhbG9nIiwiY2xvc2VPbkNhbmNlbCIsImNsb3NlT25Db25maXJtIiwiaGlzdG9yeSIsIm1vZGFsIiwiY2xvc2VPbkVzYyIsImRlc3Ryb3lPbkNsb3NlZCIsImRlc3Ryb3kiLCJfZG9PcGVuIiwiYmFjayIsImtleUNvZGUiLCJkaWFsb2ciLCJib2xkIiwib25DbGljayIsInRpdGxlIiwiYnV0dG9ucyIsInN0YWNrZWRCdXR0b25zIiwiY3NzQ2xhc3MiLCJvbk9wZW4iLCJvbk9wZW5lZCIsIm9uQ2xvc2UiLCJvbkNsb3NlZCIsImFsZXJ0IiwiY29uZmlybVRleHQiLCJjb25maXJtIiwiY2FuY2VsVGV4dCIsInByb21wdCIsIm1heGxlbmd0aCIsImRlZmF1bHRWYWx1ZSIsImNvbmZpcm1PbkVudGVyIiwiVG9vbHRpcCIsIiR0YXJnZXQiLCIkdG9vbHRpcCIsImh0bWwiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInRpbWVvdXRJZCIsImJ1dHRvbkNvbG9yIiwiJHNuYWNrYmFyIiwiX3NldFBvc2l0aW9uIiwiY2xvc2VPbkJ1dHRvbkNsaWNrIiwiY2xvc2VPbk91dHNpZGVDbGljayIsIm9uQnV0dG9uQ2xpY2siLCJjbGllbnRIZWlnaHQiLCJ1cGRhdGVTcGlubmVycyIsIlBhbmVsIiwiTWVudSIsIiRhbmNob3IiLCJpc0Nhc2NhZGUiLCJjb3ZlcmVkIiwiaXNDb3ZlcmVkIiwiYWxpZ24iLCJmaXhlZCIsInN1Yk1lbnVUcmlnZ2VyIiwic3ViTWVudURlbGF5Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsInJlbGF0ZWRUYXJnZXQiLCJWdWVSb3V0ZXIiLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJyb3V0ZXMiLCJyZWRpcmVjdCIsImJlZm9yZUVhY2giLCJ0byIsImZyb20iLCJhZnRlckVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRJQTtBQUNBLEtBREEsa0JBQ0E7QUFDQTtBQUNBLFdBREE7QUFFQSxXQUZBO0FBR0EsZ0JBSEE7QUFJQSw0QkFKQTtBQUtBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTtBQUdBO0FBSEE7QUFMQTtBQVdBLEVBYkE7O0FBY0E7QUFDQSxhQURBLHlCQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBWkE7QUFhQSx1QkFiQSxtQ0FhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFOQSxFQU1BLEtBTkEsQ0FNQSxhQUVBLENBUkE7QUFTQSxHQXhCQTtBQXlCQSxNQXpCQSxrQkF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFKQSxFQUlBLEtBSkEsQ0FJQSxhQUVBLENBTkE7QUFPQSxHQWxDQTtBQW1DQSxXQW5DQSx1QkFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXZDQTtBQXdDQSxRQXhDQSxvQkF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBRkEsRUFFQSxLQUZBLENBRUEsYUFFQSxDQUpBO0FBS0E7QUFoREEsRUFkQTtBQWdFQSxRQWhFQSxxQkFnRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBFQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FIQTtBQUlBO0FB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c0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxoZWFkZXIgY2xhc3M9XCJtZHVpLWFwcGJhciBtZHVpLWFwcGJhci1maXhlZFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdG9vbGJhciBtZHVpLWNvbG9yLXRoZW1lXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWR1aS1idG4gbWR1aS1idG4taWNvbiBtZHVpLXJpcHBsZSBtZHVpLXJpcHBsZS13aGl0ZVwiIG1kdWktZHJhd2VyPVwie3RhcmdldDogJyNtYWluLWRyYXdlcicsIHN3aXBlOiB0cnVlfVwiPjxpIGNsYXNzPVwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L3NwYW4+XG5cdFx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7cGF0aDonLyd9XCIgY2xhc3M9XCJtZHVpLXR5cG8taGVhZGxpbmUgbWR1aS1oaWRkZW4tbWQtdXBcIj5FQmFuazwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7cGF0aDonLyd9XCIgY2xhc3M9XCJtZHVpLXR5cG8tdGl0bGUgbWR1aS1oaWRkZW4tc20tZG93blwiPkVCYW5rIOeUteWtkOmTtuihjDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRvb2xiYXItc3BhY2VyXCI+PC9kaXY+XG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibWR1aS1zcGlubmVyIG1kdWktc3Bpbm5lci1jb2xvcmZ1bCBtZHVpLWhpZGRlbiBhamF4X2xvYWRpbmdcIj48L2Rpdj4tLT5cblx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6bG9jYXRpb24ucmVsb2FkKCk7XCIgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLWJ0bi1pY29uXCI+XG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5yZWZyZXNoPC9pPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGVcIiBtZHVpLW1lbnU9XCJ7dGFyZ2V0OiAnLm1lbnVfdXNlcid9XCI+XG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L2k+e3t1c2VyLm5hbWUgfHwgJ+acqueZu+W9lSd9fVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDx1bCBjbGFzcz1cIm1kdWktbWVudSBtZHVpLW1lbnUtY2FzY2FkZSBtZW51X3VzZXJcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibWR1aS1yaXBwbGVcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnBlcnNvbjwvaT5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cInVzZXIucmVhbG5hbWVcIiB2LXRleHQ9XCJ1c2VyLnJlYWxuYW1lXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWVsc2UgY2xhc3M9XCJtZHVpLXRleHQtY29sb3ItZ3JleS01MDBcIj7ml6Dlp5PlkI08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibWR1aS1yaXBwbGVcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnBob25lX2lwaG9uZTwvaT5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cInVzZXIubW9iaWxlXCIgdi10ZXh0PVwidXNlci5tb2JpbGVcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtZWxzZSBjbGFzcz1cIm1kdWktdGV4dC1jb2xvci1ncmV5LTUwMFwiPuaXoOaJi+acuuWPtzwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1kdWktbWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJtZHVpLXJpcHBsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktbWVudS1pdGVtLWljb24gbWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+ZW1haWw8L2k+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJ1c2VyLmVtYWlsXCIgdi10ZXh0PVwidXNlci5lbWFpbFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1lbHNlIGNsYXNzPVwibWR1aS10ZXh0LWNvbG9yLWdyZXktNTAwXCI+5peg6YKu566xPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGl2aWRlclwiPjwvZGl2PlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1kdWktbWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJtZHVpLXJpcHBsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktbWVudS1pdGVtLWljb24gbWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+bGFzdF9wYWdlPC9pPuacrOasoeeZu+W9lVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwibWR1aS1tZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIm1kdWktcmlwcGxlXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1tZW51LWl0ZW0taWNvblwiPjwvaT5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cInVzZXIubGFzdF9sb2dpblwiIHYtdGV4dD1cInVzZXIubGFzdF9sb2dpblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1lbHNlIGNsYXNzPVwibWR1aS10ZXh0LWNvbG9yLWdyZXktNTAwXCI+5peg5Y6G5Y+y55m75b2VPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGl2aWRlclwiPjwvZGl2PlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1kdWktbWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJtZHVpLXJpcHBsZVwiIEBjbGljaz1cInBhc3N3b3JkX3Jlc2V0X2RpYWxvZy5vcGVuKClcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnZwbl9rZXk8L2k+5L+u5pS55a+G56CBXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PGEgY2xhc3M9XCJtZHVpLWJ0blwiIHYtaWY9XCJ1c2VyXCIgQGNsaWNrPVwibG9nb3V0XCI+XG5cdFx0XHRcdFx05rOo6ZSAXG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRyYXdlciBtZHVpLWNvbG9yLXdoaXRlXCIgaWQ9XCJtYWluLWRyYXdlclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLW1lZGlhXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmdcIiBzdHlsZT1cImhlaWdodDoyMDBweDtcIiAvPlxuXHRcdFx0XHRcdDwhLS0g5Y2h54mH5Lit5Y+v5Lul5YyF5ZCr5LiA5Liq5oiW5aSa5Liq6I+c5Y2V5oyJ6ZKuIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtbWVudVwiPlxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi8vZ2l0aHViLmNvbS95eWJhd2FuZy9lYmFua1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwibWR1aS1idG4gbWR1aS10ZXh0LWNvbG9yLWdyZXlcIj5naXRodWI8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLW1lZGlhLWNvdmVyZWQgbWR1aS1jYXJkLW1lZGlhLWNvdmVyZWQtdHJhbnNwYXJlbnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtcHJpbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHQ8IS0tPGltZyBjbGFzcz1cIm1kdWktaW1nLWNpcmNsZVwiIHNyYz1cIi4uL2ltYWdlcy9hdmF0YXIucG5nXCIgc3R5bGU9XCJ3aWR0aDo0NXB4O1wiIC8+LS0+XG5cdFx0XHRcdFx0XHRcdDwhLS08YSBjbGFzcz1cIm1kdWktYnRuIG1kdWktYnRuLWljb24gbWR1aS1yaXBwbGVcIj48aSBjbGFzcz1cIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnBlcnNvbjwvaT48L2E+LS0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmQtcHJpbWFyeS10aXRsZSBtZHVpLXRleHQtdXBwZXJjYXNlXCI+e3t1c2VyLm5hbWV9fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLXByaW1hcnktc3VidGl0bGVcIj57e3VzZXIucmVhbG5hbWV9fTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1saXN0XCIgbWR1aS1jb2xsYXBzZT1cInthY2NvcmRpb246IHRydWV9XCI+XG5cdFx0XHRcdDxkaXYgdi1mb3I9XCIodmFsLGtleSxpbmRleCkgaW4gbWVudVwiIDpjbGFzcz1cInsnbWR1aS1jb2xsYXBzZS1pdGVtJzp0cnVlLCdtZHVpLWNvbGxhcHNlLWl0ZW0tb3Blbic6aW5kZXggPT0gbWVudV9pbmRleCA/IHRydWUgOmZhbHNlfVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNvbGxhcHNlLWl0ZW0taGVhZGVyIG1kdWktbGlzdC1pdGVtIG1kdWktcmlwcGxlXCI+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktbGlzdC1pdGVtLWljb24gbWR1aS1pY29uIG1hdGVyaWFsLWljb25zIG1kdWktdGV4dC1jb2xvci1ncmV5XCI+bWVudTwvaT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWxpc3QtaXRlbS1jb250ZW50XCIgdi10ZXh0PVwia2V5XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cIm1kdWktY29sbGFwc2UtaXRlbS1hcnJvdyBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5rZXlib2FyZF9hcnJvd19kb3duPC9pPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cIm1kdWktY29sbGFwc2UtaXRlbS1ib2R5IG1kdWktbGlzdCBtZHVpLWxpc3QtZGVuc2VcIj5cblx0XHRcdFx0XHRcdDxyb3V0ZXItbGluayB0YWc9XCJsaVwiIDp0bz1cIntwYXRoOnZhbDIudXJsfVwiIHYtZm9yPVwiKHZhbDIsa2V5MixpbmRleDIpIGluIHZhbFwiIDprZXk9XCJ2YWwyLm5hbWVcIiBjbGFzcz1cIm1kdWktbGlzdC1pdGVtIG1kdWktcmlwcGxlXCIgYWN0aXZlLWNsYXNzPVwibWR1aS1jb2xvci10aGVtZVwiPnt7dmFsMi5uYW1lfX08L3JvdXRlci1saW5rPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PCEtLei/m+W6puadoe+8jOeUqOS6juWKoOi9veaPkOekui0tPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXByb2dyZXNzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1wcm9ncmVzcy1pbmRldGVybWluYXRlIG1kdWktaGlkZGVuIGFqYXhfbG9hZGluZ1wiPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDwhLS08ZGl2IGNsYXNzPVwibWR1aS1jb250YWluZXJcIj4tLT5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1wLWEtM1wiPlxuXHRcdFx0PGRpdiBpZD1cImFwcFwiPlxuXHRcdFx0XHQ8cm91dGVyLXZpZXcgQGluaXQ9XCJpbml0XCIgQGluaXRDbGVhcj1cImluaXRDbGVhclwiPjwvcm91dGVyLXZpZXc+IDwhLS0g6Lev55Sx5byV5YWl55qE57uE5Lu25bCG5Zyo6L+Z6YeM6KKr5riy5p+TIC0tPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PCEtLeS/ruaUueWvhueggeW8ueeqly0tPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZyBwYXNzd29yZF9yZXNldF9kaWFsb2dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy10aXRsZVwiPlxuXHRcdFx0XHTkv67mlLnnmbvlvZXlr4bnoIFcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLWNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPueOsOeZu+W9leWvhueggTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9vbGRcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPuaWsOeZu+W9leWvhueggTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9uZXdcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPumHjeWkjeaWsOeZu+W9leWvhueggTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9uZXdfY29uZmlybWF0aW9uXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1hY3Rpb25zXCI+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGVcIiBtZHVpLWRpYWxvZy1jbG9zZT7lj5bmtog8L2E+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInBhc3N3b3JkX3Jlc2V0X3N1Ym1pdFwiPuaPkOS6pDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dXNlciA6ICcnLFxuXHRcdFx0XHRtZW51IDogJycsXG5cdFx0XHRcdG1lbnVfaW5kZXggOiAwLFxuXHRcdFx0XHRwYXNzd29yZF9yZXNldF9kaWFsb2cgOiAnJyxcblx0XHRcdFx0cGFzc3dvcmRfcmVzZXQgOiB7XG5cdFx0XHRcdFx0cGFzc3dvcmRfb2xkIDogJycsXG5cdFx0XHRcdFx0cGFzc3dvcmRfbmV3IDogJycsXG5cdFx0XHRcdFx0cGFzc3dvcmRfbmV3X2NvbmZpcm1hdGlvbiA6ICcnLFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzIDoge1xuXHRcdFx0bWVudV9hY3RpdmUoKXtcblx0XHRcdFx0bGV0IHVybCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSxpbmRleCA9IDA7XG5cdFx0XHRcdGZvcihsZXQgaSBpbiB0aGlzLm1lbnUpe1xuXHRcdFx0XHRcdGZvcihsZXQgaiBpbiB0aGlzLm1lbnVbaV0pe1xuXHRcdFx0XHRcdFx0aWYodXJsID09PSB0aGlzLm1lbnVbaV1bal0udXJsKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5tZW51X2luZGV4ID0gaW5kZXg7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHBhc3N3b3JkX3Jlc2V0X3N1Ym1pdCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQuJEFQSS5wb3N0KCcvcnVsZS9wYXNzd29yZF9yZXNldCcsdGhpcy5wYXNzd29yZF9yZXNldCkudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0LnBhc3N3b3JkX3Jlc2V0X2RpYWxvZy5jbG9zZSgpO1xuXHRcdFx0XHRcdG1kdWkuYWxlcnQoJ+W3suaIkOWKn+S/ruaUue+8jOS4i+asoeeZu+W9leivt+S9v+eUqOaWsOWvhueggScsJ+S/ruaUueeZu+W9leWvhueggeWujOaIkCcsZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlfSlcblx0XHRcdFx0XHRmb3IobGV0IGkgaW4gdC5wYXNzd29yZF9yZXNldCl7XG5cdFx0XHRcdFx0XHR0LnBhc3N3b3JkX3Jlc2V0W2ldID0gJyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRpbml0KCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0dC4kQVBJLmdldCgnL2luaXQnKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHQudXNlciA9IGRhdGEudXNlcjtcblx0XHRcdFx0XHR0Lm1lbnUgPSBkYXRhLm1lbnU7XG5cdFx0XHRcdFx0dC5tZW51X2FjdGl2ZSgpO1xuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0aW5pdENsZWFyKCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0dC5tZW51ID0gJyc7XG5cdFx0XHRcdHQudXNlciA9ICcnO1xuXHRcdFx0fSxcblx0XHRcdGxvZ291dCgpe1xuXHRcdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHRcdHQudGlwcygn5Y2z5bCG6Lez6L2s5Yiw55m75b2V6aG1Jyk7XG5cdFx0XHRcdHQuJEFQSS5wb3N0KCcvbG9nb3V0JykudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0LiRyb3V0ZXIucHVzaCh7cGF0aDonL2xvZ2luJ30pO1xuXHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCl7XG5cdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHR0LnBhc3N3b3JkX3Jlc2V0X2RpYWxvZyA9IG5ldyBtZHVpLkRpYWxvZygnLnBhc3N3b3JkX3Jlc2V0X2RpYWxvZycse2hpc3Rvcnk6ZmFsc2V9KTtcblx0XHRcdHQuaW5pdCgpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlIiwiPHRlbXBsYXRlIHR5cGU9XCJ0ZXh0L3RlbXBsYXRlXCIgaWQ9XCJ0ZW1wbGF0ZV9wYWdpbmF0aW9uXCI+XG5cdDxzZWN0aW9uIGNsYXNzPVwicGFnZXMtd3JhcFwiIHYtc2hvdz1cInBhZ2VJbmZvLnRvdGFsPnBhZ2VJbmZvLnBhZ2VudW1cIj5cblx0XHQ8dWwgY2xhc3M9XCJwYWdpbmF0aW9uIGNsZWFyZml4XCI+XG5cdFx0XHQ8bGkgOmNsYXNzPVwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gMX1cIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrPVwiY2xpY2tDdXJyZW50KDEpXCI+IOmmlumhtSA8L2E+PC9saT5cblx0XHRcdDxsaSA6Y2xhc3M9XCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSAxfVwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBAY2xpY2s9XCJjbGlja0N1cnJlbnQocGFnZUluZm8uY3VycmVudCAtIDEpXCI+IOS4iuS4gOmhtSA8L2E+PC9saT5cblx0XHRcdDxsaSB2LWZvcj1cInAgaW4gc2V0TGlzdFwiIDpjbGFzcz1cInsnYWN0aXZlJzogcGFnZUluZm8uY3VycmVudCA9PSBwLnZhbH1cIiA+XG5cdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB2LWlmPVwicGFnZUluZm8uY3VycmVudCA9PSBwLnZhbFwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6cGFnZUluZm8uc2tpbiAsIGJvcmRlckNvbG9yOnBhZ2VJbmZvLnNraW59XCIgQGNsaWNrPVwiY2xpY2tDdXJyZW50KHAudmFsKVwiPiB7eyBwLnRleHQgfX0gPC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgdi1lbHNlICBAY2xpY2s9XCJjbGlja0N1cnJlbnQocC52YWwpXCI+IHt7IHAudGV4dCB9fSA8L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdFx0PGxpIDpjbGFzcz1cInsnZGlzYWJsZWQnOiBwYWdlSW5mby5jdXJyZW50ID09IHBhZ2VJbmZvLnBhZ2V9XCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIEBjbGljaz1cImNsaWNrQ3VycmVudChwYWdlSW5mby5jdXJyZW50ICsgMSlcIj4g5LiL5LiA6aG1PC9hPjwvbGk+XG5cdFx0XHQ8bGkgOmNsYXNzPVwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gcGFnZUluZm8ucGFnZX1cIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrPVwiY2xpY2tDdXJyZW50KHBhZ2VJbmZvLnBhZ2UpXCI+IOWwvumhtSA8L2E+PC9saT5cblx0XHQ8L3VsPlxuXHQ8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0Ly8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczpbJ3BhZ2VJbmZvJ10sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHBhZ2U6ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLmNlaWwodGhpcy5wYWdlSW5mby50b3RhbCAvIHRoaXMucGFnZUluZm8ucGFnZW51bSk7XG5cdFx0XHR9LFxuXHRcdFx0c2V0TGlzdDpmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgbGVuID0gdGhpcy5wYWdlICwgdGVtcCA9IFtdLCBsaXN0ID0gW10sIGNvdW50ID0gTWF0aC5mbG9vcih0aGlzLnBhZ2VJbmZvLnBhZ2Vncm91cCAvIDIpICxjZW50ZXIgPSB0aGlzLnBhZ2VJbmZvLmN1cnJlbnQ7XG5cdFx0XHRcdGlmKCBsZW4gPD0gdGhpcy5wYWdlSW5mby5wYWdlZ3JvdXAgKXtcblx0XHRcdFx0XHR3aGlsZShsZW4tLSl7IHRlbXAucHVzaCh7dGV4dDp0aGlzLnBhZ2UtbGVuLHZhbDp0aGlzLnBhZ2UtbGVufSk7fTtcblx0XHRcdFx0XHRyZXR1cm4gdGVtcDtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aGlsZShsZW4tLSl7IHRlbXAucHVzaCh0aGlzLnBhZ2UgLSBsZW4pO307XG5cdFx0XHRcdHZhciBpZHggPSB0ZW1wLmluZGV4T2YoY2VudGVyKTtcblx0XHRcdFx0KGlkeCA8IGNvdW50KSAmJiAoIGNlbnRlciA9IGNlbnRlciArIGNvdW50IC0gaWR4KTtcblx0XHRcdFx0KHRoaXMucGFnZUluZm8uY3VycmVudCA+IHRoaXMucGFnZSAtIGNvdW50KSAmJiAoIGNlbnRlciA9IHRoaXMucGFnZSAtIGNvdW50KTtcblx0XHRcdFx0dGVtcCA9IHRlbXAuc3BsaWNlKGNlbnRlciAtIGNvdW50IC0xLCB0aGlzLnBhZ2VJbmZvLnBhZ2Vncm91cCk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR2YXIgdCA9IHRlbXAuc2hpZnQoKTtcblx0XHRcdFx0XHRsaXN0LnB1c2goe1xuXHRcdFx0XHRcdFx0dGV4dDogdCxcblx0XHRcdFx0XHRcdHZhbDogdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9d2hpbGUodGVtcC5sZW5ndGgpO1xuXHRcdFx0XHRpZiggdGhpcy5wYWdlID4gdGhpcy5wYWdlSW5mby5wYWdlZ3JvdXAgKXtcblx0XHRcdFx0XHQodGhpcy5wYWdlSW5mby5jdXJyZW50ID4gY291bnQgKyAxKSAmJiBsaXN0LnVuc2hpZnQoeyB0ZXh0OicuLi4nLHZhbDogbGlzdFswXS52YWwgLSAxIH0pO1xuXHRcdFx0XHRcdCh0aGlzLnBhZ2VJbmZvLmN1cnJlbnQgPCB0aGlzLnBhZ2UgLSBjb3VudCkgJiYgbGlzdC5wdXNoKHsgdGV4dDonLi4uJyx2YWw6IGxpc3RbbGlzdC5sZW5ndGggLSAxXS52YWwgKyAxIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZDpmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucGFnZUluZm8pXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjbGlja0N1cnJlbnQ6IGZ1bmN0aW9uKGlkeCkge1xuXHRcdFx0XHRpZiggdGhpcy5wYWdlSW5mby5jdXJyZW50ICE9IGlkeCAmJiBpZHggPiAwICYmIGlkeCA8IHRoaXMucGFnZSArIDEpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvLmN1cnJlbnQgPSBpZHg7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJyx0aGlzLnBhZ2VJbmZvLmN1cnJlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG5cdC5wYWdlcy13cmFwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LnBhZ2luYXRpb24ge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0bWFyZ2luOiAyMHB4IDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR9XG5cdC5wYWdpbmF0aW9uPmxpIHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdH1cblx0LnBhZ2luYXRpb24+LmFjdGl2ZT5hLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpob3ZlciB7XG5cdFx0ei1pbmRleDogMztcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcblx0XHRib3JkZXItY29sb3I6ICMzMzdhYjc7XG5cdH1cblx0LnBhZ2luYXRpb24+LmRpc2FibGVkPmEsIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hOmhvdmVyLCAucGFnaW5hdGlvbj4uZGlzYWJsZWQ+c3BhbiwgLnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW46aG92ZXIge1xuXHRcdGNvbG9yOiAjNzc3O1xuXHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXItY29sb3I6ICNkZGQ7XG5cdH1cblx0LnBhZ2luYXRpb24+bGk+YTpob3ZlciwucGFnaW5hdGlvbj5saT5zcGFuOmhvdmVyIHtcblx0XHR6LWluZGV4OiAyO1xuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRib3JkZXItY29sb3I6ICNkZGQ7XG5cdH1cblx0LnBhZ2luYXRpb24+bGk+YSwgLnBhZ2luYXRpb24+bGk+c3BhbiB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdHBhZGRpbmc6IDZweCAxMnB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAtMXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuXHRcdGNvbG9yOiAjMDAwO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cdH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFnZXMtd3JhcFtkYXRhLXYtMWY2ZTViZjFdIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wYWdpbmF0aW9uW2RhdGEtdi0xZjZlNWJmMV0ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwYWRkaW5nLWxlZnQ6IDA7XFxuXFx0bWFyZ2luOiAyMHB4IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ucGFnaW5hdGlvbj5saVtkYXRhLXYtMWY2ZTViZjFdIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5wYWdpbmF0aW9uPi5hY3RpdmU+YVtkYXRhLXYtMWY2ZTViZjFdLCAucGFnaW5hdGlvbj4uYWN0aXZlPmFbZGF0YS12LTFmNmU1YmYxXTpob3ZlciwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuW2RhdGEtdi0xZjZlNWJmMV0sICAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW5bZGF0YS12LTFmNmU1YmYxXTpob3ZlciB7XFxuXFx0ei1pbmRleDogMztcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcXG5cXHRib3JkZXItY29sb3I6ICMzMzdhYjc7XFxufVxcbi5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hW2RhdGEtdi0xZjZlNWJmMV0sIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hW2RhdGEtdi0xZjZlNWJmMV06aG92ZXIsIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuW2RhdGEtdi0xZjZlNWJmMV0sIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuW2RhdGEtdi0xZjZlNWJmMV06aG92ZXIge1xcblxcdGNvbG9yOiAjNzc3O1xcblxcdGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItY29sb3I6ICNkZGQ7XFxufVxcbi5wYWdpbmF0aW9uPmxpPmFbZGF0YS12LTFmNmU1YmYxXTpob3ZlciwucGFnaW5hdGlvbj5saT5zcGFuW2RhdGEtdi0xZjZlNWJmMV06aG92ZXIge1xcblxcdHotaW5kZXg6IDI7XFxuXFx0Y29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcblxcdGJvcmRlci1jb2xvcjogI2RkZDtcXG59XFxuLnBhZ2luYXRpb24+bGk+YVtkYXRhLXYtMWY2ZTViZjFdLCAucGFnaW5hdGlvbj5saT5zcGFuW2RhdGEtdi0xZjZlNWJmMV0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRwYWRkaW5nOiA2cHggMTJweDtcXG5cXHRtYXJnaW4tbGVmdDogLTFweDtcXG5cXHRsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL3Zhci93d3cvZWJhbmsvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNkRBO0NBQ0EsbUJBQUE7Q0FDQTtBQUNBO0NBQ0Esc0JBQUE7Q0FDQSxnQkFBQTtDQUNBLGVBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBQ0E7Q0FDQSxnQkFBQTtDQUNBO0FBQ0E7Q0FDQSxXQUFBO0NBQ0EsWUFBQTtDQUNBLGdCQUFBO0NBQ0EsMEJBQUE7Q0FDQSxzQkFBQTtDQUNBO0FBQ0E7Q0FDQSxZQUFBO0NBQ0Esb0JBQUE7Q0FDQSx1QkFBQTtDQUNBLG1CQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQSx1QkFBQTtDQUNBLHVCQUFBO0NBQ0EsbUJBQUE7Q0FDQTtBQUNBO0NBQ0EsbUJBQUE7Q0FDQSxZQUFBO0NBQ0Esa0JBQUE7Q0FDQSxrQkFBQTtDQUNBLHdCQUFBO0NBQ0EsWUFBQTtDQUNBLHNCQUFBO0NBQ0EsdUJBQUE7Q0FDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJwYWdpbmF0aW9uLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGUgdHlwZT1cXFwidGV4dC90ZW1wbGF0ZVxcXCIgaWQ9XFxcInRlbXBsYXRlX3BhZ2luYXRpb25cXFwiPlxcblxcdDxzZWN0aW9uIGNsYXNzPVxcXCJwYWdlcy13cmFwXFxcIiB2LXNob3c9XFxcInBhZ2VJbmZvLnRvdGFsPnBhZ2VJbmZvLnBhZ2VudW1cXFwiPlxcblxcdFxcdDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbiBjbGVhcmZpeFxcXCI+XFxuXFx0XFx0XFx0PGxpIDpjbGFzcz1cXFwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gMX1cXFwiPjxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgQGNsaWNrPVxcXCJjbGlja0N1cnJlbnQoMSlcXFwiPiDpppbpobUgPC9hPjwvbGk+XFxuXFx0XFx0XFx0PGxpIDpjbGFzcz1cXFwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gMX1cXFwiPjxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgQGNsaWNrPVxcXCJjbGlja0N1cnJlbnQocGFnZUluZm8uY3VycmVudCAtIDEpXFxcIj4g5LiK5LiA6aG1IDwvYT48L2xpPlxcblxcdFxcdFxcdDxsaSB2LWZvcj1cXFwicCBpbiBzZXRMaXN0XFxcIiA6Y2xhc3M9XFxcInsnYWN0aXZlJzogcGFnZUluZm8uY3VycmVudCA9PSBwLnZhbH1cXFwiID5cXG5cXHRcXHRcXHRcXHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIHYtaWY9XFxcInBhZ2VJbmZvLmN1cnJlbnQgPT0gcC52YWxcXFwiIDpzdHlsZT1cXFwie2JhY2tncm91bmRDb2xvcjpwYWdlSW5mby5za2luICwgYm9yZGVyQ29sb3I6cGFnZUluZm8uc2tpbn1cXFwiIEBjbGljaz1cXFwiY2xpY2tDdXJyZW50KHAudmFsKVxcXCI+IHt7IHAudGV4dCB9fSA8L2E+XFxuXFx0XFx0XFx0XFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiB2LWVsc2UgIEBjbGljaz1cXFwiY2xpY2tDdXJyZW50KHAudmFsKVxcXCI+IHt7IHAudGV4dCB9fSA8L2E+XFxuXFx0XFx0XFx0PC9saT5cXG5cXHRcXHRcXHQ8bGkgOmNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSBwYWdlSW5mby5wYWdlfVxcXCI+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBAY2xpY2s9XFxcImNsaWNrQ3VycmVudChwYWdlSW5mby5jdXJyZW50ICsgMSlcXFwiPiDkuIvkuIDpobU8L2E+PC9saT5cXG5cXHRcXHRcXHQ8bGkgOmNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSBwYWdlSW5mby5wYWdlfVxcXCI+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBAY2xpY2s9XFxcImNsaWNrQ3VycmVudChwYWdlSW5mby5wYWdlKVxcXCI+IOWwvumhtSA8L2E+PC9saT5cXG5cXHRcXHQ8L3VsPlxcblxcdDwvc2VjdGlvbj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuXFx0Ly8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcblxcdFxcdHByb3BzOlsncGFnZUluZm8nXSxcXG5cXHRcXHRjb21wdXRlZDoge1xcblxcdFxcdFxcdHBhZ2U6ZnVuY3Rpb24oKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuIE1hdGguY2VpbCh0aGlzLnBhZ2VJbmZvLnRvdGFsIC8gdGhpcy5wYWdlSW5mby5wYWdlbnVtKTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdHNldExpc3Q6ZnVuY3Rpb24oKXtcXG5cXHRcXHRcXHRcXHR2YXIgbGVuID0gdGhpcy5wYWdlICwgdGVtcCA9IFtdLCBsaXN0ID0gW10sIGNvdW50ID0gTWF0aC5mbG9vcih0aGlzLnBhZ2VJbmZvLnBhZ2Vncm91cCAvIDIpICxjZW50ZXIgPSB0aGlzLnBhZ2VJbmZvLmN1cnJlbnQ7XFxuXFx0XFx0XFx0XFx0aWYoIGxlbiA8PSB0aGlzLnBhZ2VJbmZvLnBhZ2Vncm91cCApe1xcblxcdFxcdFxcdFxcdFxcdHdoaWxlKGxlbi0tKXsgdGVtcC5wdXNoKHt0ZXh0OnRoaXMucGFnZS1sZW4sdmFsOnRoaXMucGFnZS1sZW59KTt9O1xcblxcdFxcdFxcdFxcdFxcdHJldHVybiB0ZW1wO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR3aGlsZShsZW4tLSl7IHRlbXAucHVzaCh0aGlzLnBhZ2UgLSBsZW4pO307XFxuXFx0XFx0XFx0XFx0dmFyIGlkeCA9IHRlbXAuaW5kZXhPZihjZW50ZXIpO1xcblxcdFxcdFxcdFxcdChpZHggPCBjb3VudCkgJiYgKCBjZW50ZXIgPSBjZW50ZXIgKyBjb3VudCAtIGlkeCk7XFxuXFx0XFx0XFx0XFx0KHRoaXMucGFnZUluZm8uY3VycmVudCA+IHRoaXMucGFnZSAtIGNvdW50KSAmJiAoIGNlbnRlciA9IHRoaXMucGFnZSAtIGNvdW50KTtcXG5cXHRcXHRcXHRcXHR0ZW1wID0gdGVtcC5zcGxpY2UoY2VudGVyIC0gY291bnQgLTEsIHRoaXMucGFnZUluZm8ucGFnZWdyb3VwKTtcXG5cXHRcXHRcXHRcXHRkbyB7XFxuXFx0XFx0XFx0XFx0XFx0dmFyIHQgPSB0ZW1wLnNoaWZ0KCk7XFxuXFx0XFx0XFx0XFx0XFx0bGlzdC5wdXNoKHtcXG5cXHRcXHRcXHRcXHRcXHRcXHR0ZXh0OiB0LFxcblxcdFxcdFxcdFxcdFxcdFxcdHZhbDogdFxcblxcdFxcdFxcdFxcdFxcdH0pO1xcblxcdFxcdFxcdFxcdH13aGlsZSh0ZW1wLmxlbmd0aCk7XFxuXFx0XFx0XFx0XFx0aWYoIHRoaXMucGFnZSA+IHRoaXMucGFnZUluZm8ucGFnZWdyb3VwICl7XFxuXFx0XFx0XFx0XFx0XFx0KHRoaXMucGFnZUluZm8uY3VycmVudCA+IGNvdW50ICsgMSkgJiYgbGlzdC51bnNoaWZ0KHsgdGV4dDonLi4uJyx2YWw6IGxpc3RbMF0udmFsIC0gMSB9KTtcXG5cXHRcXHRcXHRcXHRcXHQodGhpcy5wYWdlSW5mby5jdXJyZW50IDwgdGhpcy5wYWdlIC0gY291bnQpICYmIGxpc3QucHVzaCh7IHRleHQ6Jy4uLicsdmFsOiBsaXN0W2xpc3QubGVuZ3RoIC0gMV0udmFsICsgMSB9KTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0cmV0dXJuIGxpc3Q7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Y3JlYXRlZDpmdW5jdGlvbiAoYXJndW1lbnQpIHtcXG5cXHRcXHRcXHQvLyBjb25zb2xlLmxvZyh0aGlzLnBhZ2VJbmZvKVxcblxcdFxcdH0sXFxuXFx0XFx0bWV0aG9kczoge1xcblxcdFxcdFxcdGNsaWNrQ3VycmVudDogZnVuY3Rpb24oaWR4KSB7XFxuXFx0XFx0XFx0XFx0aWYoIHRoaXMucGFnZUluZm8uY3VycmVudCAhPSBpZHggJiYgaWR4ID4gMCAmJiBpZHggPCB0aGlzLnBhZ2UgKyAxKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5wYWdlSW5mby5jdXJyZW50ID0gaWR4O1xcblxcdFxcdFxcdFxcdFxcdHRoaXMuJGVtaXQoJ2NoYW5nZScsdGhpcy5wYWdlSW5mby5jdXJyZW50KTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG5cXHQucGFnZXMtd3JhcCB7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQucGFnaW5hdGlvbiB7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdHBhZGRpbmctbGVmdDogMDtcXG5cXHRcXHRtYXJnaW46IDIwcHggMDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0fVxcblxcdC5wYWdpbmF0aW9uPmxpIHtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmU7XFxuXFx0fVxcblxcdC5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sICAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xcblxcdFxcdHotaW5kZXg6IDM7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjMzM3YWI3O1xcblxcdH1cXG5cXHQucGFnaW5hdGlvbj4uZGlzYWJsZWQ+YSwgLnBhZ2luYXRpb24+LmRpc2FibGVkPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuLCAucGFnaW5hdGlvbj4uZGlzYWJsZWQ+c3Bhbjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICM3Nzc7XFxuXFx0XFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdFxcdGJvcmRlci1jb2xvcjogI2RkZDtcXG5cXHR9XFxuXFx0LnBhZ2luYXRpb24+bGk+YTpob3ZlciwucGFnaW5hdGlvbj5saT5zcGFuOmhvdmVyIHtcXG5cXHRcXHR6LWluZGV4OiAyO1xcblxcdFxcdGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNkZGQ7XFxuXFx0fVxcblxcdC5wYWdpbmF0aW9uPmxpPmEsIC5wYWdpbmF0aW9uPmxpPnNwYW4ge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHRwYWRkaW5nOiA2cHggMTJweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTFweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXG5cXHRcXHRjb2xvcjogIzAwMDtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcblxcdH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZjZlNWJmMVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFmNmU1YmYxXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZUluZm8udG90YWwgPiBfdm0ucGFnZUluZm8ucGFnZW51bSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VJbmZvLnRvdGFsPnBhZ2VJbmZvLnBhZ2VudW1cIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZXMtd3JhcFwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24gY2xlYXJmaXhcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsaVwiLCB7IGNsYXNzOiB7IGRpc2FibGVkOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSAxIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jbGlja0N1cnJlbnQoMSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCIg6aaW6aG1IFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBjbGFzczogeyBkaXNhYmxlZDogX3ZtLnBhZ2VJbmZvLmN1cnJlbnQgPT0gMSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KF92bS5wYWdlSW5mby5jdXJyZW50IC0gMSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCIg5LiK5LiA6aG1IFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uc2V0TGlzdCwgZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSBwLnZhbCB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0ucGFnZUluZm8uY3VycmVudCA9PSBwLnZhbFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5wYWdlSW5mby5za2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogX3ZtLnBhZ2VJbmZvLnNraW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsaWNrQ3VycmVudChwLnZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBcIiArIF92bS5fcyhwLnRleHQpICsgXCIgXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KHAudmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHAudGV4dCkgKyBcIiBcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7IGNsYXNzOiB7IGRpc2FibGVkOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSBfdm0ucGFnZUluZm8ucGFnZSB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KF92bS5wYWdlSW5mby5jdXJyZW50ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiDkuIvkuIDpobVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7IGNsYXNzOiB7IGRpc2FibGVkOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSBfdm0ucGFnZUluZm8ucGFnZSB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KF92bS5wYWdlSW5mby5wYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIOWwvumhtSBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWY2ZTViZjFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFmNmU1YmYxXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMWY2ZTViZjFcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJoZWFkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWFwcGJhciBtZHVpLWFwcGJhci1maXhlZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdG9vbGJhciBtZHVpLWNvbG9yLXRoZW1lXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXR5cG8taGVhZGxpbmUgbWR1aS1oaWRkZW4tbWQtdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgcGF0aDogXCIvXCIgfSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkVCYW5rXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10eXBvLXRpdGxlIG1kdWktaGlkZGVuLXNtLWRvd25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgcGF0aDogXCIvXCIgfSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkVCYW5rIOeUteWtkOmTtuihjFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRvb2xiYXItc3BhY2VyXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBcIm1kdWktbWVudVwiOiBcInt0YXJnZXQ6ICcubWVudV91c2VyJ31cIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwicGVyc29uXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUgfHwgXCLmnKrnmbvlvZVcIikgKyBcIlxcblxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51IG1kdWktbWVudS1jYXNjYWRlIG1lbnVfdXNlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJpcHBsZVwiLCBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwicGVyc29uXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0udXNlci5yZWFsbmFtZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS51c2VyLnJlYWxuYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY29sb3ItZ3JleS01MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLml6Dlp5PlkI1cIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktbWVudS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcmlwcGxlXCIsIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJwaG9uZV9pcGhvbmVcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyLm1vYmlsZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS51c2VyLm1vYmlsZSkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0LWNvbG9yLWdyZXktNTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5peg5omL5py65Y+3XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJpcHBsZVwiLCBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZW1haWxcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLnVzZXIuZW1haWwpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dC1jb2xvci1ncmV5LTUwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaXoOmCrueusVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGl2aWRlclwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1yaXBwbGVcIiwgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW0taWNvblwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyLmxhc3RfbG9naW5cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0udXNlci5sYXN0X2xvZ2luKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHQtY29sb3ItZ3JleS01MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLml6Dljoblj7LnmbvlvZVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkX3Jlc2V0X2RpYWxvZy5vcGVuKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktbWVudS1pdGVtLWljb24gbWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInZwbl9rZXlcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5L+u5pS55a+G56CBXFxuXFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnVzZXJcbiAgICAgICAgICAgID8gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1idG5cIiwgb246IHsgY2xpY2s6IF92bS5sb2dvdXQgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx05rOo6ZSAXFxuXFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1kcmF3ZXIgbWR1aS1jb2xvci13aGl0ZVwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJtYWluLWRyYXdlclwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkLW1lZGlhXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMjAwcHhcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuLi9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmdcIikgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcIm1kdWktY2FyZC1tZWRpYS1jb3ZlcmVkIG1kdWktY2FyZC1tZWRpYS1jb3ZlcmVkLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1wcmltYXJ5LXRpdGxlIG1kdWktdGV4dC11cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkLXByaW1hcnktc3VidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIucmVhbG5hbWUpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1saXN0XCIsXG4gICAgICAgICAgICBhdHRyczogeyBcIm1kdWktY29sbGFwc2VcIjogXCJ7YWNjb3JkaW9uOiB0cnVlfVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIF92bS5fbChfdm0ubWVudSwgZnVuY3Rpb24odmFsLCBrZXksIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgXCJtZHVpLWNvbGxhcHNlLWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtLW9wZW5cIjpcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT0gX3ZtLm1lbnVfaW5kZXggPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtLWhlYWRlciBtZHVpLWxpc3QtaXRlbSBtZHVpLXJpcHBsZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWxpc3QtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29ucyBtZHVpLXRleHQtY29sb3ItZ3JleVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwibWVudVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktbGlzdC1pdGVtLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGtleSkgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtLWFycm93IG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwia2V5Ym9hcmRfYXJyb3dfZG93blwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWNvbGxhcHNlLWl0ZW0tYm9keSBtZHVpLWxpc3QgbWR1aS1saXN0LWRlbnNlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2wodmFsLCBmdW5jdGlvbih2YWwyLCBrZXkyLCBpbmRleDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHZhbDIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktbGlzdC1pdGVtIG1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgcGF0aDogdmFsMi51cmwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJtZHVpLWNvbG9yLXRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHZhbDIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDQpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXAtYS0zXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJyb3V0ZXItdmlld1wiLCB7XG4gICAgICAgICAgICBvbjogeyBpbml0OiBfdm0uaW5pdCwgaW5pdENsZWFyOiBfdm0uaW5pdENsZWFyIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nIHBhc3N3b3JkX3Jlc2V0X2RpYWxvZ1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2ctdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdOS/ruaUueeZu+W9leWvhueggVxcblxcdFxcdFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy1jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIueOsOeZu+W9leWvhueggVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfb2xkLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9vbGRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfb2xkIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZF9yZXNldCxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZF9vbGRcIixcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLmlrDnmbvlvZXlr4bnoIFcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX25ldyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX25ldyB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRfcmVzZXQsXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRfbmV3XCIsXG4gICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi6YeN5aSN5paw55m75b2V5a+G56CBXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZF9yZXNldC5wYXNzd29yZF9uZXdfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9uZXdfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWlucHV0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX25ld19jb25maXJtYXRpb24gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkX3Jlc2V0LFxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkX25ld19jb25maXJtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy1hY3Rpb25zXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWRpYWxvZy1jbG9zZVwiOiBcIlwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlIG1kdWktY29sb3ItdGhlbWVcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucGFzc3dvcmRfcmVzZXRfc3VibWl0IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktYnRuLWljb24gbWR1aS1yaXBwbGUgbWR1aS1yaXBwbGUtd2hpdGVcIixcbiAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWRyYXdlclwiOiBcInt0YXJnZXQ6ICcjbWFpbi1kcmF3ZXInLCBzd2lwZTogdHJ1ZX1cIiB9XG4gICAgICB9LFxuICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiIH0sIFtfdm0uX3YoXCJtZW51XCIpXSldXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLWJ0bi1pY29uXCIsXG4gICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDpsb2NhdGlvbi5yZWxvYWQoKTtcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwicmVmcmVzaFwiKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktbWVudS1pdGVtXCIgfSwgW1xuICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1yaXBwbGVcIiwgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiIH0sXG4gICAgICAgICAgW192bS5fdihcImxhc3RfcGFnZVwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwi5pys5qyh55m75b2VXFxuXFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkLW1lbnVcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGFyZ2V0OiBcIl9ibGFua1wiLCBocmVmOiBcIi8vZ2l0aHViLmNvbS95eWJhd2FuZy9lYmFua1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS10ZXh0LWNvbG9yLWdyZXlcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJnaXRodWJcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXByb2dyZXNzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXByb2dyZXNzLWluZGV0ZXJtaW5hdGUgbWR1aS1oaWRkZW4gYWpheF9sb2FkaW5nXCJcbiAgICAgIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjZhYjJmODJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY2YWIyZjgyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTY2YWIyZjgyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWY2ZTViZjFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdpbmF0aW9uLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTRmOGI5MDZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFmNmU1YmYxXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnaW5hdGlvbi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWY2ZTViZjFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdpbmF0aW9uLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZjZlNWJmMVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWY2ZTViZjFcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjYiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9zbm93X3NxdWFyZV90aW55LnBuZz82Y2Q1OWI0ZmM5NGVkZjgwMTVkNTNhOGFjMjJlNDgzOFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY2YWIyZjgyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjZhYjJmODJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02NmFiMmY4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IiwiXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCJcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5pbXBvcnQgVnVlRGF0ZXBpY2tlckxvY2FsIGZyb20gJ3Z1ZS1kYXRlcGlja2VyLWxvY2FsJ1xuXG4vLyBWdWUuY29tcG9uZW50KCdleGFtcGxlLWNvbXBvbmVudCcsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9FeGFtcGxlQ29tcG9uZW50LnZ1ZScpKTtcblZ1ZS5jb21wb25lbnQoJ3BhZ2luYXRpb24nLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWUnKSk7XG5WdWUuY29tcG9uZW50KCd2dWUtZGF0ZXBpY2tlci1sb2NhbCcsVnVlRGF0ZXBpY2tlckxvY2FsKTtcblxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9jb25maWcvcm91dGVyJ1xuaW1wb3J0IGZ1bmMgZnJvbSAnLi9jb25maWcvZnVuY3Rpb24nXG5pbXBvcnQgQXBpIGZyb20gJy4vY29uZmlnL2FwaSdcblxuVnVlLnVzZShmdW5jKTtcblZ1ZS51c2UoQXBpKTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcblx0cm91dGVyLFxuXHRyZW5kZXI6IGggPT4gaChBcHApXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiXG4vLyB3aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xud2luZG93Lm1kdWkgPSByZXF1aXJlKCcuL2NvbmZpZy9tZHVpLm1pbicpO1xud2luZG93LiQgPSBtZHVpLkpRO1xuXG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vLyB0cnkge1xuLy8gICAgIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy9cbi8vICAgICByZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xuLy8gfSBjYXRjaCAoZSkge31cblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxuLy8gd2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuLy8gd2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIE5leHQgd2Ugd2lsbCByZWdpc3RlciB0aGUgQ1NSRiBUb2tlbiBhcyBhIGNvbW1vbiBoZWFkZXIgd2l0aCBBeGlvcyBzbyB0aGF0XG4gKiBhbGwgb3V0Z29pbmcgSFRUUCByZXF1ZXN0cyBhdXRvbWF0aWNhbGx5IGhhdmUgaXQgYXR0YWNoZWQuIFRoaXMgaXMganVzdFxuICogYSBzaW1wbGUgY29udmVuaWVuY2Ugc28gd2UgZG9uJ3QgaGF2ZSB0byBhdHRhY2ggZXZlcnkgdG9rZW4gbWFudWFsbHkuXG4gKi9cblxuLy8gbGV0IHRva2VuID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJyk7XG4vL1xuLy8gaWYgKHRva2VuKSB7XG4vLyAgICAgd2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9IHRva2VuLmNvbnRlbnQ7XG4vLyB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0NTUkYgdG9rZW4gbm90IGZvdW5kOiBodHRwczovL2xhcmF2ZWwuY29tL2RvY3MvY3NyZiNjc3JmLXgtY3NyZi10b2tlbicpO1xuLy8gfVxuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJ1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6ICd5b3VyLXB1c2hlci1rZXknXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZjZlNWJmMVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2luYXRpb24udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZjZlNWJmMVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnaW5hdGlvbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTFmNmU1YmYxXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZjZlNWJmMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFmNmU1YmYxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjYiLCIvKipcbiAqIEBwYWNrYWdlIGFwaVxuICogQGF1dGhvciB5eWJhd2FuZ1xuICogQGRhdGUgMjAxOC0xMS0xM1xuICogQGRlc2MgYXhpb3Mg6Ieq5a6a5bCB6KOFXG4gKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL3JvdXRlclwiXG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIlxuXG5sZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKTtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9IHRva2VuLmNvbnRlbnQ7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuY29uc3QgdXJsX3ByZWZpeCA9IEFQUF9VUkwgKyBcIi9hZG1pblwiO1xuXG4vKipcbiAqIOivt+axguaLpuaIqlxuICovXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xuXHQvLyDkuIDoiKzlnKjov5nkuKrkvY3nva7liKTmlq10b2tlbuaYr+WQpuWtmOWcqFxuXHRWdWUucHJvdG90eXBlLmxvYWRpbmcoKTtcblx0cmV0dXJuIGNvbmZpZztcbn0sIGZ1bmN0aW9uIChlcnJvcikge1xuXHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xufSk7XG5cbi8qKlxuICog5ZON5bqU5oum5oiqXG4gKi9cbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKXtcblx0VnVlLnByb3RvdHlwZS5sb2FkaW5nKHRydWUpO1xuXHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcblx0XHRsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0aWYoJzEnID09PSBkYXRhLnN0YXR1cyl7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSk7XG5cdFx0fWVsc2UgaWYoJzAnID09PSBkYXRhLnN0YXR1cyl7XG5cdFx0XHRWdWUucHJvdG90eXBlLnRpcHMoZGF0YS5tZXNzYWdlKTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChkYXRhLm1lc3NhZ2UpO1xuXHRcdH1lbHNlIGlmKCcyJyA9PT0gZGF0YS5zdGF0dXMpe1xuXHRcdFx0cm91dGVyLnB1c2goe3BhdGg6Jy9sb2dpbid9KTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCgnTmVlZCBMb2dpbicpO1xuXHRcdH1lbHNle1xuXHRcdFx0VnVlLnByb3RvdHlwZS50aXBzKCflpLHotKXvvIzmnKrmraPluLjmjqXmlLYganNvbicpO1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCflpLHotKXvvIzmnKrmraPluLjmjqXmlLYganNvbicpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBhcGkg5LiN5Lya6L+U5Zue6Z2eIDIwMCDnirbmgIHvvIzmiYDku6Xogq/lrprkuK3pl7Tnjq/oioLlk6rph4zmnInpl67pophcblx0XHRWdWUucHJvdG90eXBlLnRpcHMoJ29Ib34g572R57uc5byA5bCP5beu5LqGJyk7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCdvSG9+IOe9kee7nOW8gOWwj+W3ruS6hicpO1xuXHR9XG59LCBmdW5jdGlvbiAoZXJyb3JzKXtcblx0VnVlLnByb3RvdHlwZS5sb2FkaW5nKHRydWUpO1xuXHRsZXQgbWVzc2FnZSA9IFwi572R57uc6K+35rGC5aSx6LSlXCI7XG5cdGlmIChlcnJvcnMucmVzcG9uc2UpIHtcblx0XHRtZXNzYWdlID0gZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcblx0fWVsc2UgaWYgKGVycm9ycy5yZXF1ZXN0KXtcblx0XHRtZXNzYWdlID0gXCLnqIvluo/lj5Hotbfor7fmsYLlpLHotKVcIjtcblx0fVxuXHRWdWUucHJvdG90eXBlLnRpcHMobWVzc2FnZSk7XG5cdHJldHVybiBQcm9taXNlLnJlamVjdChtZXNzYWdlKTtcbn0pO1xuXG4vKipcbiAqIOWPkei1tyBHRVQg6K+35rGCXG4gKiDojrflj5botYTmupDvvIzkuIDkuKrmiJblpJrkuKpcbiAqIEBwYXJhbSB1cmxcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIHtBeGlvc1Byb21pc2U8YW55Pn1cbiAqL1xuY29uc3QgZ2V0ID0gZnVuY3Rpb24odXJsLHBhcmFtcyl7XG5cdHVybCA9IHVybF9wcmVmaXggKyB1cmw7XG5cdHJldHVybiBheGlvcy5nZXQodXJsLHtcblx0XHRwYXJhbXNcblx0fSk7XG59O1xuXG4vKipcbiAqIOWPkei1tyBQT1NUIOivt+axglxuICog5re75Yqg6LWE5rqQ77yI5LiO5pu05paw5LiA6LW35L2/55SoICB1cGRhdGVPckNyZWF0Ze+8iVxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge0F4aW9zUHJvbWlzZTxhbnk+fVxuICovXG5jb25zdCBwb3N0ID0gZnVuY3Rpb24odXJsLHBhcmFtcyl7XG5cdHVybCA9IHVybF9wcmVmaXggKyB1cmw7XG5cdHJldHVybiBheGlvcy5wb3N0KHVybCxwYXJhbXMpO1xufTtcblxuLyoqXG4gKiByZXF1ZXN0IGEgREVMXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gcGFyYW1zXG4gKiBAcmV0dXJucyB7QXhpb3NQcm9taXNlfVxuICovXG5jb25zdCBkZWwgPSBmdW5jdGlvbih1cmwscGFyYW1zKXtcblx0dXJsID0gdXJsX3ByZWZpeCArIHVybDtcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZSh1cmwscGFyYW1zKTtcbn07XG5cbi8qKlxuICog5Y+R6LW3IFBVVCDor7fmsYJcbiAqIOabtOaWsOi1hOa6kFxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge0F4aW9zUHJvbWlzZTxhbnk+fVxuICovXG5jb25zdCBwdXQgPSBmdW5jdGlvbih1cmwscGFyYW1zKXtcblx0dXJsID0gdXJsX3ByZWZpeCArIHVybDtcblx0cmV0dXJuIGF4aW9zLnB1dCh1cmwscGFyYW1zKTtcbn07XG5cbmNvbnN0ICRBUEkgPSB7XG5cdGdldCxcblx0cG9zdCxcblx0ZGVsLFxuXHRwdXRcbn07XG5cbmV4cG9ydCBkZWZhdWx0e1xuXHRpbnN0YWxsKFZ1ZSxvcHRpb25zKVxuXHR7XG5cdFx0VnVlLnByb3RvdHlwZS4kQVBJID0gJEFQSTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvYXBpLmpzIiwiLyoqXG4gKiDlhazlhbHmlrnms5XnsbtcbiAqIEBwYWNrYWdlIGZ1bmN0aW9uXG4gKiBAYXV0aG9yIHl5YmF3YW5nXG4gKiBAZGF0ZSAyMDE4LTExLTEzXG4gKi9cblxuLyoqXG4gKiDlvLnnqpfmloflrZfmj5DnpLpcbiAqIEBwYXJhbSBtc2dcbiAqIEBwYXJhbSB0eXBlIGluZm8sc3VjY2VzcyxlcnJvcix3YXJuaW5nLHdhcm4sbG9hZGluZ1xuICovXG5jb25zdCB0aXBzID0gZnVuY3Rpb24obXNnKXtcblx0bWR1aS5zbmFja2Jhcih7XG5cdFx0bWVzc2FnZSA6IG1zZyxcblx0XHRwb3NpdGlvbjoncmlnaHQtdG9wJyxcblx0XHR0aW1lb3V0IDogMzAwMCxcblx0XHRidXR0b25UZXh0IDogJ0Nsb3NlJyxcblx0fSk7XG59O1xuXG5cbi8qKlxuICog5o6n5Yi25Y+w5pel5b+XXG4gKiBAcGFyYW0gdmFyaWFibGVcbiAqL1xuY29uc3QgbG9nZ2VyID0gZnVuY3Rpb24odmFyaWFibGUpe1xuXHRjb25zb2xlLmluZm8odHlwZW9mIHZhcmlhYmxlKTtcblx0Y29uc29sZS5sb2codmFyaWFibGUpO1xufTtcblxuXG4vKipcbiAqIHdhaXQgcHJvZ3Jlc3NcbiAqIEBwYXJhbSBjbG9zZVxuICovXG5jb25zdCBsb2FkaW5nID0gZnVuY3Rpb24oY2xvc2Upe1xuXHRpZihjbG9zZSl7XG5cdFx0JCgnLmFqYXhfbG9hZGluZycpLmFkZENsYXNzKCdtZHVpLWhpZGRlbicpO1xuXHR9ZWxzZXtcblx0XHQkKCcuYWpheF9sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ21kdWktaGlkZGVuJyk7XG5cdH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHR7XG5cdGluc3RhbGwoVnVlLG9wdGlvbnMpXG5cdHtcblx0XHRWdWUucHJvdG90eXBlLnRpcHMgPSB0aXBzO1xuXHRcdFZ1ZS5wcm90b3R5cGUubG9nZ2VyID0gbG9nZ2VyO1xuXHRcdFZ1ZS5wcm90b3R5cGUubG9hZGluZyA9IGxvYWRpbmc7XG5cdH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbmZpZy9mdW5jdGlvbi5qcyIsIi8qIVxuICogbWR1aSB2MC40LjEgKGh0dHBzOi8vbWR1aS5vcmcpXG4gKiBDb3B5cmlnaHQgMjAxNi0yMDE4IHpkaHhpb25nXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC5tZHVpPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PXt9OyFmdW5jdGlvbigpe3ZhciB0PTA7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lKSx3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihlLG4pe3ZhciBpPShuZXcgRGF0ZSkuZ2V0VGltZSgpLG89TWF0aC5tYXgoMCwxNi43LShpLXQpKSxhPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpK28pfSxvKTtyZXR1cm4gdD1pK28sYX0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodCl9KX0oKTt2YXIgZT1mdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gaSh0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdC5sZW5ndGh9ZnVuY3Rpb24gbyh0LGUpe3ZhciBuLG87aWYoaSh0KSl7Zm9yKG49MDtuPHQubGVuZ3RoO24rKylpZighMT09PWUuY2FsbCh0W25dLG4sdFtuXSkpcmV0dXJuIHR9ZWxzZSBmb3IobyBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkobykmJiExPT09ZS5jYWxsKHRbb10sbyx0W29dKSlyZXR1cm4gdDtyZXR1cm4gdH1mdW5jdGlvbiBhKHQsZSl7dmFyIGksYT1bXTtyZXR1cm4gbyh0LGZ1bmN0aW9uKHQsbyl7bnVsbCE9PShpPWUobyx0KSkmJmkhPT1uJiZhLnB1c2goaSl9KSxwLmFwcGx5KFtdLGEpfWZ1bmN0aW9uIHModCxlKXtyZXR1cm4gbyhlLGZ1bmN0aW9uKGUsbil7dC5wdXNoKG4pfSksdH1mdW5jdGlvbiByKHQpe2Zvcih2YXIgZT1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspLTE9PT1lLmluZGV4T2YodFtuXSkmJmUucHVzaCh0W25dKTtyZXR1cm4gZX1mdW5jdGlvbiBjKHQpe3JldHVybiBudWxsPT09dH1mdW5jdGlvbiBkKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHR9ZnVuY3Rpb24gdSh0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdH1mdW5jdGlvbiBsKHQpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdH0odCkmJiFjKHQpfXZhciBmPVtdLGg9Zi5zbGljZSxwPWYuY29uY2F0LG09QXJyYXkuaXNBcnJheSx2PWUuZG9jdW1lbnRFbGVtZW50LGc9e30sYj1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKyl0aGlzW2VdPXRbZV07cmV0dXJuIHRoaXMubGVuZ3RoPXQubGVuZ3RoLHRoaXN9LHg9ZnVuY3Rpb24obil7dmFyIGk9W10sbz0wO2lmKCFuKXJldHVybiBuZXcgYihpKTtpZihuIGluc3RhbmNlb2YgYilyZXR1cm4gbjtpZih1KG4pKXt2YXIgYSxzO2lmKFwiPFwiPT09KG49bi50cmltKCkpWzBdJiZcIj5cIj09PW5bbi5sZW5ndGgtMV0pe3ZhciByPVwiZGl2XCI7Zm9yKDA9PT1uLmluZGV4T2YoXCI8bGlcIikmJihyPVwidWxcIiksMD09PW4uaW5kZXhPZihcIjx0clwiKSYmKHI9XCJ0Ym9keVwiKSwwIT09bi5pbmRleE9mKFwiPHRkXCIpJiYwIT09bi5pbmRleE9mKFwiPHRoXCIpfHwocj1cInRyXCIpLDA9PT1uLmluZGV4T2YoXCI8dGJvZHlcIikmJihyPVwidGFibGVcIiksMD09PW4uaW5kZXhPZihcIjxvcHRpb25cIikmJihyPVwic2VsZWN0XCIpLChzPWUuY3JlYXRlRWxlbWVudChyKSkuaW5uZXJIVE1MPW4sbz0wO288cy5jaGlsZE5vZGVzLmxlbmd0aDtvKyspaS5wdXNoKHMuY2hpbGROb2Rlc1tvXSl9ZWxzZSBmb3IoYT1cIiNcIiE9PW5bMF18fG4ubWF0Y2goL1sgLjw+On5dLyk/ZS5xdWVyeVNlbGVjdG9yQWxsKG4pOltlLmdldEVsZW1lbnRCeUlkKG4uc2xpY2UoMSkpXSxvPTA7bzxhLmxlbmd0aDtvKyspYVtvXSYmaS5wdXNoKGFbb10pfWVsc2V7aWYoZChuKSlyZXR1cm4geChlKS5yZWFkeShuKTtpZihuLm5vZGVUeXBlfHxuPT09dHx8bj09PWUpaS5wdXNoKG4pO2Vsc2UgaWYobi5sZW5ndGg+MCYmblswXS5ub2RlVHlwZSlmb3Iobz0wO288bi5sZW5ndGg7bysrKWkucHVzaChuW29dKX1yZXR1cm4gbmV3IGIoaSl9O3guZm49Yi5wcm90b3R5cGUseC5leHRlbmQ9eC5mbi5leHRlbmQ9ZnVuY3Rpb24odCl7aWYodD09PW4pcmV0dXJuIHRoaXM7dmFyIGUsaSxvLGE9YXJndW1lbnRzLmxlbmd0aDtpZigxPT09YSl7Zm9yKGUgaW4gdCl0Lmhhc093blByb3BlcnR5KGUpJiYodGhpc1tlXT10W2VdKTtyZXR1cm4gdGhpc31mb3IoaT0xO2k8YTtpKyspe289YXJndW1lbnRzW2ldO2ZvcihlIGluIG8pby5oYXNPd25Qcm9wZXJ0eShlKSYmKHRbZV09b1tlXSl9cmV0dXJuIHR9LHguZXh0ZW5kKHtlYWNoOm8sbWVyZ2U6cyx1bmlxdWU6cixtYXA6YSxjb250YWluczpmdW5jdGlvbih0LGUpe3JldHVybiB0JiYhZT92LmNvbnRhaW5zKHQpOnQhPT1lJiZ0LmNvbnRhaW5zKGUpfSxwYXJhbTpmdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsaSl7dmFyIGE7bChpKT9vKGksZnVuY3Rpb24obixvKXthPW0oaSkmJiFsKG8pP1wiXCI6bixlKHQrXCJbXCIrYStcIl1cIixvKX0pOihhPWMoaSl8fFwiXCI9PT1pP1wiXCI6XCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGkpLG4ucHVzaChlbmNvZGVVUklDb21wb25lbnQodCkrYSkpfWlmKCFsKHQpKXJldHVyblwiXCI7dmFyIG49W107cmV0dXJuIG8odCxmdW5jdGlvbih0LG4pe2UodCxuKX0pLG4uam9pbihcIiZcIil9fSkseC5mbi5leHRlbmQoe2VhY2g6ZnVuY3Rpb24odCl7cmV0dXJuIG8odGhpcyx0KX0sbWFwOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgYihhKHRoaXMsZnVuY3Rpb24oZSxuKXtyZXR1cm4gdC5jYWxsKGUsbixlKX0pKX0sZ2V0OmZ1bmN0aW9uKHQpe3JldHVybiB0PT09bj9oLmNhbGwodGhpcyk6dGhpc1t0Pj0wP3Q6dCt0aGlzLmxlbmd0aF19LHNsaWNlOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgYihoLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpbHRlcjpmdW5jdGlvbih0KXtpZihkKHQpKXJldHVybiB0aGlzLm1hcChmdW5jdGlvbihlLGkpe3JldHVybiB0LmNhbGwoaSxlLGkpP2k6bn0pO3ZhciBlPXgodCk7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQsaSl7cmV0dXJuIGUuaW5kZXgoaSk+LTE/aTpufSl9LG5vdDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmZpbHRlcih0KTtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCxpKXtyZXR1cm4gZS5pbmRleChpKT4tMT9uOml9KX0sb2Zmc2V0OmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGU9dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57bGVmdDplLmxlZnQrdC5wYWdlWE9mZnNldCx0b3A6ZS50b3ArdC5wYWdlWU9mZnNldCx3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH19cmV0dXJuIG51bGx9LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLm9mZnNldFBhcmVudDt0JiZcInN0YXRpY1wiPT09eCh0KS5jc3MoXCJwb3NpdGlvblwiKTspdD10Lm9mZnNldFBhcmVudDtyZXR1cm4gdHx8dn0pfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKCF0aGlzWzBdKXJldHVybiBudWxsO3ZhciB0LGUsbj17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT10aGlzLmNzcyhcInBvc2l0aW9uXCIpP2U9dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKToodD10aGlzLm9mZnNldFBhcmVudCgpLGU9dGhpcy5vZmZzZXQoKSxmdW5jdGlvbih0LGUpe3JldHVybiB0Lm5vZGVOYW1lJiZ0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1lLnRvTG93ZXJDYXNlKCl9KHRbMF0sXCJodG1sXCIpfHwobj10Lm9mZnNldCgpKSxuPXt0b3A6bi50b3ArdC5jc3MoXCJib3JkZXJUb3BXaWR0aFwiKSxsZWZ0Om4ubGVmdCt0LmNzcyhcImJvcmRlckxlZnRXaWR0aFwiKX0pLHt0b3A6ZS50b3Atbi50b3AtdGhpcy5jc3MoXCJtYXJnaW5Ub3BcIiksbGVmdDplLmxlZnQtbi5sZWZ0LXRoaXMuY3NzKFwibWFyZ2luTGVmdFwiKSx3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH19LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XCJub25lXCI9PT10aGlzLnN0eWxlLmRpc3BsYXkmJih0aGlzLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJub25lXCI9PT10LmdldENvbXB1dGVkU3R5bGUodGhpcyxcIlwiKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSYmKHRoaXMuc3R5bGUuZGlzcGxheT1mdW5jdGlvbih0KXt2YXIgbixpO3JldHVybiBnW3RdfHwobj1lLmNyZWF0ZUVsZW1lbnQodCksZS5ib2R5LmFwcGVuZENoaWxkKG4pLGk9Z2V0Q29tcHV0ZWRTdHlsZShuLFwiXCIpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpLG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSxcIm5vbmVcIj09PWkmJihpPVwiYmxvY2tcIiksZ1t0XT1pKSxnW3RdfSh0aGlzLm5vZGVOYW1lKSl9KX0saGlkZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt0aGlzLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KX0sdG9nZ2xlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIj09PXRoaXMuc3R5bGUuZGlzcGxheT9cIlwiOlwibm9uZVwifSl9LGhhc0NsYXNzOmZ1bmN0aW9uKHQpe3JldHVybiEoIXRoaXNbMF18fCF0KSYmdGhpc1swXS5jbGFzc0xpc3QuY29udGFpbnModCl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMucmVtb3ZlQXR0cmlidXRlKHQpfSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3RyeXtkZWxldGUgdGhpc1t0XX1jYXRjaCh0KXt9fSl9LGVxOmZ1bmN0aW9uKHQpe3ZhciBlPS0xPT09dD90aGlzLnNsaWNlKHQpOnRoaXMuc2xpY2UodCwrdCsxKTtyZXR1cm4gbmV3IGIoZSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGluZGV4OmZ1bmN0aW9uKHQpe3JldHVybiB0P3UodCk/eCh0KS5lcSgwKS5wYXJlbnQoKS5jaGlsZHJlbigpLmdldCgpLmluZGV4T2YodGhpc1swXSk6dGhpcy5nZXQoKS5pbmRleE9mKHQpOnRoaXMuZXEoMCkucGFyZW50KCkuY2hpbGRyZW4oKS5nZXQoKS5pbmRleE9mKHRoaXNbMF0pfSxpczpmdW5jdGlvbihvKXt2YXIgYT10aGlzWzBdO2lmKCFhfHxvPT09bnx8bnVsbD09PW8pcmV0dXJuITE7dmFyIHMscjtpZih1KG8pKXtpZihhPT09ZXx8YT09PXQpcmV0dXJuITE7cmV0dXJuKGEubWF0Y2hlc3x8YS5tYXRjaGVzU2VsZWN0b3J8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS5vTWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yKS5jYWxsKGEsbyl9aWYobz09PWV8fG89PT10KXJldHVybiBhPT09bztpZihvLm5vZGVUeXBlfHxpKG8pKXtmb3Iocz1vLm5vZGVUeXBlP1tvXTpvLHI9MDtyPHMubGVuZ3RoO3IrKylpZihzW3JdPT09YSlyZXR1cm4hMDtyZXR1cm4hMX1yZXR1cm4hMX0sZmluZDpmdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKG4saSl7cyhlLGkucXVlcnlTZWxlY3RvckFsbCh0KSl9KSxuZXcgYihlKX0sY2hpbGRyZW46ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihuLGkpe28oaS5jaGlsZE5vZGVzLGZ1bmN0aW9uKG4saSl7aWYoMSE9PWkubm9kZVR5cGUpcmV0dXJuITA7KCF0fHx0JiZ4KGkpLmlzKHQpKSYmZS5wdXNoKGkpfSl9KSxuZXcgYihyKGUpKX0saGFzOmZ1bmN0aW9uKHQpe3ZhciBlPXUodCk/dGhpcy5maW5kKHQpOngodCksbj1lLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PG47dCsrKWlmKHguY29udGFpbnModGhpcyxlW3RdKSlyZXR1cm4hMH0pfSxzaWJsaW5nczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5wcmV2QWxsKHQpLmFkZCh0aGlzLm5leHRBbGwodCkpfSxjbG9zZXN0OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuIGUuaXModCl8fChlPWUucGFyZW50cyh0KS5lcSgwKSksZX0scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0LGUpe2UucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSl9LGFkZDpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IGIocihzKHRoaXMuZ2V0KCkseCh0KSkpKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5pbm5lckhUTUw9XCJcIn0pfSxjbG9uZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsb25lTm9kZSghMCl9KX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuYmVmb3JlKHQpLnJlbW92ZSgpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3ZhciB0LGUsbj1bXSxpPXRoaXNbMF07cmV0dXJuIGkmJmkuZWxlbWVudHM/KHgoaC5jYWxsKGkuZWxlbWVudHMpKS5lYWNoKGZ1bmN0aW9uKCl7dD14KHRoaXMpLGU9dC5hdHRyKFwidHlwZVwiKSxcImZpZWxkc2V0XCI9PT10aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl8fHRoaXMuZGlzYWJsZWR8fC0xIT09W1wic3VibWl0XCIsXCJyZXNldFwiLFwiYnV0dG9uXCJdLmluZGV4T2YoZSl8fC0xIT09W1wicmFkaW9cIixcImNoZWNrYm94XCJdLmluZGV4T2YoZSkmJiF0aGlzLmNoZWNrZWR8fG4ucHVzaCh7bmFtZTp0LmF0dHIoXCJuYW1lXCIpLHZhbHVlOnQudmFsKCl9KX0pLG4pOm59LHNlcmlhbGl6ZTpmdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiBvKHRoaXMuc2VyaWFsaXplQXJyYXkoKSxmdW5jdGlvbihlLG4pe3QucHVzaChlbmNvZGVVUklDb21wb25lbnQobi5uYW1lKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobi52YWx1ZSkpfSksdC5qb2luKFwiJlwiKX19KSxvKFtcInZhbFwiLFwiaHRtbFwiLFwidGV4dFwiXSxmdW5jdGlvbih0LGUpe3ZhciBpPXswOlwidmFsdWVcIiwxOlwiaW5uZXJIVE1MXCIsMjpcInRleHRDb250ZW50XCJ9LG89ezA6biwxOm4sMjpudWxsfTt4LmZuW2VdPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09bj90aGlzWzBdP3RoaXNbMF1baVt0XV06b1t0XTp0aGlzLmVhY2goZnVuY3Rpb24obixvKXtvW2lbdF1dPWV9KX19KSxvKFtcImF0dHJcIixcInByb3BcIixcImNzc1wiXSxmdW5jdGlvbihlLGkpe3ZhciBhPWZ1bmN0aW9uKHQsbixpKXswPT09ZT90LnNldEF0dHJpYnV0ZShuLGkpOjE9PT1lP3Rbbl09aTp0LnN0eWxlW25dPWl9O3guZm5baV09ZnVuY3Rpb24oaSxzKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoO3JldHVybiAxPT09ciYmdShpKT9mdW5jdGlvbihpLG8pe2lmKCFpKXJldHVybiBuO3JldHVybiAwPT09ZT9pLmdldEF0dHJpYnV0ZShvKToxPT09ZT9pW29dOnQuZ2V0Q29tcHV0ZWRTdHlsZShpLG51bGwpLmdldFByb3BlcnR5VmFsdWUobyl9KHRoaXNbMF0saSk6dGhpcy5lYWNoKGZ1bmN0aW9uKHQsZSl7Mj09PXI/YShlLGkscyk6byhpLGZ1bmN0aW9uKHQsbil7YShlLHQsbil9KX0pfX0pLG8oW1wiYWRkXCIsXCJyZW1vdmVcIixcInRvZ2dsZVwiXSxmdW5jdGlvbih0LGUpe3guZm5bZStcIkNsYXNzXCJdPWZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybiB0aGlzO3ZhciBuPXQuc3BsaXQoXCIgXCIpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCxpKXtvKG4sZnVuY3Rpb24odCxuKXtpLmNsYXNzTGlzdFtlXShuKX0pfSl9fSksbyh7V2lkdGg6XCJ3aWR0aFwiLEhlaWdodDpcImhlaWdodFwifSxmdW5jdGlvbihlLGkpe3guZm5baV09ZnVuY3Rpb24obyl7aWYobz09PW4pe3ZhciBhPXRoaXNbMF07aWYoZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQ9PT10LndpbmRvd30oYSkpcmV0dXJuIGFbXCJpbm5lclwiK2VdO2lmKGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lm5vZGVUeXBlPT09dC5ET0NVTUVOVF9OT0RFfShhKSlyZXR1cm4gYS5kb2N1bWVudEVsZW1lbnRbXCJzY3JvbGxcIitlXTt2YXIgcz14KGEpLHI9MCxjPVwid2lkdGhcIj09PWk7cmV0dXJuXCJBY3RpdmVYT2JqZWN0XCJpbiB0JiZcImJvcmRlci1ib3hcIj09PXMuY3NzKFwiYm94LXNpemluZ1wiKSYmKHI9cGFyc2VGbG9hdChzLmNzcyhcInBhZGRpbmctXCIrKGM/XCJsZWZ0XCI6XCJ0b3BcIikpKStwYXJzZUZsb2F0KHMuY3NzKFwicGFkZGluZy1cIisoYz9cInJpZ2h0XCI6XCJib3R0b21cIikpKStwYXJzZUZsb2F0KHMuY3NzKFwiYm9yZGVyLVwiKyhjP1wibGVmdFwiOlwidG9wXCIpK1wiLXdpZHRoXCIpKStwYXJzZUZsb2F0KHMuY3NzKFwiYm9yZGVyLVwiKyhjP1wicmlnaHRcIjpcImJvdHRvbVwiKStcIi13aWR0aFwiKSkpLHBhcnNlRmxvYXQoeChhKS5jc3MoaSkpK3J9cmV0dXJuIGlzTmFOKE51bWJlcihvKSl8fFwiXCI9PT1vfHwobys9XCJweFwiKSx0aGlzLmNzcyhpLG8pfX0pLG8oe1dpZHRoOlwid2lkdGhcIixIZWlnaHQ6XCJoZWlnaHRcIn0sZnVuY3Rpb24odCxlKXt4LmZuW1wiaW5uZXJcIit0XT1mdW5jdGlvbigpe3ZhciB0PXRoaXNbZV0oKSxuPXgodGhpc1swXSk7cmV0dXJuXCJib3JkZXItYm94XCIhPT1uLmNzcyhcImJveC1zaXppbmdcIikmJih0Kz1wYXJzZUZsb2F0KG4uY3NzKFwicGFkZGluZy1cIisoXCJ3aWR0aFwiPT09ZT9cImxlZnRcIjpcInRvcFwiKSkpLHQrPXBhcnNlRmxvYXQobi5jc3MoXCJwYWRkaW5nLVwiKyhcIndpZHRoXCI9PT1lP1wicmlnaHRcIjpcImJvdHRvbVwiKSkpKSx0fX0pO3ZhciB5PWZ1bmN0aW9uKHQsZSxuLGkpe3ZhciBvLGE9W107cmV0dXJuIHQuZWFjaChmdW5jdGlvbih0LHMpe2ZvcihvPXNbaV07bzspe2lmKDI9PT1uKXtpZighZXx8ZSYmeChvKS5pcyhlKSlicmVhazthLnB1c2gobyl9ZWxzZXtpZigwPT09bil7KCFlfHxlJiZ4KG8pLmlzKGUpKSYmYS5wdXNoKG8pO2JyZWFrfSghZXx8ZSYmeChvKS5pcyhlKSkmJmEucHVzaChvKX1vPW9baV19fSksbmV3IGIocihhKSl9O3JldHVybiBvKFtcIlwiLFwiQWxsXCIsXCJVbnRpbFwiXSxmdW5jdGlvbih0LGUpe3guZm5bXCJwcmV2XCIrZV09ZnVuY3Rpb24oZSl7dmFyIG49MD09PXQ/dGhpczp4KHRoaXMuZ2V0KCkucmV2ZXJzZSgpKTtyZXR1cm4geShuLGUsdCxcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIil9fSksbyhbXCJcIixcIkFsbFwiLFwiVW50aWxcIl0sZnVuY3Rpb24odCxlKXt4LmZuW1wibmV4dFwiK2VdPWZ1bmN0aW9uKGUpe3JldHVybiB5KHRoaXMsZSx0LFwibmV4dEVsZW1lbnRTaWJsaW5nXCIpfX0pLG8oW1wiXCIsXCJzXCIsXCJzVW50aWxcIl0sZnVuY3Rpb24odCxlKXt4LmZuW1wicGFyZW50XCIrZV09ZnVuY3Rpb24oZSl7dmFyIG49MD09PXQ/dGhpczp4KHRoaXMuZ2V0KCkucmV2ZXJzZSgpKTtyZXR1cm4geShuLGUsdCxcInBhcmVudE5vZGVcIil9fSksbyhbXCJhcHBlbmRcIixcInByZXBlbmRcIl0sZnVuY3Rpb24odCxuKXt4LmZuW25dPWZ1bmN0aW9uKG4pe3ZhciBpLGE9dGhpcy5sZW5ndGg+MTtpZih1KG4pKXt2YXIgcz1lLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cy5pbm5lckhUTUw9bixpPWguY2FsbChzLmNoaWxkTm9kZXMpfWVsc2UgaT14KG4pLmdldCgpO3JldHVybiAxPT09dCYmaS5yZXZlcnNlKCksdGhpcy5lYWNoKGZ1bmN0aW9uKGUsbil7byhpLGZ1bmN0aW9uKGksbyl7YSYmZT4wJiYobz1vLmNsb25lTm9kZSghMCkpLDA9PT10P24uYXBwZW5kQ2hpbGQobyk6bi5pbnNlcnRCZWZvcmUobyxuLmNoaWxkTm9kZXNbMF0pfSl9KX19KSxvKFtcImluc2VydEJlZm9yZVwiLFwiaW5zZXJ0QWZ0ZXJcIl0sZnVuY3Rpb24odCxlKXt4LmZuW2VdPWZ1bmN0aW9uKGUpe3ZhciBuPXgoZSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlLGkpe24uZWFjaChmdW5jdGlvbihlLG8pe28ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoMT09PW4ubGVuZ3RoP2k6aS5jbG9uZU5vZGUoITApLDA9PT10P286by5uZXh0U2libGluZyl9KX0pfX0pLG8oe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGJlZm9yZTpcImluc2VydEJlZm9yZVwiLGFmdGVyOlwiaW5zZXJ0QWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24odCxlKXt4LmZuW3RdPWZ1bmN0aW9uKHQpe3JldHVybiB4KHQpW2VdKHRoaXMpLHRoaXN9fSksZnVuY3Rpb24oKXt2YXIgdD1cIm1kdWlFbGVtZW50RGF0YVN0b3JhZ2VcIjt4LmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihlLGksYSl7dmFyIHM9e307aWYoYSE9PW4pc1tpXT1hO2Vsc2V7aWYoIWwoaSkpe2lmKGk9PT1uKXt2YXIgcj17fTtyZXR1cm4gbyhlLmF0dHJpYnV0ZXMsZnVuY3Rpb24odCxlKXt2YXIgbj1lLm5hbWU7aWYoMD09PW4uaW5kZXhPZihcImRhdGEtXCIpKXt2YXIgaT1uLnNsaWNlKDUpLnJlcGxhY2UoLy0uL2csZnVuY3Rpb24odCl7cmV0dXJuIHQuY2hhckF0KDEpLnRvVXBwZXJDYXNlKCl9KTtyW2ldPWUudmFsdWV9fSksZVt0XSYmbyhlW3RdLGZ1bmN0aW9uKHQsZSl7clt0XT1lfSkscn1pZihlW3RdJiZpIGluIGVbdF0pcmV0dXJuIGVbdF1baV07dmFyIGM9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK2kpO3JldHVybiBjfHxufXM9aX1lW3RdfHwoZVt0XT17fSksbyhzLGZ1bmN0aW9uKG4saSl7ZVt0XVtuXT1pfSl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSxuKXtlW3RdJiZlW3RdW25dJiYoZVt0XVtuXT1udWxsLGRlbGV0ZSBlLm1kdWlFbGVtZW50RGF0YVN0b3JhZ2Vbbl0pfX0pLHguZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGU9PT1uP2wodCk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUsbil7eC5kYXRhKG4sdCl9KTp0aGlzWzBdP3guZGF0YSh0aGlzWzBdLHQpOm46dGhpcy5lYWNoKGZ1bmN0aW9uKG4saSl7eC5kYXRhKGksdCxlKX0pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSxuKXt4LnJlbW92ZURhdGEobix0KX0pfX0pfSgpLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0LGUsbixpKXsoZXx8XCJcIikuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7KGZ1bmN0aW9uKHQsZSxuLGkpe3JldHVybihzW2EodCldfHxbXSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0JiYoIWV8fHQuZT09PWUpJiYoIW58fHQuZm4udG9TdHJpbmcoKT09PW4udG9TdHJpbmcoKSkmJighaXx8dC5zZWw9PT1pKX0pfSkodCxlLG4saSkuZm9yRWFjaChmdW5jdGlvbihlKXtkZWxldGUgc1thKHQpXVtlLmldLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLmUsZS5wcm94eSwhMSl9KX0pfWZ1bmN0aW9uIGEodCl7cmV0dXJuIHQuX2VsZW1lbnRJZHx8KHQuX2VsZW1lbnRJZD1yKyspfXZhciBzPXt9LHI9MSxjPWZ1bmN0aW9uKCl7cmV0dXJuITF9O3guZm4uZXh0ZW5kKHtyZWFkeTpmdW5jdGlvbih0KXtyZXR1cm4vY29tcGxldGV8bG9hZGVkfGludGVyYWN0aXZlLy50ZXN0KGUucmVhZHlTdGF0ZSkmJmUuYm9keT90KHgpOmUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe3QoeCl9LCExKSx0aGlzfSxvbjpmdW5jdGlvbih0LGUsaSxyLGYpe3ZhciBoPXRoaXM7aWYodCYmIXUodCkpcmV0dXJuIG8odCxmdW5jdGlvbih0LG4pe2gub24odCxlLGksbil9KSxoO2lmKHUoZSl8fGQocil8fCExPT09cnx8KHI9aSxpPWUsZT1uKSwoZChpKXx8ITE9PT1pKSYmKHI9aSxpPW4pLCExPT09ciYmKHI9YyksMT09PWYpe3ZhciBwPXI7cj1mdW5jdGlvbigpe3JldHVybiBoLm9mZih0LGUscikscC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXshZnVuY3Rpb24odCxlLGksbyxyKXt2YXIgYz1hKHQpO3NbY118fChzW2NdPVtdKTt2YXIgZD0hMTtsKG8pJiZvLnVzZUNhcHR1cmUmJihkPSEwKSxlLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBhPXtlOmUsZm46aSxzZWw6cixpOnNbY10ubGVuZ3RofSx1PWZ1bmN0aW9uKHQsZSl7ITE9PT1pLmFwcGx5KGUsdC5fZGV0YWlsPT09bj9bdF06W3RdLmNvbmNhdCh0Ll9kZXRhaWwpKSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKX0sbD1hLnByb3h5PWZ1bmN0aW9uKGUpe2UuX2RhdGE9byxyP3godCkuZmluZChyKS5nZXQoKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbih0KXsodD09PWUudGFyZ2V0fHx4LmNvbnRhaW5zKHQsZS50YXJnZXQpKSYmdShlLHQpfSk6dShlLHQpfTtzW2NdLnB1c2goYSksdC5hZGRFdmVudExpc3RlbmVyKGEuZSxsLGQpfSl9KHRoaXMsdCxyLGksZSl9KX0sb25lOmZ1bmN0aW9uKHQsZSxuLGkpe3ZhciBhPXRoaXM7cmV0dXJuIHUodCk/dC5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbih0KXthLm9uKHQsZSxuLGksMSl9KTpvKHQsZnVuY3Rpb24odCxpKXt0LnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2Eub24odCxlLG4saSwxKX0pfSksdGhpc30sb2ZmOmZ1bmN0aW9uKHQsZSxhKXt2YXIgcz10aGlzO3JldHVybiB0JiYhdSh0KT8obyh0LGZ1bmN0aW9uKHQsbil7cy5vZmYodCxlLG4pfSkscyk6KHUoZSl8fGQoYSl8fCExPT09YXx8KGE9ZSxlPW4pLCExPT09YSYmKGE9Yykscy5lYWNoKGZ1bmN0aW9uKCl7aSh0aGlzLHQsYSxlKX0pKX0sdHJpZ2dlcjpmdW5jdGlvbihuLGkpe2lmKHUobikpe3ZhciBvO2lmKFtcImNsaWNrXCIsXCJtb3VzZWRvd25cIixcIm1vdXNldXBcIixcIm1vdXNlbW92ZVwiXS5pbmRleE9mKG4pPi0xKXRyeXtvPW5ldyBNb3VzZUV2ZW50KG4se2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pfWNhdGNoKGkpeyhvPWUuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50XCIpKS5pbml0TW91c2VFdmVudChuLCEwLCEwLHQsMCwwLDAsMCwwLCExLCExLCExLCExLDAsbnVsbCl9ZWxzZSB0cnl7bz1uZXcgQ3VzdG9tRXZlbnQobix7ZGV0YWlsOmksYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSl9Y2F0Y2godCl7KG89ZS5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQobiwhMCwhMCxpKX1yZXR1cm4gby5fZGV0YWlsPWksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5kaXNwYXRjaEV2ZW50KG8pfSl9fX0pfSgpLGZ1bmN0aW9uKCl7dmFyIGk9e30sYT0wLHM9e2FqYXhTdGFydDpcInN0YXJ0Lm1kdWkuYWpheFwiLGFqYXhTdWNjZXNzOlwic3VjY2Vzcy5tZHVpLmFqYXhcIixhamF4RXJyb3I6XCJlcnJvci5tZHVpLmFqYXhcIixhamF4Q29tcGxldGU6XCJjb21wbGV0ZS5tZHVpLmFqYXhcIn0scj1mdW5jdGlvbih0KXtyZXR1cm5bXCJHRVRcIixcIkhFQURcIl0uaW5kZXhPZih0KT49MH0sYz1mdW5jdGlvbih0LGUpe3JldHVybih0K1wiJlwiK2UpLnJlcGxhY2UoL1smP117MSwyfS8sXCI/XCIpfTt4LmV4dGVuZCh7YWpheFNldHVwOmZ1bmN0aW9uKHQpe3guZXh0ZW5kKGksdHx8e30pfSxhamF4OmZ1bmN0aW9uKGwpe2Z1bmN0aW9uIGYodCxuKXtsLmdsb2JhbCYmeChlKS50cmlnZ2VyKHQsbil9ZnVuY3Rpb24gaCh0KXt2YXIgZSxuLGk9YXJndW1lbnRzO3QmJih0IGluIGcmJihlPWdbdF0oaVsxXSxpWzJdLGlbM10saVs0XSkpLGxbdF0mJihuPWxbdF0oaVsxXSxpWzJdLGlbM10saVs0XSkpLFwiYmVmb3JlU2VuZFwiIT09dHx8ITEhPT1lJiYhMSE9PW58fCh2PSEwKSl9dmFyIHA9e21ldGhvZDpcIkdFVFwiLGRhdGE6ITEscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY2FjaGU6ITAsdXNlcm5hbWU6XCJcIixwYXNzd29yZDpcIlwiLGhlYWRlcnM6e30seGhyRmllbGRzOnt9LHN0YXR1c0NvZGU6e30sZGF0YVR5cGU6XCJ0ZXh0XCIsanNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXtyZXR1cm5cIm1kdWlqc29ucF9cIitEYXRlLm5vdygpK1wiX1wiKyhhKz0xKX0sY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIix0aW1lb3V0OjAsZ2xvYmFsOiEwfSxtPVtcImJlZm9yZVNlbmRcIixcInN1Y2Nlc3NcIixcImVycm9yXCIsXCJzdGF0dXNDb2RlXCIsXCJjb21wbGV0ZVwiXSx2PSExLGc9aSxiPXt9O28oZyxmdW5jdGlvbih0LGUpe20uaW5kZXhPZih0KTwwJiYocFt0XT1lKX0pO3ZhciB5PShsPXguZXh0ZW5kKHt9LHAsbCkpLm1ldGhvZD1sLm1ldGhvZC50b1VwcGVyQ2FzZSgpO2wudXJsfHwobC51cmw9dC5sb2NhdGlvbi50b1N0cmluZygpKTt2YXIgJDtpZigkPShyKHkpfHxsLnByb2Nlc3NEYXRhKSYmbC5kYXRhJiZbQXJyYXlCdWZmZXIsQmxvYixEb2N1bWVudCxGb3JtRGF0YV0uaW5kZXhPZihsLmRhdGEuY29uc3RydWN0b3IpPDA/dShsLmRhdGEpP2wuZGF0YTp4LnBhcmFtKGwuZGF0YSk6bC5kYXRhLHIoeSkmJiQmJihsLnVybD1jKGwudXJsLCQpLCQ9bnVsbCksXCJqc29ucFwiPT09bC5kYXRhVHlwZSl7dmFyIHc9ZChsLmpzb25wQ2FsbGJhY2spP2wuanNvbnBDYWxsYmFjaygpOmwuanNvbnBDYWxsYmFjayxDPWMobC51cmwsbC5qc29ucCtcIj1cIit3KTtpZihiLm9wdGlvbnM9bCxmKHMuYWpheFN0YXJ0LGIpLGgoXCJiZWZvcmVTZW5kXCIsbnVsbCksdilyZXR1cm47dmFyIGssTz1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIE8udHlwZT1cInRleHQvamF2YXNjcmlwdFwiLE8ub25lcnJvcj1mdW5jdGlvbigpe2smJmNsZWFyVGltZW91dChrKSxmKHMuYWpheEVycm9yLGIpLGgoXCJlcnJvclwiLG51bGwsXCJzY3JpcHRlcnJvclwiKSxmKHMuYWpheENvbXBsZXRlLGIpLGgoXCJjb21wbGV0ZVwiLG51bGwsXCJzY3JpcHRlcnJvclwiKX0sTy5zcmM9Qyx0W3ddPWZ1bmN0aW9uKGUpe2smJmNsZWFyVGltZW91dChrKSxiLmRhdGE9ZSxmKHMuYWpheFN1Y2Nlc3MsYiksaChcInN1Y2Nlc3NcIixlLFwic3VjY2Vzc1wiLG51bGwpLHgoTykucmVtb3ZlKCksTz1udWxsLGRlbGV0ZSB0W3ddfSx4KFwiaGVhZFwiKS5hcHBlbmQoTyksdm9pZChsLnRpbWVvdXQ+MCYmKGs9c2V0VGltZW91dChmdW5jdGlvbigpe3goTykucmVtb3ZlKCksTz1udWxsLGYocy5hamF4RXJyb3IsYiksaChcImVycm9yXCIsbnVsbCxcInRpbWVvdXRcIil9LGwudGltZW91dCkpKX1yKHkpJiYhbC5jYWNoZSYmKGwudXJsPWMobC51cmwsXCJfPVwiK0RhdGUubm93KCkpKTt2YXIgVD1uZXcgWE1MSHR0cFJlcXVlc3Q7VC5vcGVuKHksbC51cmwsbC5hc3luYyxsLnVzZXJuYW1lLGwucGFzc3dvcmQpLCgkJiYhcih5KSYmITEhPT1sLmNvbnRlbnRUeXBlfHxsLmNvbnRlbnRUeXBlKSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsbC5jb250ZW50VHlwZSksXCJqc29uXCI9PT1sLmRhdGFUeXBlJiZULnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiKSxsLmhlYWRlcnMmJm8obC5oZWFkZXJzLGZ1bmN0aW9uKHQsZSl7VC5zZXRSZXF1ZXN0SGVhZGVyKHQsZSl9KSxsLmNyb3NzRG9tYWluPT09biYmKGwuY3Jvc3NEb21haW49L14oW1xcdy1dKzopP1xcL1xcLyhbXlxcL10rKS8udGVzdChsLnVybCkmJlJlZ0V4cC4kMiE9PXQubG9jYXRpb24uaG9zdCksbC5jcm9zc0RvbWFpbnx8VC5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLFwiWE1MSHR0cFJlcXVlc3RcIiksbC54aHJGaWVsZHMmJm8obC54aHJGaWVsZHMsZnVuY3Rpb24odCxlKXtUW3RdPWV9KSxiLnhocj1ULGIub3B0aW9ucz1sO3ZhciBFO3JldHVybiBULm9ubG9hZD1mdW5jdGlvbigpe0UmJmNsZWFyVGltZW91dChFKTt2YXIgdCxlPVQuc3RhdHVzPj0yMDAmJlQuc3RhdHVzPDMwMHx8MD09PVQuc3RhdHVzO2lmKGUpe3Q9MjA0PT09VC5zdGF0dXN8fFwiSEVBRFwiPT09eT9cIm5vY29udGVudFwiOjMwND09PVQuc3RhdHVzP1wibm90bW9kaWZpZWRcIjpcInN1Y2Nlc3NcIjt2YXIgbjtpZihcImpzb25cIj09PWwuZGF0YVR5cGUpe3RyeXtiLmRhdGE9bj1KU09OLnBhcnNlKFQucmVzcG9uc2VUZXh0KX1jYXRjaChlKXt0PVwicGFyc2VyZXJyb3JcIixmKHMuYWpheEVycm9yLGIpLGgoXCJlcnJvclwiLFQsdCl9XCJwYXJzZXJlcnJvclwiIT09dCYmKGYocy5hamF4U3VjY2VzcyxiKSxoKFwic3VjY2Vzc1wiLG4sdCxUKSl9ZWxzZSBiLmRhdGE9bj1cInRleHRcIj09PVQucmVzcG9uc2VUeXBlfHxcIlwiPT09VC5yZXNwb25zZVR5cGU/VC5yZXNwb25zZVRleHQ6VC5yZXNwb25zZSxmKHMuYWpheFN1Y2Nlc3MsYiksaChcInN1Y2Nlc3NcIixuLHQsVCl9ZWxzZSB0PVwiZXJyb3JcIixmKHMuYWpheEVycm9yLGIpLGgoXCJlcnJvclwiLFQsdCk7byhbZy5zdGF0dXNDb2RlLGwuc3RhdHVzQ29kZV0sZnVuY3Rpb24oaSxvKXtvJiZvW1Quc3RhdHVzXSYmKGU/b1tULnN0YXR1c10obix0LFQpOm9bVC5zdGF0dXNdKFQsdCkpfSksZihzLmFqYXhDb21wbGV0ZSxiKSxoKFwiY29tcGxldGVcIixULHQpfSxULm9uZXJyb3I9ZnVuY3Rpb24oKXtFJiZjbGVhclRpbWVvdXQoRSksZihzLmFqYXhFcnJvcixiKSxoKFwiZXJyb3JcIixULFQuc3RhdHVzVGV4dCksZihzLmFqYXhDb21wbGV0ZSxiKSxoKFwiY29tcGxldGVcIixULFwiZXJyb3JcIil9LFQub25hYm9ydD1mdW5jdGlvbigpe3ZhciB0PVwiYWJvcnRcIjtFJiYodD1cInRpbWVvdXRcIixjbGVhclRpbWVvdXQoRSkpLGYocy5hamF4RXJyb3IsYiksaChcImVycm9yXCIsVCx0KSxmKHMuYWpheENvbXBsZXRlLGIpLGgoXCJjb21wbGV0ZVwiLFQsdCl9LGYocy5hamF4U3RhcnQsYiksaChcImJlZm9yZVNlbmRcIixUKSx2P1Q6KGwudGltZW91dD4wJiYoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7VC5hYm9ydCgpfSxsLnRpbWVvdXQpKSxULnNlbmQoJCksVCl9fSksbyhzLGZ1bmN0aW9uKHQsZSl7eC5mblt0XT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5vbihlLGZ1bmN0aW9uKGUsbil7dChlLG4ueGhyLG4ub3B0aW9ucyxuLmRhdGEpfSl9fSl9KCkseH0od2luZG93LGRvY3VtZW50KSxuPWUoZG9jdW1lbnQpLGk9ZSh3aW5kb3cpLG89e307IWZ1bmN0aW9uKCl7dmFyIHQ9W107by5xdWV1ZT1mdW5jdGlvbihlLG4pe2lmKHZvaWQgMD09PXRbZV0mJih0W2VdPVtdKSx2b2lkIDA9PT1uKXJldHVybiB0W2VdO3RbZV0ucHVzaChuKX0sby5kZXF1ZXVlPWZ1bmN0aW9uKGUpe3ZvaWQgMCE9PXRbZV0mJnRbZV0ubGVuZ3RoJiZ0W2VdLnNoaWZ0KCkoKX19KCk7dmFyIGE9e3RvdWNoZXM6MCxpc0FsbG93OmZ1bmN0aW9uKHQpe3ZhciBlPSEwO3JldHVybiBhLnRvdWNoZXMmJltcIm1vdXNlZG93blwiLFwibW91c2V1cFwiLFwibW91c2Vtb3ZlXCIsXCJjbGlja1wiLFwibW91c2VvdmVyXCIsXCJtb3VzZW91dFwiLFwibW91c2VlbnRlclwiLFwibW91c2VsZWF2ZVwiXS5pbmRleE9mKHQudHlwZSk+LTEmJihlPSExKSxlfSxyZWdpc3RlcjpmdW5jdGlvbih0KXtcInRvdWNoc3RhcnRcIj09PXQudHlwZT9hLnRvdWNoZXMrPTE6W1widG91Y2htb3ZlXCIsXCJ0b3VjaGVuZFwiLFwidG91Y2hjYW5jZWxcIl0uaW5kZXhPZih0LnR5cGUpPi0xJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS50b3VjaGVzJiYoYS50b3VjaGVzLT0xKX0sNTAwKX0sc3RhcnQ6XCJ0b3VjaHN0YXJ0IG1vdXNlZG93blwiLG1vdmU6XCJ0b3VjaG1vdmUgbW91c2Vtb3ZlXCIsZW5kOlwidG91Y2hlbmQgbW91c2V1cFwiLGNhbmNlbDpcInRvdWNoY2FuY2VsIG1vdXNlbGVhdmVcIix1bmxvY2s6XCJ0b3VjaGVuZCB0b3VjaG1vdmUgdG91Y2hjYW5jZWxcIn07ZShmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlKFwiYm9keVwiKS5hZGRDbGFzcyhcIm1kdWktbG9hZGVkXCIpfSwwKX0pO3ZhciBzPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O2lmKG51bGw9PT10fHwhdClyZXR1cm4gZTtpZihcIm9iamVjdFwiPT10eXBlb2YgdClyZXR1cm4gdDt2YXIgbj10LmluZGV4T2YoXCJ7XCIpO3RyeXtlPW5ldyBGdW5jdGlvbihcIlwiLFwidmFyIGpzb24gPSBcIit0LnN1YnN0cihuKStcIjsgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoanNvbikpO1wiKSgpfWNhdGNoKHQpe31yZXR1cm4gZX0scj1mdW5jdGlvbih0LG4saSxvLGEpe2F8fChhPXt9KSxhLmluc3Q9aTt2YXIgcz10K1wiLm1kdWkuXCIrbjtcInVuZGVmaW5lZFwiIT10eXBlb2YgalF1ZXJ5JiZqUXVlcnkobykudHJpZ2dlcihzLGEpLGUobykudHJpZ2dlcihzLGEpfTtlLmZuLmV4dGVuZCh7cmVmbG93OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsaWVudExlZnR9KX0sdHJhbnNpdGlvbjpmdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKHQrPVwibXNcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5zdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb249dCx0aGlzLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbj10fSl9LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShhKXtpZihhLnRhcmdldD09PXRoaXMpZm9yKHQuY2FsbCh0aGlzLGEpLG49MDtuPGkubGVuZ3RoO24rKylvLm9mZihpW25dLGUpfXZhciBuLGk9W1wid2Via2l0VHJhbnNpdGlvbkVuZFwiLFwidHJhbnNpdGlvbmVuZFwiXSxvPXRoaXM7aWYodClmb3Iobj0wO248aS5sZW5ndGg7bisrKW8ub24oaVtuXSxlKTtyZXR1cm4gdGhpc30sdHJhbnNmb3JtT3JpZ2luOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt0aGlzLnN0eWxlLndlYmtpdFRyYW5zZm9ybU9yaWdpbj10LHRoaXMuc3R5bGUudHJhbnNmb3JtT3JpZ2luPXR9KX0sdHJhbnNmb3JtOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt0aGlzLnN0eWxlLndlYmtpdFRyYW5zZm9ybT10LHRoaXMuc3R5bGUudHJhbnNmb3JtPXR9KX19KSxlLmV4dGVuZCh7c2hvd092ZXJsYXk6ZnVuY3Rpb24odCl7dmFyIG49ZShcIi5tZHVpLW92ZXJsYXlcIik7bi5sZW5ndGg/KG4uZGF0YShcImlzRGVsZXRlZFwiLDApLHZvaWQgMCE9PXQmJm4uY3NzKFwiei1pbmRleFwiLHQpKToodm9pZCAwPT09dCYmKHQ9MmUzKSxuPWUoJzxkaXYgY2xhc3M9XCJtZHVpLW92ZXJsYXlcIj4nKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KS5yZWZsb3coKS5jc3MoXCJ6LWluZGV4XCIsdCkpO3ZhciBpPW4uZGF0YShcIm92ZXJsYXktbGV2ZWxcIil8fDA7cmV0dXJuIG4uZGF0YShcIm92ZXJsYXktbGV2ZWxcIiwrK2kpLmFkZENsYXNzKFwibWR1aS1vdmVybGF5LXNob3dcIil9LGhpZGVPdmVybGF5OmZ1bmN0aW9uKHQpe3ZhciBuPWUoXCIubWR1aS1vdmVybGF5XCIpO2lmKG4ubGVuZ3RoKXt2YXIgaT10PzE6bi5kYXRhKFwib3ZlcmxheS1sZXZlbFwiKTtpPjE/bi5kYXRhKFwib3ZlcmxheS1sZXZlbFwiLC0taSk6bi5kYXRhKFwib3ZlcmxheS1sZXZlbFwiLDApLnJlbW92ZUNsYXNzKFwibWR1aS1vdmVybGF5LXNob3dcIikuZGF0YShcImlzRGVsZXRlZFwiLDEpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXtuLmRhdGEoXCJpc0RlbGV0ZWRcIikmJm4ucmVtb3ZlKCl9KX19LGxvY2tTY3JlZW46ZnVuY3Rpb24oKXt2YXIgdD1lKFwiYm9keVwiKSxuPXQud2lkdGgoKTt0LmFkZENsYXNzKFwibWR1aS1sb2NrZWRcIikud2lkdGgobik7dmFyIGk9dC5kYXRhKFwibG9ja3NjcmVlbi1sZXZlbFwiKXx8MDt0LmRhdGEoXCJsb2Nrc2NyZWVuLWxldmVsXCIsKytpKX0sdW5sb2NrU2NyZWVuOmZ1bmN0aW9uKHQpe3ZhciBuPWUoXCJib2R5XCIpLGk9dD8xOm4uZGF0YShcImxvY2tzY3JlZW4tbGV2ZWxcIik7aT4xP24uZGF0YShcImxvY2tzY3JlZW4tbGV2ZWxcIiwtLWkpOm4uZGF0YShcImxvY2tzY3JlZW4tbGV2ZWxcIiwwKS5yZW1vdmVDbGFzcyhcIm1kdWktbG9ja2VkXCIpLndpZHRoKFwiXCIpfSx0aHJvdHRsZTpmdW5jdGlvbih0LGUpe3ZhciBuPW51bGw7cmV0dXJuKCFlfHxlPDE2KSYmKGU9MTYpLGZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxvPWFyZ3VtZW50cztudWxsPT09biYmKG49c2V0VGltZW91dChmdW5jdGlvbigpe3QuYXBwbHkoaSxvKSxuPW51bGx9LGUpKX19fSksZnVuY3Rpb24oKXt2YXIgdD17fTtlLmV4dGVuZCh7Z3VpZDpmdW5jdGlvbihlKXtmdW5jdGlvbiBuKCl7cmV0dXJuIE1hdGguZmxvb3IoNjU1MzYqKDErTWF0aC5yYW5kb20oKSkpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSl9aWYodm9pZCAwIT09ZSYmdm9pZCAwIT09dFtlXSlyZXR1cm4gdFtlXTt2YXIgaT1uKCkrbigpK1wiLVwiK24oKStcIi1cIituKCkrXCItXCIrbigpK1wiLVwiK24oKStuKCkrbigpO3JldHVybiB2b2lkIDAhPT1lJiYodFtlXT1pKSxpfX0pfSgpLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbih0LG4saSxvLGEpe3ZhciBzPWUoaSkscj1zLmRhdGEoXCJtZHVpLm11dGF0aW9uXCIpO3J8fChyPVtdLHMuZGF0YShcIm1kdWkubXV0YXRpb25cIixyKSksLTE9PT1yLmluZGV4T2YodCkmJihyLnB1c2godCksbi5jYWxsKGksbyxhKSl9dmFyIGk9e307ZS5mbi5leHRlbmQoe211dGF0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0LG8pe3ZhciBhPWUodGhpcyk7ZS5lYWNoKGksZnVuY3Rpb24oZSxpKXthLmlzKGUpJiZuKGUsaSxhWzBdLHQsbyksYS5maW5kKGUpLmVhY2goZnVuY3Rpb24odCxvKXtuKGUsaSx0aGlzLHQsbyl9KX0pfSl9fSksdC5tdXRhdGlvbj1mdW5jdGlvbih0LG8pe1wic3RyaW5nXCI9PXR5cGVvZiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBvPyhpW3RdPW8sZSh0KS5lYWNoKGZ1bmN0aW9uKGUsaSl7bih0LG8sdGhpcyxlLGkpfSkpOmUoZG9jdW1lbnQpLm11dGF0aW9uKCl9fSgpLHQuSGVhZHJvb209ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsaSl7aWYodGhpcy4kaGVhZHJvb209ZSh0KS5lcSgwKSx0aGlzLiRoZWFkcm9vbS5sZW5ndGgpe3ZhciBvPXRoaXMuJGhlYWRyb29tLmRhdGEoXCJtZHVpLmhlYWRyb29tXCIpO2lmKG8pcmV0dXJuIG87dGhpcy5vcHRpb25zPWUuZXh0ZW5kKHt9LG4saXx8e30pO3ZhciBhPXRoaXMub3B0aW9ucy50b2xlcmFuY2U7YSE9PU9iamVjdChhKSYmKHRoaXMub3B0aW9ucy50b2xlcmFuY2U9e2Rvd246YSx1cDphfSksdGhpcy5faW5pdCgpfX12YXIgbj17dG9sZXJhbmNlOjUsb2Zmc2V0OjAsaW5pdGlhbENsYXNzOlwibWR1aS1oZWFkcm9vbVwiLHBpbm5lZENsYXNzOlwibWR1aS1oZWFkcm9vbS1waW5uZWQtdG9wXCIsdW5waW5uZWRDbGFzczpcIm1kdWktaGVhZHJvb20tdW5waW5uZWQtdG9wXCJ9O3QucHJvdG90eXBlLl9pbml0PWZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1cInBpbm5lZFwiLHRoaXMuJGhlYWRyb29tLmFkZENsYXNzKHRoaXMub3B0aW9ucy5pbml0aWFsQ2xhc3MpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5waW5uZWRDbGFzcytcIiBcIit0aGlzLm9wdGlvbnMudW5waW5uZWRDbGFzcyksdGhpcy5pbml0ZWQ9ITEsdGhpcy5sYXN0U2Nyb2xsWT0wLHRoaXMuX2F0dGFjaEV2ZW50KCl9LHQucHJvdG90eXBlLl9hdHRhY2hFdmVudD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5pbml0ZWR8fCh0Lmxhc3RTY3JvbGxZPXdpbmRvdy5wYWdlWU9mZnNldCx0LmluaXRlZD0hMCxpLm9uKFwic2Nyb2xsXCIsZnVuY3Rpb24oKXt0Ll9zY3JvbGwoKX0pKX0sdC5wcm90b3R5cGUuX3Njcm9sbD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5yYWZJZD13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dmFyIGU9d2luZG93LnBhZ2VZT2Zmc2V0LG49ZT50Lmxhc3RTY3JvbGxZP1wiZG93blwiOlwidXBcIixpPU1hdGguYWJzKGUtdC5sYXN0U2Nyb2xsWSk+PXQub3B0aW9ucy50b2xlcmFuY2Vbbl07ZT50Lmxhc3RTY3JvbGxZJiZlPj10Lm9wdGlvbnMub2Zmc2V0JiZpP3QudW5waW4oKTooZTx0Lmxhc3RTY3JvbGxZJiZpfHxlPD10Lm9wdGlvbnMub2Zmc2V0KSYmdC5waW4oKSx0Lmxhc3RTY3JvbGxZPWV9KX07dmFyIG89ZnVuY3Rpb24odCl7XCJwaW5uaW5nXCI9PT10LnN0YXRlJiYodC5zdGF0ZT1cInBpbm5lZFwiLHIoXCJwaW5uZWRcIixcImhlYWRyb29tXCIsdCx0LiRoZWFkcm9vbSkpLFwidW5waW5uaW5nXCI9PT10LnN0YXRlJiYodC5zdGF0ZT1cInVucGlubmVkXCIscihcInVucGlubmVkXCIsXCJoZWFkcm9vbVwiLHQsdC4kaGVhZHJvb20pKX07cmV0dXJuIHQucHJvdG90eXBlLnBpbj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7XCJwaW5uaW5nXCIhPT10LnN0YXRlJiZcInBpbm5lZFwiIT09dC5zdGF0ZSYmdC4kaGVhZHJvb20uaGFzQ2xhc3ModC5vcHRpb25zLmluaXRpYWxDbGFzcykmJihyKFwicGluXCIsXCJoZWFkcm9vbVwiLHQsdC4kaGVhZHJvb20pLHQuc3RhdGU9XCJwaW5uaW5nXCIsdC4kaGVhZHJvb20ucmVtb3ZlQ2xhc3ModC5vcHRpb25zLnVucGlubmVkQ2xhc3MpLmFkZENsYXNzKHQub3B0aW9ucy5waW5uZWRDbGFzcykudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe28odCl9KSl9LHQucHJvdG90eXBlLnVucGluPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztcInVucGlubmluZ1wiIT09dC5zdGF0ZSYmXCJ1bnBpbm5lZFwiIT09dC5zdGF0ZSYmdC4kaGVhZHJvb20uaGFzQ2xhc3ModC5vcHRpb25zLmluaXRpYWxDbGFzcykmJihyKFwidW5waW5cIixcImhlYWRyb29tXCIsdCx0LiRoZWFkcm9vbSksdC5zdGF0ZT1cInVucGlubmluZ1wiLHQuJGhlYWRyb29tLnJlbW92ZUNsYXNzKHQub3B0aW9ucy5waW5uZWRDbGFzcykuYWRkQ2xhc3ModC5vcHRpb25zLnVucGlubmVkQ2xhc3MpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXtvKHQpfSkpfSx0LnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmluaXRlZHx8dGhpcy5faW5pdCgpfSx0LnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmluaXRlZCYmKHQuaW5pdGVkPSExLHQuJGhlYWRyb29tLnJlbW92ZUNsYXNzKFt0Lm9wdGlvbnMuaW5pdGlhbENsYXNzLHQub3B0aW9ucy5waW5uZWRDbGFzcyx0Lm9wdGlvbnMudW5waW5uZWRDbGFzc10uam9pbihcIiBcIikpLGkub2ZmKFwic2Nyb2xsXCIsZnVuY3Rpb24oKXt0Ll9zY3JvbGwoKX0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0LnJhZklkKSl9LHQucHJvdG90eXBlLmdldFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhdGV9LHR9KCksZShmdW5jdGlvbigpe3QubXV0YXRpb24oXCJbbWR1aS1oZWFkcm9vbV1cIixmdW5jdGlvbigpe3ZhciBuPWUodGhpcyksaT1zKG4uYXR0cihcIm1kdWktaGVhZHJvb21cIikpLG89bi5kYXRhKFwibWR1aS5oZWFkcm9vbVwiKTtvfHwobz1uZXcgdC5IZWFkcm9vbShuLGkpLG4uZGF0YShcIm1kdWkuaGVhZHJvb21cIixvKSl9KX0pO3ZhciBjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGksbyl7dmFyIGE9dGhpczthLm5zPW87dmFyIHM9XCJtZHVpLVwiK2EubnMrXCItaXRlbVwiO2lmKGEuY2xhc3NfaXRlbT1zLGEuY2xhc3NfaXRlbV9vcGVuPXMrXCItb3BlblwiLGEuY2xhc3NfaGVhZGVyPXMrXCItaGVhZGVyXCIsYS5jbGFzc19ib2R5PXMrXCItYm9keVwiLGEuJGNvbGxhcHNlPWUodCkuZXEoMCksYS4kY29sbGFwc2UubGVuZ3RoKXt2YXIgcj1hLiRjb2xsYXBzZS5kYXRhKFwibWR1aS5cIithLm5zKTtpZihyKXJldHVybiByO2Eub3B0aW9ucz1lLmV4dGVuZCh7fSxuLGl8fHt9KSxhLiRjb2xsYXBzZS5vbihcImNsaWNrXCIsXCIuXCIrYS5jbGFzc19oZWFkZXIsZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpLnBhcmVudChcIi5cIithLmNsYXNzX2l0ZW0pO2EuJGNvbGxhcHNlLmNoaWxkcmVuKHQpLmxlbmd0aCYmYS50b2dnbGUodCl9KSxhLiRjb2xsYXBzZS5vbihcImNsaWNrXCIsXCJbbWR1aS1cIithLm5zK1wiLWl0ZW0tY2xvc2VdXCIsZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpLnBhcmVudHMoXCIuXCIrYS5jbGFzc19pdGVtKS5lcSgwKTthLl9pc09wZW4odCkmJmEuY2xvc2UodCl9KX19dmFyIG49e2FjY29yZGlvbjohMX07dC5wcm90b3R5cGUuX2lzT3Blbj1mdW5jdGlvbih0KXtyZXR1cm4gdC5oYXNDbGFzcyh0aGlzLmNsYXNzX2l0ZW1fb3Blbil9LHQucHJvdG90eXBlLl9nZXRJdGVtPWZ1bmN0aW9uKHQpe3JldHVybiBwYXJzZUludCh0KT09PXQ/dGhpcy4kY29sbGFwc2UuY2hpbGRyZW4oXCIuXCIrdGhpcy5jbGFzc19pdGVtKS5lcSh0KTplKHQpLmVxKDApfTt2YXIgaT1mdW5jdGlvbih0LGUsbil7dC5faXNPcGVuKG4pPyhlLnRyYW5zaXRpb24oMCkuaGVpZ2h0KFwiYXV0b1wiKS5yZWZsb3coKS50cmFuc2l0aW9uKFwiXCIpLHIoXCJvcGVuZWRcIix0Lm5zLHQsblswXSkpOihlLmhlaWdodChcIlwiKSxyKFwiY2xvc2VkXCIsdC5ucyx0LG5bMF0pKX07cmV0dXJuIHQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24odCl7dmFyIG49dGhpcyxvPW4uX2dldEl0ZW0odCk7aWYoIW4uX2lzT3BlbihvKSl7bi5vcHRpb25zLmFjY29yZGlvbiYmbi4kY29sbGFwc2UuY2hpbGRyZW4oXCIuXCIrbi5jbGFzc19pdGVtX29wZW4pLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpO3QhPT1vJiZuLmNsb3NlKHQpfSk7dmFyIGE9by5jaGlsZHJlbihcIi5cIituLmNsYXNzX2JvZHkpO2EuaGVpZ2h0KGFbMF0uc2Nyb2xsSGVpZ2h0KS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7aShuLGEsbyl9KSxyKFwib3BlblwiLG4ubnMsbixvWzBdKSxvLmFkZENsYXNzKG4uY2xhc3NfaXRlbV9vcGVuKX19LHQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj1lLl9nZXRJdGVtKHQpO2lmKGUuX2lzT3BlbihuKSl7dmFyIG89bi5jaGlsZHJlbihcIi5cIitlLmNsYXNzX2JvZHkpO3IoXCJjbG9zZVwiLGUubnMsZSxuWzBdKSxuLnJlbW92ZUNsYXNzKGUuY2xhc3NfaXRlbV9vcGVuKSxvLnRyYW5zaXRpb24oMCkuaGVpZ2h0KG9bMF0uc2Nyb2xsSGVpZ2h0KS5yZWZsb3coKS50cmFuc2l0aW9uKFwiXCIpLmhlaWdodChcIlwiKS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7aShlLG8sbil9KX19LHQucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9nZXRJdGVtKHQpO3RoaXMuX2lzT3BlbihlKT90aGlzLmNsb3NlKGUpOnRoaXMub3BlbihlKX0sdC5wcm90b3R5cGUub3BlbkFsbD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC4kY29sbGFwc2UuY2hpbGRyZW4oXCIuXCIrdC5jbGFzc19pdGVtKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIG49ZSh0aGlzKTt0Ll9pc09wZW4obil8fHQub3BlbihuKX0pfSx0LnByb3RvdHlwZS5jbG9zZUFsbD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC4kY29sbGFwc2UuY2hpbGRyZW4oXCIuXCIrdC5jbGFzc19pdGVtKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIG49ZSh0aGlzKTt0Ll9pc09wZW4obikmJnQuY2xvc2Uobil9KX0sdH0oKTtyZXR1cm4gdC5Db2xsYXBzZT1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0LGUpe3JldHVybiBuZXcgYyh0LGUsXCJjb2xsYXBzZVwiKX19KCksZShmdW5jdGlvbigpe3QubXV0YXRpb24oXCJbbWR1aS1jb2xsYXBzZV1cIixmdW5jdGlvbigpe3ZhciBuPWUodGhpcyksaT1uLmRhdGEoXCJtZHVpLmNvbGxhcHNlXCIpO2lmKCFpKXt2YXIgbz1zKG4uYXR0cihcIm1kdWktY29sbGFwc2VcIikpO2k9bmV3IHQuQ29sbGFwc2UobixvKSxuLmRhdGEoXCJtZHVpLmNvbGxhcHNlXCIsaSl9fSl9KSxmdW5jdGlvbigpe2Z1bmN0aW9uIG4odCl7dGhpcy4kdGFibGU9ZSh0KS5lcSgwKSx0aGlzLiR0YWJsZS5sZW5ndGgmJnRoaXMuaW5pdCgpfXZhciBpPWZ1bmN0aW9uKHQpe3JldHVyblwiPFwiK3QrJyBjbGFzcz1cIm1kdWktdGFibGUtY2VsbC1jaGVja2JveFwiPjxsYWJlbCBjbGFzcz1cIm1kdWktY2hlY2tib3hcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPjxpIGNsYXNzPVwibWR1aS1jaGVja2JveC1pY29uXCI+PC9pPjwvbGFiZWw+PC8nK3QrXCI+XCJ9O24ucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt0aGlzLiR0aFJvdz10aGlzLiR0YWJsZS5maW5kKFwidGhlYWQgdHJcIiksdGhpcy4kdGRSb3dzPXRoaXMuJHRhYmxlLmZpbmQoXCJ0Ym9keSB0clwiKSx0aGlzLiR0ZENoZWNrYm94cz1lKCksdGhpcy5zZWxlY3RhYmxlPXRoaXMuJHRhYmxlLmhhc0NsYXNzKFwibWR1aS10YWJsZS1zZWxlY3RhYmxlXCIpLHRoaXMuc2VsZWN0ZWRSb3c9MCx0aGlzLl91cGRhdGVUaENoZWNrYm94KCksdGhpcy5fdXBkYXRlVGRDaGVja2JveCgpLHRoaXMuX3VwZGF0ZU51bWVyaWNDb2woKX0sbi5wcm90b3R5cGUuX3VwZGF0ZVRkQ2hlY2tib3g9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuJHRkUm93cy5lYWNoKGZ1bmN0aW9uKCl7dmFyIG49ZSh0aGlzKTtpZihuLmZpbmQoXCIubWR1aS10YWJsZS1jZWxsLWNoZWNrYm94XCIpLnJlbW92ZSgpLHQuc2VsZWN0YWJsZSl7dmFyIG89ZShpKFwidGRcIikpLnByZXBlbmRUbyhuKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtuLmhhc0NsYXNzKFwibWR1aS10YWJsZS1yb3ctc2VsZWN0ZWRcIikmJihvWzBdLmNoZWNrZWQ9ITAsdC5zZWxlY3RlZFJvdysrKSx0LiR0aENoZWNrYm94WzBdLmNoZWNrZWQ9dC5zZWxlY3RlZFJvdz09PXQuJHRkUm93cy5sZW5ndGgsby5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7b1swXS5jaGVja2VkPyhuLmFkZENsYXNzKFwibWR1aS10YWJsZS1yb3ctc2VsZWN0ZWRcIiksdC5zZWxlY3RlZFJvdysrKToobi5yZW1vdmVDbGFzcyhcIm1kdWktdGFibGUtcm93LXNlbGVjdGVkXCIpLHQuc2VsZWN0ZWRSb3ctLSksdC4kdGhDaGVja2JveFswXS5jaGVja2VkPXQuc2VsZWN0ZWRSb3c9PT10LiR0ZFJvd3MubGVuZ3RofSksdC4kdGRDaGVja2JveHM9dC4kdGRDaGVja2JveHMuYWRkKG8pfX0pfSxuLnByb3RvdHlwZS5fdXBkYXRlVGhDaGVja2JveD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC4kdGhSb3cuZmluZChcIi5tZHVpLXRhYmxlLWNlbGwtY2hlY2tib3hcIikucmVtb3ZlKCksdC5zZWxlY3RhYmxlJiYodC4kdGhDaGVja2JveD1lKGkoXCJ0aFwiKSkucHJlcGVuZFRvKHQuJHRoUm93KS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIG49dC4kdGhDaGVja2JveFswXS5jaGVja2VkO3Quc2VsZWN0ZWRSb3c9bj90LiR0ZFJvd3MubGVuZ3RoOjAsdC4kdGRDaGVja2JveHMuZWFjaChmdW5jdGlvbih0LGUpe2UuY2hlY2tlZD1ufSksdC4kdGRSb3dzLmVhY2goZnVuY3Rpb24odCxpKXtlKGkpW24/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oXCJtZHVpLXRhYmxlLXJvdy1zZWxlY3RlZFwiKX0pfSkpfSxuLnByb3RvdHlwZS5fdXBkYXRlTnVtZXJpY0NvbD1mdW5jdGlvbigpe3ZhciB0LG4saT10aGlzO2kuJHRoUm93LmZpbmQoXCJ0aFwiKS5lYWNoKGZ1bmN0aW9uKG8sYSl7dD1lKGEpLGkuJHRkUm93cy5lYWNoKGZ1bmN0aW9uKCl7bj1lKHRoaXMpO3ZhciBpPXQuaGFzQ2xhc3MoXCJtZHVpLXRhYmxlLWNvbC1udW1lcmljXCIpP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCI7bi5maW5kKFwidGRcIikuZXEobylbaV0oXCJtZHVpLXRhYmxlLWNvbC1udW1lcmljXCIpfSl9KX0sdC5tdXRhdGlvbihcIi5tZHVpLXRhYmxlXCIsZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpO3QuZGF0YShcIm1kdWkudGFibGVcIil8fHQuZGF0YShcIm1kdWkudGFibGVcIixuZXcgbih0KSl9KSx0LnVwZGF0ZVRhYmxlcz1mdW5jdGlvbigpe2UoYXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06XCIubWR1aS10YWJsZVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9ZSh0aGlzKSxpPXQuZGF0YShcIm1kdWkudGFibGVcIik7aT9pLmluaXQoKTp0LmRhdGEoXCJtZHVpLnRhYmxlXCIsbmV3IG4odCkpfSl9fSgpLGZ1bmN0aW9uKCl7dmFyIHQ9e2RlbGF5OjIwMCxzaG93OmZ1bmN0aW9uKHQsbil7aWYoMiE9PXQuYnV0dG9uKXt2YXIgaSxvPShpPVwidG91Y2hlc1wiaW4gdCYmdC50b3VjaGVzLmxlbmd0aD90LnRvdWNoZXNbMF06dCkucGFnZVgsYT1pLnBhZ2VZLHM9bi5vZmZzZXQoKSxyPW8tcy5sZWZ0LGM9YS1zLnRvcCxkPW4uaW5uZXJIZWlnaHQoKSx1PW4uaW5uZXJXaWR0aCgpLGw9TWF0aC5tYXgoTWF0aC5wb3coTWF0aC5wb3coZCwyKStNYXRoLnBvdyh1LDIpLC41KSw0OCksZj1cInRyYW5zbGF0ZTNkKFwiKyh1LzItcikrXCJweCwgXCIrKGQvMi1jKStcInB4LCAwKSBzY2FsZSgxKVwiO2UoJzxkaXYgY2xhc3M9XCJtZHVpLXJpcHBsZS13YXZlXCIgc3R5bGU9XCJ3aWR0aDogJytsK1wicHg7IGhlaWdodDogXCIrbCtcInB4OyBtYXJnaW4tdG9wOi1cIitsLzIrXCJweDsgbWFyZ2luLWxlZnQ6LVwiK2wvMitcInB4OyBsZWZ0OlwiK3IrXCJweDsgdG9wOlwiK2MrJ3B4O1wiPjwvZGl2PicpLmRhdGEoXCJ0cmFuc2xhdGVcIixmKS5wcmVwZW5kVG8obikucmVmbG93KCkudHJhbnNmb3JtKGYpfX0saGlkZTpmdW5jdGlvbihuLGkpe3ZhciBvPWUoaXx8dGhpcyk7by5jaGlsZHJlbihcIi5tZHVpLXJpcHBsZS13YXZlXCIpLmVhY2goZnVuY3Rpb24oKXshZnVuY3Rpb24odCl7aWYodC5sZW5ndGgmJiF0LmRhdGEoXCJpc1JlbW92ZWRcIikpe3QuZGF0YShcImlzUmVtb3ZlZFwiLCEwKTt2YXIgZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5yZW1vdmUoKX0sNDAwKSxuPXQuZGF0YShcInRyYW5zbGF0ZVwiKTt0LmFkZENsYXNzKFwibWR1aS1yaXBwbGUtd2F2ZS1maWxsXCIpLnRyYW5zZm9ybShuLnJlcGxhY2UoXCJzY2FsZSgxKVwiLFwic2NhbGUoMS4wMSlcIikpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZSksdC5hZGRDbGFzcyhcIm1kdWktcmlwcGxlLXdhdmUtb3V0XCIpLnRyYW5zZm9ybShuLnJlcGxhY2UoXCJzY2FsZSgxKVwiLFwic2NhbGUoMS4wMSlcIikpLGU9c2V0VGltZW91dChmdW5jdGlvbigpe3QucmVtb3ZlKCl9LDcwMCksc2V0VGltZW91dChmdW5jdGlvbigpe3QudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe2NsZWFyVGltZW91dChlKSx0LnJlbW92ZSgpfSl9LDApfSl9fShlKHRoaXMpKX0pLG8ub2ZmKFwidG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsIG1vdXNlbW92ZSBtb3VzZXVwIG1vdXNlbGVhdmVcIix0LmhpZGUpfX07bi5vbihhLnN0YXJ0LGZ1bmN0aW9uKG4pe2lmKGEuaXNBbGxvdyhuKSYmKGEucmVnaXN0ZXIobiksbi50YXJnZXQhPT1kb2N1bWVudCkpe3ZhciBpLG89ZShuLnRhcmdldCk7aWYoKGk9by5oYXNDbGFzcyhcIm1kdWktcmlwcGxlXCIpP286by5wYXJlbnRzKFwiLm1kdWktcmlwcGxlXCIpLmVxKDApKS5sZW5ndGgpe2lmKGlbMF0uZGlzYWJsZWR8fG51bGwhPT1pLmF0dHIoXCJkaXNhYmxlZFwiKSlyZXR1cm47aWYoXCJ0b3VjaHN0YXJ0XCI9PT1uLnR5cGUpe3ZhciBzPSExLHI9c2V0VGltZW91dChmdW5jdGlvbigpe3I9bnVsbCx0LnNob3cobixpKX0sdC5kZWxheSksYz1mdW5jdGlvbihlKXtyJiYoY2xlYXJUaW1lb3V0KHIpLHI9bnVsbCx0LnNob3cobixpKSksc3x8KHM9ITAsdC5oaWRlKGUsaSkpfTtpLm9uKFwidG91Y2htb3ZlXCIsZnVuY3Rpb24odCl7ciYmKGNsZWFyVGltZW91dChyKSxyPW51bGwpLGModCl9KS5vbihcInRvdWNoZW5kIHRvdWNoY2FuY2VsXCIsYyl9ZWxzZSB0LnNob3cobixpKSxpLm9uKFwidG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsIG1vdXNlbW92ZSBtb3VzZXVwIG1vdXNlbGVhdmVcIix0LmhpZGUpfX19KS5vbihhLnVubG9jayxhLnJlZ2lzdGVyKX0oKSxmdW5jdGlvbigpe3ZhciBpPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIShcIm9iamVjdFwiIT10eXBlb2YgdHx8bnVsbD09PXR8fHZvaWQgMD09PXRbZV18fCF0W2VdKSYmdFtlXX07bi5vbihcImlucHV0IGZvY3VzIGJsdXJcIixcIi5tZHVpLXRleHRmaWVsZC1pbnB1dFwiLHt1c2VDYXB0dXJlOiEwfSxmdW5jdGlvbih0KXt2YXIgbj10LnRhcmdldCxvPWUobiksYT10LnR5cGUscz1vLnZhbCgpLHI9aSh0LmRldGFpbCxcInJlSW5pdFwiKSxjPWkodC5kZXRhaWwsXCJkb21Mb2FkZWRFdmVudFwiKSxkPW8uYXR0cihcInR5cGVcIil8fFwiXCI7aWYoIShbXCJjaGVja2JveFwiLFwiYnV0dG9uXCIsXCJzdWJtaXRcIixcInJhbmdlXCIsXCJyYWRpb1wiLFwiaW1hZ2VcIl0uaW5kZXhPZihkKT49MCkpe3ZhciB1PW8ucGFyZW50KFwiLm1kdWktdGV4dGZpZWxkXCIpO2lmKFwiZm9jdXNcIj09PWEmJnUuYWRkQ2xhc3MoXCJtZHVpLXRleHRmaWVsZC1mb2N1c1wiKSxcImJsdXJcIj09PWEmJnUucmVtb3ZlQ2xhc3MoXCJtZHVpLXRleHRmaWVsZC1mb2N1c1wiKSxcImJsdXJcIiE9PWEmJlwiaW5wdXRcIiE9PWF8fHVbcyYmXCJcIiE9PXM/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oXCJtZHVpLXRleHRmaWVsZC1ub3QtZW1wdHlcIiksdVtuLmRpc2FibGVkP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKFwibWR1aS10ZXh0ZmllbGQtZGlzYWJsZWRcIiksXCJpbnB1dFwiIT09YSYmXCJibHVyXCIhPT1hfHxjfHwhbi52YWxpZGl0eXx8dVtuLnZhbGlkaXR5LnZhbGlkP1wicmVtb3ZlQ2xhc3NcIjpcImFkZENsYXNzXCJdKFwibWR1aS10ZXh0ZmllbGQtaW52YWxpZC1odG1sNVwiKSxcInRleHRhcmVhXCI9PT10LnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXt2YXIgbD1vLnZhbCgpLGY9ITE7XCJcIj09PWwucmVwbGFjZSgvW1xcclxcbl0vZyxcIlwiKSYmKG8udmFsKFwiIFwiK2wpLGY9ITApLG8uaGVpZ2h0KFwiXCIpO3ZhciBoPW8uaGVpZ2h0KCkscD1uLnNjcm9sbEhlaWdodDtwPmgmJm8uaGVpZ2h0KHApLGYmJm8udmFsKGwpfXImJnUuZmluZChcIi5tZHVpLXRleHRmaWVsZC1jb3VudGVyXCIpLnJlbW92ZSgpO3ZhciBtPW8uYXR0cihcIm1heGxlbmd0aFwiKTtpZihtKXsocnx8YykmJmUoJzxkaXYgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1jb3VudGVyXCI+PHNwYW4gY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1jb3VudGVyLWlucHV0ZWRcIj48L3NwYW4+IC8gJyttK1wiPC9kaXY+XCIpLmFwcGVuZFRvKHUpO3ZhciB2PXMubGVuZ3RoK3Muc3BsaXQoXCJcXG5cIikubGVuZ3RoLTE7dS5maW5kKFwiLm1kdWktdGV4dGZpZWxkLWNvdW50ZXItaW5wdXRlZFwiKS50ZXh0KHYudG9TdHJpbmcoKSl9KHUuZmluZChcIi5tZHVpLXRleHRmaWVsZC1oZWxwZXJcIikubGVuZ3RofHx1LmZpbmQoXCIubWR1aS10ZXh0ZmllbGQtZXJyb3JcIikubGVuZ3RofHxtKSYmdS5hZGRDbGFzcyhcIm1kdWktdGV4dGZpZWxkLWhhcy1ib3R0b21cIil9fSksbi5vbihcImNsaWNrXCIsXCIubWR1aS10ZXh0ZmllbGQtZXhwYW5kYWJsZSAubWR1aS10ZXh0ZmllbGQtaWNvblwiLGZ1bmN0aW9uKCl7ZSh0aGlzKS5wYXJlbnRzKFwiLm1kdWktdGV4dGZpZWxkXCIpLmFkZENsYXNzKFwibWR1aS10ZXh0ZmllbGQtZXhwYW5kZWRcIikuZmluZChcIi5tZHVpLXRleHRmaWVsZC1pbnB1dFwiKVswXS5mb2N1cygpfSksbi5vbihcImNsaWNrXCIsXCIubWR1aS10ZXh0ZmllbGQtZXhwYW5kZWQgLm1kdWktdGV4dGZpZWxkLWNsb3NlXCIsZnVuY3Rpb24oKXtlKHRoaXMpLnBhcmVudHMoXCIubWR1aS10ZXh0ZmllbGRcIikucmVtb3ZlQ2xhc3MoXCJtZHVpLXRleHRmaWVsZC1leHBhbmRlZFwiKS5maW5kKFwiLm1kdWktdGV4dGZpZWxkLWlucHV0XCIpLnZhbChcIlwiKX0pLHQudXBkYXRlVGV4dEZpZWxkcz1mdW5jdGlvbigpe2UoYXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06XCIubWR1aS10ZXh0ZmllbGRcIikuZWFjaChmdW5jdGlvbigpe2UodGhpcykuZmluZChcIi5tZHVpLXRleHRmaWVsZC1pbnB1dFwiKS50cmlnZ2VyKFwiaW5wdXRcIix7cmVJbml0OiEwfSl9KX0sdC5tdXRhdGlvbihcIi5tZHVpLXRleHRmaWVsZFwiLGZ1bmN0aW9uKCl7ZSh0aGlzKS5maW5kKFwiLm1kdWktdGV4dGZpZWxkLWlucHV0XCIpLnRyaWdnZXIoXCJpbnB1dFwiLHtkb21Mb2FkZWRFdmVudDohMH0pfSl9KCksZnVuY3Rpb24oKXt2YXIgaT1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGEoKSxuPWUuJHRyYWNrLGk9ZS4kZmlsbCxvPWUuJHRodW1iLGE9ZS4kaW5wdXQscz1lLm1pbixyPWUubWF4LGM9ZS5kaXNhYmxlZCxkPWUuZGlzY3JldGUsdT1lLiR0aHVtYlRleHQsbD1hLnZhbCgpLGY9KGwtcykvKHItcykqMTAwO2kud2lkdGgoZitcIiVcIiksbi53aWR0aCgxMDAtZitcIiVcIiksYyYmKGkuY3NzKFwicGFkZGluZy1yaWdodFwiLFwiNnB4XCIpLG4uY3NzKFwicGFkZGluZy1sZWZ0XCIsXCI2cHhcIikpLG8uY3NzKFwibGVmdFwiLGYrXCIlXCIpLGQmJnUudGV4dChsKSx0WzA9PT1wYXJzZUZsb2F0KGYpP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKFwibWR1aS1zbGlkZXItemVyb1wiKX0sbz1mdW5jdGlvbih0KXt2YXIgbj1lKCc8ZGl2IGNsYXNzPVwibWR1aS1zbGlkZXItdHJhY2tcIj48L2Rpdj4nKSxvPWUoJzxkaXYgY2xhc3M9XCJtZHVpLXNsaWRlci1maWxsXCI+PC9kaXY+JyksYT1lKCc8ZGl2IGNsYXNzPVwibWR1aS1zbGlkZXItdGh1bWJcIj48L2Rpdj4nKSxzPXQuZmluZCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdJykscj1zWzBdLmRpc2FibGVkO3Rbcj9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShcIm1kdWktc2xpZGVyLWRpc2FibGVkXCIpLHQuZmluZChcIi5tZHVpLXNsaWRlci10cmFja1wiKS5yZW1vdmUoKSx0LmZpbmQoXCIubWR1aS1zbGlkZXItZmlsbFwiKS5yZW1vdmUoKSx0LmZpbmQoXCIubWR1aS1zbGlkZXItdGh1bWJcIikucmVtb3ZlKCksdC5hcHBlbmQobikuYXBwZW5kKG8pLmFwcGVuZChhKTt2YXIgYyxkPXQuaGFzQ2xhc3MoXCJtZHVpLXNsaWRlci1kaXNjcmV0ZVwiKTtkJiYoYz1lKFwiPHNwYW4+PC9zcGFuPlwiKSxhLmVtcHR5KCkuYXBwZW5kKGMpKSx0LmRhdGEoeyR0cmFjazpuLCRmaWxsOm8sJHRodW1iOmEsJGlucHV0OnMsbWluOnMuYXR0cihcIm1pblwiKSxtYXg6cy5hdHRyKFwibWF4XCIpLGRpc2FibGVkOnIsZGlzY3JldGU6ZCwkdGh1bWJUZXh0OmN9KSxpKHQpfSxzPScubWR1aS1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdJztuLm9uKFwiaW5wdXQgY2hhbmdlXCIscyxmdW5jdGlvbigpe3ZhciB0PWUodGhpcykucGFyZW50KCk7aSh0KX0pLm9uKGEuc3RhcnQscyxmdW5jdGlvbih0KXtpZihhLmlzQWxsb3codCkmJihhLnJlZ2lzdGVyKHQpLCF0aGlzLmRpc2FibGVkKSl7ZSh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm1kdWktc2xpZGVyLWZvY3VzXCIpfX0pLm9uKGEuZW5kLHMsZnVuY3Rpb24odCl7aWYoYS5pc0FsbG93KHQpJiYhdGhpcy5kaXNhYmxlZCl7ZSh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcIm1kdWktc2xpZGVyLWZvY3VzXCIpfX0pLm9uKGEudW5sb2NrLHMsYS5yZWdpc3RlciksdC5tdXRhdGlvbihcIi5tZHVpLXNsaWRlclwiLGZ1bmN0aW9uKCl7byhlKHRoaXMpKX0pLHQudXBkYXRlU2xpZGVycz1mdW5jdGlvbigpe2UoYXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06XCIubWR1aS1zbGlkZXJcIikuZWFjaChmdW5jdGlvbigpe28oZSh0aGlzKSl9KX19KCksdC5GYWI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbyl7dmFyIHM9dGhpcztpZihzLiRmYWI9ZSh0KS5lcSgwKSxzLiRmYWIubGVuZ3RoKXt2YXIgcj1zLiRmYWIuZGF0YShcIm1kdWkuZmFiXCIpO2lmKHIpcmV0dXJuIHI7cy5vcHRpb25zPWUuZXh0ZW5kKHt9LGksb3x8e30pLHMuc3RhdGU9XCJjbG9zZWRcIixzLiRidG49cy4kZmFiLmZpbmQoXCIubWR1aS1mYWJcIikscy4kZGlhbD1zLiRmYWIuZmluZChcIi5tZHVpLWZhYi1kaWFsXCIpLHMuJGRpYWxCdG5zPXMuJGRpYWwuZmluZChcIi5tZHVpLWZhYlwiKSxcImhvdmVyXCI9PT1zLm9wdGlvbnMudHJpZ2dlciYmKHMuJGJ0bi5vbihcInRvdWNoc3RhcnQgbW91c2VlbnRlclwiLGZ1bmN0aW9uKCl7cy5vcGVuKCl9KSxzLiRmYWIub24oXCJtb3VzZWxlYXZlXCIsZnVuY3Rpb24oKXtzLmNsb3NlKCl9KSksXCJjbGlja1wiPT09cy5vcHRpb25zLnRyaWdnZXImJnMuJGJ0bi5vbihhLnN0YXJ0LGZ1bmN0aW9uKCl7cy5vcGVuKCl9KSxuLm9uKGEuc3RhcnQsZnVuY3Rpb24odCl7ZSh0LnRhcmdldCkucGFyZW50cyhcIi5tZHVpLWZhYi13cmFwcGVyXCIpLmxlbmd0aHx8cy5jbG9zZSgpfSl9fXZhciBpPXt0cmlnZ2VyOlwiaG92ZXJcIn07cmV0dXJuIHQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzO1wib3BlbmluZ1wiIT09dC5zdGF0ZSYmXCJvcGVuZWRcIiE9PXQuc3RhdGUmJih0LiRkaWFsQnRucy5lYWNoKGZ1bmN0aW9uKGUsbil7bi5zdHlsZVtcInRyYW5zaXRpb24tZGVsYXlcIl09bi5zdHlsZVtcIi13ZWJraXQtdHJhbnNpdGlvbi1kZWxheVwiXT0xNSoodC4kZGlhbEJ0bnMubGVuZ3RoLWUpK1wibXNcIn0pLHQuJGRpYWwuY3NzKFwiaGVpZ2h0XCIsXCJhdXRvXCIpLmFkZENsYXNzKFwibWR1aS1mYWItZGlhbC1zaG93XCIpLHQuJGJ0bi5maW5kKFwiLm1kdWktZmFiLW9wZW5lZFwiKS5sZW5ndGgmJnQuJGJ0bi5hZGRDbGFzcyhcIm1kdWktZmFiLW9wZW5lZFwiKSx0LnN0YXRlPVwib3BlbmluZ1wiLHIoXCJvcGVuXCIsXCJmYWJcIix0LHQuJGZhYiksdC4kZGlhbEJ0bnMuZXEoMCkudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3QuJGJ0bi5oYXNDbGFzcyhcIm1kdWktZmFiLW9wZW5lZFwiKSYmKHQuc3RhdGU9XCJvcGVuZWRcIixyKFwib3BlbmVkXCIsXCJmYWJcIix0LHQuJGZhYikpfSkpfSx0LnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7XCJjbG9zaW5nXCIhPT10LnN0YXRlJiZcImNsb3NlZFwiIT09dC5zdGF0ZSYmKHQuJGRpYWxCdG5zLmVhY2goZnVuY3Rpb24odCxlKXtlLnN0eWxlW1widHJhbnNpdGlvbi1kZWxheVwiXT1lLnN0eWxlW1wiLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5XCJdPTE1KnQrXCJtc1wifSksdC4kZGlhbC5yZW1vdmVDbGFzcyhcIm1kdWktZmFiLWRpYWwtc2hvd1wiKSx0LiRidG4ucmVtb3ZlQ2xhc3MoXCJtZHVpLWZhYi1vcGVuZWRcIiksdC5zdGF0ZT1cImNsb3NpbmdcIixyKFwiY2xvc2VcIixcImZhYlwiLHQsdC4kZmFiKSx0LiRkaWFsQnRucy5lcSgtMSkudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3QuJGJ0bi5oYXNDbGFzcyhcIm1kdWktZmFiLW9wZW5lZFwiKXx8KHQuc3RhdGU9XCJjbG9zZWRcIixyKFwiY2xvc2VkXCIsXCJmYWJcIix0LHQuJGZhYiksdC4kZGlhbC5jc3MoXCJoZWlnaHRcIiwwKSl9KSl9LHQucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe1wib3BlbmluZ1wiPT09dGhpcy5zdGF0ZXx8XCJvcGVuZWRcIj09PXRoaXMuc3RhdGU/dGhpcy5jbG9zZSgpOlwiY2xvc2luZ1wiIT09dGhpcy5zdGF0ZSYmXCJjbG9zZWRcIiE9PXRoaXMuc3RhdGV8fHRoaXMub3BlbigpfSx0LnByb3RvdHlwZS5nZXRTdGF0ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlfSx0LnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dGhpcy4kZmFiLnJlbW92ZUNsYXNzKFwibWR1aS1mYWItaGlkZVwiKX0sdC5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbigpe3RoaXMuJGZhYi5hZGRDbGFzcyhcIm1kdWktZmFiLWhpZGVcIil9LHR9KCksZShmdW5jdGlvbigpe24ub24oXCJ0b3VjaHN0YXJ0IG1vdXNlZG93biBtb3VzZW92ZXJcIixcIlttZHVpLWZhYl1cIixmdW5jdGlvbihuKXt2YXIgaT1lKHRoaXMpLG89aS5kYXRhKFwibWR1aS5mYWJcIik7aWYoIW8pe3ZhciBhPXMoaS5hdHRyKFwibWR1aS1mYWJcIikpO289bmV3IHQuRmFiKGksYSksaS5kYXRhKFwibWR1aS5mYWJcIixvKX19KX0pLHQuU2VsZWN0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGkpe3ZhciBhPXRoaXMscz1hLiRzZWxlY3ROYXRpdmU9ZSh0KS5lcSgwKTtpZihzLmxlbmd0aCl7dmFyIHI9cy5kYXRhKFwibWR1aS5zZWxlY3RcIik7aWYocilyZXR1cm4gcjtzLmhpZGUoKSxhLm9wdGlvbnM9ZS5leHRlbmQoe30sbyxpfHx7fSksYS51bmlxdWVJRD1lLmd1aWQoKSxhLnN0YXRlPVwiY2xvc2VkXCIsYS5oYW5kbGVVcGRhdGUoKSxuLm9uKFwiY2xpY2sgdG91Y2hzdGFydFwiLGZ1bmN0aW9uKHQpe3ZhciBuPWUodC50YXJnZXQpO1wib3BlbmluZ1wiIT09YS5zdGF0ZSYmXCJvcGVuZWRcIiE9PWEuc3RhdGV8fG4uaXMoYS4kc2VsZWN0KXx8ZS5jb250YWlucyhhLiRzZWxlY3RbMF0sblswXSl8fGEuY2xvc2UoKX0pfX12YXIgbz17cG9zaXRpb246XCJhdXRvXCIsZ3V0dGVyOjE2fTt0LnByb3RvdHlwZS5oYW5kbGVVcGRhdGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO1wib3BlbmluZ1wiIT09dC5zdGF0ZSYmXCJvcGVuZWRcIiE9PXQuc3RhdGV8fHQuY2xvc2UoKTt2YXIgbj10LiRzZWxlY3ROYXRpdmU7dC52YWx1ZT1uLnZhbCgpLHQudGV4dD1cIlwiLHQuJGl0ZW1zPWUoKSxuLmZpbmQoXCJvcHRpb25cIikuZWFjaChmdW5jdGlvbihuLGkpe3ZhciBvPXt2YWx1ZTppLnZhbHVlLHRleHQ6aS50ZXh0Q29udGVudCxkaXNhYmxlZDppLmRpc2FibGVkLHNlbGVjdGVkOnQudmFsdWU9PT1pLnZhbHVlLGluZGV4Om59O3QudmFsdWU9PT1vLnZhbHVlJiYodC50ZXh0PW8udGV4dCx0LnNlbGVjdGVkSW5kZXg9biksdC4kaXRlbXM9dC4kaXRlbXMuYWRkKGUoJzxkaXYgY2xhc3M9XCJtZHVpLXNlbGVjdC1tZW51LWl0ZW0gbWR1aS1yaXBwbGVcIicrKG8uZGlzYWJsZWQ/XCIgZGlzYWJsZWRcIjpcIlwiKSsoby5zZWxlY3RlZD9cIiBzZWxlY3RlZFwiOlwiXCIpK1wiPlwiK28udGV4dCtcIjwvZGl2PlwiKS5kYXRhKG8pKX0pLHQuJHNlbGVjdGVkPWUoJzxzcGFuIGNsYXNzPVwibWR1aS1zZWxlY3Qtc2VsZWN0ZWRcIj4nK3QudGV4dCtcIjwvc3Bhbj5cIiksdC4kc2VsZWN0PWUoJzxkaXYgY2xhc3M9XCJtZHVpLXNlbGVjdCBtZHVpLXNlbGVjdC1wb3NpdGlvbi0nK3Qub3B0aW9ucy5wb3NpdGlvbisnXCIgc3R5bGU9XCInK3QuJHNlbGVjdE5hdGl2ZS5hdHRyKFwic3R5bGVcIikrJ1wiIGlkPVwiJyt0LnVuaXF1ZUlEKydcIj48L2Rpdj4nKS5zaG93KCkuYXBwZW5kKHQuJHNlbGVjdGVkKSx0LiRtZW51PWUoJzxkaXYgY2xhc3M9XCJtZHVpLXNlbGVjdC1tZW51XCI+PC9kaXY+JykuYXBwZW5kVG8odC4kc2VsZWN0KS5hcHBlbmQodC4kaXRlbXMpLGUoXCIjXCIrdC51bmlxdWVJRCkucmVtb3ZlKCksbi5hZnRlcih0LiRzZWxlY3QpLHQuc2l6ZT10LiRzZWxlY3ROYXRpdmUuYXR0cihcInNpemVcIiksdC5zaXplfHwodC5zaXplPXQuJGl0ZW1zLmxlbmd0aCx0LnNpemU+OCYmKHQuc2l6ZT04KSksdC5zaXplPDImJih0LnNpemU9MiksdC4kaXRlbXMub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7aWYoXCJjbG9zaW5nXCIhPT10LnN0YXRlKXt2YXIgaT1lKHRoaXMpO2lmKCFpLmRhdGEoXCJkaXNhYmxlZFwiKSl7dmFyIG89aS5kYXRhKCk7dC4kc2VsZWN0ZWQudGV4dChvLnRleHQpLG4udmFsKG8udmFsdWUpLHQuJGl0ZW1zLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKSxpLmF0dHIoXCJzZWxlY3RlZFwiLFwiXCIpLHQuc2VsZWN0ZWRJbmRleD1vLmluZGV4LHQudmFsdWU9by52YWx1ZSx0LnRleHQ9by50ZXh0LG4udHJpZ2dlcihcImNoYW5nZVwiKSx0LmNsb3NlKCl9fX0pLHQuJHNlbGVjdC5vbihcImNsaWNrXCIsZnVuY3Rpb24obil7dmFyIGk9ZShuLnRhcmdldCk7aS5pcyhcIi5tZHVpLXNlbGVjdC1tZW51XCIpfHxpLmlzKFwiLm1kdWktc2VsZWN0LW1lbnUtaXRlbVwiKXx8dC50b2dnbGUoKX0pfTt2YXIgYT1mdW5jdGlvbih0KXt0LiRzZWxlY3QucmVtb3ZlQ2xhc3MoXCJtZHVpLXNlbGVjdC1jbG9zaW5nXCIpLFwib3BlbmluZ1wiPT09dC5zdGF0ZSYmKHQuc3RhdGU9XCJvcGVuZWRcIixyKFwib3BlbmVkXCIsXCJzZWxlY3RcIix0LHQuJHNlbGVjdE5hdGl2ZSksdC4kbWVudS5jc3MoXCJvdmVyZmxvdy15XCIsXCJhdXRvXCIpKSxcImNsb3NpbmdcIj09PXQuc3RhdGUmJih0LnN0YXRlPVwiY2xvc2VkXCIscihcImNsb3NlZFwiLFwic2VsZWN0XCIsdCx0LiRzZWxlY3ROYXRpdmUpLHQuJHNlbGVjdC53aWR0aChcIlwiKSx0LiRtZW51LmNzcyh7XCJtYXJnaW4tdG9wXCI6XCJcIixoZWlnaHQ6XCJcIix3aWR0aDpcIlwifSkpfTtyZXR1cm4gdC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7XCJvcGVuaW5nXCIhPT10LnN0YXRlJiZcIm9wZW5lZFwiIT09dC5zdGF0ZSYmKHQuc3RhdGU9XCJvcGVuaW5nXCIscihcIm9wZW5cIixcInNlbGVjdFwiLHQsdC4kc2VsZWN0TmF0aXZlKSxmdW5jdGlvbih0KXt2YXIgZSxuLG89aS5oZWlnaHQoKSxhPXQub3B0aW9ucy5ndXR0ZXIscz10Lm9wdGlvbnMucG9zaXRpb24scj1wYXJzZUludCh0LiRzZWxlY3QuaGVpZ2h0KCkpLGM9dC4kaXRlbXMuZXEoMCksZD1wYXJzZUludChjLmhlaWdodCgpKSx1PXBhcnNlSW50KGMuY3NzKFwibWFyZ2luLXRvcFwiKSksbD1wYXJzZUZsb2F0KHQuJHNlbGVjdC53aWR0aCgpKy4wMSksZj1kKnQuc2l6ZSsyKnUsaD10LiRzZWxlY3RbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO2lmKFwiYXV0b1wiPT09cyl7dmFyIHA9by0yKmE7Zj5wJiYoZj1wKSxuPS0odSt0LnNlbGVjdGVkSW5kZXgqZCsoZC1yKS8yKTt2YXIgbT0tKHUrKHQuc2l6ZS0xKSpkKyhkLXIpLzIpO248bSYmKG49bSk7dmFyIHY9aCtuO3Y8YT9uPS0oaC1hKTp2K2YrYT5vJiYobj0tKGgrZithLW8pKSxlPXQuc2VsZWN0ZWRJbmRleCpkK2QvMit1K1wicHhcIn1lbHNlXCJib3R0b21cIj09PXM/KG49cixlPVwiMHB4XCIpOlwidG9wXCI9PT1zJiYobj0tZi0xLGU9XCIxMDAlXCIpO3QuJHNlbGVjdC53aWR0aChsKSx0LiRtZW51LndpZHRoKGwpLmhlaWdodChmKS5jc3Moe1wibWFyZ2luLXRvcFwiOm4rXCJweFwiLFwidHJhbnNmb3JtLW9yaWdpblwiOlwiY2VudGVyIFwiK2UrXCIgMFwifSl9KHQpLHQuJHNlbGVjdC5hZGRDbGFzcyhcIm1kdWktc2VsZWN0LW9wZW5cIiksdC4kbWVudS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7YSh0KX0pKX0sdC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO1wiY2xvc2luZ1wiIT09dC5zdGF0ZSYmXCJjbG9zZWRcIiE9PXQuc3RhdGUmJih0LnN0YXRlPVwiY2xvc2luZ1wiLHIoXCJjbG9zZVwiLFwic2VsZWN0XCIsdCx0LiRzZWxlY3ROYXRpdmUpLHQuJG1lbnUuY3NzKFwib3ZlcmZsb3cteVwiLFwiXCIpLHQuJHNlbGVjdC5yZW1vdmVDbGFzcyhcIm1kdWktc2VsZWN0LW9wZW5cIikuYWRkQ2xhc3MoXCJtZHVpLXNlbGVjdC1jbG9zaW5nXCIpLHQuJG1lbnUudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe2EodCl9KSl9LHQucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe1wib3BlbmluZ1wiPT09dGhpcy5zdGF0ZXx8XCJvcGVuZWRcIj09PXRoaXMuc3RhdGU/dGhpcy5jbG9zZSgpOlwiY2xvc2luZ1wiIT09dGhpcy5zdGF0ZSYmXCJjbG9zZWRcIiE9PXRoaXMuc3RhdGV8fHRoaXMub3BlbigpfSx0fSgpLGUoZnVuY3Rpb24oKXt0Lm11dGF0aW9uKFwiW21kdWktc2VsZWN0XVwiLGZ1bmN0aW9uKCl7dmFyIG49ZSh0aGlzKSxpPW4uZGF0YShcIm1kdWkuc2VsZWN0XCIpO2l8fChpPW5ldyB0LlNlbGVjdChuLHMobi5hdHRyKFwibWR1aS1zZWxlY3RcIikpKSxuLmRhdGEoXCJtZHVpLnNlbGVjdFwiLGkpKX0pfSksZShmdW5jdGlvbigpe3QubXV0YXRpb24oXCIubWR1aS1hcHBiYXItc2Nyb2xsLWhpZGVcIixmdW5jdGlvbigpe3ZhciBuPWUodGhpcyk7bi5kYXRhKFwibWR1aS5oZWFkcm9vbVwiLG5ldyB0LkhlYWRyb29tKG4pKX0pLHQubXV0YXRpb24oXCIubWR1aS1hcHBiYXItc2Nyb2xsLXRvb2xiYXItaGlkZVwiLGZ1bmN0aW9uKCl7dmFyIG49ZSh0aGlzKSxpPW5ldyB0LkhlYWRyb29tKG4se3Bpbm5lZENsYXNzOlwibWR1aS1oZWFkcm9vbS1waW5uZWQtdG9vbGJhclwiLHVucGlubmVkQ2xhc3M6XCJtZHVpLWhlYWRyb29tLXVucGlubmVkLXRvb2xiYXJcIn0pO24uZGF0YShcIm1kdWkuaGVhZHJvb21cIixpKX0pfSksdC5UYWI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbyl7dmFyIGE9dGhpcztpZihhLiR0YWI9ZSh0KS5lcSgwKSxhLiR0YWIubGVuZ3RoKXt2YXIgcz1hLiR0YWIuZGF0YShcIm1kdWkudGFiXCIpO2lmKHMpcmV0dXJuIHM7YS5vcHRpb25zPWUuZXh0ZW5kKHt9LG4sb3x8e30pLGEuJHRhYnM9YS4kdGFiLmNoaWxkcmVuKFwiYVwiKSxhLiRpbmRpY2F0b3I9ZSgnPGRpdiBjbGFzcz1cIm1kdWktdGFiLWluZGljYXRvclwiPjwvZGl2PicpLmFwcGVuZFRvKGEuJHRhYiksYS5hY3RpdmVJbmRleD0hMTt2YXIgcj1sb2NhdGlvbi5oYXNoO3ImJmEuJHRhYnMuZWFjaChmdW5jdGlvbih0LG4pe2lmKGUobikuYXR0cihcImhyZWZcIik9PT1yKXJldHVybiBhLmFjdGl2ZUluZGV4PXQsITF9KSwhMT09PWEuYWN0aXZlSW5kZXgmJmEuJHRhYnMuZWFjaChmdW5jdGlvbih0LG4pe2lmKGUobikuaGFzQ2xhc3MoXCJtZHVpLXRhYi1hY3RpdmVcIikpcmV0dXJuIGEuYWN0aXZlSW5kZXg9dCwhMX0pLGEuJHRhYnMubGVuZ3RoJiYhMT09PWEuYWN0aXZlSW5kZXgmJihhLmFjdGl2ZUluZGV4PTApLGEuX3NldEFjdGl2ZSgpLGkub24oXCJyZXNpemVcIixlLnRocm90dGxlKGZ1bmN0aW9uKCl7YS5fc2V0SW5kaWNhdG9yUG9zaXRpb24oKX0sMTAwKSksYS4kdGFicy5lYWNoKGZ1bmN0aW9uKHQsZSl7YS5fYmluZFRhYkV2ZW50KGUpfSl9fXZhciBuPXt0cmlnZ2VyOlwiY2xpY2tcIixsb29wOiExfSxvPWZ1bmN0aW9uKHQpe3JldHVybiB0WzBdLmRpc2FibGVkfHxudWxsIT09dC5hdHRyKFwiZGlzYWJsZWRcIil9O3JldHVybiB0LnByb3RvdHlwZS5fYmluZFRhYkV2ZW50PWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMsaT1lKHQpLGE9ZnVuY3Rpb24oZSl7byhpKT9lLnByZXZlbnREZWZhdWx0KCk6KG4uYWN0aXZlSW5kZXg9bi4kdGFicy5pbmRleCh0KSxuLl9zZXRBY3RpdmUoKSl9O2kub24oXCJjbGlja1wiLGEpLFwiaG92ZXJcIj09PW4ub3B0aW9ucy50cmlnZ2VyJiZpLm9uKFwibW91c2VlbnRlclwiLGEpLGkub24oXCJjbGlja1wiLGZ1bmN0aW9uKHQpezA9PT1pLmF0dHIoXCJocmVmXCIpLmluZGV4T2YoXCIjXCIpJiZ0LnByZXZlbnREZWZhdWx0KCl9KX0sdC5wcm90b3R5cGUuX3NldEFjdGl2ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC4kdGFicy5lYWNoKGZ1bmN0aW9uKG4saSl7dmFyIGE9ZShpKSxzPWEuYXR0cihcImhyZWZcIik7biE9PXQuYWN0aXZlSW5kZXh8fG8oYSk/KGEucmVtb3ZlQ2xhc3MoXCJtZHVpLXRhYi1hY3RpdmVcIiksZShzKS5oaWRlKCkpOihhLmhhc0NsYXNzKFwibWR1aS10YWItYWN0aXZlXCIpfHwocihcImNoYW5nZVwiLFwidGFiXCIsdCx0LiR0YWIse2luZGV4OnQuYWN0aXZlSW5kZXgsaWQ6cy5zdWJzdHIoMSl9KSxyKFwic2hvd1wiLFwidGFiXCIsdCxhKSxhLmFkZENsYXNzKFwibWR1aS10YWItYWN0aXZlXCIpKSxlKHMpLnNob3coKSx0Ll9zZXRJbmRpY2F0b3JQb3NpdGlvbigpKX0pfSx0LnByb3RvdHlwZS5fc2V0SW5kaWNhdG9yUG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdCxlOyExIT09dGhpcy5hY3RpdmVJbmRleD8odD10aGlzLiR0YWJzLmVxKHRoaXMuYWN0aXZlSW5kZXgpLG8odCl8fChlPXQub2Zmc2V0KCksdGhpcy4kaW5kaWNhdG9yLmNzcyh7bGVmdDplLmxlZnQrdGhpcy4kdGFiWzBdLnNjcm9sbExlZnQtdGhpcy4kdGFiWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQrXCJweFwiLHdpZHRoOnQud2lkdGgoKStcInB4XCJ9KSkpOnRoaXMuJGluZGljYXRvci5jc3Moe2xlZnQ6MCx3aWR0aDowfSl9LHQucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXshMSE9PXRoaXMuYWN0aXZlSW5kZXgmJih0aGlzLiR0YWJzLmxlbmd0aD50aGlzLmFjdGl2ZUluZGV4KzE/dGhpcy5hY3RpdmVJbmRleCsrOnRoaXMub3B0aW9ucy5sb29wJiYodGhpcy5hY3RpdmVJbmRleD0wKSx0aGlzLl9zZXRBY3RpdmUoKSl9LHQucHJvdG90eXBlLnByZXY9ZnVuY3Rpb24oKXshMSE9PXRoaXMuYWN0aXZlSW5kZXgmJih0aGlzLmFjdGl2ZUluZGV4PjA/dGhpcy5hY3RpdmVJbmRleC0tOnRoaXMub3B0aW9ucy5sb29wJiYodGhpcy5hY3RpdmVJbmRleD10aGlzLiR0YWJzLmxlbmd0aC0xKSx0aGlzLl9zZXRBY3RpdmUoKSl9LHQucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24odCl7dmFyIGU9dGhpczshMSE9PWUuYWN0aXZlSW5kZXgmJihwYXJzZUludCh0KT09PXQ/ZS5hY3RpdmVJbmRleD10OmUuJHRhYnMuZWFjaChmdW5jdGlvbihuLGkpe2lmKGkuaWQ9PT10KXJldHVybiBlLmFjdGl2ZUluZGV4PW4sITF9KSxlLl9zZXRBY3RpdmUoKSl9LHQucHJvdG90eXBlLmhhbmRsZVVwZGF0ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LiR0YWJzLG49dC4kdGFiLmNoaWxkcmVuKFwiYVwiKSxpPWUuZ2V0KCksbz1uLmdldCgpO2lmKCFuLmxlbmd0aClyZXR1cm4gdC5hY3RpdmVJbmRleD0hMSx0LiR0YWJzPW4sdm9pZCB0Ll9zZXRJbmRpY2F0b3JQb3NpdGlvbigpO24uZWFjaChmdW5jdGlvbihlLG4pe2kuaW5kZXhPZihuKTwwJiYodC5fYmluZFRhYkV2ZW50KG4pLCExPT09dC5hY3RpdmVJbmRleD90LmFjdGl2ZUluZGV4PTA6ZTw9dC5hY3RpdmVJbmRleCYmdC5hY3RpdmVJbmRleCsrKX0pLGUuZWFjaChmdW5jdGlvbihlLG4pe28uaW5kZXhPZihuKTwwJiYoZTx0LmFjdGl2ZUluZGV4P3QuYWN0aXZlSW5kZXgtLTplPT09dC5hY3RpdmVJbmRleCYmKHQuYWN0aXZlSW5kZXg9MCkpfSksdC4kdGFicz1uLHQuX3NldEFjdGl2ZSgpfSx0fSgpLGUoZnVuY3Rpb24oKXt0Lm11dGF0aW9uKFwiW21kdWktdGFiXVwiLGZ1bmN0aW9uKCl7dmFyIG49ZSh0aGlzKSxpPW4uZGF0YShcIm1kdWkudGFiXCIpO2l8fChpPW5ldyB0LlRhYihuLHMobi5hdHRyKFwibWR1aS10YWJcIikpKSxuLmRhdGEoXCJtZHVpLnRhYlwiLGkpKX0pfSksdC5EcmF3ZXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQscyl7dmFyIHI9dGhpcztpZihyLiRkcmF3ZXI9ZSh0KS5lcSgwKSxyLiRkcmF3ZXIubGVuZ3RoKXt2YXIgYz1yLiRkcmF3ZXIuZGF0YShcIm1kdWkuZHJhd2VyXCIpO2lmKGMpcmV0dXJuIGM7ci5vcHRpb25zPWUuZXh0ZW5kKHt9LG4sc3x8e30pLHIub3ZlcmxheT0hMSxyLnBvc2l0aW9uPXIuJGRyYXdlci5oYXNDbGFzcyhcIm1kdWktZHJhd2VyLXJpZ2h0XCIpP1wicmlnaHRcIjpcImxlZnRcIixyLiRkcmF3ZXIuaGFzQ2xhc3MoXCJtZHVpLWRyYXdlci1jbG9zZVwiKT9yLnN0YXRlPVwiY2xvc2VkXCI6ci4kZHJhd2VyLmhhc0NsYXNzKFwibWR1aS1kcmF3ZXItb3BlblwiKT9yLnN0YXRlPVwib3BlbmVkXCI6bygpP3Iuc3RhdGU9XCJvcGVuZWRcIjpyLnN0YXRlPVwiY2xvc2VkXCIsaS5vbihcInJlc2l6ZVwiLGUudGhyb3R0bGUoZnVuY3Rpb24oKXtvKCk/KHIub3ZlcmxheSYmIXIub3B0aW9ucy5vdmVybGF5JiYoZS5oaWRlT3ZlcmxheSgpLHIub3ZlcmxheT0hMSxlLnVubG9ja1NjcmVlbigpKSxyLiRkcmF3ZXIuaGFzQ2xhc3MoXCJtZHVpLWRyYXdlci1jbG9zZVwiKXx8KHIuc3RhdGU9XCJvcGVuZWRcIikpOnIub3ZlcmxheXx8XCJvcGVuZWRcIiE9PXIuc3RhdGV8fChyLiRkcmF3ZXIuaGFzQ2xhc3MoXCJtZHVpLWRyYXdlci1vcGVuXCIpPyhlLnNob3dPdmVybGF5KCksci5vdmVybGF5PSEwLGUubG9ja1NjcmVlbigpLGUoXCIubWR1aS1vdmVybGF5XCIpLm9uZShcImNsaWNrXCIsZnVuY3Rpb24oKXtyLmNsb3NlKCl9KSk6ci5zdGF0ZT1cImNsb3NlZFwiKX0sMTAwKSksci4kZHJhd2VyLmZpbmQoXCJbbWR1aS1kcmF3ZXItY2xvc2VdXCIpLmVhY2goZnVuY3Rpb24oKXtlKHRoaXMpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe3IuY2xvc2UoKX0pfSksYShyKX19dmFyIG49e292ZXJsYXk6ITEsc3dpcGU6ITF9LG89ZnVuY3Rpb24oKXtyZXR1cm4gaS53aWR0aCgpPj0xMDI0fSxhPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSxuKXt2YXIgaT1cInRyYW5zbGF0ZShcIistMSooXCJyaWdodFwiPT09dC5wb3NpdGlvbj8tMToxKSplK1wicHgsIDApICFpbXBvcnRhbnQ7XCI7dC4kZHJhd2VyLmNzcyhcImNzc1RleHRcIixcInRyYW5zZm9ybTpcIitpKyhuP1widHJhbnNpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1wiOlwiXCIpKX1mdW5jdGlvbiBpKCl7dC4kZHJhd2VyLmNzcyh7dHJhbnNmb3JtOlwiXCIsdHJhbnNpdGlvbjpcIlwifSl9ZnVuY3Rpb24gbygpe3JldHVybiB0LiRkcmF3ZXIud2lkdGgoKSsxMH1mdW5jdGlvbiBhKHQpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChcImNsb3NpbmdcIj09PWg/Zi10Om8oKStmLXQsMCksbygpKX1mdW5jdGlvbiBzKGUpe3U9ZS50b3VjaGVzWzBdLnBhZ2VYLFwicmlnaHRcIj09PXQucG9zaXRpb24mJih1PW0ud2lkdGgoKS11KSxsPWUudG91Y2hlc1swXS5wYWdlWSxcIm9wZW5lZFwiIT09dC5zdGF0ZSYmKHU+dnx8ZCE9PXMpfHwocD0hMCxtLm9uKHt0b3VjaG1vdmU6cix0b3VjaGVuZDpjLHRvdWNoY2FuY2VsOnJ9KSl9ZnVuY3Rpb24gcihpKXt2YXIgbz1pLnRvdWNoZXNbMF0ucGFnZVg7XCJyaWdodFwiPT09dC5wb3NpdGlvbiYmKG89bS53aWR0aCgpLW8pO3ZhciBzPWkudG91Y2hlc1swXS5wYWdlWTtpZihoKW4oYShvKSwhMCk7ZWxzZSBpZihwKXt2YXIgcj1NYXRoLmFicyhvLXUpLGQ9TWF0aC5hYnMocy1sKTtyPjgmJmQ8PTg/KGY9byxoPVwib3BlbmVkXCI9PT10LnN0YXRlP1wiY2xvc2luZ1wiOlwib3BlbmluZ1wiLGUubG9ja1NjcmVlbigpLG4oYShvKSwhMCkpOnI8PTgmJmQ+OCYmYygpfX1mdW5jdGlvbiBjKG4pe2lmKGgpe3ZhciBzPW4uY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XCJyaWdodFwiPT09dC5wb3NpdGlvbiYmKHM9bS53aWR0aCgpLXMpO3ZhciBkPWEocykvbygpO3A9ITE7dmFyIHU9aDtoPW51bGwsXCJvcGVuaW5nXCI9PT11P2Q8LjkyPyhpKCksdC5vcGVuKCkpOmkoKTpkPi4wOD8oaSgpLHQuY2xvc2UoKSk6aSgpLGUudW5sb2NrU2NyZWVuKCl9ZWxzZSBwPSExO20ub2ZmKHt0b3VjaG1vdmU6cix0b3VjaGVuZDpjLHRvdWNoY2FuY2VsOnJ9KX12YXIgZCx1LGwsZixoPSExLHA9ITEsbT1lKFwiYm9keVwiKSx2PTI0O3Qub3B0aW9ucy5zd2lwZSYmKGR8fChtLm9uKFwidG91Y2hzdGFydFwiLHMpLGQ9cykpfSxzPWZ1bmN0aW9uKHQpe3QuJGRyYXdlci5oYXNDbGFzcyhcIm1kdWktZHJhd2VyLW9wZW5cIik/KHQuc3RhdGU9XCJvcGVuZWRcIixyKFwib3BlbmVkXCIsXCJkcmF3ZXJcIix0LHQuJGRyYXdlcikpOih0LnN0YXRlPVwiY2xvc2VkXCIscihcImNsb3NlZFwiLFwiZHJhd2VyXCIsdCx0LiRkcmF3ZXIpKX07cmV0dXJuIHQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzO1wib3BlbmluZ1wiIT09dC5zdGF0ZSYmXCJvcGVuZWRcIiE9PXQuc3RhdGUmJih0LnN0YXRlPVwib3BlbmluZ1wiLHIoXCJvcGVuXCIsXCJkcmF3ZXJcIix0LHQuJGRyYXdlciksdC5vcHRpb25zLm92ZXJsYXl8fGUoXCJib2R5XCIpLmFkZENsYXNzKFwibWR1aS1kcmF3ZXItYm9keS1cIit0LnBvc2l0aW9uKSx0LiRkcmF3ZXIucmVtb3ZlQ2xhc3MoXCJtZHVpLWRyYXdlci1jbG9zZVwiKS5hZGRDbGFzcyhcIm1kdWktZHJhd2VyLW9wZW5cIikudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3ModCl9KSxvKCkmJiF0Lm9wdGlvbnMub3ZlcmxheXx8KHQub3ZlcmxheT0hMCxlLnNob3dPdmVybGF5KCkub25lKFwiY2xpY2tcIixmdW5jdGlvbigpe3QuY2xvc2UoKX0pLGUubG9ja1NjcmVlbigpKSl9LHQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztcImNsb3NpbmdcIiE9PXQuc3RhdGUmJlwiY2xvc2VkXCIhPT10LnN0YXRlJiYodC5zdGF0ZT1cImNsb3NpbmdcIixyKFwiY2xvc2VcIixcImRyYXdlclwiLHQsdC4kZHJhd2VyKSx0Lm9wdGlvbnMub3ZlcmxheXx8ZShcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJtZHVpLWRyYXdlci1ib2R5LVwiK3QucG9zaXRpb24pLHQuJGRyYXdlci5hZGRDbGFzcyhcIm1kdWktZHJhd2VyLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwibWR1aS1kcmF3ZXItb3BlblwiKS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7cyh0KX0pLHQub3ZlcmxheSYmKGUuaGlkZU92ZXJsYXkoKSx0Lm92ZXJsYXk9ITEsZS51bmxvY2tTY3JlZW4oKSkpfSx0LnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXtcIm9wZW5pbmdcIj09PXRoaXMuc3RhdGV8fFwib3BlbmVkXCI9PT10aGlzLnN0YXRlP3RoaXMuY2xvc2UoKTpcImNsb3NpbmdcIiE9PXRoaXMuc3RhdGUmJlwiY2xvc2VkXCIhPT10aGlzLnN0YXRlfHx0aGlzLm9wZW4oKX0sdC5wcm90b3R5cGUuZ2V0U3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGF0ZX0sdH0oKSxlKGZ1bmN0aW9uKCl7dC5tdXRhdGlvbihcIlttZHVpLWRyYXdlcl1cIixmdW5jdGlvbigpe3ZhciBuPWUodGhpcyksaT1zKG4uYXR0cihcIm1kdWktZHJhd2VyXCIpKSxvPWkudGFyZ2V0O2RlbGV0ZSBpLnRhcmdldDt2YXIgYT1lKG8pLmVxKDApLHI9YS5kYXRhKFwibWR1aS5kcmF3ZXJcIik7cnx8KHI9bmV3IHQuRHJhd2VyKGEsaSksYS5kYXRhKFwibWR1aS5kcmF3ZXJcIixyKSksbi5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtyLnRvZ2dsZSgpfSl9KX0pLHQuRGlhbG9nPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3ZhciBpPXRoaXM7aWYoaS4kZGlhbG9nPWUodCkuZXEoMCksaS4kZGlhbG9nLmxlbmd0aCl7dmFyIG89aS4kZGlhbG9nLmRhdGEoXCJtZHVpLmRpYWxvZ1wiKTtpZihvKXJldHVybiBvO2UuY29udGFpbnMoZG9jdW1lbnQuYm9keSxpLiRkaWFsb2dbMF0pfHwoaS5hcHBlbmQ9ITAsZShcImJvZHlcIikuYXBwZW5kKGkuJGRpYWxvZykpLGkub3B0aW9ucz1lLmV4dGVuZCh7fSxkLG58fHt9KSxpLnN0YXRlPVwiY2xvc2VkXCIsaS4kZGlhbG9nLmZpbmQoXCJbbWR1aS1kaWFsb2ctY2FuY2VsXVwiKS5lYWNoKGZ1bmN0aW9uKCl7ZSh0aGlzKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtyKFwiY2FuY2VsXCIsXCJkaWFsb2dcIixpLGkuJGRpYWxvZyksaS5vcHRpb25zLmNsb3NlT25DYW5jZWwmJmkuY2xvc2UoKX0pfSksaS4kZGlhbG9nLmZpbmQoXCJbbWR1aS1kaWFsb2ctY29uZmlybV1cIikuZWFjaChmdW5jdGlvbigpe2UodGhpcykub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7cihcImNvbmZpcm1cIixcImRpYWxvZ1wiLGksaS4kZGlhbG9nKSxpLm9wdGlvbnMuY2xvc2VPbkNvbmZpcm0mJmkuY2xvc2UoKX0pfSksaS4kZGlhbG9nLmZpbmQoXCJbbWR1aS1kaWFsb2ctY2xvc2VdXCIpLmVhY2goZnVuY3Rpb24oKXtlKHRoaXMpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2kuY2xvc2UoKX0pfSl9fXZhciBhLHMsYyxkPXtoaXN0b3J5OiEwLG92ZXJsYXk6ITAsbW9kYWw6ITEsY2xvc2VPbkVzYzohMCxjbG9zZU9uQ2FuY2VsOiEwLGNsb3NlT25Db25maXJtOiEwLGRlc3Ryb3lPbkNsb3NlZDohMX0sdT1cIl9fbWRfZGlhbG9nXCIsbD1mdW5jdGlvbigpe2lmKGMpe3ZhciB0PWMuJGRpYWxvZyxlPXQuY2hpbGRyZW4oXCIubWR1aS1kaWFsb2ctdGl0bGVcIiksbj10LmNoaWxkcmVuKFwiLm1kdWktZGlhbG9nLWNvbnRlbnRcIiksbz10LmNoaWxkcmVuKFwiLm1kdWktZGlhbG9nLWFjdGlvbnNcIik7dC5oZWlnaHQoXCJcIiksbi5oZWlnaHQoXCJcIik7dmFyIGE9dC5oZWlnaHQoKTt0LmNzcyh7dG9wOihpLmhlaWdodCgpLWEpLzIrXCJweFwiLGhlaWdodDphK1wicHhcIn0pLG4uaGVpZ2h0KGEtKGUuaGVpZ2h0KCl8fDApLShvLmhlaWdodCgpfHwwKSl9fSxmPWZ1bmN0aW9uKCl7bG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkuaW5kZXhPZihcIiZtZHVpLWRpYWxvZ1wiKTwwJiZjLmNsb3NlKCEwKX0saD1mdW5jdGlvbih0KXtlKHQudGFyZ2V0KS5oYXNDbGFzcyhcIm1kdWktb3ZlcmxheVwiKSYmYyYmYy5jbG9zZSgpfSxwPWZ1bmN0aW9uKHQpe3QuJGRpYWxvZy5oYXNDbGFzcyhcIm1kdWktZGlhbG9nLW9wZW5cIik/KHQuc3RhdGU9XCJvcGVuZWRcIixyKFwib3BlbmVkXCIsXCJkaWFsb2dcIix0LHQuJGRpYWxvZykpOih0LnN0YXRlPVwiY2xvc2VkXCIscihcImNsb3NlZFwiLFwiZGlhbG9nXCIsdCx0LiRkaWFsb2cpLHQuJGRpYWxvZy5oaWRlKCksMD09PW8ucXVldWUodSkubGVuZ3RoJiYhYyYmcyYmKGUudW5sb2NrU2NyZWVuKCkscz0hMSksaS5vZmYoXCJyZXNpemVcIixlLnRocm90dGxlKGZ1bmN0aW9uKCl7bCgpfSwxMDApKSx0Lm9wdGlvbnMuZGVzdHJveU9uQ2xvc2VkJiZ0LmRlc3Ryb3koKSl9O3JldHVybiB0LnByb3RvdHlwZS5fZG9PcGVuPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztpZihjPXQsc3x8KGUubG9ja1NjcmVlbigpLHM9ITApLHQuJGRpYWxvZy5zaG93KCksbCgpLGkub24oXCJyZXNpemVcIixlLnRocm90dGxlKGZ1bmN0aW9uKCl7bCgpfSwxMDApKSx0LnN0YXRlPVwib3BlbmluZ1wiLHIoXCJvcGVuXCIsXCJkaWFsb2dcIix0LHQuJGRpYWxvZyksdC4kZGlhbG9nLmFkZENsYXNzKFwibWR1aS1kaWFsb2ctb3BlblwiKS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7cCh0KX0pLGF8fChhPWUuc2hvd092ZXJsYXkoNTEwMCkpLGFbdC5vcHRpb25zLm1vZGFsP1wib2ZmXCI6XCJvblwiXShcImNsaWNrXCIsaCkuY3NzKFwib3BhY2l0eVwiLHQub3B0aW9ucy5vdmVybGF5P1wiXCI6MCksdC5vcHRpb25zLmhpc3Rvcnkpe3ZhciBuPWxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO24uaW5kZXhPZihcIiZtZHVpLWRpYWxvZ1wiKT4tMSYmKG49bi5yZXBsYWNlKC8mbWR1aS1kaWFsb2cvZyxcIlwiKSksbG9jYXRpb24uaGFzaD1uK1wiJm1kdWktZGlhbG9nXCIsaS5vbihcImhhc2hjaGFuZ2VcIixmKX19LHQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzO1wib3BlbmluZ1wiIT09dC5zdGF0ZSYmXCJvcGVuZWRcIiE9PXQuc3RhdGUmJihjJiYoXCJvcGVuaW5nXCI9PT1jLnN0YXRlfHxcIm9wZW5lZFwiPT09Yy5zdGF0ZSl8fG8ucXVldWUodSkubGVuZ3RoP28ucXVldWUodSxmdW5jdGlvbigpe3QuX2RvT3BlbigpfSk6dC5fZG9PcGVuKCkpfSx0LnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpe1wiY2xvc2luZ1wiIT09dC5zdGF0ZSYmXCJjbG9zZWRcIiE9PXQuc3RhdGUmJihjPW51bGwsdC5zdGF0ZT1cImNsb3NpbmdcIixyKFwiY2xvc2VcIixcImRpYWxvZ1wiLHQsdC4kZGlhbG9nKSwwPT09by5xdWV1ZSh1KS5sZW5ndGgmJmEmJihlLmhpZGVPdmVybGF5KCksYT1udWxsKSx0LiRkaWFsb2cucmVtb3ZlQ2xhc3MoXCJtZHVpLWRpYWxvZy1vcGVuXCIpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXtwKHQpfSksdC5vcHRpb25zLmhpc3RvcnkmJjA9PT1vLnF1ZXVlKHUpLmxlbmd0aCYmKGFyZ3VtZW50c1swXXx8d2luZG93Lmhpc3RvcnkuYmFjaygpLGkub2ZmKFwiaGFzaGNoYW5nZVwiLGYpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7by5kZXF1ZXVlKHUpfSwxMDApKX0sMCl9LHQucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe1wib3BlbmluZ1wiPT09dGhpcy5zdGF0ZXx8XCJvcGVuZWRcIj09PXRoaXMuc3RhdGU/dGhpcy5jbG9zZSgpOlwiY2xvc2luZ1wiIT09dGhpcy5zdGF0ZSYmXCJjbG9zZWRcIiE9PXRoaXMuc3RhdGV8fHRoaXMub3BlbigpfSx0LnByb3RvdHlwZS5nZXRTdGF0ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlfSx0LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5hcHBlbmQmJnRoaXMuJGRpYWxvZy5yZW1vdmUoKSx0aGlzLiRkaWFsb2cucmVtb3ZlRGF0YShcIm1kdWkuZGlhbG9nXCIpLDAhPT1vLnF1ZXVlKHUpLmxlbmd0aHx8Y3x8KGEmJihlLmhpZGVPdmVybGF5KCksYT1udWxsKSxzJiYoZS51bmxvY2tTY3JlZW4oKSxzPSExKSl9LHQucHJvdG90eXBlLmhhbmRsZVVwZGF0ZT1mdW5jdGlvbigpe2woKX0sbi5vbihcImtleWRvd25cIixmdW5jdGlvbih0KXtjJiZjLm9wdGlvbnMuY2xvc2VPbkVzYyYmXCJvcGVuZWRcIj09PWMuc3RhdGUmJjI3PT09dC5rZXlDb2RlJiZjLmNsb3NlKCl9KSx0fSgpLGUoZnVuY3Rpb24oKXtuLm9uKFwiY2xpY2tcIixcIlttZHVpLWRpYWxvZ11cIixmdW5jdGlvbigpe3ZhciBuPWUodGhpcyksaT1zKG4uYXR0cihcIm1kdWktZGlhbG9nXCIpKSxvPWkudGFyZ2V0O2RlbGV0ZSBpLnRhcmdldDt2YXIgYT1lKG8pLmVxKDApLHI9YS5kYXRhKFwibWR1aS5kaWFsb2dcIik7cnx8KHI9bmV3IHQuRGlhbG9nKGEsaSksYS5kYXRhKFwibWR1aS5kaWFsb2dcIixyKSksci5vcGVuKCl9KX0pLHQuZGlhbG9nPWZ1bmN0aW9uKG4pe3ZhciBpPXt0ZXh0OlwiXCIsYm9sZDohMSxjbG9zZTohMCxvbkNsaWNrOmZ1bmN0aW9uKHQpe319O249ZS5leHRlbmQoe30se3RpdGxlOlwiXCIsY29udGVudDpcIlwiLGJ1dHRvbnM6W10sc3RhY2tlZEJ1dHRvbnM6ITEsY3NzQ2xhc3M6XCJcIixoaXN0b3J5OiEwLG92ZXJsYXk6ITAsbW9kYWw6ITEsY2xvc2VPbkVzYzohMCxkZXN0cm95T25DbG9zZWQ6ITAsb25PcGVuOmZ1bmN0aW9uKCl7fSxvbk9wZW5lZDpmdW5jdGlvbigpe30sb25DbG9zZTpmdW5jdGlvbigpe30sb25DbG9zZWQ6ZnVuY3Rpb24oKXt9fSxufHx7fSksZS5lYWNoKG4uYnV0dG9ucyxmdW5jdGlvbih0LG8pe24uYnV0dG9uc1t0XT1lLmV4dGVuZCh7fSxpLG8pfSk7dmFyIG89XCJcIjtuLmJ1dHRvbnMubGVuZ3RoJiYobz0nPGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLWFjdGlvbnMgJysobi5zdGFja2VkQnV0dG9ucz9cIm1kdWktZGlhbG9nLWFjdGlvbnMtc3RhY2tlZFwiOlwiXCIpKydcIj4nLGUuZWFjaChuLmJ1dHRvbnMsZnVuY3Rpb24odCxlKXtvKz0nPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS10ZXh0LWNvbG9yLXByaW1hcnkgJysoZS5ib2xkP1wibWR1aS1idG4tYm9sZFwiOlwiXCIpKydcIj4nK2UudGV4dCtcIjwvYT5cIn0pLG8rPVwiPC9kaXY+XCIpO3ZhciBhPSc8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2cgJytuLmNzc0NsYXNzKydcIj4nKyhuLnRpdGxlPyc8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctdGl0bGVcIj4nK24udGl0bGUrXCI8L2Rpdj5cIjpcIlwiKSsobi5jb250ZW50Pyc8ZGl2IGNsYXNzPVwibWR1aS1kaWFsb2ctY29udGVudFwiPicrbi5jb250ZW50K1wiPC9kaXY+XCI6XCJcIikrbytcIjwvZGl2PlwiLHM9bmV3IHQuRGlhbG9nKGEse2hpc3Rvcnk6bi5oaXN0b3J5LG92ZXJsYXk6bi5vdmVybGF5LG1vZGFsOm4ubW9kYWwsY2xvc2VPbkVzYzpuLmNsb3NlT25Fc2MsZGVzdHJveU9uQ2xvc2VkOm4uZGVzdHJveU9uQ2xvc2VkfSk7cmV0dXJuIG4uYnV0dG9ucy5sZW5ndGgmJnMuJGRpYWxvZy5maW5kKFwiLm1kdWktZGlhbG9nLWFjdGlvbnMgLm1kdWktYnRuXCIpLmVhY2goZnVuY3Rpb24odCxpKXtlKGkpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uYnV0dG9uc1t0XS5vbkNsaWNrJiZuLmJ1dHRvbnNbdF0ub25DbGljayhzKSxuLmJ1dHRvbnNbdF0uY2xvc2UmJnMuY2xvc2UoKX0pfSksXCJmdW5jdGlvblwiPT10eXBlb2Ygbi5vbk9wZW4mJnMuJGRpYWxvZy5vbihcIm9wZW4ubWR1aS5kaWFsb2dcIixmdW5jdGlvbigpe24ub25PcGVuKHMpfSkub24oXCJvcGVuZWQubWR1aS5kaWFsb2dcIixmdW5jdGlvbigpe24ub25PcGVuZWQocyl9KS5vbihcImNsb3NlLm1kdWkuZGlhbG9nXCIsZnVuY3Rpb24oKXtuLm9uQ2xvc2Uocyl9KS5vbihcImNsb3NlZC5tZHVpLmRpYWxvZ1wiLGZ1bmN0aW9uKCl7bi5vbkNsb3NlZChzKX0pLHMub3BlbigpLHN9LHQuYWxlcnQ9ZnVuY3Rpb24obixpLG8sYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgaSYmKGk9XCJcIixvPWFyZ3VtZW50c1sxXSxhPWFyZ3VtZW50c1syXSksdm9pZCAwPT09byYmKG89ZnVuY3Rpb24oKXt9KSx2b2lkIDA9PT1hJiYoYT17fSk7cmV0dXJuIGE9ZS5leHRlbmQoe30se2NvbmZpcm1UZXh0Olwib2tcIixoaXN0b3J5OiEwLG1vZGFsOiExLGNsb3NlT25Fc2M6ITB9LGEpLHQuZGlhbG9nKHt0aXRsZTppLGNvbnRlbnQ6bixidXR0b25zOlt7dGV4dDphLmNvbmZpcm1UZXh0LGJvbGQ6ITEsY2xvc2U6ITAsb25DbGljazpvfV0sY3NzQ2xhc3M6XCJtZHVpLWRpYWxvZy1hbGVydFwiLGhpc3Rvcnk6YS5oaXN0b3J5LG1vZGFsOmEubW9kYWwsY2xvc2VPbkVzYzphLmNsb3NlT25Fc2N9KX0sdC5jb25maXJtPWZ1bmN0aW9uKG4saSxvLGEscyl7XCJmdW5jdGlvblwiPT10eXBlb2YgaSYmKGk9XCJcIixvPWFyZ3VtZW50c1sxXSxhPWFyZ3VtZW50c1syXSxzPWFyZ3VtZW50c1szXSksdm9pZCAwPT09byYmKG89ZnVuY3Rpb24oKXt9KSx2b2lkIDA9PT1hJiYoYT1mdW5jdGlvbigpe30pLHZvaWQgMD09PXMmJihzPXt9KTtyZXR1cm4gcz1lLmV4dGVuZCh7fSx7Y29uZmlybVRleHQ6XCJva1wiLGNhbmNlbFRleHQ6XCJjYW5jZWxcIixoaXN0b3J5OiEwLG1vZGFsOiExLGNsb3NlT25Fc2M6ITB9LHMpLHQuZGlhbG9nKHt0aXRsZTppLGNvbnRlbnQ6bixidXR0b25zOlt7dGV4dDpzLmNhbmNlbFRleHQsYm9sZDohMSxjbG9zZTohMCxvbkNsaWNrOmF9LHt0ZXh0OnMuY29uZmlybVRleHQsYm9sZDohMSxjbG9zZTohMCxvbkNsaWNrOm99XSxjc3NDbGFzczpcIm1kdWktZGlhbG9nLWNvbmZpcm1cIixoaXN0b3J5OnMuaGlzdG9yeSxtb2RhbDpzLm1vZGFsLGNsb3NlT25Fc2M6cy5jbG9zZU9uRXNjfSl9LHQucHJvbXB0PWZ1bmN0aW9uKG4saSxvLGEscyl7XCJmdW5jdGlvblwiPT10eXBlb2YgaSYmKGk9XCJcIixvPWFyZ3VtZW50c1sxXSxhPWFyZ3VtZW50c1syXSxzPWFyZ3VtZW50c1szXSksdm9pZCAwPT09byYmKG89ZnVuY3Rpb24oKXt9KSx2b2lkIDA9PT1hJiYoYT1mdW5jdGlvbigpe30pLHZvaWQgMD09PXMmJihzPXt9KTtzPWUuZXh0ZW5kKHt9LHtjb25maXJtVGV4dDpcIm9rXCIsY2FuY2VsVGV4dDpcImNhbmNlbFwiLGhpc3Rvcnk6ITAsbW9kYWw6ITEsY2xvc2VPbkVzYzohMCx0eXBlOlwidGV4dFwiLG1heGxlbmd0aDpcIlwiLGRlZmF1bHRWYWx1ZTpcIlwiLGNvbmZpcm1PbkVudGVyOiExfSxzKTt2YXIgcj0nPGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+Jysobj8nPGxhYmVsIGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIj4nK24rXCI8L2xhYmVsPlwiOlwiXCIpKyhcInRleHRcIj09PXMudHlwZT8nPGlucHV0IGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJytzLmRlZmF1bHRWYWx1ZSsnXCIgJysocy5tYXhsZW5ndGg/J21heGxlbmd0aD1cIicrcy5tYXhsZW5ndGgrJ1wiJzpcIlwiKStcIi8+XCI6XCJcIikrKFwidGV4dGFyZWFcIj09PXMudHlwZT8nPHRleHRhcmVhIGNsYXNzPVwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIiAnKyhzLm1heGxlbmd0aD8nbWF4bGVuZ3RoPVwiJytzLm1heGxlbmd0aCsnXCInOlwiXCIpK1wiPlwiK3MuZGVmYXVsdFZhbHVlK1wiPC90ZXh0YXJlYT5cIjpcIlwiKStcIjwvZGl2PlwiO3JldHVybiB0LmRpYWxvZyh7dGl0bGU6aSxjb250ZW50OnIsYnV0dG9uczpbe3RleHQ6cy5jYW5jZWxUZXh0LGJvbGQ6ITEsY2xvc2U6ITAsb25DbGljazpmdW5jdGlvbih0KXt2YXIgZT10LiRkaWFsb2cuZmluZChcIi5tZHVpLXRleHRmaWVsZC1pbnB1dFwiKS52YWwoKTthKGUsdCl9fSx7dGV4dDpzLmNvbmZpcm1UZXh0LGJvbGQ6ITEsY2xvc2U6ITAsb25DbGljazpmdW5jdGlvbih0KXt2YXIgZT10LiRkaWFsb2cuZmluZChcIi5tZHVpLXRleHRmaWVsZC1pbnB1dFwiKS52YWwoKTtvKGUsdCl9fV0sY3NzQ2xhc3M6XCJtZHVpLWRpYWxvZy1wcm9tcHRcIixoaXN0b3J5OnMuaGlzdG9yeSxtb2RhbDpzLm1vZGFsLGNsb3NlT25Fc2M6cy5jbG9zZU9uRXNjLG9uT3BlbjpmdW5jdGlvbihlKXt2YXIgbj1lLiRkaWFsb2cuZmluZChcIi5tZHVpLXRleHRmaWVsZC1pbnB1dFwiKTt0LnVwZGF0ZVRleHRGaWVsZHMobiksblswXS5mb2N1cygpLFwidGV4dFwiPT09cy50eXBlJiYhMD09PXMuY29uZmlybU9uRW50ZXImJm4ub24oXCJrZXlkb3duXCIsZnVuY3Rpb24odCl7aWYoMTM9PT10LmtleUNvZGUpe3ZhciBuPWUuJGRpYWxvZy5maW5kKFwiLm1kdWktdGV4dGZpZWxkLWlucHV0XCIpLnZhbCgpO28obixlKSxlLmNsb3NlKCl9fSksXCJ0ZXh0YXJlYVwiPT09cy50eXBlJiZuLm9uKFwiaW5wdXRcIixmdW5jdGlvbigpe2UuaGFuZGxlVXBkYXRlKCl9KSxzLm1heGxlbmd0aCYmZS5oYW5kbGVVcGRhdGUoKX19KX0sdC5Ub29sdGlwPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGkpe3ZhciBvPXRoaXM7aWYoby4kdGFyZ2V0PWUodCkuZXEoMCksby4kdGFyZ2V0Lmxlbmd0aCl7dmFyIHM9by4kdGFyZ2V0LmRhdGEoXCJtZHVpLnRvb2x0aXBcIik7aWYocylyZXR1cm4gcztvLm9wdGlvbnM9ZS5leHRlbmQoe30sbixpfHx7fSksby5zdGF0ZT1cImNsb3NlZFwiLG8uJHRvb2x0aXA9ZSgnPGRpdiBjbGFzcz1cIm1kdWktdG9vbHRpcFwiIGlkPVwiJytlLmd1aWQoKSsnXCI+JytvLm9wdGlvbnMuY29udGVudCtcIjwvZGl2PlwiKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KSxvLiR0YXJnZXQub24oXCJ0b3VjaHN0YXJ0IG1vdXNlZW50ZXJcIixmdW5jdGlvbih0KXt0aGlzLmRpc2FibGVkfHxhLmlzQWxsb3codCkmJihhLnJlZ2lzdGVyKHQpLG8ub3BlbigpKX0pLm9uKFwidG91Y2hlbmQgbW91c2VsZWF2ZVwiLGZ1bmN0aW9uKHQpe3RoaXMuZGlzYWJsZWR8fGEuaXNBbGxvdyh0KSYmby5jbG9zZSgpfSkub24oYS51bmxvY2ssZnVuY3Rpb24odCl7dGhpcy5kaXNhYmxlZHx8YS5yZWdpc3Rlcih0KX0pfX12YXIgbj17cG9zaXRpb246XCJhdXRvXCIsZGVsYXk6MCxjb250ZW50OlwiXCJ9LG89ZnVuY3Rpb24oKXtyZXR1cm4gaS53aWR0aCgpPjEwMjR9LGM9ZnVuY3Rpb24odCl7dC4kdG9vbHRpcC5oYXNDbGFzcyhcIm1kdWktdG9vbHRpcC1vcGVuXCIpPyh0LnN0YXRlPVwib3BlbmVkXCIscihcIm9wZW5lZFwiLFwidG9vbHRpcFwiLHQsdC4kdGFyZ2V0KSk6KHQuc3RhdGU9XCJjbG9zZWRcIixyKFwiY2xvc2VkXCIsXCJ0b29sdGlwXCIsdCx0LiR0YXJnZXQpKX07cmV0dXJuIHQucHJvdG90eXBlLl9kb09wZW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3Quc3RhdGU9XCJvcGVuaW5nXCIscihcIm9wZW5cIixcInRvb2x0aXBcIix0LHQuJHRhcmdldCksdC4kdG9vbHRpcC5hZGRDbGFzcyhcIm1kdWktdG9vbHRpcC1vcGVuXCIpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXtjKHQpfSl9LHQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24odCl7dmFyIG49dGhpcztpZihcIm9wZW5pbmdcIiE9PW4uc3RhdGUmJlwib3BlbmVkXCIhPT1uLnN0YXRlKXt2YXIgYT1lLmV4dGVuZCh7fSxuLm9wdGlvbnMpO2UuZXh0ZW5kKG4ub3B0aW9ucyxzKG4uJHRhcmdldC5hdHRyKFwibWR1aS10b29sdGlwXCIpKSksdCYmZS5leHRlbmQobi5vcHRpb25zLHQpLGEuY29udGVudCE9PW4ub3B0aW9ucy5jb250ZW50JiZuLiR0b29sdGlwLmh0bWwobi5vcHRpb25zLmNvbnRlbnQpLGZ1bmN0aW9uKHQpe3ZhciBlLG4sYSxzPXQuJHRhcmdldFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxyPW8oKT8xNDoyNCxjPXQuJHRvb2x0aXBbMF0ub2Zmc2V0V2lkdGgsZD10LiR0b29sdGlwWzBdLm9mZnNldEhlaWdodDtzd2l0Y2goYT10Lm9wdGlvbnMucG9zaXRpb24sLTE9PT1bXCJib3R0b21cIixcInRvcFwiLFwibGVmdFwiLFwicmlnaHRcIl0uaW5kZXhPZihhKSYmKGE9cy50b3Arcy5oZWlnaHQrcitkKzI8aS5oZWlnaHQoKT9cImJvdHRvbVwiOnIrZCsyPHMudG9wP1widG9wXCI6citjKzI8cy5sZWZ0P1wibGVmdFwiOnMud2lkdGgrcitjKzI8aS53aWR0aCgpLXMubGVmdD9cInJpZ2h0XCI6XCJib3R0b21cIiksYSl7Y2FzZVwiYm90dG9tXCI6ZT1jLzIqLTEsbj1zLmhlaWdodC8yK3IsdC4kdG9vbHRpcC50cmFuc2Zvcm1PcmlnaW4oXCJ0b3AgY2VudGVyXCIpO2JyZWFrO2Nhc2VcInRvcFwiOmU9Yy8yKi0xLG49LTEqKGQrcy5oZWlnaHQvMityKSx0LiR0b29sdGlwLnRyYW5zZm9ybU9yaWdpbihcImJvdHRvbSBjZW50ZXJcIik7YnJlYWs7Y2FzZVwibGVmdFwiOmU9LTEqKGMrcy53aWR0aC8yK3IpLG49ZC8yKi0xLHQuJHRvb2x0aXAudHJhbnNmb3JtT3JpZ2luKFwiY2VudGVyIHJpZ2h0XCIpO2JyZWFrO2Nhc2VcInJpZ2h0XCI6ZT1zLndpZHRoLzIrcixuPWQvMiotMSx0LiR0b29sdGlwLnRyYW5zZm9ybU9yaWdpbihcImNlbnRlciBsZWZ0XCIpfXZhciB1PXQuJHRhcmdldC5vZmZzZXQoKTt0LiR0b29sdGlwLmNzcyh7dG9wOnUudG9wK3MuaGVpZ2h0LzIrXCJweFwiLGxlZnQ6dS5sZWZ0K3Mud2lkdGgvMitcInB4XCIsXCJtYXJnaW4tbGVmdFwiOmUrXCJweFwiLFwibWFyZ2luLXRvcFwiOm4rXCJweFwifSl9KG4pLG4ub3B0aW9ucy5kZWxheT9uLnRpbWVvdXRJZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5fZG9PcGVuKCl9LG4ub3B0aW9ucy5kZWxheSk6KG4udGltZW91dElkPSExLG4uX2RvT3BlbigpKX19LHQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LnRpbWVvdXRJZCYmKGNsZWFyVGltZW91dCh0LnRpbWVvdXRJZCksdC50aW1lb3V0SWQ9ITEpLFwiY2xvc2luZ1wiIT09dC5zdGF0ZSYmXCJjbG9zZWRcIiE9PXQuc3RhdGUmJih0LnN0YXRlPVwiY2xvc2luZ1wiLHIoXCJjbG9zZVwiLFwidG9vbHRpcFwiLHQsdC4kdGFyZ2V0KSx0LiR0b29sdGlwLnJlbW92ZUNsYXNzKFwibWR1aS10b29sdGlwLW9wZW5cIikudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe2ModCl9KSl9LHQucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe1wib3BlbmluZ1wiPT09dGhpcy5zdGF0ZXx8XCJvcGVuZWRcIj09PXRoaXMuc3RhdGU/dGhpcy5jbG9zZSgpOlwiY2xvc2luZ1wiIT09dGhpcy5zdGF0ZSYmXCJjbG9zZWRcIiE9PXRoaXMuc3RhdGV8fHRoaXMub3BlbigpfSx0LnByb3RvdHlwZS5nZXRTdGF0ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlfSx0fSgpLGUoZnVuY3Rpb24oKXtuLm9uKFwidG91Y2hzdGFydCBtb3VzZW92ZXJcIixcIlttZHVpLXRvb2x0aXBdXCIsZnVuY3Rpb24oKXt2YXIgbj1lKHRoaXMpLGk9bi5kYXRhKFwibWR1aS50b29sdGlwXCIpO2lmKCFpKXt2YXIgbz1zKG4uYXR0cihcIm1kdWktdG9vbHRpcFwiKSk7aT1uZXcgdC5Ub29sdGlwKG4sbyksbi5kYXRhKFwibWR1aS50b29sdGlwXCIsaSl9fSl9KSxmdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtpZih0aGlzLm1lc3NhZ2U9dCx0aGlzLm9wdGlvbnM9ZS5leHRlbmQoe30scixufHx7fSksdGhpcy5tZXNzYWdlKXt0aGlzLnN0YXRlPVwiY2xvc2VkXCIsdGhpcy50aW1lb3V0SWQ9ITE7dmFyIGk9XCJcIixvPVwiXCI7MD09PXRoaXMub3B0aW9ucy5idXR0b25Db2xvci5pbmRleE9mKFwiI1wiKXx8MD09PXRoaXMub3B0aW9ucy5idXR0b25Db2xvci5pbmRleE9mKFwicmdiXCIpP2k9J3N0eWxlPVwiY29sb3I6Jyt0aGlzLm9wdGlvbnMuYnV0dG9uQ29sb3IrJ1wiJzpcIlwiIT09dGhpcy5vcHRpb25zLmJ1dHRvbkNvbG9yJiYobz1cIm1kdWktdGV4dC1jb2xvci1cIit0aGlzLm9wdGlvbnMuYnV0dG9uQ29sb3IpLHRoaXMuJHNuYWNrYmFyPWUoJzxkaXYgY2xhc3M9XCJtZHVpLXNuYWNrYmFyXCI+PGRpdiBjbGFzcz1cIm1kdWktc25hY2tiYXItdGV4dFwiPicrdGhpcy5tZXNzYWdlK1wiPC9kaXY+XCIrKHRoaXMub3B0aW9ucy5idXR0b25UZXh0Pyc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJtZHVpLXNuYWNrYmFyLWFjdGlvbiBtZHVpLWJ0biBtZHVpLXJpcHBsZSBtZHVpLXJpcHBsZS13aGl0ZSAnK28rJ1wiICcraStcIj5cIit0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCtcIjwvYT5cIjpcIlwiKStcIjwvZGl2PlwiKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KSx0aGlzLl9zZXRQb3NpdGlvbihcImNsb3NlXCIpLHRoaXMuJHNuYWNrYmFyLnJlZmxvdygpLmFkZENsYXNzKFwibWR1aS1zbmFja2Jhci1cIit0aGlzLm9wdGlvbnMucG9zaXRpb24pfX12YXIgcyxyPXt0aW1lb3V0OjRlMyxidXR0b25UZXh0OlwiXCIsYnV0dG9uQ29sb3I6XCJcIixwb3NpdGlvbjpcImJvdHRvbVwiLGNsb3NlT25CdXR0b25DbGljazohMCxjbG9zZU9uT3V0c2lkZUNsaWNrOiEwLG9uQ2xpY2s6ZnVuY3Rpb24oKXt9LG9uQnV0dG9uQ2xpY2s6ZnVuY3Rpb24oKXt9LG9uT3BlbjpmdW5jdGlvbigpe30sb25PcGVuZWQ6ZnVuY3Rpb24oKXt9LG9uQ2xvc2U6ZnVuY3Rpb24oKXt9LG9uQ2xvc2VkOmZ1bmN0aW9uKCl7fX0sYz1mdW5jdGlvbih0KXt2YXIgbj1lKHQudGFyZ2V0KTtuLmhhc0NsYXNzKFwibWR1aS1zbmFja2JhclwiKXx8bi5wYXJlbnRzKFwiLm1kdWktc25hY2tiYXJcIikubGVuZ3RofHxzLmNsb3NlKCl9O2kucHJvdG90eXBlLl9zZXRQb3NpdGlvbj1mdW5jdGlvbih0KXt2YXIgZSxuLGk9dGhpcy4kc25hY2tiYXJbMF0uY2xpZW50SGVpZ2h0LG89dGhpcy5vcHRpb25zLnBvc2l0aW9uO2U9XCJib3R0b21cIj09PW98fFwidG9wXCI9PT1vP1wiLTUwJVwiOlwiMFwiLFwib3BlblwiPT09dD9uPVwiMFwiOihcImJvdHRvbVwiPT09byYmKG49aSksXCJ0b3BcIj09PW8mJihuPS1pKSxcImxlZnQtdG9wXCIhPT1vJiZcInJpZ2h0LXRvcFwiIT09b3x8KG49LWktMjQpLFwibGVmdC1ib3R0b21cIiE9PW8mJlwicmlnaHQtYm90dG9tXCIhPT1vfHwobj1pKzI0KSksdGhpcy4kc25hY2tiYXIudHJhbnNmb3JtKFwidHJhbnNsYXRlKFwiK2UrXCIsXCIrbitcInB4KVwiKX0saS5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5tZXNzYWdlJiZcIm9wZW5pbmdcIiE9PXQuc3RhdGUmJlwib3BlbmVkXCIhPT10LnN0YXRlJiYocz9vLnF1ZXVlKFwiX19tZF9zbmFja2JhclwiLGZ1bmN0aW9uKCl7dC5vcGVuKCl9KToocz10LHQuc3RhdGU9XCJvcGVuaW5nXCIsdC5vcHRpb25zLm9uT3BlbigpLHQuX3NldFBvc2l0aW9uKFwib3BlblwiKSx0LiRzbmFja2Jhci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7XCJvcGVuaW5nXCI9PT10LnN0YXRlJiYodC5zdGF0ZT1cIm9wZW5lZFwiLHQub3B0aW9ucy5vbk9wZW5lZCgpLHQub3B0aW9ucy5idXR0b25UZXh0JiZ0LiRzbmFja2Jhci5maW5kKFwiLm1kdWktc25hY2tiYXItYWN0aW9uXCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe3Qub3B0aW9ucy5vbkJ1dHRvbkNsaWNrKCksdC5vcHRpb25zLmNsb3NlT25CdXR0b25DbGljayYmdC5jbG9zZSgpfSksdC4kc25hY2tiYXIub24oXCJjbGlja1wiLGZ1bmN0aW9uKG4pe2Uobi50YXJnZXQpLmhhc0NsYXNzKFwibWR1aS1zbmFja2Jhci1hY3Rpb25cIil8fHQub3B0aW9ucy5vbkNsaWNrKCl9KSx0Lm9wdGlvbnMuY2xvc2VPbk91dHNpZGVDbGljayYmbi5vbihhLnN0YXJ0LGMpLHQub3B0aW9ucy50aW1lb3V0JiYodC50aW1lb3V0SWQ9c2V0VGltZW91dChmdW5jdGlvbigpe3QuY2xvc2UoKX0sdC5vcHRpb25zLnRpbWVvdXQpKSl9KSkpfSxpLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5tZXNzYWdlJiZcImNsb3NpbmdcIiE9PXQuc3RhdGUmJlwiY2xvc2VkXCIhPT10LnN0YXRlJiYodC50aW1lb3V0SWQmJmNsZWFyVGltZW91dCh0LnRpbWVvdXRJZCksdC5vcHRpb25zLmNsb3NlT25PdXRzaWRlQ2xpY2smJm4ub2ZmKGEuc3RhcnQsYyksdC5zdGF0ZT1cImNsb3NpbmdcIix0Lm9wdGlvbnMub25DbG9zZSgpLHQuX3NldFBvc2l0aW9uKFwiY2xvc2VcIiksdC4kc25hY2tiYXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe1wiY2xvc2luZ1wiPT09dC5zdGF0ZSYmKHM9bnVsbCx0LnN0YXRlPVwiY2xvc2VkXCIsdC5vcHRpb25zLm9uQ2xvc2VkKCksdC4kc25hY2tiYXIucmVtb3ZlKCksby5kZXF1ZXVlKFwiX19tZF9zbmFja2JhclwiKSl9KSl9LHQuc25hY2tiYXI9ZnVuY3Rpb24odCxlKXtcInN0cmluZ1wiIT10eXBlb2YgdCYmKHQ9KGU9dCkubWVzc2FnZSk7dmFyIG49bmV3IGkodCxlKTtyZXR1cm4gbi5vcGVuKCksbn19KCksbi5vbihcImNsaWNrXCIsXCIubWR1aS1ib3R0b20tbmF2PmFcIixmdW5jdGlvbigpe3ZhciB0LG49ZSh0aGlzKSxpPW4ucGFyZW50KCk7aS5jaGlsZHJlbihcImFcIikuZWFjaChmdW5jdGlvbihvLGEpeyh0PW4uaXMoYSkpJiZyKFwiY2hhbmdlXCIsXCJib3R0b21OYXZcIixudWxsLGkse2luZGV4Om99KSxlKGEpW3Q/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oXCJtZHVpLWJvdHRvbS1uYXYtYWN0aXZlXCIpfSl9KSx0Lm11dGF0aW9uKFwiLm1kdWktYm90dG9tLW5hdi1zY3JvbGwtaGlkZVwiLGZ1bmN0aW9uKCl7dmFyIG49ZSh0aGlzKSxpPW5ldyB0LkhlYWRyb29tKG4se3Bpbm5lZENsYXNzOlwibWR1aS1oZWFkcm9vbS1waW5uZWQtZG93blwiLHVucGlubmVkQ2xhc3M6XCJtZHVpLWhlYWRyb29tLXVucGlubmVkLWRvd25cIn0pO24uZGF0YShcIm1kdWkuaGVhZHJvb21cIixpKX0pLGZ1bmN0aW9uKCl7dmFyIG49ZnVuY3Rpb24oKXt2YXIgdD0hIWFyZ3VtZW50cy5sZW5ndGgmJmFyZ3VtZW50c1swXTtyZXR1cm4nPGRpdiBjbGFzcz1cIm1kdWktc3Bpbm5lci1sYXllciAnKyh0P1wibWR1aS1zcGlubmVyLWxheWVyLVwiK3Q6XCJcIikrJ1wiPjxkaXYgY2xhc3M9XCJtZHVpLXNwaW5uZXItY2lyY2xlLWNsaXBwZXIgbWR1aS1zcGlubmVyLWxlZnRcIj48ZGl2IGNsYXNzPVwibWR1aS1zcGlubmVyLWNpcmNsZVwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJtZHVpLXNwaW5uZXItZ2FwLXBhdGNoXCI+PGRpdiBjbGFzcz1cIm1kdWktc3Bpbm5lci1jaXJjbGVcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwibWR1aS1zcGlubmVyLWNpcmNsZS1jbGlwcGVyIG1kdWktc3Bpbm5lci1yaWdodFwiPjxkaXYgY2xhc3M9XCJtZHVpLXNwaW5uZXItY2lyY2xlXCI+PC9kaXY+PC9kaXY+PC9kaXY+J30saT1mdW5jdGlvbih0KXt2YXIgaSxvPWUodCk7aT1vLmhhc0NsYXNzKFwibWR1aS1zcGlubmVyLWNvbG9yZnVsXCIpP24oXCIxXCIpK24oXCIyXCIpK24oXCIzXCIpK24oXCI0XCIpOm4oKSxvLmh0bWwoaSl9O3QubXV0YXRpb24oXCIubWR1aS1zcGlubmVyXCIsZnVuY3Rpb24oKXtpKHRoaXMpfSksdC51cGRhdGVTcGlubmVycz1mdW5jdGlvbigpe2UoYXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06XCIubWR1aS1zcGlubmVyXCIpLmVhY2goZnVuY3Rpb24oKXtpKHRoaXMpfSl9fSgpLHQuUGFuZWw9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCxlKXtyZXR1cm4gbmV3IGModCxlLFwicGFuZWxcIil9fSgpLGUoZnVuY3Rpb24oKXt0Lm11dGF0aW9uKFwiW21kdWktcGFuZWxdXCIsZnVuY3Rpb24oKXt2YXIgbj1lKHRoaXMpLGk9bi5kYXRhKFwibWR1aS5wYW5lbFwiKTtpZighaSl7dmFyIG89cyhuLmF0dHIoXCJtZHVpLXBhbmVsXCIpKTtpPW5ldyB0LlBhbmVsKG4sbyksbi5kYXRhKFwibWR1aS5wYW5lbFwiLGkpfX0pfSksdC5NZW51PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LHMscil7dmFyIGM9dGhpcztpZihjLiRhbmNob3I9ZSh0KS5lcSgwKSxjLiRhbmNob3IubGVuZ3RoKXt2YXIgdT1jLiRhbmNob3IuZGF0YShcIm1kdWkubWVudVwiKTtpZih1KXJldHVybiB1O2MuJG1lbnU9ZShzKS5lcSgwKSxjLiRhbmNob3Iuc2libGluZ3MoYy4kbWVudSkubGVuZ3RoJiYoYy5vcHRpb25zPWUuZXh0ZW5kKHt9LG8scnx8e30pLGMuc3RhdGU9XCJjbG9zZWRcIixjLmlzQ2FzY2FkZT1jLiRtZW51Lmhhc0NsYXNzKFwibWR1aS1tZW51LWNhc2NhZGVcIiksXCJhdXRvXCI9PT1jLm9wdGlvbnMuY292ZXJlZD9jLmlzQ292ZXJlZD0hYy5pc0Nhc2NhZGU6Yy5pc0NvdmVyZWQ9Yy5vcHRpb25zLmNvdmVyZWQsYy4kYW5jaG9yLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2MudG9nZ2xlKCl9KSxuLm9uKFwiY2xpY2sgdG91Y2hzdGFydFwiLGZ1bmN0aW9uKHQpe3ZhciBuPWUodC50YXJnZXQpO1wib3BlbmluZ1wiIT09Yy5zdGF0ZSYmXCJvcGVuZWRcIiE9PWMuc3RhdGV8fG4uaXMoYy4kbWVudSl8fGUuY29udGFpbnMoYy4kbWVudVswXSxuWzBdKXx8bi5pcyhjLiRhbmNob3IpfHxlLmNvbnRhaW5zKGMuJGFuY2hvclswXSxuWzBdKXx8Yy5jbG9zZSgpfSksbi5vbihcImNsaWNrXCIsXCIubWR1aS1tZW51LWl0ZW1cIixmdW5jdGlvbih0KXt2YXIgbj1lKHRoaXMpO24uZmluZChcIi5tZHVpLW1lbnVcIikubGVuZ3RofHxudWxsIT09bi5hdHRyKFwiZGlzYWJsZWRcIil8fGMuY2xvc2UoKX0pLGQoYyksaS5vbihcInJlc2l6ZVwiLGUudGhyb3R0bGUoZnVuY3Rpb24oKXthKGMpfSwxMDApKSl9fXZhciBvPXtwb3NpdGlvbjpcImF1dG9cIixhbGlnbjpcImF1dG9cIixndXR0ZXI6MTYsZml4ZWQ6ITEsY292ZXJlZDpcImF1dG9cIixzdWJNZW51VHJpZ2dlcjpcImhvdmVyXCIsc3ViTWVudURlbGF5OjIwMH0sYT1mdW5jdGlvbih0KXt2YXIgZSxuLG8sYSxzLHIsYz1pLmhlaWdodCgpLGQ9aS53aWR0aCgpLHU9dC5vcHRpb25zLmd1dHRlcixsPXQuaXNDb3ZlcmVkLGY9dC5vcHRpb25zLmZpeGVkLGg9dC4kbWVudS53aWR0aCgpLHA9dC4kbWVudS5oZWlnaHQoKSxtPXQuJGFuY2hvcix2PW1bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZz12LnRvcCxiPXYubGVmdCx4PXYuaGVpZ2h0LHk9di53aWR0aCwkPWMtZy14LHc9ZC1iLXksQz1tWzBdLm9mZnNldFRvcCxrPW1bMF0ub2Zmc2V0TGVmdDtpZihvPVwiYXV0b1wiPT09dC5vcHRpb25zLnBvc2l0aW9uPyQrKGw/eDowKT5wK3U/XCJib3R0b21cIjpnKyhsP3g6MCk+cCt1P1widG9wXCI6XCJjZW50ZXJcIjp0Lm9wdGlvbnMucG9zaXRpb24sYT1cImF1dG9cIj09PXQub3B0aW9ucy5hbGlnbj93K3k+aCt1P1wibGVmdFwiOmIreT5oK3U/XCJyaWdodFwiOlwiY2VudGVyXCI6dC5vcHRpb25zLmFsaWduLFwiYm90dG9tXCI9PT1vKXI9XCIwXCIsbj0obD8wOngpKyhmP2c6Qyk7ZWxzZSBpZihcInRvcFwiPT09bylyPVwiMTAwJVwiLG49KGw/eDowKSsoZj9nLXA6Qy1wKTtlbHNle3I9XCI1MCVcIjt2YXIgTz1wO3QuaXNDYXNjYWRlfHxwKzIqdT5jJiYoTz1jLTIqdSx0LiRtZW51LmhlaWdodChPKSksbj0oYy1PKS8yKyhmPzA6Qy1nKX1pZih0LiRtZW51LmNzcyhcInRvcFwiLG4rXCJweFwiKSxcImxlZnRcIj09PWEpcz1cIjBcIixlPWY/YjprO2Vsc2UgaWYoXCJyaWdodFwiPT09YSlzPVwiMTAwJVwiLGU9Zj9iK3ktaDprK3ktaDtlbHNle3M9XCI1MCVcIjt2YXIgVD1oO2grMip1PmQmJihUPWQtMip1LHQuJG1lbnUud2lkdGgoVCkpLGU9KGQtVCkvMisoZj8wOmstYil9dC4kbWVudS5jc3MoXCJsZWZ0XCIsZStcInB4XCIpLHQuJG1lbnUudHJhbnNmb3JtT3JpZ2luKHMrXCIgXCIrcil9LHM9ZnVuY3Rpb24odCl7IWZ1bmN0aW9uKHQpe3ZhciBlLG4sbyxhLHMscixjPXQucGFyZW50KFwiLm1kdWktbWVudS1pdGVtXCIpLGQ9aS5oZWlnaHQoKSx1PWkud2lkdGgoKSxsPXQud2lkdGgoKSxmPXQuaGVpZ2h0KCksaD1jWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHA9aC53aWR0aCxtPWguaGVpZ2h0LHY9aC5sZWZ0LGc9aC50b3A7bz1kLWc+Zj9cImJvdHRvbVwiOmcrbT5mP1widG9wXCI6XCJib3R0b21cIixhPXUtdi1wPmw/XCJsZWZ0XCI6dj5sP1wicmlnaHRcIjpcImxlZnRcIixcImJvdHRvbVwiPT09bz8ocj1cIjBcIixlPVwiMFwiKTpcInRvcFwiPT09byYmKHI9XCIxMDAlXCIsZT0tZittKSx0LmNzcyhcInRvcFwiLGUrXCJweFwiKSxcImxlZnRcIj09PWE/KHM9XCIwXCIsbj1wKTpcInJpZ2h0XCI9PT1hJiYocz1cIjEwMCVcIixuPS1sKSx0LmNzcyhcImxlZnRcIixuK1wicHhcIiksdC50cmFuc2Zvcm1PcmlnaW4ocytcIiBcIityKX0odCksdC5hZGRDbGFzcyhcIm1kdWktbWVudS1vcGVuXCIpLnBhcmVudChcIi5tZHVpLW1lbnUtaXRlbVwiKS5hZGRDbGFzcyhcIm1kdWktbWVudS1pdGVtLWFjdGl2ZVwiKX0sYz1mdW5jdGlvbih0KXt0LnJlbW92ZUNsYXNzKFwibWR1aS1tZW51LW9wZW5cIikuYWRkQ2xhc3MoXCJtZHVpLW1lbnUtY2xvc2luZ1wiKS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7dC5yZW1vdmVDbGFzcyhcIm1kdWktbWVudS1jbG9zaW5nXCIpfSkucGFyZW50KFwiLm1kdWktbWVudS1pdGVtXCIpLnJlbW92ZUNsYXNzKFwibWR1aS1tZW51LWl0ZW0tYWN0aXZlXCIpLHQuZmluZChcIi5tZHVpLW1lbnVcIikuZWFjaChmdW5jdGlvbigpe3ZhciB0PWUodGhpcyk7dC5yZW1vdmVDbGFzcyhcIm1kdWktbWVudS1vcGVuXCIpLmFkZENsYXNzKFwibWR1aS1tZW51LWNsb3NpbmdcIikudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe3QucmVtb3ZlQ2xhc3MoXCJtZHVpLW1lbnUtY2xvc2luZ1wiKX0pLnBhcmVudChcIi5tZHVpLW1lbnUtaXRlbVwiKS5yZW1vdmVDbGFzcyhcIm1kdWktbWVudS1pdGVtLWFjdGl2ZVwiKX0pfSxkPWZ1bmN0aW9uKHQpe2lmKHQuJG1lbnUub24oXCJjbGlja1wiLFwiLm1kdWktbWVudS1pdGVtXCIsZnVuY3Rpb24odCl7dmFyIG49ZSh0aGlzKSxpPWUodC50YXJnZXQpO2lmKG51bGw9PT1uLmF0dHIoXCJkaXNhYmxlZFwiKSYmIWkuaXMoXCIubWR1aS1tZW51XCIpJiYhaS5pcyhcIi5tZHVpLWRpdmlkZXJcIikmJmkucGFyZW50cyhcIi5tZHVpLW1lbnUtaXRlbVwiKS5lcSgwKS5pcyhuKSl7dmFyIG89bi5jaGlsZHJlbihcIi5tZHVpLW1lbnVcIik7bi5wYXJlbnQoXCIubWR1aS1tZW51XCIpLmNoaWxkcmVuKFwiLm1kdWktbWVudS1pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpLmNoaWxkcmVuKFwiLm1kdWktbWVudVwiKTshdC5sZW5ndGh8fG8ubGVuZ3RoJiZ0LmlzKG8pfHxjKHQpfSksby5sZW5ndGgmJmZ1bmN0aW9uKHQpe3QuaGFzQ2xhc3MoXCJtZHVpLW1lbnUtb3BlblwiKT9jKHQpOnModCl9KG8pfX0pLFwiaG92ZXJcIj09PXQub3B0aW9ucy5zdWJNZW51VHJpZ2dlcil7dmFyIG4saSxvO3QuJG1lbnUub24oXCJtb3VzZW92ZXIgbW91c2VvdXRcIixcIi5tZHVpLW1lbnUtaXRlbVwiLGZ1bmN0aW9uKGEpe3ZhciByPWUodGhpcyksZD1hLnR5cGUsdT1lKGEucmVsYXRlZFRhcmdldCk7aWYobnVsbD09PXIuYXR0cihcImRpc2FibGVkXCIpKXtpZihcIm1vdXNlb3ZlclwiPT09ZCl7aWYoIXIuaXModSkmJmUuY29udGFpbnMoclswXSx1WzBdKSlyZXR1cm59ZWxzZSBpZihcIm1vdXNlb3V0XCI9PT1kJiYoci5pcyh1KXx8ZS5jb250YWlucyhyWzBdLHVbMF0pKSlyZXR1cm47dmFyIGw9ci5jaGlsZHJlbihcIi5tZHVpLW1lbnVcIik7aWYoXCJtb3VzZW92ZXJcIj09PWQpe2lmKGwubGVuZ3RoKXt2YXIgZj1sLmRhdGEoXCJ0aW1lb3V0Q2xvc2UubWR1aS5tZW51XCIpO2lmKGYmJmNsZWFyVGltZW91dChmKSxsLmhhc0NsYXNzKFwibWR1aS1tZW51LW9wZW5cIikpcmV0dXJuO2NsZWFyVGltZW91dChpKSxuPWk9c2V0VGltZW91dChmdW5jdGlvbigpe3MobCl9LHQub3B0aW9ucy5zdWJNZW51RGVsYXkpLGwuZGF0YShcInRpbWVvdXRPcGVuLm1kdWkubWVudVwiLG4pfX1lbHNlIGlmKFwibW91c2VvdXRcIj09PWQmJmwubGVuZ3RoKXt2YXIgaD1sLmRhdGEoXCJ0aW1lb3V0T3Blbi5tZHVpLm1lbnVcIik7aCYmY2xlYXJUaW1lb3V0KGgpLG49bz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyhsKX0sdC5vcHRpb25zLnN1Yk1lbnVEZWxheSksbC5kYXRhKFwidGltZW91dENsb3NlLm1kdWkubWVudVwiLG4pfX19KX19O3QucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe1wib3BlbmluZ1wiPT09dGhpcy5zdGF0ZXx8XCJvcGVuZWRcIj09PXRoaXMuc3RhdGU/dGhpcy5jbG9zZSgpOlwiY2xvc2luZ1wiIT09dGhpcy5zdGF0ZSYmXCJjbG9zZWRcIiE9PXRoaXMuc3RhdGV8fHRoaXMub3BlbigpfTt2YXIgdT1mdW5jdGlvbih0KXt0LiRtZW51LnJlbW92ZUNsYXNzKFwibWR1aS1tZW51LWNsb3NpbmdcIiksXCJvcGVuaW5nXCI9PT10LnN0YXRlJiYodC5zdGF0ZT1cIm9wZW5lZFwiLHIoXCJvcGVuZWRcIixcIm1lbnVcIix0LHQuJG1lbnUpKSxcImNsb3NpbmdcIj09PXQuc3RhdGUmJih0LnN0YXRlPVwiY2xvc2VkXCIscihcImNsb3NlZFwiLFwibWVudVwiLHQsdC4kbWVudSksdC4kbWVudS5jc3Moe3RvcDpcIlwiLGxlZnQ6XCJcIix3aWR0aDpcIlwiLHBvc2l0aW9uOlwiZml4ZWRcIn0pKX07cmV0dXJuIHQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzO1wib3BlbmluZ1wiIT09dC5zdGF0ZSYmXCJvcGVuZWRcIiE9PXQuc3RhdGUmJih0LnN0YXRlPVwib3BlbmluZ1wiLHIoXCJvcGVuXCIsXCJtZW51XCIsdCx0LiRtZW51KSxhKHQpLHQuJG1lbnUuY3NzKFwicG9zaXRpb25cIix0Lm9wdGlvbnMuZml4ZWQ/XCJmaXhlZFwiOlwiYWJzb2x1dGVcIikuYWRkQ2xhc3MoXCJtZHVpLW1lbnUtb3BlblwiKS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7dSh0KX0pKX0sdC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO1wiY2xvc2luZ1wiIT09dC5zdGF0ZSYmXCJjbG9zZWRcIiE9PXQuc3RhdGUmJih0LnN0YXRlPVwiY2xvc2luZ1wiLHIoXCJjbG9zZVwiLFwibWVudVwiLHQsdC4kbWVudSksdC4kbWVudS5maW5kKFwiLm1kdWktbWVudVwiKS5lYWNoKGZ1bmN0aW9uKCl7YyhlKHRoaXMpKX0pLHQuJG1lbnUucmVtb3ZlQ2xhc3MoXCJtZHVpLW1lbnUtb3BlblwiKS5hZGRDbGFzcyhcIm1kdWktbWVudS1jbG9zaW5nXCIpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24oKXt1KHQpfSkpfSx0fSgpLGUoZnVuY3Rpb24oKXtuLm9uKFwiY2xpY2tcIixcIlttZHVpLW1lbnVdXCIsZnVuY3Rpb24oKXt2YXIgbj1lKHRoaXMpLGk9bi5kYXRhKFwibWR1aS5tZW51XCIpO2lmKCFpKXt2YXIgbz1zKG4uYXR0cihcIm1kdWktbWVudVwiKSksYT1vLnRhcmdldDtkZWxldGUgby50YXJnZXQsaT1uZXcgdC5NZW51KG4sYSxvKSxuLmRhdGEoXCJtZHVpLm1lbnVcIixpKSxpLnRvZ2dsZSgpfX0pfSksdC5KUT1lLHR9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1kdWkubWluLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvbWR1aS5taW4uanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuXHRzYXZlU2Nyb2xsUG9zaXRpb246IHRydWUsXG5cdHJvdXRlczogW1xuXHRcdHtcblx0XHRcdHBhdGg6ICcvJyxcblx0XHRcdHJlZGlyZWN0IDoge25hbWU6J3dlbGNvbWUnfSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdsb2dpbicsXG5cdFx0XHRwYXRoOiAnL2xvZ2luJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2xvZ2luLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWUgOiAnd2VsY29tZScsXG5cdFx0XHRwYXRoOiAnL2luZGV4L3dlbGNvbWUnLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvaW5kZXgvd2VsY29tZS52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL2luZGV4L29yZGVyX2ludG8nLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvaW5kZXgvb3JkZXJfaW50by52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL2luZGV4L3VzZXJfdHJhbnNmZXInLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvaW5kZXgvdXNlcl90cmFuc2Zlci52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL2luZGV4L3N5c2luZm8nLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvaW5kZXgvc3lzaW5mby52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3BheS9pbmRleCcsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9wYXkvaW5kZXgudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9tZXJjaGFudC9pbmRleCcsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9tZXJjaGFudC9pbmRleC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL21lcmNoYW50L2JlaGF2aW9yJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL21lcmNoYW50L2JlaGF2aW9yLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvdHJhbnNmZXIvaW5kZXgnLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvdHJhbnNmZXIvaW5kZXgudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9yZWFzb24vaW5kZXgnLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvcmVhc29uL2luZGV4LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvcmVwb3J0L3JlYXNvbicsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9yZXBvcnQvcmVhc29uLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvcmVwb3J0L3B1cnNlJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3JlcG9ydC9wdXJzZS52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3B1cnNlL3B1cnNlJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL3B1cnNlLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvcHVyc2UvdXNlcicsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9wdXJzZS91c2VyLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvcHVyc2UvZnJlZXplJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL2ZyZWV6ZS52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3B1cnNlL3VzZXJfdHlwZScsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9wdXJzZS91c2VyX3R5cGUudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9wdXJzZS9wdXJzZV90eXBlJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL3B1cnNlX3R5cGUudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy93aXRoZHJhdy9iYW5rJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3dpdGhkcmF3L2JhbmsudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy93aXRoZHJhdy9hbGlwYXknLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvd2l0aGRyYXcvYWxpcGF5LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvd2l0aGRyYXcvd2VjaGF0Jyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3dpdGhkcmF3L3dlY2hhdC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL29yZGVyL2luZGV4Jyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvZXhwb3J0L2luZGV4Jyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2V4cG9ydC9pbmRleC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3J1bGUvdXNlcicsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9ydWxlL3VzZXIudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9ydWxlL2dyb3VwJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3J1bGUvZ3JvdXAudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9zeXN0ZW0vY29uZmlnJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3N5c3RlbS9jb25maWcudnVlJ10sIHJlc29sdmUpKVxuXHRcdH1cblx0XVxufSk7XG5cblxucm91dGVyLmJlZm9yZUVhY2goKHRvLGZyb20sbmV4dCkgPT4ge1xuXHRcblx0bmV4dCgpXG59KTtcblxucm91dGVyLmFmdGVyRWFjaCgoKSA9PiB7XG5cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbmZpZy9yb3V0ZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDI2Il0sInNvdXJjZVJvb3QiOiIifQ==