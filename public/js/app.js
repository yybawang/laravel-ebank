webpackJsonp([25],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			user: '',
			menu: '',
			initing: false,
			password_reset_dialog: '',
			password_reset: {
				password_old: '',
				password_new: '',
				password_new_confirmation: ''
			}
		};
	},

	methods: {
		menu_active: function menu_active(t) {
			$('.mdui-list-item-actived').removeClass('mdui-list-item-actived mdui-color-theme');
			$(t.currentTarget).addClass('mdui-list-item-actived mdui-color-theme');
		},
		password_reset_submit: function password_reset_submit() {
			var t = this;
			post('/rule/password_reset', this.password_reset, function (data) {
				t.password_reset_dialog.close();
				mdui.alert('已成功修改，下次登录请使用新密码', '修改登录密码完成', function () {}, { history: false });
				for (var i in t.password_reset) {
					t.password_reset[i] = '';
				}
			});
		},
		init: function init() {
			var t = this;
			// if(!t.initing){
			t.initing = true;
			get('/init', {}, function (data) {
				t.user = data.user;
				t.menu = data.menu;
				t.initing = false;
			});
			// }
		},
		initClear: function initClear() {
			var t = this;
			t.menu = '';
			t.user = '';
		},
		logout: function logout() {
			var t = this;
			tips('即将跳转到登录页');
			get('/logout', {}, function (data) {
				t.$router.push({ path: '/login' });
			});
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

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f488d9e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.pages-wrap[data-v-1f488d9e] {\n\ttext-align: center;\n}\n.pagination[data-v-1f488d9e] {\n\tdisplay: inline-block;\n\tpadding-left: 0;\n\tmargin: 20px 0;\n\tborder-radius: 4px;\n}\n.pagination>li[data-v-1f488d9e] {\n\tdisplay: inline;\n}\n.pagination>.active>a[data-v-1f488d9e], .pagination>.active>a[data-v-1f488d9e]:hover, .pagination>.active>span[data-v-1f488d9e],  .pagination>.active>span[data-v-1f488d9e]:hover {\n\tz-index: 3;\n\tcolor: #fff;\n\tcursor: default;\n\tbackground-color: #337ab7;\n\tborder-color: #337ab7;\n}\n.pagination>.disabled>a[data-v-1f488d9e], .pagination>.disabled>a[data-v-1f488d9e]:hover, .pagination>.disabled>span[data-v-1f488d9e], .pagination>.disabled>span[data-v-1f488d9e]:hover {\n\tcolor: #777;\n\tcursor: not-allowed;\n\tbackground-color: #fff;\n\tborder-color: #ddd;\n}\n.pagination>li>a[data-v-1f488d9e]:hover,.pagination>li>span[data-v-1f488d9e]:hover {\n\tz-index: 2;\n\tcolor: rgba(0,0,0,0.6);\n\tbackground-color: #eee;\n\tborder-color: #ddd;\n}\n.pagination>li>a[data-v-1f488d9e], .pagination>li>span[data-v-1f488d9e] {\n\tposition: relative;\n\tfloat: left;\n\tpadding: 6px 12px;\n\tmargin-left: -1px;\n\tline-height: 1.42857143;\n\tcolor: #000;\n\ttext-decoration: none;\n\tbackground-color: #fff;\n\tborder: 1px solid #ddd;\n}\n", "", {"version":3,"sources":["E:/www/laravel-ebank/resources/assets/js/components/resources/assets/js/components/pagination.vue"],"names":[],"mappings":";AA6DA;CACA,mBAAA;CACA;AACA;CACA,sBAAA;CACA,gBAAA;CACA,eAAA;CACA,mBAAA;CACA;AACA;CACA,gBAAA;CACA;AACA;CACA,WAAA;CACA,YAAA;CACA,gBAAA;CACA,0BAAA;CACA,sBAAA;CACA;AACA;CACA,YAAA;CACA,oBAAA;CACA,uBAAA;CACA,mBAAA;CACA;AACA;CACA,WAAA;CACA,uBAAA;CACA,uBAAA;CACA,mBAAA;CACA;AACA;CACA,mBAAA;CACA,YAAA;CACA,kBAAA;CACA,kBAAA;CACA,wBAAA;CACA,YAAA;CACA,sBAAA;CACA,uBAAA;CACA,uBAAA;CACA","file":"pagination.vue","sourcesContent":["<template type=\"text/template\" id=\"template_pagination\">\n\t<section class=\"pages-wrap\" v-show=\"pageInfo.total>pageInfo.pagenum\">\n\t\t<ul class=\"pagination clearfix\">\n\t\t\t<li :class=\"{'disabled': pageInfo.current == 1}\"><a href=\"javascript:;\" @click=\"clickCurrent(1)\"> 首页 </a></li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == 1}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.current - 1)\"> 上一页 </a></li>\n\t\t\t<li v-for=\"p in setList\" :class=\"{'active': pageInfo.current == p.val}\" >\n\t\t\t\t<a href=\"javascript:;\" v-if=\"pageInfo.current == p.val\" :style=\"{backgroundColor:pageInfo.skin , borderColor:pageInfo.skin}\" @click=\"clickCurrent(p.val)\"> {{ p.text }} </a>\n\t\t\t\t<a href=\"javascript:;\" v-else  @click=\"clickCurrent(p.val)\"> {{ p.text }} </a>\n\t\t\t</li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == pageInfo.page}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.current + 1)\"> 下一页</a></li>\n\t\t\t<li :class=\"{'disabled': pageInfo.current == pageInfo.page}\"><a href=\"javascript:;\" @click=\"clickCurrent(pageInfo.page)\"> 尾页 </a></li>\n\t\t</ul>\n\t</section>\n</template>\n<script>\n\t// import Vue from 'vue'\n\texport default {\n\t\tprops:['pageInfo'],\n\t\tcomputed: {\n\t\t\tpage:function() {\n\t\t\t\treturn Math.ceil(this.pageInfo.total / this.pageInfo.pagenum);\n\t\t\t},\n\t\t\tsetList:function(){\n\t\t\t\tvar len = this.page , temp = [], list = [], count = Math.floor(this.pageInfo.pagegroup / 2) ,center = this.pageInfo.current;\n\t\t\t\tif( len <= this.pageInfo.pagegroup ){\n\t\t\t\t\twhile(len--){ temp.push({text:this.page-len,val:this.page-len});};\n\t\t\t\t\treturn temp;\n\t\t\t\t}\n\t\t\t\twhile(len--){ temp.push(this.page - len);};\n\t\t\t\tvar idx = temp.indexOf(center);\n\t\t\t\t(idx < count) && ( center = center + count - idx);\n\t\t\t\t(this.pageInfo.current > this.page - count) && ( center = this.page - count);\n\t\t\t\ttemp = temp.splice(center - count -1, this.pageInfo.pagegroup);\n\t\t\t\tdo {\n\t\t\t\t\tvar t = temp.shift();\n\t\t\t\t\tlist.push({\n\t\t\t\t\t\ttext: t,\n\t\t\t\t\t\tval: t\n\t\t\t\t\t});\n\t\t\t\t}while(temp.length);\n\t\t\t\tif( this.page > this.pageInfo.pagegroup ){\n\t\t\t\t\t(this.pageInfo.current > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });\n\t\t\t\t\t(this.pageInfo.current < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });\n\t\t\t\t}\n\t\t\t\treturn list;\n\t\t\t}\n\t\t},\n\t\tcreated:function (argument) {\n\t\t\t// console.log(this.pageInfo)\n\t\t},\n\t\tmethods: {\n\t\t\tclickCurrent: function(idx) {\n\t\t\t\tif( this.pageInfo.current != idx && idx > 0 && idx < this.page + 1) {\n\t\t\t\t\tthis.pageInfo.current = idx;\n\t\t\t\t\tthis.$emit('change',this.pageInfo.current);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n</script>\n<style scoped>\n\t.pages-wrap {\n\t\ttext-align: center;\n\t}\n\t.pagination {\n\t\tdisplay: inline-block;\n\t\tpadding-left: 0;\n\t\tmargin: 20px 0;\n\t\tborder-radius: 4px;\n\t}\n\t.pagination>li {\n\t\tdisplay: inline;\n\t}\n\t.pagination>.active>a, .pagination>.active>a:hover, .pagination>.active>span,  .pagination>.active>span:hover {\n\t\tz-index: 3;\n\t\tcolor: #fff;\n\t\tcursor: default;\n\t\tbackground-color: #337ab7;\n\t\tborder-color: #337ab7;\n\t}\n\t.pagination>.disabled>a, .pagination>.disabled>a:hover, .pagination>.disabled>span, .pagination>.disabled>span:hover {\n\t\tcolor: #777;\n\t\tcursor: not-allowed;\n\t\tbackground-color: #fff;\n\t\tborder-color: #ddd;\n\t}\n\t.pagination>li>a:hover,.pagination>li>span:hover {\n\t\tz-index: 2;\n\t\tcolor: rgba(0,0,0,0.6);\n\t\tbackground-color: #eee;\n\t\tborder-color: #ddd;\n\t}\n\t.pagination>li>a, .pagination>li>span {\n\t\tposition: relative;\n\t\tfloat: left;\n\t\tpadding: 6px 12px;\n\t\tmargin-left: -1px;\n\t\tline-height: 1.42857143;\n\t\tcolor: #000;\n\t\ttext-decoration: none;\n\t\tbackground-color: #fff;\n\t\tborder: 1px solid #ddd;\n\t}\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1f488d9e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pagination.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-1f488d9e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6dd1125c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/App.vue":
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
                  _vm._v(_vm._s(_vm.user.realname || "无姓名") + "\n\t\t\t\t\t")
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
                  _vm._v(_vm._s(_vm.user.mobile || "无手机号") + "\n\t\t\t\t\t")
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
                  _vm._v(_vm._s(_vm.user.email || "无邮箱") + "\n\t\t\t\t\t")
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mdui-divider" }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("li", { staticClass: "mdui-menu-item" }, [
              _c(
                "a",
                { staticClass: "mdui-ripple", attrs: { href: "javascript:;" } },
                [
                  _c("i", { staticClass: "mdui-menu-item-icon" }),
                  _vm._v(
                    _vm._s(_vm.user.last_login || "无历史登录") + "\n\t\t\t\t\t"
                  )
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
              staticStyle: { height: "190px" },
              attrs: { src: __webpack_require__("./resources/assets/images/snow_square_tiny.png") }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mdui-card-menu" },
              [
                _c("router-link", { attrs: { to: { path: "/logout" } } }, [
                  _vm.user
                    ? _c(
                        "button",
                        {
                          staticClass: "mdui-btn mdui-text-color-grey",
                          on: { click: _vm.logout }
                        },
                        [_vm._v("Logout")]
                      )
                    : _vm._e()
                ])
              ],
              1
            ),
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
                  "mdui-collapse-item-open": index == 0 ? true : false
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
                  "div",
                  { staticClass: "mdui-collapse-item-body mdui-list" },
                  _vm._l(val, function(val2, key2, index2) {
                    return _c(
                      "div",
                      { on: { click: _vm.menu_active } },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "mdui-list-item mdui-ripple",
                            attrs: { to: { path: val2 } }
                          },
                          [_vm._v(_vm._s(key2))]
                        )
                      ],
                      1
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
    _vm._m(2),
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
    require("vue-hot-reload-api")      .rerender("data-v-6dd1125c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f488d9e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f488d9e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pagination.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b7403ade", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f488d9e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f488d9e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue");
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6dd1125c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/App.vue")
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
Component.options.__file = "resources\\assets\\js\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dd1125c", Component.options)
  } else {
    hotAPI.reload("data-v-6dd1125c", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_datepicker_local__ = __webpack_require__("./node_modules/vue-datepicker-local/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__("./resources/assets/js/App.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_router_js__ = __webpack_require__("./resources/assets/js/config/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_function_js__ = __webpack_require__("./resources/assets/js/config/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_function_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_function_js__);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__("./resources/assets/js/bootstrap.js");

window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('pagination', __webpack_require__("./resources/assets/js/components/pagination.vue"));
Vue.component('vue-datepicker-local', __WEBPACK_IMPORTED_MODULE_0_vue_datepicker_local__["default"]);



window.router = __WEBPACK_IMPORTED_MODULE_2__config_router_js__["a" /* default */];


var app = new Vue({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__config_router_js__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a);
  }
});

// 单独实例化一个菜单VUE，用于路由链接
// const menu = new Vue({
// 	el: '#main-drawer',
// });

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {


// window._ = require('lodash');
window.mdui = __webpack_require__("./node_modules/mdui/dist/js/mdui.js");
window.$ = mdui.JQ;
// require('mdui/dist/css/mdui.min.css');

window.md5 = __webpack_require__("./node_modules/md5/md5.js");

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

window.axios = __webpack_require__("./node_modules/axios/index.js");

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

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
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f488d9e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pagination.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pagination.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1f488d9e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pagination.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f488d9e"
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
Component.options.__file = "resources\\assets\\js\\components\\pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f488d9e", Component.options)
  } else {
    hotAPI.reload("data-v-1f488d9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/config/function.js":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 屏幕下方文字提示
 * @param msg
 */
var tips = function tips(msg) {
	mdui.snackbar({
		message: msg,
		position: 'right-top',
		timeout: 3000,
		buttonText: 'Close'
	});
};
window.tips = tips;

/**
 * 加载窗
 * @param close
 */
var loading = function loading(close) {
	if (close) {
		$('.ajax_loading').addClass('mdui-hidden');
	} else {
		$('.ajax_loading').removeClass('mdui-hidden');
	}
};
window.loading = loading;

/**
 * 控制台日志
 * @param variable
 */
var logs = function logs(variable) {
	console.info(typeof variable === 'undefined' ? 'undefined' : _typeof(variable));
	console.log(variable);
};
window.logs = logs;

var DatePickerFormat = function DatePickerFormat(time) {
	try {
		var year = time.getFullYear();
		var month = time.getMonth();
		var day = time.getDate();
		var hours24 = time.getHours();
		var hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		var milliseconds = time.getMilliseconds();
		var dd = function dd(t) {
			return ('0' + t).slice(-2);
		};
		return year + '-' + dd(month + 1) + '-' + dd(day);
	} catch (e) {
		return time;
	}
};
window.DatePickerFormat = DatePickerFormat;

var ajax = function ajax(url, post_data, success, error, method) {
	if (!error) {
		error = function error() {};
	}
	if (!success) {
		success = function success(msg) {};
	}
	var errors = function errors(msg) {
		tips(msg);
	};
	// ajax 请求封装
	loading();
	axios({
		url: APP_URL + '/admin' + url,
		method: method,
		data: post_data
	}).then(function (response) {
		loading(true);
		var data = response.data;
		if ('1' == data.status) {
			success(data.data, data.message);
		} else if ('0' == data.status) {
			tips(data.message);
		} else if ('2' == data.status) {
			// tips(data.message);
			router.push({ path: '/login' });
		} else {
			tips('失败，未正常接收 json 值');
		}
	}).catch(function (error_response) {
		logs(error_response);
		// 返回非 json，404/500 等
		var status = error_response.response.status,
		    message = '';
		loading(true);
		// 422 是参数验证失败返回状态
		if (status === 422) {
			message = Object.values(error_response.response.data.errors)[0][0];
		} else {
			message = error_response.response.data.message;
		}
		errors('服务器错误，状态码：' + error_response.response.status + '<br/>参考信息：' + message + '<br/>exception:' + error_response.response.data.exception);
		error(message, error_response.response.data.data);
	});
};

/**
 * ajax 请求
 * @param url
 * @param post_data
 * @param success
 * @param error
 */
var post = function post(url, post_data, success, error) {
	ajax(url, post_data, success, error, 'post');
};
window.post = post;

/**
 * ajax get请求
 * @param url
 * @param get_param
 * @param success
 * @param error
 */
var get = function get(url, get_param, success, error) {
	// let url_param = [];
	// mdui.JQ.each(get_param,function(k,v){
	// 	url_param.push(k+'='+v);
	// });
	if (get_param.date && get_param.date.length > 0) {
		for (var i in get_param.date) {
			get_param.date[i] = DatePickerFormat(get_param.date[i]);
		}
	}
	var url_param = $.param(get_param);
	ajax(url + '?' + url_param, get_param, success, error, 'get');
};
window.get = get;

/**
 * ajax delete 请求
 * @param url
 * @param get_param
 * @param success
 * @param error
 */
var del = function del(url, get_param, success, error) {
	ajax(url, get_param, success, error, 'delete');
};
window.del = del;

/***/ }),

/***/ "./resources/assets/js/config/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	saveScrollPosition: true,
	routes: [{
		path: '/',
		redirect: '/welcome'
	}, {
		name: 'login',
		path: '/login',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/login.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		name: 'welcome',
		path: '/welcome',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/index/welcome.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		name: 'user_transfer',
		path: '/user_transfer',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/index/user_transfer.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/sysinfo',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/index/sysinfo.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/merchant',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(21).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/merchant/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	},
	// {
	// 	path: '/merchant/api',
	// 	component: resolve => void(require(['../components/merchant/index.vue'], resolve))
	// },
	{
		path: '/transfer',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/transfer/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/transfer/reason',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/transfer/reason.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/report/reason',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/report/reason.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/report/purse',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/report/purse.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/central',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(19).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/purse/central.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/purse/system',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/purse/system.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
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
			return void __webpack_require__.e/* require */(17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/purse/purse_type.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/bank',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/withdraw/bank.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/alipay',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/withdraw/alipay.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/withdraw/wechat',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/withdraw/wechat.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/order',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(20).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/order/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/export',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(23).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/export/index.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/rule/user',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/rule/user.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/rule/group',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/rule/group.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/system/config',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/system/config.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}, {
		path: '/system/behavior',
		component: function component(resolve) {
			return void __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/system/behavior.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
		}
	}]
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlP2U3MjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlP2U0YWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlP2RjMDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlPzRhMzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbmZpZy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbmZpZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJWdWUiLCJjb21wb25lbnQiLCJyb3V0ZXIiLCJhcHAiLCJlbCIsInJlbmRlciIsImgiLCJtZHVpIiwiJCIsIkpRIiwibWQ1IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0aXBzIiwibXNnIiwic25hY2tiYXIiLCJtZXNzYWdlIiwicG9zaXRpb24iLCJ0aW1lb3V0IiwiYnV0dG9uVGV4dCIsImxvYWRpbmciLCJjbG9zZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsb2dzIiwidmFyaWFibGUiLCJjb25zb2xlIiwiaW5mbyIsImxvZyIsIkRhdGVQaWNrZXJGb3JtYXQiLCJ0aW1lIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyczI0IiwiZ2V0SG91cnMiLCJob3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJkZCIsInQiLCJzbGljZSIsImUiLCJhamF4IiwidXJsIiwicG9zdF9kYXRhIiwic3VjY2VzcyIsImVycm9yIiwibWV0aG9kIiwiZXJyb3JzIiwiQVBQX1VSTCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJwdXNoIiwicGF0aCIsImNhdGNoIiwiZXJyb3JfcmVzcG9uc2UiLCJPYmplY3QiLCJ2YWx1ZXMiLCJleGNlcHRpb24iLCJwb3N0IiwiZ2V0IiwiZ2V0X3BhcmFtIiwiZGF0ZSIsImxlbmd0aCIsImkiLCJ1cmxfcGFyYW0iLCJwYXJhbSIsImRlbCIsInVzZSIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInJvdXRlcyIsInJlZGlyZWN0IiwibmFtZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1JQTtBQUNBLEtBREEsa0JBQ0E7QUFDQTtBQUNBLFdBREE7QUFFQSxXQUZBO0FBR0EsaUJBSEE7QUFJQSw0QkFKQTtBQUtBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTtBQUdBO0FBSEE7QUFMQTtBQVdBLEVBYkE7O0FBY0E7QUFDQSxhQURBLHVCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUpBO0FBS0EsdUJBTEEsbUNBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBTkE7QUFPQSxHQWRBO0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFKQTtBQUtBO0FBQ0EsR0F6QkE7QUEwQkEsV0ExQkEsdUJBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E5QkE7QUErQkEsUUEvQkEsb0JBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUZBO0FBR0E7QUFyQ0EsRUFkQTtBQXFEQSxRQXJEQSxxQkFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpEQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FIQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFEQTtBQUVBO0FBRkE7QUFJQSxJQU5BLFFBTUEsV0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQSxFQUZBO0FBK0JBO0FBQ0E7QUFDQSxFQWpDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBbENBLEc7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBR0E7QUFDQSx5REFBMEQsdUJBQXVCLEdBQUcsZ0NBQWdDLDBCQUEwQixvQkFBb0IsbUJBQW1CLHVCQUF1QixHQUFHLG1DQUFtQyxvQkFBb0IsR0FBRyxxTEFBcUwsZUFBZSxnQkFBZ0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyw0TEFBNEwsZ0JBQWdCLHdCQUF3QiwyQkFBMkIsdUJBQXVCLEdBQUcsc0ZBQXNGLGVBQWUsMkJBQTJCLDJCQUEyQix1QkFBdUIsR0FBRywyRUFBMkUsdUJBQXVCLGdCQUFnQixzQkFBc0Isc0JBQXNCLDRCQUE0QixnQkFBZ0IsMEJBQTBCLDJCQUEyQiwyQkFBMkIsR0FBRyxVQUFVLG9KQUFvSixNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsd1BBQXdQLGtDQUFrQyx5QkFBeUIsaUVBQWlFLGtDQUFrQyx5QkFBeUIsNEdBQTRHLG9DQUFvQyxvQ0FBb0MsZ0RBQWdELDBEQUEwRCxxQ0FBcUMsVUFBVSxxQ0FBcUMsNkNBQTZDLFVBQVUsd0NBQXdDLDhDQUE4Qyx5QkFBeUIsb0ZBQW9GLDhDQUE4Qyx5QkFBeUIsdUpBQXVKLDBDQUEwQyx5QkFBeUIsd0VBQXdFLFNBQVMsNEJBQTRCLHNJQUFzSSwrQ0FBK0MseUJBQXlCLFlBQVkscUNBQXFDLElBQUksd0JBQXdCLFdBQVcsdUJBQXVCLDhCQUE4Qix5Q0FBeUMsNERBQTRELHVGQUF1Rix5RUFBeUUsY0FBYyxpQ0FBaUMsdUJBQXVCLHVEQUF1RCxFQUFFLFdBQVcsbUJBQW1CLG9EQUFvRCxpRUFBaUUsa0NBQWtDLEVBQUUsc0VBQXNFLGdEQUFnRCxFQUFFLFdBQVcsc0JBQXNCLFNBQVMsT0FBTyxvQ0FBb0MsNENBQTRDLGlCQUFpQixxQ0FBcUMsK0VBQStFLHdDQUF3Qyx1REFBdUQsV0FBVyxTQUFTLE9BQU8sS0FBSyw0Q0FBNEMseUJBQXlCLEtBQUssaUJBQWlCLDRCQUE0QixzQkFBc0IscUJBQXFCLHlCQUF5QixLQUFLLG9CQUFvQixzQkFBc0IsS0FBSyxtSEFBbUgsaUJBQWlCLGtCQUFrQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixLQUFLLDBIQUEwSCxrQkFBa0IsMEJBQTBCLDZCQUE2Qix5QkFBeUIsS0FBSyxzREFBc0QsaUJBQWlCLDZCQUE2Qiw2QkFBNkIseUJBQXlCLEtBQUssMkNBQTJDLHlCQUF5QixrQkFBa0Isd0JBQXdCLHdCQUF3Qiw4QkFBOEIsa0JBQWtCLDRCQUE0Qiw2QkFBNkIsNkJBQTZCLEtBQUssNkJBQTZCOztBQUUxdUw7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQ0FBcUM7QUFDOUM7QUFDQSxvQkFBb0IsU0FBUyxzQ0FBc0MsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CLEdBQUc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLHNDQUFzQyxFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0IsR0FBRztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLHdDQUF3QyxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsZ0NBQWdDLG9CQUFvQixHQUFHO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0IsR0FBRztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxzREFBc0QsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQkFBb0IsR0FBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLHNEQUFzRCxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9CQUFvQixHQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQStDO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTLCtDQUErQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNLFlBQVk7QUFDeEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU0sWUFBWTtBQUN4QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQixxQkFBcUI7QUFDM0QsYUFBYTtBQUNiO0FBQ0EsdUJBQXVCLDBDQUEwQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQXVEO0FBQzNFLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBLGlCQUFpQixxQ0FBcUMsb0JBQW9CLEdBQUcsRUFBRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0NBQWdDO0FBQ3REO0FBQ0E7QUFDQSxpQkFBaUIscUNBQXFDLG9CQUFvQixHQUFHLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0EsaUJBQWlCLHFDQUFxQyxvQkFBb0IsR0FBRyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0EsaUJBQWlCLHFDQUFxQyxvQkFBb0IsR0FBRyxFQUFFO0FBQy9FO0FBQ0EsMkJBQTJCLHFDQUFxQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQSxzQkFBc0IsZ0NBQWdDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9CQUFvQixHQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQkFBK0Isb0JBQW9CLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUMscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUMsc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBLG1DQUFtQyxTQUFTLE1BQU0sa0JBQWtCLEVBQUUsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRDQUE0QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CLGdCQUFnQjtBQUN4RCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBbUQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU0seUJBQXlCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxNQUFNLGFBQWE7QUFDdkQsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxFQUFFO0FBQ2hDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFtRDtBQUNsRSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQ0FBcUM7QUFDdEQsbUJBQW1CLGdDQUFnQztBQUNuRCxxQkFBcUIsZ0NBQWdDO0FBQ3JELHlCQUF5QixzQ0FBc0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDLHlCQUF5Qix5Q0FBeUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQscUJBQXFCLGdDQUFnQztBQUNyRCx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qyx5QkFBeUIseUNBQXlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25ELHFCQUFxQixnQ0FBZ0M7QUFDckQseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekMseUJBQXlCLHNEQUFzRDtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQixvQ0FBb0M7QUFDdEUsT0FBTztBQUNQLGdCQUFnQiwwQ0FBMEM7QUFDMUQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JELGVBQWUscUNBQXFDLG9CQUFvQixHQUFHLEVBQUU7QUFDN0U7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyZUE7O0FBRUE7QUFDQSx1VUFBa087QUFDbE87QUFDQTtBQUNBO0FBQ0EseUhBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0pBQWdKLGlGQUFpRjtBQUNqTyx5SkFBeUosaUZBQWlGO0FBQzFPO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQSxpRjs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLHlaQUFzUjtBQUN0UjtBQUNBLGtSQUE2SztBQUM3SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOzs7Ozs7QUFNQSxtQkFBQUEsQ0FBUSxvQ0FBUjs7QUFFQUMsT0FBT0MsR0FBUCxHQUFhLG1CQUFBRixDQUFRLHVDQUFSLENBQWI7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7QUFDQUUsSUFBSUMsU0FBSixDQUFjLFlBQWQsRUFBNEIsbUJBQUFILENBQVEsaURBQVIsQ0FBNUI7QUFDQUUsSUFBSUMsU0FBSixDQUFjLHNCQUFkLEVBQXFDLDZEQUFyQzs7QUFFQTtBQUNBO0FBQ0FGLE9BQU9HLE1BQVAsR0FBZ0Isa0VBQWhCO0FBQ0E7O0FBR0EsSUFBTUMsTUFBTSxJQUFJSCxHQUFKLENBQVE7QUFDaEJJLE1BQUksTUFEWTtBQUVuQkYsVUFBQSxrRUFGbUI7QUFHbkJHLFVBQVE7QUFBQSxXQUFLQyxFQUFFLGdEQUFGLENBQUw7QUFBQTtBQUhXLENBQVIsQ0FBWjs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxNOzs7Ozs7OztBQ3BDQTtBQUNBUCxPQUFPUSxJQUFQLEdBQWEsbUJBQUFULENBQVEscUNBQVIsQ0FBYjtBQUNBQyxPQUFPUyxDQUFQLEdBQVdELEtBQUtFLEVBQWhCO0FBQ0E7O0FBRUFWLE9BQU9XLEdBQVAsR0FBYSxtQkFBQVosQ0FBUSwyQkFBUixDQUFiOztBQUdBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQUMsT0FBT1ksS0FBUCxHQUFlLG1CQUFBYixDQUFRLCtCQUFSLENBQWY7O0FBRUFDLE9BQU9ZLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGtCQUFyQyxJQUEyRCxnQkFBM0Q7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNOzs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBLG9XQUFrTTtBQUNsTTtBQUNBO0FBQ0E7QUFDQSwyYUFBc1I7QUFDdFI7QUFDQSxtU0FBK0s7QUFDL0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7O0FDM0NBOzs7O0FBSUEsSUFBSUMsT0FBTyxTQUFQQSxJQUFPLENBQVNDLEdBQVQsRUFBYTtBQUN2QlQsTUFBS1UsUUFBTCxDQUFjO0FBQ2JDLFdBQVVGLEdBREc7QUFFYkcsWUFBUyxXQUZJO0FBR2JDLFdBQVUsSUFIRztBQUliQyxjQUFhO0FBSkEsRUFBZDtBQU1BLENBUEQ7QUFRQXRCLE9BQU9nQixJQUFQLEdBQWNBLElBQWQ7O0FBRUE7Ozs7QUFJQSxJQUFJTyxVQUFVLFNBQVZBLE9BQVUsQ0FBU0MsS0FBVCxFQUFlO0FBQzVCLEtBQUdBLEtBQUgsRUFBUztBQUNSZixJQUFFLGVBQUYsRUFBbUJnQixRQUFuQixDQUE0QixhQUE1QjtBQUNBLEVBRkQsTUFFSztBQUNKaEIsSUFBRSxlQUFGLEVBQW1CaUIsV0FBbkIsQ0FBK0IsYUFBL0I7QUFDQTtBQUNELENBTkQ7QUFPQTFCLE9BQU91QixPQUFQLEdBQWlCQSxPQUFqQjs7QUFFQTs7OztBQUlBLElBQUlJLE9BQU8sU0FBUEEsSUFBTyxDQUFTQyxRQUFULEVBQWtCO0FBQzVCQyxTQUFRQyxJQUFSLFFBQW9CRixRQUFwQix5Q0FBb0JBLFFBQXBCO0FBQ0FDLFNBQVFFLEdBQVIsQ0FBWUgsUUFBWjtBQUNBLENBSEQ7QUFJQTVCLE9BQU8yQixJQUFQLEdBQWNBLElBQWQ7O0FBRUEsSUFBSUssbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBU0MsSUFBVCxFQUFjO0FBQ3BDLEtBQUc7QUFDRixNQUFNQyxPQUFPRCxLQUFLRSxXQUFMLEVBQWI7QUFDQSxNQUFNQyxRQUFRSCxLQUFLSSxRQUFMLEVBQWQ7QUFDQSxNQUFNQyxNQUFNTCxLQUFLTSxPQUFMLEVBQVo7QUFDQSxNQUFNQyxVQUFVUCxLQUFLUSxRQUFMLEVBQWhCO0FBQ0EsTUFBTUMsUUFBUUYsVUFBVSxFQUFWLEtBQWlCLENBQWpCLEdBQXFCLEVBQXJCLEdBQTBCQSxVQUFVLEVBQWxEO0FBQ0EsTUFBTUcsVUFBVVYsS0FBS1csVUFBTCxFQUFoQjtBQUNBLE1BQU1DLFVBQVVaLEtBQUthLFVBQUwsRUFBaEI7QUFDQSxNQUFNQyxlQUFlZCxLQUFLZSxlQUFMLEVBQXJCO0FBQ0EsTUFBTUMsS0FBSyxTQUFMQSxFQUFLO0FBQUEsVUFBSyxDQUFDLE1BQU1DLENBQVAsRUFBVUMsS0FBVixDQUFnQixDQUFDLENBQWpCLENBQUw7QUFBQSxHQUFYO0FBQ0EsU0FBT2pCLE9BQUssR0FBTCxHQUFTZSxHQUFHYixRQUFRLENBQVgsQ0FBVCxHQUF1QixHQUF2QixHQUEyQmEsR0FBR1gsR0FBSCxDQUFsQztBQUNBLEVBWEQsQ0FXQyxPQUFNYyxDQUFOLEVBQVM7QUFDVCxTQUFPbkIsSUFBUDtBQUNBO0FBQ0QsQ0FmRDtBQWdCQWpDLE9BQU9nQyxnQkFBUCxHQUEwQkEsZ0JBQTFCOztBQWtCQSxJQUFJcUIsT0FBTyxTQUFQQSxJQUFPLENBQVNDLEdBQVQsRUFBYUMsU0FBYixFQUF1QkMsT0FBdkIsRUFBK0JDLEtBQS9CLEVBQXFDQyxNQUFyQyxFQUE0QztBQUN0RCxLQUFHLENBQUNELEtBQUosRUFBVTtBQUNUQSxVQUFRLGlCQUFVLENBRWpCLENBRkQ7QUFHQTtBQUNELEtBQUcsQ0FBQ0QsT0FBSixFQUFZO0FBQ1hBLFlBQVUsaUJBQVN2QyxHQUFULEVBQWEsQ0FFdEIsQ0FGRDtBQUdBO0FBQ0QsS0FBSTBDLFNBQVMsU0FBVEEsTUFBUyxDQUFTMUMsR0FBVCxFQUFhO0FBQ3pCRCxPQUFLQyxHQUFMO0FBQ0EsRUFGRDtBQUdBO0FBQ0FNO0FBQ0FYLE9BQU07QUFDTDBDLE9BQU1NLFVBQVEsUUFBUixHQUFpQk4sR0FEbEI7QUFFTEksVUFBU0EsTUFGSjtBQUdMRyxRQUFPTjtBQUhGLEVBQU4sRUFJR08sSUFKSCxDQUlRLFVBQVNDLFFBQVQsRUFBa0I7QUFDekJ4QyxVQUFRLElBQVI7QUFDQSxNQUFJc0MsT0FBT0UsU0FBU0YsSUFBcEI7QUFDQSxNQUFHLE9BQU9BLEtBQUtHLE1BQWYsRUFBc0I7QUFDckJSLFdBQVFLLEtBQUtBLElBQWIsRUFBa0JBLEtBQUsxQyxPQUF2QjtBQUNBLEdBRkQsTUFFTSxJQUFHLE9BQU8wQyxLQUFLRyxNQUFmLEVBQXNCO0FBQzNCaEQsUUFBSzZDLEtBQUsxQyxPQUFWO0FBQ0EsR0FGSyxNQUVBLElBQUcsT0FBTzBDLEtBQUtHLE1BQWYsRUFBc0I7QUFDM0I7QUFDQTdELFVBQU84RCxJQUFQLENBQVksRUFBQ0MsTUFBSyxRQUFOLEVBQVo7QUFDQSxHQUhLLE1BR0Q7QUFDSmxELFFBQUssaUJBQUw7QUFDQTtBQUNELEVBakJELEVBaUJHbUQsS0FqQkgsQ0FpQlMsVUFBU0MsY0FBVCxFQUF3QjtBQUNoQ3pDLE9BQUt5QyxjQUFMO0FBQ0E7QUFDQSxNQUFJSixTQUFTSSxlQUFlTCxRQUFmLENBQXdCQyxNQUFyQztBQUFBLE1BQTRDN0MsVUFBVSxFQUF0RDtBQUNBSSxVQUFRLElBQVI7QUFDQTtBQUNBLE1BQUd5QyxXQUFXLEdBQWQsRUFBa0I7QUFDakI3QyxhQUFVa0QsT0FBT0MsTUFBUCxDQUFjRixlQUFlTCxRQUFmLENBQXdCRixJQUF4QixDQUE2QkYsTUFBM0MsRUFBbUQsQ0FBbkQsRUFBc0QsQ0FBdEQsQ0FBVjtBQUNBLEdBRkQsTUFFSztBQUNKeEMsYUFBVWlELGVBQWVMLFFBQWYsQ0FBd0JGLElBQXhCLENBQTZCMUMsT0FBdkM7QUFDQTtBQUNEd0MsU0FBTyxlQUFhUyxlQUFlTCxRQUFmLENBQXdCQyxNQUFyQyxHQUE0QyxZQUE1QyxHQUF5RDdDLE9BQXpELEdBQWlFLGlCQUFqRSxHQUFtRmlELGVBQWVMLFFBQWYsQ0FBd0JGLElBQXhCLENBQTZCVSxTQUF2SDtBQUNBZCxRQUFNdEMsT0FBTixFQUFjaUQsZUFBZUwsUUFBZixDQUF3QkYsSUFBeEIsQ0FBNkJBLElBQTNDO0FBQ0EsRUE5QkQ7QUErQkEsQ0EvQ0Q7O0FBaURBOzs7Ozs7O0FBT0EsSUFBSVcsT0FBTyxTQUFQQSxJQUFPLENBQVNsQixHQUFULEVBQWFDLFNBQWIsRUFBdUJDLE9BQXZCLEVBQStCQyxLQUEvQixFQUFxQztBQUMvQ0osTUFBS0MsR0FBTCxFQUFTQyxTQUFULEVBQW1CQyxPQUFuQixFQUEyQkMsS0FBM0IsRUFBaUMsTUFBakM7QUFDQSxDQUZEO0FBR0F6RCxPQUFPd0UsSUFBUCxHQUFjQSxJQUFkOztBQUVBOzs7Ozs7O0FBT0EsSUFBSUMsTUFBTSxTQUFOQSxHQUFNLENBQVNuQixHQUFULEVBQWFvQixTQUFiLEVBQXVCbEIsT0FBdkIsRUFBK0JDLEtBQS9CLEVBQXFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBR2lCLFVBQVVDLElBQVYsSUFBa0JELFVBQVVDLElBQVYsQ0FBZUMsTUFBZixHQUF3QixDQUE3QyxFQUErQztBQUM5QyxPQUFJLElBQUlDLENBQVIsSUFBYUgsVUFBVUMsSUFBdkIsRUFBNEI7QUFDM0JELGFBQVVDLElBQVYsQ0FBZUUsQ0FBZixJQUFvQjdDLGlCQUFpQjBDLFVBQVVDLElBQVYsQ0FBZUUsQ0FBZixDQUFqQixDQUFwQjtBQUNBO0FBQ0Q7QUFDRCxLQUFJQyxZQUFZckUsRUFBRXNFLEtBQUYsQ0FBUUwsU0FBUixDQUFoQjtBQUNBckIsTUFBS0MsTUFBSSxHQUFKLEdBQVF3QixTQUFiLEVBQXVCSixTQUF2QixFQUFpQ2xCLE9BQWpDLEVBQXlDQyxLQUF6QyxFQUErQyxLQUEvQztBQUNBLENBWkQ7QUFhQXpELE9BQU95RSxHQUFQLEdBQWFBLEdBQWI7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFJTyxNQUFNLFNBQU5BLEdBQU0sQ0FBUzFCLEdBQVQsRUFBYW9CLFNBQWIsRUFBdUJsQixPQUF2QixFQUErQkMsS0FBL0IsRUFBcUM7QUFDOUNKLE1BQUtDLEdBQUwsRUFBU29CLFNBQVQsRUFBbUJsQixPQUFuQixFQUEyQkMsS0FBM0IsRUFBaUMsUUFBakM7QUFDQSxDQUZEO0FBR0F6RCxPQUFPZ0YsR0FBUCxHQUFhQSxHQUFiLEM7Ozs7Ozs7Ozs7O0FDcktBO0FBQ0E7QUFDQSwyQ0FBQS9FLENBQUlnRixHQUFKLENBQVEsbURBQVI7O0FBRUEseURBQWUsSUFBSSxtREFBSixDQUFjO0FBQzVCQyxxQkFBb0IsSUFEUTtBQUU1QkMsU0FBUSxDQUNQO0FBQ0NqQixRQUFNLEdBRFA7QUFFQ2tCLFlBQVc7QUFGWixFQURPLEVBS1A7QUFDQ0MsUUFBTSxPQURQO0FBRUNuQixRQUFNLFFBRlA7QUFHQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUssd0RBQVEscUNBQUMsaUVBQUQsQ0FBUixJQUFxQ29GLE8sOENBQXJDLDJDQUFoQjtBQUFBO0FBSFosRUFMTyxFQVVQO0FBQ0NELFFBQU0sU0FEUDtBQUVDbkIsUUFBTSxVQUZQO0FBR0NoRSxhQUFXO0FBQUEsVUFBVyxLQUFLLHdEQUFRLHFDQUFDLHlFQUFELENBQVIsSUFBNkNvRixPLDhDQUE3QywyQ0FBaEI7QUFBQTtBQUhaLEVBVk8sRUFlUDtBQUNDRCxRQUFNLGVBRFA7QUFFQ25CLFFBQU0sZ0JBRlA7QUFHQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUssd0RBQVEscUNBQUMsK0VBQUQsQ0FBUixJQUFtRG9GLE8sOENBQW5ELDJDQUFoQjtBQUFBO0FBSFosRUFmTyxFQW9CUDtBQUNDcEIsUUFBTSxVQURQO0FBRUNoRSxhQUFXO0FBQUEsVUFBVyxLQUFLLHlEQUFRLHFDQUFDLHlFQUFELENBQVIsSUFBNkNvRixPLDhDQUE3QywyQ0FBaEI7QUFBQTtBQUZaLEVBcEJPLEVBd0JQO0FBQ0NwQixRQUFNLFdBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUsseURBQVEscUNBQUMsMEVBQUQsQ0FBUixJQUE4Q29GLE8sOENBQTlDLDJDQUFoQjtBQUFBO0FBRlosRUF4Qk87QUE0QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDcEIsUUFBTSxXQURQO0FBRUNoRSxhQUFXO0FBQUEsVUFBVyxLQUFLLHdEQUFRLHFDQUFDLDBFQUFELENBQVIsSUFBOENvRixPLDhDQUE5QywyQ0FBaEI7QUFBQTtBQUZaLEVBaENPLEVBb0NQO0FBQ0NwQixRQUFNLGtCQURQO0FBRUNoRSxhQUFXO0FBQUEsVUFBVyxLQUFLLHdEQUFRLHFDQUFDLDJFQUFELENBQVIsSUFBK0NvRixPLDhDQUEvQywyQ0FBaEI7QUFBQTtBQUZaLEVBcENPLEVBd0NQO0FBQ0NwQixRQUFNLGdCQURQO0FBRUNoRSxhQUFXO0FBQUEsVUFBVyxLQUFLLHlEQUFRLHFDQUFDLHlFQUFELENBQVIsSUFBNkNvRixPLDhDQUE3QywyQ0FBaEI7QUFBQTtBQUZaLEVBeENPLEVBNENQO0FBQ0NwQixRQUFNLGVBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUsseURBQVEscUNBQUMsd0VBQUQsQ0FBUixJQUE0Q29GLE8sOENBQTVDLDJDQUFoQjtBQUFBO0FBRlosRUE1Q08sRUFnRFA7QUFDQ3BCLFFBQU0sZ0JBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUsseURBQVEscUNBQUMseUVBQUQsQ0FBUixJQUE2Q29GLE8sOENBQTdDLDJDQUFoQjtBQUFBO0FBRlosRUFoRE8sRUFvRFA7QUFDQ3BCLFFBQU0sZUFEUDtBQUVDaEUsYUFBVztBQUFBLFVBQVcsS0FBSyx5REFBUSxxQ0FBQyx3RUFBRCxDQUFSLElBQTRDb0YsTyw4Q0FBNUMsMkNBQWhCO0FBQUE7QUFGWixFQXBETyxFQXdEUDtBQUNDcEIsUUFBTSxhQURQO0FBRUNoRSxhQUFXO0FBQUEsVUFBVyxLQUFLLHlEQUFRLHFDQUFDLHNFQUFELENBQVIsSUFBMENvRixPLDhDQUExQywyQ0FBaEI7QUFBQTtBQUZaLEVBeERPLEVBNERQO0FBQ0NwQixRQUFNLGVBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUsseURBQVEscUNBQUMsd0VBQUQsQ0FBUixJQUE0Q29GLE8sOENBQTVDLDJDQUFoQjtBQUFBO0FBRlosRUE1RE8sRUFnRVA7QUFDQ3BCLFFBQU0sa0JBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUsseURBQVEscUNBQUMsMkVBQUQsQ0FBUixJQUErQ29GLE8sOENBQS9DLDJDQUFoQjtBQUFBO0FBRlosRUFoRU8sRUFvRVA7QUFDQ3BCLFFBQU0sbUJBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUsseURBQVEscUNBQUMsNEVBQUQsQ0FBUixJQUFnRG9GLE8sOENBQWhELDJDQUFoQjtBQUFBO0FBRlosRUFwRU8sRUF3RVA7QUFDQ3BCLFFBQU0sZ0JBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUssd0RBQVEscUNBQUMseUVBQUQsQ0FBUixJQUE2Q29GLE8sOENBQTdDLDJDQUFoQjtBQUFBO0FBRlosRUF4RU8sRUE0RVA7QUFDQ3BCLFFBQU0sa0JBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUssd0RBQVEscUNBQUMsMkVBQUQsQ0FBUixJQUErQ29GLE8sOENBQS9DLDJDQUFoQjtBQUFBO0FBRlosRUE1RU8sRUFnRlA7QUFDQ3BCLFFBQU0sa0JBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUssd0RBQVEscUNBQUMsMkVBQUQsQ0FBUixJQUErQ29GLE8sOENBQS9DLDJDQUFoQjtBQUFBO0FBRlosRUFoRk8sRUFvRlA7QUFDQ3BCLFFBQU0sUUFEUDtBQUVDaEUsYUFBVztBQUFBLFVBQVcsS0FBSyx5REFBUSxxQ0FBQyx1RUFBRCxDQUFSLElBQTJDb0YsTyw4Q0FBM0MsMkNBQWhCO0FBQUE7QUFGWixFQXBGTyxFQXdGUDtBQUNDcEIsUUFBTSxTQURQO0FBRUNoRSxhQUFXO0FBQUEsVUFBVyxLQUFLLHlEQUFRLHFDQUFDLHdFQUFELENBQVIsSUFBNENvRixPLDhDQUE1QywyQ0FBaEI7QUFBQTtBQUZaLEVBeEZPLEVBNEZQO0FBQ0NwQixRQUFNLFlBRFA7QUFFQ2hFLGFBQVc7QUFBQSxVQUFXLEtBQUsseURBQVEscUNBQUMscUVBQUQsQ0FBUixJQUF5Q29GLE8sOENBQXpDLDJDQUFoQjtBQUFBO0FBRlosRUE1Rk8sRUFnR1A7QUFDQ3BCLFFBQU0sYUFEUDtBQUVDaEUsYUFBVztBQUFBLFVBQVcsS0FBSyx5REFBUSxxQ0FBQyxzRUFBRCxDQUFSLElBQTBDb0YsTyw4Q0FBMUMsMkNBQWhCO0FBQUE7QUFGWixFQWhHTyxFQW9HUDtBQUNDcEIsUUFBTSxnQkFEUDtBQUVDaEUsYUFBVztBQUFBLFVBQVcsS0FBSyx3REFBUSxxQ0FBQyx5RUFBRCxDQUFSLElBQTZDb0YsTyw4Q0FBN0MsMkNBQWhCO0FBQUE7QUFGWixFQXBHTyxFQXdHUDtBQUNDcEIsUUFBTSxrQkFEUDtBQUVDaEUsYUFBVztBQUFBLFVBQVcsS0FBSyx3REFBUSxxQ0FBQywyRUFBRCxDQUFSLElBQStDb0YsTyw4Q0FBL0MsMkNBQWhCO0FBQUE7QUFGWixFQXhHTztBQUZvQixDQUFkLENBQWYsRTs7Ozs7OztBQ0pBLHlDIiwiZmlsZSI6IlxcanNcXGFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8aGVhZGVyIGNsYXNzPVwibWR1aS1hcHBiYXIgbWR1aS1hcHBiYXItZml4ZWRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLXRvb2xiYXIgbWR1aS1jb2xvci10aGVtZVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1kdWktYnRuIG1kdWktYnRuLWljb24gbWR1aS1yaXBwbGUgbWR1aS1yaXBwbGUtd2hpdGVcIiBtZHVpLWRyYXdlcj1cInt0YXJnZXQ6ICcjbWFpbi1kcmF3ZXInLCBzd2lwZTogdHJ1ZX1cIj48aSBjbGFzcz1cIm1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPm1lbnU8L2k+PC9zcGFuPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgOnRvPVwie3BhdGg6Jy8nfVwiIGNsYXNzPVwibWR1aS10eXBvLWhlYWRsaW5lIG1kdWktaGlkZGVuLW1kLXVwXCI+RUJhbms8L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8cm91dGVyLWxpbmsgOnRvPVwie3BhdGg6Jy8nfVwiIGNsYXNzPVwibWR1aS10eXBvLXRpdGxlIG1kdWktaGlkZGVuLXNtLWRvd25cIj5FQmFuayDnlLXlrZDpk7booYw8L3JvdXRlci1saW5rPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS10b29sYmFyLXNwYWNlclwiPjwvZGl2PlxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cIm1kdWktc3Bpbm5lciBtZHVpLXNwaW5uZXItY29sb3JmdWwgbWR1aS1oaWRkZW4gYWpheF9sb2FkaW5nXCI+PC9kaXY+LS0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGVcIiBtZHVpLW1lbnU9XCJ7dGFyZ2V0OiAnLm1lbnVfdXNlcid9XCI+XG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L2k+e3t1c2VyLm5hbWUgfHwgJ+acqueZu+W9lSd9fVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDx1bCBjbGFzcz1cIm1kdWktbWVudSBtZHVpLW1lbnUtY2FzY2FkZSBtZW51X3VzZXJcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibWR1aS1yaXBwbGVcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPnBlcnNvbjwvaT57e3VzZXIucmVhbG5hbWUgfHwgJ+aXoOWnk+WQjSd9fVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwibWR1aS1tZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIm1kdWktcmlwcGxlXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5waG9uZV9pcGhvbmU8L2k+e3t1c2VyLm1vYmlsZSB8fCAn5peg5omL5py65Y+3J319XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibWR1aS1yaXBwbGVcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiPmVtYWlsPC9pPnt7dXNlci5lbWFpbCB8fCAn5peg6YKu566xJ319XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kaXZpZGVyXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGxpIGNsYXNzPVwibWR1aS1tZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cIm1kdWktcmlwcGxlXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5sYXN0X3BhZ2U8L2k+5pys5qyh55m75b2VXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibWR1aS1yaXBwbGVcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbS1pY29uXCI+PC9pPnt7dXNlci5sYXN0X2xvZ2luIHx8ICfml6Dljoblj7LnmbvlvZUnfX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpdmlkZXJcIj48L2Rpdj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZHVpLW1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwibWR1aS1yaXBwbGVcIiBAY2xpY2s9XCJwYXNzd29yZF9yZXNldF9kaWFsb2cub3BlbigpXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj52cG5fa2V5PC9pPuS/ruaUueWvhueggVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG5cIiB2LWlmPVwidXNlclwiIEBjbGljaz1cImxvZ291dFwiPlxuXHRcdFx0XHRcdOazqOmUgFxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1kcmF3ZXIgbWR1aS1jb2xvci13aGl0ZVwiIGlkPVwibWFpbi1kcmF3ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZC1tZWRpYVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3Nub3dfc3F1YXJlX3RpbnkucG5nXCIgc3R5bGU9XCJoZWlnaHQ6MTkwcHg7XCIgLz5cblx0XHRcdFx0XHQ8IS0tIOWNoeeJh+S4reWPr+S7peWMheWQq+S4gOS4quaIluWkmuS4quiPnOWNleaMiemSriAtLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLW1lbnVcIj5cblx0XHRcdFx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7cGF0aCA6ICcvbG9nb3V0J31cIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIm1kdWktYnRuIG1kdWktdGV4dC1jb2xvci1ncmV5XCIgdi1pZj1cInVzZXJcIiBAY2xpY2s9XCJsb2dvdXRcIj5Mb2dvdXQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvcm91dGVyLWxpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZC1tZWRpYS1jb3ZlcmVkIG1kdWktY2FyZC1tZWRpYS1jb3ZlcmVkLXRyYW5zcGFyZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLXByaW1hcnlcIj5cblx0XHRcdFx0XHRcdFx0PCEtLTxpbWcgY2xhc3M9XCJtZHVpLWltZy1jaXJjbGVcIiBzcmM9XCIuLi9pbWFnZXMvYXZhdGFyLnBuZ1wiIHN0eWxlPVwid2lkdGg6NDVweDtcIiAvPi0tPlxuXHRcdFx0XHRcdFx0XHQ8IS0tPGEgY2xhc3M9XCJtZHVpLWJ0biBtZHVpLWJ0bi1pY29uIG1kdWktcmlwcGxlXCI+PGkgY2xhc3M9XCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L2k+PC9hPi0tPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jYXJkLXByaW1hcnktdGl0bGUgbWR1aS10ZXh0LXVwcGVyY2FzZVwiPnt7dXNlci5uYW1lfX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY2FyZC1wcmltYXJ5LXN1YnRpdGxlXCI+e3t1c2VyLnJlYWxuYW1lfX08L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktbGlzdFwiIG1kdWktY29sbGFwc2U9XCJ7YWNjb3JkaW9uOiB0cnVlfVwiPlxuXHRcdFx0XHQ8ZGl2IHYtZm9yPVwiKHZhbCxrZXksaW5kZXgpIGluIG1lbnVcIiA6Y2xhc3M9XCJ7J21kdWktY29sbGFwc2UtaXRlbSc6dHJ1ZSwnbWR1aS1jb2xsYXBzZS1pdGVtLW9wZW4nOmluZGV4ID09IDAgPyB0cnVlIDpmYWxzZX1cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb2xsYXBzZS1pdGVtLWhlYWRlciBtZHVpLWxpc3QtaXRlbSBtZHVpLXJpcHBsZVwiPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWxpc3QtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29ucyBtZHVpLXRleHQtY29sb3ItZ3JleVwiPm1lbnU8L2k+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1saXN0LWl0ZW0tY29udGVudFwiIHYtdGV4dD1cImtleVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJtZHVpLWNvbGxhcHNlLWl0ZW0tYXJyb3cgbWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCI+a2V5Ym9hcmRfYXJyb3dfZG93bjwvaT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1jb2xsYXBzZS1pdGVtLWJvZHkgbWR1aS1saXN0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtZm9yPVwiKHZhbDIsa2V5MixpbmRleDIpIGluIHZhbFwiIEBjbGljaz1cIm1lbnVfYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHQ8cm91dGVyLWxpbmsgOnRvPVwie3BhdGg6dmFsMn1cIiBjbGFzcz1cIm1kdWktbGlzdC1pdGVtIG1kdWktcmlwcGxlXCI+e3trZXkyfX08L3JvdXRlci1saW5rPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PCEtLei/m+W6puadoe+8jOeUqOS6juWKoOi9veaPkOekui0tPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLXByb2dyZXNzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1wcm9ncmVzcy1pbmRldGVybWluYXRlIG1kdWktaGlkZGVuIGFqYXhfbG9hZGluZ1wiPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDwhLS08ZGl2IGNsYXNzPVwibWR1aS1jb250YWluZXJcIj4tLT5cblx0XHQ8ZGl2IGNsYXNzPVwibWR1aS1wLWEtM1wiPlxuXHRcdFx0PGRpdiBpZD1cImFwcFwiPlxuXHRcdFx0XHQ8cm91dGVyLXZpZXcgQGluaXQ9XCJpbml0XCIgQGluaXRDbGVhcj1cImluaXRDbGVhclwiPjwvcm91dGVyLXZpZXc+IDwhLS0g6Lev55Sx5byV5YWl55qE57uE5Lu25bCG5Zyo6L+Z6YeM6KKr5riy5p+TIC0tPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PCEtLeS/ruaUueWvhueggeW8ueeqly0tPlxuXHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZyBwYXNzd29yZF9yZXNldF9kaWFsb2dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy10aXRsZVwiPlxuXHRcdFx0XHTkv67mlLnnmbvlvZXlr4bnoIFcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktZGlhbG9nLWNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPueOsOeZu+W9leWvhueggTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9vbGRcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPuaWsOeZu+W9leWvhueggTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9uZXdcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1kdWktdGV4dGZpZWxkXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiPumHjeWkjeaWsOeZu+W9leWvhueggTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9uZXdfY29uZmlybWF0aW9uXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtZHVpLWRpYWxvZy1hY3Rpb25zXCI+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGVcIiBtZHVpLWRpYWxvZy1jbG9zZT7lj5bmtog8L2E+XG5cdFx0XHRcdDxhIGNsYXNzPVwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiIEBjbGljaz1cInBhc3N3b3JkX3Jlc2V0X3N1Ym1pdFwiPuaPkOS6pDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dXNlciA6ICcnLFxuXHRcdFx0XHRtZW51IDogJycsXG5cdFx0XHRcdGluaXRpbmcgOiBmYWxzZSxcblx0XHRcdFx0cGFzc3dvcmRfcmVzZXRfZGlhbG9nIDogJycsXG5cdFx0XHRcdHBhc3N3b3JkX3Jlc2V0IDoge1xuXHRcdFx0XHRcdHBhc3N3b3JkX29sZCA6ICcnLFxuXHRcdFx0XHRcdHBhc3N3b3JkX25ldyA6ICcnLFxuXHRcdFx0XHRcdHBhc3N3b3JkX25ld19jb25maXJtYXRpb24gOiAnJyxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kcyA6IHtcblx0XHRcdG1lbnVfYWN0aXZlKHQpe1xuXHRcdFx0XHQkKCcubWR1aS1saXN0LWl0ZW0tYWN0aXZlZCcpLnJlbW92ZUNsYXNzKCdtZHVpLWxpc3QtaXRlbS1hY3RpdmVkIG1kdWktY29sb3ItdGhlbWUnKTtcblx0XHRcdFx0JCh0LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdtZHVpLWxpc3QtaXRlbS1hY3RpdmVkIG1kdWktY29sb3ItdGhlbWUnKTtcblx0XHRcdH0sXG5cdFx0XHRwYXNzd29yZF9yZXNldF9zdWJtaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHRwb3N0KCcvcnVsZS9wYXNzd29yZF9yZXNldCcsdGhpcy5wYXNzd29yZF9yZXNldCxmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHR0LnBhc3N3b3JkX3Jlc2V0X2RpYWxvZy5jbG9zZSgpO1xuXHRcdFx0XHRcdG1kdWkuYWxlcnQoJ+W3suaIkOWKn+S/ruaUue+8jOS4i+asoeeZu+W9leivt+S9v+eUqOaWsOWvhueggScsJ+S/ruaUueeZu+W9leWvhueggeWujOaIkCcsZnVuY3Rpb24oKXt9LHtoaXN0b3J5OmZhbHNlfSlcblx0XHRcdFx0XHRmb3IobGV0IGkgaW4gdC5wYXNzd29yZF9yZXNldCl7XG5cdFx0XHRcdFx0XHR0LnBhc3N3b3JkX3Jlc2V0W2ldID0gJyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGluaXQoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHQvLyBpZighdC5pbml0aW5nKXtcblx0XHRcdFx0XHR0LmluaXRpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdGdldCgnL2luaXQnLHt9LGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdFx0dC51c2VyID0gZGF0YS51c2VyO1xuXHRcdFx0XHRcdFx0dC5tZW51ID0gZGF0YS5tZW51O1xuXHRcdFx0XHRcdFx0dC5pbml0aW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH0sXG5cdFx0XHRpbml0Q2xlYXIoKXtcblx0XHRcdFx0bGV0IHQgPSB0aGlzO1xuXHRcdFx0XHR0Lm1lbnUgPSAnJztcblx0XHRcdFx0dC51c2VyID0gJyc7XG5cdFx0XHR9LFxuXHRcdFx0bG9nb3V0KCl7XG5cdFx0XHRcdGxldCB0ID0gdGhpcztcblx0XHRcdFx0dGlwcygn5Y2z5bCG6Lez6L2s5Yiw55m75b2V6aG1Jyk7XG5cdFx0XHRcdGdldCgnL2xvZ291dCcse30sZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0dC4kcm91dGVyLnB1c2goe3BhdGg6Jy9sb2dpbid9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCl7XG5cdFx0XHRsZXQgdCA9IHRoaXM7XG5cdFx0XHR0LnBhc3N3b3JkX3Jlc2V0X2RpYWxvZyA9IG5ldyBtZHVpLkRpYWxvZygnLnBhc3N3b3JkX3Jlc2V0X2RpYWxvZycse2hpc3Rvcnk6ZmFsc2V9KTtcblx0XHRcdHQuaW5pdCgpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlIiwiPHRlbXBsYXRlIHR5cGU9XCJ0ZXh0L3RlbXBsYXRlXCIgaWQ9XCJ0ZW1wbGF0ZV9wYWdpbmF0aW9uXCI+XG5cdDxzZWN0aW9uIGNsYXNzPVwicGFnZXMtd3JhcFwiIHYtc2hvdz1cInBhZ2VJbmZvLnRvdGFsPnBhZ2VJbmZvLnBhZ2VudW1cIj5cblx0XHQ8dWwgY2xhc3M9XCJwYWdpbmF0aW9uIGNsZWFyZml4XCI+XG5cdFx0XHQ8bGkgOmNsYXNzPVwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gMX1cIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrPVwiY2xpY2tDdXJyZW50KDEpXCI+IOmmlumhtSA8L2E+PC9saT5cblx0XHRcdDxsaSA6Y2xhc3M9XCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSAxfVwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBAY2xpY2s9XCJjbGlja0N1cnJlbnQocGFnZUluZm8uY3VycmVudCAtIDEpXCI+IOS4iuS4gOmhtSA8L2E+PC9saT5cblx0XHRcdDxsaSB2LWZvcj1cInAgaW4gc2V0TGlzdFwiIDpjbGFzcz1cInsnYWN0aXZlJzogcGFnZUluZm8uY3VycmVudCA9PSBwLnZhbH1cIiA+XG5cdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB2LWlmPVwicGFnZUluZm8uY3VycmVudCA9PSBwLnZhbFwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6cGFnZUluZm8uc2tpbiAsIGJvcmRlckNvbG9yOnBhZ2VJbmZvLnNraW59XCIgQGNsaWNrPVwiY2xpY2tDdXJyZW50KHAudmFsKVwiPiB7eyBwLnRleHQgfX0gPC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgdi1lbHNlICBAY2xpY2s9XCJjbGlja0N1cnJlbnQocC52YWwpXCI+IHt7IHAudGV4dCB9fSA8L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdFx0PGxpIDpjbGFzcz1cInsnZGlzYWJsZWQnOiBwYWdlSW5mby5jdXJyZW50ID09IHBhZ2VJbmZvLnBhZ2V9XCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIEBjbGljaz1cImNsaWNrQ3VycmVudChwYWdlSW5mby5jdXJyZW50ICsgMSlcIj4g5LiL5LiA6aG1PC9hPjwvbGk+XG5cdFx0XHQ8bGkgOmNsYXNzPVwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gcGFnZUluZm8ucGFnZX1cIj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgQGNsaWNrPVwiY2xpY2tDdXJyZW50KHBhZ2VJbmZvLnBhZ2UpXCI+IOWwvumhtSA8L2E+PC9saT5cblx0XHQ8L3VsPlxuXHQ8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0Ly8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczpbJ3BhZ2VJbmZvJ10sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHBhZ2U6ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLmNlaWwodGhpcy5wYWdlSW5mby50b3RhbCAvIHRoaXMucGFnZUluZm8ucGFnZW51bSk7XG5cdFx0XHR9LFxuXHRcdFx0c2V0TGlzdDpmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgbGVuID0gdGhpcy5wYWdlICwgdGVtcCA9IFtdLCBsaXN0ID0gW10sIGNvdW50ID0gTWF0aC5mbG9vcih0aGlzLnBhZ2VJbmZvLnBhZ2Vncm91cCAvIDIpICxjZW50ZXIgPSB0aGlzLnBhZ2VJbmZvLmN1cnJlbnQ7XG5cdFx0XHRcdGlmKCBsZW4gPD0gdGhpcy5wYWdlSW5mby5wYWdlZ3JvdXAgKXtcblx0XHRcdFx0XHR3aGlsZShsZW4tLSl7IHRlbXAucHVzaCh7dGV4dDp0aGlzLnBhZ2UtbGVuLHZhbDp0aGlzLnBhZ2UtbGVufSk7fTtcblx0XHRcdFx0XHRyZXR1cm4gdGVtcDtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aGlsZShsZW4tLSl7IHRlbXAucHVzaCh0aGlzLnBhZ2UgLSBsZW4pO307XG5cdFx0XHRcdHZhciBpZHggPSB0ZW1wLmluZGV4T2YoY2VudGVyKTtcblx0XHRcdFx0KGlkeCA8IGNvdW50KSAmJiAoIGNlbnRlciA9IGNlbnRlciArIGNvdW50IC0gaWR4KTtcblx0XHRcdFx0KHRoaXMucGFnZUluZm8uY3VycmVudCA+IHRoaXMucGFnZSAtIGNvdW50KSAmJiAoIGNlbnRlciA9IHRoaXMucGFnZSAtIGNvdW50KTtcblx0XHRcdFx0dGVtcCA9IHRlbXAuc3BsaWNlKGNlbnRlciAtIGNvdW50IC0xLCB0aGlzLnBhZ2VJbmZvLnBhZ2Vncm91cCk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR2YXIgdCA9IHRlbXAuc2hpZnQoKTtcblx0XHRcdFx0XHRsaXN0LnB1c2goe1xuXHRcdFx0XHRcdFx0dGV4dDogdCxcblx0XHRcdFx0XHRcdHZhbDogdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9d2hpbGUodGVtcC5sZW5ndGgpO1xuXHRcdFx0XHRpZiggdGhpcy5wYWdlID4gdGhpcy5wYWdlSW5mby5wYWdlZ3JvdXAgKXtcblx0XHRcdFx0XHQodGhpcy5wYWdlSW5mby5jdXJyZW50ID4gY291bnQgKyAxKSAmJiBsaXN0LnVuc2hpZnQoeyB0ZXh0OicuLi4nLHZhbDogbGlzdFswXS52YWwgLSAxIH0pO1xuXHRcdFx0XHRcdCh0aGlzLnBhZ2VJbmZvLmN1cnJlbnQgPCB0aGlzLnBhZ2UgLSBjb3VudCkgJiYgbGlzdC5wdXNoKHsgdGV4dDonLi4uJyx2YWw6IGxpc3RbbGlzdC5sZW5ndGggLSAxXS52YWwgKyAxIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZDpmdW5jdGlvbiAoYXJndW1lbnQpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucGFnZUluZm8pXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRjbGlja0N1cnJlbnQ6IGZ1bmN0aW9uKGlkeCkge1xuXHRcdFx0XHRpZiggdGhpcy5wYWdlSW5mby5jdXJyZW50ICE9IGlkeCAmJiBpZHggPiAwICYmIGlkeCA8IHRoaXMucGFnZSArIDEpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvLmN1cnJlbnQgPSBpZHg7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJyx0aGlzLnBhZ2VJbmZvLmN1cnJlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG5cdC5wYWdlcy13cmFwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LnBhZ2luYXRpb24ge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0bWFyZ2luOiAyMHB4IDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR9XG5cdC5wYWdpbmF0aW9uPmxpIHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdH1cblx0LnBhZ2luYXRpb24+LmFjdGl2ZT5hLCAucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpob3ZlciB7XG5cdFx0ei1pbmRleDogMztcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcblx0XHRib3JkZXItY29sb3I6ICMzMzdhYjc7XG5cdH1cblx0LnBhZ2luYXRpb24+LmRpc2FibGVkPmEsIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hOmhvdmVyLCAucGFnaW5hdGlvbj4uZGlzYWJsZWQ+c3BhbiwgLnBhZ2luYXRpb24+LmRpc2FibGVkPnNwYW46aG92ZXIge1xuXHRcdGNvbG9yOiAjNzc3O1xuXHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXItY29sb3I6ICNkZGQ7XG5cdH1cblx0LnBhZ2luYXRpb24+bGk+YTpob3ZlciwucGFnaW5hdGlvbj5saT5zcGFuOmhvdmVyIHtcblx0XHR6LWluZGV4OiAyO1xuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0XHRib3JkZXItY29sb3I6ICNkZGQ7XG5cdH1cblx0LnBhZ2luYXRpb24+bGk+YSwgLnBhZ2luYXRpb24+bGk+c3BhbiB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdHBhZGRpbmc6IDZweCAxMnB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAtMXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuXHRcdGNvbG9yOiAjMDAwO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cdH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucGFnZXMtd3JhcFtkYXRhLXYtMWY0ODhkOWVdIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wYWdpbmF0aW9uW2RhdGEtdi0xZjQ4OGQ5ZV0ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwYWRkaW5nLWxlZnQ6IDA7XFxuXFx0bWFyZ2luOiAyMHB4IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ucGFnaW5hdGlvbj5saVtkYXRhLXYtMWY0ODhkOWVdIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5wYWdpbmF0aW9uPi5hY3RpdmU+YVtkYXRhLXYtMWY0ODhkOWVdLCAucGFnaW5hdGlvbj4uYWN0aXZlPmFbZGF0YS12LTFmNDg4ZDllXTpob3ZlciwgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuW2RhdGEtdi0xZjQ4OGQ5ZV0sICAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW5bZGF0YS12LTFmNDg4ZDllXTpob3ZlciB7XFxuXFx0ei1pbmRleDogMztcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcXG5cXHRib3JkZXItY29sb3I6ICMzMzdhYjc7XFxufVxcbi5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hW2RhdGEtdi0xZjQ4OGQ5ZV0sIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hW2RhdGEtdi0xZjQ4OGQ5ZV06aG92ZXIsIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuW2RhdGEtdi0xZjQ4OGQ5ZV0sIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuW2RhdGEtdi0xZjQ4OGQ5ZV06aG92ZXIge1xcblxcdGNvbG9yOiAjNzc3O1xcblxcdGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXItY29sb3I6ICNkZGQ7XFxufVxcbi5wYWdpbmF0aW9uPmxpPmFbZGF0YS12LTFmNDg4ZDllXTpob3ZlciwucGFnaW5hdGlvbj5saT5zcGFuW2RhdGEtdi0xZjQ4OGQ5ZV06aG92ZXIge1xcblxcdHotaW5kZXg6IDI7XFxuXFx0Y29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcblxcdGJvcmRlci1jb2xvcjogI2RkZDtcXG59XFxuLnBhZ2luYXRpb24+bGk+YVtkYXRhLXYtMWY0ODhkOWVdLCAucGFnaW5hdGlvbj5saT5zcGFuW2RhdGEtdi0xZjQ4OGQ5ZV0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRwYWRkaW5nOiA2cHggMTJweDtcXG5cXHRtYXJnaW4tbGVmdDogLTFweDtcXG5cXHRsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRTovd3d3L2xhcmF2ZWwtZWJhbmsvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNkRBO0NBQ0EsbUJBQUE7Q0FDQTtBQUNBO0NBQ0Esc0JBQUE7Q0FDQSxnQkFBQTtDQUNBLGVBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBQ0E7Q0FDQSxnQkFBQTtDQUNBO0FBQ0E7Q0FDQSxXQUFBO0NBQ0EsWUFBQTtDQUNBLGdCQUFBO0NBQ0EsMEJBQUE7Q0FDQSxzQkFBQTtDQUNBO0FBQ0E7Q0FDQSxZQUFBO0NBQ0Esb0JBQUE7Q0FDQSx1QkFBQTtDQUNBLG1CQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQSx1QkFBQTtDQUNBLHVCQUFBO0NBQ0EsbUJBQUE7Q0FDQTtBQUNBO0NBQ0EsbUJBQUE7Q0FDQSxZQUFBO0NBQ0Esa0JBQUE7Q0FDQSxrQkFBQTtDQUNBLHdCQUFBO0NBQ0EsWUFBQTtDQUNBLHNCQUFBO0NBQ0EsdUJBQUE7Q0FDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJwYWdpbmF0aW9uLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGUgdHlwZT1cXFwidGV4dC90ZW1wbGF0ZVxcXCIgaWQ9XFxcInRlbXBsYXRlX3BhZ2luYXRpb25cXFwiPlxcblxcdDxzZWN0aW9uIGNsYXNzPVxcXCJwYWdlcy13cmFwXFxcIiB2LXNob3c9XFxcInBhZ2VJbmZvLnRvdGFsPnBhZ2VJbmZvLnBhZ2VudW1cXFwiPlxcblxcdFxcdDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbiBjbGVhcmZpeFxcXCI+XFxuXFx0XFx0XFx0PGxpIDpjbGFzcz1cXFwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gMX1cXFwiPjxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgQGNsaWNrPVxcXCJjbGlja0N1cnJlbnQoMSlcXFwiPiDpppbpobUgPC9hPjwvbGk+XFxuXFx0XFx0XFx0PGxpIDpjbGFzcz1cXFwieydkaXNhYmxlZCc6IHBhZ2VJbmZvLmN1cnJlbnQgPT0gMX1cXFwiPjxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgQGNsaWNrPVxcXCJjbGlja0N1cnJlbnQocGFnZUluZm8uY3VycmVudCAtIDEpXFxcIj4g5LiK5LiA6aG1IDwvYT48L2xpPlxcblxcdFxcdFxcdDxsaSB2LWZvcj1cXFwicCBpbiBzZXRMaXN0XFxcIiA6Y2xhc3M9XFxcInsnYWN0aXZlJzogcGFnZUluZm8uY3VycmVudCA9PSBwLnZhbH1cXFwiID5cXG5cXHRcXHRcXHRcXHQ8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIHYtaWY9XFxcInBhZ2VJbmZvLmN1cnJlbnQgPT0gcC52YWxcXFwiIDpzdHlsZT1cXFwie2JhY2tncm91bmRDb2xvcjpwYWdlSW5mby5za2luICwgYm9yZGVyQ29sb3I6cGFnZUluZm8uc2tpbn1cXFwiIEBjbGljaz1cXFwiY2xpY2tDdXJyZW50KHAudmFsKVxcXCI+IHt7IHAudGV4dCB9fSA8L2E+XFxuXFx0XFx0XFx0XFx0PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiB2LWVsc2UgIEBjbGljaz1cXFwiY2xpY2tDdXJyZW50KHAudmFsKVxcXCI+IHt7IHAudGV4dCB9fSA8L2E+XFxuXFx0XFx0XFx0PC9saT5cXG5cXHRcXHRcXHQ8bGkgOmNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSBwYWdlSW5mby5wYWdlfVxcXCI+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBAY2xpY2s9XFxcImNsaWNrQ3VycmVudChwYWdlSW5mby5jdXJyZW50ICsgMSlcXFwiPiDkuIvkuIDpobU8L2E+PC9saT5cXG5cXHRcXHRcXHQ8bGkgOmNsYXNzPVxcXCJ7J2Rpc2FibGVkJzogcGFnZUluZm8uY3VycmVudCA9PSBwYWdlSW5mby5wYWdlfVxcXCI+PGEgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIiBAY2xpY2s9XFxcImNsaWNrQ3VycmVudChwYWdlSW5mby5wYWdlKVxcXCI+IOWwvumhtSA8L2E+PC9saT5cXG5cXHRcXHQ8L3VsPlxcblxcdDwvc2VjdGlvbj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuXFx0Ly8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcblxcdFxcdHByb3BzOlsncGFnZUluZm8nXSxcXG5cXHRcXHRjb21wdXRlZDoge1xcblxcdFxcdFxcdHBhZ2U6ZnVuY3Rpb24oKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuIE1hdGguY2VpbCh0aGlzLnBhZ2VJbmZvLnRvdGFsIC8gdGhpcy5wYWdlSW5mby5wYWdlbnVtKTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdHNldExpc3Q6ZnVuY3Rpb24oKXtcXG5cXHRcXHRcXHRcXHR2YXIgbGVuID0gdGhpcy5wYWdlICwgdGVtcCA9IFtdLCBsaXN0ID0gW10sIGNvdW50ID0gTWF0aC5mbG9vcih0aGlzLnBhZ2VJbmZvLnBhZ2Vncm91cCAvIDIpICxjZW50ZXIgPSB0aGlzLnBhZ2VJbmZvLmN1cnJlbnQ7XFxuXFx0XFx0XFx0XFx0aWYoIGxlbiA8PSB0aGlzLnBhZ2VJbmZvLnBhZ2Vncm91cCApe1xcblxcdFxcdFxcdFxcdFxcdHdoaWxlKGxlbi0tKXsgdGVtcC5wdXNoKHt0ZXh0OnRoaXMucGFnZS1sZW4sdmFsOnRoaXMucGFnZS1sZW59KTt9O1xcblxcdFxcdFxcdFxcdFxcdHJldHVybiB0ZW1wO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR3aGlsZShsZW4tLSl7IHRlbXAucHVzaCh0aGlzLnBhZ2UgLSBsZW4pO307XFxuXFx0XFx0XFx0XFx0dmFyIGlkeCA9IHRlbXAuaW5kZXhPZihjZW50ZXIpO1xcblxcdFxcdFxcdFxcdChpZHggPCBjb3VudCkgJiYgKCBjZW50ZXIgPSBjZW50ZXIgKyBjb3VudCAtIGlkeCk7XFxuXFx0XFx0XFx0XFx0KHRoaXMucGFnZUluZm8uY3VycmVudCA+IHRoaXMucGFnZSAtIGNvdW50KSAmJiAoIGNlbnRlciA9IHRoaXMucGFnZSAtIGNvdW50KTtcXG5cXHRcXHRcXHRcXHR0ZW1wID0gdGVtcC5zcGxpY2UoY2VudGVyIC0gY291bnQgLTEsIHRoaXMucGFnZUluZm8ucGFnZWdyb3VwKTtcXG5cXHRcXHRcXHRcXHRkbyB7XFxuXFx0XFx0XFx0XFx0XFx0dmFyIHQgPSB0ZW1wLnNoaWZ0KCk7XFxuXFx0XFx0XFx0XFx0XFx0bGlzdC5wdXNoKHtcXG5cXHRcXHRcXHRcXHRcXHRcXHR0ZXh0OiB0LFxcblxcdFxcdFxcdFxcdFxcdFxcdHZhbDogdFxcblxcdFxcdFxcdFxcdFxcdH0pO1xcblxcdFxcdFxcdFxcdH13aGlsZSh0ZW1wLmxlbmd0aCk7XFxuXFx0XFx0XFx0XFx0aWYoIHRoaXMucGFnZSA+IHRoaXMucGFnZUluZm8ucGFnZWdyb3VwICl7XFxuXFx0XFx0XFx0XFx0XFx0KHRoaXMucGFnZUluZm8uY3VycmVudCA+IGNvdW50ICsgMSkgJiYgbGlzdC51bnNoaWZ0KHsgdGV4dDonLi4uJyx2YWw6IGxpc3RbMF0udmFsIC0gMSB9KTtcXG5cXHRcXHRcXHRcXHRcXHQodGhpcy5wYWdlSW5mby5jdXJyZW50IDwgdGhpcy5wYWdlIC0gY291bnQpICYmIGxpc3QucHVzaCh7IHRleHQ6Jy4uLicsdmFsOiBsaXN0W2xpc3QubGVuZ3RoIC0gMV0udmFsICsgMSB9KTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0cmV0dXJuIGxpc3Q7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Y3JlYXRlZDpmdW5jdGlvbiAoYXJndW1lbnQpIHtcXG5cXHRcXHRcXHQvLyBjb25zb2xlLmxvZyh0aGlzLnBhZ2VJbmZvKVxcblxcdFxcdH0sXFxuXFx0XFx0bWV0aG9kczoge1xcblxcdFxcdFxcdGNsaWNrQ3VycmVudDogZnVuY3Rpb24oaWR4KSB7XFxuXFx0XFx0XFx0XFx0aWYoIHRoaXMucGFnZUluZm8uY3VycmVudCAhPSBpZHggJiYgaWR4ID4gMCAmJiBpZHggPCB0aGlzLnBhZ2UgKyAxKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5wYWdlSW5mby5jdXJyZW50ID0gaWR4O1xcblxcdFxcdFxcdFxcdFxcdHRoaXMuJGVtaXQoJ2NoYW5nZScsdGhpcy5wYWdlSW5mby5jdXJyZW50KTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG5cXHQucGFnZXMtd3JhcCB7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQucGFnaW5hdGlvbiB7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdHBhZGRpbmctbGVmdDogMDtcXG5cXHRcXHRtYXJnaW46IDIwcHggMDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0fVxcblxcdC5wYWdpbmF0aW9uPmxpIHtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmU7XFxuXFx0fVxcblxcdC5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sICAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xcblxcdFxcdHotaW5kZXg6IDM7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjMzM3YWI3O1xcblxcdH1cXG5cXHQucGFnaW5hdGlvbj4uZGlzYWJsZWQ+YSwgLnBhZ2luYXRpb24+LmRpc2FibGVkPmE6aG92ZXIsIC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuLCAucGFnaW5hdGlvbj4uZGlzYWJsZWQ+c3Bhbjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICM3Nzc7XFxuXFx0XFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdFxcdGJvcmRlci1jb2xvcjogI2RkZDtcXG5cXHR9XFxuXFx0LnBhZ2luYXRpb24+bGk+YTpob3ZlciwucGFnaW5hdGlvbj5saT5zcGFuOmhvdmVyIHtcXG5cXHRcXHR6LWluZGV4OiAyO1xcblxcdFxcdGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNkZGQ7XFxuXFx0fVxcblxcdC5wYWdpbmF0aW9uPmxpPmEsIC5wYWdpbmF0aW9uPmxpPnNwYW4ge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHRwYWRkaW5nOiA2cHggMTJweDtcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTFweDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcXG5cXHRcXHRjb2xvcjogIzAwMDtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcblxcdH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZjQ4OGQ5ZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFmNDg4ZDllXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgIHZhbHVlOiBfdm0ucGFnZUluZm8udG90YWwgPiBfdm0ucGFnZUluZm8ucGFnZW51bSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInBhZ2VJbmZvLnRvdGFsPnBhZ2VJbmZvLnBhZ2VudW1cIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZXMtd3JhcFwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24gY2xlYXJmaXhcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsaVwiLCB7IGNsYXNzOiB7IGRpc2FibGVkOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSAxIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jbGlja0N1cnJlbnQoMSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCIg6aaW6aG1IFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBjbGFzczogeyBkaXNhYmxlZDogX3ZtLnBhZ2VJbmZvLmN1cnJlbnQgPT0gMSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KF92bS5wYWdlSW5mby5jdXJyZW50IC0gMSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCIg5LiK5LiA6aG1IFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uc2V0TGlzdCwgZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSBwLnZhbCB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0ucGFnZUluZm8uY3VycmVudCA9PSBwLnZhbFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5wYWdlSW5mby5za2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogX3ZtLnBhZ2VJbmZvLnNraW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsaWNrQ3VycmVudChwLnZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBcIiArIF92bS5fcyhwLnRleHQpICsgXCIgXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KHAudmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHAudGV4dCkgKyBcIiBcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7IGNsYXNzOiB7IGRpc2FibGVkOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSBfdm0ucGFnZUluZm8ucGFnZSB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KF92bS5wYWdlSW5mby5jdXJyZW50ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiDkuIvkuIDpobVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7IGNsYXNzOiB7IGRpc2FibGVkOiBfdm0ucGFnZUluZm8uY3VycmVudCA9PSBfdm0ucGFnZUluZm8ucGFnZSB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xpY2tDdXJyZW50KF92bS5wYWdlSW5mby5wYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiIOWwvumhtSBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWY0ODhkOWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFmNDg4ZDllXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMWY0ODhkOWVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJoZWFkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWFwcGJhciBtZHVpLWFwcGJhci1maXhlZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdG9vbGJhciBtZHVpLWNvbG9yLXRoZW1lXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXR5cG8taGVhZGxpbmUgbWR1aS1oaWRkZW4tbWQtdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgcGF0aDogXCIvXCIgfSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkVCYW5rXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10eXBvLXRpdGxlIG1kdWktaGlkZGVuLXNtLWRvd25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgcGF0aDogXCIvXCIgfSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkVCYW5rIOeUteWtkOmTtuihjFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRvb2xiYXItc3BhY2VyXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWJ0biBtZHVpLXJpcHBsZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBcIm1kdWktbWVudVwiOiBcInt0YXJnZXQ6ICcubWVudV91c2VyJ31cIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwicGVyc29uXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUgfHwgXCLmnKrnmbvlvZVcIikgKyBcIlxcblxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51IG1kdWktbWVudS1jYXNjYWRlIG1lbnVfdXNlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJpcHBsZVwiLCBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwicGVyc29uXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIucmVhbG5hbWUgfHwgXCLml6Dlp5PlkI1cIikgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktbWVudS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcmlwcGxlXCIsIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJwaG9uZV9pcGhvbmVcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5tb2JpbGUgfHwgXCLml6DmiYvmnLrlj7dcIikgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktbWVudS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcmlwcGxlXCIsIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLW1lbnUtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJlbWFpbFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmVtYWlsIHx8IFwi5peg6YKu566xXCIpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaXZpZGVyXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZHVpLXJpcHBsZVwiLCBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbS1pY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlci5sYXN0X2xvZ2luIHx8IFwi5peg5Y6G5Y+y55m75b2VXCIpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkX3Jlc2V0X2RpYWxvZy5vcGVuKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1kdWktbWVudS1pdGVtLWljb24gbWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInZwbl9rZXlcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5L+u5pS55a+G56CBXFxuXFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnVzZXJcbiAgICAgICAgICAgID8gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1idG5cIiwgb246IHsgY2xpY2s6IF92bS5sb2dvdXQgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx05rOo6ZSAXFxuXFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1kcmF3ZXIgbWR1aS1jb2xvci13aGl0ZVwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJtYWluLWRyYXdlclwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkLW1lZGlhXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTkwcHhcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuLi9pbWFnZXMvc25vd19zcXVhcmVfdGlueS5wbmdcIikgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jYXJkLW1lbnVcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IHBhdGg6IFwiL2xvZ291dFwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0udXNlclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS10ZXh0LWNvbG9yLWdyZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dvdXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMb2dvdXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJtZHVpLWNhcmQtbWVkaWEtY292ZXJlZCBtZHVpLWNhcmQtbWVkaWEtY292ZXJlZC10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1wcmltYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLWNhcmQtcHJpbWFyeS10aXRsZSBtZHVpLXRleHQtdXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY2FyZC1wcmltYXJ5LXN1YnRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnJlYWxuYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktbGlzdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJtZHVpLWNvbGxhcHNlXCI6IFwie2FjY29yZGlvbjogdHJ1ZX1cIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm1lbnUsIGZ1bmN0aW9uKHZhbCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcIm1kdWktY29sbGFwc2UtaXRlbS1vcGVuXCI6IGluZGV4ID09IDAgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtLWhlYWRlciBtZHVpLWxpc3QtaXRlbSBtZHVpLXJpcHBsZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImlcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZHVpLWxpc3QtaXRlbS1pY29uIG1kdWktaWNvbiBtYXRlcmlhbC1pY29ucyBtZHVpLXRleHQtY29sb3ItZ3JleVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwibWVudVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktbGlzdC1pdGVtLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGtleSkgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJpXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWR1aS1jb2xsYXBzZS1pdGVtLWFycm93IG1kdWktaWNvbiBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwia2V5Ym9hcmRfYXJyb3dfZG93blwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29sbGFwc2UtaXRlbS1ib2R5IG1kdWktbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2wodmFsLCBmdW5jdGlvbih2YWwyLCBrZXkyLCBpbmRleDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBvbjogeyBjbGljazogX3ZtLm1lbnVfYWN0aXZlIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1saXN0LWl0ZW0gbWR1aS1yaXBwbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBwYXRoOiB2YWwyIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhrZXkyKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcC1hLTNcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInJvdXRlci12aWV3XCIsIHtcbiAgICAgICAgICAgIG9uOiB7IGluaXQ6IF92bS5pbml0LCBpbml0Q2xlYXI6IF92bS5pbml0Q2xlYXIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1kaWFsb2cgcGFzc3dvcmRfcmVzZXRfZGlhbG9nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWRpYWxvZy10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx05L+u5pS555m75b2V5a+G56CBXFxuXFx0XFx0XCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi546w55m75b2V5a+G56CBXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZF9yZXNldC5wYXNzd29yZF9vbGQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX29sZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZHVpLXRleHRmaWVsZC1pbnB1dFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZF9yZXNldC5wYXNzd29yZF9vbGQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkX3Jlc2V0LFxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkX29sZFwiLFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuaWsOeZu+W9leWvhueggVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZF9yZXNldC5wYXNzd29yZF9uZXdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3IH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZF9yZXNldCxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZF9uZXdcIixcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktdGV4dGZpZWxkLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLph43lpI3mlrDnmbvlvZXlr4bnoIFcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX25ld19jb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkX3Jlc2V0LnBhc3N3b3JkX25ld19jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS10ZXh0ZmllbGQtaW5wdXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmRfcmVzZXQucGFzc3dvcmRfbmV3X2NvbmZpcm1hdGlvbiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmRfcmVzZXQsXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRfbmV3X2NvbmZpcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktZGlhbG9nLWFjdGlvbnNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktYnRuIG1kdWktcmlwcGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcIm1kdWktZGlhbG9nLWNsb3NlXCI6IFwiXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1yaXBwbGUgbWR1aS1jb2xvci10aGVtZVwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wYXNzd29yZF9yZXNldF9zdWJtaXQgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaPkOS6pFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcInNwYW5cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWR1aS1idG4gbWR1aS1idG4taWNvbiBtZHVpLXJpcHBsZSBtZHVpLXJpcHBsZS13aGl0ZVwiLFxuICAgICAgICBhdHRyczogeyBcIm1kdWktZHJhd2VyXCI6IFwie3RhcmdldDogJyNtYWluLWRyYXdlcicsIHN3aXBlOiB0cnVlfVwiIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1pY29uIG1hdGVyaWFsLWljb25zXCIgfSwgW192bS5fdihcIm1lbnVcIildKV1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtZHVpLW1lbnUtaXRlbVwiIH0sIFtcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcmlwcGxlXCIsIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWR1aS1tZW51LWl0ZW0taWNvbiBtZHVpLWljb24gbWF0ZXJpYWwtaWNvbnNcIiB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJsYXN0X3BhZ2VcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIuacrOasoeeZu+W9lVxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1kdWktcHJvZ3Jlc3NcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1kdWktcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZSBtZHVpLWhpZGRlbiBhamF4X2xvYWRpbmdcIlxuICAgICAgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02ZGQxMTI1Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmRkMTEyNWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNmRkMTEyNWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZjQ4OGQ5ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2luYXRpb24udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiNzQwM2FkZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWY0ODhkOWVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdpbmF0aW9uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZjQ4OGQ5ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2luYXRpb24udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFmNDg4ZDllXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZjQ4OGQ5ZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL3Nub3dfc3F1YXJlX3RpbnkucG5nPzZjZDU5YjRmYzk0ZWRmODAxNWQ1M2E4YWMyMmU0ODM4XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9zbm93X3NxdWFyZV90aW55LnBuZ1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9zbm93X3NxdWFyZV90aW55LnBuZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmRkMTEyNWNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHAudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcQXBwLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZGQxMTI1Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZkZDExMjVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiLCJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuaW1wb3J0IFZ1ZURhdGVwaWNrZXJMb2NhbCBmcm9tICd2dWUtZGF0ZXBpY2tlci1sb2NhbCdcblxuLy8gVnVlLmNvbXBvbmVudCgnZXhhbXBsZS1jb21wb25lbnQnLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvRXhhbXBsZUNvbXBvbmVudC52dWUnKSk7XG5WdWUuY29tcG9uZW50KCdwYWdpbmF0aW9uJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlJykpO1xuVnVlLmNvbXBvbmVudCgndnVlLWRhdGVwaWNrZXItbG9jYWwnLFZ1ZURhdGVwaWNrZXJMb2NhbCk7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9jb25maWcvcm91dGVyLmpzJ1xud2luZG93LnJvdXRlciA9IHJvdXRlcjtcbmltcG9ydCAnLi9jb25maWcvZnVuY3Rpb24uanMnXG5cblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcblx0cm91dGVyLFxuXHRyZW5kZXI6IGggPT4gaChBcHApXG59KTtcblxuLy8g5Y2V54us5a6e5L6L5YyW5LiA5Liq6I+c5Y2VVlVF77yM55So5LqO6Lev55Sx6ZO+5o6lXG4vLyBjb25zdCBtZW51ID0gbmV3IFZ1ZSh7XG4vLyBcdGVsOiAnI21haW4tZHJhd2VyJyxcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJcbi8vIHdpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG53aW5kb3cubWR1aSA9cmVxdWlyZSgnbWR1aScpO1xud2luZG93LiQgPSBtZHVpLkpRO1xuLy8gcmVxdWlyZSgnbWR1aS9kaXN0L2Nzcy9tZHVpLm1pbi5jc3MnKTtcblxud2luZG93Lm1kNSA9IHJlcXVpcmUoJ21kNScpO1xuXG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vLyB0cnkge1xuLy8gICAgIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy9cbi8vICAgICByZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xuLy8gfSBjYXRjaCAoZSkge31cblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIE5leHQgd2Ugd2lsbCByZWdpc3RlciB0aGUgQ1NSRiBUb2tlbiBhcyBhIGNvbW1vbiBoZWFkZXIgd2l0aCBBeGlvcyBzbyB0aGF0XG4gKiBhbGwgb3V0Z29pbmcgSFRUUCByZXF1ZXN0cyBhdXRvbWF0aWNhbGx5IGhhdmUgaXQgYXR0YWNoZWQuIFRoaXMgaXMganVzdFxuICogYSBzaW1wbGUgY29udmVuaWVuY2Ugc28gd2UgZG9uJ3QgaGF2ZSB0byBhdHRhY2ggZXZlcnkgdG9rZW4gbWFudWFsbHkuXG4gKi9cblxuLy8gbGV0IHRva2VuID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJyk7XG4vL1xuLy8gaWYgKHRva2VuKSB7XG4vLyAgICAgd2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9IHRva2VuLmNvbnRlbnQ7XG4vLyB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0NTUkYgdG9rZW4gbm90IGZvdW5kOiBodHRwczovL2xhcmF2ZWwuY29tL2RvY3MvY3NyZiNjc3JmLXgtY3NyZi10b2tlbicpO1xuLy8gfVxuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJ1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6ICd5b3VyLXB1c2hlci1rZXknXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZjQ4OGQ5ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2luYXRpb24udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZjQ4OGQ5ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnaW5hdGlvbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTFmNDg4ZDllXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxwYWdpbmF0aW9uLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZjQ4OGQ5ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFmNDg4ZDllXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiLCJcbi8qKlxuICog5bGP5bmV5LiL5pa55paH5a2X5o+Q56S6XG4gKiBAcGFyYW0gbXNnXG4gKi9cbmxldCB0aXBzID0gZnVuY3Rpb24obXNnKXtcblx0bWR1aS5zbmFja2Jhcih7XG5cdFx0bWVzc2FnZSA6IG1zZyxcblx0XHRwb3NpdGlvbjoncmlnaHQtdG9wJyxcblx0XHR0aW1lb3V0IDogMzAwMCxcblx0XHRidXR0b25UZXh0IDogJ0Nsb3NlJyxcblx0fSk7XG59O1xud2luZG93LnRpcHMgPSB0aXBzO1xuXG4vKipcbiAqIOWKoOi9veeql1xuICogQHBhcmFtIGNsb3NlXG4gKi9cbmxldCBsb2FkaW5nID0gZnVuY3Rpb24oY2xvc2Upe1xuXHRpZihjbG9zZSl7XG5cdFx0JCgnLmFqYXhfbG9hZGluZycpLmFkZENsYXNzKCdtZHVpLWhpZGRlbicpO1xuXHR9ZWxzZXtcblx0XHQkKCcuYWpheF9sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ21kdWktaGlkZGVuJyk7XG5cdH1cbn07XG53aW5kb3cubG9hZGluZyA9IGxvYWRpbmc7XG5cbi8qKlxuICog5o6n5Yi25Y+w5pel5b+XXG4gKiBAcGFyYW0gdmFyaWFibGVcbiAqL1xubGV0IGxvZ3MgPSBmdW5jdGlvbih2YXJpYWJsZSl7XG5cdGNvbnNvbGUuaW5mbyh0eXBlb2YgdmFyaWFibGUpO1xuXHRjb25zb2xlLmxvZyh2YXJpYWJsZSk7XG59O1xud2luZG93LmxvZ3MgPSBsb2dzO1xuXG5sZXQgRGF0ZVBpY2tlckZvcm1hdCA9IGZ1bmN0aW9uKHRpbWUpe1xuXHR0cnl7XG5cdFx0Y29uc3QgeWVhciA9IHRpbWUuZ2V0RnVsbFllYXIoKTtcblx0XHRjb25zdCBtb250aCA9IHRpbWUuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBkYXkgPSB0aW1lLmdldERhdGUoKTtcblx0XHRjb25zdCBob3VyczI0ID0gdGltZS5nZXRIb3VycygpO1xuXHRcdGNvbnN0IGhvdXJzID0gaG91cnMyNCAlIDEyID09PSAwID8gMTIgOiBob3VyczI0ICUgMTI7XG5cdFx0Y29uc3QgbWludXRlcyA9IHRpbWUuZ2V0TWludXRlcygpO1xuXHRcdGNvbnN0IHNlY29uZHMgPSB0aW1lLmdldFNlY29uZHMoKTtcblx0XHRjb25zdCBtaWxsaXNlY29uZHMgPSB0aW1lLmdldE1pbGxpc2Vjb25kcygpO1xuXHRcdGNvbnN0IGRkID0gdCA9PiAoJzAnICsgdCkuc2xpY2UoLTIpO1xuXHRcdHJldHVybiB5ZWFyKyctJytkZChtb250aCArIDEpKyctJytkZChkYXkpO1xuXHR9Y2F0Y2goZSkge1xuXHRcdHJldHVybiB0aW1lO1xuXHR9XG59O1xud2luZG93LkRhdGVQaWNrZXJGb3JtYXQgPSBEYXRlUGlja2VyRm9ybWF0O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmxldCBhamF4ID0gZnVuY3Rpb24odXJsLHBvc3RfZGF0YSxzdWNjZXNzLGVycm9yLG1ldGhvZCl7XG5cdGlmKCFlcnJvcil7XG5cdFx0ZXJyb3IgPSBmdW5jdGlvbigpe1xuXHRcdFxuXHRcdH07XG5cdH1cblx0aWYoIXN1Y2Nlc3Mpe1xuXHRcdHN1Y2Nlc3MgPSBmdW5jdGlvbihtc2cpe1xuXHRcdFxuXHRcdH07XG5cdH1cblx0bGV0IGVycm9ycyA9IGZ1bmN0aW9uKG1zZyl7XG5cdFx0dGlwcyhtc2cpO1xuXHR9O1xuXHQvLyBhamF4IOivt+axguWwgeijhVxuXHRsb2FkaW5nKCk7XG5cdGF4aW9zKHtcblx0XHR1cmwgOiBBUFBfVVJMKycvYWRtaW4nK3VybCxcblx0XHRtZXRob2QgOiBtZXRob2QsXG5cdFx0ZGF0YSA6IHBvc3RfZGF0YSxcblx0fSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0bG9hZGluZyh0cnVlKTtcblx0XHRsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0aWYoJzEnID09IGRhdGEuc3RhdHVzKXtcblx0XHRcdHN1Y2Nlc3MoZGF0YS5kYXRhLGRhdGEubWVzc2FnZSk7XG5cdFx0fWVsc2UgaWYoJzAnID09IGRhdGEuc3RhdHVzKXtcblx0XHRcdHRpcHMoZGF0YS5tZXNzYWdlKTtcblx0XHR9ZWxzZSBpZignMicgPT0gZGF0YS5zdGF0dXMpe1xuXHRcdFx0Ly8gdGlwcyhkYXRhLm1lc3NhZ2UpO1xuXHRcdFx0cm91dGVyLnB1c2goe3BhdGg6Jy9sb2dpbid9KTtcblx0XHR9ZWxzZXtcblx0XHRcdHRpcHMoJ+Wksei0pe+8jOacquato+W4uOaOpeaUtiBqc29uIOWAvCcpO1xuXHRcdH1cblx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyb3JfcmVzcG9uc2Upe1xuXHRcdGxvZ3MoZXJyb3JfcmVzcG9uc2UpO1xuXHRcdC8vIOi/lOWbnumdniBqc29u77yMNDA0LzUwMCDnrYlcblx0XHRsZXQgc3RhdHVzID0gZXJyb3JfcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzLG1lc3NhZ2UgPSAnJztcblx0XHRsb2FkaW5nKHRydWUpO1xuXHRcdC8vIDQyMiDmmK/lj4LmlbDpqozor4HlpLHotKXov5Tlm57nirbmgIFcblx0XHRpZihzdGF0dXMgPT09IDQyMil7XG5cdFx0XHRtZXNzYWdlID0gT2JqZWN0LnZhbHVlcyhlcnJvcl9yZXNwb25zZS5yZXNwb25zZS5kYXRhLmVycm9ycylbMF1bMF07XG5cdFx0fWVsc2V7XG5cdFx0XHRtZXNzYWdlID0gZXJyb3JfcmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuXHRcdH1cblx0XHRlcnJvcnMoJ+acjeWKoeWZqOmUmeivr++8jOeKtuaAgeegge+8micrZXJyb3JfcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzKyc8YnIvPuWPguiAg+S/oeaBr++8micrbWVzc2FnZSsnPGJyLz5leGNlcHRpb246JytlcnJvcl9yZXNwb25zZS5yZXNwb25zZS5kYXRhLmV4Y2VwdGlvbik7XG5cdFx0ZXJyb3IobWVzc2FnZSxlcnJvcl9yZXNwb25zZS5yZXNwb25zZS5kYXRhLmRhdGEpO1xuXHR9KVxufTtcblxuLyoqXG4gKiBhamF4IOivt+axglxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIHBvc3RfZGF0YVxuICogQHBhcmFtIHN1Y2Nlc3NcbiAqIEBwYXJhbSBlcnJvclxuICovXG5sZXQgcG9zdCA9IGZ1bmN0aW9uKHVybCxwb3N0X2RhdGEsc3VjY2VzcyxlcnJvcil7XG5cdGFqYXgodXJsLHBvc3RfZGF0YSxzdWNjZXNzLGVycm9yLCdwb3N0Jyk7XG59O1xud2luZG93LnBvc3QgPSBwb3N0O1xuXG4vKipcbiAqIGFqYXggZ2V06K+35rGCXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gZ2V0X3BhcmFtXG4gKiBAcGFyYW0gc3VjY2Vzc1xuICogQHBhcmFtIGVycm9yXG4gKi9cbmxldCBnZXQgPSBmdW5jdGlvbih1cmwsZ2V0X3BhcmFtLHN1Y2Nlc3MsZXJyb3Ipe1xuXHQvLyBsZXQgdXJsX3BhcmFtID0gW107XG5cdC8vIG1kdWkuSlEuZWFjaChnZXRfcGFyYW0sZnVuY3Rpb24oayx2KXtcblx0Ly8gXHR1cmxfcGFyYW0ucHVzaChrKyc9Jyt2KTtcblx0Ly8gfSk7XG5cdGlmKGdldF9wYXJhbS5kYXRlICYmIGdldF9wYXJhbS5kYXRlLmxlbmd0aCA+IDApe1xuXHRcdGZvcihsZXQgaSBpbiBnZXRfcGFyYW0uZGF0ZSl7XG5cdFx0XHRnZXRfcGFyYW0uZGF0ZVtpXSA9IERhdGVQaWNrZXJGb3JtYXQoZ2V0X3BhcmFtLmRhdGVbaV0pO1xuXHRcdH1cblx0fVxuXHRsZXQgdXJsX3BhcmFtID0gJC5wYXJhbShnZXRfcGFyYW0pO1xuXHRhamF4KHVybCsnPycrdXJsX3BhcmFtLGdldF9wYXJhbSxzdWNjZXNzLGVycm9yLCdnZXQnKTtcbn07XG53aW5kb3cuZ2V0ID0gZ2V0O1xuXG4vKipcbiAqIGFqYXggZGVsZXRlIOivt+axglxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIGdldF9wYXJhbVxuICogQHBhcmFtIHN1Y2Nlc3NcbiAqIEBwYXJhbSBlcnJvclxuICovXG5sZXQgZGVsID0gZnVuY3Rpb24odXJsLGdldF9wYXJhbSxzdWNjZXNzLGVycm9yKXtcblx0YWpheCh1cmwsZ2V0X3BhcmFtLHN1Y2Nlc3MsZXJyb3IsJ2RlbGV0ZScpO1xufTtcbndpbmRvdy5kZWwgPSBkZWw7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29uZmlnL2Z1bmN0aW9uLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcblZ1ZS51c2UoVnVlUm91dGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZVJvdXRlcih7XG5cdHNhdmVTY3JvbGxQb3NpdGlvbjogdHJ1ZSxcblx0cm91dGVzOiBbXG5cdFx0e1xuXHRcdFx0cGF0aDogJy8nLFxuXHRcdFx0cmVkaXJlY3QgOiAnL3dlbGNvbWUnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2xvZ2luJyxcblx0XHRcdHBhdGg6ICcvbG9naW4nLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvbG9naW4udnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3dlbGNvbWUnLFxuXHRcdFx0cGF0aDogJy93ZWxjb21lJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2luZGV4L3dlbGNvbWUudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3VzZXJfdHJhbnNmZXInLFxuXHRcdFx0cGF0aDogJy91c2VyX3RyYW5zZmVyJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2luZGV4L3VzZXJfdHJhbnNmZXIudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9zeXNpbmZvJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2luZGV4L3N5c2luZm8udnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9tZXJjaGFudCcsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9tZXJjaGFudC9pbmRleC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHQvLyB7XG5cdFx0Ly8gXHRwYXRoOiAnL21lcmNoYW50L2FwaScsXG5cdFx0Ly8gXHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9tZXJjaGFudC9pbmRleC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0Ly8gfSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3RyYW5zZmVyJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3RyYW5zZmVyL2luZGV4LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvdHJhbnNmZXIvcmVhc29uJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3RyYW5zZmVyL3JlYXNvbi52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3JlcG9ydC9yZWFzb24nLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvcmVwb3J0L3JlYXNvbi52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3JlcG9ydC9wdXJzZScsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9yZXBvcnQvcHVyc2UudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9wdXJzZS9jZW50cmFsJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL2NlbnRyYWwudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9wdXJzZS9zeXN0ZW0nLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvcHVyc2Uvc3lzdGVtLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvcHVyc2UvdXNlcicsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9wdXJzZS91c2VyLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvcHVyc2UvZnJlZXplJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL2ZyZWV6ZS52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3B1cnNlL3VzZXJfdHlwZScsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9wdXJzZS91c2VyX3R5cGUudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9wdXJzZS9wdXJzZV90eXBlJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3B1cnNlL3B1cnNlX3R5cGUudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy93aXRoZHJhdy9iYW5rJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3dpdGhkcmF3L2JhbmsudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy93aXRoZHJhdy9hbGlwYXknLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvd2l0aGRyYXcvYWxpcGF5LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvd2l0aGRyYXcvd2VjaGF0Jyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3dpdGhkcmF3L3dlY2hhdC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL29yZGVyJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL29yZGVyL2luZGV4LnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdGg6ICcvZXhwb3J0Jyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL2V4cG9ydC9pbmRleC52dWUnXSwgcmVzb2x2ZSkpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAnL3J1bGUvdXNlcicsXG5cdFx0XHRjb21wb25lbnQ6IHJlc29sdmUgPT4gdm9pZChyZXF1aXJlKFsnLi4vY29tcG9uZW50cy9ydWxlL3VzZXIudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9ydWxlL2dyb3VwJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3J1bGUvZ3JvdXAudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9zeXN0ZW0vY29uZmlnJyxcblx0XHRcdGNvbXBvbmVudDogcmVzb2x2ZSA9PiB2b2lkKHJlcXVpcmUoWycuLi9jb21wb25lbnRzL3N5c3RlbS9jb25maWcudnVlJ10sIHJlc29sdmUpKVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJy9zeXN0ZW0vYmVoYXZpb3InLFxuXHRcdFx0Y29tcG9uZW50OiByZXNvbHZlID0+IHZvaWQocmVxdWlyZShbJy4uL2NvbXBvbmVudHMvc3lzdGVtL2JlaGF2aW9yLnZ1ZSddLCByZXNvbHZlKSlcblx0XHR9XG5cdF1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb25maWcvcm91dGVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAyNSJdLCJzb3VyY2VSb290IjoiIn0=