"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cruds = require("../../utils/cruds");

var _supplier = require("./supplier.model");

var _default = (0, _cruds.crudControllers)(_supplier.Supplier);

exports["default"] = _default;