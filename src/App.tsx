import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoContainer } from "./components/TodoContainer";
import { TodoItem } from "./components/TodoItem";
import { Filters } from "./components/Filters";

import { useLocalStorageState } from "./hooks/useLocalStorageState";

import { Todo } from "./utils/Types/todo.type";

import "./sass/main.scss";
import { useRef } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";

import githubLightIcon from "./assets/images/icon-github-light.svg";
import githubDarkIcon from "./assets/images/icon-github-dark.svg";

const htmlEl = document.querySelector("html");

export default function App() {
	const [theme, setTheme] = useLocalStorageState<string>("light", "theme");
	htmlEl?.setAttribute("data-theme", theme);

	const [todos, setTodos] = useLocalStorageState<Todo[]>([], "todos");
	let todosShown: Todo[] = todos;

	const dragIndex = useRef(0);
	const draggedOverIndex = useRef(0);

	const [activeFilter, setActiveFilter] = useLocalStorageState<string>("All", "filter");
	if (activeFilter === "Active") {
		todosShown = todos.filter((todo) => !todo.completed);
	} else if (activeFilter === "Completed") {
		todosShown = todos.filter((todo) => todo.completed);
	}

	const isSmallScreen = useMediaQuery("--breakpoint-small");

	function handleToggleTheme() {
		setTheme((theme) => {
			const newTheme = theme === "light" ? "dark" : "light";
			htmlEl?.setAttribute("data-theme", newTheme);
			return newTheme;
		});
	}

	function handleAddTodo(newTodo: Todo) {
		setTodos((todos) => [...todos, newTodo]);
	}

	function handleDeleteTodo(id: string) {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	}

	function handleCompleteTodo(id: string) {
		setTodos((todos) => todos.map((todo) => (todo.id !== id ? todo : { ...todo, completed: !todo.completed })));
	}

	function handleClearCompleted() {
		setTodos((todos) => todos.filter((todo) => todo.completed !== true));
	}

	function handleSetActiveFilter(filter: string) {
		setActiveFilter(filter);
	}

	function handleReorderTodos() {
		const todosClone = [...todos];

		const originalDragIndex = todos.indexOf(todosShown[dragIndex.current]);
		const originalDraggedOverIndex = todos.indexOf(todosShown[draggedOverIndex.current]);
		const [draggedItem] = todosClone.splice(originalDragIndex, 1);
		todosClone.splice(originalDraggedOverIndex, 0, draggedItem);

		setTodos(todosClone);
	}

	return (
		<>
			<main>
				<section className="wrapper">
					<Header theme={theme} onToggleTheme={handleToggleTheme} />

					<TodoForm onAddTodo={handleAddTodo} />

					<TodoContainer
						todos={todos}
						onClearCompleted={handleClearCompleted}
						filters={
							!isSmallScreen ? (
								<Filters activeFilter={activeFilter} onSetActiveFilter={handleSetActiveFilter} />
							) : null
						}
					>
						{todosShown.length === 0 ? (
							<li className="todo-container__empty-container">
								No {`${activeFilter !== "All" ? activeFilter.toLowerCase() : ""}`} todo items left!
							</li>
						) : (
							todosShown.map((todo, index) => (
								<TodoItem
									key={todo.id}
									todo={todo}
									onDeleteTodo={handleDeleteTodo}
									onCompleteTodo={handleCompleteTodo}
									onDragStart={() => (dragIndex.current = index)}
									onDragEnter={() => (draggedOverIndex.current = index)}
									onDragEnd={handleReorderTodos}
								/>
							))
						)}
					</TodoContainer>

					{isSmallScreen && <Filters activeFilter={activeFilter} onSetActiveFilter={handleSetActiveFilter} />}

					<p className="drag-help-info">Drag and drop to reorder list</p>
				</section>
			</main>
			<aside className="social-icons">
				<a className="social-icons__icon" href="https://github.com/Brooklyn-Dev/todo-app" target="_blank">
					<img src={theme === "light" ? githubDarkIcon : githubLightIcon} alt="GitHub Logo"></img>
				</a>
			</aside>
		</>
	);
}
