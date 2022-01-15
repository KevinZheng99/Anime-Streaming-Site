import React, { Fragment, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import ErrorPage from "../../UI/ErrorPage";
import { baseUrl } from "../../../config";
import classes from "./Detail.module.css";
import FilmTrailer from "./FilmTrailer";
import Loading from "../../UI/Loading";

export default function Detail(props) {
  const [animeData, setAnimeData] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const id = useParams();

  // Vars to check if current details should be anime or manga
  let isAnime = false;
  const location = useLocation();
  if (location.pathname.split("/")[1] !== "manga") {
    isAnime = true;
  }

  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(
          `${baseUrl}/${isAnime ? "anime" : "manga"}/${id.id}`
        );

        if (!res.ok) throw new Error("Failed fetch of anime details.");

        const data = await res.json();
        setAnimeData(data.data);
      } catch (error) {
        setIsError(true);
        setErrMessage(error.message);
      }
    }
    getRecentAnime();
  }, [id, isAnime]);

  // If empty return nothing
  if (animeData === "") return <Loading />;

  // Return error page
  if (isError) return <ErrorPage errorMessage={errMessage} />;

  return (
    <div className={classes.container}>
      <h2>
        {animeData.title}{" "}
        <span className={classes["film-type"]}>{animeData.type}</span>
      </h2>

      <div className={classes["main-content"]}>
        <img
          className={classes["film-poster"]}
          src={animeData.images.jpg["large_image_url"]}
          alt={animeData.title}
        />
        <div>
          <div className={classes.synopsis}>
            <strong>Synopsis:</strong> {animeData.synopsis}
          </div>
          <div>
            <strong>Genres:</strong>{" "}
            {animeData.genres.map((genre) => genre.name).join(", ")}
          </div>
        </div>
      </div>
      {isAnime ? <FilmTrailer animeData={animeData} /> : <></>}
    </div>
  );
}
