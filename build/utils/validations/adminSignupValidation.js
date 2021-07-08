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

var newAdminRule = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _rules.emailRule), _rules.passwordRule), _rules.phoneNumberRule), _rules.adminUserTypeRule);

var adminSignupValidation = function adminSignupValidation(req, res, next) {
  var body = req.body;
  var adminSignupValidationError = (0, _validate["default"])(body, newAdminRule);

  if (adminSignupValidationError) {
    return (0, _response.failure)(422, adminSignupValidationError, res);
  }

  return next();
};

var _default = adminSignupValidation;
exports["default"] = _default;