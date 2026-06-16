import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    date: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true },
    status: { type: String, default: "Confirmed" }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
