import express from "express";
import mongoose from "mongoose";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();
const mockEnrollments = [];

router.get("/", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ ok: true, data: mockEnrollments });
    }
    const enrollments = await Enrollment.find().sort({ createdAt: -1 }).limit(100);
    res.json({ ok: true, data: enrollments });
  } catch (error) {
    console.warn("DB offline. Returning mock enrollments:", error.message);
    res.json({ ok: true, data: mockEnrollments });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;
    if (!isDbConnected) {
      const mockItem = {
        _id: "mock_" + Date.now(),
        ...req.body,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockEnrollments.push(mockItem);
      return res.status(201).json({ ok: true, data: mockItem });
    }
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json({ ok: true, data: enrollment });
  } catch (error) {
    console.warn("Error saving enrollment. Using fallback:", error.message);
    const mockItem = {
      _id: "mock_" + Date.now(),
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockEnrollments.push(mockItem);
    res.status(201).json({ ok: true, data: mockItem });
  }
});

export default router;
