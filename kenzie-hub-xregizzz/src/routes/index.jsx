import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Routes() {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

export default Routes;
