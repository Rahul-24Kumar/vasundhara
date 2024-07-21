import express from 'express';
import { getUsers, createUser, loginUser } from '../controllers/userController.js';

import { protect } from '../middlewares/middleware.js';

const router = express.Router();

router.get('/get', protect, getUsers); // Protect the getUsers route
router.post('/create', createUser);
router.post('/login', loginUser);

export default router;
