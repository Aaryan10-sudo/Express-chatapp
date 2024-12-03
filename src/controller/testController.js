import { Test } from "../schema/model.js";

export const testController = async (req, res, next) => {
  const { senderId, receiverId, content } = req.body;
  try {
    let result = await Test.create({
      sender: senderId,
      receiver: receiverId,
      content: content,
    });
    res.status(201).json({
      success: true,
      message: "Test message created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetchMessages = async (req, res) => {
  const { userId1, userId2 } = req.query;
  try {
    const messages = await Test.find({
      $or: [
        { sender: userId1, receiver: userId2 },
        { sender: userId2, receiver: userId1 },
      ],
    });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
