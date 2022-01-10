import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";

import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";
import Pagination from "../Pagination/Pagination";
import Loading from "../../UI/Loading";

import { usePagination } from "../../../hooks/use-pagination";
import {
  baseUrl,
  pathRecent,
  pathPopular,
  pathUpcoming,
  pathManga,
  defaultPage,
} from "../../../config";

export default function ContentList(props) {
  const [contentList, setContentList] = useState([]);

  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  // Pagination vars
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const paginatedList = usePagination(currentPage, contentList);

  const location = useLocation();
  const curPath = location.pathname.split("/")[1];

  // Fetch top anime by popularity
  useEffect(() => {
    let currentUrl = "";
    switch (curPath) {
      case "recent":
        currentUrl = pathRecent;
        setCurrentPage(defaultPage);
        break;
      case "popular":
        currentUrl = pathPopular;
        setCurrentPage(defaultPage);
        break;
      case "upcoming":
        currentUrl = pathUpcoming;
        setCurrentPage(defaultPage);
        break;
      case "manga":
        currentUrl = pathManga;
        setCurrentPage(defaultPage);
        break;
      default:
        break;
    }

    // Stops the flickering of the images
    setContentList([]);

    async function getRecentAnime() {
      try {
        const res = await fetch(`${baseUrl}${currentUrl}`);

        if (res.status === 429) console.log("OOOPS"); // Too many requests give user error
        if (!res.ok) throw new Error("Failed fetch of popular anime.");

        const data = await res.json();
        setContentList(data.data);
      } catch (error) {
        setIsError(true);
        setErrMessage(error.message);
      }
    }
    getRecentAnime();
  }, [curPath]);

  if (contentList.length === 0) return <Loading />;

  return (
    <Fragment>
      <h2 className={props.className}>Popular Anime</h2>
      <Pagination
        filmList={contentList}
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
