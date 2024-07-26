import express from 'express';
import { contactMessage } from '../controllers/contactUsController';

const router = express.Router();

router.post('/contact', contactMessage);

export default router;
