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
								{(project.demo) ? <a href={project.demo}><Button color="info" size="sm">Demo</Button></a> : null}
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
					{this.render_projects()}
				</Container>
			</div>
		)
	}
}

export default ProjectPage;