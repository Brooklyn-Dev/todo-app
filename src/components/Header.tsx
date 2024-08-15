import moonIcon from "./../assets/images/icon-moon.svg";
import sunIcon from "./../assets/images/icon-sun.svg";

type HeaderProps = {
	theme: string;
	onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
	function handleClick() {
		onToggleTheme();
	}

	return (
		<header>
			<h1 className="heading-primary">todo</h1>
			<button className="icon-btn" onClick={handleClick}>
				<img src={theme === "light" ? moonIcon : sunIcon} alt="moon svg" />
			</button>
		</header>
	);
}
