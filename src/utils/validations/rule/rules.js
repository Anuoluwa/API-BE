/**
 * nameRule function constraint can be used to create constraints for any user name field
 * @param {string} name - This is the field to validate
 * @returns {object} constraint
 */
export const nameRule = (name) => ({
  [name]: {
    presence: true,
    length: {
      minimum: 2
    }
  }
});

export const emailRule = {
  email: {
    presence: true,
    email: true
  }
};

export const passwordRule = (pwd) => ({
  [pwd]: {
    presence: true,
    length: {
      minimum: 8,
      maximum: 24
    }
  }
});

export const phoneNumberRule = {
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

export const userTypeRule = (type) => ({
  [type]: {
    presence: true,
    format: {
      pattern: '^(trader|buyer)$'
    }
  }
});

export const bvnRule = {
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

export const passwordResetRule = {
  token: {
    presence: true,
    length: { minimum: 5 }
  },
  email: {
    presence: true,
    email: true
  },
  newPassword: {
    presence: true,
    length: { minimum: 8 }
  }
};

export const getPasswordResetRule = {
  token: {
    presence: true,
    length: { minimum: 5 }
  },
  email: {
    presence: true,
    email: true
  }
};

export const verifyAccountRule = {
  businessName: {
    presence: true,
    length: { minimum: 2 }
  },

  accountNumber: {
    presence: true,
    length: {
      minimum: 6,
      maximum: 10
    }
  }
};

export const addressRule = {
  address: {
    presence: true,
    length: {
      minimum: 3
    }
  }
};

export const descriptionRule = (text) => ({
  [text]: {
    presence: true,
    length: {
      minimum: 2
    },
    format: {
      pattern: '^[A-Za-z0-9 !./,"\'-()+]+$',
      message: `The ${text} should contain only text and numbers.`
    }
  }
});

export const urlLinkRule = (url) => ({
  [url]: { url: true }
});

export const idRule = (id) => ({
  [id]: {
    presence: true,
    format: {
      pattern: '^[0-9]+$'
    }
  }
});

export const rcNumberRule = {
  rcNumber: {
    presence: { allowEmpty: false },
    format: {
      pattern: '^(RC|BN)( )*\\d+$'
    }
  }
};

const numberFormat = { format: { pattern: '^[0-9]+$' } };

export const booleanInput = (filedName) => ({
  [filedName]: {
    format: {
      pattern: '^(true|false)$'
    }
  }
});

export const booleanRule = (bool) => ({
  [bool]: {
    format: {
      pattern: '^(true|false)$'
    }
  }
});

export const autoField = (key) => ({
  [key]: {
    presence: false,
    length: {
      minimum: 0
    }
  }
});

export const adminUserTypeRule = {
  userType: {
    presence: true,
    format: {
      pattern: '^(authorizer|partner|auditor|lender)$'
    }
  }
};

////  tokenization validation

export const numberRule = (fieldName) => ({
  [fieldName]: {
    presence: true,
    format: {
      pattern: '^[0-9]+$',
      message: 'must be a number'
    },
    length: {
      minimum: 1
    }
  }
});

export const gradeRule = (fieldName) => ({
  [fieldName]: {
    presence: true,
    length: {
      minimum: 1,
      maximum: 4
    }
  }
});

export const itemRule = {
  item_code: {
    presence: true,
    length: {
      minimum: 1
    }
  }
};

export const dateRule = (dateField) => ({
  [dateField]: {
    presence: true,
    datetime: {
      dateOnly: true,
      message: 'date must be in this format YYYY-MM-DD'
    }
  }
});

export const loanTenor = {
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

export const loanApplicationValidation = {
  // "customerNumber":"13872900",
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
