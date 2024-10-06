import React, { useState } from "react";

function Weather() {
  const [forcast, setForcast] = useState();

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fc694d073c1f046f4ab5e5c37fedcdc4";

  console.log(API_KEY)
  return <></>;
}

export default Weather;
