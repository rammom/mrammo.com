import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Projects from '../projects.json';
import './ProjectPage.css';
import Header from '../components/Header';

const projects = Projects.projects;

export class ProjectPage extends Component {

	render_projects() {
		let items = [];
		projects.forEach(project => {
			items.push(
				<a href={project.github} style={{ textDecoration: "none" }} key={project.name}>
					<ListGroupItem className="my_list_group_item" key={project.name}>
						{/** Make row and columns */}
						<ListGroupItemHeading>{project.name} </ListGroupItemHeading>
						<ListGroupItemText>
							{project.desc}
						</ListGroupItemText>
						<span style={{fontSize: "0.8em"}}>{project.date}</span>
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