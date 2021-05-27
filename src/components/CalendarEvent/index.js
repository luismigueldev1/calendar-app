import React from "react";

export default function CalendarEvent({ event }) {
  const { title, user } = event;
  return (
    <div>
      <strong>{title}</strong>
      <br />
      <span>{user.name}</span>
    </div>
  );
}
