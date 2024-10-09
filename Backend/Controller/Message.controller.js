import Conversation from "../Models/Conversation.model.js";
import Message from "../Models/Message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // this is our current user

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    // means there is no conversation
    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }

    // now communicate easyli
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id); // messages is array in Conversation Model
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log(`error in sendMessage controller ${error}`);
    res.status(500).json({ error: "internal server error" });
  }
};
