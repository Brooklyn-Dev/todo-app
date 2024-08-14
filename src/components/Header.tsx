import moonIcon from "./../assets/images/icon-moon.svg";
import sunIcon from "./../assets/images/icon-sun.svg";

type HeaderProps = {
	isLight: boolean;
	onToggleTheme: () => void;
};

export function Header({ isLight, onToggleTheme }: HeaderProps) {
	function handleClick() {
		onToggleTheme();
	}

	return (
		<header>
			<h1 className="heading-primary">todo</h1>
			<button className="btn btn--theme" onClick={handleClick}>
				<img src={isLight ? moonIcon : sunIcon} alt="moon svg" />
			</button>
		</header>
	);
}
