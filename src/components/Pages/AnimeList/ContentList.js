import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";

import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";
import Pagination from "../Pagination/Pagination";
import Loading from "../../UI/Loading";

import { usePagination } from "../../../hooks/use-pagination";
import {
  baseUrl,
  recentObj,
  popularObj,
  upcomingObj,
  mangaObj,
  defaultPage,
} from "../../../config";

export default function ContentList(props) {
  const [contentList, setContentList] = useState([]);
  const [pageTitle, setPageTitle] = useState("");

  // Error vars
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  // Pagination vars
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const paginatedList = usePagination(currentPage, contentList);

  // Navigation vars
  const location = useLocation();
  const curPath = location.pathname.split("/")[1];

  // Fetch top anime by popularity
  useEffect(() => {
    let currentUrl = "";
    switch (curPath) {
      case "recent":
        currentUrl = recentObj.path;
        setCurrentPage(defaultPage);
        setPageTitle(recentObj.title);
        break;
      case "popular":
        currentUrl = popularObj.path;
        setCurrentPage(defaultPage);
        setPageTitle(popularObj.title);
        break;
      case "upcoming":
        currentUrl = upcomingObj.path;
        setCurrentPage(defaultPage);
        setPageTitle(upcomingObj.title);
        break;
      case "manga":
        currentUrl = mangaObj.path;
        setCurrentPage(defaultPage);
        setPageTitle(mangaObj.title);
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
        if (!res.ok) throw new Error("Failed fetch of specified anime list.");

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
      <h2 className={props.className}>{pageTitle}</h2>
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
