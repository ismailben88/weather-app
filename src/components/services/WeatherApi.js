import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


// 🔍 Météo par nom de ville
export const getWeather = (city, url) => {
  return axios.get(`${url}/weather?q=${city}&units=metric&appid=${API_KEY}`);
};

// 📍 Météo par coordonnées GPS (pour la géolocalisation automatique)
export const getWeatherByCoords = (lat, lon, url) => {
  return axios.get(
    `${url}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
  );
};