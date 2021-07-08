"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _crud = require("../crud");

var _userModel = require("../../resources/users/userModel");

var _mongoose = _interopRequireDefault(require("mongoose"));

describe('crud controllers', function () {
  describe('getOne', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            test('finds by authenticated user and id', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
              var user, list, req, res;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      expect.assertions(2);
                      user = _mongoose["default"].Types.ObjectId();
                      _context.next = 4;
                      return List.create({
                        name: 'list',
                        createdBy: user
                      });

                    case 4:
                      list = _context.sent;
                      req = {
                        params: {
                          id: list._id
                        },
                        user: {
                          _id: user
                        }
                      };
                      res = {
                        status: function status(_status) {
                          expect(_status).toBe(200);
                          return this;
                        },
                        json: function json(result) {
                          expect(result.data._id.toString()).toBe(list._id.toString());
                        }
                      };
                      _context.next = 9;
                      return (0, _crud.getOne)(List)(req, res);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));
            test('404 if no doc was found', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
              var user, req, res;
              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      expect.assertions(2);
                      user = _mongoose["default"].Types.ObjectId();
                      req = {
                        params: {
                          id: _mongoose["default"].Types.ObjectId()
                        },
                        user: {
                          _id: user
                        }
                      };
                      res = {
                        status: function status(_status2) {
                          expect(_status2).toBe(400);
                          return this;
                        },
                        end: function end() {
                          expect(true).toBe(true);
                        }
                      };
                      _context2.next = 6;
                      return (0, _crud.getOne)(List)(req, res);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  describe('getMany', function () {
    test('finds array of docs by authenticated user', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var user, req, res;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              expect.assertions(4);
              user = _mongoose["default"].Types.ObjectId();
              _context4.next = 4;
              return List.create([{
                name: 'list',
                createdBy: user
              }, {
                name: 'other',
                createdBy: user
              }, {
                name: 'list',
                createdBy: _mongoose["default"].Types.ObjectId()
              }]);

            case 4:
              req = {
                user: {
                  _id: user
                }
              };
              res = {
                status: function status(_status3) {
                  expect(_status3).toBe(200);
                  return this;
                },
                json: function json(result) {
                  expect(result.data).toHaveLength(2);
                  result.data.forEach(function (doc) {
                    return expect("".concat(doc.createdBy)).toBe("".concat(user));
                  });
                }
              };
              _context4.next = 8;
              return (0, _crud.getMany)(List)(req, res);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('createOne', function () {
    test('creates a new doc', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var user, body, req, res;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              expect.assertions(2);
              user = _mongoose["default"].Types.ObjectId();
              body = {
                name: 'name'
              };
              req = {
                user: {
                  _id: user
                },
                body: body
              };
              res = {
                status: function status(_status4) {
                  expect(_status4).toBe(201);
                  return this;
                },
                json: function json(results) {
                  expect(results.data.name).toBe(body.name);
                }
              };
              _context5.next = 7;
              return (0, _crud.createOne)(List)(req, res);

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    test('createdBy should be the authenticated user', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      var user, body, req, res;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              expect.assertions(2);
              user = _mongoose["default"].Types.ObjectId();
              body = {
                name: 'name'
              };
              req = {
                user: {
                  _id: user
                },
                body: body
              };
              res = {
                status: function status(_status5) {
                  expect(_status5).toBe(201);
                  return this;
                },
                json: function json(results) {
                  expect("".concat(results.data.createdBy)).toBe("".concat(user));
                }
              };
              _context6.next = 7;
              return (0, _crud.createOne)(List)(req, res);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
  describe('updateOne', function () {
    test('finds doc by authenticated user and id to update', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      var user, list, update, req, res;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              expect.assertions(3);
              user = _mongoose["default"].Types.ObjectId();
              _context7.next = 4;
              return List.create({
                name: 'name',
                createdBy: user
              });

            case 4:
              list = _context7.sent;
              update = {
                name: 'hello'
              };
              req = {
                params: {
                  id: list._id
                },
                user: {
                  _id: user
                },
                body: update
              };
              res = {
                status: function status(_status6) {
                  expect(_status6).toBe(200);
                  return this;
                },
                json: function json(results) {
                  expect("".concat(results.data._id)).toBe("".concat(list._id));
                  expect(results.data.name).toBe(update.name);
                }
              };
              _context7.next = 10;
              return (0, _crud.updateOne)(List)(req, res);

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    test('400 if no doc', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
      var user, update, req, res;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              expect.assertions(2);
              user = _mongoose["default"].Types.ObjectId();
              update = {
                name: 'hello'
              };
              req = {
                params: {
                  id: _mongoose["default"].Types.ObjectId()
                },
                user: {
                  _id: user
                },
                body: update
              };
              res = {
                status: function status(_status7) {
                  expect(_status7).toBe(400);
                  return this;
                },
                end: function end() {
                  expect(true).toBe(true);
                }
              };
              _context8.next = 7;
              return (0, _crud.updateOne)(List)(req, res);

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
  });
  describe('removeOne', function () {
    test('first doc by authenticated user and id to remove', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
      var user, list, req, res;
      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              expect.assertions(2);
              user = _mongoose["default"].Types.ObjectId();
              _context9.next = 4;
              return List.create({
                name: 'name',
                createdBy: user
              });

            case 4:
              list = _context9.sent;
              req = {
                params: {
                  id: list._id
                },
                user: {
                  _id: user
                }
              };
              res = {
                status: function status(_status8) {
                  expect(_status8).toBe(200);
                  return this;
                },
                json: function json(results) {
                  expect("".concat(results.data._id)).toBe("".concat(list._id));
                }
              };
              _context9.next = 9;
              return (0, _crud.removeOne)(List)(req, res);

            case 9:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
    test('400 if no doc', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
      var user, req, res;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              expect.assertions(2);
              user = _mongoose["default"].Types.ObjectId();
              req = {
                params: {
                  id: _mongoose["default"].Types.ObjectId()
                },
                user: {
                  _id: user
                }
              };
              res = {
                status: function status(_status9) {
                  expect(_status9).toBe(400);
                  return this;
                },
                end: function end() {
                  expect(true).toBe(true);
                }
              };
              _context10.next = 6;
              return (0, _crud.removeOne)(List)(req, res);

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    })));
  });
});