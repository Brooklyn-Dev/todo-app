export function Filters() {
	return (
		<div className="filters">
			<a href="#" className="filters__btn all active">
				All
			</a>
			<a href="#" className="filters__btn live">
				Active
			</a>
			<a href="#" className="filters__btn btn--completed">
				Completed
			</a>
		</div>
	);
}
