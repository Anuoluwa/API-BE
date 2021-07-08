"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tryCatch = _interopRequireDefault(require("../../helpers/tryCatch"));

var _product = _interopRequireDefault(require("./product.controller"));

var _productImage = _interopRequireDefault(require("./productImage.controller"));

var router = (0, _express.Router)(); // user registration router is in authRouter
// /api/list

router.route('/').get(_product["default"].getAllMany) //.get(controllers.getOne)
.post(_product["default"].createOne); // /api/list/:id

router.route('/:id').get(_product["default"].getOneProductWithCategory).put(_product["default"].updateOne)["delete"](_product["default"].removeOne).post(_productImage["default"]);
var _default = router;
exports["default"] = _default;