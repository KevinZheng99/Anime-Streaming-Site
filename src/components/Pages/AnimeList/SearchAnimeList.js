import React, { useState, useEffect, Fragment } from "react";

import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";
import Pagination from "../Pagination/Pagination";

import { usePagination } from "../../../hooks/use-pagination";
import { baseUrl } from "../../../config";

const urlSearch = window.location.search;
const indexOfEqual = urlSearch.indexOf("=");
const keyword = urlSearch.substring(indexOfEqual + 1);

export default function SearchAnimeList(props) {
  const [animeList, setAnimeList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  // Pagination vars
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedList = usePagination(currentPage, animeList);

  const { userSearch } = props;

  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(
<<<<<<< HEAD
          `${baseUrl}/anime?q=${
=======
          `https://api.jikan.moe/v4/anime?q=${
>>>>>>> 6317c4a7c3cc33e32c84c0d8826493de8c5bc432
            userSearch ? userSearch : keyword
          }&order_by=popularity&sfw`
        );

        if (!res.ok) throw new Error("No found result for user search.");

        const data = await res.json();
<<<<<<< HEAD
=======
        console.log(data.data);
>>>>>>> 6317c4a7c3cc33e32c84c0d8826493de8c5bc432
        setAnimeList(data.data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        setErrMessage(error.message);
      }
    }
    getRecentAnime();
  }, [userSearch]);

  return (
    <Fragment>
<<<<<<< HEAD
      <h2 className={props.className}>
        Search results for "{userSearch ? userSearch : keyword}"
      </h2>
=======
      <div className={props.className}>
        <h2>Search results for "{userSearch ? userSearch : keyword}"</h2>
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
