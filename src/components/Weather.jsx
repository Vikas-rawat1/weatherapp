import React, { useState } from "react";

function Weather() {
  const [forcast, setForcast] = useState();
  // "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fc694d073c1f046f4ab5e5c37fedcdc4";
  let getWeatherData = async () => {
    let respone = await fetch(`${API_URL}?q=${city}`);
    let jsonResponse = await respone.json();
    console.log(jsonResponse)
  };
  // console.log(API_KEY)
  return <></>;
}

export default Weather;
