import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormMessageState {}

const initialState: FormMessageState = {
	data: [],
};

export const formMessageSlice = createSlice({
	name: "form-message",
	initialState,
	reducers: {
		createMessage: (state, action: PayloadAction<number>) => {
			return state;
		},
	},
	extraReducers(builder) {},
});

// Action creators are generated for each case reducer function
export const { createMessage } = formMessageSlice.actions;

export default formMessageSlice.reducer;
