import React, { useState } from "react";
import { getWeather, getWeatherByCoords } from "./services/WeatherApi"; // ✅ importer getWeatherByCoords
import Header from "./Header";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import { getWeatherday } from "./services/weatherDay";
import WeatherDay from "./WeatherDay";
import WeatherHour from "./WeatherHour";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [weatherDay, setWeatherDay] = useState(null);
  const BASE_URL = "https://api.openweathermap.org/data/2.5";

  // 🔍 Recherche par nom de ville
  const search = async (city) => {
    const repence = await getWeather(city, BASE_URL);
    setWeather(repence.data);
    const rep = await getWeatherday(city);
    setWeatherDay(rep.data.list);
  };

  // 📍 Recherche par coordonnées GPS (appelée depuis Search)
  const searchByCoords = async (lat, lon) => {
    try {
      const res = await getWeatherByCoords(lat, lon, BASE_URL);
      setWeather(res.data);
      // utiliser le nom de ville retourné pour récupérer les prévisions
      const rep = await getWeatherday(res.data.name);
      setWeatherDay(rep.data.list);
    } catch (err) {
      console.error("❌ Erreur météo par coords:", err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="weather">
        <Search
          onSearch={search}
          onCoordsSearch={searchByCoords} // ✅ nouvelle prop
        />
        <WeatherCard weather={weather} />
        <WeatherDay weather={weatherDay} />
        <WeatherHour weather={weatherDay} />
      </div>
    </>
  );
}
