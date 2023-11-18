import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// sorted by date learned
import Greeting from "./Greeting.jsx";
import ConvertToJsx from "./ConvertToJsx.jsx";
import Animals from "./Animals.jsx";
import PassingData from "./PassingData.jsx";
import IntroToState from "./IntroToState.jsx";
import StateControl from "./StateControl.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <ConvertToJsx />
    <Animals />
    <PassingData text="Click me!" fontSize={12} />
    <IntroToState />
    <StateControl />
  </React.StrictMode>,
);
