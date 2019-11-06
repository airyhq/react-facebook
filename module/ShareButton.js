import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import Share from './Share';
export default function ShareButton(props) {
  const {
    className,
    children
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children"]);

  return React.createElement(Share, rest, ({
    loading,
    handleClick
  }) => React.createElement("button", {
    type: "button",
    disabled: loading,
    className: className,
    onClick: handleClick
  }, children));
}
ShareButton.defaultProps = _objectSpread({}, Share.defaultProps, {
  className: undefined
});
//# sourceMappingURL=ShareButton.js.map