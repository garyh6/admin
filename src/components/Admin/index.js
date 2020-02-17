import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard";
import SideNav from "../SideNav";
import Users from "../Users";

const Admin = () => {
  return (
    <div>
      <SideNav></SideNav>
      <Switch>
        <Route path="/admin" exact component={Dashboard} />
        <Route path="/admin/users" exact component={Users} />
      </Switch>
    </div>
  );
};

export default Admin;
