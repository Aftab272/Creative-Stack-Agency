import express from "express";
import mongoose from "mongoose";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();
const mockInquiries = [];

router.get("/", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ ok: true, data: mockInquiries });
    }
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(100);
    res.json({ ok: true, data: inquiries });
  } catch (error) {
    console.warn("DB offline. Returning mock inquiries:", error.message);
    res.json({ ok: true, data: mockInquiries });
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
      mockInquiries.push(mockItem);
      return res.status(201).json({ ok: true, data: mockItem });
    }
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json({ ok: true, data: inquiry });
  } catch (error) {
    console.warn("Error saving inquiry. Using fallback:", error.message);
    const mockItem = {
      _id: "mock_" + Date.now(),
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockInquiries.push(mockItem);
    res.status(201).json({ ok: true, data: mockItem });
  }
});

export default router;
