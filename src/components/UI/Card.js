import React from "react";

import classes from "./Card.module.css";

export default function Card(props) {
  const newClasses = `${classes.card} ${props.className}`;

  return <div className={newClasses}>{props.children}</div>;
}
