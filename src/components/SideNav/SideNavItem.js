import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./SideNavItem.scss";

const NavItem = ({ icon, name, path, expanded }) => {
  return (
    <li
      className={`sidenav__item ${expanded ? "sidenav__item--expanded" : ""}`}
    >
      <Link to={path}>
        <FontAwesomeIcon icon={icon} size="lg" fixedWidth />
        <label>{name}</label>
      </Link>
    </li>
  );

  // return (
  //   <li className="sidenav__item">
  //     <Link to={path}>
  //       <FontAwesomeIcon icon={icon} size="lg" fixedWidth />

  //       {expanded ? <label>{name}</label> : null}
  //     </Link>
  //   </li>
  // );
};

export default NavItem;
