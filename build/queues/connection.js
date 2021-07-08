"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bull = _interopRequireDefault(require("bull"));

var _ioredis = _interopRequireDefault(require("ioredis"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var REDIS_URL = process.env.REDIS_URL;
var redisConnection = process.env.REDIS_URL ? new _ioredis["default"](process.env.REDIS_URL) : new _ioredis["default"]();
redisConnection.on('error', function (error) {
  console.log('Error initialising Redis Connection', error.message);
});
redisConnection.on('connect', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("The connection to Redis initialized - \n    ".concat(redisConnection.options.host, ": ").concat(redisConnection.options.port));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var _default = redisConnection;
exports["default"] = _default;