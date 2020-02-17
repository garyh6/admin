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
  let routes = {
    home: {
      name: "Dashboard",
      icon: faHome,
      path: "/admin/dashboard"
    },
    user: {
      name: "Users",
      icon: faUser,
      path: "/admin/users"
    },
    data: {
      name: "Data",
      icon: faChartLine,
      path: "/"
    },
    settings: {
      name: "Settings",
      icon: faCog,
      path: "/"
    }
  };

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
        <NavItem
          name={routes.home.name}
          icon={routes.home.icon}
          path={routes.home.path}
          expanded={menuExpanded}
        />
        <NavItem
          name={routes.user.name}
          icon={routes.user.icon}
          path={routes.user.path}
          expanded={menuExpanded}
        />
        <NavItem
          name={routes.data.name}
          icon={routes.data.icon}
          path={routes.data.path}
          expanded={menuExpanded}
        />
        <NavItem
          name={routes.settings.name}
          icon={routes.settings.icon}
          path={routes.settings.path}
          expanded={menuExpanded}
        />
      </ul>
    </div>
  );
};

export default SideNav;
