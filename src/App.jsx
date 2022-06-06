import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    // <main>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    // </main>
  );
}
