import React, { useEffect, useState } from "react";

import AnimesContainer from "../../UI/AnimesContainer";
import Card from "../../UI/Card";
import classes from "./AnimeList.module.css";

export default function AnimeList() {
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
    <div>
      <div className={classes["list-header"]}>
        <h2>Anime List</h2>
        <button>Filter</button>
      </div>
      <AnimesContainer>
        {animeList.map((anime) => (
          <Card key={Math.random()}>
            <img
              src={anime["image_url"]}
              alt={anime.title}
              height="300px"
              width="200px"
            />
            <p>{anime.title}</p>
          </Card>
        ))}
      </AnimesContainer>
    </div>
  );
}
