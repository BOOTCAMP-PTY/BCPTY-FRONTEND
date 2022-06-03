import React from 'react'
import Header from './Pages/Header/Header'
import Home from './Pages/Main/Home'
import './App.css'
import Grid from '@mui/material/Grid'

export default function App() {
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			alignContent="center"
			wrap="nowrap"
		>
			<Header />
			<Home />
		</Grid>
	)
}