import React from "react";

const NavItem = props => {
  return (
    <li>
      <a href={props.path}>{props.name}</a>
    </li>
  );
};

export default NavItem;
