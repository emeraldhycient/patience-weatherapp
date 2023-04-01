import React from "react";
import "./App.css";
import Background from "./components/background";
import sunrain from "./assets/Suncloudrain.svg";
import vec from "./assets/vector.svg";
import temp from "./assets/temp.svg";
import distant from "./assets/distant.svg";
import cloud9 from "./assets/cloud9.svg";
import calendar from "./assets/calendar.svg";

function App() {
  return (
    <Background>
      <div className="mobile">
        <img src={sunrain} alt="" />
        <h1 id="degree">28º</h1>
        <div id="prep">
          <h6>Precipitations</h6>
          <h6>Max.: 31º Min.: 25º</h6>
        </div>
        <div className="reading">
          <div className="read">
            <img src={vec} alt="" />
            <h6>6%</h6>
          </div>
          <div className="read">
            <img src={temp} alt="" />
            <h6>90%</h6>
          </div>
          <div className="read">
            <img src={distant} alt="" />
            <h6>6%</h6>
          </div>
        </div>
        <div className="forecast">
          <div className="Tforecast">
            <h5 id="fores">Today</h5>
            <h6 id="fores">Mar, 9</h6>
          </div>
          <div className="wOne">
            <div id="details">
              <h6>29°C</h6>
              <img src={cloud9} alt="" />
              <h6>15.00</h6>
            </div>
            <div id="details">
              <h6>29°C</h6>
              <img src={cloud9} alt="" />
              <h6>15.00</h6>
            </div>
            <div id="details">
              <h6>29°C</h6>
              <img src={cloud9} alt="" />
              <h6>15.00</h6>
            </div>
            <div id="details">
              <h6>29°C</h6>
              <img src={cloud9} alt="" />
              <h6>15.00</h6>
            </div>
          </div>
        </div>
        <div className="forecast">
          <div className="Tforecast">
            <h5 id="fores">Next Forecast</h5>
            <img src={calendar} alt="" />
          </div>
          <div className="Trmw">
            <div className="Tfore">
              <div id="Tdays">
                <h3>Monday</h3>
                <img src={cloud9} alt="" />
              </div>
              <div id="Tweather">
                <h4>13°C</h4>
                <h4>10°C</h4>
              </div>
            </div>
            <div className="Tfore">
              <div id="Tdays">
                <h3>Tuesday</h3>
                <img src={cloud9} alt="" />
              </div>
              <div id="Tweather">
                <h4>17°C</h4>
                <h4>12°C</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default App;
