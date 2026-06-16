import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    clientName: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    companyName: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    quote: { type: String, required: true, trim: true },
    companyLogoSvg: { type: String, default: "" },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
