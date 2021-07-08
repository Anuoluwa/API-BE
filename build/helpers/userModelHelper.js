"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashField = hashField;
exports.checkHashedField = checkHashedField;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function hashField(field, next) {
  var _this = this;

  if (!this.isModified("".concat(field))) {
    return next();
  }

  _bcryptjs["default"].hash(this.field, 8, function (err, hash) {
    if (err) {
      return next(err);
    }

    _this.field = hash;
    next();
  });
}

function checkHashedField(field) {
  var fieldHash = this.field;
  return new Promise(function (resolve, reject) {
    _bcryptjs["default"].compare(field, fieldHash, function (err, same) {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
}