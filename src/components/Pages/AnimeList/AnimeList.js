import React from "react";
import { Routes, Route } from "react-router-dom";

import RecentAnimeList from "../Recent/RecentAnimeList";
import PopularAnimeList from "../Popular/PopularAnimeList";
import SearchAnimeList from "../Searched/SearchAnimeList";
import UpcomingAnimeList from "../Upcoming/UpcomingAnimeList";
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
          path="search/*"
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
