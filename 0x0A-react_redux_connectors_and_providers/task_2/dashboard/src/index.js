import React from "react";
import ReactDOM from "react-dom";
import { ConnectedApp } from "./App/App";
import { applyMiddleware, createStore } from "redux";
import uiReducer from "./reducers/uiReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
