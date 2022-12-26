"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-UZRWPHG2_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-44WASECX_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-ZDHWZFJU_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-P4SH322Z_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react-dom_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");

require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils/index.js");










var App = /*#__PURE__*/function (_Component) {
  (0,_Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(App, _Component);
  var _super = (0,_Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(App);
  function App() {
    var _this;
    (0,_Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, App);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "updateVersion", function () {
      if (wx.canIUse('getUpdateManager')) {
        // 创建 UpdateManager 实例
        var updateManager = wx.getUpdateManager();

        // 检测版本是否有更新
        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
          if (res.hasUpdate) {
            // 监听小程序有版本更新事件
            updateManager.onUpdateReady(function () {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启 （此处进行了自动更新操作，无需用户手动确认）
              updateManager.applyUpdate();
            });
            updateManager.onUpdateFailed(function () {
              // 新版本下载失败
              wx.showModal({
                title: '检测到新版本',
                content: '请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开哦~'
              });
            });
          }
        });
      } else {
        wx.showModal({
          title: '溫馨提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        });
      }
    });
    return _this;
  }
  (0,_Volumes_sweet_my_taro_preact_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.updateVersion();
      var systemInfo = Taro.getSystemInfoSync();
      var _ref = systemInfo || {},
        safeArea = _ref.safeArea,
        screenHeight = _ref.screenHeight;
      var _ref2 = safeArea || {},
        bottom = _ref2.bottom;
      if (screenHeight - bottom === 34) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setGlobalData)('isIphoneX', true);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}

    // 线上版本更新
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.js */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["pages/index/index"],"subPackages":[],"plugins":[],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_js__WEBPACK_IMPORTED_MODULE_4__["default"], react__WEBPACK_IMPORTED_MODULE_5__, (react_dom__WEBPACK_IMPORTED_MODULE_6___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports reloadCurrentPage, reloadPreviousPage, getParams, getCurrentPageUrl, packBackUrl, parseBackUrl, copyText, getData, isToday, compareVersion */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);


// 重刷当前页面
var reloadCurrentPage = function reloadCurrentPage() {
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentPages();
  var currentPage = pages[pages.length - 1];
  currentPage.onLoad(currentPage.options);
};

// 重刷前一个页面
var reloadPreviousPage = function reloadPreviousPage() {
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentPages();
  var previousPage = pages[pages.length - 2];
  previousPage.onLoad(previousPage.options);
};

// 获取当前页面url参数对象
var getParams = function getParams() {
  var params = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentInstance().router.params || {};
  for (var key in params) {
    if (key == '$taroTimestamp') delete params[key];
  }
  return params;
};

// 获取当前页面url
var getCurrentPageUrl = function getCurrentPageUrl() {
  var currentPage = '';
  var paramsStr = '';
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentPages();
  if (pages.length) currentPage = pages[pages.length - 1];
  return currentPage.route;
};

// 拼接 【当前页面url+参数】 作为backUrl
var packBackUrl = function packBackUrl(_params) {
  var url = getCurrentPageUrl();
  var params = _params || getParams() || {};
  var paramsStr = '';
  for (var key in params) {
    paramsStr = paramsStr + key + '=' + params[key] + '&';
  }
  return "backUrl=".concat(url, "&").concat(paramsStr);
};

/**
 * 组装地址：解析url参数中的backUrl，作为接下来要跳转的页面地址，并且携带url中的其他参数
 * @param {*} defaultUrl
 * @returns
 */
var parseBackUrl = function parseBackUrl(defaultUrl) {
  var params = getParams() || {};
  if (!params.backUrl) return defaultUrl;
  var paramsStr = '';
  for (var key in params) {
    key !== 'backUrl' && (paramsStr = paramsStr + key + '=' + params[key] + '&');
  }
  return "/".concat(params.backUrl, "?").concat(paramsStr);
};

// 复制文字
var copyText = function copyText(text) {
  text && wx.setClipboardData({
    data: text
  });
};

// 处理时间戳-xxxx-yy-dd
var getData = function getData() {
  var _time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +new Date();
  var date = new Date(_time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').split(' ')[0];
};

// 判断日期是否是今天
var isToday = function isToday(data) {
  var date = new Date(data || null);
  var current = new Date();
  if (current.getFullYear() == date.getFullYear() && current.getMonth() == date.getMonth() && current.getDate() == date.getDate()) {
    return true;
  }
  return false;
};

// 微信版本号比较
var compareVersion = function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};

/***/ }),

/***/ "./src/utils/global.js":
/*!*****************************!*\
  !*** ./src/utils/global.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setGlobalData": function() { return /* binding */ setGlobalData; }
/* harmony export */ });
/* unused harmony export getGlobalData */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);


// 全局变量
var globalData = {
  isIphoneX: false,
  list: []
};
function setGlobalData(key, val) {
  globalData[key] = val;
  if (key === 'list') _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().eventCenter.trigger('CHANGE_GLOBAL_LIST');
}
function getGlobalData(key) {
  return globalData[key];
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setGlobalData": function() { return /* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_1__.setGlobalData; }
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/utils/common.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/utils/global.js");



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map