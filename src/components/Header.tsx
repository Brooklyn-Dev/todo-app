import moonIcon from "./../assets/images/icon-moon.svg";
import sunIcon from "./../assets/images/icon-sun.svg";

type HeaderProps = { lightTheme?: boolean };

export function Header({ lightTheme = true }: HeaderProps) {
	return (
		<header>
			<h1 className="heading-primary">todo</h1>
			<button className="btn btn--theme">
				<img src={lightTheme ? moonIcon : sunIcon} alt="moon svg" />
			</button>
		</header>
	);
}
