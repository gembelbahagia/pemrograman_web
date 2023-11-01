import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/kontak";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
