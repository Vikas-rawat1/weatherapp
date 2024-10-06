import React from "react";

function InfoBox({ weatherInfo }) {
  return (
    <>
      {" "}
      {/* Weather Info Section */}
      {weatherInfo && (
        <div className="mt-8 text-white text-center">
          <h2 className="text-4xl font-bold">{getWeather.city}</h2>
          <div className="text-6xl mt-4">
            {Math.round(getWeather.temp - 273.15)}°C
          </div>
          <p className="text-blue-200 mt-2">
            High: {Math.round(getWeather.tempMax - 273.15)}°C | Low:{" "}
            {Math.round(getWeather.tempMin - 273.15)}°C
          </p>
          <p className="text-blue-300 mt-2">Humidity: {getWeather.humidity}%</p>
        </div>
      )}
    </>
  );
}

export default InfoBox;
