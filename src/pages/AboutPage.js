import React, { Component } from 'react';
import Header from '../components/Header';
import { Container, Row } from 'reactstrap';

export class AboutPage extends Component {
	render() {
		return (
			<div>
				<Header history={this.props.history} />
				<Container>
					
					<Row>
						<p style={{margin: "0% 20% 0% 20%"}}>
							Once a student, always a student. If there's one thing I can tell you about myself with complete certainty is that I love to learn. 
							The world as a whole facinates me, and it's my life goal to have an impact on it's development.
						</p>
					</Row>
				</Container>
			</div>
		)
	}
}

export default AboutPage;