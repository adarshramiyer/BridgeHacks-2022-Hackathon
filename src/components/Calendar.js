import React from "react";
import { useRef, useState } from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import "./App.css";
import IMAGE from "./mic_button.jpg"
import IMAGE2 from "./mic_button_green.jpg";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { gapi } from "gapi-script";
import ApiCalendar from 'react-google-calendar-api';



let styles = {
  calendar: {
    marginTop: "70px",
    borderWidth: "3px",
    color: "#444444",
  },

  today: css`
    color: #eab126;
    border: 1px solid #eab126;;
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

  const [inputs, setInputs] = useState("");

  const [NLPOutput, setNLPOutput] = useState("");

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  var isSignedIn = false;

  const handleLogin = () => {
    isSignedIn = true;
    console.log(apiCalendar.handleAuthClick());
    
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    //ADD EVENT TO CALENDAR
    
    var addCalendarId = ;
    var eventInfo = [];
    
    apiCalendar.setCalendar(addCalendarId);
    if (inputs.calendar == "deadlines") {
      addCalendarId = CALENDAR_ID;
      apiCalendar.setCalendar(CALENDAR_ID);
    }

    var eventInfo = {
      summary: inputs.title,
      //description: inputs.description,
      location: "",
      start: {
        dateTime: (inputs.startDate + "T" + inputs.startTime + ":00" + "-07:00"),
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: (inputs.endDate + "T" + inputs.endTime + ":00" + "-07:00"),
        timeZone: "America/Los_Angeles",
      }
    }
    //console.log("will call addEvent()");
    addEvent(eventInfo, addCalendarId);
    
  };

  const addEvent = (eventInformation, calendarID) => {
    //console.log(calendarID);
    //console.log("In addEvent()");
    //console.log(apiCalendar);
    //console.log(JSON.stringify(eventInformation));
    //console.log(apiCalendar.listEvents());
    apiCalendar.createEvent(eventInformation).then(({ result }) => {
      console.log(result);
      });
    //window.location.reload(false);
    //console.log(eventInformation);
      
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
    getNLPDetails(transcript);
    
  };

  const getNLPDetails = async (speech_text) => {
    console.log(speech_text);
    await fetch(, {
      method: "POST",
      body: JSON.stringify({
        "message": speech_text,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data["Title"]);
        setNLPOutput((values) => [data, ...values]);
        console.log(NLPOutput);

        var eventInfo = {
          summary: data["Title"],
          //description: inputs.description,
          location: "",
          start: {
            dateTime: (data["Start_Date_Time"] + "-07:00"),
            timeZone: "America/Los_Angeles",
          },
          end: {
            dateTime: (data["End_Date_Time"] + "-07:00"),
            timeZone: "America/Los_Angeles",
          }
        }
        //console.log("will call addEvent()");
        addEvent(eventInfo, "hackathongroup21@gmail.com");
        
      })
      .catch((err) => {
        console.log(err.message);
      });

      console.log(JSON.stringify(NLPOutput));


      /*var eventInfo = {
        summary: NLPOutput["0"]["Title"],
        //description: inputs.description,
        location: "",
        start: {
          dateTime: (NLPOutput["0"]["Start_Date_Time"] + "-07:00"),
          timeZone: "America/Los_Angeles",
        },
        end: {
          dateTime: (NLPOutput["0"]["End_Date_Time"] + "-07:00"),
          timeZone: "America/Los_Angeles",
        }
      }
      //console.log("will call addEvent()");
      addEvent(eventInfo, "hackathongroup21@gmail.com");*/

  }

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
                <td className="calendar-card-bottom">
                </td>
              </tr>
              <tr>
                {" "}
                <td className="calendar-card">
                  <label style={{ fontWeight: "bold" }}>Create an Event</label>
                  <button onClick={handleLogin} className="calendar-button-narrow"  disabled = {isSignedIn}>Sign In</button>
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

                    

                    <input id = "submitButton" type="submit" className="calendar-button" value="Create"/>

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
