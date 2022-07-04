import React from 'react';
import "./topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";
import InfoIcon from '@material-ui/icons/Info';

export default function Topbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        <span className="logo">Dashboard</span>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <NotificationsNone />
          <span className=""></span>
        </div>
        <div className="topbarIconContainer">
          <InfoIcon />
          <span className=""></span>
        </div>
        <div className="topbarIconContainer">
          <Settings />
        </div>
        <img src="https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg" alt="" className="topAvatar" />
      </div>
    </div>
  </div>
  )
}
