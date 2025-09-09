import mongoose from "mongoose";

const AnalyticsSchema = new mongoose.Schema({
  visits: { type: Number, default: 0 },
});

export default mongoose.models.Analytics ||
  mongoose.model("Analytics", AnalyticsSchema);
