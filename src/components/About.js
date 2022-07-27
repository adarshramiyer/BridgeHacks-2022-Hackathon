import React from "react";
import IMAGE from "./logo_with_title.jpg";

function About() {
  return (
    <background className="App-background-center-large">
      <table border="0" className="about-table">
        <tr>
          <td>
            <img src={IMAGE} width={800}></img>
          </td>
        </tr>
        <tr>
          <td>
            <label className="about-text">
              According to Steve Prentice, Director of Software Development at Cisco, 98%
              of post-covid meetings will have at least one remote participant.
              And Mithun Baphana, Senior Product Manager at Cisco, says that this poses a
              serious challenge to companies trying to retain talent and build
              an inclusive work environment. It is also difficult for employees
              to manage several unconnected resources.
            </label>
            <label className="about-text-important">Enter meso.</label>
            <br />
            <label className="about-text">
              Meso is your one-stop-shop to efficient, connected, and memorable
              hybrid work. Maintaining organization, employee spirit, and
              company vision has never been easier.
            </label>
            <br />
            <br />
            <table border="0" className="about-table-left">
              <tr>
                <td className="about-table-1">
                  <ul>
                    <label className="about-text-red">
                      <b>Calendar</b>
                    </label>
                    <br />
                    <label className="about-text-small">
                      Meso incorporates an intuitive calendar page which
                      utilizes the Google Calendar API for portability.
                      Additionally, we support convenient voice scheduling using
                      speech-to-text and Natural Language Processing.
                    </label>
                  </ul>
                </td>
                <td className="about-table-2">
                  <ul>
                    <label className="about-text-red">
                      <b>Employee Resources</b>
                    </label>
                    <br />
                    <label className="about-text-small">
                      Our Natural Language Processing Chatbot, SunShine, helps
                      employees with routine People and Communities tasks and
                      mental health concerns. We believe that this technology
                      helps People and Communities focus on driving business
                      strategy and delivering shareholder value.
                    </label>
                  </ul>
                </td>
                <td className="about-table-3">
                  <ul>
                    <label className="about-text-red">
                      <b>Team Bonding</b>
                    </label>
                    <br />
                    <label className="about-text-small">No company is complete without a strong collaborative spirit. Meso offers several team bonding activities to lighten spirits, build team connections, and assist in employee retention.</label>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <br />
      <br />
    </background>
  );
}

export default About;
