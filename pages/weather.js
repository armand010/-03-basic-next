import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return alert("Input City");

    setError("");

    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Fail");
    }
  };

  return (
    <div>
      <h1>Cek Cuaca</h1>
      <input type="text" placeholder="Masukkan kota" value={city} onChange={(e) => setCity(e.target.value)} 
      style={{border: '2px solid #ccc', borderRadius: '4px'}}/>
      <button onClick={getWeather}> search </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>Kota: {weather.city}</h2>
          <h2>Temperatur: {weather.temperature}°C</h2>
        </div>
      )}
    </div>
  );
};

export default Weather;