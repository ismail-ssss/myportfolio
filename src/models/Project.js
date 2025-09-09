// import mongoose from "mongoose";

// const ProjectSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     type: { type: String, enum: ["Web", "Mobile"], required: true },
//     description: { type: String },
//     link: { type: String },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Project ||
//   mongoose.model("Project", ProjectSchema);

// models/Project.js
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: { type: String, enum: ["web", "mobile"] },
  image: String,
  link: String,
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
