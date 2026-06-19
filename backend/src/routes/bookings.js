import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(100);
    res.json({ ok: true, data: bookings });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const booking = await Booking.create({
      date: req.body.date,
      time: req.body.time
    });
    res.status(201).json({ ok: true, data: booking });
  } catch (error) {
    next(error);
  }
});

export default router;
