import express from "express";
import eventModel from "../models/eventModel.js";

const router = express.Router();

export const getEventData =  async (req, res) => {
  const { userId } = req.params;

  try {
    const events = await eventModel.find({ participants: userId });

    if (!events || events.length === 0) {
      return res.status(404).json({ success: false, message: "No events found." });
    }

    res.status(200).json({ success: true, events });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
};

