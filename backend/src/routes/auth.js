import express from "express";
import StudentAccount from "../models/StudentAccount.js";
import { hashPassword, verifyPassword } from "../utils/password.js";

const router = express.Router();

function publicStudent(student) {
  return {
    id: student._id,
    name: student.name,
    email: student.email
  };
}

router.post("/signup", async (req, res, next) => {
  try {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!name || !email || password.length < 6) {
      return res.status(400).json({
        ok: false,
        message: "Name, valid email, and 6+ character password are required"
      });
    }

    const existingStudent = await StudentAccount.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({
        ok: false,
        message: "Student account already exists. Please login."
      });
    }

    const { salt, hash } = hashPassword(password);
    const student = await StudentAccount.create({
      name,
      email,
      passwordHash: hash,
      passwordSalt: salt,
      lastLoginAt: new Date()
    });

    res.status(201).json({ ok: true, data: publicStudent(student) });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({
        ok: false,
        message: "Email and password are required"
      });
    }

    const student = await StudentAccount.findOne({ email });
    if (!student || !verifyPassword(password, student.passwordSalt, student.passwordHash)) {
      return res.status(401).json({
        ok: false,
        message: "Invalid email or password"
      });
    }

    student.lastLoginAt = new Date();
    await student.save();

    res.json({ ok: true, data: publicStudent(student) });
  } catch (error) {
    next(error);
  }
});

export default router;
