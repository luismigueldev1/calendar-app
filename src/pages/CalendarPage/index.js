import React from "react";
import Navbar from "../../components/Navbar";
import Calendar from "../../components/Calendar";
import Fab from "../../components/Fab";
import FabDanger from "../../components/FabDanger";
import { useSelector } from "react-redux";

export default function CalendarPage() {
  const activeEvent = useSelector((state) => state.calendar.activeEvent);

  return (
    <div>
      <Navbar />
      <Calendar />
      <Fab />
      {activeEvent && <FabDanger />}
    </div>
  );
}
