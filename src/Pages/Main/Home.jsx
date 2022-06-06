import * as React from "react";
import {
	Typography,
	Button,
	Grid,
	Container,
} from "@mui/material";
import HeaderHome from "../../Components/Headers/HeaderHome";

export default function Home() {


	// imagen
	const image = require("../../Assets/Images/home.png");
	return (
		<>
			<HeaderHome />
			<Container
				fluid
				style={{
					width: "100%",
					justifyContent: "center",
					alignSelf: "center",
					display: "flex",
					height: "90%",
				}}
			>
				<Grid
					container
					spacing={{ sm: 4, md: 2 }}
					columns={{ sm: 12, md: 12 }}
					alignItems="center"
				>
					<Grid item sm={12} md={6} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
						<Typography variant="h1" color="initial" align="center">
							Aprender a Programar como un Pro
						</Typography>
						<Typography variant="body1" color="initial" align="justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
							laborum impedit sequi iure error reprehenderit nam praesentium
							explicabo velit dolor, temporibus recusandae nisi mollitia
							tempore? Rem, illo! Sequi, dolorem tempore.
						</Typography>
						<Grid
							container
							spacing={{ xs: 4, sm: 2 }}
							columns={{ xs: 12, sm: 12 }}
						>
							<Grid item sm={6} xs={12} align="center">
								<Button
									variant="contained"
									style={{
										borderRadius: "20rem",
									}}
									href="/login"
								>
									Iniciar Sesion
								</Button>
							</Grid>
							<Grid item sm={6} xs={12} align="center">
								<Button
									variant="contained"
									style={{
										borderRadius: "20rem",
									}}
									href="/login"
								>
									Registrarse
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sm={12} md={6} alignItems="center">
						<img src={image} alt="Home-logo" height="auto" width="100%" />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
