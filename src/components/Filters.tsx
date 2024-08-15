const filters = ["All", "Active", "Completed"];

type FiltersProps = {
	activeFilter: string;
	onSetActiveFilter: (filter: string) => void;
};

export function Filters({ activeFilter, onSetActiveFilter }: FiltersProps) {
	function handleSelection(filter: string) {
		onSetActiveFilter(filter);
	}

	return (
		<div className="filters">
			{filters.map((filter) => (
				<a
					key={filter}
					className={`text-btn ${filter === activeFilter ? "active" : ""}`}
					onClick={() => handleSelection(filter)}
				>
					{filter}
				</a>
			))}
		</div>
	);
}
