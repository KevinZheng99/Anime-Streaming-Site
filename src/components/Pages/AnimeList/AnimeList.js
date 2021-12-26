import React from "react";

import classes from "./AnimeList.module.css";
import ListOfAnimes from "./ListOfAnimes";

export default function AnimeList() {
  return (
    <div>
      <div className={classes["list-header"]}>
        <h2>Anime List</h2>
        <button>Filter</button>
      </div>
      <ListOfAnimes />
    </div>
  );
}
