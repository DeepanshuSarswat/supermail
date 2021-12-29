import React from "react";
import SuperMAilHeader from "../SuperMail Header/SuperMAilHeader";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SuperMailSidebar from "../SuperMAil left SideBar/SidebarHome/SuperMailSidebar";
import "./SuperMail.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperMailDetails from "../Super Mail Right Sidebar/SuperMailDetails";
import SupermailList from "../Super Mail Right Sidebar/SupermailList";
import MailBoxpoppup from "../MailBoxpoppup/MailBoxpoppup";
import { useDispatch, useSelector } from "react-redux";

import { selectMode } from "../../../features/counter/modeSlice";
import { userSelect } from "../../../features/counter/userSlice";
import LoginPage from "../LoginPage/LoginPage";
function SuperMail() {
  const user = useSelector(userSelect);
  const BackgroundMode = useSelector(selectMode);
  const dispatch = useDispatch();
  console.log(user);
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
    // <LoginPage />

    <BrowserRouter>
      {!user ? (
        <LoginPage />
      ) : (
        <div style={{ backgroundColor: Theme.ui }}>
          <SuperMAilHeader />
          <div className="Supermail__Body">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={2} xs={12}>
                  <SuperMailSidebar />
                </Grid>
                <Grid item md={10} xs={12}>
                  <Routes>
                    <Route path="/maillist" element={<SupermailList />}></Route>
                    <Route
                      path="/supermailDetail"
                      element={<SuperMailDetails />}
                    ></Route>
                  </Routes>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default SuperMail;

{
  /* <div className="Mailbox__box">
<MailBoxpoppup />
</div> */
}
