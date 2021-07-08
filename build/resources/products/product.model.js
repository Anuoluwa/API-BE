"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

_mongoose["default"].set('useCreateIndex', true);

var productSchema = new _mongoose["default"].Schema({
  productName: {
    type: String,
    lowercase: true,
    required: [true, 'Category  is required'],
    trim: true
  },
  composition: {
    type: String,
    lowercase: true,
    required: [true, 'composition is required'],
    trim: true
  },
  approvedProductNo: {
    type: String,
    lowercase: true,
    required: [true, 'Approved Number is required'],
    trim: true
  },
  expirationDate: {
    type: Date,
    lowercase: true,
    required: [true, 'Date  is required'],
    trim: true,
    min: '2021-01-28'
  },
  costPerUnit: {
    type: String,
    lowercase: true,
    trim: true
  },
  category: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "category"
  },
  supplier: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "supplier"
  },
  productPhotoURL: {
    type: String,
    trim: true
  },
  createdBy: {
    type: _mongoose["default"].SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  }
}, {
  timestamps: true
});

var Product = _mongoose["default"].model('product', productSchema);

exports.Product = Product;