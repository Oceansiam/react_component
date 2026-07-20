import "./App.css";
import Greetings from "./components/Greetings";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/"about element={<Greetings message="Welcome to My World" />} />
      <Route path="/profile" element={<Greetings message="Profile Page" />}/>
    </Routes>
    // <div className="card">
    //   <Greetings message="This content is rendered on the browser" />
    // </div>
  );
}

export default App;