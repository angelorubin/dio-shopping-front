import { Box, Button, TextField, useTheme } from "@mui/material";
import { useAppDispatch } from "store/hooks";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createMessage } from "features/message/form-message/slice"
import { getMessages } from "features/message/slice";

const FormMessage = () => {
	const { spacing } = useTheme();
	const dispatch = useAppDispatch()

	const validationSchema = yup.object({
		email: yup.string()
			.email('enter a valid email')
			.required('email is required'),
		message: yup.string()
			.required('message is required'),
	})

	const getInitialValues = () => ({
		email: "",
		message: "",
	})

	const { handleSubmit, handleChange, values, errors, touched, resetForm } = useFormik({
		initialValues: getInitialValues(),
		validationSchema,
		onSubmit: values => {
			dispatch(createMessage(values));
			dispatch(getMessages())
			resetForm({ values: { email: "", message: "" } })
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
				value={values.email || ''}
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
				value={values.message || ''}
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
