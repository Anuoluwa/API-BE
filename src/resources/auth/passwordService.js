import { config } from 'dotenv';
import { PasswordRecovery } from './passwordModel';
import passwordResetTemplate from '../../utils/emailTemplates/passwordReset';
import { verifyToken } from '../../middlewares/authMiddleware';
import { findRecovery } from '../../utils/crud';

config();

/**
 * Saves the token to the password recovery table
 * @param {string} token token to be saved password recovery table
 * @param {string} email email associated with the token
 * @returns {object} PasswordRecovery object
 */
export const saveToken = async (token, email) => {
  const recoverPassword = await PasswordRecovery.updateOne(
    { email },
    {
      $set: {
        token,
        email,
        isValid: true
      }
    },
    { upsert: true, new: true }
  ).select('-__v');
  return recoverPassword;
};

/**
 * sends password reset mail
 * @param {string} to - recipient's email address
 * @param {string} from - no-reply
 * @param {string} subject - email subject
 * @param {string} token - verification token
 * @returns {object} sentMail
 */
export const sendPasswordRecoveryMail = async (to, from, subject, token, source) => {
  const link = `${process.env.HOST_URL}/#/auth/password/reset?token=${token}&source=${source}`;
  const body = passwordResetTemplate(link);
  const email = {
    recipient: to,
    sender: from,
    subject,
    emailBody: body
  };
  // const sentMail = await sendMail(email);
  return sentMail;
};

/**
 * Checks if the token is valid
 * @param {object} token token used in processing password change
 * @param {object} email email associated with the token
 * @returns {object} boolean
 */
export const checkValidToken = async (token, email) => {
  const passwordToken = await findRecovery(PasswordRecovery, email, token);
  if (!passwordToken) return false;
  const { token: passwordResetToken } = passwordToken;
  const isTokenValid = await verifyToken(passwordResetToken);
  const { tokenExp } = isTokenValid;
  if (tokenExp) return false;
  return true;
};
