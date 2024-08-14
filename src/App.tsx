import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoContainer } from "./components/TodoContainer";
import { Filters } from "./components/Filters";

import "./sass/main.scss";

export default function App() {
	return (
		<main>
			<section className="wrapper">
				<Header />

				<TodoForm />

				<TodoContainer />

				<Filters />

				<p className="drag-help-info">Drag and drop to reorder list</p>
			</section>
		</main>
	);
}
