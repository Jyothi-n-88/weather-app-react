import { TextField, Button, Alert } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function SearchBox({ setWeatherData }) {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: { city: "" },

    validationSchema: Yup.object({
      city: Yup.string().required("City is required"),
    }),

    onSubmit: async (values) => {
      try {
        setError("");

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${values.city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("City not found. Please check spelling!");
        }

        const data = await response.json();

        const result = {
          city: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          feels_like: data.main.feels_like,
          min: data.main.temp_min,
          max: data.main.temp_max,
          weather: data.weather[0].description,
        };

        setWeatherData(result);
      } catch (err) {
        setError(err.message);
      }
    },
  });

  return (
    <div className="search-box">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Enter City"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />

        <br /><br />

        <Button
            variant="contained"
            className="search-btn"
            type="submit"
            startIcon={<SearchIcon />}>
             Search
        </Button>
      </form>

      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
}

export default SearchBox;