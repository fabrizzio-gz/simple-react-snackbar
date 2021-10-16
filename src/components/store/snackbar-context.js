import React, { useState } from "react";

const SnackbarContext = React.createContext({
  msg: "",
  isDisplayed: false,
  displayMsg: (msg) => {},
  onClose: () => {},
});

let timer;

export const SnackBarContextProvider = (props) => {
  const [msg, setMsg] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  const displayHandler = (msg) => {
    setMsg(msg);
    setIsDisplayed(true);
    timer = setTimeout(() => {
      closeHandler();
    }, 3000); // close snackbar after 3 seconds
  };
  const closeHandler = () => {
    clearTimeout(timer);
    setIsDisplayed(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        msg,
        isDisplayed,
        displayMsg: displayHandler,
        onClose: closeHandler,
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
