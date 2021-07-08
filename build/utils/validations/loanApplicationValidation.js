"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _validate = _interopRequireDefault(require("validate"));

var _rules = require("./rule/rules");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var loanApplicationConstraints = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0, _rules.numberRule)('loanAmount')), (0, _rules.numberRule)('customerAccount')), (0, _rules.numberRule)('"customerNumber')), _rules.loanTenor), (0, _rules.numberRule)('dayOfMonth')), (0, _rules.dateRule)('repaymentDay')), (0, _rules.dateRule)('proposalDate')), (0, _rules.dateRule)('approvalDate')), (0, _rules.dateRule)('expiryDate')), (0, _rules.dateRule)('disbursementDate')), (0, _rules.dateRule)('startDateInterestOnlyRepayment')), (0, _rules.dateRule)('endDateInterestOnlyRepayment')), (0, _rules.dateRule)('drawdownDate'));

var loanApplicationValidation = function loanApplicationValidation(req, res, next) {
  var body = req.body;
  var loanApplicationValidationError = (0, _validate["default"])(body, loanApplicationConstraints);

  if (loanApplicationValidationError) {
    return failure(422, loanApplicationValidationError, res);
  }
};

var _default = loanApplicationValidation;
exports["default"] = _default;