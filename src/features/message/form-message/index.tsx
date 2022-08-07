import { useState } from "react";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormMessage = () => {
	const { palette, spacing } = useTheme();
	const { primary, secondary } = palette;

	const validationSchema = yup.object({
		email: yup.string()
			.email('enter a valid email')
			.required('email is required'),
		message: yup.string()
			.required('message is required'),
	})

	const { handleSubmit, handleChange, values, errors, touched } = useFormik({
		initialValues: {
			email: '',
			message: '',
		},
		validationSchema,
		onSubmit: values => {
			console.log(JSON.stringify(values, null, 2));
		},
	});



	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: spacing(2),
				margin: spacing(2),
			}}
		>
			<TextField
				id="email"
				name="email"
				fullWidth
				size="small"
				type="text"
				onChange={handleChange}
				error={touched.email && Boolean(errors.email)}
				helperText={touched.email && errors.email}

			/>

			<TextField
				id="message"
				name="message"
				fullWidth
				size="small"
				type="text"
				onChange={handleChange}
				error={touched.message && Boolean(errors.message)}
				helperText={touched.message && errors.message}
			/>

			<Button type="submit" variant="contained" color="primary">
				enviar
			</Button>
		</Box>
	);
};

export default FormMessage;
