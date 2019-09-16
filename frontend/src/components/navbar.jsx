import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap'

class AppNavbar extends Component {
	constructor(props) {
		super(props)
		this.toggle = this.toggle.bind(this)
		this.state = {
            isOpen: false
		}
	}

	toggle() {
		this.setState({
			isOpen : !this.state.isOpen
		})
	}

	render() {
		return (
			<div>
				<Navbar dark expand="md">
					<Link className="navLinks" to="/">
						Home
					</Link>
					<Nav>
						<NavItem>
							<Link className="navLinks" to="/about">
								About
							</Link>
						</NavItem>
					</Nav>
					<Nav>
						<NavItem>
							<Link className="navLinks" to="/pws">
								PWS
							</Link>
						</NavItem>
					</Nav>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
                                Hello
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default AppNavbar
