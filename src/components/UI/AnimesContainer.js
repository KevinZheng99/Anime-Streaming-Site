import React from "react";
import { Link, useLocation } from "react-router-dom";

import Card from "./Card";
import classes from "./AnimesContainer.module.css";
import ImageRenderer from "../Pages/ImageRenderer/ImageRenderer";

export default function AnimesContainer(props) {
  const location = useLocation();

  return (
    <div className={classes.container}>
      {props.filmList.map((anime) => {
        return (
          <div
            className={classes["film-container"]}
            key={Math.random().toString(16).slice(2)}
          >
            <Card className={classes["card-container"]}>
              <ImageRenderer
                className={classes["anime-img"]}
                animeObj={anime}
                alt={anime.title}
              />
            </Card>
            <Link
              className={classes["title-link"]}
              to={`${location.pathname}/detail/${anime["mal_id"]}`}
            >
              {anime.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
