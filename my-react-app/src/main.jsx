import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// sorted by date learned
import Greeting from "./Greeting.jsx";
import FirstComponent from "./ConvertToJsx.jsx";
import Animals from "./Animals.jsx";
import Button from "./PassingData.jsx";
import ChangeColor from "./IntroToState.jsx";
import Person from "./ControllingState.jsx";
import Clock from "./SideEffect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <FirstComponent />
    <Animals />
    <Button text="Click me!" fontSize={12} />
    <ChangeColor />
    <Person />
    <Clock />
  </React.StrictMode>,
);
