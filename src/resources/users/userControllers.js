import crypto from 'crypto-random-string';
import { signup } from '../auth/authController';
import { success, failure } from '../../helpers/response';
import { saveToken } from '../auth/verificationService';
import { generatePwd, newToken } from '../../middlewares/authMiddleware';
import { User } from './userModel';
import {
  getOneByEmail,
  getOne,
  getMany,
  getUserPassword,
  updatePassword,
  updateUserProfile,
  updateLockCount,
  updateUserUnlock
} from '../../utils/crud';
import { getAllCustomersWithoutLoans } from './user';
import bcrypt from 'bcryptjs';
//import { sendEmailNotification } from '../../helpers/marketHelper/emailNotificationHelper';
import passwordChange from '../../utils/emailTemplates/passwordChange';
import { logger } from '../../logger/logger';

/**
 * @name export.const.createUserAccount = async (req, res)
 * @description This provides the logic for user account signup as part of user onboarding
 * @param {string} req: body{ name, email, password, address, bvn, phone, rcNumber, userType}
 * @param {string} res: returns user details with token
 * @returns {object{}} object with details of the user
 */
// export const createUserAccount = async (req, res) => {
//   const {
//     body: { name, email, password, phone, rcNumber, userType, address }
//   } = req;

//   const {
//     bvn: { Bvn, FirstName, LastName, PhoneNumber }
//   } = req;

//   // platform registers details on db
//   const newUserDetails = {
//     name,
//     email,
//     password,
//     phone: PhoneNumber,
//     rcNumber,
//     userType,
//     address,
//     bvn: Bvn,
//     blockchainAcct: proof,
//     blockchainPwd: hashedPwd,
//     clientId: cid
//   };

//   const newUser = await signup(User, newUserDetails);
//   if (newUser.error) {
//     return failure(409, `${newUser.error}`, res);
//   }

//   const {
//     user: { _id, email: userEmail }
//   } = newUser;

//   // const emailNotification = await verificationService.saveToken({
//   //   _id,
//   //   userEmail,
//   //   subject: 'SterlingAgro Account Verification',
//   //   from: 'no-reply@sterling.ng'
//   // });

//   const user = newUser.user;

//   return success(res, 201, 'user account successfully created.', data);
// };

// export const login = async (req, res) => {
//   const { body } = req;
//   const { email, password } = body;
//   const user = await getOneByEmail(User, email);
//   //const { isVerified, _id, blockchainAcct } = user;
//   if (user === null) {
//     return failure(401, 'Invalid email or password!', res);
//   }

//   if (user.isVerified === false) {
//     return failure(
//       401,
//       'Account not verified, check your email for account verification link',
//       res
//     );
//   }

//   // if (user.lockCount > 2) {
//   //   return failure(
//   //     401,
//   //     'After 3 failed password attempts, you account has been locked.Please contact admin',
//   //     res
//   //   );
//   // }

//   // const validPassword = await user.checkPassword(password);

//   // if (!validPassword) {
//   //   let count = Number(user.lockCount) + 1;
//   //   const data = {
//   //     lockCount: count.toString(),
//   //     email: user.email
//   //   };
//   //   const result = await updateLockCount(User, data);
//   //   if (Number(result.lockCount) >= 3) {
//   //     return failure(404, 'Account locked, contact admin', res);
//   //   }

//   //   return failure(404, 'Invalid email or password', res);
//   // }

//   const token = newToken(user);
//   user.password = undefined;

//   return success(res, 200, 'Login successful', {
//     userDetails: userInfo,
//     token
//   });
// };

// export const getOneUserById = async (req, res) => {
//   const { _id } = req.user;
//   const user = await getOne(User, _id);
//   logger.info('The Request received >> ', user);

//   const decryptedUser = {
//     roles: appEncryptToken(user.roles),
//     userType: appEncryptToken(user.userType),
//     isVerified: appEncryptToken(user.isVerified.toString()),
//     name: appEncryptToken(user.name),
//     email: appEncryptToken(user.email),
//     phone: appEncryptToken(user.phone),
//     rcNumber: appEncryptToken(user.rcNumber),
//     address: appEncryptToken(user.address),
//     bvn: appEncryptToken(user.bvn),
//     clientId: appEncryptToken(user.clientId)
//   };

//   if (req.user.oneWalletAcctNo !== undefined && req.user.oneWalletAcctNo !== '') {
//     const walletInfo = await getFullWalletDetails(req.user.oneWalletAcctNo);
//     if (walletInfo.data) {
//       return success(res, 200, 'Operation successful', {
//         decryptedUser,
//         userWallet: walletInfo.data.data
//       });
//     } else {
//       return success(res, 200, 'Operation successful', {
//         decryptedUser
//       });
//     }
//   } else {
//     return success(res, 200, 'Operation successful', {
//       decryptedUser
//     });
//   }
// };
// /**
//  * @name export.const.getAllCustomers = async (req, res)
//  * @description This is for all customers/users with or without loans
//  * @param {string} req: body{ name, email, password, address, bvn, phone, rcNumber, userType}
//  * @param {string} res: returns user details with token
//  * @returns {object{}} object with details of the user
//  */
// export const getAllCustomers = async (req, res) => {
//   const allCustomers = await getAllCustomersWithoutLoans(User);
//   const encryptedCustomersList = await allCustomers.foreach(async (customer) => {
//     let result = await appEncryptObject(customer);
//     return result;
//   });
//   logger.info('The Request received >> ', encryptedCustomersList);
//   return success(res, 200, 'operation successful', encryptedCustomersList);
// };

// export const getAUserAdmin = async (req, res) => {
//   const { id: _id } = req.body;
//   const user = await getOne(User, _id);
//   if (user == null || !user) {
//     return failure(404, 'User does not exist', res);
//   }

//   const decryptedUser = {
//     roles: appEncryptToken(user.roles),
//     userType: appEncryptToken(user.userType),
//     isVerified: appEncryptToken(user.isVerified.toString()),
//     name: appEncryptToken(user.name),
//     email: appEncryptToken(user.email),
//     phone: appEncryptToken(user.phone),
//     rcNumber: appEncryptToken(user.rcNumber),
//     address: appEncryptToken(user.address),
//     bvn: appEncryptToken(user.bvn),
//     clientId: appEncryptToken(user.clientId),
//     oneWalletAcctNo: appEncryptToken(user.oneWalletAcctNo)
//   };
//   logger.info('The Request received >> ', user);
//   return success(res, 200, 'Operation successful', {
//     decryptedUser
//   });
// };

// export const updateUser = async (req, res) => {
//   logger.info('The Request received >> ', req.body);
//   const data = {
//     ...req.body
//   };
//   const updatedDoc = await updateUserProfile(User, data, req.user._id);
//   const updatedUserInfo = {
//     name: updatedDoc.name,
//     address: updatedDoc.address,
//     rcNumber: updatedDoc.rcNumber
//   };
//   return success(res, 200, 'Operation successful', {
//     message: 'User profile updated successfully'
//   });
// };

// export const updateUSerPassword = async (req, res) => {
//   const { userId, password: newPassword } = req.body;
//   const user = await getUserPassword(User, req.user._id);
//   const currentPassword = user.password;
//   const comparePwd = await bcrypt.compare(newPassword, currentPassword);
//   if (comparePwd) {
//     return failure(422, 'Kindly enter a new password', res);
//   }
//   const hashedPwd = await bcrypt.hash(newPassword, 12);
//   const data = {
//     _id: req.user._id,
//     password: hashedPwd
//   };
//   const updatedDoc = await updatePassword(User, data);
//   if (hashedPwd == updatedDoc.password) {
//     //
//     return success(res, 200, 'Operation successful', { message: 'Password updated successfully' });
//   }
//   return failure(422, 'Operation unsuccessful', res);
// };

// export const unlockUser = async (req, res) => {
//   const { id: _id, email } = req.body;
//   const data = {
//     _id,
//     email
//   };
//   const updatedProfile = await updateUserUnlock(User, data);
//   if (updatedProfile.lockCount === '0') {
//     const data = {
//       name: updatedProfile.name,
//       email: updatedProfile.email
//     };
//     return success(res, 200, `User account unlocked successfully`, data);
//   } else {
//     return failure(400, 'Operation unsuccessful', res);
//   }
// };

export const me = (req, res) => {
  res.status(200).json({ data: req.user})
}

export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
      .lean()
      .exec()

    res.status(200).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}