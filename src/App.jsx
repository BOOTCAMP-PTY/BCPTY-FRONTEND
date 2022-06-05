import React from "react";
import Home from "./Pages/Main/Home";
import "./App.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

export default function App() {
	return (
		// <main>
		<Router>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/login" element={<Login />}/>
			</Routes>
		</Router>
		// </main>
	);
}
