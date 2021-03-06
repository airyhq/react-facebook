"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Parser = _interopRequireDefault(require("./Parser"));

var CustomChat =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(CustomChat, _PureComponent);

  function CustomChat() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CustomChat.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        minimized = _this$props.minimized,
        children = _this$props.children,
        pageId = _this$props.pageId,
        themeColor = _this$props.themeColor,
        loggedInGreeting = _this$props.loggedInGreeting,
        loggedOutGreeting = _this$props.loggedOutGreeting,
        dataRef = _this$props.dataRef;
    return _react.default.createElement("div", {
      className: "fb-customerchat",
      page_id: pageId,
      minimized: minimized,
      theme_color: themeColor,
      logged_in_greeting: loggedInGreeting,
      logged_out_greeting: loggedOutGreeting,
      "data-ref": dataRef
    }, children);
  };

  return CustomChat;
}(_react.PureComponent);

(0, _defineProperty2.default)(CustomChat, "defaultProps", {
  minimized: undefined,
  children: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  dataRef: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(CustomChat, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=CustomChat.js.map