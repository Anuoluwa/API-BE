import validate from 'validate';
import { dateRule, loanTenor, numberRule } from './rule/rules';

const loanApplicationConstraints = {
  ...numberRule('loanAmount'),
  ...numberRule('customerAccount'),
  ...numberRule('"customerNumber'),
  ...loanTenor,
  ...numberRule('dayOfMonth'),
  ...dateRule('repaymentDay'),
  ...dateRule('proposalDate'),
  ...dateRule('approvalDate'),
  ...dateRule('expiryDate'),
  ...dateRule('disbursementDate'),
  ...dateRule('startDateInterestOnlyRepayment'),
  ...dateRule('endDateInterestOnlyRepayment'),
  ...dateRule('drawdownDate')
};

const loanApplicationValidation = (req, res, next) => {
  const { body } = req;
  const loanApplicationValidationError = validate(body, loanApplicationConstraints);
  if (loanApplicationValidationError) {
    return failure(422, loanApplicationValidationError, res);
  }
};

export default loanApplicationValidation;
