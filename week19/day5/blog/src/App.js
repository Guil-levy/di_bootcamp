import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";

function App() {

  const [finalSearch, setFinalSearch] = useState("");

  console.log(finalSearch);
  return (
    <>
      <SearchBar setFinalSearch={setFinalSearch} />
      <WeatherDisplay finalSearch={finalSearch} />
    </>
  );
}

export default App;
