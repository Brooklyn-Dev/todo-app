import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoContainer } from "./components/TodoContainer";
import { TodoItem } from "./components/TodoItem";
import { Filters } from "./components/Filters";

import { useLocalStorageState } from "./hooks/useLocalStorageState";

import { Todo } from "./utils/Types/todo.type";

import "./sass/main.scss";

const htmlEl = document.querySelector("html");

export default function App() {
	const [theme, setTheme] = useLocalStorageState<string>("light", "theme");
	htmlEl?.setAttribute("data-theme", theme);

	const [todos, setTodos] = useLocalStorageState<Todo[]>([], "todos");

	function handleToggleTheme() {
		setTheme((theme: string) => {
			const newTheme = theme === "light" ? "dark" : "light";
			htmlEl?.setAttribute("data-theme", newTheme);
			return newTheme;
		});
	}

	function handleAddTodo(newTodo: Todo) {
		setTodos((todos: Todo[]) => [...todos, newTodo]);
	}

	function handleDeleteTodo(id: string) {
		setTodos((todos: Todo[]) => todos.filter((todo) => todo.id !== id));
	}

	function handleCompleteTodo(id: string) {
		setTodos((todos: Todo[]) => todos.map((todo) => (todo.id !== id ? todo : { ...todo, completed: true })));
	}

	function handleClearCompleted() {
		setTodos((todos: Todo[]) => todos.filter((todo) => todo.completed !== true));
	}

	return (
		<main>
			<section className="wrapper">
				<Header theme={theme} onToggleTheme={handleToggleTheme} />

				<TodoForm onAddTodo={handleAddTodo} />

				<TodoContainer onClearCompleted={handleClearCompleted}>
					{todos.length === 0 ? (
						<li className="todo-container__empty-container">No todo items left!</li>
					) : (
						<>
							{todos.map((todo: Todo) => (
								<TodoItem
									key={todo.id}
									todo={todo}
									onDeleteTodo={handleDeleteTodo}
									onCompleteTodo={handleCompleteTodo}
								/>
							))}
						</>
					)}
				</TodoContainer>

				<Filters />

				<p className="drag-help-info">Drag and drop to reorder list</p>
			</section>
		</main>
	);
}
