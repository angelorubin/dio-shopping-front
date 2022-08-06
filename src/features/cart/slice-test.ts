/**
import { createSlice } from "@reduxjs/toolkit";
import products from "store/products";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		value: 0,
		products,
		cart: [],
	},
	reducers: {
		add: (state, action) => {
			return state;
		},
	},
});

this is for dispatch
export const { add } = cartSlice.actions;

this is for configureStore
export default cartSlice.reducer;
*/

export {};
