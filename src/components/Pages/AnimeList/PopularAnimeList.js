import React, { useState, useEffect, Fragment } from "react";

import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";
import Pagination from "../Pagination/Pagination";

import { usePagination } from "../../../hooks/use-pagination";
import { baseUrl } from "../../../config";

export default function PopularAnimeList(props) {
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { animeList, setAnimeList } = props;

  // Pagination vars
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedList = usePagination(currentPage, animeList);

  // Fetch top anime by popularity
  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(
<<<<<<< HEAD
          `${baseUrl}/top/anime?&order_by=popularity&sfw`
=======
          `https://api.jikan.moe/v4/top/anime?&order_by=popularity&sfw`
>>>>>>> 6317c4a7c3cc33e32c84c0d8826493de8c5bc432
        );

        if (!res.ok) throw new Error("Failed fetch of popular anime.");

        const data = await res.json();
<<<<<<< HEAD
=======
        console.log(data.data);
>>>>>>> 6317c4a7c3cc33e32c84c0d8826493de8c5bc432
        setAnimeList(data.data);
      } catch (error) {
        setIsError(true);
        setErrMessage(error.message);
      }
    }
    getRecentAnime();
  }, [setAnimeList]);

  return (
    <Fragment>
<<<<<<< HEAD
      <h2 className={props.className}>Popular Anime</h2>
=======
      <div className={props.className}>
        <h2>Popular Anime</h2>
        <button>Filter</button>
      </div>
>>>>>>> 6317c4a7c3cc33e32c84c0d8826493de8c5bc432
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
