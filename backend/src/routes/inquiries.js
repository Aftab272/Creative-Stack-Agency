import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(100);
    res.json({ ok: true, data: inquiries });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json({ ok: true, data: inquiry });
  } catch (error) {
    next(error);
  }
});

export default router;
