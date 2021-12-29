import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectMode } from "../../../../features/counter/modeSlice";
const SideMenus = [
  { title: "Starred", icon: <StarRateIcon /> },

  { title: "Sent", icon: <SendIcon /> },
  { title: "Drafts", icon: <DraftsIcon /> },
  { title: "More", icon: <ArrowDropDownIcon /> },
];
const SideBottomMenus = [
  { title: "New meeting", icon: <VideocamIcon /> },

  { title: "Join meeting", icon: <KeyboardIcon /> },
];

const useStyles = makeStyles((theme) => ({
  optionMenuUnderline: {
    borderBottom: "1px solid whitesmoke",
  },
  optionlistActive: {
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: "#d2e6fa",
    color: "#1976d2",
    marginBottom: "5px",
    cursor: "pointer",
  },
  optionlisthover: {
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: "white",

    marginBottom: "5px",
    cursor: "pointer",
    "&:hover": {
      background: "#E5E7EB",
    },
  },
  optionlistActiveIcon: {
    color: "#1976d2",
  },
  //   Side bar menu bottom
  FooterMeet: {
    color: "#374151",
    paddingLeft: "16px",
    paddingTop: "8px",
  },
}));

function LeftSidebarOptionMenu() {
  const classes = useStyles();
  const navigate = useNavigate();
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
    cooler: "#d93025",
  };

  const LightMode = {
    cooler: "#1976d2",
    syntax: "gray",
    ui: "white",
    uii: "#d2e6fa",
    color: "#1976d2",
    bg: "#eee",
    boderright: "#212121",
    inputColr: "#eef3f8",
    fill: "rgba(0, 0, 0, 0.6)",
  };
  const Theme = BackgroundMode ? DarkMode : LightMode;
  return (
    <div>
      <div className={classes.optionMenuUnderline}>
        <div>
          <ListItem
            style={{ backgroundColor: Theme.uii }}
            className={classes.optionlistActive}
            onClick={() => navigate("/maillist")}
          >
            <ListItemIcon>
              <InboxIcon
                className={classes.optionlistActiveIcon}
                style={{ color: Theme.cooler }}
              />
            </ListItemIcon>

            <ListItemText
              primary="Inbox"
              className={classes.Listoptiontext}
              style={{ color: Theme.cooler }}
            />
            <ListItemText primary="56" style={{ color: Theme.cooler }} />
          </ListItem>
        </div>
        <List>
          {SideMenus.map((SideMenu) => {
            return (
              <ListItem
                className={classes.optionlisthover}
                style={{ backgroundColor: Theme.ui }}
              >
                <ListItemIcon style={{ color: Theme.syntax }}>
                  {SideMenu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={SideMenu.title}
                  style={{ color: Theme.syntax }}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
      {/* // Sidebar Menu Footer */}
      <div>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          className={classes.FooterMeet}
          style={{ color: Theme.syntax }}
        >
          Meet
        </Typography>
        <List>
          {SideBottomMenus.map((menu) => {
            return (
              <ListItem
                className={classes.optionlisthover}
                style={{ backgroundColor: Theme.ui }}
              >
                <ListItemIcon style={{ color: Theme.syntax }}>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={menu.title}
                  style={{ color: Theme.syntax }}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default LeftSidebarOptionMenu;
