import React from "react";
import style from "./Editor.module.css";

import { useMarkdown } from "../../context/MarkdownContext";

const Editor = () => {
	const { text, setText } = useMarkdown();
	return (
		<div className={style.editor}>
			<textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
			></textarea>
		</div>
	);
};

export default Editor;
