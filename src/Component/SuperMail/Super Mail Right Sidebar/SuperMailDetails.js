import React from "react";
import "./SuperMailDetails.css";
import { IconButton } from "@mui/material";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteIcon from "@mui/icons-material/Delete";
import DraftsIcon from "@mui/icons-material/Drafts";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Avatar } from "@mui/material";
import { selectMode } from "../../../features/counter/modeSlice";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { openMailBox } from "../../../features/counter/mailSlice";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  IconButtonRightMargin: {
    marginRight: "15px",
  },
  typeSubjectNameColor: {
    fontWeight: "400",
    color: "#202124",
    fontSize: "1.375rem",
  },
  email___Subject__heading__left__sender: {
    fontSize: "14px",
    color: "#202124",
    marginRight: "10px",
  },
  email___Subject__heading___right__time: {
    fontSize: "0.75rem",
    color: "#5f6368",
    marginRight: "15px",
  },
}));
function SuperMailDetails() {
  const classes = useStyles();
  const navigate = useNavigate();
  const selectedMails = useSelector(openMailBox);

  console.log(selectedMails);
  const BackgroundMode = useSelector(selectMode);
  const dispatch = useDispatch();

  const DarkMode = {
    syntax: "#ddd",
    syn: "#ddd",
    uii: "#424242",
    ui: "#000",
    bg: "#555",
    boderright: "#e5e7eb",
    inputColr: " #212121",
    fill: "#ddd",
    color: "#ddd",
    heading: "white",
    time: "lightgray",
    times: "gray",
  };

  const LightMode = {
    times: "black",
    time: "#5f6368",
    heading: "#202124",
    syn: "black",
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
    <div className="SupermailDetails">
      <div className="email__list">
        <div className="email__list__seting1">
          <div className="email__list__seting__left1">
            <IconButton
              className={classes.IconButtonRightMargin}
              onClick={() => navigate("/maillist")}
            >
              <ArrowBackIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton className={classes.IconButtonRightMargin}>
              {" "}
              <ArchiveIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton className={classes.IconButtonRightMargin}>
              <ReportGmailerrorredIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton className={classes.IconButtonRightMargin}>
              <DeleteIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton className={classes.IconButtonRightMargin}>
              <DraftsIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton className={classes.IconButtonRightMargin}>
              {" "}
              <WatchLaterIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton className={classes.IconButtonRightMargin}>
              <AddTaskIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton className={classes.IconButtonRightMargin}>
              <DriveFileMoveIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton className={classes.IconButtonRightMargin}>
              <LabelIcon style={{ color: Theme.syntax }} />
            </IconButton>
            <IconButton>
              <MoreVertIcon style={{ color: Theme.syntax }} />
            </IconButton>
          </div>
          <div className="email__list__seting__right1">
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
      </div>
      <div className="email___Subject__heading">
        <div className="email___subject__name">
          <Typography
            variant="h6"
            component="div"
            style={{ color: Theme.heading }}
            className={classes.typeSubjectNameColor}
          >
            {selectedMails.subject}
          </Typography>
        </div>
        <div className="emai__subject__icon">
          <IconButton>
            {" "}
            <LocalPrintshopIcon />
          </IconButton>
          <IconButton>
            {" "}
            <OpenInNewIcon />
          </IconButton>
        </div>
      </div>
      <div className="email___Subject__heading__sender">
        <div className="email___Subject__heading__avatar">
          <IconButton>
            <Avatar
              className="email___Subject__heading__avatar__icon"
              aria-label="recipe"
            />
          </IconButton>
        </div>
        <div className="email___Subject__heading__left__and__right">
          <div className="email___Subject__heading__left">
            <Typography
              variant="h6"
              component="div"
              style={{ color: Theme.times }}
              className={classes.email___Subject__heading__left__sender}
              sx={{ fontWeight: "bold", m: 1 }}
            >
              {selectedMails.username}
              {/* {selectedMails.username} */}
            </Typography>
            <div>
              <Typography
                variant="h6"
                component="div"
                style={{ color: Theme.time }}
                className={classes.email___Subject__heading___right__time}
                sx={{ fontWeight: "bold", m: 1 }}
              >
                {" "}
                {selectedMails.to}
              </Typography>
            </div>
          </div>
          <div className="email___Subject__heading___right">
            <Typography
              variant="h6"
              style={{ color: Theme.time }}
              component="div"
              className={classes.email___Subject__heading___right__time}
            >
              Nov 14, 2021, 8:07 PM (12 hours ago)
            </Typography>

            <IconButton
              className={classes.remove__icon__button__padding__top__bottom}
            >
              {" "}
              <StarBorderIcon />
            </IconButton>
            <IconButton
              className={classes.remove__icon__button__padding__top__bottom}
            >
              {" "}
              <ReplyIcon />
            </IconButton>
            <IconButton
              className={classes.remove__icon__button__padding__top__bottom}
            >
              {" "}
              <MoreVertIcon />{" "}
            </IconButton>
          </div>
        </div>
      </div>
      <div className="email__description">
        <Typography variant="p" component="div" gutterBottom>
          Dear Deepanshu .,
        </Typography>
        <Typography
          variant="p"
          component="div"
          gutterBottom
          style={{ color: Theme.syn }}
        >
          {selectedMails.content}
        </Typography>
      </div>
    </div>
  );
}

export default SuperMailDetails;
