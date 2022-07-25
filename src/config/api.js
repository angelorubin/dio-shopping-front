import axios from "axios";

export const http = axios.create({
	baseURL: "https://loclahost:5000",
});
