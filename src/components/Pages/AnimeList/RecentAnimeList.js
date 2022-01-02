import React, { useState, useEffect, Fragment } from "react";

import AnimesContainer from "../../UI/AnimesContainer";

export default function UpcomingAnimeList(props) {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function getRecentAnime() {
      const res = await fetch(`https://api.jikan.moe/v3/top/anime/1/airing`);
      const data = await res.json();
      setAnimeList(data.top);
    }
    getRecentAnime();
  }, []);

  return (
    <Fragment>
      <div className={props.className}>
        <h2>Top Airing Anime</h2>
        <button>Filter</button>
      </div>
      <AnimesContainer filmList={animeList} />
    </Fragment>
  );
}
