import jwt from 'jsonwebtoken';
import User from '../modules/auth/auth.model.js';

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: 'Not authorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (err) {
    console.error('Auth Middleware Error:', err);
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
