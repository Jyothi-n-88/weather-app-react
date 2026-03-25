import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

function InfoBox({ info }) {

  if (!info) {
    return <h2 className="head">  Search for a city 🌍</h2>;
  }

  let image = "";
  let icon = null;

  if (info.humidity > 80) {
    image =
      "https://images.unsplash.com/photo-1509635022432-0220ac12960b";
    icon = <ThunderstormIcon />;
  } else if (info.temp > 25) {
    image =
      "https://images.unsplash.com/photo-1572246538688-3f326dca3951";
    icon = <WbSunnyIcon />;
  } else {
    image =
      "https://images.unsplash.com/photo-1768236872594-53abf5cd156a";
    icon = <AcUnitIcon />;
  }

  return (
    <Card className="weather-card">
      <CardMedia
        component="img"
        image={image}
        className="weather-img"
      />

      <CardContent className="weather-content">
        <Typography variant="h5">
          {info.city} {icon}
        </Typography>

        <p>🌡 Temp: {info.temp}°C</p>
        <p>💧 Humidity: {info.humidity}%</p>
        <p>🔥 Feels Like: {info.feels_like}°C</p>
        <p>📉 Min: {info.min}°C</p>
        <p>📈 Max: {info.max}°C</p>
        <p>🌥 Condition: {info.weather}</p>
      </CardContent>
    </Card>
  );
}

export default InfoBox;