import { dateFnsLocalizer, Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns"; //default in react-big-calendar
import { es } from "date-fns/locale";
import { messages } from "../../helpers/calendar-messages-es";
import CalendarEvent from "../CalendarEvent";
import { useState } from "react";
import CalendarModal from "../CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { openModalAction } from "../../redux/actions/uiActions";
import {
  eventClearActiveEventAction,
  eventSetActiveAction,
} from "../../redux/actions/eventsActions";

const locales = {
  es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function MyCalendar() {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );
  const events = useSelector((state) => state.calendar.events);
  const dispatch = useDispatch();

  const onDoubleClick = (event) => {
    dispatch(openModalAction());
  };

  const onSelectEvent = (event) => {
    //console.log("onSelectEvent", event);
    dispatch(eventSetActiveAction(event));
  };

  const onViewChange = (event) => {
    setLastView(event);
    localStorage.setItem("lastView", event);
  };

  const onSelectSlot = (event) => {
    dispatch(eventClearActiveEventAction());
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    //console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 56px)" }}
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
    </div>
  );
}
