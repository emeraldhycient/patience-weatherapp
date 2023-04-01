import React, { useState, useEffect } from "react";
import "./App.css";
import Background from "./components/background";
import sunrain from "./assets/Suncloudrain.svg";
import vec from "./assets/vector.svg";
import temp from "./assets/temp.svg";
import distant from "./assets/distant.svg";
import cloud9 from "./assets/cloud9.svg";
import calendar from "./assets/calendar.svg";

import axios from "axios";

function App() {

  // const [weatherData, setWeatherData] = useState("")
  const [forcastData, setForcastData] = useState("")

  // const getWeather = () => {
  //   axios.get(`http://api.weatherapi.com/v1/current.json?key=434302e15ad1472c9e8120424230104&q=lagos&aqi=no`)
  //     .then((response) => {
  //       setWeatherData(response?.data)
  //     })
  //     .catch((error) => {
  //       console.log(error.response)
  //     })
  // }

  const getForcast= () => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=434302e15ad1472c9e8120424230104&q=lagos&days=7`)
      .then((response) => {
        // console.log(response?.data)
        setForcastData(response.data)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  useEffect(() => {
    // getWeather()
    getForcast()
  }, [])

  return (
    <Background>
      <div className="mobile">
        <img src={`https:${forcastData?.current?.condition?.icon}`} alt="" id="cloud" />
        <h1 id="degree">{forcastData?.current?.temp_c}º</h1>
        <div id="prep">
          <h6>Precipitations</h6>
          <h6>{forcastData?.current?.precip_mm}º</h6>
        </div>
        <div className="reading">
          <div className="read">
            <img src={vec} alt="" />
            <h6>{forcastData?.current?.humidity}%</h6>
          </div>
          <div className="read">
            <img src={temp} alt="" />
            <h6>{forcastData?.current?.temp_c}ºc</h6>
          </div>
          <div className="read">
            <img src={distant} alt="" />
            <h6>{forcastData?.current?.wind_kph}kph</h6>
          </div>
        </div>
       
        <div className="forecast">
          <div className="Tforecast">
            <h5 id="fores">Next Forecast</h5>
            <img src={calendar} alt="" />
          </div>
          <div className="Trmw">
            {
              forcastData?.forecast?.forecastday?.map((item) =>
                <div className="Tfore">
                  <div id="Tdays" className="mx_10">
                    <h3 className="mx_10">{item?.date}</h3>
                    <img src={`https:${item?.day?.condition?.icon}`} className="mx_10" alt="" />
                    <span className="mx_10">{item?.day?.condition?.text}</span>
                  </div>
                  <div id="Tweather">
                    <h4>max: {item?.day?.maxtemp_c}°C</h4>
                    <h4>min: {item?.day?.mintemp_c}°C</h4>
                  </div>
                </div>
              )
           }
            
          </div>
        </div>
      </div>
    </Background>
  );
}

export default App;
