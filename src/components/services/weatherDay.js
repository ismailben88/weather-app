import axios from "axios"
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const getWeatherday = (city) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
}