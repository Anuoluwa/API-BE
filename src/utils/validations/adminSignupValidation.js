import validate from 'validate.js';
import { phoneNumberRule, emailRule, passwordRule, adminUserTypeRule } from './rule/rules';
import { failure } from '../../helpers/response';

const newAdminRule = {
  ...emailRule,
  ...passwordRule,
  ...phoneNumberRule,
  ...adminUserTypeRule
};

const adminSignupValidation = (req, res, next) => {
  const { body } = req;
  const adminSignupValidationError = validate(body, newAdminRule);
  if (adminSignupValidationError) {
    return failure(422, adminSignupValidationError, res);
  }
  return next();
};

export default adminSignupValidation;
