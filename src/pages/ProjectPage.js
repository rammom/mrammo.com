import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col, Badge, Button } from 'reactstrap';
import Projects from '../projects.json';
import './ProjectPage.css';
import Header from '../components/Header';

const projects = Projects.projects;

export class ProjectPage extends Component {

	render_projects() {
		let items = [];
		projects.forEach(project => {
			let badges = [];
			for (let i = 0; i < project.badges.length; ++i) {
				let badge = project.badges[i];
				badges.push(
					<Badge href="#" color={badge.color} style={{marginRight: "0.3em"}} key={i}>{badge.language}</Badge>
				)
			}
			items.push(
				<a href={project.github} style={{ textDecoration: "none", marginBottom: "0.5em" }} key={project.name}>
					<ListGroupItem className="my_list_group_item" key={project.name}>
						{/** Make row and columns */}
						<Row>
							<Col>
								<ListGroupItemHeading>{project.name} </ListGroupItemHeading>
								<ListGroupItemText>
									{project.desc}
								</ListGroupItemText>
								{badges}
								<br />
								<span style={{ fontSize: "0.8em" }}>{project.date}</span><br /><br />
								{(project.demo) ? <a href={project.demo}><Button color="info" size="sm" style={{marginRight: '10px'}}>Demo</Button></a> : null}
								{(project.other) ? <a href={project.other.link}><Button color="warning" size="sm">{project.other.name}</Button></a> : null}
							</Col>
							<Col xl="3">
								<img src={project.img} alt={project.img} height="150em" style={{ float: "right" }} />
							</Col>
						</Row>
					</ListGroupItem>
				</a>
			);
		})
		return (
			<ListGroup>
				{items}
			</ListGroup>
		)
	}

	render() {
		return (
			<div>
				<Header history={this.props.history} />
				<Container>
					<div style={{margin: '5%'}}>
						Here are some of the projects I've worked on, <b>click on any of them to view the github page. </b><br />
						As a side note, I try to improve my skills day by day. That being said, if the code here sucks I'm sorry, I promise I'm working on making myself better.
						I keep these projects up as benchmarks, and for a little bit of nostalgia.
						Enjoy :)
					</div>
					{this.render_projects()}
				</Container>
			</div>
		)
	}
}

export default ProjectPage;