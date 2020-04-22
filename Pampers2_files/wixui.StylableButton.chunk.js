((typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || []).push([[58],{

/***/ 17:
/*!*****************************************************!*\
  !*** ./components/StylableButton/StylableButton.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StylableButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _StylableButtonSt = __webpack_require__(/*! ./StylableButton.st.css */ 365);

var _StylableButtonSt2 = _interopRequireDefault(_StylableButtonSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEY_CODES = { ENTER: 13, SPACE: 32 };

var StylableButton = exports.StylableButton = function (_React$Component) {
  _inherits(StylableButton, _React$Component);

  function StylableButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StylableButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StylableButton.__proto__ || Object.getPrototypeOf(StylableButton)).call.apply(_ref, [this].concat(args))), _this), _this.getCommonAttributes = function () {
      var ariaAttributes = {};

      if (typeof _this.props.ariaPressed === 'boolean') {
        ariaAttributes['aria-pressed'] = _this.props.ariaPressed;
      }

      if (typeof _this.props.ariaExpanded === 'boolean') {
        ariaAttributes['aria-expanded'] = _this.props.ariaExpanded;
      }

      if (_this.props.ariaHaspopup) {
        ariaAttributes['aria-haspopup'] = _this.props.ariaHaspopup;
      }

      if (typeof _this.props.tabindex === 'number') {
        ariaAttributes.tabindex = _this.props.tabindex;
      }

      return _extends({
        'aria-label': _this.props.label
      }, (0, _StylableButtonSt2.default)('root', { error: _this.props.hasError, disabled: _this.props.disabled }, _this.props), {
        onKeyPress: _this.onKeyPressEventHandler,
        onClick: _this.props.disabled ? null : _this.props.onClick,
        onDoubleClick: _this.props.disabled ? null : _this.props.onDoubleClick,
        onMouseEnter: _this.props.onMouseEnter,
        onMouseLeave: _this.props.onMouseLeave,
        style: _this.props.style,
        id: _this.props.id
      }, ariaAttributes);
    }, _this.renderButtonContent = function () {
      return React.createElement(
        'div',
        { className: _StylableButtonSt2.default.container },
        _this.props.label ? React.createElement(
          'span',
          { className: _StylableButtonSt2.default.label, style: _this.props.style ? { color: _this.props.style.color } : {} },
          _this.props.label
        ) : null,
        _this.props.icon ? React.createElement(
          'span',
          { className: _StylableButtonSt2.default.icon, 'aria-hidden': 'true' },
          _this.props.icon
        ) : null
      );
    }, _this.renderLinkedButton = function () {
      var _this$getCommonAttrib = _this.getCommonAttributes(),
          className = _this$getCommonAttrib.className,
          restOfAttr = _objectWithoutProperties(_this$getCommonAttrib, ['className']);

      return React.createElement(
        'a',
        _extends({ href: _this.props.disabled ? '#' : _this.props.href, 'data-anchor': _this.props.dataAnchor, 'aria-haspopup': _this.props.ariaHaspopup, target: _this.props.target }, restOfAttr, { className: className + ' ' + _StylableButtonSt2.default.link }),
        _this.renderButtonContent()
      );
    }, _this.renderRegularButton = function () {
      return React.createElement(
        'button',
        _extends({ type: 'button', disabled: _this.props.disabled }, _this.getCommonAttributes()),
        _this.renderButtonContent()
      );
    }, _this.onKeyPressEventHandler = function (e) {
      if (!_this.props.href && e.keyCode === KEY_CODES.ENTER) {
        _this.props.onClick && _this.props.onClick();
      } else if (_this.props.href && e.keyCode === KEY_CODES.SPACE) {
        _this.props.onClick && _this.props.onClick();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StylableButton, [{
    key: 'render',
    value: function render() {
      var href = this.props.href;

      return href ? this.renderLinkedButton() : this.renderRegularButton();
    }
  }]);

  return StylableButton;
}(React.Component);

StylableButton.propTypes = {
  label: _propTypes.PropTypes.string,
  icon: _propTypes.PropTypes.node,
  href: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func,
  onDoubleClick: _propTypes.PropTypes.func,
  onMouseEnter: _propTypes.PropTypes.func,
  onMouseLeave: _propTypes.PropTypes.func,
  style: _propTypes.PropTypes.object,
  hasError: _propTypes.PropTypes.bool,
  disabled: _propTypes.PropTypes.bool,
  target: _propTypes.PropTypes.string,
  dataAnchor: _propTypes.PropTypes.string,
  id: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string,
  tabindex: _propTypes.PropTypes.number,
  ariaPressed: _propTypes.PropTypes.bool,
  ariaExpanded: _propTypes.PropTypes.bool,
  ariaHaspopup: _propTypes.PropTypes.string
};

/***/ }),

/***/ 365:
/*!*********************************************************!*\
  !*** ./components/StylableButton/StylableButton.st.css ***!
  \*********************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "StylableButton3172224474",
  {"root":"StylableButton3172224474--root","link":"StylableButton3172224474--link","container":"StylableButton3172224474--container","label":"StylableButton3172224474--label","icon":"StylableButton3172224474--icon"},
  "",
  1,
  /*! ./components/StylableButton/StylableButton.st.css */ 365
);



/***/ }),

/***/ 507:
/*!********************************************!*\
  !*** ./components/StylableButton/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StylableButton = __webpack_require__(/*! ./StylableButton.santa */ 848);

var _StylableButton2 = __webpack_require__(/*! ./StylableButton */ 17);

exports.default = {
  componentType: 'wixui.StylableButton',
  component: _StylableButton2.StylableButton,
  santaComponent: _StylableButton.SantaStylableButton
};

/***/ }),

/***/ 848:
/*!***********************************************************!*\
  !*** ./components/StylableButton/StylableButton.santa.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SantaStylableButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createIconFromString = createIconFromString;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _santaComponents = __webpack_require__(/*! santa-components */ 10);

var _SantaComponent2 = __webpack_require__(/*! ../SantaComponent/SantaComponent */ 95);

var _StylableButton = __webpack_require__(/*! ./StylableButton */ 17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createIconFromString(svgString) {
  return _react2.default.createElement('div', {
    dangerouslySetInnerHTML: {
      __html: svgString || ''
    }
  });
}

var SantaStylableButton = exports.SantaStylableButton = function (_SantaComponent) {
  _inherits(SantaStylableButton, _SantaComponent);

  function SantaStylableButton() {
    _classCallCheck(this, SantaStylableButton);

    return _possibleConstructorReturn(this, (SantaStylableButton.__proto__ || Object.getPrototypeOf(SantaStylableButton)).apply(this, arguments));
  }

  _createClass(SantaStylableButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          svgString = _props.svgString,
          styleId = _props.styleId,
          compData = _props.compData;

      var _getRequiredProps = this.getRequiredProps(),
          id = _getRequiredProps.id,
          requiredStyle = _getRequiredProps.style,
          dataAngle = _getRequiredProps['data-angle'],
          dataPreview = _getRequiredProps['data-preview'],
          rest = _objectWithoutProperties(_getRequiredProps, ['id', 'style', 'data-angle', 'data-preview']);

      var haspopup = compData.a11y ? compData.a11y.haspopup : null;
      var hasPageLink = function hasPageLink() {
        return compData.link && compData.link.type === 'PageLink' ? 'true' : haspopup;
      };
      var innerButtonRequiredStyle = { position: 'absolute' };
      var buttonStyle = compData.stylableButtonStyle ? _extends({}, compData.stylableButtonStyle, innerButtonRequiredStyle) : innerButtonRequiredStyle;
      var pressed = compData.a11y ? compData.a11y.pressed : null;
      var expanded = compData.a11y ? compData.a11y.expanded : null;
      var tabindex = compData.a11y ? compData.a11y.tabindex : null;

      return _react2.default.createElement(
        'div',
        { id: id, style: requiredStyle, 'data-angle': dataAngle, 'data-preview': dataPreview },
        _react2.default.createElement(_StylableButton.StylableButton, _extends({}, rest, {
          id: id + '-inner-button',
          style: buttonStyle,
          label: compData.label,
          ariaPressed: pressed,
          ariaExpanded: expanded,
          tabindex: tabindex,
          ariaHaspopup: hasPageLink(),
          className: styleId + '--root',
          icon: createIconFromString(svgString)
        }))
      );
    }
  }]);

  return SantaStylableButton;
}(_SantaComponent2.SantaComponent);

SantaStylableButton.displayName = 'StylableButton';
SantaStylableButton.stylable = true;

SantaStylableButton.propTypes = _extends({}, _SantaComponent2.SantaComponent.propTypes, {
  svgString: _santaComponents.santaTypesDefinitions.RawSvg.getRawSVG,
  renderedLink: _santaComponents.santaTypesDefinitions.Link.renderedLink,
  handleAction: _santaComponents.santaTypesDefinitions.Behaviors.handleAction
});

/***/ }),

/***/ 95:
/*!*****************************************************!*\
  !*** ./components/SantaComponent/SantaComponent.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SantaComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _santaComponents = __webpack_require__(/*! santa-components */ 10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SantaComponent = exports.SantaComponent = function (_React$Component) {
  _inherits(SantaComponent, _React$Component);

  function SantaComponent() {
    _classCallCheck(this, SantaComponent);

    return _possibleConstructorReturn(this, (SantaComponent.__proto__ || Object.getPrototypeOf(SantaComponent)).apply(this, arguments));
  }

  _createClass(SantaComponent, [{
    key: 'getRequiredProps',
    value: function getRequiredProps() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _santaComponents.SantaComponentHelperMethods.getRequiredProps.apply(_santaComponents.SantaComponentHelperMethods, [this].concat(args));
    }
  }, {
    key: 'updateData',
    value: function updateData() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _santaComponents.SantaComponentHelperMethods.updateData.apply(_santaComponents.SantaComponentHelperMethods, [this].concat(args));
    }
  }, {
    key: 'updateProps',
    value: function updateProps() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _santaComponents.SantaComponentHelperMethods.updateProps.apply(_santaComponents.SantaComponentHelperMethods, [this].concat(args));
    }
  }]);

  return SantaComponent;
}(_react2.default.Component);

SantaComponent.propTypes = _santaComponents.SantaComponentHelperMethods.requiredPropTypes;

/***/ })

}]);
//# sourceMappingURL=wixui.StylableButton.chunk.js.map