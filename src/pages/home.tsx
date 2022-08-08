import Header from "components/header";

const Home = () => {
	return <Header />;
	/**
	const { products } = useSelector((state) => state.products);
	const theme = useTheme();
	const { palette, spacing } = theme;
	const [products, setProducts] = useState([{}]);
	const products = useGetAllMessagesQuery();

	const getCategoryNames = (products) => {
		const names = products.map((product) => product.name_categorys);

		const uniq = [...new Set(names)];

		return uniq;
	};

	const arrayCategory = products.map((category) => category.name);

	let count = {};

	for (let i = 0; i < arrayCategory.length; i++) {
		{
			let key = arrayCategory[i];
			count[key] = count[key] ? count[key] + 1 : 1;
		}
	}


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
					width: "20%",
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
					flex: 1,
					flexFlow: "row wrap",
					marginTop: spacing(2),
					gap: spacing(10),
					border: "2px solid red",
				}}
			>
				<Typography>Produtos Componente</Typography>
			</Box>
		</Box>
	);
	*/
};

export default Home;
