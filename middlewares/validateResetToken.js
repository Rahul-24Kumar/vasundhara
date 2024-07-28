import jwt from 'jsonwebtoken';

const validateResetToken = (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};

export default validateResetToken;
