import { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardContent,
	CircularProgress,
	Button,
	Typography,
	useTheme,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { x, getMessages } from "features/message/slice";
import FormMessage from "features/message/form-message";

const Messages = () => {
	const { data } = useAppSelector((state) => state.messages);
	const dispatch = useAppDispatch();
	const { palette, spacing } = useTheme();
	const { primary, secondary } = palette;
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		dispatch(getMessages());
	}, []);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: spacing(2) }}>
			<FormMessage />

			<pre>{JSON.stringify(data)}</pre>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: spacing(2),
					margin: spacing(2),
				}}
			>
				{[
					{
						id: 1,
						email: "angelorubin@gmail.com",
						message: "test redux toolkit counter",
						created_at: "05/08/2022",
					},
				].map((message: any, index: any) => {
					return (
						<Card key={message.id}>
							<CardContent>
								<Typography>{message.email}</Typography>
								<p>{message.message}</p>
								<p>
									<small>{message.created_at}</small>
								</p>
							</CardContent>
						</Card>
					);
				})}
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
