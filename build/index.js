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

/***/ "./src/components/ImageUpload.js":
/*!***************************************!*\
  !*** ./src/components/ImageUpload.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const ImageUpload = ({
  label,
  onSelect,
  onRemove,
  value
}) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
  onSelect: media => {
    onSelect({
      id: media.id,
      sizes: media.sizes,
      url: media.url,
      alt: media.alt
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
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Open Media Library')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    onClick: open,
    src: value.url,
    style: {
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      marginRight: '10px',
      background: 'white'
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onRemove,
    isSecondary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Remove image'))))
}));

/* harmony default export */ __webpack_exports__["default"] = (ImageUpload);

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

/***/ "./src/components/inputControls.js":
/*!*****************************************!*\
  !*** ./src/components/inputControls.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageUpload */ "./src/components/ImageUpload.js");





const inputControls = {
  'checkbox': ({
    value,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
    label: label,
    onChange: setFieldAttributes,
    checked: value
  }),
  'toggle': ({
    value,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: label,
    onChange: setFieldAttributes,
    checked: value
  }),
  'text': ({
    value,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: label,
    value: value,
    onChange: setFieldAttributes
  }),
  'textarea': ({
    value,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextareaControl"], {
    label: label,
    value: value,
    onChange: setFieldAttributes
  }),
  'number': ({
    value,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: label,
    type: "number",
    value: value,
    onChange: setFieldAttributes
  }),
  'range': ({
    value,
    field,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: label,
    value: value,
    onChange: setFieldAttributes,
    min: field.min,
    max: field.max
  }),
  'select': ({
    value,
    field,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: label,
    value: value,
    onChange: setFieldAttributes,
    options: field.options
  }),
  'image': ({
    label,
    value,
    setFieldAttributes,
    removeFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ImageUpload__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSelect: setFieldAttributes,
    onRemove: removeFieldAttributes,
    value: value,
    label: label
  }),
  'richText': ({
    value,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: label
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: "fbl_rich-text",
    value: value,
    onChange: setFieldAttributes,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add text…'),
    inlineToolbar: true
  })),
  'url': ({
    value,
    label,
    setFieldAttributes
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    className: "fbl_url-input"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    className: "fbl_url-input__label",
    label: label
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["URLInputButton"], {
    url: value,
    onChange: setFieldAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("small", {
    className: "fbl_url-input__url"
  }, value))
};
/* harmony default export */ __webpack_exports__["default"] = (inputControls);

/***/ }),

/***/ "./src/createFieldControls.js":
/*!************************************!*\
  !*** ./src/createFieldControls.js ***!
  \************************************/
/*! exports provided: createFieldControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFieldControls", function() { return createFieldControls; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createSubFieldControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSubFieldControls */ "./src/createSubFieldControls.js");
/* harmony import */ var _components_inputControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inputControls */ "./src/components/inputControls.js");
/* harmony import */ var _components_WidthWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WidthWrapper */ "./src/components/WidthWrapper.js");






/**
 * Create different Components to make all fields editable.
 * Basically checks the input value of a field and decides what component is needed
 * and which attributes should be set (e. g. for images it's usually a object containing url, alt etc.)
 * 
 * @param {Object} props - All props passed by edit function of block
 * @param {string} fieldName
 * @param {Object} field 
 * @returns 
 */

function createFieldControls(props, fieldName, field) {
  const {
    attributes,
    setAttributes
  } = props;

  const setFieldAttributes = val => {
    setAttributes({
      [fieldName]: val
    });
  };

  const removeFieldAttributes = () => {
    setFieldAttributes(undefined);
  };

  if (field.input !== 'repeater') {
    const InputControl = _components_inputControls__WEBPACK_IMPORTED_MODULE_4__["default"][field.input];

    if (InputControl === undefined) {
      console.error(field.input + ' Input does not exist');
      return;
    }

    const width = field.width || 1.0;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_WidthWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      width: width
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputControl, {
      setFieldAttributes: setFieldAttributes,
      removeFieldAttributes: removeFieldAttributes,
      field: field,
      label: field.label,
      value: attributes[fieldName]
    }));
  } else if (field.input === 'repeater') {
    const addNew = () => {
      const newItem = {};
      Object.entries(field.query).forEach(([key, value]) => {
        newItem[key] = value.default;
      });
      setAttributes({
        [fieldName]: [...attributes[fieldName], newItem]
      });
    };

    const removeItem = index => {
      const updatedAttr = [...attributes[fieldName]];
      updatedAttr.splice(index, 1);
      setAttributes({
        [fieldName]: updatedAttr
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
      className: "fbl_repeater-inputs"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
      label: field.label
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, attributes[fieldName].map((attribute, index) => {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        key: fieldName + index,
        title: field.single ? `${field.single} ${index + 1}` : `Repeater ${Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Item')} ${index + 1}`,
        initialOpen: false,
        buttonProps: {
          style: {
            padding: '16px'
          }
        }
      }, Object.entries(attribute).map(([subFieldName]) => {
        return Object(_createSubFieldControls__WEBPACK_IMPORTED_MODULE_3__["createSubFieldControls"])({
          props,
          fieldName,
          field,
          subFieldName,
          subField: field.query[subFieldName],
          key: index
        });
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => {
          removeItem(index);
        },
        isDestructive: true
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove item')));
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: addNew,
      style: {
        width: '100%',
        justifyContent: 'center'
      },
      isSecondary: true
    }, "+"));
  }
}

/***/ }),

/***/ "./src/createSubFieldControls.js":
/*!***************************************!*\
  !*** ./src/createSubFieldControls.js ***!
  \***************************************/
/*! exports provided: createSubFieldControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubFieldControls", function() { return createSubFieldControls; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_inputControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inputControls */ "./src/components/inputControls.js");



/**
 * Create different Components to make all subFields editable.
 * Very similar to switchComponents function
 * 
 * @param {Object} props - All props passed by edit function of block
 * @param {string} fieldName
 * @param {Object} field 
 * @returns 
 */

function createSubFieldControls({
  props,
  fieldName,
  field,
  subFieldName,
  subField,
  key
}) {
  const {
    attributes,
    setAttributes
  } = props;

  const setSubFieldAttributes = val => {
    const before = attributes[fieldName].slice(0, key);
    const after = attributes[fieldName].slice(key + 1);
    setAttributes({
      [fieldName]: [...before, { ...attributes[fieldName][key],
        [subFieldName]: val
      }, ...after]
    });
  };

  const removeSubFieldAttributes = () => {
    setSubFieldAttributes(undefined);
  };

  const InputControl = _components_inputControls__WEBPACK_IMPORTED_MODULE_2__["default"][subField.input];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputControl, {
    setFieldAttributes: setSubFieldAttributes,
    removeFieldAttributes: removeSubFieldAttributes,
    field: subField,
    label: subField.label,
    value: attributes[fieldName][key][subFieldName]
  });
}

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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _createFieldControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createFieldControls */ "./src/createFieldControls.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");








/**
 * Register Blocks and automatically create an Editor UI
 * 
 * @param {string} name - Block name with slug e.g. my-slug/my-block
 * @param {Object} fields - All block attributes with a label and a input
 * 
 * TODO: learn how to document the following
 * @param fields.fieldName 
 * @param fields.fieldName.type
 * @param fields.fieldName.default
 * @param fields.fieldName.label
 * @param fields.fieldName.input 
 * @param fields.fieldName[selector] - optional selector
 * 
 * @param {Object} options - All options like in wp.blocks.registerBlockType but without(!) attributes: @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * @param {array} [children] - Optional template for InnerBlocks
 */

function registerHelper(name, fields, options, children) {
  const blockAttributes = {};

  for (const [fieldName, field] of Object.entries(fields)) {
    // copy relevant parts of the fields object to generate attributes
    const newValue = {};
    newValue.type = field.type;
    newValue.default = field.default;
    blockAttributes[fieldName] = newValue;
  }

  const edit = props => {
    const {
      attributes,
      isSelected
    } = props;
    const [height, setHeight] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const title = options && options.title ? options.title : name;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        minHeight: height
      },
      onMouseDown: e => {
        /* this should prevent scroll position jumping but there is probably a better way to do this */
        if (isSelected) return;
        e.currentTarget.style.minHeight = null;
        const currentHeight = e.currentTarget.offsetHeight;
        e.currentTarget.style.minHeight = currentHeight + 'px';
        setHeight(currentHeight);
      }
    }, isSelected || children ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "fbl_card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
      className: "fbl_block-title"
    }, "Block: ", title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      style: {
        padding: '16px 14px'
      }
    }, Object.entries(fields).map(([fieldName, field]) => {
      return Object(_createFieldControls__WEBPACK_IMPORTED_MODULE_5__["createFieldControls"])(props, fieldName, field);
    }), children && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        border: '1px dashed grey',
        padding: '10px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
      allowedBlocks: children,
      orientation: "horizontal",
      renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].ButtonBlockAppender
    })))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default.a, {
      block: name,
      attributes: { ...attributes
      },
      httpMethod: "POST"
    }));
  };

  const blockObj = {
    edit,
    save: ({
      attributes
    }) => {
      return children ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object.entries(fields).map(([fieldName, field]) => {
        /* Fallback Content to be saved inside the database/content for example for SEO Plugins etc.
        also important if you choose to disable the block or if it stops working */
        switch (field.input) {
          // for some fields it is likely, that there should be output
          case 'text':
          case 'textarea':
            if (typeof field.selector === "string") {
              // TODO: check if it is a valid tag
              const CustomTag = field.selector;
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CustomTag, null, attributes[fieldName]);
            } else {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, attributes[fieldName]);
            }

            ;

          case 'image':
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
              src: typeof attributes[fieldName] === "object" && attributes[fieldName].url,
              alt: typeof attributes[fieldName] === "object" && attributes[fieldName].alt
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
      })); // default: for server side rendered blocks, can be overwritten
    },
    title: name,
    // fallback (usually overwritten by options.title)
    ...options,
    attributes: blockAttributes // ALWAYS uses attributes generated by fields object

  };
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])(name, blockObj);
}
/**
 * Register All Blocks that are added with the PHP helper function add_fast_block
 * const fastBlockBlocks is made available with PHP
 */


Object.values(fastBlockBlocks).forEach(block => {
  registerHelper(block.name, block.fields, block.settings, block.children);
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

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map