import * as React from "react";
import {Box, Toolbar, Typography, AppBar} from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

export default function HeaderPage() {
	return (
		<Box sx={{ flexGrow: 1,width: 1,height: '10%', flexWrap: 'wrap'}}>
			<AppBar position="static"  sx={{ backgroundColor: "common.white" }}>
				<Toolbar>
					<CodeIcon sx={{ mr: 1 }} />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Logo and Brand
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
