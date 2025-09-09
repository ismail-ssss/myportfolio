// // models/Project.js
// import mongoose from "mongoose";

// const ProjectSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   type: { type: String, enum: ["web", "mobile"] },
//   image: String,
//   link: String,
//   createdAt: { type: Date, default: Date.now },
//   views: { type: Number, default: 0 },
// });

// export default mongoose.models.Project ||
//   mongoose.model("Project", ProjectSchema);

import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  type: { type: String, enum: ["web", "mobile"], default: "web" },

  // Multiple images
  images: [{ type: String }],

  // Project link
  link: { type: String, default: "" },

  // Team members
  team: [
    {
      name: { type: String, required: true },
      role: { type: String, default: "" },
    },
  ],

  // Tracking
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
