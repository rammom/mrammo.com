import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';

export class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={ProjectPage} />
					<Route exact path="/about" component={AboutPage} />

					<Route exact path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes;
