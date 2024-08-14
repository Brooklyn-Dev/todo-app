import { useState } from "react";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoContainer } from "./components/TodoContainer";
import { Filters } from "./components/Filters";

import "./sass/main.scss";

export default function App() {
	const [isLight, setIsLight] = useState(true);

	function handleToggleTheme() {
		setIsLight((prevIsLight: boolean) => {
			const newIsLight = !prevIsLight;
			document.querySelector("html")?.setAttribute("data-theme", newIsLight ? "light" : "dark");
			return newIsLight;
		});
	}

	return (
		<main>
			<section className="wrapper">
				<Header isLight={isLight} onToggleTheme={handleToggleTheme} />

				<TodoForm />

				<TodoContainer />

				<Filters />

				<p className="drag-help-info">Drag and drop to reorder list</p>
			</section>
		</main>
	);
}
