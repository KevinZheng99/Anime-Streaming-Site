import React from "react";

import PopularAnimeList from "../Popular/PopularAnimeList";
import SearchAnimeList from "../Searched/SearchAnimeList";
import classes from "./AnimeList.module.css";

export default function AnimeList(props) {
  return (
    <div>
      <div className={classes["list-header"]}>
        <h2>Anime List</h2>
        <button>Filter</button>
      </div>

      {props.userSearch ? (
        <SearchAnimeList userSearch={props.userSearch} />
      ) : (
        <PopularAnimeList />
      )}
    </div>
  );
}
