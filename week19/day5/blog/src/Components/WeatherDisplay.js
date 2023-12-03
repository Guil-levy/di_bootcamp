import React, { useState, useEffect } from "react";
const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

function WeatherDisplay(props) {
  const [savedDatas, setSavedDatas] = useState();

  const getLocalWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.finalSearch}&appid=${apiKey}`
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSavedDatas(data);
      }
    } catch (error) {
      console.log("msg", error);
    }
  };
  useEffect(() => {
    getLocalWeather();
  }, [props.finalSearch]);

  return (
    <div>
      <h1> The weather in {props.finalSearch} is : </h1>
      {savedDatas ? <p>{savedDatas.main.temp} F</p> : <p>No data yet</p>}
    </div>
  );
}

export default WeatherDisplay;
