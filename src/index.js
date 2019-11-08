import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { setBasepath } from "hookrouter";

setBasepath("/trivia");
ReactDOM.render(<App />, document.getElementById("root"));
