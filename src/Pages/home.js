import React from "react";
import { useSelector } from "react-redux";
import { Paper, Box, Typography, List, useTheme } from "@mui/material";
import Item from "components/item";
import Card from "components/card";

const Home = () => {
	const theme = useTheme();
	const { palette } = theme;

	const products = useSelector((state) => state.products);

	const nameCategories = Object.keys(products);

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

	const arrayCategory = categories.map((category) => category.name);
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
				border: (theme) => `2px solid ${palette.primary.main}`,
			}}
		>
			<Box sx={{ border: "2px solid red" }}>
				<Paper>
					<Typography variant="h5">Categorias</Typography>
					<pre>{JSON.stringify(nameCategories, null, 2)}</pre>
					<List>
						{[].map((category) => {
							return (
								<Item
									key={category.id}
									name={category.name}
									details={count[category.name]}
								/>
							);
						})}
					</List>
				</Paper>
			</Box>

			<Box sx={{ display: "flex", gap: "1rem", flexFlow: "row wrap" }}>
				{products.map((item) => {
					return (
						<Card key={item.id_product} product={item}>
							{item.name_product}
						</Card>
					);
				})}
			</Box>
		</Box>
	);
};

export default Home;
