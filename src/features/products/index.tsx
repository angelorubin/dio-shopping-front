import { Box, Typography } from "@mui/material";
import { RootStateOrAny, useSelector } from "react-redux";
import { ProductType } from "features/products/type";
import { useEffect } from "react";

const Products = () => {
	const { products } = useSelector((state: RootStateOrAny) => state.products);

	useEffect(() => {
		console.log(products);
	}, []);

	return (
		<>
			<Typography>Products</Typography>
			<pre>{JSON.stringify(products, null, 2)}</pre>

			{products &&
				products.map((product: ProductType) => {
					return (
						<Box key={product.id_product}>
							<img height="100" src={product.image} />
						</Box>
					);
				})}
		</>
	);
};

export default Products;
