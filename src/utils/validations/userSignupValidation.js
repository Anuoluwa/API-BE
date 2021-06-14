import validate from 'validate.js';
import {
  nameRule,
  emailRule,
  passwordRule,
  phoneNumberRule,
  addressRule,
  bvnRule
} from './rule/rules';
import { failure } from '../../helpers/response';

export default (req, res, next) => {
  const { body } = req;
  const signupConstraint = {
    ...nameRule('name'),
    ...emailRule,
    ...passwordRule,
    ...phoneNumberRule,
    ...addressRule,
    ...bvnRule
  };
  let validationError = validate(body, signupConstraint);

  if (validationError === undefined) validationError = {};

  if (Object.keys(validationError).length > 0) {
    return failure(422, validationError, res);
  }
  return next();
};
