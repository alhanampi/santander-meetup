import {
    USER_LOADED,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_ERROR,
    CLEAR_ERRORS,
    LOGOUT
}from '../types'

export default (state, {type, payload}) => {
    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
              ...state,
              ...payload,
              isAuthenticated: true,
              loading: false,
              error: null,
            };
          case REGISTER_FAIL:
          case LOGIN_FAIL:
          case AUTH_ERROR:
          case LOGOUT:
            localStorage.removeItem('token')
            return {
              ...state,
              isAuthenticated: false,
              user: null,
              loading: false,
              error: payload,
            };
          case SET_ERROR:
            return {
              ...state,
              error: payload,
            };
          case USER_LOADED:
            return {
              ...state,
              isAuthenticated: true,
              user: payload,
              loading: false,
              error: null,
            };
      
          case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
          default:
            return state;
        }
    }