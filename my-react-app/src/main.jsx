import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Greeting from "./Greeting.jsx";
import ConvertToJsx from "./ConvertToJsx.jsx";
import Animals from "./Animals.jsx";
import PassingData from "./PassingData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <ConvertToJsx />
    <Animals />
    <PassingData text="Click me" color="yellow" fontSize={12} />
  </React.StrictMode>,
);
