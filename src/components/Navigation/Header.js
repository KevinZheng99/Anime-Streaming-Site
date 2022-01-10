import React from "react";

import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={classes.header}>
      <NavLinks />
      <SearchBar onUserInput={props.onUserInput} />
    </div>
  );
}
