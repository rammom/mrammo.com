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
							&nbsp;&nbsp;&nbsp;&nbsp; Currently interning at RBC Toronto while finishing my Computer Science degree at the University of Windsor. Former software development intern at IBM where I worked in web development and testing specifically using
							Java Spring Boot and JUnit respectively. My main area of expertise lies with javascript, taking advantage of the Expressjs and Reactjs frameworks to put together functional web applications. 
							I also enjoy dipping my toes into AI and Machine Learning technologies using Python, and working with devops.
							<br /><br />
							&nbsp;&nbsp;&nbsp;&nbsp; Other hobbies include bodybuilding, reading, snowboarding and of course procrastinating (very well). Feel free to contact me by email at <b>mr.rammo@gmail.com</b> if you have any questions/inquiries or would just like to chat :)
						</p>
					</Row>
				</Container>
			</div>
		)
	}
}

export default AboutPage;