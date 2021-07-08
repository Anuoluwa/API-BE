"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _auth = require("./auth");

var _authHelper = require("../../helpers/authHelper");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../../config"));

var _user = require("../../resources/users/user.model");

describe('Authentication:', function () {
  describe('newToken', function () {
    test('creates new jwt from user', function () {
      var id = 123;
      var token = (0, _authHelper.newToken)({
        id: id
      });

      var user = _jsonwebtoken["default"].verify(token, _config["default"].secrets.jwt);

      expect(user.id).toBe(id);
    });
  });
  describe('verifyToken', function () {
    test('validates jwt and returns payload', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var id, token, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = 1234;
              token = _jsonwebtoken["default"].sign({
                id: id
              }, _config["default"].secrets.jwt);
              _context.next = 4;
              return (0, _authHelper.verifyToken)(token);

            case 4:
              user = _context.sent;
              expect(user.id).toBe(id);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  describe('signup', function () {
    test('requires email and password', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var req, res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              expect.assertions(2);
              req = {
                body: {}
              };
              res = {
                status: function status(_status) {
                  expect(_status).toBe(400);
                  return this;
                },
                send: function send(result) {
                  expect((0, _typeof2["default"])(result.message)).toBe('string');
                }
              };
              _context2.next = 5;
              return (0, _auth.signup)(req, res);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    test('creates user and and sends new token from user', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var req, res;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              expect.assertions(2);
              req = {
                body: {
                  email: 'hello@hello.com',
                  password: '293jssh'
                }
              };
              res = {
                status: function status(_status2) {
                  expect(_status2).toBe(201);
                  return this;
                },
                send: function send(result) {
                  return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                    var user;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return (0, _authHelper.verifyToken)(result.token);

                          case 2:
                            user = _context3.sent;
                            _context3.next = 5;
                            return _user.User.findById(user.id).lean().exec();

                          case 5:
                            user = _context3.sent;
                            expect(user.email).toBe('hello@hello.com');

                          case 7:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }))();
                }
              };
              _context4.next = 5;
              return (0, _auth.signup)(req, res);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('signin', function () {
    test('requires email and password', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var req, res;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              expect.assertions(2);
              req = {
                body: {}
              };
              res = {
                status: function status(_status3) {
                  expect(_status3).toBe(400);
                  return this;
                },
                send: function send(result) {
                  expect((0, _typeof2["default"])(result.message)).toBe('string');
                }
              };
              _context5.next = 5;
              return (0, _auth.signin)(req, res);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    test('user must be real', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      var req, res;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              expect.assertions(2);
              req = {
                body: {
                  email: 'hello@hello.com',
                  password: '293jssh'
                }
              };
              res = {
                status: function status(_status4) {
                  expect(_status4).toBe(401);
                  return this;
                },
                send: function send(result) {
                  expect((0, _typeof2["default"])(result.message)).toBe('string');
                }
              };
              _context6.next = 5;
              return (0, _auth.signin)(req, res);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
    test('passwords must match', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      var req, res;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              expect.assertions(2);
              _context7.next = 3;
              return _user.User.create({
                email: 'hello@me.com',
                password: 'yoyoyo'
              });

            case 3:
              req = {
                body: {
                  email: 'hello@me.com',
                  password: 'wrong'
                }
              };
              res = {
                status: function status(_status5) {
                  expect(_status5).toBe(401);
                  return this;
                },
                send: function send(result) {
                  expect((0, _typeof2["default"])(result.message)).toBe('string');
                }
              };
              _context7.next = 7;
              return (0, _auth.signin)(req, res);

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    test('creates new token', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
      var fields, savedUser, req, res;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              expect.assertions(2);
              fields = {
                email: 'hello@me.com',
                password: 'yoyoyo'
              };
              _context9.next = 4;
              return _user.User.create(fields);

            case 4:
              savedUser = _context9.sent;
              req = {
                body: fields
              };
              res = {
                status: function status(_status6) {
                  expect(_status6).toBe(201);
                  return this;
                },
                send: function send(result) {
                  return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
                    var user;
                    return _regenerator["default"].wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return (0, _authHelper.verifyToken)(result.token);

                          case 2:
                            user = _context8.sent;
                            _context8.next = 5;
                            return _user.User.findById(user.id).lean().exec();

                          case 5:
                            user = _context8.sent;
                            expect(user._id.toString()).toBe(savedUser._id.toString());

                          case 7:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }))();
                }
              };
              _context9.next = 9;
              return (0, _auth.signin)(req, res);

            case 9:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
  });
  describe('protect', function () {
    test('looks for Bearer token in headers', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
      var req, res;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              expect.assertions(2);
              req = {
                headers: {}
              };
              res = {
                status: function status(_status7) {
                  expect(_status7).toBe(401);
                  return this;
                },
                end: function end() {
                  expect(true).toBe(true);
                }
              };
              _context10.next = 5;
              return (0, _authHelper.protect)(req, res);

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    })));
    test('token must have correct prefix', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
      var req, res;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              expect.assertions(2);
              req = {
                headers: {
                  authorization: (0, _authHelper.newToken)({
                    id: '123sfkj'
                  })
                }
              };
              res = {
                status: function status(_status8) {
                  expect(_status8).toBe(401);
                  return this;
                },
                end: function end() {
                  expect(true).toBe(true);
                }
              };
              _context11.next = 5;
              return (0, _authHelper.protect)(req, res);

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    })));
    test('must be a real user', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
      var token, req, res;
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              token = "Bearer ".concat((0, _authHelper.newToken)({
                id: _mongoose["default"].Types.ObjectId()
              }));
              req = {
                headers: {
                  authorization: token
                }
              };
              res = {
                status: function status(_status9) {
                  expect(_status9).toBe(401);
                  return this;
                },
                end: function end() {
                  expect(true).toBe(true);
                }
              };
              _context12.next = 5;
              return (0, _authHelper.protect)(req, res);

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    })));
    test('finds user form token and passes on', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
      var user, token, req, next;
      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return _user.User.create({
                email: 'hello@hello.com',
                password: '1234'
              });

            case 2:
              user = _context13.sent;
              token = "Bearer ".concat((0, _authHelper.newToken)(user));
              req = {
                headers: {
                  authorization: token
                }
              };

              next = function next() {};

              _context13.next = 8;
              return (0, _authHelper.protect)(req, {}, next);

            case 8:
              expect(req.user._id.toString()).toBe(user._id.toString());
              expect(req.user).not.toHaveProperty('password');

            case 10:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    })));
  });
});