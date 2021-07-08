"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("../config"));

var _chalk = _interopRequireDefault(require("chalk"));

// import mongoose from 'mongoose';
// import options from '../config';
// export const connect = (url = options.dbUrl, opts = {}) => {
//   return mongoose.connect(url, { ...opts, useNewUrlParser: true });
// };
var connect = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var url,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : _config["default"].dbUrl;
            _context.prev = 1;
            _context.next = 4;
            return _mongoose["default"].connect(url, {
              useNewUrlParser: true,
              useCreateIndex: true,
              useUnifiedTopology: true
            }, function () {
              console.log(_chalk["default"].blue.bold('DB connected!.'));
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);

            _mongoose["default"].connection.on('error', function (err) {
              console.log(_chalk["default"].red("DB connection error: ".concat(err.message)));
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

exports.connect = connect;