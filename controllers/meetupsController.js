import Meetup from "../models/Meetup.js";

//GET the list of meetups using an user token
//meetups/get
const getMeetups = async (req, res) => {
  try {
    const meetups = await Meetup.find({ user: req.user.id });
    res.json(meetups);
    //to test it: pass the token of one of the users
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

//POST a new meetup
//meetups/post
const postMeetups = async (req, res) => {
  try {
    const newMeetup = new Meetup({
      user: req.user.id,
      ...req.body,
    });
    
    const meetup = await newMeetup.save();
    res.json(meetup);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

export default { getMeetups, postMeetups };