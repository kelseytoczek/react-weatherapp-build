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
          <a href="https://tubular-sprite-204a8e.netlify.app/">Kelsey Toczek</a>{" "}
          and is{" "}
          <a href="https://github.com/kelseytoczek/react-weatherapp-build">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://quiet-basbousa-a2ec1d.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
