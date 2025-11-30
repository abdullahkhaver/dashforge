import User from './user.model.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({ name, username, password: hashed });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  return res.json({ success: true, message: 'Login successful' });
}
