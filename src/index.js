import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import AppContainer from "./containers/AppContainer";
import rootReducer from "./reducers/";
import rootMiddleware from "./middlewares";

const store = createStore(rootReducer, rootMiddleware);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
