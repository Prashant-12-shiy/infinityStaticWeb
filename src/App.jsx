import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Tournament from "./page/Tournament";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tournament" element={<Tournament />} />
    </Routes>
  );
}

export default App;
