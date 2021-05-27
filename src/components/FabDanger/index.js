import React from "react";
import { useDispatch } from "react-redux";
import { eventDeleteEventAction } from "../../redux/actions/eventsActions";
import "./styles.css";

export default function FabDanger() {
  const dispatch = useDispatch();
  const handleDeleteEvent = () => {
    dispatch(eventDeleteEventAction());
  };
  return (
    <button
      className="btn btn-danger fab-danger shadow-sm"
      onClick={handleDeleteEvent}
    >
      <i className="fas fa-trash me-1"></i>
      <span>Borrar evento</span>
    </button>
  );
}
