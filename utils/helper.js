import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Hash a password
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
};

// Compare a candidate password with the hashed password
export const correctPassword = async (candidatePassword, hashedPassword) => {
    return await bcrypt.compare(candidatePassword, hashedPassword);
};

// Generate a JSON Web Token (JWT)
export const generateAuthToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    });
};
