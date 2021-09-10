import { Route, Switch } from "react-router"
import Home from "../pages/Home"
import { Signup } from "../pages/Signup"

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
		<Route exact path="/" component={Home} />
		<Route path="/login" />
		<Route path="/signup" component={Signup}/>
		<Route exact path="/dashboard" />
		<Route path="/dashboard/badges" />
		<Route path="/dashboard/info" />
		<Route path="/dashboard/map" />
		<Route path="/dashboard/events" />
		<Route />
	</Switch>
)
