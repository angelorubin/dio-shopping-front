import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "config/api";

export interface MessagesState {
  data: [];
  isLoading: boolean;
  status: string;
}

export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async () => {
    const response = await http("/messages");
    return response.data;
  }
);

const initialState: MessagesState = {
  data: [],
  isLoading: false,
  status: "idle",
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMessages.pending, (state, action) => {
      state.status = "pending";
      state.isLoading = true;
    });
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.status = "fullfiled";
      state.data = action.payload;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = messagesSlice.actions;

export default messagesSlice.reducer;
