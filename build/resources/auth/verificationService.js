"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = exports.saveToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cryptoRandomString = _interopRequireDefault(require("crypto-random-string"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _verificationModel = require("./verificationModel");

var _newRegistration = _interopRequireDefault(require("../../utils/emailTemplates/newRegistration"));

// import { sendMail } from '../../bankingservices/emailServices/emailService';
_dotenv["default"].config();
/**
 * saves user verification token.
 * @param {string} to - recipient's email address
 * @param {string} from - no-reply
 * @param {string} subject - email subject
 * @param {string} token - verification token
 * @returns {object} Response
 */


var sendVerificationEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(to, from, desubject, token) {
    var link, body, email;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            link = "".concat(process.env.EMAIL_VERIFICATION, "/#/auth/signup/verifyemail?token=").concat(token);
            body = (0, _newRegistration["default"])(link);
            email = {
              recipient: to,
              sender: from,
              subject: desubject,
              emailBody: body
            }; //const sentMail = await sendMail(email);

            return _context.abrupt("return", sentMail);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendVerificationEmail(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var saveToken = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var verifyToken, _id, userEmail, subject, from, tokenBody, saveUserToken, sentEmail;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            verifyToken = (0, _cryptoRandomString["default"])({
              length: 16,
              type: 'url-safe'
            });
            _id = data._id, userEmail = data.userEmail, subject = data.subject, from = data.from;
            tokenBody = {
              _id: _id,
              token: verifyToken
            }; // eslint-disable-next-line no-unused-vars

            _context2.next = 5;
            return _verificationModel.Token.create(tokenBody);

          case 5:
            saveUserToken = _context2.sent;
            _context2.next = 8;
            return sendVerificationEmail(userEmail, from, subject, verifyToken);

          case 8:
            sentEmail = _context2.sent;
            return _context2.abrupt("return", {
              Token: saveUserToken
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function saveToken(_x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.saveToken = saveToken;

var getToken = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(sentToken) {
    var userToken;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _verificationModel.Token.findOne({
              token: "".concat(sentToken)
            }).then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            userToken = _context3.sent;
            return _context3.abrupt("return", userToken);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getToken(_x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getToken = getToken;