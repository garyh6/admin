import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { BaseRoute, routes } from "./routes";

export default () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, idx) => {
        return <BaseRoute key={idx} {...route}></BaseRoute>;
      })}
    </Switch>
  </BrowserRouter>
);
