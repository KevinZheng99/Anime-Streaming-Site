import React, { useState } from "react";

import Header from "./components/Navigation/Header";
import AnimeList from "./components/Pages/AnimeList/AnimeList";
import Menu from "./components/Navigation/Hamburger/Menu";
import classes from "./App.module.css";

function App() {
  const [userSearch, setUserSearch] = useState("");

  function getUserInput(input) {
    setUserSearch(input);
  }

  return (
    <div className={classes.app}>
      <Header onUserInput={getUserInput} />
      <AnimeList userSearch={userSearch} />
      {/* <Menu /> */}
    </div>
  );
}

export default App;
