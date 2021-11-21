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

function SuperMAilHeader() {
  return (
    <div className="SuperMAilHeader">
      <div className="SuperMAilHeader__left">
        <IconButton>
          <MenuIcon className="SuperMAilHeader__menuIcon" />
        </IconButton>

        <Typography variant="h5" component="div" className="Logo-text">
          Super Mail
        </Typography>
      </div>
      <div className="SuperMAilHeader__middle">
        <IconButton>
          <SearchIcon className="SuperMAilHeader__middle__searchbar" />
        </IconButton>

        <input type="text" placeholder="Search Mail" />
      </div>
      <div className="SuperMAilHeader__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <AppsIcon className="appsicon" />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>

        <IconButton>
          <Avatar
            className="header__end__Icons"
            aria-label="recipe"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG9Jn2tcpBT9A/profile-displayphoto-shrink_400_400/0/1613406079537?e=1639612800&v=beta&t=C7uV100eYbwFZR_Ny0KRaLBMv40IZzvttEBWJqb_pZY"
          />
        </IconButton>
      </div>
    </div>
  );
}

export default SuperMAilHeader;
