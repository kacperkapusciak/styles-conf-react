import React from "react";
import ReactDOM from "react-dom";
import Root from "store/Root";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const app = (
  <Root>
    <BrowserRouter basename="/styles-conf-react">
      <App />
    </BrowserRouter>
  </Root>
);

ReactDOM.render(app, document.querySelector("#root"));
