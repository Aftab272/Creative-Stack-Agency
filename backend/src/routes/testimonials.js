import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(100);
    res.json({ ok: true, data: testimonials });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({ ok: true, data: testimonial });
  } catch (error) {
    next(error);
  }
});

export default router;
