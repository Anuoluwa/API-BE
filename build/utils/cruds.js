"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudControllers = exports.getManyWithoutId = exports.getAllMany = exports.getOneProductWithCategory = exports.removeOne = exports.updateOne = exports.createOne = exports.getMany = exports.getOne = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getOne = function getOne(model) {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var doc;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return model.findOne({
                createdBy: req.user._id,
                _id: req.params.id
              }).lean().exec();

            case 3:
              doc = _context.sent;

              if (doc) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.status(400).end());

            case 6:
              res.status(200).json({
                data: doc
              });
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.getOne = getOne;

var getMany = function getMany(model) {
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var docs;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return model.find({
                createdBy: req.user._id
              }).lean().exec();

            case 3:
              docs = _context2.sent;
              res.status(200).json({
                data: docs
              });
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              res.status(400).end();

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.getMany = getMany;

var createOne = function createOne(model) {
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var createdBy, doc;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              createdBy = req.user._id;
              _context3.prev = 1;
              _context3.next = 4;
              return model.create(_objectSpread(_objectSpread({}, req.body), {}, {
                createdBy: createdBy
              }));

            case 4:
              doc = _context3.sent;
              res.status(201).json({
                data: doc
              });
              _context3.next = 12;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.error(_context3.t0);
              res.status(400).end();

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 8]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

exports.createOne = createOne;

var updateOne = function updateOne(model) {
  return /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var updatedDoc;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return model.findOneAndUpdate({
                createdBy: req.user._id,
                _id: req.params.id
              }, req.body, {
                "new": true
              }).lean().exec();

            case 3:
              updatedDoc = _context4.sent;

              if (updatedDoc) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(400).end());

            case 6:
              res.status(200).json({
                data: updatedDoc
              });
              _context4.next = 13;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.updateOne = updateOne;

var removeOne = function removeOne(model) {
  return /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var removed;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return model.findOneAndRemove({
                createdBy: req.user._id,
                _id: req.params.id
              });

            case 3:
              removed = _context5.sent;

              if (removed) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return", res.status(400).end());

            case 6:
              return _context5.abrupt("return", res.status(200).json({
                data: removed
              }));

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              console.error(_context5.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }();
};

exports.removeOne = removeOne;

var getOneProductWithCategory = function getOneProductWithCategory(model) {
  return /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var doc;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return model.findOne({
                createdBy: req.user._id,
                _id: req.params.id
              }).populate("category", "-_id -createdBy -createdAt -updatedAt -__v").lean().exec();

            case 3:
              doc = _context6.sent;
              console.log(doc, 'll');

              if (doc) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt("return", res.status(400).end());

            case 7:
              res.status(200).json({
                data: doc
              });
              _context6.next = 14;
              break;

            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](0);
              console.error(_context6.t0);
              res.status(400).end();

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 10]]);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }();
};

exports.getOneProductWithCategory = getOneProductWithCategory;

var getAllMany = function getAllMany(model) {
  return /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var docs;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return model.find().populate("category", "-_id -createdBy -createdAt -updatedAt -__v").populate("supplier", "supplierName -_id").lean().exec();

            case 3:
              docs = _context7.sent;
              res.status(200).json({
                data: docs
              });
              _context7.next = 11;
              break;

            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              console.error(_context7.t0);
              res.status(400).end();

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 7]]);
    }));

    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }();
};

exports.getAllMany = getAllMany;

var getManyWithoutId = function getManyWithoutId(model) {
  return /*#__PURE__*/function () {
    var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
      var docs;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return model.find().select("-createdBy -createdAt -updatedAt -__v").lean().exec();

            case 3:
              docs = _context8.sent;
              res.status(200).json({
                data: docs
              });
              _context8.next = 11;
              break;

            case 7:
              _context8.prev = 7;
              _context8.t0 = _context8["catch"](0);
              console.error(_context8.t0);
              res.status(400).end();

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 7]]);
    }));

    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }();
}; // export const getEachCategoryWithItsProducts =  (model , categoryId)=> async(req, res) => {
//   try {
//     const products = await model.find({ category: categoryId })
//     .populate("category", "-_id -createdBy -createdAt -updatedAt -__v")
//     .lean().exec
//   } catch (e) {
//     console.error(e)
//     res.status(400).end()
//   }
// }


exports.getManyWithoutId = getManyWithoutId;

var crudControllers = function crudControllers(model) {
  return {
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model),
    getAllMany: getAllMany(model),
    getOneProductWithCategory: getOneProductWithCategory(model),
    getManyWithoutId: getManyWithoutId(model)
  };
};

exports.crudControllers = crudControllers;