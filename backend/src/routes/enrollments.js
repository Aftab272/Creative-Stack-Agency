import express from "express";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 }).limit(100);
    res.json({ ok: true, data: enrollments });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json({ ok: true, data: enrollment });
  } catch (error) {
    next(error);
  }
});

export default router;
