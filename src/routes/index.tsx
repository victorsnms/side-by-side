import { Switch } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import Home from "../pages/Home";
import { Info } from '../pages/Info'
import { JoinUsForms } from "../pages/JoinUsForms";
import { Route } from "./Routes";

// Import your component here
//<Route exact path="/" />
//<Route path="/login" />
//<Route path="/signup" />
//<Route exact path="/dashboard" />
//<Route path="/dashboard/badges" />
//<Route path="/dashboard/map" />
//<Route path="/dashboard/events" />
//<Route />

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/dashboard/info" component={Info} isPrivate />
    <Route exact path="/joinUs" component={JoinUsForms} />
  </Switch>
);
