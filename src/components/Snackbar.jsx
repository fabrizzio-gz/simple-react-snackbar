import React, { useContext } from "react";

import "./Snackbar.css";
import SnackbarContext from "./store/snackbar-context";

const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);
  return (
    <div className="snackbar__container">
      <div className="snackbar__label">{snackbarCtx.msg}</div>
      <div className="snackbar__dismiss">&times;</div>
    </div>
  );
};

export default Snackbar;
