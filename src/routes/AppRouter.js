import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CalendarPage from "../pages/CalendarPage";
export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CalendarPage} />
          <Route exact path="/auth" component={AuthPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
