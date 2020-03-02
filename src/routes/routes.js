import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Admin from "../components/Admin";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Register from "../components/Register";
import Users from "../components/Users";
import { AuthContext } from "../contexts/AuthContext";

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} routes={rest.routes} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    ></Route>
  );
};

export const BaseRoute = route => {
  const { path, protected: protectedRoute, component: Component } = route;

  if (protectedRoute) {
    return (
      <AuthRoute path={path} component={Component} routes={route.routes} />
    );
  }

  return (
    <Route
      path={path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <Component {...props} routes={route.routes} />
      )}
    />
  );
};

export const routes = [
  {
    path: "/",
    component: Home,
    protected: false,
    exact: true
  },
  {
    path: "/register",
    component: Register,
    protected: false,
    exact: true
  },
  {
    path: "/admin",
    component: Admin,
    protected: true,
    exect: false,
    routes: [
      {
        path: "/admin",
        component: Dashboard,
        exact: true
      },
      {
        path: "/admin/users",
        component: Users,
        exact: true
      }
    ]
  }
];
