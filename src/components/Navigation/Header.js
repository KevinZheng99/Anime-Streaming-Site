import React from "react";

import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import classes from "./Header.module.css";
import logo from "../../images/logo.png";

export default function Header(props) {
  return (
    <div className={classes.header}>
      <a href="/">
        <img src={logo} alt="Our Logo" />
      </a>
      <NavLinks />
      <SearchBar onUserInput={props.onUserInput} />
    </div>
  );
}
