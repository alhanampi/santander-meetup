import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/utilSetAuthToken";

import {
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_ERROR,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null,
    user: null,
    token: localStorage.getItem("token"),
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //register
  const registerUser = async (registerData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users/register", registerData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.error,
      });
    }
  };

  //login
  const loginUser = async (loginData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users/login", loginData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.error,
      });
    }
  };

  //load user:
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get("/api/users/login");
    console.log(res)

    try {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.error
      });
    }
  };

  //logout:
  const logoutUser = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  //error:
  const setError = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: [{ msg: error }],
    });
  };

  // Clear Error
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        registerUser,
        loginUser,
        logoutUser,
        clearErrors,
        setError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
