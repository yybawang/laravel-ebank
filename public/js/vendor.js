webpackJsonp([24],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(12);
var isBuffer = __webpack_require__(10);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(46)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(26);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(14);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(14);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(41).setImmediate))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * mdui v0.4.1 (https://mdui.org)
 * Copyright 2016-2018 zdhxiong
 * Licensed under MIT
 */
/* jshint ignore:start */
;(function(global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.mdui = factory());
}(this, (function() {
  'use strict';

  /* jshint ignore:end */
  var mdui = {};

  /**
   * =============================================================================
   * ************   浏览器兼容性问题修复   ************
   * =============================================================================
   */

  /**
   * requestAnimationFrame
   * cancelAnimationFrame
   */
  (function () {
    var lastTime = 0;

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = window.webkitRequestAnimationFrame;
      window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));

        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);

        lastTime = currTime + timeToCall;
        return id;
      };
    }

    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }
  })();


  /**
   * =============================================================================
   * ************   JavaScript 工具库，语法和 jQuery 类似   ************
   * =============================================================================
   */
  /* jshint ignore:start */
  var $ = (function (window, document, undefined) {
    'use strict';
  /* jshint ignore:end */


    var emptyArray = [];
    var slice = emptyArray.slice;
    var concat = emptyArray.concat;
    var isArray = Array.isArray;

    var documentElement = document.documentElement;

    /**
     * 是否是类数组的数据
     * @param obj
     * @returns {boolean}
     */
    function isArrayLike(obj) {
      return typeof obj.length === 'number';
    }

    /**
     * 循环数组或对象
     * @param obj
     * @param callback
     * @returns {*}
     */
    function each(obj, callback) {
      var i;
      var prop;

      if (isArrayLike(obj)) {
        for (i = 0; i < obj.length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            return obj;
          }
        }
      } else {
        for (prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            if (callback.call(obj[prop], prop, obj[prop]) === false) {
              return obj;
            }
          }
        }
      }

      return obj;
    }

    function map(elems, callback) {
      var value;
      var ret = [];

      each(elems, function (i, elem) {
        value = callback(elem, i);
        if (value !== null && value !== undefined) {
          ret.push(value);
        }
      });

      return concat.apply([], ret);
    }

    /**
     * 把对象合并到第一个参数中，并返回第一个参数
     * @param first
     * @param second
     * @returns {*}
     */
    function merge(first, second) {
      each(second, function (i, val) {
        first.push(val);
      });

      return first;
    }

    /**
     * 返回去重后的数组
     * @param arr
     * @returns {Array}
     */
    function unique(arr) {
      var unique = [];
      for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
          unique.push(arr[i]);
        }
      }

      return unique;
    }

    /**
     * 是否是 null
     * @param obj
     * @returns {boolean}
     */
    function isNull(obj) {
      return obj === null;
    }

    /**
     * 判断一个节点名
     * @param ele
     * @param name
     * @returns {boolean}
     */
    function nodeName(ele, name) {
      return ele.nodeName && ele.nodeName.toLowerCase() === name.toLowerCase();
    }

    function isFunction(fn) {
      return typeof fn === 'function';
    }

    function isString(obj) {
      return typeof obj === 'string';
    }

    function isObject(obj) {
      return typeof obj === 'object';
    }

    /**
     * 除去 null 后的 object 类型
     * @param obj
     * @returns {*|boolean}
     */
    function isObjectLike(obj) {
      return isObject(obj) && !isNull(obj);
    }

    function isWindow(win) {
      return win && win === win.window;
    }

    function isDocument(doc) {
      return doc && doc.nodeType === doc.DOCUMENT_NODE;
    }

    var elementDisplay = {};

    /**
     * 获取元素的默认 display 样式值，用于 .show() 方法
     * @param nodeName
     * @returns {*}
     */
    function defaultDisplay(nodeName) {
      var element;
      var display;

      if (!elementDisplay[nodeName]) {
        element = document.createElement(nodeName);
        document.body.appendChild(element);
        display = getComputedStyle(element, '').getPropertyValue('display');
        element.parentNode.removeChild(element);
        if (display === 'none') {
          display = 'block';
        }

        elementDisplay[nodeName] = display;
      }

      return elementDisplay[nodeName];
    }


    var JQ = function (arr) {
      var _this = this;

      for (var i = 0; i < arr.length; i++) {
        _this[i] = arr[i];
      }

      _this.length = arr.length;

      return this;
    };

    /**
     * @param selector {String|Function|Node|Window|NodeList|Array|JQ=}
     * @returns {JQ}
     */
    var $ = function (selector) {
      var arr = [];
      var i = 0;

      if (!selector) {
        return new JQ(arr);
      }

      if (selector instanceof JQ) {
        return selector;
      }

      if (isString(selector)) {
        var els;
        var tempParent;
        selector = selector.trim();

        // 创建 HTML 字符串
        if (selector[0] === '<' && selector[selector.length - 1] === '>') {
          // HTML
          var toCreate = 'div';
          if (selector.indexOf('<li') === 0) {
            toCreate = 'ul';
          }

          if (selector.indexOf('<tr') === 0) {
            toCreate = 'tbody';
          }

          if (selector.indexOf('<td') === 0 || selector.indexOf('<th') === 0) {
            toCreate = 'tr';
          }

          if (selector.indexOf('<tbody') === 0) {
            toCreate = 'table';
          }

          if (selector.indexOf('<option') === 0) {
            toCreate = 'select';
          }

          tempParent = document.createElement(toCreate);
          tempParent.innerHTML = selector;
          for (i = 0; i < tempParent.childNodes.length; i++) {
            arr.push(tempParent.childNodes[i]);
          }
        }

        // 选择器
        else {

          // id 选择器
          if (selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            els = [document.getElementById(selector.slice(1))];
          }

          // 其他选择器
          else {
            els = document.querySelectorAll(selector);
          }

          for (i = 0; i < els.length; i++) {
            if (els[i]) {
              arr.push(els[i]);
            }
          }
        }
      }

      // function
      else if (isFunction(selector)) {
        return $(document).ready(selector);
      }

      // Node
      else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      }

      // NodeList
      else if (selector.length > 0 && selector[0].nodeType) {
        for (i = 0; i < selector.length; i++) {
          arr.push(selector[i]);
        }
      }

      return new JQ(arr);
    };

    $.fn = JQ.prototype;

    /**
     * 扩展函数和原型属性
     * @param obj
     */
    $.extend = $.fn.extend = function (obj) {
      if (obj === undefined) {
        return this;
      }

      var length = arguments.length;
      var prop;
      var i;
      var options;

      // $.extend(obj)
      if (length === 1) {
        for (prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            this[prop] = obj[prop];
          }
        }

        return this;
      }

      // $.extend({}, defaults[, obj])
      for (i = 1; i < length; i++) {
        options = arguments[i];
        for (prop in options) {
          if (options.hasOwnProperty(prop)) {
            obj[prop] = options[prop];
          }
        }
      }

      return obj;
    };

    $.extend({

      /**
       * 遍历对象
       * @param obj {String|Array|Object}
       * @param callback {Function}
       * @returns {Array|Object}
       */
      each: each,

      /**
       * 合并两个数组，返回的结果会修改第一个数组的内容
       * @param first {Array}
       * @param second {Array}
       * @returns {Array}
       */
      merge: merge,

      /**
       * 删除数组中重复元素
       * @param arr {Array}
       * @returns {Array}
       */
      unique: unique,

      /**
       * 通过遍历集合中的节点对象，通过函数返回一个新的数组，null 或 undefined 将被过滤掉。
       * @param elems
       * @param callback
       * @returns {Array}
       */
      map: map,

      /**
       * 一个 DOM 节点是否包含另一个 DOM 节点
       * @param parent {Node} 父节点
       * @param node {Node} 子节点
       * @returns {Boolean}
       */
      contains: function (parent, node) {
        if (parent && !node) {
          return documentElement.contains(parent);
        }

        return parent !== node && parent.contains(node);
      },

      /**
       * 将数组或对象序列化
       * @param obj
       * @returns {String}
       */
      param: function (obj) {
        if (!isObjectLike(obj)) {
          return '';
        }

        var args = [];
        each(obj, function (key, value) {
          destructure(key, value);
        });

        return args.join('&');

        function destructure(key, value) {
          var keyTmp;

          if (isObjectLike(value)) {
            each(value, function (i, v) {
              if (isArray(value) && !isObjectLike(v)) {
                keyTmp = '';
              } else {
                keyTmp = i;
              }

              destructure(key + '[' + keyTmp + ']', v);
            });
          } else {
            if (!isNull(value) && value !== '') {
              keyTmp = '=' + encodeURIComponent(value);
            } else {
              keyTmp = '';
            }

            args.push(encodeURIComponent(key) + keyTmp);
          }
        }
      },
    });

    $.fn.extend({

      /**
       * 遍历对象
       * @param callback {Function}
       * @return {JQ}
       */
      each: function (callback) {
        return each(this, callback);
      },

      /**
       * 通过遍历集合中的节点对象，通过函数返回一个新的对象，null 或 undefined 将被过滤掉。
       * @param callback {Function}
       * @returns {JQ}
       */
      map: function (callback) {
        return new JQ(map(this, function (el, i) {
          return callback.call(el, i, el);
        }));
      },

      /**
       * 获取指定 DOM 元素，没有 index 参数时，获取所有 DOM 的数组
       * @param index {Number=}
       * @returns {Node|Array}
       */
      get: function (index) {
        return index === undefined ?
          slice.call(this) :
          this[index >= 0 ? index : index + this.length];
      },

      /**
       * array中提取的方法。从start开始，如果end 指出。提取不包含end位置的元素。
       * @param argument {start, end}
       * @returns {JQ}
       */
      slice: function (argument) {
        return new JQ(slice.apply(this, arguments));
      },

      /**
       * 筛选元素集合
       * @param selector {String|JQ|Node|Function}
       * @returns {JQ}
       */
      filter: function (selector) {
        if (isFunction(selector)) {
          return this.map(function (index, ele) {
            return selector.call(ele, index, ele) ? ele : undefined;
          });
        } else {
          var $selector = $(selector);
          return this.map(function (index, ele) {
            return $selector.index(ele) > -1 ? ele : undefined;
          });
        }
      },

      /**
       * 从元素集合中删除指定的元素
       * @param selector {String|Node|JQ|Function}
       * @return {JQ}
       */
      not: function (selector) {
        var $excludes = this.filter(selector);
        return this.map(function (index, ele) {
          return $excludes.index(ele) > -1 ? undefined : ele;
        });
      },

      /**
       * 获取元素相对于 document 的偏移
       * @returns {Object}
       */
      offset: function () {
        if (this[0]) {
          var offset = this[0].getBoundingClientRect();
          return {
            left: offset.left + window.pageXOffset,
            top: offset.top + window.pageYOffset,
            width: offset.width,
            height: offset.height,
          };
        }

        return null;
      },

      /**
       * 返回最近的用于定位的父元素
       * @returns {*|JQ}
       */
      offsetParent: function () {
        return this.map(function () {
          var offsetParent = this.offsetParent;

          while (offsetParent && $(offsetParent).css('position') === 'static') {
            offsetParent = offsetParent.offsetParent;
          }

          return offsetParent || documentElement;
        });
      },

      /**
       * 获取元素相对于父元素的偏移
       * @return {Object}
       */
      position: function () {
        var _this = this;

        if (!_this[0]) {
          return null;
        }

        var offsetParent;
        var offset;
        var parentOffset = {
          top: 0,
          left: 0,
        };

        if (_this.css('position') === 'fixed') {
          offset = _this[0].getBoundingClientRect();
        } else {
          offsetParent = _this.offsetParent();
          offset = _this.offset();
          if (!nodeName(offsetParent[0], 'html')) {
            parentOffset = offsetParent.offset();
          }

          parentOffset = {
            top: parentOffset.top + offsetParent.css('borderTopWidth'),
            left: parentOffset.left + offsetParent.css('borderLeftWidth'),
          };
        }

        return {
          top: offset.top - parentOffset.top - _this.css('marginTop'),
          left: offset.left - parentOffset.left - _this.css('marginLeft'),
          width: offset.width,
          height: offset.height,
        };
      },

      /**
       * 显示指定元素
       * @returns {JQ}
       */
      show: function () {
        return this.each(function () {
          if (this.style.display === 'none') {
            this.style.display = '';
          }

          if (window.getComputedStyle(this, '').getPropertyValue('display') === 'none') {
            this.style.display = defaultDisplay(this.nodeName);
          }
        });
      },

      /**
       * 隐藏指定元素
       * @returns {JQ}
       */
      hide: function () {
        return this.each(function () {
          this.style.display = 'none';
        });
      },

      /**
       * 切换元素的显示状态
       * @returns {JQ}
       */
      toggle: function () {
        return this.each(function () {
          this.style.display = this.style.display === 'none' ? '' : 'none';
        });
      },

      /**
       * 是否含有指定的 CSS 类
       * @param className {String}
       * @returns {boolean}
       */
      hasClass: function (className) {
        if (!this[0] || !className) {
          return false;
        }

        return this[0].classList.contains(className);
      },

      /**
       * 移除指定属性
       * @param attr {String}
       * @returns {JQ}
       */
      removeAttr: function (attr) {
        return this.each(function () {
          this.removeAttribute(attr);
        });
      },

      /**
       * 删除属性值
       * @param name {String}
       * @returns {JQ}
       */
      removeProp: function (name) {
        return this.each(function () {
          try {
            delete this[name];
          } catch (e) {}
        });
      },

      /**
       * 获取当前对象中第n个元素
       * @param index {Number}
       * @returns {JQ}
       */
      eq: function (index) {
        var ret = index === -1 ? this.slice(index) : this.slice(index, +index + 1);
        return new JQ(ret);
      },

      /**
       * 获取对象中第一个元素
       * @returns {JQ}
       */
      first: function () {
        return this.eq(0);
      },

      /**
       * 获取对象中最后一个元素
       * @returns {JQ}
       */
      last: function () {
        return this.eq(-1);
      },

      /**
       * 获取一个元素的位置。
       * 当 ele 参数没有给出时，返回当前元素在兄弟节点中的位置。
       * 有给出了 ele 参数时，返回 ele 元素在当前对象中的位置
       * @param ele {Selector|Node=}
       * @returns {Number}
       */
      index: function (ele) {
        if (!ele) {
          // 获取当前 JQ 对象的第一个元素在同辈元素中的位置
          return this.eq(0).parent().children().get().indexOf(this[0]);
        } else if (isString(ele)) {
          // 返回当前 JQ 对象的第一个元素在指定选择器对应的元素中的位置
          return $(ele).eq(0).parent().children().get().indexOf(this[0]);
        } else {
          // 返回指定元素在当前 JQ 对象中的位置
          return this.get().indexOf(ele);
        }
      },

      /**
       * 根据选择器、DOM元素或 JQ 对象来检测匹配元素集合，
       * 如果其中至少有一个元素符合这个给定的表达式就返回true
       * @param selector {String|Node|NodeList|Array|JQ|Window}
       * @returns boolean
       */
      is: function (selector) {
        var _this = this[0];

        if (!_this || selector === undefined || selector === null) {
          return false;
        }

        var $compareWith;
        var i;
        if (isString(selector)) {
          if (_this === document || _this === window) {
            return false;
          }

          var matchesSelector =
            _this.matches ||
            _this.matchesSelector ||
            _this.webkitMatchesSelector ||
            _this.mozMatchesSelector ||
            _this.oMatchesSelector ||
            _this.msMatchesSelector;

          return matchesSelector.call(_this, selector);
        } else if (selector === document || selector === window) {
          return _this === selector;
        } else {
          if (selector.nodeType || isArrayLike(selector)) {
            $compareWith = selector.nodeType ? [selector] : selector;
            for (i = 0; i < $compareWith.length; i++) {
              if ($compareWith[i] === _this) {
                return true;
              }
            }

            return false;
          }

          return false;
        }
      },

      /**
       * 根据 CSS 选择器找到后代节点的集合
       * @param selector {String}
       * @returns {JQ}
       */
      find: function (selector) {
        var foundElements = [];

        this.each(function (i, _this) {
          merge(foundElements, _this.querySelectorAll(selector));
        });

        return new JQ(foundElements);
      },

      /**
       * 找到直接子元素的元素集合
       * @param selector {String=}
       * @returns {JQ}
       */
      children: function (selector) {
        var children = [];
        this.each(function (i, _this) {
          each(_this.childNodes, function (i, childNode) {
            if (childNode.nodeType !== 1) {
              return true;
            }

            if (!selector || (selector && $(childNode).is(selector))) {
              children.push(childNode);
            }
          });
        });

        return new JQ(unique(children));
      },

      /**
       * 保留含有指定子元素的元素，去掉不含有指定子元素的元素
       * @param selector {String|Node|JQ|NodeList|Array}
       * @return {JQ}
       */
      has: function (selector) {
        var $targets = isString(selector) ? this.find(selector) : $(selector);
        var len = $targets.length;
        return this.filter(function () {
          for (var i = 0; i < len; i++) {
            if ($.contains(this, $targets[i])) {
              return true;
            }
          }
        });
      },

      /**
       * 取得同辈元素的集合
       * @param selector {String=}
       * @returns {JQ}
       */
      siblings: function (selector) {
        return this.prevAll(selector).add(this.nextAll(selector));
      },

      /**
       * 返回首先匹配到的父节点，包含父节点
       * @param selector {String}
       * @returns {JQ}
       */
      closest: function (selector) {
        var _this = this;

        if (!_this.is(selector)) {
          _this = _this.parents(selector).eq(0);
        }

        return _this;
      },

      /**
       * 删除所有匹配的元素
       * @returns {JQ}
       */
      remove: function () {
        return this.each(function (i, _this) {
          if (_this.parentNode) {
            _this.parentNode.removeChild(_this);
          }
        });
      },

      /**
       * 添加匹配的元素到当前对象中
       * @param selector {String|JQ}
       * @returns {JQ}
       */
      add: function (selector) {
        return new JQ(unique(merge(this.get(), $(selector))));
      },

      /**
       * 删除子节点
       * @returns {JQ}
       */
      empty: function () {
        return this.each(function () {
          this.innerHTML = '';
        });
      },

      /**
       * 通过深度克隆来复制集合中的所有元素。
       * (通过原生 cloneNode 方法深度克隆来复制集合中的所有元素。此方法不会有数据和事件处理程序复制到新的元素。这点和jquery中利用一个参数来确定是否复制数据和事件处理不相同。)
       * @returns {JQ}
       */
      clone: function () {
        return this.map(function () {
          return this.cloneNode(true);
        });
      },

      /**
       * 用新元素替换当前元素
       * @param newContent {String|Node|NodeList|JQ}
       * @returns {JQ}
       */
      replaceWith: function (newContent) {
        return this.before(newContent).remove();
      },

      /**
       * 将表单元素的值组合成键值对数组
       * @returns {Array}
       */
      serializeArray: function () {
        var result = [];
        var $ele;
        var type;
        var ele = this[0];

        if (!ele || !ele.elements) {
          return result;
        }

        $(slice.call(ele.elements)).each(function () {
          $ele = $(this);
          type = $ele.attr('type');
          if (
            this.nodeName.toLowerCase() !== 'fieldset' &&
            !this.disabled &&
            ['submit', 'reset', 'button'].indexOf(type) === -1 &&
            (['radio', 'checkbox'].indexOf(type) === -1 || this.checked)
          ) {
            result.push({
              name: $ele.attr('name'),
              value: $ele.val(),
            });
          }
        });

        return result;
      },

      /**
       * 将表单元素或对象序列化
       * @returns {String}
       */
      serialize: function () {
        var result = [];
        each(this.serializeArray(), function (i, elm) {
          result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
        });

        return result.join('&');
      },
    });

    /**
     * val - 获取或设置元素的值
     * @param value {String=}
     * @return {*|JQ}
     */
    /**
     * html - 获取或设置元素的 HTML
     * @param value {String=}
     * @return {*|JQ}
     */
    /**
     * text - 获取或设置元素的内容
     * @param value {String=}
     * @return {*|JQ}
     */
    each(['val', 'html', 'text'], function (nameIndex, name) {
      var props = {
        0: 'value',
        1: 'innerHTML',
        2: 'textContent',
      };

      var defaults = {
        0: undefined,
        1: undefined,
        2: null,
      };

      $.fn[name] = function (value) {
        if (value === undefined) {
          // 获取值
          return this[0] ? this[0][props[nameIndex]] : defaults[nameIndex];
        } else {
          // 设置值
          return this.each(function (i, ele) {
            ele[props[nameIndex]] = value;
          });
        }
      };
    });

    /**
     * attr - 获取或设置元素的属性值
     * @param {name|props|key,value=}
     * @return {String|JQ}
     */
    /**
     * prop - 获取或设置元素的属性值
     * @param {name|props|key,value=}
     * @return {String|JQ}
     */
    /**
     * css - 获取或设置元素的样式
     * @param {name|props|key,value=}
     * @return {String|JQ}
     */
    each(['attr', 'prop', 'css'], function (nameIndex, name) {
      var set = function (ele, key, value) {
        if (nameIndex === 0) {
          ele.setAttribute(key, value);
        } else if (nameIndex === 1) {
          ele[key] = value;
        } else {
          ele.style[key] = value;
        }
      };

      var get = function (ele, key) {
        if (!ele) {
          return undefined;
        }

        var value;
        if (nameIndex === 0) {
          value = ele.getAttribute(key);
        } else if (nameIndex === 1) {
          value = ele[key];
        } else {
          value = window.getComputedStyle(ele, null).getPropertyValue(key);
        }

        return value;
      };

      $.fn[name] = function (key, value) {
        var argLength = arguments.length;

        if (argLength === 1 && isString(key)) {
          // 获取值
          return get(this[0], key);
        } else {
          // 设置值
          return this.each(function (i, ele) {
            if (argLength === 2) {
              set(ele, key, value);
            } else {
              each(key, function (k, v) {
                set(ele, k, v);
              });
            }
          });
        }
      };
    });

    /**
     * addClass - 添加 CSS 类，多个类名用空格分割
     * @param className {String}
     * @return {JQ}
     */
    /**
     * removeClass - 移除 CSS 类，多个类名用空格分割
     * @param className {String}
     * @return {JQ}
     */
    /**
     * toggleClass - 切换 CSS 类名，多个类名用空格分割
     * @param className {String}
     * @return {JQ}
     */
    each(['add', 'remove', 'toggle'], function (nameIndex, name) {
      $.fn[name + 'Class'] = function (className) {
        if (!className) {
          return this;
        }

        var classes = className.split(' ');
        return this.each(function (i, ele) {
          each(classes, function (j, cls) {
            ele.classList[name](cls);
          });
        });
      };
    });

    /**
     * width - 获取元素的宽度
     * @return {Number}
     */
    /**
     * height - 获取元素的高度
     * @return {Number}
     */
    each({
      Width: 'width',
      Height: 'height',
    }, function (prop, name) {
      $.fn[name] = function (val) {
        if (val === undefined) {
          // 获取
          var ele = this[0];

          if (isWindow(ele)) {
            return ele['inner' + prop];
          }

          if (isDocument(ele)) {
            return ele.documentElement['scroll' + prop];
          }

          var $ele = $(ele);

          // IE10、IE11 在 box-sizing:border-box 时，不会包含 padding 和 border，这里进行修复
          var IEFixValue = 0;
          var isWidth = name === 'width';
          if ('ActiveXObject' in window) { // 判断是 IE 浏览器
            if ($ele.css('box-sizing') === 'border-box') {
              IEFixValue =
                parseFloat($ele.css('padding-' + (isWidth ? 'left' : 'top'))) +
                parseFloat($ele.css('padding-' + (isWidth ? 'right' : 'bottom'))) +
                parseFloat($ele.css('border-' + (isWidth ? 'left' : 'top') + '-width')) +
                parseFloat($ele.css('border-' + (isWidth ? 'right' : 'bottom') + '-width'));
            }
          }

          return parseFloat($(ele).css(name)) + IEFixValue;
        } else {
          // 设置
          if (!isNaN(Number(val)) && val !== '') {
            val += 'px';
          }

          return this.css(name, val);
        }
      };
    });

    /**
     * innerWidth - 获取元素的宽度，包含内边距
     * @return {Number}
     */
    /**
     * innerHeight - 获取元素的高度，包含内边距
     * @return {Number}
     */
    each({
      Width: 'width',
      Height: 'height',
    }, function (prop, name) {
      $.fn['inner' + prop] = function () {
        var value = this[name]();
        var $ele = $(this[0]);

        if ($ele.css('box-sizing') !== 'border-box') {
          value += parseFloat($ele.css('padding-' + (name === 'width' ? 'left' : 'top')));
          value += parseFloat($ele.css('padding-' + (name === 'width' ? 'right' : 'bottom')));
        }

        return value;
      };
    });

    var dir = function (nodes, selector, nameIndex, node) {
      var ret = [];
      var ele;
      nodes.each(function (j, _this) {
        ele = _this[node];
        while (ele) {
          if (nameIndex === 2) {
            // prevUntil
            if (!selector || (selector && $(ele).is(selector))) {
              break;
            }

            ret.push(ele);
          } else if (nameIndex === 0) {
            // prev
            if (!selector || (selector && $(ele).is(selector))) {
              ret.push(ele);
            }

            break;
          } else {
            // prevAll
            if (!selector || (selector && $(ele).is(selector))) {
              ret.push(ele);
            }
          }

          ele = ele[node];
        }
      });

      return new JQ(unique(ret));
    };

    /**
     * prev - 取得前一个匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
    /**
     * prevAll - 取得前面所有匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
    /**
     * prevUntil - 取得前面的所有元素，直到遇到匹配的元素，不包含匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
    each(['', 'All', 'Until'], function (nameIndex, name) {
      $.fn['prev' + name] = function (selector) {

        // prevAll、prevUntil 需要把元素的顺序倒序处理，以便和 jQuery 的结果一致
        var $nodes = nameIndex === 0 ? this : $(this.get().reverse());
        return dir($nodes, selector, nameIndex, 'previousElementSibling');
      };
    });

    /**
     * next - 取得后一个匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
    /**
     * nextAll - 取得后面所有匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
    /**
     * nextUntil - 取得后面所有匹配的元素，直到遇到匹配的元素，不包含匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
    each(['', 'All', 'Until'], function (nameIndex, name) {
      $.fn['next' + name] = function (selector) {
        return dir(this, selector, nameIndex, 'nextElementSibling');
      };
    });

    /**
     * parent - 取得匹配的直接父元素
     * @param selector {String=}
     * @return {JQ}
     */
    /**
     * parents - 取得所有匹配的父元素
     * @param selector {String=}
     * @return {JQ}
     */
    /**
     * parentUntil - 取得所有的父元素，直到遇到匹配的元素，不包含匹配的元素
     * @param selector {String=}
     * @return {JQ}
     */
    each(['', 's', 'sUntil'], function (nameIndex, name) {
      $.fn['parent' + name] = function (selector) {

        // parents、parentsUntil 需要把元素的顺序反向处理，以便和 jQuery 的结果一致
        var $nodes = nameIndex === 0 ? this : $(this.get().reverse());
        return dir($nodes, selector, nameIndex, 'parentNode');
      };
    });

    /**
     * append - 在元素内部追加内容
     * @param newChild {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    /**
     * prepend - 在元素内部前置内容
     * @param newChild {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    each(['append', 'prepend'], function (nameIndex, name) {
      $.fn[name] = function (newChild) {
        var newChilds;
        var copyByClone = this.length > 1;

        if (isString(newChild)) {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;
          newChilds = slice.call(tempDiv.childNodes);
        } else {
          newChilds = $(newChild).get();
        }

        if (nameIndex === 1) {
          // prepend
          newChilds.reverse();
        }

        return this.each(function (i, _this) {
          each(newChilds, function (j, child) {
            // 一个元素要同时追加到多个元素中，需要先复制一份，然后追加
            if (copyByClone && i > 0) {
              child = child.cloneNode(true);
            }

            if (nameIndex === 0) {
              // append
              _this.appendChild(child);
            } else {
              // prepend
              _this.insertBefore(child, _this.childNodes[0]);
            }
          });
        });
      };
    });

    /**
     * insertBefore - 插入到指定元素的前面
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    /**
     * insertAfter - 插入到指定元素的后面
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    each(['insertBefore', 'insertAfter'], function (nameIndex, name) {
      $.fn[name] = function (selector) {
        var $ele = $(selector);
        return this.each(function (i, _this) {
          $ele.each(function (j, ele) {
            ele.parentNode.insertBefore(
              $ele.length === 1 ? _this : _this.cloneNode(true),
              nameIndex === 0 ? ele : ele.nextSibling
            );
          });
        });
      };
    });

    /**
     * appendTo - 追加到指定元素内容
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    /**
     * prependTo - 前置到指定元素内部
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    /**
     * before - 插入到指定元素前面
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    /**
     * after - 插入到指定元素后面
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    /**
     * replaceAll - 替换掉指定元素
     * @param selector {String|Node|NodeList|JQ}
     * @return {JQ}
     */
    each({
      appendTo: 'append',
      prependTo: 'prepend',
      before: 'insertBefore',
      after: 'insertAfter',
      replaceAll: 'replaceWith',
    }, function (name, original) {
      $.fn[name] = function (selector) {
        $(selector)[original](this);
        return this;
      };
    });



    (function () {
      var dataNS = 'mduiElementDataStorage';

      $.extend({
        /**
         * 在指定元素上存储数据，或从指定元素上读取数据
         * @param ele 必须， DOM 元素
         * @param key 必须，键名
         * @param value 可选，值
         */
        data: function (ele, key, value) {
          var data = {};

          if (value !== undefined) {
            // 根据 key、value 设置值
            data[key] = value;
          } else if (isObjectLike(key)) {
            // 根据键值对设置值
            data = key;
          } else if (key === undefined) {
            // 获取所有值
            var result = {};
            each(ele.attributes, function (i, attribute) {
              var name = attribute.name;
              if (name.indexOf('data-') === 0) {
                var prop = name.slice(5).replace(/-./g, function (u) {
                  // 横杠转为驼峰法
                  return u.charAt(1).toUpperCase();
                });

                result[prop] = attribute.value;
              }
            });

            if (ele[dataNS]) {
              each(ele[dataNS], function (k, v) {
                result[k] = v;
              });
            }

            return result;
          } else {
            // 获取指定值
            if (ele[dataNS] && (key in ele[dataNS])) {
              return ele[dataNS][key];
            } else {
              var dataKey = ele.getAttribute('data-' + key);
              if (dataKey) {
                return dataKey;
              } else {
                return undefined;
              }
            }
          }

          // 设置值
          if (!ele[dataNS]) {
            ele[dataNS] = {};
          }

          each(data, function (k, v) {
            ele[dataNS][k] = v;
          });
        },

        /**
         * 移除指定元素上存放的数据
         * @param ele 必须，DOM 元素
         * @param key 必须，键名
         */
        removeData: function (ele, key) {
          if (ele[dataNS] && ele[dataNS][key]) {
            ele[dataNS][key] = null;
            delete ele.mduiElementDataStorage[key];
          }
        },

      });

      $.fn.extend({

        /**
         * 在元素上读取或设置数据
         * @param key 必须
         * @param value
         * @returns {*}
         */
        data: function (key, value) {
          if (value === undefined) {
            if (isObjectLike(key)) {

              // 同时设置多个值
              return this.each(function (i, ele) {
                $.data(ele, key);
              });
            } else if (this[0]) {

              // 获取值
              return $.data(this[0], key);
            } else {
              return undefined;
            }
          } else {
            // 设置值
            return this.each(function (i, ele) {
              $.data(ele, key, value);
            });
          }
        },

        /**
         * 移除元素上存储的数据
         * @param key 必须
         * @returns {*}
         */
        removeData: function (key) {
          return this.each(function (i, ele) {
            $.removeData(ele, key);
          });
        },

      });
    })();


    (function () {
      // 存储事件
      var handlers = {
        // i: { // 元素ID
        //   j: { // 事件ID
        //     e: 事件名
        //     fn: 事件处理函数
        //     i: 事件ID
        //     proxy:
        //     sel: 选择器
        //   }
        // }
      };

      // 元素ID
      var _elementId = 1;

      var fnFalse = function () {
        return false;
      };

      $.fn.extend({
        /**
         * DOM 加载完毕后调用的函数
         * @param callback
         * @returns {ready}
         */
        ready: function (callback) {
          if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
            callback($);
          } else {
            document.addEventListener('DOMContentLoaded', function () {
              callback($);
            }, false);
          }

          return this;
        },

        /**
         * 绑定事件
         *
         * $().on({eventName: fn}, selector, data);
         * $().on({eventName: fn}, selector)
         * $().on({eventName: fn})
         * $().on(eventName, selector, data, fn);
         * $().on(eventName, selector, fn);
         * $().on(eventName, data, fn);
         * $().on(eventName, fn);
         * $().on(eventName, false);
         *
         * @param eventName
         * @param selector
         * @param data
         * @param callback
         * @param one 是否是 one 方法，只在 JQ 内部使用
         * @returns
         */
        on: function (eventName, selector, data, callback, one) {
          var _this = this;

          // 默认
          // $().on(event, selector, data, callback)

          // event 使用 事件:函数 键值对
          // event = {
          //   'event1': callback1,
          //   'event2': callback2
          // }
          //
          // $().on(event, selector, data)
          if (eventName && !isString(eventName)) {
            each(eventName, function (type, fn) {
              _this.on(type, selector, data, fn);
            });

            return _this;
          }

          // selector 不存在
          // $().on(event, data, callback)
          if (!isString(selector) && !isFunction(callback) && callback !== false) {
            callback = data;
            data = selector;
            selector = undefined;
          }

          // data 不存在
          // $().on(event, callback)
          if (isFunction(data) || data === false) {
            callback = data;
            data = undefined;
          }

          // callback 为 false
          // $().on(event, false)
          if (callback === false) {
            callback = fnFalse;
          }

          if (one === 1) {
            var origCallback = callback;
            callback = function () {
              _this.off(eventName, selector, callback);
              return origCallback.apply(this, arguments);
            };
          }

          return this.each(function () {
            add(this, eventName, callback, data, selector);
          });
        },

        /**
         * 绑定事件，只触发一次
         * @param eventName
         * @param selector
         * @param data
         * @param callback
         */
        one: function (eventName, selector, data, callback) {
          var _this = this;

          if (!isString(eventName)) {
            each(eventName, function (type, fn) {
              type.split(' ').forEach(function (eName) {
                _this.on(eName, selector, data, fn, 1);
              });
            });
          } else {
            eventName.split(' ').forEach(function (eName) {
              _this.on(eName, selector, data, callback, 1);
            });
          }

          return this;
        },

        /**
         * 取消绑定事件
         *
         * $().off(eventName, selector);
         * $().off(eventName, callback);
         * $().off(eventName, false);
         *
         */
        off: function (eventName, selector, callback) {
          var _this = this;

          // event 使用 事件:函数 键值对
          // event = {
          //   'event1': callback1,
          //   'event2': callback2
          // }
          //
          // $().off(event, selector)
          if (eventName && !isString(eventName)) {
            each(eventName, function (type, fn) {
              _this.off(type, selector, fn);
            });

            return _this;
          }

          // selector 不存在
          // $().off(event, callback)
          if (!isString(selector) && !isFunction(callback) && callback !== false) {
            callback = selector;
            selector = undefined;
          }

          // callback 为 false
          // $().off(event, false)
          if (callback === false) {
            callback = fnFalse;
          }

          return _this.each(function () {
            remove(this, eventName, callback, selector);
          });
        },

        /**
         * 触发一个事件
         * @param eventName
         * @param data
         * @returns {*|JQ}
         */
        trigger: function (eventName, data) {
          if (!isString(eventName)) {
            return;
          }

          var isMouseEvent = ['click', 'mousedown', 'mouseup', 'mousemove'].indexOf(eventName) > -1;

          var evt;

          if (isMouseEvent) {
            // Note: MouseEvent 无法传入 detail 参数
            try {
              evt = new MouseEvent(eventName, {
                bubbles: true,
                cancelable: true,
              });
            } catch (e) {
              evt = document.createEvent('MouseEvent');
              evt.initMouseEvent(eventName, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            }
          } else {
            try {
              evt = new CustomEvent(eventName, {
                detail: data,
                bubbles: true,
                cancelable: true,
              });
            } catch (e) {
              evt = document.createEvent('CustomEvent');
              evt.initCustomEvent(eventName, true, true, data);
            }
          }

          evt._detail = data;

          return this.each(function () {
            this.dispatchEvent(evt);
          });
        },
      });

      /**
       * 添加事件监听
       * @param element
       * @param eventName
       * @param func
       * @param data
       * @param selector
       */
      function add(element, eventName, func, data, selector) {
        var elementId = getElementId(element);
        if (!handlers[elementId]) {
          handlers[elementId] = [];
        }

        // 传入 data.useCapture 来设置 useCapture: true
        var useCapture = false;
        if (isObjectLike(data) && data.useCapture) {
          useCapture = true;
        }

        eventName.split(' ').forEach(function (event) {

          var handler = {
            e: event,
            fn: func,
            sel: selector,
            i: handlers[elementId].length,
          };

          var callFn = function (e, ele) {
            // 因为鼠标事件模拟事件的 detail 属性是只读的，因此在 e._detail 中存储参数
            var result = func.apply(ele, e._detail === undefined ? [e] : [e].concat(e._detail));

            if (result === false) {
              e.preventDefault();
              e.stopPropagation();
            }
          };

          var proxyfn = handler.proxy = function (e) {
            e._data = data;

            // 事件代理
            if (selector) {
              $(element).find(selector).get().reverse().forEach(function (ele) {
                if (ele === e.target || $.contains(ele, e.target)) {
                  callFn(e, ele);
                }
              });
            }

            // 不使用事件代理
            else {
              callFn(e, element);
            }
          };

          handlers[elementId].push(handler);
          element.addEventListener(handler.e, proxyfn, useCapture);
        });
      }

      /**
       * 移除事件监听
       * @param element
       * @param eventName
       * @param func
       * @param selector
       */
      function remove(element, eventName, func, selector) {
        (eventName || '').split(' ').forEach(function (event) {
          getHandlers(element, event, func, selector).forEach(function (handler) {
            delete handlers[getElementId(element)][handler.i];
            element.removeEventListener(handler.e, handler.proxy, false);
          });
        });
      }

      /**
       * 为元素赋予一个唯一的ID
       * @param element
       * @returns {number|*}
       */
      function getElementId(element) {
        return element._elementId || (element._elementId = _elementId++);
      }

      /**
       * 获取匹配的事件
       * @param element
       * @param eventName
       * @param func
       * @param selector
       * @returns {Array.<T>}
       */
      function getHandlers(element, eventName, func, selector) {
        return (handlers[getElementId(element)] || []).filter(function (handler) {

          return handler &&
            (!eventName  || handler.e === eventName) &&
            (!func || handler.fn.toString() === func.toString()) &&
            (!selector || handler.sel === selector);
        });
      }

    })();


    (function () {
      var globalOptions = {};
      var jsonpID = 0;

      // 全局事件名
      var ajaxEvent = {
        ajaxStart: 'start.mdui.ajax',
        ajaxSuccess: 'success.mdui.ajax',
        ajaxError: 'error.mdui.ajax',
        ajaxComplete: 'complete.mdui.ajax',
      };

      /**
       * 判断此请求方法是否通过查询字符串提交参数
       * @param method 请求方法，大写
       * @returns {boolean}
       */
      var isQueryStringData = function (method) {
        return ['GET', 'HEAD'].indexOf(method) >= 0;
      };

      /**
       * 添加参数到 URL 上，且 URL 中不存在 ? 时，自动把第一个 & 替换为 ?
       * @param url
       * @param query 参数 key=value
       * @returns {string}
       */
      var appendQuery = function (url, query) {
        return (url + '&' + query).replace(/[&?]{1,2}/, '?');
      };

      $.extend({

        /**
         * 为 ajax 请求设置全局配置参数
         * @param options
         */
        ajaxSetup: function (options) {
          $.extend(globalOptions, options || {});
        },

        /**
         * 发送 ajax 请求
         * @param options
         */
        ajax: function (options) {

          // 配置参数
          var defaults = {
            method: 'GET',         // 请求方式
            data: false,           // 请求的数据，查询字符串或对象
            processData: true,     // 是否把数据转换为查询字符串发送，为 false 时不进行自动转换。
            async: true,           // 是否为异步请求
            cache: true,           // 是否从缓存中读取，只对 GET/HEAD 请求有效，dataType 为 jsonp 时为 false
            username: '',          // HTTP 访问认证的用户名
            password: '',          // HTTP 访问认证的密码
            headers: {},           // 一个键值对，随着请求一起发送
            xhrFields: {},         // 设置 XHR 对象
            statusCode: {},        // 一个 HTTP 代码和函数的对象
            dataType: 'text',      // 预期服务器返回的数据类型 text、json、jsonp
            jsonp: 'callback',     // jsonp 请求的回调函数名称
            jsonpCallback: function () {  // （string 或 Function）使用指定的回调函数名代替自动生成的回调函数名
              return 'mduijsonp_' + Date.now() + '_' + (jsonpID += 1);
            },

            contentType: 'application/x-www-form-urlencoded', // 发送信息至服务器时内容编码类型
            timeout: 0,            // 设置请求超时时间（毫秒）
            global: true,          // 是否在 document 上触发全局 ajax 事件
            // beforeSend:    function (XMLHttpRequest) 请求发送前执行，返回 false 可取消本次 ajax 请求
            // success:       function (data, textStatus, XMLHttpRequest) 请求成功时调用
            // error:         function (XMLHttpRequest, textStatus) 请求失败时调用
            // statusCode:    {404: function ()}
            //                200-299之间的状态码表示成功，参数和 success 回调一样；其他状态码表示失败，参数和 error 回调一样
            // complete:      function (XMLHttpRequest, textStatus) 请求完成后回调函数 (请求成功或失败之后均调用)
          };

          // 回调函数
          var callbacks = [
            'beforeSend',
            'success',
            'error',
            'statusCode',
            'complete',
          ];

          // 是否已取消请求
          var isCanceled = false;

          // 保存全局配置
          var globals = globalOptions;

          // 事件参数
          var eventParams = {};

          // 合并全局参数到默认参数，全局回调函数不覆盖
          each(globals, function (key, value) {
            if (callbacks.indexOf(key) < 0) {
              defaults[key] = value;
            }
          });

          // 参数合并
          options = $.extend({}, defaults, options);

          /**
           * 触发全局事件
           * @param event string 事件名
           * @param xhr XMLHttpRequest 事件参数
           */
          function triggerEvent(event, xhr) {
            if (options.global) {
              $(document).trigger(event, xhr);
            }
          }

          /**
           * 触发 XHR 回调和事件
           * @param callback string 回调函数名称
           */
          function triggerCallback(callback) {
            var a = arguments;
            var result1;
            var result2;

            if (callback) {
              // 全局回调
              if (callback in globals) {
                result1 = globals[callback](a[1], a[2], a[3], a[4]);
              }

              // 自定义回调
              if (options[callback]) {
                result2 = options[callback](a[1], a[2], a[3], a[4]);
              }

              // beforeSend 回调返回 false 时取消 ajax 请求
              if (callback === 'beforeSend' && (result1 === false || result2 === false)) {
                isCanceled = true;
              }
            }
          }

          // 请求方式转为大写
          var method = options.method = options.method.toUpperCase();

          // 默认使用当前页面 URL
          if (!options.url) {
            options.url = window.location.toString();
          }

          // 需要发送的数据
          // GET/HEAD 请求和 processData 为 true 时，转换为查询字符串格式，特殊格式不转换
          var sendData;
          if (
            (isQueryStringData(method) || options.processData) &&
            options.data &&
            [ArrayBuffer, Blob, Document, FormData].indexOf(options.data.constructor) < 0
          ) {
            sendData = isString(options.data) ? options.data : $.param(options.data);
          } else {
            sendData = options.data;
          }

          // 对于 GET、HEAD 类型的请求，把 data 数据添加到 URL 中
          if (isQueryStringData(method) && sendData) {
            // 查询字符串拼接到 URL 中
            options.url = appendQuery(options.url, sendData);
            sendData = null;
          }

          // JSONP
          if (options.dataType === 'jsonp') {
            // URL 中添加自动生成的回调函数名
            var callbackName = isFunction(options.jsonpCallback) ?
              options.jsonpCallback() :
              options.jsonpCallback;
            var requestUrl = appendQuery(options.url, options.jsonp + '=' + callbackName);

            eventParams.options = options;

            triggerEvent(ajaxEvent.ajaxStart, eventParams);
            triggerCallback('beforeSend', null);

            if (isCanceled) {
              return;
            }

            var abortTimeout;

            // 创建 script
            var script = document.createElement('script');
            script.type = 'text/javascript';

            // 创建 script 失败
            script.onerror = function () {
              if (abortTimeout) {
                clearTimeout(abortTimeout);
              }

              triggerEvent(ajaxEvent.ajaxError, eventParams);
              triggerCallback('error', null, 'scripterror');

              triggerEvent(ajaxEvent.ajaxComplete, eventParams);
              triggerCallback('complete', null, 'scripterror');
            };

            script.src = requestUrl;

            // 处理
            window[callbackName] = function (data) {
              if (abortTimeout) {
                clearTimeout(abortTimeout);
              }

              eventParams.data = data;

              triggerEvent(ajaxEvent.ajaxSuccess, eventParams);
              triggerCallback('success', data, 'success', null);

              $(script).remove();
              script = null;
              delete window[callbackName];
            };

            $('head').append(script);

            if (options.timeout > 0) {
              abortTimeout = setTimeout(function () {
                $(script).remove();
                script = null;

                triggerEvent(ajaxEvent.ajaxError, eventParams);
                triggerCallback('error', null, 'timeout');
              }, options.timeout);
            }

            return;
          }

          // GET/HEAD 请求的缓存处理
          if (isQueryStringData(method) && !options.cache) {
            options.url = appendQuery(options.url, '_=' + Date.now());
          }

          // 创建 XHR
          var xhr = new XMLHttpRequest();

          xhr.open(method, options.url, options.async, options.username, options.password);

          if (sendData && !isQueryStringData(method) && options.contentType !== false || options.contentType) {
            xhr.setRequestHeader('Content-Type', options.contentType);
          }

          // 设置 Accept
          if (options.dataType === 'json') {
            xhr.setRequestHeader('Accept', 'application/json, text/javascript');
          }

          // 添加 headers
          if (options.headers) {
            each(options.headers, function (key, value) {
              xhr.setRequestHeader(key, value);
            });
          }

          // 检查是否是跨域请求
          if (options.crossDomain === undefined) {
            options.crossDomain =
              /^([\w-]+:)?\/\/([^\/]+)/.test(options.url) &&
              RegExp.$2 !== window.location.host;
          }

          if (!options.crossDomain) {
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          }

          if (options.xhrFields) {
            each(options.xhrFields, function (key, value) {
              xhr[key] = value;
            });
          }

          eventParams.xhr = xhr;
          eventParams.options = options;

          var xhrTimeout;

          xhr.onload = function () {
            if (xhrTimeout) {
              clearTimeout(xhrTimeout);
            }

            // 包含成功或错误代码的字符串
            var textStatus;

            // AJAX 返回的 HTTP 响应码是否表示成功
            var isHttpStatusSuccess = (xhr.status >= 200 && xhr.status < 300) || xhr.status === 0;

            if (isHttpStatusSuccess) {

              if (xhr.status === 204 || method === 'HEAD') {
                textStatus = 'nocontent';
              } else if (xhr.status === 304) {
                textStatus = 'notmodified';
              } else {
                textStatus = 'success';
              }

              var responseData;
              if (options.dataType === 'json') {
                try {
                  eventParams.data = responseData = JSON.parse(xhr.responseText);
                } catch (err) {
                  textStatus = 'parsererror';

                  triggerEvent(ajaxEvent.ajaxError, eventParams);
                  triggerCallback('error', xhr, textStatus);
                }

                if (textStatus !== 'parsererror') {
                  triggerEvent(ajaxEvent.ajaxSuccess, eventParams);
                  triggerCallback('success', responseData, textStatus, xhr);
                }
              } else {
                eventParams.data = responseData =
                  xhr.responseType === 'text' || xhr.responseType === '' ?
                  xhr.responseText :
                  xhr.response;

                triggerEvent(ajaxEvent.ajaxSuccess, eventParams);
                triggerCallback('success', responseData, textStatus, xhr);
              }
            } else {
              textStatus = 'error';

              triggerEvent(ajaxEvent.ajaxError, eventParams);
              triggerCallback('error', xhr, textStatus);
            }

            // statusCode
            each([globals.statusCode, options.statusCode], function (i, func) {
              if (func && func[xhr.status]) {
                if (isHttpStatusSuccess) {
                  func[xhr.status](responseData, textStatus, xhr);
                } else {
                  func[xhr.status](xhr, textStatus);
                }
              }
            });

            triggerEvent(ajaxEvent.ajaxComplete, eventParams);
            triggerCallback('complete', xhr, textStatus);
          };

          xhr.onerror = function () {
            if (xhrTimeout) {
              clearTimeout(xhrTimeout);
            }

            triggerEvent(ajaxEvent.ajaxError, eventParams);
            triggerCallback('error', xhr, xhr.statusText);

            triggerEvent(ajaxEvent.ajaxComplete, eventParams);
            triggerCallback('complete', xhr, 'error');
          };

          xhr.onabort = function () {
            var textStatus = 'abort';

            if (xhrTimeout) {
              textStatus = 'timeout';
              clearTimeout(xhrTimeout);
            }

            triggerEvent(ajaxEvent.ajaxError, eventParams);
            triggerCallback('error', xhr, textStatus);

            triggerEvent(ajaxEvent.ajaxComplete, eventParams);
            triggerCallback('complete', xhr, textStatus);
          };

          // ajax start 回调
          triggerEvent(ajaxEvent.ajaxStart, eventParams);
          triggerCallback('beforeSend', xhr);

          if (isCanceled) {
            return xhr;
          }

          // Timeout
          if (options.timeout > 0) {
            xhrTimeout = setTimeout(function () {
              xhr.abort();
            }, options.timeout);
          }

          // 发送 XHR
          xhr.send(sendData);

          return xhr;
        },
      });

      // 监听全局事件
      //
      // 通过 $(document).on('success.mdui.ajax', function (event, params) {}) 调用时，包含两个参数
      // event: 事件对象
      // params: {
      //   xhr: XMLHttpRequest 对象
      //   options: ajax 请求的配置参数
      //   data: ajax 请求返回的数据
      // }

      // 全局 Ajax 事件快捷方法
      // $(document).ajaxStart(function (event, xhr, options) {})
      // $(document).ajaxSuccess(function (event, xhr, options, data) {})
      // $(document).ajaxError(function (event, xhr, options) {})
      // $(document).ajaxComplete(function (event, xhr, options) {})
      each(ajaxEvent, function (name, eventName) {
        $.fn[name] = function (fn) {
          return this.on(eventName, function (e, params) {
            fn(e, params.xhr, params.options, params.data);
          });
        };
      });
    })();


  /* jshint ignore:start */
    return $;
  })(window, document);
  /* jshint ignore:end */


  /**
   * =============================================================================
   * ************   定义全局变量   ************
   * =============================================================================
   */

  var $document = $(document);
  var $window = $(window);

  /**
   * 队列 -- 当前队列的 api 和 jquery 不一样，所以不打包进 mdui.JQ 里
   */
  var queue = {};
  (function () {
    var queueData = [];

    /**
     * 写入队列
     * @param queueName 对列名
     * @param func 函数名，该参数为空时，返回所有队列
     */
    queue.queue = function (queueName, func) {
      if (queueData[queueName] === undefined) {
        queueData[queueName] = [];
      }

      if (func === undefined) {
        return queueData[queueName];
      }

      queueData[queueName].push(func);
    };

    /**
     * 从队列中移除第一个函数，并执行该函数
     * @param queueName
     */
    queue.dequeue = function (queueName) {
      if (queueData[queueName] !== undefined && queueData[queueName].length) {
        (queueData[queueName].shift())();
      }
    };

  })();

  /**
   * touch 事件后的 500ms 内禁用 mousedown 事件
   *
   * 不支持触控的屏幕上事件顺序为 mousedown -> mouseup -> click
   * 支持触控的屏幕上事件顺序为 touchstart -> touchend -> mousedown -> mouseup -> click
   */
  var TouchHandler = {
    touches: 0,

    /**
     * 该事件是否被允许
     * 在执行事件前调用该方法判断事件是否可以执行
     * @param e
     * @returns {boolean}
     */
    isAllow: function (e) {
      var allow = true;

      if (
        TouchHandler.touches &&
        [
          'mousedown',
          'mouseup',
          'mousemove',
          'click',
          'mouseover',
          'mouseout',
          'mouseenter',
          'mouseleave',
        ].indexOf(e.type) > -1
      ) {
        // 触发了 touch 事件后阻止鼠标事件
        allow = false;
      }

      return allow;
    },

    /**
     * 在 touchstart 和 touchmove、touchend、touchcancel 事件中调用该方法注册事件
     * @param e
     */
    register: function (e) {
      if (e.type === 'touchstart') {
        // 触发了 touch 事件
        TouchHandler.touches += 1;
      } else if (['touchmove', 'touchend', 'touchcancel'].indexOf(e.type) > -1) {
        // touch 事件结束 500ms 后解除对鼠标事件的阻止
        setTimeout(function () {
          if (TouchHandler.touches) {
            TouchHandler.touches -= 1;
          }
        }, 500);
      }
    },

    start: 'touchstart mousedown',
    move: 'touchmove mousemove',
    end: 'touchend mouseup',
    cancel: 'touchcancel mouseleave',
    unlock: 'touchend touchmove touchcancel',
  };

  // 测试事件
  // 在每一个事件中都使用 TouchHandler.isAllow(e) 判断事件是否可执行
  // 在 touchstart 和 touchmove、touchend、touchcancel
  // (function () {
  //
  //   $document
  //     .on(TouchHandler.start, function (e) {
  //       if (!TouchHandler.isAllow(e)) {
  //         return;
  //       }
  //       TouchHandler.register(e);
  //       console.log(e.type);
  //     })
  //     .on(TouchHandler.move, function (e) {
  //       if (!TouchHandler.isAllow(e)) {
  //         return;
  //       }
  //       console.log(e.type);
  //     })
  //     .on(TouchHandler.end, function (e) {
  //       if (!TouchHandler.isAllow(e)) {
  //         return;
  //       }
  //       console.log(e.type);
  //     })
  //     .on(TouchHandler.unlock, TouchHandler.register);
  // })();

  $(function () {
    // 避免页面加载完后直接执行css动画
    // https://css-tricks.com/transitions-only-after-page-load/

    setTimeout(function () {
      $('body').addClass('mdui-loaded');
    }, 0);
  });


  /**
   * =============================================================================
   * ************   MDUI 内部使用的函数   ************
   * =============================================================================
   */

  /**
   * 解析 DATA API 的参数
   * @param str
   * @returns {*}
   */
  var parseOptions = function (str) {
    var options = {};

    if (str === null || !str) {
      return options;
    }

    if (typeof str === 'object') {
      return str;
    }

    /* jshint ignore:start */
    var start = str.indexOf('{');
    try {
      options = (new Function('',
        'var json = ' + str.substr(start) +
        '; return JSON.parse(JSON.stringify(json));'))();
    } catch (e) {
    }
    /* jshint ignore:end */

    return options;
  };

  /**
   * 绑定组件的事件
   * @param eventName 事件名
   * @param pluginName 插件名
   * @param inst 插件实例
   * @param trigger 在该元素上触发
   * @param obj 事件参数
   */
  var componentEvent = function (eventName, pluginName, inst, trigger, obj) {
    if (!obj) {
      obj = {};
    }

    obj.inst = inst;

    var fullEventName = eventName + '.mdui.' + pluginName;

    // jQuery 事件
    if (typeof jQuery !== 'undefined') {
      jQuery(trigger).trigger(fullEventName, obj);
    }

    // JQ 事件
    $(trigger).trigger(fullEventName, obj);
  };


  /**
   * =============================================================================
   * ************   开放的常用方法   ************
   * =============================================================================
   */

  $.fn.extend({

    /**
     * 执行强制重绘
     */
    reflow: function () {
      return this.each(function () {
        return this.clientLeft;
      });
    },

    /**
     * 设置 transition 时间
     * @param duration
     */
    transition: function (duration) {
      if (typeof duration !== 'string') {
        duration = duration + 'ms';
      }

      return this.each(function () {
        this.style.webkitTransitionDuration = duration;
        this.style.transitionDuration = duration;
      });
    },

    /**
     * transition 动画结束回调
     * @param callback
     * @returns {transitionEnd}
     */
    transitionEnd: function (callback) {
      var events = [
          'webkitTransitionEnd',
          'transitionend',
        ];
      var i;
      var _this = this;

      function fireCallBack(e) {
        if (e.target !== this) {
          return;
        }

        callback.call(this, e);

        for (i = 0; i < events.length; i++) {
          _this.off(events[i], fireCallBack);
        }
      }

      if (callback) {
        for (i = 0; i < events.length; i++) {
          _this.on(events[i], fireCallBack);
        }
      }

      return this;
    },

    /**
     * 设置 transform-origin 属性
     * @param transformOrigin
     */
    transformOrigin: function (transformOrigin) {
      return this.each(function () {
        this.style.webkitTransformOrigin = transformOrigin;
        this.style.transformOrigin = transformOrigin;
      });
    },

    /**
     * 设置 transform 属性
     * @param transform
     */
    transform: function (transform) {
      return this.each(function () {
        this.style.webkitTransform = transform;
        this.style.transform = transform;
      });
    },

  });

  $.extend({
    /**
     * 创建并显示遮罩
     * @param zIndex 遮罩层的 z-index
     */
    showOverlay: function (zIndex) {
      var $overlay = $('.mdui-overlay');

      if ($overlay.length) {
        $overlay.data('isDeleted', 0);

        if (zIndex !== undefined) {
          $overlay.css('z-index', zIndex);
        }
      } else {
        if (zIndex === undefined) {
          zIndex = 2000;
        }

        $overlay = $('<div class="mdui-overlay">')
          .appendTo(document.body)
          .reflow()
          .css('z-index', zIndex);
      }

      var level = $overlay.data('overlay-level') || 0;
      return $overlay
        .data('overlay-level', ++level)
        .addClass('mdui-overlay-show');
    },

    /**
     * 隐藏遮罩层
     * @param force 是否强制隐藏遮罩
     */
    hideOverlay: function (force) {
      var $overlay = $('.mdui-overlay');

      if (!$overlay.length) {
        return;
      }

      var level = force ? 1 : $overlay.data('overlay-level');
      if (level > 1) {
        $overlay.data('overlay-level', --level);
        return;
      }

      $overlay
        .data('overlay-level', 0)
        .removeClass('mdui-overlay-show')
        .data('isDeleted', 1)
        .transitionEnd(function () {
          if ($overlay.data('isDeleted')) {
            $overlay.remove();
          }
        });
    },

    /**
     * 锁定屏幕
     */
    lockScreen: function () {
      var $body = $('body');

      // 不直接把 body 设为 box-sizing: border-box，避免污染全局样式
      var newBodyWidth = $body.width();

      $body
        .addClass('mdui-locked')
        .width(newBodyWidth);

      var level = $body.data('lockscreen-level') || 0;
      $body.data('lockscreen-level', ++level);
    },

    /**
     * 解除屏幕锁定
     * @param force 是否强制解锁屏幕
     */
    unlockScreen: function (force) {
      var $body = $('body');

      var level = force ? 1 : $body.data('lockscreen-level');
      if (level > 1) {
        $body.data('lockscreen-level', --level);
        return;
      }

      $body
        .data('lockscreen-level', 0)
        .removeClass('mdui-locked')
        .width('');
    },

    /**
     * 函数节流
     * @param fn
     * @param delay
     * @returns {Function}
     */
    throttle: function (fn, delay) {
      var timer = null;
      if (!delay || delay < 16) {
        delay = 16;
      }

      return function () {
        var _this = this;
        var args = arguments;

        if (timer === null) {
          timer = setTimeout(function () {
            fn.apply(_this, args);
            timer = null;
          }, delay);
        }
      };
    },
  });

  /**
   * 生成唯一 id
   * @param string name id的名称，若该名称对于的guid不存在，则生成新的guid并返回；若已存在，则返回原有guid
   * @returns {string}
   */
  (function () {
    var GUID = {};

    $.extend({
      guid: function (name) {
        if (typeof name !== 'undefined' && typeof GUID[name] !== 'undefined') {
          return GUID[name];
        }

        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }

        var guid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

        if (typeof name !== 'undefined') {
          GUID[name] = guid;
        }

        return guid;
      },
    });
  })();


  /**
   * =============================================================================
   * ************   Mutation   ************
   * =============================================================================
   */

  (function () {
    /**
     * API 初始化代理, 当 DOM 突变再次执行代理的初始化函数. 使用方法:
     *
     * 1. 代理组件 API 执行初始化函数, selector 必须为字符串.
     *    mdui.mutation(selector, apiInit);
     *    mutation 会执行 $(selector).each(apiInit)
     *
     * 2. 突变时, 再次执行代理的初始化函数
     *    mdui.mutation()        等价 $(document).mutation()
     *    $(selector).mutation() 在 selector 节点内进行 API 初始化
     *
     * 原理:
     *
     *    mutation 执行了 $().data('mdui.mutation', [selector]).
     *    当元素被重构时, 该数据会丢失, 由此判断是否突变.
     *
     * 提示:
     *
     *    类似 Drawer 可以使用委托事件完成.
     *    类似 Collapse 需要知道 DOM 发生突变, 并再次进行初始化.
     */
    var entries = { };

    function mutation(selector, apiInit, that, i, item) {
      var $this = $(that);
      var m = $this.data('mdui.mutation');

      if (!m) {
        m = [];
        $this.data('mdui.mutation', m);
      }

      if (m.indexOf(selector) === -1) {
        m.push(selector);
        apiInit.call(that, i, item);
      }
    }

    $.fn.extend({
      mutation: function () {
        return this.each(function (i, item) {
          var $this = $(this);
          $.each(entries, function (selector, apiInit) {
            if ($this.is(selector)) {
              mutation(selector, apiInit, $this[0], i, item);
            }

            $this.find(selector).each(function (i, item) {
              mutation(selector, apiInit, this, i, item);
            });
          });
        });
      },
    });

    mdui.mutation = function (selector, apiInit) {
      if (typeof selector !== 'string' || typeof apiInit !== 'function') {
        $(document).mutation();
        return;
      }

      entries[selector] = apiInit;
      $(selector).each(function (i, item) {
        mutation(selector, apiInit, this, i, item);
      });
    };

  })();


  /**
   * =============================================================================
   * ************   Headroom.js   ************
   * =============================================================================
   */

  mdui.Headroom = (function () {

    /**
     * 默认参数
     * @type {{}}
     */
    var DEFAULT = {
      tolerance: 5,                                 // 滚动条滚动多少距离开始隐藏或显示元素，{down: num, up: num}，或数字
      offset: 0,                                    // 在页面顶部多少距离内滚动不会隐藏元素
      initialClass: 'mdui-headroom',                // 初始化时添加的类
      pinnedClass: 'mdui-headroom-pinned-top',      // 元素固定时添加的类
      unpinnedClass: 'mdui-headroom-unpinned-top',  // 元素隐藏时添加的类
    };

    /**
     * Headroom
     * @param selector
     * @param opts
     * @constructor
     */
    function Headroom(selector, opts) {
      var _this = this;

      _this.$headroom = $(selector).eq(0);
      if (!_this.$headroom.length) {
        return;
      }

      // 已通过自定义属性实例化过，不再重复实例化
      var oldInst = _this.$headroom.data('mdui.headroom');
      if (oldInst) {
        return oldInst;
      }

      _this.options = $.extend({}, DEFAULT, (opts || {}));

      // 数值转为 {down: bum, up: num}
      var tolerance = _this.options.tolerance;
      if (tolerance !== Object(tolerance)) {
        _this.options.tolerance = {
          down: tolerance,
          up: tolerance,
        };
      }

      _this._init();
    }

    /**
     * 初始化
     * @private
     */
    Headroom.prototype._init = function () {
      var _this = this;

      _this.state = 'pinned';
      _this.$headroom
        .addClass(_this.options.initialClass)
        .removeClass(_this.options.pinnedClass + ' ' + _this.options.unpinnedClass);

      _this.inited = false;
      _this.lastScrollY = 0;

      _this._attachEvent();
    };

    /**
     * 监听滚动事件
     * @private
     */
    Headroom.prototype._attachEvent = function () {
      var _this = this;

      if (!_this.inited) {
        _this.lastScrollY = window.pageYOffset;
        _this.inited = true;

        $window.on('scroll', function () {
          _this._scroll();
        });
      }
    };

    /**
     * 滚动时的处理
     * @private
     */
    Headroom.prototype._scroll = function () {
      var _this = this;
      _this.rafId = window.requestAnimationFrame(function () {
        var currentScrollY = window.pageYOffset;
        var direction = currentScrollY > _this.lastScrollY ? 'down' : 'up';
        var toleranceExceeded =
          Math.abs(currentScrollY - _this.lastScrollY) >=
          _this.options.tolerance[direction];

        if (
          currentScrollY > _this.lastScrollY &&
          currentScrollY >= _this.options.offset &&
          toleranceExceeded) {
          _this.unpin();
        } else if (
          (currentScrollY < _this.lastScrollY && toleranceExceeded) ||
          currentScrollY <= _this.options.offset
        ) {
          _this.pin();
        }

        _this.lastScrollY = currentScrollY;
      });
    };

    /**
     * 动画结束回调
     * @param inst
     */
    var transitionEnd = function (inst) {
      if (inst.state === 'pinning') {
        inst.state = 'pinned';
        componentEvent('pinned', 'headroom', inst, inst.$headroom);
      }

      if (inst.state === 'unpinning') {
        inst.state = 'unpinned';
        componentEvent('unpinned', 'headroom', inst, inst.$headroom);
      }
    };

    /**
     * 固定住
     */
    Headroom.prototype.pin = function () {
      var _this = this;

      if (
        _this.state === 'pinning' ||
        _this.state === 'pinned' ||
        !_this.$headroom.hasClass(_this.options.initialClass)
      ) {
        return;
      }

      componentEvent('pin', 'headroom', _this, _this.$headroom);

      _this.state = 'pinning';

      _this.$headroom
        .removeClass(_this.options.unpinnedClass)
        .addClass(_this.options.pinnedClass)
        .transitionEnd(function () {
          transitionEnd(_this);
        });
    };

    /**
     * 不固定住
     */
    Headroom.prototype.unpin = function () {
      var _this = this;

      if (
        _this.state === 'unpinning' ||
        _this.state === 'unpinned' ||
        !_this.$headroom.hasClass(_this.options.initialClass)
      ) {
        return;
      }

      componentEvent('unpin', 'headroom', _this, _this.$headroom);

      _this.state = 'unpinning';

      _this.$headroom
        .removeClass(_this.options.pinnedClass)
        .addClass(_this.options.unpinnedClass)
        .transitionEnd(function () {
          transitionEnd(_this);
        });
    };

    /**
     * 启用
     */
    Headroom.prototype.enable = function () {
      var _this = this;

      if (!_this.inited) {
        _this._init();
      }
    };

    /**
     * 禁用
     */
    Headroom.prototype.disable = function () {
      var _this = this;

      if (_this.inited) {
        _this.inited = false;
        _this.$headroom
          .removeClass([
            _this.options.initialClass,
            _this.options.pinnedClass,
            _this.options.unpinnedClass,
          ].join(' '));

        $window.off('scroll', function () {
          _this._scroll();
        });

        window.cancelAnimationFrame(_this.rafId);
      }
    };

    /**
     * 获取当前状态 pinning | pinned | unpinning | unpinned
     */
    Headroom.prototype.getState = function () {
      return this.state;
    };

    return Headroom;

  })();


  /**
   * =============================================================================
   * ************   Headroom 自定义属性 API   ************
   * =============================================================================
   */

  $(function () {
    mdui.mutation('[mdui-headroom]', function () {
      var $this = $(this);
      var options = parseOptions($this.attr('mdui-headroom'));

      var inst = $this.data('mdui.headroom');
      if (!inst) {
        inst = new mdui.Headroom($this, options);
        $this.data('mdui.headroom', inst);
      }
    });
  });


  /**
   * =============================================================================
   * ************   供 Collapse、 Panel 调用的折叠内容块插件   ************
   * =============================================================================
   */
  var CollapsePrivate = (function () {

    /**
     * 默认参数
     */
    var DEFAULT = {
      accordion: false,                             // 是否使用手风琴效果
    };

    /**
     * 折叠内容块
     * @param selector
     * @param opts
     * @param namespace
     * @constructor
     */
    function Collapse(selector, opts, namespace) {
      var _this = this;

      // 命名空间
      _this.ns = namespace;

      // 类名
      var classpPefix = 'mdui-' + _this.ns + '-item';
      _this.class_item = classpPefix;
      _this.class_item_open = classpPefix + '-open';
      _this.class_header = classpPefix + '-header';
      _this.class_body = classpPefix + '-body';

      // 折叠面板元素
      _this.$collapse = $(selector).eq(0);
      if (!_this.$collapse.length) {
        return;
      }

      // 已通过自定义属性实例化过，不再重复实例化
      var oldInst = _this.$collapse.data('mdui.' + _this.ns);
      if (oldInst) {
        return oldInst;
      }

      _this.options = $.extend({}, DEFAULT, (opts || {}));

      _this.$collapse.on('click', '.' + _this.class_header, function () {
        var $item = $(this).parent('.' + _this.class_item);
        if (_this.$collapse.children($item).length) {
          _this.toggle($item);
        }
      });

      // 绑定关闭按钮
      _this.$collapse.on('click', '[mdui-' + _this.ns + '-item-close]', function () {
        var $item = $(this).parents('.' + _this.class_item).eq(0);
        if (_this._isOpen($item)) {
          _this.close($item);
        }
      });
    }

    /**
     * 指定 item 是否处于打开状态
     * @param $item
     * @returns {boolean}
     * @private
     */
    Collapse.prototype._isOpen = function ($item) {
      return $item.hasClass(this.class_item_open);
    };

    /**
     * 获取指定 item
     * @param item
     * @returns {*}
     * @private
     */
    Collapse.prototype._getItem = function (item) {
      var _this = this;

      if (parseInt(item) === item) {
        // item 是索引号
        return _this.$collapse.children('.' + _this.class_item).eq(item);
      }

      return $(item).eq(0);
    };

    /**
     * 动画结束回调
     * @param inst
     * @param $content
     * @param $item
     */
    var transitionEnd = function (inst, $content, $item) {
      if (inst._isOpen($item)) {
        $content
          .transition(0)
          .height('auto')
          .reflow()
          .transition('');

        componentEvent('opened', inst.ns, inst, $item[0]);
      } else {
        $content.height('');

        componentEvent('closed', inst.ns, inst, $item[0]);
      }
    };

    /**
     * 打开指定面板项
     * @param item 面板项的索引号或 DOM 元素或 CSS 选择器
     */
    Collapse.prototype.open = function (item) {
      var _this = this;
      var $item = _this._getItem(item);

      if (_this._isOpen($item)) {
        return;
      }

      // 关闭其他项
      if (_this.options.accordion) {
        _this.$collapse.children('.' + _this.class_item_open).each(function () {
          var $tmpItem = $(this);

          if ($tmpItem !== $item) {
            _this.close($tmpItem);
          }
        });
      }

      var $content = $item.children('.' + _this.class_body);

      $content
        .height($content[0].scrollHeight)
        .transitionEnd(function () {
          transitionEnd(_this, $content, $item);
        });

      componentEvent('open', _this.ns, _this, $item[0]);

      $item.addClass(_this.class_item_open);
    };

    /**
     * 关闭指定项
     * @param item 面板项的索引号或 DOM 元素或 CSS 选择器
     */
    Collapse.prototype.close = function (item) {
      var _this = this;
      var $item = _this._getItem(item);

      if (!_this._isOpen($item)) {
        return;
      }

      var $content = $item.children('.' + _this.class_body);

      componentEvent('close', _this.ns, _this, $item[0]);

      $item.removeClass(_this.class_item_open);

      $content
        .transition(0)
        .height($content[0].scrollHeight)
        .reflow()
        .transition('')
        .height('')
        .transitionEnd(function () {
          transitionEnd(_this, $content, $item);
        });
    };

    /**
     * 切换指定项的状态
     * @param item 面板项的索引号或 DOM 元素或 CSS 选择器或 JQ 对象
     */
    Collapse.prototype.toggle = function (item) {
      var _this = this;
      var $item = _this._getItem(item);

      if (_this._isOpen($item)) {
        _this.close($item);
      } else {
        _this.open($item);
      }
    };

    /**
     * 打开所有项
     */
    Collapse.prototype.openAll = function () {
      var _this = this;

      _this.$collapse.children('.' + _this.class_item).each(function () {
        var $tmpItem = $(this);

        if (!_this._isOpen($tmpItem)) {
          _this.open($tmpItem);
        }
      });
    };

    /**
     * 关闭所有项
     */
    Collapse.prototype.closeAll = function () {
      var _this = this;

      _this.$collapse.children('.' + _this.class_item).each(function () {
        var $tmpItem = $(this);

        if (_this._isOpen($tmpItem)) {
          _this.close($tmpItem);
        }
      });
    };

    return Collapse;
  })();

  /**
   * =============================================================================
   * ************   Collapse 折叠内容块插件   ************
   * =============================================================================
   */
  mdui.Collapse = (function () {

    function Collapse(selector, opts) {
      return new CollapsePrivate(selector, opts, 'collapse');
    }

    return Collapse;
  })();


  /**
   * =============================================================================
   * ************   Collapse 自定义属性   ************
   * =============================================================================
   */

  $(function () {
    mdui.mutation('[mdui-collapse]', function () {
      var $target = $(this);

      var inst = $target.data('mdui.collapse');
      if (!inst) {
        var options = parseOptions($target.attr('mdui-collapse'));
        inst = new mdui.Collapse($target, options);
        $target.data('mdui.collapse', inst);
      }
    });
  });


  /**
   * =============================================================================
   * ************   Table 表格   ************
   * =============================================================================
   */

  (function () {

    /**
     * 生成 checkbox 的 HTML 结构
     * @param tag
     * @returns {string}
     */
    var checkboxHTML = function (tag) {
      return '<' + tag + ' class="mdui-table-cell-checkbox">' +
               '<label class="mdui-checkbox">' +
                 '<input type="checkbox"/>' +
                 '<i class="mdui-checkbox-icon"></i>' +
               '</label>' +
             '</' + tag + '>';
    };

    /**
     * Table 表格
     * @param selector
     * @constructor
     */
    function Table(selector) {
      var _this = this;

      _this.$table = $(selector).eq(0);

      if (!_this.$table.length) {
        return;
      }

      _this.init();
    }

    /**
     * 初始化
     */
    Table.prototype.init = function () {
      var _this = this;

      _this.$thRow = _this.$table.find('thead tr');
      _this.$tdRows = _this.$table.find('tbody tr');
      _this.$tdCheckboxs = $();
      _this.selectable = _this.$table.hasClass('mdui-table-selectable');
      _this.selectedRow = 0;

      _this._updateThCheckbox();
      _this._updateTdCheckbox();
      _this._updateNumericCol();
    };

    /**
     * 更新表格行的 checkbox
     */
    Table.prototype._updateTdCheckbox = function () {
      var _this = this;

      _this.$tdRows.each(function () {
        var $tdRow = $(this);

        // 移除旧的 checkbox
        $tdRow.find('.mdui-table-cell-checkbox').remove();

        if (!_this.selectable) {
          return;
        }

        // 创建 DOM
        var $checkbox = $(checkboxHTML('td'))
          .prependTo($tdRow)
          .find('input[type="checkbox"]');

        // 默认选中的行
        if ($tdRow.hasClass('mdui-table-row-selected')) {
          $checkbox[0].checked = true;
          _this.selectedRow++;
        }

        // 所有行都选中后，选中表头；否则，不选中表头
        _this.$thCheckbox[0].checked = _this.selectedRow === _this.$tdRows.length;

        // 绑定事件
        $checkbox.on('change', function () {
          if ($checkbox[0].checked) {
            $tdRow.addClass('mdui-table-row-selected');
            _this.selectedRow++;
          } else {
            $tdRow.removeClass('mdui-table-row-selected');
            _this.selectedRow--;
          }

          // 所有行都选中后，选中表头；否则，不选中表头
          _this.$thCheckbox[0].checked = _this.selectedRow === _this.$tdRows.length;
        });

        _this.$tdCheckboxs = _this.$tdCheckboxs.add($checkbox);
      });
    };

    /**
     * 更新表头的 checkbox
     */
    Table.prototype._updateThCheckbox = function () {
      var _this = this;

      // 移除旧的 checkbox
      _this.$thRow.find('.mdui-table-cell-checkbox').remove();

      if (!_this.selectable) {
        return;
      }

      _this.$thCheckbox = $(checkboxHTML('th'))
        .prependTo(_this.$thRow)
        .find('input[type="checkbox"]')
        .on('change', function () {

          var isCheckedAll = _this.$thCheckbox[0].checked;
          _this.selectedRow = isCheckedAll ? _this.$tdRows.length : 0;

          _this.$tdCheckboxs.each(function (i, checkbox) {
            checkbox.checked = isCheckedAll;
          });

          _this.$tdRows.each(function (i, row) {
            $(row)[isCheckedAll ? 'addClass' : 'removeClass']('mdui-table-row-selected');
          });

        });
    };

    /**
     * 更新数值列
     */
    Table.prototype._updateNumericCol = function () {
      var _this = this;
      var $th;
      var $tdRow;

      _this.$thRow.find('th').each(function (i, th) {
        $th = $(th);

        _this.$tdRows.each(function () {
          $tdRow = $(this);
          var method = $th.hasClass('mdui-table-col-numeric') ? 'addClass' : 'removeClass';
          $tdRow.find('td').eq(i)[method]('mdui-table-col-numeric');
        });
      });
    };

    /**
     * 初始化表格
     */
    mdui.mutation('.mdui-table', function () {
      var $table = $(this);
      if (!$table.data('mdui.table')) {
        $table.data('mdui.table', new Table($table));
      }
    });

    /**
     * 更新表格
     */
    mdui.updateTables = function () {
      $(arguments.length ? arguments[0] : '.mdui-table').each(function () {
        var $table = $(this);
        var inst = $table.data('mdui.table');

        if (inst) {
          inst.init();
        } else {
          $table.data('mdui.table', new Table($table));
        }
      });
    };

  })();


  /**
   * =============================================================================
   * ************   涟漪   ************
   * =============================================================================
   *
   * Inspired by https://github.com/nolimits4web/Framework7/blob/master/src/js/fast-clicks.js
   * https://github.com/nolimits4web/Framework7/blob/master/LICENSE
   *
   * Inspired by https://github.com/fians/Waves
   */

  (function () {

    var Ripple = {

      /**
       * 延时，避免手指滑动时也触发涟漪（单位：毫秒）
       */
      delay: 200,

      /**
       * 显示涟漪动画
       * @param e
       * @param $ripple
       */
      show: function (e, $ripple) {

        // 鼠标右键不产生涟漪
        if (e.button === 2) {
          return;
        }

        // 点击位置坐标
        var tmp;
        if ('touches' in e && e.touches.length) {
          tmp = e.touches[0];
        } else {
          tmp = e;
        }

        var touchStartX = tmp.pageX;
        var touchStartY = tmp.pageY;

        // 涟漪位置
        var offset = $ripple.offset();
        var center = {
          x: touchStartX - offset.left,
          y: touchStartY - offset.top,
        };

        var height = $ripple.innerHeight();
        var width = $ripple.innerWidth();
        var diameter = Math.max(
          Math.pow((Math.pow(height, 2) + Math.pow(width, 2)), 0.5), 48
        );

        // 涟漪扩散动画
        var translate =
          'translate3d(' + (-center.x + width / 2) + 'px, ' + (-center.y + height / 2) + 'px, 0) ' +
          'scale(1)';

        // 涟漪的 DOM 结构
        $('<div class="mdui-ripple-wave" style="' +
          'width: ' + diameter + 'px; ' +
          'height: ' + diameter + 'px; ' +
          'margin-top:-' + diameter / 2 + 'px; ' +
          'margin-left:-' + diameter / 2 + 'px; ' +
          'left:' + center.x + 'px; ' +
          'top:' + center.y + 'px;">' +
          '</div>')

          // 缓存动画效果
          .data('translate', translate)

          .prependTo($ripple)
          .reflow()
          .transform(translate);
      },

      /**
       * 隐藏涟漪动画
       */
      hide: function (e, element) {
        var $ripple = $(element || this);

        $ripple.children('.mdui-ripple-wave').each(function () {
          removeRipple($(this));
        });

        $ripple.off('touchmove touchend touchcancel mousemove mouseup mouseleave', Ripple.hide);
      },
    };

    /**
     * 隐藏并移除涟漪
     * @param $wave
     */
    function removeRipple($wave) {
      if (!$wave.length || $wave.data('isRemoved')) {
        return;
      }

      $wave.data('isRemoved', true);

      var removeTimeout = setTimeout(function () {
        $wave.remove();
      }, 400);

      var translate = $wave.data('translate');

      $wave
        .addClass('mdui-ripple-wave-fill')
        .transform(translate.replace('scale(1)', 'scale(1.01)'))
        .transitionEnd(function () {
          clearTimeout(removeTimeout);

          $wave
            .addClass('mdui-ripple-wave-out')
            .transform(translate.replace('scale(1)', 'scale(1.01)'));

          removeTimeout = setTimeout(function () {
            $wave.remove();
          }, 700);

          setTimeout(function () {
            $wave.transitionEnd(function () {
              clearTimeout(removeTimeout);
              $wave.remove();
            });
          }, 0);
        });
    }

    /**
     * 显示涟漪，并绑定 touchend 等事件
     * @param e
     */
    function showRipple(e) {
      if (!TouchHandler.isAllow(e)) {
        return;
      }

      TouchHandler.register(e);

      // Chrome 59 点击滚动条时，会在 document 上触发事件
      if (e.target === document) {
        return;
      }

      var $ripple;
      var $target = $(e.target);

      // 获取含 .mdui-ripple 类的元素
      if ($target.hasClass('mdui-ripple')) {
        $ripple = $target;
      } else {
        $ripple = $target.parents('.mdui-ripple').eq(0);
      }

      if ($ripple.length) {

        // 禁用状态的元素上不产生涟漪效果
        if ($ripple[0].disabled || $ripple.attr('disabled') !== null) {
          return;
        }

        if (e.type === 'touchstart') {
          var hidden = false;

          // toucstart 触发指定时间后开始涟漪动画
          var timer = setTimeout(function () {
            timer = null;
            Ripple.show(e, $ripple);
          }, Ripple.delay);

          var hideRipple = function (hideEvent) {
            // 如果手指没有移动，且涟漪动画还没有开始，则开始涟漪动画
            if (timer) {
              clearTimeout(timer);
              timer = null;
              Ripple.show(e, $ripple);
            }

            if (!hidden) {
              hidden = true;
              Ripple.hide(hideEvent, $ripple);
            }
          };

          // 手指移动后，移除涟漪动画
          var touchMove = function (moveEvent) {
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }

            hideRipple(moveEvent);
          };

          $ripple
            .on('touchmove', touchMove)
            .on('touchend touchcancel', hideRipple);

        } else {
          Ripple.show(e, $ripple);
          $ripple.on('touchmove touchend touchcancel mousemove mouseup mouseleave', Ripple.hide);
        }
      }
    }

    // 初始化绑定的事件
    $document
      .on(TouchHandler.start, showRipple)
      .on(TouchHandler.unlock, TouchHandler.register);
  })();


  /**
   * =============================================================================
   * ************   Text Field 文本框   ************
   * =============================================================================
   */

  (function () {

    var getProp = function (obj, prop) {
      return (
        typeof obj === 'object' &&
        obj !== null &&
        obj[prop] !== undefined &&
        obj[prop]
      ) ? obj[prop] : false;
    };

    /**
     * 输入框事件
     * @param e
     */
    var inputEvent = function (e) {
      var input = e.target;
      var $input = $(input);
      var event = e.type;
      var value = $input.val();

      // reInit 为 true 时，需要重新初始化文本框
      var reInit = getProp(e.detail, 'reInit');

      // domLoadedEvent 为 true 时，为 DOM 加载完毕后自动触发的事件
      var domLoadedEvent = getProp(e.detail, 'domLoadedEvent');

      // 文本框类型
      var type = $input.attr('type') || '';
      if (['checkbox', 'button', 'submit', 'range', 'radio', 'image'].indexOf(type) >= 0) {
        return;
      }

      var $textField = $input.parent('.mdui-textfield');

      // 输入框是否聚焦
      if (event === 'focus') {
        $textField.addClass('mdui-textfield-focus');
      }

      if (event === 'blur') {
        $textField.removeClass('mdui-textfield-focus');
      }

      // 输入框是否为空
      if (event === 'blur' || event === 'input') {
        $textField[(value && value !== '') ? 'addClass' : 'removeClass']('mdui-textfield-not-empty');
      }

      // 输入框是否禁用
      $textField[input.disabled ? 'addClass' : 'removeClass']('mdui-textfield-disabled');

      // 表单验证
      if ((event === 'input' || event === 'blur') && !domLoadedEvent) {
        if (input.validity) {
          var method = input.validity.valid ? 'removeClass' : 'addClass';
          $textField[method]('mdui-textfield-invalid-html5');
        }
      }

      // textarea 高度自动调整
      if (e.target.nodeName.toLowerCase() === 'textarea') {

        // IE bug：textarea 的值仅为多个换行，不含其他内容时，textarea 的高度不准确
        //         此时，在计算高度前，在值的开头加入一个空格，计算完后，移除空格
        var inputValue = $input.val();
        var hasExtraSpace = false;
        if (inputValue.replace(/[\r\n]/g, '') === '') {
          $input.val(' ' + inputValue);
          hasExtraSpace = true;
        }

        // 设置 textarea 高度
        $input.height('');
        var height = $input.height();
        var scrollHeight = input.scrollHeight;

        if (scrollHeight > height) {
          $input.height(scrollHeight);
        }

        // 计算完，还原 textarea 的值
        if (hasExtraSpace) {
          $input.val(inputValue);
        }
      }

      // 实时字数统计
      if (reInit) {
        $textField
          .find('.mdui-textfield-counter')
          .remove();
      }

      var maxlength = $input.attr('maxlength');
      if (maxlength) {
        if (reInit || domLoadedEvent) {
          $('<div class="mdui-textfield-counter">' +
              '<span class="mdui-textfield-counter-inputed"></span> / ' + maxlength +
            '</div>').appendTo($textField);
        }

        // 字符长度，确保统计方式和 maxlength 一致
        var inputed = value.length + value.split('\n').length - 1;
        $textField.find('.mdui-textfield-counter-inputed').text(inputed.toString());
      }

      // 含 帮助文本、错误提示、字数统计 时，增加文本框底部内边距
      if (
        $textField.find('.mdui-textfield-helper').length ||
        $textField.find('.mdui-textfield-error').length ||
        maxlength
      ) {
        $textField.addClass('mdui-textfield-has-bottom');
      }
    };

    // 绑定事件
    $document.on('input focus blur', '.mdui-textfield-input', { useCapture: true }, inputEvent);

    // 可展开文本框展开
    $document.on('click', '.mdui-textfield-expandable .mdui-textfield-icon', function () {
      $(this)

        // 展开文本框
        .parents('.mdui-textfield')
        .addClass('mdui-textfield-expanded')

        // 聚焦到输入框
        .find('.mdui-textfield-input')[0].focus();
    });

    // 可展开文本框关闭
    $document.on('click', '.mdui-textfield-expanded .mdui-textfield-close', function () {
      $(this)

        // 关闭文本框
        .parents('.mdui-textfield')
        .removeClass('mdui-textfield-expanded')

        // 清空输入框
        .find('.mdui-textfield-input')
        .val('');
    });

    /**
     * 通过 JS 更新了表单内容，需要重新进行表单处理
     * @param- 如果传入了 .mdui-textfield 所在的 DOM 元素，则更新该文本框；否则，更新所有文本框
     */
    mdui.updateTextFields = function () {
      $(arguments.length ? arguments[0] : '.mdui-textfield').each(function () {
        $(this)
          .find('.mdui-textfield-input')
          .trigger('input', {
            reInit: true,
          });
      });
    };

    /**
     * 初始化文本框
     */
    mdui.mutation('.mdui-textfield', function () {
      $(this)
        .find('.mdui-textfield-input')
        .trigger('input', {
          domLoadedEvent: true,
        });
    });

  })();


  /**
   * =============================================================================
   * ************   Slider 滑块   ************
   * =============================================================================
   */

  (function () {

    /**
     * 滑块的值变更后修改滑块样式
     * @param $slider
     */
    var updateValueStyle = function ($slider) {
      var data = $slider.data();

      var $track = data.$track;
      var $fill = data.$fill;
      var $thumb = data.$thumb;
      var $input = data.$input;
      var min = data.min;
      var max = data.max;
      var isDisabled = data.disabled;
      var isDiscrete = data.discrete;
      var $thumbText = data.$thumbText;
      var value = $input.val();
      var percent = (value - min) / (max - min) * 100;

      $fill.width(percent + '%');
      $track.width((100 - percent) + '%');

      if (isDisabled) {
        $fill.css('padding-right', '6px');
        $track.css('padding-left', '6px');
      }

      $thumb.css('left', percent + '%');

      if (isDiscrete) {
        $thumbText.text(value);
      }

      $slider[parseFloat(percent) === 0 ? 'addClass' : 'removeClass']('mdui-slider-zero');
    };

    /**
     * 重新初始化
     * @param $slider
     */
    var reInit = function ($slider) {
      var $track = $('<div class="mdui-slider-track"></div>');
      var $fill = $('<div class="mdui-slider-fill"></div>');
      var $thumb = $('<div class="mdui-slider-thumb"></div>');
      var $input = $slider.find('input[type="range"]');

      // 禁用状态
      var isDisabled = $input[0].disabled;
      $slider[isDisabled ? 'addClass' : 'removeClass']('mdui-slider-disabled');

      // 重新填充 HTML
      $slider.find('.mdui-slider-track').remove();
      $slider.find('.mdui-slider-fill').remove();
      $slider.find('.mdui-slider-thumb').remove();
      $slider.append($track).append($fill).append($thumb);

      // 间续型滑块
      var isDiscrete = $slider.hasClass('mdui-slider-discrete');

      var $thumbText;
      if (isDiscrete) {
        $thumbText = $('<span></span>');
        $thumb.empty().append($thumbText);
      }

      $slider.data({
        $track: $track,
        $fill: $fill,
        $thumb: $thumb,
        $input: $input,
        min: $input.attr('min'),    // 滑块最小值
        max: $input.attr('max'),    // 滑块最大值
        disabled: isDisabled,       // 是否禁用状态
        discrete: isDiscrete,       // 是否是间续型滑块
        $thumbText: $thumbText,      // 间续型滑块的数值
      });

      // 设置默认值
      updateValueStyle($slider);
    };

    var rangeSelector = '.mdui-slider input[type="range"]';

    $document

      // 滑动滑块事件
      .on('input change', rangeSelector, function () {
        var $slider = $(this).parent();
        updateValueStyle($slider);
      })

      // 开始触摸滑块事件
      .on(TouchHandler.start, rangeSelector, function (e) {
        if (!TouchHandler.isAllow(e)) {
          return;
        }

        TouchHandler.register(e);

        if (!this.disabled) {
          var $slider = $(this).parent();
          $slider.addClass('mdui-slider-focus');
        }
      })

      // 结束触摸滑块事件
      .on(TouchHandler.end, rangeSelector, function (e) {
        if (!TouchHandler.isAllow(e)) {
          return;
        }

        if (!this.disabled) {
          var $slider = $(this).parent();
          $slider.removeClass('mdui-slider-focus');
        }
      })

      .on(TouchHandler.unlock, rangeSelector, TouchHandler.register);

    /**
     * 页面加载完后自动初始化（未初始化时，可以调用该方法初始化）
     */
    mdui.mutation('.mdui-slider', function () {
      reInit($(this));
    });

    /**
     * 重新初始化滑块（强制重新初始化）
     */
    mdui.updateSliders = function () {
      $(arguments.length ? arguments[0] : '.mdui-slider').each(function () {
        reInit($(this));
      });
    };
  })();


  /**
   * =============================================================================
   * ************   Fab 浮动操作按钮   ************
   * =============================================================================
   */

  mdui.Fab = (function () {

    /**
     * 默认参数
     * @type {{}}
     */
    var DEFAULT = {
      trigger: 'hover',      // 触发方式 ['hover', 'click']
    };

    /**
     * 浮动操作按钮实例
     * @param selector 选择器或 HTML 字符串或 DOM 元素或 JQ 对象
     * @param opts
     * @constructor
     */
    function Fab(selector, opts) {
      var _this = this;

      _this.$fab = $(selector).eq(0);
      if (!_this.$fab.length) {
        return;
      }

      // 已通过 data 属性实例化过，不再重复实例化
      var oldInst = _this.$fab.data('mdui.fab');
      if (oldInst) {
        return oldInst;
      }

      _this.options = $.extend({}, DEFAULT, (opts || {}));
      _this.state = 'closed';

      _this.$btn = _this.$fab.find('.mdui-fab');
      _this.$dial = _this.$fab.find('.mdui-fab-dial');
      _this.$dialBtns = _this.$dial.find('.mdui-fab');

      if (_this.options.trigger === 'hover') {
        _this.$btn
          .on('touchstart mouseenter', function () {
            _this.open();
          });

        _this.$fab
          .on('mouseleave', function () {
            _this.close();
          });
      }

      if (_this.options.trigger === 'click') {
        _this.$btn
          .on(TouchHandler.start, function () {
            _this.open();
          });
      }

      // 触摸屏幕其他地方关闭快速拨号
      $document.on(TouchHandler.start, function (e) {
        if (!$(e.target).parents('.mdui-fab-wrapper').length) {
          _this.close();
        }
      });
    }

    /**
     * 打开菜单
     */
    Fab.prototype.open = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        return;
      }

      // 为菜单中的按钮添加不同的 transition-delay
      _this.$dialBtns.each(function (index, btn) {
        btn.style['transition-delay'] = btn.style['-webkit-transition-delay'] =
          15 * (_this.$dialBtns.length - index) + 'ms';
      });

      _this.$dial
        .css('height', 'auto')
        .addClass('mdui-fab-dial-show');

      // 如果按钮中存在 .mdui-fab-opened 的图标，则进行图标切换
      if (_this.$btn.find('.mdui-fab-opened').length) {
        _this.$btn.addClass('mdui-fab-opened');
      }

      _this.state = 'opening';
      componentEvent('open', 'fab', _this, _this.$fab);

      // 打开顺序为从下到上逐个打开，最上面的打开后才表示动画完成
      _this.$dialBtns.eq(0).transitionEnd(function () {
        if (_this.$btn.hasClass('mdui-fab-opened')) {
          _this.state = 'opened';
          componentEvent('opened', 'fab', _this, _this.$fab);
        }
      });
    };

    /**
     * 关闭菜单
     */
    Fab.prototype.close = function () {
      var _this = this;

      if (_this.state === 'closing' || _this.state === 'closed') {
        return;
      }

      // 为菜单中的按钮添加不同的 transition-delay
      _this.$dialBtns.each(function (index, btn) {
        btn.style['transition-delay'] = btn.style['-webkit-transition-delay'] = 15 * index + 'ms';
      });

      _this.$dial.removeClass('mdui-fab-dial-show');
      _this.$btn.removeClass('mdui-fab-opened');
      _this.state = 'closing';
      componentEvent('close', 'fab', _this, _this.$fab);

      // 从上往下依次关闭，最后一个关闭后才表示动画完成
      _this.$dialBtns.eq(-1).transitionEnd(function () {
        if (!_this.$btn.hasClass('mdui-fab-opened')) {
          _this.state = 'closed';
          componentEvent('closed', 'fab', _this, _this.$fab);
          _this.$dial.css('height', 0);
        }
      });
    };

    /**
     * 切换菜单的打开状态
     */
    Fab.prototype.toggle = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        _this.close();
      } else if (_this.state === 'closing' || _this.state === 'closed') {
        _this.open();
      }
    };

    /**
     * 获取当前菜单状态
     * @returns {'opening'|'opened'|'closing'|'closed'}
     */
    Fab.prototype.getState = function () {
      return this.state;
    };

    /**
     * 以动画的形式显示浮动操作按钮
     */
    Fab.prototype.show = function () {
      this.$fab.removeClass('mdui-fab-hide');
    };

    /**
     * 以动画的形式隐藏浮动操作按钮
     */
    Fab.prototype.hide = function () {
      this.$fab.addClass('mdui-fab-hide');
    };

    return Fab;
  })();


  /**
   * =============================================================================
   * ************   Fab DATA API   ************
   * =============================================================================
   */

  $(function () {
    // mouseenter 不冒泡，无法进行事件委托，这里用 mouseover 代替。
    // 不管是 click 、 mouseover 还是 touchstart ，都先初始化。

    $document.on('touchstart mousedown mouseover', '[mdui-fab]', function (e) {
      var $this = $(this);

      var inst = $this.data('mdui.fab');
      if (!inst) {
        var options = parseOptions($this.attr('mdui-fab'));
        inst = new mdui.Fab($this, options);
        $this.data('mdui.fab', inst);
      }
    });
  });


  /**
   * =============================================================================
   * ************   Select 下拉选择   ************
   * =============================================================================
   */

  mdui.Select = (function () {

    /**
     * 默认参数
     */
    var DEFAULT = {
      position: 'auto',                // 下拉框位置，auto、bottom、top
      gutter: 16,                      // 菜单与窗口上下边框至少保持多少间距
    };

    /**
     * 调整菜单位置
     * @param _this Select 实例
     */
    var readjustMenu = function (_this) {
      // 窗口高度
      var windowHeight = $window.height();

      // 配置参数
      var gutter = _this.options.gutter;
      var position = _this.options.position;

      // mdui-select 高度
      var selectHeight = parseInt(_this.$select.height());

      // 菜单项高度
      var $menuItemFirst = _this.$items.eq(0);
      var menuItemHeight = parseInt($menuItemFirst.height());
      var menuItemMargin = parseInt($menuItemFirst.css('margin-top'));

      // 菜单高度
      var menuWidth = parseFloat(_this.$select.width() + 0.01); // 必须比真实宽度多一点，不然会出现省略号
      var menuHeight = menuItemHeight * _this.size + menuItemMargin * 2;

      // var menuRealHeight = menuItemHeight * _this.$items.length + menuItemMargin * 2;

      // 菜单是否出现了滚动条
      //var isMenuScrollable = menuRealHeight > menuHeight;

      // select 在窗口中的位置
      var selectTop = _this.$select[0].getBoundingClientRect().top;

      var transformOriginY;
      var menuMarginTop;

      // position 为 auto 时
      if (position === 'auto') {

        // 菜单高度不能超过窗口高度
        var heightTemp = windowHeight - gutter * 2;
        if (menuHeight > heightTemp) {
          menuHeight = heightTemp;
        }

        // 菜单的 margin-top
        menuMarginTop = -(
          menuItemMargin + _this.selectedIndex * menuItemHeight +
          (menuItemHeight - selectHeight) / 2
        );
        var menuMarginTopMax = -(
          menuItemMargin + (_this.size - 1) * menuItemHeight +
          (menuItemHeight - selectHeight) / 2
        );
        if (menuMarginTop < menuMarginTopMax) {
          menuMarginTop = menuMarginTopMax;
        }

        // 菜单不能超出窗口
        var menuTop = selectTop + menuMarginTop;

        if (menuTop < gutter) {
          // 不能超出窗口上方
          menuMarginTop = -(selectTop - gutter);
        } else if (menuTop + menuHeight + gutter > windowHeight) {
          // 不能超出窗口下方
          menuMarginTop = -(selectTop + menuHeight + gutter - windowHeight);
        }

        // transform 的 Y 轴坐标
        transformOriginY = (_this.selectedIndex * menuItemHeight + menuItemHeight / 2 + menuItemMargin) + 'px';
      } else if (position === 'bottom') {
        menuMarginTop = selectHeight;
        transformOriginY = '0px';
      } else if (position === 'top') {
        menuMarginTop = -menuHeight - 1;
        transformOriginY = '100%';
      }

      // 设置样式
      _this.$select.width(menuWidth);
      _this.$menu
        .width(menuWidth)
        .height(menuHeight)
        .css({
          'margin-top': menuMarginTop + 'px',
          'transform-origin':
          'center ' + transformOriginY + ' 0',
        });
    };

    /**
     * 下拉选择
     * @param selector
     * @param opts
     * @constructor
     */
    function Select(selector, opts) {
      var _this = this;

      var $selectNative =  _this.$selectNative = $(selector).eq(0);
      if (!$selectNative.length) {
        return;
      }

      // 已通过自定义属性实例化过，不再重复实例化
      var oldInst = $selectNative.data('mdui.select');
      if (oldInst) {
        return oldInst;
      }

      $selectNative.hide();

      _this.options = $.extend({}, DEFAULT, (opts || {}));

      // 为当前 select 生成唯一 ID
      _this.uniqueID = $.guid();

      _this.state = 'closed';

      // 生成 select
      _this.handleUpdate();

      // 点击 select 外面区域关闭
      $document.on('click touchstart', function (e) {
        var $target = $(e.target);
        if (
          (_this.state === 'opening' || _this.state === 'opened') &&
          !$target.is(_this.$select) &&
          !$.contains(_this.$select[0], $target[0])
        ) {
          _this.close();
        }
      });
    }

    /**
     * 对原生 select 组件进行了修改后，需要调用该方法
     */
    Select.prototype.handleUpdate = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        _this.close();
      }

      var $selectNative = _this.$selectNative;

      // 当前的值和文本
      _this.value = $selectNative.val();
      _this.text = '';

      // 生成 HTML
      // 菜单项
      _this.$items = $();
      $selectNative.find('option').each(function (index, option) {
        var data = {
          value: option.value,
          text: option.textContent,
          disabled: option.disabled,
          selected: _this.value === option.value,
          index: index,
        };

        if (_this.value === data.value) {
          _this.text = data.text;
          _this.selectedIndex = index;
        }

        _this.$items = _this.$items.add(
          $('<div class="mdui-select-menu-item mdui-ripple"' +
            (data.disabled ? ' disabled' : '') +
            (data.selected ? ' selected' : '') + '>' + data.text + '</div>')
            .data(data)
        );
      });

      // selected
      _this.$selected = $('<span class="mdui-select-selected">' + _this.text + '</span>');

      // select
      _this.$select =
        $(
          '<div class="mdui-select mdui-select-position-' + _this.options.position + '" ' +
          'style="' + _this.$selectNative.attr('style') + '" ' +
          'id="' + _this.uniqueID + '"></div>'
        )
          .show()
          .append(_this.$selected);

      // menu
      _this.$menu =
        $('<div class="mdui-select-menu"></div>')
          .appendTo(_this.$select)
          .append(_this.$items);

      $('#' + _this.uniqueID).remove();
      $selectNative.after(_this.$select);

      // 根据 select 的 size 属性设置高度，默认为 6
      _this.size = _this.$selectNative.attr('size');

      if (!_this.size) {
        _this.size = _this.$items.length;
        if (_this.size > 8) {
          _this.size = 8;
        }
      }

      if (_this.size < 2) {
        _this.size = 2;
      }

      // 点击选项时关闭下拉菜单
      _this.$items.on('click', function () {
        if (_this.state === 'closing') {
          return;
        }

        var $item = $(this);

        if ($item.data('disabled')) {
          return;
        }

        var itemData = $item.data();

        _this.$selected.text(itemData.text);
        $selectNative.val(itemData.value);
        _this.$items.removeAttr('selected');
        $item.attr('selected', '');
        _this.selectedIndex = itemData.index;
        _this.value = itemData.value;
        _this.text = itemData.text;
        $selectNative.trigger('change');

        _this.close();
      });

      // 点击 select 时打开下拉菜单
      _this.$select.on('click', function (e) {
        var $target = $(e.target);

        // 在菜单上点击时不打开
        if ($target.is('.mdui-select-menu') || $target.is('.mdui-select-menu-item')) {
          return;
        }

        _this.toggle();
      });
    };

    /**
     * 动画结束回调
     * @param inst
     */
    var transitionEnd = function (inst) {
      inst.$select.removeClass('mdui-select-closing');

      if (inst.state === 'opening') {
        inst.state = 'opened';
        componentEvent('opened', 'select', inst, inst.$selectNative);

        inst.$menu.css('overflow-y', 'auto');
      }

      if (inst.state === 'closing') {
        inst.state = 'closed';
        componentEvent('closed', 'select', inst, inst.$selectNative);

        // 恢复样式
        inst.$select.width('');
        inst.$menu.css({
          'margin-top': '',
          height: '',
          width: '',
        });
      }
    };

    /**
     * 打开 Select
     */
    Select.prototype.open = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        return;
      }

      _this.state = 'opening';
      componentEvent('open', 'select', _this, _this.$selectNative);

      readjustMenu(_this);

      _this.$select.addClass('mdui-select-open');

      _this.$menu.transitionEnd(function () {
        transitionEnd(_this);
      });
    };

    /**
     * 关闭 Select
     */
    Select.prototype.close = function () {
      var _this = this;

      if (_this.state === 'closing' || _this.state === 'closed') {
        return;
      }

      _this.state = 'closing';
      componentEvent('close', 'select', _this, _this.$selectNative);

      _this.$menu.css('overflow-y', '');

      _this.$select
        .removeClass('mdui-select-open')
        .addClass('mdui-select-closing');
      _this.$menu.transitionEnd(function () {
        transitionEnd(_this);
      });
    };

    /**
     * 切换 Select 显示状态
     */
    Select.prototype.toggle = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        _this.close();
      } else if (_this.state === 'closing' || _this.state === 'closed') {
        _this.open();
      }
    };

    return Select;
  })();


  /**
   * =============================================================================
   * ************   Select 下拉选择   ************
   * =============================================================================
   */

  $(function () {
    mdui.mutation('[mdui-select]', function () {
      var $this = $(this);
      var inst = $this.data('mdui.select');
      if (!inst) {
        inst = new mdui.Select($this, parseOptions($this.attr('mdui-select')));
        $this.data('mdui.select', inst);
      }
    });
  });


  /**
   * =============================================================================
   * ************   Appbar   ************
   * =============================================================================
   * 滚动时自动隐藏应用栏
   * mdui-appbar-scroll-hide
   * mdui-appbar-scroll-toolbar-hide
   */

  $(function () {
    // 滚动时隐藏应用栏
    mdui.mutation('.mdui-appbar-scroll-hide', function () {
      var $this = $(this);
      $this.data('mdui.headroom', new mdui.Headroom($this));
    });

    // 滚动时只隐藏应用栏中的工具栏
    mdui.mutation('.mdui-appbar-scroll-toolbar-hide', function () {
      var $this = $(this);
      var inst = new mdui.Headroom($this, {
        pinnedClass: 'mdui-headroom-pinned-toolbar',
        unpinnedClass: 'mdui-headroom-unpinned-toolbar',
      });
      $this.data('mdui.headroom', inst);
    });
  });


  /**
   * =============================================================================
   * ************   Tab   ************
   * =============================================================================
   */

  mdui.Tab = (function () {

    var DEFAULT = {
      trigger: 'click',       // 触发方式 click: 鼠标点击切换 hover: 鼠标悬浮切换
      //animation: false,       // 切换时是否显示动画
      loop: false,            // 为true时，在最后一个选项卡时调用 next() 方法会回到第一个选项卡
    };

    // 元素是否已禁用
    var isDisabled = function ($ele) {
      return $ele[0].disabled || $ele.attr('disabled') !== null;
    };

    /**
     * 选项卡
     * @param selector
     * @param opts
     * @returns {*}
     * @constructor
     */
    function Tab(selector, opts) {
      var _this = this;

      _this.$tab = $(selector).eq(0);
      if (!_this.$tab.length) {
        return;
      }

      // 已通过自定义属性实例化过，不再重复实例化
      var oldInst = _this.$tab.data('mdui.tab');
      if (oldInst) {
        return oldInst;
      }

      _this.options = $.extend({}, DEFAULT, (opts || {}));
      _this.$tabs = _this.$tab.children('a');
      _this.$indicator = $('<div class="mdui-tab-indicator"></div>').appendTo(_this.$tab);
      _this.activeIndex = false; // 为 false 时表示没有激活的选项卡，或不存在选项卡

      // 根据 url hash 获取默认激活的选项卡
      var hash = location.hash;
      if (hash) {
        _this.$tabs.each(function (i, tab) {
          if ($(tab).attr('href') === hash) {
            _this.activeIndex = i;
            return false;
          }
        });
      }

      // 含 mdui-tab-active 的元素默认激活
      if (_this.activeIndex === false) {
        _this.$tabs.each(function (i, tab) {
          if ($(tab).hasClass('mdui-tab-active')) {
            _this.activeIndex = i;
            return false;
          }
        });
      }

      // 存在选项卡时，默认激活第一个选项卡
      if (_this.$tabs.length && _this.activeIndex === false) {
        _this.activeIndex = 0;
      }

      // 设置激活状态选项卡
      _this._setActive();

      // 监听窗口大小变化事件，调整指示器位置
      $window.on('resize', $.throttle(function () {
        _this._setIndicatorPosition();
      }, 100));

      // 监听点击选项卡事件
      _this.$tabs.each(function (i, tab) {
        _this._bindTabEvent(tab);
      });
    }

    /**
     * 绑定在 Tab 上点击或悬浮的事件
     * @private
     */
    Tab.prototype._bindTabEvent = function (tab) {
      var _this = this;
      var $tab = $(tab);

      // 点击或鼠标移入触发的事件
      var clickEvent = function (e) {
        // 禁用状态的选项无法选中
        if (isDisabled($tab)) {
          e.preventDefault();
          return;
        }

        _this.activeIndex = _this.$tabs.index(tab);
        _this._setActive();
      };

      // 无论 trigger 是 click 还是 hover，都会响应 click 事件
      $tab.on('click', clickEvent);

      // trigger 为 hover 时，额外响应 mouseenter 事件
      if (_this.options.trigger === 'hover') {
        $tab.on('mouseenter', clickEvent);
      }

      $tab.on('click', function (e) {
        // 阻止链接的默认点击动作
        if ($tab.attr('href').indexOf('#') === 0) {
          e.preventDefault();
        }
      });
    };

    /**
     * 设置激活状态的选项卡
     * @private
     */
    Tab.prototype._setActive = function () {
      var _this = this;

      _this.$tabs.each(function (i, tab) {
        var $tab = $(tab);
        var targetId = $tab.attr('href');

        // 设置选项卡激活状态
        if (i === _this.activeIndex && !isDisabled($tab)) {
          if (!$tab.hasClass('mdui-tab-active')) {
            componentEvent('change', 'tab', _this, _this.$tab, {
              index: _this.activeIndex,
              id: targetId.substr(1),
            });
            componentEvent('show', 'tab', _this, $tab);

            $tab.addClass('mdui-tab-active');
          }

          $(targetId).show();
          _this._setIndicatorPosition();
        } else {
          $tab.removeClass('mdui-tab-active');
          $(targetId).hide();
        }
      });
    };

    /**
     * 设置选项卡指示器的位置
     */
    Tab.prototype._setIndicatorPosition = function () {
      var _this = this;
      var $activeTab;
      var activeTabOffset;

      // 选项卡数量为 0 时，不显示指示器
      if (_this.activeIndex === false) {
        _this.$indicator.css({
          left: 0,
          width: 0,
        });

        return;
      }

      $activeTab = _this.$tabs.eq(_this.activeIndex);
      if (isDisabled($activeTab)) {
        return;
      }

      activeTabOffset = $activeTab.offset();
      _this.$indicator.css({
        left: activeTabOffset.left + _this.$tab[0].scrollLeft -
              _this.$tab[0].getBoundingClientRect().left + 'px',
        width: $activeTab.width() + 'px',
      });
    };

    /**
     * 切换到下一个选项卡
     */
    Tab.prototype.next = function () {
      var _this = this;

      if (_this.activeIndex === false) {
        return;
      }

      if (_this.$tabs.length > _this.activeIndex + 1) {
        _this.activeIndex++;
      } else if (_this.options.loop) {
        _this.activeIndex = 0;
      }

      _this._setActive();
    };

    /**
     * 切换到上一个选项卡
     */
    Tab.prototype.prev = function () {
      var _this = this;

      if (_this.activeIndex === false) {
        return;
      }

      if (_this.activeIndex > 0) {
        _this.activeIndex--;
      } else if (_this.options.loop) {
        _this.activeIndex = _this.$tabs.length - 1;
      }

      _this._setActive();
    };

    /**
     * 显示指定序号或指定id的选项卡
     * @param index 从0开始的序号，或以#开头的id
     */
    Tab.prototype.show = function (index) {
      var _this = this;

      if (_this.activeIndex === false) {
        return;
      }

      if (parseInt(index) === index) {
        _this.activeIndex = index;
      } else {
        _this.$tabs.each(function (i, tab) {
          if (tab.id === index) {
            _this.activeIndex = i;
            return false;
          }
        });
      }

      _this._setActive();
    };

    /**
     * 在父元素的宽度变化时，需要调用该方法重新调整指示器位置
     * 在添加或删除选项卡时，需要调用该方法
     */
    Tab.prototype.handleUpdate = function () {
      var _this = this;

      var $oldTabs = _this.$tabs;               // 旧的 tabs JQ对象
      var $newTabs = _this.$tab.children('a');  // 新的 tabs JQ对象
      var oldTabsEle = $oldTabs.get();          // 旧 tabs 的元素数组
      var newTabsEle = $newTabs.get();          // 新的 tabs 元素数组

      if (!$newTabs.length) {
        _this.activeIndex = false;
        _this.$tabs = $newTabs;
        _this._setIndicatorPosition();

        return;
      }

      // 重新遍历选项卡，找出新增的选项卡
      $newTabs.each(function (i, tab) {
        // 有新增的选项卡
        if (oldTabsEle.indexOf(tab) < 0) {
          _this._bindTabEvent(tab);

          if (_this.activeIndex === false) {
            _this.activeIndex = 0;
          } else if (i <= _this.activeIndex) {
            _this.activeIndex++;
          }
        }
      });

      // 找出被移除的选项卡
      $oldTabs.each(function (i, tab) {
        // 有被移除的选项卡
        if (newTabsEle.indexOf(tab) < 0) {

          if (i < _this.activeIndex) {
            _this.activeIndex--;
          } else if (i === _this.activeIndex) {
            _this.activeIndex = 0;
          }
        }
      });

      _this.$tabs = $newTabs;

      _this._setActive();
    };

    return Tab;
  })();


  /**
   * =============================================================================
   * ************   Tab 自定义属性 API   ************
   * =============================================================================
   */

  $(function () {
    mdui.mutation('[mdui-tab]', function () {
      var $this = $(this);
      var inst = $this.data('mdui.tab');
      if (!inst) {
        inst = new mdui.Tab($this, parseOptions($this.attr('mdui-tab')));
        $this.data('mdui.tab', inst);
      }
    });
  });


  /**
   * =============================================================================
   * ************   Drawer 抽屉栏   ************
   * =============================================================================
   *
   * 在桌面设备上默认显示抽屉栏，不显示遮罩层
   * 在手机和平板设备上默认不显示抽屉栏，始终显示遮罩层，且覆盖导航栏
   */

  mdui.Drawer = (function () {

    /**
     * 默认参数
     * @type {{}}
     */
    var DEFAULT = {
      // 在桌面设备上是否显示遮罩层。手机和平板不受这个参数影响，始终会显示遮罩层
      overlay: false,

      // 是否开启手势
      swipe: false,
    };

    var isDesktop = function () {
      return $window.width() >= 1024;
    };

    /**
     * 抽屉栏实例
     * @param selector 选择器或 HTML 字符串或 DOM 元素
     * @param opts
     * @constructor
     */
    function Drawer(selector, opts) {
      var _this = this;

      _this.$drawer = $(selector).eq(0);
      if (!_this.$drawer.length) {
        return;
      }

      var oldInst = _this.$drawer.data('mdui.drawer');
      if (oldInst) {
        return oldInst;
      }

      _this.options = $.extend({}, DEFAULT, (opts || {}));

      _this.overlay = false; // 是否显示着遮罩层
      _this.position = _this.$drawer.hasClass('mdui-drawer-right') ? 'right' : 'left';

      if (_this.$drawer.hasClass('mdui-drawer-close')) {
        _this.state = 'closed';
      } else if (_this.$drawer.hasClass('mdui-drawer-open')) {
        _this.state = 'opened';
      } else if (isDesktop()) {
        _this.state = 'opened';
      } else {
        _this.state = 'closed';
      }

      // 浏览器窗口大小调整时
      $window.on('resize', $.throttle(function () {
        // 由手机平板切换到桌面时
        if (isDesktop()) {
          // 如果显示着遮罩，则隐藏遮罩
          if (_this.overlay && !_this.options.overlay) {
            $.hideOverlay();
            _this.overlay = false;
            $.unlockScreen();
          }

          // 没有强制关闭，则状态为打开状态
          if (!_this.$drawer.hasClass('mdui-drawer-close')) {
            _this.state = 'opened';
          }
        }

        // 由桌面切换到手机平板时。如果抽屉栏是打开着的且没有遮罩层，则关闭抽屉栏
        else {
          if (!_this.overlay && _this.state === 'opened') {
            // 抽屉栏处于强制打开状态，添加遮罩
            if (_this.$drawer.hasClass('mdui-drawer-open')) {
              $.showOverlay();
              _this.overlay = true;
              $.lockScreen();

              $('.mdui-overlay').one('click', function () {
                _this.close();
              });
            } else {
              _this.state = 'closed';
            }
          }
        }
      }, 100));

      // 绑定关闭按钮事件
      _this.$drawer.find('[mdui-drawer-close]').each(function () {
        $(this).on('click', function () {
          _this.close();
        });
      });

      swipeSupport(_this);
    }

    /**
     * 滑动手势支持
     * @param _this
     */
    var swipeSupport = function (_this) {
      // 抽屉栏滑动手势控制
      var openNavEventHandler;
      var touchStartX;
      var touchStartY;
      var swipeStartX;
      var swiping = false;
      var maybeSwiping = false;
      var $body = $('body');

      // 手势触发的范围
      var swipeAreaWidth = 24;

      function enableSwipeHandling() {
        if (!openNavEventHandler) {
          $body.on('touchstart', onBodyTouchStart);
          openNavEventHandler = onBodyTouchStart;
        }
      }

      function setPosition(translateX, closeTransform) {
        var rtlTranslateMultiplier = _this.position === 'right' ? -1 : 1;
        var transformCSS = 'translate(' + (-1 * rtlTranslateMultiplier * translateX) + 'px, 0) !important;';
        _this.$drawer.css(
          'cssText',
          'transform:' + transformCSS + (closeTransform ? 'transition: initial !important;' : '')
        );
      }

      function cleanPosition() {
        _this.$drawer.css({
          transform: '',
          transition: '',
        });
      }

      function getMaxTranslateX() {
        return _this.$drawer.width() + 10;
      }

      function getTranslateX(currentX) {
        return Math.min(
          Math.max(
            swiping === 'closing' ? (swipeStartX - currentX) : (getMaxTranslateX() + swipeStartX - currentX),
            0
          ),
          getMaxTranslateX()
        );
      }

      function onBodyTouchStart(event) {
        touchStartX = event.touches[0].pageX;
        if (_this.position === 'right') {
          touchStartX = $body.width() - touchStartX;
        }

        touchStartY = event.touches[0].pageY;

        if (_this.state !== 'opened') {
          if (touchStartX > swipeAreaWidth || openNavEventHandler !== onBodyTouchStart) {
            return;
          }
        }

        maybeSwiping = true;

        $body.on({
          touchmove: onBodyTouchMove,
          touchend: onBodyTouchEnd,
          touchcancel: onBodyTouchMove,
        });
      }

      function onBodyTouchMove(event) {
        var touchX = event.touches[0].pageX;
        if (_this.position === 'right') {
          touchX = $body.width() - touchX;
        }

        var touchY = event.touches[0].pageY;

        if (swiping) {
          setPosition(getTranslateX(touchX), true);
        } else if (maybeSwiping) {
          var dXAbs = Math.abs(touchX - touchStartX);
          var dYAbs = Math.abs(touchY - touchStartY);
          var threshold = 8;

          if (dXAbs > threshold && dYAbs <= threshold) {
            swipeStartX = touchX;
            swiping = _this.state === 'opened' ? 'closing' : 'opening';
            $.lockScreen();
            setPosition(getTranslateX(touchX), true);
          } else if (dXAbs <= threshold && dYAbs > threshold) {
            onBodyTouchEnd();
          }
        }
      }

      function onBodyTouchEnd(event) {
        if (swiping) {
          var touchX = event.changedTouches[0].pageX;
          if (_this.position === 'right') {
            touchX = $body.width() - touchX;
          }

          var translateRatio = getTranslateX(touchX) / getMaxTranslateX();

          maybeSwiping = false;
          var swipingState = swiping;
          swiping = null;

          if (swipingState === 'opening') {
            if (translateRatio < 0.92) {
              cleanPosition();
              _this.open();
            } else {
              cleanPosition();
            }
          } else {
            if (translateRatio > 0.08) {
              cleanPosition();
              _this.close();
            } else {
              cleanPosition();
            }
          }

          $.unlockScreen();
        } else {
          maybeSwiping = false;
        }

        $body.off({
          touchmove: onBodyTouchMove,
          touchend: onBodyTouchEnd,
          touchcancel: onBodyTouchMove,
        });
      }

      if (_this.options.swipe) {
        enableSwipeHandling();
      }
    };

    /**
     * 动画结束回调
     * @param inst
     */
    var transitionEnd = function (inst) {
      if (inst.$drawer.hasClass('mdui-drawer-open')) {
        inst.state = 'opened';
        componentEvent('opened', 'drawer', inst, inst.$drawer);
      } else {
        inst.state = 'closed';
        componentEvent('closed', 'drawer', inst, inst.$drawer);
      }
    };

    /**
     * 打开抽屉栏
     */
    Drawer.prototype.open = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        return;
      }

      _this.state = 'opening';
      componentEvent('open', 'drawer', _this, _this.$drawer);

      if (!_this.options.overlay) {
        $('body').addClass('mdui-drawer-body-' + _this.position);
      }

      _this.$drawer
        .removeClass('mdui-drawer-close')
        .addClass('mdui-drawer-open')
        .transitionEnd(function () {
          transitionEnd(_this);
        });

      if (!isDesktop() || _this.options.overlay) {
        _this.overlay = true;
        $.showOverlay().one('click', function () {
          _this.close();
        });

        $.lockScreen();
      }
    };

    /**
     * 关闭抽屉栏
     */
    Drawer.prototype.close = function () {
      var _this = this;

      if (_this.state === 'closing' || _this.state === 'closed') {
        return;
      }

      _this.state = 'closing';
      componentEvent('close', 'drawer', _this, _this.$drawer);

      if (!_this.options.overlay) {
        $('body').removeClass('mdui-drawer-body-' + _this.position);
      }

      _this.$drawer
        .addClass('mdui-drawer-close')
        .removeClass('mdui-drawer-open')
        .transitionEnd(function () {
          transitionEnd(_this);
        });

      if (_this.overlay) {
        $.hideOverlay();
        _this.overlay = false;
        $.unlockScreen();
      }
    };

    /**
     * 切换抽屉栏打开/关闭状态
     */
    Drawer.prototype.toggle = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        _this.close();
      } else if (_this.state === 'closing' || _this.state === 'closed') {
        _this.open();
      }
    };

    /**
     * 获取抽屉栏状态
     * @returns {'opening'|'opened'|'closing'|'closed'}
     */
    Drawer.prototype.getState = function () {
      return this.state;
    };

    return Drawer;

  })();


  /**
   * =============================================================================
   * ************   Drawer 自定义属性 API   ************
   * =============================================================================
   */

  $(function () {
    mdui.mutation('[mdui-drawer]', function () {
      var $this = $(this);
      var options = parseOptions($this.attr('mdui-drawer'));
      var selector = options.target;
      delete options.target;

      var $drawer = $(selector).eq(0);

      var inst = $drawer.data('mdui.drawer');
      if (!inst) {
        inst = new mdui.Drawer($drawer, options);
        $drawer.data('mdui.drawer', inst);
      }

      $this.on('click', function () {
        inst.toggle();
      });

    });
  });


  /**
   * =============================================================================
   * ************   Dialog 对话框   ************
   * =============================================================================
   */

  mdui.Dialog = (function () {

    /**
     * 默认参数
     */
    var DEFAULT = {
      history: true,                // 监听 hashchange 事件
      overlay: true,                // 打开对话框时是否显示遮罩
      modal: false,                 // 是否模态化对话框，为 false 时点击对话框外面区域关闭对话框，为 true 时不关闭
      closeOnEsc: true,             // 按下 esc 关闭对话框
      closeOnCancel: true,          // 按下取消按钮时关闭对话框
      closeOnConfirm: true,         // 按下确认按钮时关闭对话框
      destroyOnClosed: false,        // 关闭后销毁
    };

    /**
     * 遮罩层元素
     */
    var $overlay;

    /**
     * 窗口是否已锁定
     */
    var isLockScreen;

    /**
     * 当前对话框实例
     */
    var currentInst;

    /**
     * 队列名
     * @type {string}
     */
    var queueName = '__md_dialog';

    /**
     * 窗口宽度变化，或对话框内容变化时，调整对话框位置和对话框内的滚动条
     */
    var readjust = function () {
      if (!currentInst) {
        return;
      }

      var $dialog = currentInst.$dialog;

      var $dialogTitle = $dialog.children('.mdui-dialog-title');
      var $dialogContent = $dialog.children('.mdui-dialog-content');
      var $dialogActions = $dialog.children('.mdui-dialog-actions');

      // 调整 dialog 的 top 和 height 值
      $dialog.height('');
      $dialogContent.height('');

      var dialogHeight = $dialog.height();
      $dialog.css({
        top: (($window.height() - dialogHeight) / 2) + 'px',
        height: dialogHeight + 'px',
      });

      // 调整 mdui-dialog-content 的高度
      $dialogContent.height(
        dialogHeight -
        ($dialogTitle.height() || 0) -
        ($dialogActions.height() || 0)
      );
    };

    /**
     * hashchange 事件触发时关闭对话框
     */
    var hashchangeEvent = function () {
      if (location.hash.substring(1).indexOf('&mdui-dialog') < 0) {
        currentInst.close(true);
      }
    };

    /**
     * 点击遮罩层关闭对话框
     * @param e
     */
    var overlayClick = function (e) {
      if ($(e.target).hasClass('mdui-overlay') && currentInst) {
        currentInst.close();
      }
    };

    /**
     * 对话框实例
     * @param selector 选择器或 HTML 字符串或 DOM 元素
     * @param opts
     * @constructor
     */
    function Dialog(selector, opts) {
      var _this = this;

      // 对话框元素
      _this.$dialog = $(selector).eq(0);
      if (!_this.$dialog.length) {
        return;
      }

      // 已通过 data 属性实例化过，不再重复实例化
      var oldInst = _this.$dialog.data('mdui.dialog');
      if (oldInst) {
        return oldInst;
      }

      // 如果对话框元素没有在当前文档中，则需要添加
      if (!$.contains(document.body, _this.$dialog[0])) {
        _this.append = true;
        $('body').append(_this.$dialog);
      }

      _this.options = $.extend({}, DEFAULT, (opts || {}));
      _this.state = 'closed';

      // 绑定取消按钮事件
      _this.$dialog.find('[mdui-dialog-cancel]').each(function () {
        $(this).on('click', function () {
          componentEvent('cancel', 'dialog', _this, _this.$dialog);
          if (_this.options.closeOnCancel) {
            _this.close();
          }
        });
      });

      // 绑定确认按钮事件
      _this.$dialog.find('[mdui-dialog-confirm]').each(function () {
        $(this).on('click', function () {
          componentEvent('confirm', 'dialog', _this, _this.$dialog);
          if (_this.options.closeOnConfirm) {
            _this.close();
          }
        });
      });

      // 绑定关闭按钮事件
      _this.$dialog.find('[mdui-dialog-close]').each(function () {
        $(this).on('click', function () {
          _this.close();
        });
      });
    }

    /**
     * 动画结束回调
     * @param inst
     */
    var transitionEnd = function (inst) {
      if (inst.$dialog.hasClass('mdui-dialog-open')) {
        inst.state = 'opened';
        componentEvent('opened', 'dialog', inst, inst.$dialog);
      } else {
        inst.state = 'closed';
        componentEvent('closed', 'dialog', inst, inst.$dialog);

        inst.$dialog.hide();

        // 所有对话框都关闭，且当前没有打开的对话框时，解锁屏幕
        if (queue.queue(queueName).length === 0 && !currentInst && isLockScreen) {
          $.unlockScreen();
          isLockScreen = false;
        }

        $window.off('resize', $.throttle(function () {
          readjust();
        }, 100));

        if (inst.options.destroyOnClosed) {
          inst.destroy();
        }
      }
    };

    /**
     * 打开指定对话框
     * @private
     */
    Dialog.prototype._doOpen = function () {
      var _this = this;

      currentInst = _this;

      if (!isLockScreen) {
        $.lockScreen();
        isLockScreen = true;
      }

      _this.$dialog.show();

      readjust();
      $window.on('resize', $.throttle(function () {
        readjust();
      }, 100));

      // 打开消息框
      _this.state = 'opening';
      componentEvent('open', 'dialog', _this, _this.$dialog);

      _this.$dialog
        .addClass('mdui-dialog-open')
        .transitionEnd(function () {
          transitionEnd(_this);
        });

      // 不存在遮罩层元素时，添加遮罩层
      if (!$overlay) {
        $overlay = $.showOverlay(5100);
      }

      $overlay

        // 点击遮罩层时是否关闭对话框
        [_this.options.modal ? 'off' : 'on']('click', overlayClick)

        // 是否显示遮罩层，不显示时，把遮罩层背景透明
        .css('opacity', _this.options.overlay ? '' : 0);

      if (_this.options.history) {
        // 如果 hash 中原来就有 &mdui-dialog，先删除，避免后退历史纪录后仍然有 &mdui-dialog 导致无法关闭
        var hash = location.hash.substring(1);
        if (hash.indexOf('&mdui-dialog') > -1) {
          hash = hash.replace(/&mdui-dialog/g, '');
        }

        // 后退按钮关闭对话框
        location.hash = hash + '&mdui-dialog';
        $window.on('hashchange', hashchangeEvent);
      }
    };

    /**
     * 打开对话框
     */
    Dialog.prototype.open = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        return;
      }

      // 如果当前有正在打开或已经打开的对话框,或队列不为空，则先加入队列，等旧对话框开始关闭时再打开
      if (
        (currentInst && (currentInst.state === 'opening' || currentInst.state === 'opened')) ||
        queue.queue(queueName).length
      ) {
        queue.queue(queueName, function () {
          _this._doOpen();
        });

        return;
      }

      _this._doOpen();
    };

    /**
     * 关闭对话框
     */
    Dialog.prototype.close = function () {
      var _this = this;

      // setTimeout 的作用是：
      // 当同时关闭一个对话框，并打开另一个对话框时，使打开对话框的操作先执行，以使需要打开的对话框先加入队列
      setTimeout(function () {
        if (_this.state === 'closing' || _this.state === 'closed') {
          return;
        }

        currentInst = null;

        _this.state = 'closing';
        componentEvent('close', 'dialog', _this, _this.$dialog);

        // 所有对话框都关闭，且当前没有打开的对话框时，隐藏遮罩
        if (queue.queue(queueName).length === 0 && $overlay) {
          $.hideOverlay();
          $overlay = null;
        }

        _this.$dialog
          .removeClass('mdui-dialog-open')
          .transitionEnd(function () {
            transitionEnd(_this);
          });

        if (_this.options.history && queue.queue(queueName).length === 0) {
          // 是否需要后退历史纪录，默认为 false。
          // 为 false 时是通过 js 关闭，需要后退一个历史记录
          // 为 true 时是通过后退按钮关闭，不需要后退历史记录
          if (!arguments[0]) {
            window.history.back();
          }

          $window.off('hashchange', hashchangeEvent);
        }

        // 关闭旧对话框，打开新对话框。
        // 加一点延迟，仅仅为了视觉效果更好。不加延时也不影响功能
        setTimeout(function () {
          queue.dequeue(queueName);
        }, 100);
      }, 0);
    };

    /**
     * 切换对话框打开/关闭状态
     */
    Dialog.prototype.toggle = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        _this.close();
      } else if (_this.state === 'closing' || _this.state === 'closed') {
        _this.open();
      }
    };

    /**
     * 获取对话框状态
     * @returns {'opening'|'opened'|'closing'|'closed'}
     */
    Dialog.prototype.getState = function () {
      return this.state;
    };

    /**
     * 销毁对话框
     */
    Dialog.prototype.destroy = function () {
      var _this = this;

      if (_this.append) {
        _this.$dialog.remove();
      }

      _this.$dialog.removeData('mdui.dialog');

      if (queue.queue(queueName).length === 0 && !currentInst) {
        if ($overlay) {
          $.hideOverlay();
          $overlay = null;
        }

        if (isLockScreen) {
          $.unlockScreen();
          isLockScreen = false;
        }
      }
    };

    /**
     * 对话框内容变化时，需要调用该方法来调整对话框位置和滚动条高度
     */
    Dialog.prototype.handleUpdate = function () {
      readjust();
    };

    // esc 按下时关闭对话框
    $document.on('keydown', function (e) {
      if (
        currentInst &&
        currentInst.options.closeOnEsc &&
        currentInst.state === 'opened' &&
        e.keyCode === 27
      ) {
        currentInst.close();
      }
    });

    return Dialog;

  })();


  /**
   * =============================================================================
   * ************   Dialog DATA API   ************
   * =============================================================================
   */

  $(function () {
    $document.on('click', '[mdui-dialog]', function () {
      var $this = $(this);
      var options = parseOptions($this.attr('mdui-dialog'));
      var selector = options.target;
      delete options.target;

      var $dialog = $(selector).eq(0);

      var inst = $dialog.data('mdui.dialog');
      if (!inst) {
        inst = new mdui.Dialog($dialog, options);
        $dialog.data('mdui.dialog', inst);
      }

      inst.open();
    });
  });


  /**
   * =============================================================================
   * ************   mdui.dialog(options)   ************
   * =============================================================================
   */

  mdui.dialog = function (options) {

    /**
     * 默认参数
     */
    var DEFAULT = {
      title: '',                // 标题
      content: '',              // 文本
      buttons: [],              // 按钮
      stackedButtons: false,    // 垂直排列按钮
      cssClass: '',             // 在 Dialog 上添加的 CSS 类
      history: true,            // 监听 hashchange 事件
      overlay: true,            // 是否显示遮罩
      modal: false,             // 是否模态化对话框
      closeOnEsc: true,         // 按下 esc 时关闭对话框
      destroyOnClosed: true,    // 关闭后销毁
      onOpen: function () {     // 打开动画开始时的回调
      },

      onOpened: function () {   // 打开动画结束后的回调
      },

      onClose: function () {    // 关闭动画开始时的回调
      },

      onClosed: function () {   // 关闭动画结束时的回调
      },
    };

    /**
     * 按钮的默认参数
     */
    var DEFAULT_BUTTON = {
      text: '',                   // 按钮文本
      bold: false,                // 按钮文本是否加粗
      close: true,                // 点击按钮后关闭对话框
      onClick: function (inst) {  // 点击按钮的回调
      },
    };

    // 合并参数
    options = $.extend({}, DEFAULT, (options || {}));
    $.each(options.buttons, function (i, button) {
      options.buttons[i] = $.extend({}, DEFAULT_BUTTON, button);
    });

    // 按钮的 HTML
    var buttonsHTML = '';
    if (options.buttons.length) {
      buttonsHTML =
        '<div class="mdui-dialog-actions ' +
          (options.stackedButtons ? 'mdui-dialog-actions-stacked' : '') +
        '">';
      $.each(options.buttons, function (i, button) {
        buttonsHTML +=
          '<a href="javascript:void(0)" ' +
            'class="mdui-btn mdui-ripple mdui-text-color-primary ' +
            (button.bold ? 'mdui-btn-bold' : '') + '">' +
            button.text +
          '</a>';
      });

      buttonsHTML += '</div>';
    }

    // Dialog 的 HTML
    var HTML =
      '<div class="mdui-dialog ' + options.cssClass + '">' +
        (options.title ? '<div class="mdui-dialog-title">' + options.title + '</div>' : '') +
        (options.content ? '<div class="mdui-dialog-content">' + options.content + '</div>' : '') +
        buttonsHTML +
      '</div>';

    // 实例化 Dialog
    var inst = new mdui.Dialog(HTML, {
      history: options.history,
      overlay: options.overlay,
      modal: options.modal,
      closeOnEsc: options.closeOnEsc,
      destroyOnClosed: options.destroyOnClosed,
    });

    // 绑定按钮事件
    if (options.buttons.length) {
      inst.$dialog.find('.mdui-dialog-actions .mdui-btn').each(function (i, button) {
        $(button).on('click', function () {
          if (typeof options.buttons[i].onClick === 'function') {
            options.buttons[i].onClick(inst);
          }

          if (options.buttons[i].close) {
            inst.close();
          }
        });
      });
    }

    // 绑定打开关闭事件
    if (typeof options.onOpen === 'function') {
      inst.$dialog
        .on('open.mdui.dialog', function () {
          options.onOpen(inst);
        })
        .on('opened.mdui.dialog', function () {
          options.onOpened(inst);
        })
        .on('close.mdui.dialog', function () {
          options.onClose(inst);
        })
        .on('closed.mdui.dialog', function () {
          options.onClosed(inst);
        });
    }

    inst.open();

    return inst;
  };


  /**
   * =============================================================================
   * ************   mdui.alert(text, title, onConfirm, options)   ************
   * ************   mdui.alert(text, onConfirm, options)   ************
   * =============================================================================
   */

  mdui.alert = function (text, title, onConfirm, options) {

    // title 参数可选
    if (typeof title === 'function') {
      title = '';
      onConfirm = arguments[1];
      options = arguments[2];
    }

    if (onConfirm === undefined) {
      onConfirm = function () {};
    }

    if (options === undefined) {
      options = {};
    }

    /**
     * 默认参数
     */
    var DEFAULT = {
      confirmText: 'ok',             // 按钮上的文本
      history: true,                 // 监听 hashchange 事件
      modal: false,                  // 是否模态化对话框，为 false 时点击对话框外面区域关闭对话框，为 true 时不关闭
      closeOnEsc: true,              // 按下 esc 关闭对话框
    };

    options = $.extend({}, DEFAULT, options);

    return mdui.dialog({
      title: title,
      content: text,
      buttons: [
        {
          text: options.confirmText,
          bold: false,
          close: true,
          onClick: onConfirm,
        },
      ],
      cssClass: 'mdui-dialog-alert',
      history: options.history,
      modal: options.modal,
      closeOnEsc: options.closeOnEsc,
    });
  };


  /**
   * =============================================================================
   * ************   mdui.confirm(text, title, onConfirm, onCancel, options)   ************
   * ************   mdui.confirm(text, onConfirm, onCancel, options)          ************
   * =============================================================================
   */

  mdui.confirm = function (text, title, onConfirm, onCancel, options) {

    // title 参数可选
    if (typeof title === 'function') {
      title = '';
      onConfirm = arguments[1];
      onCancel = arguments[2];
      options = arguments[3];
    }

    if (onConfirm === undefined) {
      onConfirm = function () {};
    }

    if (onCancel === undefined) {
      onCancel = function () {};
    }

    if (options === undefined) {
      options = {};
    }

    /**
     * 默认参数
     */
    var DEFAULT = {
      confirmText: 'ok',            // 确认按钮的文本
      cancelText: 'cancel',         // 取消按钮的文本
      history: true,                // 监听 hashchange 事件
      modal: false,                 // 是否模态化对话框，为 false 时点击对话框外面区域关闭对话框，为 true 时不关闭
      closeOnEsc: true,             // 按下 esc 关闭对话框
    };

    options = $.extend({}, DEFAULT, options);

    return mdui.dialog({
      title: title,
      content: text,
      buttons: [
        {
          text: options.cancelText,
          bold: false,
          close: true,
          onClick: onCancel,
        },
        {
          text: options.confirmText,
          bold: false,
          close: true,
          onClick: onConfirm,
        },
      ],
      cssClass: 'mdui-dialog-confirm',
      history: options.history,
      modal: options.modal,
      closeOnEsc: options.closeOnEsc,
    });
  };


  /**
   * =============================================================================
   * ************   mdui.prompt(label, title, onConfirm, onCancel, options)   ************
   * ************   mdui.prompt(label, onConfirm, onCancel, options)          ************
   * =============================================================================
   */

  mdui.prompt = function (label, title, onConfirm, onCancel, options) {

    // title 参数可选
    if (typeof title === 'function') {
      title = '';
      onConfirm = arguments[1];
      onCancel = arguments[2];
      options = arguments[3];
    }

    if (onConfirm === undefined) {
      onConfirm = function () {};
    }

    if (onCancel === undefined) {
      onCancel = function () {};
    }

    if (options === undefined) {
      options = {};
    }

    /**
     * 默认参数
     */
    var DEFAULT = {
      confirmText: 'ok',        // 确认按钮的文本
      cancelText: 'cancel',     // 取消按钮的文本
      history: true,            // 监听 hashchange 事件
      modal: false,             // 是否模态化对话框，为 false 时点击对话框外面区域关闭对话框，为 true 时不关闭
      closeOnEsc: true,         // 按下 esc 关闭对话框
      type: 'text',             // 输入框类型，text: 单行文本框 textarea: 多行文本框
      maxlength: '',            // 最大输入字符数
      defaultValue: '',         // 输入框中的默认文本
      confirmOnEnter: false,    // 按下 enter 确认输入内容
    };

    options = $.extend({}, DEFAULT, options);

    var content =
      '<div class="mdui-textfield">' +
        (label ? '<label class="mdui-textfield-label">' + label + '</label>' : '') +
        (options.type === 'text' ?
          '<input class="mdui-textfield-input" type="text" ' +
            'value="' + options.defaultValue + '" ' +
            (options.maxlength ? ('maxlength="' + options.maxlength + '"') : '') + '/>' :
          '') +
        (options.type === 'textarea' ?
          '<textarea class="mdui-textfield-input" ' +
            (options.maxlength ? ('maxlength="' + options.maxlength + '"') : '') + '>' +
              options.defaultValue +
          '</textarea>' :
          '') +
      '</div>';

    return mdui.dialog({
      title: title,
      content: content,
      buttons: [
        {
          text: options.cancelText,
          bold: false,
          close: true,
          onClick: function (inst) {
            var value = inst.$dialog.find('.mdui-textfield-input').val();
            onCancel(value, inst);
          },
        },
        {
          text: options.confirmText,
          bold: false,
          close: true,
          onClick: function (inst) {
            var value = inst.$dialog.find('.mdui-textfield-input').val();
            onConfirm(value, inst);
          },
        },
      ],
      cssClass: 'mdui-dialog-prompt',
      history: options.history,
      modal: options.modal,
      closeOnEsc: options.closeOnEsc,
      onOpen: function (inst) {

        // 初始化输入框
        var $input = inst.$dialog.find('.mdui-textfield-input');
        mdui.updateTextFields($input);

        // 聚焦到输入框
        $input[0].focus();

        // 捕捉文本框回车键，在单行文本框的情况下触发回调
        if (options.type === 'text' && options.confirmOnEnter === true) {
          $input.on('keydown', function (event) {
            if (event.keyCode === 13) {
              var value = inst.$dialog.find('.mdui-textfield-input').val();
              onConfirm(value, inst);
              inst.close();
            }
          });
        }

        // 如果是多行输入框，监听输入框的 input 事件，更新对话框高度
        if (options.type === 'textarea') {
          $input.on('input', function () {
            inst.handleUpdate();
          });
        }

        // 有字符数限制时，加载完文本框后 DOM 会变化，需要更新对话框高度
        if (options.maxlength) {
          inst.handleUpdate();
        }
      },
    });

  };


  /**
   * =============================================================================
   * ************   ToolTip 工具提示   ************
   * =============================================================================
   */

  mdui.Tooltip = (function () {

    /**
     * 默认参数
     */
    var DEFAULT = {
      position: 'auto',     // 提示所在位置
      delay: 0,             // 延迟，单位毫秒
      content: '',          // 提示文本，允许包含 HTML
    };

    /**
     * 是否是桌面设备
     * @returns {boolean}
     */
    var isDesktop = function () {
      return $window.width() > 1024;
    };

    /**
     * 设置 Tooltip 的位置
     * @param inst
     */
    function setPosition(inst) {
      var marginLeft;
      var marginTop;
      var position;

      // 触发的元素
      var targetProps = inst.$target[0].getBoundingClientRect();

      // 触发的元素和 Tooltip 之间的距离
      var targetMargin = (isDesktop() ? 14 : 24);

      // Tooltip 的宽度和高度
      var tooltipWidth = inst.$tooltip[0].offsetWidth;
      var tooltipHeight = inst.$tooltip[0].offsetHeight;

      // Tooltip 的方向
      position = inst.options.position;

      // 自动判断位置，加 2px，使 Tooltip 距离窗口边框至少有 2px 的间距
      if (['bottom', 'top', 'left', 'right'].indexOf(position) === -1) {
        if (
          targetProps.top + targetProps.height + targetMargin + tooltipHeight + 2 <
          $window.height()
        ) {
          position = 'bottom';
        } else if (targetMargin + tooltipHeight + 2 < targetProps.top) {
          position = 'top';
        } else if (targetMargin + tooltipWidth + 2 < targetProps.left) {
          position = 'left';
        } else if (
          targetProps.width + targetMargin + tooltipWidth + 2 <
          $window.width() - targetProps.left
        ) {
          position = 'right';
        } else {
          position = 'bottom';
        }
      }

      // 设置位置
      switch (position) {
        case 'bottom':
          marginLeft = -1 * (tooltipWidth / 2);
          marginTop = (targetProps.height / 2) + targetMargin;
          inst.$tooltip.transformOrigin('top center');
          break;
        case 'top':
          marginLeft = -1 * (tooltipWidth / 2);
          marginTop = -1 * (tooltipHeight + (targetProps.height / 2) + targetMargin);
          inst.$tooltip.transformOrigin('bottom center');
          break;
        case 'left':
          marginLeft = -1 * (tooltipWidth + (targetProps.width / 2) + targetMargin);
          marginTop = -1 * (tooltipHeight / 2);
          inst.$tooltip.transformOrigin('center right');
          break;
        case 'right':
          marginLeft = (targetProps.width / 2) + targetMargin;
          marginTop = -1 * (tooltipHeight / 2);
          inst.$tooltip.transformOrigin('center left');
          break;
      }

      var targetOffset = inst.$target.offset();
      inst.$tooltip.css({
        top: targetOffset.top + (targetProps.height / 2) + 'px',
        left: targetOffset.left + (targetProps.width / 2) + 'px',
        'margin-left': marginLeft + 'px',
        'margin-top': marginTop + 'px',
      });
    }

    /**
     * Tooltip 实例
     * @param selector
     * @param opts
     * @constructor
     */
    function Tooltip(selector, opts) {
      var _this = this;

      _this.$target = $(selector).eq(0);
      if (!_this.$target.length) {
        return;
      }

      // 已通过 data 属性实例化过，不再重复实例化
      var oldInst = _this.$target.data('mdui.tooltip');
      if (oldInst) {
        return oldInst;
      }

      _this.options = $.extend({}, DEFAULT, (opts || {}));
      _this.state = 'closed';

      // 创建 Tooltip HTML
      _this.$tooltip = $(
        '<div class="mdui-tooltip" id="' + $.guid() + '">' +
          _this.options.content +
        '</div>'
      ).appendTo(document.body);

      // 绑定事件。元素处于 disabled 状态时无法触发鼠标事件，为了统一，把 touch 事件也禁用
      _this.$target
        .on('touchstart mouseenter', function (e) {
          if (this.disabled) {
            return;
          }

          if (!TouchHandler.isAllow(e)) {
            return;
          }

          TouchHandler.register(e);

          _this.open();
        })
        .on('touchend mouseleave', function (e) {
          if (this.disabled) {
            return;
          }

          if (!TouchHandler.isAllow(e)) {
            return;
          }

          _this.close();
        })
        .on(TouchHandler.unlock, function (e) {
          if (this.disabled) {
            return;
          }

          TouchHandler.register(e);
        });
    }

    /**
     * 动画结束回调
     * @private
     */
    var transitionEnd = function (inst) {
      if (inst.$tooltip.hasClass('mdui-tooltip-open')) {
        inst.state = 'opened';
        componentEvent('opened', 'tooltip', inst, inst.$target);
      } else {
        inst.state = 'closed';
        componentEvent('closed', 'tooltip', inst, inst.$target);
      }
    };

    /**
     * 执行打开 Tooltip
     * @private
     */
    Tooltip.prototype._doOpen = function () {
      var _this = this;

      _this.state = 'opening';
      componentEvent('open', 'tooltip', _this, _this.$target);

      _this.$tooltip
        .addClass('mdui-tooltip-open')
        .transitionEnd(function () {
          transitionEnd(_this);
        });
    };

    /**
     * 打开 Tooltip
     * @param opts 允许每次打开时设置不同的参数
     */
    Tooltip.prototype.open = function (opts) {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        return;
      }

      var oldOpts = $.extend({}, _this.options);

      // 合并 data 属性参数
      $.extend(_this.options, parseOptions(_this.$target.attr('mdui-tooltip')));
      if (opts) {
        $.extend(_this.options, opts);
      }

      // tooltip 的内容有更新
      if (oldOpts.content !== _this.options.content) {
        _this.$tooltip.html(_this.options.content);
      }

      setPosition(_this);

      if (_this.options.delay) {
        _this.timeoutId = setTimeout(function () {
          _this._doOpen();
        }, _this.options.delay);
      } else {
        _this.timeoutId = false;
        _this._doOpen();
      }
    };

    /**
     * 关闭 Tooltip
     */
    Tooltip.prototype.close = function () {
      var _this = this;

      if (_this.timeoutId) {
        clearTimeout(_this.timeoutId);
        _this.timeoutId = false;
      }

      if (_this.state === 'closing' || _this.state === 'closed') {
        return;
      }

      _this.state = 'closing';
      componentEvent('close', 'tooltip', _this, _this.$target);

      _this.$tooltip
        .removeClass('mdui-tooltip-open')
        .transitionEnd(function () {
          transitionEnd(_this);
        });
    };

    /**
     * 切换 Tooltip 状态
     */
    Tooltip.prototype.toggle = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        _this.close();
      } else if (_this.state === 'closing' || _this.state === 'closed') {
        _this.open();
      }
    };

    /**
     * 获取 Tooltip 状态
     * @returns {'opening'|'opened'|'closing'|'closed'}
     */
    Tooltip.prototype.getState = function () {
      return this.state;
    };

    /**
     * 销毁 Tooltip
     */
    /*Tooltip.prototype.destroy = function () {
      var _this = this;
      clearTimeout(_this.timeoutId);
      $.data(_this.target, 'mdui.tooltip', null);
      $.remove(_this.tooltip);
    };*/

    return Tooltip;

  })();


  /**
   * =============================================================================
   * ************   Tooltip DATA API   ************
   * =============================================================================
   */

  $(function () {
    // mouseenter 不能冒泡，所以这里用 mouseover 代替
    $document.on('touchstart mouseover', '[mdui-tooltip]', function () {
      var $this = $(this);

      var inst = $this.data('mdui.tooltip');
      if (!inst) {
        var options = parseOptions($this.attr('mdui-tooltip'));
        inst = new mdui.Tooltip($this, options);
        $this.data('mdui.tooltip', inst);
      }
    });
  });


  /**
   * =============================================================================
   * ************   Snackbar   ************
   * =============================================================================
   */

  (function () {

    /**
     * 当前打开着的 Snackbar
     */
    var currentInst;

    /**
     * 对列名
     * @type {string}
     */
    var queueName = '__md_snackbar';

    var DEFAULT = {
      timeout: 4000,                  // 在用户没有操作时多长时间自动隐藏
      buttonText: '',                 // 按钮的文本
      buttonColor: '',                // 按钮的颜色，支持 blue #90caf9 rgba(...)
      position: 'bottom',             // 位置 bottom、top、left-top、left-bottom、right-top、right-bottom
      closeOnButtonClick: true,       // 点击按钮时关闭
      closeOnOutsideClick: true,      // 触摸或点击屏幕其他地方时关闭
      onClick: function () {          // 在 Snackbar 上点击的回调
      },

      onButtonClick: function () {    // 点击按钮的回调
      },

      onOpen: function () {           // 打开动画开始时的回调
      },

      onOpened: function () {         // 打开动画结束时的回调
      },

      onClose: function () {          // 关闭动画开始时的回调
      },

      onClosed: function () {         // 打开动画结束时的回调
      },
    };

    /**
     * 点击 Snackbar 外面的区域关闭
     * @param e
     */
    var closeOnOutsideClick = function (e) {
      var $target = $(e.target);
      if (!$target.hasClass('mdui-snackbar') && !$target.parents('.mdui-snackbar').length) {
        currentInst.close();
      }
    };

    /**
     * Snackbar 实例
     * @param message
     * @param opts
     * @constructor
     */
    function Snackbar(message, opts) {
      var _this = this;

      _this.message = message;
      _this.options = $.extend({}, DEFAULT, (opts || {}));

      // message 参数必须
      if (!_this.message) {
        return;
      }

      _this.state = 'closed';

      _this.timeoutId = false;

      // 按钮颜色
      var buttonColorStyle = '';
      var buttonColorClass = '';

      if (
        _this.options.buttonColor.indexOf('#') === 0 ||
        _this.options.buttonColor.indexOf('rgb') === 0
      ) {
        buttonColorStyle = 'style="color:' + _this.options.buttonColor + '"';
      } else if (_this.options.buttonColor !== '') {
        buttonColorClass = 'mdui-text-color-' + _this.options.buttonColor;
      }

      // 添加 HTML
      _this.$snackbar = $(
        '<div class="mdui-snackbar">' +
          '<div class="mdui-snackbar-text">' +
            _this.message +
          '</div>' +
          (_this.options.buttonText ?
            ('<a href="javascript:void(0)" ' +
            'class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white ' +
              buttonColorClass + '" ' +
              buttonColorStyle + '>' +
              _this.options.buttonText +
            '</a>') :
            ''
          ) +
        '</div>')
        .appendTo(document.body);

      // 设置位置
      _this._setPosition('close');

      _this.$snackbar
        .reflow()
        .addClass('mdui-snackbar-' + _this.options.position);
    }

    /**
     * 设置 Snackbar 的位置
     * @param state
     * @private
     */
    Snackbar.prototype._setPosition = function (state) {
      var _this = this;

      var snackbarHeight = _this.$snackbar[0].clientHeight;
      var position = _this.options.position;

      var translateX;
      var translateY;

      // translateX
      if (position === 'bottom' || position === 'top') {
        translateX = '-50%';
      } else {
        translateX = '0';
      }

      // translateY
      if (state === 'open') {
        translateY = '0';
      } else {
        if (position === 'bottom') {
          translateY = snackbarHeight;
        }

        if (position === 'top') {
          translateY = -snackbarHeight;
        }

        if (position === 'left-top' || position === 'right-top') {
          translateY = -snackbarHeight - 24;
        }

        if (position === 'left-bottom' || position === 'right-bottom') {
          translateY = snackbarHeight + 24;
        }
      }

      _this.$snackbar.transform('translate(' + translateX + ',' + translateY + 'px)');
    };

    /**
     * 打开 Snackbar
     */
    Snackbar.prototype.open = function () {
      var _this = this;

      if (!_this.message) {
        return;
      }

      if (_this.state === 'opening' || _this.state === 'opened') {
        return;
      }

      // 如果当前有正在显示的 Snackbar，则先加入队列，等旧 Snackbar 关闭后再打开
      if (currentInst) {
        queue.queue(queueName, function () {
          _this.open();
        });

        return;
      }

      currentInst = _this;

      // 开始打开
      _this.state = 'opening';
      _this.options.onOpen();

      _this._setPosition('open');

      _this.$snackbar
        .transitionEnd(function () {
          if (_this.state !== 'opening') {
            return;
          }

          _this.state = 'opened';
          _this.options.onOpened();

          // 有按钮时绑定事件
          if (_this.options.buttonText) {
            _this.$snackbar
              .find('.mdui-snackbar-action')
              .on('click', function () {
                _this.options.onButtonClick();
                if (_this.options.closeOnButtonClick) {
                  _this.close();
                }
              });
          }

          // 点击 snackbar 的事件
          _this.$snackbar.on('click', function (e) {
            if (!$(e.target).hasClass('mdui-snackbar-action')) {
              _this.options.onClick();
            }
          });

          // 点击 Snackbar 外面的区域关闭
          if (_this.options.closeOnOutsideClick) {
            $document.on(TouchHandler.start, closeOnOutsideClick);
          }

          // 超时后自动关闭
          if (_this.options.timeout) {
            _this.timeoutId = setTimeout(function () {
              _this.close();
            }, _this.options.timeout);
          }
        });
    };

    /**
     * 关闭 Snackbar
     */
    Snackbar.prototype.close = function () {
      var _this = this;

      if (!_this.message) {
        return;
      }

      if (_this.state === 'closing' || _this.state === 'closed') {
        return;
      }

      if (_this.timeoutId) {
        clearTimeout(_this.timeoutId);
      }

      if (_this.options.closeOnOutsideClick) {
        $document.off(TouchHandler.start, closeOnOutsideClick);
      }

      _this.state = 'closing';
      _this.options.onClose();

      _this._setPosition('close');

      _this.$snackbar
        .transitionEnd(function () {
          if (_this.state !== 'closing') {
            return;
          }

          currentInst = null;
          _this.state = 'closed';
          _this.options.onClosed();
          _this.$snackbar.remove();
          queue.dequeue(queueName);
        });
    };

    /**
     * 打开 Snackbar
     * @param message
     * @param opts
     */
    mdui.snackbar = function (message, opts) {
      if (typeof message !== 'string') {
        opts = message;
        message = opts.message;
      }

      var inst = new Snackbar(message, opts);

      inst.open();
      return inst;
    };

  })();


  /**
   * =============================================================================
   * ************   Bottom navigation 底部导航栏   ************
   * =============================================================================
   */

  (function () {

    // 切换导航项
    $document.on('click', '.mdui-bottom-nav>a', function () {
      var $this = $(this);
      var $bottomNav = $this.parent();
      var isThis;
      $bottomNav.children('a').each(function (i, item) {
        isThis = $this.is(item);
        if (isThis) {
          componentEvent('change', 'bottomNav', null, $bottomNav, {
            index: i,
          });
        }

        $(item)[isThis ? 'addClass' : 'removeClass']('mdui-bottom-nav-active');
      });
    });

    // 滚动时隐藏 mdui-bottom-nav-scroll-hide
    mdui.mutation('.mdui-bottom-nav-scroll-hide', function () {
      var $this = $(this);
      var inst = new mdui.Headroom($this, {
        pinnedClass: 'mdui-headroom-pinned-down',
        unpinnedClass: 'mdui-headroom-unpinned-down',
      });
      $this.data('mdui.headroom', inst);
    });

  })();


  /**
   * =============================================================================
   * ************   Spinner 圆形进度条   ************
   * =============================================================================
   */

  (function () {
    /**
     * layer 的 HTML 结构
     */
    var layerHTML = function () {
      var i = arguments.length ? arguments[0] : false;

      return '<div class="mdui-spinner-layer ' + (i ? 'mdui-spinner-layer-' + i : '') + '">' +
                 '<div class="mdui-spinner-circle-clipper mdui-spinner-left">' +
               '<div class="mdui-spinner-circle"></div>' +
               '</div>' +
               '<div class="mdui-spinner-gap-patch">' +
                 '<div class="mdui-spinner-circle"></div>' +
               '</div>' +
               '<div class="mdui-spinner-circle-clipper mdui-spinner-right">' +
                 '<div class="mdui-spinner-circle"></div>' +
               '</div>' +
             '</div>';
    };

    /**
     * 填充 HTML
     * @param spinner
     */
    var fillHTML = function (spinner) {
      var $spinner = $(spinner);
      var layer;
      if ($spinner.hasClass('mdui-spinner-colorful')) {
        layer = layerHTML('1') + layerHTML('2') + layerHTML('3') + layerHTML('4');
      } else {
        layer = layerHTML();
      }

      $spinner.html(layer);
    };

    /**
     * 页面加载完后自动填充 HTML 结构
     */
    mdui.mutation('.mdui-spinner', function () {
      fillHTML(this);
    });

    /**
     * 更新圆形进度条
     */
    mdui.updateSpinners = function () {
      $(arguments.length ? arguments[0] : '.mdui-spinner').each(function () {
        fillHTML(this);
      });
    };

  })();



  /**
   * =============================================================================
   * ************   Expansion panel 可扩展面板   ************
   * =============================================================================
   */

  mdui.Panel = (function () {

    function Panel(selector, opts) {
      return new CollapsePrivate(selector, opts, 'panel');
    }

    return Panel;

  })();


  /**
   * =============================================================================
   * ************   Expansion panel 自定义属性   ************
   * =============================================================================
   */

  $(function () {
    mdui.mutation('[mdui-panel]', function () {
      var $target = $(this);

      var inst = $target.data('mdui.panel');
      if (!inst) {
        var options = parseOptions($target.attr('mdui-panel'));
        inst = new mdui.Panel($target, options);
        $target.data('mdui.panel', inst);
      }
    });
  });


  /**
   * =============================================================================
   * ************   Menu 菜单   ************
   * =============================================================================
   */

  mdui.Menu = (function () {

    /**
     * 默认参数
     */
    var DEFAULT = {
      position: 'auto',         // 菜单位置 top、bottom、center、auto
      align: 'auto',            // 菜单和触发它的元素的对齐方式 left、right、center、auto
      gutter: 16,               // 菜单距离窗口边缘的最小距离，单位 px
      fixed: false,             // 是否使菜单固定在窗口，不随滚动条滚动
      covered: 'auto',          // 菜单是否覆盖在触发它的元素上，true、false。auto 时简单菜单覆盖，级联菜单不覆盖
      subMenuTrigger: 'hover',  // 子菜单的触发方式 hover、click
      subMenuDelay: 200,        // 子菜单的触发延时，仅在 submenuTrigger 为 hover 有效
    };

    /**
     * 调整主菜单位置
     * @param _this 实例
     */
    var readjust = function (_this) {
      var menuLeft;
      var menuTop;

      // 菜单位置和方向
      var position;
      var align;

      // window 窗口的宽度和高度
      var windowHeight = $window.height();
      var windowWidth = $window.width();

      // 配置参数
      var gutter = _this.options.gutter;
      var isCovered = _this.isCovered;
      var isFixed = _this.options.fixed;

      // 动画方向参数
      var transformOriginX;
      var transformOriginY;

      // 菜单的原始宽度和高度
      var menuWidth = _this.$menu.width();
      var menuHeight = _this.$menu.height();

      var $anchor = _this.$anchor;

      // 触发菜单的元素在窗口中的位置
      var anchorTmp = $anchor[0].getBoundingClientRect();
      var anchorTop = anchorTmp.top;
      var anchorLeft = anchorTmp.left;
      var anchorHeight = anchorTmp.height;
      var anchorWidth = anchorTmp.width;
      var anchorBottom = windowHeight - anchorTop - anchorHeight;
      var anchorRight = windowWidth - anchorLeft - anchorWidth;

      // 触发元素相对其拥有定位属性的父元素的位置
      var anchorOffsetTop = $anchor[0].offsetTop;
      var anchorOffsetLeft = $anchor[0].offsetLeft;

      // ===============================
      // ================= 自动判断菜单位置
      // ===============================
      if (_this.options.position === 'auto') {

        // 判断下方是否放得下菜单
        if (anchorBottom + (isCovered ? anchorHeight : 0) > menuHeight + gutter) {
          position = 'bottom';
        }

        // 判断上方是否放得下菜单
        else if (anchorTop + (isCovered ? anchorHeight : 0) > menuHeight + gutter) {
          position = 'top';
        }

        // 上下都放不下，居中显示
        else {
          position = 'center';
        }
      } else {
        position = _this.options.position;
      }

      // ===============================
      // ============== 自动判断菜单对齐方式
      // ===============================
      if (_this.options.align === 'auto') {

        // 判断右侧是否放得下菜单
        if (anchorRight + anchorWidth > menuWidth + gutter) {
          align = 'left';
        }

        // 判断左侧是否放得下菜单
        else if (anchorLeft + anchorWidth > menuWidth + gutter) {
          align = 'right';
        }

        // 左右都放不下，居中显示
        else {
          align = 'center';
        }
      } else {
        align = _this.options.align;
      }

      // ===============================
      // ==================== 设置菜单位置
      // ===============================
      if (position === 'bottom') {
        transformOriginY = '0';

        menuTop =
          (isCovered ? 0 : anchorHeight) +
          (isFixed ? anchorTop : anchorOffsetTop);

      } else if (position === 'top') {
        transformOriginY = '100%';

        menuTop =
          (isCovered ? anchorHeight : 0) +
          (isFixed ? (anchorTop - menuHeight) : (anchorOffsetTop - menuHeight));

      } else {
        transformOriginY = '50%';

        // =====================在窗口中居中
        // 显示的菜单的高度，简单菜单高度不超过窗口高度，若超过了则在菜单内部显示滚动条
        // 级联菜单内部不允许出现滚动条
        var menuHeightTemp = menuHeight;

        // 简单菜单比窗口高时，限制菜单高度
        if (!_this.isCascade) {
          if (menuHeight + gutter * 2 > windowHeight) {
            menuHeightTemp = windowHeight - gutter * 2;
            _this.$menu.height(menuHeightTemp);
          }
        }

        menuTop =
          (windowHeight - menuHeightTemp) / 2 +
          (isFixed ? 0 : (anchorOffsetTop - anchorTop));
      }

      _this.$menu.css('top', menuTop + 'px');

      // ===============================
      // ================= 设置菜单对齐方式
      // ===============================
      if (align === 'left') {
        transformOriginX = '0';

        menuLeft = isFixed ? anchorLeft : anchorOffsetLeft;

      } else if (align === 'right') {
        transformOriginX = '100%';

        menuLeft = isFixed ?
          (anchorLeft + anchorWidth - menuWidth) :
          (anchorOffsetLeft + anchorWidth - menuWidth);
      } else {
        transformOriginX = '50%';

        //=======================在窗口中居中
        // 显示的菜单的宽度，菜单宽度不能超过窗口宽度
        var menuWidthTemp = menuWidth;

        // 菜单比窗口宽，限制菜单宽度
        if (menuWidth + gutter * 2 > windowWidth) {
          menuWidthTemp = windowWidth - gutter * 2;
          _this.$menu.width(menuWidthTemp);
        }

        menuLeft =
          (windowWidth - menuWidthTemp) / 2 +
          (isFixed ? 0 : anchorOffsetLeft - anchorLeft);
      }

      _this.$menu.css('left', menuLeft + 'px');

      // 设置菜单动画方向
      _this.$menu.transformOrigin(transformOriginX + ' ' + transformOriginY);
    };

    /**
     * 调整子菜单的位置
     * @param $submenu
     */
    var readjustSubmenu = function ($submenu) {
      var $item = $submenu.parent('.mdui-menu-item');

      var submenuTop;
      var submenuLeft;

      // 子菜单位置和方向
      var position; // top、bottom
      var align; // left、right

      // window 窗口的宽度和高度
      var windowHeight = $window.height();
      var windowWidth = $window.width();

      // 动画方向参数
      var transformOriginX;
      var transformOriginY;

      // 子菜单的原始宽度和高度
      var submenuWidth = $submenu.width();
      var submenuHeight = $submenu.height();

      // 触发子菜单的菜单项的宽度高度
      var itemTmp = $item[0].getBoundingClientRect();
      var itemWidth = itemTmp.width;
      var itemHeight = itemTmp.height;
      var itemLeft = itemTmp.left;
      var itemTop = itemTmp.top;

      // ===================================
      // ===================== 判断菜单上下位置
      // ===================================

      // 判断下方是否放得下菜单
      if (windowHeight - itemTop > submenuHeight) {
        position = 'bottom';
      }

      // 判断上方是否放得下菜单
      else if (itemTop + itemHeight > submenuHeight) {
        position = 'top';
      }

      // 默认放在下方
      else {
        position = 'bottom';
      }

      // ====================================
      // ====================== 判断菜单左右位置
      // ====================================

      // 判断右侧是否放得下菜单
      if (windowWidth - itemLeft - itemWidth > submenuWidth) {
        align = 'left';
      }

      // 判断左侧是否放得下菜单
      else if (itemLeft > submenuWidth) {
        align = 'right';
      }

      // 默认放在右侧
      else {
        align = 'left';
      }

      // ===================================
      // ======================== 设置菜单位置
      // ===================================
      if (position === 'bottom') {
        transformOriginY = '0';
        submenuTop = '0';
      } else if (position === 'top') {
        transformOriginY = '100%';
        submenuTop = -submenuHeight + itemHeight;
      }

      $submenu.css('top', submenuTop + 'px');

      // ===================================
      // ===================== 设置菜单对齐方式
      // ===================================
      if (align === 'left') {
        transformOriginX = '0';
        submenuLeft = itemWidth;
      } else if (align === 'right') {
        transformOriginX = '100%';
        submenuLeft = -submenuWidth;
      }

      $submenu.css('left', submenuLeft + 'px');

      // 设置菜单动画方向
      $submenu.transformOrigin(transformOriginX + ' ' + transformOriginY);
    };

    /**
     * 打开子菜单
     * @param $submenu
     */
    var openSubMenu = function ($submenu) {
      readjustSubmenu($submenu);

      $submenu
        .addClass('mdui-menu-open')
        .parent('.mdui-menu-item')
        .addClass('mdui-menu-item-active');
    };

    /**
     * 关闭子菜单，及其嵌套的子菜单
     * @param $submenu
     */
    var closeSubMenu = function ($submenu) {
      // 关闭子菜单
      $submenu
        .removeClass('mdui-menu-open')
        .addClass('mdui-menu-closing')
        .transitionEnd(function () {
          $submenu.removeClass('mdui-menu-closing');
        })

        // 移除激活状态的样式
        .parent('.mdui-menu-item')
        .removeClass('mdui-menu-item-active');

      // 循环关闭嵌套的子菜单
      $submenu.find('.mdui-menu').each(function () {
        var $subSubmenu = $(this);
        $subSubmenu
          .removeClass('mdui-menu-open')
          .addClass('mdui-menu-closing')
          .transitionEnd(function () {
            $subSubmenu.removeClass('mdui-menu-closing');
          })
          .parent('.mdui-menu-item')
          .removeClass('mdui-menu-item-active');
      });
    };

    /**
     * 切换子菜单状态
     * @param $submenu
     */
    var toggleSubMenu = function ($submenu) {
      if ($submenu.hasClass('mdui-menu-open')) {
        closeSubMenu($submenu);
      } else {
        openSubMenu($submenu);
      }
    };

    /**
     * 绑定子菜单事件
     * @param inst 实例
     */
    var bindSubMenuEvent = function (inst) {
      // 点击打开子菜单
      inst.$menu.on('click', '.mdui-menu-item', function (e) {
        var $this = $(this);
        var $target = $(e.target);

        // 禁用状态菜单不操作
        if ($this.attr('disabled') !== null) {
          return;
        }

        // 没有点击在子菜单的菜单项上时，不操作（点在了子菜单的空白区域、或分隔线上）
        if ($target.is('.mdui-menu') || $target.is('.mdui-divider')) {
          return;
        }

        // 阻止冒泡，点击菜单项时只在最后一级的 mdui-menu-item 上生效，不向上冒泡
        if (!$target.parents('.mdui-menu-item').eq(0).is($this)) {
          return;
        }

        // 当前菜单的子菜单
        var $submenu = $this.children('.mdui-menu');

        // 先关闭除当前子菜单外的所有同级子菜单
        $this.parent('.mdui-menu').children('.mdui-menu-item').each(function () {
          var $tmpSubmenu = $(this).children('.mdui-menu');
          if (
            $tmpSubmenu.length &&
            (!$submenu.length || !$tmpSubmenu.is($submenu))
          ) {
            closeSubMenu($tmpSubmenu);
          }
        });

        // 切换当前子菜单
        if ($submenu.length) {
          toggleSubMenu($submenu);
        }
      });

      if (inst.options.subMenuTrigger === 'hover') {
        // 临时存储 setTimeout 对象
        var timeout;

        var timeoutOpen;
        var timeoutClose;

        inst.$menu.on('mouseover mouseout', '.mdui-menu-item', function (e) {
          var $this = $(this);
          var eventType = e.type;
          var $relatedTarget = $(e.relatedTarget);

          // 禁用状态的菜单不操作
          if ($this.attr('disabled') !== null) {
            return;
          }

          // 用 mouseover 模拟 mouseenter
          if (eventType === 'mouseover') {
            if (!$this.is($relatedTarget) && $.contains($this[0], $relatedTarget[0])) {
              return;
            }
          }

          // 用 mouseout 模拟 mouseleave
          else if (eventType === 'mouseout') {
            if ($this.is($relatedTarget) || $.contains($this[0], $relatedTarget[0])) {
              return;
            }
          }

          // 当前菜单项下的子菜单，未必存在
          var $submenu = $this.children('.mdui-menu');

          // 鼠标移入菜单项时，显示菜单项下的子菜单
          if (eventType === 'mouseover') {
            if ($submenu.length) {

              // 当前子菜单准备打开时，如果当前子菜单正准备着关闭，不用再关闭了
              var tmpClose = $submenu.data('timeoutClose.mdui.menu');
              if (tmpClose) {
                clearTimeout(tmpClose);
              }

              // 如果当前子菜单已经打开，不操作
              if ($submenu.hasClass('mdui-menu-open')) {
                return;
              }

              // 当前子菜单准备打开时，其他准备打开的子菜单不用再打开了
              clearTimeout(timeoutOpen);

              // 准备打开当前子菜单
              timeout = timeoutOpen = setTimeout(function () {
                openSubMenu($submenu);
              }, inst.options.subMenuDelay);

              $submenu.data('timeoutOpen.mdui.menu', timeout);
            }
          }

          // 鼠标移出菜单项时，关闭菜单项下的子菜单
          else if (eventType === 'mouseout') {
            if ($submenu.length) {

              // 鼠标移出菜单项时，如果当前菜单项下的子菜单正准备打开，不用再打开了
              var tmpOpen = $submenu.data('timeoutOpen.mdui.menu');
              if (tmpOpen) {
                clearTimeout(tmpOpen);
              }

              // 准备关闭当前子菜单
              timeout = timeoutClose = setTimeout(function () {
                closeSubMenu($submenu);
              }, inst.options.subMenuDelay);

              $submenu.data('timeoutClose.mdui.menu', timeout);
            }
          }
        });
      }
    };

    /**
     * 菜单
     * @param anchorSelector 点击该元素触发菜单
     * @param menuSelector 菜单
     * @param opts 配置项
     * @constructor
     */
    function Menu(anchorSelector, menuSelector, opts) {
      var _this = this;

      // 触发菜单的元素
      _this.$anchor = $(anchorSelector).eq(0);
      if (!_this.$anchor.length) {
        return;
      }

      // 已通过自定义属性实例化过，不再重复实例化
      var oldInst = _this.$anchor.data('mdui.menu');
      if (oldInst) {
        return oldInst;
      }

      _this.$menu = $(menuSelector).eq(0);

      // 触发菜单的元素 和 菜单必须是同级的元素，否则菜单可能不能定位
      if (!_this.$anchor.siblings(_this.$menu).length) {
        return;
      }

      _this.options = $.extend({}, DEFAULT, (opts || {}));
      _this.state = 'closed';

      // 是否是级联菜单
      _this.isCascade = _this.$menu.hasClass('mdui-menu-cascade');

      // covered 参数处理
      if (_this.options.covered === 'auto') {
        _this.isCovered = !_this.isCascade;
      } else {
        _this.isCovered = _this.options.covered;
      }

      // 点击触发菜单切换
      _this.$anchor.on('click', function () {
        _this.toggle();
      });

      // 点击菜单外面区域关闭菜单
      $document.on('click touchstart', function (e) {
        var $target = $(e.target);
        if (
          (_this.state === 'opening' || _this.state === 'opened') &&
            !$target.is(_this.$menu) &&
            !$.contains(_this.$menu[0], $target[0]) &&
            !$target.is(_this.$anchor) &&
            !$.contains(_this.$anchor[0], $target[0])
        ) {
          _this.close();
        }
      });

      // 点击不含子菜单的菜单条目关闭菜单
      $document.on('click', '.mdui-menu-item', function (e) {
        var $this = $(this);
        if (!$this.find('.mdui-menu').length && $this.attr('disabled') === null) {
          _this.close();
        }
      });

      // 绑定点击或鼠标移入含子菜单的条目的事件
      bindSubMenuEvent(_this);

      // 窗口大小变化时，重新调整菜单位置
      $window.on('resize', $.throttle(function () {
        readjust(_this);
      }, 100));
    }

    /**
     * 切换菜单状态
     */
    Menu.prototype.toggle = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        _this.close();
      } else if (_this.state === 'closing' || _this.state === 'closed') {
        _this.open();
      }
    };

    /**
     * 动画结束回调
     * @param inst
     */
    var transitionEnd = function (inst) {
      inst.$menu.removeClass('mdui-menu-closing');

      if (inst.state === 'opening') {
        inst.state = 'opened';
        componentEvent('opened', 'menu', inst, inst.$menu);
      }

      if (inst.state === 'closing') {
        inst.state = 'closed';
        componentEvent('closed', 'menu', inst, inst.$menu);

        // 关闭后，恢复菜单样式到默认状态，并恢复 fixed 定位
        inst.$menu.css({
          top: '',
          left: '',
          width: '',
          position: 'fixed',
        });
      }
    };

    /**
     * 打开菜单
     */
    Menu.prototype.open = function () {
      var _this = this;

      if (_this.state === 'opening' || _this.state === 'opened') {
        return;
      }

      _this.state = 'opening';
      componentEvent('open', 'menu', _this, _this.$menu);

      // 调整菜单位置
      readjust(_this);

      _this.$menu

        // 菜单隐藏状态使用使用 fixed 定位。
        .css('position', _this.options.fixed ? 'fixed' : 'absolute')

        // 打开菜单
        .addClass('mdui-menu-open')

        // 打开动画完成后
        .transitionEnd(function () {
          transitionEnd(_this);
        });
    };

    /**
     * 关闭菜单
     */
    Menu.prototype.close = function () {
      var _this = this;
      if (_this.state === 'closing' || _this.state === 'closed') {
        return;
      }

      _this.state = 'closing';
      componentEvent('close', 'menu', _this, _this.$menu);

      // 菜单开始关闭时，关闭所有子菜单
      _this.$menu.find('.mdui-menu').each(function () {
        closeSubMenu($(this));
      });

      _this.$menu
        .removeClass('mdui-menu-open')
        .addClass('mdui-menu-closing')
        .transitionEnd(function () {
          transitionEnd(_this);
        });
    };

    return Menu;
  })();


  /**
   * =============================================================================
   * ************   Menu 自定义属性 API   ************
   * =============================================================================
   */

  $(function () {
    $document.on('click', '[mdui-menu]', function () {
      var $this = $(this);

      var inst = $this.data('mdui.menu');
      if (!inst) {
        var options = parseOptions($this.attr('mdui-menu'));
        var menuSelector = options.target;
        delete options.target;

        inst = new mdui.Menu($this, menuSelector, options);
        $this.data('mdui.menu', inst);

        inst.toggle();
      }
    });
  });


  /* jshint ignore:start */
  mdui.JQ = $;
  return mdui;
})));
/* jshint ignore:end */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(23),
      utf8 = __webpack_require__(9).utf8,
      isBuffer = __webpack_require__(10),
      bin = __webpack_require__(9).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(27);
var buildURL = __webpack_require__(29);
var parseHeaders = __webpack_require__(30);
var isURLSameOrigin = __webpack_require__(31);
var createError = __webpack_require__(15);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(32);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(33);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(28);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocal_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocal_vue__);

function install (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocal_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocal_vue___default.a)
}
__WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocal_vue___default.a.install = install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocal_vue___default.a);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(12);
var Axios = __webpack_require__(25);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(17);
axios.CancelToken = __webpack_require__(39);
axios.isCancel = __webpack_require__(16);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(40);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(34);
var dispatchRequest = __webpack_require__(35);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(15);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(36);
var isCancel = __webpack_require__(16);
var defaults = __webpack_require__(5);
var isAbsoluteURL = __webpack_require__(37);
var combineURLs = __webpack_require__(38);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(17);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(42);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(13)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(47)
/* template */
var __vue_template__ = __webpack_require__(53)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "node_modules\\vue-datepicker-local\\src\\VueDatepickerLocal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16367078", Component.options)
  } else {
    hotAPI.reload("data-v-16367078", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("76d13e6e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16367078\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./VueDatepickerLocal.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16367078\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./VueDatepickerLocal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.datepicker {\n  display: inline-block;\n  position: relative;\n}\n.datepicker:before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 34px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxwYXRoIGQ9Ik01NjQgMTgwLjJINDQ4Yy04LjMgMC0xNS02LjctMTUtMTVzNi43LTE1IDE1LTE1aDExNmM4LjIgMCAxNSA2LjcgMTUgMTVzLTYuOCAxNS0xNSAxNXoiIGZpbGw9IiM5ODk4OTgiLz48cGF0aCBkPSJNOTQ1IDk1Mi4ySDgxLjJjLTguMiAwLTE1LTYuNy0xNS0xNVYxNjIuOGMwLTguMyA2LjgtMTUgMTUtMTVIMjk0YzguMiAwIDE1IDYuNyAxNSAxNXMtNi44IDE1LTE1IDE1SDk2LjJ2NzQ0LjRIOTMwVjE3Ny44SDcxMy42Yy04LjMgMC0xNS02LjctMTUtMTVzNi43LTE1IDE1LTE1SDk0NWM4LjIgMCAxNSA2LjcgMTUgMTV2Nzc0LjRjMCA4LjMtNi44IDE1LTE1IDE1eiIgZmlsbD0iIzk4OTg5OCIvPjxwYXRoIGQ9Ik0zMzMuMyA1NTFIMjE2Yy04LjIgMC0xNS02LjgtMTUtMTVzNi44LTE1IDE1LTE1aDExNy4zYzguMyAwIDE1IDYuNiAxNSAxNXMtNi43IDE1LTE1IDE1em0yMzAuMyAwSDQ0Ni4zYy04LjMgMC0xNS02LjgtMTUtMTVzNi43LTE1IDE1LTE1aDExNy4zYzguMiAwIDE1IDYuNiAxNSAxNXMtNi44IDE1LTE1IDE1em0yMzAuMiAwSDY3Ni42Yy04LjMgMC0xNS02LjgtMTUtMTVzNi43LTE1IDE1LTE1aDExNy4yYzguMyAwIDE1IDYuNiAxNSAxNXMtNi43IDE1LTE1IDE1ek0zMzMuMyA3NDBIMjE2Yy04LjIgMC0xNS02LjgtMTUtMTVzNi44LTE1IDE1LTE1aDExNy4zYzguMyAwIDE1IDYuNiAxNSAxNXMtNi43IDE1LTE1IDE1em0yMzAuMyAwSDQ0Ni4zYy04LjMgMC0xNS02LjgtMTUtMTVzNi43LTE1IDE1LTE1aDExNy4zYzguMiAwIDE1IDYuNiAxNSAxNXMtNi44IDE1LTE1IDE1em0yMzAuMiAwSDY3Ni42Yy04LjMgMC0xNS02LjgtMTUtMTVzNi43LTE1IDE1LTE1aDExNy4yYzguMyAwIDE1IDYuNiAxNSAxNXMtNi43IDE1LTE1IDE1ek0zNzAuOCAyNTguNmMtOC4zIDAtMTUtNi43LTE1LTE1Vjg2LjhjMC04LjIgNi43LTE1IDE1LTE1czE1IDYuOCAxNSAxNXYxNTYuOGMwIDguMy02LjcgMTUtMTUgMTV6bTI3MC4yIDBjLTguMyAwLTE1LTYuNy0xNS0xNVY4Ni44YzAtOC4yIDYuNy0xNSAxNS0xNXMxNSA2LjggMTUgMTV2MTU2LjhjMCA4LjMtNi43IDE1LTE1IDE1ek05NDUgMzcyLjJIODEuMmMtOC4yIDAtMTUtNi43LTE1LTE1czYuOC0xNSAxNS0xNUg5NDVjOC4yIDAgMTUgNi43IDE1IDE1cy02LjggMTUtMTUgMTV6IiBmaWxsPSIjOTg5ODk4Ii8+PC9zdmc+') no-repeat 50% 50%;\n}\n.datepicker-close {\n  display: none;\n  position: absolute;\n  width: 34px;\n  height: 100%;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n.datepicker-close:before {\n  display: block;\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 50%;\n  top: 50%;\n  margin-left: -8px;\n  margin-top: -8px;\n  text-align: center;\n  background: #ccc;\n  color: #fff;\n  border-radius: 50%;\n  background:#ccc url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3IDciIHdpZHRoPSI3IiBoZWlnaHQ9IjciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01LjU4LDVsMi44LTIuODFBLjQxLjQxLDAsMSwwLDcuOCwxLjZMNSw0LjQxLDIuMiwxLjZhLjQxLjQxLDAsMCwwLS41OC41OGgwTDQuNDIsNSwxLjYyLDcuOGEuNDEuNDEsMCwwLDAsLjU4LjU4TDUsNS41OCw3LjgsOC4zOWEuNDEuNDEsMCwwLDAsLjU4LS41OGgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNSAtMS40OCkiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4NCg==') no-repeat 50% 50%;\n}\n.datepicker__clearable:hover:before {\n  display: none;\n}\n.datepicker__clearable:hover .datepicker-close{\n  display: block;\n}\n.datepicker-close:hover:before{\n  background-color: #afafaf;\n}\n.datepicker>input {\n  color: #666;\n  -webkit-transition: all 200ms ease;\n  transition: all 200ms ease;\n  border: 1px solid #e5e5e5;\n  height: 34px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  outline: none;\n  padding: 0 34px 0 12px;\n  font-size: 14px;\n  width: 100%;\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.datepicker>input.focus {\n  border-color: #3bb4f2;\n  -webkit-box-shadow: 0 0 5px rgba(59, 180, 242, .3);\n  box-shadow: 0 0 5px rgba(59, 180, 242, .3);\n}\n.datepicker>input:disabled {\n  cursor: not-allowed;\n  background-color: #ebebe4;\n  border-color: #e5e5e5;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.datepicker-popup {\n  position: absolute;\n  -webkit-transition: all 200ms ease;\n  transition: all 200ms ease;\n  opacity: 1;\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n  -webkit-transform-origin: center top;\n          transform-origin: center top;\n  font-size: 12px;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  -webkit-box-shadow: 0 1px 6px rgba(99, 99, 99, 0.2);\n          box-shadow: 0 1px 6px rgba(99, 99, 99, 0.2);\n  margin-top: 2px;\n  outline: 0;\n  padding: 5px;\n  overflow: hidden;\n  z-index: 999\n}\n.datepicker-inline{\n  position: relative;\n  margin-top: 0;\n}\n.datepicker-range {\n  min-width: 325px\n}\n.datepicker-range .datepicker-popup{\n  width: 403px;\n}\n.datepicker-bottom {\n  float: left;\n  width: 100%;\n  text-align: right;\n}\n.datepicker-btn {\n  padding: 5px 10px;\n  background: #1284e7;\n  color: #fff;\n  border-radius: 2px;\n  display: inline-block;\n  cursor: pointer;\n}\n.datepicker-anim-enter-active {\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-animation: datepicker-anim-in .2s cubic-bezier(.23, 1, .32, 1);\n            animation: datepicker-anim-in .2s cubic-bezier(.23, 1, .32, 1)\n}\n.datepicker-anim-leave-active {\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    -webkit-animation: datepicker-anim-out .2s cubic-bezier(.755, .05, .855, .06);\n            animation: datepicker-anim-out .2s cubic-bezier(.755, .05, .855, .06)\n}\n.datepicker__buttons {\n  display: block;\n  text-align: right;\n}\n.datepicker__buttons button {\n  display: inline-block;\n  font-size: 13px;\n  border: none;\n  cursor: pointer;\n  margin: 10px 0 0 5px;\n  padding: 5px 15px;\n  color: #ffffff;\n}\n.datepicker__buttons .datepicker__button-select {\n  background: #1284e7;\n}\n.datepicker__buttons .datepicker__button-cancel {\n  background: #666;\n}\n@-webkit-keyframes datepicker-anim-in {\n0% {\n        opacity: 0;\n        -webkit-transform: scaleY(.8);\n                transform: scaleY(.8)\n}\nto {\n        opacity: 1;\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1)\n}\n}\n@keyframes datepicker-anim-in {\n0% {\n        opacity: 0;\n        -webkit-transform: scaleY(.8);\n                transform: scaleY(.8)\n}\nto {\n        opacity: 1;\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1)\n}\n}\n@-webkit-keyframes datepicker-anim-out {\n0% {\n        opacity: 1;\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1)\n}\nto {\n        opacity: 0;\n        -webkit-transform: scaleY(.8);\n                transform: scaleY(.8)\n}\n}\n@keyframes datepicker-anim-out {\n0% {\n        opacity: 1;\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1)\n}\nto {\n        opacity: 0;\n        -webkit-transform: scaleY(.8);\n                transform: scaleY(.8)\n}\n}\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocalCalendar_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocalCalendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocalCalendar_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VueDatepickerLocal',
  components: { VueDatepickerLocalCalendar: __WEBPACK_IMPORTED_MODULE_0__VueDatepickerLocalCalendar_vue___default.a },
  props: {
    name: [String],
    inputClass: [String],
    popupClass: [String],
    value: [Date, Array, String],
    disabled: [Boolean],
    type: {
      type: String,
      default: 'normal'
    },
    rangeSeparator: {
      type: String,
      default: '~'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: [String],
    disabledDate: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    local: {
      type: Object,
      default: function _default() {
        return {
          dow: 1, // Monday is the first day of the week
          hourTip: '选择小时', // tip of select hour
          minuteTip: '选择分钟', // tip of select minute
          secondTip: '选择秒数', // tip of select second
          yearSuffix: '年', // format of head
          monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'), // months of head
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), // months of panel
          weeks: '一_二_三_四_五_六_日'.split('_'), // weeks
          cancelTip: '取消', // default text for cancel button
          submitTip: '确定' // default text for submit button
        };
      }
    },
    showButtons: {
      type: Boolean,
      default: false
    },
    dateRangeSelect: [Function]
  },
  data: function data() {
    return {
      show: false,
      dates: this.vi(this.value)
    };
  },

  computed: {
    range: function range() {
      return this.dates.length === 2;
    },
    text: function text() {
      var _this = this;

      var val = this.value;
      var txt = this.dates.map(function (date) {
        return _this.tf(date);
      }).join(' ' + this.rangeSeparator + ' ');
      if (Array.isArray(val)) {
        return val.length > 1 ? txt : '';
      } else {
        return val ? txt : '';
      }
    }
  },
  watch: {
    value: function value(val) {
      this.dates = this.vi(this.value);
    }
  },
  methods: {
    get: function get() {
      return Array.isArray(this.value) ? this.dates : this.dates[0];
    },
    cls: function cls() {
      this.$emit('input', this.range ? [] : '');
    },
    vi: function vi(val) {
      if (Array.isArray(val)) {
        return val.length > 1 ? val.map(function (item) {
          return new Date(item);
        }) : [new Date(), new Date()];
      } else {
        return val ? new Array(new Date(val)) : [new Date()];
      }
    },
    ok: function ok(leaveOpened) {
      var $this = this;
      $this.$emit('input', $this.get());
      !leaveOpened && !$this.showButtons && setTimeout(function () {
        $this.show = $this.range;
      });
    },
    tf: function tf(time, format) {
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
      var map = {
        YYYY: year,
        MM: dd(month + 1),
        MMM: this.local.months[month],
        MMMM: this.local.monthsHead[month],
        M: month + 1,
        DD: dd(day),
        D: day,
        HH: dd(hours24),
        H: hours24,
        hh: dd(hours),
        h: hours,
        mm: dd(minutes),
        m: minutes,
        ss: dd(seconds),
        s: seconds,
        S: milliseconds
      };
      return (format || this.format).replace(/Y+|M+|D+|H+|h+|m+|s+|S+/g, function (str) {
        return map[str];
      });
    },
    dc: function dc(e) {
      this.show = this.$el.contains(e.target) && !this.disabled;
    },
    submit: function submit() {
      this.$emit('confirm', this.get());
      this.show = false;
    },
    cancel: function cancel() {
      this.show = false;
    }
  },
  mounted: function mounted() {
    document.addEventListener('click', this.dc, true);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.dc, true);
  }
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(51)
/* template */
var __vue_template__ = __webpack_require__(52)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "node_modules\\vue-datepicker-local\\src\\VueDatepickerLocalCalendar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84adde54", Component.options)
  } else {
    hotAPI.reload("data-v-84adde54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3c4081ab", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84adde54\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./VueDatepickerLocalCalendar.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84adde54\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./VueDatepickerLocalCalendar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.calendar {\n  float: left;\n  display: inline-block;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.calendar+.calendar{\n  border-left: solid 1px #eaeaea;\n  margin-left: 5px;\n  padding-left: 5px;\n}\n.calendar-head {\n  line-height: 34px;\n  height: 34px;\n  text-align: center;\n  position: relative;\n}\n.calendar-head a {\n  color: #666;\n  font-weight: bold;\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  position: absolute;\n  padding: 0 5px;\n  font-size: 16px;\n}\n.calendar-head a:hover {\n  color: #1284e7;\n}\n.calendar-head .calendar-year-select,\n.calendar-head .calendar-month-select {\n  font-size: 12px;\n  padding: 0 2px;\n  position: relative;\n}\n.calendar-prev-decade-btn,\n.calendar-prev-year-btn {\n  left: 6px;\n}\n.calendar-prev-month-btn {\n  left: 24px;\n}\n.calendar-next-decade-btn,\n.calendar-next-year-btn {\n  right: 6px;\n}\n.calendar-next-month-btn {\n  right: 24px;\n}\n.calendar-body {\n  position: relative;\n  width: 196px;\n  height: 196px;\n}\n.calendar-days {\n  width: 100%;\n  height: 100%;\n}\n.calendar-week,\n.calendar-date {\n  font-weight: normal;\n  width: 14.28%;\n  height: 14.28%;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  float: left;\n}\n.calendar-week:before,\n.calendar-date:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.calendar-date {\n  cursor: pointer;\n}\n.calendar-date-out {\n  color: #ccc;\n}\n.calendar-date:hover,\n.calendar-date-on {\n  background: #eaf8fe;\n}\n.calendar-date-selected,\n.calendar-date-selected:hover {\n  color: #fff;\n  font-weight: bold;\n  background: #1284e7;\n}\n.calendar-date-disabled {\n  cursor: not-allowed !important;\n  color: #bcbcbc !important;\n  background: #f3f3f3 !important;\n}\n.calendar-foot {\n  margin-top: 5px;\n}\n.calendar-hour {\n  display: inline-block;\n  border: 1px solid #e6e5e5;\n  color: #9e9e9e;\n}\n.calendar-hour a {\n  display: inline-block;\n  padding: 2px 4px;\n  cursor: pointer;\n}\n.calendar-hour a:hover,\n.calendar-hour a.on {\n  color: #1284e7;\n}\n.calendar-years,\n.calendar-months,\n.calendar-hours,\n.calendar-minutes,\n.calendar-seconds {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: #fff;\n  left: 0;\n  top: 0;\n}\n.calendar-months a {\n  width: 33.33%;\n  height: 25%;\n}\n.calendar-years a {\n  width: 33.33%;\n  height: 25%;\n}\n.calendar-hours a {\n  width: 20%;\n  height: 20%;\n}\n.calendar-minutes a,\n.calendar-seconds a {\n  width: 16.66%;\n  height: 10%;\n}\n.calendar-title {\n  margin-top: -30px;\n  height: 30px;\n  line-height: 30px;\n  background: #fff;\n  text-align: center;\n  font-weight: bold;\n}\n", ""]);

// exports


/***/ }),
/* 51 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VueDatepickerLocalCalendar',
  props: {
    value: null,
    left: false,
    right: false
  },
  data: function data() {
    var time = this.get(this.value);
    return {
      pre: 'calendar',
      m: 'D',
      showYears: false,
      showMonths: false,
      showHours: false,
      showMinutes: false,
      showSeconds: false,
      year: time.year,
      month: time.month,
      day: time.day,
      hour: time.hour,
      minute: time.minute,
      second: time.second
    };
  },

  watch: {
    value: function value(val) {
      var $this = this;
      var time = $this.get(val);
      $this.year = time.year;
      $this.month = time.month;
      $this.day = time.day;
      $this.hour = time.hour;
      $this.minute = time.minute;
      $this.second = time.second;
    }
  },
  computed: {
    local: function local() {
      return this.$parent.local;
    },
    format: function format() {
      return this.$parent.format;
    },
    start: function start() {
      return this.parse(this.$parent.dates[0]);
    },
    end: function end() {
      return this.parse(this.$parent.dates[1]);
    },
    ys: function ys() {
      return parseInt(this.year / 10) * 10;
    },
    ye: function ye() {
      return this.ys + 10;
    },
    years: function years() {
      var arr = [];
      var start = this.ys - 1;
      while (arr.length < 12) {
        arr.push(start++);
      }
      return arr;
    },
    days: function days() {
      var days = [];
      var $this = this;
      var year = $this.year;
      var month = $this.month;
      var time = new Date(year, month, 1);
      var dow = $this.local.dow || 7;
      time.setDate(0); // switch to the last day of last month
      var lastDay = time.getDate();
      var week = time.getDay() || 7;
      var count = dow <= week ? week - dow + 1 : week + (7 - dow + 1);
      while (count > 0) {
        days.push({
          i: lastDay - count + 1,
          y: month > 0 ? year : year - 1,
          m: month > 0 ? month - 1 : 11,
          p: true
        });
        count--;
      }
      time.setMonth(time.getMonth() + 2, 0); // switch to the last day of the current month
      lastDay = time.getDate();
      var i = 1;
      for (i = 1; i <= lastDay; i++) {
        days.push({
          i: i,
          y: year,
          m: month
        });
      }
      for (i = 1; days.length < 42; i++) {
        days.push({
          i: i,
          y: month < 11 ? year : year + 1,
          m: month < 11 ? month + 1 : 0,
          n: true
        });
      }
      return days;
    }
  },
  filters: {
    dd: function dd(val) {
      return ('0' + val).slice(-2);
    }
  },
  methods: {
    get: function get(time) {
      return {
        year: time.getFullYear(),
        month: time.getMonth(),
        day: time.getDate(),
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      };
    },
    parse: function parse(num) {
      return parseInt(num / 1000);
    },
    status: function status(year, month, day, hour, minute, second, format) {
      var $this = this;
      var maxDay = new Date(year, month + 1, 0).getDate();
      var time = new Date(year, month, day > maxDay ? maxDay : day, hour, minute, second);
      var t = $this.parse(time);
      var f = $this.$parent.tf;
      var classObj = {};
      var flag = false;
      if (format === 'YYYY') {
        flag = year === $this.year;
      } else if (format === 'YYYYMM') {
        flag = month === $this.month;
      } else {
        flag = f($this.value, format) === f(time, format);
      }
      classObj[$this.pre + '-date'] = true;
      classObj[$this.pre + '-date-disabled'] = $this.right && t < $this.start || $this.left && t > $this.end || $this.$parent.disabledDate(time, format);
      classObj[$this.pre + '-date-on'] = $this.left && t > $this.start || $this.right && t < $this.end;
      classObj[$this.pre + '-date-selected'] = flag;
      return classObj;
    },
    nm: function nm() {
      if (this.month < 11) {
        this.month++;
      } else {
        this.month = 0;
        this.year++;
      }
    },
    pm: function pm() {
      if (this.month > 0) {
        this.month--;
      } else {
        this.month = 11;
        this.year--;
      }
    },
    is: function is(e) {
      return e.target.className.indexOf(this.pre + '-date-disabled') === -1;
    },
    ok: function ok(info) {
      var $this = this;
      var year = '';
      var month = '';
      info && info.n && $this.nm();
      info && info.p && $this.pm();
      if (info === 'h') {
        var time = $this.get(this.value);
        year = time.year;
        month = time.month;
      }
      $this.$emit('input', new Date(year || $this.year, month || $this.month, $this.day, $this.hour, $this.minute, $this.second));
      $this.$parent.ok(info === 'h');
    }
  },
  mounted: function mounted() {
    var $this = this;
    var is = function is(c) {
      return $this.format.indexOf(c) !== -1;
    };
    if (is('s') && is('m') && (is('h') || is('H'))) {
      $this.m = 'H';
    } else if (is('D')) {
      $this.m = 'D';
    } else if (is('M')) {
      $this.m = 'M';
      $this.showMonths = true;
    } else if (is('Y')) {
      $this.m = 'Y';
      $this.showYears = true;
    }
  }
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: "" + _vm.pre }, [
    _c(
      "div",
      { class: _vm.pre + "-head" },
      [
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showYears,
                expression: "showYears"
              }
            ],
            class: _vm.pre + "-prev-decade-btn",
            on: {
              click: function($event) {
                _vm.year -= 10
              }
            }
          },
          [_vm._v("«")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.showYears,
                expression: "!showYears"
              }
            ],
            class: _vm.pre + "-prev-year-btn",
            on: {
              click: function($event) {
                _vm.year--
              }
            }
          },
          [_vm._v("«")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.showYears && !_vm.showMonths,
                expression: "!showYears&&!showMonths"
              }
            ],
            class: _vm.pre + "-prev-month-btn",
            on: { click: _vm.pm }
          },
          [_vm._v("‹")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showYears,
                expression: "showYears"
              }
            ],
            class: _vm.pre + "-year-select"
          },
          [_vm._v(_vm._s(_vm.ys + "-" + _vm.ye))]
        ),
        _vm._v(" "),
        _vm.local.yearSuffix
          ? [
              _c(
                "a",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.showYears,
                      expression: "!showYears"
                    }
                  ],
                  class: _vm.pre + "-year-select",
                  on: {
                    click: function($event) {
                      _vm.showYears = !_vm.showYears
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.year) + _vm._s(_vm.local.yearSuffix))]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.showYears && !_vm.showMonths,
                      expression: "!showYears&&!showMonths"
                    }
                  ],
                  class: _vm.pre + "-month-select",
                  on: {
                    click: function($event) {
                      _vm.showMonths = !_vm.showMonths
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.local.monthsHead[_vm.month]))]
              )
            ]
          : [
              _c(
                "a",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.showYears && !_vm.showMonths,
                      expression: "!showYears&&!showMonths"
                    }
                  ],
                  class: _vm.pre + "-month-select",
                  on: {
                    click: function($event) {
                      _vm.showMonths = !_vm.showMonths
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.local.monthsHead[_vm.month]))]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.showYears,
                      expression: "!showYears"
                    }
                  ],
                  class: _vm.pre + "-year-select",
                  on: {
                    click: function($event) {
                      _vm.showYears = !_vm.showYears
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.year))]
              )
            ],
        _vm._v(" "),
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.showYears && !_vm.showMonths,
                expression: "!showYears&&!showMonths"
              }
            ],
            class: _vm.pre + "-next-month-btn",
            on: { click: _vm.nm }
          },
          [_vm._v("›")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.showYears,
                expression: "!showYears"
              }
            ],
            class: _vm.pre + "-next-year-btn",
            on: {
              click: function($event) {
                _vm.year++
              }
            }
          },
          [_vm._v("»")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showYears,
                expression: "showYears"
              }
            ],
            class: _vm.pre + "-next-decade-btn",
            on: {
              click: function($event) {
                _vm.year += 10
              }
            }
          },
          [_vm._v("»")]
        )
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { class: _vm.pre + "-body" }, [
      _c(
        "div",
        { class: _vm.pre + "-days" },
        [
          _vm._l(_vm.local.weeks, function(i) {
            return _c("a", { key: i, class: _vm.pre + "-week" }, [
              _vm._v(_vm._s(i))
            ])
          }),
          _vm._v(" "),
          _vm._l(_vm.days, function(j, i) {
            return _c(
              "a",
              {
                key: i,
                class: [
                  j.p || j.n ? _vm.pre + "-date-out" : "",
                  _vm.status(
                    j.y,
                    j.m,
                    j.i,
                    _vm.hour,
                    _vm.minute,
                    _vm.second,
                    "YYYYMMDD"
                  )
                ],
                on: {
                  click: function($event) {
                    _vm.is($event) && ((_vm.day = j.i), _vm.ok(j))
                  }
                }
              },
              [_vm._v(_vm._s(j.i))]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showMonths,
              expression: "showMonths"
            }
          ],
          class: _vm.pre + "-months"
        },
        _vm._l(_vm.local.months, function(i, j) {
          return _c(
            "a",
            {
              key: j,
              class: [
                _vm.status(
                  _vm.year,
                  j,
                  _vm.day,
                  _vm.hour,
                  _vm.minute,
                  _vm.second,
                  "YYYYMM"
                )
              ],
              on: {
                click: function($event) {
                  _vm.is($event) &&
                    ((_vm.showMonths = _vm.m === "M"),
                    (_vm.month = j),
                    _vm.m === "M" && _vm.ok())
                }
              }
            },
            [_vm._v(_vm._s(i))]
          )
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showYears,
              expression: "showYears"
            }
          ],
          class: _vm.pre + "-years"
        },
        _vm._l(_vm.years, function(i, j) {
          return _c(
            "a",
            {
              key: j,
              class: [
                j === 0 || j === 11 ? _vm.pre + "-date-out" : "",
                _vm.status(
                  i,
                  _vm.month,
                  _vm.day,
                  _vm.hour,
                  _vm.minute,
                  _vm.second,
                  "YYYY"
                )
              ],
              on: {
                click: function($event) {
                  _vm.is($event) &&
                    ((_vm.showYears = _vm.m === "Y"),
                    (_vm.year = i),
                    _vm.m === "Y" && _vm.ok())
                }
              }
            },
            [_vm._v(_vm._s(i))]
          )
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showHours,
              expression: "showHours"
            }
          ],
          class: _vm.pre + "-hours"
        },
        [
          _c("div", { class: _vm.pre + "-title" }, [
            _vm._v(_vm._s(_vm.local.hourTip))
          ]),
          _vm._v(" "),
          _vm._l(24, function(j, i) {
            return _c(
              "a",
              {
                key: i,
                class: [
                  _vm.status(
                    _vm.year,
                    _vm.month,
                    _vm.day,
                    i,
                    _vm.minute,
                    _vm.second,
                    "YYYYMMDDHH"
                  )
                ],
                on: {
                  click: function($event) {
                    _vm.is($event) &&
                      ((_vm.showHours = false), (_vm.hour = i), _vm.ok("h"))
                  }
                }
              },
              [_vm._v(_vm._s(i))]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showMinutes,
              expression: "showMinutes"
            }
          ],
          class: _vm.pre + "-minutes"
        },
        [
          _c("div", { class: _vm.pre + "-title" }, [
            _vm._v(_vm._s(_vm.local.minuteTip))
          ]),
          _vm._v(" "),
          _vm._l(60, function(j, i) {
            return _c(
              "a",
              {
                key: i,
                class: [
                  _vm.status(
                    _vm.year,
                    _vm.month,
                    _vm.day,
                    _vm.hour,
                    i,
                    _vm.second,
                    "YYYYMMDDHHmm"
                  )
                ],
                on: {
                  click: function($event) {
                    _vm.is($event) &&
                      ((_vm.showMinutes = false), (_vm.minute = i), _vm.ok("h"))
                  }
                }
              },
              [_vm._v(_vm._s(i))]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showSeconds,
              expression: "showSeconds"
            }
          ],
          class: _vm.pre + "-seconds"
        },
        [
          _c("div", { class: _vm.pre + "-title" }, [
            _vm._v(_vm._s(_vm.local.secondTip))
          ]),
          _vm._v(" "),
          _vm._l(60, function(j, i) {
            return _c(
              "a",
              {
                key: i,
                class: [
                  _vm.status(
                    _vm.year,
                    _vm.month,
                    _vm.day,
                    _vm.hour,
                    _vm.minute,
                    i,
                    "YYYYMMDDHHmmss"
                  )
                ],
                on: {
                  click: function($event) {
                    _vm.is($event) &&
                      ((_vm.showSeconds = false), (_vm.second = i), _vm.ok("h"))
                  }
                }
              },
              [_vm._v(_vm._s(i))]
            )
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm.m === "H"
      ? _c("div", { class: _vm.pre + "-foot" }, [
          _c("div", { class: _vm.pre + "-hour" }, [
            _c(
              "a",
              {
                class: { on: _vm.showHours },
                attrs: { title: _vm.local.hourTip },
                on: {
                  click: function($event) {
                    ;(_vm.showHours = !_vm.showHours),
                      (_vm.showMinutes = _vm.showSeconds = false)
                  }
                }
              },
              [_vm._v(_vm._s(_vm._f("dd")(_vm.hour)))]
            ),
            _vm._v(" "),
            _c("span", [_vm._v(":")]),
            _vm._v(" "),
            _c(
              "a",
              {
                class: { on: _vm.showMinutes },
                attrs: { title: _vm.local.minuteTip },
                on: {
                  click: function($event) {
                    ;(_vm.showMinutes = !_vm.showMinutes),
                      (_vm.showHours = _vm.showSeconds = false)
                  }
                }
              },
              [_vm._v(_vm._s(_vm._f("dd")(_vm.minute)))]
            ),
            _vm._v(" "),
            _c("span", [_vm._v(":")]),
            _vm._v(" "),
            _c(
              "a",
              {
                class: { on: _vm.showSeconds },
                attrs: { title: _vm.local.secondTip },
                on: {
                  click: function($event) {
                    ;(_vm.showSeconds = !_vm.showSeconds),
                      (_vm.showHours = _vm.showMinutes = false)
                  }
                }
              },
              [_vm._v(_vm._s(_vm._f("dd")(_vm.second)))]
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-84adde54", module.exports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "datepicker",
      class: {
        "datepicker-range": _vm.range,
        datepicker__clearable: _vm.clearable && _vm.text && !_vm.disabled
      }
    },
    [
      _vm.type !== "inline"
        ? _c("input", {
            class: [_vm.show ? "focus" : "", _vm.inputClass],
            attrs: {
              readonly: "",
              disabled: _vm.disabled,
              placeholder: _vm.placeholder,
              name: _vm.name
            },
            domProps: { value: _vm.text }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("a", {
        staticClass: "datepicker-close",
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.cls($event)
          }
        }
      }),
      _vm._v(" "),
      _c("transition", { attrs: { name: "datepicker-anim" } }, [
        _vm.show || _vm.type === "inline"
          ? _c(
              "div",
              {
                staticClass: "datepicker-popup",
                class: [
                  _vm.popupClass,
                  { "datepicker-inline": _vm.type === "inline" }
                ],
                attrs: { tabindex: "-1" }
              },
              [
                _vm.range
                  ? [
                      _c("vue-datepicker-local-calendar", {
                        attrs: { left: true },
                        model: {
                          value: _vm.dates[0],
                          callback: function($$v) {
                            _vm.$set(_vm.dates, 0, $$v)
                          },
                          expression: "dates[0]"
                        }
                      }),
                      _vm._v(" "),
                      _c("vue-datepicker-local-calendar", {
                        attrs: { right: true },
                        model: {
                          value: _vm.dates[1],
                          callback: function($$v) {
                            _vm.$set(_vm.dates, 1, $$v)
                          },
                          expression: "dates[1]"
                        }
                      })
                    ]
                  : [
                      _c("vue-datepicker-local-calendar", {
                        model: {
                          value: _vm.dates[0],
                          callback: function($$v) {
                            _vm.$set(_vm.dates, 0, $$v)
                          },
                          expression: "dates[0]"
                        }
                      })
                    ],
                _vm._v(" "),
                _vm.showButtons
                  ? _c("div", { staticClass: "datepicker__buttons" }, [
                      _c(
                        "button",
                        {
                          staticClass: "datepicker__button-cancel",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              $event.stopPropagation()
                              return _vm.cancel($event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(this.local.cancelTip))]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "datepicker__button-select",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              $event.stopPropagation()
                              return _vm.submit($event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(this.local.submitTip))]
                      )
                    ])
                  : _vm._e()
              ],
              2
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-16367078", module.exports)
  }
}

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(19);
__webpack_require__(18);
__webpack_require__(11);
__webpack_require__(8);
module.exports = __webpack_require__(7);


/***/ })
],[66]);