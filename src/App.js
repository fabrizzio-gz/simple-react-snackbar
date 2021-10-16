import React, { useContext } from "react";

import MessageInput from "./components/MessageInput";
import Snackbar from "./components/Snackbar";
import SnackbarContext from "./components/store/snackbar-context";

const App = () => {
  const snackbarCtx = useContext(SnackbarContext);
  return (
    <>
      <MessageInput />
      {snackbarCtx.isDisplayed && <Snackbar />}
    </>
  );
};

export default App;
