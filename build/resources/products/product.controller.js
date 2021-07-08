"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cruds = require("../../utils/cruds");

var _product = require("./product.model");

var _default = (0, _cruds.crudControllers)(_product.Product);

exports["default"] = _default;