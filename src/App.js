import "./App.css";
import { Linkedin } from "react-bootstrap-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="bean.gif"></img>
        <p>Incoming...</p>
        <center>
          <a href="https://www.linkedin.com/in/lmadej/">
            <Linkedin fill="white" size={32} />
          </a>
        </center>
      </header>
    </div>
  );
}

export default App;
