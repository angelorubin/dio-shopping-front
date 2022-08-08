import { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	useTheme,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getMessages } from "features/message/slice";
import FormMessage from "features/message/form-message";
import Loading from "components/loading"

interface IMessage {
	id: string
	email: string,
	message: string,
	created_at: string
}

const Messages = () => {
	const { data, isLoading, status } = useAppSelector((state) => state.messages);
	const dispatch = useAppDispatch();
	const { palette, spacing, zIndex } = useTheme();
	const { primary, secondary } = palette;
	const [open, setOpen] = useState(false);

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
				{isLoading ? <Loading /> : data && data.map((message: IMessage, index) => {
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
