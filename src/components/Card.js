import React from "react";
import { Paper, Grid, Typography, Button, makeStyles } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "components/store/actions/cart";

export default function Card({ product, children }) {
	const cart = useSelector((state) => state.cart.value);
	const dispatch = useDispatch();

	return (
		<Grid item xs={3}>
			<Paper>
				<Grid>
					<Grid item>
						<img width="140px" src={product.image} alt={product.name_product} />
						<Typography variant="h6">{children}</Typography>
						<Typography variant="subtitle1">
							R$ {product.price.toFixed(2)}
						</Typography>
					</Grid>

					<Button
						variant="contained"
						onClick={() => dispatch(cartActions.Add(cart, product))}
					>
						Adicionar
					</Button>
				</Grid>
			</Paper>
		</Grid>
	);
}
