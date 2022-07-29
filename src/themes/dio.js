import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const dio = createTheme({
	palette: {
		common: {
			black: "#000",
			white: "#FFF",
		},
		primary: {
			main: blue[500],
		},
		secondary: {
			main: green[500],
		},
	},
});
