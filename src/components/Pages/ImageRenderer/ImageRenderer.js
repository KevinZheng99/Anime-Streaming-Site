import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { useIntersection } from "../../../hooks/use-intersection";
import classes from "./ImageRenderer.module.css";

export default function ImageRenderer(props) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const location = useLocation();

  return (
    <div className="image-container" ref={imgRef}>
      {isInView && (
        <Link
          className={classes["anime-link"]}
          to={`${location.pathname}/detail/${props.animeObj["mal_id"]}`}
        >
          <img
            className={classes["anime-img"]}
            src={props.animeObj.images.jpg["image_url"]}
            alt={props.alt}
          />
          <div className={classes.middle}>
            <h3 className={classes["details-button"]}>DETAILS</h3>
          </div>
        </Link>
      )}
    </div>
  );
}
