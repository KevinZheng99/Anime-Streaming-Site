import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import classes from "./NavLinks.module.css";
import logo from "../../images/logo.png";

// Switch these links to Routes when components for these links are created
export default function NavLinks() {
  const location = useLocation();
  const isDetailPage = !location.pathname.includes("detail");

  return (
    <Fragment>
      <Link
        to="/"
        className={
          location.pathname.startsWith("/recent") && isDetailPage
            ? classes.disabled
            : ""
        }
      >
        <img src={logo} alt="Our Logo" />
      </Link>
      <ul className={classes.links}>
        <li className={classes.link}>
          <Link
            to="/recent"
            className={
              location.pathname.startsWith("/recent") && isDetailPage
                ? classes.disabled
                : ""
            }
          >
            Home
          </Link>
        </li>
        <li className={classes.link}>
          <Link
            to="/popular"
            className={
              location.pathname.startsWith("/popular") && isDetailPage
                ? classes.disabled
                : ""
            }
          >
            Popular
          </Link>
        </li>
        <li className={classes.link}>
          <Link
            to="/upcoming"
            className={
              location.pathname.startsWith("/upcoming") && isDetailPage
                ? classes.disabled
                : ""
            }
          >
            Upcoming
          </Link>
        </li>
        <li className={classes.link}>
          <Link
            to="/manga"
            className={
              location.pathname.startsWith("/manga") && isDetailPage
                ? classes.disabled
                : ""
            }
          >
            Manga
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}
