import React from "react";
import { Routes, Route } from "react-router-dom";

import PopularAnimeList from "../Popular/PopularAnimeList";
import SearchAnimeList from "../Searched/SearchAnimeList";
import classes from "./AnimeList.module.css";

export default function AnimeList(props) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PopularAnimeList className={classes["list-header"]} />}
        />
        <Route
          path="search/*"
          element={
            <SearchAnimeList
              className={classes["list-header"]}
              userSearch={props.userSearch}
            />
          }
        />
      </Routes>
      {/* {props.userSearch ? (
        <SearchAnimeList
          className={classes["list-header"]}
          userSearch={props.userSearch}
        />
      ) : (
        <PopularAnimeList className={classes["list-header"]} />
      )} */}
    </div>
  );
}
