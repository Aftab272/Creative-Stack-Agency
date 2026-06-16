import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    studentName: { type: String, required: true, trim: true },
    fatherName: { type: String, required: true, trim: true },
    education: { type: String, required: true, trim: true },
    field: { type: String, required: true, trim: true },
    instituteName: { type: String, required: true, trim: true },
    courseSelected: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    paymentMethod: { type: String, required: true, trim: true },
    paymentAddress: { type: String, required: true, trim: true },
    classTime: { type: String, required: true, trim: true },
    timePeriod: { type: String, required: true, trim: true },
    certificateOpt: { type: Boolean, default: true },
    weekendTestOpt: { type: Boolean, default: true },
    score: { type: Number, min: 0, default: 0 },
    status: { type: String, default: "Verification Pending" }
  },
  { timestamps: true }
);

export default mongoose.model("Enrollment", enrollmentSchema);
