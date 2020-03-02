import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { AuthRoute } from "../../routes/routes";
import SideNav from "../SideNav";
import "./Admin.scss";
const Admin = props => {
  const { routes } = props;
  return (
    <BrowserRouter>
      <SideNav></SideNav>
      <div className="admin-wrapper">
        <Switch>
          {routes.map((route, idx) => (
            <AuthRoute key={idx} {...route}></AuthRoute>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Admin;
