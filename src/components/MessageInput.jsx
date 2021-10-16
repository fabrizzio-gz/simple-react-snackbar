import React from "react";

import "./MessageInput.css";

const MessageInput = () => {
  return (
    <div className="app__container">
      <div className="app__center">
        <label htmlFor="snackbar-msg">Message</label>
        <input id="snackbar-msg" type="text" />
      </div>
      <div className="app__center">
        <button className="app__button">Show snackbar</button>
      </div>
    </div>
  );
};

export default MessageInput;
