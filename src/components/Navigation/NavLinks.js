import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavLinks.module.css";

// Switch these links to Routes when components for these links are created
export default function NavLinks() {
  return (
    <ul className={classes.links}>
      <li className={classes.link}>
        <Link to="/">Home</Link>
      </li>
      <li className={classes.link}>
        <Link to="/popular">Popular</Link>
      </li>
      <li className={classes.link}>
        <Link to="/upcoming">Upcoming</Link>
      </li>
      <li className={classes.link}>
        <Link to="/manga">Manga</Link>
      </li>
    </ul>
  );
}
