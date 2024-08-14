import crossIcon from "./assets/images/icon-cross.svg";

type TodoItemProps = { children: string };

export function TodoItem({ children }: TodoItemProps) {
	return (
		<div className="todo-container__todo-item" draggable="true">
			<label className="todo-container__todo-item-checkbox">
				<input type="checkbox" />
				<span className="checkbox-round"></span>
			</label>

			<li className="todo-container__todo">{children}</li>

			<map className="btn">
				<img src={crossIcon} alt="cross svg" />
			</map>
		</div>
	);
}
