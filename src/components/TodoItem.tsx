import { useState } from "react";
import crossIcon from "./../assets/images/icon-cross.svg";

import { Todo } from "./../utils/Types/todo.type";

type TodoItemProps = { todo: Todo; onDeleteTodo: (id: string) => void; onCompleteTodo: (id: string) => void };

export function TodoItem({ todo, onDeleteTodo, onCompleteTodo }: TodoItemProps) {
	const [isChecked, setIsChecked] = useState(todo.completed);

	function handleDelete() {
		onDeleteTodo(todo.id);
	}

	function handleComplete() {
		onCompleteTodo(todo.id);
		setIsChecked((isChecked) => !isChecked);
	}

	return (
		<li className={`todo-container__todo-item ${isChecked ? "strike" : ""}`} draggable="true">
			<label className="todo-container__todo-item-checkbox">
				<input type="checkbox" checked={isChecked} onChange={handleComplete} />
				<span className="checkbox-round"></span>
			</label>

			<p className="todo-container__todo" onClick={handleComplete}>
				{todo.task}
			</p>

			<map className="btn" onClick={handleDelete}>
				<img src={crossIcon} alt="cross svg" />
			</map>
		</li>
	);
}
