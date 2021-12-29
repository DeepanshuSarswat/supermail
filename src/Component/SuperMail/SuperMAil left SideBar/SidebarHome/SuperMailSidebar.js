import React from "react";
import LeftSidebarCompose from "../LeftSidebarCompose/LeftSidebarCompose";
import LeftSidebarOptionMenu from "../LeftSidebarOptionMenu/LeftSidebarOptionMenu";
import "./SuperMailSidebar.css";
import { useDispatch, useSelector } from "react-redux";

import { selectMode } from "../../../../features/counter/modeSlice";
function SuperMailSidebar() {
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
    <div className="sidebar__Left" style={{ backgroundColor: Theme.ui }}>
      {/* compose button  */}
      <LeftSidebarCompose />

      <LeftSidebarOptionMenu />
    </div>
  );
}

export default SuperMailSidebar;
