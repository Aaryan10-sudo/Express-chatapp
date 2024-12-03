import mongoose from "mongoose";
export const conversationSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      required: [true, "Sender Id is required"],
    },
    receiverId: {
      type: String,
      required: [true, "Receiver Id is required"],
    },
  },
  { timestamps: true }
);
