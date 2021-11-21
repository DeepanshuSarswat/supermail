import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import "./MailBoxpoppup.css";
import SubjectIcon from "@mui/icons-material/Subject";
import Alert from "@mui/material/Alert";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Box from "@mui/material/Box";
import CreateIcon from "@mui/icons-material/Create";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";

import { db } from "../../firebse/firebase";
import firebase from "firebase";
const useStyles = makeStyles((theme) => ({
  typeNewMessage: {
    fontSize: "16px",
    color: "white",
  },
  header_right__icon: {
    color: "white",
  },
  Box__margin: {
    marginBottom: 20,
  },
}));
function MailBoxpoppup({ handleClose }) {
  const classes = useStyles();

  const [to, setto] = useState("");
  const [username, setusername] = useState("");
  const [subject, setsubject] = useState("");
  const [content, setcontent] = useState("");

  const submitSendMail = (e) => {
    e.preventDefault();

    let Data = { to, subject, content };
    console.log(Data);
    handleClose();
    db.collection("email").add({
      to,
      subject,
      content,
      username,
      // for TimeStamp
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const [emailsDatabase, setemailsDatabase] = useState([]);

  useEffect(() => {
    const databaseData = db
      .collection("email")
      .orderBy("timestamp", "desc")
      .onSnapshot((onSnapshot) =>
        onSnapshot.docs.map((doc) => {
          data: doc.data();
        })
      );
    setemailsDatabase(databaseData);
    console.log("emailsDatabase");
  }, []);

  return (
    <div className="MailBoxpoppup">
      <div className="MailBoxpoppup__header">
        <div className="header__left">
          <Typography
            variant="p"
            sx={{ fontWeight: 500 }}
            component="div"
            className={classes.typeNewMessage}
          >
            New Message
          </Typography>
        </div>
        <div className="header_right">
          <IconButton>
            <MinimizeIcon className={classes.header_right__icon} />
          </IconButton>
          <IconButton>
            <OpenInFullIcon className={classes.header_right__icon} />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon className={classes.header_right__icon} />
          </IconButton>
        </div>
      </div>
      <div className="MailBox__form">
        <form onSubmit={submitSendMail}>
          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            className={classes.Box__margin}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              onChange={(e) => setto(e.target.value)}
              id="input-with-sx"
              label="To"
              value={to}
              variant="standard"
              type="email"
              fullWidth
              required
              name="To"
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            className={classes.Box__margin}
          >
            <CreateIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Your Username"
              onChange={(e) => setusername(e.target.value)}
              variant="standard"
              fullWidth
              type="text"
              value={username}
              required
              name="username"
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            className={classes.Box__margin}
          >
            <SubjectIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Subject"
              onChange={(e) => setsubject(e.target.value)}
              variant="standard"
              fullWidth
              type="text"
              value={subject}
              required
              name="Subject"
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            className={classes.Box__margin}
          >
            <ContentPasteIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Content..."
              variant="standard"
              fullWidth
              required
              value={content}
              onChange={(e) => setcontent(e.target.value)}
              multiline
              name="Content"
              type="text"
              rows={3}
            />
          </Box>
          <div className="button_and__options">
            <div className="send__button">
              <Button variant="contained" size="large" type="submit">
                Send
              </Button>
            </div>
            <div className="otherwise__emoji">
              <div className="emoji__left">
                <IconButton>
                  <FormatColorTextIcon />
                </IconButton>
                <IconButton>
                  <InsertLinkIcon />
                </IconButton>
                <IconButton>
                  <EmojiEmotionsIcon />
                </IconButton>
                <IconButton>
                  <InsertDriveFileIcon />
                </IconButton>
                <IconButton>
                  <CreateIcon />
                </IconButton>
                <IconButton>
                  <AttachFileIcon />
                </IconButton>
              </div>
              <div className="emoji__right">
                <IconButton>
                  <MoreVertIcon />
                </IconButton>{" "}
                <IconButton onClick={handleClose}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MailBoxpoppup;
