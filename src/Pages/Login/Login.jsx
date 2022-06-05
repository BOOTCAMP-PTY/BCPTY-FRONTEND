import React from "react";
import HeaderPage from "../../Components/Headers/HeaderPage";
import {
	TextField,
	Grid,
	Button,
	Typography,
	IconButton,
	Box,
	Container,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Login() {
	return (
		<>
			<HeaderPage />
			<Container
				style={{
					width: "100%",
					justifyContent: "center",
					alignSelf: "center",
					display: "flex",
					height: "80%",
				}}
			>
				<Box
					style={{
						width: "100%",
						justifyContent: "center",
						display: "flex",
						height: "90%",
					}}
					sx={{
						maxWidth: 400,
						borderRadius: 5,
						border: 1,
					}}
				>
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
						width="90%"
					>
						<Grid style={{ marginBottom: "1em", width: "100%" }}>
							<TextField fullWidth label="Correo" />
						</Grid>
						<Grid style={{ marginBottom: "1em", width: "100%" }}>
							<TextField fullWidth label="Contraseña" />
						</Grid>
						<Grid
							style={{
								margin: "1em 0",
								width: "100%",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Button
								variant="contained"
								style={{
									borderRadius: "20rem",
								}}
							>
								Iniciar Sesion
							</Button>
						</Grid>
						<Grid>
							<Typography
								style={{ margin: "1em" }}
								variant="subtitle1"
								color="initial"
							>
								O iniciar sesion con
							</Typography>
						</Grid>
						<Grid
							container
							direction="row"
							justifyContent="center"
							columns={{ xs: 6, sm: 6 }}
						>
							<Grid xs={3} sm={3} align="center">
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="menu"
								>
									<GoogleIcon
										style={{
											fontSize: "3.5rem",
										}}
									/>
								</IconButton>
							</Grid>
							<Grid xs={3} sm={3} align="center">
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="menu"
								>
									<GitHubIcon
										style={{
											fontSize: "3.5rem",
										}}
									/>
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
}
