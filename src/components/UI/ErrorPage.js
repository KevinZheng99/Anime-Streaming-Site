import React from "react";

import classes from "./ErrorPage.module.css";

export default function ErrorPage(props) {
  return (
    <div className={classes.error}>
      <h2>{props.errorMessage}</h2>
    </div>
  );
}
