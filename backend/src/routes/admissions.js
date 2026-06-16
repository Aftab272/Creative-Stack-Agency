import express from "express";
import Admission from "../models/Admission.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 }).limit(100);
    res.json({ ok: true, data: admissions });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const admission = await Admission.create(req.body);
    res.status(201).json({ ok: true, data: admission });
  } catch (error) {
    next(error);
  }
});

export default router;
