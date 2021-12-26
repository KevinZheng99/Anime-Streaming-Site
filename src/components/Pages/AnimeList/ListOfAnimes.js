// import React, { useState, useEffect } from "react";

// import AnimesContainer from "../../UI/AnimesContainer";
// import Card from "../../UI/Card";
// import classes from "./ListOfAnimes.module.css";

// export default function ListOfAnimes() {
//   const [animeList, setAnimeList] = useState([]);

//   useEffect(() => {
//     async function getRecentAnime() {
//       const res = await fetch(
//         `https://api.jikan.moe/v3/top/anime/1/bypopularity`
//       );
//       const data = await res.json();
//       console.log(data);
//       setAnimeList(data.top);
//     }
//     getRecentAnime();
//   }, []);

//   return <AnimesContainer filmList={animeList} />;
// }
