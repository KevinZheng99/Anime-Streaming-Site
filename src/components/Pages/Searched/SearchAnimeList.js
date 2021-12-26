import React, { useState, useEffect } from "react";

import AnimesContainer from "../../UI/AnimesContainer";

export default function SearchAnimeList(props) {
  const [animeList, setAnimeList] = useState([]);
  const { userSearch } = props;

  useEffect(() => {
    async function getRecentAnime() {
      const res = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${userSearch}`
      );
      const data = await res.json();
      console.log(data);
      setAnimeList(data.results);
    }
    getRecentAnime();
  }, [userSearch]);

  return <AnimesContainer filmList={animeList} />;
}
