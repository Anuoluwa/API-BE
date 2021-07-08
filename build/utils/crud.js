"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudControllers = exports.updateLoanStatus = exports.getOneLoanWithPopulate = exports.updateUserUnlock = exports.createOrUpdateUser = exports.getUserListedCommodities = exports.updateLockCount = exports.getUserEmail = exports.getUserPassword = exports.updatePassword = exports.updateUserProfile = exports.createLoanTransfer = exports.getManyLoanWithPopulate = exports.getOneAdminByEmail = exports.getAdminList = exports.getManyAdmin = exports.elevateAccount = exports.createIfExists = exports.updateOne = exports.createOneCommodity = exports.createOne = exports.createOrUpdatePrice = exports.getOneById = exports.updateById = exports.removeOne = exports.getOneByEmail = exports.getByExtAdmin = exports.getOneByEmailUser = exports.findRecovery = exports.findByField = exports.findBySingleField = exports.getOneByClientId = exports.getOne = exports.createLoan = exports.getOneWithPopulate = exports.getManyWithPopulate = exports.updateRecoveryToken = exports.updateUserPassword = exports.getManyPrice = exports.getMany = exports.createLoanParams = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// export const createLoanParams = async (Model, data) => {
//   const doc = await Model.create({ ...data })
//     //const user = newUser
//     //.toObject({ versionKey: false })
//     .then((result) => result)
//     .catch((error) => error);
//   return doc;
// };
var createLoanParams = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(Model, data) {
    var id, doc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = data.id;
            _context.next = 3;
            return Model.findByIdAndUpdate({
              _id: id
            }, {
              $set: _objectSpread({}, data)
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context.sent;
            return _context.abrupt("return", doc);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createLoanParams(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createLoanParams = createLoanParams;

var getMany = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(Model) {
    var docs;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Model.find().select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            docs = _context2.sent;
            return _context2.abrupt("return", docs);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMany(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMany = getMany;

var getManyPrice = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(Model) {
    var docs;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Model.find({}, {
              _id: 0
            }).select('-__v -createdAt -updatedAt').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            docs = _context3.sent;
            return _context3.abrupt("return", docs);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getManyPrice(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getManyPrice = getManyPrice;

var updateUserPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(Model, email, newPassword) {
    var updatedDoc;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Model.updateOne({
              email: email
            }, {
              password: newPassword
            }, {
              "new": true
            }).lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            updatedDoc = _context4.sent;
            return _context4.abrupt("return", updatedDoc);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateUserPassword(_x5, _x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUserPassword = updateUserPassword;

var updateRecoveryToken = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(Model, email, token) {
    var doc;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Model.updateOne({
              email: email
            }, {
              $set: {
                token: token,
                email: email,
                isValid: false
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context5.sent;
            return _context5.abrupt("return", doc);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateRecoveryToken(_x8, _x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateRecoveryToken = updateRecoveryToken;

var getManyWithPopulate = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(Model, populateStr) {
    var docs;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Model.find().select('-password -blockchainAcct -blockchainPwd -roles -isVerified -address -__v').populate(populateStr).lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            docs = _context6.sent;
            return _context6.abrupt("return", docs);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getManyWithPopulate(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getManyWithPopulate = getManyWithPopulate;

var getOneWithPopulate = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(Model, _id, populateStr) {
    var docs;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Model.findById({
              _id: _id
            }).populate(populateStr, '-_id -__v -arrangementId').select('-password').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            docs = _context7.sent;
            return _context7.abrupt("return", docs);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getOneWithPopulate(_x13, _x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getOneWithPopulate = getOneWithPopulate;

var createLoan = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(Model, UserModel, userId, loan) {
    var doc;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            doc = Model.create(_objectSpread({}, loan)).then(function (docLoan) {
              return UserModel.findByIdAndUpdate(userId, {
                $push: {
                  loans: docLoan._id
                }
              }, {
                "new": true,
                useFindAndModify: false
              });
            });
            return _context8.abrupt("return", doc);

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function createLoan(_x16, _x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();

exports.createLoan = createLoan;

var getOne = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(Model, _id) {
    var doc;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return Model.findOne({
              _id: _id
            }).select('-password -__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context9.sent;
            return _context9.abrupt("return", doc);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getOne(_x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getOne = getOne;

var getOneByClientId = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(Model, clientId) {
    var doc;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return Model.findOne({
              clientId: clientId
            }).lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context10.sent;
            return _context10.abrupt("return", doc);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function getOneByClientId(_x22, _x23) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getOneByClientId = getOneByClientId;

var findBySingleField = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(Model, commodityCode) {
    var doc;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return Model.findOne({
              $or: [{
                commodityCode: commodityCode
              }]
            }).lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context11.sent;
            return _context11.abrupt("return", doc);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function findBySingleField(_x24, _x25) {
    return _ref11.apply(this, arguments);
  };
}();

exports.findBySingleField = findBySingleField;

var findByField = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(Model, name, email, bvn, phone) {
    var doc;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return Model.find({
              $or: [{
                name: name
              }, {
                email: email
              }, {
                bvn: bvn
              }, {
                phone: phone
              }]
            }).select('name email bvn').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context12.sent;
            return _context12.abrupt("return", doc);

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function findByField(_x26, _x27, _x28, _x29, _x30) {
    return _ref12.apply(this, arguments);
  };
}();

exports.findByField = findByField;

var findRecovery = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(Model, email, token) {
    var doc;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return Model.findOne({
              $or: [{
                email: email
              }, {
                token: token
              }]
            }).where('isValid').equals(true).lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context13.sent;
            return _context13.abrupt("return", doc);

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function findRecovery(_x31, _x32, _x33) {
    return _ref13.apply(this, arguments);
  };
}();

exports.findRecovery = findRecovery;

var getOneByEmailUser = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(Model, email) {
    var doc;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return Model.findOne({
              email: email
            }).lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context14.sent;
            return _context14.abrupt("return", doc);

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function getOneByEmailUser(_x34, _x35) {
    return _ref14.apply(this, arguments);
  };
}();

exports.getOneByEmailUser = getOneByEmailUser;

var getByExtAdmin = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(Model, email) {
    var doc;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return Model.findOne({
              email: email
            }).select('email password userType roles blockchainAcct blockchainPwd').exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context15.sent;
            return _context15.abrupt("return", doc);

          case 4:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function getByExtAdmin(_x36, _x37) {
    return _ref15.apply(this, arguments);
  };
}();

exports.getByExtAdmin = getByExtAdmin;

var getOneByEmail = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(Model, email) {
    var doc;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return Model.findOne({
              email: email
            }).select('email name password phone userType rcNumber bvn blockchainAcct oneWalletAcctNo isVerified clientId lockCount').exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context16.sent;
            return _context16.abrupt("return", doc);

          case 4:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function getOneByEmail(_x38, _x39) {
    return _ref16.apply(this, arguments);
  };
}();

exports.getOneByEmail = getOneByEmail;

var removeOne = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(Model, _id) {
    var removed;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return Model.findOneAndRemove({
              _id: _id
            }).then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            removed = _context17.sent;
            return _context17.abrupt("return", removed);

          case 4:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function removeOne(_x40, _x41) {
    return _ref17.apply(this, arguments);
  };
}();

exports.removeOne = removeOne;

var updateById = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(_id) {
    var user;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return User.updateOne({
              _id: _id
            }).then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            user = _context18.sent;
            return _context18.abrupt("return", user);

          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function updateById(_x42) {
    return _ref18.apply(this, arguments);
  };
}();

exports.updateById = updateById;

var getOneById = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(Model, _id) {
    var doc;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return model.findOne({
              createdBy: req.user._id,
              _id: req.params.id
            }).lean().exec();

          case 3:
            doc = _context19.sent;

            if (doc) {
              _context19.next = 6;
              break;
            }

            return _context19.abrupt("return", res.status(400).end());

          case 6:
            res.status(200).json({
              data: doc
            });
            _context19.next = 12;
            break;

          case 9:
            _context19.prev = 9;
            _context19.t0 = _context19["catch"](0);
            res.status(400).end();

          case 12:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[0, 9]]);
  }));

  return function getOneById(_x43, _x44) {
    return _ref19.apply(this, arguments);
  };
}();

exports.getOneById = getOneById;

var createOrUpdatePrice = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(Model, commodityCode, price, owner) {
    var createdBy, doc;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            createdBy = owner;
            _context20.next = 3;
            return Model.findOneAndUpdate({
              commodityCode: commodityCode
            }, {
              $set: {
                commodityCode: commodityCode,
                price: price,
                createdBy: createdBy
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context20.sent;
            return _context20.abrupt("return", doc);

          case 5:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function createOrUpdatePrice(_x45, _x46, _x47, _x48) {
    return _ref20.apply(this, arguments);
  };
}();

exports.createOrUpdatePrice = createOrUpdatePrice;

var createOne = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(Model, data, owner) {
    var createdBy, doc;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            createdBy = owner;
            _context21.next = 3;
            return Model.create(_objectSpread(_objectSpread({}, data), {}, {
              createdBy: createdBy
            })) //const user = newUser
            //.toObject({ versionKey: false })
            . //const user = newUser
            //.toObject({ versionKey: false })
            then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context21.sent;
            return _context21.abrupt("return", doc);

          case 5:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function createOne(_x49, _x50, _x51) {
    return _ref21.apply(this, arguments);
  };
}();

exports.createOne = createOne;

var createOneCommodity = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(Model, data) {
    var doc;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return Model.create(_objectSpread({}, data)) //const user = newUser
            //.toObject({ versionKey: false })
            . //const user = newUser
            //.toObject({ versionKey: false })
            then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context22.sent;
            return _context22.abrupt("return", doc);

          case 4:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function createOneCommodity(_x52, _x53) {
    return _ref22.apply(this, arguments);
  };
}();

exports.createOneCommodity = createOneCommodity;

var updateOne = function updateOne(model) {
  return /*#__PURE__*/function () {
    var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res) {
      var updatedDoc;
      return _regenerator["default"].wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.prev = 0;
              _context23.next = 3;
              return model.findOneAndUpdate({
                createdBy: req.user._id,
                _id: req.params.id
              }, req.body, {
                "new": true
              }).lean().exec();

            case 3:
              updatedDoc = _context23.sent;

              if (updatedDoc) {
                _context23.next = 6;
                break;
              }

              return _context23.abrupt("return", res.status(400).end());

            case 6:
              res.status(200).json({
                data: updatedDoc
              });
              _context23.next = 12;
              break;

            case 9:
              _context23.prev = 9;
              _context23.t0 = _context23["catch"](0);
              res.status(400).end();

            case 12:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23, null, [[0, 9]]);
    }));

    return function (_x54, _x55) {
      return _ref23.apply(this, arguments);
    };
  }();
};

exports.updateOne = updateOne;

var createIfExists = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(Model, data) {
    var username, doc;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            username = data.username;
            _context24.next = 3;
            return Model.updateOne({
              username: username
            }, {
              $setOnInsert: _objectSpread({}, data)
            }, {
              upsert: true,
              "new": true
            }).then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context24.sent;
            return _context24.abrupt("return", doc);

          case 5:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));

  return function createIfExists(_x56, _x57) {
    return _ref24.apply(this, arguments);
  };
}();

exports.createIfExists = createIfExists;

var elevateAccount = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(Model, data) {
    var adminId, isVerified, roles, doc;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            adminId = data.adminId, isVerified = data.isVerified, roles = data.roles;
            _context25.next = 3;
            return Model.findOneAndUpdate({
              _id: adminId
            }, {
              $set: {
                isVerified: isVerified,
                roles: roles
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context25.sent;
            return _context25.abrupt("return", doc);

          case 5:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));

  return function elevateAccount(_x58, _x59) {
    return _ref25.apply(this, arguments);
  };
}();

exports.elevateAccount = elevateAccount;

var getManyAdmin = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(Model) {
    var docs;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.next = 2;
            return Model.find().select('-__v -password -blockchainAcct -blockchainPwd').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            docs = _context26.sent;
            return _context26.abrupt("return", docs);

          case 4:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));

  return function getManyAdmin(_x60) {
    return _ref26.apply(this, arguments);
  };
}();

exports.getManyAdmin = getManyAdmin;

var getAdminList = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(Model) {
    var docs;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.next = 2;
            return Model.find({
              role: 'admin'
            }).select('-__v -password -blockchainAcct -blockchainPwd').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            docs = _context27.sent;
            return _context27.abrupt("return", docs);

          case 4:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));

  return function getAdminList(_x61) {
    return _ref27.apply(this, arguments);
  };
}();

exports.getAdminList = getAdminList;

var getOneAdminByEmail = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(Model, username) {
    var doc;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.next = 2;
            return Model.findOne({
              username: username
            }).select('-__v -blockchainPwd -blockchainAcct').exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context28.sent;
            return _context28.abrupt("return", doc);

          case 4:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));

  return function getOneAdminByEmail(_x62, _x63) {
    return _ref28.apply(this, arguments);
  };
}();

exports.getOneAdminByEmail = getOneAdminByEmail;

var getManyLoanWithPopulate = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(Model, populateStr) {
    var docs;
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.next = 2;
            return Model.find().select('loans').populate(populateStr).lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            docs = _context29.sent;
            return _context29.abrupt("return", docs);

          case 4:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  }));

  return function getManyLoanWithPopulate(_x64, _x65) {
    return _ref29.apply(this, arguments);
  };
}();

exports.getManyLoanWithPopulate = getManyLoanWithPopulate;

var createLoanTransfer = /*#__PURE__*/function () {
  var _ref30 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(Model, data) {
    var doc;
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.next = 2;
            return Model.create(_objectSpread({}, data)) //const user = newUser
            //.toObject({ versionKey: false })
            . //const user = newUser
            //.toObject({ versionKey: false })
            then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context30.sent;
            return _context30.abrupt("return", doc);

          case 4:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));

  return function createLoanTransfer(_x66, _x67) {
    return _ref30.apply(this, arguments);
  };
}();

exports.createLoanTransfer = createLoanTransfer;

var updateUserProfile = /*#__PURE__*/function () {
  var _ref31 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(Model, data, _id) {
    var doc;
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _context31.next = 2;
            return Model.findOneAndUpdate({
              _id: _id
            }, {
              $set: _objectSpread({}, data)
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context31.sent;
            return _context31.abrupt("return", doc);

          case 4:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31);
  }));

  return function updateUserProfile(_x68, _x69, _x70) {
    return _ref31.apply(this, arguments);
  };
}();

exports.updateUserProfile = updateUserProfile;

var updatePassword = /*#__PURE__*/function () {
  var _ref32 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(Model, data) {
    var _id, password, doc;

    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _id = data._id, password = data.password;
            _context32.next = 3;
            return Model.findOneAndUpdate({
              _id: _id
            }, {
              $set: {
                password: password
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context32.sent;
            return _context32.abrupt("return", doc);

          case 5:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32);
  }));

  return function updatePassword(_x71, _x72) {
    return _ref32.apply(this, arguments);
  };
}();

exports.updatePassword = updatePassword;

var getUserPassword = /*#__PURE__*/function () {
  var _ref33 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(Model, _id) {
    var doc;
    return _regenerator["default"].wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.next = 2;
            return Model.findOne({
              _id: _id
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context33.sent;
            return _context33.abrupt("return", doc);

          case 4:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33);
  }));

  return function getUserPassword(_x73, _x74) {
    return _ref33.apply(this, arguments);
  };
}();

exports.getUserPassword = getUserPassword;

var getUserEmail = /*#__PURE__*/function () {
  var _ref34 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(Model, name) {
    var doc;
    return _regenerator["default"].wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.next = 2;
            return Model.findOne({
              name: name
            }).select('email oneWalletAcctNo').exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context34.sent;
            return _context34.abrupt("return", doc);

          case 4:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34);
  }));

  return function getUserEmail(_x75, _x76) {
    return _ref34.apply(this, arguments);
  };
}();

exports.getUserEmail = getUserEmail;

var updateLockCount = /*#__PURE__*/function () {
  var _ref35 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee35(Model, data) {
    var lockCount, email, doc;
    return _regenerator["default"].wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            lockCount = data.lockCount, email = data.email;
            _context35.next = 3;
            return Model.findOneAndUpdate({
              email: email
            }, {
              $set: {
                lockCount: lockCount
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context35.sent;
            return _context35.abrupt("return", doc);

          case 5:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35);
  }));

  return function updateLockCount(_x77, _x78) {
    return _ref35.apply(this, arguments);
  };
}();

exports.updateLockCount = updateLockCount;

var getUserListedCommodities = /*#__PURE__*/function () {
  var _ref36 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee36(Model, data) {
    var grade, commodityCode, warehouseCode, clientId, docs;
    return _regenerator["default"].wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            grade = data.grade, commodityCode = data.commodityCode, warehouseCode = data.warehouseCode, clientId = data.clientId;
            _context36.next = 3;
            return Model.find({
              grade: grade,
              commodityCode: commodityCode,
              warehouseCode: warehouseCode,
              clientId: clientId
            }).select('volume').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            docs = _context36.sent;
            return _context36.abrupt("return", docs);

          case 5:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  }));

  return function getUserListedCommodities(_x79, _x80) {
    return _ref36.apply(this, arguments);
  };
}();

exports.getUserListedCommodities = getUserListedCommodities;

var createOrUpdateUser = /*#__PURE__*/function () {
  var _ref37 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee37(Model, commodityCode, price, owner) {
    var createdBy, doc;
    return _regenerator["default"].wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            createdBy = owner;
            _context37.next = 3;
            return Model.findOneAndUpdate({
              commodityCode: commodityCode
            }, {
              $set: {
                commodityCode: commodityCode,
                price: price,
                createdBy: createdBy
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context37.sent;
            return _context37.abrupt("return", doc);

          case 5:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37);
  }));

  return function createOrUpdateUser(_x81, _x82, _x83, _x84) {
    return _ref37.apply(this, arguments);
  };
}();

exports.createOrUpdateUser = createOrUpdateUser;

var updateUserUnlock = /*#__PURE__*/function () {
  var _ref38 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee38(Model, data) {
    var _id, email, doc;

    return _regenerator["default"].wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _id = data._id, email = data.email;
            _context38.next = 3;
            return Model.findOneAndUpdate({
              _id: _id,
              email: email
            }, {
              $set: {
                lockCount: '0'
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            doc = _context38.sent;
            return _context38.abrupt("return", doc);

          case 5:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38);
  }));

  return function updateUserUnlock(_x85, _x86) {
    return _ref38.apply(this, arguments);
  };
}();

exports.updateUserUnlock = updateUserUnlock;

var getOneLoanWithPopulate = /*#__PURE__*/function () {
  var _ref39 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee39(Model, _id, referenceId) {
    var docs;
    return _regenerator["default"].wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            _context39.next = 2;
            return Model.findById({
              _id: _id
            }).populate({
              path: 'user',
              match: {
                loanSummary: {
                  $elemMatch: {
                    referenceId: referenceId
                  }
                }
              },
              select: 'loanSummary'
            }).select('-password').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            docs = _context39.sent;
            return _context39.abrupt("return", docs);

          case 4:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39);
  }));

  return function getOneLoanWithPopulate(_x87, _x88, _x89) {
    return _ref39.apply(this, arguments);
  };
}();

exports.getOneLoanWithPopulate = getOneLoanWithPopulate;

var updateLoanStatus = /*#__PURE__*/function () {
  var _ref40 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee40(Model, referenceId) {
    var doc;
    return _regenerator["default"].wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            _context40.next = 2;
            return Model.updateOne({
              referenceId: referenceId
            }, {
              $set: {
                status: 'paid'
              }
            }, {
              upsert: true,
              "new": true
            }).select('-__v').lean().exec().then(function (result) {
              return result;
            })["catch"](function (error) {
              return error;
            });

          case 2:
            doc = _context40.sent;
            return _context40.abrupt("return", doc);

          case 4:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40);
  }));

  return function updateLoanStatus(_x90, _x91) {
    return _ref40.apply(this, arguments);
  };
}();

exports.updateLoanStatus = updateLoanStatus;

var crudControllers = function crudControllers(model) {
  return {
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model)
  };
};

exports.crudControllers = crudControllers;