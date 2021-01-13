import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import LoginComponent from "./LoginComponent/LoginComponent";
import GameComponent from "./Game/GameComponent";
interface RoutesState {
  error: Error | null;
}

export default class AppRoutes extends React.Component<{}, RoutesState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      error: null,
    };
  }
  render() {
    const { error } = this.state;

    if (error) {
      console.log(error);
    }

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={"/login"} component={LoginComponent} />
        <Route exact path={"/game"} component={GameComponent} />
      </Switch>
    );
  }
}
