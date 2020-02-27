import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "../components/Admin"; // TODO make htis route private
import Home from "../components/Home";
import Register from "../components/Register";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);
