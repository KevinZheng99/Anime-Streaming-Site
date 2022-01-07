import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorPage from "../../UI/ErrorPage";
import { baseUrl } from "../../../config";
import classes from "./Detail.module.css";

export default function Detail() {
  const [animeData, setAnimeData] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const id = useParams();

  useEffect(() => {
    async function getRecentAnime() {
      try {
        const res = await fetch(`${baseUrl}/anime/${id.id}`);

        if (!res.ok) throw new Error("Failed fetch of anime details.");

        const data = await res.json();
        console.log(data.data);
        setAnimeData(data.data);
      } catch (error) {
        setIsError(true);
        setErrMessage(error.message);
      }
    }
    getRecentAnime();
  }, [id]);

  // If empty return nothing
  if (animeData === "") return <></>;

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

      <div>TRAILER:</div>
      {animeData.trailer["embed_url"] ? (
        <iframe
          className={classes.trailer}
          src={animeData.trailer["embed_url"]}
          title="trailer"
        ></iframe>
      ) : (
        <div>No trailer for this anime yet.</div>
      )}
    </div>
  );
}
