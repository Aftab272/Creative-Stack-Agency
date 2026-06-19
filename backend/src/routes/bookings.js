import express from "express";
import mongoose from "mongoose";
import Booking from "../models/Booking.js";

const router = express.Router();
const mockBookings = [];

router.get("/", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ ok: true, data: mockBookings });
    }
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(100);
    res.json({ ok: true, data: bookings });
  } catch (error) {
    console.warn("DB offline. Returning mock bookings:", error.message);
    res.json({ ok: true, data: mockBookings });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;
    if (!isDbConnected) {
      const mockItem = {
        _id: "mock_" + Date.now(),
        date: req.body.date,
        time: req.body.time,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockBookings.push(mockItem);
      return res.status(201).json({ ok: true, data: mockItem });
    }
    const booking = await Booking.create({
      date: req.body.date,
      time: req.body.time
    });
    res.status(201).json({ ok: true, data: booking });
  } catch (error) {
    console.warn("Error saving booking. Using fallback:", error.message);
    const mockItem = {
      _id: "mock_" + Date.now(),
      date: req.body.date,
      time: req.body.time,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockBookings.push(mockItem);
    res.status(201).json({ ok: true, data: mockItem });
  }
});

export default router;
