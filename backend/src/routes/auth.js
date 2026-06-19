import express from "express";
import mongoose from "mongoose";
import StudentAccount from "../models/StudentAccount.js";
import { hashPassword, verifyPassword } from "../utils/password.js";

const router = express.Router();

// In-memory fallback database
const mockStudents = [];

function publicStudent(student) {
  return {
    id: student._id || student.id,
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

    // Checking if database is connected
    const isDbConnected = mongoose.connection.readyState === 1;

    if (!isDbConnected) {
      const existingMock = mockStudents.find((s) => s.email === email);
      if (existingMock) {
        return res.status(409).json({
          ok: false,
          message: "Student account already exists (Mock active). Please login."
        });
      }

      const { salt, hash } = hashPassword(password);
      const student = {
        id: "mock_" + Date.now(),
        name,
        email,
        passwordSalt: salt,
        passwordHash: hash
      };
      mockStudents.push(student);
      return res.status(201).json({ ok: true, data: publicStudent(student) });
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

    // Checking if database is connected
    const isDbConnected = mongoose.connection.readyState === 1;

    if (!isDbConnected) {
      const student = mockStudents.find((s) => s.email === email);
      if (!student || !verifyPassword(password, student.passwordSalt, student.passwordHash)) {
        return res.status(401).json({
          ok: false,
          message: "Invalid email or password (Mock active)"
        });
      }
      return res.json({ ok: true, data: publicStudent(student) });
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
