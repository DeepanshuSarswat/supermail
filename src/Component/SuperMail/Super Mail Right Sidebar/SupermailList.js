import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/Inbox";
import Typography from "@mui/material/Typography";
import "./SupermailList.css";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { makeStyles } from "@material-ui/core/styles";
import SuperMailListData from "./SuperMailListData";
import MailBoxpoppup from "../MailBoxpoppup/MailBoxpoppup";
import { db } from "../../firebse/firebase";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";

import { selectMode } from "../../../features/counter/modeSlice";
const useStyles = makeStyles((theme) => ({
  typotext: {
    marginLeft: "16px",
    color: "#5f6368",
  },
  typePrimaryColor: {
    marginLeft: "16px",
    color: "#d93025",
  },
}));

function SupermailList() {
  const classes = useStyles();

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    const getFromFirebase = db.collection("email").orderBy("timestamp", "desc");
    getFromFirebase.onSnapshot((querySnapShot) => {
      const saveFirebaseTodos = [];
      querySnapShot.forEach((doc) => {
        saveFirebaseTodos.push(doc.data());
      });
      setTodos(saveFirebaseTodos);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

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
    <div className="email__list" style={{ backgroundColor: Theme.ui }}>
      <div
        className="email__list__seting"
        style={{ backgroundColor: Theme.ui }}
      >
        <div className="email__list__seting__left">
          <IconButton>
            {" "}
            <Checkbox style={{ color: Theme.syntax }} />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon style={{ color: Theme.syntax }} />
          </IconButton>
          <IconButton>
            <RefreshIcon style={{ color: Theme.syntax }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ color: Theme.syntax }} />
          </IconButton>
        </div>
        <div className="email__list__seting__right">
          <IconButton>
            {" "}
            <ChevronLeftIcon style={{ color: Theme.syntax }} />
          </IconButton>
          <IconButton>
            <ChevronRightIcon style={{ color: Theme.syntax }} />
          </IconButton>
          <IconButton>
            <KeyboardIcon style={{ color: Theme.syntax }} />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon style={{ color: Theme.syntax }} />
          </IconButton>
        </div>
      </div>
      <div className="email__card">
        <div className="email_card__child">
          <div className="email__card_primary">
            <InboxIcon className="email__card__icon" />
            <Typography
              variant="p"
              component="div"
              className={classes.typePrimaryColor}
            >
              Primary
            </Typography>
          </div>
          <div className="email__card__promotion">
            <PeopleIcon
              className="email__card__icon"
              style={{ color: Theme.syntax }}
            />
            <Typography
              variant="p"
              component="div"
              className={classes.typotext}
              style={{ color: Theme.syntax }}
            >
              Social
            </Typography>
          </div>
          <div
            className="email__card__promotion"
            style={{ color: Theme.syntax }}
          >
            <LocalOfferIcon
              className="email__card__icon"
              style={{ color: Theme.syntax }}
            />
            <Typography
              variant="p"
              component="div"
              className={classes.typotext}
              style={{ color: Theme.syntax }}
            >
              Promotion
            </Typography>
          </div>
        </div>
      </div>
      {console.log(todos)}
      {todos.map((data, id) => {
        return (
          <div className="Email__list__data">
            <SuperMailListData
              id={id}
              username={data.username}
              to={data.to}
              timestamp={data.timestamp}
              content={data.content}
              subject={data.subject}
            />
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
}

export default SupermailList;
