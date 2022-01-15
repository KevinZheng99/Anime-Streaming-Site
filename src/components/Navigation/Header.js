import React, { useState } from "react";

import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger/Hamburger";
import Overlay from "../UI/Overlay";

import useWindowWidth from "../../hooks/use-window-width";
import classes from "./Header.module.css";
import { Fragment } from "react/cjs/react.production.min";
import Menu from "./Hamburger/Menu";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const windowWidth = useWindowWidth();

  function onChangeHamburger() {
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <div className={classes.header}>
        {windowWidth <= 768 && (
          <Hamburger isOpen={isOpen} onChangeHamburger={onChangeHamburger} />
        )}
        <NavLinks />
        <SearchBar onUserInput={props.onUserInput} />
      </div>
      <Menu isOpen={isOpen} closeMenu={onChangeHamburger} />
      <Overlay isOpen={isOpen} />
    </Fragment>
  );
}
