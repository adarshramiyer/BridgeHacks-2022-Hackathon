import React from "react";

const DUMMY_DATA = [
  {
    senderId: "client",
    text: "This is the query",
  },
  {
    senderId: "responder",
    text: "This is the response",
  },
];
class Welcome extends React.Component {
  render() {
    return <h1>Hi there! I'm SunShine, and I can help you with any routine People and Communities tasks! I also provide advice on mental health, feel free to ask me anything!</h1>;
  }
}
class  GetTextBox extends React.Component {
  messages() {
    let retstr = [];
    for (var i = 0; i < this.props.count; i++) {
      retstr.push('Message ' + i);
    }
    return retstr.map((s) => { return (<tr><td>{s}<label></label></td></tr>)});
  }
  
  render() {
    console.log(1)
    return (
      <div><table> { this.messages() } </table>
      <input type="text" placeholder="input"></input>
      <button type="submit">Submit</button>
      </div>
    
    );
  }
  
}

function App() {
  
  return (
    <background className="App-background">
      <header className="App-header">
        
        <Welcome/>
        <GetTextBox count="7"></GetTextBox>
        
      </header>
    </background>
  );
}

export default App;