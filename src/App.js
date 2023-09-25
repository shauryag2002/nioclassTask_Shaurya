import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Test from "./Components/Test/Test";
import Final from "./Components/Final/Final";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/submit" element={<Final />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
