
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from '../containers/App.js'
import Dashboard from './Dashboard.js'
import Message from './Message.js'
import Help from './Help.js'

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/message" component={Message} />
			<Route path="/help" component={Help} />
		</Route>
	</Router>,
	document.getElementById('app')
)