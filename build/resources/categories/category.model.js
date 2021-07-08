"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

_mongoose["default"].set('useCreateIndex', true);

var categorySchema = new _mongoose["default"].Schema({
  category: {
    type: String,
    lowercase: true,
    required: [true, 'category field is required'],
    trim: true
  },
  description: {
    type: String,
    lowercase: true,
    trim: true
  },
  createdBy: {
    type: _mongoose["default"].SchemaTypes.ObjectId,
    ref: 'user',
    required: [true, 'category field is required']
  }
}, {
  timestamps: true
});

var Category = _mongoose["default"].model('category', categorySchema);

exports.Category = Category;