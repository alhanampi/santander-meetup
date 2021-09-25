import React, { useReducer } from "react";
import axios from "axios";
import MeetupContext from "./meetupContext";
import meetupReducer from "./meetupReducer";
import {
  ADD_MEETUP,
  GET_MEETUPS,
  MEETUP_ERROR,
  SET_ERROR,
  GET_TEMP,
} from "../types";

const MeetupState = (props) => {
  const initialState = {
    meetups: [],
    temp: 0,
    beer: 0,
    error: null,
  };

  const [state, dispatch] = useReducer(meetupReducer, initialState);

  //get all
  const getMeetups = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get("/api/meetups", config);

      dispatch({
        type: GET_MEETUPS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MEETUP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const getTemp = async (daysFromNow) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(`/api/weather/${daysFromNow}`, config);

      dispatch({
        type: GET_TEMP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: MEETUP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //post new meetup
  const addMeetup = async (meetupData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/meetups", meetupData, config);
      dispatch({
        type: ADD_MEETUP,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: MEETUP_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  //error:
  const meetupError = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: [{ msg: error }],
    });
  };

  return (
    <MeetupContext.Provider
      value={{
        meetups: state.meetups,
        temp: state.temp,
        beer: state.beer,
        error: state.error,
        getMeetups,
        addMeetup,
        getTemp,
        meetupError,
      }}
    >
      {props.children}
    </MeetupContext.Provider>
  );
};

export default MeetupState;
