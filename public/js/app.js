/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(2);
var isBuffer = __webpack_require__(12);

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
  if (typeof obj !== 'object' && !isArray(obj)) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(15);

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
    adapter = __webpack_require__(3);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(3);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(16);
var buildURL = __webpack_require__(18);
var parseHeaders = __webpack_require__(19);
var isURLSameOrigin = __webpack_require__(20);
var createError = __webpack_require__(4);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(21);

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
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
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
      var cookies = __webpack_require__(22);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(17);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(30);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(9);

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qiniu_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qiniu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qiniu_js__);
// window._ = require('lodash');

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

window.axios = __webpack_require__(10);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(13);
var defaults = __webpack_require__(1);

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
axios.Cancel = __webpack_require__(6);
axios.CancelToken = __webpack_require__(28);
axios.isCancel = __webpack_require__(5);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(29);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(23);
var dispatchRequest = __webpack_require__(24);
var isAbsoluteURL = __webpack_require__(26);
var combineURLs = __webpack_require__(27);

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

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(4);

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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

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
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(25);
var isCancel = __webpack_require__(5);
var defaults = __webpack_require__(1);

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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(6);

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
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

/*!
 * qiniu-js-sdk v1.0.22
 *
 * Copyright 2015 by Qiniu
 * Released under GPL V2 License.
 *
 * GitHub: http://github.com/qiniu/js-sdk
 *
 * Date: 2017-8-17
 */

/*global plupload ,moxie*/
/*global ActiveXObject */
/*exported Qiniu */
/*exported QiniuJsSDK */

;(function (global) {

    /**
     * Creates new cookie or removes cookie with negative expiration
     * @param  key       The key or identifier for the store
     * @param  value     Contents of the store
     * @param  exp       Expiration - creation defaults to 30 days
     */
    function createCookie(key, value, exp) {
        var date = new Date();
        date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        document.cookie = key + "=" + value + expires + "; path=/";
    }

    /**
     * Returns contents of cookie
     * @param  key       The key or identifier for the store
     */
    function readCookie(key) {
        var nameEQ = key + "=";
        var ca = document.cookie.split(';');
        for (var i = 0, max = ca.length; i < max; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    // if current browser is not support localStorage
    // use cookie to make a polyfill
    if (!window.localStorage) {
        window.localStorage = {
            setItem: function (key, value) {
                createCookie(key, value, 30);
            },
            getItem: function (key) {
                return readCookie(key);
            },
            removeItem: function (key) {
                createCookie(key, '', -1);
            }
        };
    }

    function QiniuJsSDK() {

        var that = this;

        /**
         * detect IE version
         * if current browser is not IE
         *     it will return false
         * else
         *     it will return version of current IE browser
         * @return {Number|Boolean} IE version or false
         */
        this.detectIEVersion = function () {
            var v = 4,
                div = document.createElement('div'),
                all = div.getElementsByTagName('i');
            while (
                div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->',
                all[0]
            ) {
                v++;
            }
            return v > 4 ? v : false;
        };

        var logger = {
            MUTE: 0,
            FATA: 1,
            ERROR: 2,
            WARN: 3,
            INFO: 4,
            DEBUG: 5,
            TRACE: 6,
            level: 0
        };

        function log(type, args) {
            var header = "[qiniu-js-sdk][" + type + "]";
            var msg = header;
            for (var i = 0; i < args.length; i++) {
                if (typeof args[i] === "string") {
                    msg += " " + args[i];
                } else {
                    msg += " " + that.stringifyJSON(args[i]);
                }
            }
            if (that.detectIEVersion()) {
                // http://stackoverflow.com/questions/5538972/console-log-apply-not-working-in-ie9
                //var log = Function.prototype.bind.call(console.log, console);
                //log.apply(console, args);
                console.log(msg);
            } else {
                args.unshift(header);
                console.log.apply(console, args);
            }
            if (document.getElementById('qiniu-js-sdk-log')) {
                document.getElementById('qiniu-js-sdk-log').innerHTML += '<p>' + msg + '</p>';
            }
        }

        function makeLogFunc(code) {
            var func = code.toLowerCase();
            logger[func] = function () {
                // logger[func].history = logger[func].history || [];
                // logger[func].history.push(arguments);
                if (window.console && window.console.log && logger.level >= logger[code]) {
                    var args = Array.prototype.slice.call(arguments);
                    log(func, args);
                }
            };
        }

        for (var property in logger) {
            if (logger.hasOwnProperty(property) && (typeof logger[property]) === "number" && !logger.hasOwnProperty(property.toLowerCase())) {
                makeLogFunc(property);
            }
        }


        var qiniuUploadUrl;
        if (window.location.protocol === 'https:') {
            qiniuUploadUrl = 'https://up.qbox.me';
        } else {
            qiniuUploadUrl = 'http://upload.qiniu.com';
        }

        /**
         * qiniu upload urls
         * 'qiniuUploadUrls' is used to change target when current url is not avaliable
         * @type {Array}
         */
        var qiniuUploadUrls = [
            "http://upload.qiniu.com",
            "http://up.qiniu.com"
        ];

        var qiniuUpHosts = {
            "http": [
                "http://upload.qiniu.com",
                "http://up.qiniu.com"
            ],
            "https": [
                "https://up.qbox.me"
            ]
        };

        var changeUrlTimes = 0;

        function StatisticsLogger() {
            // api to collect upload logs
            var qiniuCollectUploadLogUrl = "https://uplog.qbox.me/log/3";

            /**
             * { log: string, status: number }[] status: 0 待处理， 1 正在发送， 2 发送完毕  
             */
            var queue = [];
            var TaskStatus = {
                waiting: 0,
                processing: 1,
                finished: 2
            };

            /**
             * send logs to statistics server
             * 
             * @param {number} code status code
             * @param {string} req_id request id
             * @param {string} host 
             * @param {string} remote_ip
             * @param {string} port 
             * @param {string} duration 
             * @param {string} up_time 
             * @param {number} bytes_sent uploaded size (bytes)
             * @param {string} up_type js sdk runtime: html5, html4, flash
             * @param {number} file_size file total size (bytes)
             */
            this.log = function (code, req_id, host, remote_ip, port, duration, up_time, bytes_sent, up_type, file_size) {
                var log = Array.prototype.join.call(arguments, ',');
                queue.push({
                    log: log,
                    status: TaskStatus.waiting
                });
                logger.debug("[STATISTICS] send log to statistics server", log);
            };

            function tick() {
                var unFinishedTasks = [];
                for (var i = 0; i < queue.length; i++) {
                    if (queue[i].status !== TaskStatus.finished) {
                        unFinishedTasks.push(queue[i]);
                    }
                    if (queue[i].status === TaskStatus.waiting) {
                        send(queue[i]);
                    }
                }
                queue = unFinishedTasks;
            }

            function send(task) {
                task.status = TaskStatus.processing;
                var ajax = that.createAjax();
                ajax.open('POST', qiniuCollectUploadLogUrl, true);
                ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                ajax.setRequestHeader('Authorization', 'UpToken ' + that.token);
                ajax.onreadystatechange = function () {
                    if (ajax.readyState === 4) {
                        if (ajax.status === 200) {
                            logger.debug("[STATISTICS] successfully report log to server");
                            task.status = TaskStatus.finished;
                        } else {
                            logger.debug("[STATISTICS] report log to server failed");
                            task.status = TaskStatus.waiting;
                        }
                    }
                };
                ajax.send(task.log);
            }

            // start a timer to report
            setInterval(tick, 1000);
        }
        var statisticsLogger = new StatisticsLogger();
        var ExtraErrors = {
            ZeroSizeFile: -6,
            InvalidToken: -5,
            InvalidArgument: -4,
            InvalidFile: -3,
            Cancelled: -2,
            NetworkError: -1,
            UnknownError: 0,
            TimedOut: -1001,
            UnknownHost: -1003,
            CannotConnectToHost: -1004,
            NetworkConnectionLost: -1005
        };

        /**
         * reset upload url
         * if current page protocal is https
         *     it will always return 'https://up.qbox.me'
         * else
         *     it will set 'qiniuUploadUrl' value with 'qiniuUploadUrls' looply
         */
        this.resetUploadUrl = function () {
            var hosts = window.location.protocol === 'https:' ? qiniuUpHosts.https : qiniuUpHosts.http;
            var i = changeUrlTimes % hosts.length;
            qiniuUploadUrl = hosts[i];
            changeUrlTimes++;
            logger.debug('resetUploadUrl: ' + qiniuUploadUrl);
        };

        // this.resetUploadUrl();


        /**
         * is image
         * @param  {String}  url of a file
         * @return {Boolean} file is a image or not
         */
        this.isImage = function (url) {
            url = url.split(/[?#]/)[0];
            return (/\.(png|jpg|jpeg|gif|bmp)$/i).test(url);
        };

        /**
         * get file extension
         * @param  {String} filename
         * @return {String} file extension
         * @example
         *     input: test.txt
         *     output: txt
         */
        this.getFileExtension = function (filename) {
            var tempArr = filename.split(".");
            var ext;
            if (tempArr.length === 1 || (tempArr[0] === "" && tempArr.length === 2)) {
                ext = "";
            } else {
                ext = tempArr.pop().toLowerCase(); //get the extension and make it lower-case
            }
            return ext;
        };

        /**
         * encode string by utf8
         * @param  {String} string to encode
         * @return {String} encoded string
         */
        this.utf8_encode = function (argString) {
            // http://kevin.vanzonneveld.net
            // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: sowberry
            // +    tweaked by: Jack
            // +   bugfixed by: Onno Marsman
            // +   improved by: Yves Sucaet
            // +   bugfixed by: Onno Marsman
            // +   bugfixed by: Ulrich
            // +   bugfixed by: Rafal Kukawski
            // +   improved by: kirilloid
            // +   bugfixed by: kirilloid
            // *     example 1: this.utf8_encode('Kevin van Zonneveld');
            // *     returns 1: 'Kevin van Zonneveld'

            if (argString === null || typeof argString === 'undefined') {
                return '';
            }

            var string = (argString + ''); // .replace(/\r\n/g, '\n').replace(/\r/g, '\n');
            var utftext = '',
                start, end, stringl = 0;

            start = end = 0;
            stringl = string.length;
            for (var n = 0; n < stringl; n++) {
                var c1 = string.charCodeAt(n);
                var enc = null;

                if (c1 < 128) {
                    end++;
                } else if (c1 > 127 && c1 < 2048) {
                    enc = String.fromCharCode(
                        (c1 >> 6) | 192, (c1 & 63) | 128
                    );
                } else if (c1 & 0xF800 ^ 0xD800 > 0) {
                    enc = String.fromCharCode(
                        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                    );
                } else { // surrogate pairs
                    if (c1 & 0xFC00 ^ 0xD800 > 0) {
                        throw new RangeError('Unmatched trail surrogate at ' + n);
                    }
                    var c2 = string.charCodeAt(++n);
                    if (c2 & 0xFC00 ^ 0xDC00 > 0) {
                        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
                    }
                    c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
                    enc = String.fromCharCode(
                        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                    );
                }
                if (enc !== null) {
                    if (end > start) {
                        utftext += string.slice(start, end);
                    }
                    utftext += enc;
                    start = end = n + 1;
                }
            }

            if (end > start) {
                utftext += string.slice(start, stringl);
            }

            return utftext;
        };

        this.base64_decode = function (data) {
            // http://kevin.vanzonneveld.net
            // +   original by: Tyler Akins (http://rumkin.com)
            // +   improved by: Thunder.m
            // +      input by: Aman Gupta
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   bugfixed by: Pellentesque Malesuada
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
            // *     returns 1: 'Kevin van Zonneveld'
            // mozilla has this native
            // - but breaks in 2.0.0.12!
            //if (typeof this.window['atob'] == 'function') {
            //    return atob(data);
            //}
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                dec = "",
                tmp_arr = [];

            if (!data) {
                return data;
            }

            data += '';

            do { // unpack four hexets into three octets using index points in b64
                h1 = b64.indexOf(data.charAt(i++));
                h2 = b64.indexOf(data.charAt(i++));
                h3 = b64.indexOf(data.charAt(i++));
                h4 = b64.indexOf(data.charAt(i++));

                bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

                o1 = bits >> 16 & 0xff;
                o2 = bits >> 8 & 0xff;
                o3 = bits & 0xff;

                if (h3 === 64) {
                    tmp_arr[ac++] = String.fromCharCode(o1);
                } else if (h4 === 64) {
                    tmp_arr[ac++] = String.fromCharCode(o1, o2);
                } else {
                    tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
                }
            } while (i < data.length);

            dec = tmp_arr.join('');

            return dec;
        };

        /**
         * encode data by base64
         * @param  {String} data to encode
         * @return {String} encoded data
         */
        this.base64_encode = function (data) {
            // http://kevin.vanzonneveld.net
            // +   original by: Tyler Akins (http://rumkin.com)
            // +   improved by: Bayron Guevara
            // +   improved by: Thunder.m
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Pellentesque Malesuada
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // -    depends on: this.utf8_encode
            // *     example 1: this.base64_encode('Kevin van Zonneveld');
            // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
            // mozilla has this native
            // - but breaks in 2.0.0.12!
            //if (typeof this.window['atob'] == 'function') {
            //    return atob(data);
            //}
            var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                enc = '',
                tmp_arr = [];

            if (!data) {
                return data;
            }

            data = this.utf8_encode(data + '');

            do { // pack three octets into four hexets
                o1 = data.charCodeAt(i++);
                o2 = data.charCodeAt(i++);
                o3 = data.charCodeAt(i++);

                bits = o1 << 16 | o2 << 8 | o3;

                h1 = bits >> 18 & 0x3f;
                h2 = bits >> 12 & 0x3f;
                h3 = bits >> 6 & 0x3f;
                h4 = bits & 0x3f;

                // use hexets to index into b64, and append result to encoded string
                tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            } while (i < data.length);

            enc = tmp_arr.join('');

            switch (data.length % 3) {
                case 1:
                    enc = enc.slice(0, -2) + '==';
                    break;
                case 2:
                    enc = enc.slice(0, -1) + '=';
                    break;
            }

            return enc;
        };

        /**
         * encode string in url by base64
         * @param {String} string in url
         * @return {String} encoded string
         */
        this.URLSafeBase64Encode = function (v) {
            v = this.base64_encode(v);
            return v.replace(/\//g, '_').replace(/\+/g, '-');
        };

        this.URLSafeBase64Decode = function (v) {
            v = v.replace(/_/g, '/').replace(/-/g, '+');
            return this.base64_decode(v);
        };

        // TODO: use mOxie
        /**
         * craete object used to AJAX
         * @return {Object}
         */
        this.createAjax = function (argument) {
            var xmlhttp = {};
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            return xmlhttp;
        };

        // TODO: enhance IE compatibility
        /**
         * parse json string to javascript object
         * @param  {String} json string
         * @return {Object} object
         */
        this.parseJSON = function (data) {
            // Attempt to parse using the native JSON parser first
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(data);
            }

            //var rx_one = /^[\],:{}\s]*$/,
            //    rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            //    rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            //    rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

            //var json;

            var text = String(data);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

            // todo 使用一下判断,增加安全性
            //if (
            //    rx_one.test(
            //        text
            //            .replace(rx_two, '@')
            //            .replace(rx_three, ']')
            //            .replace(rx_four, '')
            //    )
            //) {
            //    return eval('(' + text + ')');
            //}

            return eval('(' + text + ')');
        };

        /**
         * parse javascript object to json string
         * @param  {Object} object
         * @return {String} json string
         */
        this.stringifyJSON = function (obj) {
            // Attempt to parse using the native JSON parser first
            if (window.JSON && window.JSON.stringify) {
                return window.JSON.stringify(obj);
            }
            switch (typeof (obj)) {
                case 'string':
                    return '"' + obj.replace(/(["\\])/g, '\\$1') + '"';
                case 'array':
                    return '[' + obj.map(that.stringifyJSON).join(',') + ']';
                case 'object':
                    if (obj instanceof Array) {
                        var strArr = [];
                        var len = obj.length;
                        for (var i = 0; i < len; i++) {
                            strArr.push(that.stringifyJSON(obj[i]));
                        }
                        return '[' + strArr.join(',') + ']';
                    } else if (obj === null) {
                        return 'null';
                    } else {
                        var string = [];
                        for (var property in obj) {
                            if (obj.hasOwnProperty(property)) {
                                string.push(that.stringifyJSON(property) + ':' + that.stringifyJSON(obj[property]));
                            }
                        }
                        return '{' + string.join(',') + '}';
                    }
                    break;
                case 'number':
                    return obj;
                case false:
                    return obj;
                case 'boolean':
                    return obj;
            }
        };

        /**
         * trim space beside text
         * @param  {String} untrimed string
         * @return {String} trimed string
         */
        this.trim = function (text) {
            return text === null ? "" : text.replace(/^\s+|\s+$/g, '');
        };

        /**
         * create a uploader by QiniuJsSDK
         * @param  {object} options to create a new uploader
         * @return {object} uploader
         */
        this.uploader = function (op) {

            /********** inner function define start **********/

            // according the different condition to reset chunk size
            // and the upload strategy according with the chunk size
            // when chunk size is zero will cause to direct upload
            // see the statement binded on 'BeforeUpload' event
            var reset_chunk_size = function () {
                var ie = that.detectIEVersion();
                var BLOCK_BITS, MAX_CHUNK_SIZE, chunk_size;
                // case Safari 5、Windows 7、iOS 7 set isSpecialSafari to true
                var isSpecialSafari = (moxie.core.utils.Env.browser === "Safari" && moxie.core.utils.Env.version <= 5 && moxie.core.utils.Env.os === "Windows" && moxie.core.utils.Env.osVersion === "7") || (moxie.core.utils.Env.browser === "Safari" && moxie.core.utils.Env.os === "iOS" && moxie.core.utils.Env.osVersion === "7");
                // case IE 9-，chunk_size is not empty and flash is included in runtimes
                // set op.chunk_size to zero
                //if (ie && ie < 9 && op.chunk_size && op.runtimes.indexOf('flash') >= 0) {
                if (ie && ie < 9 && op.chunk_size && op.runtimes.indexOf('flash') >= 0) {
                    //  link: http://www.plupload.com/docs/Frequently-Asked-Questions#when-to-use-chunking-and-when-not
                    //  when plupload chunk_size setting is't null ,it cause bug in ie8/9  which runs  flash runtimes (not support html5) .
                    op.chunk_size = 0;
                } else if (isSpecialSafari) {
                    // win7 safari / iOS7 safari have bug when in chunk upload mode
                    // reset chunk_size to 0
                    // disable chunk in special version safari
                    op.chunk_size = 0;
                } else {
                    BLOCK_BITS = 20;
                    MAX_CHUNK_SIZE = 4 << BLOCK_BITS; //4M

                    chunk_size = plupload.parseSize(op.chunk_size);
                    if (chunk_size > MAX_CHUNK_SIZE) {
                        op.chunk_size = MAX_CHUNK_SIZE;
                    }
                    // qiniu service  max_chunk_size is 4m
                    // reset chunk_size to max_chunk_size(4m) when chunk_size > 4m
                }
                // if op.chunk_size set 0 will be cause to direct upload
            };

            var getHosts = function (hosts) {
                var result = [];
                var uploadIndex = -1;
                for (var i = 0; i < hosts.length; i++) {
                    var host = hosts[i];
                    if (host.indexOf("upload") !== -1) {
                        uploadIndex = i;
                    }
                    if (host.indexOf('-H') === 0) {
                        result.push(host.split(' ')[2]);
                    } else {
                        result.push(host);
                    }
                }

                if (uploadIndex !== -1) {
                    //make upload domains first
                    var uploadDomain = result[uploadIndex];
                    result[uploadIndex] = result[0];
                    result[0] = uploadDomain;
                }
                return result;
            };

            var getPutPolicy = function (uptoken) {
                var segments = uptoken.split(":");
                var ak = segments[0];
                var putPolicy = that.parseJSON(that.URLSafeBase64Decode(segments[2]));
                putPolicy.ak = ak;
                if (putPolicy.scope.indexOf(":") >= 0) {
                    putPolicy.bucket = putPolicy.scope.split(":")[0];
                    putPolicy.key = putPolicy.scope.split(":")[1];
                } else {
                    putPolicy.bucket = putPolicy.scope;
                }
                return putPolicy;
            };

            var getUpHosts = function (uptoken) {
                var putPolicy = getPutPolicy(uptoken);
                // var uphosts_url = "//uc.qbox.me/v1/query?ak="+ak+"&bucket="+putPolicy.scope;
                // IE9 does not support protocol relative url
                var uphosts_url = window.location.protocol + "//uc.qbox.me/v1/query?ak=" + putPolicy.ak + "&bucket=" + putPolicy.bucket;
                logger.debug("putPolicy: ", putPolicy);
                logger.debug("get uphosts from: ", uphosts_url);
                var ie = that.detectIEVersion();
                var ajax;
                if (ie && ie <= 9) {
                    ajax = new moxie.xhr.XMLHttpRequest();
                    moxie.core.utils.Env.swf_url = op.flash_swf_url;
                } else {
                    ajax = that.createAjax();
                }
                ajax.open('GET', uphosts_url, false);
                var onreadystatechange = function () {
                    logger.debug("ajax.readyState: ", ajax.readyState);
                    if (ajax.readyState === 4) {
                        logger.debug("ajax.status: ", ajax.status);
                        if (ajax.status < 400) {
                            var res = that.parseJSON(ajax.responseText);
                            qiniuUpHosts.http = getHosts(res.http.up);
                            qiniuUpHosts.https = getHosts(res.https.up);
                            logger.debug("get new uphosts: ", qiniuUpHosts);
                            that.resetUploadUrl();
                        } else {
                            logger.error("get uphosts error: ", ajax.responseText);
                        }
                    }
                };
                if (ie && ie <= 9) {
                    ajax.bind('readystatechange', onreadystatechange);
                } else {
                    ajax.onreadystatechange = onreadystatechange;
                }
                ajax.send();
                // ajax.send();
                // if (ajax.status < 400) {
                //     var res = that.parseJSON(ajax.responseText);
                //     qiniuUpHosts.http = getHosts(res.http.up);
                //     qiniuUpHosts.https = getHosts(res.https.up);
                //     logger.debug("get new uphosts: ", qiniuUpHosts);
                //     that.resetUploadUrl();
                // } else {
                //     logger.error("get uphosts error: ", ajax.responseText);
                // }
                return;
            };

            var getUptoken = function (file) {
                if (!that.token || (op.uptoken_url && that.tokenInfo.isExpired())) {
                    return getNewUpToken(file);
                } else {
                    return that.token;
                }
            };

            // getNewUptoken maybe called at Init Event or BeforeUpload Event
            // case Init Event, the file param of getUptken will be set a null value
            // if op.uptoken has value, set uptoken with op.uptoken
            // else if op.uptoken_url has value, set uptoken from op.uptoken_url
            // else if op.uptoken_func has value, set uptoken by result of op.uptoken_func
            var getNewUpToken = function (file) {
                if (op.uptoken) {
                    that.token = op.uptoken;
                } else if (op.uptoken_url) {
                    logger.debug("get uptoken from: ", that.uptoken_url);
                    // TODO: use mOxie
                    var ajax = that.createAjax();
                    ajax.open('GET', that.uptoken_url + '?' + (+new Date()), false);
                    // ajax.setRequestHeader("If-Modified-Since", "0");
                    // ajax.onreadystatechange = function() {
                    //     if (ajax.readyState === 4 && ajax.status === 200) {
                    //         var res = that.parseJSON(ajax.responseText);
                    //         that.token = res.uptoken;
                    //     }
                    // };
                    ajax.send();
                    if (ajax.status === 200) {
                        var res = that.parseJSON(ajax.responseText);
                        that.token = res.uptoken;
                        var segments = that.token.split(":");
                        var putPolicy = that.parseJSON(that.URLSafeBase64Decode(segments[2]));
                        if (!that.tokenMap) {
                            that.tokenMap = {};
                        }
                        var getTimestamp = function (time) {
                            return Math.ceil(time.getTime() / 1000);
                        };
                        var serverTime = getTimestamp(new Date(ajax.getResponseHeader("date")));
                        var clientTime = getTimestamp(new Date());
                        that.tokenInfo = {
                            serverDelay: clientTime - serverTime,
                            deadline: putPolicy.deadline/1000,
                            isExpired: function () {
                                var leftTime = this.deadline - getTimestamp(new Date()) + this.serverDelay;
                                return leftTime < 600;
                            }
                        };
                        logger.debug("get new uptoken: ", that.token);
                        logger.debug("get token info: ", that.tokenInfo);
                    } else {
                        logger.error("get uptoken error: ", ajax.responseText);
                    }
                } else if (op.uptoken_func) {
                    logger.debug("get uptoken from uptoken_func");
                    that.token = op.uptoken_func(file);
                    logger.debug("get new uptoken: ", that.token);
                } else {
                    logger.error("one of [uptoken, uptoken_url, uptoken_func] settings in options is required!");
                }
                if (that.token) {
                    getUpHosts(that.token);
                }
                return that.token;
            };

            // get file key according with the user passed options
            var getFileKey = function (up, file, func) {
                // WARNING
                // When you set the key in putPolicy by "scope": "bucket:key"
                // You should understand the risk of override a file in the bucket
                // So the code below that automatically get key from uptoken has been commented
                // var putPolicy = getPutPolicy(that.token)
                // if (putPolicy.key) {
                //     logger.debug("key is defined in putPolicy.scope: ", putPolicy.key)
                //     return putPolicy.key
                // }
                var key = '',
                    unique_names = false;
                if (!op.save_key) {
                    unique_names = up.getOption && up.getOption('unique_names');
                    unique_names = unique_names || (up.settings && up.settings.unique_names);
                    if (unique_names) {
                        var ext = that.getFileExtension(file.name);
                        key = ext ? file.id + '.' + ext : file.id;
                    } else if (typeof func === 'function') {
                        key = func(up, file);
                    } else {
                        key = file.name;
                    }
                }
                return key;
            };

            var getDomainFromUrl = function (url) {
                if (url && url.match) {
                    var groups = url.match(/^https?:\/\/([^:^/]*)/);
                    return groups ? groups[1] : "";
                }
                return "";
            };

            var getPortFromUrl = function (url) {
                if (url && url.match) {
                    var groups = url.match(/(^https?)/);
                    if (!groups) {
                        return "";
                    }
                    var type = groups[1];
                    groups = url.match(/^https?:\/\/([^:^/]*):(\d*)/);
                    if (groups) {
                        return groups[2];
                    } else if (type === "http") {
                        return "80";
                    } else {
                        return "443";
                    }
                }
                return "";
            };

            /********** inner function define end **********/

            if (op.log_level) {
                logger.level = op.log_level;
            }

            if (!op.domain) {
                throw 'domain setting in options is required!';
            }

            if (!op.browse_button) {
                throw 'browse_button setting in options is required!';
            }

            if (!op.uptoken && !op.uptoken_url && !op.uptoken_func) {
                throw 'one of [uptoken, uptoken_url, uptoken_func] settings in options is required!';
            }

            logger.debug("init uploader start");

            logger.debug("environment: ", moxie.core.utils.Env);

            logger.debug("userAgent: ", navigator.userAgent);

            var option = {};

            // hold the handler from user passed options
            var _Error_Handler = op.init && op.init.Error;
            var _FileUploaded_Handler = op.init && op.init.FileUploaded;

            // replace the handler for intercept
            op.init.Error = function () {};
            op.init.FileUploaded = function () {};

            that.uptoken_url = op.uptoken_url;
            that.token = '';
            that.key_handler = typeof op.init.Key === 'function' ? op.init.Key : '';
            this.domain = op.domain;
            // TODO: ctx is global in scope of a uploader instance
            // this maybe cause error
            var ctx = '';
            var speedCalInfo = {
                isResumeUpload: false,
                resumeFilesize: 0,
                startTime: '',
                currentTime: ''
            };

            reset_chunk_size();
            logger.debug("invoke reset_chunk_size()");
            logger.debug("op.chunk_size: ", op.chunk_size);

            var defaultSetting = {
                url: qiniuUploadUrl,
                multipart_params: {
                    token: ''
                }
            };
            var ie = that.detectIEVersion();
            // case IE 9-
            // add accept in multipart params
            if (ie && ie <= 9) {
                defaultSetting.multipart_params.accept = 'text/plain; charset=utf-8';
                logger.debug("add accept text/plain in multipart params");
            }

            // compose options with user passed options and default setting
            plupload.extend(option, op, defaultSetting);

            logger.debug("option: ", option);

            // create a new uploader with composed options
            var uploader = new plupload.Uploader(option);

            logger.debug("new plupload.Uploader(option)");

            // bind getNewUpToken to 'Init' event
            uploader.bind('Init', function (up, params) {
                logger.debug("Init event activated");
                // if op.get_new_uptoken is not true
                //      invoke getNewUptoken when uploader init
                // else
                //      getNewUptoken everytime before a new file upload
                if (!op.get_new_uptoken) {
                    getNewUpToken(null);
                }
                //getNewUpToken(null);
            });

            logger.debug("bind Init event");

            // bind 'FilesAdded' event
            // when file be added and auto_start has set value
            // uploader will auto start upload the file
            uploader.bind('FilesAdded', function (up, files) {
                logger.debug("FilesAdded event activated");
                var auto_start = up.getOption && up.getOption('auto_start');
                auto_start = auto_start || (up.settings && up.settings.auto_start);
                logger.debug("auto_start: ", auto_start);
                logger.debug("files: ", files);

                // detect is iOS
                var is_ios = function () {
                    if (moxie.core.utils.Env.OS.toLowerCase() === "ios") {
                        return true;
                    } else {
                        return false;
                    }
                };

                // if current env os is iOS change file name to [time].[ext]
                if (is_ios()) {
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        var ext = that.getFileExtension(file.name);
                        file.name = file.id + "." + ext;
                    }
                }

                if (auto_start) {
                    setTimeout(function () {
                        up.start();
                        logger.debug("invoke up.start()");
                    }, 0);
                    // up.start();
                    // plupload.each(files, function(i, file) {
                    //     up.start();
                    //     logger.debug("invoke up.start()")
                    //     logger.debug("file: ", file);
                    // });
                }
                up.refresh(); // Reposition Flash/Silverlight
            });

            logger.debug("bind FilesAdded event");

            // bind 'BeforeUpload' event
            // intercept the process of upload
            // - prepare uptoken
            // - according the chunk size to make differnt upload strategy
            // - resume upload with the last breakpoint of file
            uploader.bind('BeforeUpload', function (up, file) {
                logger.debug("BeforeUpload event activated");
                file._start_at = new Date();
                // add a key named speed for file object
                file.speed = file.speed || 0;
                ctx = '';

                if (op.get_new_uptoken) {
                    getNewUpToken(file);
                }

                var directUpload = function (up, file, func) {
                    speedCalInfo.startTime = new Date().getTime();
                    var multipart_params_obj;
                    if (op.save_key) {
                        multipart_params_obj = {
                            'token': that.token
                        };
                    } else {
                        multipart_params_obj = {
                            'key': getFileKey(up, file, func),
                            'token': that.token
                        };
                    }
                    var ie = that.detectIEVersion();
                    // case IE 9-
                    // add accept in multipart params
                    if (ie && ie <= 9) {
                        multipart_params_obj.accept = 'text/plain; charset=utf-8';
                        logger.debug("add accept text/plain in multipart params");
                    }

                    logger.debug("directUpload multipart_params_obj: ", multipart_params_obj);

                    var x_vars = op.x_vars;
                    if (x_vars !== undefined && typeof x_vars === 'object') {
                        for (var x_key in x_vars) {
                            if (x_vars.hasOwnProperty(x_key)) {
                                if (typeof x_vars[x_key] === 'function') {
                                    multipart_params_obj['x:' + x_key] = x_vars[x_key](up, file);
                                } else if (typeof x_vars[x_key] !== 'object') {
                                    multipart_params_obj['x:' + x_key] = x_vars[x_key];
                                }
                            }
                        }
                    }

                    up.setOption({
                        'url': qiniuUploadUrl,
                        'multipart': true,
                        'chunk_size': is_android_weixin_or_qq() ? op.max_file_size : undefined,
                        'multipart_params': multipart_params_obj
                    });
                };

                // detect is weixin or qq inner browser
                var is_android_weixin_or_qq = function () {
                    var ua = navigator.userAgent.toLowerCase();
                    if ((ua.match(/MicroMessenger/i) || moxie.core.utils.Env.browser === "QQBrowser" || ua.match(/V1_AND_SQ/i)) && moxie.core.utils.Env.OS.toLowerCase() === "android") {
                        return true;
                    } else {
                        return false;
                    }
                };

                var chunk_size = up.getOption && up.getOption('chunk_size');
                chunk_size = chunk_size || (up.settings && up.settings.chunk_size);

                logger.debug("uploader.runtime: ", uploader.runtime);
                logger.debug("chunk_size: ", chunk_size);

                // TODO: flash support chunk upload
                if ((uploader.runtime === 'html5' || uploader.runtime === 'flash') && chunk_size) {
                    if (file.size < chunk_size || is_android_weixin_or_qq()) {
                        logger.debug("directUpload because file.size < chunk_size || is_android_weixin_or_qq()");
                        // direct upload if file size is less then the chunk size
                        directUpload(up, file, that.key_handler);
                    } else {
                        // TODO: need a polifill to make it work in IE 9-
                        // ISSUE: if file.name is existed in localStorage
                        // but not the same file maybe cause error
                        var localFileInfo = localStorage.getItem(file.name);
                        var blockSize = chunk_size;
                        if (localFileInfo) {
                            // TODO: although only the html5 runtime will enter this statement
                            // but need uniform way to make convertion between string and json
                            localFileInfo = that.parseJSON(localFileInfo);
                            var now = (new Date()).getTime();
                            var before = localFileInfo.time || 0;
                            var aDay = 24 * 60 * 60 * 1000; //  milliseconds of one day
                            // if the last upload time is within one day
                            //      will upload continuously follow the last breakpoint
                            // else
                            //      will reupload entire file
                            if (now - before < aDay) {

                                if (localFileInfo.percent !== 100) {
                                    if (file.size === localFileInfo.total) {
                                        // TODO: if file.name and file.size is the same
                                        // but not the same file will cause error
                                        file.percent = localFileInfo.percent;
                                        file.loaded = localFileInfo.offset;
                                        ctx = localFileInfo.ctx;

                                        // set speed info
                                        speedCalInfo.isResumeUpload = true;
                                        speedCalInfo.resumeFilesize = localFileInfo.offset;

                                        // set block size
                                        if (localFileInfo.offset + blockSize > file.size) {
                                            blockSize = file.size - localFileInfo.offset;
                                        }
                                    } else {
                                        // remove file info when file.size is conflict with file info
                                        localStorage.removeItem(file.name);
                                    }

                                } else {
                                    // remove file info when upload percent is 100%
                                    // avoid 499 bug
                                    localStorage.removeItem(file.name);
                                }
                            } else {
                                // remove file info when last upload time is over one day
                                localStorage.removeItem(file.name);
                            }
                        }
                        speedCalInfo.startTime = new Date().getTime();
                        var multipart_params_obj = {};
                        var ie = that.detectIEVersion();
                        // case IE 9-
                        // add accept in multipart params
                        if (ie && ie <= 9) {
                            multipart_params_obj.accept = 'text/plain; charset=utf-8';
                            logger.debug("add accept text/plain in multipart params");
                        }
                        // TODO: to support bput
                        // http://developer.qiniu.com/docs/v6/api/reference/up/bput.html
                        up.setOption({
                            'url': qiniuUploadUrl + '/mkblk/' + blockSize,
                            'multipart': false,
                            'chunk_size': chunk_size,
                            'required_features': "chunks",
                            'headers': {
                                'Authorization': 'UpToken ' + getUptoken(file)
                            },
                            'multipart_params': multipart_params_obj
                        });
                    }
                } else {
                    logger.debug("directUpload because uploader.runtime !== 'html5' || uploader.runtime !== 'flash' || !chunk_size");
                    // direct upload if runtime is not html5
                    directUpload(up, file, that.key_handler);
                }
            });

            logger.debug("bind BeforeUpload event");

            // bind 'UploadProgress' event
            // calculate upload speed
            uploader.bind('UploadProgress', function (up, file) {
                logger.trace("UploadProgress event activated");
                speedCalInfo.currentTime = new Date().getTime();
                var timeUsed = speedCalInfo.currentTime - speedCalInfo.startTime; // ms
                var fileUploaded = file.loaded || 0;
                if (speedCalInfo.isResumeUpload) {
                    fileUploaded = file.loaded - speedCalInfo.resumeFilesize;
                }
                file.speed = (fileUploaded / timeUsed * 1000).toFixed(0) || 0; // unit: byte/s
            });

            logger.debug("bind UploadProgress event");

            // bind 'ChunkUploaded' event
            // store the chunk upload info and set next chunk upload url
            uploader.bind('ChunkUploaded', function (up, file, info) {
                logger.debug("ChunkUploaded event activated");
                logger.debug("ChunkUploaded file: ", file);
                logger.debug("ChunkUploaded info: ", info);
                var res = that.parseJSON(info.response);
                logger.debug("ChunkUploaded res: ", res);
                // ctx should look like '[chunk01_ctx],[chunk02_ctx],[chunk03_ctx],...'
                ctx = ctx ? ctx + ',' + res.ctx : res.ctx;
                var leftSize = info.total - info.offset;
                var chunk_size = up.getOption && up.getOption('chunk_size');
                chunk_size = chunk_size || (up.settings && up.settings.chunk_size);
                if (leftSize < chunk_size) {
                    up.setOption({
                        'url': qiniuUploadUrl + '/mkblk/' + leftSize
                    });
                    logger.debug("up.setOption url: ", qiniuUploadUrl + '/mkblk/' + leftSize);
                }
                up.setOption({
                    'headers': {
                        'Authorization': 'UpToken ' + getUptoken(file)
                    }
                });
                localStorage.setItem(file.name, that.stringifyJSON({
                    ctx: ctx,
                    percent: file.percent,
                    total: info.total,
                    offset: info.offset,
                    time: (new Date()).getTime()
                }));
            });

            logger.debug("bind ChunkUploaded event");

            var retries = qiniuUploadUrls.length;

            // if error is unkown switch upload url and retry
            var unknow_error_retry = function (file) {
                if (retries-- > 0) {
                    setTimeout(function () {
                        that.resetUploadUrl();
                        file.status = plupload.QUEUED;
                        uploader.stop();
                        uploader.start();
                    }, 0);
                    return true;
                } else {
                    retries = qiniuUploadUrls.length;
                    return false;
                }
            };

            // bind 'Error' event
            // check the err.code and return the errTip
            uploader.bind('Error', (function (_Error_Handler) {
                return function (up, err) {
                    logger.error("Error event activated");
                    logger.error("err: ", err);
                    var nowTime = new Date();
                    var errTip = '';
                    var file = err.file;
                    if (file) {
                        switch (err.code) {
                            case plupload.FAILED:
                                errTip = '上传失败。请稍后再试。';
                                break;
                            case plupload.FILE_SIZE_ERROR:
                                var max_file_size = up.getOption && up.getOption('max_file_size');
                                max_file_size = max_file_size || (up.settings && up.settings.max_file_size);
                                errTip = '浏览器最大可上传' + max_file_size + '。更大文件请使用命令行工具。';
                                break;
                            case plupload.FILE_EXTENSION_ERROR:
                                errTip = '文件验证失败。请稍后重试。';
                                break;
                            case plupload.HTTP_ERROR:
                                if (err.response === '') {
                                    // Fix parseJSON error ,when http error is like net::ERR_ADDRESS_UNREACHABLE
                                    errTip = err.message || '未知网络错误。';
                                    if (!unknow_error_retry(file)) {
                                        return;
                                    }
                                    break;
                                }
                                var errorObj = that.parseJSON(err.response);
                                var errorText = errorObj.error;
                                switch (err.status) {
                                    case 400:
                                        errTip = "请求报文格式错误。";
                                        break;
                                    case 401:
                                        errTip = "客户端认证授权失败。请重试或提交反馈。";
                                        break;
                                    case 405:
                                        errTip = "客户端请求错误。请重试或提交反馈。";
                                        break;
                                    case 579:
                                        errTip = "资源上传成功，但回调失败。";
                                        break;
                                    case 599:
                                        errTip = "网络连接异常。请重试或提交反馈。";
                                        if (!unknow_error_retry(file)) {
                                            return;
                                        }
                                        break;
                                    case 614:
                                        errTip = "文件已存在。";
                                        try {
                                            errorObj = that.parseJSON(errorObj.error);
                                            errorText = errorObj.error || 'file exists';
                                        } catch (e) {
                                            errorText = errorObj.error || 'file exists';
                                        }
                                        break;
                                    case 631:
                                        errTip = "指定空间不存在。";
                                        break;
                                    case 701:
                                        errTip = "上传数据块校验出错。请重试或提交反馈。";
                                        break;
                                    default:
                                        errTip = "未知错误。";
                                        if (!unknow_error_retry(file)) {
                                            return;
                                        }
                                        break;
                                }
                                errTip = errTip + '(' + err.status + '：' + errorText + ')';
                                break;
                            case plupload.SECURITY_ERROR:
                                errTip = '安全配置错误。请联系网站管理员。';
                                break;
                            case plupload.GENERIC_ERROR:
                                errTip = '上传失败。请稍后再试。';
                                break;
                            case plupload.IO_ERROR:
                                errTip = '上传失败。请稍后再试。';
                                break;
                            case plupload.INIT_ERROR:
                                errTip = '网站配置错误。请联系网站管理员。';
                                uploader.destroy();
                                break;
                            default:
                                errTip = err.message + err.details;
                                if (!unknow_error_retry(file)) {
                                    return;
                                }
                                break;
                        }
                        if (_Error_Handler) {
                            _Error_Handler(up, err, errTip);
                        }
                    }
                    up.refresh(); // Reposition Flash/Silverlight

                    // add send log for upload error
                    if (!op.disable_statistics_report) {
                        var matchedGroups = (err && err.responseHeaders && err.responseHeaders.match) ? err.responseHeaders.match(/(X-Reqid\:\ )([\w\.\%-]*)/) : [];
                        console.log(err);
                        var req_id = matchedGroups[2].replace(/[\r\n]/g,"");
                        var errcode = plupload.HTTP_ERROR ? err.status : err.code;
                        var startAt = file._start_at ? file._start_at.getTime() : nowTime.getTime();
                        statisticsLogger.log(
                            errcode === 0 ? ExtraErrors.NetworkError : errcode,
                            req_id,
                            getDomainFromUrl(up.settings.url),
                            undefined,
                            getPortFromUrl(up.settings.url),
                            (nowTime.getTime() - startAt)/1000,
                            parseInt(startAt/1000),
                            err.file.size * (err.file.percent / 100),
                            "jssdk-" + up.runtime,
                            file.size
                        );
                    }
                };
            })(_Error_Handler));

            logger.debug("bind Error event");

            // bind 'FileUploaded' event
            // intercept the complete of upload
            // - get downtoken from downtoken_url if bucket is private
            // - invoke mkfile api to compose chunks if upload strategy is chunk upload
            uploader.bind('FileUploaded', (function (_FileUploaded_Handler) {
                return function (up, file, info) {
                    logger.debug("FileUploaded event activated");
                    logger.debug("FileUploaded file: ", file);
                    logger.debug("FileUploaded info: ", info);
                    var nowTime = new Date();
                    var last_step = function (up, file, info) {
                        logger.debug("FileUploaded last step:", info);
                        if (op.downtoken_url) {
                            // if op.dowontoken_url is not empty
                            // need get downtoken before invoke the _FileUploaded_Handler
                            var ajax_downtoken = that.createAjax();
                            ajax_downtoken.open('POST', op.downtoken_url, true);
                            ajax_downtoken.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                            ajax_downtoken.onreadystatechange = function () {
                                if (ajax_downtoken.readyState === 4) {
                                    if (ajax_downtoken.status === 200) {
                                        var res_downtoken;
                                        try {
                                            res_downtoken = that.parseJSON(ajax_downtoken.responseText);
                                        } catch (e) {
                                            throw ('invalid json format');
                                        }
                                        var info_extended = {};
                                        plupload.extend(info_extended, that.parseJSON(info.response), res_downtoken);
                                        info.response = that.stringifyJSON(info_extended);
                                        if (_FileUploaded_Handler) {
                                            _FileUploaded_Handler(up, file, info);
                                        }
                                    } else {
                                        uploader.trigger('Error', {
                                            status: ajax_downtoken.status,
                                            response: ajax_downtoken.responseText,
                                            file: file,
                                            code: plupload.HTTP_ERROR
                                        });
                                    }
                                }
                            };
                            ajax_downtoken.send('key=' + that.parseJSON(info.response).key + '&domain=' + op.domain);
                        } else if (_FileUploaded_Handler) {
                            _FileUploaded_Handler(up, file, info);
                        }
                    };

                    var res = that.parseJSON(info.response);
                    ctx = ctx ? ctx : res.ctx;
                    // if ctx is not empty
                    //      that means the upload strategy is chunk upload
                    //      before the invoke the last_step
                    //      we need request the mkfile to compose all uploaded chunks
                    // else
                    //      invoke the last_step
                    logger.debug("ctx: ", ctx);
                    if (ctx) {
                        var key = '';
                        logger.debug("save_key: ", op.save_key);
                        if (!op.save_key) {
                            key = getFileKey(up, file, that.key_handler);
                            key = key ? '/key/' + that.URLSafeBase64Encode(key) : '';
                        }

                        var fname = '/fname/' + that.URLSafeBase64Encode(file.name);

                        logger.debug("op.x_vars: ", op.x_vars);
                        var x_vars = op.x_vars,
                            x_val = '',
                            x_vars_url = '';
                        if (x_vars !== undefined && typeof x_vars === 'object') {
                            for (var x_key in x_vars) {
                                if (x_vars.hasOwnProperty(x_key)) {
                                    if (typeof x_vars[x_key] === 'function') {
                                        x_val = that.URLSafeBase64Encode(x_vars[x_key](up, file));
                                    } else if (typeof x_vars[x_key] !== 'object') {
                                        x_val = that.URLSafeBase64Encode(x_vars[x_key]);
                                    }
                                    x_vars_url += '/x:' + x_key + '/' + x_val;
                                }
                            }
                        }

                        var url = qiniuUploadUrl + '/mkfile/' + file.size + key + fname + x_vars_url;

                        var ie = that.detectIEVersion();
                        var ajax;
                        if (ie && ie <= 9) {
                            ajax = new moxie.xhr.XMLHttpRequest();
                            moxie.core.utils.Env.swf_url = op.flash_swf_url;
                        } else {
                            ajax = that.createAjax();
                        }
                        ajax.open('POST', url, true);
                        ajax.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
                        console.log('uptoken:'+that.token);
                        ajax.setRequestHeader('Authorization', 'UpToken ' + that.token);
                        var onreadystatechange = function () {
                            logger.debug("ajax.readyState: ", ajax.readyState);
                            if (ajax.readyState === 4) {
                                localStorage.removeItem(file.name);
                                var ajaxInfo;
                                if (ajax.status === 200) {
                                    ajaxInfo = {
                                        status: ajax.status,
                                        response: ajax.responseText,
                                        responseHeaders: ajax.getAllResponseHeaders(),
                                    };
                                    logger.debug("mkfile is success: ", ajaxInfo);
                                    last_step(up, file, ajaxInfo);
                                } else {
                                    ajaxInfo = {
                                        status: ajax.status,
                                        response: ajax.responseText,
                                        file: file,
                                        code: -200,
                                        responseHeaders: ajax.getAllResponseHeaders()
                                    };
                                    logger.debug("mkfile is error: ", ajaxInfo);
                                    uploader.trigger('Error', ajaxInfo);
                                }
                            }
                        };
                        if (ie && ie <= 9) {
                            ajax.bind('readystatechange', onreadystatechange);
                        } else {
                            ajax.onreadystatechange = onreadystatechange;
                        }
                        ajax.send(ctx);
                        logger.debug("mkfile: ", url);
                    } else {
                        last_step(up, file, info);
                    }

                    // send statistics log
                    if (!op.disable_statistics_report) {
                        console.log(info.responseHeaders);
                        var req_id = info.responseHeaders.match(/(X-Reqid\:\ )([\w\.\%-]*)/i)[2].replace(/[\r\n]/g,"");
                        var startAt = file._start_at ? file._start_at.getTime() : nowTime.getTime();
                        statisticsLogger.log(
                            info.status,
                            req_id,
                            getDomainFromUrl(up.settings.url),
                            undefined,
                            getPortFromUrl(up.settings.url),
                            (nowTime.getTime() - startAt)/1000,
                            parseInt(startAt/1000),
                            file.size,
                            "jssdk-" + up.runtime,
                            file.size
                        );
                    }
                };
            })(_FileUploaded_Handler));

            logger.debug("bind FileUploaded event");

            // bind 'FilesRemoved' event
            // intercept the cancel of upload
            // used to send statistics log to server
            uploader.bind('FilesRemoved', function (up, files) {
                var nowTime = new Date();
                // add cancel log
                if (!op.disable_statistics_report) {
                    for (var i = 0; i < files.length; i++) {
                        statisticsLogger.log(
                            ExtraErrors.Cancelled,
                            undefined,
                            getDomainFromUrl(up.settings.url),
                            undefined,
                            getPortFromUrl(up.settings.url),
                            (nowTime.getTime() - files[i]._start_at.getTime())/1000,
                            files[i]._start_at.getTime()/1000,
                            files[i].size * files[i].percent / 100,
                            "jssdk-" + up.runtime,
                            files[i].size
                        );
                    }
                }
            });

            logger.debug("bind FilesRemoved event");

            // init uploader
            uploader.init();
            logger.debug("invoke uploader.init()");

            logger.debug("init uploader end");

            return uploader;
        };

        /**
         * get url by key
         * @param  {String} key of file
         * @return {String} url of file
         */
        this.getUrl = function (key) {
            if (!key) {
                return false;
            }
            key = encodeURI(key);
            var domain = this.domain;
            if (domain.slice(domain.length - 1) !== '/') {
                domain = domain + '/';
            }
            return domain + key;
        };

        /**
         * invoke the imageView2 api of Qiniu
         * @param  {Object} api params
         * @param  {String} key of file
         * @return {String} url of processed image
         */
        this.imageView2 = function (op, key) {

            if (!/^\d$/.test(op.mode)) {
                return false;
            }

            var mode = op.mode,
                w = op.w || '',
                h = op.h || '',
                q = op.q || '',
                format = op.format || '';

            if (!w && !h) {
                return false;
            }

            var imageUrl = 'imageView2/' + mode;
            imageUrl += w ? '/w/' + w : '';
            imageUrl += h ? '/h/' + h : '';
            imageUrl += q ? '/q/' + q : '';
            imageUrl += format ? '/format/' + format : '';
            if (key) {
                imageUrl = this.getUrl(key) + '?' + imageUrl;
            }
            return imageUrl;
        };

        /**
         * invoke the imageMogr2 api of Qiniu
         * @param  {Object} api params
         * @param  {String} key of file
         * @return {String} url of processed image
         */
        this.imageMogr2 = function (op, key) {
            var auto_orient = op['auto-orient'] || '',
                thumbnail = op.thumbnail || '',
                strip = op.strip || '',
                gravity = op.gravity || '',
                crop = op.crop || '',
                quality = op.quality || '',
                rotate = op.rotate || '',
                format = op.format || '',
                blur = op.blur || '';
            //Todo check option

            var imageUrl = 'imageMogr2';

            imageUrl += auto_orient ? '/auto-orient' : '';
            imageUrl += thumbnail ? '/thumbnail/' + thumbnail : '';
            imageUrl += strip ? '/strip' : '';
            imageUrl += gravity ? '/gravity/' + gravity : '';
            imageUrl += quality ? '/quality/' + quality : '';
            imageUrl += crop ? '/crop/' + crop : '';
            imageUrl += rotate ? '/rotate/' + rotate : '';
            imageUrl += format ? '/format/' + format : '';
            imageUrl += blur ? '/blur/' + blur : '';

            if (key) {
                imageUrl = this.getUrl(key) + '?' + imageUrl;
            }
            return imageUrl;
        };

        /**
         * invoke the watermark api of Qiniu
         * @param  {Object} api params
         * @param  {String} key of file
         * @return {String} url of processed image
         */
        this.watermark = function (op, key) {
            var mode = op.mode;
            if (!mode) {
                return false;
            }

            var imageUrl = 'watermark/' + mode;

            if (mode === 1) {
                var image = op.image || '';
                if (!image) {
                    return false;
                }
                imageUrl += image ? '/image/' + this.URLSafeBase64Encode(image) : '';
            } else if (mode === 2) {
                var text = op.text ? op.text : '',
                    font = op.font ? op.font : '',
                    fontsize = op.fontsize ? op.fontsize : '',
                    fill = op.fill ? op.fill : '';
                if (!text) {
                    return false;
                }
                imageUrl += text ? '/text/' + this.URLSafeBase64Encode(text) : '';
                imageUrl += font ? '/font/' + this.URLSafeBase64Encode(font) : '';
                imageUrl += fontsize ? '/fontsize/' + fontsize : '';
                imageUrl += fill ? '/fill/' + this.URLSafeBase64Encode(fill) : '';
            } else {
                // Todo mode3
                return false;
            }

            var dissolve = op.dissolve || '',
                gravity = op.gravity || '',
                dx = op.dx || '',
                dy = op.dy || '';

            imageUrl += dissolve ? '/dissolve/' + dissolve : '';
            imageUrl += gravity ? '/gravity/' + gravity : '';
            imageUrl += dx ? '/dx/' + dx : '';
            imageUrl += dy ? '/dy/' + dy : '';

            if (key) {
                imageUrl = this.getUrl(key) + '?' + imageUrl;
            }
            return imageUrl;
        };

        /**
         * invoke the imageInfo api of Qiniu
         * @param  {String} key of file
         * @return {Object} image info
         */
        this.imageInfo = function (key) {
            if (!key) {
                return false;
            }
            var url = this.getUrl(key) + '?imageInfo';
            var xhr = this.createAjax();
            var info;
            var that = this;
            xhr.open('GET', url, false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    info = that.parseJSON(xhr.responseText);
                }
            };
            xhr.send();
            return info;
        };

        /**
         * invoke the exif api of Qiniu
         * @param  {String} key of file
         * @return {Object} image exif
         */
        this.exif = function (key) {
            if (!key) {
                return false;
            }
            var url = this.getUrl(key) + '?exif';
            var xhr = this.createAjax();
            var info;
            var that = this;
            xhr.open('GET', url, false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    info = that.parseJSON(xhr.responseText);
                }
            };
            xhr.send();
            return info;
        };

        /**
         * invoke the exif or imageInfo api of Qiniu
         * according with type param
         * @param  {String} ['exif'|'imageInfo']type of info
         * @param  {String} key of file
         * @return {Object} image exif or info
         */
        this.get = function (type, key) {
            if (!key || !type) {
                return false;
            }
            if (type === 'exif') {
                return this.exif(key);
            } else if (type === 'imageInfo') {
                return this.imageInfo(key);
            }
            return false;
        };

        /**
         * invoke api of Qiniu like a pipeline
         * @param  {Array of Object} params of a series api call
         * each object in array is options of api which name is set as 'fop' property
         * each api's output will be next api's input
         * @param  {String} key of file
         * @return {String|Boolean} url of processed image
         */
        this.pipeline = function (arr, key) {
            var isArray = Object.prototype.toString.call(arr) === '[object Array]';
            var option, errOp, imageUrl = '';
            if (isArray) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    option = arr[i];
                    if (!option.fop) {
                        return false;
                    }
                    switch (option.fop) {
                        case 'watermark':
                            imageUrl += this.watermark(option) + '|';
                            break;
                        case 'imageView2':
                            imageUrl += this.imageView2(option) + '|';
                            break;
                        case 'imageMogr2':
                            imageUrl += this.imageMogr2(option) + '|';
                            break;
                        default:
                            errOp = true;
                            break;
                    }
                    if (errOp) {
                        return false;
                    }
                }
                if (key) {
                    imageUrl = this.getUrl(key) + '?' + imageUrl;
                    var length = imageUrl.length;
                    if (imageUrl.slice(length - 1) === '|') {
                        imageUrl = imageUrl.slice(0, length - 1);
                    }
                }
                return imageUrl;
            }
            return false;
        };
    }

    var Qiniu = new QiniuJsSDK();

    global.Qiniu = Qiniu;
    global.QiniuJsSDK = QiniuJsSDK;

})(window);


/***/ })
/******/ ]);