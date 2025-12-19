import React, { useState } from 'react'
import { getWeather } from './services/WeatherApi';
import Header from './Header';
import Search from './Search';
import WeatherBackground from './WeatherCard';
import WeatherCard from './WeatherCard';
import { getWeatherday } from './services/weatherDay';
import WeatherDay from './WeatherDay';
import WeatherHour from './WeatherHour';
export default function WeatherApp() { 
    const [weather, setWeather] = useState(null);   
    const [weatherDay, setWeatherDay] = useState(null);  
    const BASE_URL = "https://api.openweathermap.org/data/2.5";
     const search =async (city) => {
        const repence = await getWeather(city ,BASE_URL) 
         setWeather(repence.data); 
         const rep = await getWeatherday(city)  
         setWeatherDay(rep.data.list) 
    
    } 
    return (
        <>
            <Header /> 
        <div className="weather ">
            <Search onSearch={search} /> 
            <WeatherCard weather={weather} /> 
                <WeatherDay weather={weatherDay} />  
          <WeatherHour weather={weatherDay} />       

        </div>
        </>
  )  

}
