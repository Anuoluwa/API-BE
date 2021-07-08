"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tryCatch = _interopRequireDefault(require("../../helpers/tryCatch"));

var _supplier = _interopRequireDefault(require("./supplier.controller"));

var router = (0, _express.Router)(); // user registration router is in authRouter
// /api/list

router.route('/').get(_supplier["default"].getAllMany) //.get(controllers.getOne)
.post(_supplier["default"].createOne); // /api/list/:id

router.route('/:id').get(_supplier["default"].getOneProductWithCategory).put(_supplier["default"].updateOne)["delete"](_supplier["default"].removeOne);
var _default = router;
exports["default"] = _default;