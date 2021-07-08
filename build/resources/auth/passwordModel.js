"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordRecovery = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

_mongoose["default"].set('useCreateIndex', true);

var passwordRecoverySchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  token: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  isValid: {
    type: Boolean,
    "default": true
  } //createdAt: { type: Date, expires: 600, default: Date.now }

}, {
  timestamps: true
});
passwordRecoverySchema.index({
  createdAt: 1
}, {
  expireAtAfterSeconds: 600
});

var PasswordRecovery = _mongoose["default"].model('passwordrecovery', passwordRecoverySchema); // createdAt: {
//   type: Date,
//   required: true,
//   default: Date.now,
//   expires: 43200
// }


exports.PasswordRecovery = PasswordRecovery;