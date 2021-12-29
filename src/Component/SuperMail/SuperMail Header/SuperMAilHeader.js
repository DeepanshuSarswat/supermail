import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import "./SuperMAilHeader.css";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useDispatch, useSelector } from "react-redux";

import {
  closenightMode,
  opennightMode,
  selectMode,
} from "../../../features/counter/modeSlice";
function SuperMAilHeader() {
  const BackgroundMode = useSelector(selectMode);
  const dispatch = useDispatch();
  const MOdeChange = () => {
    if (BackgroundMode === false) {
      console.log("value is" + BackgroundMode);
      dispatch(opennightMode());
    }
    if (BackgroundMode === true) {
      console.log("value is" + BackgroundMode);
      dispatch(closenightMode());
    }
  };

  const DarkMode = {
    syntax: "#ddd",
    uii: "#424242",
    ui: "#000",
    bg: "#555",
    boderright: "#e5e7eb",
    inputColr: " #212121",
    fill: "#ddd",
  };

  const LightMode = {
    syntax: "gray",
    ui: "white",
    uii: "#f3f4f6",
    bg: "#eee",
    boderright: "#212121",
    inputColr: "#eef3f8",
    fill: "rgba(0, 0, 0, 0.6)",
  };
  const Theme = BackgroundMode ? DarkMode : LightMode;
  return (
    <div className="SuperMAilHeader" style={{ backgroundColor: Theme.ui }}>
      <div className="SuperMAilHeader__left">
        <IconButton>
          <MenuIcon
            className="SuperMAilHeader__menuIcon"
            style={{ color: Theme.syntax }}
          />
        </IconButton>

        <Typography
          variant="h5"
          component="div"
          className="Logo-text"
          style={{ color: Theme.syntax }}
        >
          Super Mail
        </Typography>
      </div>
      <div
        className="SuperMAilHeader__middle"
        style={{ backgroundColor: Theme.uii }}
      >
        <IconButton>
          <SearchIcon
            className="SuperMAilHeader__middle__searchbar"
            style={{ color: Theme.syntax }}
          />
        </IconButton>

        <input type="text" placeholder="Search Mail" />
      </div>
      <div className="SuperMAilHeader__right">
        <IconButton onClick={MOdeChange}>
          <Brightness4Icon style={{ color: Theme.syntax }} />
        </IconButton>
        <IconButton>
          <HelpOutlineIcon style={{ color: Theme.syntax }} />
        </IconButton>
        <IconButton>
          <AppsIcon className="appsicon" style={{ color: Theme.syntax }} />
        </IconButton>
        <IconButton>
          <SettingsIcon style={{ color: Theme.syntax }} />
        </IconButton>

        <IconButton>
          <Avatar
            className="header__end__Icons"
            aria-label="recipe"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG9Jn2tcpBT9A/profile-displayphoto-shrink_800_800/0/1613406079537?e=1645660800&v=beta&t=krNtXpYZ1Ipn7RlFOfC4YFleDlM-a5EV7XDc9KPj9kU"
          />
        </IconButton>
      </div>
    </div>
  );
}

export default SuperMAilHeader;
