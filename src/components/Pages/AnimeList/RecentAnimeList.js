import React, { useState, useEffect, Fragment } from "react";

import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";
import Pagination from "../Pagination/Pagination";

import { usePagination } from "../../../hooks/use-pagination";

export default function UpcomingAnimeList(props) {
  const [animeList, setAnimeList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const paginatedList = usePagination(currentPage, animeList);

  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(`https://api.jikan.moe/v3/top/anime/1/airing`);

        if (!res.ok) throw new Error("Failed fetch of top airing anime.");

        const data = await res.json();
        setAnimeList(data.top);
      } catch (error) {
        setIsError(true);
        setErrMessage(error.message);
      }
    }
    getRecentAnime();
  }, []);

  return (
    <Fragment>
      <div className={props.className}>
        <h2>Top Airing Anime</h2>
        <button>Filter</button>
      </div>
      <Pagination filmList={animeList} setCurrentPage={setCurrentPage} />
      {!isError ? (
        <AnimesContainer filmList={paginatedList} />
      ) : (
        <ErrorPage errorMessage={errMessage} />
      )}
    </Fragment>
  );
}
