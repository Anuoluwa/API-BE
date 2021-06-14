import validate from 'validate.js';
import { numberRule, gradeRule, itemRule } from './rule/rules';
import { failure } from '../../helpers/response';

const tokenizationRule = {
  ...numberRule('deposit_id'),
  ...numberRule('volume'),
  ...numberRule('warehouse_code'),
  ...gradeRule('hex_grade'),
  ...gradeRule('grade'),
  ...itemRule
};

const tokenizationValidation = (req, res, next) => {
  const { body } = req;
  const tokenizationValidationError = validate(body, tokenizationRule);
  if (tokenizationValidationError) {
    return failure(422, tokenizationValidationError, res);
  }
  return next();
};

export default tokenizationValidation;
