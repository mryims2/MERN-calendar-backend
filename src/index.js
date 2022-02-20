import React from "react";
import { render } from "react-dom";

import CalendarApp from "./CalendarApp.jsx";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "antd/dist/antd.min.css";
import "moment/locale/es";
import "animate.css";

import "./index.css";

render(<CalendarApp />, document.querySelector("#root"));
