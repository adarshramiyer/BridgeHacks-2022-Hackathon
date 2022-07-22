import React from "react";
import { css } from "@emotion/react";
import {render} from "react-dom";
import GoogleCalendar from "./GoogleCalendar";



let calendars = [
  {calendarId: CALENDAR_ID, color: "#000000"}
];

const labelStyle = {
  width: "70%",
}

function CalendarPage() {
    return (
      <background className = "App-background-small">
        <table border="3">
          <tr>
            <td style={labelStyle}>
            <GoogleCalendar/>
            </td>
            <td>
              <label>This is my label</label>
            </td>
          </tr>
        </table>
      </background>
    )
}

export default CalendarPage;