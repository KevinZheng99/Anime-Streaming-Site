import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { useIntersection } from "../../../hooks/use-intersection";
import classes from "./ImageRenderer.module.css";

export default function ImageRenderer(props) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  return (
    <div className="image-container" ref={imgRef}>
      {isInView && (
        <Link className={classes["anime-link"]} to="#">
          <img
            className={classes["anime-img"]}
            src={props.animeObj.images.jpg["image_url"]}
            alt={props.alt}
          />
          <div className={classes.middle}>
            <svg
              fill="#4ecca3"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
}
