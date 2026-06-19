import express from "express";
import mongoose from "mongoose";
import TeamMember from "../models/Team.js";
import { initialTeam } from "../config/seedTeam.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json({ ok: true, data: initialTeam });
    }
    const teamMembers = await TeamMember.find({}).sort({ createdAt: 1 });
    if (!teamMembers || teamMembers.length === 0) {
      return res.json({ ok: true, data: initialTeam });
    }
    res.json({ ok: true, data: teamMembers });
  } catch (error) {
    console.warn("DB offline. Falling back to local team mock data:", error.message);
    res.json({ ok: true, data: initialTeam });
  }
});

export default router;

