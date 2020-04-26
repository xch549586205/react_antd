import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./personalData/App";
import "lib-flexible";
import "./index.css"
ReactDOM.render(
	<div style={{ height: "100%" }}>
		<Router>
			<Route render={(props) => <App {...props} />} />
		</Router>
	</div>
	, document.getElementById("root")
);


