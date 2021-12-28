import React, { useState, useEffect, Fragment } from "react";

import AnimesContainer from "../../UI/AnimesContainer";

export default function SearchAnimeList(props) {
  const [animeList, setAnimeList] = useState([]);
  const { userSearch } = props;

  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(
          `https://api.jikan.moe/v3/search/anime?q=${userSearch}`
        );

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        setAnimeList(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getRecentAnime();
  }, [userSearch]);

  return (
    <Fragment>
      <div className={props.className}>
        <h2>Search results for "{userSearch}"</h2>
        <button>Filter</button>
      </div>
      <AnimesContainer filmList={animeList} />
    </Fragment>
  );
}
