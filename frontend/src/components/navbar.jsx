import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<AppBar position="sticky">
					<Toolbar>
						<Typography className="grow" variant="h6" color="inherit">
							<Button component={Link} to="/">
								"LOGO"
							</Button>
						</Typography>
						<Button color="inherit" exact component={Link} to="/">
							Home
						</Button>
						<Button color="inherit" component={Link} to="/about">
							About
						</Button>
						<Button color="inherit" component={Link} to="/pws">
							PWS
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default Navbar
