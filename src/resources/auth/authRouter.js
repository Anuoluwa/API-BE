import { Router } from 'express';
import tryCatch from '../../helpers/tryCatch';
import { createUserAccount, login } from '../users/userControllers';
import { verifyEmail, verifyAccount, passwordReset } from './authController';
import {
  bvnChecker,
  checkExistingValues,
  checkOldPassword
} from '../../middlewares/authMiddleware';
import userSignupValidation from '../../utils/validations/userSignupValidation';
import loginValidation from '../../utils/validations/loginValidation';
import passwordResetValidation from '../../utils/validations/passwordResetValidation';


const router = Router();

router.post(
  '/signup',
  //userSignupValidation,
  tryCatch(createUserAccount)
);
router.post('/login', 
// loginValidation, 
tryCatch(login));
router.post('/verify-email', tryCatch(verifyEmail));
// router.get('/verify', tryCatch(verifyAccount));
// router.patch(
//   '/password',
//   passwordResetValidation,
//   checkOldPassword,
//   tryCatch(passwordReset)
// );

export default router;
