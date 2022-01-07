import React, { useState, useEffect, Fragment } from "react";

import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";
import Pagination from "../Pagination/Pagination";

import { usePagination } from "../../../hooks/use-pagination";
import { baseUrl } from "../../../config";

export default function UpcomingAnimeList(props) {
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { animeList, setAnimeList } = props;

  // Pagination vars
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedList = usePagination(currentPage, animeList);

  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(
          `${baseUrl}/anime?&status=airing&order_by=rank&sfw`
        );

        if (!res.ok) throw new Error("Failed fetch of top airing anime.");

        const data = await res.json();
        // console.log(data.data);
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
      <h2 className={props.className}>Top Airing Anime</h2>
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
