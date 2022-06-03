import * as React from "react";
import { Stack, Typography, Button, Grid } from "@mui/material";
import "./Home.css";
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

export default function Home() {
	const image = require("../../Assets/Images/home.png");
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			alignContent="center"
			wrap="nowrap"
      width="100%"
		>
			<Grid
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}
				height="100vh"
			>
				<Grid maxWidth="sm">
					<Typography variant="h2" color="initial" align="center">
						Aprender a Programar como un Pro
					</Typography>
					<Typography variant="body1" color="initial" align="justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						laborum impedit sequi iure error reprehenderit nam praesentium
						explicabo velit dolor, temporibus recusandae nisi mollitia tempore?
						Rem, illo! Sequi, dolorem tempore.
					</Typography>
					<Stack
						direction="row"
						justifyContent="center"
						alignItems="center"
						spacing={10}
					>
						<Button variant="contained">Iniciar Sesion</Button>
						<Button variant="contained">Registrarse</Button>
					</Stack>
				</Grid>
				<Grid maxWidth="sm">
					<img src={image} alt="Home-logo" />
				</Grid>
			</Grid>
		</Grid>
	);
}
