import { useState } from "react";

import { Todo } from "./../utils/Types/todo.type";

import crossIcon from "./../assets/images/icon-cross.svg";

type TodoItemProps = {
	todo: Todo;
	onDeleteTodo: (id: string) => void;
	onCompleteTodo: (id: string) => void;
	onDragStart: () => void;
	onDragEnter: () => void;
	onDragEnd: () => void;
};

export function TodoItem({ todo, onDeleteTodo, onCompleteTodo, onDragStart, onDragEnter, onDragEnd }: TodoItemProps) {
	const [isChecked, setIsChecked] = useState(todo.completed);

	function handleDelete() {
		onDeleteTodo(todo.id);
	}

	function handleComplete() {
		onCompleteTodo(todo.id);
		setIsChecked((isChecked) => !isChecked);
	}

	return (
		<li
			className="todo-container__todo-item"
			draggable
			onDragStart={onDragStart}
			onDragEnter={onDragEnter}
			onDragEnd={onDragEnd}
			onDragOver={(e: React.DragEvent<HTMLLIElement>) => e.preventDefault()}
		>
			<label className="todo-container__todo-item-checkbox">
				<input type="checkbox" checked={isChecked} onChange={handleComplete} />
				<span className="checkbox-round"></span>
			</label>

			<p className={`todo-container__todo ${isChecked ? "strike" : ""}`} onClick={handleComplete}>
				{todo.task}
			</p>

			<map className="icon-btn" onClick={handleDelete}>
				<img src={crossIcon} alt="cross svg" />
			</map>
		</li>
	);
}
