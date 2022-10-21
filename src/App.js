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
          <a href="https://tubular-sprite-204a8e.netlify.app/" target="_blank">
            Kelsey Toczek
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kelseytoczek/react-weatherapp-build"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
