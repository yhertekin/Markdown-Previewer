import { parse } from "marked";

import { createContext, useContext, useEffect, useState } from "react";

const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
	const [text, setText] = useState("");
	const [markedText, setMarkedText] = useState("");

	useEffect(() => {
		setMarkedText(parse(text));
	}, [text]);

	const values = { text, setText, markedText };

	return (
		<MarkdownContext.Provider value={values}>
			{children}
		</MarkdownContext.Provider>
	);
};

export const useMarkdown = () => useContext(MarkdownContext);
