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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js ***!
  \********************************************************************************/
/*! exports provided: ScriptLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoader", function() { return ScriptLoader; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () { return ({
    listeners: [],
    scriptId: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])('tiny-script'),
    scriptLoading: false,
    scriptLoaded: false
}); };
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, async, defer, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        scriptTag.async = async;
        scriptTag.defer = defer;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, async, defer, delay, callback) {
        var scriptTagInjection = function () { return injectScriptTag(state.scriptId, doc, url, async, defer, function () {
            state.listeners.forEach(function (fn) { return fn(); });
            state.scriptLoaded = true;
        }); };
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!state.scriptLoading) {
                state.scriptLoading = true;
                if (delay > 0) {
                    setTimeout(scriptTagInjection, delay);
                }
                else {
                    scriptTagInjection();
                }
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js ***!
  \***************************************************************************/
/*! exports provided: getTinymce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTinymce", function() { return getTinymce; });
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js ***!
  \*************************************************************************/
/*! exports provided: isFunction, configHandlers2, configHandlers, uuid, isTextareaOrInput, mergePlugins, isBeforeInputEventAvailable, isInDoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configHandlers2", function() { return configHandlers2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configHandlers", function() { return configHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextareaOrInput", function() { return isTextareaOrInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergePlugins", function() { return mergePlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBeforeInputEventAvailable", function() { return isBeforeInputEventAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInDoc", function() { return isInDoc; });
/* harmony import */ var _components_EditorPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditorPropTypes */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var isFunction = function (x) { return typeof x === 'function'; };
var isEventProp = function (name) { return name in _components_EditorPropTypes__WEBPACK_IMPORTED_MODULE_0__["eventPropTypes"]; };
var eventAttrToEventName = function (attrName) { return attrName.substr(2); };
var configHandlers2 = function (handlerLookup, on, off, adapter, prevProps, props, boundHandlers) {
    var prevEventKeys = Object.keys(prevProps).filter(isEventProp);
    var currEventKeys = Object.keys(props).filter(isEventProp);
    var removedKeys = prevEventKeys.filter(function (key) { return props[key] === undefined; });
    var addedKeys = currEventKeys.filter(function (key) { return prevProps[key] === undefined; });
    removedKeys.forEach(function (key) {
        // remove event handler
        var eventName = eventAttrToEventName(key);
        var wrappedHandler = boundHandlers[eventName];
        off(eventName, wrappedHandler);
        delete boundHandlers[eventName];
    });
    addedKeys.forEach(function (key) {
        var wrappedHandler = adapter(handlerLookup, key);
        var eventName = eventAttrToEventName(key);
        boundHandlers[eventName] = wrappedHandler;
        on(eventName, wrappedHandler);
    });
};
var configHandlers = function (editor, prevProps, props, boundHandlers, lookup) {
    return configHandlers2(lookup, editor.on.bind(editor), editor.off.bind(editor), function (handlerLookup, key) { return function (e) { var _a; return (_a = handlerLookup(key)) === null || _a === void 0 ? void 0 : _a(e, editor); }; }, prevProps, props, boundHandlers);
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextareaOrInput = function (element) {
    return element !== null && (element.tagName.toLowerCase() === 'textarea' || element.tagName.toLowerCase() === 'input');
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
// eslint-disable-next-line max-len
var mergePlugins = function (initPlugins, inputPlugins) { return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); };
var isBeforeInputEventAvailable = function () { return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === 'function'; };
var isInDoc = function (elem) {
    var current = elem;
    var parent = elem.parentNode;
    while (parent != null) {
        current = parent;
        parent = current.parentNode;
    }
    return current === elem.ownerDocument;
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js ***!
  \*************************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var changeEvents = function () { var _a, _b, _c; return ((_c = (_b = (_a = Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])()) === null || _a === void 0 ? void 0 : _a.Env) === null || _b === void 0 ? void 0 : _b.browser) === null || _c === void 0 ? void 0 : _c.isIE()) ? 'change keyup compositionend setcontent' : 'change input compositionend setcontent'; };
var beforeInputEvent = function () { return Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isBeforeInputEventAvailable"])() ? 'beforeinput SelectionChange' : 'SelectionChange'; };
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _a, _b, _c;
        var _this = _super.call(this, props) || this;
        _this.rollbackTimer = undefined;
        _this.valueCursor = undefined;
        _this.rollbackChange = function () {
            var editor = _this.editor;
            var value = _this.props.value;
            if (editor && value && value !== _this.currentContent) {
                editor.undoManager.ignore(function () {
                    editor.setContent(value);
                    // only restore cursor on inline editors when they are focused
                    // as otherwise it will cause a focus grab
                    if (_this.valueCursor && (!_this.inline || editor.hasFocus())) {
                        try {
                            editor.selection.moveToBookmark(_this.valueCursor);
                        }
                        catch (e) { /* ignore */ }
                    }
                });
            }
            _this.rollbackTimer = undefined;
        };
        _this.handleBeforeInput = function (_evt) {
            if (_this.props.value !== undefined && _this.props.value === _this.currentContent && _this.editor) {
                if (!_this.inline || _this.editor.hasFocus) {
                    try {
                        // getBookmark throws exceptions when the editor has not been focused
                        // possibly only in inline mode but I'm not taking chances
                        _this.valueCursor = _this.editor.selection.getBookmark(3);
                    }
                    catch (e) { /* ignore */ }
                }
            }
        };
        _this.handleBeforeInputSpecial = function (evt) {
            if (evt.key === 'Enter' || evt.key === 'Backspace' || evt.key === 'Delete') {
                _this.handleBeforeInput(evt);
            }
        };
        _this.handleEditorChange = function (_evt) {
            var editor = _this.editor;
            if (editor && editor.initialized) {
                var newContent = editor.getContent();
                if (_this.props.value !== undefined && _this.props.value !== newContent) {
                    // start a timer and revert to the value if not applied in time
                    if (!_this.rollbackTimer) {
                        _this.rollbackTimer = window.setTimeout(_this.rollbackChange, 200);
                    }
                }
                if (newContent !== _this.currentContent) {
                    _this.currentContent = newContent;
                    if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.props.onEditorChange)) {
                        var format = _this.props.outputFormat;
                        var out = format === 'html' ? newContent : editor.getContent({ format: format });
                        _this.props.onEditorChange(out, editor);
                    }
                }
            }
        };
        _this.handleEditorChangeSpecial = function (evt) {
            if (evt.key === 'Backspace' || evt.key === 'Delete') {
                _this.handleEditorChange(evt);
            }
        };
        _this.initialise = function (attempts) {
            var _a, _b, _c;
            if (attempts === void 0) { attempts = 0; }
            var target = _this.elementRef.current;
            if (!target) {
                return; // Editor has been unmounted
            }
            if (!Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isInDoc"])(target)) {
                // this is probably someone trying to help by rendering us offscreen
                // but we can't do that because the editor iframe must be in the document
                // in order to have state
                if (attempts === 0) {
                    // we probably just need to wait for the current events to be processed
                    setTimeout(function () { return _this.initialise(1); }, 1);
                }
                else if (attempts < 11) {
                    // wait for a second, polling every tenth of a second
                    setTimeout(function () { return _this.initialise(attempts + 1); }, 100);
                }
                else {
                    // give up, at this point it seems that more polling is unlikely to help
                    throw new Error('tinymce can only be initialised when in a document');
                }
                return;
            }
            var tinymce = Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])();
            if (!tinymce) {
                throw new Error('tinymce should have been loaded into global scope');
            }
            var finalInit = __assign(__assign({}, _this.props.init), { selector: undefined, target: target, readonly: _this.props.disabled, inline: _this.inline, plugins: Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["mergePlugins"])((_a = _this.props.init) === null || _a === void 0 ? void 0 : _a.plugins, _this.props.plugins), toolbar: (_b = _this.props.toolbar) !== null && _b !== void 0 ? _b : (_c = _this.props.init) === null || _c === void 0 ? void 0 : _c.toolbar, setup: function (editor) {
                    _this.editor = editor;
                    _this.bindHandlers({});
                    // When running in inline mode the editor gets the initial value
                    // from the innerHTML of the element it is initialized on.
                    // However we don't want to take on the responsibility of sanitizing
                    // to remove XSS in the react integration so we have a chicken and egg
                    // problem... We avoid it by sneaking in a set content before the first
                    // "official" setContent and using TinyMCE to do the sanitization.
                    if (_this.inline && !Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isTextareaOrInput"])(target)) {
                        editor.once('PostRender', function (_evt) {
                            editor.setContent(_this.getInitialValue(), { no_events: true });
                        });
                    }
                    if (_this.props.init && Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.props.init.setup)) {
                        _this.props.init.setup(editor);
                    }
                }, init_instance_callback: function (editor) {
                    var _a, _b;
                    // check for changes that happened since tinymce.init() was called
                    var initialValue = _this.getInitialValue();
                    _this.currentContent = (_a = _this.currentContent) !== null && _a !== void 0 ? _a : editor.getContent();
                    if (_this.currentContent !== initialValue) {
                        _this.currentContent = initialValue;
                        // same as resetContent in TinyMCE 5
                        editor.setContent(initialValue);
                        editor.undoManager.clear();
                        editor.undoManager.add();
                        editor.setDirty(false);
                    }
                    var disabled = (_b = _this.props.disabled) !== null && _b !== void 0 ? _b : false;
                    editor.setMode(disabled ? 'readonly' : 'design');
                    // ensure existing init_instance_callback is called
                    if (_this.props.init && Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.props.init.init_instance_callback)) {
                        _this.props.init.init_instance_callback(editor);
                    }
                } });
            if (!_this.inline) {
                target.style.visibility = '';
            }
            if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isTextareaOrInput"])(target)) {
                target.value = _this.getInitialValue();
            }
            tinymce.init(finalInit);
        };
        _this.id = _this.props.id || Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])('tiny-react');
        _this.elementRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.inline = (_c = (_a = _this.props.inline) !== null && _a !== void 0 ? _a : (_b = _this.props.init) === null || _b === void 0 ? void 0 : _b.inline) !== null && _c !== void 0 ? _c : false;
        _this.boundHandlers = {};
        return _this;
    }
    Editor.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var _a, _b;
        if (this.rollbackTimer) {
            clearTimeout(this.rollbackTimer);
            this.rollbackTimer = undefined;
        }
        if (this.editor) {
            this.bindHandlers(prevProps);
            if (this.editor.initialized) {
                this.currentContent = (_a = this.currentContent) !== null && _a !== void 0 ? _a : this.editor.getContent();
                if (typeof this.props.initialValue === 'string' && this.props.initialValue !== prevProps.initialValue) {
                    // same as resetContent in TinyMCE 5
                    this.editor.setContent(this.props.initialValue);
                    this.editor.undoManager.clear();
                    this.editor.undoManager.add();
                    this.editor.setDirty(false);
                }
                else if (typeof this.props.value === 'string' && this.props.value !== this.currentContent) {
                    var localEditor_1 = this.editor;
                    localEditor_1.undoManager.transact(function () {
                        // inline editors grab focus when restoring selection
                        // so we don't try to keep their selection unless they are currently focused
                        var cursor;
                        if (!_this.inline || localEditor_1.hasFocus()) {
                            try {
                                // getBookmark throws exceptions when the editor has not been focused
                                // possibly only in inline mode but I'm not taking chances
                                cursor = localEditor_1.selection.getBookmark(3);
                            }
                            catch (e) { /* ignore */ }
                        }
                        var valueCursor = _this.valueCursor;
                        localEditor_1.setContent(_this.props.value);
                        if (!_this.inline || localEditor_1.hasFocus()) {
                            for (var _i = 0, _a = [cursor, valueCursor]; _i < _a.length; _i++) {
                                var bookmark = _a[_i];
                                if (bookmark) {
                                    try {
                                        localEditor_1.selection.moveToBookmark(bookmark);
                                        _this.valueCursor = bookmark;
                                        break;
                                    }
                                    catch (e) { /* ignore */ }
                                }
                            }
                        }
                    });
                }
                if (this.props.disabled !== prevProps.disabled) {
                    var disabled = (_b = this.props.disabled) !== null && _b !== void 0 ? _b : false;
                    this.editor.setMode(disabled ? 'readonly' : 'design');
                }
            }
        }
    };
    Editor.prototype.componentDidMount = function () {
        var _a, _b, _c, _d, _e, _f;
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])() !== null) {
            this.initialise();
        }
        else if (this.elementRef.current && this.elementRef.current.ownerDocument) {
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__["ScriptLoader"].load(this.elementRef.current.ownerDocument, this.getScriptSrc(), (_b = (_a = this.props.scriptLoading) === null || _a === void 0 ? void 0 : _a.async) !== null && _b !== void 0 ? _b : false, (_d = (_c = this.props.scriptLoading) === null || _c === void 0 ? void 0 : _c.defer) !== null && _d !== void 0 ? _d : false, (_f = (_e = this.props.scriptLoading) === null || _e === void 0 ? void 0 : _e.delay) !== null && _f !== void 0 ? _f : 0, this.initialise);
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        var _this = this;
        var editor = this.editor;
        if (editor) {
            editor.off(changeEvents(), this.handleEditorChange);
            editor.off(beforeInputEvent(), this.handleBeforeInput);
            editor.off('keypress', this.handleEditorChangeSpecial);
            editor.off('keydown', this.handleBeforeInputSpecial);
            editor.off('NewBlock', this.handleEditorChange);
            Object.keys(this.boundHandlers).forEach(function (eventName) {
                editor.off(eventName, _this.boundHandlers[eventName]);
            });
            this.boundHandlers = {};
            editor.remove();
            this.editor = undefined;
        }
    };
    Editor.prototype.render = function () {
        return this.inline ? this.renderInline() : this.renderIframe();
    };
    Editor.prototype.renderInline = function () {
        var _a = this.props.tagName, tagName = _a === void 0 ? 'div' : _a;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](tagName, {
            ref: this.elementRef,
            id: this.id
        });
    };
    Editor.prototype.renderIframe = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('textarea', {
            ref: this.elementRef,
            style: { visibility: 'hidden' },
            name: this.props.textareaName,
            id: this.id
        });
    };
    Editor.prototype.getScriptSrc = function () {
        if (typeof this.props.tinymceScriptSrc === 'string') {
            return this.props.tinymceScriptSrc;
        }
        else {
            var channel = this.props.cloudChannel;
            var apiKey = this.props.apiKey ? this.props.apiKey : 'no-api-key';
            return "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js";
        }
    };
    Editor.prototype.getInitialValue = function () {
        if (typeof this.props.initialValue === 'string') {
            return this.props.initialValue;
        }
        else if (typeof this.props.value === 'string') {
            return this.props.value;
        }
        else {
            return '';
        }
    };
    Editor.prototype.bindHandlers = function (prevProps) {
        var _this = this;
        if (this.editor !== undefined) {
            // typescript chokes trying to understand the type of the lookup function
            Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["configHandlers"])(this.editor, prevProps, this.props, this.boundHandlers, function (key) { return _this.props[key]; });
            // check if we should monitor editor changes
            var isValueControlled = function (p) { return p.onEditorChange !== undefined || p.value !== undefined; };
            var wasControlled = isValueControlled(prevProps);
            var nowControlled = isValueControlled(this.props);
            if (!wasControlled && nowControlled) {
                this.editor.on(changeEvents(), this.handleEditorChange);
                this.editor.on(beforeInputEvent(), this.handleBeforeInput);
                this.editor.on('keydown', this.handleBeforeInputSpecial);
                this.editor.on('keyup', this.handleEditorChangeSpecial);
                this.editor.on('NewBlock', this.handleEditorChange);
            }
            else if (wasControlled && !nowControlled) {
                this.editor.off(changeEvents(), this.handleEditorChange);
                this.editor.off(beforeInputEvent(), this.handleBeforeInput);
                this.editor.off('keydown', this.handleBeforeInputSpecial);
                this.editor.off('keyup', this.handleEditorChangeSpecial);
                this.editor.off('NewBlock', this.handleEditorChange);
            }
        }
    };
    Editor.propTypes = _EditorPropTypes__WEBPACK_IMPORTED_MODULE_4__["EditorPropTypes"];
    Editor.defaultProps = {
        cloudChannel: '5'
    };
    return Editor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \**********************************************************************************************/
/*! exports provided: eventPropTypes, EditorPropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventPropTypes", function() { return eventPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPropTypes", function() { return EditorPropTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var eventPropTypes = {
    onActivate: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onAddUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeAddUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeExecCommand: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeGetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeRenderUI: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeSetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforePaste: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBlur: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onClearUndos: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onCopy: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onCut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDblclick: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDeactivate: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDirty: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDrag: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragDrop: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragGesture: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDrop: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onExecCommand: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocus: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocusIn: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocusOut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onGetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onHide: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onInit: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onLoadContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onNodeChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectResizeStart: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectResized: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectSelected: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPaste: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPostProcess: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPostRender: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPreProcess: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onProgressState: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onRedo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onRemove: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onReset: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSaveContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSetAttrib: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onShow: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onVisualAid: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"]
};
var EditorPropTypes = __assign({ apiKey: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], inline: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"], init: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"], initialValue: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], onEditorChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"], outputFormat: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"](['html', 'text']), value: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], tagName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], cloudChannel: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], plugins: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["array"]]), toolbar: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["array"]]), disabled: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"], textareaName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], tinymceScriptSrc: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], scriptLoading: prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
        async: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
        defer: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
        delay: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]
    }) }, eventPropTypes);


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js ***!
  \*************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _components_Editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */




/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon({
  icon,
  size = 24,
  ...props
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/index.js ***!
  \*************************************************************/
/*! exports provided: Icon, addSubmenu, alignCenter, alignJustify, alignLeft, alignRight, archive, archiveTitle, arrowDown, arrowLeft, arrowRight, arrowUp, atSymbol, aspectRatio, audio, backup, blockDefault, blockTable, box, brush, button, buttons, calendar, cancelCircleFilled, capturePhoto, captureVideo, category, chartBar, check, chevronDown, chevronLeft, chevronRight, chevronUp, classic, close, closeSmall, cloudUpload, cloud, code, cog, column, columns, comment, cover, create, crop, currencyDollar, currencyEuro, currencyPound, customPostType, desktop, dragHandle, download, edit, external, file, flipHorizontal, flipVertical, formatBold, formatCapitalize, formatIndent, formatIndentRTL, formatItalic, formatListBullets, formatListBulletsRTL, formatListNumbered, formatListNumberedRTL, formatLtr, formatLowercase, formatOutdent, formatOutdentRTL, formatRtl, formatStrikethrough, formatUnderline, formatUppercase, fullscreen, gallery, globe, grid, group, handle, heading, help, inbox, institution, home, html, image, info, insertAfter, insertBefore, justifyLeft, justifyCenter, justifyRight, justifySpaceBetween, keyboardClose, keyboardReturn, layout, lifesaver, link, linkOff, list, listView, lock, login, loop, mapMarker, media, mediaAndText, megaphone, menu, minus, mobile, more, moreHorizontal, moreHorizontalMobile, moreVertical, moveTo, navigation, overlayText, pageBreak, customLink, page, pages, paragraph, payment, percent, positionCenter, positionLeft, positionRight, pencil, people, pin, plugins, plusCircleFilled, plusCircle, plus, postCategories, postContent, postComments, postCommentsCount, postCommentsForm, postDate, postExcerpt, postFeaturedImage, postList, postTitle, previous, next, preformatted, pullLeft, pullRight, pullquote, queryPagination, queryPaginationNext, queryPaginationNumbers, queryPaginationPrevious, quote, receipt, redo, replace, resizeCornerNE, reusableBlock, rotateLeft, rotateRight, rss, search, separator, settings, share, siteLogo, shortcode, stack, starEmpty, starFilled, starHalf, store, stretchFullWidth, shipping, stretchWide, subscript, superscript, swatch, tableColumnAfter, tableColumnBefore, tableColumnDelete, tableRowAfter, tableRowBefore, tableRowDelete, table, tag, termDescription, footer, header, sidebar, textColor, tablet, title, tool, trash, typography, undo, ungroup, update, upload, verse, video, warning, widget, wordpress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _library_add_submenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/add-submenu */ "./node_modules/@wordpress/icons/build-module/library/add-submenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSubmenu", function() { return _library_add_submenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _library_align_center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/align-center */ "./node_modules/@wordpress/icons/build-module/library/align-center.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignCenter", function() { return _library_align_center__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _library_align_justify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/align-justify */ "./node_modules/@wordpress/icons/build-module/library/align-justify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignJustify", function() { return _library_align_justify__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _library_align_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library/align-left */ "./node_modules/@wordpress/icons/build-module/library/align-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignLeft", function() { return _library_align_left__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _library_align_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library/align-right */ "./node_modules/@wordpress/icons/build-module/library/align-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignRight", function() { return _library_align_right__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _library_archive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library/archive */ "./node_modules/@wordpress/icons/build-module/library/archive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "archive", function() { return _library_archive__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _library_archive_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library/archive-title */ "./node_modules/@wordpress/icons/build-module/library/archive-title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "archiveTitle", function() { return _library_archive_title__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _library_arrow_down__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library/arrow-down */ "./node_modules/@wordpress/icons/build-module/library/arrow-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrowDown", function() { return _library_arrow_down__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _library_arrow_left__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./library/arrow-left */ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrowLeft", function() { return _library_arrow_left__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _library_arrow_right__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library/arrow-right */ "./node_modules/@wordpress/icons/build-module/library/arrow-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrowRight", function() { return _library_arrow_right__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _library_arrow_up__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./library/arrow-up */ "./node_modules/@wordpress/icons/build-module/library/arrow-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrowUp", function() { return _library_arrow_up__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _library_at_symbol__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./library/at-symbol */ "./node_modules/@wordpress/icons/build-module/library/at-symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "atSymbol", function() { return _library_at_symbol__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _library_aspect_ratio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./library/aspect-ratio */ "./node_modules/@wordpress/icons/build-module/library/aspect-ratio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "aspectRatio", function() { return _library_aspect_ratio__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _library_audio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./library/audio */ "./node_modules/@wordpress/icons/build-module/library/audio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audio", function() { return _library_audio__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _library_backup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./library/backup */ "./node_modules/@wordpress/icons/build-module/library/backup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backup", function() { return _library_backup__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _library_block_default__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./library/block-default */ "./node_modules/@wordpress/icons/build-module/library/block-default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockDefault", function() { return _library_block_default__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _library_block_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./library/block-table */ "./node_modules/@wordpress/icons/build-module/library/block-table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockTable", function() { return _library_block_table__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _library_box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./library/box */ "./node_modules/@wordpress/icons/build-module/library/box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "box", function() { return _library_box__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _library_brush__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./library/brush */ "./node_modules/@wordpress/icons/build-module/library/brush.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brush", function() { return _library_brush__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _library_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./library/button */ "./node_modules/@wordpress/icons/build-module/library/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "button", function() { return _library_button__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _library_buttons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./library/buttons */ "./node_modules/@wordpress/icons/build-module/library/buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return _library_buttons__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _library_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./library/calendar */ "./node_modules/@wordpress/icons/build-module/library/calendar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return _library_calendar__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _library_cancel_circle_filled__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./library/cancel-circle-filled */ "./node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelCircleFilled", function() { return _library_cancel_circle_filled__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _library_capture_photo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./library/capture-photo */ "./node_modules/@wordpress/icons/build-module/library/capture-photo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capturePhoto", function() { return _library_capture_photo__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _library_capture_video__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./library/capture-video */ "./node_modules/@wordpress/icons/build-module/library/capture-video.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureVideo", function() { return _library_capture_video__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _library_category__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./library/category */ "./node_modules/@wordpress/icons/build-module/library/category.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "category", function() { return _library_category__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _library_chart_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./library/chart-bar */ "./node_modules/@wordpress/icons/build-module/library/chart-bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chartBar", function() { return _library_chart_bar__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _library_check__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./library/check */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "check", function() { return _library_check__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _library_chevron_down__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./library/chevron-down */ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chevronDown", function() { return _library_chevron_down__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _library_chevron_left__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./library/chevron-left */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chevronLeft", function() { return _library_chevron_left__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _library_chevron_right__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./library/chevron-right */ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chevronRight", function() { return _library_chevron_right__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _library_chevron_up__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./library/chevron-up */ "./node_modules/@wordpress/icons/build-module/library/chevron-up.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chevronUp", function() { return _library_chevron_up__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _library_classic__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./library/classic */ "./node_modules/@wordpress/icons/build-module/library/classic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classic", function() { return _library_classic__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _library_close__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./library/close */ "./node_modules/@wordpress/icons/build-module/library/close.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _library_close__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _library_close_small__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./library/close-small */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSmall", function() { return _library_close_small__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _library_cloud_upload__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./library/cloud-upload */ "./node_modules/@wordpress/icons/build-module/library/cloud-upload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloudUpload", function() { return _library_cloud_upload__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _library_cloud__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./library/cloud */ "./node_modules/@wordpress/icons/build-module/library/cloud.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return _library_cloud__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _library_code__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./library/code */ "./node_modules/@wordpress/icons/build-module/library/code.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "code", function() { return _library_code__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _library_cog__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./library/cog */ "./node_modules/@wordpress/icons/build-module/library/cog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cog", function() { return _library_cog__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _library_column__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./library/column */ "./node_modules/@wordpress/icons/build-module/library/column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "column", function() { return _library_column__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _library_columns__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./library/columns */ "./node_modules/@wordpress/icons/build-module/library/columns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return _library_columns__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _library_comment__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./library/comment */ "./node_modules/@wordpress/icons/build-module/library/comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return _library_comment__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _library_cover__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./library/cover */ "./node_modules/@wordpress/icons/build-module/library/cover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cover", function() { return _library_cover__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _library_create__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./library/create */ "./node_modules/@wordpress/icons/build-module/library/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _library_create__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _library_crop__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./library/crop */ "./node_modules/@wordpress/icons/build-module/library/crop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crop", function() { return _library_crop__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _library_currency_dollar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./library/currency-dollar */ "./node_modules/@wordpress/icons/build-module/library/currency-dollar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currencyDollar", function() { return _library_currency_dollar__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _library_currency_euro__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./library/currency-euro */ "./node_modules/@wordpress/icons/build-module/library/currency-euro.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currencyEuro", function() { return _library_currency_euro__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _library_currency_pound__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./library/currency-pound */ "./node_modules/@wordpress/icons/build-module/library/currency-pound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currencyPound", function() { return _library_currency_pound__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _library_custom_post_type__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./library/custom-post-type */ "./node_modules/@wordpress/icons/build-module/library/custom-post-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customPostType", function() { return _library_custom_post_type__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _library_desktop__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./library/desktop */ "./node_modules/@wordpress/icons/build-module/library/desktop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "desktop", function() { return _library_desktop__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _library_drag_handle__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./library/drag-handle */ "./node_modules/@wordpress/icons/build-module/library/drag-handle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragHandle", function() { return _library_drag_handle__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _library_download__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./library/download */ "./node_modules/@wordpress/icons/build-module/library/download.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "download", function() { return _library_download__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _library_edit__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./library/edit */ "./node_modules/@wordpress/icons/build-module/library/edit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return _library_edit__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _library_external__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./library/external */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "external", function() { return _library_external__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _library_file__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./library/file */ "./node_modules/@wordpress/icons/build-module/library/file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "file", function() { return _library_file__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _library_flip_horizontal__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./library/flip-horizontal */ "./node_modules/@wordpress/icons/build-module/library/flip-horizontal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipHorizontal", function() { return _library_flip_horizontal__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _library_flip_vertical__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./library/flip-vertical */ "./node_modules/@wordpress/icons/build-module/library/flip-vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipVertical", function() { return _library_flip_vertical__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _library_format_bold__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./library/format-bold */ "./node_modules/@wordpress/icons/build-module/library/format-bold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatBold", function() { return _library_format_bold__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _library_format_capitalize__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./library/format-capitalize */ "./node_modules/@wordpress/icons/build-module/library/format-capitalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatCapitalize", function() { return _library_format_capitalize__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _library_format_indent__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./library/format-indent */ "./node_modules/@wordpress/icons/build-module/library/format-indent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatIndent", function() { return _library_format_indent__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _library_format_indent_rtl__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./library/format-indent-rtl */ "./node_modules/@wordpress/icons/build-module/library/format-indent-rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatIndentRTL", function() { return _library_format_indent_rtl__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _library_format_italic__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./library/format-italic */ "./node_modules/@wordpress/icons/build-module/library/format-italic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatItalic", function() { return _library_format_italic__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _library_format_list_bullets__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./library/format-list-bullets */ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatListBullets", function() { return _library_format_list_bullets__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _library_format_list_bullets_rtl__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./library/format-list-bullets-rtl */ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatListBulletsRTL", function() { return _library_format_list_bullets_rtl__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _library_format_list_numbered__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./library/format-list-numbered */ "./node_modules/@wordpress/icons/build-module/library/format-list-numbered.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatListNumbered", function() { return _library_format_list_numbered__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _library_format_list_numbered_rtl__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./library/format-list-numbered-rtl */ "./node_modules/@wordpress/icons/build-module/library/format-list-numbered-rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatListNumberedRTL", function() { return _library_format_list_numbered_rtl__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _library_format_ltr__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./library/format-ltr */ "./node_modules/@wordpress/icons/build-module/library/format-ltr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLtr", function() { return _library_format_ltr__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _library_format_lowercase__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./library/format-lowercase */ "./node_modules/@wordpress/icons/build-module/library/format-lowercase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLowercase", function() { return _library_format_lowercase__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _library_format_outdent__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./library/format-outdent */ "./node_modules/@wordpress/icons/build-module/library/format-outdent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatOutdent", function() { return _library_format_outdent__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _library_format_outdent_rtl__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./library/format-outdent-rtl */ "./node_modules/@wordpress/icons/build-module/library/format-outdent-rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatOutdentRTL", function() { return _library_format_outdent_rtl__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _library_format_rtl__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./library/format-rtl */ "./node_modules/@wordpress/icons/build-module/library/format-rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRtl", function() { return _library_format_rtl__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _library_format_strikethrough__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./library/format-strikethrough */ "./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatStrikethrough", function() { return _library_format_strikethrough__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _library_format_underline__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./library/format-underline */ "./node_modules/@wordpress/icons/build-module/library/format-underline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatUnderline", function() { return _library_format_underline__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _library_format_uppercase__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./library/format-uppercase */ "./node_modules/@wordpress/icons/build-module/library/format-uppercase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatUppercase", function() { return _library_format_uppercase__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _library_fullscreen__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./library/fullscreen */ "./node_modules/@wordpress/icons/build-module/library/fullscreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullscreen", function() { return _library_fullscreen__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _library_gallery__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./library/gallery */ "./node_modules/@wordpress/icons/build-module/library/gallery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gallery", function() { return _library_gallery__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _library_globe__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./library/globe */ "./node_modules/@wordpress/icons/build-module/library/globe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globe", function() { return _library_globe__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _library_grid__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./library/grid */ "./node_modules/@wordpress/icons/build-module/library/grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _library_grid__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _library_group__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./library/group */ "./node_modules/@wordpress/icons/build-module/library/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _library_group__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _library_handle__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./library/handle */ "./node_modules/@wordpress/icons/build-module/library/handle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handle", function() { return _library_handle__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _library_heading__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./library/heading */ "./node_modules/@wordpress/icons/build-module/library/heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heading", function() { return _library_heading__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _library_help__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./library/help */ "./node_modules/@wordpress/icons/build-module/library/help.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "help", function() { return _library_help__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _library_inbox__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./library/inbox */ "./node_modules/@wordpress/icons/build-module/library/inbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inbox", function() { return _library_inbox__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _library_institution__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./library/institution */ "./node_modules/@wordpress/icons/build-module/library/institution.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "institution", function() { return _library_institution__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _library_home__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./library/home */ "./node_modules/@wordpress/icons/build-module/library/home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "home", function() { return _library_home__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _library_html__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./library/html */ "./node_modules/@wordpress/icons/build-module/library/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _library_html__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _library_image__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./library/image */ "./node_modules/@wordpress/icons/build-module/library/image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "image", function() { return _library_image__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _library_info__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./library/info */ "./node_modules/@wordpress/icons/build-module/library/info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "info", function() { return _library_info__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _library_insert_after__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./library/insert-after */ "./node_modules/@wordpress/icons/build-module/library/insert-after.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _library_insert_after__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _library_insert_before__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./library/insert-before */ "./node_modules/@wordpress/icons/build-module/library/insert-before.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return _library_insert_before__WEBPACK_IMPORTED_MODULE_90__["default"]; });

/* harmony import */ var _library_justify_left__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./library/justify-left */ "./node_modules/@wordpress/icons/build-module/library/justify-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyLeft", function() { return _library_justify_left__WEBPACK_IMPORTED_MODULE_91__["default"]; });

/* harmony import */ var _library_justify_center__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./library/justify-center */ "./node_modules/@wordpress/icons/build-module/library/justify-center.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyCenter", function() { return _library_justify_center__WEBPACK_IMPORTED_MODULE_92__["default"]; });

/* harmony import */ var _library_justify_right__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./library/justify-right */ "./node_modules/@wordpress/icons/build-module/library/justify-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifyRight", function() { return _library_justify_right__WEBPACK_IMPORTED_MODULE_93__["default"]; });

/* harmony import */ var _library_justify_space_between__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./library/justify-space-between */ "./node_modules/@wordpress/icons/build-module/library/justify-space-between.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justifySpaceBetween", function() { return _library_justify_space_between__WEBPACK_IMPORTED_MODULE_94__["default"]; });

/* harmony import */ var _library_keyboard_close__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./library/keyboard-close */ "./node_modules/@wordpress/icons/build-module/library/keyboard-close.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyboardClose", function() { return _library_keyboard_close__WEBPACK_IMPORTED_MODULE_95__["default"]; });

/* harmony import */ var _library_keyboard_return__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./library/keyboard-return */ "./node_modules/@wordpress/icons/build-module/library/keyboard-return.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyboardReturn", function() { return _library_keyboard_return__WEBPACK_IMPORTED_MODULE_96__["default"]; });

/* harmony import */ var _library_layout__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./library/layout */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return _library_layout__WEBPACK_IMPORTED_MODULE_97__["default"]; });

/* harmony import */ var _library_lifesaver__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./library/lifesaver */ "./node_modules/@wordpress/icons/build-module/library/lifesaver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lifesaver", function() { return _library_lifesaver__WEBPACK_IMPORTED_MODULE_98__["default"]; });

/* harmony import */ var _library_link__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./library/link */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "link", function() { return _library_link__WEBPACK_IMPORTED_MODULE_99__["default"]; });

/* harmony import */ var _library_link_off__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./library/link-off */ "./node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkOff", function() { return _library_link_off__WEBPACK_IMPORTED_MODULE_100__["default"]; });

/* harmony import */ var _library_list__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./library/list */ "./node_modules/@wordpress/icons/build-module/library/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "list", function() { return _library_list__WEBPACK_IMPORTED_MODULE_101__["default"]; });

/* harmony import */ var _library_list_view__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./library/list-view */ "./node_modules/@wordpress/icons/build-module/library/list-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listView", function() { return _library_list_view__WEBPACK_IMPORTED_MODULE_102__["default"]; });

/* harmony import */ var _library_lock__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./library/lock */ "./node_modules/@wordpress/icons/build-module/library/lock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lock", function() { return _library_lock__WEBPACK_IMPORTED_MODULE_103__["default"]; });

/* harmony import */ var _library_login__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./library/login */ "./node_modules/@wordpress/icons/build-module/library/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _library_login__WEBPACK_IMPORTED_MODULE_104__["default"]; });

/* harmony import */ var _library_loop__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./library/loop */ "./node_modules/@wordpress/icons/build-module/library/loop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return _library_loop__WEBPACK_IMPORTED_MODULE_105__["default"]; });

/* harmony import */ var _library_map_marker__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./library/map-marker */ "./node_modules/@wordpress/icons/build-module/library/map-marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapMarker", function() { return _library_map_marker__WEBPACK_IMPORTED_MODULE_106__["default"]; });

/* harmony import */ var _library_media__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./library/media */ "./node_modules/@wordpress/icons/build-module/library/media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "media", function() { return _library_media__WEBPACK_IMPORTED_MODULE_107__["default"]; });

/* harmony import */ var _library_media_and_text__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./library/media-and-text */ "./node_modules/@wordpress/icons/build-module/library/media-and-text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaAndText", function() { return _library_media_and_text__WEBPACK_IMPORTED_MODULE_108__["default"]; });

/* harmony import */ var _library_megaphone__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./library/megaphone */ "./node_modules/@wordpress/icons/build-module/library/megaphone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "megaphone", function() { return _library_megaphone__WEBPACK_IMPORTED_MODULE_109__["default"]; });

/* harmony import */ var _library_menu__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./library/menu */ "./node_modules/@wordpress/icons/build-module/library/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return _library_menu__WEBPACK_IMPORTED_MODULE_110__["default"]; });

/* harmony import */ var _library_minus__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./library/minus */ "./node_modules/@wordpress/icons/build-module/library/minus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minus", function() { return _library_minus__WEBPACK_IMPORTED_MODULE_111__["default"]; });

/* harmony import */ var _library_mobile__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./library/mobile */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mobile", function() { return _library_mobile__WEBPACK_IMPORTED_MODULE_112__["default"]; });

/* harmony import */ var _library_more__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./library/more */ "./node_modules/@wordpress/icons/build-module/library/more.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "more", function() { return _library_more__WEBPACK_IMPORTED_MODULE_113__["default"]; });

/* harmony import */ var _library_more_horizontal__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./library/more-horizontal */ "./node_modules/@wordpress/icons/build-module/library/more-horizontal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moreHorizontal", function() { return _library_more_horizontal__WEBPACK_IMPORTED_MODULE_114__["default"]; });

/* harmony import */ var _library_more_horizontal_mobile__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./library/more-horizontal-mobile */ "./node_modules/@wordpress/icons/build-module/library/more-horizontal-mobile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moreHorizontalMobile", function() { return _library_more_horizontal_mobile__WEBPACK_IMPORTED_MODULE_115__["default"]; });

/* harmony import */ var _library_more_vertical__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./library/more-vertical */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moreVertical", function() { return _library_more_vertical__WEBPACK_IMPORTED_MODULE_116__["default"]; });

/* harmony import */ var _library_move_to__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./library/move-to */ "./node_modules/@wordpress/icons/build-module/library/move-to.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveTo", function() { return _library_move_to__WEBPACK_IMPORTED_MODULE_117__["default"]; });

/* harmony import */ var _library_navigation__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./library/navigation */ "./node_modules/@wordpress/icons/build-module/library/navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return _library_navigation__WEBPACK_IMPORTED_MODULE_118__["default"]; });

/* harmony import */ var _library_overlay_text__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./library/overlay-text */ "./node_modules/@wordpress/icons/build-module/library/overlay-text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "overlayText", function() { return _library_overlay_text__WEBPACK_IMPORTED_MODULE_119__["default"]; });

/* harmony import */ var _library_page_break__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./library/page-break */ "./node_modules/@wordpress/icons/build-module/library/page-break.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageBreak", function() { return _library_page_break__WEBPACK_IMPORTED_MODULE_120__["default"]; });

/* harmony import */ var _library_custom_link__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./library/custom-link */ "./node_modules/@wordpress/icons/build-module/library/custom-link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customLink", function() { return _library_custom_link__WEBPACK_IMPORTED_MODULE_121__["default"]; });

/* harmony import */ var _library_page__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./library/page */ "./node_modules/@wordpress/icons/build-module/library/page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "page", function() { return _library_page__WEBPACK_IMPORTED_MODULE_122__["default"]; });

/* harmony import */ var _library_pages__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./library/pages */ "./node_modules/@wordpress/icons/build-module/library/pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return _library_pages__WEBPACK_IMPORTED_MODULE_123__["default"]; });

/* harmony import */ var _library_paragraph__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./library/paragraph */ "./node_modules/@wordpress/icons/build-module/library/paragraph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paragraph", function() { return _library_paragraph__WEBPACK_IMPORTED_MODULE_124__["default"]; });

/* harmony import */ var _library_payment__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./library/payment */ "./node_modules/@wordpress/icons/build-module/library/payment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "payment", function() { return _library_payment__WEBPACK_IMPORTED_MODULE_125__["default"]; });

/* harmony import */ var _library_percent__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./library/percent */ "./node_modules/@wordpress/icons/build-module/library/percent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return _library_percent__WEBPACK_IMPORTED_MODULE_126__["default"]; });

/* harmony import */ var _library_position_center__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./library/position-center */ "./node_modules/@wordpress/icons/build-module/library/position-center.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCenter", function() { return _library_position_center__WEBPACK_IMPORTED_MODULE_127__["default"]; });

/* harmony import */ var _library_position_left__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./library/position-left */ "./node_modules/@wordpress/icons/build-module/library/position-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionLeft", function() { return _library_position_left__WEBPACK_IMPORTED_MODULE_128__["default"]; });

/* harmony import */ var _library_position_right__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./library/position-right */ "./node_modules/@wordpress/icons/build-module/library/position-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionRight", function() { return _library_position_right__WEBPACK_IMPORTED_MODULE_129__["default"]; });

/* harmony import */ var _library_pencil__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./library/pencil */ "./node_modules/@wordpress/icons/build-module/library/pencil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pencil", function() { return _library_pencil__WEBPACK_IMPORTED_MODULE_130__["default"]; });

/* harmony import */ var _library_people__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./library/people */ "./node_modules/@wordpress/icons/build-module/library/people.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "people", function() { return _library_people__WEBPACK_IMPORTED_MODULE_131__["default"]; });

/* harmony import */ var _library_pin__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./library/pin */ "./node_modules/@wordpress/icons/build-module/library/pin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pin", function() { return _library_pin__WEBPACK_IMPORTED_MODULE_132__["default"]; });

/* harmony import */ var _library_plugins__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./library/plugins */ "./node_modules/@wordpress/icons/build-module/library/plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return _library_plugins__WEBPACK_IMPORTED_MODULE_133__["default"]; });

/* harmony import */ var _library_plus_circle_filled__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./library/plus-circle-filled */ "./node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plusCircleFilled", function() { return _library_plus_circle_filled__WEBPACK_IMPORTED_MODULE_134__["default"]; });

/* harmony import */ var _library_plus_circle__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./library/plus-circle */ "./node_modules/@wordpress/icons/build-module/library/plus-circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plusCircle", function() { return _library_plus_circle__WEBPACK_IMPORTED_MODULE_135__["default"]; });

/* harmony import */ var _library_plus__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./library/plus */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plus", function() { return _library_plus__WEBPACK_IMPORTED_MODULE_136__["default"]; });

/* harmony import */ var _library_post_categories__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./library/post-categories */ "./node_modules/@wordpress/icons/build-module/library/post-categories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postCategories", function() { return _library_post_categories__WEBPACK_IMPORTED_MODULE_137__["default"]; });

/* harmony import */ var _library_post_content__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./library/post-content */ "./node_modules/@wordpress/icons/build-module/library/post-content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postContent", function() { return _library_post_content__WEBPACK_IMPORTED_MODULE_138__["default"]; });

/* harmony import */ var _library_post_comments__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./library/post-comments */ "./node_modules/@wordpress/icons/build-module/library/post-comments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postComments", function() { return _library_post_comments__WEBPACK_IMPORTED_MODULE_139__["default"]; });

/* harmony import */ var _library_post_comments_count__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./library/post-comments-count */ "./node_modules/@wordpress/icons/build-module/library/post-comments-count.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postCommentsCount", function() { return _library_post_comments_count__WEBPACK_IMPORTED_MODULE_140__["default"]; });

/* harmony import */ var _library_post_comments_form__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./library/post-comments-form */ "./node_modules/@wordpress/icons/build-module/library/post-comments-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postCommentsForm", function() { return _library_post_comments_form__WEBPACK_IMPORTED_MODULE_141__["default"]; });

/* harmony import */ var _library_post_date__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./library/post-date */ "./node_modules/@wordpress/icons/build-module/library/post-date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postDate", function() { return _library_post_date__WEBPACK_IMPORTED_MODULE_142__["default"]; });

/* harmony import */ var _library_post_excerpt__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./library/post-excerpt */ "./node_modules/@wordpress/icons/build-module/library/post-excerpt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postExcerpt", function() { return _library_post_excerpt__WEBPACK_IMPORTED_MODULE_143__["default"]; });

/* harmony import */ var _library_post_featured_image__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./library/post-featured-image */ "./node_modules/@wordpress/icons/build-module/library/post-featured-image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postFeaturedImage", function() { return _library_post_featured_image__WEBPACK_IMPORTED_MODULE_144__["default"]; });

/* harmony import */ var _library_post_list__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./library/post-list */ "./node_modules/@wordpress/icons/build-module/library/post-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postList", function() { return _library_post_list__WEBPACK_IMPORTED_MODULE_145__["default"]; });

/* harmony import */ var _library_post_title__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./library/post-title */ "./node_modules/@wordpress/icons/build-module/library/post-title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postTitle", function() { return _library_post_title__WEBPACK_IMPORTED_MODULE_146__["default"]; });

/* harmony import */ var _library_previous__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./library/previous */ "./node_modules/@wordpress/icons/build-module/library/previous.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previous", function() { return _library_previous__WEBPACK_IMPORTED_MODULE_147__["default"]; });

/* harmony import */ var _library_next__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./library/next */ "./node_modules/@wordpress/icons/build-module/library/next.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "next", function() { return _library_next__WEBPACK_IMPORTED_MODULE_148__["default"]; });

/* harmony import */ var _library_preformatted__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./library/preformatted */ "./node_modules/@wordpress/icons/build-module/library/preformatted.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preformatted", function() { return _library_preformatted__WEBPACK_IMPORTED_MODULE_149__["default"]; });

/* harmony import */ var _library_pull_left__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./library/pull-left */ "./node_modules/@wordpress/icons/build-module/library/pull-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pullLeft", function() { return _library_pull_left__WEBPACK_IMPORTED_MODULE_150__["default"]; });

/* harmony import */ var _library_pull_right__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./library/pull-right */ "./node_modules/@wordpress/icons/build-module/library/pull-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pullRight", function() { return _library_pull_right__WEBPACK_IMPORTED_MODULE_151__["default"]; });

/* harmony import */ var _library_pullquote__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./library/pullquote */ "./node_modules/@wordpress/icons/build-module/library/pullquote.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pullquote", function() { return _library_pullquote__WEBPACK_IMPORTED_MODULE_152__["default"]; });

/* harmony import */ var _library_query_pagination__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./library/query-pagination */ "./node_modules/@wordpress/icons/build-module/library/query-pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryPagination", function() { return _library_query_pagination__WEBPACK_IMPORTED_MODULE_153__["default"]; });

/* harmony import */ var _library_query_pagination_next__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./library/query-pagination-next */ "./node_modules/@wordpress/icons/build-module/library/query-pagination-next.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryPaginationNext", function() { return _library_query_pagination_next__WEBPACK_IMPORTED_MODULE_154__["default"]; });

/* harmony import */ var _library_query_pagination_numbers__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./library/query-pagination-numbers */ "./node_modules/@wordpress/icons/build-module/library/query-pagination-numbers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryPaginationNumbers", function() { return _library_query_pagination_numbers__WEBPACK_IMPORTED_MODULE_155__["default"]; });

/* harmony import */ var _library_query_pagination_previous__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./library/query-pagination-previous */ "./node_modules/@wordpress/icons/build-module/library/query-pagination-previous.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryPaginationPrevious", function() { return _library_query_pagination_previous__WEBPACK_IMPORTED_MODULE_156__["default"]; });

/* harmony import */ var _library_quote__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./library/quote */ "./node_modules/@wordpress/icons/build-module/library/quote.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quote", function() { return _library_quote__WEBPACK_IMPORTED_MODULE_157__["default"]; });

/* harmony import */ var _library_receipt__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./library/receipt */ "./node_modules/@wordpress/icons/build-module/library/receipt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "receipt", function() { return _library_receipt__WEBPACK_IMPORTED_MODULE_158__["default"]; });

/* harmony import */ var _library_redo__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./library/redo */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redo", function() { return _library_redo__WEBPACK_IMPORTED_MODULE_159__["default"]; });

/* harmony import */ var _library_replace__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./library/replace */ "./node_modules/@wordpress/icons/build-module/library/replace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _library_replace__WEBPACK_IMPORTED_MODULE_160__["default"]; });

/* harmony import */ var _library_resize_corner_n_e__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./library/resize-corner-n-e */ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resizeCornerNE", function() { return _library_resize_corner_n_e__WEBPACK_IMPORTED_MODULE_161__["default"]; });

/* harmony import */ var _library_reusable_block__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./library/reusable-block */ "./node_modules/@wordpress/icons/build-module/library/reusable-block.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reusableBlock", function() { return _library_reusable_block__WEBPACK_IMPORTED_MODULE_162__["default"]; });

/* harmony import */ var _library_rotate_left__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./library/rotate-left */ "./node_modules/@wordpress/icons/build-module/library/rotate-left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateLeft", function() { return _library_rotate_left__WEBPACK_IMPORTED_MODULE_163__["default"]; });

/* harmony import */ var _library_rotate_right__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./library/rotate-right */ "./node_modules/@wordpress/icons/build-module/library/rotate-right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateRight", function() { return _library_rotate_right__WEBPACK_IMPORTED_MODULE_164__["default"]; });

/* harmony import */ var _library_rss__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./library/rss */ "./node_modules/@wordpress/icons/build-module/library/rss.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rss", function() { return _library_rss__WEBPACK_IMPORTED_MODULE_165__["default"]; });

/* harmony import */ var _library_search__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./library/search */ "./node_modules/@wordpress/icons/build-module/library/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search", function() { return _library_search__WEBPACK_IMPORTED_MODULE_166__["default"]; });

/* harmony import */ var _library_separator__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./library/separator */ "./node_modules/@wordpress/icons/build-module/library/separator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separator", function() { return _library_separator__WEBPACK_IMPORTED_MODULE_167__["default"]; });

/* harmony import */ var _library_settings__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./library/settings */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return _library_settings__WEBPACK_IMPORTED_MODULE_168__["default"]; });

/* harmony import */ var _library_share__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./library/share */ "./node_modules/@wordpress/icons/build-module/library/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "share", function() { return _library_share__WEBPACK_IMPORTED_MODULE_169__["default"]; });

/* harmony import */ var _library_site_logo__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./library/site-logo */ "./node_modules/@wordpress/icons/build-module/library/site-logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "siteLogo", function() { return _library_site_logo__WEBPACK_IMPORTED_MODULE_170__["default"]; });

/* harmony import */ var _library_shortcode__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./library/shortcode */ "./node_modules/@wordpress/icons/build-module/library/shortcode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shortcode", function() { return _library_shortcode__WEBPACK_IMPORTED_MODULE_171__["default"]; });

/* harmony import */ var _library_stack__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./library/stack */ "./node_modules/@wordpress/icons/build-module/library/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _library_stack__WEBPACK_IMPORTED_MODULE_172__["default"]; });

/* harmony import */ var _library_star_empty__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./library/star-empty */ "./node_modules/@wordpress/icons/build-module/library/star-empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "starEmpty", function() { return _library_star_empty__WEBPACK_IMPORTED_MODULE_173__["default"]; });

/* harmony import */ var _library_star_filled__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./library/star-filled */ "./node_modules/@wordpress/icons/build-module/library/star-filled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "starFilled", function() { return _library_star_filled__WEBPACK_IMPORTED_MODULE_174__["default"]; });

/* harmony import */ var _library_star_half__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./library/star-half */ "./node_modules/@wordpress/icons/build-module/library/star-half.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "starHalf", function() { return _library_star_half__WEBPACK_IMPORTED_MODULE_175__["default"]; });

/* harmony import */ var _library_store__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./library/store */ "./node_modules/@wordpress/icons/build-module/library/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _library_store__WEBPACK_IMPORTED_MODULE_176__["default"]; });

/* harmony import */ var _library_stretch_full_width__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./library/stretch-full-width */ "./node_modules/@wordpress/icons/build-module/library/stretch-full-width.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stretchFullWidth", function() { return _library_stretch_full_width__WEBPACK_IMPORTED_MODULE_177__["default"]; });

/* harmony import */ var _library_shipping__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./library/shipping */ "./node_modules/@wordpress/icons/build-module/library/shipping.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shipping", function() { return _library_shipping__WEBPACK_IMPORTED_MODULE_178__["default"]; });

/* harmony import */ var _library_stretch_wide__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./library/stretch-wide */ "./node_modules/@wordpress/icons/build-module/library/stretch-wide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stretchWide", function() { return _library_stretch_wide__WEBPACK_IMPORTED_MODULE_179__["default"]; });

/* harmony import */ var _library_subscript__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./library/subscript */ "./node_modules/@wordpress/icons/build-module/library/subscript.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscript", function() { return _library_subscript__WEBPACK_IMPORTED_MODULE_180__["default"]; });

/* harmony import */ var _library_superscript__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./library/superscript */ "./node_modules/@wordpress/icons/build-module/library/superscript.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "superscript", function() { return _library_superscript__WEBPACK_IMPORTED_MODULE_181__["default"]; });

/* harmony import */ var _library_swatch__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./library/swatch */ "./node_modules/@wordpress/icons/build-module/library/swatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swatch", function() { return _library_swatch__WEBPACK_IMPORTED_MODULE_182__["default"]; });

/* harmony import */ var _library_table_column_after__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./library/table-column-after */ "./node_modules/@wordpress/icons/build-module/library/table-column-after.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableColumnAfter", function() { return _library_table_column_after__WEBPACK_IMPORTED_MODULE_183__["default"]; });

/* harmony import */ var _library_table_column_before__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./library/table-column-before */ "./node_modules/@wordpress/icons/build-module/library/table-column-before.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableColumnBefore", function() { return _library_table_column_before__WEBPACK_IMPORTED_MODULE_184__["default"]; });

/* harmony import */ var _library_table_column_delete__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./library/table-column-delete */ "./node_modules/@wordpress/icons/build-module/library/table-column-delete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableColumnDelete", function() { return _library_table_column_delete__WEBPACK_IMPORTED_MODULE_185__["default"]; });

/* harmony import */ var _library_table_row_after__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./library/table-row-after */ "./node_modules/@wordpress/icons/build-module/library/table-row-after.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableRowAfter", function() { return _library_table_row_after__WEBPACK_IMPORTED_MODULE_186__["default"]; });

/* harmony import */ var _library_table_row_before__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./library/table-row-before */ "./node_modules/@wordpress/icons/build-module/library/table-row-before.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableRowBefore", function() { return _library_table_row_before__WEBPACK_IMPORTED_MODULE_187__["default"]; });

/* harmony import */ var _library_table_row_delete__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./library/table-row-delete */ "./node_modules/@wordpress/icons/build-module/library/table-row-delete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableRowDelete", function() { return _library_table_row_delete__WEBPACK_IMPORTED_MODULE_188__["default"]; });

/* harmony import */ var _library_table__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./library/table */ "./node_modules/@wordpress/icons/build-module/library/table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "table", function() { return _library_table__WEBPACK_IMPORTED_MODULE_189__["default"]; });

/* harmony import */ var _library_tag__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./library/tag */ "./node_modules/@wordpress/icons/build-module/library/tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return _library_tag__WEBPACK_IMPORTED_MODULE_190__["default"]; });

/* harmony import */ var _library_term_description__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./library/term-description */ "./node_modules/@wordpress/icons/build-module/library/term-description.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "termDescription", function() { return _library_term_description__WEBPACK_IMPORTED_MODULE_191__["default"]; });

/* harmony import */ var _library_footer__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./library/footer */ "./node_modules/@wordpress/icons/build-module/library/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return _library_footer__WEBPACK_IMPORTED_MODULE_192__["default"]; });

/* harmony import */ var _library_header__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./library/header */ "./node_modules/@wordpress/icons/build-module/library/header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "header", function() { return _library_header__WEBPACK_IMPORTED_MODULE_193__["default"]; });

/* harmony import */ var _library_sidebar__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./library/sidebar */ "./node_modules/@wordpress/icons/build-module/library/sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return _library_sidebar__WEBPACK_IMPORTED_MODULE_194__["default"]; });

/* harmony import */ var _library_text_color__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./library/text-color */ "./node_modules/@wordpress/icons/build-module/library/text-color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textColor", function() { return _library_text_color__WEBPACK_IMPORTED_MODULE_195__["default"]; });

/* harmony import */ var _library_tablet__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./library/tablet */ "./node_modules/@wordpress/icons/build-module/library/tablet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tablet", function() { return _library_tablet__WEBPACK_IMPORTED_MODULE_196__["default"]; });

/* harmony import */ var _library_title__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./library/title */ "./node_modules/@wordpress/icons/build-module/library/title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "title", function() { return _library_title__WEBPACK_IMPORTED_MODULE_197__["default"]; });

/* harmony import */ var _library_tool__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./library/tool */ "./node_modules/@wordpress/icons/build-module/library/tool.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tool", function() { return _library_tool__WEBPACK_IMPORTED_MODULE_198__["default"]; });

/* harmony import */ var _library_trash__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./library/trash */ "./node_modules/@wordpress/icons/build-module/library/trash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trash", function() { return _library_trash__WEBPACK_IMPORTED_MODULE_199__["default"]; });

/* harmony import */ var _library_typography__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./library/typography */ "./node_modules/@wordpress/icons/build-module/library/typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _library_typography__WEBPACK_IMPORTED_MODULE_200__["default"]; });

/* harmony import */ var _library_undo__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./library/undo */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return _library_undo__WEBPACK_IMPORTED_MODULE_201__["default"]; });

/* harmony import */ var _library_ungroup__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./library/ungroup */ "./node_modules/@wordpress/icons/build-module/library/ungroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ungroup", function() { return _library_ungroup__WEBPACK_IMPORTED_MODULE_202__["default"]; });

/* harmony import */ var _library_update__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./library/update */ "./node_modules/@wordpress/icons/build-module/library/update.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _library_update__WEBPACK_IMPORTED_MODULE_203__["default"]; });

/* harmony import */ var _library_upload__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./library/upload */ "./node_modules/@wordpress/icons/build-module/library/upload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return _library_upload__WEBPACK_IMPORTED_MODULE_204__["default"]; });

/* harmony import */ var _library_verse__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./library/verse */ "./node_modules/@wordpress/icons/build-module/library/verse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "verse", function() { return _library_verse__WEBPACK_IMPORTED_MODULE_205__["default"]; });

/* harmony import */ var _library_video__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./library/video */ "./node_modules/@wordpress/icons/build-module/library/video.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "video", function() { return _library_video__WEBPACK_IMPORTED_MODULE_206__["default"]; });

/* harmony import */ var _library_warning__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./library/warning */ "./node_modules/@wordpress/icons/build-module/library/warning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return _library_warning__WEBPACK_IMPORTED_MODULE_207__["default"]; });

/* harmony import */ var _library_widget__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./library/widget */ "./node_modules/@wordpress/icons/build-module/library/widget.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "widget", function() { return _library_widget__WEBPACK_IMPORTED_MODULE_208__["default"]; });

/* harmony import */ var _library_wordpress__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./library/wordpress */ "./node_modules/@wordpress/icons/build-module/library/wordpress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wordpress", function() { return _library_wordpress__WEBPACK_IMPORTED_MODULE_209__["default"]; });



















































































































































































































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/add-submenu.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/add-submenu.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const addSubmenu = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M2 12c0 3.6 2.4 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.5 0-4.5-1.5-4.5-4s2-4.5 4.5-4.5h3.5V6H8c-3.6 0-6 2.4-6 6zm19.5-1h-8v1.5h8V11zm0 5h-8v1.5h8V16zm0-10h-8v1.5h8V6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (addSubmenu);
//# sourceMappingURL=add-submenu.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/align-center.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/align-center.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignCenter);
//# sourceMappingURL=align-center.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/align-justify.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/align-justify.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignJustify = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignJustify);
//# sourceMappingURL=align-justify.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/align-left.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/align-left.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignLeft);
//# sourceMappingURL=align-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/align-right.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/align-right.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignRight);
//# sourceMappingURL=align-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/archive-title.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/archive-title.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const archiveTitle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  stroke: "#1E1E1E",
  strokeWidth: "1.5",
  d: "M4 19.25h9M4 15.25h16"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M8.994 10.103H6.08L5.417 12H4l2.846-8h1.383l2.845 8H9.657l-.663-1.897zm-.457-1.28l-.994-2.857-1.006 2.857h2z",
  fill: "#1E1E1E"
}));
/* harmony default export */ __webpack_exports__["default"] = (archiveTitle);
//# sourceMappingURL=archive-title.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/archive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/archive.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const archive = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (archive);
//# sourceMappingURL=archive.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-down.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-down.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowDown = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.2 13.2l-4 4V4h-1.5v13.3l-4.5-4.1-1 1.1 6.2 5.8 5.8-5.8-1-1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowDown);
//# sourceMappingURL=arrow-down.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-left.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowLeft);
//# sourceMappingURL=arrow-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-right.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-right.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.3 6.7l-1.1 1.1 4 4H4v1.5h13.3l-4.1 4.4 1.1 1.1 5.8-6.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowRight);
//# sourceMappingURL=arrow-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-up.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-up.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowUp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.5 3.9L6.7 9.7l1.1 1.1 4-4V20h1.4V6.7l4.5 4.1 1.1-1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowUp);
//# sourceMappingURL=arrow-up.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/aspect-ratio.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/aspect-ratio.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const aspectRatio = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.5 5.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v9zM6.5 12H8v-2h2V8.5H6.5V12zm9.5 2h-2v1.5h3.5V12H16v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (aspectRatio);
//# sourceMappingURL=aspect-ratio.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/at-symbol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/at-symbol.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const atSymbol = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (atSymbol);
//# sourceMappingURL=at-symbol.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/audio.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/audio.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const audio = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.7 4.3c-1.2 0-2.8 0-3.8 1-.6.6-.9 1.5-.9 2.6V14c-.6-.6-1.5-1-2.5-1C8.6 13 7 14.6 7 16.5S8.6 20 10.5 20c1.5 0 2.8-1 3.3-2.3.5-.8.7-1.8.7-2.5V7.9c0-.7.2-1.2.5-1.6.6-.6 1.8-.6 2.8-.6h.3V4.3h-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (audio);
//# sourceMappingURL=audio.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/backup.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/backup.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const backup = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (backup);
//# sourceMappingURL=backup.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-default.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-default.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const blockDefault = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (blockDefault);
//# sourceMappingURL=block-default.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-table.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-table.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const blockTable = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (blockTable);
//# sourceMappingURL=block-table.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/box.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/box.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const box = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M5 5.5h14a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 9.232A2 2 0 013 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5a2 2 0 01-1 1.732V18a2 2 0 01-2 2H6a2 2 0 01-2-2V9.232zm1.5.268V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V9.5h-13z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (box);
//# sourceMappingURL=box.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/brush.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/brush.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const brush = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (brush);
//# sourceMappingURL=brush.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/button.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/button.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const button = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (button);
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/buttons.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/buttons.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const buttons = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17 3H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5V6.2h-5v1.6zM17 13H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5v-1.5h-5v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (buttons);
//# sourceMappingURL=buttons.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/calendar.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/calendar.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const calendar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (calendar);
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cancelCircleFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cancelCircleFilled);
//# sourceMappingURL=cancel-circle-filled.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/capture-photo.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/capture-photo.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const capturePhoto = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 9.2c-2.2 0-3.9 1.8-3.9 4s1.8 4 3.9 4 4-1.8 4-4-1.8-4-4-4zm0 6.5c-1.4 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM20.2 8c-.1 0-.3 0-.5-.1l-2.5-.8c-.4-.1-.8-.4-1.1-.8l-1-1.5c-.4-.5-1-.9-1.7-.9h-2.9c-.6.1-1.2.4-1.6 1l-1 1.5c-.3.3-.6.6-1.1.7l-2.5.8c-.2.1-.4.1-.6.1-1 .2-1.7.9-1.7 1.9v8.3c0 1 .9 1.9 2 1.9h16c1.1 0 2-.8 2-1.9V9.9c0-1-.7-1.7-1.8-1.9zm.3 10.1c0 .2-.2.4-.5.4H4c-.3 0-.5-.2-.5-.4V9.9c0-.1.2-.3.5-.4.2 0 .5-.1.8-.2l2.5-.8c.7-.2 1.4-.6 1.8-1.3l1-1.5c.1-.1.2-.2.4-.2h2.9c.2 0 .3.1.4.2l1 1.5c.4.7 1.1 1.1 1.9 1.4l2.5.8c.3.1.6.1.8.2.3 0 .4.2.4.4v8.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (capturePhoto);
//# sourceMappingURL=capture-photo.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/capture-video.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/capture-video.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const captureVideo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm.5 12c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v10zm2.5-7v4l5 3V7l-5 3zm3.5 4.4l-2-1.2v-2.3l2-1.2v4.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (captureVideo);
//# sourceMappingURL=capture-video.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/category.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/category.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const category = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (category);
//# sourceMappingURL=category.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chart-bar.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chart-bar.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chartBar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (chartBar);
//# sourceMappingURL=chart-bar.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-down.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronDown = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-left.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-right.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-up.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-up.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronUp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronUp);
//# sourceMappingURL=chevron-up.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/classic.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/classic.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const classic = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 6H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h16c.3 0 .5.2.5.5v9zM10 10H8v2h2v-2zm-5 2h2v-2H5v2zm8-2h-2v2h2v-2zm-5 6h8v-2H8v2zm6-4h2v-2h-2v2zm3 0h2v-2h-2v2zm0 4h2v-2h-2v2zM5 16h2v-2H5v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (classic);
//# sourceMappingURL=classic.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (closeSmall);
//# sourceMappingURL=close-small.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (close);
//# sourceMappingURL=close.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cloud-upload.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cloud-upload.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cloudUpload = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cloudUpload);
//# sourceMappingURL=cloud-upload.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cloud.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cloud.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cloud = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cloud);
//# sourceMappingURL=cloud.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/code.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/code.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const code = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (code);
//# sourceMappingURL=code.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cog.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cog.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cog = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (cog);
//# sourceMappingURL=cog.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/column.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/column.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const column = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ __webpack_exports__["default"] = (column);
//# sourceMappingURL=column.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/columns.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/columns.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const columns = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4.1 1.5v10H10v-10h4.9zM5.5 17V8c0-.3.2-.5.5-.5h2.5v10H6c-.3 0-.5-.2-.5-.5zm14 0c0 .3-.2.5-.5.5h-2.6v-10H19c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ __webpack_exports__["default"] = (columns);
//# sourceMappingURL=columns.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/comment.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/comment.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const comment = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ __webpack_exports__["default"] = (comment);
//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cover.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cover.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cover = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h6.2v8.9l2.5-3.1 2.5 3.1V4.5h2.2c.4 0 .8.4.8.8v13.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cover);
//# sourceMappingURL=cover.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/create.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const create = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16 11.2h-3.2V8h-1.6v3.2H8v1.6h3.2V16h1.6v-3.2H16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (create);
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/crop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/crop.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const crop = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.5 7.8v7H18v-7c0-1-.8-1.8-1.8-1.8h-7v1.5h7c.2 0 .3.1.3.3zm-8.7 8.7c-.1 0-.2-.1-.2-.2V2H6v4H2v1.5h4v8.8c0 1 .8 1.8 1.8 1.8h8.8v4H18v-4h4v-1.5H7.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (crop);
//# sourceMappingURL=crop.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/currency-dollar.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/currency-dollar.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const currencyDollar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"
}));
/* harmony default export */ __webpack_exports__["default"] = (currencyDollar);
//# sourceMappingURL=currency-dollar.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/currency-euro.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/currency-euro.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const currencyEuro = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 3.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM4.75 12a7.25 7.25 0 1114.5 0 7.25 7.25 0 01-14.5 0zm9.195 1.944a2.75 2.75 0 01-4.066-.194h.621a.75.75 0 000-1.5H9.262a2.767 2.767 0 010-.5H11.5a.75.75 0 000-1.5H9.88a2.75 2.75 0 014.066-.194.75.75 0 001.06-1.061 4.25 4.25 0 00-6.88 1.255H7.5a.75.75 0 000 1.5h.258c-.01.166-.01.334 0 .5H7.5a.75.75 0 000 1.5h.626a4.25 4.25 0 006.88 1.255.75.75 0 00-1.06-1.06z"
}));
/* harmony default export */ __webpack_exports__["default"] = (currencyEuro);
//# sourceMappingURL=currency-euro.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/currency-pound.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/currency-pound.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const currencyPound = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm.25 4c-.787 0-1.425.638-1.425 1.425 0 .058.014.147.069.3.04.113.088.223.147.36a26.094 26.094 0 01.173.415H12.5a.75.75 0 010 1.5h-.953c.002.047.003.095.003.144 0 .617-.236 1.168-.511 1.606h3.386a.75.75 0 010 1.5H9.35a.75.75 0 01-.452-1.349l.007-.005a4.417 4.417 0 00.596-.581c.328-.39.549-.806.549-1.171 0-.05-.002-.097-.004-.144H9.5a.75.75 0 010-1.5h.088a5.875 5.875 0 01-.106-.27 2.382 2.382 0 01-.157-.805 2.925 2.925 0 015.637-1.097.75.75 0 01-1.39.563 1.426 1.426 0 00-1.322-.891zm-3.35 5.9l.45.6-.45-.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (currencyPound);
//# sourceMappingURL=currency-pound.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/custom-link.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/custom-link.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const customLink = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.5 14.5h-1V16h1c2.2 0 4-1.8 4-4s-1.8-4-4-4h-1v1.5h1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm-4 1.5v-1.5h-1C6.1 14.5 5 13.4 5 12s1.1-2.5 2.5-2.5h1V8h-1c-2.2 0-4 1.8-4 4s1.8 4 4 4h1zm-1-3.2h5v-1.5h-5v1.5zM18 4H9c-1.1 0-2 .9-2 2v.5h1.5V6c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5v-.5H7v.5c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (customLink);
//# sourceMappingURL=custom-link.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/custom-post-type.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/custom-post-type.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const customPostType = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4zm.8-4l.7.7 2-2V12h1V9.2l2 2 .7-.7-2-2H12v-1H9.2l2-2-.7-.7-2 2V4h-1v2.8l-2-2-.7.7 2 2H4v1h2.8l-2 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (customPostType);
//# sourceMappingURL=custom-post-type.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/desktop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/desktop.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const desktop = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (desktop);
//# sourceMappingURL=desktop.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/download.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/download.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const download = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (download);
//# sourceMappingURL=download.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/drag-handle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/drag-handle.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const dragHandle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "18",
  height: "18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5 4h2V2H5v2zm6-2v2h2V2h-2zm-6 8h2V8H5v2zm6 0h2V8h-2v2zm-6 6h2v-2H5v2zm6 0h2v-2h-2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (dragHandle);
//# sourceMappingURL=drag-handle.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/edit.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "./node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/external.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const external = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (external);
//# sourceMappingURL=external.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/file.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/file.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const file = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (file);
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/flip-horizontal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/flip-horizontal.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const flipHorizontal = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 6v12c0 1.1.9 2 2 2h3v-1.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3V4H6c-1.1 0-2 .9-2 2zm7.2 16h1.5V2h-1.5v20zM15 5.5h1.5V4H15v1.5zm3.5.5H20c0-1.1-.9-2-2-2v1.5c.3 0 .5.2.5.5zm0 10.5H20v-2h-1.5v2zm0-3.5H20v-2h-1.5v2zm-.5 5.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zM15 20h1.5v-1.5H15V20zm3.5-10.5H20v-2h-1.5v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (flipHorizontal);
//# sourceMappingURL=flip-horizontal.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/flip-vertical.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/flip-vertical.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const flipVertical = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M2 11.2v1.5h20v-1.5H2zM5.5 6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v3H20V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3h1.5V6zm2 14h2v-1.5h-2V20zm3.5 0h2v-1.5h-2V20zm7-1.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zm.5-2H20V15h-1.5v1.5zM5.5 18H4c0 1.1.9 2 2 2v-1.5c-.3 0-.5-.2-.5-.5zm0-3H4v1.5h1.5V15zm9 5h2v-1.5h-2V20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (flipVertical);
//# sourceMappingURL=flip-vertical.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/footer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/footer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const footer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M18 5.5h-8v8h8.5V6a.5.5 0 00-.5-.5zm-9.5 8h-3V6a.5.5 0 01.5-.5h2.5v8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (footer);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-bold.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-bold.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatBold = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatBold);
//# sourceMappingURL=format-bold.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-capitalize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-capitalize.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatCapitalize = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatCapitalize);
//# sourceMappingURL=format-capitalize.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-indent-rtl.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-indent-rtl.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatIndentRTL = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM20.0303 9.03033L17.0607 12L20.0303 14.9697L18.9697 16.0303L15.4697 12.5303L14.9393 12L15.4697 11.4697L18.9697 7.96967L20.0303 9.03033Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatIndentRTL);
//# sourceMappingURL=format-indent-rtl.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-indent.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-indent.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatIndent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatIndent);
//# sourceMappingURL=format-indent.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-italic.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-italic.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatItalic = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.5 5L10 19h1.9l2.5-14z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatItalic);
//# sourceMappingURL=format-italic.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatListBulletsRTL = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatListBulletsRTL);
//# sourceMappingURL=format-list-bullets-rtl.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatListBullets = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatListBullets);
//# sourceMappingURL=format-list-bullets.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-numbered-rtl.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-numbered-rtl.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatListNumberedRTL = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M3.8 15.8h8.9v-1.5H3.8v1.5zm0-7h8.9V7.2H3.8v1.6zm14.7-2.1V10h1V5.3l-2.2.7.3 1 .9-.3zm1.2 6.1c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5H20v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3 0-.8-.3-1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatListNumberedRTL);
//# sourceMappingURL=format-list-numbered-rtl.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-numbered.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-numbered.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatListNumbered = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatListNumbered);
//# sourceMappingURL=format-list-numbered.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-lowercase.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-lowercase.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatLowercase = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatLowercase);
//# sourceMappingURL=format-lowercase.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-ltr.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-ltr.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatLtr = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM14 14l5-4-5-4v8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatLtr);
//# sourceMappingURL=format-ltr.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-outdent-rtl.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-outdent-rtl.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatOutdentRTL = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM15.4697 14.9697L18.4393 12L15.4697 9.03033L16.5303 7.96967L20.0303 11.4697L20.5607 12L20.0303 12.5303L16.5303 16.0303L15.4697 14.9697Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatOutdentRTL);
//# sourceMappingURL=format-outdent-rtl.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-outdent.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-outdent.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatOutdent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatOutdent);
//# sourceMappingURL=format-outdent.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-rtl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-rtl.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatRtl = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM19 6l-5 4 5 4V6zM5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM19 6l-5 4 5 4V6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatRtl);
//# sourceMappingURL=format-rtl.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatStrikethrough = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatStrikethrough);
//# sourceMappingURL=format-strikethrough.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-underline.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-underline.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatUnderline = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatUnderline);
//# sourceMappingURL=format-underline.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-uppercase.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-uppercase.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatUppercase = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatUppercase);
//# sourceMappingURL=format-uppercase.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/fullscreen.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/fullscreen.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const fullscreen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4.2 9h1.5V5.8H9V4.2H4.2V9zm14 9.2H15v1.5h4.8V15h-1.5v3.2zM15 4.2v1.5h3.2V9h1.5V4.2H15zM5.8 15H4.2v4.8H9v-1.5H5.8V15z"
}));
/* harmony default export */ __webpack_exports__["default"] = (fullscreen);
//# sourceMappingURL=fullscreen.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/gallery.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/gallery.js ***!
  \***********************************************************************/
/*! exports provided: gallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gallery", function() { return gallery; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const gallery = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8h-1.5zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zM4.5 4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1V12l-2.3-1.7c-.3-.2-.6-.2-.9 0l-2.9 2.1L8 11.3c-.2-.1-.5-.1-.7 0l-2.9 1.5V4.6zm0 11.8v-1.8l3.2-1.7 2.4 1.2c.2.1.5.1.8-.1l2.8-2 2.8 2v2.5c0 .1-.1.1-.1.1H4.6c0-.1-.1-.2-.1-.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (gallery);
//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/globe.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/globe.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const globe = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z"
}));
/* harmony default export */ __webpack_exports__["default"] = (globe);
//# sourceMappingURL=globe.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/grid.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/grid.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const grid = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.8 16.5H5c-.3 0-.5-.2-.5-.5v-6.2h6.8v6.7zm0-8.3H4.5V5c0-.3.2-.5.5-.5h6.2v6.7zm8.3 7.8c0 .3-.2.5-.5.5h-6.2v-6.8h6.8V19zm0-7.8h-6.8V4.5H19c.3 0 .5.2.5.5v6.2z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (grid);
//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/group.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/group.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const group = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (group);
//# sourceMappingURL=group.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/handle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/handle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const handle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7 16.5h10V15H7v1.5zm0-9V9h10V7.5H7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (handle);
//# sourceMappingURL=handle.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/header.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/header.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const header = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (header);
//# sourceMappingURL=header.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/heading.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/heading.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const heading = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (heading);
//# sourceMappingURL=heading.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/help.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/help.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const help = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (help);
//# sourceMappingURL=help.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/home.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/home.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const home = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (home);
//# sourceMappingURL=home.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/html.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/html.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const html = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4.8 11.4H2.1V9H1v6h1.1v-2.6h2.7V15h1.1V9H4.8v2.4zm1.9-1.3h1.7V15h1.1v-4.9h1.7V9H6.7v1.1zM16.2 9l-1.5 2.7L13.3 9h-.9l-.8 6h1.1l.5-4 1.5 2.8 1.5-2.8.5 4h1.1L17 9h-.8zm3.8 5V9h-1.1v6h3.6v-1H20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (html);
//# sourceMappingURL=html.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/image.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/image.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const image = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (image);
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/inbox.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/inbox.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const inbox = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M6 5.5h12a.5.5 0 01.5.5v7H14a2 2 0 11-4 0H5.5V6a.5.5 0 01.5-.5zm-.5 9V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-3.5h-3.337a3.5 3.5 0 01-6.326 0H5.5zM4 13V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (inbox);
//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/info.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/info.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const info = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (info);
//# sourceMappingURL=info.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/insert-after.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/insert-after.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const insertAfter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 12h2v-2h2V8h-2V6H9v2H7v2h2v2zm1 4c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7zm0-12c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zM3 19h14v-2H3v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (insertAfter);
//# sourceMappingURL=insert-after.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/insert-before.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/insert-before.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const insertBefore = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11 8H9v2H7v2h2v2h2v-2h2v-2h-2V8zm-1-4c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM3 1v2h14V1H3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (insertBefore);
//# sourceMappingURL=insert-before.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/institution.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/institution.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const institute = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M18.646 9H20V8l-1-.5L12 4 5 7.5 4 8v1h14.646zm-3-1.5L12 5.677 8.354 7.5h7.292zm-7.897 9.44v-6.5h-1.5v6.5h1.5zm5-6.5v6.5h-1.5v-6.5h1.5zm5 0v6.5h-1.5v-6.5h1.5zm2.252 8.81c0 .414-.334.75-.748.75H4.752a.75.75 0 010-1.5h14.5a.75.75 0 01.749.75z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (institute);
//# sourceMappingURL=institution.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/justify-center.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/justify-center.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const justifyCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (justifyCenter);
//# sourceMappingURL=justify-center.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/justify-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/justify-left.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const justifyLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 9v6h11V9H9zM4 20h1.5V4H4v16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (justifyLeft);
//# sourceMappingURL=justify-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/justify-right.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/justify-right.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const justifyRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (justifyRight);
//# sourceMappingURL=justify-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/justify-space-between.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/justify-space-between.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const justifySpaceBetween = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (justifySpaceBetween);
//# sourceMappingURL=justify-space-between.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/keyboard-close.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/keyboard-close.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const keyboardClose = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18,0 L2,0 C0.9,0 0.01,0.9 0.01,2 L0,12 C0,13.1 0.9,14 2,14 L18,14 C19.1,14 20,13.1 20,12 L20,2 C20,0.9 19.1,0 18,0 Z M18,12 L2,12 L2,2 L18,2 L18,12 Z M9,3 L11,3 L11,5 L9,5 L9,3 Z M9,6 L11,6 L11,8 L9,8 L9,6 Z M6,3 L8,3 L8,5 L6,5 L6,3 Z M6,6 L8,6 L8,8 L6,8 L6,6 Z M3,6 L5,6 L5,8 L3,8 L3,6 Z M3,3 L5,3 L5,5 L3,5 L3,3 Z M6,9 L14,9 L14,11 L6,11 L6,9 Z M12,6 L14,6 L14,8 L12,8 L12,6 Z M12,3 L14,3 L14,5 L12,5 L12,3 Z M15,6 L17,6 L17,8 L15,8 L15,6 Z M15,3 L17,3 L17,5 L15,5 L15,3 Z M10,20 L14,16 L6,16 L10,20 Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (keyboardClose);
//# sourceMappingURL=keyboard-close.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/keyboard-return.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/keyboard-return.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const keyboardReturn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"
}));
/* harmony default export */ __webpack_exports__["default"] = (keyboardReturn);
//# sourceMappingURL=keyboard-return.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const layout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (layout);
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/lifesaver.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/lifesaver.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const lifesaver = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M17.375 15.656A6.47 6.47 0 0018.5 12a6.47 6.47 0 00-.943-3.374l-1.262.813c.448.749.705 1.625.705 2.561a4.977 4.977 0 01-.887 2.844l1.262.813zm-1.951 1.87l-.813-1.261A4.976 4.976 0 0112 17c-.958 0-1.852-.27-2.613-.736l-.812 1.261A6.47 6.47 0 0012 18.5a6.47 6.47 0 003.424-.974zm-8.8-1.87A6.47 6.47 0 015.5 12c0-1.235.344-2.39.943-3.373l1.261.812A4.977 4.977 0 007 12c0 1.056.328 2.036.887 2.843l-1.262.813zm2.581-7.803A4.977 4.977 0 0112 7c1.035 0 1.996.314 2.794.853l.812-1.262A6.47 6.47 0 0012 5.5a6.47 6.47 0 00-3.607 1.092l.812 1.261zM12 20a8 8 0 100-16 8 8 0 000 16zm0-4.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (lifesaver);
//# sourceMappingURL=lifesaver.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link-off.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link-off.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const linkOff = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (linkOff);
//# sourceMappingURL=link-off.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/list-view.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/list-view.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const listView = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.8 5.2H3v1.5h10.8V5.2zm-3.6 12v1.5H21v-1.5H10.2zm7.2-6H6.6v1.5h10.8v-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (listView);
//# sourceMappingURL=list-view.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/list.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/list.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const list = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (list);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/lock.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/lock.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const lock = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M8 5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V9H18C19.2624 9 20 9.9804 20 11V19C20 20.0196 19.2624 21 18 21H6C4.73763 21 4 20.0196 4 19V11C4 9.9804 4.73763 9 6 9H8V5ZM9.5 9H14.5V5C14.5 4.17157 13.8284 3.5 13 3.5H11C10.1716 3.5 9.5 4.17157 9.5 5V9Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (lock);
//# sourceMappingURL=lock.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/login.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/login.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const login = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11 14.5l1.1 1.1 3-3 .5-.5-.6-.6-3-3-1 1 1.7 1.7H5v1.5h7.7L11 14.5zM16.8 5h-7c-1.1 0-2 .9-2 2v1.5h1.5V7c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5v-1.5H7.8V17c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (login);
//# sourceMappingURL=login.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/loop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/loop.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const loop = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.1823 11.6392C18.1823 13.0804 17.0139 14.2487 15.5727 14.2487C14.3579 14.2487 13.335 13.4179 13.0453 12.2922L13.0377 12.2625L13.0278 12.2335L12.3985 10.377L12.3942 10.3785C11.8571 8.64997 10.246 7.39405 8.33961 7.39405C5.99509 7.39405 4.09448 9.29465 4.09448 11.6392C4.09448 13.9837 5.99509 15.8843 8.33961 15.8843C8.88499 15.8843 9.40822 15.781 9.88943 15.5923L9.29212 14.0697C8.99812 14.185 8.67729 14.2487 8.33961 14.2487C6.89838 14.2487 5.73003 13.0804 5.73003 11.6392C5.73003 10.1979 6.89838 9.02959 8.33961 9.02959C9.55444 9.02959 10.5773 9.86046 10.867 10.9862L10.8772 10.9836L11.4695 12.7311C11.9515 14.546 13.6048 15.8843 15.5727 15.8843C17.9172 15.8843 19.8178 13.9837 19.8178 11.6392C19.8178 9.29465 17.9172 7.39404 15.5727 7.39404C15.0287 7.39404 14.5066 7.4968 14.0264 7.6847L14.6223 9.20781C14.9158 9.093 15.2358 9.02959 15.5727 9.02959C17.0139 9.02959 18.1823 10.1979 18.1823 11.6392Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (loop);
//# sourceMappingURL=loop.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/map-marker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/map-marker.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const mapMarker = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (mapMarker);
//# sourceMappingURL=map-marker.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/media-and-text.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/media-and-text.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const mediaAndText = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (mediaAndText);
//# sourceMappingURL=media-and-text.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/media.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/media.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const media = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (media);
//# sourceMappingURL=media.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/megaphone.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/megaphone.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const megaphone = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (megaphone);
//# sourceMappingURL=megaphone.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/menu.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/menu.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const menu = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"
}));
/* harmony default export */ __webpack_exports__["default"] = (menu);
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/minus.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/minus.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const minus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 9h12v2H4V9z"
}));
/* harmony default export */ __webpack_exports__["default"] = (minus);
//# sourceMappingURL=minus.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/mobile.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/mobile.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const desktop = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (desktop);
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-horizontal-mobile.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-horizontal-mobile.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreHorizontalMobile = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5C6.82843 13.5 7.5 12.8284 7.5 12Z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5C18.8284 13.5 19.5 12.8284 19.5 12Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moreHorizontalMobile);
//# sourceMappingURL=more-horizontal-mobile.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-horizontal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-horizontal.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreHorizontal = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11 13h2v-2h-2v2zm-6 0h2v-2H5v2zm12-2v2h2v-2h-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moreHorizontal);
//# sourceMappingURL=more-horizontal.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-vertical.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreVertical = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moreVertical);
//# sourceMappingURL=more-vertical.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const more = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (more);
//# sourceMappingURL=more.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/move-to.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/move-to.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moveTo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19.75 9c0-1.257-.565-2.197-1.39-2.858-.797-.64-1.827-1.017-2.815-1.247-1.802-.42-3.703-.403-4.383-.396L11 4.5V6l.177-.001c.696-.006 2.416-.02 4.028.356.887.207 1.67.518 2.216.957.52.416.829.945.829 1.688 0 .592-.167.966-.407 1.23-.255.281-.656.508-1.236.674-1.19.34-2.82.346-4.607.346h-.077c-1.692 0-3.527 0-4.942.404-.732.209-1.424.545-1.935 1.108-.526.579-.796 1.33-.796 2.238 0 1.257.565 2.197 1.39 2.858.797.64 1.827 1.017 2.815 1.247 1.802.42 3.703.403 4.383.396L13 19.5h.714V22L18 18.5 13.714 15v3H13l-.177.001c-.696.006-2.416.02-4.028-.356-.887-.207-1.67-.518-2.216-.957-.52-.416-.829-.945-.829-1.688 0-.592.167-.966.407-1.23.255-.281.656-.508 1.237-.674 1.189-.34 2.819-.346 4.606-.346h.077c1.692 0 3.527 0 4.941-.404.732-.209 1.425-.545 1.936-1.108.526-.579.796-1.33.796-2.238z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moveTo);
//# sourceMappingURL=move-to.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/navigation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/navigation.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const navigation = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (navigation);
//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/next.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/next.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const next = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (next);
//# sourceMappingURL=next.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/overlay-text.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/overlay-text.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const overlayText = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12-9.8c.4 0 .8-.3.9-.7l1.1-3h3.6l.5 1.7h1.9L13 9h-2.2l-3.4 9.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12H20V6c0-1.1-.9-2-2-2zm-6 7l1.4 3.9h-2.7L12 11z"
}));
/* harmony default export */ __webpack_exports__["default"] = (overlayText);
//# sourceMappingURL=overlay-text.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/page-break.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/page-break.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pageBreak = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7.8 6c0-.7.6-1.2 1.2-1.2h6c.7 0 1.2.6 1.2 1.2v3h1.5V6c0-1.5-1.2-2.8-2.8-2.8H9C7.5 3.2 6.2 4.5 6.2 6v3h1.5V6zm8.4 11c0 .7-.6 1.2-1.2 1.2H9c-.7 0-1.2-.6-1.2-1.2v-3H6.2v3c0 1.5 1.2 2.8 2.8 2.8h6c1.5 0 2.8-1.2 2.8-2.8v-3h-1.5v3zM4 11v1h16v-1H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pageBreak);
//# sourceMappingURL=page-break.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/page.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/page.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const page = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (page);
//# sourceMappingURL=page.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pages.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pages.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pages = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7 13.8h6v-1.5H7v1.5zM18 16V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zM5.5 16V4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5zM7 10.5h8V9H7v1.5zm0-3.3h8V5.8H7v1.4zM20.2 6v13c0 .7-.6 1.2-1.2 1.2H8v1.5h11c1.5 0 2.7-1.2 2.7-2.8V6h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pages);
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/paragraph.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/paragraph.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const paragraph = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (paragraph);
//# sourceMappingURL=paragraph.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/payment.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/payment.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const payment = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (payment);
//# sourceMappingURL=payment.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pencil.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pencil = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pencil);
//# sourceMappingURL=pencil.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/people.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/people.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const people = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.5 9a2 2 0 11-4 0 2 2 0 014 0zm-4.25 8v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM8.5 11a2 2 0 100-4 2 2 0 000 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (people);
//# sourceMappingURL=people.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/percent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/percent.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const percent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M6.5 8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 5a3 3 0 100 6 3 3 0 000-6zm6.5 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6zM5.47 17.41a.75.75 0 001.06 1.06L18.47 6.53a.75.75 0 10-1.06-1.06L5.47 17.41z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (percent);
//# sourceMappingURL=percent.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pin.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pin = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pin);
//# sourceMappingURL=pin.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plugins.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plugins.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plugins = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plugins);
//# sourceMappingURL=plugins.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plusCircleFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plusCircleFilled);
//# sourceMappingURL=plus-circle-filled.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus-circle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus-circle.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plusCircle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plusCircle);
//# sourceMappingURL=plus-circle.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plus);
//# sourceMappingURL=plus.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/position-center.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/position-center.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const positionCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (positionCenter);
//# sourceMappingURL=position-center.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/position-left.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/position-left.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const positionLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 9v6h14V9H4zm8-4.8H4v1.5h8V4.2zM4 19.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (positionLeft);
//# sourceMappingURL=position-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/position-right.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/position-right.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const positionRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6 15h14V9H6v6zm6-10.8v1.5h8V4.2h-8zm0 15.6h8v-1.5h-8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (positionRight);
//# sourceMappingURL=position-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-categories.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-categories.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postCategories = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 4H4v1.5h16V4zm-2 9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3zM4 9.5h9V8H4v1.5zM9 13H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (postCategories);
//# sourceMappingURL=post-categories.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-comments-count.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-comments-count.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postCommentsCount = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 8H4v1.5h9V8zM4 4v1.5h16V4H4zm9 8H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1zm-2.2 6.6H7l1.6-2.2c.3-.4.5-.7.6-.9.1-.2.2-.4.2-.5 0-.2-.1-.3-.1-.4-.1-.1-.2-.1-.4-.1s-.4 0-.6.1c-.3.1-.5.3-.7.4l-.2.2-.2-1.2.1-.1c.3-.2.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.9.2.2.1.4.3.6.5.1.2.2.5.2.7 0 .3-.1.6-.2.9-.1.3-.4.7-.7 1.1l-.5.6h1.6v1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postCommentsCount);
//# sourceMappingURL=post-comments-count.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-comments-form.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-comments-form.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postCommentsForm = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 8H4v1.5h9V8zM4 4v1.5h16V4H4zm9 8H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1zm-.5 6.6H6.7l-1.2 1.2v-6.3h7v5.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postCommentsForm);
//# sourceMappingURL=post-comments-form.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-comments.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-comments.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postComments = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14 10.1V4c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1zm-1.5-.5H6.7l-1.2 1.2V4.5h7v5.1zM19 12h-8c-.6 0-1 .4-1 1v6.1c0 .6.4 1 1 1h5.7l1.8 1.8c.1.2.4.3.6.3.1 0 .2 0 .3-.1.4-.1.6-.5.6-.8V13c0-.6-.4-1-1-1zm-.5 7.8l-1.2-1.2h-5.8v-5.1h7v6.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postComments);
//# sourceMappingURL=post-comments.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-content.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-content.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postContent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 20h16v-1.5H4V20zm0-4.8h16v-1.5H4v1.5zm0-6.4v1.5h16V8.8H4zM16 4H4v1.5h12V4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postContent);
//# sourceMappingURL=post-content.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-date.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-date.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postDate = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.696 13.972c.356-.546.599-.958.728-1.235a1.79 1.79 0 00.203-.783c0-.264-.077-.47-.23-.618-.148-.153-.354-.23-.618-.23-.295 0-.569.07-.82.212a3.413 3.413 0 00-.738.571l-.147-1.188c.289-.234.59-.41.903-.526.313-.117.66-.175 1.041-.175.375 0 .695.08.959.24.264.153.46.362.59.626.135.265.203.556.203.876 0 .362-.08.734-.24 1.115-.154.381-.427.87-.82 1.466l-.756 1.152H14v1.106h-4l1.696-2.609z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19.5 7h-15v12a.5.5 0 00.5.5h14a.5.5 0 00.5-.5V7zM3 7V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postDate);
//# sourceMappingURL=post-date.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-excerpt.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-excerpt.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postExcerpt = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.75 9.333c0 .521-.102.977-.327 1.354-.23.386-.555.628-.893.774-.545.234-1.183.227-1.544.222l-.12-.001v-1.5h.123c.414.001.715.002.948-.099a.395.395 0 00.199-.166c.05-.083.114-.253.114-.584V7.2H8.8V4h3.95v5.333zM7.95 9.333c0 .521-.102.977-.327 1.354-.23.386-.555.628-.893.774-.545.234-1.183.227-1.544.222l-.12-.001v-1.5h.123c.414.001.715.002.948-.099a.394.394 0 00.198-.166c.05-.083.115-.253.115-.584V7.2H4V4h3.95v5.333zM13 20H4v-1.5h9V20zM20 16H4v-1.5h16V16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postExcerpt);
//# sourceMappingURL=post-excerpt.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-featured-image.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-featured-image.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postFeaturedImage = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 3H5c-.6 0-1 .4-1 1v7c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1zM5.5 10.5v-.4l1.8-1.3 1.3.8c.3.2.7.2.9-.1L11 8.1l2.4 2.4H5.5zm13 0h-2.9l-4-4c-.3-.3-.8-.3-1.1 0L8.9 8l-1.2-.8c-.3-.2-.6-.2-.9 0l-1.3 1V4.5h13v6zM4 20h9v-1.5H4V20zm0-4h16v-1.5H4V16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postFeaturedImage);
//# sourceMappingURL=post-featured-image.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-list.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-list.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postList = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postList);
//# sourceMappingURL=post-list.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post-title.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-title.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postTitle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 14.5h16V16H4zM4 18.5h9V20H4zM4 4h3c2 0 3 .86 3 2.583 0 .891-.253 1.554-.76 1.988-.505.435-1.24.652-2.204.652H5.542V12H4V4zm2.855 4c.53 0 .924-.114 1.18-.343.266-.228.398-.579.398-1.051 0-.473-.132-.82-.397-1.04-.265-.229-.67-.343-1.217-.343H5.542V8h1.313z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postTitle);
//# sourceMappingURL=post-title.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/preformatted.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/preformatted.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const preformatted = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 16.5h6V15H7v1.5zm4-4h6V11h-6v1.5zM9 11H7v1.5h2V11zm6 5.5h2V15h-2v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (preformatted);
//# sourceMappingURL=preformatted.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/previous.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/previous.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const previous = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (previous);
//# sourceMappingURL=previous.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pull-left.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pull-left.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pullLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pullLeft);
//# sourceMappingURL=pull-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pull-right.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pull-right.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pullRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pullRight);
//# sourceMappingURL=pull-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pullquote.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pullquote.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pullquote = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pullquote);
//# sourceMappingURL=pullquote.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/query-pagination-next.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/query-pagination-next.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryPaginationNext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
  x: "6",
  y: "10.5",
  width: "3",
  height: "3",
  rx: "1.5",
  fill: "#000"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
  x: "11",
  y: "10.5",
  width: "3",
  height: "3",
  rx: "1.5",
  fill: "#000"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.5 9.5L19 12l-2.5 2.5",
  stroke: "#1E1E1E",
  strokeWidth: "1.5"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryPaginationNext);
//# sourceMappingURL=query-pagination-next.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/query-pagination-numbers.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/query-pagination-numbers.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryPaginationNumbers = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
  x: "4",
  y: "10.5",
  width: "6",
  height: "3",
  rx: "1.5",
  fill: "#000"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.5 14v-4l-1.5.5",
  stroke: "#1E1E1E"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19.266 9.805c-.473-.611-1.22-.51-1.702-.367a3.854 3.854 0 00-.718.307l.13 1.082c.192-.17.47-.422.782-.515.34-.1.578.025.668.141.21.27-.034.835-.16 1.055-.49.85-.93 1.594-1.45 2.492H19.5v-1h-.914c.277-.574.814-1.443.914-2.106.052-.343.02-.762-.234-1.09z",
  fill: "#1E1E1E"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryPaginationNumbers);
//# sourceMappingURL=query-pagination-numbers.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/query-pagination-previous.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/query-pagination-previous.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryPaginationPrevious = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
  x: "18",
  y: "13.5",
  width: "3",
  height: "3",
  rx: "1.5",
  transform: "rotate(-180 18 13.5)",
  fill: "#000"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
  x: "13",
  y: "13.5",
  width: "3",
  height: "3",
  rx: "1.5",
  transform: "rotate(-180 13 13.5)",
  fill: "#000"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7.5 14.5L5 12l2.5-2.5",
  stroke: "#1E1E1E",
  strokeWidth: "1.5"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryPaginationPrevious);
//# sourceMappingURL=query-pagination-previous.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/query-pagination.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/query-pagination.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryPagination = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
  x: "4",
  y: "10.5",
  width: "6",
  height: "3",
  rx: "1.5",
  fill: "#000"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
  x: "12",
  y: "10.5",
  width: "3",
  height: "3",
  rx: "1.5",
  fill: "#000"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
  x: "17",
  y: "10.5",
  width: "3",
  height: "3",
  rx: "1.5",
  fill: "#000"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryPagination);
//# sourceMappingURL=query-pagination.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/quote.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/quote.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const quote = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (quote);
//# sourceMappingURL=quote.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/receipt.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/receipt.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const receipt = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M16.83 6.342l.602.3.625-.25.443-.176v12.569l-.443-.178-.625-.25-.603.301-1.444.723-2.41-.804-.475-.158-.474.158-2.41.803-1.445-.722-.603-.3-.625.25-.443.177V6.215l.443.178.625.25.603-.301 1.444-.722 2.41.803.475.158.474-.158 2.41-.803 1.445.722zM20 4l-1.5.6-1 .4-2-1-3 1-3-1-2 1-1-.4L5 4v17l1.5-.6 1-.4 2 1 3-1 3 1 2-1 1 .4 1.5.6V4zm-3.5 6.25v-1.5h-8v1.5h8zm0 3v-1.5h-8v1.5h8zm-8 3v-1.5h8v1.5h-8z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (receipt);
//# sourceMappingURL=receipt.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/redo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/redo.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const redo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (redo);
//# sourceMappingURL=redo.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/replace.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/replace.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const replace = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16 10h4c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1zm-8 4H4c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm10-2.6L14.5 15l1.1 1.1 1.7-1.7c-.1 1.1-.3 2.3-.9 2.9-.3.3-.7.5-1.3.5h-4.5v1.5H15c.9 0 1.7-.3 2.3-.9 1-1 1.3-2.7 1.4-4l1.8 1.8 1.1-1.1-3.6-3.7zM6.8 9.7c.1-1.1.3-2.3.9-2.9.4-.4.8-.6 1.3-.6h4.5V4.8H9c-.9 0-1.7.3-2.3.9-1 1-1.3 2.7-1.4 4L3.5 8l-1 1L6 12.6 9.5 9l-1-1-1.7 1.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (replace);
//# sourceMappingURL=replace.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const resizeCornerNE = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (resizeCornerNE);
//# sourceMappingURL=resize-corner-n-e.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/reusable-block.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/reusable-block.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const reusableBlock = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (reusableBlock);
//# sourceMappingURL=reusable-block.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/rotate-left.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/rotate-left.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const rotateLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (rotateLeft);
//# sourceMappingURL=rotate-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/rotate-right.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/rotate-right.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const rotateRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.1 4.8l-3-2.5V4c-4.4 0-8 3.6-8 8 0 3.7 2.5 6.9 6 7.7.3.1.6.1 1 .2l.2-1.5c-.4 0-.7-.1-1.1-.2l-.1.2v-.2c-2.6-.8-4.5-3.3-4.5-6.2 0-3.6 2.9-6.5 6.5-6.5v1.8l3-2.5zM20 11c-.2-1.4-.7-2.7-1.6-3.8l-1.2.8c.7.9 1.1 2 1.3 3.1L20 11zm-1.5 1.8c-.1.5-.2 1.1-.4 1.6s-.5 1-.8 1.5l1.2.9c.4-.5.8-1.1 1-1.8s.5-1.3.5-2l-1.5-.2zm-5.6 5.6l.2 1.5c1.4-.2 2.7-.7 3.8-1.6l-.9-1.1c-.9.7-2 1.1-3.1 1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (rotateRight);
//# sourceMappingURL=rotate-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/rss.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/rss.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const rss = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5 10.2h-.8v1.5H5c1.9 0 3.8.8 5.1 2.1 1.4 1.4 2.1 3.2 2.1 5.1v.8h1.5V19c0-2.3-.9-4.5-2.6-6.2-1.6-1.6-3.8-2.6-6.1-2.6zm10.4-1.6C12.6 5.8 8.9 4.2 5 4.2h-.8v1.5H5c3.5 0 6.9 1.4 9.4 3.9s3.9 5.8 3.9 9.4v.8h1.5V19c0-3.9-1.6-7.6-4.4-10.4zM4 20h3v-3H4v3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (rss);
//# sourceMappingURL=rss.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/search.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/search.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const search = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (search);
//# sourceMappingURL=search.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/separator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/separator.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const separator = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.2 7v4H3.8V7H2.2v9h1.6v-3.5h16.4V16h1.6V7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (separator);
//# sourceMappingURL=separator.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/settings.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/settings.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const settings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17 4h-2v4.5h2V7h3V5.5h-3V4zM4 5.5h9V7H4V5.5zm16 5.75h-9v1.5h9v-1.5zm-16 0h3V10h2v4.25H7v-1.5H4v-1.5zM9 17H4v1.5h5V17zm4 0h7v1.5h-7V20h-2v-4.25h2V17z"
}));
/* harmony default export */ __webpack_exports__["default"] = (settings);
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/share.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/share.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const share = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 11.8l6.1-4.5c.1.4.4.7.9.7h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v.4l-6.4 4.8c-.2-.1-.4-.2-.6-.2H6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.2 0 .4-.1.6-.2l6.4 4.8v.4c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.5 0-.8.3-.9.7L9 12.2v-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (share);
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/shipping.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/shipping.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const shipping = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z"
}));
/* harmony default export */ __webpack_exports__["default"] = (shipping);
//# sourceMappingURL=shipping.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/shortcode.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/shortcode.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const shortcode = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16 4.2v1.5h2.5v12.5H16v1.5h4V4.2h-4zM4.2 19.8h4v-1.5H5.8V5.8h2.5V4.2h-4l-.1 15.6zm5.1-3.1l1.4.6 4-10-1.4-.6-4 10z"
}));
/* harmony default export */ __webpack_exports__["default"] = (shortcode);
//# sourceMappingURL=shortcode.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/sidebar.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/sidebar.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const sidebar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (sidebar);
//# sourceMappingURL=sidebar.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/site-logo.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/site-logo.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const siteLogo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 1.5c4.1 0 7.5 3.4 7.5 7.5v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1L9 11.3c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-1-.2-1.5 0-4.2 3.4-7.6 7.5-7.6zm0 15c-3.1 0-5.7-1.9-6.9-4.5l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.8-7.4 5.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (siteLogo);
//# sourceMappingURL=site-logo.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/stack.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/stack.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const stack = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stack);
//# sourceMappingURL=stack.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-empty.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-empty.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starEmpty = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (starEmpty);
//# sourceMappingURL=star-empty.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-filled.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-filled.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["default"] = (starFilled);
//# sourceMappingURL=star-filled.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-half.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-half.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starHalf = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"
}));
/* harmony default export */ __webpack_exports__["default"] = (starHalf);
//# sourceMappingURL=star-half.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/store.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/store.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const store = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M19.75 11H21V8.667L19.875 4H4.125L3 8.667V11h1.25v8.75h15.5V11zm-1.5 0H5.75v7.25H10V13h4v5.25h4.25V11zm-5.5-5.5h2.067l.486 3.24.028.76H12.75v-4zm-3.567 0h2.067v4H8.669l.028-.76.486-3.24zm7.615 3.1l-.464-3.1h2.36l.806 3.345V9.5h-2.668l-.034-.9zM7.666 5.5h-2.36L4.5 8.845V9.5h2.668l.034-.9.464-3.1z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (store);
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/stretch-full-width.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/stretch-full-width.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const stretchFullWidth = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5 4v11h14V4H5zm3 15.8h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stretchFullWidth);
//# sourceMappingURL=stretch-full-width.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/stretch-wide.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/stretch-wide.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const stretchWide = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stretchWide);
//# sourceMappingURL=stretch-wide.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/subscript.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/subscript.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const subscript = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (subscript);
//# sourceMappingURL=subscript.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/superscript.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/superscript.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const superscript = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (superscript);
//# sourceMappingURL=superscript.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/swatch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/swatch.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const swatch = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5 17.7c.4.5.8.9 1.2 1.2l1.1-1.4c-.4-.3-.7-.6-1-1L5 17.7zM5 6.3l1.4 1.1c.3-.4.6-.7 1-1L6.3 5c-.5.4-.9.8-1.3 1.3zm.1 7.8l-1.7.5c.2.6.4 1.1.7 1.6l1.5-.8c-.2-.4-.4-.8-.5-1.3zM4.8 12v-.7L3 11.1v1.8l1.7-.2c.1-.2.1-.5.1-.7zm3 7.9c.5.3 1.1.5 1.6.7l.5-1.7c-.5-.1-.9-.3-1.3-.5l-.8 1.5zM19 6.3c-.4-.5-.8-.9-1.2-1.2l-1.1 1.4c.4.3.7.6 1 1L19 6.3zm-.1 3.6l1.7-.5c-.2-.6-.4-1.1-.7-1.6l-1.5.8c.2.4.4.8.5 1.3zM5.6 8.6l-1.5-.8c-.3.5-.5 1-.7 1.6l1.7.5c.1-.5.3-.9.5-1.3zm2.2-4.5l.8 1.5c.4-.2.8-.4 1.3-.5l-.5-1.7c-.6.2-1.1.4-1.6.7zm8.8 13.5l1.1 1.4c.5-.4.9-.8 1.2-1.2l-1.4-1.1c-.2.3-.5.6-.9.9zm1.8-2.2l1.5.8c.3-.5.5-1.1.7-1.6l-1.7-.5c-.1.5-.3.9-.5 1.3zm2.6-4.3l-1.7.2v1.4l1.7.2V12v-.9zM11.1 3l.2 1.7h1.4l.2-1.7h-1.8zm3 2.1c.5.1.9.3 1.3.5l.8-1.5c-.5-.3-1.1-.5-1.6-.7l-.5 1.7zM12 19.2h-.7l-.2 1.8h1.8l-.2-1.7c-.2-.1-.5-.1-.7-.1zm2.1-.3l.5 1.7c.6-.2 1.1-.4 1.6-.7l-.8-1.5c-.4.2-.8.4-1.3.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (swatch);
//# sourceMappingURL=swatch.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/table-column-after.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/table-column-after.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableColumnAfter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableColumnAfter);
//# sourceMappingURL=table-column-after.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/table-column-before.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/table-column-before.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableColumnBefore = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableColumnBefore);
//# sourceMappingURL=table-column-before.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/table-column-delete.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/table-column-delete.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableColumnDelete = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableColumnDelete);
//# sourceMappingURL=table-column-delete.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/table-row-after.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/table-row-after.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableRowAfter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableRowAfter);
//# sourceMappingURL=table-row-after.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/table-row-before.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/table-row-before.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableRowBefore = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableRowBefore);
//# sourceMappingURL=table-row-before.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/table-row-delete.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/table-row-delete.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableRowDelete = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableRowDelete);
//# sourceMappingURL=table-row-delete.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/table.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/table.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const table = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 6v11.5h16V6H4zm1.5 1.5h6V11h-6V7.5zm0 8.5v-3.5h6V16h-6zm13 0H13v-3.5h5.5V16zM13 11V7.5h5.5V11H13z"
}));
/* harmony default export */ __webpack_exports__["default"] = (table);
//# sourceMappingURL=table.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/tablet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/tablet.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tablet = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tablet);
//# sourceMappingURL=tablet.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/tag.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tag = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.1 11.2l-6.7-6.7c-.1-.1-.3-.2-.5-.2H5c-.4-.1-.8.3-.8.7v7.8c0 .2.1.4.2.5l6.7 6.7c.2.2.5.4.7.5s.6.2.9.2c.3 0 .6-.1.9-.2.3-.1.5-.3.8-.5l5.6-5.6c.4-.4.7-1 .7-1.6.1-.6-.2-1.2-.6-1.6zM19 13.4L13.4 19c-.1.1-.2.1-.3.2-.2.1-.4.1-.6 0-.1 0-.2-.1-.3-.2l-6.5-6.5V5.8h6.8l6.5 6.5c.2.2.2.4.2.6 0 .1 0 .3-.2.5zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tag);
//# sourceMappingURL=tag.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/term-description.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/term-description.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tag = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  stroke: "#1E1E1E",
  strokeWidth: "1.5",
  d: "M9 19.25h6M4 19.25h4M12 15.25h8M4 15.25h7"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M8.994 10.103H6.08L5.417 12H4l2.846-8h1.383l2.845 8H9.657l-.663-1.897zm-.457-1.28l-.994-2.857-1.006 2.857h2z",
  fill: "#1E1E1E"
}));
/* harmony default export */ __webpack_exports__["default"] = (tag);
//# sourceMappingURL=term-description.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/text-color.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/text-color.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const textColor = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (textColor);
//# sourceMappingURL=text-color.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/title.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/title.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const title = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M5 4v3h5.5v12h3V7H19V4H5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (title);
//# sourceMappingURL=title.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/tool.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/tool.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tool = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.103 7.128l2.26-2.26a4 4 0 00-5.207 4.804L5.828 15a2 2 0 102.828 2.828l5.329-5.328a4 4 0 004.804-5.208l-2.261 2.26-1.912-.512-.513-1.912zm-7.214 9.64a.5.5 0 11.707-.707.5.5 0 01-.707.707z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tool);
//# sourceMappingURL=tool.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/trash.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/trash.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const trash = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (trash);
//# sourceMappingURL=trash.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/typography.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/typography.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const typography = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (typography);
//# sourceMappingURL=typography.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/undo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/undo.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const undo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (undo);
//# sourceMappingURL=undo.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/ungroup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/ungroup.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ungroup = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 4h-7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7zm-5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h1V9H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-1h-1.5v1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (ungroup);
//# sourceMappingURL=ungroup.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/update.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/update.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const update = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"
}));
/* harmony default export */ __webpack_exports__["default"] = (update);
//# sourceMappingURL=update.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/upload.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/upload.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const upload = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (upload);
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/verse.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/verse.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const verse = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.8 2l-.9.3c-.1 0-3.6 1-5.2 2.1C10 5.5 9.3 6.5 8.9 7.1c-.6.9-1.7 4.7-1.7 6.3l-.9 2.3c-.2.4 0 .8.4 1 .1 0 .2.1.3.1.3 0 .6-.2.7-.5l.6-1.5c.3 0 .7-.1 1.2-.2.7-.1 1.4-.3 2.2-.5.8-.2 1.6-.5 2.4-.8.7-.3 1.4-.7 1.9-1.2s.8-1.2 1-1.9c.2-.7.3-1.6.4-2.4.1-.8.1-1.7.2-2.5 0-.8.1-1.5.2-2.1V2zm-1.9 5.6c-.1.8-.2 1.5-.3 2.1-.2.6-.4 1-.6 1.3-.3.3-.8.6-1.4.9-.7.3-1.4.5-2.2.8-.6.2-1.3.3-1.8.4L15 7.5c.3-.3.6-.7 1-1.1 0 .4 0 .8-.1 1.2zM6 20h8v-1.5H6V20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (verse);
//# sourceMappingURL=verse.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/video.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/video.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const video = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (video);
//# sourceMappingURL=video.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/warning.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/warning.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const warning = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"
}));
/* harmony default export */ __webpack_exports__["default"] = (warning);
//# sourceMappingURL=warning.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/widget.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/widget.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const widget = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7 11h2v2H7v-2zm14-5v14l-2 2H5l-2-2V6l2-2h1V2h2v2h8V2h2v2h1l2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (widget);
//# sourceMappingURL=widget.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/wordpress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/wordpress.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const wordpress = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (wordpress);
//# sourceMappingURL=wordpress.js.map

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/EditorPopover.js":
/*!*****************************************!*\
  !*** ./src/components/EditorPopover.js ***!
  \*****************************************/
/*! exports provided: EditorPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPopover", function() { return EditorPopover; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldControl */ "./src/components/FieldControl.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






function EditorPopover({
  title,
  fields,
  editProps,
  isSelected
}) {
  const [popoverVisible, setPopoverVisible] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const hidePopover = () => {
    setPopoverVisible(() => false);
  };

  const showPopover = () => {
    setPopoverVisible(() => true);
  };

  const isSelectedClass = isSelected ? ' is-selected' : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "fbl_edit-btn-overlay" + isSelectedClass
  }, Object.entries(fields).filter(([fieldName, field]) => {
    return field.location === 'inspector';
  }).map(([fieldName, field]) => {
    const props = {
      editProps,
      fieldName,
      field
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_FieldControl__WEBPACK_IMPORTED_MODULE_2__["FieldControl"], props);
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isPrimary: true,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["edit"],
    onClick: showPopover
  }), popoverVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: 'Block: ' + title,
    onRequestClose: hidePopover,
    style: {
      width: 600
    },
    shouldCloseOnClickOutside: false
  }, Object.entries(fields).filter(([fieldName, field]) => {
    return field.location !== 'inspector';
  }).map(([fieldName, field]) => {
    const props = {
      editProps,
      fieldName,
      field
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_FieldControl__WEBPACK_IMPORTED_MODULE_2__["FieldControl"], props);
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      textAlign: 'right',
      marginTop: '2rem'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isPrimary: true,
    onClick: hidePopover
  }, "Okay"))));
}

/***/ }),

/***/ "./src/components/FieldControl.js":
/*!****************************************!*\
  !*** ./src/components/FieldControl.js ***!
  \****************************************/
/*! exports provided: FieldControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldControl", function() { return FieldControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-controls */ "./src/components/input-controls/index.js");
/* harmony import */ var _WidthWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WidthWrapper */ "./src/components/WidthWrapper.js");
/* harmony import */ var _RepeaterFieldControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RepeaterFieldControl */ "./src/components/RepeaterFieldControl.js");






/**
 * Create different Components to make all fields editable.
 * Basically checks the input value of a field and decides what component is needed
 * and which attributes should be set (e. g. for images it's usually a object containing url, alt etc.)
 *
 * @param {Object} props
 * @param {Object} props.editProps - All props passed by edit function of block
 * @param {string} props.fieldName
 * @param {Object} props.field
 * @return
 */

function FieldControl({
  editProps,
  fieldName,
  field
}) {
  const {
    attributes,
    setAttributes
  } = editProps;

  const setFieldAttributes = val => {
    setAttributes({
      [fieldName]: val
    });
  };

  const removeFieldAttributes = () => {
    setFieldAttributes(undefined);
  };

  const createFieldControl = () => {
    const InputControl = _input_controls__WEBPACK_IMPORTED_MODULE_3__["default"][field.input];

    const createInputControlComponent = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputControl, {
      setFieldAttributes: setFieldAttributes,
      removeFieldAttributes: removeFieldAttributes,
      field: field,
      label: field.label,
      value: attributes[fieldName]
    });

    if (InputControl === undefined) {
      if (field.input) {
        /* this might look strange but the error should only log when there is a input defined at all */
        console.error(field.input + ' Input does not exist inside field ' + fieldName);
      }

      return null;
    }

    const width = field.width || 1.0;

    if (field.location === 'inspector') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, createInputControlComponent()));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_WidthWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      width: width
    }, createInputControlComponent());
  };

  if (field.input === 'repeater') {
    const props = {
      field,
      setAttributes,
      fieldName,
      attributes,
      editProps
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_RepeaterFieldControl__WEBPACK_IMPORTED_MODULE_5__["RepeaterFieldControl"], props);
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, createFieldControl());
  }
}

/***/ }),

/***/ "./src/components/RepeaterFieldControl.js":
/*!************************************************!*\
  !*** ./src/components/RepeaterFieldControl.js ***!
  \************************************************/
/*! exports provided: RepeaterFieldControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeaterFieldControl", function() { return RepeaterFieldControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SubFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubFieldControl */ "./src/components/SubFieldControl.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");





function RepeaterFieldControl({
  field,
  setAttributes,
  fieldName,
  attributes,
  editProps
}) {
  const addNew = () => {
    const newItem = {};
    Object.entries(field.query).forEach(([key, value]) => {
      newItem[key] = value.default;
    }); // this id is not perfect but should be good enough for now

    newItem.fastBlockId = new Date().valueOf();
    console.log(newItem);
    setAttributes({
      [fieldName]: [...attributes[fieldName], newItem]
    });
  };

  const removeItem = index => {
    const attr = [...attributes[fieldName]];
    attr.splice(index, 1);
    setAttributes({
      [fieldName]: attr
    });
  };

  const isLast = index => index === attributes[fieldName].length - 1;

  const isFirst = index => index === 0;

  const moveUp = index => {
    if (isFirst(index)) return;
    const attr = [...attributes[fieldName]];
    const el = attr[index];
    attr[index] = attr[index - 1];
    attr[index - 1] = el;
    setAttributes({
      [fieldName]: attr
    });
  };

  const moveDown = index => {
    if (isLast(index)) return;
    const attr = [...attributes[fieldName]];
    const el = attr[index];
    attr[index] = attr[index + 1];
    attr[index + 1] = el;
    setAttributes({
      [fieldName]: attr
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "fbl_repeater-inputs"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: field.label
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, attributes[fieldName].map((attribute, index) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      key: attribute.fastBlockId ? `${fieldName}_${attribute.fastBlockId}` : `${fieldName}_${index}`,
      title: field.single ? `${field.single} ${index + 1}` : `Repeater ${Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Item')} ${index + 1}`,
      initialOpen: false,
      buttonProps: {
        style: {
          padding: '16px'
        }
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fbl_repeater-btns"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => {
        moveUp(index);
      },
      disabled: isFirst(index),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["arrowUp"]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => {
        moveDown(index);
      },
      disabled: isLast(index),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["arrowDown"]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => {
        removeItem(index);
      },
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["trash"]
    })), Object.entries(attribute).map(([subFieldName]) => {
      // first check if attribute was defined inside fields
      if (field.query[subFieldName]) {
        const props = {
          editProps,
          fieldName,
          field,
          subFieldName,
          subField: field.query[subFieldName],
          indexKey: index
        };
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_SubFieldControl__WEBPACK_IMPORTED_MODULE_3__["SubFieldControl"], props);
      }
    }));
  })), (!field.limit || field.limit > attributes[fieldName].length) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: addNew,
    style: {
      width: '100%',
      justifyContent: 'center'
    },
    isSecondary: true
  }, "+"));
}

/***/ }),

/***/ "./src/components/SubFieldControl.js":
/*!*******************************************!*\
  !*** ./src/components/SubFieldControl.js ***!
  \*******************************************/
/*! exports provided: SubFieldControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFieldControl", function() { return SubFieldControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-controls */ "./src/components/input-controls/index.js");



/**
 * Create different Components to make all subFields editable.
 * Very similar to switchComponents function
 *
 * @param {Object} props - All props passed by edit function of block
 * @param props.editProps
 * @param props.fieldName
 * @param props.field
 * @param props.subFieldName
 * @param props.subField
 * @param props.key
 * @return
 */

function SubFieldControl({
  editProps,
  fieldName,
  field,
  subFieldName,
  subField,
  indexKey
}) {
  const {
    attributes,
    setAttributes
  } = editProps;

  const setSubFieldAttributes = val => {
    const before = attributes[fieldName].slice(0, indexKey);
    const after = attributes[fieldName].slice(indexKey + 1);
    setAttributes({
      [fieldName]: [...before, { ...attributes[fieldName][indexKey],
        [subFieldName]: val
      }, ...after]
    });
  };

  const removeSubFieldAttributes = () => {
    setSubFieldAttributes(undefined);
  };

  const InputControl = _input_controls__WEBPACK_IMPORTED_MODULE_2__["default"][subField.input];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputControl, {
    setFieldAttributes: setSubFieldAttributes,
    removeFieldAttributes: removeSubFieldAttributes,
    field: subField,
    label: subField.label,
    value: attributes[fieldName][indexKey][subFieldName]
  });
}

/***/ }),

/***/ "./src/components/WidthWrapper.js":
/*!****************************************!*\
  !*** ./src/components/WidthWrapper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const WidthWrapper = ({
  children,
  width
}) => {
  const widthValue = parseFloat(width) * 100;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      width: `${widthValue}%`
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (WidthWrapper);

/***/ }),

/***/ "./src/components/input-controls/CheckboxInput.js":
/*!********************************************************!*\
  !*** ./src/components/input-controls/CheckboxInput.js ***!
  \********************************************************/
/*! exports provided: CheckboxInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxInput", function() { return CheckboxInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function CheckboxInput({
  value,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["CheckboxControl"], {
    label: label,
    onChange: setFieldAttributes,
    checked: value
  });
}

/***/ }),

/***/ "./src/components/input-controls/ClassicEditorInput.js":
/*!*************************************************************!*\
  !*** ./src/components/input-controls/ClassicEditorInput.js ***!
  \*************************************************************/
/*! exports provided: ClassicEditorInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicEditorInput", function() { return ClassicEditorInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_tinymce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/tinymce */ "@wordpress/tinymce");
/* harmony import */ var _wordpress_tinymce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_tinymce__WEBPACK_IMPORTED_MODULE_4__);



 // make sure this tinymce is added in index.asset.php as dependency


const ClassicEditorInput = ({
  value,
  label,
  setFieldAttributes
}) => {
  const colors = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getSettings().colors;
  const colorMap = [];
  colors.forEach(color => {
    colorMap.push(color.color.substring(1)); // first '#' letter needs to be deleted

    colorMap.push(color.slug);
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: label
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
    onEditorChange: newValue => {
      setFieldAttributes(newValue);
    },
    value: value,
    plugins: "lists textcolor colorpicker link",
    init: {
      height: 300,
      menubar: false,
      branding: false,
      textcolor_map: colorMap,
      toolbar: 'undo redo formatselect ' + 'bold italic forecolor backcolor alignleft aligncenter ' + 'alignright alignjustify bullist numlist outdent indent ' + 'link unlink removeformat help',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }
  }));
};

/***/ }),

/***/ "./src/components/input-controls/DateInput.js":
/*!****************************************************!*\
  !*** ./src/components/input-controls/DateInput.js ***!
  \****************************************************/
/*! exports provided: DateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return DateInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function DateInput({
  value,
  label,
  setFieldAttributes
}) {
  const CustomPopover = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
    isVisible: false
  })(({
    isVisible,
    setState,
    children
  }) => {
    const open = () => {
      setState(() => ({
        isVisible: true
      }));
    };

    const hide = () => {
      setState(() => ({
        isVisible: false
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        position: 'relative'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isSecondary: true,
      onClick: !isVisible ? open : null
    }, value ? new Date(value).toLocaleString() : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Date')), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      onClose: hide,
      position: "bottom left"
    }, children));
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "fbl_url-input"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "fbl_url-input__label",
    label: label
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CustomPopover, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      padding: 10
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["DateTimePicker"], {
    currentDate: value,
    onChange: val => {
      // make sure there is an empty string instead of just null bc null causes error on ssr component
      if (!val) val = '';
      setFieldAttributes(val);
    }
  }))));
}

/***/ }),

/***/ "./src/components/input-controls/EmailInput.js":
/*!*****************************************************!*\
  !*** ./src/components/input-controls/EmailInput.js ***!
  \*****************************************************/
/*! exports provided: EmailInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInput", function() { return EmailInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



function EmailInput({
  value,
  label,
  setFieldAttributes
}) {
  const [isValid, setIsValid] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    type: "email",
    className: !isValid ? 'components-base-control--error' : '',
    label: label,
    value: value,
    onChange: setFieldAttributes,
    onFocus: e => {
      e.target.reportValidity();
    },
    onBlur: e => {
      const isValid = e.target.checkValidity();
      setIsValid(isValid);
    }
  });
}

/***/ }),

/***/ "./src/components/input-controls/ImageInput.js":
/*!*****************************************************!*\
  !*** ./src/components/input-controls/ImageInput.js ***!
  \*****************************************************/
/*! exports provided: ImageInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInput", function() { return ImageInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






const ImageUpload = ({
  label,
  onSelect,
  onRemove,
  value
}) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
  onSelect: media => {
    console.log(media);
    onSelect({
      id: media.id,
      sizes: media.sizes,
      url: media.url,
      alt: media.alt,
      title: media.title,
      description: media.description,
      caption: media.caption
    });
  },
  allowedTypes: ['image'],
  value: value,
  render: ({
    open
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: label
  }), !(value && value.url) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: open,
    isPrimary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Open Media Library')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "fbl_img-preview-box"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    onClick: open,
    src: value.url,
    className: "fbl_img-preview-box__img"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "fbl_img-preview-box__btn",
    isPrimary: true,
    isDestructive: true,
    onClick: onRemove,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["trash"]
  })))
}));

function ImageInput({
  label,
  value,
  setFieldAttributes,
  removeFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ImageUpload, {
    onSelect: setFieldAttributes,
    onRemove: removeFieldAttributes,
    value: value,
    label: label
  });
}

/***/ }),

/***/ "./src/components/input-controls/NumberInput.js":
/*!******************************************************!*\
  !*** ./src/components/input-controls/NumberInput.js ***!
  \******************************************************/
/*! exports provided: NumberInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return NumberInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function NumberInput({
  value,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    type: "number",
    label: label,
    value: value,
    onChange: setFieldAttributes
  });
}

/***/ }),

/***/ "./src/components/input-controls/RangeInput.js":
/*!*****************************************************!*\
  !*** ./src/components/input-controls/RangeInput.js ***!
  \*****************************************************/
/*! exports provided: RangeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeInput", function() { return RangeInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function RangeInput({
  value,
  field,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: label,
    value: value,
    onChange: setFieldAttributes,
    step: field.step,
    min: field.min,
    max: field.max
  });
}

/***/ }),

/***/ "./src/components/input-controls/RichTextInput.js":
/*!********************************************************!*\
  !*** ./src/components/input-controls/RichTextInput.js ***!
  \********************************************************/
/*! exports provided: RichTextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextInput", function() { return RichTextInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function RichTextInput({
  value,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "fbl_url-input__label"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: "fbl_rich-text",
    value: value,
    onChange: setFieldAttributes,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add text…'),
    inlineToolbar: true
  }));
}

/***/ }),

/***/ "./src/components/input-controls/SelectInput.js":
/*!******************************************************!*\
  !*** ./src/components/input-controls/SelectInput.js ***!
  \******************************************************/
/*! exports provided: SelectInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInput", function() { return SelectInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function SelectInput({
  value,
  field,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: label,
    value: value,
    onChange: setFieldAttributes,
    options: field.options
  });
}

/***/ }),

/***/ "./src/components/input-controls/TextInput.js":
/*!****************************************************!*\
  !*** ./src/components/input-controls/TextInput.js ***!
  \****************************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function TextInput({
  value,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: label,
    value: value,
    onChange: setFieldAttributes
  });
}

/***/ }),

/***/ "./src/components/input-controls/TextareaInput.js":
/*!********************************************************!*\
  !*** ./src/components/input-controls/TextareaInput.js ***!
  \********************************************************/
/*! exports provided: TextareaInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaInput", function() { return TextareaInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function TextareaInput({
  value,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextareaControl"], {
    label: label,
    value: value,
    onChange: setFieldAttributes
  });
}

/***/ }),

/***/ "./src/components/input-controls/ToggleInput.js":
/*!******************************************************!*\
  !*** ./src/components/input-controls/ToggleInput.js ***!
  \******************************************************/
/*! exports provided: ToggleInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleInput", function() { return ToggleInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function ToggleInput({
  value,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: label,
    onChange: setFieldAttributes,
    checked: value
  });
}

/***/ }),

/***/ "./src/components/input-controls/URLInput.js":
/*!***************************************************!*\
  !*** ./src/components/input-controls/URLInput.js ***!
  \***************************************************/
/*! exports provided: URLInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLInput", function() { return URLInput; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function URLInput({
  value,
  label,
  setFieldAttributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    className: "fbl_url-input"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "fbl_url-input__label"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["URLInputButton"], {
    url: value,
    onChange: setFieldAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", {
    className: "fbl_url-input__url"
  }, value));
}

/***/ }),

/***/ "./src/components/input-controls/index.js":
/*!************************************************!*\
  !*** ./src/components/input-controls/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxInput */ "./src/components/input-controls/CheckboxInput.js");
/* harmony import */ var _ToggleInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleInput */ "./src/components/input-controls/ToggleInput.js");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextInput */ "./src/components/input-controls/TextInput.js");
/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmailInput */ "./src/components/input-controls/EmailInput.js");
/* harmony import */ var _TextareaInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextareaInput */ "./src/components/input-controls/TextareaInput.js");
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberInput */ "./src/components/input-controls/NumberInput.js");
/* harmony import */ var _RangeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RangeInput */ "./src/components/input-controls/RangeInput.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectInput */ "./src/components/input-controls/SelectInput.js");
/* harmony import */ var _ImageInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageInput */ "./src/components/input-controls/ImageInput.js");
/* harmony import */ var _RichTextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RichTextInput */ "./src/components/input-controls/RichTextInput.js");
/* harmony import */ var _URLInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./URLInput */ "./src/components/input-controls/URLInput.js");
/* harmony import */ var _DateInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DateInput */ "./src/components/input-controls/DateInput.js");
/* harmony import */ var _ClassicEditorInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ClassicEditorInput */ "./src/components/input-controls/ClassicEditorInput.js");













const inputControls = {
  checkbox: _CheckboxInput__WEBPACK_IMPORTED_MODULE_0__["CheckboxInput"],
  toggle: _ToggleInput__WEBPACK_IMPORTED_MODULE_1__["ToggleInput"],
  text: _TextInput__WEBPACK_IMPORTED_MODULE_2__["TextInput"],
  email: _EmailInput__WEBPACK_IMPORTED_MODULE_3__["EmailInput"],
  textarea: _TextareaInput__WEBPACK_IMPORTED_MODULE_4__["TextareaInput"],
  number: _NumberInput__WEBPACK_IMPORTED_MODULE_5__["NumberInput"],
  range: _RangeInput__WEBPACK_IMPORTED_MODULE_6__["RangeInput"],
  select: _SelectInput__WEBPACK_IMPORTED_MODULE_7__["SelectInput"],
  image: _ImageInput__WEBPACK_IMPORTED_MODULE_8__["ImageInput"],
  richText: _RichTextInput__WEBPACK_IMPORTED_MODULE_9__["RichTextInput"],
  url: _URLInput__WEBPACK_IMPORTED_MODULE_10__["URLInput"],
  date: _DateInput__WEBPACK_IMPORTED_MODULE_11__["DateInput"],
  classicEditor: _ClassicEditorInput__WEBPACK_IMPORTED_MODULE_12__["ClassicEditorInput"]
};
/* harmony default export */ __webpack_exports__["default"] = (inputControls);

/***/ }),

/***/ "./src/createEdit.js":
/*!***************************!*\
  !*** ./src/createEdit.js ***!
  \***************************/
/*! exports provided: createEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEdit", function() { return createEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FieldControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FieldControl */ "./src/components/FieldControl.js");
/* harmony import */ var _components_EditorPopover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EditorPopover */ "./src/components/EditorPopover.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);








function createEdit({
  settings,
  name,
  children,
  fields,
  editWidth,
  editView,
  childrenLimit,
  preview
}) {
  return editProps => {
    const {
      attributes,
      isSelected,
      clientId
    } = editProps;
    const [height, setHeight] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])({
      style: {
        flexBasis: editWidth * 100 + '%'
      }
    });
    const title = settings && settings.title ? settings.title : name;
    /* AdvancedEditView means 'popover' oder 'inspector' for ALL fields */

    const hasAdvancedEditView = editView === 'popover' || editView === 'inspector';
    /* limit innerBlocks children (if it has children) */

    const innerBlockCount = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useSelect"])(select => select('core/block-editor').getBlock(clientId).innerBlocks).length;

    const MyInnerBlocksAppender = () => {
      if (!childrenLimit || innerBlockCount < childrenLimit) {
        return _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].ButtonBlockAppender;
      }

      return false;
    };

    const InnerBlocksAppenderToUse = MyInnerBlocksAppender();

    function allFieldControls(editProps) {
      return Object.entries(fields).map(([fieldName, field]) => {
        const props = {
          editProps,
          fieldName,
          field
        };
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_FieldControl__WEBPACK_IMPORTED_MODULE_4__["FieldControl"], props);
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "fbl_editor-block",
      style: {
        minHeight: height
      },
      onMouseDown: e => {
        /* this should prevent scroll position jumping for now but there is probably a better way to do this */
        if (isSelected) return;
        e.currentTarget.style.minHeight = null;
        const currentHeight = e.currentTarget.offsetHeight;
        e.currentTarget.style.minHeight = currentHeight + 'px';
        setHeight(currentHeight);
      },
      onBlur: () => {
        setHeight(0);
      }
    }, isSelected && !hasAdvancedEditView || children || preview === false ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "fbl_card",
      size: "small"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
      className: "fbl_block-title"
    }, "Block: ", title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      style: {
        padding: '16px 14px'
      }
    }, allFieldControls(editProps), children && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        border: '1px dashed #ddd',
        padding: 0,
        borderRadius: 2
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
      allowedBlocks: // Can't set it to true, because it means ALL blocks are allowed including e.g. a single column
      Array.isArray(children) ? children : undefined,
      orientation: "horizontal",
      renderAppender: InnerBlocksAppenderToUse
    })))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        border: '1px dashed #ddd',
        padding: 0,
        minHeight: 50
      }
    }, editView === 'popover' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_EditorPopover__WEBPACK_IMPORTED_MODULE_5__["EditorPopover"], {
      title: title,
      fields: fields,
      editProps: editProps,
      isSelected: isSelected
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default.a, {
      block: name,
      attributes: { ...attributes
      },
      httpMethod: "POST"
    }), isSelected && editView === 'inspector' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, allFieldControls(editProps))))));
  };
}

/***/ }),

/***/ "./src/createSave.js":
/*!***************************!*\
  !*** ./src/createSave.js ***!
  \***************************/
/*! exports provided: createSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSave", function() { return createSave; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function createSave({
  children,
  fields
}) {
  return ({
    attributes,
    className
  }) => {
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save({
      className
    });
    return children ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object.entries(fields).map(([fieldName, field]) => {
      /* Fallback Content to be saved inside the database/content for example for SEO Plugins etc.
      		also important if you choose to disable the block or if it stops working */
      switch (field.input) {
        // for some fields it is likely, that there should be output
        case 'text':
        case 'textarea':
          if (typeof field.selector === 'string') {
            // TODO: check if it is a valid tag
            const CustomTag = field.selector;
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CustomTag, null, attributes[fieldName]);
          }

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, attributes[fieldName]);

        case 'image':
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
            src: typeof attributes[fieldName] === 'object' && attributes[fieldName].url,
            alt: typeof attributes[fieldName] === 'object' && attributes[fieldName].alt
          });

        case 'richText':
        case 'classicEditor':
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
            value: attributes[fieldName]
          });

        default:
          return null;
        // by default don't output anything
      }
    }));
  };
}

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/*! exports provided: deprecated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This File contains deprecated Versions of the save function
 */


const CREATE_SAVE_2021_07 = ({
  children,
  fields
}) => {
  return ({
    attributes
  }) => {
    return children ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object.entries(fields).map(([fieldName, field]) => {
      /* Fallback Content to be saved inside the database/content for example for SEO Plugins etc.
               also important if you choose to disable the block or if it stops working */
      switch (field.input) {
        // for some fields it is likely, that there should be output
        case 'text':
        case 'textarea':
          if (typeof field.selector === 'string') {
            // TODO: check if it is a valid tag
            const CustomTag = field.selector;
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CustomTag, null, attributes[fieldName]);
          }

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, attributes[fieldName]);

        case 'image':
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
            src: typeof attributes[fieldName] === 'object' && attributes[fieldName].url,
            alt: typeof attributes[fieldName] === 'object' && attributes[fieldName].alt
          });

        case 'richText':
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
            tagName: "p",
            value: attributes[fieldName]
          });

        default:
          return null;
        // by default don't output anything
      }
    }));
  };
};

const deprecated = ({
  attributes,
  children,
  fields,
  settings
}) => {
  return [{
    /* added 2021-07 */
    attributes,
    ...settings,
    save: CREATE_SAVE_2021_07({
      children,
      fields
    }),
    apiVersion: 1
  }];
};

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _createSave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createSave */ "./src/createSave.js");
/* harmony import */ var _createEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createEdit */ "./src/createEdit.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");





/**
 * Register Blocks and automatically create an Editor UI
 *
 * @param {Object} block - All block attributes with a label and a input
 * @param {string} block.name - e.g. mytheme/my-block
 * @param {Object} block.fields - { type, default, label, input, [selector], [width] }
 * @param {Object} block.settings - All options like in wp.blocks.registerBlockType but without(!) attributes, edit & save: @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * @param {Array} [block.children] - Optional template for InnerBlocks
 * @param {string} [block.editView] - Optional setting for editing UI
 * @param {number} [block.editWidth] - Width of block inside editor. Usefull for children Blocks.
 */

function registerHelper(block) {
  const {
    name,
    settings,
    children
  } = block;
  const fields = block.fields || [];
  const blockAttributes = {};

  for (const [fieldName, field] of Object.entries(fields)) {
    // copy relevant parts of the fields object to generate attributes
    const attr = {};
    attr.type = field.type;
    attr.default = field.default;
    blockAttributes[fieldName] = attr;
  }

  const edit = Object(_createEdit__WEBPACK_IMPORTED_MODULE_3__["createEdit"])({
    fields,
    ...block
  });
  const save = Object(_createSave__WEBPACK_IMPORTED_MODULE_2__["createSave"])({
    children,
    fields
  });
  const blockObj = {
    apiVersion: 2,
    edit,
    save,
    title: name,
    // fallback (usually overwritten by options.title)
    ...settings,
    attributes: blockAttributes,
    // ALWAYS uses attributes generated by fields object
    deprecated: Object(_deprecated__WEBPACK_IMPORTED_MODULE_4__["deprecated"])({
      attributes: blockAttributes,
      children,
      fields,
      settings
    })
  };
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, blockObj);
}
/**
 * Register All Blocks that are added with the PHP helper function add_fast_block
 * const fastBlockBlocks is made available with PHP
 */


Object.values(fastBlockBlocks).forEach(block => {
  registerHelper(block);
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ }),

/***/ "@wordpress/tinymce":
/*!*********************************!*\
  !*** external ["wp","tinymce"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["tinymce"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map