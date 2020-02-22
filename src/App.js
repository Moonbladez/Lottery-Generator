import React from "react";
import "./styles.css";
import Lottery from "./Lottery/Lottery";

export default function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Lottery" maxBalls={4} maxNum={10} />
    </div>
  );
}
