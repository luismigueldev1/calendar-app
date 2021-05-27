import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import { set, add, toDate, isAfter } from "date-fns";
import { customStyles } from "../../helpers/modalCustomStyles";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAction } from "../../redux/actions/uiActions";
import {
  eventAddNewAction,
  eventClearActiveEventAction,
  eventUpdateEventAction,
} from "../../redux/actions/eventsActions";

Modal.setAppElement("#root");

//hours to state
const today = toDate(Date.now());
const start = set(today, { minutes: 0, seconds: 0 });
const end = add(start, { hours: 1 });

export default function CalendarModal() {
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [titleValid, setTitleValid] = useState(true);

  const { ui, calendar } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [values, setValues, handleInputChange, reset] = useForm({
    title: "",
    notes: "",
    start: start,
    end: end,
  });

  useEffect(() => {
    if (calendar.activeEvent) {
      setValues(calendar.activeEvent);
    } else {
      reset();
    }
  }, [calendar.activeEvent, setValues]);

  const closeModal = () => {
    dispatch(closeModalAction());
    dispatch(eventClearActiveEventAction());
    setValues({
      title: "",
      notes: "",
      start: start,
      end: end,
    });
  };

  const afterOpenModal = () => {};

  const handleStartDateChange = (event) => {
    setStartDate(event);
    setValues((prevState) => ({
      ...prevState,
      start: event,
    }));
  };

  const handleEndDateChange = (event) => {
    setEndDate(event);
    setValues((prevState) => ({
      ...prevState,
      end: event,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isAfter(values.end, values.start)) {
      return Swal.fire(
        "Error",
        "La fecha fin debe ser mayor a la fecha inicio",
        "error"
      );
    }

    if (values.title.trim().length < 2) {
      return setTitleValid(false);
    }

    //TODO database storage
    if (calendar.activeEvent) {
      dispatch(
        eventUpdateEventAction({
          ...values,
          id: calendar.activeEvent.id,
        })
      );
    } else {
      dispatch(
        eventAddNewAction({
          ...values,
          id: new Date().getTime(),
          user: {
            _id: 123,
            name: "Luis Miguel",
          },
        })
      );
    }

    //
    setTitleValid(true);
    closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={ui.modalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        style={customStyles}
        overlayClassName="modal-fondo"
      >
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 ">
              {calendar.activeEvent ? (
                <h3> Editar evento </h3>
              ) : (
                <h3> Nuevo evento </h3>
              )}

              <hr />

              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label>Fecha y hora inicio</label>
                  <DateTimePicker
                    onChange={handleStartDateChange}
                    value={startDate}
                    disableClock
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Fecha y hora fin</label>
                  <DateTimePicker
                    onChange={handleEndDateChange}
                    value={endDate}
                    minDate={startDate}
                    disableClock
                    className="form-control"
                  />
                </div>
                <hr />
                <div className="form-group ">
                  <label>Titulo y notas</label>
                  <input
                    type="text"
                    className={`form-control ${!titleValid && "is-invalid"}`}
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    value={values.title}
                    onChange={handleInputChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Una descripción corta
                  </small>
                </div>

                <div className="form-group mt-3">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={values.notes}
                    onChange={handleInputChange}
                  ></textarea>
                  <small id="emailHelp" className="form-text text-muted">
                    Información adicional
                  </small>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary btn-block mt-3"
                >
                  <i className="far fa-save me-1"></i>
                  <span>Guardar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
