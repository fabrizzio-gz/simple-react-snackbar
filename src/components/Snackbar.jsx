import React from "react";

import "./Snackbar.css";

const Snackbar = () => {
  return (
    <div className="snackbar__container">
      <div className="snackbar__label">Hello!</div>
      <div className="snackbar__dismiss">&times;</div>
    </div>
  );
};

export default Snackbar;
