import { useState } from "react";
import logo from "./images/logo.png";
import background from "./images/background.jpg";
import "./App.css";

const api = {
  key: "d480b58953018721d64aaf9795fcb96a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchClicked = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div className="min-h-screen relative">
      <img
        src={background}
        alt="Background"
        className="w-full h-full absolute object-cover"
      />

      <div className="absolute top-0 left-0 p-4">
        <img src={logo} alt="Logo" className="h-17 w-20" />
      </div>

      <div className="absolute top-0 right-0 p-4">
        <h1 className="text-blue-200 text-2xl font-bold italic mr-5">
          WeatherWhiz
        </h1>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter City"
            className="px-4 py-2 border rounded-lg"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={searchClicked}
          >
            Search
          </button>
        </div>

        <div className="mt-8 text-center">
          {weather.name && (
            <p className="text-2xl font-semibold">{weather.name},{weather.sys.country}</p>
          )}
          {weather.main && (
            <p className="text-4xl font-extrabold mt-2">
              {weather.main.temp}°C
            </p>
          )}
          {weather.main && (
            <p className="text-4xl font-extrabold mt-2">
              {weather.main.humidity}%
            </p>
          )}
          {weather.weather && weather.weather[0] && (
            <p className="text-lg font-bold mt-2">{weather.weather[0].description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
