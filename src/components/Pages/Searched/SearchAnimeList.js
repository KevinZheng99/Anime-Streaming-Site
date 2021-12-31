import React, { useState, useEffect, Fragment } from "react";

import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";

const urlSearch = window.location.search;
const indexOfEqual = urlSearch.indexOf("=");
const keyword = urlSearch.substring(indexOfEqual + 1);

export default function SearchAnimeList(props) {
  const [animeList, setAnimeList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { userSearch } = props;

  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(
          `https://api.jikan.moe/v3/search/anime?q=${
            userSearch ? userSearch : keyword
          }`
        );

        if (!res.ok) throw new Error("No found result for user search.");

        const data = await res.json();
        setAnimeList(data.results);
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
      <div className={props.className}>
        <h2>Search results for "{userSearch ? userSearch : keyword}"</h2>
        <button>Filter</button>
      </div>
      {!isError ? (
        <AnimesContainer filmList={animeList} />
      ) : (
        <ErrorPage errorMessage={errMessage} />
      )}
    </Fragment>
  );
}
