import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "../components/Admin"; // TODO make htis route private
import Home from "../components/Home";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact component={Admin} />
    </Switch>
  </BrowserRouter>
);
