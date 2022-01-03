import React from "react";
import { Routes, Route } from "react-router-dom";

import RecentAnimeList from "./RecentAnimeList";
import PopularAnimeList from "./PopularAnimeList";
import SearchAnimeList from "./SearchAnimeList";
import UpcomingAnimeList from "./UpcomingAnimeList";
import classes from "./AnimeList.module.css";

export default function AnimeList(props) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<RecentAnimeList className={classes["list-header"]} />}
        />
        <Route
          path="popular"
          element={<PopularAnimeList className={classes["list-header"]} />}
        />
        <Route
          path="upcoming"
          element={<UpcomingAnimeList className={classes["list-header"]} />}
        />
        <Route
          path="search"
          element={
            <SearchAnimeList
              className={classes["list-header"]}
              userSearch={props.userSearch}
            />
          }
        />
      </Routes>
    </div>
  );
}
