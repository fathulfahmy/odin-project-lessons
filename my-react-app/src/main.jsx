import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Greeting from "./Greeting.jsx";
import ConvertToJsx from "./ConvertToJsx.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <ConvertToJsx />
  </React.StrictMode>,
);
