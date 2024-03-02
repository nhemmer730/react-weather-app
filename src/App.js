import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project is created by{" "}
          <a href="https://willowy-nasturtium-57d59d.netlify.app">
            Nicole Hemmer
          </a>{" "}
          is
          <a href="https://github.com/nhemmer730/react-weather-app">
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://willowy-nasturtium-57d59d.netlify.app">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}
