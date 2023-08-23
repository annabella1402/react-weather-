import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Caracas" />

        <footer>
          This project was coded by Annabella Rivero and is{" "}
          <a
            href="https://github.com/annabella1402/React-Weather-App.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
