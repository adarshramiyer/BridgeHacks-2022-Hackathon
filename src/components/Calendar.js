import React from "react";
import { useRef, useState } from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import "./App.css";
import IMAGE from "./mic_button.jpg"
import IMAGE2 from "./mic_button_green.jpg";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

//API INFORMATION

let styles = {
  calendar: {
    marginTop: "70px",
    borderWidth: "3px",
    color: "#444444",
  },

  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: #eab126;
    border: 1px solid #eab126;
    background-color: "#000000";
  `,
};

const calendarStyle = {
  width: "70",
  height: "100",
};

const language = "EN";

function CalendarPage() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //ADD EVENT TO CALENDAR
  };

  const handleListing = () => {
    resetTranscript();
    setIsListening(true);
    //microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopHandle = () => {
    setIsListening(false);
    //microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
    console.log(transcript);
  };

  return (
    <div className="App-background-small">
      <table border="0" className="calendar-table">
        <tr>
          <td style={calendarStyle} className="calendar-column">
            <Calendar
              className="App-calendar"
              apiKey={API_KEY}
              calendars={calendars}
              styles={styles}
              language={language}
              showFooter={false}
            />
          </td>

          <td>
            <table border="0" className="calendar-card-outline">
              <tr>
                {" "}
                <td className="calendar-card">
                  <label style={{ fontWeight: "bold" }}>Create an Event</label>
                  <br />

                  <form onSubmit={handleSubmit}>
                    <input
                      id="title"
                      className="calendar-card-text-title"
                      placeholder="Title"
                      type="text"
                      name="title"
                      value={inputs.title || ""}
                      onChange={handleChange}
                    />
                    <br />
                    <label className="calendar-card-text-small">Start:</label>
                    <br/>
                    <input
                      id="startDate"
                      className="calendar-card-text-small"
                      type="date"
                      name="startDate"
                      value={inputs.startDate || ""}
                      onChange={handleChange}
                    />
                    <input
                      id="startTime"
                      className="calendar-card-text-small"
                      type="time"
                      name="startTime"
                      value={inputs.startTime || ""}
                      onChange={handleChange}
                    />
                    <label className="calendar-card-text-small">End:</label>
                    <br/>
                    <input
                      id="endDate"
                      className="calendar-card-text-small"
                      type="date"
                      name="endDate"
                      value={inputs.endDate || ""}
                      onChange={handleChange}
                    />
                    <input
                      id="endTime"
                      className="calendar-card-text-small"
                      type="time"
                      name="endTime"
                      value={inputs.endTime || ""}
                      onChange={handleChange}
                    />

                    <br />
                    <textarea
                      id="description"
                      className="calendar-card-description"
                      type="text"
                      name="description"
                      placeholder="Description"
                      value={inputs.description || ""}
                      onChange={handleChange}
                    />

                    <br />


                    <label className="calendar-card-text-small">Repeat: </label>
                    <select
                      className="calendar-card-text-small"
                      id="repeatEvent"
                      name="repeatEvent"
                      value={inputs.repeatEvent || ""}
                      onChange={handleChange}
                    >
                      <option value="never">Never</option>
                      <option value="daily">Daily</option>
                    </select>
                    <br/>

                    <label className="calendar-card-text-small">Calendar:</label>
                    <select
                      className={inputs.calendar == "deadlines" ? "calendar-card-dropdown-deadlines" : "calendar-card-dropdown-primary"}
                      id="calendar"
                      name="calendar"
                      value={inputs.calendar || ""}
                      onChange={handleChange}
                    >
                      <option value="primary" className="primary-calendar">Primary</option>
                      <option value="deadlines" className="deadline-calendar">Deadlines</option>
                    </select>
                    <br/>

                    <input id = "submitButton" type="submit" className="calendar-button" value="Create" />

                  </form>
                </td>
              </tr>
              <tr>
                <td className="blank-block">
                  <label className="blank-block"></label>
                </td>
              </tr>
              <tr>
                <td className="calendar-card-bottom">
                <button className="mic-button-inactive" onClick={isListening ? stopHandle : handleListing}>
                    <img src={isListening ? IMAGE2 : IMAGE} height="150" />
                  </button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CalendarPage;
