import { useEffect } from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getMessages } from "features/message/slice";
import FormMessage from "features/message/form-message";
import Loading from "components/loading";

interface IMessage {
	isLoading: boolean;
	messages: [];
	test?: string;
}

const renderMessages = (params: IMessage) => {
	const { isLoading, messages } = params;
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

const Messages = () => {
	const { messages, isLoading } = useAppSelector((state) => state.messages);
	const dispatch = useAppDispatch();
	const { spacing } = useTheme();

	useEffect(() => {
		dispatch(getMessages());
	}, [dispatch]);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: spacing(2) }}>
			<FormMessage />

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: spacing(2),
					margin: spacing(2),
				}}
			>
				{renderMessages({ isLoading, messages })}
			</Box>
		</Box>
	);
};

export default Messages;

/**
 * <Snackbar
 * open={!alert}
 * anchorOrigin={{ vertical: "top", horizontal: "center" }}
 * autoHideDuration={3000}
 * transitionDuration={{ enter: 1000, exit: 2000 }}
 * TransitionProps={{ enter: true, exit: false}}
 * onClose={handleClose}
 * message="Mensagem enviada com suceso"
 * />
 */
