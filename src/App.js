import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "components/Home/Home";
import Register from "components/Register/Register";
import Schedule from "components/Schedule/Schedule";
import Speakers from "components/Speakers/Speakers";
import Venue from "components/Venue/Venue";
import * as actions from "store/actions";

class App extends Component {
  componentDidMount() {
    this.props.onFetchSpeakers();
  }

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


const mapDispatchToProps = dispatch => {
  return {
    onFetchSpeakers: () => dispatch(actions.fetchSpeakers())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
