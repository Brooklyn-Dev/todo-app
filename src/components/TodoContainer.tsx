type TodoContainerProps = {
	children: React.ReactNode;
};

export function TodoContainer({ children }: TodoContainerProps) {
	return (
		<div className="todo-container">
			<ul className="todo-container__todos">{children}</ul>

			<div className="todo-container__actions">
				<p className="left-items">
					<span id="count">0</span> items left
				</p>
				<a href="#" className="btn--clear-completed">
					Clear Completed
				</a>
			</div>
		</div>
	);
}
