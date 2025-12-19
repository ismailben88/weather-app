import React, { useEffect, useState } from "react";

export default function WeatherHour({ weather }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [days, setDays] = useState({});

  // Fonction pour convertir "HH:MM:SS" en format 12h AM/PM
  const formatHour = (hourString) => {
    const [hour, minute] = hourString.split(":");
    const date = new Date();
    date.setHours(parseInt(hour), parseInt(minute));
    return date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
  };

  // Regrouper les données par jour
  useEffect(() => {
    if (!weather) return;

    const grouped = {};
    weather.forEach((element) => {
      const date = element.dt_txt.split(" ")[0];
      const hour = element.dt_txt.split(" ")[1];

      if (!grouped[date]) {
        grouped[date] = {
          date,
          temp: [],
          icon: [],
          hour: [],
        };
      }
      grouped[date].temp.push(element.main.temp);
      grouped[date].icon.push(element.weather[0].icon);
      grouped[date].hour.push(formatHour(hour)); // Conversion en AM/PM
    });

    setDays(grouped);

    // Sélectionner par défaut le premier jour
    const firstDay = Object.keys(grouped)[0];
    setSelectedDay(firstDay);
  }, [weather]);

  if (!weather || Object.keys(days).length === 0) return null;

  const filteredDay = Object.values(days).filter(
    (value) => value.date === selectedDay
  )[0];

  return (
    <div className="container">
      <div className="weatherHour">
        <div className="weatherHour-day">
          <h3>Hourly forecast</h3>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            {Object.keys(days).map((day) => (
              <option key={day} value={day}>
                {new Date(day).toLocaleDateString("en-EN", { weekday: "long" })}
              </option>
            ))}
          </select>
        </div>

        <div className="weatherHour-list">
          {filteredDay &&
            filteredDay.temp.map((t, index) => (
              <div key={index} className="weatherHour-item">
                <div className="item-hour">
                  <img
                    src={`http://openweathermap.org/img/wn/${filteredDay.icon[index]}.png`}
                    alt="weather icon"
                  />
                  <h5>{filteredDay.hour[index]}</h5>
                </div>
                <h6>{Math.ceil(t)}°</h6>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
