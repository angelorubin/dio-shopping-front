import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "config/api";

export interface FormMessageState {
  data: [];
  isLoading: boolean;
  status: string;
  email: string;
  message: string;
}

const initialState: FormMessageState = {
  data: [],
  isLoading: false,
  status: "idle",
  email: "",
  message: "",
};

export const createMessage = createAsyncThunk(
  "messages/createMessage",
  async (values: any) => {
    const { email, message } = values;
    const response = await http.post("http://localhost:5000/messages", {
      email,
      message,
    });
    return response.data;
  }
);

export const formMessageSlice = createSlice({
  name: "formMessage",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createMessage.pending, (state, action) => {
      state.status = "pending";
      state.isLoading = true;
    });
    builder.addCase(createMessage.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = formMessageSlice.actions;

export default formMessageSlice.reducer;
