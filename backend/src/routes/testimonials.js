import express from "express";
import mongoose from "mongoose";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();
const mockTestimonials = [];

router.get("/", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ ok: true, data: mockTestimonials });
    }
    const testimonials = await Testimonial.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(100);
    res.json({ ok: true, data: testimonials });
  } catch (error) {
    console.warn("DB offline. Returning mock testimonials:", error.message);
    res.json({ ok: true, data: mockTestimonials });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;
    if (!isDbConnected) {
      const mockItem = {
        _id: "mock_" + Date.now(),
        ...req.body,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockTestimonials.push(mockItem);
      return res.status(201).json({ ok: true, data: mockItem });
    }
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({ ok: true, data: testimonial });
  } catch (error) {
    console.warn("Error saving testimonial. Using fallback:", error.message);
    const mockItem = {
      _id: "mock_" + Date.now(),
      ...req.body,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockTestimonials.push(mockItem);
    res.status(201).json({ ok: true, data: mockItem });
  }
});

export default router;
