import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  // "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
  const API_KEY = "fc694d073c1f046f4ab5e5c37fedcdc4";
  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    // getWeatherData();
    // console.log(API_KEY)

    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      tempMax: jsonResponse.main.temp_max,
      tempMin: jsonResponse.main.temp_min,
    };
    console.log(result);
  };
  // console.log(city);

  let handleSearchButton = (e) => {
    e.preventDefault();
    getWeatherInfo();
    setCity("");
  };

  return (
    <>
      <form action="" onSubmit={handleSearchButton}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </>
  );
}

export default Weather;
