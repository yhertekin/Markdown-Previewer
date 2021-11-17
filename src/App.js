import React from "react";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

import style from "./App.module.css";

const App = () => {
	return (
		<div className={style.main}>
			<Editor />
			<Preview />
		</div>
	);
};

export default App;
