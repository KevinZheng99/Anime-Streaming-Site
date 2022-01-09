import React, { Fragment, useState, useEffect } from "react";

import Pagination from "../Pagination/Pagination";
import AnimesContainer from "../../UI/AnimesContainer";
import ErrorPage from "../../UI/ErrorPage";

import { usePagination } from "../../../hooks/use-pagination";
import { baseUrl } from "../../../config";

export default function TopMangaList(props) {
  const [mangaList, setMangaList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  // Pagination vars
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedList = usePagination(currentPage, mangaList);

  // Fetch top anime by popularity
  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(`${baseUrl}/top/manga?&sfw`);

        if (!res.ok) throw new Error("Failed fetch of popular anime.");

        const data = await res.json();
        setMangaList(data.data);
      } catch (error) {
        setIsError(true);
        setErrMessage(error.message);
      }
    }
    getRecentAnime();
  }, []);

  return (
    <Fragment>
      <h2 className={props.className}>Top Manga</h2>
      <Pagination
        filmList={mangaList}
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
