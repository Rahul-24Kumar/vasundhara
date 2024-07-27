import express from 'express';

import { contactMessage } from '../controllers/contactUsController.js';

const router = express.Router();

router.post('/contact', contactMessage);

export default router;
