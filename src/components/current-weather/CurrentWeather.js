import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <>
      <div className="main">
        <div className="card">
          <div className="top">
            <div className="city-details">
              <div className="city-name">{data.city}</div>
              <div className="city-desc">{data.weather[0].description}</div>
            </div>
            <div className="image">
            <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
          </div>
          <div className="bottom">
            <div className="temp">{Math.round(data.main.temp)}°C</div>
            <div className="detail">
              <div className="heading">Details</div>
              <div className="params">
                <div className="param">
                  <div className="p11">Feels Like</div>
                  <div className="p12">{Math.round(data.main.feels_like)}°C</div>
                </div>
                <div className="param">
                  <div className="p11">Wind</div>
                  <div className="p12">{data.wind.speed}m/s</div>
                </div>
                <div className="param">
                  <div className="p11">Humidity</div>
                  <div className="p12">{data.main.humidity}%</div>
                </div>
                <div className="param">
                  <div className="p11">Pressure</div>
                  <div className="p12">{data.main.pressure} hPa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CurrentWeather;