import React, { useState, useEffect, Fragment } from "react";

import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";
import Pagination from "../Pagination/Pagination";

import { usePagination } from "../../../hooks/use-pagination";
import { baseUrl } from "../../../config";

export default function PopularAnimeList(props) {
  const [animeList, setAnimeList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  // Pagination vars
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedList = usePagination(currentPage, animeList);

  // Fetch top anime by popularity
  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(
          `${baseUrl}/top/anime?&order_by=popularity&sfw`
        );

        if (!res.ok) throw new Error("Failed fetch of popular anime.");

        const data = await res.json();
        setAnimeList(data.data);
      } catch (error) {
        setIsError(true);
        setErrMessage(error.message);
      }
    }
    getRecentAnime();
  }, []);

  if (animeList.length === 0) return <></>;

  return (
    <Fragment>
      <h2 className={props.className}>Popular Anime</h2>
      <Pagination
        filmList={animeList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {!isError ? (
        <AnimesContainer filmList={paginatedList} />
      ) : (
        <ErrorPage errorMessage={errMessage} />
      )}
    </Fragment>
  );
}
