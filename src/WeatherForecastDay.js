import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatheForecastDay(props) {
  return (
        <div className="WeatherForecast-day">{forecast[0].time}</div>
            <WeatherIcon
              code={props.data.weather.icon_url}
              size={30}
            />
            <div className="WeatherTemperatures">
              <span className="temperature-max">
                {" "}
                {forecast[0].temperature.maximum}º
              </span>
              <span className="temperature-min">
                {forecast[0].temperature.minimum}º
              </span>
            </div>
  );
}
