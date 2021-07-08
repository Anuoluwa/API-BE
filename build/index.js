"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _compression = _interopRequireDefault(require("compression"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _expressQueryBoolean = _interopRequireDefault(require("express-query-boolean"));

var _chalk = _interopRequireDefault(require("chalk"));

var _config = _interopRequireDefault(require("./config"));

var _routes = _interopRequireDefault(require("./routes"));

var _db = require("./utils/db");

require("core-js/stable");

require("regenerator-runtime/runtime");

var _auth = require("./utils/auth");

var _tryCatch = _interopRequireDefault(require("./helpers/tryCatch"));

var _product = _interopRequireDefault(require("./resources/products/product.controller"));

var _category = _interopRequireDefault(require("./resources/categories/category.controller"));

/* eslint-disable no-console */
// import swaggerSpec from '../docs/config/swaggerDef';
//import seed from './seedings/seed'
var app = (0, _express["default"])();
exports.app = app;

_dotenv["default"].config();

app.use((0, _helmet["default"])());
app.disable('x-powered-by');
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _expressQueryBoolean["default"])());
app.use((0, _morgan["default"])('dev'));
app.use((0, _compression["default"])());
app.use((0, _cors["default"])()); // app.use('/api/v1/auth', rateLimiter);

app.get('/', function (req, res) {
  res.send('Welcome to Pharmaserv API ');
});
app.get('/api-docs.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.post('/api/v1/auth/signup', (0, _tryCatch["default"])(_auth.signup));
app.post('/api/v1/auth/login', (0, _tryCatch["default"])(_auth.signin));
app.get('/api/v1/products/all', _product["default"].getAllMany);
app.get('/api/v1/categories', _category["default"].getManyWithoutId); // search

app.use('/api', _auth.protect);
app.use('/api/v1', _routes["default"]); //app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('*', function (req, res) {
  return res.status(404).json({
    status: 404,
    message: 'URL does not exist'
  });
});

var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _db.connect)();

          case 3:
            app.listen(_config["default"].port, function () {
              console.log(_chalk["default"].green.bold("REST API on http://localhost:".concat(_config["default"].port, "/")));
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_chalk["default"].red(_context.t0));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

exports.start = start;