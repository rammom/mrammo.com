import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyNav from './MyNav/MyNav';
import SocialLinks from './SocialLinks/SocialLinks';

function Header(props) {
	return (
		<div>
			<MyNav history={props.history}/>
			<Container style={{ marginTop: "1em" }}>
				<Row>
					<Col style={{textAlign: "center", width: "100%"}}>
						<img src="https://avatars2.githubusercontent.com/u/4411114?s=460&v=4" alt="me" style={{borderRadius: "50%", border: "4px solid black", width: "15%", marginBottom: "1em"}} />
					</Col>
				</Row>
				<div style={{ display: "flex", flexFlow: "column nowrap", alignItems: "center" }}>
					<h2>Mostapha Rammo</h2>
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