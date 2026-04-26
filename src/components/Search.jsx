import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search({ onSearch, onCoordsSearch }) {
  const [city, setCity] = useState("");
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    askLocation();
  }, []);

  const askLocation = () => {
    if (!navigator.geolocation) {
      setError("Géolocalisation non supportée.");
      return;
    }

    setLocating(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          await onCoordsSearch(latitude, longitude);
        } catch (err) {
          console.log(err)
          setError("Erreur météo. Vérifiez votre clé API.");
        } finally {
          setLocating(false);
        }
      },
      (err) => {
        setLocating(false);
        if (err.code === 1) {
          setError("Localisation refusée. Cherchez une ville manuellement.");
        } else if (err.code === 2) {
          setError("Position introuvable. Cherchez une ville manuellement.");
        } else if (err.code === 3) {
          setError("Timeout. Cherchez une ville manuellement.");
        }
      },
      {
        timeout: 30000, // ✅ 30 secondes
        enableHighAccuracy: false,
        maximumAge: 300000, // ✅ cache 5 minutes
      },
    );
  };

  const handleSearch = () => {
    if (city.trim() === "") return;
    onSearch(city);
  };

  return (
    <div className="container">
      <div className="search">
        <h3>How's the sky looking today?</h3>
        <div className="search-card">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder={
              locating ? "Detecting your location..." : "Search for a place ..."
            }
            disabled={locating}
          />
          <IoIosSearch className="icon-search" />
          <button onClick={handleSearch} disabled={locating}>
            {locating ? "Locating..." : "Search"}
          </button>
        </div>

        {error && (
          <p
            className="location-error"
            style={{ cursor: "pointer" }}
            onClick={askLocation}
          >
            ⚠️ {error}{" "}
            <span style={{ textDecoration: "underline" }}>Réessayer</span>
          </p>
        )}
      </div>
    </div>
  );
}
