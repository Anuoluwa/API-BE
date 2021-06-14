import { User } from '../users/userModel';
import { newToken, verifyToken } from '../../middlewares/authMiddleware';
import { success, failure, createError } from '../../helpers/response';
import { sendPasswordRecoveryMail, saveToken, checkValidToken } from './passwordService';
import { updateIsVerified } from '../../middlewares/authMiddleware';
import { getToken } from './verificationService';
import {
  removeOne,
  updateUserPassword,
  getOneByEmailUser,
  updateRecoveryToken
} from '../../utils/crud';
import { Token } from './verificationModel';
import { PasswordRecovery } from './passwordModel';
import bcrypt from 'bcryptjs';
//import { sendEmailNotification } from '../../helpers/marketHelper/emailNotificationHelper';
import passwordResetTemplate from '../../utils/emailTemplates/passwordReset';
// import passwordResetNotificationTemplate from '../../utils/emailTemplates/passwordResetNotificationTemplate';

export const signup = async (Model, body) => {
  try {
    const newUser = await Model.create(body);
    const user = newUser.toObject({ versionKey: false });
    delete user.password;
    const token = newToken(user);
    return { user, token };
  } catch (err) {
    if (err.message.includes('duplicate key')) {
      const errorItem = err.message.split(' ')[11];
      const item = errorItem.split(':')[0];
      return {
        status: 409,
        error: `duplicates error: ${item} already exists`
      };
    } else {
      const errorItem = err.message.split(':')[2];
      return {
        status: 422,
        error: errorItem
      };
    }
  }
};

export const signin = async (Model, body) => {
  try {
    const user = await User.findOne({ email }).select('email password').exec();

    if (!user) {
      return res.status(401).send(invalid);
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).send(invalid);
    }

    const token = newToken(user);
    return res.status(201).send({ token });
  } catch (e) {
    res.status(500).end();
  }
};

/**
 * check if an email exists and sends password reset
 * @param {object} req request object
 * @param {object} res response object
 * @returns {object}
 */
export const verifyEmail = async (req, res) => {
  const {
    body: { email }
  } = req;
  const user = await User.findOne({ email });
  if (!user) return failure(403, 'Invalid input', res);
  const { id } = user;
  const token = await newToken({ id });
  await saveToken(token, email);
  await sendPasswordRecoveryMail(
    email,
    'no-reply@sabex.ng',
    'SabexNG: Password Reset',
    token,
    email
  );
  return success(res, 200, 'Password reset link sent successfully. Kindly check your email', null);
};

/**
 * Verifies a user through their token
 * @async
 * @method
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {object}
 */
export const verifyAccount = async (req, res) => {
  const { token } = req.query;
  const userToken = await getToken(token);
  if (!userToken) {
    //return failure(401, 'Verification token not found', res);
    return failure(404, { message: 'Invalid input' }, res);
  }
  const { _id } = userToken;
  const verifyUser = await updateIsVerified(_id);

  if (verifyUser == null || !verifyUser) {
    /* return failure(
      400,
      'This account has already been verified',
      res,
    ); */
    return failure(401, { status: false, message: 'user could not be verified' }, res);
  }

  /* return success(res, 200, 'Account verification Successful!', {
    verifyUser,
  }); */

  // const url = `${process.env.FRONTEND_URL_VERFICATION}?status=`;
  // return res.redirect(`${url}verified`);
  return success(res, 200, 'verification successful', {
    status: true
  });
};

export const createSuperAdmin = async () => {
  const newSuperAdmim = await blockchainService.AddSuperAdmin();
};

export const sendVerificationLink = async (req, res) => {
  const { _id, email, isVerified } = req.user;
  if (isVerified == true) {
    return success(res, 200, 'You have already been verified', req.user);
  } else {
    const removeExToken = await removeOne(Token, _id);
    return success(res, 201, 'Verification link sent successfully.', {
      _id,
      email
    });
  }
};

export const passwordReset = async (req, res) => {
  const {
    body: { email, token, newPassword }
  } = req;
  const isTokenValid = await checkValidToken(token, email);

  if (!isTokenValid) {
    return failure(403, 'Password reset link has expired. Kindly generate a new one.', res);
  }
  const hashedPwd = await bcrypt.hash(newPassword, 12);
  await updateUserPassword(User, email, hashedPwd);
  await updateRecoveryToken(PasswordRecovery, email, token);
  return success(res, 200, 'Password changed successfully.', null);
};
