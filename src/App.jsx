import "./App.css";
import Greetings from "./components/Greetings";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"about element={<Greetings message="Welcome to My World" />} />
      <Route path="/profile" element={<Greetings message="Profile Page" />}/>
    </Routes>
    </BrowserRouter>
    // <div className="card">
    //   <Greetings message="This content is rendered on the browser" />
    // </div>
  );
}

export default App;