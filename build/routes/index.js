"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.app = void 0;

var _express = _interopRequireWildcard(require("express"));

var _authRouter = _interopRequireDefault(require("../resources/auth/authRouter"));

var _authMiddleware = require("../middlewares/authMiddleware");

var _userRouter = _interopRequireDefault(require("../resources/users/userRouter"));

var _category = _interopRequireDefault(require("../resources/categories/category.router"));

var _product = _interopRequireDefault(require("../resources/products/product.router"));

var _supplier = _interopRequireDefault(require("../resources/suppliers/supplier.router"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
exports.app = app;
var router = (0, _express.Router)();
router.use('/users', _userRouter["default"]);
router.use('/auth', _authRouter["default"]);
router.use('/categories', _category["default"]);
router.use('/products', _product["default"]);
router.use('/suppliers', _supplier["default"]);
var _default = router;
exports["default"] = _default;