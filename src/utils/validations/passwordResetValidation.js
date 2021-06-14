import validate from 'validate.js';
import { emailRule, passwordRule } from './rule/rules';
import { failure } from '../../helpers/response';

export default (req, res, next) => {
  const { body } = req;
  const passwordResetConstraint = {
    ...emailRule,
    ...passwordRule('newPassword')
  };
  const validationError = validate(body, passwordResetConstraint);
  if (validationError) {
    return failure(422, validationError, res);
  }
  return next();
};
