"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOldPassword = exports.checkAdminEmail = exports.adminEmailFormat = exports.checkExistingValues = exports.bvnExists = exports.protectAdmin = exports.generatePwd = exports.updateIsVerified = exports.protect = exports.verifyToken = exports.newToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _cryptoRandomString = _interopRequireDefault(require("crypto-random-string"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _config = _interopRequireDefault(require("../config"));

var _userModel = require("../resources/users/userModel");

var _response = require("../helpers/response");

var _crud = require("../utils/crud");

/* eslint-disable prefer-arrow-callback */

/* eslint-disable func-names */

/* eslint-disable consistent-return */

/* eslint-disable object-shorthand */
// import redisConnection from '../queues/queues/connection';
var newToken = function newToken(user) {
  var tokenResult = _jsonwebtoken["default"].sign({
    id: user._id,
    email: user.email,
    roles: user.roles,
    isVerified: user.isVerified
  }, _config["default"].secrets.jwt, {
    expiresIn: _config["default"].secrets.jwtExp
  }); // redisConnection.set(`${user._id}-token`, tokenResult, 'EX', 60 * 60 * 24);


  return tokenResult;
};

exports.newToken = newToken;

var verifyToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              _jsonwebtoken["default"].verify(token, _config["default"].secrets.jwt, function (err, payload) {
                if (err) return reject(err);
                resolve(payload);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var protect = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var bearer, token, payload, _payload, id, user;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!req.headers.authorization || req.headers.authorization === '')) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: 401,
              error: 'Headers key: "Authorization" is required'
            }));

          case 2:
            bearer = req.headers.authorization;

            if (!(!bearer || !bearer.startsWith('Bearer '))) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              authorized: 'Invalid token'
            }));

          case 5:
            token = bearer.split('Bearer ')[1].trim();
            _context2.prev = 6;
            _context2.next = 9;
            return verifyToken(token);

          case 9:
            payload = _context2.sent;
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](6);
            return _context2.abrupt("return", res.status(401).json({
              Unauthorized: 'Invalid token'
            }));

          case 15:
            _payload = payload, id = _payload.id; // const cachedToken = await redisConnection.get(`${id}-token`);
            // if (!cachedToken || token !== cachedToken) {
            //   return failure(401, 'Session timeout, please log in', res);
            // }

            _context2.next = 18;
            return _userModel.User.findById(payload.id).select('-password').lean().exec();

          case 18:
            user = _context2.sent;

            if (user) {
              _context2.next = 21;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              Unauthorized: 'Invalid token'
            }));

          case 21:
            req.user = user;
            next();

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 12]]);
  }));

  return function protect(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.protect = protect;

var updateIsVerified = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id) {
    var user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _userModel.User.findOneAndUpdate({
              _id: _id,
              isVerified: false
            }, {
              isVerified: true
            }, {
              "new": true
            }).then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            user = _context3.sent;
            return _context3.abrupt("return", user);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateIsVerified(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateIsVerified = updateIsVerified;

var generatePwd = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _bcryptjs["default"].hash("".concat((0, _cryptoRandomString["default"])({
              length: 10,
              type: 'base64'
            })).concat(Date.now()), 8);

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function generatePwd() {
    return _ref4.apply(this, arguments);
  };
}();

exports.generatePwd = generatePwd;

var protectAdmin = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var bearer, token, payload, admin;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(!req.headers.authorization || req.headers.authorization === '')) {
              _context5.next = 2;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              status: 401,
              error: 'Headers key: "Authorization" is required'
            }));

          case 2:
            bearer = req.headers.authorization;

            if (!(!bearer || !bearer.startsWith('Bearer '))) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", res.status(401).json({
              authorized: 'Invalid token'
            }));

          case 5:
            token = bearer.split('Bearer ')[1].trim();
            _context5.prev = 6;
            _context5.next = 9;
            return verifyToken(token);

          case 9:
            payload = _context5.sent;
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](6);
            return _context5.abrupt("return", res.status(401).end());

          case 15:
            _context5.next = 17;
            return Admin.findById(payload.id).select('-password').lean().exec();

          case 17:
            admin = _context5.sent;

            if (admin) {
              _context5.next = 20;
              break;
            }

            return _context5.abrupt("return", res.status(401).json({
              authorized: 'Invalid token'
            }));

          case 20:
            req.admin = admin;
            next();

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[6, 12]]);
  }));

  return function protectAdmin(_x6, _x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.protectAdmin = protectAdmin;

var bvnExists = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var bvn, bvnValid;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            bvn = req.body.bvn;
            _context6.next = 3;
            return bvnChecker({
              bvn: bvn
            });

          case 3:
            bvnValid = _context6.sent;

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function bvnExists(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.bvnExists = bvnExists;

var checkExistingValues = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var _req$body, name, email, bvn, phone, result, inputName, inputEmail, inputBvn, inputPhone;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, bvn = _req$body.bvn, phone = _req$body.phone;
            _context7.next = 3;
            return (0, _crud.findByField)(_userModel.User, name, email, bvn, phone);

          case 3:
            result = _context7.sent;
            inputName = result.find(function (item) {
              return item.name === name;
            });
            inputEmail = result.find(function (item) {
              return item.email === email;
            });
            inputBvn = result.find(function (item) {
              return item.bvn === bvn;
            });
            inputPhone = result.find(function (item) {
              return item.phone === phone;
            });

            if (!(result.length > 0 && inputName !== undefined && [inputName].length > 0)) {
              _context7.next = 10;
              break;
            }

            return _context7.abrupt("return", (0, _response.failure)(422, "name: ".concat(name, " already exists"), res));

          case 10:
            if (!(result.length > 0 && inputEmail !== undefined && [inputEmail].length > 0)) {
              _context7.next = 12;
              break;
            }

            return _context7.abrupt("return", (0, _response.failure)(422, "email: ".concat(email, " already exists"), res));

          case 12:
            if (!(result.length > 0 && inputBvn !== undefined && [inputBvn].length > 0)) {
              _context7.next = 14;
              break;
            }

            return _context7.abrupt("return", (0, _response.failure)(422, "BVN: ".concat(bvn, " already exists"), res));

          case 14:
            if (!(result.length > 0 && inputPhone !== undefined && [inputPhone].length > 0)) {
              _context7.next = 16;
              break;
            }

            return _context7.abrupt("return", (0, _response.failure)(422, "phone: ".concat(phone, " already exists"), res));

          case 16:
            next();

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function checkExistingValues(_x11, _x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

exports.checkExistingValues = checkExistingValues;

var adminEmailFormat = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var email, emailSuffix;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            email = req.body.email;
            emailSuffix = email.split('@')[1];

            if (!(emailSuffix !== 'sterling.ng')) {
              _context8.next = 4;
              break;
            }

            return _context8.abrupt("return", (0, _response.failure)(401, 'Access Denied, unauthorized email', res));

          case 4:
            next();

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function adminEmailFormat(_x14, _x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.adminEmailFormat = adminEmailFormat;

var checkAdminEmail = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var email, adminEmail;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            email = req.body.email;
            _context9.next = 3;
            return (0, _crud.getOneByEmailUser)(Admin, email);

          case 3:
            adminEmail = _context9.sent;

            if (!(adminEmail !== null)) {
              _context9.next = 6;
              break;
            }

            return _context9.abrupt("return", (0, _response.failure)(401, 'Email already exists', res));

          case 6:
            next();

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function checkAdminEmail(_x17, _x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}();

exports.checkAdminEmail = checkAdminEmail;

var checkOldPassword = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var _req$body2, email, token, newPassword, user, validPassword;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, token = _req$body2.token, newPassword = _req$body2.newPassword;
            _context10.next = 3;
            return (0, _crud.getOneByEmailUser)(_userModel.User, email);

          case 3:
            user = _context10.sent;

            if (!(user == null)) {
              _context10.next = 6;
              break;
            }

            return _context10.abrupt("return", (0, _response.failure)(401, 'Email does not exist', res));

          case 6:
            _context10.next = 8;
            return _bcryptjs["default"].compare(newPassword, user.password);

          case 8:
            validPassword = _context10.sent;

            if (!validPassword) {
              _context10.next = 11;
              break;
            }

            return _context10.abrupt("return", (0, _response.failure)(401, 'Please use a new password', res));

          case 11:
            next();

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function checkOldPassword(_x20, _x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}();

exports.checkOldPassword = checkOldPassword;