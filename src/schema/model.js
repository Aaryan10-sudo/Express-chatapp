import mongoose from "mongoose";
import { messageSchema } from "./messageSchema.js";
import { conversationSchema } from "./conversationSchema.js";
import { userSchema } from "./userSchema.js";
import { testSchema } from "./testSchema.js";

export const User = mongoose.model("User", userSchema);
export const Message = mongoose.model("Message", messageSchema);
export const Conversation = mongoose.model("Conversation", conversationSchema);
export const Test = mongoose.model("Test", testSchema);
