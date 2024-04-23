import { useState } from "react";
import "./styles.css";

export default function App() {
  // initial state: no light is on
  const [currLight, setLight] = useState({});

  const clickLight = (newLight) => {
    if (currLight === newLight) {
      setLight(""); // if the clicked light is already on, turn off currLight
    } else {
      setLight(newLight); //if the clicked light is off, turn on light, turn off currLight
    }
  };

  return (
    <div className="App">
      <h1>Accolade Assessment 2024</h1>

      <div id="traffic-light">
        <button
          id="stop"
          className={currLight === "red" ? "lit" : "white"} //when this light is no longer currLight, revert to white (turn of light)
          onClick={() => clickLight("red")}
        />
        <button
          id="caution"
          className={currLight === "yellow" ? "lit" : "white"}
          onClick={() => clickLight("yellow")}
        />
        <button
          id="go"
          className={currLight === "green" ? "lit" : "white"}
          onClick={() => clickLight("green")}
        />
      </div>
    </div>
  );
}
