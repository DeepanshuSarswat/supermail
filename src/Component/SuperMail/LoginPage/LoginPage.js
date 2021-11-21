import * as React from "react";
import Button from "@mui/material/Button";
import "./LoginPage.css";

import { login } from "../../../features/counter/userSlice";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import { auth, provider } from "../../firebse/firebase";
import firebase from "firebase";

function LoginPage() {
  const dispatch = useDispatch();

  const Login = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photourl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="LoginPage__parents">
      <div className="LoginPage">
        <div className="LoginPage__Container">
          <Typography variant="h2" component="div">
            Super Mail
          </Typography>
        </div>
        <div className="Login__Button">
          <Button variant="contained" onClick={Login} className="login_buuton">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
