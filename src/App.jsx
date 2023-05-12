import React, { useState, useEffect } from "react";
import { Header, Navbar } from "./components";

const App = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	//Change theme
	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div>
			<Navbar toggleTheme={toggleTheme} theme={theme} />
			<Header />
		</div>
	);
};

export default App;
