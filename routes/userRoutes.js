import express from 'express';
import { getUsers, createUser, loginUser } from '../controllers/userController.js';

import { protect } from '../middlewares/middleware.js';

const router = express.Router();

router.get('/viewAll', protect, getUsers); // Protect the getUsers route
router.post('/auth/register', createUser);
router.post('/auth/login', loginUser);

export default router;
