import axios from "axios";

import { finishLoading, startLoading } from "./ui.js";
import eventsTypes from "../types/eventsTypes.js";
import handleError from "../helpers/errors/handleError.js";

export const startAddNewEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const endPoint = "/events";
      const url = process.env.REACT_APP_URL_API + endPoint;
      const { data } = await axios.post(url, event, { headers });

      dispatch(addNewEvent(data.event));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      handleError(error);
    }
  };
};

export const startLoadingEvents = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading);

      const endPoint = "/events";
      const url = process.env.REACT_APP_URL_API  + endPoint;

      const headers = { "x-access-token": localStorage.getItem("token") };
      const { data } = await axios.get(url, { headers });

      dispatch(loadedEvents(data.events));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      handleError(error);
    }
  };
};

export const startUpdateEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const endPoint = "/events/" + event.id;
      const url = process.env.REACT_APP_URL_API + endPoint;

      const headers = { "x-access-token": localStorage.getItem("token") };

      const { data } = await axios.put(url, event, { headers });

      dispatch(updateEvent(data.event));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());

      handleError(error);
    }
  };
};

export const startDeleteEvent = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading());
      const { id } = getState().calendar.activeEvent;

      const endPoint = "/events/" + id;
      const url = process.env.REACT_APP_URL_API + endPoint;

      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      await axios.delete(url, { headers });

      dispatch(deleteEvent(id));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      handleError(error);
    }
  };
};

export const setActiveEvent = (event) => ({
  type: eventsTypes.setActiveEvent,
  payload: event,
});

const addNewEvent = (event) => ({
  type: eventsTypes.addNewEvent,
  payload: event,
});

export const clearActiveEvent = () => ({
  type: eventsTypes.clearActiveEvent,
});

export const updateEvent = (event) => ({
  type: eventsTypes.updateEvent,
  payload: event,
});

const deleteEvent = (id) => ({
  type: eventsTypes.deleteEvent,
  payload: id,
});

const loadedEvents = (events) => ({
  type: eventsTypes.loadedEvents,
  payload: events,
});

export const clearEvents = () => ({ type: eventsTypes.clearEvents });
