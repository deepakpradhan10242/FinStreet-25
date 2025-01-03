import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  _id: {
    type: String, // Use String for UUID
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
//   date: {
//     type: Date,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
