import { Router } from 'express';
import tryCatch from '../../helpers/tryCatch';
import {
  me,
  updateMe,
  getOneUserById,
  updateUser,
  updateUSerPassword
} from './userControllers';
import { sendVerificationLink } from '../auth/authController';
// import { SendOTPassword, VerifyOTPassword } from '../../bankingservices/accounts/acountController';
// import { decryptRequest, decryptRequestParams } from '../../middlewares/decryptMiddleware';
// import { checkWalletAcctExists } from '../../middlewares/userMiddleware';
// import { validateOTPAccount } from '../../middlewares/walletMiddleware';

const router = Router();
// user registration router is in authRouter
router.get('/me', me);
router.put('/me', updateMe);
// router.get('/resend', tryCatch(sendVerificationLink));
// router.get('/', tryCatch(getOneUserById));
// router.post('/sendotp', validateOTPAccount, tryCatch(SendOTPassword));
// router.post('/verifyotp', validateOTPAccount, tryCatch(VerifyOTPassword));
// router.patch('/password', tryCatch(updateUSerPassword));
// router.patch('/', tryCatch(updateUser));

export default router;
