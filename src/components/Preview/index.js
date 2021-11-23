import React from "react";
import style from "./Preview.module.css";

import { useMarkdown } from "../../context/MarkdownContext";

const Preview = () => {
	const { markedText } = useMarkdown();
	return (
		<div className={style.preview}>
			<div
				className={style.previewText}
				dangerouslySetInnerHTML={{ __html: markedText }}
			></div>
		</div>
	);
};

export default Preview;
