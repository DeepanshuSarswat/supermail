import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import MailBoxpoppup from "../../MailBoxpoppup/MailBoxpoppup";

const useStyles = makeStyles((theme) => ({
  ButtonIconCompose: {
    marginTop: "15px",
    marginLeft: "10px",
    marginBottom: "15px",
    padding: "15px",
    borderRadius: "30px",
    boxShadow: "0px 2px 5px -2px rgba(0,0,0,0.75)",
  },
  Popup: {
    padding: 0,
    // width: "500px",
  },
  DialogWidth: {
    width: "500px",
    height: "400px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
function LeftSidebarCompose() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        fontSize="large"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        className={classes.ButtonIconCompose}
      >
        Compose
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.Popup}>
          <MailBoxpoppup handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LeftSidebarCompose;
