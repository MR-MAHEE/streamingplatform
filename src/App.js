import "./App.css";
import Header from "./Components/Header";
import React from "react";
import Card from "./Components/Card";
import Moviedetails from "./Components/movieDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="/movie" element={<Moviedetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
