import { IconContext } from "react-icons";

export const Icon = ({ children, size, color }) => {
	return (
		<IconContext.Provider value={{ size: size ? size : "1em", color }}>
			<div>{children}</div>
		</IconContext.Provider>
	);
};
