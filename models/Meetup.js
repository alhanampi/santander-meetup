import mongoose from "mongoose";

const meetupSchema = new mongoose.Schema({
    //the ref for the list will be the user it belongs to
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    date: {
      type: Date,
      required: true,
    },
    guests: {
      type: String,
      required: true,
    },
    climate: {
      type: Number,
      required: true,
    },
    beerTotal: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  }
);

export default mongoose.model("Meetup", meetupSchema);
