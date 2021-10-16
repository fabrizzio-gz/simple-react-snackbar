import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SnackBarContextProvider } from "./components/store/snackbar-context";

ReactDOM.render(
  <SnackBarContextProvider>
    <App />
  </SnackBarContextProvider>,
  document.getElementById("root")
);
