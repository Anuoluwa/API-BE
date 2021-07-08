"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tryCatch = _interopRequireDefault(require("../../helpers/tryCatch"));

var _userControllers = require("./userControllers");

var _authController = require("../auth/authController");

// import { SendOTPassword, VerifyOTPassword } from '../../bankingservices/accounts/acountController';
// import { decryptRequest, decryptRequestParams } from '../../middlewares/decryptMiddleware';
// import { checkWalletAcctExists } from '../../middlewares/userMiddleware';
// import { validateOTPAccount } from '../../middlewares/walletMiddleware';
var router = (0, _express.Router)(); // user registration router is in authRouter

router.get('/me', _userControllers.me);
router.put('/me', _userControllers.updateMe); // router.get('/resend', tryCatch(sendVerificationLink));
// router.get('/', tryCatch(getOneUserById));
// router.post('/sendotp', validateOTPAccount, tryCatch(SendOTPassword));
// router.post('/verifyotp', validateOTPAccount, tryCatch(VerifyOTPassword));
// router.patch('/password', tryCatch(updateUSerPassword));
// router.patch('/', tryCatch(updateUser));

var _default = router;
exports["default"] = _default;