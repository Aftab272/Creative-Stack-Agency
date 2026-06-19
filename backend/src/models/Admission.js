import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    message: { type: String, trim: true, default: "" },
    status: { type: String, default: "New Application" }
  },
  { timestamps: true }
);

export default mongoose.model("Admission", admissionSchema);
