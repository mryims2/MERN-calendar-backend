import eventsTypes from "../types/eventsTypes.js";

const initialState = {
  events: [],
  activeEvent: null,
};

const calendarReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { events, activeEvent } = state;
  let updatesEvents = [];

  switch (type) {
    case eventsTypes.setActiveEvent:
      return {
        ...state,
        activeEvent: payload,
      };

    case eventsTypes.addNewEvent:
      return {
        ...state,
        events: [...events, payload],
      };

    case eventsTypes.clearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    case eventsTypes.updateEvent:
      updatesEvents = events.map((event) =>
        event.id === payload.id ? payload : event
      );

      return {
        ...state,
        events: updatesEvents,
      };
    case eventsTypes.deleteEvent:
      updatesEvents = events.filter((event) => event.id !== activeEvent.id);

      return {
        ...state,
        events: updatesEvents,
        activeEvent: null,
      };
    case eventsTypes.loadedEvents:
      return {
        ...state,
        events: [...payload],
      };

    case eventsTypes.clearEvents:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default calendarReducer;
