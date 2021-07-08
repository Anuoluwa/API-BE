"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loanApplicationValidation = exports.loanTenor = exports.dateRule = exports.itemRule = exports.gradeRule = exports.numberRule = exports.adminUserTypeRule = exports.autoField = exports.booleanRule = exports.booleanInput = exports.rcNumberRule = exports.idRule = exports.urlLinkRule = exports.descriptionRule = exports.addressRule = exports.verifyAccountRule = exports.getPasswordResetRule = exports.passwordResetRule = exports.bvnRule = exports.userTypeRule = exports.phoneNumberRule = exports.passwordRule = exports.emailRule = exports.nameRule = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * nameRule function constraint can be used to create constraints for any user name field
 * @param {string} name - This is the field to validate
 * @returns {object} constraint
 */
var nameRule = function nameRule(name) {
  return (0, _defineProperty2["default"])({}, name, {
    presence: true,
    length: {
      minimum: 2
    }
  });
};

exports.nameRule = nameRule;
var emailRule = {
  email: {
    presence: true,
    email: true
  }
};
exports.emailRule = emailRule;

var passwordRule = function passwordRule(pwd) {
  return (0, _defineProperty2["default"])({}, pwd, {
    presence: true,
    length: {
      minimum: 8,
      maximum: 24
    }
  });
};

exports.passwordRule = passwordRule;
var phoneNumberRule = {
  phone: {
    presence: true,
    format: {
      pattern: '^[0-9]+$'
    },
    length: {
      minimum: 11,
      maximum: 11
    }
  }
};
exports.phoneNumberRule = phoneNumberRule;

var userTypeRule = function userTypeRule(type) {
  return (0, _defineProperty2["default"])({}, type, {
    presence: true,
    format: {
      pattern: '^(trader|buyer)$'
    }
  });
};

exports.userTypeRule = userTypeRule;
var bvnRule = {
  bvn: {
    presence: true,
    format: {
      pattern: '^[0-9]+$'
    },
    length: {
      minimum: 11,
      maximum: 11
    }
  }
};
exports.bvnRule = bvnRule;
var passwordResetRule = {
  token: {
    presence: true,
    length: {
      minimum: 5
    }
  },
  email: {
    presence: true,
    email: true
  },
  newPassword: {
    presence: true,
    length: {
      minimum: 8
    }
  }
};
exports.passwordResetRule = passwordResetRule;
var getPasswordResetRule = {
  token: {
    presence: true,
    length: {
      minimum: 5
    }
  },
  email: {
    presence: true,
    email: true
  }
};
exports.getPasswordResetRule = getPasswordResetRule;
var verifyAccountRule = {
  businessName: {
    presence: true,
    length: {
      minimum: 2
    }
  },
  accountNumber: {
    presence: true,
    length: {
      minimum: 6,
      maximum: 10
    }
  }
};
exports.verifyAccountRule = verifyAccountRule;
var addressRule = {
  address: {
    presence: true,
    length: {
      minimum: 3
    }
  }
};
exports.addressRule = addressRule;

var descriptionRule = function descriptionRule(text) {
  return (0, _defineProperty2["default"])({}, text, {
    presence: true,
    length: {
      minimum: 2
    },
    format: {
      pattern: '^[A-Za-z0-9 !./,"\'-()+]+$',
      message: "The ".concat(text, " should contain only text and numbers.")
    }
  });
};

exports.descriptionRule = descriptionRule;

var urlLinkRule = function urlLinkRule(url) {
  return (0, _defineProperty2["default"])({}, url, {
    url: true
  });
};

exports.urlLinkRule = urlLinkRule;

var idRule = function idRule(id) {
  return (0, _defineProperty2["default"])({}, id, {
    presence: true,
    format: {
      pattern: '^[0-9]+$'
    }
  });
};

exports.idRule = idRule;
var rcNumberRule = {
  rcNumber: {
    presence: {
      allowEmpty: false
    },
    format: {
      pattern: '^(RC|BN)( )*\\d+$'
    }
  }
};
exports.rcNumberRule = rcNumberRule;
var numberFormat = {
  format: {
    pattern: '^[0-9]+$'
  }
};

var booleanInput = function booleanInput(filedName) {
  return (0, _defineProperty2["default"])({}, filedName, {
    format: {
      pattern: '^(true|false)$'
    }
  });
};

exports.booleanInput = booleanInput;

var booleanRule = function booleanRule(bool) {
  return (0, _defineProperty2["default"])({}, bool, {
    format: {
      pattern: '^(true|false)$'
    }
  });
};

exports.booleanRule = booleanRule;

var autoField = function autoField(key) {
  return (0, _defineProperty2["default"])({}, key, {
    presence: false,
    length: {
      minimum: 0
    }
  });
};

exports.autoField = autoField;
var adminUserTypeRule = {
  userType: {
    presence: true,
    format: {
      pattern: '^(authorizer|partner|auditor|lender)$'
    }
  }
}; ////  tokenization validation

exports.adminUserTypeRule = adminUserTypeRule;

var numberRule = function numberRule(fieldName) {
  return (0, _defineProperty2["default"])({}, fieldName, {
    presence: true,
    format: {
      pattern: '^[0-9]+$',
      message: 'must be a number'
    },
    length: {
      minimum: 1
    }
  });
};

exports.numberRule = numberRule;

var gradeRule = function gradeRule(fieldName) {
  return (0, _defineProperty2["default"])({}, fieldName, {
    presence: true,
    length: {
      minimum: 1,
      maximum: 4
    }
  });
};

exports.gradeRule = gradeRule;
var itemRule = {
  item_code: {
    presence: true,
    length: {
      minimum: 1
    }
  }
};
exports.itemRule = itemRule;

var dateRule = function dateRule(dateField) {
  return (0, _defineProperty2["default"])({}, dateField, {
    presence: true,
    datetime: {
      dateOnly: true,
      message: 'date must be in this format YYYY-MM-DD'
    }
  });
};

exports.dateRule = dateRule;
var loanTenor = {
  tenor: {
    presence: true,
    format: {
      pattern: '[0-9]{2}[D]{1}'
    },
    length: {
      minimum: 2
    }
  }
};
exports.loanTenor = loanTenor;
var loanApplicationValidation = {// "customerNumber":"13872900",
  //   "loanAmount":"4500",
  //   "customerAccount":"0066501917",
  //   "tenor":"30D",
  //   "dayOfMonth":"20",
  //   "repaymentDay":"2020-06-30",
  //   "proposalDate":"2020-05-21",
  //   "approvalDate":"2020-05-21",
  //   "expiryDate":"2020-06-30",
  //   "disbursementDate":"2020-05-22",
  //   "startDateInterestOnlyRepayment":"2020-05-22",
  //   "endDateInterestOnlyRepayment":"2020-06-30",
  //   "drawdownDate":"2020-05-21"
};
exports.loanApplicationValidation = loanApplicationValidation;