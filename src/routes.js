import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Contact from "pages/contact";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<h1>Page not found.</h1>} />
			<Route path="/home" element={<Home />} />
			<Route index path="/" element={<Contact />} />
		</Routes>
	);
};

export default MainRoutes;
