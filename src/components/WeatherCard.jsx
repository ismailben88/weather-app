import React from 'react'

export default function WeatherCard({ weather }) { 
    if (!weather) return null;
    // console.log(weather.snow); 
    const timestamp = weather.dt;
    const date = new Date(timestamp * 1000); 

    // Jours en anglais
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]; 
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const weekday = weekdays[date.getDay()]; 

    const day = date.getDate();
    const month =months[date.getMonth()];
    const year = date.getFullYear();

    // console.log(`${weekday}, ${day}/${month}/${year}`);

    return (
      <div className="container">
        <div className="weather-card">
          <div className="info">
            <h3>
              {weather.name} , {weather.sys.country}
            </h3>
            <p>{`${weekday}, ${month} ${day}, ${year}`}</p>
          </div>
          <p> {Math.ceil(weather.main.temp)}°</p>
        </div>
        <div className="info-detie">
          <div>
            <h6>Feels like</h6>
            <p>{Math.ceil( weather.main.feels_like)} °</p>
          </div>
          <div>
            <h6>Humidity</h6>
            <p>{weather.main.humidity} %</p>
          </div>
          <div>
            <h6>Wind</h6>
            <p>{weather.wind.speed} km/h</p>
          </div>
          <div>
            <h6>Precipitation</h6>
            <p>
              {weather.rain
                ? (weather.rain["1h"] || weather.rain["3h"]) + " mm"
                : "0 mm"}
            </p>
          </div>
        </div>
      </div>
    );
}
