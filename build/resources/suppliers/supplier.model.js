"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Supplier = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

_mongoose["default"].set('useCreateIndex', true);

var supplierSchema = new _mongoose["default"].Schema({
  supplierName: {
    type: String,
    lowercase: true,
    required: [true, 'name field is required'],
    trim: true
  },
  mobile: {
    type: String,
    lowercase: true,
    required: [true, 'mobile field is required'],
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'email field is required'],
    trim: true
  },
  location: {
    type: String,
    lowercase: true,
    trim: true
  },
  address: {
    type: String,
    lowercase: true,
    required: [true, 'address field is required'],
    trim: true
  },
  url: {
    type: String,
    lowercase: true,
    trim: true
  },
  isVerified: {
    type: Boolean,
    "default": false
  },
  supplierRep: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "user"
  }],
  createdBy: {
    type: _mongoose["default"].SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  }
}, {
  timestamps: true
});

var Supplier = _mongoose["default"].model('supplier', supplierSchema);

exports.Supplier = Supplier;