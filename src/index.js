import React, { Suspense } from "react";
import { ThemeProvider } from "@material-ui/core";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./config/state/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./app/App";
import { theme } from "./common/assets/jss/appStyles";
// app styles
import "./common/assets/index.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Suspense>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);