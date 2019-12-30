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
						<Col style={{textAlign: "center", width: "100%"}}>
							<img src="https://avatars2.githubusercontent.com/u/4411114?s=460&v=4" alt="me" style={{borderRadius: "50%", border: "4px solid black", width: "30%", marginBottom: "1em"}} />
							<h4>Mostapha Rammo</h4>
						</Col>
					</Row>
					<hr style={{ margin: "2% 30% 2% 30%"}}/>
					<Row>
						<p style={{margin: "0% 20% 0% 20%"}}>
							&nbsp;&nbsp;&nbsp;&nbsp; Currently finishing my Computer Science degree at the University of Windsor. Former software developer intern at IBM and The Royal Bank of Canada. I like Node.js and computers. Other hobbies include wellness and reading. My email is <b>mr.rammo@gmail.com</b> in case you ever need to send me one.
						</p>
					</Row>
				</Container>
			</div>
		)
	}
}

export default AboutPage;