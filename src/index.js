import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MarkdownProvider } from "./context/MarkdownContext";

ReactDOM.render(
	<React.StrictMode>
		<MarkdownProvider>
			<App />
		</MarkdownProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
