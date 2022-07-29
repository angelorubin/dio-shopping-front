import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "components/header";
import store from "components/store";
import Routes from "routes";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { dio } from "themes/dio";

const App = () => {
	const localCart = JSON.parse(localStorage.getItem("dioshopping: cart"));

	if (localCart !== null) {
		store.dispatch({ type: "CHANGE_CART", localCart });
	}

	return (
		<ThemeProvider theme={dio}>
			<Provider store={store}>
				<CssBaseline />
				<Router>
					<Header />
					<Routes />
				</Router>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
