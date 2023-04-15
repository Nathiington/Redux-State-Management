import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./Pages/FormPage";


export default function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<FormPage/>} />
      </Routes>
    </Router>
    </>
  );
}
