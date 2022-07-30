import { useState, useEffect } from "react";
import {
	Box,
	Grid,
	Button,
	TextField,
	Card,
	CardContent,
	Typography,
} from "@mui/material";
import { http } from "config/api";
import { useTheme } from "@emotion/react";

const Contatos = () => {
	const { palette, spacing } = useTheme();
	const { primary, secondary } = palette;
	const [messages, setMessages] = useState([]);
	const [email, setEmail] = useState("");
	const [content, setContent] = useState("");
	const [validator, setValidator] = useState(false);
	const [render, setRender] = useState(false);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const res = await http("/message");
			console.log(res);
			setMessages(res);
		};
		fetchData().catch((error) => console.log(error));
	}, []);

	const sendMessage = async () => {
		setValidator(false);

		if (email.length <= 0 || content.length <= 0) {
			return setValidator(!validator);
		}

		await http
			.post("/message", {
				email,
				content,
			})
			.then((res) => {
				console.log(res.data);
				/**
				if (res.data) {
					setRender(true);
					setSuccess(true);
					setTimeout(() => {
						setSuccess(false);
					}, 3000);
				}
				*/
			});

		// setEmail("");
		// setContent("");
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: spacing(2) }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: spacing(2),
					margin: spacing(2),
				}}
			>
				<TextField
					id="email"
					label="email"
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
					fullWidth
					size="small"
				/>
				<TextField
					id="message"
					label="message"
					value={content}
					onChange={(event) => {
						setContent(event.target.value);
					}}
					fullWidth
					size="small"
				/>
				<Button onClick={sendMessage} variant="contained" color="primary">
					enviar
				</Button>
			</Box>

			{validator && (
				<div
					className="alert alert-warning alert-dismissible fade show mt-2"
					role="alert"
				>
					<strong>Por favor preencha todos os campos!</strong>
					<Button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"
					></Button>
				</div>
			)}

			{success && (
				<div
					className="alert alert-success alert-dismissible fade show mt-2"
					role="alert"
				>
					<strong>Mensagem foi enviada</strong>
				</div>
			)}

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: spacing(2),
					margin: spacing(2),
				}}
			>
				{messages &&
					messages.map((message) => {
						return (
							<Card>
								<CardContent>
									<Typography>{message.email}</Typography>
									<p>{message.message}</p>
									<p>
										<small className="text-muted">{message.created_at}</small>
									</p>
								</CardContent>
							</Card>
						);
					})}
			</Box>
		</Box>
	);
};

export default Contatos;
