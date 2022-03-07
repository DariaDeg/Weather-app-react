import logo from "./logo.svg";
import "./App.css";
import "./Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <div className="App shadow-sm border rounded">
        <h1>Weather Search</h1>
        <Weather />
      </div>
      <p className="Footer">
        Coded by DariaDeg and Open-sourced on{" "}
        <a href="https://github.com/DariaDeg/Weather-app-react">GitHub</a>
      </p>
    </div>
  );
}
