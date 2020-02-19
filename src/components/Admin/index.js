import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard";
import SideNav from "../SideNav";
import Users from "../Users";
import "./Admin.scss";

const Admin = () => {
  return (
    <BrowserRouter>
      <SideNav></SideNav>
      <div className="admin-wrapper">
        <Switch>
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/admin/users" exact component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Admin;
