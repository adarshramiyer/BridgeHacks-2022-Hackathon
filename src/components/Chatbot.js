import { useState } from "react";
import "./App.css";
import IMAGE from "./Send_Button.jpg";

const imageStyle = {
  marginBottom: "30",
  paddingBottom: "30",
};

function App() {
  const [inputFields, setInputFields] = useState([
    {
      senderID: "SunShine",
      message:
        "Hi, I'm SunShine! I can help with routine People and Communities tasks, and offer advice on mental health. Feel free to ask me anything! ",
    },
  ]);

  const [messageField, setMessageField] = useState([{ message: "" }]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const handleInputChange = (event) => {
    var messageText = event.target.value;
    setMessageField([{ message: messageText }]);
  };

  const addFields = () => {
    var messageText = messageField[0]["message"];
    if (messageText != "") {
      let newfield = { senderID: "You", message: messageText };
      setInputFields([...inputFields, newfield]);
      setMessageField([{ message: "" }]);
    }
    if (inputFields.length >= 7) {
      let data = [...inputFields];
      while (data.length >= 7) {
        data.splice(0, 1);
      }
      setInputFields(data);
    }
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const submit = (event) => {
    event.preventDefault();

    // Validation
    var validEntry = true;
  };

  return (
    <div>
      <div className="App-background-chatbot">
        <table border="0" className="chatbot-table">
          <tr>
            <td>
              <div>
                <table border="0" className="resources-card-outline">
                  <tr>
                    {" "}
                    <td className="resources-card">
                      <label style={{ fontWeight: "bold" }}>Resources</label>
                      <br />

                      <a href="https://www.cisco.com/c/r/team-development/ner/en/index.html">
                        Cisco Employee Toolkit
                      </a>
                      <br />
                      <a href="https://www.cisco.com/c/en/us/about/inclusion-diversity/employee-resource-organizations.html">
                        Cisco Employee Resource Organizations
                      </a>
                      <br />
                      <a href="https://www.mentalhealthfirstaid.org/mental-health-resources/">
                        Mental Health First Aid
                      </a>
                      <br />
                      <a href="https://www.samhsa.gov/find-help/national-helpline">
                        SAMHSA Helpline
                      </a>
                      <br />
                      <br />
                      <label>
                        At Cisco, our mission is to Power an Inclusive Future
                        for All. We are committed to a culture where all people
                        feel welcomed, valued, respected, accepted, and heard.
                      </label>
                    </td>
                  </tr>
                </table>
              </div>
            </td>

            <td className="chatbot-column">
              <form onSubmit={submit}>
                {inputFields.map((input, index) => {
                  return (
                    <div key={index}>
                      <label
                        className="senderID"
                        name="senderID"
                        value={input.senderID || ""}
                      >
                        {input.senderID}
                      </label>
                      <br />
                      <label
                        className={
                          input.senderID == "SunShine"
                            ? "bot-message"
                            : "you-message"
                        }
                        name="message"
                        value={input.message || ""}
                      >
                        {input.message}
                      </label>
                    </div>
                  );
                })}
                {messageField.map((input, index) => {
                  return (
                    <div key={index}>
                      <input
                        className="Chatbot-input"
                        name="message"
                        placeholder="Enter your message..."
                        value={input.message}
                        onChange={handleInputChange}
                      ></input>
                      <button className="Send-button" onClick={addFields}>
                        <img src={IMAGE} width={100} style={imageStyle} />
                      </button>
                    </div>
                  );
                })}
              </form>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
