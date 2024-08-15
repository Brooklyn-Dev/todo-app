import crossIcon from "./../assets/images/icon-cross.svg";

import { Todo } from "./../utils/Types/todo.type";

type TodoItemProps = { todo: Todo; onDeleteTodo: (id: string) => void };

export function TodoItem({ todo, onDeleteTodo }: TodoItemProps) {
	function handleClick() {
		onDeleteTodo(todo.id);
	}

	return (
		<li className="todo-container__todo-item" draggable="true">
			<label className="todo-container__todo-item-checkbox">
				<input type="checkbox" />
				<span className="checkbox-round"></span>
			</label>

			<p className="todo-container__todo">{todo.task}</p>

			<map className="btn" onClick={handleClick}>
				<img src={crossIcon} alt="cross svg" />
			</map>
		</li>
	);
}
