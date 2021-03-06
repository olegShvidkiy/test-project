import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import App from "./components/app/app";
import { store, persistor } from "./store/index";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
