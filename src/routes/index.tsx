import { Switch } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import { EventsList } from "../pages/EventsList";
import Home from "../pages/Home";
import { Info } from "../pages/Info";
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
    <Route path="/info" component={Info} isPrivate />
    <Route exact path="/joinUs" component={JoinUsForms} />
    <Route exact path="/map" component={Dashboard} isPrivate/>
    <Route exact path="/events" component={EventsList} />
  </Switch>
);
