"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordReset = exports.sendVerificationLink = exports.createSuperAdmin = exports.verifyAccount = exports.verifyEmail = exports.signin = exports.signup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userModel = require("../users/userModel");

var _authMiddleware = require("../../middlewares/authMiddleware");

var _response = require("../../helpers/response");

var _passwordService = require("./passwordService");

var _verificationService = require("./verificationService");

var _crud = require("../../utils/crud");

var _verificationModel = require("./verificationModel");

var _passwordModel = require("./passwordModel");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _passwordReset = _interopRequireDefault(require("../../utils/emailTemplates/passwordReset"));

//import { sendEmailNotification } from '../../helpers/marketHelper/emailNotificationHelper';
// import passwordResetNotificationTemplate from '../../utils/emailTemplates/passwordResetNotificationTemplate';
var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(Model, body) {
    var newUser, user, token, errorItem, item, _errorItem;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Model.create(body);

          case 3:
            newUser = _context.sent;
            user = newUser.toObject({
              versionKey: false
            });
            delete user.password;
            token = (0, _authMiddleware.newToken)(user);
            return _context.abrupt("return", {
              user: user,
              token: token
            });

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);

            if (!_context.t0.message.includes('duplicate key')) {
              _context.next = 18;
              break;
            }

            errorItem = _context.t0.message.split(' ')[11];
            item = errorItem.split(':')[0];
            return _context.abrupt("return", {
              status: 409,
              error: "duplicates error: ".concat(item, " already exists")
            });

          case 18:
            _errorItem = _context.t0.message.split(':')[2];
            return _context.abrupt("return", {
              status: 422,
              error: _errorItem
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(Model, body) {
    var user, match, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _userModel.User.findOne({
              email: email
            }).select('email password').exec();

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(401).send(invalid));

          case 6:
            _context2.next = 8;
            return user.checkPassword(req.body.password);

          case 8:
            match = _context2.sent;

            if (match) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(401).send(invalid));

          case 11:
            token = (0, _authMiddleware.newToken)(user);
            return _context2.abrupt("return", res.status(201).send({
              token: token
            }));

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            res.status(500).end();

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * check if an email exists and sends password reset
 * @param {object} req request object
 * @param {object} res response object
 * @returns {object}
 */


exports.signin = signin;

var verifyEmail = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var email, user, id, token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            email = req.body.email;
            _context3.next = 3;
            return _userModel.User.findOne({
              email: email
            });

          case 3:
            user = _context3.sent;

            if (user) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", (0, _response.failure)(403, 'Invalid input', res));

          case 6:
            id = user.id;
            _context3.next = 9;
            return (0, _authMiddleware.newToken)({
              id: id
            });

          case 9:
            token = _context3.sent;
            _context3.next = 12;
            return (0, _passwordService.saveToken)(token, email);

          case 12:
            _context3.next = 14;
            return (0, _passwordService.sendPasswordRecoveryMail)(email, 'no-reply@sabex.ng', 'SabexNG: Password Reset', token, email);

          case 14:
            return _context3.abrupt("return", (0, _response.success)(res, 200, 'Password reset link sent successfully. Kindly check your email', null));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function verifyEmail(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Verifies a user through their token
 * @async
 * @method
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {object}
 */


exports.verifyEmail = verifyEmail;

var verifyAccount = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var token, userToken, _id, verifyUser;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            token = req.query.token;
            _context4.next = 3;
            return (0, _verificationService.getToken)(token);

          case 3:
            userToken = _context4.sent;

            if (userToken) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", (0, _response.failure)(404, {
              message: 'Invalid input'
            }, res));

          case 6:
            _id = userToken._id;
            _context4.next = 9;
            return (0, _authMiddleware.updateIsVerified)(_id);

          case 9:
            verifyUser = _context4.sent;

            if (!(verifyUser == null || !verifyUser)) {
              _context4.next = 12;
              break;
            }

            return _context4.abrupt("return", (0, _response.failure)(401, {
              status: false,
              message: 'user could not be verified'
            }, res));

          case 12:
            return _context4.abrupt("return", (0, _response.success)(res, 200, 'verification successful', {
              status: true
            }));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function verifyAccount(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.verifyAccount = verifyAccount;

var createSuperAdmin = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var newSuperAdmim;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return blockchainService.AddSuperAdmin();

          case 2:
            newSuperAdmim = _context5.sent;

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function createSuperAdmin() {
    return _ref5.apply(this, arguments);
  };
}();

exports.createSuperAdmin = createSuperAdmin;

var sendVerificationLink = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$user, _id, email, isVerified, removeExToken;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$user = req.user, _id = _req$user._id, email = _req$user.email, isVerified = _req$user.isVerified;

            if (!(isVerified == true)) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", (0, _response.success)(res, 200, 'You have already been verified', req.user));

          case 5:
            _context6.next = 7;
            return (0, _crud.removeOne)(_verificationModel.Token, _id);

          case 7:
            removeExToken = _context6.sent;
            return _context6.abrupt("return", (0, _response.success)(res, 201, 'Verification link sent successfully.', {
              _id: _id,
              email: email
            }));

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function sendVerificationLink(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.sendVerificationLink = sendVerificationLink;

var passwordReset = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body, email, token, newPassword, isTokenValid, hashedPwd;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, token = _req$body.token, newPassword = _req$body.newPassword;
            _context7.next = 3;
            return (0, _passwordService.checkValidToken)(token, email);

          case 3:
            isTokenValid = _context7.sent;

            if (isTokenValid) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", (0, _response.failure)(403, 'Password reset link has expired. Kindly generate a new one.', res));

          case 6:
            _context7.next = 8;
            return _bcryptjs["default"].hash(newPassword, 12);

          case 8:
            hashedPwd = _context7.sent;
            _context7.next = 11;
            return (0, _crud.updateUserPassword)(_userModel.User, email, hashedPwd);

          case 11:
            _context7.next = 13;
            return (0, _crud.updateRecoveryToken)(_passwordModel.PasswordRecovery, email, token);

          case 13:
            return _context7.abrupt("return", (0, _response.success)(res, 200, 'Password changed successfully.', null));

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function passwordReset(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.passwordReset = passwordReset;