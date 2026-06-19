import dotenv from "dotenv";
import express from "express";
import { connectDb, getDbStatus } from "./config/db.js";
import admissionsRouter from "./routes/admissions.js";
import authRouter from "./routes/auth.js";
import bookingsRouter from "./routes/bookings.js";
import enrollmentsRouter from "./routes/enrollments.js";
import inquiriesRouter from "./routes/inquiries.js";
import testimonialsRouter from "./routes/testimonials.js";
import teamRouter from "./routes/team.js";
import { seedTeam } from "./config/seedTeam.js";

dotenv.config({ quiet: true });

const app = express();
const port = 5000;
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/creative_stack_agency";
const frontendUrls = (process.env.FRONTEND_URL || "http://localhost:3000,http://localhost:5173")
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigin = origin && frontendUrls.includes(origin) ? origin : frontendUrls[0];

  if (allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Vary", "Origin");
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "creative-stack-backend",
    database: getDbStatus()
  });
});

app.use("/api/admissions", admissionsRouter);
app.use("/api/auth", authRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/enrollments", enrollmentsRouter);
app.use("/api/inquiries", inquiriesRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/team", teamRouter);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Route not found" });
});

app.use((error, req, res, next) => {
  console.error(error);

  if (error.name === "ValidationError") {
    return res.status(400).json({
      ok: false,
      message: "Validation failed",
      errors: Object.values(error.errors).map((item) => item.message)
    });
  }

  if (error.code === 11000) {
    return res.status(409).json({
      ok: false,
      message: "Duplicate record",
      key: error.keyValue
    });
  }

  return res.status(500).json({
    ok: false,
    message: "Server error"
  });
});

async function startServer() {
  await connectDb(mongoUri);
  await seedTeam();

  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error("Backend failed to start", error);
  process.exit(1);
});
