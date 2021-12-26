import React, { useState } from "react";

import Header from "./components/Navigation/Header";
import AnimeList from "./components/Pages/AnimeList/AnimeList";

function App() {
  const [userSearch, setUserSearch] = useState("");

  function getUserInput(input) {
    console.log(input);
    setUserSearch(input);
  }

  return (
    <div>
      <Header onUserInput={getUserInput} />
      <AnimeList userSearch={userSearch} />
    </div>
  );
}

export default App;
