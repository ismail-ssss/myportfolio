// // models/User.js
// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true }, // login username
//   password: { type: String, required: true }, // hashed password

//   // Additional profile/details fields
//   name: { type: String, default: "" },
//   email: { type: String, default: "" },
//   bio: { type: String, default: "" },
//   social: {
//     github: { type: String, default: "" },
//     linkedin: { type: String, default: "" },
//     twitter: { type: String, default: "" },
//   },
// });

// export default mongoose.models.User || mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },

  name: { type: String, default: "" },
  email: { type: String, default: "" },
  bio: { type: String, default: "" },

  // Dynamic links array
  links: [
    {
      label: { type: String, default: "" }, // e.g., "GitHub"
      url: { type: String, default: "" }, // e.g., "https://github.com/ismail"
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
