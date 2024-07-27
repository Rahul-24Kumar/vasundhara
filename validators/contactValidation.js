import { body, validationResult } from 'express-validator';

// Define validation rules
export const contactValidationRules = [
    body('name').notEmpty().withMessage('Name is required').trim().escape(),
    body('email').isEmail().withMessage('Invalid email address').normalizeEmail(),
    body('message').notEmpty().withMessage('Message is required').trim().escape()
];

// Middleware to handle validation errors
export const validateContactMessage = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
