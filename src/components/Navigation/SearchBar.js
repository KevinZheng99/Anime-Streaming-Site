import React, { useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import classes from "./SearchBar.module.css";

export default function SearchBar(props) {
  const navigate = useNavigate();
  const searchInput = useRef();

  function getSearchResult(event) {
    event.preventDefault();
    props.onUserInput(searchInput.current.value);

    // // User search has to be length of at least 3
    // if (searchInput.current.value.length < 3) {
    //   window.alert("User search has to be of length 3 and above");
    //   return;
    // }

    // Sets the path with the search query in the URL
    navigate({
      pathname: "search",
      search: `?${createSearchParams({ keyword: searchInput.current.value })}`,
    });

    searchInput.current.value = "";
  }

  return (
    <form className={classes.form} onSubmit={getSearchResult}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
      >
        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
      </svg>
      <input
        ref={searchInput}
        className={classes.search}
        placeholder="Search"
      />
    </form>
  );
}
