import { types } from "../types/types";

export const eventAddNewAction = (event) => {
  return {
    type: types.eventAddNew,
    payload: event,
  };
};

export const eventSetActiveAction = (event) => {
  return {
    type: types.eventSetActive,
    payload: event,
  };
};

export const eventClearActiveEventAction = () => {
  return {
    type: types.eventClearActiveEvent,
  };
};

export const eventUpdateEventAction = (event) => {
  return {
    type: types.eventUpdateEvent,
    payload: event,
  };
};

export const eventDeleteEventAction = () => {
  return {
    type: types.eventDeleteEvent,
  };
};
