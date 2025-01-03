import express from "express";
import eventModel from "../models/eventModel.js";

const router = express.Router();

export const deleteEventData = async (req, res) => {
  const { userId, eventId } = req.params;

  try {
    const event = await eventModel.findById(eventId);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found." });
    }

   
    event.participants = event.participants.filter(participant => participant.toString() !== userId);

    await event.save(); 

    res.status(200).json({ success: true, message: "User removed from event." });
  } catch (error) {
    console.error("Error removing user from event:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
};

