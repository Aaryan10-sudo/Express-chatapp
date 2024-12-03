import { Conversation } from "../schema/model.js";

export const conversationController = async (req, res, next) => {
  let newConversation = new Conversation(req.body);
  try {
    const savedConersation = await newConversation.save();
    res.status(201).json(savedConersation);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const conversationGetController = async (req, res, next) => {
  try {
    let conversation = await Conversation.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Conversation retrieved successfully",
      data: conversation,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
