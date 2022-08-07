import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "features/message/slice";
import formMessageReducer from "features/message/form-message/slice";

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    formMessage: formMessageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
