import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Cart from "./cart";

const Header = () => {
	return (
		<Box>
			<Typography variant="h3">Dio Shopping</Typography>
			<Link to="/">
				<Button color="primary">Home</Button>
			</Link>
			<Link to="/contato">
				<Button color="primary">Contato</Button>
			</Link>
			<Cart />
		</Box>
	);
};

export default Header;
