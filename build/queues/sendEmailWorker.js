"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmailQueue = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bull = _interopRequireDefault(require("bull"));

var _connection = _interopRequireDefault(require("./connection"));

var _emailNotificationHelper = require("../../helpers/marketHelper/emailNotificationHelper");

var sendEmailQueue = new _bull["default"]('sendEmailNotification', {
  redis: {
    host: _connection["default"].options.host,
    port: _connection["default"].options.port
  }
});
exports.sendEmailQueue = sendEmailQueue;
sendEmailQueue.process( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(job) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _emailNotificationHelper.sendEmailNotification)(job.data.recipient, job.data.sender, job.data.subject, job.data.createTradeTemplate);

          case 2:
            result = _context.sent;
            _context.t0 = console;
            _context.next = 6;
            return result;

          case 6:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1, 'Email Notification');

            return _context.abrupt("return", result);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()); // export const sendMailWorker = (recipient, sender, subject, createTradeTemplate) => {
// };