import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

type IMessage = {
	id: string;
};

export const messagesApi = createApi({
	reducerPath: "messagesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
	tagTypes: ["Messages"],
	endpoints: (builder) => ({
		// 👇 Query: Get All Messages
		getMessages: builder.query<IMessage[], void>({
			query() {
				return "messages";
			},
		}),
	}),
});

export const { useGetMessagesQuery } = messagesApi;
