import React from "react";
import { AiFillMessage } from "react-icons/ai";
import "./MessageIcon.css";

const MessageIcon = () => {
  return (
    <div className="fixed-message-icon">
      <AiFillMessage className="message-icon" />
    </div>
  );
};

export default MessageIcon;
