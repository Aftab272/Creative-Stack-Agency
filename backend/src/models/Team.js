import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    skills: [{ type: String }],
    experience: { type: String, required: true, trim: true },
    education: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    bio: { type: String, required: true, trim: true },
    avatarUrl: { type: String, trim: true },
    socialLinks: {
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      twitter: { type: String, default: "" },
      facebook: { type: String, default: "" },
      instagram: { type: String, default: "" },
      tiktok: { type: String, default: "" }
    },
    location: { type: String, trim: true },
    projectsCompleted: { type: String, trim: true },
    workStyle: { type: String, trim: true },
    highlights: [{ type: String }],
    detailedSkills: [
      {
        category: { type: String, trim: true },
        list: [{ type: String }]
      }
    ],
    detailedExperience: [
      {
        title: { type: String, trim: true },
        period: { type: String, trim: true },
        company: { type: String, trim: true },
        description: { type: String, trim: true }
      }
    ],
    detailedEducation: [
      {
        degree: { type: String, trim: true },
        period: { type: String, trim: true },
        institute: { type: String, trim: true },
        description: { type: String, trim: true }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("TeamMember", teamMemberSchema);
