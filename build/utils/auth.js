"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protect = exports.signin = exports.signup = exports.verifyToken = exports.newToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = _interopRequireDefault(require("../config"));

var _userModel = require("../resources/users/userModel");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var newToken = function newToken(user) {
  return _jsonwebtoken["default"].sign({
    id: user.id
  }, _config["default"].secrets.jwt, {
    expiresIn: _config["default"].secrets.jwtExp
  });
};

exports.newToken = newToken;

var verifyToken = function verifyToken(token) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].verify(token, _config["default"].secrets.jwt, function (err, payload) {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

exports.verifyToken = verifyToken;

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.email || !req.body.password)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              status: 'fail',
              message: 'Need email and password'
            }));

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return _userModel.User.create(req.body);

          case 5:
            user = _context.sent;
            token = newToken(user);
            return _context.abrupt("return", res.status(201).send({
              status: 'success',
              token: token
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.status(500).end());

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var invalid, user, match, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!req.body.email || !req.body.password)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", res.status(400).send({
              status: 'fail',
              message: 'Need email and password'
            }));

          case 2:
            invalid = {
              status: 'fail',
              message: 'Invalid email or password'
            };
            _context2.prev = 3;
            _context2.next = 6;
            return _userModel.User.findOne({
              email: req.body.email
            }).select('email password').exec();

          case 6:
            user = _context2.sent;

            if (user) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              status: 'fail',
              message: 'Invalid credentails'
            }));

          case 9:
            _context2.next = 11;
            return user.checkPassword(req.body.password);

          case 11:
            match = _context2.sent;

            if (match) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              status: 'fail',
              message: 'Invalid credentails'
            }));

          case 14:
            token = newToken(user);
            return _context2.abrupt("return", res.status(201).send({
              status: 'success',
              token: token
            }));

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](3);
            console.error(_context2.t0);
            res.status(500).end();

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 18]]);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;

var protect = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var bearer, token, payload, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            bearer = req.headers.authorization;

            if (!(!bearer || !bearer.startsWith('Bearer '))) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(401).end());

          case 3:
            token = bearer.split('Bearer ')[1].trim();
            _context3.prev = 4;
            _context3.next = 7;
            return verifyToken(token);

          case 7:
            payload = _context3.sent;
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](4);
            return _context3.abrupt("return", res.status(401).end());

          case 13:
            _context3.next = 15;
            return _userModel.User.findById(payload.id).select('-password').lean().exec();

          case 15:
            user = _context3.sent;

            if (user) {
              _context3.next = 18;
              break;
            }

            return _context3.abrupt("return", res.status(401).end());

          case 18:
            req.user = user;
            next();

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 10]]);
  }));

  return function protect(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.protect = protect;