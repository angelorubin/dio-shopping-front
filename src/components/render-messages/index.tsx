import {
	Box,
	Card,
	CardContent,
	Typography,
	CircularProgress,
} from "@mui/material";
import Loading from "components/loading";

interface IMessages {
	isLoading: boolean;
	messages: [];
}

const RenderMessages = (isLoading: boolean, messages: []) => {
	if (isLoading) {
		return <Loading />;
	}
	if (messages.length > 0) {
		return messages.map((message: any) => (
			<Card key={message.id}>
				<CardContent>
					<Typography>{message.email}</Typography>
					<p>{message.message}</p>
					<p>
						<small>{message.created_at}</small>
					</p>
				</CardContent>
			</Card>
		));
	}

	return <Typography>Nenhuma mensagem registrada.</Typography>;
};

export default RenderMessages;
