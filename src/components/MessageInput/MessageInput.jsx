import React, { useContext, useRef } from "react";

import "./MessageInput.css";
import SnackbarContext from "../store/snackbar-context";

const MessageInput = () => {
  const inputRef = useRef();
  const snackbarCtx = useContext(SnackbarContext);

  const clickHandler = () => {
    const msg = inputRef.current.value;
    snackbarCtx.displayMsg(msg);
  };

  return (
    <div className="app__container">
      <div className="app__center">
        <label htmlFor="snackbar-msg">Message</label>
        <input ref={inputRef} id="snackbar-msg" type="text" />
      </div>
      <div className="app__center">
        <button className="app__button" onClick={clickHandler}>
          Show snackbar
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
