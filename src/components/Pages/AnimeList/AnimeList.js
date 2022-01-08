import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RecentAnimeList from "./RecentAnimeList";
import PopularAnimeList from "./PopularAnimeList";
import SearchAnimeList from "./SearchAnimeList";
import UpcomingAnimeList from "./UpcomingAnimeList";
import TopMangaList from "./TopMangaList";
import Detail from "../Details/Detail";
import classes from "./AnimeList.module.css";

export default function AnimeList(props) {
  const [animeList, setAnimeList] = useState([]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/recent" />} />
        <Route
          path="/recent"
          element={
            <RecentAnimeList
              className={classes["list-header"]}
              animeList={animeList}
              setAnimeList={setAnimeList}
            />
          }
        />
        <Route
          path="popular"
          element={
            <PopularAnimeList
              className={classes["list-header"]}
              animeList={animeList}
              setAnimeList={setAnimeList}
            />
          }
        />
        <Route
          path="upcoming"
          element={
            <UpcomingAnimeList
              className={classes["list-header"]}
              animeList={animeList}
              setAnimeList={setAnimeList}
            />
          }
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
          element={<TopMangaList className={classes["list-header"]} />}
        />
        <Route path=":tab/detail/:id" element={<Detail />} />
        {/* Info page for the anime you chose */}
      </Routes>
    </div>
  );
}
