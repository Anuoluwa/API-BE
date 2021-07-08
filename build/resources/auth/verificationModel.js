"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Token = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var tokenSchema = new _mongoose["default"].Schema({
  _id: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now,
    expires: 43200
  }
});

var Token = _mongoose["default"].model('token', tokenSchema);

exports.Token = Token;