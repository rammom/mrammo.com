import React from 'react';
import { Container } from 'reactstrap';
import MyNav from './MyNav/MyNav';
import SocialLinks from './SocialLinks/SocialLinks';

function Header(props) {
	return (
		<div>
			<MyNav history={props.history}/>
			<Container style={{ marginTop: "1em" }}>
				<div style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center" }}>
					<h2>mrammo.com</h2>
					<div style={{ width: "50%" }}>
						<SocialLinks />
					</div>
				</div>
				<hr />
			</Container>
		</div>
	)
}

export default Header;