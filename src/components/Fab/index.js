import React from "react";
import { useDispatch } from "react-redux";
import { openModalAction } from "../../redux/actions/uiActions";
import "./styles.css";

export default function Fab() {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModalAction());
  };
  return (
    <button className="btn btn-primary fab shadow-sm" onClick={handleOpenModal}>
      <div className="fas fa-plus"></div>
    </button>
  );
}
