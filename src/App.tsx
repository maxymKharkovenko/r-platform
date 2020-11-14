import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import "./App.scss";

export const App = (props: RouteComponentProps<any>) => {
  return (
    <div className="App container">
      <AppRoutes />
    </div>
  );
};

export default withRouter(App);
