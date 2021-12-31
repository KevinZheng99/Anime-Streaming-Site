import React from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import classes from "./Header.module.css";
import logo from "../../images/logo.png";

export default function Header(props) {
  return (
    <div className={classes.header}>
      <Link to="/">
        <img src={logo} alt="Our Logo" />
      </Link>
      <NavLinks />
      <SearchBar onUserInput={props.onUserInput} />
    </div>
  );
}
