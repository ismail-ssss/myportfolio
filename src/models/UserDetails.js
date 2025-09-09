import mongoose from "mongoose";

const UserDetailsSchema = new mongoose.Schema({
  name: String,
  role: String,
  bio: String,
  socials: {
    github: String,
    linkedin: String,
    twitter: String,
  },
});

export default mongoose.models.UserDetails ||
  mongoose.model("UserDetails", UserDetailsSchema);
