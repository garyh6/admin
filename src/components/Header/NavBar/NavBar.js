import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  const navItems = [
    { name: "about", path: "#" },
    { name: "services", path: "#" },
    { name: "contact", path: "#" }
  ];

  return (
    <>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <FontAwesomeIcon
          icon={faBars}
          aria-hidden="true"
          style={{ color: "#ffffff" }}
        ></FontAwesomeIcon>
      </label>
      <nav>
        <ul>
          {navItems.map(item => (
            <NavItem
              name={item.name}
              path={item.path}
              key={item.name}
            ></NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
