import React from "react";

import classes from "./NavLinks.module.css";

// Switch these links to Routes when components for these links are created
export default function NavLinks() {
  return (
    <ul className={classes.links}>
      <li className={classes.link}>
        <a href="#">Home</a>
      </li>
      <li className={classes.link}>
        <a href="#">Anime List</a>
      </li>
      <li className={classes.link}>
        <a href="#">New Season</a>
      </li>
      <li className={classes.link}>
        <a href="#">Popular</a>
      </li>
      <li className={classes.link}>
        <a href="#">Seasons</a>
      </li>
    </ul>
  );
}
