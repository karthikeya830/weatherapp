import React from 'react'
import { WEATHER_API_URL , WEATHER_API_KEY } from '../api';
import { useState } from 'react';
import Search from './search/Search';
import CurrentWeather from './current-weather/CurrentWeather';
const Weather = () => {

    const [weather , setWeather] = useState(null);
    const [forecast , setForecast] = useState(null);

    const handleOnChange = (searchData) => {
    const [ lat, lon] = searchData.value.split(",");
    
    const currentWeatherfetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastfetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([ currentWeatherfetch, forecastfetch])
    .then( async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setWeather( {city: searchData.label , ...weatherResponse} );
      setForecast( {city: searchData.label , ...forecastResponse} );
    })
    .catch( (err) => {console.error(err)});
  }

  console.log(weather);
  console.log(forecast)


  return (
    <div>
        <Search onSearchChange={handleOnChange} />
        { weather && < CurrentWeather data={weather} />}
    </div>
  )
}

export default Weather