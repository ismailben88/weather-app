import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



export const getWeather = (city,url) => {
  return axios.get(
    `${url}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
};
