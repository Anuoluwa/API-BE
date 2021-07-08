"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var validateEmail = function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

var _default = validateEmail;
exports["default"] = _default;