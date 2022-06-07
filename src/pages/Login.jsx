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
							<Grid container>
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
										justifyContent: "center",
										width: { lg: "217px", xs: "150px" },
										height: { lg: "42px", xs: "24px" },
									}}
								>
									<Typography
										variant="h1"
										color="initial"
										align="center"
										sx={{
											fontSize: { lg: "36px", xs: "24px" },
											fontWeight: { lg: "400px", xs: "400px" },
											lineHeight: { lg: "42px", xs: "28.18px" },
										}}
									>
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
										placeholder="Correo electronico"
										InputProps={{
											sx: {
												height: { lg: "61px", xs: "34px" },
											},
											startAdornment: (
												<InputAdornment position="start">
													<PersonIcon
														sx={{
															width: { lg: "38px", xs: "18px" },
															height: { lg: "38px", xs: "18px" },
															marginLeft: { lg: "28px", xs: "15px" },
															marginRight: { lg: "14px", xs: "9px" },
														}}
													/>
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
										placeholder="Contraseña"
										InputProps={{
											sx: {
												height: { lg: "61px", xs: "34px" },
											},
											startAdornment: (
												<InputAdornment position="start">
													<HttpsIcon
														sx={{
															width: { lg: "38px", xs: "18px" },
															height: { lg: "38px", xs: "18px" },
															marginLeft: { lg: "28px", xs: "15px" },
															marginRight: { lg: "14px", xs: "9px" },
														}}
													/>
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
										<Grid
											item
											xs={12}
											sx={{
												width: { lg: "154px", xs: "100px" },
												height: { lg: "28px", xs: "19px" },
											}}
										>
											<Typography
												variant="h4"
												color="initial"
												align="center"
												sx={{
													fontSize: { lg: "24px", xs: "16px" },
													fontWeight: { lg: "600px", xs: "600px" },
													lineHeight: { lg: "28.18px", xs: "18.78px" },
												}}
											>
												Iniciar Sesion
											</Typography>
										</Grid>
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
										width: { lg: "137px", xs: "119px" },
										height: { lg: "22px", xs: "13px" },
									}}
								>
									<Typography
										variant="subtitle1"
										color="initial"
										align="center"
										sx={{
											fontSize: { lg: "16px", xs: "14px" },
											fontWeight: { lg: "400px", xs: "400px" },
											lineHeight: { lg: "18.78px", xs: "16.44px" },
										}}
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
												margin: 0,
											}}
										>
											<GoogleIcon
												sx={{
													width: { lg: "66px", xs: "42px" },
													height: { lg: "66px", xs: "44px" },
													display: "flex",
													alignItems: "center",
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
												margin: 0,
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
