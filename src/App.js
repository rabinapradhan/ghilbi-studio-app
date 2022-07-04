import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Homepage from "./components/Homepage";
import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
