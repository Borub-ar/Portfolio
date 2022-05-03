import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <h1>Logo</h1>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
