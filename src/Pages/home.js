import React from "react";
import { Provider, useSelector } from "react-redux";
import { Paper, Box, Typography, List, useTheme, Stack } from "@mui/material";
import Item from "components/item";
import Card from "components/card";

const Home = () => {
	const theme = useTheme();
	const { palette, spacing } = theme;

	const products = useSelector((state) => state.products);

	const getCategoryNames = (products) => {
		const names = products.map((product) => product.name_categorys);

		const uniq = [...new Set(names)];

		return uniq;
	};

	const categories = products.map((category) => {
		const container = {};
		container["id"] = category.id_categories;
		container["name"] = category.name_categories;
		return container;
	});

	const category = categories
		.map(JSON.stringify)
		.filter(function (item, index, arr) {
			return arr.indexOf(item, index + 1) === -1;
		})
		.map(JSON.parse);

	const arrayCategory = products.map((category) => category.name);

	let count = {};

	for (let i = 0; i < arrayCategory.length; i++) {
		{
			let key = arrayCategory[i];
			count[key] = count[key] ? count[key] + 1 : 1;
		}
	}

	return (
		<Box
			sx={{
				display: "flex",
				gap: "1rem",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					padding: spacing(2),
				}}
			>
				<Typography sx={{ fontWeight: "900" }} variant="h5">
					Categorias
				</Typography>
				<Stack sx={{ width: "20vh", marginTop: spacing(2) }}>
					{getCategoryNames(products).map((category, index) => {
						return (
							<Item key={index} name={category} details={count[category]} />
						);
					})}
				</Stack>
			</Box>

			<Box
				sx={{
					display: "flex",
					gap: "1rem",
					flexFlow: "row wrap",
					padding: spacing(2),
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexFlow: "row wrap",
						marginTop: spacing(2),
						gap: spacing(10),
					}}
				>
					{products.map((item) => {
						return (
							<Card key={item.id_product} product={item}>
								{item.name_product}
							</Card>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
