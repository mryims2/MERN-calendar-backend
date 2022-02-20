import axios from "axios";

import {
  startChecking,
  finishLoading,
  finishChecking,
  startLoading,
} from "./ui";
import { clearEvents } from "./events";
import authTypes from "../types/authTypes";
import handleError from "../helpers/errors/handleError";

export const startAuthChecking = () => {
  return async (dispatch) => {
    try {
      dispatch(startChecking());

      const endPoint = "/auth";
      const url = process.env.REACT_APP_URL_API  + endPoint;

      const headers = { "x-access-token": localStorage.getItem("token") };
      const { data } = await axios.get(url, { headers });

      const { uid, name } = data;

      dispatch(
        signIn({
          uid,
          name,
        })
      );

      dispatch(finishChecking());
    } catch (error) {
      dispatch(finishChecking());
      handleError(error, "authChecking");
    }
  };
};

export const startAuth = (userCredentials) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const endPoint = `/auth/${userCredentials.name ? "sign_up" : "sign_in"}`;
      const url = process.env.REACT_APP_URL_API + endPoint;

      const { data } = await axios.post(url, userCredentials);

      const { token, uid, name } = data;

      localStorage.setItem("token", token);
      localStorage.setItem("date-init-token", new Date().getTime());

      dispatch(
        signIn({
          uid,
          name,
        })
      );
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      handleError(error, "auth");
    }
  };
};

export const startSignOut = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(clearEvents());
    dispatch(signOut());
  };
};
const signIn = (user) => ({
  type: authTypes.signIn,
  payload: user,
});

const signOut = () => ({ type: authTypes.signOut });
