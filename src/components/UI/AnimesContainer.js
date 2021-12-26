import React from "react";

import Card from "./Card";
import classes from "./AnimesContainer.module.css";

export default function AnimesContainer(props) {
  return (
    <div className={classes.container}>
      {props.filmList.map((anime) => (
        <div
          className={classes["film-container"]}
          key={Math.random().toString(16).slice(2)}
        >
          <Card className={classes["card-container"]}>
            <a className={classes["anime-link"]} href="#">
              <img
                className={classes["anime-img"]}
                src={anime["image_url"]}
                alt={anime.title}
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
            </a>
          </Card>
          <a className={classes["title-link"]} href="#">
            {anime.title}
          </a>
        </div>
      ))}
    </div>
  );
}
