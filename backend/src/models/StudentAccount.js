import mongoose from "mongoose";

const studentAccountSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
    lastLoginAt: { type: Date, default: null }
  },
  { timestamps: true }
);

export default mongoose.model("StudentAccount", studentAccountSchema);
