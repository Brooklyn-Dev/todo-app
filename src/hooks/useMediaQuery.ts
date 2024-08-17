import { useEffect, useState } from "react";

function getCSSVariableValue(variableName: string): string {
	return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

export function useMediaQuery(cssVariableName: string, defaultMatches: boolean = false) {
	const query = `(max-width: ${getCSSVariableValue(cssVariableName)})`;
	const [matches, setMatches] = useState(defaultMatches);

	useEffect(() => {
		const media = window.matchMedia(query);

		function callback() {
			setMatches(media.matches);
		}

		if (media.matches !== matches) setMatches(media.matches);

		media.addListener(callback);

		return () => {
			media.removeListener(callback);
		};
	}, [matches, query]);

	return matches;
}
