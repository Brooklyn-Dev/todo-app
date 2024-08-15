import { useEffect, useState } from "react";
import { Todo } from "./../utils/Types/todo.type";

type TodoContainerProps = {
	children: React.ReactNode;
	todos: Todo[];
	onClearCompleted: () => void;
};

export function TodoContainer({ children, todos, onClearCompleted }: TodoContainerProps) {
	const [todosLeft, setTodosLeft] = useState(todos.filter((todo) => todo.completed !== true).length);

	function handleClear() {
		onClearCompleted();
	}

	useEffect(() => {
		setTodosLeft(todos.filter((todo) => todo.completed !== true).length);
	}, [todos]);

	return (
		<div className="todo-container">
			<ul className="todo-container__todos">{children}</ul>

			<div className="todo-container__actions">
				<p className="left-items">
					<span id="count">{todosLeft}</span> items left
				</p>
				<a className="btn--clear-completed" onClick={handleClear}>
					Clear Completed
				</a>
			</div>
		</div>
	);
}
