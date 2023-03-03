import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "./store";

import Root from "./Root";

import "./scss/index.scss";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Root store={store} />
	</React.StrictMode>
);
