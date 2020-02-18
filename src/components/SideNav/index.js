import {
  faBars,
  faChartLine,
  faCog,
  faHome,
  faTimes,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SideNav.scss";
import NavItem from "./SideNavItem";

const SideNav = () => {
  const routes = [
    {
      name: "Dashboard",
      icon: faHome,
      path: "/admin"
    },
    {
      name: "Users",
      icon: faUser,
      path: "/admin/users"
    },
    {
      name: "Data",
      icon: faChartLine,
      path: "/"
    },
    {
      name: "Settings",
      icon: faCog,
      path: "/"
    }
  ];

  // Expanding Menu Handler
  const [menuExpanded, setMenuExpanded] = useState(false);
  function toggleMenuExpansion() {
    setMenuExpanded(!menuExpanded);
  }

  return (
    <div>
      <ul className="sidenav">
        <li className="sidenav__item" onClick={toggleMenuExpansion}>
          <FontAwesomeIcon
            icon={menuExpanded ? faTimes : faBars}
            size="lg"
            fixedWidth
          />
        </li>
        {routes.map((route, idx) => (
          <NavItem
            key={idx}
            name={route.name}
            icon={route.icon}
            path={route.path}
            expanded={menuExpanded}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
