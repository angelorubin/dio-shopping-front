export {};

/**
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "config/api";

// First, create the thunk
const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const response = await http.get("/products");
	return response;
});

interface IProducts {
	products: [];
	loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
	products: [],
	loading: "idle",
} as IProducts;

// Then, handle actions in your reducers:
const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products.push(action.payload);
		});
	},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
*/
