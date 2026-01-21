import { useState } from "react";
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";



const App = () => {
  const [weatherData,setWeatherData]=useState({ temperature: 25, conditions: "Sunny"});
  return (
    <div>
      <WeatherDisplay data={weatherData} />
    </div>
  )
}

export default App
