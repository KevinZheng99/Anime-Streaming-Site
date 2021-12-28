import React from "react";

import classes from "./NavLinks.module.css";

// Switch these links to Routes when components for these links are created
export default function NavLinks() {
  return (
    <ul className={classes.links}>
      <li className={classes.link}>
        <a href="/">Home</a>
      </li>
      <li className={classes.link}>
        <a href="/">Popular</a>
      </li>
      <li className={classes.link}>
        <a href="/">Upcoming</a>
      </li>
    </ul>
  );
}
