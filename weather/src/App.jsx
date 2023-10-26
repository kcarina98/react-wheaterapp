import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Header from "./assets/components/Header";
import Weather from "./assets/pages/Wheater";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/:city" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
