import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import RecentAnimeList from "./RecentAnimeList";
import PopularAnimeList from "./PopularAnimeList";
import SearchAnimeList from "./SearchAnimeList";
import UpcomingAnimeList from "./UpcomingAnimeList";
import TopMangaList from "./TopMangaList";
import classes from "./AnimeList.module.css";
import Detail from "../Details/Detail";

export default function AnimeList(props) {
  const [animeList, setAnimeList] = useState([]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
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
        <Route path="detail/:id" element={<Detail />} />
        {/* Info page for the anime you chose */}
      </Routes>
    </div>
  );
}
