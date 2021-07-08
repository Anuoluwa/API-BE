"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partialSales = exports.commodityPartialSalesQueue = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bull = _interopRequireDefault(require("bull"));

var _connection = _interopRequireDefault(require("./connection"));

var _setterAPI = require("../../../services/web3js/setterAPI");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var commodityPartialSalesQueue = new _bull["default"]('commodityPartialSales', {
  redis: {
    host: _connection["default"].options.host,
    port: _connection["default"].options.port
  }
}); // let assetId = req.trade[0].assetId;
// let adminBlock = process.env.ADMIN_PASS;
// let adminPwd = process.env.ADMIN_PASS;
// let username = req.user.name;
// let userPhone = req.user.phone;
// let userBVN = req.user.bvn;
// let userClientId = req.user.clientId;
// let userBlockchainAcct = req.user.blockchainAcct;

exports.commodityPartialSalesQueue = commodityPartialSalesQueue;
commodityPartialSalesQueue.process( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(job) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return partialSales(job.data.adminBlock, job.data.assetId, job.data.adminPwd, job.data.volume, job.data.username, job.data.userPhone, job.data.userBVN, job.data.userClientId, job.data.commodityCode, job.data.warehouseCode, job.data.hexGrade, job.data.grade, job.data.userBlockchainAcct, job.data.adminPwd);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

var partialSales = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(salesData) {
    var afexResponse, options, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _setterAPI.CommodityPartialSales)(salesData);

          case 2:
            afexResponse = _context2.sent;
            options = {
              delay: 60000,
              attempts: 2
            }; // const data  = {
            //   adminBlock,
            //   assetId,
            //   adminPwd,
            //   volume,
            //   username,
            //   userPhone,
            //   userBVN,
            //   userClientId,
            //   commodityCode,
            //   warehouseCode,
            //   hexGrade,
            //   grade,
            //   userBlockchainAcct,
            //   adminPwd
            // };

            data = _objectSpread({}, salesData);
            commodityPartialSalesQueue.add(data, options);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function partialSales(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.partialSales = partialSales;