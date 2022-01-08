import React, { Fragment } from "react";

import classes from "./FilmTrailer.module.css";

export default function FilmTrailer(props) {
  return (
    <Fragment>
      <div>TRAILER:</div>
      {props.animeData.trailer["embed_url"] ? (
        <iframe
          className={classes.trailer}
          src={props.animeData.trailer["embed_url"]}
          title="trailer"
        ></iframe>
      ) : (
        <div>No trailer for this anime yet.</div>
      )}
    </Fragment>
  );
}
