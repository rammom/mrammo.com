import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import './MyNav.css';

export class MyNav extends Component {
	render() {
		return (
			<div>
				<Nav 
					style={{
						justifyContent: "center",
						paddingTop: "0.5em",
						paddingBottom: "0.5em",
						backgroundColor: "#f0f4ff"
					}}
				>
					<NavLink className="my_nav_link" onClick={() => this.props.history.push('/about')}>About</NavLink> 
					<NavLink className="my_nav_link" onClick={() => this.props.history.push('/')}>Projects</NavLink>
					<NavLink className="my_nav_link" onClick={() => window.location="https://drive.google.com/file/d/1nXEe0JNG16xWkFlosyJVkdHKza5Kq4Hb/view"}>Resume</NavLink>
				</Nav>
			</div>
		)
	}
}

export default MyNav;
