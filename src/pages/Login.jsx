import React from "react";
import HeaderPage from "../components/headers/HeaderPage";
import {
	TextField,
	Grid,
	Button,
	Typography,
	IconButton,
	CardContent,
	Container,
	InputAdornment,
	Card,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import HttpsIcon from "@mui/icons-material/Https";
export default function Login() {
	return (
		<>
			<Container
				maxWidth={false}
				sx={{
					height: "100vh",
					padding: "0 !important",
					backgroundColor: "common.white",
				}}
			>
				<HeaderPage />
				<Grid container sx={{ display: "flex", justifyContent: "center" }}>
					<Card
						sx={{
							width: { lg: "624px", xs: "325px", sm: "524px" },
							height: { lg: "797px", xs: "500px", sm: "697px" },
						}}
					>
						<CardContent>
							<Grid container alignItems="center">
								{/* Titulo */}
								<Grid
									item
									xs={12}
									md={12}
									sx={{
										padding: 0,
										marginTop: { lg: "72px", xs: "59px", sm: "66px" },
										marginBottom: { lg: "62px", xs: "39px", sm: "51px" },
										display: "flex",
										justifyContent : "center"
									}}
								>
									<Typography variant="h4" color="initial" align="center" sx={{
										width : {xs:"150px"},
										height : {xs:"24px"}
									}}>
										Iniciar Sesion
									</Typography>
								</Grid>

								{/* Campos de formulario */}
								<Grid
									item
									xs={12}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										marginBottom: { lg: "62px", xs: "34px" },
									}}
								>
									<TextField
										sx={{
											width: { lg: "470px", xs: "245px" },
										}}
										fullWidth
										placeholder="Correo"
										InputProps={{
											sx: {
												height: { lg: "61px", xs: "34px" },
											},
											startAdornment: (
												<InputAdornment position="start">
													<PersonIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<TextField
										sx={{
											width: { lg: "470px", xs: "245px" },
										}}
										fullWidth
										placeholder="Contaseña"
										InputProps={{
											sx: {
												height: { lg: "61px", xs: "34px" },
											},
											startAdornment: (
												<InputAdornment position="start">
													<HttpsIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>

								{/* Boton */}
								<Grid
									item
									xs={12}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										marginTop: { lg: "105px", xs: "55px" },
										marginBottom: { lg: "70px", xs: "31px" },
									}}
								>
									<Button
										variant="contained"
										sx={{
											width: { lg: "358px", xs: "245px" },
											height: { lg: "51px", xs: "35px" },
										}}
									>
										<Typography variant="h4" color="initial" align="center">
											Iniciar Sesion
										</Typography>
									</Button>
								</Grid>

								{/* Letras pequeñas */}
								<Grid
									item
									xs={12}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										marginBottom: { lg: "38px", xs: "31px" },
									}}
								>
									<Typography
										variant="subtitle1"
										color="initial"
										align="center"
									>
										O iniciar sesion con
									</Typography>
								</Grid>

								{/* Iconos */}
								<Grid
									item
									container
									sx={{
										display: "flex",
										justifyContent: "center",
										alignSelf: "center",
									}}
									xs={12}
								>
									{/* Google */}
									<Grid
										item
										xs={6}
										sx={{
											display: "flex",
											justifyContent: "space-evenly",
										}}
									>
										<IconButton
											size="large"
											edge="start"
											color="inherit"
											aria-label="menu"
											sx={{
												width: { lg: "66px", xs: "42px" },
												height: { lg: "66px", xs: "44px" },
												margin : 0
											}}
										>
											<GoogleIcon
												sx={{
													width: { lg: "66px", xs: "42px" },
													height: { lg: "66px", xs: "44px" },
													display: "flex",
													alignItems : "center"
												}}
											/>
										</IconButton>
									</Grid>

									{/* GitHub */}
									<Grid
										item
										xs={6}
										sx={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<IconButton
											size="large"
											edge="start"
											color="inherit"
											aria-label="menu"
											sx={{
												width: { lg: "66px", xs: "42px" },
												height: { lg: "66px", xs: "44px" },
												margin : 0
											}}
										>
											<GitHubIcon
												sx={{
													width: { lg: "66px", xs: "42px" },
													height: { lg: "66px", xs: "44px" },
												}}
											/>
										</IconButton>
									</Grid>

									{/* Titulo de google */}
									<Grid item xs={6}>
										<Typography variant="body1" color="initial" align="center">
											Google
										</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography variant="body1" color="initial" align="center">
											GitHub
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Container>
		</>
	);
}
