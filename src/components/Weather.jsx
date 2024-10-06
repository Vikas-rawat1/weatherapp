import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import InfoBox from "./InfoBox";

function Weather() {
  const [city, setCity] = useState("");
  const [getWeather, setGetWeather] = useState();

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fc694d073c1f046f4ab5e5c37fedcdc4";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      tempMax: jsonResponse.main.temp_max,
      tempMin: jsonResponse.main.temp_min,
      description: jsonResponse.weather[0].description,
      // img: jsonResponse.main.icon,
    };
    console.log(result);
    setGetWeather(result);
  };

  let handleSearchButton = (e) => {
    e.preventDefault();
    getWeatherInfo();
    setCity("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200 p-6">
      <div className="w-full max-w-sm">
        <div className="bg-blue-800 p-5 rounded-3xl shadow-lg">
          <p className="text-blue-200 text-center">
            Get real-time weather updates for your location.
          </p>
        </div>

        {/* Search Section */}
        <div className="mt-6 bg-blue-600 rounded-3xl p-6 shadow-lg">
          <form
            onSubmit={handleSearchButton}
            className="flex flex-col items-center space-y-4"
          >
            <TextField
              id="outlined-basic"
              label="Enter City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-white rounded-md w-full"
            />
            <Button variant="contained" type="submit" className="w-40">
              Get Weather
            </Button>
          </form>
          <InfoBox weatherInfo={getWeather} />
        </div>
      </div>
    </div>
  );
}

export default Weather;
