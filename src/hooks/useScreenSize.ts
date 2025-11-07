// Modules
import { useEffect, useState } from "react";

export const useScreenSize = () => {
	const [size, setSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		// State handler function
		const handleWidowResize = () => {
			setSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};

		window.addEventListener("resize", handleWidowResize);
		return () => window.removeEventListener("resize", handleWidowResize);
	}, []);

	return size;
};
