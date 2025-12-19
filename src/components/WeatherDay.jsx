import React from 'react'

export default function WeatherDay({ weather }) {  
    if (!weather) return null;
 
    const days = {};
    const regroupeDay = () => {
        weather.forEach(element => { 
            const date = element.dt_txt.split(" ")[0]; 
            if (!days[date]){
                days[date] = {
                  date: date,
                    temp: [],
                  icon : null 
                };
            } 
            days[date].temp.push(element.main.temp);  
            if (element.dt_txt.includes('12:00:00')) {
                days[date].icon=element.weather[0].icon
            }
                if (!days[date].icon) {
                  days[date].icon = element.weather[0].icon;
                }
          
        });
        
    } 
    regroupeDay();

  const getDayName = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short", // Tue, Wed
    });
  };

    return (
      <div className="container">
        <div className="witherr">
          <h3>Daily forcast</h3>

          <div className="weather-days">
            {Object.values(days).map((value, index) => {
              const max = Math.max(...value.temp);
              const min = Math.min(...value.temp);
              return (
                <div className="weather-day" key={index}>
                  <h4>{getDayName(value.date)}</h4>

                  <img
                    src={`https://openweathermap.org/img/wn/${value.icon}@2x.png`}
                    alt="weather icon"
                  />
                  <div className="temp">
                    <p>{Math.ceil(max)}°</p>
                    <p>{Math.ceil(min)}°</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}
