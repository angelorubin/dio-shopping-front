import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "components/header";
import store from "components/store";
import Routes from "routes";
import { Container, CssBaseline } from "@mui/material";

const App = () => {
	const localCart = JSON.parse(localStorage.getItem("dioshopping: cart"));

	if (localCart !== null) {
		store.dispatch({ type: "CHANGE_CART", localCart });
	}

	return (
		<Provider store={store}>
			<Container>
				<CssBaseline />
				<Router>
					<Header />
					<Routes />
				</Router>
			</Container>
		</Provider>
	);
};

export default App;
