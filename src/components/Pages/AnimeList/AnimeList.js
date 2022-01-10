import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SearchAnimeList from "./SearchAnimeList";
import ContentList from "./ContentList";
import Detail from "../Details/Detail";
import classes from "./AnimeList.module.css";

export default function AnimeList(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/recent" />} />
        <Route
          path="/recent"
          element={<ContentList className={classes["list-header"]} />}
        />
        <Route
          path="popular"
          element={<ContentList className={classes["list-header"]} />}
        />
        <Route
          path="upcoming"
          element={<ContentList className={classes["list-header"]} />}
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
        <Route
          path="manga"
          element={<ContentList className={classes["list-header"]} />}
        />
        <Route path=":tab/detail/:id" element={<Detail />} />
        {/* Info page for the anime you chose */}
      </Routes>
    </div>
  );
}
