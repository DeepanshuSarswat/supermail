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
import { useSelector } from "react-redux";
import { userSelect } from "../../../features/counter/userSlice";
import LoginPage from "../LoginPage/LoginPage";
function SuperMail() {
  const user = useSelector(userSelect);

  return (
    // <LoginPage />

    <BrowserRouter>
      {!user ? (
        <LoginPage />
      ) : (
        <div>
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
