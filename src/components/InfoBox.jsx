import React from "react";

function InfoBox({ weatherInfo }) {
  return (
    <>
      {/* Weather Info Section */}
      {weatherInfo && (
        <div className="mt-8 text-white text-center">
          <h2 className="text-4xl font-bold">{weatherInfo.city}</h2>
          <div className="text-6xl mt-4">
            {Math.round(weatherInfo.temp - 273.15)}°C
          </div>
          <p className="text-blue-200 mt-2">
            High: {Math.round(weatherInfo.tempMax - 273.15)}°C | Low:{" "}
            {Math.round(weatherInfo.tempMin - 273.15)}°C
          </p>
          <p className="text-blue-300 mt-2">
            Humidity: {weatherInfo.humidity}%
          </p>
        </div>
      )}
    </>
  );
}

export default InfoBox;
