type TodoContainerProps = {
	children: React.ReactNode;
	onClearCompleted: () => void;
};

export function TodoContainer({ children, onClearCompleted }: TodoContainerProps) {
	function handleClear() {
		onClearCompleted();
	}

	return (
		<div className="todo-container">
			<ul className="todo-container__todos">{children}</ul>

			<div className="todo-container__actions">
				<p className="left-items">
					<span id="count">0</span> items left
				</p>
				<a className="btn--clear-completed" onClick={handleClear}>
					Clear Completed
				</a>
			</div>
		</div>
	);
}
