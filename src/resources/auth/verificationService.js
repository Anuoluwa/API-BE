import crypto from 'crypto-random-string';
import dotenv from 'dotenv';
import { Token } from './verificationModel';
import emailTemplate from '../../utils/emailTemplates/newRegistration';
// import { sendMail } from '../../bankingservices/emailServices/emailService';

dotenv.config();

/**
 * saves user verification token.
 * @param {string} to - recipient's email address
 * @param {string} from - no-reply
 * @param {string} subject - email subject
 * @param {string} token - verification token
 * @returns {object} Response
 */
const sendVerificationEmail = async (to, from, desubject, token) => {
  const link = `${process.env.EMAIL_VERIFICATION}/#/auth/signup/verifyemail?token=${token}`;
  const body = emailTemplate(link);
  const email = {
    recipient: to,
    sender: from,
    subject: desubject,
    emailBody: body
  };
  //const sentMail = await sendMail(email);
  return sentMail;
};

export const saveToken = async (data) => {
  const verifyToken = crypto({ length: 16, type: 'url-safe' });
  const { _id, userEmail, subject, from } = data;
  const tokenBody = { _id: _id, token: verifyToken };
  // eslint-disable-next-line no-unused-vars
  const saveUserToken = await Token.create(tokenBody);
  // eslint-disable-next-line no-unused-vars
  const sentEmail = await sendVerificationEmail(userEmail, from, subject, verifyToken);
  return { Token: saveUserToken };
};

export const getToken = async (sentToken) => {
  const userToken = await Token.findOne({ token: `${sentToken}` })
    .then((result) => result)
    .catch((error) => error);
  return userToken;
};
