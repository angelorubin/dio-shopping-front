import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
	palette: {
		common: {
			black: "#000",
			white: "#FFF",
		},
		primary: {
			main: red[500],
		},
	},
});
