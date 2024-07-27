import express from 'express';
import { contactMessage } from '../controllers/contactUsController.js';
import { contactValidationRules, validateContactMessage } from '../validators/contactValidation.js';

const router = express.Router();

// Apply validation middleware before the route handler
router.post('/contact', contactValidationRules, validateContactMessage, contactMessage);

export default router;
