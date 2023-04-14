import "./App.css";
import React from "react";
import Card from "./Components/Card";
import MovieDetails from "./Components/movieDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="/movie" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
