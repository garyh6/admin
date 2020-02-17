import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.scss";
import NavBar from "./NavBar/NavBar";
const Header = () => {
  return (
    <header>
      <FontAwesomeIcon
        className="logo"
        icon={faSkullCrossbones}
        aria-hidden="true"
        style={{ color: "#ffffff" }}
      ></FontAwesomeIcon>
      <NavBar></NavBar>
    </header>
  );
};

export default Header;
