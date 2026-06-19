import express from "express";
import mongoose from "mongoose";
import Admission from "../models/Admission.js";

const router = express.Router();
const mockAdmissions = [];

router.get("/", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ ok: true, data: mockAdmissions });
    }
    const admissions = await Admission.find().sort({ createdAt: -1 }).limit(100);
    res.json({ ok: true, data: admissions });
  } catch (error) {
    console.warn("DB offline. Returning mock admissions:", error.message);
    res.json({ ok: true, data: mockAdmissions });
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
      mockAdmissions.push(mockItem);
      return res.status(201).json({ ok: true, data: mockItem });
    }
    const admission = await Admission.create(req.body);
    res.status(201).json({ ok: true, data: admission });
  } catch (error) {
    console.warn("Error saving layout. Using in-memory fallback:", error.message);
    const mockItem = {
      _id: "mock_" + Date.now(),
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockAdmissions.push(mockItem);
    res.status(201).json({ ok: true, data: mockItem });
  }
});

export default router;
