const Cart = () => {
	/**
	const [cart, setCart] = useState([{}]);


	const { cart, products, value } = useSelector(
		(state: RootStateOrAny) => state.cart
	);
	const dispatch = useDispatch();
	

	const theme = useTheme();
	const { palette, spacing } = theme;
	const { common, primary, secondary } = palette;

	let totalPrice = 0;

	for (let i = 0; i < cart.length; i++) {
		totalPrice += cart[i].price * cart[i].quantity;
	}

	if (cart.value > 0) {
		localStorage.setItem("dioshopping: cart", JSON.stringify(cart));
	}

	return (
		<>
			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<Badge
					color="success"
					badgeContent={""}
					data-bs-toggle="modal"
					data-bs-target="#CartModal"
				>
					<Icon size="1.5rem" color={common.white}>
						<AiOutlineShoppingCart />
					</Icon>
				</Badge>
			</Box>

			<Box
				className="modal fade"
				id="CartModal"
				tabIndex="-1"
				aria-labelledby="CartModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="CartModalLabel">
								Meu Carrinho
							</h5>
							<button
								type="button"
								className="close"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div className="modal-body table-responsive">
							<table className="table table-hover">
								<thead>
									<tr>
										<th scope="col"></th>
										<th scope="col">Produto</th>
										<th scope="col">Qtd</th>
										<th scope="col">Preço</th>
										<th scope="col"></th>
										<th scope="col"></th>
										<th scope="col">Total</th>
									</tr>
								</thead>
								<tbody>
									{cart.map((item: string) => {
										return (
											<tr key={item.id}>
												<th>
													<button
														onClick={
															() => {}
															// dispatch(cartActions.DeleteItem(cart, item))
														}
														className="badge bg-danger"
													>
														<i className="fas fa-window-close"></i>
													</button>
												</th>
												<th>
													<img
														className="img-fluid img-thumbnail"
														src={item.image}
														alt={item.Name}
														width="50px"
													/>
												</th>
												<th>
													<span className="badge badge-pill bg-warning">
														{item.quantity}
													</span>
												</th>
												<th>R$ {item.price}</th>
												<th>
													<button
														onClick={
															() => {}
															// dispatch(cartActions.AddItem(cart, item))
														}
														className="badge badge-pill bg-primary"
													>
														<i className="fas fa-plus"></i>
													</button>
												</th>
												<th>
													<button
														onClick={
															() => {}
															// dispatch(cartActions.RemoveItem(cart, item))
														}
														className="badge badge-pill bg-danger"
													>
														<i className="fas fa-minus"></i>
													</button>
												</th>
												<th>R$ {(item.price * item.quantity).toFixed(2)}</th>
											</tr>
										);
									})}
									<tr>
										<th colSpan="2" scope="col">
											Total
										</th>
										<th colSpan="3">{cart.value} itens</th>
										<th colSpan="2">R$ {""}</th>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</Box>
		</>
	);
	*/
	return <>Cart</>;
};

export default Cart;
