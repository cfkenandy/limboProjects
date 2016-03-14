
'use strict';


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _svgIcon = require('material-ui/lib/svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

import themeVars from '../variables.json';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xTheme = {color: themeVars.IconColor1, hoverColor: themeVars.IconColor2};


var Cart = function Cart(props) {
   return _react2.default.createElement(
    _svgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M0,3.3l1.8,9.3h9.8l2.8-9.3L0,3.3z M10.9,11.6H2.7L1.2,4.3h12L10.9,11.6z M17,0v1h-2.1l-0.6,2.3l-1,0 c0,0,0,0,0.8-3.3c0,0,1.1,0,1.9,0C16.6,0,17,0,17,0z M2.9,13.3c-0.9-0.2-1.8,0.5-2,1.4c-0.2,0.9,0.5,1.8,1.4,2 c0.9,0.2,1.8-0.5,2-1.4C4.4,14.3,3.8,13.5,2.9,13.3z M2.4,15.7c-0.4-0.1-0.7-0.5-0.6-0.9c0.1-0.4,0.5-0.7,0.9-0.6 c0.4,0.1,0.7,0.5,0.6,0.9S2.8,15.8,2.4,15.7z M3.3,15.1c-0.1,0.4-0.5,0.7-0.9,0.6c-0.4-0.1-0.7-0.5-0.6-0.9c0.1-0.4,0.5-0.7,0.9-0.6 C3.1,14.3,3.3,14.7,3.3,15.1z M11.1,13.3c-0.9-0.2-1.8,0.5-2,1.4c-0.2,0.9,0.5,1.8,1.4,2c0.9,0.2,1.8-0.5,2-1.4 C12.7,14.3,12,13.4,11.1,13.3z M10.6,15.7c-0.4-0.1-0.7-0.5-0.6-0.9s0.5-0.7,0.9-0.6c0.4,0.1,0.7,0.5,0.6,0.9 C11.4,15.5,11,15.8,10.6,15.7z M11.5,15.1c-0.1,0.4-0.5,0.7-0.9,0.6c-0.4-0.1-0.7-0.5-0.6-0.9s0.5-0.7,0.9-0.6 C11.3,14.3,11.6,14.7,11.5,15.1z' })
  );
};

Cart = (0, _pure2.default)(Cart);
Cart.displayName = 'Cart';
exports.default = Cart;
module.exports = exports['default'];
