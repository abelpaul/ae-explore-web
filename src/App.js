import React from "react";
import "./styles.css";
import logo from "./aelogo.png";
import ReactPlayer from "react-player";

export default function App() {
  return (
    <div className="App">
      <img src={logo} className="ae" />
      <h1> Aquifier Exploration </h1>

      <div>
        <ReactPlayer
          style={{
            position: "absolute",
            left: "50%",
            top: "80%",
            transform: "translate(-50%, -50%)"
          }}
          className="video"
          url="https://www.youtube.com/watch?v=ug50zmP9I7s"
        />
      </div>
    </div>
  );
}
