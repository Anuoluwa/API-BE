"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tradePayment24HoursQueue = void 0;

var _connection = _interopRequireDefault(require("./connection"));

var _transactionReversal = require("../../helpers/marketHelper/transactionReversal");

var tradePayment24HoursQueue = new Queue('sendTradeReport', {
  redis: {
    host: _connection["default"].options.host,
    port: _connection["default"].options.port
  }
});
exports.tradePayment24HoursQueue = tradePayment24HoursQueue;