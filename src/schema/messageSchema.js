import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
  senderId: {
    type: String,
    required: [true, "Sender Id is required"],
  },
  conversationId: {
    type: String,
    required: [true, "Conversation Id is required"],
  },
  text: {
    type: String,
    required: [true, "Text is required"],
  },
});
