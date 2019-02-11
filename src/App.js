import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "components/Home/Home";
import Register from "components/Register/Register";
import Schedule from "components/Schedule/Schedule";
import Speakers from "components/Speakers/Speakers";
import Venue from "components/Venue/Venue";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/speakers" component={Speakers} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/venue" component={Venue} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
