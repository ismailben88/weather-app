# 🌤️ Weather App

A modern weather application built with **React.js** and **Axios**, allowing users to check real-time weather conditions for any city in the world.

---

## 📸 Preview

> Displays temperature, humidity, wind speed, and hourly / daily forecasts for any searched city.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Current temperature display (°C / °F toggle)
- 💧 Humidity and wind speed info
- 🌥️ Dynamic weather icons
- 📅 Daily weather forecast
- ⏱️ Hourly weather forecast
- 📱 Fully responsive (mobile-first)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React.js](https://reactjs.org/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Axios](https://axios-http.com/) | HTTP requests to weather API |
| [OpenWeatherMap API](https://openweathermap.org/api) | Weather data source |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling |

---

## 📦 Installation

### Prerequisites

- Node.js >= 18.x
- npm or yarn
- A free [OpenWeatherMap API key](https://openweathermap.org/api)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/weather-app.git

# 2. Navigate into the project folder
cd weather-app

# 3. Install dependencies
npm install
# or
yarn install
```

---

## ⚙️ Configuration

Create a `.env` file at the root of the project:

```env
VITE_API_KEY=your_openweathermap_api_key
VITE_BASE_URL=https://api.openweathermap.org/data/2.5
```

> ⚠️ Never commit your `.env` file to Git. It is already listed in `.gitignore`.

---

## ▶️ Running the App

```bash
# Development mode
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
WEATHER-APP/
├── node_modules/
├── public/
├── src/
│   ├── assets/                     # Images, icons, static files
│   ├── components/
│   │   ├── image/                  # Weather-related images/icons
│   │   ├── services/
│   │   │   ├── WeatherApi.js       # Axios calls to OpenWeatherMap API
│   │   │   └── weatherDay.js       # Helper to process daily weather data
│   │   ├── Header.jsx              # App header / navbar
│   │   ├── Search.jsx              # City search bar component
│   │   ├── WeatherApp.jsx          # Main weather container component
│   │   ├── WeatherCard.jsx         # Current weather info card
│   │   ├── WeatherDay.jsx          # Daily forecast component
│   │   └── WeatherHour.jsx         # Hourly forecast component
│   ├── App.jsx                     # Root application component
│   ├── index.css                   # Global styles
│   └── main.jsx                    # App entry point
├── .env                            # Environment variables (not committed)
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## 🔌 Axios Usage Example

```javascript
// src/components/services/WeatherApi.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY  = import.meta.env.VITE_API_KEY;

export const fetchCurrentWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};
export const fetchForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};
```

```javascript
// src/components/services/weatherDay.js
// Helper to group hourly forecast data into daily summaries
export const groupByDay = (forecastList) => {
  return forecastList.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});
};
```

---

## 🧩 Component Overview

| Component | Description |
|-----------|-------------|
| `App.jsx` | Root component, renders the full app |
| `Header.jsx` | Top navigation bar with app title/logo |
| `Search.jsx` | Input field to search for a city |
| `WeatherApp.jsx` | Fetches data and orchestrates all weather components |
| `WeatherCard.jsx` | Displays current temperature, icon, humidity, wind |
| `WeatherDay.jsx` | Shows a summarized daily forecast |
| `WeatherHour.jsx` | Shows the hourly forecast timeline |
| `WeatherApi.js` | All Axios API call functions |
| `weatherDay.js` | Utility to parse and group forecast data |

---

## 🌐 Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the /dist folder on app.netlify.com
```

> Don't forget to add `VITE_API_KEY` and `VITE_BASE_URL` as environment variables on your deployment platform.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the project
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push the branch: `git push origin feature/my-feature`
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

---

> ⭐ If you found this project helpful, please give it a star on GitHub!