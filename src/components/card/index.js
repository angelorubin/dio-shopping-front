import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "store/actions/cart";

const Card = ({ product, children }) => {
	const cart = useSelector((state) => state.cart.value);
	const dispatch = useDispatch();
	// const theme = useTheme();
	// const { palette, spacing } = theme;

	const handleClick = () => dispatch(cartActions.Add(cart, product));

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flex: 1,
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flex: 1,
					flexDirection: "column",
				}}
			>
				<Box
					component="img"
					width="140px"
					src={product.image}
					alt={product.name_product}
				/>
				<Typography sx={{ textAlign: "center" }} variant="h6">
					{children}
				</Typography>
				<Typography sx={{ textAlign: "center" }} variant="subtitle1">
					R$ {product.price.toFixed(2)}
				</Typography>
			</Box>

			<Button fullWidth variant="contained" onClick={handleClick}>
				Adicionar
			</Button>
		</Box>
	);
};

export default Card;
