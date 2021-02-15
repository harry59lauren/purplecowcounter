import "./App.css";
import CounterWindow from "./components/CounterWindow";
import axios from 'axios';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#3D1589", height: "100vh" }}>
        <CounterWindow />
    </div>
  );
}

export default App;
