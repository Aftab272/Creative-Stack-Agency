import mongoose from "mongoose";

const states = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting"
};

export async function connectDb(uri) {
  if (!uri) {
    throw new Error("MONGODB_URI is required");
  }

  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log(`MongoDB connected: ${mongoose.connection.name}`);
}

export function getDbStatus() {
  return states[mongoose.connection.readyState] || "unknown";
}
