import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import Reducer, {initialState} from "./Reducer";
import { loadStripe } from "@stripe/stripe-js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
ReactDOM.render(

  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
