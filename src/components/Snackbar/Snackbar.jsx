import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./Snackbar.css";
import SnackbarContext from "../store/snackbar-context";

const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);

  return ReactDOM.createPortal(
    <div className="snackbar__container">
      <div className="snackbar__label">{snackbarCtx.msg || "Hello!"}</div>
      <div className="snackbar__dismiss" onClick={snackbarCtx.onClose}>
        &times;
      </div>
    </div>,
    document.getElementById("snackbar__root")
  );
};

export default Snackbar;
