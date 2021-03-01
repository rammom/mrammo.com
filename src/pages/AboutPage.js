import React, { Component } from 'react';
import Header from '../components/Header';
import { Container, Row, Col } from 'reactstrap';

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
							<br />
							<br />
							I have a Bachelors of Computer Science. I worked for <b>IBM</b> and <b>RBC</b> as a software development intern during my studies, where I learnt how projects
							are being run in the industry and what it's like to work with a team of talented individual to improve a product.
							<br />
							<br />
							Currently I'm working with the family business, building a product and logistics management application and a tailored point of sale system. 
							Everything concerning the business will be tied together with a joint authentication server for easy single-sign-on functionality.
						</p>
					</Row>
				</Container>
			</div>
		)
	}
}

export default AboutPage;