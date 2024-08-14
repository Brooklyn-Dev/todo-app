export function TodoForm() {
	return (
		<form className="todo-form">
			<span className="todo-form__round"></span>
			<input className="todo-form__todo-input" type="text" placeholder="Create a new todo..." />
			<button className="todo-form__add-todo">+</button>
		</form>
	);
}
