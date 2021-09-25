import { ADD_MEETUP, GET_MEETUPS, GET_TEMP, MEETUP_ERROR } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case GET_MEETUPS:
      return {
        ...state,
        meetups: payload,
        error: null,
      };
    case ADD_MEETUP:
      return {
        ...state,
        meetups: [...state.meetups, payload],
      };
    case MEETUP_ERROR:
      return {
        ...state,
        meetups: [],
        error: payload,
      };
    case GET_TEMP:
      return {
        ...state,
        temp: payload,
        error: null,
      };
    default:
      return state;
  }
};
