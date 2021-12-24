import React from "react";

import classes from "./AnimesContainer.module.css";

export default function AnimesContainer(props) {
  return <div className={classes.container}>{props.children}</div>;
}
