import { Route, Switch } from "react-router"
import App from "../App"

// Import your component here
/* <Route exact path="/" />
<Route path="/login" />
<Route path="/signup" />
<Route exact path="/dashboard" />
<Route path="/dashboard/badges" />
<Route path="/dashboard/info" />
<Route path="/dashboard/map" />
<Route path="/dashboard/events" />
<Route /> */

export const Routes = () => (
	<Switch>
		<Route exact path="/" component={App} />
		<Route path="/login" />
		<Route path="/signup" />
		<Route exact path="/dashboard" />
		<Route path="/dashboard/badges" />
		<Route path="/dashboard/info" />
		<Route path="/dashboard/map" />
		<Route path="/dashboard/events" />
		<Route />
	</Switch>
)
