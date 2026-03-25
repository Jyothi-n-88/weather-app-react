import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">🌦 Weather App</h1>

      {/* ✅ PASSING PROPS */}
      <SearchBox setWeatherData={setWeatherData} />
      <br></br>
      <InfoBox info={weatherData} />
    </div>
  );
}

export default WeatherApp;