import mongoose from "mongoose";

const states = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting"
};

export async function connectDb(uri) {
  if (!uri) {
    console.warn("MONGODB_URI is not provided. Backend will use local in-memory mock states.");
    return;
  }

  mongoose.set("strictQuery", true);
  // Fail fast, don't hang Mongoose queries indefinitely when offline
  mongoose.set("bufferCommands", false);

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000, // Wait at most 2s
    });
    console.log(`MongoDB connected: ${mongoose.connection.name}`);
  } catch (error) {
    console.error(`MongoDB connection failed (graceful fallback active): ${error.message}`);
  }
}

export function getDbStatus() {
  const state = states[mongoose.connection.readyState] || "unknown";
  return state === "connected" ? "connected" : "disconnected_fallback_active";
}

