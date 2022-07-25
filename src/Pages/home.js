import React from "react";
import { useSelector } from "react-redux";
import { Paper, Grid, Typography, List, makeStyles } from "@mui/material";
import Item from "components/item";
import Card from "components/card";

const HomePage = () => {
	const products = useSelector((state) => state.products);

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
		<Grid sx={{ display: "flex" }}>
			<Grid>
				<Paper>
					<Typography variant="h5">Categorias</Typography>
					<List>
						{category.map((category) => {
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
			</Grid>
			<Grid sx={{ display: "flex", gap: "1rem", flexFlow: "row wrap" }}>
				{products.map((item) => {
					return (
						<Card key={item.id_product} product={item}>
							{item.name_product}
						</Card>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default HomePage;
