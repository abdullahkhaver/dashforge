import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: { type: String, unique: true },
    password: String,
    role: { type: String, default: 'user' },
  },
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
