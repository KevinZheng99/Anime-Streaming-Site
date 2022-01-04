import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import { animesPerPage } from "../../../config";
import classes from "./Pagination.module.css";

export default function Pagination(props) {
  const navigate = useNavigate();

  const pages = Math.ceil(props.filmList.length / animesPerPage);
  const pageButtons = [];

  // Sets the current page clicked by the user
  function getPage(event) {
    navigate({
      search: `?${createSearchParams({ page: event.target.textContent })}`,
    });
    props.setCurrentPage(Number(event.target.textContent));
  }

  // Creates the list of buttons for pagination
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(
      <li
        key={Math.random()}
        className={`${classes["page-button"]} ${
          props.currentPage === i ? classes.active : ""
        }`}
        onClick={getPage}
      >
        {i}
      </li>
    );
  }

  return <ul className={classes["pagination-container"]}>{pageButtons}</ul>;
}
