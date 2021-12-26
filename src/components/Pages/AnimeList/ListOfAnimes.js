import React, { useState, useEffect } from "react";

import AnimesContainer from "../../UI/AnimesContainer";
import Card from "../../UI/Card";
import classes from "./ListOfAnimes.module.css";

export default function ListOfAnimes() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function getRecentAnime() {
      const res = await fetch(
        `https://api.jikan.moe/v3/top/anime/1/bypopularity`
      );
      const data = await res.json();
      console.log(data);
      setAnimeList(data.top);
    }
    getRecentAnime();
  }, []);

  return (
    <AnimesContainer>
      {animeList.map((anime) => (
        <div className={classes.container}>
          <Card
            className={classes["card-container"]}
            key={Math.random().toString(16).slice(2)}
          >
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
    </AnimesContainer>
  );
}
