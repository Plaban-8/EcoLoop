import mongoose from "mongoose";

const feedSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    upvotes: {
      type: Number,
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
  { collection: "feed" }
);
export const Feed = mongoose.model("Feed", feedSchema);
