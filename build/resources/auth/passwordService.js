"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidToken = exports.sendPasswordRecoveryMail = exports.saveToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = require("dotenv");

var _passwordModel = require("./passwordModel");

var _passwordReset = _interopRequireDefault(require("../../utils/emailTemplates/passwordReset"));

var _authMiddleware = require("../../middlewares/authMiddleware");

var _crud = require("../../utils/crud");

(0, _dotenv.config)();
/**
 * Saves the token to the password recovery table
 * @param {string} token token to be saved password recovery table
 * @param {string} email email associated with the token
 * @returns {object} PasswordRecovery object
 */

var saveToken = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token, email) {
    var recoverPassword;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _passwordModel.PasswordRecovery.updateOne({
              email: email
            }, {
              $set: {
                token: token,
                email: email,
                isValid: true
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v');

          case 2:
            recoverPassword = _context.sent;
            return _context.abrupt("return", recoverPassword);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function saveToken(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * sends password reset mail
 * @param {string} to - recipient's email address
 * @param {string} from - no-reply
 * @param {string} subject - email subject
 * @param {string} token - verification token
 * @returns {object} sentMail
 */


exports.saveToken = saveToken;

var sendPasswordRecoveryMail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(to, from, subject, token, source) {
    var link, body, email;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            link = "".concat(process.env.HOST_URL, "/#/auth/password/reset?token=").concat(token, "&source=").concat(source);
            body = (0, _passwordReset["default"])(link);
            email = {
              recipient: to,
              sender: from,
              subject: subject,
              emailBody: body
            }; // const sentMail = await sendMail(email);

            return _context2.abrupt("return", sentMail);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function sendPasswordRecoveryMail(_x3, _x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Checks if the token is valid
 * @param {object} token token used in processing password change
 * @param {object} email email associated with the token
 * @returns {object} boolean
 */


exports.sendPasswordRecoveryMail = sendPasswordRecoveryMail;

var checkValidToken = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(token, email) {
    var passwordToken, passwordResetToken, isTokenValid, tokenExp;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _crud.findRecovery)(_passwordModel.PasswordRecovery, email, token);

          case 2:
            passwordToken = _context3.sent;

            if (passwordToken) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", false);

          case 5:
            passwordResetToken = passwordToken.token;
            _context3.next = 8;
            return (0, _authMiddleware.verifyToken)(passwordResetToken);

          case 8:
            isTokenValid = _context3.sent;
            tokenExp = isTokenValid.tokenExp;

            if (!tokenExp) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", false);

          case 12:
            return _context3.abrupt("return", true);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkValidToken(_x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.checkValidToken = checkValidToken;