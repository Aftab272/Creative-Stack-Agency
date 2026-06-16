import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    projectTypes: [{ type: String, trim: true }],
    budget: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, default: "Pipeline Queued (Under 15m ETA)" }
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", inquirySchema);
