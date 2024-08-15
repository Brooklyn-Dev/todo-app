import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import { Todo } from "./../utils/Types/todo.type";

type TodoFormProps = {
	onAddTodo: (newTodo: Todo) => void;
};

export function TodoForm({ onAddTodo }: TodoFormProps) {
	const [todo, setTodo] = useState("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (todo === "") return;

		const newTodo = {
			task: todo,
			completed: false,
			id: uuidv4(),
		};

		onAddTodo(newTodo);
		setTodo("");
	}

	return (
		<form className="todo-form" onSubmit={(e) => handleSubmit(e)}>
			<span className="todo-form__round"></span>
			<input
				className="todo-form__todo-input"
				type="text"
				placeholder="Create a new todo..."
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className="todo-form__add-todo">+</button>
		</form>
	);
}
