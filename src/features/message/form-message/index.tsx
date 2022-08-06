import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "store/hooks";

const FormMessage = () => {
	const { palette, spacing } = useTheme();
	const { primary, secondary } = palette;

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: spacing(2),
				margin: spacing(2),
			}}
		>
			<TextField
				error={errors.email && true}
				fullWidth
				size="small"
				{...register("email", { required: true })}
				helperText={errors.email && "e-mail is required"}
			/>

			<TextField
				error={errors.message && true}
				fullWidth
				size="small"
				{...register("message", { required: true })}
				helperText={errors.message && "message is required"}
			/>

			<Button type="submit" variant="contained" color="primary">
				enviar
			</Button>
		</Box>
	);
};

export default FormMessage;
