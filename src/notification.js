import React from "react";
import { FaBell } from "react-icons/fa";
import "./notification.css"

export default function Notification() {
  return (
    <div className="notification">
      <FaBell className="notification-icon" />
      <div className="notification-count">2</div>
    </div>
  );
}
