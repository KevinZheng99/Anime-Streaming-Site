import React from "react";
import { useLocation, Link } from "react-router-dom";

import classes from "./Menu.module.css";

export default function Menu(props) {
  const location = useLocation();
  const isDetailPage = !location.pathname.includes("detail");

  return (
    <nav className={`${classes.menu} ${props.isOpen ? classes.open : ""}`}>
      <ul className={classes.links}>
        <li>
          <Link
            to="/recent"
            className={`${classes.link} ${
              location.pathname.startsWith("/recent") && isDetailPage
                ? classes.disabled
                : ""
            }`}
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/popular"
            className={`${classes.link} ${
              location.pathname.startsWith("/popular") && isDetailPage
                ? classes.disabled
                : ""
            }`}
            onClick={props.closeMenu}
          >
            Popular
          </Link>
        </li>
        <li>
          <Link
            to="/upcoming"
            className={`${classes.link} ${
              location.pathname.startsWith("/upcoming") && isDetailPage
                ? classes.disabled
                : ""
            }`}
            onClick={props.closeMenu}
          >
            Upcoming
          </Link>
        </li>
        <li>
          <Link
            to="/manga"
            className={`${classes.link} ${
              location.pathname.startsWith("/manga") && isDetailPage
                ? classes.disabled
                : ""
            }`}
            onClick={props.closeMenu}
          >
            Manga
          </Link>
        </li>
      </ul>
    </nav>
  );
}
