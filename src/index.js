import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
