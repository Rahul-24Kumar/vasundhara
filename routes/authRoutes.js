import express from 'express';
import { requestPasswordReset, resetPassword } from '../controllers/authController.js';
import validateResetToken from '../middlewares/validateResetToken.js';

const router = express.Router();

router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', validateResetToken, resetPassword);

export default router;
