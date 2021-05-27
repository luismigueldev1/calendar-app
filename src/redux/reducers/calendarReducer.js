import { types } from "../types/types";
import { add, set, toDate } from "date-fns";

const today = toDate(Date.now());
const start = set(today, { minutes: 0, seconds: 0 });
const end = add(start, { hours: 2 });

const initialState = {
  events: [
    {
      id: new Date().getTime(),
      title: "Cumpleaños del jefe",
      start,
      end,
      user: {
        _id: "123456",
        name: "Luis Miguel",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return { ...state, activeEvent: action.payload };

    case types.eventAddNew:
      return { ...state, events: [...state.events, action.payload] };

    case types.eventClearActiveEvent:
      return { ...state, activeEvent: null };

    case types.eventUpdateEvent:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };

    case types.eventDeleteEvent:
      return {
        ...state,
        events: state.events.filter(
          (event) => event.id !== state.activeEvent.id
        ),
        activeEvent: null,
      };
    default:
      return state;
  }
};
