"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cruds = require("../../utils/cruds");

var _category = require("./category.model");

var _default = (0, _cruds.crudControllers)(_category.Category);

exports["default"] = _default;