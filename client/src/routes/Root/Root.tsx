import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Reports from '../Reports';

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/reports" component={Reports} exact />
			</Switch>
		</Router>
	);
};

export default Root;
