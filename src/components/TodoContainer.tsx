export function TodoContainer() {
	return (
		<div className="todo-container">
			<ul className="todo-container__todos">
				<div className="todo-container__empty-container">No todo items left!</div>
			</ul>

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
