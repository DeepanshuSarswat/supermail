import React from "react";
import LeftSidebarCompose from "../LeftSidebarCompose/LeftSidebarCompose";
import LeftSidebarOptionMenu from "../LeftSidebarOptionMenu/LeftSidebarOptionMenu";
import "./SuperMailSidebar.css";
function SuperMailSidebar() {
  return (
    <div className="sidebar__Left">
      {/* compose button  */}
      <LeftSidebarCompose />

      <LeftSidebarOptionMenu />
    </div>
  );
}

export default SuperMailSidebar;
