import { v4 as uuidv4 } from "uuid";

import { useRef, useState } from "react";

import { useKey } from "./../hooks/useKey";

import { Todo } from "./../utils/Types/todo.type";

type TodoFormProps = {
	onAddTodo: (newTodo: Todo) => void;
};

export function TodoForm({ onAddTodo }: TodoFormProps) {
	const [todo, setTodo] = useState("");

	const inputEl = useRef<HTMLInputElement>(null);

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

	useKey("Enter", () => {
		if (document.activeElement === inputEl.current) return;
		if (!inputEl.current) return;
		inputEl.current.focus();
		setTodo("");
	});

	return (
		<form className="todo-form" onSubmit={(e) => handleSubmit(e)}>
			<span className="todo-form__round"></span>
			<input
				className="todo-form__todo-input"
				type="text"
				placeholder="Create a new todo..."
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				ref={inputEl}
			/>
			<button className="todo-form__add-todo">+</button>
		</form>
	);
}
