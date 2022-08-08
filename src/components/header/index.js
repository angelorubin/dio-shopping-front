import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Link as MuiLink, useTheme } from "@mui/material";
import Cart from "../../features/cart";

const Header = () => {
  const theme = useTheme();
  const { palette, spacing } = theme;
  const { common, primary } = palette;

  return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				height: "15vh",
				backgroundColor: primary.main,
				padding: spacing(2),
			}}
		>
			<Box sx={{ flex: 1 }}>
				<Typography
					sx={{ fontWeight: "900", color: common.white }}
					variant="h4"
				>
					Dio Shopping
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					gap: spacing(2),
					flex: 1,
				}}
			>
				<Typography>
					<MuiLink
						to="/home"
						component={RouterLink}
						sx={{ color: common.white, textDecoration: "none" }}
					>
						Home
					</MuiLink>
				</Typography>

				<MuiLink
					to="/contact"
					component={RouterLink}
					sx={{ color: common.white, textDecoration: "none" }}
				>
					<Typography>Contato</Typography>
				</MuiLink>
			</Box>

			<Box
				sx={{
					flex: 1,
					justifyContent: "flex-end",
				}}
			>
				<Cart />
			</Box>
		</Box>
	);
};

export default Header;
