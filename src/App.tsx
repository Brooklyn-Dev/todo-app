import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoContainer } from "./components/TodoContainer";
import { Filters } from "./components/Filters";

import { useLocalStorageState } from "./hooks/useLocalStorageState";

import "./sass/main.scss";

const htmlEl = document.querySelector("html");

export default function App() {
	const [theme, setTheme] = useLocalStorageState("light", "theme");
	htmlEl?.setAttribute("data-theme", theme);

	function handleToggleTheme() {
		setTheme((theme: string) => {
			const newTheme = theme === "light" ? "dark" : "light";
			htmlEl?.setAttribute("data-theme", newTheme);
			return newTheme;
		});
	}

	return (
		<main>
			<section className="wrapper">
				<Header theme={theme} onToggleTheme={handleToggleTheme} />

				<TodoForm />

				<TodoContainer />

				<Filters />

				<p className="drag-help-info">Drag and drop to reorder list</p>
			</section>
		</main>
	);
}
