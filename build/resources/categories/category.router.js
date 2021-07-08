"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tryCatch = _interopRequireDefault(require("../../helpers/tryCatch"));

var _category = _interopRequireDefault(require("./category.controller"));

var router = (0, _express.Router)(); // user registration router is in authRouter
// /api/list

router.route('/').get(_category["default"].getMany).post(_category["default"].createOne); // /api/list/:id

router.route('/:id').get(_category["default"].getOne).put(_category["default"].updateOne)["delete"](_category["default"].removeOne);
var _default = router;
exports["default"] = _default;