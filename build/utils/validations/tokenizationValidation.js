"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _validate = _interopRequireDefault(require("validate.js"));

var _rules = require("./rule/rules");

var _response = require("../../helpers/response");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var tokenizationRule = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0, _rules.numberRule)('deposit_id')), (0, _rules.numberRule)('volume')), (0, _rules.numberRule)('warehouse_code')), (0, _rules.gradeRule)('hex_grade')), (0, _rules.gradeRule)('grade')), _rules.itemRule);

var tokenizationValidation = function tokenizationValidation(req, res, next) {
  var body = req.body;
  var tokenizationValidationError = (0, _validate["default"])(body, tokenizationRule);

  if (tokenizationValidationError) {
    return (0, _response.failure)(422, tokenizationValidationError, res);
  }

  return next();
};

var _default = tokenizationValidation;
exports["default"] = _default;