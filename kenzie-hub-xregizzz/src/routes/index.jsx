import { Switch, Route } from "react-router-dom";
import DashBoard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useState, useEffect } from "react";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route exact path="/dashboard">
        <DashBoard authenticated={authenticated} />
      </Route>
    </Switch>
  );
}

export default Routes;
