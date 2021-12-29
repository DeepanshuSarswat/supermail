import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectMode } from "./features/counter/modeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperMail from "./Component/SuperMail/SuperMAilHome/SuperMail";
function App() {
  const BackgroundMode = useSelector(selectMode);
  const dispatch = useDispatch();

  const DarkMode = {
    syntax: "#ddd",
    uii: "#424242",
    ui: "#000",
    bg: "#555",
    boderright: "#e5e7eb",
    inputColr: " #212121",
    fill: "#ddd",
    color: "#ddd",
  };

  const LightMode = {
    syntax: "gray",
    ui: "white",
    uii: "white",
    color: "#1976d2",
    bg: "#eee",
    boderright: "#212121",
    inputColr: "#eef3f8",
    fill: "rgba(0, 0, 0, 0.6)",
  };
  const Theme = BackgroundMode ? DarkMode : LightMode;
  return (
    <div className="App" style={{ backgroundColor: Theme.ui }}>
      <SuperMail />
    </div>
  );
}

export default App;
