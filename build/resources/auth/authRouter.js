"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tryCatch = _interopRequireDefault(require("../../helpers/tryCatch"));

var _userControllers = require("../users/userControllers");

var _authController = require("./authController");

var _authMiddleware = require("../../middlewares/authMiddleware");

var _userSignupValidation = _interopRequireDefault(require("../../utils/validations/userSignupValidation"));

var _loginValidation = _interopRequireDefault(require("../../utils/validations/loginValidation"));

var _passwordResetValidation = _interopRequireDefault(require("../../utils/validations/passwordResetValidation"));

var router = (0, _express.Router)();
router.post('/signup', //userSignupValidation,
(0, _tryCatch["default"])(_userControllers.createUserAccount));
router.post('/login', // loginValidation, 
(0, _tryCatch["default"])(_userControllers.login));
router.post('/verify-email', (0, _tryCatch["default"])(_authController.verifyEmail)); // router.get('/verify', tryCatch(verifyAccount));
// router.patch(
//   '/password',
//   passwordResetValidation,
//   checkOldPassword,
//   tryCatch(passwordReset)
// );

var _default = router;
exports["default"] = _default;