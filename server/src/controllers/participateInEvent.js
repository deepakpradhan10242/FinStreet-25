import eventModel from "../models/eventModel.js";
import userModel from "../models/userModel.js";

export const participateInEvent = async (req, res) => {

  const { eventId } = req.params;
  const { userId, title, date, time } = req.body;

  try {

    let event = await eventModel.findById(eventId);

    if (!event) {

      event = new eventModel({
        _id: eventId,
        title, 
        date,
        time,
        participants: [] 
      });

      await event.save();
    }

    if (event.participants.includes(userId)) {
      return res.status(400).json({ success: false, message: "User has already participated." });
    }


    event.participants.push(userId);

    await event.save();

    res.status(200).json({ 
      success: true, 
      message: "Successfully participated.",
      event 
    });

  } catch (error) {
    console.error("Error participating in event:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
};
