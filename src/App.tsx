import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { store } from "store/index";
import Routes from "./routes";

import { dio } from "./themes/dio";

const App = () => {
	return (
		<ThemeProvider theme={dio}>
			<Provider store={store}>
				<CssBaseline />
				<Router>
					<Routes />
				</Router>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
